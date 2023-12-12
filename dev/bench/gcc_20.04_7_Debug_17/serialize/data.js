window.BENCHMARK_DATA = {
  "lastUpdate": 1702397922138,
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
      }
    ]
  }
}