window.BENCHMARK_DATA = {
  "lastUpdate": 1702409135478,
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
      }
    ]
  }
}