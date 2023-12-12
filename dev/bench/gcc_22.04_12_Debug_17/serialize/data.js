window.BENCHMARK_DATA = {
  "lastUpdate": 1702399122493,
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
      }
    ]
  }
}