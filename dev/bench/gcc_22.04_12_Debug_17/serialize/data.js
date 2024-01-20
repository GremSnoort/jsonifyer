window.BENCHMARK_DATA = {
  "lastUpdate": 1705772323355,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-12 22.04 Debug c++-17": [
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
        "date": 1702399122067,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8153.242836869284,
            "unit": "ns/iter",
            "extra": "iterations: 85263\ncpu: 8152.462381103175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99673.93031643266,
            "unit": "ns/iter",
            "extra": "iterations: 8596\ncpu: 99669.83480688694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 191974.24675896182,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 191965.34827510442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 286333.719060225,
            "unit": "ns/iter",
            "extra": "iterations: 3022\ncpu: 286325.3474520186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 372686.6752062291,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 372670.2996092052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 465631.72480000503,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 465598.07999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 555736.126994249,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 555731.4613911931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 519356.8419999792,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519338.49999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 591421.4739999579,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 591401.4999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6399.02266428882,
            "unit": "ns/iter",
            "extra": "iterations: 109335\ncpu: 6398.95550372708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5100.85188398037,
            "unit": "ns/iter",
            "extra": "iterations: 137183\ncpu: 5100.7909143261195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5097.405467252434,
            "unit": "ns/iter",
            "extra": "iterations: 137217\ncpu: 5097.329776922678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5196.1474780053,
            "unit": "ns/iter",
            "extra": "iterations: 134576\ncpu: 5196.124123172035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8783.658075277794,
            "unit": "ns/iter",
            "extra": "iterations: 79731\ncpu: 8783.599854510792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50469.44283629269,
            "unit": "ns/iter",
            "extra": "iterations: 16444\ncpu: 50469.259304305604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 207866.89218069447,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 207863.42884895575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 169259.8600749819,
            "unit": "ns/iter",
            "extra": "iterations: 5067\ncpu: 169259.10795342413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 168668.8262586438,
            "unit": "ns/iter",
            "extra": "iterations: 5065\ncpu: 168664.54096742292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 169424.82551929404,
            "unit": "ns/iter",
            "extra": "iterations: 5055\ncpu: 169423.30365974258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 379228.797556739,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 379214.31064572517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3137309.243333372,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3137108.0000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2547687.709239362,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2547628.532608694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2544264.9619564675,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2544201.6304347883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2559047.7950819307,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2559011.475409833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1513306.678571386,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1513289.7727272732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2492413.9760638024,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2492321.5425531887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10520601.613861665,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10520417.821782164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5961822.974358874,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5961778.8461538525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12076154.10227318,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12075685.227272738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 48973.9269246745,
            "unit": "ns/iter",
            "extra": "iterations: 16873\ncpu: 48971.03656729675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 221080.40978287518,
            "unit": "ns/iter",
            "extra": "iterations: 4007\ncpu: 221067.25729972566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 173608.52975708726,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 173600.5465587042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 172633.91696897073,
            "unit": "ns/iter",
            "extra": "iterations: 4962\ncpu: 172628.25473599418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 173165.9533941347,
            "unit": "ns/iter",
            "extra": "iterations: 4935\ncpu: 173159.97973657463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 380720.22285462724,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 380708.23117337737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3130408.95637591,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3130359.3959731665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2561415.4600549783,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2561346.5564738237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2553069.0218579117,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2553013.387978128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2573116.099173686,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2573081.5426997184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1508455.0568181535,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1508431.493506494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2482009.0373332277,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2481954.1333333366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10656589.04000088,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10656181.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5947223.145569693,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5947168.35443035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47280.875371940005,
            "unit": "ns/iter",
            "extra": "iterations: 17476\ncpu: 47279.9038681623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 212090.98408355706,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 212086.14772444603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 170091.05115444545,
            "unit": "ns/iter",
            "extra": "iterations: 5024\ncpu: 170085.60907643288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 170653.98997393646,
            "unit": "ns/iter",
            "extra": "iterations: 4987\ncpu: 170645.4581912981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 172853.21412625487,
            "unit": "ns/iter",
            "extra": "iterations: 4927\ncpu: 172844.79399228745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 379690.21537793434,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 379665.5307994771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3127756.9000000465,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3127643.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2540206.491847849,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2540181.5217391243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2545390.223433397,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2545385.28610354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2565205.9150684495,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2565151.780821921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1495422.0738361713,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1495403.2102728728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2472205.91005297,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2472152.380952392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2735.603328715556,
            "unit": "ns/iter",
            "extra": "iterations: 256255\ncpu: 2735.5243800121134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21608.568585580157,
            "unit": "ns/iter",
            "extra": "iterations: 32310\ncpu: 21607.910863509616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16249.112311016983,
            "unit": "ns/iter",
            "extra": "iterations: 43059\ncpu: 16249.011820989872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16053.831082470408,
            "unit": "ns/iter",
            "extra": "iterations: 43761\ncpu: 16053.757912296329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12468.479121818225,
            "unit": "ns/iter",
            "extra": "iterations: 56207\ncpu: 12468.441653174828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 85203.62852970576,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 85202.50730282336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 199425.18830243906,
            "unit": "ns/iter",
            "extra": "iterations: 3505\ncpu: 199420.02853067004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48235.85439768203,
            "unit": "ns/iter",
            "extra": "iterations: 14519\ncpu: 48234.65114677314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48240.52208364939,
            "unit": "ns/iter",
            "extra": "iterations: 14513\ncpu: 48240.27423689112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48514.30861277206,
            "unit": "ns/iter",
            "extra": "iterations: 14374\ncpu: 48513.32266592506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 102836.26725402591,
            "unit": "ns/iter",
            "extra": "iterations: 6810\ncpu: 102834.08223201067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91645.49934606321,
            "unit": "ns/iter",
            "extra": "iterations: 7646\ncpu: 91644.50693172857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 23098.815180103706,
            "unit": "ns/iter",
            "extra": "iterations: 30316\ncpu: 23098.749835070546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 112993.0496694032,
            "unit": "ns/iter",
            "extra": "iterations: 6201\ncpu: 112991.56587647158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 91896.60831167828,
            "unit": "ns/iter",
            "extra": "iterations: 7700\ncpu: 91893.58441558441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 91243.36846223853,
            "unit": "ns/iter",
            "extra": "iterations: 7667\ncpu: 91241.01995565309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 91185.0946737845,
            "unit": "ns/iter",
            "extra": "iterations: 7679\ncpu: 91182.90141945533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 169467.82051282906,
            "unit": "ns/iter",
            "extra": "iterations: 4134\ncpu: 169466.6908563162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 826228.8508875659,
            "unit": "ns/iter",
            "extra": "iterations: 845\ncpu: 826216.4497041381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 686261.1956735804,
            "unit": "ns/iter",
            "extra": "iterations: 1017\ncpu: 686235.1032448475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 685452.4559686272,
            "unit": "ns/iter",
            "extra": "iterations: 1022\ncpu: 685438.4540117382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 693395.0615079642,
            "unit": "ns/iter",
            "extra": "iterations: 1008\ncpu: 693380.1587301587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 431942.35740736953,
            "unit": "ns/iter",
            "extra": "iterations: 1620\ncpu: 431932.59259259107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 674418.6641001106,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 674386.0442733497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 23220.138557412436,
            "unit": "ns/iter",
            "extra": "iterations: 30168\ncpu: 23219.87867939569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 114534.26688471198,
            "unit": "ns/iter",
            "extra": "iterations: 6115\ncpu: 114531.79067865973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 91636.28513370825,
            "unit": "ns/iter",
            "extra": "iterations: 7628\ncpu: 91633.00996329429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 92317.24294381845,
            "unit": "ns/iter",
            "extra": "iterations: 7582\ncpu: 92316.1171194945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 92284.65717299268,
            "unit": "ns/iter",
            "extra": "iterations: 7584\ncpu: 92282.30485231968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 172026.99293200276,
            "unit": "ns/iter",
            "extra": "iterations: 4103\ncpu: 172026.395320498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 820323.7189695063,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 820314.9882903926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 690808.4852070975,
            "unit": "ns/iter",
            "extra": "iterations: 1014\ncpu: 690785.6015779048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 688172.4259077979,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 688163.6898920498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 692123.9851778514,
            "unit": "ns/iter",
            "extra": "iterations: 1012\ncpu: 692105.9288537598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 432283.74737487745,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 432277.94935145526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 674892.6711668633,
            "unit": "ns/iter",
            "extra": "iterations: 1037\ncpu: 674867.6952748287 ns\nthreads: 1"
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
        "date": 1702409374639,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7547.231984969801,
            "unit": "ns/iter",
            "extra": "iterations: 90480\ncpu: 7546.86118479222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94444.0866828554,
            "unit": "ns/iter",
            "extra": "iterations: 9056\ncpu: 94443.27517667843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 182721.42997284696,
            "unit": "ns/iter",
            "extra": "iterations: 4791\ncpu: 182719.84971822164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 273717.2494467153,
            "unit": "ns/iter",
            "extra": "iterations: 3163\ncpu: 273712.8042997155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 356060.610741042,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 356052.58118234837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 444361.7793068183,
            "unit": "ns/iter",
            "extra": "iterations: 1962\ncpu: 444355.86136595317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 532856.2767257076,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 532849.5418448383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 636732.8442389857,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 636717.2119487909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 580338.7659999543,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580327.1999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5700.380043411963,
            "unit": "ns/iter",
            "extra": "iterations: 123007\ncpu: 5700.3894087328335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4704.302915490798,
            "unit": "ns/iter",
            "extra": "iterations: 148860\ncpu: 4704.199919387336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4747.516869132458,
            "unit": "ns/iter",
            "extra": "iterations: 147103\ncpu: 4747.420514877334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4789.7092647606805,
            "unit": "ns/iter",
            "extra": "iterations: 146102\ncpu: 4789.601100600956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8481.620369025195,
            "unit": "ns/iter",
            "extra": "iterations: 82596\ncpu: 8481.486996948997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46871.76261565316,
            "unit": "ns/iter",
            "extra": "iterations: 17617\ncpu: 46869.12073565302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 197826.18282294337,
            "unit": "ns/iter",
            "extra": "iterations: 4343\ncpu: 197815.63435413322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 159698.16208178442,
            "unit": "ns/iter",
            "extra": "iterations: 5380\ncpu: 159690.66914498087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 158831.36923931714,
            "unit": "ns/iter",
            "extra": "iterations: 5403\ncpu: 158824.83805293337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 160305.07458200285,
            "unit": "ns/iter",
            "extra": "iterations: 5323\ncpu: 160294.30772120957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 358293.54747225496,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 358260.4603370312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2876529.167182829,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2876440.866873064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2385581.6214835825,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2385527.1099744276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2393045.827763431,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2393001.799485861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2408942.797402445,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2408819.480519479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1438697.1671825766,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1438680.8049535614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2314799.0798004097,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2314757.3566084728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10092763.619047131,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10092058.095238106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5624792.493975577,
            "unit": "ns/iter",
            "extra": "iterations: 166\ncpu: 5624672.289156627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11685056.228260564,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11684567.391304374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47890.060063342775,
            "unit": "ns/iter",
            "extra": "iterations: 17365\ncpu: 47889.0526921971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 199609.89221138725,
            "unit": "ns/iter",
            "extra": "iterations: 4314\ncpu: 199603.9870190083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 160572.74225457993,
            "unit": "ns/iter",
            "extra": "iterations: 5358\ncpu: 160569.55953714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 162450.04717696423,
            "unit": "ns/iter",
            "extra": "iterations: 5278\ncpu: 162444.50549450595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 163383.82369669827,
            "unit": "ns/iter",
            "extra": "iterations: 5275\ncpu: 163379.65876777234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 352578.57241103065,
            "unit": "ns/iter",
            "extra": "iterations: 2472\ncpu: 352568.0420711972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2913717.975000196,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2913693.4374999865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2414041.295336706,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2414007.253886002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2412807.683937965,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2412736.010362704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2421176.9194805613,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2421156.6233766284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1453979.1433022001,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1453945.950155759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2343496.8992441506,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2343441.561712838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10385091.269231321,
            "unit": "ns/iter",
            "extra": "iterations: 104\ncpu: 10368151.923076974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5719634.71779126,
            "unit": "ns/iter",
            "extra": "iterations: 163\ncpu: 5719377.300613473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 49454.16412940412,
            "unit": "ns/iter",
            "extra": "iterations: 16816\ncpu: 49451.86726926763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 198180.42745458917,
            "unit": "ns/iter",
            "extra": "iterations: 4349\ncpu: 198171.6716486553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 158328.8056880678,
            "unit": "ns/iter",
            "extra": "iterations: 5450\ncpu: 158322.91743119335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 159613.68887653342,
            "unit": "ns/iter",
            "extra": "iterations: 5403\ncpu: 159604.31241902633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 160698.2546029329,
            "unit": "ns/iter",
            "extra": "iterations: 5377\ncpu: 160691.1846754691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 349831.56942216464,
            "unit": "ns/iter",
            "extra": "iterations: 2492\ncpu: 349815.9711075432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2931351.605015748,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2931241.065830737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2400726.5347042205,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2400621.8508997364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2425098.132812368,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2424972.6562500056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2429571.23958328,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2429579.9479166674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1464165.8692913037,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1464090.708661413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2346825.261964604,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2346723.6775818733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2714.9170267125733,
            "unit": "ns/iter",
            "extra": "iterations: 257143\ncpu: 2714.76104735499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19183.89453649111,
            "unit": "ns/iter",
            "extra": "iterations: 36515\ncpu: 19183.201424072293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15054.557933183985,
            "unit": "ns/iter",
            "extra": "iterations: 46545\ncpu: 15054.424750241573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15130.12058988491,
            "unit": "ns/iter",
            "extra": "iterations: 46314\ncpu: 15130.085935138388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11742.536688333683,
            "unit": "ns/iter",
            "extra": "iterations: 59692\ncpu: 11741.885009716665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 79002.33896968052,
            "unit": "ns/iter",
            "extra": "iterations: 8871\ncpu: 78996.78728441073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 184226.90018435824,
            "unit": "ns/iter",
            "extra": "iterations: 3797\ncpu: 184217.88253884728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45463.743097156665,
            "unit": "ns/iter",
            "extra": "iterations: 15356\ncpu: 45461.2724667882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45704.30431945318,
            "unit": "ns/iter",
            "extra": "iterations: 15326\ncpu: 45703.47122536903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45972.04340118503,
            "unit": "ns/iter",
            "extra": "iterations: 15230\ncpu: 45972.16677609987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 97141.80877655496,
            "unit": "ns/iter",
            "extra": "iterations: 7201\ncpu: 97141.00819330693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 86385.53768349189,
            "unit": "ns/iter",
            "extra": "iterations: 8107\ncpu: 86379.63488343355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20926.381583660288,
            "unit": "ns/iter",
            "extra": "iterations: 33492\ncpu: 20925.29559297774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 101029.43615640099,
            "unit": "ns/iter",
            "extra": "iterations: 6931\ncpu: 101023.6473813302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81371.25801207399,
            "unit": "ns/iter",
            "extra": "iterations: 8612\ncpu: 81369.60055736193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 82182.99812096042,
            "unit": "ns/iter",
            "extra": "iterations: 8515\ncpu: 82182.32530828091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 83185.30593824766,
            "unit": "ns/iter",
            "extra": "iterations: 8420\ncpu: 83184.78622327742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 157242.97818754503,
            "unit": "ns/iter",
            "extra": "iterations: 4447\ncpu: 157234.2927816506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 771336.0661521158,
            "unit": "ns/iter",
            "extra": "iterations: 907\ncpu: 771314.4432194144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 650084.0612245286,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 650071.4285714306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 652477.2969188497,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 652479.9253034458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 656643.0384614599,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 656637.0544090087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 413224.6062574076,
            "unit": "ns/iter",
            "extra": "iterations: 1694\ncpu: 413221.310507667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 636710.0851647985,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 636689.1941391956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21284.731355984437,
            "unit": "ns/iter",
            "extra": "iterations: 32906\ncpu: 21284.02115115789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 105336.53460156082,
            "unit": "ns/iter",
            "extra": "iterations: 6676\ncpu: 105333.89754344057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 83552.97431915624,
            "unit": "ns/iter",
            "extra": "iterations: 8372\ncpu: 83551.8394648825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 83155.93319093491,
            "unit": "ns/iter",
            "extra": "iterations: 8427\ncpu: 83152.92512163243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84139.83285303117,
            "unit": "ns/iter",
            "extra": "iterations: 8328\ncpu: 84139.08501440889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 158065.73188898366,
            "unit": "ns/iter",
            "extra": "iterations: 4431\ncpu: 158066.28300609282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 765633.4385965368,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 765605.9210526285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 649554.650925876,
            "unit": "ns/iter",
            "extra": "iterations: 1080\ncpu: 649545.0925925974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 655759.7125469132,
            "unit": "ns/iter",
            "extra": "iterations: 1068\ncpu: 655744.382022481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 657427.2831607863,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 657397.742238943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 412632.5439010297,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 412628.57984679186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 637503.1651460453,
            "unit": "ns/iter",
            "extra": "iterations: 1096\ncpu: 637441.3321167856 ns\nthreads: 1"
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
        "date": 1702412792143,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6788.022175096106,
            "unit": "ns/iter",
            "extra": "iterations: 103269\ncpu: 6787.735913003902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65843.7427533455,
            "unit": "ns/iter",
            "extra": "iterations: 12937\ncpu: 65840.67403571152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 125727.58199541265,
            "unit": "ns/iter",
            "extra": "iterations: 6976\ncpu: 125723.56651376147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 185118.10536398835,
            "unit": "ns/iter",
            "extra": "iterations: 4698\ncpu: 185109.66368667525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 245148.5811917267,
            "unit": "ns/iter",
            "extra": "iterations: 3541\ncpu: 245140.63823778584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 301620.00840924855,
            "unit": "ns/iter",
            "extra": "iterations: 2854\ncpu: 301603.0133146462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 361233.1430348062,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 361217.33001658355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 419096.4282954664,
            "unit": "ns/iter",
            "extra": "iterations: 2071\ncpu: 419077.88507967134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 481763.59001092316,
            "unit": "ns/iter",
            "extra": "iterations: 1822\ncpu: 481755.37870472006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5066.049948226834,
            "unit": "ns/iter",
            "extra": "iterations: 138103\ncpu: 5065.759614200992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4299.732675148256,
            "unit": "ns/iter",
            "extra": "iterations: 163176\ncpu: 4299.653748100216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4262.003495651717,
            "unit": "ns/iter",
            "extra": "iterations: 164204\ncpu: 4261.766461231151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4289.15453849712,
            "unit": "ns/iter",
            "extra": "iterations: 163325\ncpu: 4289.174345629883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7615.087225281944,
            "unit": "ns/iter",
            "extra": "iterations: 92049\ncpu: 7614.655237971085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30834.42481914448,
            "unit": "ns/iter",
            "extra": "iterations: 26955\ncpu: 30833.90094602118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 137080.346742122,
            "unit": "ns/iter",
            "extra": "iterations: 6538\ncpu: 137074.3805445089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106942.48367397372,
            "unit": "ns/iter",
            "extra": "iterations: 8024\ncpu: 106941.93668993021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 105182.25012261367,
            "unit": "ns/iter",
            "extra": "iterations: 8156\ncpu: 105176.74104953409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 106117.05174339273,
            "unit": "ns/iter",
            "extra": "iterations: 8059\ncpu: 106115.36170740759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 249512.69925244912,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 249496.40598044888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1986369.1868365544,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1986333.9702760126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1641226.0884955477,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1641141.5929203525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1642592.2796460593,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1642537.1681415956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1647301.210619337,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1647211.6814159285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 979895.7281348831,
            "unit": "ns/iter",
            "extra": "iterations: 949\ncpu: 979890.5163329819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1597959.8862068949,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1597878.6206896554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6717424.369999208,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6717091.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3694556.011857382,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3694376.6798418853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8106077.350746614,
            "unit": "ns/iter",
            "extra": "iterations: 134\ncpu: 8105940.298507445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30520.913684520998,
            "unit": "ns/iter",
            "extra": "iterations: 26994\ncpu: 30519.541379565824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 133545.89438480712,
            "unit": "ns/iter",
            "extra": "iterations: 6429\ncpu: 133543.50598848923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 108795.99478902326,
            "unit": "ns/iter",
            "extra": "iterations: 7868\ncpu: 108791.12862226795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 107877.93246133068,
            "unit": "ns/iter",
            "extra": "iterations: 7951\ncpu: 107878.40523204622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 107882.57211356651,
            "unit": "ns/iter",
            "extra": "iterations: 7925\ncpu: 107877.16088328137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 252731.7559489285,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 252730.26697620394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1997611.3849462084,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1997529.8924731165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1658323.7508897746,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1658312.9893238444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1651960.1174376332,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1651924.3772242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1651983.5133215534,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1651933.5701598509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 989098.0659574635,
            "unit": "ns/iter",
            "extra": "iterations: 940\ncpu: 989074.3617021256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1608611.7530225918,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1608550.9499136433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6755090.400000654,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6754908.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3760395.798386918,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3760195.564516144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29593.110733451653,
            "unit": "ns/iter",
            "extra": "iterations: 27950\ncpu: 29592.912343470543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 128088.19313944678,
            "unit": "ns/iter",
            "extra": "iterations: 6705\ncpu: 128082.40119313943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 107106.12221107518,
            "unit": "ns/iter",
            "extra": "iterations: 7978\ncpu: 107105.22687390356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 105354.98647152833,
            "unit": "ns/iter",
            "extra": "iterations: 8131\ncpu: 105353.04390603787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 104889.12104305092,
            "unit": "ns/iter",
            "extra": "iterations: 8245\ncpu: 104887.11946634321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 247187.3356028398,
            "unit": "ns/iter",
            "extra": "iterations: 3525\ncpu: 247180.3687943252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1986983.729787116,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1986953.8297872348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1647990.5643739295,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1647905.9964726653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1649525.9240283326,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1649500.3533568913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1650490.1380531252,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1650372.9203539824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 987721.7024441496,
            "unit": "ns/iter",
            "extra": "iterations: 941\ncpu: 987668.2252922442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1597561.4837049479,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1597474.7855917637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2684.2008526345,
            "unit": "ns/iter",
            "extra": "iterations: 260604\ncpu: 2684.16371199215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 13948.996872883443,
            "unit": "ns/iter",
            "extra": "iterations: 50206\ncpu: 13948.117754849962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10966.22315822464,
            "unit": "ns/iter",
            "extra": "iterations: 63865\ncpu: 10966.136381429558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11467.484667104407,
            "unit": "ns/iter",
            "extra": "iterations: 60980\ncpu: 11467.320432928904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9237.797579524575,
            "unit": "ns/iter",
            "extra": "iterations: 75605\ncpu: 9237.482970702973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 56865.255220608095,
            "unit": "ns/iter",
            "extra": "iterations: 12307\ncpu: 56864.6298854309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 122056.64051603974,
            "unit": "ns/iter",
            "extra": "iterations: 5736\ncpu: 122048.09972106006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32983.67534304798,
            "unit": "ns/iter",
            "extra": "iterations: 21207\ncpu: 32982.98203423394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32838.09408954695,
            "unit": "ns/iter",
            "extra": "iterations: 21352\ncpu: 32835.63132259275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33126.48492307405,
            "unit": "ns/iter",
            "extra": "iterations: 21125\ncpu: 33125.244970414016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67374.19440438328,
            "unit": "ns/iter",
            "extra": "iterations: 10401\ncpu: 67370.0124987983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59978.76311959723,
            "unit": "ns/iter",
            "extra": "iterations: 11681\ncpu: 59976.02088862324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16484.4692075899,
            "unit": "ns/iter",
            "extra": "iterations: 42478\ncpu: 16483.864588728276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 80823.74196151692,
            "unit": "ns/iter",
            "extra": "iterations: 8677\ncpu: 80822.84199608171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 64350.95421110796,
            "unit": "ns/iter",
            "extra": "iterations: 10876\ncpu: 64347.98639205496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 64256.882304382074,
            "unit": "ns/iter",
            "extra": "iterations: 10901\ncpu: 64252.39886248942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 65279.712066235625,
            "unit": "ns/iter",
            "extra": "iterations: 10749\ncpu: 65275.02093217949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 129359.22236600048,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 129351.86691312508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 551384.5583595759,
            "unit": "ns/iter",
            "extra": "iterations: 1268\ncpu: 551380.2050473164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 471782.3259109103,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 471778.1376518213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 468284.21031480207,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 468280.37508372526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 467651.3698264681,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 467623.3644859832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 308375.1243500726,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 308350.4766031242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 460532.75345170504,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 460528.1393819826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16662.84821895661,
            "unit": "ns/iter",
            "extra": "iterations: 42054\ncpu: 16662.084462833274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 80055.34956005047,
            "unit": "ns/iter",
            "extra": "iterations: 8751\ncpu: 80051.18272197431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 64918.32105507424,
            "unit": "ns/iter",
            "extra": "iterations: 10805\ncpu: 64914.90976399825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 64582.41143808471,
            "unit": "ns/iter",
            "extra": "iterations: 10806\ncpu: 64582.74106977507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 65667.97297803454,
            "unit": "ns/iter",
            "extra": "iterations: 10658\ncpu: 65667.51735785343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 128930.19554000144,
            "unit": "ns/iter",
            "extra": "iterations: 5426\ncpu: 128923.82970880944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 551265.4262036588,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 551230.6235201266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 470186.8582941129,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 470165.883143054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 466606.3246839552,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 466601.13107119064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 470999.4339118712,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 470975.3671562168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 306222.4792122394,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 306211.1597374169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 461733.5578947297,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 461705.06578946504 ns\nthreads: 1"
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
        "date": 1702418617561,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6739.6847424981215,
            "unit": "ns/iter",
            "extra": "iterations: 104873\ncpu: 6739.711841942159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 64813.708809633776,
            "unit": "ns/iter",
            "extra": "iterations: 13122\ncpu: 64812.95534217344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 124514.49354518588,
            "unit": "ns/iter",
            "extra": "iterations: 7049\ncpu: 124510.93772166266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 183485.4164904893,
            "unit": "ns/iter",
            "extra": "iterations: 4730\ncpu: 183481.4164904863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 246094.49325083848,
            "unit": "ns/iter",
            "extra": "iterations: 3556\ncpu: 246090.04499437564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 300250.5167714981,
            "unit": "ns/iter",
            "extra": "iterations: 2862\ncpu: 300248.4975541581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 359097.2446369616,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 359089.5627062705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 417337.40940255794,
            "unit": "ns/iter",
            "extra": "iterations: 2042\ncpu: 417317.09108716954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 476328.45519125176,
            "unit": "ns/iter",
            "extra": "iterations: 1830\ncpu: 476308.5245901638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5081.869069601787,
            "unit": "ns/iter",
            "extra": "iterations: 137554\ncpu: 5081.631213923263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4310.945009267541,
            "unit": "ns/iter",
            "extra": "iterations: 162391\ncpu: 4310.847891816663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4203.148310143709,
            "unit": "ns/iter",
            "extra": "iterations: 166671\ncpu: 4203.074320067681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4278.67347414256,
            "unit": "ns/iter",
            "extra": "iterations: 163105\ncpu: 4278.415131357099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7578.74368762601,
            "unit": "ns/iter",
            "extra": "iterations: 91685\ncpu: 7578.633364236236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31539.218679768856,
            "unit": "ns/iter",
            "extra": "iterations: 26253\ncpu: 31538.094693939718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 138234.09523809853,
            "unit": "ns/iter",
            "extra": "iterations: 6237\ncpu: 138233.36540003223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 110062.75743207592,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 110060.00768836489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 107216.09504803315,
            "unit": "ns/iter",
            "extra": "iterations: 8017\ncpu: 107213.60858176366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110903.9359669561,
            "unit": "ns/iter",
            "extra": "iterations: 7746\ncpu: 110896.39814097599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 254072.55623542878,
            "unit": "ns/iter",
            "extra": "iterations: 3432\ncpu: 254067.94871794907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1990671.850427264,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1990604.914529915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1639172.5061728838,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1639106.8783068813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1638654.5212764728,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1638544.858156029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1649282.3072825214,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1649207.992895207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 997112.839019146,
            "unit": "ns/iter",
            "extra": "iterations: 938\ncpu: 997047.4413646087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1592958.2315609294,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1592901.0291595226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6735909.799999718,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6735526.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3693746.0317461495,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3693564.6825396824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8228955.962406126,
            "unit": "ns/iter",
            "extra": "iterations: 133\ncpu: 8228366.165413514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30690.7058072262,
            "unit": "ns/iter",
            "extra": "iterations: 26622\ncpu: 30689.98196979947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 137383.08353337628,
            "unit": "ns/iter",
            "extra": "iterations: 6249\ncpu: 137380.49287886076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 111241.4244594915,
            "unit": "ns/iter",
            "extra": "iterations: 7678\ncpu: 111238.01771294563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 110015.40790313094,
            "unit": "ns/iter",
            "extra": "iterations: 7845\ncpu: 110011.98215423865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 111138.22710195054,
            "unit": "ns/iter",
            "extra": "iterations: 7719\ncpu: 111137.45303795807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 254482.7016412645,
            "unit": "ns/iter",
            "extra": "iterations: 3412\ncpu: 254476.69988276827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2004420.5333333202,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 2004351.612903225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1655051.5133215995,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1654995.737122556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1651045.6159291195,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1650953.4513274394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1649768.5982301894,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1649714.1592920336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 982207.6052909392,
            "unit": "ns/iter",
            "extra": "iterations: 945\ncpu: 982167.6190476166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1597767.6232876014,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1597711.4726027448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6773702.960000491,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6773514.999999932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3804264.4858298097,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3804161.1336032543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29435.495823215864,
            "unit": "ns/iter",
            "extra": "iterations: 28012\ncpu: 29434.799371697707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 137183.80837179016,
            "unit": "ns/iter",
            "extra": "iterations: 6283\ncpu: 137178.86360019128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 109613.33286354151,
            "unit": "ns/iter",
            "extra": "iterations: 7805\ncpu: 109607.5848814861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 107026.59409778338,
            "unit": "ns/iter",
            "extra": "iterations: 7997\ncpu: 107022.80855320771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 108655.17840254807,
            "unit": "ns/iter",
            "extra": "iterations: 7825\ncpu: 108649.18849840263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 250545.0715728646,
            "unit": "ns/iter",
            "extra": "iterations: 3465\ncpu: 250533.6796536806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1981299.564755799,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1981202.1231422569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1637862.970175631,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1637798.4210526377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1637451.5342705997,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1637418.4534270684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1641721.778558929,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1641680.4920913978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 988937.7003187471,
            "unit": "ns/iter",
            "extra": "iterations: 941\ncpu: 988883.2093517504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1591564.7955705926,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1591509.7103918255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2673.869054045255,
            "unit": "ns/iter",
            "extra": "iterations: 261207\ncpu: 2673.7235219576864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14672.799987397082,
            "unit": "ns/iter",
            "extra": "iterations: 47607\ncpu: 14672.852731741063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11272.053406107743,
            "unit": "ns/iter",
            "extra": "iterations: 62109\ncpu: 11271.76737670869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11159.043686453435,
            "unit": "ns/iter",
            "extra": "iterations: 62651\ncpu: 11158.581666693282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9220.717922928752,
            "unit": "ns/iter",
            "extra": "iterations: 56676\ncpu: 9215.15632719321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57761.99810121344,
            "unit": "ns/iter",
            "extra": "iterations: 12113\ncpu: 57761.47940229512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 121981.61010451813,
            "unit": "ns/iter",
            "extra": "iterations: 5740\ncpu: 121980.74912892007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32897.71137369658,
            "unit": "ns/iter",
            "extra": "iterations: 21242\ncpu: 32896.709349402285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32535.56343526113,
            "unit": "ns/iter",
            "extra": "iterations: 21518\ncpu: 32535.68640208219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33025.07487009826,
            "unit": "ns/iter",
            "extra": "iterations: 21170\ncpu: 33023.32546055754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67149.83641768932,
            "unit": "ns/iter",
            "extra": "iterations: 10429\ncpu: 67150.06232620506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59585.766040622264,
            "unit": "ns/iter",
            "extra": "iterations: 11767\ncpu: 59582.54440384147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16485.18066139875,
            "unit": "ns/iter",
            "extra": "iterations: 42516\ncpu: 16484.601091353623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 79357.30491542614,
            "unit": "ns/iter",
            "extra": "iterations: 8809\ncpu: 79353.44533999401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 64172.36483516109,
            "unit": "ns/iter",
            "extra": "iterations: 10920\ncpu: 64168.89194139236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 64320.830396468744,
            "unit": "ns/iter",
            "extra": "iterations: 10896\ncpu: 64320.15418502165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 65231.16383018471,
            "unit": "ns/iter",
            "extra": "iterations: 10694\ncpu: 65227.557508884325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 128654.67977218895,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 128650.10104721691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 556860.1011147106,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 556825.0000000106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 471342.9304054081,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 471327.7027027009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 466697.8639092434,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 466694.7298198802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 471893.81701555237,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 471891.62727886275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 307826.0500659152,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 307822.4857268336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 460698.42649971345,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 460687.0797626907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16671.371052445706,
            "unit": "ns/iter",
            "extra": "iterations: 42083\ncpu: 16671.01442387653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 79332.19433383219,
            "unit": "ns/iter",
            "extra": "iterations: 8789\ncpu: 79329.8896347718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 64334.13491332071,
            "unit": "ns/iter",
            "extra": "iterations: 10844\ncpu: 64330.13648100371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 64893.617029161775,
            "unit": "ns/iter",
            "extra": "iterations: 10805\ncpu: 64891.42989356773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 65774.98551542974,
            "unit": "ns/iter",
            "extra": "iterations: 10632\ncpu: 65772.45109104464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 127963.95280939176,
            "unit": "ns/iter",
            "extra": "iterations: 5446\ncpu: 127962.85347043622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 555403.6141046329,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 555398.3359746462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 472058.5235531412,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 472053.7012113104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 467310.90033443307,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 467298.3277591971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 471893.3595959641,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 471875.69023568975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 308036.350769186,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 308025.230769231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 459844.2081418247,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 459828.4963887099 ns\nthreads: 1"
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
        "date": 1702479821040,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6956.657037986763,
            "unit": "ns/iter",
            "extra": "iterations: 100533\ncpu: 6956.552574776441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 67084.08464567039,
            "unit": "ns/iter",
            "extra": "iterations: 12700\ncpu: 67083.0157480315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 128714.05270111922,
            "unit": "ns/iter",
            "extra": "iterations: 6812\ncpu: 128710.93658250148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 189738.81142359745,
            "unit": "ns/iter",
            "extra": "iterations: 4587\ncpu: 189736.99585785915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 251986.43266722874,
            "unit": "ns/iter",
            "extra": "iterations: 3453\ncpu: 251981.20474949328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 309858.4584980184,
            "unit": "ns/iter",
            "extra": "iterations: 2783\ncpu: 309852.31764283153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 369699.4387233799,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 369686.2978723407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 429601.92948719935,
            "unit": "ns/iter",
            "extra": "iterations: 2028\ncpu: 429588.21499013825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 489918.2684715303,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 489876.6497461929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5189.0797499667315,
            "unit": "ns/iter",
            "extra": "iterations: 135022\ncpu: 5188.784050006663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4436.415428556996,
            "unit": "ns/iter",
            "extra": "iterations: 157902\ncpu: 4436.127471469645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4405.079901443081,
            "unit": "ns/iter",
            "extra": "iterations: 159096\ncpu: 4404.841730778907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4438.3434932403,
            "unit": "ns/iter",
            "extra": "iterations: 157613\ncpu: 4438.28237518479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7717.07199187079,
            "unit": "ns/iter",
            "extra": "iterations: 90538\ncpu: 7716.663721310408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32824.3371805125,
            "unit": "ns/iter",
            "extra": "iterations: 25040\ncpu: 32821.74520766769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 139525.8338486576,
            "unit": "ns/iter",
            "extra": "iterations: 6145\ncpu: 139520.35801464642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 114931.15948899333,
            "unit": "ns/iter",
            "extra": "iterations: 7593\ncpu: 114925.12840774385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 113157.9804826584,
            "unit": "ns/iter",
            "extra": "iterations: 7583\ncpu: 113152.88144533832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 116230.83436407104,
            "unit": "ns/iter",
            "extra": "iterations: 7438\ncpu: 116223.04382898645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 257109.4458861556,
            "unit": "ns/iter",
            "extra": "iterations: 3391\ncpu: 257097.81775287588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2043188.2785088785,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2043062.4999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1693141.3588341484,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1693052.641165755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1683490.9328493462,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1683447.1869328541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1696001.826642251,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1695935.218978108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1007230.339130447,
            "unit": "ns/iter",
            "extra": "iterations: 920\ncpu: 1007181.5217391311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1641259.1575220907,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1641169.5575221225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7036785.280000686,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7036486.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3835245.606557587,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3835030.73770491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8337175.190839469,
            "unit": "ns/iter",
            "extra": "iterations: 131\ncpu: 8336662.595419842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32530.028835154357,
            "unit": "ns/iter",
            "extra": "iterations: 25351\ncpu: 32529.237505423887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 144853.35263246283,
            "unit": "ns/iter",
            "extra": "iterations: 5907\ncpu: 144847.7568985945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 117658.72664029042,
            "unit": "ns/iter",
            "extra": "iterations: 7331\ncpu: 117656.96357932132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115431.99423979373,
            "unit": "ns/iter",
            "extra": "iterations: 7465\ncpu: 115429.00200937696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 116368.22585880564,
            "unit": "ns/iter",
            "extra": "iterations: 7394\ncpu: 116366.78387882076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 258818.833432459,
            "unit": "ns/iter",
            "extra": "iterations: 3362\ncpu: 258802.52825699074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2062738.2461196715,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2062691.5742793703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1712342.7024028786,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1712288.9094269886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1697021.6368612254,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1696957.6642335695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1700749.6539162223,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1700713.6612021956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1007512.3553629415,
            "unit": "ns/iter",
            "extra": "iterations: 923\ncpu: 1007501.3001083459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1651468.671985827,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1651427.8368794355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6901634.189999867,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6901354.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3820653.9471545285,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3820478.8617886156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31942.521407260454,
            "unit": "ns/iter",
            "extra": "iterations: 25809\ncpu: 31942.504552675244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 143374.0417845769,
            "unit": "ns/iter",
            "extra": "iterations: 6007\ncpu: 143369.13600799043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 116078.28147348597,
            "unit": "ns/iter",
            "extra": "iterations: 7411\ncpu: 116076.92619079715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 113271.709276463,
            "unit": "ns/iter",
            "extra": "iterations: 7643\ncpu: 113267.65667931373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 114323.39092240333,
            "unit": "ns/iter",
            "extra": "iterations: 7513\ncpu: 114319.83229069608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 255560.03880069178,
            "unit": "ns/iter",
            "extra": "iterations: 3402\ncpu: 255552.1751910639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2045016.0945054467,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2044991.428571425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1697651.1548269372,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1697559.0163934473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1690543.3568838872,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1690541.1231884044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1699134.476363559,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1699062.5454545496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1005617.6760258987,
            "unit": "ns/iter",
            "extra": "iterations: 926\ncpu: 1005603.1317494573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1639803.6572438574,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1639779.858657249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2734.6652998720433,
            "unit": "ns/iter",
            "extra": "iterations: 255342\ncpu: 2734.6680138794336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15191.615102768385,
            "unit": "ns/iter",
            "extra": "iterations: 46124\ncpu: 15191.082733500858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12009.452466390863,
            "unit": "ns/iter",
            "extra": "iterations: 58243\ncpu: 12009.295537661179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11775.769503844293,
            "unit": "ns/iter",
            "extra": "iterations: 59437\ncpu: 11775.365513064186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9569.151041026778,
            "unit": "ns/iter",
            "extra": "iterations: 73245\ncpu: 9569.02450679227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58843.31222099968,
            "unit": "ns/iter",
            "extra": "iterations: 11873\ncpu: 58841.47224795734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 131193.98557510905,
            "unit": "ns/iter",
            "extra": "iterations: 5338\ncpu: 131191.17647058735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33736.94508461647,
            "unit": "ns/iter",
            "extra": "iterations: 20741\ncpu: 33736.16026228233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33614.39987490746,
            "unit": "ns/iter",
            "extra": "iterations: 20784\ncpu: 33613.85681293297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33845.148680010396,
            "unit": "ns/iter",
            "extra": "iterations: 20682\ncpu: 33843.83038390819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 68798.94893951151,
            "unit": "ns/iter",
            "extra": "iterations: 10184\ncpu: 68798.09505106094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 61278.18644512195,
            "unit": "ns/iter",
            "extra": "iterations: 11435\ncpu: 61278.11106252774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 17072.579870257603,
            "unit": "ns/iter",
            "extra": "iterations: 41004\ncpu: 17072.210028290083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 83114.33076192225,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 83106.94279610689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 66593.20619831196,
            "unit": "ns/iter",
            "extra": "iterations: 10519\ncpu: 66589.69483791236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 66632.16092173746,
            "unit": "ns/iter",
            "extra": "iterations: 10502\ncpu: 66628.3184155408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 67522.5633246674,
            "unit": "ns/iter",
            "extra": "iterations: 10383\ncpu: 67520.2446306457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 129524.58041828034,
            "unit": "ns/iter",
            "extra": "iterations: 5403\ncpu: 129523.20932815014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 567467.3330631783,
            "unit": "ns/iter",
            "extra": "iterations: 1234\ncpu: 567431.9286871928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 486840.8803893814,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 486834.49235048797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 484901.3580332284,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 484887.673130198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 487029.6689846934,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 487002.9902642547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 313136.54610560794,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 313115.3983885399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 473823.999999964,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 473794.0419769865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17274.593067813752,
            "unit": "ns/iter",
            "extra": "iterations: 40449\ncpu: 17273.14395905986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 82476.34821428914,
            "unit": "ns/iter",
            "extra": "iterations: 8512\ncpu: 82471.12312030092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 66942.59448064411,
            "unit": "ns/iter",
            "extra": "iterations: 10436\ncpu: 66941.78804139535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 67193.62362505453,
            "unit": "ns/iter",
            "extra": "iterations: 10455\ncpu: 67192.93161166807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 67949.58710428329,
            "unit": "ns/iter",
            "extra": "iterations: 10298\ncpu: 67945.77587881156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 129686.33419785072,
            "unit": "ns/iter",
            "extra": "iterations: 5398\ncpu: 129678.65876250368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 567095.8964400955,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 567068.9320388349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 483986.92116187734,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 483958.71369294374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 481767.95392016065,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 481737.1389270957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 485270.94802494673,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 485259.5287595231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 311351.3558639533,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 311343.8227394859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 472603.15935179795,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 472575.6245779852 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488826745,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6700.105279434297,
            "unit": "ns/iter",
            "extra": "iterations: 103477\ncpu: 6699.893696183693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66346.97237484399,
            "unit": "ns/iter",
            "extra": "iterations: 13104\ncpu: 66344.07051282052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 124479.14342630301,
            "unit": "ns/iter",
            "extra": "iterations: 7028\ncpu: 124477.97381900967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 183724.52395019765,
            "unit": "ns/iter",
            "extra": "iterations: 4739\ncpu: 183721.33361468665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 243043.45808123957,
            "unit": "ns/iter",
            "extra": "iterations: 3471\ncpu: 243043.41688274287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 298415.34708738094,
            "unit": "ns/iter",
            "extra": "iterations: 2884\ncpu: 298405.7212205272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 360368.11801238265,
            "unit": "ns/iter",
            "extra": "iterations: 2415\ncpu: 360348.530020704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 415024.8123809368,
            "unit": "ns/iter",
            "extra": "iterations: 2100\ncpu: 414997.33333333355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 472773.99185672204,
            "unit": "ns/iter",
            "extra": "iterations: 1842\ncpu: 472747.0141150928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5018.53702932198,
            "unit": "ns/iter",
            "extra": "iterations: 139214\ncpu: 5018.319278233511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4302.109928447327,
            "unit": "ns/iter",
            "extra": "iterations: 163097\ncpu: 4301.963248864171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4317.187404098128,
            "unit": "ns/iter",
            "extra": "iterations: 162275\ncpu: 4317.125250346639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4298.688952971428,
            "unit": "ns/iter",
            "extra": "iterations: 162985\ncpu: 4298.364880203699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7563.911319208109,
            "unit": "ns/iter",
            "extra": "iterations: 92692\ncpu: 7563.6948172442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30858.192192527433,
            "unit": "ns/iter",
            "extra": "iterations: 26718\ncpu: 30856.61351897597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 132846.577059835,
            "unit": "ns/iter",
            "extra": "iterations: 6469\ncpu: 132844.79826866617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 105917.73349234763,
            "unit": "ns/iter",
            "extra": "iterations: 7966\ncpu: 105913.11825257316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 105974.41349738603,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 105972.84364901808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 107466.13478205695,
            "unit": "ns/iter",
            "extra": "iterations: 7961\ncpu: 107461.73847506565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 253149.85387732464,
            "unit": "ns/iter",
            "extra": "iterations: 3456\ncpu: 253144.47337963016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1978490.6574468936,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1978393.829787237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1647244.0070672478,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1647189.3992932842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1636981.4444443819,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1636951.146384479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1653768.854867221,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1653725.6637168142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 979895.4451476858,
            "unit": "ns/iter",
            "extra": "iterations: 948\ncpu: 979877.9535864963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1592522.943298915,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1592486.9415807568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6715248.300000667,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6714899.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3700009.4901189115,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3699854.5454545435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8106371.755555605,
            "unit": "ns/iter",
            "extra": "iterations: 135\ncpu: 8106019.999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30274.718649340266,
            "unit": "ns/iter",
            "extra": "iterations: 27009\ncpu: 30273.06823651371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 135392.44772118656,
            "unit": "ns/iter",
            "extra": "iterations: 6341\ncpu: 135384.65541712643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 109907.57929346104,
            "unit": "ns/iter",
            "extra": "iterations: 7756\ncpu: 109901.44404332146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 107850.22465684779,
            "unit": "ns/iter",
            "extra": "iterations: 7941\ncpu: 107842.91650925504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 109262.69384615586,
            "unit": "ns/iter",
            "extra": "iterations: 7800\ncpu: 109256.60256410252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 254928.20515825826,
            "unit": "ns/iter",
            "extra": "iterations: 3412\ncpu: 254505.86166471153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1998061.5901287582,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1997981.9742489217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1662503.6975089395,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1662390.2135231278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1649679.1097344726,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1649582.30088496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1653740.6117020908,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1653678.5460992903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 971006.2374477172,
            "unit": "ns/iter",
            "extra": "iterations: 956\ncpu: 970958.6820083726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1596958.482817944,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1596885.910652918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6721621.949999417,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6721064.000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3796120.5604838436,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3795977.4193548434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29454.313106271038,
            "unit": "ns/iter",
            "extra": "iterations: 27834\ncpu: 29452.187971545434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 133481.10954009232,
            "unit": "ns/iter",
            "extra": "iterations: 6436\ncpu: 133473.1665630827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 109416.77811861158,
            "unit": "ns/iter",
            "extra": "iterations: 7824\ncpu: 109410.53169734178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 105620.82373878606,
            "unit": "ns/iter",
            "extra": "iterations: 8147\ncpu: 105617.31925862328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 107140.56602123102,
            "unit": "ns/iter",
            "extra": "iterations: 8005\ncpu: 107134.67832604556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 250245.45255892797,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 250236.4289821731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1972173.2394067354,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1972070.9745762786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1643074.1519434217,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1642992.7561837488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1637617.4130052417,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1637541.3005272436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1648476.7309734265,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1648393.9823008862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 971446.7977059546,
            "unit": "ns/iter",
            "extra": "iterations: 959\ncpu: 971384.8800834167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1589715.772649633,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1589654.700854694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2651.8680132923373,
            "unit": "ns/iter",
            "extra": "iterations: 264216\ncpu: 2651.7076937051506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14779.569331192632,
            "unit": "ns/iter",
            "extra": "iterations: 47338\ncpu: 14779.09713126871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11630.376438973475,
            "unit": "ns/iter",
            "extra": "iterations: 60286\ncpu: 11629.78469296345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11297.955914899634,
            "unit": "ns/iter",
            "extra": "iterations: 61903\ncpu: 11297.468620260703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9192.041953169417,
            "unit": "ns/iter",
            "extra": "iterations: 76061\ncpu: 9191.544944189529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57511.34191960431,
            "unit": "ns/iter",
            "extra": "iterations: 12190\ncpu: 57510.68088597203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 121404.72278085121,
            "unit": "ns/iter",
            "extra": "iterations: 5768\ncpu: 121404.7330097089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32963.96963144184,
            "unit": "ns/iter",
            "extra": "iterations: 21272\ncpu: 32963.595336592916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32540.52920593516,
            "unit": "ns/iter",
            "extra": "iterations: 21434\ncpu: 32540.034524587445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32802.37796753344,
            "unit": "ns/iter",
            "extra": "iterations: 21314\ncpu: 32802.008069813026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 66657.10983262963,
            "unit": "ns/iter",
            "extra": "iterations: 10516\ncpu: 66656.44731837198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59455.368317842825,
            "unit": "ns/iter",
            "extra": "iterations: 11729\ncpu: 59452.40003410354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16461.720738106855,
            "unit": "ns/iter",
            "extra": "iterations: 42487\ncpu: 16461.2705062727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 80575.03195769682,
            "unit": "ns/iter",
            "extra": "iterations: 8699\ncpu: 80569.09989654004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 64801.67540042361,
            "unit": "ns/iter",
            "extra": "iterations: 10801\ncpu: 64797.7965003245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 64759.66869580963,
            "unit": "ns/iter",
            "extra": "iterations: 10842\ncpu: 64758.04279653216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 65194.215384612304,
            "unit": "ns/iter",
            "extra": "iterations: 10725\ncpu: 65192.33566433607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 126645.82567811746,
            "unit": "ns/iter",
            "extra": "iterations: 5530\ncpu: 126640.90415913408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 551313.475590557,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 551274.4094488093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 472133.4568151303,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 472108.16464238137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 469421.5144005169,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 469400.93770930916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 471980.61496966647,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 471946.5947403943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 300732.27401370753,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 300699.82847341534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 457704.7554241163,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 457657.2649572638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16689.133897211872,
            "unit": "ns/iter",
            "extra": "iterations: 41853\ncpu: 16688.16572288739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 80006.35486452495,
            "unit": "ns/iter",
            "extra": "iterations: 8747\ncpu: 80005.43043329044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 64960.03290387836,
            "unit": "ns/iter",
            "extra": "iterations: 10789\ncpu: 64954.83362684173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 64933.436070739546,
            "unit": "ns/iter",
            "extra": "iterations: 10801\ncpu: 64929.219516711615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 65849.4189622697,
            "unit": "ns/iter",
            "extra": "iterations: 10600\ncpu: 65848.77358490574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 126771.97062557613,
            "unit": "ns/iter",
            "extra": "iterations: 5515\ncpu: 126767.03535811605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 549883.9083072175,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 549879.2319749236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 469100.028839766,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 469086.7203219328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 469840.54331762705,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 469842.5789120181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 470730.7276395323,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 470707.19569603394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 300520.9648521415,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 300486.5409344247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 458212.003926665,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 458212.1727748697 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702491080821,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6589.575369152988,
            "unit": "ns/iter",
            "extra": "iterations: 106257\ncpu: 6588.967315094535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65568.73886762999,
            "unit": "ns/iter",
            "extra": "iterations: 13070\ncpu: 65565.46289211935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 125788.31627503525,
            "unit": "ns/iter",
            "extra": "iterations: 6937\ncpu: 125781.62029695831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 186067.82384418292,
            "unit": "ns/iter",
            "extra": "iterations: 4672\ncpu: 186057.34160958903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 245538.33850931158,
            "unit": "ns/iter",
            "extra": "iterations: 3542\ncpu: 245533.17334839073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 301627.694512404,
            "unit": "ns/iter",
            "extra": "iterations: 2861\ncpu: 301618.76966095757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 361367.9958523417,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 361354.5831605142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 418806.2554216647,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 418782.26506024104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 479940.0038440659,
            "unit": "ns/iter",
            "extra": "iterations: 1821\ncpu: 479927.29269632127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4964.424575558812,
            "unit": "ns/iter",
            "extra": "iterations: 141539\ncpu: 4964.343396519678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4214.917269789382,
            "unit": "ns/iter",
            "extra": "iterations: 166771\ncpu: 4214.692002806238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4176.599375625705,
            "unit": "ns/iter",
            "extra": "iterations: 167848\ncpu: 4176.500166817602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4198.843194484311,
            "unit": "ns/iter",
            "extra": "iterations: 166512\ncpu: 4198.657754396077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7525.503141764187,
            "unit": "ns/iter",
            "extra": "iterations: 93578\ncpu: 7525.41195580157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31060.67340702234,
            "unit": "ns/iter",
            "extra": "iterations: 26507\ncpu: 31059.108914626344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 129993.98211579009,
            "unit": "ns/iter",
            "extra": "iterations: 6598\ncpu: 129990.07274931823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 104858.20508391122,
            "unit": "ns/iter",
            "extra": "iterations: 8104\ncpu: 104853.97334649556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 103234.67222021871,
            "unit": "ns/iter",
            "extra": "iterations: 8283\ncpu: 103233.99734395748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 104666.05787546713,
            "unit": "ns/iter",
            "extra": "iterations: 8190\ncpu: 104662.4786324789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 253418.91065193346,
            "unit": "ns/iter",
            "extra": "iterations: 3436\ncpu: 253409.34225843957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1993204.9849136672,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1993113.5775862054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1651545.1678445193,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1651534.452296821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1613272.8536584384,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1613199.128919864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1641204.8498234453,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1641168.3745583035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 982500.3706441292,
            "unit": "ns/iter",
            "extra": "iterations: 947\ncpu: 982451.5311510037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1588218.6735041644,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1588197.264957267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6749043.1199996695,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6748615.000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3682444.681102224,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3682239.3700787486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8141108.761193793,
            "unit": "ns/iter",
            "extra": "iterations: 134\ncpu: 8140379.10447761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31124.072431907316,
            "unit": "ns/iter",
            "extra": "iterations: 26839\ncpu: 31122.56417899327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 133087.55479238046,
            "unit": "ns/iter",
            "extra": "iterations: 6406\ncpu: 133076.89665938116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 107572.04420999481,
            "unit": "ns/iter",
            "extra": "iterations: 7962\ncpu: 107565.23486561138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 105671.48387095782,
            "unit": "ns/iter",
            "extra": "iterations: 8060\ncpu: 105663.77171215873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 105900.68502859626,
            "unit": "ns/iter",
            "extra": "iterations: 8042\ncpu: 105896.89132056717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 258049.62225519988,
            "unit": "ns/iter",
            "extra": "iterations: 3370\ncpu: 258030.47477744895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2016696.2699784085,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2012953.9956803536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1654012.741134888,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1653922.695035454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1622902.6006945681,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1622796.7013888855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1639904.4463971881,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1639780.4920913847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 987771.3231256608,
            "unit": "ns/iter",
            "extra": "iterations: 947\ncpu: 987571.27771911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1587163.9540034393,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1587073.9352640526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6762333.860000354,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6761811.999999949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3732767.368000168,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3732403.9999999744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29721.92607565798,
            "unit": "ns/iter",
            "extra": "iterations: 27704\ncpu: 29719.791365867582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 130812.24299207293,
            "unit": "ns/iter",
            "extra": "iterations: 6564\ncpu: 130804.37233394296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 106888.91240511612,
            "unit": "ns/iter",
            "extra": "iterations: 8037\ncpu: 106882.28194599928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 104195.89311771096,
            "unit": "ns/iter",
            "extra": "iterations: 8224\ncpu: 104187.87694552579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 107261.3731752896,
            "unit": "ns/iter",
            "extra": "iterations: 8015\ncpu: 107254.57267623181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 253855.0095513635,
            "unit": "ns/iter",
            "extra": "iterations: 3455\ncpu: 253839.18958031846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1982622.4416135936,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1982506.1571125353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1632763.3842106399,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1632618.94736842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1604792.3972365505,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1604706.3903281502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1623044.4554972774,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1622930.8900523596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 976899.8980891532,
            "unit": "ns/iter",
            "extra": "iterations: 942\ncpu: 976847.7707006348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1578047.3061225438,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1577957.1428571367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2695.534046426868,
            "unit": "ns/iter",
            "extra": "iterations: 259807\ncpu: 2695.487804408648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14818.614910397411,
            "unit": "ns/iter",
            "extra": "iterations: 47041\ncpu: 14817.858889054156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11739.471971551948,
            "unit": "ns/iter",
            "extra": "iterations: 59618\ncpu: 11738.677916065677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11603.134545996838,
            "unit": "ns/iter",
            "extra": "iterations: 60418\ncpu: 11602.126849614322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9304.595497709213,
            "unit": "ns/iter",
            "extra": "iterations: 75295\ncpu: 9304.008234278526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57776.393742287204,
            "unit": "ns/iter",
            "extra": "iterations: 12145\ncpu: 57774.3680526963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 127691.25483045993,
            "unit": "ns/iter",
            "extra": "iterations: 5486\ncpu: 127685.52679547868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32698.391080537727,
            "unit": "ns/iter",
            "extra": "iterations: 21369\ncpu: 32697.940942487116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32313.013187622702,
            "unit": "ns/iter",
            "extra": "iterations: 21687\ncpu: 32311.795084612957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32656.065586818524,
            "unit": "ns/iter",
            "extra": "iterations: 21361\ncpu: 32654.828893778442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 66729.24554039513,
            "unit": "ns/iter",
            "extra": "iterations: 10483\ncpu: 66725.71782886547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59454.16680822752,
            "unit": "ns/iter",
            "extra": "iterations: 11774\ncpu: 59450.03397316201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16961.38801200922,
            "unit": "ns/iter",
            "extra": "iterations: 41308\ncpu: 16960.005325844828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 80519.62397977023,
            "unit": "ns/iter",
            "extra": "iterations: 8699\ncpu: 80515.35808713676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 65379.54374297656,
            "unit": "ns/iter",
            "extra": "iterations: 10676\ncpu: 65377.05133008627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 65023.705440037265,
            "unit": "ns/iter",
            "extra": "iterations: 10772\ncpu: 65020.30263646433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 65686.5624531135,
            "unit": "ns/iter",
            "extra": "iterations: 10664\ncpu: 65681.83608402128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 124912.99340109521,
            "unit": "ns/iter",
            "extra": "iterations: 5607\ncpu: 124901.76565007975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 550928.2403466962,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 550888.8100866872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 469255.05023447715,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 469222.90689886437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 458738.2524590287,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 458705.1803278681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 462305.41506944085,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 462271.05089227203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 301849.45615549764,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 301833.5637149054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 453193.13609848137,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 453179.0667530813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16437.16869809159,
            "unit": "ns/iter",
            "extra": "iterations: 42745\ncpu: 16436.923616797198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 79446.71980950642,
            "unit": "ns/iter",
            "extra": "iterations: 8819\ncpu: 79441.13845107079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 64615.94631181781,
            "unit": "ns/iter",
            "extra": "iterations: 10859\ncpu: 64612.01768118669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 63629.53209674128,
            "unit": "ns/iter",
            "extra": "iterations: 10998\ncpu: 63625.113657028276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 64773.611343177254,
            "unit": "ns/iter",
            "extra": "iterations: 10773\ncpu: 64772.505337418006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 123009.44871794218,
            "unit": "ns/iter",
            "extra": "iterations: 5694\ncpu: 123007.58693361536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 549827.7136113412,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 549779.9370574403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 468570.35585288756,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 468559.39799331885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 456466.85490198125,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 456456.143790857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 465442.5338592559,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 465405.39119001146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 303415.9055459501,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 303396.31715771224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 453229.2804404377,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 453199.09326424776 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "380c708d79f348a900173c4fb482ef4fb63a6372",
          "message": "Update parser.hpp",
          "timestamp": "2024-01-18T13:25:10+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/380c708d79f348a900173c4fb482ef4fb63a6372"
        },
        "date": 1705574181055,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6721.029341693154,
            "unit": "ns/iter",
            "extra": "iterations: 104936\ncpu: 6720.873675383091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65220.80890311305,
            "unit": "ns/iter",
            "extra": "iterations: 13119\ncpu: 65218.62184617729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 125636.59813752808,
            "unit": "ns/iter",
            "extra": "iterations: 6980\ncpu: 125630.85959885383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 185316.30610508882,
            "unit": "ns/iter",
            "extra": "iterations: 4701\ncpu: 185314.12465432886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 244016.71838920415,
            "unit": "ns/iter",
            "extra": "iterations: 3551\ncpu: 244011.4052379611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 300014.10883172555,
            "unit": "ns/iter",
            "extra": "iterations: 2876\ncpu: 300005.56328233646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 368155.92630708456,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 368141.0456978179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 415626.8111854391,
            "unit": "ns/iter",
            "extra": "iterations: 2092\ncpu: 415613.0975143401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 478585.39182560064,
            "unit": "ns/iter",
            "extra": "iterations: 1835\ncpu: 478560.0544959133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5035.7906173794645,
            "unit": "ns/iter",
            "extra": "iterations: 139023\ncpu: 5035.681146285137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4292.750191270828,
            "unit": "ns/iter",
            "extra": "iterations: 163381\ncpu: 4292.5095329322285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4264.761660114788,
            "unit": "ns/iter",
            "extra": "iterations: 164085\ncpu: 4264.60493037145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4304.629230240659,
            "unit": "ns/iter",
            "extra": "iterations: 162934\ncpu: 4304.577927258894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7695.878459356405,
            "unit": "ns/iter",
            "extra": "iterations: 90949\ncpu: 7695.80973952435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31106.26375245545,
            "unit": "ns/iter",
            "extra": "iterations: 26468\ncpu: 31104.6168958743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 131257.04546149855,
            "unit": "ns/iter",
            "extra": "iterations: 6533\ncpu: 131255.1966937087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 105243.40361002697,
            "unit": "ns/iter",
            "extra": "iterations: 8144\ncpu: 105237.80697445986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 106668.0302954741,
            "unit": "ns/iter",
            "extra": "iterations: 8021\ncpu: 106666.949258197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 107500.29877437922,
            "unit": "ns/iter",
            "extra": "iterations: 7996\ncpu: 107492.45872936427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 250816.22074546153,
            "unit": "ns/iter",
            "extra": "iterations: 3461\ncpu: 250802.68708465763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1989180.1120507254,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1989052.6427061302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1632382.8194691062,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1632340.5309734526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1640128.5820106517,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1640006.7019400334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1655197.7290551146,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1655102.317290557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 981892.1904762267,
            "unit": "ns/iter",
            "extra": "iterations: 945\ncpu: 981840.2116402102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1586004.7658119367,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1585894.7008546987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6702119.039999843,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6701997.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3806539.2804876096,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3806222.764227629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8145593.39552227,
            "unit": "ns/iter",
            "extra": "iterations: 134\ncpu: 8145056.71641793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31422.99618203744,
            "unit": "ns/iter",
            "extra": "iterations: 26192\ncpu: 31420.842241906048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 132905.88938739046,
            "unit": "ns/iter",
            "extra": "iterations: 6464\ncpu: 132897.18440594082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 108656.67914032753,
            "unit": "ns/iter",
            "extra": "iterations: 7910\ncpu: 108648.14159292063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 109625.86276010853,
            "unit": "ns/iter",
            "extra": "iterations: 7833\ncpu: 109618.97102004345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 109218.12188896672,
            "unit": "ns/iter",
            "extra": "iterations: 7835\ncpu: 109208.66624122475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 256053.0705260193,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 256035.7037907717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1991126.295503119,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1991005.5674518258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1647940.3710246522,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1647832.6855123632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1645967.8165785118,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1645862.08112875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1663594.2078152313,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1663470.6927175748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 978037.390295445,
            "unit": "ns/iter",
            "extra": "iterations: 948\ncpu: 977945.0421940935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1593086.6290598435,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1593072.3076923154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6753907.050000408,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6753527.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3895508.4602511493,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3895216.736401691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29505.216939558024,
            "unit": "ns/iter",
            "extra": "iterations: 27911\ncpu: 29502.124610368548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 131325.1334147451,
            "unit": "ns/iter",
            "extra": "iterations: 6551\ncpu: 131324.07266066238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 106284.60751022251,
            "unit": "ns/iter",
            "extra": "iterations: 8069\ncpu: 106279.89837650309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 104526.14941407202,
            "unit": "ns/iter",
            "extra": "iterations: 8192\ncpu: 104524.03564453067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 105376.01100259289,
            "unit": "ns/iter",
            "extra": "iterations: 8089\ncpu: 105370.56496476683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 248257.70542637186,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 248255.6703990811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1970989.5433403677,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1970878.646934451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1633974.2185314954,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1633942.4825174736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1646376.7373029368,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1646245.0087565721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1650410.4840424291,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1650396.9858156028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 979263.3016877228,
            "unit": "ns/iter",
            "extra": "iterations: 948\ncpu: 979206.9620253135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1583450.1207483811,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1583449.48979593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2709.5648692082577,
            "unit": "ns/iter",
            "extra": "iterations: 258235\ncpu: 2709.5192363544834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14743.258414879665,
            "unit": "ns/iter",
            "extra": "iterations: 47416\ncpu: 14743.137337607619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11706.218345629693,
            "unit": "ns/iter",
            "extra": "iterations: 60047\ncpu: 11705.322497377028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11360.423872044534,
            "unit": "ns/iter",
            "extra": "iterations: 61771\ncpu: 11360.141490343278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9265.6391455116,
            "unit": "ns/iter",
            "extra": "iterations: 75554\ncpu: 9265.216930936833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57056.82562596981,
            "unit": "ns/iter",
            "extra": "iterations: 12261\ncpu: 57056.78982138466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 121117.7074818229,
            "unit": "ns/iter",
            "extra": "iterations: 5774\ncpu: 121116.81676480777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32804.38029029348,
            "unit": "ns/iter",
            "extra": "iterations: 21289\ncpu: 32803.28338578616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32829.02330060272,
            "unit": "ns/iter",
            "extra": "iterations: 21287\ncpu: 32826.64537041361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33212.78281917379,
            "unit": "ns/iter",
            "extra": "iterations: 21070\ncpu: 33210.218319886306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67823.26662162847,
            "unit": "ns/iter",
            "extra": "iterations: 10363\ncpu: 67789.25986683478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59582.624479032034,
            "unit": "ns/iter",
            "extra": "iterations: 11757\ncpu: 59579.48456238912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16542.606074933963,
            "unit": "ns/iter",
            "extra": "iterations: 42305\ncpu: 16542.619075759176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 79429.29919474943,
            "unit": "ns/iter",
            "extra": "iterations: 8817\ncpu: 79425.55290915337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 63695.46982485375,
            "unit": "ns/iter",
            "extra": "iterations: 11019\ncpu: 63695.40793175424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 64838.597906628675,
            "unit": "ns/iter",
            "extra": "iterations: 10796\ncpu: 64837.96776583927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 65621.22285554519,
            "unit": "ns/iter",
            "extra": "iterations: 10702\ncpu: 65617.66025041968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 125720.95959777459,
            "unit": "ns/iter",
            "extra": "iterations: 5569\ncpu: 125717.39989226083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 545991.9585289082,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 545977.5430359947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 462588.0667106606,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 462528.0713342203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 467855.1338688193,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 467814.9263721541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 466897.56291839597,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 466897.45649263915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 301887.552870106,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 301882.69313767774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 454903.7983138662,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 454877.49675745156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16719.23159775962,
            "unit": "ns/iter",
            "extra": "iterations: 41965\ncpu: 16717.438341475074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 79144.23170592674,
            "unit": "ns/iter",
            "extra": "iterations: 8787\ncpu: 79143.08637760307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 64074.97257017698,
            "unit": "ns/iter",
            "extra": "iterations: 10937\ncpu: 64069.415744718724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 64981.448973875435,
            "unit": "ns/iter",
            "extra": "iterations: 10720\ncpu: 64977.29477612016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 65702.78367461397,
            "unit": "ns/iter",
            "extra": "iterations: 10646\ncpu: 65698.05560773997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 125332.7547372129,
            "unit": "ns/iter",
            "extra": "iterations: 5594\ncpu: 125323.36431891177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 544193.4972762917,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 544187.0817120562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 459646.78829715325,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 459633.33333332854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 466605.5339547343,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 466604.92676431854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 467186.35999999,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 467179.733333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 304714.4647825917,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 304698.69565217284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 453225.2645913753,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 453220.49286641343 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705771890868,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6673.269231873718,
            "unit": "ns/iter",
            "extra": "iterations: 104501\ncpu: 6673.0662864470205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 64698.21912805606,
            "unit": "ns/iter",
            "extra": "iterations: 13143\ncpu: 64695.442440843035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 124585.7357233912,
            "unit": "ns/iter",
            "extra": "iterations: 7057\ncpu: 124581.19597562702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 183581.66245790297,
            "unit": "ns/iter",
            "extra": "iterations: 4752\ncpu: 183575.25252525246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 244266.36684403033,
            "unit": "ns/iter",
            "extra": "iterations: 3571\ncpu: 244258.05096611593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 298648.69521148247,
            "unit": "ns/iter",
            "extra": "iterations: 2861\ncpu: 298641.3841314226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 358931.4527138118,
            "unit": "ns/iter",
            "extra": "iterations: 2432\ncpu: 358918.3799342107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 416911.68223399535,
            "unit": "ns/iter",
            "extra": "iterations: 2077\ncpu: 416904.28502648097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 476758.8245518197,
            "unit": "ns/iter",
            "extra": "iterations: 1841\ncpu: 476744.97555676283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5032.327337402894,
            "unit": "ns/iter",
            "extra": "iterations: 138594\ncpu: 5032.195477437685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4297.668633591964,
            "unit": "ns/iter",
            "extra": "iterations: 162521\ncpu: 4297.560315282331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4285.7022163540805,
            "unit": "ns/iter",
            "extra": "iterations: 163602\ncpu: 4285.515458246236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4288.678984188054,
            "unit": "ns/iter",
            "extra": "iterations: 163101\ncpu: 4288.634649695594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7522.122658963864,
            "unit": "ns/iter",
            "extra": "iterations: 92427\ncpu: 7521.974098477723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30263.822077919835,
            "unit": "ns/iter",
            "extra": "iterations: 26950\ncpu: 30263.78478664194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 131427.06624223158,
            "unit": "ns/iter",
            "extra": "iterations: 6597\ncpu: 131419.43307564058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 104721.95619895958,
            "unit": "ns/iter",
            "extra": "iterations: 8082\ncpu: 104717.9905963871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 106630.12929020028,
            "unit": "ns/iter",
            "extra": "iterations: 8129\ncpu: 106625.39057694699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 105647.64758889416,
            "unit": "ns/iter",
            "extra": "iterations: 8212\ncpu: 105644.15489527509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 245898.88854401864,
            "unit": "ns/iter",
            "extra": "iterations: 3544\ncpu: 245884.79119638825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1974476.5711252156,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1974375.583864116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1635289.2617801388,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1635225.1308900504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1632087.1640210873,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1632072.4867724862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1652154.6332738623,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1652056.1717352364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 995544.5235545723,
            "unit": "ns/iter",
            "extra": "iterations: 934\ncpu: 995511.8843683072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1596134.092624369,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1596041.509433962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6809412.19000033,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6809401.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3716413.434263013,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3716171.713147418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8240275.686566644,
            "unit": "ns/iter",
            "extra": "iterations: 134\ncpu: 8239878.358208967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30490.224809059506,
            "unit": "ns/iter",
            "extra": "iterations: 27103\ncpu: 30488.783529498618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 131818.21178835773,
            "unit": "ns/iter",
            "extra": "iterations: 6464\ncpu: 131812.05136138666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 107659.36105424906,
            "unit": "ns/iter",
            "extra": "iterations: 7816\ncpu: 107654.5291709312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 106792.76882530029,
            "unit": "ns/iter",
            "extra": "iterations: 7968\ncpu: 106788.39106425685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 107742.28186306164,
            "unit": "ns/iter",
            "extra": "iterations: 7901\ncpu: 107737.32438931729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 246662.0342582041,
            "unit": "ns/iter",
            "extra": "iterations: 3532\ncpu: 246656.5402038511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1992326.7243589044,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1992226.923076923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1654504.115658403,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1654436.6548042726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1644327.3056538182,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1644262.1908127202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1660455.8892857265,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1660395.3571428598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 983623.4358430681,
            "unit": "ns/iter",
            "extra": "iterations: 943\ncpu: 983589.8197242896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1595463.5618556303,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1595392.0962199422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6764968.799999451,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6764578.999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3700402.5657366416,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3700184.4621513668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29232.57200985213,
            "unit": "ns/iter",
            "extra": "iterations: 28017\ncpu: 29231.5879644501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 129104.5143497767,
            "unit": "ns/iter",
            "extra": "iterations: 6690\ncpu: 129097.23467862401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 106940.99453484382,
            "unit": "ns/iter",
            "extra": "iterations: 8051\ncpu: 106937.28729350374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 104823.91333008211,
            "unit": "ns/iter",
            "extra": "iterations: 8192\ncpu: 104819.7509765621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 105095.63713546422,
            "unit": "ns/iter",
            "extra": "iterations: 8127\ncpu: 105092.35880398641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 242368.40835655434,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 242353.17548746403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1972111.2811839415,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1972009.725158551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1654355.1684212058,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1654243.333333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1640473.9648505342,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1640410.0175746903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1656956.4547069047,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1656874.0674955607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 985315.4379639194,
            "unit": "ns/iter",
            "extra": "iterations: 943\ncpu: 985284.7295864219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1591562.2691653257,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1591469.505962514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2645.365319616345,
            "unit": "ns/iter",
            "extra": "iterations: 263613\ncpu: 2645.3160504223747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14528.838535077475,
            "unit": "ns/iter",
            "extra": "iterations: 48221\ncpu: 14528.412932124924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11175.141634056312,
            "unit": "ns/iter",
            "extra": "iterations: 62605\ncpu: 11174.345499560743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11459.183785465455,
            "unit": "ns/iter",
            "extra": "iterations: 61044\ncpu: 11458.474215320042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9138.8672869359,
            "unit": "ns/iter",
            "extra": "iterations: 76526\ncpu: 9138.247131693835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55713.92805985029,
            "unit": "ns/iter",
            "extra": "iterations: 12566\ncpu: 55712.97151042501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 126738.96543611557,
            "unit": "ns/iter",
            "extra": "iterations: 5526\ncpu: 126734.25624321376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32780.63540934612,
            "unit": "ns/iter",
            "extra": "iterations: 21339\ncpu: 32779.61478982115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32767.98720112189,
            "unit": "ns/iter",
            "extra": "iterations: 21330\ncpu: 32766.235349273826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33270.24613402044,
            "unit": "ns/iter",
            "extra": "iterations: 20952\ncpu: 33268.63306605555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67490.49534973885,
            "unit": "ns/iter",
            "extra": "iterations: 10322\ncpu: 67486.8145708194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59545.52785550711,
            "unit": "ns/iter",
            "extra": "iterations: 11793\ncpu: 59541.21936742176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16512.841523601885,
            "unit": "ns/iter",
            "extra": "iterations: 42347\ncpu: 16511.37034500676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 79088.82107042534,
            "unit": "ns/iter",
            "extra": "iterations: 8875\ncpu: 79082.29859154923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 63674.23869505934,
            "unit": "ns/iter",
            "extra": "iterations: 11035\ncpu: 63670.24920706875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 64667.98937741996,
            "unit": "ns/iter",
            "extra": "iterations: 10826\ncpu: 64665.44430075704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 65509.34263508612,
            "unit": "ns/iter",
            "extra": "iterations: 10679\ncpu: 65505.646596122766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 123190.3035527639,
            "unit": "ns/iter",
            "extra": "iterations: 5742\ncpu: 123182.67154301639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 552829.6278701131,
            "unit": "ns/iter",
            "extra": "iterations: 1263\ncpu: 552791.6864608153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 470370.3626594434,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 470333.6467427798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 468778.7065144101,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 468749.89926125586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 473752.17615177366,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 473732.18157181994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 305494.75601223635,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 305486.3139484024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 459194.10338104586,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 459185.2405721744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16291.5422558202,
            "unit": "ns/iter",
            "extra": "iterations: 42858\ncpu: 16291.369172616629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 78914.64665541753,
            "unit": "ns/iter",
            "extra": "iterations: 8895\ncpu: 78911.82686902779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 63835.47023264602,
            "unit": "ns/iter",
            "extra": "iterations: 10918\ncpu: 63834.16376625756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 64667.40563668784,
            "unit": "ns/iter",
            "extra": "iterations: 10751\ncpu: 64666.672867639965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 65453.085154413566,
            "unit": "ns/iter",
            "extra": "iterations: 11074\ncpu: 65451.85118295167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 124630.17532005908,
            "unit": "ns/iter",
            "extra": "iterations: 5624\ncpu: 124626.67140825195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 553270.4479495037,
            "unit": "ns/iter",
            "extra": "iterations: 1268\ncpu: 553225.3154574103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 467206.11193030776,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 467201.8766756014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 469616.4623148849,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 469596.6352624495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 471165.9919192041,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 471148.75420876127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 306455.53239930375,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 306441.8563922931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 459231.99606559286,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 459206.75409835525 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705772322575,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6684.509394032943,
            "unit": "ns/iter",
            "extra": "iterations: 104428\ncpu: 6684.091431416861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66455.3932791114,
            "unit": "ns/iter",
            "extra": "iterations: 13034\ncpu: 66452.96915758782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 126564.62178474135,
            "unit": "ns/iter",
            "extra": "iterations: 6959\ncpu: 126556.4592613881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 185448.3241557398,
            "unit": "ns/iter",
            "extra": "iterations: 4649\ncpu: 185442.7188642718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 245429.52460882094,
            "unit": "ns/iter",
            "extra": "iterations: 3515\ncpu: 245412.68847795174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 302862.52677940414,
            "unit": "ns/iter",
            "extra": "iterations: 2838\ncpu: 302851.40944327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 361726.48811013345,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 361692.11514393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 420781.15041242744,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 420760.26200873323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 480219.5240198978,
            "unit": "ns/iter",
            "extra": "iterations: 1811\ncpu: 480180.67366096127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5052.79274211585,
            "unit": "ns/iter",
            "extra": "iterations: 138663\ncpu: 5052.404029914254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4283.097941485513,
            "unit": "ns/iter",
            "extra": "iterations: 163516\ncpu: 4282.914821791143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4265.806011278633,
            "unit": "ns/iter",
            "extra": "iterations: 164025\ncpu: 4265.547934766039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4311.092394650446,
            "unit": "ns/iter",
            "extra": "iterations: 162412\ncpu: 4310.997340098023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7682.551717708065,
            "unit": "ns/iter",
            "extra": "iterations: 91168\ncpu: 7682.096788346791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30616.222514544635,
            "unit": "ns/iter",
            "extra": "iterations: 26987\ncpu: 30615.307370215334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 135675.32971697763,
            "unit": "ns/iter",
            "extra": "iterations: 6360\ncpu: 135665.9276729563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 108270.85723293625,
            "unit": "ns/iter",
            "extra": "iterations: 7929\ncpu: 108264.72442931007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 106277.882601153,
            "unit": "ns/iter",
            "extra": "iterations: 8058\ncpu: 106269.86845371043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 107127.60512819514,
            "unit": "ns/iter",
            "extra": "iterations: 7995\ncpu: 107123.68980612906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 254169.96855893443,
            "unit": "ns/iter",
            "extra": "iterations: 3435\ncpu: 254149.46142649252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2019964.3391304999,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2019888.0434782612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1671365.7917414862,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1671210.2333931793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1662999.2767856754,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1662944.464285714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1679660.3700361347,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1679569.4945848358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 995531.694951664,
            "unit": "ns/iter",
            "extra": "iterations: 931\ncpu: 995510.5263157887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1614372.5122378622,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1614245.6293706284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6788660.879999497,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6788519.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3881339.876033117,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3880960.7438016557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8190775.451127517,
            "unit": "ns/iter",
            "extra": "iterations: 133\ncpu: 8190546.61654135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31266.712293469147,
            "unit": "ns/iter",
            "extra": "iterations: 26388\ncpu: 31264.999242079764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 140523.5109298621,
            "unit": "ns/iter",
            "extra": "iterations: 6130\ncpu: 140520.636215335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 111445.9149655496,
            "unit": "ns/iter",
            "extra": "iterations: 7691\ncpu: 111439.86477701213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 106947.90153884895,
            "unit": "ns/iter",
            "extra": "iterations: 7993\ncpu: 106945.5148254715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 109118.98786408716,
            "unit": "ns/iter",
            "extra": "iterations: 7828\ncpu: 109111.7654573332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 257762.13968627094,
            "unit": "ns/iter",
            "extra": "iterations: 3379\ncpu: 257753.77330570982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2048353.5286343433,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2048250.6607929522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1684266.4285712906,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1684222.6039782944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1673707.2504470877,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1673638.9982110944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1683012.4460432054,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1682931.6546762595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 995642.5048128336,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 995604.919786094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1626835.1202091994,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1626704.3554006943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6818207.86000003,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6817704.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3771606.9236949007,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3771271.485943765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29587.22666001171,
            "unit": "ns/iter",
            "extra": "iterations: 28042\ncpu: 29585.92111832239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 132734.00957232653,
            "unit": "ns/iter",
            "extra": "iterations: 6477\ncpu: 132726.61726107838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 107504.05432191203,
            "unit": "ns/iter",
            "extra": "iterations: 7971\ncpu: 107500.92836532416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 105171.39561261598,
            "unit": "ns/iter",
            "extra": "iterations: 8023\ncpu: 105166.09746977444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 107139.88751560404,
            "unit": "ns/iter",
            "extra": "iterations: 8010\ncpu: 107136.94132334588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 251855.92128955372,
            "unit": "ns/iter",
            "extra": "iterations: 3443\ncpu: 251844.3218123731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2026316.8652174657,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2026256.9565217379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1672564.0718131098,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1672445.4219030475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1662694.2709447036,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1662648.1283422404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1676044.10090085,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1675974.2342342404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 992448.00533048,
            "unit": "ns/iter",
            "extra": "iterations: 938\ncpu: 992430.1705756955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1622900.221640565,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1622771.3787085512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2716.825199792972,
            "unit": "ns/iter",
            "extra": "iterations: 257391\ncpu: 2716.775256322081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14819.170200559316,
            "unit": "ns/iter",
            "extra": "iterations: 47068\ncpu: 14818.22469618437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11705.333957061986,
            "unit": "ns/iter",
            "extra": "iterations: 59855\ncpu: 11704.963662183514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11345.277462182023,
            "unit": "ns/iter",
            "extra": "iterations: 61612\ncpu: 11344.809452704123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9278.251565235996,
            "unit": "ns/iter",
            "extra": "iterations: 75388\ncpu: 9277.820077465843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57799.39819416942,
            "unit": "ns/iter",
            "extra": "iterations: 12072\ncpu: 57798.33499005959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 129350.42255083304,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 129342.66173752314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33111.43679303361,
            "unit": "ns/iter",
            "extra": "iterations: 21129\ncpu: 33110.8665814756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32607.77764794146,
            "unit": "ns/iter",
            "extra": "iterations: 21394\ncpu: 32606.07179583058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33179.349789166896,
            "unit": "ns/iter",
            "extra": "iterations: 21107\ncpu: 33178.04519827536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67781.2915578718,
            "unit": "ns/iter",
            "extra": "iterations: 10341\ncpu: 67777.33294652395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 60416.58062289211,
            "unit": "ns/iter",
            "extra": "iterations: 11591\ncpu: 60412.88931067247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16476.614704151485,
            "unit": "ns/iter",
            "extra": "iterations: 42505\ncpu: 16476.06163980716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 81697.4470395837,
            "unit": "ns/iter",
            "extra": "iterations: 8563\ncpu: 81694.68644166841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 65636.6108920261,
            "unit": "ns/iter",
            "extra": "iterations: 10650\ncpu: 65635.43661971854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 64913.62874919451,
            "unit": "ns/iter",
            "extra": "iterations: 10769\ncpu: 64909.64806388673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 66237.19341993266,
            "unit": "ns/iter",
            "extra": "iterations: 10547\ncpu: 66234.03811510326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 127706.73312546658,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 127701.59574468022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 560721.4791667139,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 560683.1730769266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 480613.73076918174,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 480601.23626373685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 473779.45663960685,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 473761.7208672018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 478077.81706482207,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 478049.6245733741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 304975.4777874372,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 304970.6445993033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 466051.7666666995,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 466018.2666666704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16697.741907782252,
            "unit": "ns/iter",
            "extra": "iterations: 41923\ncpu: 16697.464399017113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 81443.12530569342,
            "unit": "ns/iter",
            "extra": "iterations: 8587\ncpu: 81437.25398858816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 65853.94712081258,
            "unit": "ns/iter",
            "extra": "iterations: 10628\ncpu: 65851.99473090006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 65858.81904493389,
            "unit": "ns/iter",
            "extra": "iterations: 10638\ncpu: 65857.25700319537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 67215.9637340517,
            "unit": "ns/iter",
            "extra": "iterations: 10423\ncpu: 67210.20819341933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 126087.59157212157,
            "unit": "ns/iter",
            "extra": "iterations: 5553\ncpu: 126085.80947235665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 555493.7752185002,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 555460.7625099252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 476220.8599591749,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 476212.7804214797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 472531.92702698556,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 472505.47297297034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 475656.4380952522,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 475637.9591836764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 306322.8467248849,
            "unit": "ns/iter",
            "extra": "iterations: 2290\ncpu: 306313.40611353354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 465492.47473402275,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 465462.2340425588 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}