window.BENCHMARK_DATA = {
  "lastUpdate": 1702392456287,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-14 18.04 Debug c++-17": [
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
        "date": 1702392454831,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9244.2475062251,
            "unit": "ns/iter",
            "extra": "iterations: 75889\ncpu: 9243.958940030834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 105182.29739685566,
            "unit": "ns/iter",
            "extra": "iterations: 8144\ncpu: 105181.21316306481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 203672.55894686884,
            "unit": "ns/iter",
            "extra": "iterations: 4292\ncpu: 203668.84902143522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 302891.0997558425,
            "unit": "ns/iter",
            "extra": "iterations: 2867\ncpu: 302886.85036623647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 396615.4158233843,
            "unit": "ns/iter",
            "extra": "iterations: 2174\ncpu: 396601.37994480244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 494181.21040725627,
            "unit": "ns/iter",
            "extra": "iterations: 1768\ncpu: 494170.1923076923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 593627.6154366505,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 593581.3134732569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 551604.0090000161,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551595.5000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 628079.2530000099,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 628064.6000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7228.511212979604,
            "unit": "ns/iter",
            "extra": "iterations: 97075\ncpu: 7228.35642544425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5905.740063155705,
            "unit": "ns/iter",
            "extra": "iterations: 118121\ncpu: 5905.551934033751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5880.8551404606105,
            "unit": "ns/iter",
            "extra": "iterations: 119357\ncpu: 5880.671431084889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5921.263618102498,
            "unit": "ns/iter",
            "extra": "iterations: 118482\ncpu: 5921.021758579372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9857.306171376862,
            "unit": "ns/iter",
            "extra": "iterations: 70908\ncpu: 9857.172674451396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 54887.85000995849,
            "unit": "ns/iter",
            "extra": "iterations: 15061\ncpu: 54886.222694376185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 220619.85161291243,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 220613.88387096772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 175799.10076086182,
            "unit": "ns/iter",
            "extra": "iterations: 4863\ncpu: 175791.50730002092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 175859.99733059152,
            "unit": "ns/iter",
            "extra": "iterations: 4870\ncpu: 175852.85420944585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 176104.0030927707,
            "unit": "ns/iter",
            "extra": "iterations: 4850\ncpu: 176086.26804123734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 411172.0469416946,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 411135.41963015567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3197772.068259459,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3197723.890784974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2629980.2359549277,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2629881.741573029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2610774.3370787604,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2610745.786516856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2632288.2711865865,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2632151.6949152495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1553819.0705882232,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1553736.3025210085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2541367.5300547853,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2541188.2513661133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10721875.101010004,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10721576.767676784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6315695.101350813,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 6315574.32432433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12879300.280487992,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12878674.390243903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 49330.54946627365,
            "unit": "ns/iter",
            "extra": "iterations: 16769\ncpu: 49328.00405510164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 226911.37954848,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 226902.3904382465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 180573.7521025936,
            "unit": "ns/iter",
            "extra": "iterations: 4756\ncpu: 180564.63414634205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 180199.19826857373,
            "unit": "ns/iter",
            "extra": "iterations: 4736\ncpu: 180192.56756756746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 181760.41634656113,
            "unit": "ns/iter",
            "extra": "iterations: 4686\ncpu: 181754.73751600602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 420001.6529525655,
            "unit": "ns/iter",
            "extra": "iterations: 2066\ncpu: 419985.2371732838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3235010.9722223408,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3234876.736111102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2650918.7816092717,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2650832.183908042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2645826.4107648744,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2645712.7478753417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2646605.433427879,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2646487.2521246467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1548523.001661071,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1548445.3488372117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2562429.468493102,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2562363.5616438426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10858396.111110907,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10857829.292929238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6160788.6754966825,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6160477.483443693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 49764.62547448313,
            "unit": "ns/iter",
            "extra": "iterations: 16597\ncpu: 49763.493402421795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 222911.7805764761,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 222901.14256037353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 179363.3628392423,
            "unit": "ns/iter",
            "extra": "iterations: 4790\ncpu: 179350.73068893567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 174470.66109836698,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 174460.47191480474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 174936.03320352364,
            "unit": "ns/iter",
            "extra": "iterations: 4879\ncpu: 174925.80446812828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 409495.127830198,
            "unit": "ns/iter",
            "extra": "iterations: 2120\ncpu: 409471.41509433923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3211528.0034480714,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3211336.5517241294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2625958.5464788573,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2625887.887323946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2635334.825842857,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2635112.3595505576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2631582.5070424313,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2631355.211267611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1565844.177172067,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1565739.6933560509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2561686.504109524,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2561521.0958904037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3323.3063002335916,
            "unit": "ns/iter",
            "extra": "iterations: 212135\ncpu: 3323.095198812076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22775.216513642372,
            "unit": "ns/iter",
            "extra": "iterations: 30714\ncpu: 22772.960213583312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17483.225506842093,
            "unit": "ns/iter",
            "extra": "iterations: 40052\ncpu: 17482.050833915855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17677.03627911786,
            "unit": "ns/iter",
            "extra": "iterations: 39582\ncpu: 17675.67833863881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13522.201264183384,
            "unit": "ns/iter",
            "extra": "iterations: 51733\ncpu: 13520.828098119278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 93343.7116515294,
            "unit": "ns/iter",
            "extra": "iterations: 7484\ncpu: 93341.87600213743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 208041.34995547513,
            "unit": "ns/iter",
            "extra": "iterations: 3369\ncpu: 208035.4407836144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 51475.28334194558,
            "unit": "ns/iter",
            "extra": "iterations: 13549\ncpu: 51473.57738578531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 51217.411429414315,
            "unit": "ns/iter",
            "extra": "iterations: 13684\ncpu: 51215.62408652391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 51188.874726236754,
            "unit": "ns/iter",
            "extra": "iterations: 13698\ncpu: 51183.66914878157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 109021.14014028334,
            "unit": "ns/iter",
            "extra": "iterations: 6415\ncpu: 109016.14964926023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 90969.47239183268,
            "unit": "ns/iter",
            "extra": "iterations: 7697\ncpu: 90963.89502403406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 29021.057110860496,
            "unit": "ns/iter",
            "extra": "iterations: 24111\ncpu: 29020.322674298568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 139843.81340001163,
            "unit": "ns/iter",
            "extra": "iterations: 5000\ncpu: 139837.59999999846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 112194.42132472439,
            "unit": "ns/iter",
            "extra": "iterations: 6190\ncpu: 112188.72374798005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 112673.6580645119,
            "unit": "ns/iter",
            "extra": "iterations: 6200\ncpu: 112668.467741935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 114656.92882793128,
            "unit": "ns/iter",
            "extra": "iterations: 6126\ncpu: 114652.84035259347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 204536.42402101695,
            "unit": "ns/iter",
            "extra": "iterations: 3422\ncpu: 204527.3524254817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 892714.5727040754,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 892674.7448979701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 749424.335123518,
            "unit": "ns/iter",
            "extra": "iterations: 931\ncpu: 749402.5778732505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 752996.8545258543,
            "unit": "ns/iter",
            "extra": "iterations: 928\ncpu: 752930.7112068945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 756640.8622559427,
            "unit": "ns/iter",
            "extra": "iterations: 922\ncpu: 756577.4403470765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 476787.52316078416,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 476748.29700272396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 728798.2164410973,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 728744.2247658685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 28421.69308456535,
            "unit": "ns/iter",
            "extra": "iterations: 24655\ncpu: 28419.793145406387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 140362.06567880072,
            "unit": "ns/iter",
            "extra": "iterations: 4994\ncpu: 140351.6820184227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 111857.30404975456,
            "unit": "ns/iter",
            "extra": "iterations: 6272\ncpu: 111855.07015306107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 113210.6667740496,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 113207.89177001215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 114093.55622457067,
            "unit": "ns/iter",
            "extra": "iterations: 6145\ncpu: 114086.8836452414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 202977.73889049824,
            "unit": "ns/iter",
            "extra": "iterations: 3443\ncpu: 202954.54545454247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 890308.3125793802,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 890239.7712833451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 748518.987179484,
            "unit": "ns/iter",
            "extra": "iterations: 936\ncpu: 748477.029914532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 748123.7959401461,
            "unit": "ns/iter",
            "extra": "iterations: 936\ncpu: 748104.0598290683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 753831.4488697329,
            "unit": "ns/iter",
            "extra": "iterations: 929\ncpu: 753788.8051668471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 474311.395396029,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 474286.6621530125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 730014.0617154791,
            "unit": "ns/iter",
            "extra": "iterations: 956\ncpu: 729966.5271966608 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}