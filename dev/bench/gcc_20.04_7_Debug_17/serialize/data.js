window.BENCHMARK_DATA = {
  "lastUpdate": 1702479547959,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-7 20.04 Debug c++-17": [
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
        "date": 1702397921145,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8644.309826203407,
            "unit": "ns/iter",
            "extra": "iterations: 80784\ncpu: 8644.232768865124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99819.52525017309,
            "unit": "ns/iter",
            "extra": "iterations: 8594\ncpu: 99817.41912962533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192263.4489885557,
            "unit": "ns/iter",
            "extra": "iterations: 4548\ncpu: 192263.06068601584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 286628.8628684902,
            "unit": "ns/iter",
            "extra": "iterations: 3019\ncpu: 286631.2686319974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 373351.15200349427,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 373354.3118466897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 464729.8446705979,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 464733.6904124263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 556776.6407147474,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 556777.281429483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 520206.5870000183,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520203.20000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 594065.771999965,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594071.5000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6763.105636327023,
            "unit": "ns/iter",
            "extra": "iterations: 103241\ncpu: 6762.871339874659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5539.560584464364,
            "unit": "ns/iter",
            "extra": "iterations: 125585\ncpu: 5539.468885615328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5543.41056952361,
            "unit": "ns/iter",
            "extra": "iterations: 126439\ncpu: 5543.392465932188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5571.260314701674,
            "unit": "ns/iter",
            "extra": "iterations: 125452\ncpu: 5571.19615470458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9391.872760193286,
            "unit": "ns/iter",
            "extra": "iterations: 74560\ncpu: 9391.80659871244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50734.892232114726,
            "unit": "ns/iter",
            "extra": "iterations: 16285\ncpu: 50735.34540988642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 216056.5717877775,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 216050.5406084988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 175553.91705822092,
            "unit": "ns/iter",
            "extra": "iterations: 4895\ncpu: 175555.5056179773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 174923.3285191122,
            "unit": "ns/iter",
            "extra": "iterations: 4916\ncpu: 174921.05370219692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 176203.09320986897,
            "unit": "ns/iter",
            "extra": "iterations: 4860\ncpu: 176204.7530864194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 378172.720313186,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 378152.0226185297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3100452.9243421224,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3099828.6184210456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2500743.6010781624,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2500614.5552560696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2498155.6871656924,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2498014.171122991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2524419.4177898224,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2524251.4824797823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1479756.6592356623,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1479756.8471337557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2436848.9973752364,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2436848.031496059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10280300.786407612,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10279989.320388362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5635903.437125844,
            "unit": "ns/iter",
            "extra": "iterations: 167\ncpu: 5635852.095808379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12426704.174418472,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12426450.00000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52014.150666915935,
            "unit": "ns/iter",
            "extra": "iterations: 15969\ncpu: 52013.169265451936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 219461.6279426895,
            "unit": "ns/iter",
            "extra": "iterations: 3908\ncpu: 219460.3633572164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 176688.8898950366,
            "unit": "ns/iter",
            "extra": "iterations: 4859\ncpu: 176681.76579543186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 178239.83858921647,
            "unit": "ns/iter",
            "extra": "iterations: 4820\ncpu: 178241.4937759339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 178023.92147902877,
            "unit": "ns/iter",
            "extra": "iterations: 4814\ncpu: 178019.98338180233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 381599.20131290366,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 381601.96936542675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3109770.0899999836,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3109769.3333333135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2546518.0490463185,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2546492.0980926417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2515383.5378377326,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2515380.5405405425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2544722.9427792584,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2544721.2534059957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1495539.8887096753,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1495539.354838715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2459534.37894735,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2459453.6842105254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10430984.961165017,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10430949.514563074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5933854.655629466,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 5933812.582781432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50331.79090522691,
            "unit": "ns/iter",
            "extra": "iterations: 16471\ncpu: 50331.14564992982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 215979.7057344029,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 215978.8732394357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 173601.7820174562,
            "unit": "ns/iter",
            "extra": "iterations: 4927\ncpu: 173601.58311345722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 176429.61217355705,
            "unit": "ns/iter",
            "extra": "iterations: 4863\ncpu: 176431.05079169178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 178574.9663109419,
            "unit": "ns/iter",
            "extra": "iterations: 4779\ncpu: 178572.79765641363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 376315.65104168095,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 376289.23611111095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3106058.5980065996,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3105995.016611302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2532056.932432477,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2532029.9999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2517732.315363852,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2517732.6145552415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2548329.8337875274,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2548327.7929155305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1491328.4632588346,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1491329.073482425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2463057.514511917,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2463025.065963044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2958.761441490028,
            "unit": "ns/iter",
            "extra": "iterations: 236311\ncpu: 2958.7924387777052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21315.472675765413,
            "unit": "ns/iter",
            "extra": "iterations: 32828\ncpu: 21315.364932374825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16172.904376949082,
            "unit": "ns/iter",
            "extra": "iterations: 43295\ncpu: 16173.054625245366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16163.421847186051,
            "unit": "ns/iter",
            "extra": "iterations: 43255\ncpu: 16163.188070743241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12892.236543781946,
            "unit": "ns/iter",
            "extra": "iterations: 55309\ncpu: 12892.154983818184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86297.7890913551,
            "unit": "ns/iter",
            "extra": "iterations: 8122\ncpu: 86298.52253139525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 199950.7674551045,
            "unit": "ns/iter",
            "extra": "iterations: 3509\ncpu: 199950.41322314178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48461.2989526265,
            "unit": "ns/iter",
            "extra": "iterations: 14417\ncpu: 48460.491086911854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48255.410668691875,
            "unit": "ns/iter",
            "extra": "iterations: 14491\ncpu: 48255.337795873136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48852.029522878525,
            "unit": "ns/iter",
            "extra": "iterations: 14294\ncpu: 48851.81894501168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 97341.46075702847,
            "unit": "ns/iter",
            "extra": "iterations: 7186\ncpu: 97341.23295296347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91691.24895232974,
            "unit": "ns/iter",
            "extra": "iterations: 7636\ncpu: 91689.52331063442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26359.205749378678,
            "unit": "ns/iter",
            "extra": "iterations: 26542\ncpu: 26358.104136840066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 128349.44232181499,
            "unit": "ns/iter",
            "extra": "iterations: 5444\ncpu: 128344.36076414447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 103251.21442265224,
            "unit": "ns/iter",
            "extra": "iterations: 6781\ncpu: 103244.3592390512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 104584.7951627352,
            "unit": "ns/iter",
            "extra": "iterations: 6698\ncpu: 104584.47297700797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 105203.70870284404,
            "unit": "ns/iter",
            "extra": "iterations: 6653\ncpu: 105203.32180970996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 186573.3531449994,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 186567.03091684543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 843805.0638554307,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 843778.6746987824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 706762.7489919479,
            "unit": "ns/iter",
            "extra": "iterations: 992\ncpu: 706734.2741935434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 702803.5120967388,
            "unit": "ns/iter",
            "extra": "iterations: 992\ncpu: 702771.2701612803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 714527.1511746659,
            "unit": "ns/iter",
            "extra": "iterations: 979\ncpu: 714523.4933605683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 451619.63242893794,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 451594.7674418592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 692098.2984189707,
            "unit": "ns/iter",
            "extra": "iterations: 1012\ncpu: 692104.3478260873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27054.475305302003,
            "unit": "ns/iter",
            "extra": "iterations: 25876\ncpu: 27054.432678929985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 129765.933259178,
            "unit": "ns/iter",
            "extra": "iterations: 5394\ncpu: 129758.60215053549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 105194.76091195412,
            "unit": "ns/iter",
            "extra": "iterations: 6667\ncpu: 105186.45567721556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 104842.66531348568,
            "unit": "ns/iter",
            "extra": "iterations: 6651\ncpu: 104838.46038189733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 106569.20024364626,
            "unit": "ns/iter",
            "extra": "iterations: 6567\ncpu: 106564.44342926839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 189736.58739177685,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 189727.94913419866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 843150.3694343872,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 843146.4500601699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 708356.0020304836,
            "unit": "ns/iter",
            "extra": "iterations: 985\ncpu: 708328.0203045667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 704867.9899294912,
            "unit": "ns/iter",
            "extra": "iterations: 993\ncpu: 704850.2517623346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 713663.7275510562,
            "unit": "ns/iter",
            "extra": "iterations: 980\ncpu: 713662.5510204008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 451949.1134154067,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 451946.0142579366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 692992.7549407354,
            "unit": "ns/iter",
            "extra": "iterations: 1012\ncpu: 692990.6126482225 ns\nthreads: 1"
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
        "date": 1702397921145,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8644.309826203407,
            "unit": "ns/iter",
            "extra": "iterations: 80784\ncpu: 8644.232768865124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99819.52525017309,
            "unit": "ns/iter",
            "extra": "iterations: 8594\ncpu: 99817.41912962533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192263.4489885557,
            "unit": "ns/iter",
            "extra": "iterations: 4548\ncpu: 192263.06068601584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 286628.8628684902,
            "unit": "ns/iter",
            "extra": "iterations: 3019\ncpu: 286631.2686319974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 373351.15200349427,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 373354.3118466897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 464729.8446705979,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 464733.6904124263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 556776.6407147474,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 556777.281429483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 520206.5870000183,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520203.20000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 594065.771999965,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594071.5000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6763.105636327023,
            "unit": "ns/iter",
            "extra": "iterations: 103241\ncpu: 6762.871339874659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5539.560584464364,
            "unit": "ns/iter",
            "extra": "iterations: 125585\ncpu: 5539.468885615328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5543.41056952361,
            "unit": "ns/iter",
            "extra": "iterations: 126439\ncpu: 5543.392465932188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5571.260314701674,
            "unit": "ns/iter",
            "extra": "iterations: 125452\ncpu: 5571.19615470458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9391.872760193286,
            "unit": "ns/iter",
            "extra": "iterations: 74560\ncpu: 9391.80659871244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50734.892232114726,
            "unit": "ns/iter",
            "extra": "iterations: 16285\ncpu: 50735.34540988642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 216056.5717877775,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 216050.5406084988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 175553.91705822092,
            "unit": "ns/iter",
            "extra": "iterations: 4895\ncpu: 175555.5056179773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 174923.3285191122,
            "unit": "ns/iter",
            "extra": "iterations: 4916\ncpu: 174921.05370219692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 176203.09320986897,
            "unit": "ns/iter",
            "extra": "iterations: 4860\ncpu: 176204.7530864194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 378172.720313186,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 378152.0226185297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3100452.9243421224,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3099828.6184210456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2500743.6010781624,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2500614.5552560696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2498155.6871656924,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2498014.171122991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2524419.4177898224,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2524251.4824797823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1479756.6592356623,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1479756.8471337557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2436848.9973752364,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2436848.031496059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10280300.786407612,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10279989.320388362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5635903.437125844,
            "unit": "ns/iter",
            "extra": "iterations: 167\ncpu: 5635852.095808379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12426704.174418472,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12426450.00000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52014.150666915935,
            "unit": "ns/iter",
            "extra": "iterations: 15969\ncpu: 52013.169265451936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 219461.6279426895,
            "unit": "ns/iter",
            "extra": "iterations: 3908\ncpu: 219460.3633572164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 176688.8898950366,
            "unit": "ns/iter",
            "extra": "iterations: 4859\ncpu: 176681.76579543186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 178239.83858921647,
            "unit": "ns/iter",
            "extra": "iterations: 4820\ncpu: 178241.4937759339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 178023.92147902877,
            "unit": "ns/iter",
            "extra": "iterations: 4814\ncpu: 178019.98338180233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 381599.20131290366,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 381601.96936542675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3109770.0899999836,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3109769.3333333135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2546518.0490463185,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2546492.0980926417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2515383.5378377326,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2515380.5405405425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2544722.9427792584,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2544721.2534059957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1495539.8887096753,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1495539.354838715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2459534.37894735,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2459453.6842105254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10430984.961165017,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10430949.514563074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5933854.655629466,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 5933812.582781432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50331.79090522691,
            "unit": "ns/iter",
            "extra": "iterations: 16471\ncpu: 50331.14564992982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 215979.7057344029,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 215978.8732394357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 173601.7820174562,
            "unit": "ns/iter",
            "extra": "iterations: 4927\ncpu: 173601.58311345722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 176429.61217355705,
            "unit": "ns/iter",
            "extra": "iterations: 4863\ncpu: 176431.05079169178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 178574.9663109419,
            "unit": "ns/iter",
            "extra": "iterations: 4779\ncpu: 178572.79765641363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 376315.65104168095,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 376289.23611111095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3106058.5980065996,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3105995.016611302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2532056.932432477,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2532029.9999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2517732.315363852,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2517732.6145552415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2548329.8337875274,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2548327.7929155305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1491328.4632588346,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1491329.073482425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2463057.514511917,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2463025.065963044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2958.761441490028,
            "unit": "ns/iter",
            "extra": "iterations: 236311\ncpu: 2958.7924387777052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21315.472675765413,
            "unit": "ns/iter",
            "extra": "iterations: 32828\ncpu: 21315.364932374825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16172.904376949082,
            "unit": "ns/iter",
            "extra": "iterations: 43295\ncpu: 16173.054625245366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16163.421847186051,
            "unit": "ns/iter",
            "extra": "iterations: 43255\ncpu: 16163.188070743241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12892.236543781946,
            "unit": "ns/iter",
            "extra": "iterations: 55309\ncpu: 12892.154983818184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86297.7890913551,
            "unit": "ns/iter",
            "extra": "iterations: 8122\ncpu: 86298.52253139525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 199950.7674551045,
            "unit": "ns/iter",
            "extra": "iterations: 3509\ncpu: 199950.41322314178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48461.2989526265,
            "unit": "ns/iter",
            "extra": "iterations: 14417\ncpu: 48460.491086911854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48255.410668691875,
            "unit": "ns/iter",
            "extra": "iterations: 14491\ncpu: 48255.337795873136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48852.029522878525,
            "unit": "ns/iter",
            "extra": "iterations: 14294\ncpu: 48851.81894501168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 97341.46075702847,
            "unit": "ns/iter",
            "extra": "iterations: 7186\ncpu: 97341.23295296347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91691.24895232974,
            "unit": "ns/iter",
            "extra": "iterations: 7636\ncpu: 91689.52331063442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26359.205749378678,
            "unit": "ns/iter",
            "extra": "iterations: 26542\ncpu: 26358.104136840066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 128349.44232181499,
            "unit": "ns/iter",
            "extra": "iterations: 5444\ncpu: 128344.36076414447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 103251.21442265224,
            "unit": "ns/iter",
            "extra": "iterations: 6781\ncpu: 103244.3592390512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 104584.7951627352,
            "unit": "ns/iter",
            "extra": "iterations: 6698\ncpu: 104584.47297700797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 105203.70870284404,
            "unit": "ns/iter",
            "extra": "iterations: 6653\ncpu: 105203.32180970996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 186573.3531449994,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 186567.03091684543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 843805.0638554307,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 843778.6746987824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 706762.7489919479,
            "unit": "ns/iter",
            "extra": "iterations: 992\ncpu: 706734.2741935434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 702803.5120967388,
            "unit": "ns/iter",
            "extra": "iterations: 992\ncpu: 702771.2701612803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 714527.1511746659,
            "unit": "ns/iter",
            "extra": "iterations: 979\ncpu: 714523.4933605683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 451619.63242893794,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 451594.7674418592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 692098.2984189707,
            "unit": "ns/iter",
            "extra": "iterations: 1012\ncpu: 692104.3478260873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27054.475305302003,
            "unit": "ns/iter",
            "extra": "iterations: 25876\ncpu: 27054.432678929985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 129765.933259178,
            "unit": "ns/iter",
            "extra": "iterations: 5394\ncpu: 129758.60215053549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 105194.76091195412,
            "unit": "ns/iter",
            "extra": "iterations: 6667\ncpu: 105186.45567721556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 104842.66531348568,
            "unit": "ns/iter",
            "extra": "iterations: 6651\ncpu: 104838.46038189733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 106569.20024364626,
            "unit": "ns/iter",
            "extra": "iterations: 6567\ncpu: 106564.44342926839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 189736.58739177685,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 189727.94913419866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 843150.3694343872,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 843146.4500601699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 708356.0020304836,
            "unit": "ns/iter",
            "extra": "iterations: 985\ncpu: 708328.0203045667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 704867.9899294912,
            "unit": "ns/iter",
            "extra": "iterations: 993\ncpu: 704850.2517623346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 713663.7275510562,
            "unit": "ns/iter",
            "extra": "iterations: 980\ncpu: 713662.5510204008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 451949.1134154067,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 451946.0142579366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 692992.7549407354,
            "unit": "ns/iter",
            "extra": "iterations: 1012\ncpu: 692990.6126482225 ns\nthreads: 1"
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409133659,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8269.381027247,
            "unit": "ns/iter",
            "extra": "iterations: 84595\ncpu: 8269.447366865656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95529.86573348352,
            "unit": "ns/iter",
            "extra": "iterations: 8930\ncpu: 95524.0425531915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 184875.71558277347,
            "unit": "ns/iter",
            "extra": "iterations: 4736\ncpu: 184873.6486486486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 275315.0996180846,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 275294.27116486314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 362855.17532741546,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 362840.55766793416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 446316.33213551383,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 446290.19507186825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 533204.7239901989,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 533173.5618115052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 500741.63499999716,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500697.40000000084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 568960.1949999883,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568933.8999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6185.684563758358,
            "unit": "ns/iter",
            "extra": "iterations: 113091\ncpu: 6185.184497440114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5296.532576020677,
            "unit": "ns/iter",
            "extra": "iterations: 132398\ncpu: 5296.315654315022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5192.13221653877,
            "unit": "ns/iter",
            "extra": "iterations: 135089\ncpu: 5191.7950388262525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5190.257707568676,
            "unit": "ns/iter",
            "extra": "iterations: 134835\ncpu: 5190.104943078581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9151.843278593882,
            "unit": "ns/iter",
            "extra": "iterations: 76301\ncpu: 9151.904955374099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 49078.81175145133,
            "unit": "ns/iter",
            "extra": "iterations: 16866\ncpu: 49078.00901221392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 213348.98252523039,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 213344.67142505557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 169417.09984368403,
            "unit": "ns/iter",
            "extra": "iterations: 5118\ncpu: 169370.7698319657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 169807.35440047804,
            "unit": "ns/iter",
            "extra": "iterations: 5079\ncpu: 169802.55955896812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 169259.7569744583,
            "unit": "ns/iter",
            "extra": "iterations: 5090\ncpu: 169257.8388998032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 390913.6606741638,
            "unit": "ns/iter",
            "extra": "iterations: 2225\ncpu: 390899.68539325823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2956829.1867087306,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2956652.2151898732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2448031.125984316,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2447895.800524935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2444639.8267715983,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2444533.3333333344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2440856.7131578256,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2440793.684210525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1499016.8327973925,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1498945.9807073923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2379949.333333378,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2379833.846153846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10265546.752380792,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10264973.333333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5845521.905660465,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 5845199.999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11957724.333333569,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11957352.222222222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 49486.50041870888,
            "unit": "ns/iter",
            "extra": "iterations: 16718\ncpu: 49485.84160784771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 228935.3572753701,
            "unit": "ns/iter",
            "extra": "iterations: 3773\ncpu: 228925.57646435246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 174529.3164070396,
            "unit": "ns/iter",
            "extra": "iterations: 4943\ncpu: 174525.8345134528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 170093.17679558074,
            "unit": "ns/iter",
            "extra": "iterations: 5068\ncpu: 170086.26677190166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 173075.7952629451,
            "unit": "ns/iter",
            "extra": "iterations: 4982\ncpu: 173072.26013649115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 386743.5930697268,
            "unit": "ns/iter",
            "extra": "iterations: 2251\ncpu: 386723.7227898706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2969088.8566880156,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2968973.2484076424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2470963.867021257,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2470857.1808510614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2459836.96042205,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2459744.0633245376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2467206.1733332765,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2467059.466666664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1506185.5275081424,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1506083.656957922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2395370.372750681,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2395358.8688945924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10373263.714285756,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10372774.285714298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5847105.262499852,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 5846844.99999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 48718.16585765019,
            "unit": "ns/iter",
            "extra": "iterations: 17099\ncpu: 48717.99520439811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 211691.10714286406,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 211685.56650246217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 169436.2148483564,
            "unit": "ns/iter",
            "extra": "iterations: 5078\ncpu: 169434.83654982346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 167863.1764361087,
            "unit": "ns/iter",
            "extra": "iterations: 5118\ncpu: 167856.85814771336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 169824.3780367434,
            "unit": "ns/iter",
            "extra": "iterations: 5063\ncpu: 169821.23247086714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 391303.1629464468,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 391284.19642857305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2961553.237341803,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2961462.658227838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2466332.889182192,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2466232.453825846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2460922.411609525,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2460872.823219008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2460004.026385267,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2459902.638522424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1483053.9185303056,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1482993.6102236514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2384047.319693196,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2383950.127877239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3032.5862385360974,
            "unit": "ns/iter",
            "extra": "iterations: 231051\ncpu: 3032.549956503092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20187.068463177613,
            "unit": "ns/iter",
            "extra": "iterations: 34734\ncpu: 20186.169171417023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15522.804742381231,
            "unit": "ns/iter",
            "extra": "iterations: 45125\ncpu: 15522.083102493103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15476.150890449904,
            "unit": "ns/iter",
            "extra": "iterations: 45258\ncpu: 15475.538026426259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12226.314623028426,
            "unit": "ns/iter",
            "extra": "iterations: 57259\ncpu: 12225.99067395523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86551.79162536746,
            "unit": "ns/iter",
            "extra": "iterations: 8072\ncpu: 86545.91179385492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 189308.9240950964,
            "unit": "ns/iter",
            "extra": "iterations: 3702\ncpu: 189304.997298759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47133.74030433461,
            "unit": "ns/iter",
            "extra": "iterations: 14852\ncpu: 47130.925127929135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47000.07776957502,
            "unit": "ns/iter",
            "extra": "iterations: 14903\ncpu: 46998.81231966699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47227.354940979814,
            "unit": "ns/iter",
            "extra": "iterations: 14825\ncpu: 47225.82799325441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 101140.75209114727,
            "unit": "ns/iter",
            "extra": "iterations: 6934\ncpu: 101137.10700893971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 88744.21780302956,
            "unit": "ns/iter",
            "extra": "iterations: 7920\ncpu: 88738.88888888998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 23222.615956951835,
            "unit": "ns/iter",
            "extra": "iterations: 30106\ncpu: 23221.500697535346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 111338.52866444348,
            "unit": "ns/iter",
            "extra": "iterations: 6297\ncpu: 111330.41130697311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 90423.66658070964,
            "unit": "ns/iter",
            "extra": "iterations: 7756\ncpu: 90421.26095925688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 90363.69579831984,
            "unit": "ns/iter",
            "extra": "iterations: 7735\ncpu: 90358.62960568725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 91135.93529872138,
            "unit": "ns/iter",
            "extra": "iterations: 7666\ncpu: 91134.69866944892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 169853.02620722682,
            "unit": "ns/iter",
            "extra": "iterations: 4121\ncpu: 169854.08881339466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 785336.016816175,
            "unit": "ns/iter",
            "extra": "iterations: 892\ncpu: 785325.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 670285.5181644274,
            "unit": "ns/iter",
            "extra": "iterations: 1046\ncpu: 670259.2734225694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 675107.8752417741,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 675064.4100580295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 668692.7293666382,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 668685.4126679492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 433474.08069524635,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 433448.5412787123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 658913.7306238195,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 658894.7069943309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 23402.54427631362,
            "unit": "ns/iter",
            "extra": "iterations: 29937\ncpu: 23402.481878611838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 112811.2975140328,
            "unit": "ns/iter",
            "extra": "iterations: 6235\ncpu: 112809.36647955209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 90868.88578844965,
            "unit": "ns/iter",
            "extra": "iterations: 7705\ncpu: 90868.17650875916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 91278.16119363873,
            "unit": "ns/iter",
            "extra": "iterations: 7674\ncpu: 91273.57310398674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 91600.52814873339,
            "unit": "ns/iter",
            "extra": "iterations: 7638\ncpu: 91597.61717727312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 172027.2152147257,
            "unit": "ns/iter",
            "extra": "iterations: 4075\ncpu: 172021.2269938648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 786672.9709171986,
            "unit": "ns/iter",
            "extra": "iterations: 894\ncpu: 786678.7472035849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 665411.2633079591,
            "unit": "ns/iter",
            "extra": "iterations: 1052\ncpu: 665403.2319391589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 675434.3812741515,
            "unit": "ns/iter",
            "extra": "iterations: 1036\ncpu: 675380.2123552121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 671471.4078694716,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 671444.433781188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 432114.1190623395,
            "unit": "ns/iter",
            "extra": "iterations: 1621\ncpu: 432089.8827884039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 656379.4446528726,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 656370.8255159454 ns\nthreads: 1"
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412520561,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7718.2275062705285,
            "unit": "ns/iter",
            "extra": "iterations: 90503\ncpu: 7717.601626465423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71143.6915715217,
            "unit": "ns/iter",
            "extra": "iterations: 11912\ncpu: 71140.64808596374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135843.67818776454,
            "unit": "ns/iter",
            "extra": "iterations: 6423\ncpu: 135836.6651097618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202237.6583894176,
            "unit": "ns/iter",
            "extra": "iterations: 4309\ncpu: 202225.13344163375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 268304.17826086644,
            "unit": "ns/iter",
            "extra": "iterations: 3220\ncpu: 268281.242236025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 334208.8351858981,
            "unit": "ns/iter",
            "extra": "iterations: 2609\ncpu: 334186.58489842864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 394045.3140009006,
            "unit": "ns/iter",
            "extra": "iterations: 2207\ncpu: 394023.15360217483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 464089.43365181726,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 464055.7855626328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 526305.9570737458,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 526273.6396614272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6003.00470036303,
            "unit": "ns/iter",
            "extra": "iterations: 116374\ncpu: 6002.390568340001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5065.748170177379,
            "unit": "ns/iter",
            "extra": "iterations: 138538\ncpu: 5065.589946440687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5027.6037001883615,
            "unit": "ns/iter",
            "extra": "iterations: 139074\ncpu: 5027.416339502713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5032.8465299998015,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5032.145000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8686.858941405271,
            "unit": "ns/iter",
            "extra": "iterations: 80144\ncpu: 8686.353314034726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35049.420828905626,
            "unit": "ns/iter",
            "extra": "iterations: 23525\ncpu: 35046.88629117964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 141281.08102767437,
            "unit": "ns/iter",
            "extra": "iterations: 6072\ncpu: 141276.66337285883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 114810.79068836595,
            "unit": "ns/iter",
            "extra": "iterations: 7496\ncpu: 114808.19103521864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 114188.35987728323,
            "unit": "ns/iter",
            "extra": "iterations: 7497\ncpu: 114184.20701613968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 113991.37728302456,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 113988.80149313416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 266441.04651870206,
            "unit": "ns/iter",
            "extra": "iterations: 3289\ncpu: 266420.6445728188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2152826.295612058,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2152721.016166284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1780681.0763358816,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1780585.4961832068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1776872.6087786425,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1776803.0534351121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1770529.409867172,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1770455.9772295991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1065605.7571921959,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 1065527.2727272715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1724560.2462962864,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1724444.0740740772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7196109.49000014,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7195659.000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4064724.0130434297,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4064480.4347826103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8949030.305785049,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8948495.867768578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34069.27516223579,
            "unit": "ns/iter",
            "extra": "iterations: 24193\ncpu: 34068.73889141481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 143570.5562980211,
            "unit": "ns/iter",
            "extra": "iterations: 5986\ncpu: 143566.57200133687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 116079.00148447427,
            "unit": "ns/iter",
            "extra": "iterations: 7410\ncpu: 116070.60728744963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115473.25962833171,
            "unit": "ns/iter",
            "extra": "iterations: 7426\ncpu: 115465.10907621866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 114890.85849813538,
            "unit": "ns/iter",
            "extra": "iterations: 7484\ncpu: 114886.13041154541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 267020.46550672123,
            "unit": "ns/iter",
            "extra": "iterations: 3276\ncpu: 267015.84249084204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2168403.044186107,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2168337.906976744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1792236.1149425136,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1792093.6781609207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1792175.429942476,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1792057.1976967428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1789393.4452974948,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1789323.8003838803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1068426.5797933412,
            "unit": "ns/iter",
            "extra": "iterations: 871\ncpu: 1068316.5327210135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1733720.3445065077,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1733649.1620111682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7262151.189999599,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7261585.000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4057877.9649122185,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4057680.7017543633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33271.794220452786,
            "unit": "ns/iter",
            "extra": "iterations: 24604\ncpu: 33268.86278653892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 140126.62473521533,
            "unit": "ns/iter",
            "extra": "iterations: 6137\ncpu: 140121.15039921796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 113631.809706423,
            "unit": "ns/iter",
            "extra": "iterations: 7562\ncpu: 113625.80005289621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 113037.89019246075,
            "unit": "ns/iter",
            "extra": "iterations: 7586\ncpu: 113032.23042446666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 114333.9539096844,
            "unit": "ns/iter",
            "extra": "iterations: 7507\ncpu: 114323.8177700813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 267015.7173583704,
            "unit": "ns/iter",
            "extra": "iterations: 3301\ncpu: 267004.7561345057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2158348.265116242,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2158136.976744183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1787080.8317399328,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1787001.720841308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1781941.3524903804,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1781801.532567051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1781562.7232824075,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1781493.89312977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1072282.0888120371,
            "unit": "ns/iter",
            "extra": "iterations: 867\ncpu: 1072220.9919261802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1730974.040816285,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1730882.1892393364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3021.0147708383993,
            "unit": "ns/iter",
            "extra": "iterations: 231605\ncpu: 3020.9740722350275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15943.266250316487,
            "unit": "ns/iter",
            "extra": "iterations: 43553\ncpu: 15943.168094046416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11499.193829048842,
            "unit": "ns/iter",
            "extra": "iterations: 60801\ncpu: 11498.52634002721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12297.687577999985,
            "unit": "ns/iter",
            "extra": "iterations: 56891\ncpu: 12297.069835299124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10053.266880151328,
            "unit": "ns/iter",
            "extra": "iterations: 69638\ncpu: 10052.161176369204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60868.43345808919,
            "unit": "ns/iter",
            "extra": "iterations: 11489\ncpu: 60865.410392549195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 138685.93357128056,
            "unit": "ns/iter",
            "extra": "iterations: 5043\ncpu: 138685.50465992576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35860.289204135915,
            "unit": "ns/iter",
            "extra": "iterations: 19526\ncpu: 35860.150568472454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35793.68846094904,
            "unit": "ns/iter",
            "extra": "iterations: 19577\ncpu: 35791.071154926605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35833.61054683343,
            "unit": "ns/iter",
            "extra": "iterations: 19494\ncpu: 35831.912383297575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73447.15948863249,
            "unit": "ns/iter",
            "extra": "iterations: 9543\ncpu: 73446.7672639629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64572.07618609206,
            "unit": "ns/iter",
            "extra": "iterations: 10855\ncpu: 64569.55320128954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20657.521920913186,
            "unit": "ns/iter",
            "extra": "iterations: 33963\ncpu: 20656.19056031551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93185.78691184823,
            "unit": "ns/iter",
            "extra": "iterations: 7396\ncpu: 93177.66360194753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75526.68756058106,
            "unit": "ns/iter",
            "extra": "iterations: 9285\ncpu: 75522.95099623073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76169.03165796265,
            "unit": "ns/iter",
            "extra": "iterations: 9192\ncpu: 76164.20800696348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75872.58819700827,
            "unit": "ns/iter",
            "extra": "iterations: 9218\ncpu: 75868.19266652226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 144958.18421053028,
            "unit": "ns/iter",
            "extra": "iterations: 4826\ncpu: 144957.37670949148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 612027.9337979249,
            "unit": "ns/iter",
            "extra": "iterations: 1148\ncpu: 611974.9128919843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 515782.3749999848,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 515760.9467455635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 520720.5018559836,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 520703.1922791382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 517748.75445104885,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 517736.2017804175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 340178.81760701485,
            "unit": "ns/iter",
            "extra": "iterations: 2056\ncpu: 340176.653696501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 505902.6534296136,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 505876.67870035936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20335.92426485503,
            "unit": "ns/iter",
            "extra": "iterations: 34449\ncpu: 20335.33629423192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 95610.39239814738,
            "unit": "ns/iter",
            "extra": "iterations: 7314\ncpu: 95605.34591194992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76801.819048661,
            "unit": "ns/iter",
            "extra": "iterations: 9124\ncpu: 76799.5396755816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77242.99493559358,
            "unit": "ns/iter",
            "extra": "iterations: 9083\ncpu: 77240.9776505565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76998.15226473323,
            "unit": "ns/iter",
            "extra": "iterations: 9096\ncpu: 76994.4920844325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 146059.81922435795,
            "unit": "ns/iter",
            "extra": "iterations: 4796\ncpu: 146053.44036697276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 613211.1963350951,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 613193.7172774863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 515811.6627479759,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 515796.3262307115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 519719.996279792,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 519710.2678571425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 515563.141176505,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 515523.3823529461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 341659.42028279364,
            "unit": "ns/iter",
            "extra": "iterations: 2051\ncpu: 341657.82545099873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 506551.5867828354,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 506512.49092229793 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702415994825,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7811.394797837089,
            "unit": "ns/iter",
            "extra": "iterations: 89309\ncpu: 7811.092946959434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72511.88644096878,
            "unit": "ns/iter",
            "extra": "iterations: 11756\ncpu: 72509.92684586594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 141405.26420184027,
            "unit": "ns/iter",
            "extra": "iterations: 6302\ncpu: 141395.58870199934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 204819.2753036458,
            "unit": "ns/iter",
            "extra": "iterations: 4199\ncpu: 204814.19385567994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 269948.7920978348,
            "unit": "ns/iter",
            "extra": "iterations: 3189\ncpu: 269939.0404515521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 334726.3142523247,
            "unit": "ns/iter",
            "extra": "iterations: 2568\ncpu: 334716.47196261666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 402148.5369344233,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 402131.6251154199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 466217.15080212627,
            "unit": "ns/iter",
            "extra": "iterations: 1870\ncpu: 466187.9144385032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 535947.8040416373,
            "unit": "ns/iter",
            "extra": "iterations: 1633\ncpu: 535936.6809552964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6063.432892364026,
            "unit": "ns/iter",
            "extra": "iterations: 115881\ncpu: 6063.431451230131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5037.8937727620305,
            "unit": "ns/iter",
            "extra": "iterations: 138938\ncpu: 5037.641969799474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5097.38561000006,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5097.114999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5018.112525810831,
            "unit": "ns/iter",
            "extra": "iterations: 139959\ncpu: 5017.95240034581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8721.551229182249,
            "unit": "ns/iter",
            "extra": "iterations: 81721\ncpu: 8721.071695157916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34791.49190993414,
            "unit": "ns/iter",
            "extra": "iterations: 23671\ncpu: 34790.21587596644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 139920.55795324277,
            "unit": "ns/iter",
            "extra": "iterations: 6117\ncpu: 139915.92283799232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 113055.70154577788,
            "unit": "ns/iter",
            "extra": "iterations: 7569\ncpu: 113050.77288941765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 111365.36971191836,
            "unit": "ns/iter",
            "extra": "iterations: 7706\ncpu: 111361.97767973022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 112268.10952630252,
            "unit": "ns/iter",
            "extra": "iterations: 7642\ncpu: 112264.1585972258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 272859.91531755443,
            "unit": "ns/iter",
            "extra": "iterations: 3212\ncpu: 272846.35740971303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2204812.381516525,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2204702.1327014216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1824366.9508841392,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1824309.8231827135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1780342.8160919303,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1780343.6781609193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1805067.9651161963,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1805004.8449612432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1087763.478311849,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 1087719.4607268448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1749083.0811320331,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1749025.2830188633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7323708.079999846,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7323699.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4107557.5242290855,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4107392.5110132205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8850565.45967742,
            "unit": "ns/iter",
            "extra": "iterations: 124\ncpu: 8850168.548387093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34660.356811666985,
            "unit": "ns/iter",
            "extra": "iterations: 23724\ncpu: 34658.864441072314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 145272.3489819982,
            "unit": "ns/iter",
            "extra": "iterations: 5943\ncpu: 145266.4142688877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 115187.29253811516,
            "unit": "ns/iter",
            "extra": "iterations: 7411\ncpu: 115182.06719740928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 113800.49111405715,
            "unit": "ns/iter",
            "extra": "iterations: 7540\ncpu: 113796.79045092866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 114756.36263883732,
            "unit": "ns/iter",
            "extra": "iterations: 7473\ncpu: 114752.95062223959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 276535.0094756812,
            "unit": "ns/iter",
            "extra": "iterations: 3166\ncpu: 276530.5116866711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2243653.6722890986,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2243526.7469879556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1836695.3188976096,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1836694.2913385816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1797137.5308880915,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1797070.2702702733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1810023.340466931,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1810021.984435794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1090429.196951904,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 1090286.6354044534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1759678.226843104,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1759656.8998109628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7395062.209999992,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7394856.999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4051234.469565286,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4051154.7826086893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33559.3885835277,
            "unit": "ns/iter",
            "extra": "iterations: 24561\ncpu: 33557.86816497699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 138564.3243417911,
            "unit": "ns/iter",
            "extra": "iterations: 6191\ncpu: 138557.5028266842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 112058.05489478915,
            "unit": "ns/iter",
            "extra": "iterations: 7651\ncpu: 112053.84917004385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 110861.65574615855,
            "unit": "ns/iter",
            "extra": "iterations: 7753\ncpu: 110861.47297820234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 111529.26611850537,
            "unit": "ns/iter",
            "extra": "iterations: 7662\ncpu: 111527.98225006553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 272726.36673905567,
            "unit": "ns/iter",
            "extra": "iterations: 3223\ncpu: 272716.7545764814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2229330.377990468,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2229236.602870826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1824632.136986302,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1824575.7338551919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1807883.926499065,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1807781.6247582128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1820735.2237353649,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1820659.5330739205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1085477.6869158635,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1085425.2336448617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1767097.0568181716,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1767016.8560605946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3046.3880115764173,
            "unit": "ns/iter",
            "extra": "iterations: 230122\ncpu: 3046.2741502333624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15945.33704716216,
            "unit": "ns/iter",
            "extra": "iterations: 43890\ncpu: 15944.65937571196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11979.462513470027,
            "unit": "ns/iter",
            "extra": "iterations: 58461\ncpu: 11978.96546415554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12322.72949376933,
            "unit": "ns/iter",
            "extra": "iterations: 56812\ncpu: 12322.173132436708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10159.070546405053,
            "unit": "ns/iter",
            "extra": "iterations: 68905\ncpu: 10158.82737101802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62551.62329317053,
            "unit": "ns/iter",
            "extra": "iterations: 11205\ncpu: 62549.094154395425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 143435.63231369518,
            "unit": "ns/iter",
            "extra": "iterations: 4871\ncpu: 143429.60377745968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36343.714404357976,
            "unit": "ns/iter",
            "extra": "iterations: 19265\ncpu: 36342.22683623156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36225.9570387223,
            "unit": "ns/iter",
            "extra": "iterations: 19343\ncpu: 36225.089179547715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36117.07860937882,
            "unit": "ns/iter",
            "extra": "iterations: 19387\ncpu: 36117.083612729984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71753.8297153389,
            "unit": "ns/iter",
            "extra": "iterations: 9766\ncpu: 71750.32766741845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66130.08194090275,
            "unit": "ns/iter",
            "extra": "iterations: 10593\ncpu: 66127.35768904028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20281.66989138201,
            "unit": "ns/iter",
            "extra": "iterations: 34525\ncpu: 20280.50687907331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94432.75919687217,
            "unit": "ns/iter",
            "extra": "iterations: 7421\ncpu: 94427.38175448118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77356.62900043756,
            "unit": "ns/iter",
            "extra": "iterations: 9124\ncpu: 77356.65278386668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75791.8798609641,
            "unit": "ns/iter",
            "extra": "iterations: 9206\ncpu: 75791.15794047252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76459.24215246612,
            "unit": "ns/iter",
            "extra": "iterations: 9143\ncpu: 76456.14131029206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 147348.50832134715,
            "unit": "ns/iter",
            "extra": "iterations: 4867\ncpu: 147340.8670638989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 627825.128571402,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 627784.7321428505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 523123.1129394074,
            "unit": "ns/iter",
            "extra": "iterations: 1337\ncpu: 523117.1278982803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 518326.88091715344,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 518298.2248520717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 521891.5327868729,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 521870.41728762613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 340265.764905494,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 340246.3887542373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 509753.06040756387,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 509728.4570596737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20191.39999999981,
            "unit": "ns/iter",
            "extra": "iterations: 34685\ncpu: 20190.52039786637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 95452.97840349653,
            "unit": "ns/iter",
            "extra": "iterations: 7316\ncpu: 95451.95462001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77238.32636122039,
            "unit": "ns/iter",
            "extra": "iterations: 9036\ncpu: 77238.26914563942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76863.5425461734,
            "unit": "ns/iter",
            "extra": "iterations: 9096\ncpu: 76858.09146877761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77433.07474255185,
            "unit": "ns/iter",
            "extra": "iterations: 9031\ncpu: 77430.0298970204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 144772.5079201784,
            "unit": "ns/iter",
            "extra": "iterations: 4861\ncpu: 144766.77638345913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 624802.5356506417,
            "unit": "ns/iter",
            "extra": "iterations: 1122\ncpu: 624792.9590017899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 522376.39865869575,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 522376.0804769069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 515890.6943423788,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 515857.6047024296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 521767.1898734064,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 521734.1027550283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 344257.39292730275,
            "unit": "ns/iter",
            "extra": "iterations: 2036\ncpu: 344241.50294696057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 509896.3889293473,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 509867.0065549909 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418348916,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7757.928148821268,
            "unit": "ns/iter",
            "extra": "iterations: 90256\ncpu: 7757.567363942563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73553.28712016097,
            "unit": "ns/iter",
            "extra": "iterations: 11584\ncpu: 73550.50069060775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 140282.59139958635,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 140277.79030439685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 207376.28936068554,
            "unit": "ns/iter",
            "extra": "iterations: 4192\ncpu: 207369.1555343512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 274574.4118574675,
            "unit": "ns/iter",
            "extra": "iterations: 3171\ncpu: 274566.98202459805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 339244.9430702839,
            "unit": "ns/iter",
            "extra": "iterations: 2547\ncpu: 339234.04004711454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 406112.900884118,
            "unit": "ns/iter",
            "extra": "iterations: 2149\ncpu: 406094.8813401584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 475420.84494866774,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 475396.43435980537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 538284.4008647125,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 538274.3051266209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6025.749092983838,
            "unit": "ns/iter",
            "extra": "iterations: 117418\ncpu: 6022.690728849068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5044.593927620834,
            "unit": "ns/iter",
            "extra": "iterations: 138990\ncpu: 5044.488812144753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5126.2759777099445,
            "unit": "ns/iter",
            "extra": "iterations: 138359\ncpu: 5126.29174827804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5067.535090378833,
            "unit": "ns/iter",
            "extra": "iterations: 138528\ncpu: 5067.434020559024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8606.084907981396,
            "unit": "ns/iter",
            "extra": "iterations: 81288\ncpu: 8606.133746678483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34816.40274667113,
            "unit": "ns/iter",
            "extra": "iterations: 23665\ncpu: 34815.085569406256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 152306.16985815528,
            "unit": "ns/iter",
            "extra": "iterations: 5640\ncpu: 152305.620567376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 117647.84633310573,
            "unit": "ns/iter",
            "extra": "iterations: 7295\ncpu: 117645.30500342726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 115528.34602960771,
            "unit": "ns/iter",
            "extra": "iterations: 7430\ncpu: 115528.82907133218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 115761.40818524593,
            "unit": "ns/iter",
            "extra": "iterations: 7428\ncpu: 115756.86591276259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 273893.8912500011,
            "unit": "ns/iter",
            "extra": "iterations: 3200\ncpu: 273888.5624999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2216132.8214285243,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2216043.8095238074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1827559.8882352745,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1827553.5294117692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1806340.3786408284,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1806261.1650485462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1821980.335937501,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1821948.4375000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1100439.5285035647,
            "unit": "ns/iter",
            "extra": "iterations: 842\ncpu: 1100400.2375296908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1767092.5920303818,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1767100.3795066397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7367822.0099998275,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7367461.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4202176.554054,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4202032.43243244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9072933.605042282,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 9072346.218487397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35296.50629766027,
            "unit": "ns/iter",
            "extra": "iterations: 23342\ncpu: 35294.653414446184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 147382.68927038615,
            "unit": "ns/iter",
            "extra": "iterations: 5825\ncpu: 147374.86695278948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 119968.94000548944,
            "unit": "ns/iter",
            "extra": "iterations: 7284\ncpu: 119965.29379461847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 117986.4445665623,
            "unit": "ns/iter",
            "extra": "iterations: 7279\ncpu: 117982.62123918209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 118044.08019257174,
            "unit": "ns/iter",
            "extra": "iterations: 7270\ncpu: 118041.91196698806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 276980.49128919834,
            "unit": "ns/iter",
            "extra": "iterations: 3157\ncpu: 276971.8086791262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2226426.0216868124,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2226367.228915666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1836135.688976343,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1836075.590551181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1830763.3913895038,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1830691.1937377695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1839544.3570019174,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1839479.2899408203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1100542.7387173537,
            "unit": "ns/iter",
            "extra": "iterations: 842\ncpu: 1100523.0403800434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1772372.5456273777,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1772313.307984801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7405724.320000218,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7405481.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4113092.1644445257,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4112888.444444454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33655.223254101766,
            "unit": "ns/iter",
            "extra": "iterations: 24443\ncpu: 33654.923700036845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 143481.79029289042,
            "unit": "ns/iter",
            "extra": "iterations: 5975\ncpu: 143482.52719665345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 115044.67588614601,
            "unit": "ns/iter",
            "extra": "iterations: 7448\ncpu: 115040.60150375923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 114324.84209825512,
            "unit": "ns/iter",
            "extra": "iterations: 7511\ncpu: 114319.99733723867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 115559.52239611448,
            "unit": "ns/iter",
            "extra": "iterations: 7412\ncpu: 115556.6378845117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 273335.9729140682,
            "unit": "ns/iter",
            "extra": "iterations: 3212\ncpu: 273331.1021170622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2219300.2880952475,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2219260.476190482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1823352.1252446244,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1823282.9745596861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1816280.9902533859,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1816256.5302144254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1821996.175438597,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1821990.6432748537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1091177.6838407654,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 1091155.2693208433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1764522.2277039432,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1764501.518026563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3050.6135323704125,
            "unit": "ns/iter",
            "extra": "iterations: 229036\ncpu: 3050.630905185192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15964.954418542027,
            "unit": "ns/iter",
            "extra": "iterations: 44053\ncpu: 15964.663019544721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12819.550568576351,
            "unit": "ns/iter",
            "extra": "iterations: 54698\ncpu: 12819.50162711614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12504.607994427482,
            "unit": "ns/iter",
            "extra": "iterations: 55989\ncpu: 12504.300844808713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10229.523005215922,
            "unit": "ns/iter",
            "extra": "iterations: 68441\ncpu: 10229.127277509013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62261.710407238446,
            "unit": "ns/iter",
            "extra": "iterations: 11271\ncpu: 62260.668973471824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 144009.98192646442,
            "unit": "ns/iter",
            "extra": "iterations: 4869\ncpu: 144002.0332717191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36503.526315792005,
            "unit": "ns/iter",
            "extra": "iterations: 19190\ncpu: 36501.52162584674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36695.47796006174,
            "unit": "ns/iter",
            "extra": "iterations: 19079\ncpu: 36694.564704648954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36747.7020249706,
            "unit": "ns/iter",
            "extra": "iterations: 19062\ncpu: 36746.81565418101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 78043.70106221239,
            "unit": "ns/iter",
            "extra": "iterations: 9226\ncpu: 78038.03381747246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63125.58352898909,
            "unit": "ns/iter",
            "extra": "iterations: 11074\ncpu: 63122.93660827177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21092.990496304028,
            "unit": "ns/iter",
            "extra": "iterations: 33145\ncpu: 21091.860009050764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 99781.04597216519,
            "unit": "ns/iter",
            "extra": "iterations: 7113\ncpu: 99774.83480950282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 79741.29491563789,
            "unit": "ns/iter",
            "extra": "iterations: 8772\ncpu: 79741.80346557147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79734.83553832141,
            "unit": "ns/iter",
            "extra": "iterations: 8768\ncpu: 79730.74817518247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 79903.5093196105,
            "unit": "ns/iter",
            "extra": "iterations: 8745\ncpu: 79899.70268725067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 148987.4297274294,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 148984.9446337313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 632084.7653429674,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 632072.4729241781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 532204.8906605829,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 532207.5170842827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 534040.1754385771,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 534032.6468344693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 534123.1011494403,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 534119.3869731736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 350158.5157578759,
            "unit": "ns/iter",
            "extra": "iterations: 1999\ncpu: 350156.52826412633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 519513.99479939416,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 519516.2704309115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21203.111121221074,
            "unit": "ns/iter",
            "extra": "iterations: 32973\ncpu: 21202.753768234714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 100374.19423105179,
            "unit": "ns/iter",
            "extra": "iterations: 6899\ncpu: 100370.51746629877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 81171.44753946099,
            "unit": "ns/iter",
            "extra": "iterations: 8616\ncpu: 81170.97260909918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81025.93472977917,
            "unit": "ns/iter",
            "extra": "iterations: 8641\ncpu: 81024.91609767351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81467.96168180619,
            "unit": "ns/iter",
            "extra": "iterations: 8586\ncpu: 81467.57512229223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 149315.36632391578,
            "unit": "ns/iter",
            "extra": "iterations: 4668\ncpu: 149315.9811482432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 633555.5936651649,
            "unit": "ns/iter",
            "extra": "iterations: 1105\ncpu: 633541.2669683334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 532257.3467680599,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 532253.840304186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 531834.5761035008,
            "unit": "ns/iter",
            "extra": "iterations: 1314\ncpu: 531821.765601215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 534491.0007627917,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 534488.1006864964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 349442.4364364536,
            "unit": "ns/iter",
            "extra": "iterations: 1998\ncpu: 349440.6906906914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 520913.23157114105,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 520880.4169769163 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420964770,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7719.647583899147,
            "unit": "ns/iter",
            "extra": "iterations: 89959\ncpu: 7719.27211285141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71983.32537136968,
            "unit": "ns/iter",
            "extra": "iterations: 11848\ncpu: 71977.90344361917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137447.782273296,
            "unit": "ns/iter",
            "extra": "iterations: 6352\ncpu: 137439.78274559195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202987.8144785924,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 202980.49348230904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 268644.4742750149,
            "unit": "ns/iter",
            "extra": "iterations: 3207\ncpu: 268637.41814780177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 331329.74284623866,
            "unit": "ns/iter",
            "extra": "iterations: 2621\ncpu: 331310.26325829845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 413744.8756830705,
            "unit": "ns/iter",
            "extra": "iterations: 2196\ncpu: 413731.14754098334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 460266.7949393711,
            "unit": "ns/iter",
            "extra": "iterations: 1897\ncpu: 460247.23247232486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 525588.5818291178,
            "unit": "ns/iter",
            "extra": "iterations: 1662\ncpu: 525554.9338146808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5779.046923293271,
            "unit": "ns/iter",
            "extra": "iterations: 121006\ncpu: 5778.782870270897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4921.333298298178,
            "unit": "ns/iter",
            "extra": "iterations: 142713\ncpu: 4921.12421433226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4902.216736437104,
            "unit": "ns/iter",
            "extra": "iterations: 142611\ncpu: 4902.198988857804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4909.495088835509,
            "unit": "ns/iter",
            "extra": "iterations: 142736\ncpu: 4909.338919403653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8227.182463617904,
            "unit": "ns/iter",
            "extra": "iterations: 84932\ncpu: 8227.1558423209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35450.95386737975,
            "unit": "ns/iter",
            "extra": "iterations: 23194\ncpu: 35449.29723204282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 140975.70675209613,
            "unit": "ns/iter",
            "extra": "iterations: 6087\ncpu: 140971.74305897852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 114949.72012961058,
            "unit": "ns/iter",
            "extra": "iterations: 7407\ncpu: 114946.64506547847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 118449.59483710666,
            "unit": "ns/iter",
            "extra": "iterations: 7244\ncpu: 118449.18553285435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 116407.85860237462,
            "unit": "ns/iter",
            "extra": "iterations: 7341\ncpu: 116406.47050810502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 268192.55681469024,
            "unit": "ns/iter",
            "extra": "iterations: 3265\ncpu: 268186.24808575807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2127011.1415525116,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 2126921.9178082184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1776009.87452475,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1775932.699619777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1756629.7367425268,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1756569.31818182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1765971.9278937564,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1765890.1328273232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1066817.4833525033,
            "unit": "ns/iter",
            "extra": "iterations: 871\ncpu: 1066788.8633754305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1712577.6420664268,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1712514.2066420678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7176239.980000218,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7175991.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4072992.6913044164,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4072787.826086957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8930121.762295013,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 8929757.37704919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34767.17425365174,
            "unit": "ns/iter",
            "extra": "iterations: 23615\ncpu: 34765.19161549857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 153313.84076319847,
            "unit": "ns/iter",
            "extra": "iterations: 5608\ncpu: 153308.23823109848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 120890.66022839438,
            "unit": "ns/iter",
            "extra": "iterations: 7093\ncpu: 120884.40716199091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 119616.98938250863,
            "unit": "ns/iter",
            "extra": "iterations: 7158\ncpu: 119614.09611623397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 119432.79012517755,
            "unit": "ns/iter",
            "extra": "iterations: 7190\ncpu: 119428.62308762205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 273230.4912663751,
            "unit": "ns/iter",
            "extra": "iterations: 3206\ncpu: 273222.4890829707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2154717.6041666623,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2154622.2222222295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1784534.8180076345,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1784485.249042147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1769141.1574952307,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1769118.2163187899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1788569.6211538315,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1788505.3846153773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1070634.9701149259,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 1070566.0919540243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1725525.1441774596,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1725426.8022181117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7239142.550000111,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7238869.000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4023569.2974137347,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4023381.8965517334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35345.40292292927,
            "unit": "ns/iter",
            "extra": "iterations: 24017\ncpu: 35344.381063413166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 141847.6835255306,
            "unit": "ns/iter",
            "extra": "iterations: 6070\ncpu: 141842.42174629378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 113824.35735060526,
            "unit": "ns/iter",
            "extra": "iterations: 7564\ncpu: 113819.80433632941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 114258.52946654137,
            "unit": "ns/iter",
            "extra": "iterations: 7517\ncpu: 114253.18611148071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 114618.66457386686,
            "unit": "ns/iter",
            "extra": "iterations: 7486\ncpu: 114615.42880042731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 269895.2872928145,
            "unit": "ns/iter",
            "extra": "iterations: 3258\ncpu: 269882.35113566555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2142411.381609283,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2142350.5747126574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1781027.1183205396,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1780944.8473282408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1776534.9886148633,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1776485.9582542728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1783165.2777777659,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1783095.2107279657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1060872.1049030481,
            "unit": "ns/iter",
            "extra": "iterations: 877\ncpu: 1060843.7856328394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1722814.9095940117,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1722743.726937267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3102.635881338559,
            "unit": "ns/iter",
            "extra": "iterations: 226190\ncpu: 3102.622573942246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16190.785064889862,
            "unit": "ns/iter",
            "extra": "iterations: 43227\ncpu: 16190.040946630677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12098.085904488587,
            "unit": "ns/iter",
            "extra": "iterations: 57983\ncpu: 12097.488919165966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12923.609598933646,
            "unit": "ns/iter",
            "extra": "iterations: 54006\ncpu: 12922.897455838189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10203.754891818688,
            "unit": "ns/iter",
            "extra": "iterations: 68635\ncpu: 10203.425366066844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 61350.40286889204,
            "unit": "ns/iter",
            "extra": "iterations: 11433\ncpu: 61350.17930551864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 131664.6368589107,
            "unit": "ns/iter",
            "extra": "iterations: 5323\ncpu: 131662.50234829995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35735.499489641814,
            "unit": "ns/iter",
            "extra": "iterations: 19594\ncpu: 35734.96478513808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35779.34556949202,
            "unit": "ns/iter",
            "extra": "iterations: 19614\ncpu: 35778.80595493054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35748.476197757744,
            "unit": "ns/iter",
            "extra": "iterations: 19620\ncpu: 35747.30886850109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73778.53885846777,
            "unit": "ns/iter",
            "extra": "iterations: 9496\ncpu: 73777.58003369755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64691.14410762135,
            "unit": "ns/iter",
            "extra": "iterations: 10853\ncpu: 64688.99843361373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20080.64019374607,
            "unit": "ns/iter",
            "extra": "iterations: 34891\ncpu: 20079.22100255081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93387.03904264762,
            "unit": "ns/iter",
            "extra": "iterations: 7479\ncpu: 93383.08597406054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75209.26477048328,
            "unit": "ns/iter",
            "extra": "iterations: 9106\ncpu: 75205.08455963036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74641.95574085873,
            "unit": "ns/iter",
            "extra": "iterations: 9354\ncpu: 74640.8809065647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78716.30306370086,
            "unit": "ns/iter",
            "extra": "iterations: 9074\ncpu: 78715.97972228337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 139541.41731497901,
            "unit": "ns/iter",
            "extra": "iterations: 5013\ncpu: 139533.17374825574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 606498.0693240756,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 606477.7296360504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 513492.2927365944,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 513474.8349229658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 512623.0329187853,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 512608.85149963613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 512934.8734455223,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 512917.5566934916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 337942.4215354834,
            "unit": "ns/iter",
            "extra": "iterations: 2071\ncpu: 337919.3143408956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 501325.53600002435,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501309.8000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20042.7582354963,
            "unit": "ns/iter",
            "extra": "iterations: 35092\ncpu: 20042.08651544524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93267.67420814579,
            "unit": "ns/iter",
            "extra": "iterations: 7514\ncpu: 93266.03673143445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75981.90594113307,
            "unit": "ns/iter",
            "extra": "iterations: 9207\ncpu: 75980.89497121703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76203.25611887827,
            "unit": "ns/iter",
            "extra": "iterations: 9152\ncpu: 76198.09877622432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75917.2476325226,
            "unit": "ns/iter",
            "extra": "iterations: 9187\ncpu: 75914.70556220821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 142268.37023519594,
            "unit": "ns/iter",
            "extra": "iterations: 4932\ncpu: 142263.66585563796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 606569.1184097005,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 606561.6248919579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 510923.34266263474,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 510921.4069591481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 512438.5065982339,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 512409.3841642265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 513094.42355524254,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 513076.9568397941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 338918.4682808783,
            "unit": "ns/iter",
            "extra": "iterations: 2065\ncpu: 338906.87651331956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 502045.3137535745,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 502018.98280803085 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421380423,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7678.308239322451,
            "unit": "ns/iter",
            "extra": "iterations: 91124\ncpu: 7677.592072340987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71858.56204071215,
            "unit": "ns/iter",
            "extra": "iterations: 11839\ncpu: 71854.21065968409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 138377.87341370742,
            "unit": "ns/iter",
            "extra": "iterations: 6304\ncpu: 138369.05139593908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 204432.37253057683,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 204416.086547507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 269954.69608452026,
            "unit": "ns/iter",
            "extra": "iterations: 3218\ncpu: 269935.70540708525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 334438.03324315976,
            "unit": "ns/iter",
            "extra": "iterations: 2587\ncpu: 334410.784692694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 399012.46614823793,
            "unit": "ns/iter",
            "extra": "iterations: 2186\ncpu: 398990.7136322051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 466465.33209154167,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 466445.02394890843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 534280.3223241818,
            "unit": "ns/iter",
            "extra": "iterations: 1635\ncpu: 534237.6146788996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5978.4368430505865,
            "unit": "ns/iter",
            "extra": "iterations: 116923\ncpu: 5978.32847258452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5098.488809866554,
            "unit": "ns/iter",
            "extra": "iterations: 136951\ncpu: 5098.262882344783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4986.524710089461,
            "unit": "ns/iter",
            "extra": "iterations: 140388\ncpu: 4986.399122432116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5076.612837666821,
            "unit": "ns/iter",
            "extra": "iterations: 138265\ncpu: 5076.388818573029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8708.468073472037,
            "unit": "ns/iter",
            "extra": "iterations: 80466\ncpu: 8707.93502845924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34632.07402240888,
            "unit": "ns/iter",
            "extra": "iterations: 22939\ncpu: 34631.02140459482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 143160.57010275492,
            "unit": "ns/iter",
            "extra": "iterations: 6034\ncpu: 143157.7394763011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 113487.24864292199,
            "unit": "ns/iter",
            "extra": "iterations: 7553\ncpu: 113484.16523235787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 112598.20939720905,
            "unit": "ns/iter",
            "extra": "iterations: 7598\ncpu: 112598.06528033689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111714.71536753936,
            "unit": "ns/iter",
            "extra": "iterations: 7659\ncpu: 111713.33072202661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 278570.80572336476,
            "unit": "ns/iter",
            "extra": "iterations: 3145\ncpu: 278531.3831478532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2198433.0921985926,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2198338.297872344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1814645.8923678244,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1814614.8727984352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1800161.155339763,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1800142.912621359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1812237.7309941086,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1812182.6510721294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1091873.549824129,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 1091843.3763188769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1755094.5566037567,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1755094.1509433994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7315032.079999924,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7314818.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4036520.181034428,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4036480.60344827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9141622.56779653,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 9141077.966101715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34779.03122234965,
            "unit": "ns/iter",
            "extra": "iterations: 23733\ncpu: 34778.32553828015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 147748.04031141163,
            "unit": "ns/iter",
            "extra": "iterations: 5780\ncpu: 147745.00000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 117237.51341099993,
            "unit": "ns/iter",
            "extra": "iterations: 7382\ncpu: 117236.42644269824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 113416.79190981772,
            "unit": "ns/iter",
            "extra": "iterations: 7540\ncpu: 113415.71618037103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 113062.15545274293,
            "unit": "ns/iter",
            "extra": "iterations: 7565\ncpu: 113061.12359550575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 283236.8896820281,
            "unit": "ns/iter",
            "extra": "iterations: 3082\ncpu: 283233.5171966243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2223497.571428571,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2223457.3809523876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1824642.560311328,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1824642.0233463028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1813768.3398058426,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1813753.203883495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1817438.2690058674,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1817418.9083820628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1097265.3000000238,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1097240.8235294123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1764456.609848468,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1764457.5757575717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7352770.780000242,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7352667.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4002401.0215518046,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4002276.2931034532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33130.361483628454,
            "unit": "ns/iter",
            "extra": "iterations: 24831\ncpu: 33129.47525270822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 138308.5767059256,
            "unit": "ns/iter",
            "extra": "iterations: 6199\ncpu: 138308.469107921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 111572.28848911473,
            "unit": "ns/iter",
            "extra": "iterations: 7671\ncpu: 111571.38573849537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 110968.54234001547,
            "unit": "ns/iter",
            "extra": "iterations: 7735\ncpu: 110967.29153199706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 111997.74260007567,
            "unit": "ns/iter",
            "extra": "iterations: 7669\ncpu: 111995.17538140564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 278676.29153404426,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 278676.1616804575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2211744.0902612237,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2211706.1757719656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1817800.5758754506,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1817782.2957198443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1816952.667315118,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1816924.124513626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1817059.9883269276,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1817019.0661478708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1093305.8054245159,
            "unit": "ns/iter",
            "extra": "iterations: 848\ncpu: 1093293.8679245294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1763601.604562707,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1763566.7300380245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3040.7733050754982,
            "unit": "ns/iter",
            "extra": "iterations: 230261\ncpu: 3040.7654791736177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16001.20903786753,
            "unit": "ns/iter",
            "extra": "iterations: 43705\ncpu: 16000.993021393535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12316.366203385027,
            "unit": "ns/iter",
            "extra": "iterations: 56769\ncpu: 12316.362803642867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12792.81499607372,
            "unit": "ns/iter",
            "extra": "iterations: 54761\ncpu: 12792.613356220725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10225.619475480225,
            "unit": "ns/iter",
            "extra": "iterations: 68558\ncpu: 10225.343504769677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63167.10990001165,
            "unit": "ns/iter",
            "extra": "iterations: 11101\ncpu: 63167.165120259284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 141718.08289420098,
            "unit": "ns/iter",
            "extra": "iterations: 4934\ncpu: 141716.57884069625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36130.708784970986,
            "unit": "ns/iter",
            "extra": "iterations: 19374\ncpu: 36130.262207081716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36243.48243026496,
            "unit": "ns/iter",
            "extra": "iterations: 19323\ncpu: 36241.4738912177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36336.29688796744,
            "unit": "ns/iter",
            "extra": "iterations: 19280\ncpu: 36336.26556016622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74583.37676692128,
            "unit": "ns/iter",
            "extra": "iterations: 9409\ncpu: 74582.61239239099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65723.49990582302,
            "unit": "ns/iter",
            "extra": "iterations: 10618\ncpu: 65722.55603691735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20638.053113012822,
            "unit": "ns/iter",
            "extra": "iterations: 33890\ncpu: 20638.055473590943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 95762.29942575574,
            "unit": "ns/iter",
            "extra": "iterations: 7314\ncpu: 95760.52775498938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77972.29475325679,
            "unit": "ns/iter",
            "extra": "iterations: 8977\ncpu: 77972.37384426815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78105.43158246888,
            "unit": "ns/iter",
            "extra": "iterations: 8967\ncpu: 78104.65038474383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78257.13670914824,
            "unit": "ns/iter",
            "extra": "iterations: 8946\ncpu: 78256.24860272798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 149075.18549244863,
            "unit": "ns/iter",
            "extra": "iterations: 4701\ncpu: 149075.04786215862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 628471.3577817548,
            "unit": "ns/iter",
            "extra": "iterations: 1118\ncpu: 628455.9928443602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 527516.8978211909,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 527516.6791885898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 529113.634164784,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 529103.6281179147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 530079.9192452857,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 530071.6981132138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 347719.26587303996,
            "unit": "ns/iter",
            "extra": "iterations: 2016\ncpu: 347709.8214285683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 517192.78203240444,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 517186.6715758422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20873.901501607943,
            "unit": "ns/iter",
            "extra": "iterations: 33564\ncpu: 20873.8857108808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 98232.6401398578,
            "unit": "ns/iter",
            "extra": "iterations: 7150\ncpu: 98230.3776223784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79301.60588568107,
            "unit": "ns/iter",
            "extra": "iterations: 8835\ncpu: 79300.54329371784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79663.51915860806,
            "unit": "ns/iter",
            "extra": "iterations: 8795\ncpu: 79660.54576463904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 80106.43207762353,
            "unit": "ns/iter",
            "extra": "iterations: 8760\ncpu: 80105.04566210172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 151030.62216461872,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 151028.36465759363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 626422.6571428619,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 626414.5535714353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 525774.4464419143,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 525767.8651685417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 527571.906696727,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 527547.1030850325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 526648.7663411075,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 526637.1149511614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 346516.55956500955,
            "unit": "ns/iter",
            "extra": "iterations: 2023\ncpu: 346516.5101334611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 515453.37895511946,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 515448.9330389976 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422463753,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7668.3535769428245,
            "unit": "ns/iter",
            "extra": "iterations: 91321\ncpu: 7668.143143417178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73004.09884845052,
            "unit": "ns/iter",
            "extra": "iterations: 11897\ncpu: 72998.97453139444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 138924.81420851103,
            "unit": "ns/iter",
            "extra": "iterations: 6292\ncpu: 138915.98855689762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 204124.15739644246,
            "unit": "ns/iter",
            "extra": "iterations: 4225\ncpu: 204105.89349112427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 269714.313333333,
            "unit": "ns/iter",
            "extra": "iterations: 3150\ncpu: 269708.1904761905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 334244.44027830695,
            "unit": "ns/iter",
            "extra": "iterations: 2587\ncpu: 334237.3018940859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 399362.9469312259,
            "unit": "ns/iter",
            "extra": "iterations: 2167\ncpu: 399344.5316105214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 463098.7862473495,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 463080.81023454136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 529081.0466949631,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 529077.6834445111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5854.618252099998,
            "unit": "ns/iter",
            "extra": "iterations: 119778\ncpu: 5854.5843143148095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4964.301108198996,
            "unit": "ns/iter",
            "extra": "iterations: 140408\ncpu: 4963.167340892254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4896.604595098755,
            "unit": "ns/iter",
            "extra": "iterations: 143109\ncpu: 4896.427897616494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4936.005661308652,
            "unit": "ns/iter",
            "extra": "iterations: 141840\ncpu: 4935.883389734912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8378.481047537462,
            "unit": "ns/iter",
            "extra": "iterations: 83472\ncpu: 8378.108826912001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35769.216817233835,
            "unit": "ns/iter",
            "extra": "iterations: 23024\ncpu: 35768.498088950706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 138954.44156685175,
            "unit": "ns/iter",
            "extra": "iterations: 6178\ncpu: 138950.1133052768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 113634.11554259494,
            "unit": "ns/iter",
            "extra": "iterations: 7547\ncpu: 113630.44918510687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 111408.18419003238,
            "unit": "ns/iter",
            "extra": "iterations: 7704\ncpu: 111402.88161993735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 112353.80746484613,
            "unit": "ns/iter",
            "extra": "iterations: 7609\ncpu: 112351.66250492833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 270537.58894379134,
            "unit": "ns/iter",
            "extra": "iterations: 3238\ncpu: 270529.92588017305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2156168.974595765,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2156124.2494226284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1777407.8508603843,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1777317.017208415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1767059.5238094695,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1767034.2857142817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1791535.145873289,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1791453.9347408828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1087154.5752625694,
            "unit": "ns/iter",
            "extra": "iterations: 857\ncpu: 1087139.2065344201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1730898.8175046516,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1730796.275605214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7303411.00999965,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7303156.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4022707.254310474,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4022565.948275861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8854415.606557457,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 8853732.786885235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33603.90797770513,
            "unit": "ns/iter",
            "extra": "iterations: 24581\ncpu: 33602.88840974748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 145923.78456044555,
            "unit": "ns/iter",
            "extra": "iterations: 5881\ncpu: 145918.34721986103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 115035.45883614843,
            "unit": "ns/iter",
            "extra": "iterations: 7458\ncpu: 115033.5746849018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 111708.672791245,
            "unit": "ns/iter",
            "extra": "iterations: 7674\ncpu: 111704.83450612411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 111801.38077875088,
            "unit": "ns/iter",
            "extra": "iterations: 7679\ncpu: 111795.54629509026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 269977.43162127107,
            "unit": "ns/iter",
            "extra": "iterations: 3232\ncpu: 269971.2252475239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2173832.135513979,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 2173730.6074766456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1785934.9904397163,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1785834.6080305881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1786493.9097889105,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1786405.9500959695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1801320.3918918946,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1801213.1274131231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1084463.773892807,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1084421.21212121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1737850.3805970673,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1737712.500000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7333278.609999639,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7332778.0000000335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4089254.6943230596,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4088903.49344979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33021.918078078044,
            "unit": "ns/iter",
            "extra": "iterations: 24975\ncpu: 33019.95595595574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 137576.2593544253,
            "unit": "ns/iter",
            "extra": "iterations: 6227\ncpu: 137566.8379637067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 111228.24617181456,
            "unit": "ns/iter",
            "extra": "iterations: 7706\ncpu: 111223.7996366467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 111481.52730108972,
            "unit": "ns/iter",
            "extra": "iterations: 7692\ncpu: 111475.11700468046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 111551.18522860181,
            "unit": "ns/iter",
            "extra": "iterations: 7677\ncpu: 111546.69792887846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 269569.2142857108,
            "unit": "ns/iter",
            "extra": "iterations: 3248\ncpu: 269554.2487684738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2168283.221445242,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2168151.981351975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1785137.1835564154,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1785052.198852768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1774189.0760455737,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1773969.5817490576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1784271.9082217372,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1784173.2313575475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1075989.7233796252,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1075918.8657407411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1727645.2444029537,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1727596.641791042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3005.1406042026983,
            "unit": "ns/iter",
            "extra": "iterations: 232902\ncpu: 3005.0377411958643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15607.672245498474,
            "unit": "ns/iter",
            "extra": "iterations: 44872\ncpu: 15607.269566767718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11630.741098980603,
            "unit": "ns/iter",
            "extra": "iterations: 60274\ncpu: 11629.936622756055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12351.03737929457,
            "unit": "ns/iter",
            "extra": "iterations: 60167\ncpu: 12350.363155882787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9841.851146165902,
            "unit": "ns/iter",
            "extra": "iterations: 71063\ncpu: 9841.343596527051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60217.6691018519,
            "unit": "ns/iter",
            "extra": "iterations: 11635\ncpu: 60212.410829394175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 132807.12087285996,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 132804.87666034134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35639.73497295651,
            "unit": "ns/iter",
            "extra": "iterations: 19598\ncpu: 35636.881314419836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35768.34217520048,
            "unit": "ns/iter",
            "extra": "iterations: 19566\ncpu: 35766.63089031949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35734.9078658575,
            "unit": "ns/iter",
            "extra": "iterations: 19591\ncpu: 35732.0453269362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73557.50247134134,
            "unit": "ns/iter",
            "extra": "iterations: 9509\ncpu: 73553.57030181856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64902.17661230549,
            "unit": "ns/iter",
            "extra": "iterations: 10792\ncpu: 64899.87027427677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20127.424141207248,
            "unit": "ns/iter",
            "extra": "iterations: 34729\ncpu: 20126.931382994106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93124.36618781401,
            "unit": "ns/iter",
            "extra": "iterations: 7518\ncpu: 93119.64618249562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75626.4674486163,
            "unit": "ns/iter",
            "extra": "iterations: 9293\ncpu: 75620.20875928157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75468.83256214048,
            "unit": "ns/iter",
            "extra": "iterations: 9293\ncpu: 75465.27493812586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75951.31066276412,
            "unit": "ns/iter",
            "extra": "iterations: 9219\ncpu: 75947.49972882056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 138816.91489783884,
            "unit": "ns/iter",
            "extra": "iterations: 5041\ncpu: 138814.52092838477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 610768.343504764,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 610735.6582388806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 516121.9380530651,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 516062.02064896614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 513525.5656342296,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 513491.15044247394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 513935.05425215984,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 513909.01759530714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 337217.151398258,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 337208.5824493706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 502291.5663082496,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 502261.1469534127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20156.144545323874,
            "unit": "ns/iter",
            "extra": "iterations: 34695\ncpu: 20154.76005188084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 92159.5435411748,
            "unit": "ns/iter",
            "extra": "iterations: 7602\ncpu: 92154.9460668241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75441.47063269411,
            "unit": "ns/iter",
            "extra": "iterations: 9262\ncpu: 75434.46339883361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76033.48371991473,
            "unit": "ns/iter",
            "extra": "iterations: 9183\ncpu: 76032.22258521135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76391.00936003971,
            "unit": "ns/iter",
            "extra": "iterations: 9188\ncpu: 76389.32303003831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 139191.61179508406,
            "unit": "ns/iter",
            "extra": "iterations: 5036\ncpu: 139180.87768069914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 610183.1639058697,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 610155.0130775942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 513436.1433796709,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 513382.37015361816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 512803.46955247415,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 512794.1305942691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 513253.20527855784,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 513227.93255131936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 340645.36921579554,
            "unit": "ns/iter",
            "extra": "iterations: 2053\ncpu: 340620.94495859917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 506905.88037245866,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 506875.07163323765 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453377637,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7784.408847885783,
            "unit": "ns/iter",
            "extra": "iterations: 89965\ncpu: 7784.04046017896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72746.63454296741,
            "unit": "ns/iter",
            "extra": "iterations: 11684\ncpu: 72745.27559055117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 138595.27090300203,
            "unit": "ns/iter",
            "extra": "iterations: 6279\ncpu: 138592.08472686732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 205348.7984969406,
            "unit": "ns/iter",
            "extra": "iterations: 4258\ncpu: 205343.9173320808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 270445.8529596996,
            "unit": "ns/iter",
            "extra": "iterations: 3176\ncpu: 270435.6423173804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 333803.4822750259,
            "unit": "ns/iter",
            "extra": "iterations: 2567\ncpu: 333796.1433580056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 398578.8339449611,
            "unit": "ns/iter",
            "extra": "iterations: 2180\ncpu: 398566.2385321101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 464023.2940234577,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 464013.9807897545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 528886.075288377,
            "unit": "ns/iter",
            "extra": "iterations: 1647\ncpu: 528873.102610808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5975.796577200785,
            "unit": "ns/iter",
            "extra": "iterations: 117214\ncpu: 5975.675260634393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5052.009492254572,
            "unit": "ns/iter",
            "extra": "iterations: 138534\ncpu: 5051.780790275317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5020.637818515157,
            "unit": "ns/iter",
            "extra": "iterations: 139593\ncpu: 5020.48670062252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5094.446731622288,
            "unit": "ns/iter",
            "extra": "iterations: 137530\ncpu: 5094.277612157348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8552.986394308145,
            "unit": "ns/iter",
            "extra": "iterations: 81804\ncpu: 8552.79692924551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35325.72401985978,
            "unit": "ns/iter",
            "extra": "iterations: 23364\ncpu: 35324.396507447316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 139456.8454914777,
            "unit": "ns/iter",
            "extra": "iterations: 6155\ncpu: 139447.8472786352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 112360.33114582062,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 112356.85785536146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 112521.92385453645,
            "unit": "ns/iter",
            "extra": "iterations: 7617\ncpu: 112519.25955100458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 112312.46820809453,
            "unit": "ns/iter",
            "extra": "iterations: 7612\ncpu: 112309.9054125066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 268118.3419847301,
            "unit": "ns/iter",
            "extra": "iterations: 3275\ncpu: 268108.8854961834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2189200.9765258324,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2189111.737089201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1804359.464077624,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1804309.9029126207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1788699.5279383254,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1788662.0423892124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1794878.2108316745,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1794811.6054158553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1073342.777262194,
            "unit": "ns/iter",
            "extra": "iterations: 862\ncpu: 1073307.1925754093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1743707.52255635,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1743671.4285714265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7186432.81000027,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7185771.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4045334.7869565138,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4045160.869565216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8794696.325203516,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8794322.764227642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34149.64131994237,
            "unit": "ns/iter",
            "extra": "iterations: 23698\ncpu: 34148.54418094352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 147965.89439057882,
            "unit": "ns/iter",
            "extra": "iterations: 5776\ncpu: 147961.47853185612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 116891.87590443864,
            "unit": "ns/iter",
            "extra": "iterations: 7325\ncpu: 116890.14334470994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 114477.00658956374,
            "unit": "ns/iter",
            "extra": "iterations: 7436\ncpu: 114476.4120494894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 113325.37524870674,
            "unit": "ns/iter",
            "extra": "iterations: 7539\ncpu: 113324.51253481921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 271234.08341056574,
            "unit": "ns/iter",
            "extra": "iterations: 3237\ncpu: 271227.0620945331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2208578.835714277,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2208483.8095238134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1816386.2832031308,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1816324.4140625007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1807240.2166343746,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1807187.0406189538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1807457.3313374196,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1807412.9740518872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1072546.5641618643,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 1072488.092485556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1752183.7969924838,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1752121.992481207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7244345.809999687,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7244008.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4002384.7038627374,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4002254.9356222996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33363.27418243686,
            "unit": "ns/iter",
            "extra": "iterations: 24677\ncpu: 33361.65660331508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 139100.4228896126,
            "unit": "ns/iter",
            "extra": "iterations: 6160\ncpu: 139097.24025974039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 112196.86580426218,
            "unit": "ns/iter",
            "extra": "iterations: 7653\ncpu: 112193.23141251864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 112263.8700261759,
            "unit": "ns/iter",
            "extra": "iterations: 7640\ncpu: 112261.33507853374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 112186.33294071966,
            "unit": "ns/iter",
            "extra": "iterations: 7641\ncpu: 112181.37678314402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 266881.66727271065,
            "unit": "ns/iter",
            "extra": "iterations: 3300\ncpu: 266875.8484848478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2206175.241134729,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2206112.7659574365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1815811.891050617,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1815747.276264587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1798945.382978698,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1798859.574468086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1807809.3352601356,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1807788.439306354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1072130.7246543658,
            "unit": "ns/iter",
            "extra": "iterations: 868\ncpu: 1072111.6359446931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1751555.4410645957,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1751496.5779467716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3023.446921719386,
            "unit": "ns/iter",
            "extra": "iterations: 231168\ncpu: 3023.350550249181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15986.644664717847,
            "unit": "ns/iter",
            "extra": "iterations: 43784\ncpu: 15986.364882148768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12233.157370587176,
            "unit": "ns/iter",
            "extra": "iterations: 57336\ncpu: 12233.05950886008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12320.782995437303,
            "unit": "ns/iter",
            "extra": "iterations: 56773\ncpu: 12320.45338453141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10132.405548007071,
            "unit": "ns/iter",
            "extra": "iterations: 69178\ncpu: 10131.842493278271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60647.20048581379,
            "unit": "ns/iter",
            "extra": "iterations: 11527\ncpu: 60645.605968595184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 142926.055407895,
            "unit": "ns/iter",
            "extra": "iterations: 4891\ncpu: 142926.27274585963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36643.59759837697,
            "unit": "ns/iter",
            "extra": "iterations: 19237\ncpu: 36642.54301606284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36300.54583965467,
            "unit": "ns/iter",
            "extra": "iterations: 19121\ncpu: 36298.16955180154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36480.75101573002,
            "unit": "ns/iter",
            "extra": "iterations: 19198\ncpu: 36479.72184602519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74639.90394456747,
            "unit": "ns/iter",
            "extra": "iterations: 9380\ncpu: 74635.66098080954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59565.167435106196,
            "unit": "ns/iter",
            "extra": "iterations: 11712\ncpu: 59563.98565573723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21040.32097763316,
            "unit": "ns/iter",
            "extra": "iterations: 33264\ncpu: 21039.91702741736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 96605.95342428124,
            "unit": "ns/iter",
            "extra": "iterations: 7257\ncpu: 96601.68113545368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 78748.8887763165,
            "unit": "ns/iter",
            "extra": "iterations: 8883\ncpu: 78746.76348080554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78883.09493243345,
            "unit": "ns/iter",
            "extra": "iterations: 8880\ncpu: 78880.1351351349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78822.85050208612,
            "unit": "ns/iter",
            "extra": "iterations: 8863\ncpu: 78822.10312535368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 147016.81613784411,
            "unit": "ns/iter",
            "extra": "iterations: 4759\ncpu: 147014.036562303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 622217.2319999622,
            "unit": "ns/iter",
            "extra": "iterations: 1125\ncpu: 622182.311111121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 523563.25767788617,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 523548.8389513123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 522359.68283582677,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 522331.7910447782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 523771.346816465,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 523772.28464419406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 340639.2480468923,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 340639.9414062483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 511724.97884755203,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 511715.6819839518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20803.583345611183,
            "unit": "ns/iter",
            "extra": "iterations: 33937\ncpu: 20803.005569142955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 96842.95985047874,
            "unit": "ns/iter",
            "extra": "iterations: 7223\ncpu: 96839.15270663102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78852.17173423157,
            "unit": "ns/iter",
            "extra": "iterations: 8880\ncpu: 78850.04504504525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79565.25408905355,
            "unit": "ns/iter",
            "extra": "iterations: 8804\ncpu: 79561.19945479302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79392.50164194583,
            "unit": "ns/iter",
            "extra": "iterations: 8831\ncpu: 79391.83557920947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 147214.35984847957,
            "unit": "ns/iter",
            "extra": "iterations: 4752\ncpu: 147211.0058922557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 621467.7740213217,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 621448.8434163724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 520559.5647321391,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 520544.2708333357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 522183.58682635374,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 522167.0658682645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 522705.4377330428,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 522693.2140193915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 341205.8255132171,
            "unit": "ns/iter",
            "extra": "iterations: 2046\ncpu: 341202.3460410541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 510935.28248174966,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 510908.61313868413 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702479260197,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7594.17456223436,
            "unit": "ns/iter",
            "extra": "iterations: 91887\ncpu: 7594.229869295985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71575.53354659754,
            "unit": "ns/iter",
            "extra": "iterations: 11879\ncpu: 71575.44406094789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136856.8664362067,
            "unit": "ns/iter",
            "extra": "iterations: 6364\ncpu: 136855.6411062225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202034.26909681727,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 202035.5700023217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 267365.5635239593,
            "unit": "ns/iter",
            "extra": "iterations: 3235\ncpu: 267367.2952086554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 328662.0720582782,
            "unit": "ns/iter",
            "extra": "iterations: 2609\ncpu: 328645.95630509773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 397003.90694509767,
            "unit": "ns/iter",
            "extra": "iterations: 2203\ncpu: 396980.9804811618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 458267.1325172929,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 458237.0409792444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 526474.7314148742,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 526453.0575539566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5819.833168559542,
            "unit": "ns/iter",
            "extra": "iterations: 120367\ncpu: 5819.315925461293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4923.745331627719,
            "unit": "ns/iter",
            "extra": "iterations: 139931\ncpu: 4923.521592785013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4882.737855981385,
            "unit": "ns/iter",
            "extra": "iterations: 143898\ncpu: 4882.3506928518855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4922.396479734878,
            "unit": "ns/iter",
            "extra": "iterations: 142262\ncpu: 4922.2561189917105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8342.091247207269,
            "unit": "ns/iter",
            "extra": "iterations: 84156\ncpu: 8341.318503731161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34402.86274345639,
            "unit": "ns/iter",
            "extra": "iterations: 23875\ncpu: 34402.21151832459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 141087.83363531978,
            "unit": "ns/iter",
            "extra": "iterations: 6071\ncpu: 141077.3183989459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 113619.37753613706,
            "unit": "ns/iter",
            "extra": "iterations: 7541\ncpu: 113613.00888476294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 112887.48390925738,
            "unit": "ns/iter",
            "extra": "iterations: 7582\ncpu: 112886.92957003435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 114142.00991690897,
            "unit": "ns/iter",
            "extra": "iterations: 7462\ncpu: 114142.84374162414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 261894.50432706854,
            "unit": "ns/iter",
            "extra": "iterations: 3351\ncpu: 261893.07669352376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2161877.5197214847,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2161826.2180974456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1790882.342307699,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1790846.3461538465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1778505.065009493,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1778502.676864245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1770870.666030555,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1770883.7786259546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1070369.0594405544,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1070355.7109557113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1723870.091247656,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1723848.9757914369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7256308.350000041,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7256208.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4053873.670995602,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4053830.7359307436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8910514.122951124,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 8910163.934426216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34116.15295380479,
            "unit": "ns/iter",
            "extra": "iterations: 24223\ncpu: 34116.08801552231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 143069.91737606295,
            "unit": "ns/iter",
            "extra": "iterations: 5991\ncpu: 143070.83959272288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 116163.80618167087,
            "unit": "ns/iter",
            "extra": "iterations: 7409\ncpu: 116162.03266297738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 113937.1214209954,
            "unit": "ns/iter",
            "extra": "iterations: 7544\ncpu: 113928.03552491985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 113768.42522306152,
            "unit": "ns/iter",
            "extra": "iterations: 7509\ncpu: 113742.94846184622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 269449.62124923116,
            "unit": "ns/iter",
            "extra": "iterations: 3266\ncpu: 269433.6497244347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2181349.348946181,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2181170.257611245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1808537.5145631684,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1808376.6990291271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1790272.449136257,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1790123.2245681416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1779414.2423664366,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1779269.8473282473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1078410.44354843,
            "unit": "ns/iter",
            "extra": "iterations: 868\ncpu: 1078341.5898617578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1733523.5158287035,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1733406.3314711382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7327384.740000298,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7326752.000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4121985.537444934,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4121821.1453744476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33211.43511111173,
            "unit": "ns/iter",
            "extra": "iterations: 24750\ncpu: 33208.78787878779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 141414.34755290992,
            "unit": "ns/iter",
            "extra": "iterations: 6048\ncpu: 141401.62037036987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 112596.36754836574,
            "unit": "ns/iter",
            "extra": "iterations: 7599\ncpu: 112590.038162916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 111403.74295362998,
            "unit": "ns/iter",
            "extra": "iterations: 7699\ncpu: 111400.1039095985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 112232.09385240835,
            "unit": "ns/iter",
            "extra": "iterations: 7629\ncpu: 112228.39166339005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 266875.9884463396,
            "unit": "ns/iter",
            "extra": "iterations: 3289\ncpu: 266855.5487990286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2167376.6860465356,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2167269.7674418706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1796733.9594594745,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1796623.3590733656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1782708.9281553023,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1782629.3203883616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1775107.8419047147,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1775093.3333333374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1077060.4154200212,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 1077024.9712312971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1734520.4972067007,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1734472.8119180643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3022.049081078218,
            "unit": "ns/iter",
            "extra": "iterations: 231739\ncpu: 3021.935453246981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16553.691895435775,
            "unit": "ns/iter",
            "extra": "iterations: 44222\ncpu: 16518.793813034266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12017.415804602557,
            "unit": "ns/iter",
            "extra": "iterations: 58097\ncpu: 12016.513761467892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12064.781275833291,
            "unit": "ns/iter",
            "extra": "iterations: 58064\ncpu: 12063.989735464389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9962.605497654475,
            "unit": "ns/iter",
            "extra": "iterations: 70139\ncpu: 9962.254950883185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60863.254104772015,
            "unit": "ns/iter",
            "extra": "iterations: 11511\ncpu: 60858.86543306406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 140786.94783483748,
            "unit": "ns/iter",
            "extra": "iterations: 4965\ncpu: 140781.6314199398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35793.78723622105,
            "unit": "ns/iter",
            "extra": "iterations: 19524\ncpu: 35791.68203237061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36001.89935331731,
            "unit": "ns/iter",
            "extra": "iterations: 19484\ncpu: 36000.62102237708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35869.078304009185,
            "unit": "ns/iter",
            "extra": "iterations: 19552\ncpu: 35866.816693944296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 68084.64526500147,
            "unit": "ns/iter",
            "extra": "iterations: 10264\ncpu: 68080.6313328132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67935.78132586218,
            "unit": "ns/iter",
            "extra": "iterations: 10710\ncpu: 67929.55182072817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20494.31583260052,
            "unit": "ns/iter",
            "extra": "iterations: 34170\ncpu: 20493.119695639532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93186.75957956356,
            "unit": "ns/iter",
            "extra": "iterations: 7516\ncpu: 93181.22671633771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 76405.85575971019,
            "unit": "ns/iter",
            "extra": "iterations: 9089\ncpu: 76402.71757068922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76070.3691923529,
            "unit": "ns/iter",
            "extra": "iterations: 9212\ncpu: 76068.8666956144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76287.33956724989,
            "unit": "ns/iter",
            "extra": "iterations: 9197\ncpu: 76283.60334891849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 141142.89158803338,
            "unit": "ns/iter",
            "extra": "iterations: 4981\ncpu: 141136.35816101005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 612316.4063047253,
            "unit": "ns/iter",
            "extra": "iterations: 1142\ncpu: 612267.7758318788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 516804.5236336489,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 516781.683899556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 516181.9601476373,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 516154.7601476102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 516679.511078307,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 516667.9468242274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 340768.06128405716,
            "unit": "ns/iter",
            "extra": "iterations: 2056\ncpu: 340750.8268482469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 505080.43403028086,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 505026.96467196074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20261.379913675206,
            "unit": "ns/iter",
            "extra": "iterations: 34521\ncpu: 20260.070681614325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94655.23612250935,
            "unit": "ns/iter",
            "extra": "iterations: 7314\ncpu: 94653.50013672443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76400.81550218257,
            "unit": "ns/iter",
            "extra": "iterations: 9160\ncpu: 76399.0393013104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76543.31169539505,
            "unit": "ns/iter",
            "extra": "iterations: 9166\ncpu: 76539.57015055632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76916.01284866832,
            "unit": "ns/iter",
            "extra": "iterations: 9106\ncpu: 76911.7944212611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 140511.69357430242,
            "unit": "ns/iter",
            "extra": "iterations: 4980\ncpu: 140496.62650602256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 610073.9885260297,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 610033.4510150013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 515961.47279410914,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 515914.4852941216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 514092.9228508426,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 514067.9647318149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 516452.37979349506,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 516409.4395280212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 341538.60009743745,
            "unit": "ns/iter",
            "extra": "iterations: 2053\ncpu: 341509.88796882646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 503149.34390773287,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 503101.4419610666 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479546820,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8272.830217845783,
            "unit": "ns/iter",
            "extra": "iterations: 84096\ncpu: 8272.77516171994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73077.79830057165,
            "unit": "ns/iter",
            "extra": "iterations: 11651\ncpu: 73077.87314393614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 140189.16663993988,
            "unit": "ns/iter",
            "extra": "iterations: 6235\ncpu: 140188.78909382515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 207987.79182600332,
            "unit": "ns/iter",
            "extra": "iterations: 4184\ncpu: 207988.71892925428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 273753.97263290104,
            "unit": "ns/iter",
            "extra": "iterations: 3179\ncpu: 273748.914753067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 339847.3883457256,
            "unit": "ns/iter",
            "extra": "iterations: 2557\ncpu: 339839.65584669536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 403886.35305076675,
            "unit": "ns/iter",
            "extra": "iterations: 2147\ncpu: 403879.6925943179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 468941.42349137465,
            "unit": "ns/iter",
            "extra": "iterations: 1856\ncpu: 468933.40517241426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 534508.999999984,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 534489.1477621093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6071.488438109559,
            "unit": "ns/iter",
            "extra": "iterations: 115898\ncpu: 6071.35929869368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5157.102081988151,
            "unit": "ns/iter",
            "extra": "iterations: 136312\ncpu: 5156.968572099299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5097.276271940222,
            "unit": "ns/iter",
            "extra": "iterations: 137133\ncpu: 5097.150941057226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5139.598082720346,
            "unit": "ns/iter",
            "extra": "iterations: 136339\ncpu: 5139.584418251569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8704.157416964255,
            "unit": "ns/iter",
            "extra": "iterations: 80417\ncpu: 8703.287862019226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35465.46401653663,
            "unit": "ns/iter",
            "extra": "iterations: 23219\ncpu: 35463.63753822304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 144156.71440577938,
            "unit": "ns/iter",
            "extra": "iterations: 5949\ncpu: 144144.39401580088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 116129.75752644436,
            "unit": "ns/iter",
            "extra": "iterations: 7374\ncpu: 116119.3517765119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 118084.21415783113,
            "unit": "ns/iter",
            "extra": "iterations: 7261\ncpu: 118074.96212642876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 116172.86411483174,
            "unit": "ns/iter",
            "extra": "iterations: 7315\ncpu: 116163.15789473674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 282866.5891874417,
            "unit": "ns/iter",
            "extra": "iterations: 3089\ncpu: 282836.8404014243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2215943.9856459377,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2215830.3827751167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1834333.4607842353,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1834168.6274509798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1805202.9148936493,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1805163.0560928418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1820146.603112899,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1819945.7198443564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1087047.5929824505,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 1086985.4970760243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1766954.614068478,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1766765.209125477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7332323.740000106,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7332007.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4022341.948497783,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4022021.8884120258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8987219.404958554,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8986740.495867774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35496.52659024134,
            "unit": "ns/iter",
            "extra": "iterations: 23204\ncpu: 35493.07016031717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 150467.57137840238,
            "unit": "ns/iter",
            "extra": "iterations: 5695\ncpu: 150452.51975417035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 120566.30606230951,
            "unit": "ns/iter",
            "extra": "iterations: 7126\ncpu: 120555.64131349986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 119596.82343946141,
            "unit": "ns/iter",
            "extra": "iterations: 7193\ncpu: 119590.67148616679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 118495.46673095388,
            "unit": "ns/iter",
            "extra": "iterations: 7259\ncpu: 118486.59594985521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 287772.38514623436,
            "unit": "ns/iter",
            "extra": "iterations: 3043\ncpu: 287749.98356884875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2241754.975845541,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2241573.429951697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1837708.4240631163,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1837586.785009853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1822391.8771929736,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1822207.2124756295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1831513.890410923,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1831387.2798434447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1080998.5946573964,
            "unit": "ns/iter",
            "extra": "iterations: 861\ncpu: 1080934.7270615583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1775542.553435182,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1775380.725190847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7594077.910000009,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7593808.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4077701.242424442,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4077551.94805196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34665.34689597274,
            "unit": "ns/iter",
            "extra": "iterations: 23840\ncpu: 34665.23909395964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 146931.53557923413,
            "unit": "ns/iter",
            "extra": "iterations: 5818\ncpu: 146929.0649707796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 115974.7651915072,
            "unit": "ns/iter",
            "extra": "iterations: 7389\ncpu: 115974.27256732999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 115400.81707153455,
            "unit": "ns/iter",
            "extra": "iterations: 7451\ncpu: 115398.604214199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 115433.33315349052,
            "unit": "ns/iter",
            "extra": "iterations: 7414\ncpu: 115433.12651739968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 283870.18498050293,
            "unit": "ns/iter",
            "extra": "iterations: 3076\ncpu: 283860.98829648865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2235162.4230768043,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 2235106.9711538535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1832605.3523621813,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1832570.0787401597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1824754.9492187432,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1824749.0234374886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1824926.9980430473,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1824891.3894324813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1089421.6721504263,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 1089407.6380728574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1773948.7667304892,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1773913.1931166388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2976.3759835653987,
            "unit": "ns/iter",
            "extra": "iterations: 235114\ncpu: 2976.359553237998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16276.979933575805,
            "unit": "ns/iter",
            "extra": "iterations: 43057\ncpu: 16276.442854820269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12346.121002226006,
            "unit": "ns/iter",
            "extra": "iterations: 56594\ncpu: 12345.939498886728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12107.448121444355,
            "unit": "ns/iter",
            "extra": "iterations: 57837\ncpu: 12106.670470460153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10287.964999853299,
            "unit": "ns/iter",
            "extra": "iterations: 67914\ncpu: 10287.914126689686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64189.43432397916,
            "unit": "ns/iter",
            "extra": "iterations: 10902\ncpu: 64189.02036323603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 144275.99340613504,
            "unit": "ns/iter",
            "extra": "iterations: 4853\ncpu: 144272.94457036877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36623.80466624647,
            "unit": "ns/iter",
            "extra": "iterations: 19116\ncpu: 36623.93806235619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36558.20270835625,
            "unit": "ns/iter",
            "extra": "iterations: 19126\ncpu: 36558.632228380295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36870.2345945392,
            "unit": "ns/iter",
            "extra": "iterations: 19003\ncpu: 36869.11540283127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74820.34926235283,
            "unit": "ns/iter",
            "extra": "iterations: 9354\ncpu: 74815.67243959795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63264.46773754677,
            "unit": "ns/iter",
            "extra": "iterations: 11019\ncpu: 63258.326526907375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20905.912714550665,
            "unit": "ns/iter",
            "extra": "iterations: 33442\ncpu: 20903.83948328462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 96273.82315731733,
            "unit": "ns/iter",
            "extra": "iterations: 7272\ncpu: 96267.73927392684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77919.2345816202,
            "unit": "ns/iter",
            "extra": "iterations: 8999\ncpu: 77913.74597177534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78213.5174645669,
            "unit": "ns/iter",
            "extra": "iterations: 8961\ncpu: 78214.50730945209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78352.00167747508,
            "unit": "ns/iter",
            "extra": "iterations: 8942\ncpu: 78346.53321404655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 147162.98993500086,
            "unit": "ns/iter",
            "extra": "iterations: 4769\ncpu: 147147.09582721823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 629784.6582733876,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 629727.6079136707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 531972.7334348945,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 531943.2597105874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 530284.6280303032,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 530290.7575757562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 530237.1833333509,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 530185.3787878787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 346432.45594058343,
            "unit": "ns/iter",
            "extra": "iterations: 2020\ncpu: 346403.81188119063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 516767.48148148967,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 516727.9999999942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21105.983220375685,
            "unit": "ns/iter",
            "extra": "iterations: 33493\ncpu: 21103.514167139627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97612.6097187419,
            "unit": "ns/iter",
            "extra": "iterations: 7182\ncpu: 97606.14035087728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78634.08040540981,
            "unit": "ns/iter",
            "extra": "iterations: 8880\ncpu: 78628.16441441502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79795.66480765096,
            "unit": "ns/iter",
            "extra": "iterations: 8786\ncpu: 79788.73207375227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79425.09597277253,
            "unit": "ns/iter",
            "extra": "iterations: 8815\ncpu: 79419.90924560382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 148779.37566249256,
            "unit": "ns/iter",
            "extra": "iterations: 4717\ncpu: 148762.77294891028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 630481.8631863203,
            "unit": "ns/iter",
            "extra": "iterations: 1111\ncpu: 630434.743474358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 530891.118361179,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 530881.0318664695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 532039.3396801201,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 531984.3869002338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 528636.689577033,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 528601.0574018072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 347318.09722223325,
            "unit": "ns/iter",
            "extra": "iterations: 2016\ncpu: 347256.8452380924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 517975.063609475,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 517924.77810651285 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}