window.BENCHMARK_DATA = {
  "lastUpdate": 1702394258978,
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
        "date": 1702394250859,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9141.573891206384,
            "unit": "ns/iter",
            "extra": "iterations: 76457\ncpu: 9141.231018742561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 103375.42026175959,
            "unit": "ns/iter",
            "extra": "iterations: 8252\ncpu: 103371.08579738245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 201377.33280037073,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 201362.51713111004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 298562.95635608176,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 298555.9404225839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 388995.020937636,
            "unit": "ns/iter",
            "extra": "iterations: 2197\ncpu: 388967.2280382341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 484426.6273637239,
            "unit": "ns/iter",
            "extra": "iterations: 1798\ncpu: 484384.9833147938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 577763.2788844809,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 577722.6427622841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 549695.8590000531,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549678.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 618331.3369999724,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 618316.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7237.489344834455,
            "unit": "ns/iter",
            "extra": "iterations: 95869\ncpu: 7237.515776737007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5932.129581915543,
            "unit": "ns/iter",
            "extra": "iterations: 118373\ncpu: 5931.9650595997355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5863.286947032728,
            "unit": "ns/iter",
            "extra": "iterations: 119130\ncpu: 5863.141106354397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5933.114830911172,
            "unit": "ns/iter",
            "extra": "iterations: 117808\ncpu: 5932.85515414912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9968.074040754072,
            "unit": "ns/iter",
            "extra": "iterations: 70029\ncpu: 9967.913293064305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 55589.76891671623,
            "unit": "ns/iter",
            "extra": "iterations: 14696\ncpu: 55585.65596080571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 235020.58997534978,
            "unit": "ns/iter",
            "extra": "iterations: 3651\ncpu: 235009.25773760612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 186927.44185539306,
            "unit": "ns/iter",
            "extra": "iterations: 4592\ncpu: 186914.41637630673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 183379.13847804078,
            "unit": "ns/iter",
            "extra": "iterations: 4665\ncpu: 183371.57556270118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 186898.15787167728,
            "unit": "ns/iter",
            "extra": "iterations: 4567\ncpu: 186885.92073571304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 427503.58832259517,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 427475.8040573962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3169698.922818806,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3169418.120805373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2608944.5138890394,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2608814.722222223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2564823.4038464157,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2564658.791208795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2622355.37183104,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2622201.1267605647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1553753.3699999053,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1553659.6666666646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2526358.5543478443,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2526211.141304353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10660890.292928288,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10660392.92929294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6097709.324675096,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6097426.623376628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12870246.121950714,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12870128.04878048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 54988.225785083865,
            "unit": "ns/iter",
            "extra": "iterations: 15094\ncpu: 54986.82920365727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 229742.06223177136,
            "unit": "ns/iter",
            "extra": "iterations: 3728\ncpu: 229735.64914163135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 185154.7742214441,
            "unit": "ns/iter",
            "extra": "iterations: 4624\ncpu: 185150.04325259407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 190680.08290731226,
            "unit": "ns/iter",
            "extra": "iterations: 4499\ncpu: 190675.15003334038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 186463.60502731372,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 186458.14207650253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 432164.63477830705,
            "unit": "ns/iter",
            "extra": "iterations: 2007\ncpu: 432158.5949177863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3173768.5136055523,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3173685.0340136117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2632040.5436619287,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2631966.4788732426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2591636.7950140084,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2591537.119113583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2627760.179775208,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2627616.8539325874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1547559.447412223,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1547516.6944908092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2536848.3106267476,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2536738.9645776567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10815482.0499999,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10815088.999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6227284.85430476,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6227098.0132450145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 56449.248644619154,
            "unit": "ns/iter",
            "extra": "iterations: 14756\ncpu: 56448.19056654906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 232713.38430311414,
            "unit": "ns/iter",
            "extra": "iterations: 3695\ncpu: 232707.14479025707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 184943.42829330833,
            "unit": "ns/iter",
            "extra": "iterations: 4623\ncpu: 184940.92580575353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 184390.13834587272,
            "unit": "ns/iter",
            "extra": "iterations: 4655\ncpu: 184388.6573576799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 187566.97701903424,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 187565.7474283213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 419376.6081474238,
            "unit": "ns/iter",
            "extra": "iterations: 2062\ncpu: 419373.2298739094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3158953.657627489,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3158951.186440663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2602148.108635105,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2602155.4317548648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2639110.6288091405,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2639059.833795014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2625078.471910098,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2625016.292134822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1557595.1524287483,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1557539.6984924532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2535235.7038046406,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2535123.9130434706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3259.840834523889,
            "unit": "ns/iter",
            "extra": "iterations: 214877\ncpu: 3259.7918809365547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 23337.598202396715,
            "unit": "ns/iter",
            "extra": "iterations: 30040\ncpu: 23337.19041278295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 18105.309175119994,
            "unit": "ns/iter",
            "extra": "iterations: 38648\ncpu: 18104.657420823933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17880.37068241459,
            "unit": "ns/iter",
            "extra": "iterations: 39287\ncpu: 17879.46139944522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13389.127381112006,
            "unit": "ns/iter",
            "extra": "iterations: 52339\ncpu: 13389.015839049278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 96673.8606704372,
            "unit": "ns/iter",
            "extra": "iterations: 7249\ncpu: 96673.25148296365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 206289.67865567462,
            "unit": "ns/iter",
            "extra": "iterations: 3392\ncpu: 206286.55660377457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 50984.93198716892,
            "unit": "ns/iter",
            "extra": "iterations: 13718\ncpu: 50985.121737862384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 49897.91053494394,
            "unit": "ns/iter",
            "extra": "iterations: 14039\ncpu: 49897.63515919885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 50654.92992616374,
            "unit": "ns/iter",
            "extra": "iterations: 13814\ncpu: 50653.77877515537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 107076.97254004267,
            "unit": "ns/iter",
            "extra": "iterations: 6555\ncpu: 107075.94202898658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 95225.5053617451,
            "unit": "ns/iter",
            "extra": "iterations: 7367\ncpu: 95224.85407900072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 27958.79464250107,
            "unit": "ns/iter",
            "extra": "iterations: 25049\ncpu: 27958.54924348284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 136392.9687804779,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 136390.1463414633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 112313.0878150493,
            "unit": "ns/iter",
            "extra": "iterations: 6229\ncpu: 112309.15074650857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 111487.00939789548,
            "unit": "ns/iter",
            "extra": "iterations: 6278\ncpu: 111485.25007964452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 113682.25611345808,
            "unit": "ns/iter",
            "extra": "iterations: 6134\ncpu: 113682.75187479521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 203711.49491129804,
            "unit": "ns/iter",
            "extra": "iterations: 3439\ncpu: 203709.62489095904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 879417.1130653264,
            "unit": "ns/iter",
            "extra": "iterations: 796\ncpu: 879411.1809045224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 742454.286624164,
            "unit": "ns/iter",
            "extra": "iterations: 942\ncpu: 742425.6900212317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 731639.9517818942,
            "unit": "ns/iter",
            "extra": "iterations: 954\ncpu: 731623.3752620588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 747757.9072494786,
            "unit": "ns/iter",
            "extra": "iterations: 938\ncpu: 747753.4115138588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 476463.95923914167,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 476456.7255434799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 725479.4839710159,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 725467.838676322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 28023.559563759776,
            "unit": "ns/iter",
            "extra": "iterations: 25032\ncpu: 28023.681687439792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 140813.37763925895,
            "unit": "ns/iter",
            "extra": "iterations: 4973\ncpu: 140812.4673235481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 111476.55828026719,
            "unit": "ns/iter",
            "extra": "iterations: 6280\ncpu: 111475.55732483938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 112610.31000324577,
            "unit": "ns/iter",
            "extra": "iterations: 6158\ncpu: 112609.32120818544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 113791.7657012629,
            "unit": "ns/iter",
            "extra": "iterations: 6146\ncpu: 113789.52164009113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 206630.58767083372,
            "unit": "ns/iter",
            "extra": "iterations: 3439\ncpu: 206628.9037510918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 877500.5633626353,
            "unit": "ns/iter",
            "extra": "iterations: 797\ncpu: 877503.2622333699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 745954.0706637789,
            "unit": "ns/iter",
            "extra": "iterations: 934\ncpu: 745946.252676657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 739647.3560042488,
            "unit": "ns/iter",
            "extra": "iterations: 941\ncpu: 739641.5515409075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 746662.768162358,
            "unit": "ns/iter",
            "extra": "iterations: 936\ncpu: 746648.3974359068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 479273.09952279355,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 479267.9618268625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 726824.1339563042,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 726806.6458982367 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}