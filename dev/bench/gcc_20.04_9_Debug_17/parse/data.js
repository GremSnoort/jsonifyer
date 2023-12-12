window.BENCHMARK_DATA = {
  "lastUpdate": 1702412540403,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-9 20.04 Debug c++-17": [
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
        "date": 1702398826421,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6971.306422018609,
            "unit": "ns/iter",
            "extra": "iterations: 100280\ncpu: 6971.017151974472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50880.90269999838,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50880.03999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93768.14318580196,
            "unit": "ns/iter",
            "extra": "iterations: 9128\ncpu: 93765.70990359336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138636.54808604278,
            "unit": "ns/iter",
            "extra": "iterations: 6322\ncpu: 138632.04682062633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179470.94377593865,
            "unit": "ns/iter",
            "extra": "iterations: 4820\ncpu: 179461.99170124487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 221968.3396565064,
            "unit": "ns/iter",
            "extra": "iterations: 3901\ncpu: 221949.70520379403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 265724.77148975467,
            "unit": "ns/iter",
            "extra": "iterations: 3269\ncpu: 265708.84062404395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 306972.33309784986,
            "unit": "ns/iter",
            "extra": "iterations: 2831\ncpu: 306958.67184740363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 349663.7406664174,
            "unit": "ns/iter",
            "extra": "iterations: 2491\ncpu: 349644.84142914525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5700.148249559915,
            "unit": "ns/iter",
            "extra": "iterations: 122712\ncpu: 5700.089640784926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4779.747963930598,
            "unit": "ns/iter",
            "extra": "iterations: 146606\ncpu: 4779.4319468507465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4687.938992795686,
            "unit": "ns/iter",
            "extra": "iterations: 147835\ncpu: 4687.688977576345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4731.522933491598,
            "unit": "ns/iter",
            "extra": "iterations: 148342\ncpu: 4731.2777230993215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7189.2456713058355,
            "unit": "ns/iter",
            "extra": "iterations: 97720\ncpu: 7188.873311502262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26285.149321559657,
            "unit": "ns/iter",
            "extra": "iterations: 31027\ncpu: 26283.807651400435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126726.92802246295,
            "unit": "ns/iter",
            "extra": "iterations: 6766\ncpu: 126717.39580254215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99489.66146863834,
            "unit": "ns/iter",
            "extra": "iterations: 8593\ncpu: 99484.0451530314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100563.27730696976,
            "unit": "ns/iter",
            "extra": "iterations: 8496\ncpu: 100555.9792843692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96290.91005890518,
            "unit": "ns/iter",
            "extra": "iterations: 8828\ncpu: 96285.59130040806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 211419.2250712293,
            "unit": "ns/iter",
            "extra": "iterations: 4212\ncpu: 211406.2678062678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1628090.701048945,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1627986.7132867118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1289314.6166666567,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1289243.4722222222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1287730.4736841975,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1287677.562326868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1276633.6433469965,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1276555.5555555562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 718139.6074476544,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 718097.8277734657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1243387.899463791,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 1243297.7211796287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33894.021336834565,
            "unit": "ns/iter",
            "extra": "iterations: 24371\ncpu: 33892.786508555364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157531.06844314988,
            "unit": "ns/iter",
            "extra": "iterations: 5479\ncpu: 157522.08432195705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 124253.00203281402,
            "unit": "ns/iter",
            "extra": "iterations: 6887\ncpu: 124247.46624074309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 121871.13501209386,
            "unit": "ns/iter",
            "extra": "iterations: 7029\ncpu: 121867.54872670371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 120819.80152134104,
            "unit": "ns/iter",
            "extra": "iterations: 7099\ncpu: 120816.38258909695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 223378.87238979078,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 223366.6666666675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1659479.0391458578,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1659398.2206405716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1314038.9124293574,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1313948.3050847447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1368991.5607344888,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1368895.3389830482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1302918.5006993194,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1302813.5664335587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 747397.4206285368,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 747380.6607574553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1277352.465020586,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1277305.4869684568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6145770.835526097,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6145392.105263133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2779950.3898809655,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2779911.6071428647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25137.72660926012,
            "unit": "ns/iter",
            "extra": "iterations: 32748\ncpu: 25136.75949676333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 122698.44991438274,
            "unit": "ns/iter",
            "extra": "iterations: 7008\ncpu: 122698.75856164371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 95843.71240517775,
            "unit": "ns/iter",
            "extra": "iterations: 8964\ncpu: 95841.08656849603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96184.00785105857,
            "unit": "ns/iter",
            "extra": "iterations: 8916\ncpu: 96184.32032301468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93317.30132341849,
            "unit": "ns/iter",
            "extra": "iterations: 9143\ncpu: 93313.09198293777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 193813.4147485979,
            "unit": "ns/iter",
            "extra": "iterations: 4475\ncpu: 193805.9664804484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1637224.047451678,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1637155.0087873428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1296281.879166688,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1296271.944444448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1318080.5900276797,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1318009.002770083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1279845.3901773037,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1279806.1391541644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 713001.0328746227,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 712962.079510704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1249994.0591398182,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 1249935.0806451663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2684.2992609384955,
            "unit": "ns/iter",
            "extra": "iterations: 262901\ncpu: 2684.2358910768908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17573.19903483209,
            "unit": "ns/iter",
            "extra": "iterations: 39993\ncpu: 17572.75273172792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13943.993031359485,
            "unit": "ns/iter",
            "extra": "iterations: 50225\ncpu: 13943.058237929392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14216.488979479662,
            "unit": "ns/iter",
            "extra": "iterations: 51268\ncpu: 14215.393617851347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10198.838856495382,
            "unit": "ns/iter",
            "extra": "iterations: 68771\ncpu: 10198.028238647155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66888.77487312087,
            "unit": "ns/iter",
            "extra": "iterations: 10443\ncpu: 66886.0959494401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112055.22481984552,
            "unit": "ns/iter",
            "extra": "iterations: 6245\ncpu: 112055.46837469988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27691.49131071302,
            "unit": "ns/iter",
            "extra": "iterations: 25261\ncpu: 27691.322592138175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27778.169329579454,
            "unit": "ns/iter",
            "extra": "iterations: 25223\ncpu: 27777.457082821198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27636.45142044483,
            "unit": "ns/iter",
            "extra": "iterations: 25309\ncpu: 27636.157098265478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55686.629532447034,
            "unit": "ns/iter",
            "extra": "iterations: 12576\ncpu: 55685.56774809137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51757.29243473814,
            "unit": "ns/iter",
            "extra": "iterations: 13562\ncpu: 51753.70889249354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20452.04908261984,
            "unit": "ns/iter",
            "extra": "iterations: 34228\ncpu: 20450.470375131546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 100311.40561444245,
            "unit": "ns/iter",
            "extra": "iterations: 6982\ncpu: 100302.59238040644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 82725.92980768187,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 82720.39663461513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82240.13511612544,
            "unit": "ns/iter",
            "extra": "iterations: 8526\ncpu: 82238.25944170756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82719.45672452224,
            "unit": "ns/iter",
            "extra": "iterations: 8469\ncpu: 82714.33463218831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123035.43720359175,
            "unit": "ns/iter",
            "extra": "iterations: 5693\ncpu: 123028.59652204365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 481752.69759442547,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 481732.5773195875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 400725.4042309912,
            "unit": "ns/iter",
            "extra": "iterations: 1749\ncpu: 400716.12349914026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 399611.54649173236,
            "unit": "ns/iter",
            "extra": "iterations: 1753\ncpu: 399601.14090131223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 396022.0940510203,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 395988.9518413597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 261503.91133556925,
            "unit": "ns/iter",
            "extra": "iterations: 2673\ncpu: 261494.50056116798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 392341.8951522217,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 392316.4599774496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21473.725779211807,
            "unit": "ns/iter",
            "extra": "iterations: 32565\ncpu: 21473.139874098048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 103048.25596465256,
            "unit": "ns/iter",
            "extra": "iterations: 6790\ncpu: 103045.24300441773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86479.948056754,
            "unit": "ns/iter",
            "extra": "iterations: 8105\ncpu: 86476.15052436666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87263.68054344437,
            "unit": "ns/iter",
            "extra": "iterations: 8023\ncpu: 87258.66882712104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85365.38428693505,
            "unit": "ns/iter",
            "extra": "iterations: 8197\ncpu: 85359.22898621438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 125105.89609694532,
            "unit": "ns/iter",
            "extra": "iterations: 5611\ncpu: 125097.6474781678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 486278.4909721856,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 486238.19444444135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 399630.65505426243,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 399608.6236436248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 401120.5522558442,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 401090.34837235976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 399606.9429874847,
            "unit": "ns/iter",
            "extra": "iterations: 1754\ncpu: 399602.7366020519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 258646.21740771696,
            "unit": "ns/iter",
            "extra": "iterations: 2654\ncpu: 258643.74529012936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 396207.9743735181,
            "unit": "ns/iter",
            "extra": "iterations: 1756\ncpu: 396200.1138952139 ns\nthreads: 1"
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
        "date": 1702409115785,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6730.719995375238,
            "unit": "ns/iter",
            "extra": "iterations: 103784\ncpu: 6730.726316195174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56922.341877961306,
            "unit": "ns/iter",
            "extra": "iterations: 14356\ncpu: 56920.89718584564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 90243.25155050923,
            "unit": "ns/iter",
            "extra": "iterations: 9513\ncpu: 90241.10165037321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 130382.64443771284,
            "unit": "ns/iter",
            "extra": "iterations: 6598\ncpu: 130375.73507123365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 173208.01428571652,
            "unit": "ns/iter",
            "extra": "iterations: 4970\ncpu: 173196.98189134817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 213667.08859823094,
            "unit": "ns/iter",
            "extra": "iterations: 4052\ncpu: 213653.2329713721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 254365.9292869865,
            "unit": "ns/iter",
            "extra": "iterations: 3394\ncpu: 254350.4124926341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 295600.4538619236,
            "unit": "ns/iter",
            "extra": "iterations: 2926\ncpu: 295579.66507177043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 336723.89724698383,
            "unit": "ns/iter",
            "extra": "iterations: 2579\ncpu: 336716.4792555252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5707.80855866888,
            "unit": "ns/iter",
            "extra": "iterations: 122706\ncpu: 5707.517154825352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4606.749112362695,
            "unit": "ns/iter",
            "extra": "iterations: 149836\ncpu: 4606.529138524783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4611.100506317575,
            "unit": "ns/iter",
            "extra": "iterations: 151881\ncpu: 4610.976356489629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4622.040459339654,
            "unit": "ns/iter",
            "extra": "iterations: 151609\ncpu: 4621.873371633604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7257.941829746779,
            "unit": "ns/iter",
            "extra": "iterations: 96527\ncpu: 7257.570420711317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26856.689034639705,
            "unit": "ns/iter",
            "extra": "iterations: 30341\ncpu: 26855.242081671666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126833.59382353054,
            "unit": "ns/iter",
            "extra": "iterations: 6800\ncpu: 126831.02941176473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99533.28115572044,
            "unit": "ns/iter",
            "extra": "iterations: 8618\ncpu: 99525.86446971458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98900.74979634772,
            "unit": "ns/iter",
            "extra": "iterations: 8593\ncpu: 98893.57616664721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96481.09857077953,
            "unit": "ns/iter",
            "extra": "iterations: 8816\ncpu: 96472.68602540818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 213514.32142856932,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 213502.46138996133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1618628.7526132667,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1618527.5261324043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1283998.3674032427,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 1283881.906077351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1278630.6785714088,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1278517.5824175845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1256575.831309021,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 1256437.112010795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 704985.6991622248,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 704942.5742574247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1233861.1896551515,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 1233735.0132625988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33849.08362398044,
            "unit": "ns/iter",
            "extra": "iterations: 24371\ncpu: 33848.21714332607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158892.87415028107,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 158886.82711739835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 124252.45015937259,
            "unit": "ns/iter",
            "extra": "iterations: 6902\ncpu: 124244.92900608474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 123938.77121823821,
            "unit": "ns/iter",
            "extra": "iterations: 6928\ncpu: 123926.31351039217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121795.05613985153,
            "unit": "ns/iter",
            "extra": "iterations: 7036\ncpu: 121785.85844229703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 227508.49173878948,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 227488.95882507178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1646966.2672566662,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1646838.9380530985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1308027.9554597887,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1307953.4482758567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1306449.0435393953,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1306387.7808988718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1285370.4786206875,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1285255.0344827552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 744707.019984019,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 744663.3892885664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1262705.7761193751,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1262584.3962008134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6068658.435064851,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6068338.961038951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2692973.9913295396,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2692793.0635838034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25504.93385650323,
            "unit": "ns/iter",
            "extra": "iterations: 32112\ncpu: 25503.31028898862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 123926.186710682,
            "unit": "ns/iter",
            "extra": "iterations: 6968\ncpu: 123919.21641791091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 96782.22144469558,
            "unit": "ns/iter",
            "extra": "iterations: 8860\ncpu: 96774.17607223504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96407.72594260024,
            "unit": "ns/iter",
            "extra": "iterations: 8885\ncpu: 96401.83455261709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94321.03174602987,
            "unit": "ns/iter",
            "extra": "iterations: 9072\ncpu: 94314.96913580257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 195707.56576861956,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 195688.54426081147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1623470.6521739732,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1623354.260869566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1279308.4979424227,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1279241.1522633794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1279221.0889193316,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1279119.0150478848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1252171.7479892804,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 1252098.6595174219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 695784.450336076,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 695736.5197908885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1284830.567460336,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 1284752.513227507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2679.5470744628647,
            "unit": "ns/iter",
            "extra": "iterations: 261405\ncpu: 2679.422352288593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16633.7639821013,
            "unit": "ns/iter",
            "extra": "iterations: 42018\ncpu: 16633.28573468513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13762.824881624301,
            "unit": "ns/iter",
            "extra": "iterations: 50897\ncpu: 13762.152975617464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13937.8081121995,
            "unit": "ns/iter",
            "extra": "iterations: 50196\ncpu: 13936.897362339612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 9686.499861877828,
            "unit": "ns/iter",
            "extra": "iterations: 72400\ncpu: 9686.031767955801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65498.607320038376,
            "unit": "ns/iter",
            "extra": "iterations: 10683\ncpu: 65490.42403819203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 109952.89402514255,
            "unit": "ns/iter",
            "extra": "iterations: 6360\ncpu: 109950.0157232701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27488.872942287187,
            "unit": "ns/iter",
            "extra": "iterations: 25453\ncpu: 27487.78140101364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27139.135003101732,
            "unit": "ns/iter",
            "extra": "iterations: 25792\ncpu: 27138.82211538462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27241.073313898447,
            "unit": "ns/iter",
            "extra": "iterations: 25725\ncpu: 27239.883381924286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54478.15105341067,
            "unit": "ns/iter",
            "extra": "iterations: 12863\ncpu: 54473.964083029045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51318.45801806941,
            "unit": "ns/iter",
            "extra": "iterations: 13613\ncpu: 51315.17666936037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20246.31903578279,
            "unit": "ns/iter",
            "extra": "iterations: 34598\ncpu: 20244.415862188584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 99976.90312011368,
            "unit": "ns/iter",
            "extra": "iterations: 7019\ncpu: 99972.06154722869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 81729.48159831931,
            "unit": "ns/iter",
            "extra": "iterations: 8559\ncpu: 81725.2015422371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 81679.63868783262,
            "unit": "ns/iter",
            "extra": "iterations: 8566\ncpu: 81672.65935092198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 81495.3441276624,
            "unit": "ns/iter",
            "extra": "iterations: 8523\ncpu: 81490.86002581195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 121484.70034661805,
            "unit": "ns/iter",
            "extra": "iterations: 5770\ncpu: 121470.31195840651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 480932.79013205005,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 480916.5392633774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 397136.6810687928,
            "unit": "ns/iter",
            "extra": "iterations: 1759\ncpu: 397125.7532689031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 400646.83954150777,
            "unit": "ns/iter",
            "extra": "iterations: 1745\ncpu: 400631.346704871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 391119.2014508989,
            "unit": "ns/iter",
            "extra": "iterations: 1792\ncpu: 391119.75446428003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 247343.15343916282,
            "unit": "ns/iter",
            "extra": "iterations: 2835\ncpu: 247324.33862433519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 388712.80266072747,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 388702.8270509967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20951.684699766356,
            "unit": "ns/iter",
            "extra": "iterations: 33457\ncpu: 20950.79355590737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105055.60816695266,
            "unit": "ns/iter",
            "extra": "iterations: 6661\ncpu: 105055.77240654537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85687.91724813756,
            "unit": "ns/iter",
            "extra": "iterations: 8169\ncpu: 85682.59272860862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85661.75690675467,
            "unit": "ns/iter",
            "extra": "iterations: 8108\ncpu: 85657.2274297001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 83989.5487057579,
            "unit": "ns/iter",
            "extra": "iterations: 7997\ncpu: 83986.6825059406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126006.71194969384,
            "unit": "ns/iter",
            "extra": "iterations: 5565\ncpu: 125999.42497753857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 479514.90342464007,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 479488.2191780785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 397518.1711199766,
            "unit": "ns/iter",
            "extra": "iterations: 1759\ncpu: 397493.7464468435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 396349.34392735927,
            "unit": "ns/iter",
            "extra": "iterations: 1762\ncpu: 396330.7604994312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 391004.2668900236,
            "unit": "ns/iter",
            "extra": "iterations: 1791\ncpu: 391004.2992741415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 252913.8638005973,
            "unit": "ns/iter",
            "extra": "iterations: 2768\ncpu: 252890.78757225486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 392159.96416572324,
            "unit": "ns/iter",
            "extra": "iterations: 1786\ncpu: 392149.0481522973 ns\nthreads: 1"
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
        "date": 1702412538807,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6839.9904520413465,
            "unit": "ns/iter",
            "extra": "iterations: 102535\ncpu: 6839.356317355049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57537.40208509603,
            "unit": "ns/iter",
            "extra": "iterations: 14196\ncpu: 57536.40462102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 90737.68684099682,
            "unit": "ns/iter",
            "extra": "iterations: 9484\ncpu: 90735.37536904264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 131906.91619514558,
            "unit": "ns/iter",
            "extra": "iterations: 6539\ncpu: 131903.36442881182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 173392.28419574886,
            "unit": "ns/iter",
            "extra": "iterations: 4986\ncpu: 173384.4364219814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 215109.8520445993,
            "unit": "ns/iter",
            "extra": "iterations: 4035\ncpu: 215096.87732342005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 255576.68111074905,
            "unit": "ns/iter",
            "extra": "iterations: 3277\ncpu: 255566.06652425995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 296558.0095432931,
            "unit": "ns/iter",
            "extra": "iterations: 2934\ncpu: 296546.01226993883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 337652.0213260872,
            "unit": "ns/iter",
            "extra": "iterations: 2579\ncpu: 337649.51531601395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5596.421980292219,
            "unit": "ns/iter",
            "extra": "iterations: 121982\ncpu: 5596.197799675352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4764.5540657727515,
            "unit": "ns/iter",
            "extra": "iterations: 149910\ncpu: 4764.529384297243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4638.9321441874645,
            "unit": "ns/iter",
            "extra": "iterations: 147725\ncpu: 4638.853951599261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4711.07430368759,
            "unit": "ns/iter",
            "extra": "iterations: 153882\ncpu: 4710.990239274246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7227.242059633146,
            "unit": "ns/iter",
            "extra": "iterations: 96658\ncpu: 7226.587556125721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25709.451568981294,
            "unit": "ns/iter",
            "extra": "iterations: 31581\ncpu: 25709.06241094332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 127058.74895210784,
            "unit": "ns/iter",
            "extra": "iterations: 6680\ncpu: 127054.79041916155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101143.07628228277,
            "unit": "ns/iter",
            "extra": "iterations: 8403\ncpu: 101141.48518386325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104300.89830109102,
            "unit": "ns/iter",
            "extra": "iterations: 8476\ncpu: 104294.25436526656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98720.07783319757,
            "unit": "ns/iter",
            "extra": "iterations: 8621\ncpu: 98718.24614313892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 216437.19239318548,
            "unit": "ns/iter",
            "extra": "iterations: 4049\ncpu: 216427.73524327032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1596493.5155172248,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1596433.7931034516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1270050.7088435239,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1267721.496598637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1270890.3497943492,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1270836.625514401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1255242.9298244906,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 1255188.1241565426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 699295.973404253,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 699271.7325227968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1225360.9084882012,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 1225311.2732095472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32217.138808537482,
            "unit": "ns/iter",
            "extra": "iterations: 25582\ncpu: 32216.35915878354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158727.0361890724,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 158723.24593796188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125112.65299592845,
            "unit": "ns/iter",
            "extra": "iterations: 6876\ncpu: 125106.50087260033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 124371.29965155915,
            "unit": "ns/iter",
            "extra": "iterations: 6888\ncpu: 124367.05865272919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121238.784247062,
            "unit": "ns/iter",
            "extra": "iterations: 7059\ncpu: 121234.23997733387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 226318.23738562886,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 226313.33333333305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1640204.4745166202,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1640139.367311079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1293700.737499945,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1293644.7222222153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1301020.4853557579,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1300990.9344490867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1282414.2087912203,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1282380.9065934152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 719592.7844960818,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 719555.9689922497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1252379.2159243927,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 1252351.9568151126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5937236.343949074,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 5937043.949044582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2775778.5868264413,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2775682.035928142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24591.760278059326,
            "unit": "ns/iter",
            "extra": "iterations: 33518\ncpu: 24590.658750522216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 124760.77123327344,
            "unit": "ns/iter",
            "extra": "iterations: 6876\ncpu: 124758.42059336785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97610.44216757876,
            "unit": "ns/iter",
            "extra": "iterations: 8784\ncpu: 97609.14162112983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97140.99841771668,
            "unit": "ns/iter",
            "extra": "iterations: 8848\ncpu: 97137.36437612983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 95075.68951033284,
            "unit": "ns/iter",
            "extra": "iterations: 9047\ncpu: 95073.6487233336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 198355.19327731812,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 198354.64456052583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1606145.5883362223,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1606127.7873070403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1263016.492557549,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1262980.2435723867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1265261.7612550352,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1265164.9386084557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1244920.013386927,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1244884.6050870134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 694753.8892215145,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 694732.1856287445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1221043.641059671,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1220997.8807946972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2612.836073859111,
            "unit": "ns/iter",
            "extra": "iterations: 267102\ncpu: 2612.731840270745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17100.458628552467,
            "unit": "ns/iter",
            "extra": "iterations: 40789\ncpu: 17099.997548358668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14134.886599606303,
            "unit": "ns/iter",
            "extra": "iterations: 49506\ncpu: 14134.98363834692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14510.317789507199,
            "unit": "ns/iter",
            "extra": "iterations: 48315\ncpu: 14510.085894649725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10251.466845375899,
            "unit": "ns/iter",
            "extra": "iterations: 67894\ncpu: 10251.114973340791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 68120.04734129917,
            "unit": "ns/iter",
            "extra": "iterations: 10287\ncpu: 68117.58530183711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 110910.87799081109,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 110906.79765488816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27302.783865819292,
            "unit": "ns/iter",
            "extra": "iterations: 25697\ncpu: 27301.634432034785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27462.731358528883,
            "unit": "ns/iter",
            "extra": "iterations: 25454\ncpu: 27461.53846153835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 26981.64818960486,
            "unit": "ns/iter",
            "extra": "iterations: 25906\ncpu: 26980.880877016898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54757.14518541309,
            "unit": "ns/iter",
            "extra": "iterations: 12701\ncpu: 54756.69632312387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51409.006151142195,
            "unit": "ns/iter",
            "extra": "iterations: 13656\ncpu: 51408.113649677674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20660.508477575353,
            "unit": "ns/iter",
            "extra": "iterations: 33913\ncpu: 20657.753663786738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 103190.66548777228,
            "unit": "ns/iter",
            "extra": "iterations: 6786\ncpu: 103180.09136457581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83793.29840248698,
            "unit": "ns/iter",
            "extra": "iterations: 8388\ncpu: 83787.55364806861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84258.13864839861,
            "unit": "ns/iter",
            "extra": "iterations: 8316\ncpu: 84258.67003367055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84334.16034109915,
            "unit": "ns/iter",
            "extra": "iterations: 8326\ncpu: 84331.26351189085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 125519.74574753875,
            "unit": "ns/iter",
            "extra": "iterations: 5585\ncpu: 125514.96866606968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 478744.7095890151,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 478737.6027397253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 396438.24362601485,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 396426.91218130034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 399682.00912204327,
            "unit": "ns/iter",
            "extra": "iterations: 1754\ncpu: 399669.7263397952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 388200.29551741434,
            "unit": "ns/iter",
            "extra": "iterations: 1807\ncpu: 388185.50083010964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 253683.57866187303,
            "unit": "ns/iter",
            "extra": "iterations: 2765\ncpu: 253677.68535262172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 388584.616155977,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 388571.8105849517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21093.195876910533,
            "unit": "ns/iter",
            "extra": "iterations: 33179\ncpu: 21092.392778564918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104145.68773232876,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 104141.48698884706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85765.11642233655,
            "unit": "ns/iter",
            "extra": "iterations: 8117\ncpu: 85761.22951829362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86386.03005566305,
            "unit": "ns/iter",
            "extra": "iterations: 8085\ncpu: 86384.60111317254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85770.37444717664,
            "unit": "ns/iter",
            "extra": "iterations: 8140\ncpu: 85769.71744471767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126636.96341242982,
            "unit": "ns/iter",
            "extra": "iterations: 5521\ncpu: 126631.31679043524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 480871.4633812733,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 480791.1019849442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 394888.9413091993,
            "unit": "ns/iter",
            "extra": "iterations: 1772\ncpu: 394865.7449209991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 397668.2086168073,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 397666.32653061266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 390553.58593755227,
            "unit": "ns/iter",
            "extra": "iterations: 1792\ncpu: 390551.95312500047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 254453.769005827,
            "unit": "ns/iter",
            "extra": "iterations: 2736\ncpu: 254452.44883040906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 390760.36047162506,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 390745.76080853125 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}