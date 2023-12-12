window.BENCHMARK_DATA = {
  "lastUpdate": 1702392476400,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-11 20.04 Debug c++-17": [
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
        "date": 1702392474255,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9181.466780597744,
            "unit": "ns/iter",
            "extra": "iterations: 76070\ncpu: 9180.11305376627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 107600.78622417322,
            "unit": "ns/iter",
            "extra": "iterations: 7985\ncpu: 107599.07326236695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 207282.78742585142,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 207265.90747330963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 308880.68562234094,
            "unit": "ns/iter",
            "extra": "iterations: 2796\ncpu: 308864.5207439198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 404215.7387217919,
            "unit": "ns/iter",
            "extra": "iterations: 2128\ncpu: 404199.6710526314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 499171.2697405857,
            "unit": "ns/iter",
            "extra": "iterations: 1735\ncpu: 499155.9077809797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 594225.2236574221,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 594206.4581917063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 551373.8339999464,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551371.6000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 629993.4840000105,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 629948.0000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7093.596053735977,
            "unit": "ns/iter",
            "extra": "iterations: 98929\ncpu: 7093.3902091399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5695.592767000245,
            "unit": "ns/iter",
            "extra": "iterations: 122743\ncpu: 5695.352077104191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5665.118501628737,
            "unit": "ns/iter",
            "extra": "iterations: 122800\ncpu: 5664.789902280138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6021.133804547073,
            "unit": "ns/iter",
            "extra": "iterations: 122096\ncpu: 6020.730408858607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10181.711639787258,
            "unit": "ns/iter",
            "extra": "iterations: 68515\ncpu: 10180.741443479537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 52344.68254969747,
            "unit": "ns/iter",
            "extra": "iterations: 15845\ncpu: 52342.07636478385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 204439.4586935744,
            "unit": "ns/iter",
            "extra": "iterations: 4164\ncpu: 204429.1546589818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 167956.5685707894,
            "unit": "ns/iter",
            "extra": "iterations: 4499\ncpu: 167945.69904423234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 168047.69754179756,
            "unit": "ns/iter",
            "extra": "iterations: 5085\ncpu: 168036.3225172077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 174373.95882835926,
            "unit": "ns/iter",
            "extra": "iterations: 4882\ncpu: 174365.2601392872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 406843.30379750236,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 406815.75246132177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3317095.503545896,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3316794.3262411333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2723160.745664689,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2723067.9190751454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2665757.031338911,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2665648.1481481483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2681302.7994270497,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2681123.4957020055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1581493.5672913438,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1581393.0153321957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2614324.5449438174,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2614226.1235955125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11231079.791665858,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11230584.374999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6337640.1824324895,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 6337402.027027015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13345923.874999244,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13345386.250000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 50518.02849439229,
            "unit": "ns/iter",
            "extra": "iterations: 16319\ncpu: 50516.60640970649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 219112.14874968643,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 219108.89404485733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 175660.3209438306,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 175653.20526205792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 172628.03041978937,
            "unit": "ns/iter",
            "extra": "iterations: 4931\ncpu: 172621.8211316175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 177551.70008387815,
            "unit": "ns/iter",
            "extra": "iterations: 4768\ncpu: 177546.6442953029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 408369.49976406276,
            "unit": "ns/iter",
            "extra": "iterations: 2119\ncpu: 408356.67767815175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3332856.0142856697,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3332725.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2702665.8294800124,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2702565.895953751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2691576.5446687727,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2691441.498559075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2697698.2449567723,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2697564.553314106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1600876.6798622063,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1600819.7934595458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2622807.8651682693,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2622743.258426979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11263772.29166664,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11263282.291666657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6325639.564625836,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6325407.482993217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 49493.28682495071,
            "unit": "ns/iter",
            "extra": "iterations: 16721\ncpu: 49490.395311285465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 212419.09436306547,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 212407.32555252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 174180.0448439945,
            "unit": "ns/iter",
            "extra": "iterations: 4839\ncpu: 174173.2382723711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 167017.7162561697,
            "unit": "ns/iter",
            "extra": "iterations: 5075\ncpu: 167004.98522167522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 173763.42930539916,
            "unit": "ns/iter",
            "extra": "iterations: 4866\ncpu: 173751.2535963827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 411094.1102697418,
            "unit": "ns/iter",
            "extra": "iterations: 2113\ncpu: 411054.85092285683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3345181.089605498,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3345074.5519713154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2716691.965014587,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2716458.3090379057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2693313.6445084116,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2693139.306358391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2693245.947826008,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2693042.8985507335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1614679.7443867864,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1614610.1899827279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2640509.782485948,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2640379.943502822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3111.516486407139,
            "unit": "ns/iter",
            "extra": "iterations: 224306\ncpu: 3111.4597915347786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 23199.35230874319,
            "unit": "ns/iter",
            "extra": "iterations: 32182\ncpu: 23198.906220868823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17476.40961024111,
            "unit": "ns/iter",
            "extra": "iterations: 39999\ncpu: 17475.294382359443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15930.53476265389,
            "unit": "ns/iter",
            "extra": "iterations: 43797\ncpu: 15930.253213690308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13207.284160934665,
            "unit": "ns/iter",
            "extra": "iterations: 53065\ncpu: 13206.917930839592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 95949.78600879785,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 95940.07696536533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 205094.26551522274,
            "unit": "ns/iter",
            "extra": "iterations: 3416\ncpu: 205083.98711943746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 52683.72137920632,
            "unit": "ns/iter",
            "extra": "iterations: 13312\ncpu: 52679.11658653842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 52689.6927067697,
            "unit": "ns/iter",
            "extra": "iterations: 13300\ncpu: 52688.36842105242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 52845.066777205924,
            "unit": "ns/iter",
            "extra": "iterations: 13268\ncpu: 52840.44317154063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 109780.59780221472,
            "unit": "ns/iter",
            "extra": "iterations: 6370\ncpu: 109769.95290424036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 99437.74698282003,
            "unit": "ns/iter",
            "extra": "iterations: 7043\ncpu: 99433.84921198405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26733.931262924096,
            "unit": "ns/iter",
            "extra": "iterations: 26114\ncpu: 26731.73393582022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 134750.1912071214,
            "unit": "ns/iter",
            "extra": "iterations: 5277\ncpu: 134746.12469205953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 107053.99037433894,
            "unit": "ns/iter",
            "extra": "iterations: 6545\ncpu: 107045.8517952647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 105702.26208151659,
            "unit": "ns/iter",
            "extra": "iterations: 6601\ncpu: 105699.93940312102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 108322.18495589014,
            "unit": "ns/iter",
            "extra": "iterations: 6461\ncpu: 108313.0475158632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 195978.18879551458,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 195965.5462184866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 906786.4319066356,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 906703.2425421522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 757672.5091891874,
            "unit": "ns/iter",
            "extra": "iterations: 925\ncpu: 757618.594594591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 751285.3254565418,
            "unit": "ns/iter",
            "extra": "iterations: 931\ncpu: 751266.8098818471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 757775.9391303428,
            "unit": "ns/iter",
            "extra": "iterations: 920\ncpu: 757748.8043478213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 477411.05392487766,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 477391.6723549426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 740495.9704017644,
            "unit": "ns/iter",
            "extra": "iterations: 946\ncpu: 740456.7653276945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27195.431472278025,
            "unit": "ns/iter",
            "extra": "iterations: 25756\ncpu: 27192.658021432086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 132274.43568858365,
            "unit": "ns/iter",
            "extra": "iterations: 5279\ncpu: 132263.38321651594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 110384.53105350687,
            "unit": "ns/iter",
            "extra": "iterations: 6521\ncpu: 110368.793129888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 109431.40677443694,
            "unit": "ns/iter",
            "extra": "iterations: 6495\ncpu: 109426.3125481147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 109403.08434863698,
            "unit": "ns/iter",
            "extra": "iterations: 6402\ncpu: 109395.06404248609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 200308.0077519223,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 200303.53143841366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 902558.4638243756,
            "unit": "ns/iter",
            "extra": "iterations: 774\ncpu: 902495.736434095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 768299.5405702081,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 768206.2500000073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 757482.1868250185,
            "unit": "ns/iter",
            "extra": "iterations: 926\ncpu: 757447.9481641598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 761146.9362162196,
            "unit": "ns/iter",
            "extra": "iterations: 925\ncpu: 761105.8378378359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 484066.8861111415,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 484049.5833333335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 746442.2641107087,
            "unit": "ns/iter",
            "extra": "iterations: 939\ncpu: 746378.16826411 ns\nthreads: 1"
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
        "date": 1702392474255,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9181.466780597744,
            "unit": "ns/iter",
            "extra": "iterations: 76070\ncpu: 9180.11305376627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 107600.78622417322,
            "unit": "ns/iter",
            "extra": "iterations: 7985\ncpu: 107599.07326236695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 207282.78742585142,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 207265.90747330963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 308880.68562234094,
            "unit": "ns/iter",
            "extra": "iterations: 2796\ncpu: 308864.5207439198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 404215.7387217919,
            "unit": "ns/iter",
            "extra": "iterations: 2128\ncpu: 404199.6710526314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 499171.2697405857,
            "unit": "ns/iter",
            "extra": "iterations: 1735\ncpu: 499155.9077809797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 594225.2236574221,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 594206.4581917063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 551373.8339999464,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551371.6000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 629993.4840000105,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 629948.0000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7093.596053735977,
            "unit": "ns/iter",
            "extra": "iterations: 98929\ncpu: 7093.3902091399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5695.592767000245,
            "unit": "ns/iter",
            "extra": "iterations: 122743\ncpu: 5695.352077104191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5665.118501628737,
            "unit": "ns/iter",
            "extra": "iterations: 122800\ncpu: 5664.789902280138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6021.133804547073,
            "unit": "ns/iter",
            "extra": "iterations: 122096\ncpu: 6020.730408858607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10181.711639787258,
            "unit": "ns/iter",
            "extra": "iterations: 68515\ncpu: 10180.741443479537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 52344.68254969747,
            "unit": "ns/iter",
            "extra": "iterations: 15845\ncpu: 52342.07636478385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 204439.4586935744,
            "unit": "ns/iter",
            "extra": "iterations: 4164\ncpu: 204429.1546589818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 167956.5685707894,
            "unit": "ns/iter",
            "extra": "iterations: 4499\ncpu: 167945.69904423234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 168047.69754179756,
            "unit": "ns/iter",
            "extra": "iterations: 5085\ncpu: 168036.3225172077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 174373.95882835926,
            "unit": "ns/iter",
            "extra": "iterations: 4882\ncpu: 174365.2601392872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 406843.30379750236,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 406815.75246132177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3317095.503545896,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3316794.3262411333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2723160.745664689,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2723067.9190751454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2665757.031338911,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2665648.1481481483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2681302.7994270497,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2681123.4957020055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1581493.5672913438,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1581393.0153321957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2614324.5449438174,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2614226.1235955125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11231079.791665858,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11230584.374999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6337640.1824324895,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 6337402.027027015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13345923.874999244,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13345386.250000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 50518.02849439229,
            "unit": "ns/iter",
            "extra": "iterations: 16319\ncpu: 50516.60640970649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 219112.14874968643,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 219108.89404485733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 175660.3209438306,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 175653.20526205792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 172628.03041978937,
            "unit": "ns/iter",
            "extra": "iterations: 4931\ncpu: 172621.8211316175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 177551.70008387815,
            "unit": "ns/iter",
            "extra": "iterations: 4768\ncpu: 177546.6442953029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 408369.49976406276,
            "unit": "ns/iter",
            "extra": "iterations: 2119\ncpu: 408356.67767815175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3332856.0142856697,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3332725.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2702665.8294800124,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2702565.895953751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2691576.5446687727,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2691441.498559075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2697698.2449567723,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2697564.553314106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1600876.6798622063,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1600819.7934595458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2622807.8651682693,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2622743.258426979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11263772.29166664,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11263282.291666657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6325639.564625836,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6325407.482993217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 49493.28682495071,
            "unit": "ns/iter",
            "extra": "iterations: 16721\ncpu: 49490.395311285465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 212419.09436306547,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 212407.32555252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 174180.0448439945,
            "unit": "ns/iter",
            "extra": "iterations: 4839\ncpu: 174173.2382723711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 167017.7162561697,
            "unit": "ns/iter",
            "extra": "iterations: 5075\ncpu: 167004.98522167522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 173763.42930539916,
            "unit": "ns/iter",
            "extra": "iterations: 4866\ncpu: 173751.2535963827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 411094.1102697418,
            "unit": "ns/iter",
            "extra": "iterations: 2113\ncpu: 411054.85092285683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3345181.089605498,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3345074.5519713154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2716691.965014587,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2716458.3090379057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2693313.6445084116,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2693139.306358391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2693245.947826008,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2693042.8985507335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1614679.7443867864,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1614610.1899827279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2640509.782485948,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2640379.943502822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3111.516486407139,
            "unit": "ns/iter",
            "extra": "iterations: 224306\ncpu: 3111.4597915347786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 23199.35230874319,
            "unit": "ns/iter",
            "extra": "iterations: 32182\ncpu: 23198.906220868823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17476.40961024111,
            "unit": "ns/iter",
            "extra": "iterations: 39999\ncpu: 17475.294382359443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15930.53476265389,
            "unit": "ns/iter",
            "extra": "iterations: 43797\ncpu: 15930.253213690308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13207.284160934665,
            "unit": "ns/iter",
            "extra": "iterations: 53065\ncpu: 13206.917930839592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 95949.78600879785,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 95940.07696536533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 205094.26551522274,
            "unit": "ns/iter",
            "extra": "iterations: 3416\ncpu: 205083.98711943746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 52683.72137920632,
            "unit": "ns/iter",
            "extra": "iterations: 13312\ncpu: 52679.11658653842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 52689.6927067697,
            "unit": "ns/iter",
            "extra": "iterations: 13300\ncpu: 52688.36842105242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 52845.066777205924,
            "unit": "ns/iter",
            "extra": "iterations: 13268\ncpu: 52840.44317154063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 109780.59780221472,
            "unit": "ns/iter",
            "extra": "iterations: 6370\ncpu: 109769.95290424036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 99437.74698282003,
            "unit": "ns/iter",
            "extra": "iterations: 7043\ncpu: 99433.84921198405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26733.931262924096,
            "unit": "ns/iter",
            "extra": "iterations: 26114\ncpu: 26731.73393582022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 134750.1912071214,
            "unit": "ns/iter",
            "extra": "iterations: 5277\ncpu: 134746.12469205953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 107053.99037433894,
            "unit": "ns/iter",
            "extra": "iterations: 6545\ncpu: 107045.8517952647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 105702.26208151659,
            "unit": "ns/iter",
            "extra": "iterations: 6601\ncpu: 105699.93940312102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 108322.18495589014,
            "unit": "ns/iter",
            "extra": "iterations: 6461\ncpu: 108313.0475158632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 195978.18879551458,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 195965.5462184866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 906786.4319066356,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 906703.2425421522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 757672.5091891874,
            "unit": "ns/iter",
            "extra": "iterations: 925\ncpu: 757618.594594591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 751285.3254565418,
            "unit": "ns/iter",
            "extra": "iterations: 931\ncpu: 751266.8098818471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 757775.9391303428,
            "unit": "ns/iter",
            "extra": "iterations: 920\ncpu: 757748.8043478213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 477411.05392487766,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 477391.6723549426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 740495.9704017644,
            "unit": "ns/iter",
            "extra": "iterations: 946\ncpu: 740456.7653276945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27195.431472278025,
            "unit": "ns/iter",
            "extra": "iterations: 25756\ncpu: 27192.658021432086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 132274.43568858365,
            "unit": "ns/iter",
            "extra": "iterations: 5279\ncpu: 132263.38321651594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 110384.53105350687,
            "unit": "ns/iter",
            "extra": "iterations: 6521\ncpu: 110368.793129888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 109431.40677443694,
            "unit": "ns/iter",
            "extra": "iterations: 6495\ncpu: 109426.3125481147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 109403.08434863698,
            "unit": "ns/iter",
            "extra": "iterations: 6402\ncpu: 109395.06404248609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 200308.0077519223,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 200303.53143841366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 902558.4638243756,
            "unit": "ns/iter",
            "extra": "iterations: 774\ncpu: 902495.736434095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 768299.5405702081,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 768206.2500000073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 757482.1868250185,
            "unit": "ns/iter",
            "extra": "iterations: 926\ncpu: 757447.9481641598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 761146.9362162196,
            "unit": "ns/iter",
            "extra": "iterations: 925\ncpu: 761105.8378378359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 484066.8861111415,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 484049.5833333335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 746442.2641107087,
            "unit": "ns/iter",
            "extra": "iterations: 939\ncpu: 746378.16826411 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}