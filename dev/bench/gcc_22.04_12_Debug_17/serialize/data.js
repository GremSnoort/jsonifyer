window.BENCHMARK_DATA = {
  "lastUpdate": 1702412792457,
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
      }
    ]
  }
}