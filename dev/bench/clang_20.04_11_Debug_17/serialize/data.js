window.BENCHMARK_DATA = {
  "lastUpdate": 1702394226857,
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
        "date": 1702394225734,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8527.385207244148,
            "unit": "ns/iter",
            "extra": "iterations: 82270\ncpu: 8527.098577853409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 102627.5510179686,
            "unit": "ns/iter",
            "extra": "iterations: 8350\ncpu: 102625.37724550898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 197248.07285364388,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 197243.1517596952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 293083.48115451285,
            "unit": "ns/iter",
            "extra": "iterations: 2945\ncpu: 293079.5246179967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 386785.6141377882,
            "unit": "ns/iter",
            "extra": "iterations: 2221\ncpu: 386776.09185051767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 473728.120794296,
            "unit": "ns/iter",
            "extra": "iterations: 1813\ncpu: 473699.88968560396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 567627.3967426687,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 567603.2573289903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 530711.3149999622,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530699.5999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 604902.0270000938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 604896.9999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6777.935784072466,
            "unit": "ns/iter",
            "extra": "iterations: 103479\ncpu: 6777.578059316389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5459.28733271149,
            "unit": "ns/iter",
            "extra": "iterations: 128520\ncpu: 5458.983037659506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5396.712061864243,
            "unit": "ns/iter",
            "extra": "iterations: 128927\ncpu: 5396.681067580889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5482.651033996375,
            "unit": "ns/iter",
            "extra": "iterations: 127660\ncpu: 5482.370358765474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9704.44710129849,
            "unit": "ns/iter",
            "extra": "iterations: 72015\ncpu: 9703.778379504269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 54076.84705267494,
            "unit": "ns/iter",
            "extra": "iterations: 15319\ncpu: 54075.26600953065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 212480.93006993367,
            "unit": "ns/iter",
            "extra": "iterations: 4004\ncpu: 212480.1198801199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 173459.95729970094,
            "unit": "ns/iter",
            "extra": "iterations: 4918\ncpu: 173453.7006913379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 172696.94778385962,
            "unit": "ns/iter",
            "extra": "iterations: 4941\ncpu: 172691.62112932623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 181128.78727466252,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 181129.77730646817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 372260.21066204895,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 372236.32846087764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3172051.3501681653,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3171880.4713804782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2577584.1534247263,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2577443.287671239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2557057.3770491523,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2557007.650273217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2578633.2166666803,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2578597.7777777803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1546812.7920133667,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1546751.247920133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2518151.289972763,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2518046.3414634136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10871202.226804392,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 10871099.999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6346420.482993356,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6346076.870748304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12778311.686747383,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12777753.012048163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 54810.21412526266,
            "unit": "ns/iter",
            "extra": "iterations: 15136\ncpu: 54809.447674418596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 223378.3446741667,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 223373.33158858973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 178283.5081658299,
            "unit": "ns/iter",
            "extra": "iterations: 4776\ncpu: 178273.61809045225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 175102.86912821382,
            "unit": "ns/iter",
            "extra": "iterations: 4875\ncpu: 175093.7435897442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 180699.7194061588,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 180693.0646871695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 375213.3734259462,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 375177.1168041707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3166441.5612243563,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3166306.8027210794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2587080.130919134,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2586994.4289693567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2606242.6267408533,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2606169.359331466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2608788.583798823,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2608740.223463685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1578021.4016949763,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1578051.525423723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2530745.3243244337,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2530755.405405389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11067278.54639101,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11066987.628865963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6303461.040268657,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 6303326.845637578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50189.507348005915,
            "unit": "ns/iter",
            "extra": "iterations: 16399\ncpu: 50189.218854808314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 212686.45242236732,
            "unit": "ns/iter",
            "extra": "iterations: 4025\ncpu: 212743.2049689432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 174631.5057447538,
            "unit": "ns/iter",
            "extra": "iterations: 4874\ncpu: 174656.4218301202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 173007.70146520296,
            "unit": "ns/iter",
            "extra": "iterations: 4914\ncpu: 173007.36670736727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 178711.98528484927,
            "unit": "ns/iter",
            "extra": "iterations: 4757\ncpu: 178710.42673954114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 371622.16867467447,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 371593.1583476763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3167642.849829472,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3167527.303754272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2588778.8953167484,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2588636.639118444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2585469.848066216,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2585388.9502762486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2588491.9859941895,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2588562.464985995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1580249.9306261337,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1580235.1945854416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2544937.512261789,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2544904.904632151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3014.7993507051688,
            "unit": "ns/iter",
            "extra": "iterations: 232560\ncpu: 3014.6259029927746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 23382.478874185133,
            "unit": "ns/iter",
            "extra": "iterations: 29774\ncpu: 23382.498152750726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17526.893988331314,
            "unit": "ns/iter",
            "extra": "iterations: 39939\ncpu: 17527.284108265267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16451.36060834102,
            "unit": "ns/iter",
            "extra": "iterations: 42542\ncpu: 16451.530252456512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13194.497098243972,
            "unit": "ns/iter",
            "extra": "iterations: 52899\ncpu: 13194.256980283208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 87671.98611112122,
            "unit": "ns/iter",
            "extra": "iterations: 7992\ncpu: 87666.71671671714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 206897.1789814501,
            "unit": "ns/iter",
            "extra": "iterations: 3397\ncpu: 206891.49249337774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 51360.03111926476,
            "unit": "ns/iter",
            "extra": "iterations: 13625\ncpu: 51357.54862385303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 51187.963632369065,
            "unit": "ns/iter",
            "extra": "iterations: 13666\ncpu: 51188.09454119666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 51114.161339981125,
            "unit": "ns/iter",
            "extra": "iterations: 13642\ncpu: 51113.19454625478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 108164.4953646371,
            "unit": "ns/iter",
            "extra": "iterations: 6472\ncpu: 108158.5444993807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 96168.66451701126,
            "unit": "ns/iter",
            "extra": "iterations: 7288\ncpu: 96163.96816685045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25978.483899790845,
            "unit": "ns/iter",
            "extra": "iterations: 26863\ncpu: 25977.225179614874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 127695.33114154097,
            "unit": "ns/iter",
            "extra": "iterations: 5475\ncpu: 127691.7077625585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 102535.25836268294,
            "unit": "ns/iter",
            "extra": "iterations: 6816\ncpu: 102536.487676056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 104209.22185824631,
            "unit": "ns/iter",
            "extra": "iterations: 6716\ncpu: 104203.66289457986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 105172.12028265935,
            "unit": "ns/iter",
            "extra": "iterations: 6651\ncpu: 105166.80198466344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 192935.62003312213,
            "unit": "ns/iter",
            "extra": "iterations: 3624\ncpu: 192928.7251655637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 845867.8938480364,
            "unit": "ns/iter",
            "extra": "iterations: 829\ncpu: 845841.1338962673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 712887.4332313738,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 712896.0244648246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 716491.7802875229,
            "unit": "ns/iter",
            "extra": "iterations: 974\ncpu: 716492.6078028824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 725220.8701030663,
            "unit": "ns/iter",
            "extra": "iterations: 970\ncpu: 725207.2164948466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 462606.78042330476,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 462606.01851851743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 702368.9939819565,
            "unit": "ns/iter",
            "extra": "iterations: 997\ncpu: 702346.4393179548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 25981.825494636698,
            "unit": "ns/iter",
            "extra": "iterations: 26939\ncpu: 25980.29993689485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 128035.32711988385,
            "unit": "ns/iter",
            "extra": "iterations: 5472\ncpu: 128029.09356725201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 102779.49845838376,
            "unit": "ns/iter",
            "extra": "iterations: 6811\ncpu: 102775.20187931342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 104322.04939005723,
            "unit": "ns/iter",
            "extra": "iterations: 6722\ncpu: 104318.8039274036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 105614.05049132273,
            "unit": "ns/iter",
            "extra": "iterations: 6615\ncpu: 105616.53817082354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 195172.1278026838,
            "unit": "ns/iter",
            "extra": "iterations: 3568\ncpu: 195157.03475336224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 844327.3084337185,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 844297.4698795241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 721318.6896196818,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 721274.9229188125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 727629.2587991565,
            "unit": "ns/iter",
            "extra": "iterations: 966\ncpu: 727607.1428571366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 725752.8140495762,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 725761.5702479285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 463872.05023127265,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 463854.52742894617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 706385.9878910151,
            "unit": "ns/iter",
            "extra": "iterations: 991\ncpu: 706402.4217961661 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}