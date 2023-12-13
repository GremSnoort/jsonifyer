window.BENCHMARK_DATA = {
  "lastUpdate": 1702490848279,
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
        "date": 1702416020218,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6818.15062790322,
            "unit": "ns/iter",
            "extra": "iterations: 101608\ncpu: 6818.18459176443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57023.45935753989,
            "unit": "ns/iter",
            "extra": "iterations: 14320\ncpu: 57021.787709497214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 90494.16059934875,
            "unit": "ns/iter",
            "extra": "iterations: 9477\ncpu: 90490.64049804794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 131679.15175572247,
            "unit": "ns/iter",
            "extra": "iterations: 6550\ncpu: 131672.45801526724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 173414.732035919,
            "unit": "ns/iter",
            "extra": "iterations: 4676\ncpu: 173405.1753635586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 214854.7791821521,
            "unit": "ns/iter",
            "extra": "iterations: 4035\ncpu: 214848.32713754632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 256221.93339227387,
            "unit": "ns/iter",
            "extra": "iterations: 3393\ncpu: 256217.24137931046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 296912.50767132564,
            "unit": "ns/iter",
            "extra": "iterations: 2933\ncpu: 296900.23866348434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 338045.23137255985,
            "unit": "ns/iter",
            "extra": "iterations: 2550\ncpu: 338032.4313725492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5580.3742557141,
            "unit": "ns/iter",
            "extra": "iterations: 124952\ncpu: 5580.158780971898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4608.799110286543,
            "unit": "ns/iter",
            "extra": "iterations: 151959\ncpu: 4608.586526628891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4627.037109065011,
            "unit": "ns/iter",
            "extra": "iterations: 151176\ncpu: 4626.883235434199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4515.52623994841,
            "unit": "ns/iter",
            "extra": "iterations: 155450\ncpu: 4515.412029591508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7178.193186714247,
            "unit": "ns/iter",
            "extra": "iterations: 97486\ncpu: 7177.770141353634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25612.362840919173,
            "unit": "ns/iter",
            "extra": "iterations: 32229\ncpu: 25611.25694250519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 128452.6553939083,
            "unit": "ns/iter",
            "extra": "iterations: 5293\ncpu: 128448.27130171914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102519.19234461707,
            "unit": "ns/iter",
            "extra": "iterations: 8334\ncpu: 102515.93472522224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102898.83179142285,
            "unit": "ns/iter",
            "extra": "iterations: 8323\ncpu: 102896.05911330051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99189.16649263268,
            "unit": "ns/iter",
            "extra": "iterations: 8619\ncpu: 99185.34632788046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 216265.84048780243,
            "unit": "ns/iter",
            "extra": "iterations: 4100\ncpu: 216254.97560975587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1594769.3026086912,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1594711.6521739082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1254034.1781376726,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 1253997.8407557367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1260317.8398915199,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1260251.8317503398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1245853.388739921,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 1245795.7104557622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 696364.0346385493,
            "unit": "ns/iter",
            "extra": "iterations: 1328\ncpu: 696341.2650602408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1224900.1319260527,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1224862.7968337743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 31569.15651272501,
            "unit": "ns/iter",
            "extra": "iterations: 26049\ncpu: 31567.921993166816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 159035.88565642072,
            "unit": "ns/iter",
            "extra": "iterations: 5431\ncpu: 159032.77481126893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 126023.68718851267,
            "unit": "ns/iter",
            "extra": "iterations: 6822\ncpu: 126017.16505423638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 126552.70462949402,
            "unit": "ns/iter",
            "extra": "iterations: 6761\ncpu: 126550.74693092753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121650.61405005294,
            "unit": "ns/iter",
            "extra": "iterations: 7032\ncpu: 121647.17007963604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 228487.82845849666,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 228484.69038208187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1632649.882867196,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1632626.223776224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1277784.639726038,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1277758.9041095874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1281760.620879067,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1281706.4560439594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1269477.5224489677,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1269452.6530612286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 730550.5527558741,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 730527.5590551144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1249445.2184986386,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 1249421.4477211873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5973831.141025844,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5973704.487179459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2721286.364431416,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2721151.0204081736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24353.284958225333,
            "unit": "ns/iter",
            "extra": "iterations: 33633\ncpu: 24353.20072547784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 125730.73515249055,
            "unit": "ns/iter",
            "extra": "iterations: 6853\ncpu: 125725.66759083624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 98643.92949160538,
            "unit": "ns/iter",
            "extra": "iterations: 8694\ncpu: 98643.3172302737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98937.89918381345,
            "unit": "ns/iter",
            "extra": "iterations: 8699\ncpu: 98932.96930681702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96870.94840599025,
            "unit": "ns/iter",
            "extra": "iterations: 8877\ncpu: 96869.03233074235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 197720.93712982934,
            "unit": "ns/iter",
            "extra": "iterations: 4390\ncpu: 197710.72892938534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1599206.7003424317,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1599199.4863013653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1253671.3761713826,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1253611.5127175413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1257602.7362046374,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 1257563.1224764392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1239895.2214673425,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1239847.5543478252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 689803.785714266,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 689785.0515463942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1218903.545811553,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 1218868.8481675445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2654.455694371322,
            "unit": "ns/iter",
            "extra": "iterations: 262698\ncpu: 2654.387928343566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16979.69263356669,
            "unit": "ns/iter",
            "extra": "iterations: 41309\ncpu: 16978.76249727662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13608.456168517323,
            "unit": "ns/iter",
            "extra": "iterations: 51698\ncpu: 13607.781732368716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14335.28772122946,
            "unit": "ns/iter",
            "extra": "iterations: 49044\ncpu: 14334.81159774888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10182.432426933585,
            "unit": "ns/iter",
            "extra": "iterations: 68807\ncpu: 10182.065778191165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66422.01439802663,
            "unit": "ns/iter",
            "extra": "iterations: 10557\ncpu: 66420.71611253181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 104894.20020964439,
            "unit": "ns/iter",
            "extra": "iterations: 6678\ncpu: 104890.53608864856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27109.696516259155,
            "unit": "ns/iter",
            "extra": "iterations: 25863\ncpu: 27109.06700692092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27358.703370961834,
            "unit": "ns/iter",
            "extra": "iterations: 25601\ncpu: 27358.052419827232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27091.80094201192,
            "unit": "ns/iter",
            "extra": "iterations: 25902\ncpu: 27090.892595166395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 51798.11466728216,
            "unit": "ns/iter",
            "extra": "iterations: 13029\ncpu: 51795.62514390974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52554.671694246164,
            "unit": "ns/iter",
            "extra": "iterations: 13658\ncpu: 52553.02386879428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20957.516995761885,
            "unit": "ns/iter",
            "extra": "iterations: 33273\ncpu: 20956.77876957301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101986.1745913793,
            "unit": "ns/iter",
            "extra": "iterations: 6730\ncpu: 101984.30906389287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 82036.0578251196,
            "unit": "ns/iter",
            "extra": "iterations: 8543\ncpu: 82033.91080416794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82599.77304881258,
            "unit": "ns/iter",
            "extra": "iterations: 8482\ncpu: 82596.63994340877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 81775.30871543703,
            "unit": "ns/iter",
            "extra": "iterations: 8571\ncpu: 81771.95193092905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 127486.3457639387,
            "unit": "ns/iter",
            "extra": "iterations: 5524\ncpu: 127483.14627081674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 475021.30298914405,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 475003.32880434644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 391543.5982092696,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 391528.42753217823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 392570.35870174045,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 392556.3514269744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 389339.2025527197,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 389333.12985572056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 250078.6174688137,
            "unit": "ns/iter",
            "extra": "iterations: 2805\ncpu: 250079.75044563066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 386765.13676636084,
            "unit": "ns/iter",
            "extra": "iterations: 1806\ncpu: 386762.73532668763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21154.865899229935,
            "unit": "ns/iter",
            "extra": "iterations: 33184\ncpu: 21154.96624879466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105283.31548066836,
            "unit": "ns/iter",
            "extra": "iterations: 6647\ncpu: 105279.41928689613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86768.42524752828,
            "unit": "ns/iter",
            "extra": "iterations: 8080\ncpu: 86765.07425742636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85937.59612316979,
            "unit": "ns/iter",
            "extra": "iterations: 8151\ncpu: 85934.27800269905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84902.93925064155,
            "unit": "ns/iter",
            "extra": "iterations: 8247\ncpu: 84897.67188068382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128606.26603151279,
            "unit": "ns/iter",
            "extra": "iterations: 5458\ncpu: 128606.9989006964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 476791.67869299575,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 476766.43975493417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 395454.2399774429,
            "unit": "ns/iter",
            "extra": "iterations: 1771\ncpu: 395430.773574259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 395946.78599659755,
            "unit": "ns/iter",
            "extra": "iterations: 1771\ncpu: 395932.0722755503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 391698.7559888415,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 391692.3676880255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 252698.0000000054,
            "unit": "ns/iter",
            "extra": "iterations: 2773\ncpu: 252692.67940858097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 390884.20044917305,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 390868.1639528343 ns\nthreads: 1"
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
        "date": 1702418366296,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6694.024110675824,
            "unit": "ns/iter",
            "extra": "iterations: 105389\ncpu: 6693.63785594322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56957.66859371766,
            "unit": "ns/iter",
            "extra": "iterations: 14357\ncpu: 56953.68113115554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 90001.54151776824,
            "unit": "ns/iter",
            "extra": "iterations: 9514\ncpu: 89998.2446920328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 130739.2381529152,
            "unit": "ns/iter",
            "extra": "iterations: 6605\ncpu: 130730.88569265718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 172380.10579796397,
            "unit": "ns/iter",
            "extra": "iterations: 5019\ncpu: 172377.08706913717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 214215.92855377315,
            "unit": "ns/iter",
            "extra": "iterations: 4045\ncpu: 214207.44128553788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 255639.36089123285,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 255634.76986221044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 296530.09326071263,
            "unit": "ns/iter",
            "extra": "iterations: 2938\ncpu: 296520.42205582006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 335833.69735819584,
            "unit": "ns/iter",
            "extra": "iterations: 2574\ncpu: 335827.15617715655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5567.691458431306,
            "unit": "ns/iter",
            "extra": "iterations: 125539\ncpu: 5567.604489441526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4614.27427924061,
            "unit": "ns/iter",
            "extra": "iterations: 153588\ncpu: 4614.18014428211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4636.4973495665445,
            "unit": "ns/iter",
            "extra": "iterations: 151296\ncpu: 4636.268638959385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4521.484164769122,
            "unit": "ns/iter",
            "extra": "iterations: 154592\ncpu: 4521.361389981373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7252.680223590892,
            "unit": "ns/iter",
            "extra": "iterations: 96605\ncpu: 7252.575953625584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25314.696063777257,
            "unit": "ns/iter",
            "extra": "iterations: 32112\ncpu: 25313.867090184336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 125714.46910688003,
            "unit": "ns/iter",
            "extra": "iterations: 6830\ncpu: 125709.99999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97512.50102622055,
            "unit": "ns/iter",
            "extra": "iterations: 8770\ncpu: 97511.68757126566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 96798.67017067812,
            "unit": "ns/iter",
            "extra": "iterations: 8847\ncpu: 96799.29919746831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94925.47770135009,
            "unit": "ns/iter",
            "extra": "iterations: 9014\ncpu: 94922.67583758569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 210183.49080189018,
            "unit": "ns/iter",
            "extra": "iterations: 4240\ncpu: 210175.28301886754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1598403.0415944387,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1598324.2634315481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1245701.9758713234,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 1245621.1796246662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1266856.409769382,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1266793.0800542776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1231344.248677282,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 1231271.8253968249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 689582.0052199843,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 689538.4787472044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1223354.6508563976,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 1223314.3610013195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 31825.60790051172,
            "unit": "ns/iter",
            "extra": "iterations: 25973\ncpu: 31824.15585415626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 155232.59985592854,
            "unit": "ns/iter",
            "extra": "iterations: 5553\ncpu: 155227.67873221645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 122417.41307451307,
            "unit": "ns/iter",
            "extra": "iterations: 7006\ncpu: 122409.73451327432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 120783.27402833838,
            "unit": "ns/iter",
            "extra": "iterations: 7127\ncpu: 120776.79247930407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 118576.8081339068,
            "unit": "ns/iter",
            "extra": "iterations: 7229\ncpu: 118572.02932632448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 220408.02644963184,
            "unit": "ns/iter",
            "extra": "iterations: 3932\ncpu: 220390.99694811724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1656166.2562723972,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1656073.6559139844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1278071.2011018957,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1278011.845730036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1305323.037552177,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1305208.3449235137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1262243.6216215985,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1262158.918918916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 721019.2542635725,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 720996.5891472909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1238798.669773645,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1238752.4633821521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5852980.622641321,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 5852730.188679228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2661100.0568182287,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2660988.0681818244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24313.79020647657,
            "unit": "ns/iter",
            "extra": "iterations: 33757\ncpu: 24312.163403145947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 123069.02631579388,
            "unit": "ns/iter",
            "extra": "iterations: 6992\ncpu: 123066.39016018275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 95129.2232192309,
            "unit": "ns/iter",
            "extra": "iterations: 9027\ncpu: 95127.80547247115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94774.17774851559,
            "unit": "ns/iter",
            "extra": "iterations: 9114\ncpu: 94771.48343208252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92043.09650154914,
            "unit": "ns/iter",
            "extra": "iterations: 9347\ncpu: 92041.8102064831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 191494.46815076223,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 191488.49459995682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1608087.8514680432,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1608040.5872193426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1252423.5417789328,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1252371.2938005398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1270144.2703804134,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1270100.4076086893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1240708.7829560847,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1240660.1864181166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 691623.7937685462,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 691591.6913946541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1229039.6833773565,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1228957.2559366806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2610.7079699774154,
            "unit": "ns/iter",
            "extra": "iterations: 268332\ncpu: 2610.6055185367254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16936.35943896669,
            "unit": "ns/iter",
            "extra": "iterations: 41281\ncpu: 16936.144957728673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13030.35881554192,
            "unit": "ns/iter",
            "extra": "iterations: 53763\ncpu: 13030.284768335148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14346.267127452575,
            "unit": "ns/iter",
            "extra": "iterations: 49336\ncpu: 14335.418355764536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10176.90487188365,
            "unit": "ns/iter",
            "extra": "iterations: 68844\ncpu: 10176.010981349136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64304.80692751823,
            "unit": "ns/iter",
            "extra": "iterations: 10913\ncpu: 64301.04462567567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 104472.57893950815,
            "unit": "ns/iter",
            "extra": "iterations: 6695\ncpu: 104467.66243465345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27243.288833629435,
            "unit": "ns/iter",
            "extra": "iterations: 25738\ncpu: 27241.55723055421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27156.526613246555,
            "unit": "ns/iter",
            "extra": "iterations: 25833\ncpu: 27154.573607401457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 26737.50348451998,
            "unit": "ns/iter",
            "extra": "iterations: 26259\ncpu: 26735.823907993676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54195.1627852824,
            "unit": "ns/iter",
            "extra": "iterations: 12882\ncpu: 54194.42633131454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51540.844351403306,
            "unit": "ns/iter",
            "extra": "iterations: 13614\ncpu: 51537.5128544151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20907.24859824325,
            "unit": "ns/iter",
            "extra": "iterations: 33351\ncpu: 20906.125753350603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 100897.47876169991,
            "unit": "ns/iter",
            "extra": "iterations: 6945\ncpu: 100891.82145428397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 82393.52155020612,
            "unit": "ns/iter",
            "extra": "iterations: 8515\ncpu: 82388.33822665781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83970.66162343853,
            "unit": "ns/iter",
            "extra": "iterations: 8328\ncpu: 83971.50576368901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82661.74055206704,
            "unit": "ns/iter",
            "extra": "iterations: 8441\ncpu: 82661.54484065909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 124467.60216966284,
            "unit": "ns/iter",
            "extra": "iterations: 5623\ncpu: 124456.9269073442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 476024.2736555637,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 476015.99727706244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 389356.62124585593,
            "unit": "ns/iter",
            "extra": "iterations: 1798\ncpu: 389360.62291435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 389872.91657393996,
            "unit": "ns/iter",
            "extra": "iterations: 1798\ncpu: 389850.6674082326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 383267.9413698602,
            "unit": "ns/iter",
            "extra": "iterations: 1825\ncpu: 383239.89041096147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 247527.63578500293,
            "unit": "ns/iter",
            "extra": "iterations: 2828\ncpu: 247509.47666195026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 385630.7395143596,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 385601.7660044206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21304.628318853796,
            "unit": "ns/iter",
            "extra": "iterations: 32805\ncpu: 21303.197683280276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105362.77581788562,
            "unit": "ns/iter",
            "extra": "iterations: 6633\ncpu: 105351.56037991932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86656.39589515942,
            "unit": "ns/iter",
            "extra": "iterations: 8088\ncpu: 86657.27002967385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85440.07570593905,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 85433.26436222064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84159.89230396689,
            "unit": "ns/iter",
            "extra": "iterations: 8264\ncpu: 84155.7236205222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126556.20777575836,
            "unit": "ns/iter",
            "extra": "iterations: 5530\ncpu: 126543.81555153654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 479480.24199046084,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 479445.12610770995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 392429.5967379112,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 392404.5556805436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 393731.068015768,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 393730.46655424294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 385253.6312603446,
            "unit": "ns/iter",
            "extra": "iterations: 1817\ncpu: 385242.377545406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 251926.35143887383,
            "unit": "ns/iter",
            "extra": "iterations: 2780\ncpu: 251928.48920863424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 389293.4763231188,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 389272.9805013941 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421418327,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6734.955733297394,
            "unit": "ns/iter",
            "extra": "iterations: 103396\ncpu: 6734.783744051995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56833.7920461672,
            "unit": "ns/iter",
            "extra": "iterations: 14383\ncpu: 56832.26030730725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 89557.25031224094,
            "unit": "ns/iter",
            "extra": "iterations: 9608\ncpu: 89555.79725228975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 130849.57255377238,
            "unit": "ns/iter",
            "extra": "iterations: 6602\ncpu: 130844.31990305966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 173815.323022008,
            "unit": "ns/iter",
            "extra": "iterations: 5043\ncpu: 173814.9315883404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 212735.93038129967,
            "unit": "ns/iter",
            "extra": "iterations: 4065\ncpu: 212729.76629766295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 252783.15680559608,
            "unit": "ns/iter",
            "extra": "iterations: 3431\ncpu: 252779.2771786651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 293298.9058386794,
            "unit": "ns/iter",
            "extra": "iterations: 2963\ncpu: 293292.1700978737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 333837.1057285462,
            "unit": "ns/iter",
            "extra": "iterations: 2601\ncpu: 333830.3729334867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5660.15731590932,
            "unit": "ns/iter",
            "extra": "iterations: 123662\ncpu: 5660.145396322235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4595.753571239374,
            "unit": "ns/iter",
            "extra": "iterations: 151208\ncpu: 4595.708560393633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4599.2513111080425,
            "unit": "ns/iter",
            "extra": "iterations: 151780\ncpu: 4599.175121886935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4598.9896174469,
            "unit": "ns/iter",
            "extra": "iterations: 152371\ncpu: 4598.849518609191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7277.349289531383,
            "unit": "ns/iter",
            "extra": "iterations: 96556\ncpu: 7277.187331703886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26572.82502278072,
            "unit": "ns/iter",
            "extra": "iterations: 31827\ncpu: 26571.307380525952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 124165.71350021263,
            "unit": "ns/iter",
            "extra": "iterations: 6911\ncpu: 124162.10389234577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100712.94380572597,
            "unit": "ns/iter",
            "extra": "iterations: 8524\ncpu: 100709.46738620372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99896.27378571783,
            "unit": "ns/iter",
            "extra": "iterations: 8503\ncpu: 99894.83711631183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97676.16797900505,
            "unit": "ns/iter",
            "extra": "iterations: 8763\ncpu: 97673.5022252653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 219975.24981430973,
            "unit": "ns/iter",
            "extra": "iterations: 4039\ncpu: 219971.40381282527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1590130.1752577538,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1590093.6426116803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1251837.0040816327,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1251802.585034013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1256160.6923077183,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 1256129.0148448031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1247466.5935397001,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 1247443.3378196491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 680994.1164333003,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 680970.0073691963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1214453.950196605,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 1214440.3669724788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32007.216069700586,
            "unit": "ns/iter",
            "extra": "iterations: 25825\ncpu: 32005.448209099668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 154199.8254110064,
            "unit": "ns/iter",
            "extra": "iterations: 5596\ncpu: 154197.9985704072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123845.60773085512,
            "unit": "ns/iter",
            "extra": "iterations: 6985\ncpu: 123842.57695060867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122416.38568588423,
            "unit": "ns/iter",
            "extra": "iterations: 7042\ncpu: 122414.62652655526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 120666.40577678065,
            "unit": "ns/iter",
            "extra": "iterations: 7132\ncpu: 120662.36679753226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 229256.01161868632,
            "unit": "ns/iter",
            "extra": "iterations: 3787\ncpu: 229252.4425666749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1623079.2482517231,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1623040.5594405627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1274591.67945204,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1274567.808219174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1296460.9064245385,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1296406.8435754236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1265867.108991891,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 1265843.4604904691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 709182.3180778128,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 709163.0816170841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1249064.393048071,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 1249040.1069518663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5776946.70807456,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 5776787.577639762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2727243.331378304,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2727182.4046920883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24576.53324170052,
            "unit": "ns/iter",
            "extra": "iterations: 33467\ncpu: 24576.140675889637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 121762.26084490941,
            "unit": "ns/iter",
            "extra": "iterations: 7054\ncpu: 121758.05216898218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 96610.0379661009,
            "unit": "ns/iter",
            "extra": "iterations: 8850\ncpu: 96608.80225988752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96650.24639963932,
            "unit": "ns/iter",
            "extra": "iterations: 8888\ncpu: 96646.72592259213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 95098.27384135278,
            "unit": "ns/iter",
            "extra": "iterations: 8976\ncpu: 95097.18137254851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 200710.8540078614,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 200705.56710556627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1583156.7719594184,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1583150.5067567553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1244684.672897183,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 1244649.9332443317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1252130.440860199,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 1252111.155913981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1242253.199731887,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 1242211.2600536235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 678217.6734843184,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 678214.0978816655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1224552.3090185772,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 1224519.2307692317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2655.6246546935236,
            "unit": "ns/iter",
            "extra": "iterations: 264258\ncpu: 2655.5918836894066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16972.866870066337,
            "unit": "ns/iter",
            "extra": "iterations: 41298\ncpu: 16972.136665213944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13387.685623983103,
            "unit": "ns/iter",
            "extra": "iterations: 52205\ncpu: 13387.508859304646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13712.546971630318,
            "unit": "ns/iter",
            "extra": "iterations: 50935\ncpu: 13712.62000588985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10239.656828770827,
            "unit": "ns/iter",
            "extra": "iterations: 68680\ncpu: 10239.445253348918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66312.39267413288,
            "unit": "ns/iter",
            "extra": "iterations: 10538\ncpu: 66311.46327576436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 109551.55869938592,
            "unit": "ns/iter",
            "extra": "iterations: 6397\ncpu: 109543.11395966912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27036.680776217432,
            "unit": "ns/iter",
            "extra": "iterations: 25869\ncpu: 27036.267347017823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27221.91769051269,
            "unit": "ns/iter",
            "extra": "iterations: 25720\ncpu: 27221.119751166298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 26901.704173391827,
            "unit": "ns/iter",
            "extra": "iterations: 26022\ncpu: 26901.59096149412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 53698.92427154709,
            "unit": "ns/iter",
            "extra": "iterations: 13007\ncpu: 53698.21634504531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51169.38824909945,
            "unit": "ns/iter",
            "extra": "iterations: 13633\ncpu: 51168.83297880093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20625.84325806334,
            "unit": "ns/iter",
            "extra": "iterations: 33922\ncpu: 20625.997877483438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101568.3563667976,
            "unit": "ns/iter",
            "extra": "iterations: 6903\ncpu: 101564.98623786721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83586.51151688492,
            "unit": "ns/iter",
            "extra": "iterations: 8379\ncpu: 83585.52333214036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83600.21686747261,
            "unit": "ns/iter",
            "extra": "iterations: 8383\ncpu: 83596.71955147223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82845.85385800838,
            "unit": "ns/iter",
            "extra": "iterations: 8437\ncpu: 82845.03970605654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 126439.42426430495,
            "unit": "ns/iter",
            "extra": "iterations: 5539\ncpu: 126440.15165192443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 476524.8094910606,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 476519.11966987356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 388619.54087345983,
            "unit": "ns/iter",
            "extra": "iterations: 1786\ncpu: 388610.5263157911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 392154.94893378456,
            "unit": "ns/iter",
            "extra": "iterations: 1782\ncpu: 392142.3681257015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 387990.3327805201,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 387984.7429519021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 244292.87347507125,
            "unit": "ns/iter",
            "extra": "iterations: 2869\ncpu: 244284.1756709643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 385183.71760796366,
            "unit": "ns/iter",
            "extra": "iterations: 1806\ncpu: 385162.12624584895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21034.513900159636,
            "unit": "ns/iter",
            "extra": "iterations: 33273\ncpu: 21033.904366903873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 103375.38243959846,
            "unit": "ns/iter",
            "extra": "iterations: 6788\ncpu: 103373.11431938707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85489.47704175413,
            "unit": "ns/iter",
            "extra": "iterations: 8167\ncpu: 85485.4781437484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87147.32561880998,
            "unit": "ns/iter",
            "extra": "iterations: 8080\ncpu: 87147.94554455504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84800.57690911517,
            "unit": "ns/iter",
            "extra": "iterations: 8263\ncpu: 84798.86239864469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127745.17876074417,
            "unit": "ns/iter",
            "extra": "iterations: 5471\ncpu: 127742.47852312177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 476538.07869740785,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 476537.3812754462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 390483.5281337203,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 390474.65181058453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 393128.6670409749,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 393111.4542391902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 387748.6277008333,
            "unit": "ns/iter",
            "extra": "iterations: 1805\ncpu: 387735.457063709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 249762.78099321044,
            "unit": "ns/iter",
            "extra": "iterations: 2799\ncpu: 249755.73419078183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 390007.0267707831,
            "unit": "ns/iter",
            "extra": "iterations: 1793\ncpu: 389998.0479643018 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421905593,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6962.859335674619,
            "unit": "ns/iter",
            "extra": "iterations: 100523\ncpu: 6962.600598867921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51491.47370000264,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51489.88000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94360.71133113059,
            "unit": "ns/iter",
            "extra": "iterations: 9090\ncpu: 94355.43454345436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137539.41376569268,
            "unit": "ns/iter",
            "extra": "iterations: 6291\ncpu: 137529.2799237005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179886.10222313774,
            "unit": "ns/iter",
            "extra": "iterations: 4813\ncpu: 179880.40723041756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 222639.8674203523,
            "unit": "ns/iter",
            "extra": "iterations: 3892\ncpu: 222627.02980472762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 265633.7614088872,
            "unit": "ns/iter",
            "extra": "iterations: 3265\ncpu: 265613.38437978557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 309308.374289774,
            "unit": "ns/iter",
            "extra": "iterations: 2816\ncpu: 309301.2428977273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 354755.4228432464,
            "unit": "ns/iter",
            "extra": "iterations: 2469\ncpu: 354744.714459295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5714.391877641275,
            "unit": "ns/iter",
            "extra": "iterations: 122329\ncpu: 5714.162627014039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4662.415351806724,
            "unit": "ns/iter",
            "extra": "iterations: 150523\ncpu: 4662.086192807746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4690.943622834011,
            "unit": "ns/iter",
            "extra": "iterations: 149706\ncpu: 4690.920871574952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4666.867717405055,
            "unit": "ns/iter",
            "extra": "iterations: 150307\ncpu: 4666.633623184549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7297.499838715257,
            "unit": "ns/iter",
            "extra": "iterations: 96103\ncpu: 7297.564071881211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25294.477811250847,
            "unit": "ns/iter",
            "extra": "iterations: 32201\ncpu: 25293.65237104436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129549.00860117562,
            "unit": "ns/iter",
            "extra": "iterations: 6627\ncpu: 129546.71797193322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103677.90752352048,
            "unit": "ns/iter",
            "extra": "iterations: 8294\ncpu: 103673.10103689405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103818.4680462568,
            "unit": "ns/iter",
            "extra": "iterations: 8215\ncpu: 103815.95861229447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100782.08364750381,
            "unit": "ns/iter",
            "extra": "iterations: 8488\ncpu: 100779.35909519315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 216175.68107845623,
            "unit": "ns/iter",
            "extra": "iterations: 4117\ncpu: 216172.26135535614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1625181.139084355,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1625106.3380281702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1291738.7777777535,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1291683.1944444447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1295231.4355742873,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1295186.134453783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1285559.7399723695,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1285537.206085754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 713256.4349499356,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 713228.4834488066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1249882.0067568847,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1249818.5135135157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 31963.949410433925,
            "unit": "ns/iter",
            "extra": "iterations: 25697\ncpu: 31961.956648636038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 160880.97268167292,
            "unit": "ns/iter",
            "extra": "iterations: 5381\ncpu: 160882.2337855418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 128404.14848393276,
            "unit": "ns/iter",
            "extra": "iterations: 6728\ncpu: 128397.42865636137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 124585.49623297181,
            "unit": "ns/iter",
            "extra": "iterations: 6902\ncpu: 124584.19298753957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123338.49776753155,
            "unit": "ns/iter",
            "extra": "iterations: 6943\ncpu: 123334.30793605043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 225713.4576933111,
            "unit": "ns/iter",
            "extra": "iterations: 3841\ncpu: 225712.9653736008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1811985.4336916879,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1811887.9928315347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1315218.7146891723,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1315193.9265536757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1321508.821276716,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1321460.851063826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1308669.4964738737,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1308623.4132581172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 738063.5075939524,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 738030.6954436442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1276728.421853389,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1276678.9764868626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6033737.761290027,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6033487.741935475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2774421.0562129742,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2774357.10059171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24271.794495848015,
            "unit": "ns/iter",
            "extra": "iterations: 33829\ncpu: 24271.23769546852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 127264.24386616285,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 127256.93680297404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 100541.20184557268,
            "unit": "ns/iter",
            "extra": "iterations: 8561\ncpu: 100542.02780049015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 100426.00000000183,
            "unit": "ns/iter",
            "extra": "iterations: 8588\ncpu: 100423.63763390775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99533.17032137701,
            "unit": "ns/iter",
            "extra": "iterations: 8619\ncpu: 99527.17252581446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 197815.83580049506,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 197793.69164199423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1635190.4003495863,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1635165.559440558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1285879.802758559,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1285840.551724136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1290906.4080222468,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1290916.320885199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1276794.5068681675,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1276738.186813184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 708819.4347496515,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 708816.9195751118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1249594.2032301736,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 1249523.1493943513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2724.240909391247,
            "unit": "ns/iter",
            "extra": "iterations: 257051\ncpu: 2724.1811936152835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17190.939596328393,
            "unit": "ns/iter",
            "extra": "iterations: 40726\ncpu: 17190.205274272073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13681.837253518106,
            "unit": "ns/iter",
            "extra": "iterations: 51018\ncpu: 13681.971069034476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14295.447156710046,
            "unit": "ns/iter",
            "extra": "iterations: 50839\ncpu: 14295.129723244041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10328.876963505601,
            "unit": "ns/iter",
            "extra": "iterations: 67736\ncpu: 10328.752805007702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67113.05484584332,
            "unit": "ns/iter",
            "extra": "iterations: 10411\ncpu: 67112.16021515708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112013.08683788034,
            "unit": "ns/iter",
            "extra": "iterations: 6230\ncpu: 112007.70465489599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27523.032680765944,
            "unit": "ns/iter",
            "extra": "iterations: 25489\ncpu: 27523.28455412134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27796.41661723628,
            "unit": "ns/iter",
            "extra": "iterations: 25287\ncpu: 27795.369162020186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27422.911407769403,
            "unit": "ns/iter",
            "extra": "iterations: 25544\ncpu: 27421.95427497664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55207.48042536138,
            "unit": "ns/iter",
            "extra": "iterations: 12695\ncpu: 55204.340291453074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52522.17113818305,
            "unit": "ns/iter",
            "extra": "iterations: 13381\ncpu: 52521.68746730411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20732.888747331777,
            "unit": "ns/iter",
            "extra": "iterations: 33752\ncpu: 20732.356601090352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 103608.5600118368,
            "unit": "ns/iter",
            "extra": "iterations: 6757\ncpu: 103605.90498741885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84244.32302323151,
            "unit": "ns/iter",
            "extra": "iterations: 8309\ncpu: 84242.85714285584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84806.47054554973,
            "unit": "ns/iter",
            "extra": "iterations: 8267\ncpu: 84803.07245675514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84566.21595165509,
            "unit": "ns/iter",
            "extra": "iterations: 8275\ncpu: 84567.08157099638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 125938.73253098656,
            "unit": "ns/iter",
            "extra": "iterations: 5567\ncpu: 125935.63858451556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 486443.76773300464,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 486435.3963838732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 404280.28538809635,
            "unit": "ns/iter",
            "extra": "iterations: 1752\ncpu: 404263.8127853888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 404303.2848064739,
            "unit": "ns/iter",
            "extra": "iterations: 1731\ncpu: 404299.191218946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 403339.3231742663,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 403313.4560092073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 253602.7582457146,
            "unit": "ns/iter",
            "extra": "iterations: 2759\ncpu: 253589.5614353044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 394389.1079705517,
            "unit": "ns/iter",
            "extra": "iterations: 1769\ncpu: 394363.1430186542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21429.29371530477,
            "unit": "ns/iter",
            "extra": "iterations: 32603\ncpu: 21428.21212771816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107904.40229528351,
            "unit": "ns/iter",
            "extra": "iterations: 6448\ncpu: 107894.38585607857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89128.22994651154,
            "unit": "ns/iter",
            "extra": "iterations: 7854\ncpu: 89121.40310669794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89215.43656050033,
            "unit": "ns/iter",
            "extra": "iterations: 7850\ncpu: 89210.30573248252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89578.78555911258,
            "unit": "ns/iter",
            "extra": "iterations: 7825\ncpu: 89574.26198082994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 132398.62057876604,
            "unit": "ns/iter",
            "extra": "iterations: 5287\ncpu: 132389.7862682045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 492241.784712513,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 492240.11220197275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 409567.288382952,
            "unit": "ns/iter",
            "extra": "iterations: 1713\ncpu: 409545.76765907666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 406422.1812899593,
            "unit": "ns/iter",
            "extra": "iterations: 1721\ncpu: 406420.1626961125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 405652.21436846856,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 405633.6616454264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 256693.7473491608,
            "unit": "ns/iter",
            "extra": "iterations: 2735\ncpu: 256689.79890310369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 401653.8529411247,
            "unit": "ns/iter",
            "extra": "iterations: 1734\ncpu: 401626.989619379 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422478299,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6788.25903854215,
            "unit": "ns/iter",
            "extra": "iterations: 103031\ncpu: 6787.5357901990665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58027.66751700582,
            "unit": "ns/iter",
            "extra": "iterations: 14112\ncpu: 58024.674036281176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91665.16682697587,
            "unit": "ns/iter",
            "extra": "iterations: 9357\ncpu: 91662.09255103128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135860.77590734334,
            "unit": "ns/iter",
            "extra": "iterations: 6475\ncpu: 135856.80308880314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 175346.42028397298,
            "unit": "ns/iter",
            "extra": "iterations: 4930\ncpu: 175340.12170385403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 217423.2515030153,
            "unit": "ns/iter",
            "extra": "iterations: 3992\ncpu: 217417.71042084147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 259224.1023880752,
            "unit": "ns/iter",
            "extra": "iterations: 3350\ncpu: 259218.05970149246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 300589.9941278007,
            "unit": "ns/iter",
            "extra": "iterations: 2895\ncpu: 300577.4438687393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 341857.2074950653,
            "unit": "ns/iter",
            "extra": "iterations: 2535\ncpu: 341839.76331360935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5665.6167266215925,
            "unit": "ns/iter",
            "extra": "iterations: 123982\ncpu: 5665.644206417058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4629.065213938825,
            "unit": "ns/iter",
            "extra": "iterations: 151118\ncpu: 4628.925740150074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4620.279768305573,
            "unit": "ns/iter",
            "extra": "iterations: 151579\ncpu: 4619.782423686661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4589.045700210452,
            "unit": "ns/iter",
            "extra": "iterations: 152647\ncpu: 4588.801614181746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7240.26944800754,
            "unit": "ns/iter",
            "extra": "iterations: 96668\ncpu: 7239.870484545033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25125.83244795805,
            "unit": "ns/iter",
            "extra": "iterations: 32378\ncpu: 25125.029340910543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 125483.59629413928,
            "unit": "ns/iter",
            "extra": "iterations: 6854\ncpu: 125476.46629705306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100302.38351001106,
            "unit": "ns/iter",
            "extra": "iterations: 8490\ncpu: 100297.18492343908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100624.4366329693,
            "unit": "ns/iter",
            "extra": "iterations: 8506\ncpu: 100617.94027745098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99052.86407428354,
            "unit": "ns/iter",
            "extra": "iterations: 8615\ncpu: 99052.15322112598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 210773.38406828392,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 210762.99193930792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1623536.7946903182,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1623466.0176991157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1284717.162274582,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1284642.7184465996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1283297.8813792672,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1283264.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1278128.023448297,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1278028.1379310335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 712655.9046886693,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 712627.9784780943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1274543.3720000014,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1274436.133333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32019.664296873972,
            "unit": "ns/iter",
            "extra": "iterations: 25600\ncpu: 32018.675781250033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 155511.92857143097,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 155501.35435992596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 124377.61810059234,
            "unit": "ns/iter",
            "extra": "iterations: 6939\ncpu: 124373.45438824038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 123235.09570815558,
            "unit": "ns/iter",
            "extra": "iterations: 6990\ncpu: 123227.0672389128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121596.76754135745,
            "unit": "ns/iter",
            "extra": "iterations: 7012\ncpu: 121593.22589845987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 220879.79451704357,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 220862.1829362021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1651609.0957446385,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1651592.730496456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1310727.3225351735,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1310666.6197183083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1328851.646219657,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1328836.6619115632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1302704.3701117628,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1302609.3575419039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 741548.1227929487,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 741532.9855537713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1263649.2557823479,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1263580.8163265244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6095775.869280884,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6095694.117647053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2756013.777448216,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2755850.741839754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24120.07304874803,
            "unit": "ns/iter",
            "extra": "iterations: 33991\ncpu: 24118.91383013169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 123275.73216842923,
            "unit": "ns/iter",
            "extra": "iterations: 6982\ncpu: 123270.19478659406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 98080.3756855576,
            "unit": "ns/iter",
            "extra": "iterations: 8752\ncpu: 98074.49725776959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98018.02870813239,
            "unit": "ns/iter",
            "extra": "iterations: 8778\ncpu: 98013.28320802003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96532.2316880813,
            "unit": "ns/iter",
            "extra": "iterations: 8874\ncpu: 96531.33874239307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 192600.94949720686,
            "unit": "ns/iter",
            "extra": "iterations: 4475\ncpu: 192590.61452513974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1632312.2984015013,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1632236.2344582556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1291527.6468965171,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1291507.1724137894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1300092.018030495,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1300027.1844660223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1279442.764705881,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1279382.0793433732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 711487.4245426719,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 711433.0792682882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1244576.4720744537,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 1244531.1170212748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2635.8863626081625,
            "unit": "ns/iter",
            "extra": "iterations: 265256\ncpu: 2635.753385408824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17029.940913399034,
            "unit": "ns/iter",
            "extra": "iterations: 41143\ncpu: 17029.008579831407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13634.590940154867,
            "unit": "ns/iter",
            "extra": "iterations: 51215\ncpu: 13634.14624621689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13708.89672063371,
            "unit": "ns/iter",
            "extra": "iterations: 50833\ncpu: 13708.181692994638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10225.349664331547,
            "unit": "ns/iter",
            "extra": "iterations: 68520\ncpu: 10224.86865148855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64622.618035666404,
            "unit": "ns/iter",
            "extra": "iterations: 10823\ncpu: 64617.33345652773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 111641.18317697056,
            "unit": "ns/iter",
            "extra": "iterations: 6289\ncpu: 111634.53649228837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27307.24822251714,
            "unit": "ns/iter",
            "extra": "iterations: 25598\ncpu: 27305.5473083835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27424.751644735657,
            "unit": "ns/iter",
            "extra": "iterations: 25536\ncpu: 27423.887844611498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27337.731370638652,
            "unit": "ns/iter",
            "extra": "iterations: 25645\ncpu: 27336.28387599928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55029.8357294359,
            "unit": "ns/iter",
            "extra": "iterations: 12729\ncpu: 55028.15617880436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52819.95902366877,
            "unit": "ns/iter",
            "extra": "iterations: 13520\ncpu: 52818.71301775152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20602.218038476334,
            "unit": "ns/iter",
            "extra": "iterations: 33994\ncpu: 20601.80031770305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101185.54410706618,
            "unit": "ns/iter",
            "extra": "iterations: 6949\ncpu: 101183.9545258298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 82558.55063739525,
            "unit": "ns/iter",
            "extra": "iterations: 8472\ncpu: 82551.07412653421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83135.27179973424,
            "unit": "ns/iter",
            "extra": "iterations: 8429\ncpu: 83134.2863922179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82805.53160377091,
            "unit": "ns/iter",
            "extra": "iterations: 8480\ncpu: 82799.54009433892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 127276.937977452,
            "unit": "ns/iter",
            "extra": "iterations: 5498\ncpu: 127272.80829392442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 481255.11164714745,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 481247.62232942553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 397691.77010191616,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 397688.1653454077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 397220.1339794726,
            "unit": "ns/iter",
            "extra": "iterations: 1754\ncpu: 397207.354618011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 395081.87415349745,
            "unit": "ns/iter",
            "extra": "iterations: 1772\ncpu: 395078.78103837196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 254185.3680580799,
            "unit": "ns/iter",
            "extra": "iterations: 2755\ncpu: 254173.6479128881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 390246.24245812115,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 390239.55307262077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21266.18851488685,
            "unit": "ns/iter",
            "extra": "iterations: 32947\ncpu: 21266.57965823906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105089.16966157657,
            "unit": "ns/iter",
            "extra": "iterations: 6678\ncpu: 105088.18508535395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87183.19942807326,
            "unit": "ns/iter",
            "extra": "iterations: 8043\ncpu: 87180.55451945864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87509.07793180672,
            "unit": "ns/iter",
            "extra": "iterations: 8007\ncpu: 87507.95553890392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86474.8773946374,
            "unit": "ns/iter",
            "extra": "iterations: 8091\ncpu: 86473.99579780005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126452.654242818,
            "unit": "ns/iter",
            "extra": "iterations: 5527\ncpu: 126443.07942826064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 483154.17415341944,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 483157.7055977896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 397990.15607264685,
            "unit": "ns/iter",
            "extra": "iterations: 1762\ncpu: 397974.68785470916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 398353.5458689566,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 398329.51566951186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 399274.46034480113,
            "unit": "ns/iter",
            "extra": "iterations: 1740\ncpu: 399258.85057471565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 257832.56224899812,
            "unit": "ns/iter",
            "extra": "iterations: 2739\ncpu: 257318.21832785674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 398688.6196388463,
            "unit": "ns/iter",
            "extra": "iterations: 1772\ncpu: 398681.99774266116 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453346479,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6989.554503822821,
            "unit": "ns/iter",
            "extra": "iterations: 101103\ncpu: 6989.228806266877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50127.19819999916,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50125.14 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91873.23702993429,
            "unit": "ns/iter",
            "extra": "iterations: 9387\ncpu: 91872.19558964524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 134152.3430623556,
            "unit": "ns/iter",
            "extra": "iterations: 6544\ncpu: 134151.054400978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 174549.07695334678,
            "unit": "ns/iter",
            "extra": "iterations: 5081\ncpu: 174543.16079511915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 217788.30897178198,
            "unit": "ns/iter",
            "extra": "iterations: 3968\ncpu: 217779.0826612904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 259422.21248499415,
            "unit": "ns/iter",
            "extra": "iterations: 3332\ncpu: 259406.3925570228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 300629.20945946744,
            "unit": "ns/iter",
            "extra": "iterations: 2812\ncpu: 300619.70128022775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 344063.0514647678,
            "unit": "ns/iter",
            "extra": "iterations: 2526\ncpu: 344050.316706255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5670.697891648733,
            "unit": "ns/iter",
            "extra": "iterations: 124078\ncpu: 5670.478247553955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4875.42289849449,
            "unit": "ns/iter",
            "extra": "iterations: 149381\ncpu: 4875.292038478784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4677.329815863237,
            "unit": "ns/iter",
            "extra": "iterations: 150866\ncpu: 4677.309665531006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4593.976322928898,
            "unit": "ns/iter",
            "extra": "iterations: 152975\ncpu: 4593.96633436836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7325.465111887802,
            "unit": "ns/iter",
            "extra": "iterations: 95319\ncpu: 7325.338075305024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26262.27540595039,
            "unit": "ns/iter",
            "extra": "iterations: 31223\ncpu: 26261.28815296416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130212.73638042023,
            "unit": "ns/iter",
            "extra": "iterations: 6498\ncpu: 130210.34164358255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104162.49025104016,
            "unit": "ns/iter",
            "extra": "iterations: 8206\ncpu: 104157.65293687525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103901.1604323488,
            "unit": "ns/iter",
            "extra": "iterations: 8234\ncpu: 103899.29560359492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 101601.01476015076,
            "unit": "ns/iter",
            "extra": "iterations: 8401\ncpu: 101597.89310796323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 211520.5335387609,
            "unit": "ns/iter",
            "extra": "iterations: 4219\ncpu: 211516.5916093859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1622857.2457467353,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1622830.6238185286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1263773.1821917922,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1263730.1369863038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1272121.8721399815,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 1272092.8667563922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1268695.4086603804,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1268658.7280108237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 714520.5768339921,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 714510.3474903477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1246436.1115590655,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 1246389.6505376364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33636.30395052882,
            "unit": "ns/iter",
            "extra": "iterations: 25389\ncpu: 33635.27118043255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 159632.37412198645,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 159631.6635859516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 127922.37843078726,
            "unit": "ns/iter",
            "extra": "iterations: 6704\ncpu: 127919.57040572789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 126473.23955719596,
            "unit": "ns/iter",
            "extra": "iterations: 6775\ncpu: 126472.63468634702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123535.05103227525,
            "unit": "ns/iter",
            "extra": "iterations: 6878\ncpu: 123532.77115440523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 220480.400971123,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 220477.61308458995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1664861.4723707486,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1664813.0124777188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1298083.252100812,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1298066.9467787172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1307138.5203938188,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1307100.9845288321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1290656.7864077743,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1290633.8418862652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 733916.9106012755,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 733906.8037974653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1268258.5360544429,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1268260.680272114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6037665.238709671,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6037655.483870933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2726345.953352743,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2726331.486880465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24855.95518404852,
            "unit": "ns/iter",
            "extra": "iterations: 32600\ncpu: 24855.852760736205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 128056.50178041225,
            "unit": "ns/iter",
            "extra": "iterations: 6740\ncpu: 128055.26706231461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 100988.45021186968,
            "unit": "ns/iter",
            "extra": "iterations: 8496\ncpu: 100987.87664783349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 100339.14993557711,
            "unit": "ns/iter",
            "extra": "iterations: 8537\ncpu: 100338.84268478391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 98087.79013891902,
            "unit": "ns/iter",
            "extra": "iterations: 8782\ncpu: 98086.14210885913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 192955.25317584077,
            "unit": "ns/iter",
            "extra": "iterations: 4487\ncpu: 192953.84443949113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1619427.6660899457,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1619415.9169550277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1275600.5088919203,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1275601.7783857721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1279302.8228022219,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1279298.489010991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1269150.9823129105,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1269131.2925170064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 712165.5855513285,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 712162.9657794674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1249799.0067114774,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 1249788.4563758448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2699.165849531313,
            "unit": "ns/iter",
            "extra": "iterations: 258831\ncpu: 2699.1446155985823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17420.365209381758,
            "unit": "ns/iter",
            "extra": "iterations: 40166\ncpu: 17420.08166110637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14143.349216875995,
            "unit": "ns/iter",
            "extra": "iterations: 51269\ncpu: 14143.427802375647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14341.7905212876,
            "unit": "ns/iter",
            "extra": "iterations: 48783\ncpu: 14341.74405018146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10367.05374246165,
            "unit": "ns/iter",
            "extra": "iterations: 67656\ncpu: 10367.025836585073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65447.09899971934,
            "unit": "ns/iter",
            "extra": "iterations: 10697\ncpu: 65446.71403197207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 111487.25914149538,
            "unit": "ns/iter",
            "extra": "iterations: 6290\ncpu: 111484.76947535825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27497.513046212272,
            "unit": "ns/iter",
            "extra": "iterations: 25448\ncpu: 27497.198208110683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27504.518403459853,
            "unit": "ns/iter",
            "extra": "iterations: 25430\ncpu: 27504.231222965063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27272.148650228333,
            "unit": "ns/iter",
            "extra": "iterations: 25671\ncpu: 27271.758014880565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55169.31353993889,
            "unit": "ns/iter",
            "extra": "iterations: 12681\ncpu: 55168.464632126925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52366.23163462736,
            "unit": "ns/iter",
            "extra": "iterations: 13422\ncpu: 52365.48949485921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21120.659142416203,
            "unit": "ns/iter",
            "extra": "iterations: 33093\ncpu: 21120.463542138656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101954.10570886603,
            "unit": "ns/iter",
            "extra": "iterations: 6849\ncpu: 101952.79602861922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83458.70934545682,
            "unit": "ns/iter",
            "extra": "iterations: 8357\ncpu: 83456.63515615543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85000.60269646757,
            "unit": "ns/iter",
            "extra": "iterations: 8233\ncpu: 84999.2955180373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83140.80004758255,
            "unit": "ns/iter",
            "extra": "iterations: 8407\ncpu: 83140.3830141548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 124595.22467117029,
            "unit": "ns/iter",
            "extra": "iterations: 5626\ncpu: 124593.45894063263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 481430.36101578455,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 481428.07137954154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 392912.60369956825,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 392906.95067264675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 396123.5748164667,
            "unit": "ns/iter",
            "extra": "iterations: 1771\ncpu: 396113.0999435396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 392020.2471973265,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 392015.3587443956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 256119.8049138343,
            "unit": "ns/iter",
            "extra": "iterations: 2727\ncpu: 256114.81481481798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 390937.22892242117,
            "unit": "ns/iter",
            "extra": "iterations: 1791\ncpu: 390935.06420993974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21781.20443834203,
            "unit": "ns/iter",
            "extra": "iterations: 32039\ncpu: 21780.65794812556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106723.49148677531,
            "unit": "ns/iter",
            "extra": "iterations: 6578\ncpu: 106721.46549103118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87697.60898398838,
            "unit": "ns/iter",
            "extra": "iterations: 7992\ncpu: 87696.33383383276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87576.34184626596,
            "unit": "ns/iter",
            "extra": "iterations: 8027\ncpu: 87574.83493210406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87159.37797137075,
            "unit": "ns/iter",
            "extra": "iterations: 8035\ncpu: 87159.02924704355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 129295.3033149094,
            "unit": "ns/iter",
            "extra": "iterations: 5430\ncpu: 129292.35727440318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 487149.21690921584,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 487148.16354816395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 398939.44203313685,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 398933.1810394061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 399280.79202279495,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 399278.8034187997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 396880.6634506286,
            "unit": "ns/iter",
            "extra": "iterations: 1762\ncpu: 396875.9364358666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 257504.19808540933,
            "unit": "ns/iter",
            "extra": "iterations: 2716\ncpu: 257495.2871870377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 394450.11764704384,
            "unit": "ns/iter",
            "extra": "iterations: 1768\ncpu: 394444.57013574685 ns\nthreads: 1"
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
        "date": 1702479559120,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6974.622248903553,
            "unit": "ns/iter",
            "extra": "iterations: 100778\ncpu: 6974.509317509774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51106.64050000082,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51104.51000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92766.4809908487,
            "unit": "ns/iter",
            "extra": "iterations: 9285\ncpu: 92761.52934841142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136859.08184664213,
            "unit": "ns/iter",
            "extra": "iterations: 6390\ncpu: 136843.64632237866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 177850.57968332924,
            "unit": "ns/iter",
            "extra": "iterations: 4863\ncpu: 177843.2037836726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 220768.18791265073,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 220756.34840020302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 263277.350468703,
            "unit": "ns/iter",
            "extra": "iterations: 3307\ncpu: 263259.328696704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 305298.05335204495,
            "unit": "ns/iter",
            "extra": "iterations: 2849\ncpu: 305276.5882765883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 346666.56504389754,
            "unit": "ns/iter",
            "extra": "iterations: 2506\ncpu: 346661.2529928169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5774.910935985721,
            "unit": "ns/iter",
            "extra": "iterations: 118645\ncpu: 5774.427072358725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4810.335582181738,
            "unit": "ns/iter",
            "extra": "iterations: 145556\ncpu: 4810.184396383525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4897.776333942012,
            "unit": "ns/iter",
            "extra": "iterations: 143522\ncpu: 4897.444294254535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5338.119104136606,
            "unit": "ns/iter",
            "extra": "iterations: 146183\ncpu: 5337.904544304057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7423.163700281555,
            "unit": "ns/iter",
            "extra": "iterations: 95009\ncpu: 7423.043080129261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25679.12433577874,
            "unit": "ns/iter",
            "extra": "iterations: 31616\ncpu: 25678.06490384615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123506.3803504717,
            "unit": "ns/iter",
            "extra": "iterations: 6962\ncpu: 123502.7291008331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98089.27009237873,
            "unit": "ns/iter",
            "extra": "iterations: 8660\ncpu: 98086.4434180138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 97115.21564169433,
            "unit": "ns/iter",
            "extra": "iterations: 8797\ncpu: 97068.85301807443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94557.90108792103,
            "unit": "ns/iter",
            "extra": "iterations: 9008\ncpu: 94555.09547069245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 216345.64718773385,
            "unit": "ns/iter",
            "extra": "iterations: 4107\ncpu: 216325.85829072286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1692585.7067394727,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1692507.468123864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1327596.0071530873,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1327451.0729613723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1343246.5428157314,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1343148.621190134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1312314.6704384529,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1312220.5091937748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 728229.2450903192,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 728208.5624509037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1297338.8884180516,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1297234.4632768396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32459.923309868485,
            "unit": "ns/iter",
            "extra": "iterations: 25427\ncpu: 32457.604121603017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 153503.50962223666,
            "unit": "ns/iter",
            "extra": "iterations: 5612\ncpu: 153495.2601568072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 122031.65551601189,
            "unit": "ns/iter",
            "extra": "iterations: 7025\ncpu: 122023.44483985766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 120533.59980306627,
            "unit": "ns/iter",
            "extra": "iterations: 7109\ncpu: 120525.78421718974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 116906.06611003767,
            "unit": "ns/iter",
            "extra": "iterations: 7306\ncpu: 116898.56282507534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 225353.37232374528,
            "unit": "ns/iter",
            "extra": "iterations: 3830\ncpu: 225343.3681462141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1718717.3079777923,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1718634.6938775536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1360591.390988508,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1360529.360465113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1365069.6428572282,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1364965.7434402308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1337854.0763689948,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1337798.4149855936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 759034.1509433195,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 758989.9097620992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1336476.106017207,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1336396.131805152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6127747.184210438,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6127117.105263152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2790655.452095719,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2790530.8383233673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24990.453384455974,
            "unit": "ns/iter",
            "extra": "iterations: 33122\ncpu: 24989.792283074603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 120242.54840978592,
            "unit": "ns/iter",
            "extra": "iterations: 7106\ncpu: 120230.55164649608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94863.43709926926,
            "unit": "ns/iter",
            "extra": "iterations: 9046\ncpu: 94854.51028078726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94451.80164925547,
            "unit": "ns/iter",
            "extra": "iterations: 9095\ncpu: 94448.59813084088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92811.66503958391,
            "unit": "ns/iter",
            "extra": "iterations: 9219\ncpu: 92806.1937303395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 196611.825454547,
            "unit": "ns/iter",
            "extra": "iterations: 4400\ncpu: 196605.90909090883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1684087.3652804072,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1683979.7468354388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1332341.5284899871,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1332279.772079768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1328476.9515670752,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1328356.1253561305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1309576.1304346456,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1309496.213183733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 719691.8785768985,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 719642.846094356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1312083.8326299512,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1312049.6483825669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2720.1999508231524,
            "unit": "ns/iter",
            "extra": "iterations: 256218\ncpu: 2720.013035774216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17345.737515783792,
            "unit": "ns/iter",
            "extra": "iterations: 40391\ncpu: 17345.161050729144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14330.231868314018,
            "unit": "ns/iter",
            "extra": "iterations: 48782\ncpu: 14329.025050223483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13867.351380886443,
            "unit": "ns/iter",
            "extra": "iterations: 50330\ncpu: 13867.005761970991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10493.867635370356,
            "unit": "ns/iter",
            "extra": "iterations: 66687\ncpu: 10493.274551261855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66498.41891121896,
            "unit": "ns/iter",
            "extra": "iterations: 10544\ncpu: 66494.77427921086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 116357.94801325662,
            "unit": "ns/iter",
            "extra": "iterations: 6040\ncpu: 116353.67549668797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28650.43271700768,
            "unit": "ns/iter",
            "extra": "iterations: 23743\ncpu: 28649.947352904193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28287.424826307615,
            "unit": "ns/iter",
            "extra": "iterations: 24756\ncpu: 28286.843593472284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27926.39814629651,
            "unit": "ns/iter",
            "extra": "iterations: 25031\ncpu: 27924.054172825538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 53941.51189005036,
            "unit": "ns/iter",
            "extra": "iterations: 12952\ncpu: 53938.179431748475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53911.68910860318,
            "unit": "ns/iter",
            "extra": "iterations: 12744\ncpu: 53909.706528562056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21709.893901421132,
            "unit": "ns/iter",
            "extra": "iterations: 32319\ncpu: 21709.851789968707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 104943.51115102094,
            "unit": "ns/iter",
            "extra": "iterations: 6681\ncpu: 104941.16150276917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85041.8803387852,
            "unit": "ns/iter",
            "extra": "iterations: 8265\ncpu: 85033.9140955831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85380.49829435354,
            "unit": "ns/iter",
            "extra": "iterations: 8208\ncpu: 85377.72904483422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84372.56838687183,
            "unit": "ns/iter",
            "extra": "iterations: 8313\ncpu: 84363.63527006064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 127183.11701741116,
            "unit": "ns/iter",
            "extra": "iterations: 5512\ncpu: 127182.76487663113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 502139.39727005636,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 502127.7298850621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 413122.8829095721,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 413106.2093435852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 417905.578162267,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 417874.5226730382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 407354.69324791624,
            "unit": "ns/iter",
            "extra": "iterations: 1718\ncpu: 407339.23166472616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 263926.0755572463,
            "unit": "ns/iter",
            "extra": "iterations: 2647\ncpu: 263902.38005288725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 412079.28427303437,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 412048.9020771501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22353.941187732842,
            "unit": "ns/iter",
            "extra": "iterations: 31337\ncpu: 22352.889555477665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108625.28691067199,
            "unit": "ns/iter",
            "extra": "iterations: 6448\ncpu: 108622.61166253098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91209.99643630348,
            "unit": "ns/iter",
            "extra": "iterations: 7857\ncpu: 91201.10729286063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89043.76536030327,
            "unit": "ns/iter",
            "extra": "iterations: 7910\ncpu: 89043.6662452598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87087.31271734076,
            "unit": "ns/iter",
            "extra": "iterations: 8052\ncpu: 87078.67610531642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 130011.19217214479,
            "unit": "ns/iter",
            "extra": "iterations: 5391\ncpu: 130008.27304767312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 505483.2794540475,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 505465.0862069037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 416676.13201911474,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 416662.8434886508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 413608.7619893638,
            "unit": "ns/iter",
            "extra": "iterations: 1689\ncpu: 413584.36944937735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 411428.1603995323,
            "unit": "ns/iter",
            "extra": "iterations: 1702\ncpu: 411427.6145710897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 263799.9841389504,
            "unit": "ns/iter",
            "extra": "iterations: 2648\ncpu: 263790.44561933674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 419662.76442311896,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 419655.1081730748 ns\nthreads: 1"
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
        "date": 1702488564667,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6870.645909453453,
            "unit": "ns/iter",
            "extra": "iterations: 101539\ncpu: 6870.413338717143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50241.764000003284,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50240.58999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92661.03378305915,
            "unit": "ns/iter",
            "extra": "iterations: 9265\ncpu: 92657.60388559091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135409.80905542712,
            "unit": "ns/iter",
            "extra": "iterations: 6405\ncpu: 135407.66588602652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 176749.0404246692,
            "unit": "ns/iter",
            "extra": "iterations: 4898\ncpu: 176743.14005716614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 218961.42064289836,
            "unit": "ns/iter",
            "extra": "iterations: 3982\ncpu: 218956.22802611746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 262459.6791427785,
            "unit": "ns/iter",
            "extra": "iterations: 3313\ncpu: 262453.09387262294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 303744.9399441321,
            "unit": "ns/iter",
            "extra": "iterations: 2864\ncpu: 303735.2304469274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 347272.03731639805,
            "unit": "ns/iter",
            "extra": "iterations: 2519\ncpu: 347244.54148471623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5752.925261112821,
            "unit": "ns/iter",
            "extra": "iterations: 120446\ncpu: 5752.489912491916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4690.031506535086,
            "unit": "ns/iter",
            "extra": "iterations: 148128\ncpu: 4689.781135234403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4746.376319174309,
            "unit": "ns/iter",
            "extra": "iterations: 148483\ncpu: 4746.012674851666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4698.775804721108,
            "unit": "ns/iter",
            "extra": "iterations: 149120\ncpu: 4698.671539699575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7206.035285347221,
            "unit": "ns/iter",
            "extra": "iterations: 96584\ncpu: 7205.676923714061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26731.55272313293,
            "unit": "ns/iter",
            "extra": "iterations: 30755\ncpu: 26729.933344171677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 127375.40941490984,
            "unit": "ns/iter",
            "extra": "iterations: 6734\ncpu: 127368.56251856228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102591.16610617269,
            "unit": "ns/iter",
            "extra": "iterations: 8326\ncpu: 102586.88445832334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100923.31596975955,
            "unit": "ns/iter",
            "extra": "iterations: 8466\ncpu: 100917.76517836057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100796.00459905852,
            "unit": "ns/iter",
            "extra": "iterations: 8480\ncpu: 100789.99999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 225745.88183199122,
            "unit": "ns/iter",
            "extra": "iterations: 3952\ncpu: 225732.8441295549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1644558.0141592962,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1644528.3185840703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1292520.741307403,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1292495.5493741333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1299077.9202797199,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1299025.8741258753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1279313.418732816,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1279273.2782369154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 706223.502290113,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 706216.1832061075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1244990.6040267968,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 1244963.4899328875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33561.591498647234,
            "unit": "ns/iter",
            "extra": "iterations: 24749\ncpu: 33560.721645319056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157983.93808049566,
            "unit": "ns/iter",
            "extra": "iterations: 5491\ncpu: 157977.39938080512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 126675.41931216106,
            "unit": "ns/iter",
            "extra": "iterations: 6804\ncpu: 126673.07466196337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 124937.11704311617,
            "unit": "ns/iter",
            "extra": "iterations: 6818\ncpu: 124934.37958345543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 125781.5272779608,
            "unit": "ns/iter",
            "extra": "iterations: 6947\ncpu: 125779.40118036525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 236098.26082220543,
            "unit": "ns/iter",
            "extra": "iterations: 3673\ncpu: 236090.90661584516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1674015.6953405011,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1673960.752688171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1318915.5663842272,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1318882.3446327606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1321290.0965908568,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1321246.4488636365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1300516.1396647852,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1300479.4692737362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 733146.6732438747,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 733134.0962904466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1274264.8863013997,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1274210.4109589087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6070533.1623377595,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6070256.4935065145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2825068.7824773476,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2825013.2930513574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25539.449531025737,
            "unit": "ns/iter",
            "extra": "iterations: 32198\ncpu: 25538.735325175374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 125141.3533284587,
            "unit": "ns/iter",
            "extra": "iterations: 6835\ncpu: 125139.19531821442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 100847.10722665464,
            "unit": "ns/iter",
            "extra": "iterations: 8524\ncpu: 100845.03754106066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98109.04598356655,
            "unit": "ns/iter",
            "extra": "iterations: 8764\ncpu: 98107.3596531266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 98042.76901151902,
            "unit": "ns/iter",
            "extra": "iterations: 8771\ncpu: 98041.08995553588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 207641.67403314248,
            "unit": "ns/iter",
            "extra": "iterations: 4163\ncpu: 207635.50324285447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1642704.611599352,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1642662.5659050941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1293531.7444752029,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 1293519.889502754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1301888.7252440345,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1301875.3138075334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1273530.4209078073,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 1273509.628610725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 705679.1079027663,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 705666.0334346469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1245837.6486486522,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1245834.3243243217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2707.5917681304118,
            "unit": "ns/iter",
            "extra": "iterations: 257317\ncpu: 2707.535841005446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17124.912607522067,
            "unit": "ns/iter",
            "extra": "iterations: 40690\ncpu: 17124.536741214088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13532.35029847156,
            "unit": "ns/iter",
            "extra": "iterations: 51596\ncpu: 13532.004418947281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13689.8526676457,
            "unit": "ns/iter",
            "extra": "iterations: 51075\ncpu: 13689.527165932383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10218.20476925789,
            "unit": "ns/iter",
            "extra": "iterations: 68648\ncpu: 10218.08938352168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67387.97876429048,
            "unit": "ns/iter",
            "extra": "iterations: 10407\ncpu: 67385.98058998701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112333.76809500036,
            "unit": "ns/iter",
            "extra": "iterations: 6231\ncpu: 112330.57294174317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27656.94696460236,
            "unit": "ns/iter",
            "extra": "iterations: 25285\ncpu: 27656.183508008726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27774.832737670746,
            "unit": "ns/iter",
            "extra": "iterations: 25182\ncpu: 27774.545310142217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27310.063243729484,
            "unit": "ns/iter",
            "extra": "iterations: 25631\ncpu: 27309.45729780342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 52586.67740468746,
            "unit": "ns/iter",
            "extra": "iterations: 13193\ncpu: 52586.15932691567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52096.35129710483,
            "unit": "ns/iter",
            "extra": "iterations: 13453\ncpu: 52095.23526351016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20823.074369110647,
            "unit": "ns/iter",
            "extra": "iterations: 33643\ncpu: 20822.691198763678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 102336.89649123058,
            "unit": "ns/iter",
            "extra": "iterations: 6840\ncpu: 102335.67251462085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83667.55513081234,
            "unit": "ns/iter",
            "extra": "iterations: 8371\ncpu: 83664.7592880179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83831.44003347258,
            "unit": "ns/iter",
            "extra": "iterations: 8363\ncpu: 83829.72617481672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84506.60403088757,
            "unit": "ns/iter",
            "extra": "iterations: 8286\ncpu: 84503.8498672464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 124609.68822000129,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 124605.42549237997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 488083.2342215771,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 488072.58064516494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 403685.9890237457,
            "unit": "ns/iter",
            "extra": "iterations: 1731\ncpu: 403677.9318313143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 403317.196768574,
            "unit": "ns/iter",
            "extra": "iterations: 1733\ncpu: 403307.9630698131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 408599.1249283398,
            "unit": "ns/iter",
            "extra": "iterations: 1745\ncpu: 408587.8510028644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 251130.03435934984,
            "unit": "ns/iter",
            "extra": "iterations: 2794\ncpu: 251122.54831782327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 394878.5220090037,
            "unit": "ns/iter",
            "extra": "iterations: 1772\ncpu: 394861.51241535036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21121.606395505558,
            "unit": "ns/iter",
            "extra": "iterations: 33117\ncpu: 21120.886553733504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105701.8282964846,
            "unit": "ns/iter",
            "extra": "iterations: 6651\ncpu: 105700.3307773274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87764.76349386551,
            "unit": "ns/iter",
            "extra": "iterations: 7911\ncpu: 87763.59499431185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87995.11859296783,
            "unit": "ns/iter",
            "extra": "iterations: 7960\ncpu: 87992.02261306568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86930.75161370222,
            "unit": "ns/iter",
            "extra": "iterations: 8056\ncpu: 86924.3048659381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128598.50457372742,
            "unit": "ns/iter",
            "extra": "iterations: 5466\ncpu: 128593.54189535347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 488956.66900419904,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 488928.8920056103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 404092.99366361584,
            "unit": "ns/iter",
            "extra": "iterations: 1736\ncpu: 404067.91474654275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 401553.2718390649,
            "unit": "ns/iter",
            "extra": "iterations: 1740\ncpu: 401534.48275861656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 399232.35257141903,
            "unit": "ns/iter",
            "extra": "iterations: 1750\ncpu: 399217.7714285715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 255580.49561725458,
            "unit": "ns/iter",
            "extra": "iterations: 2738\ncpu: 255577.24616508387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 400068.406857112,
            "unit": "ns/iter",
            "extra": "iterations: 1750\ncpu: 400032.0571428558 ns\nthreads: 1"
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
        "date": 1702490847467,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6828.833166578261,
            "unit": "ns/iter",
            "extra": "iterations: 101946\ncpu: 6828.426814195751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50104.07970000301,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50102.98 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93304.7956172694,
            "unit": "ns/iter",
            "extra": "iterations: 9218\ncpu: 93304.23085267952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136407.8532574296,
            "unit": "ns/iter",
            "extra": "iterations: 6324\ncpu: 136409.04490828587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179029.89718077335,
            "unit": "ns/iter",
            "extra": "iterations: 4824\ncpu: 179028.85572139296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 221553.88268297873,
            "unit": "ns/iter",
            "extra": "iterations: 3921\ncpu: 221544.04488650858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 262918.4485896112,
            "unit": "ns/iter",
            "extra": "iterations: 3297\ncpu: 262897.5128905064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 307347.63581982435,
            "unit": "ns/iter",
            "extra": "iterations: 2842\ncpu: 307323.4342012667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 344670.54545453575,
            "unit": "ns/iter",
            "extra": "iterations: 2519\ncpu: 344650.5756252479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5663.781042762131,
            "unit": "ns/iter",
            "extra": "iterations: 123499\ncpu: 5663.6337136333195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4647.187200085685,
            "unit": "ns/iter",
            "extra": "iterations: 150251\ncpu: 4647.002016625511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4677.093119849004,
            "unit": "ns/iter",
            "extra": "iterations: 150956\ncpu: 4677.029730517511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4677.503745643662,
            "unit": "ns/iter",
            "extra": "iterations: 149774\ncpu: 4677.343864756229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7596.906388465022,
            "unit": "ns/iter",
            "extra": "iterations: 92307\ncpu: 7596.356722675432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25535.705175658066,
            "unit": "ns/iter",
            "extra": "iterations: 31880\ncpu: 25534.55144291092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 127874.3906250025,
            "unit": "ns/iter",
            "extra": "iterations: 6720\ncpu: 127866.01190476185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98566.45912602874,
            "unit": "ns/iter",
            "extra": "iterations: 8673\ncpu: 98558.6302317537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99905.1024412989,
            "unit": "ns/iter",
            "extra": "iterations: 8561\ncpu: 99895.43277654512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99223.75084489894,
            "unit": "ns/iter",
            "extra": "iterations: 8581\ncpu: 99219.01876238169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 215931.05940836086,
            "unit": "ns/iter",
            "extra": "iterations: 4124\ncpu: 215912.63336566428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1681398.807339632,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1681338.3486238571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1334275.3323782603,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1334236.962750714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1320958.4314285752,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1320907.9999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1308658.129395209,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1308538.1153305203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 700629.6750189654,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 700594.457099467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1267748.685362584,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1267625.8549931583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32554.516470955434,
            "unit": "ns/iter",
            "extra": "iterations: 25378\ncpu: 32552.143588935214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 160520.85956733266,
            "unit": "ns/iter",
            "extra": "iterations: 5362\ncpu: 160508.373741141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125166.03344967662,
            "unit": "ns/iter",
            "extra": "iterations: 6876\ncpu: 125159.24956369982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122860.77085113162,
            "unit": "ns/iter",
            "extra": "iterations: 7026\ncpu: 122850.014232849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121403.90160216102,
            "unit": "ns/iter",
            "extra": "iterations: 7053\ncpu: 121398.18516943131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 225615.06274512174,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 225598.11764705885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1672025.8522522894,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1671927.0270270172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1361482.1542941458,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1361341.6302765734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1353924.5297532796,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1353912.3367198843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1342160.4438039998,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1339702.7377521703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 724556.1537861252,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 724507.8064012493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1277009.5048142702,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 1276942.3658872081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5921077.943037577,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5920884.177215197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2659486.6438745675,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2659385.185185196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24615.40815959352,
            "unit": "ns/iter",
            "extra": "iterations: 33335\ncpu: 24613.31033448332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 124695.15141865001,
            "unit": "ns/iter",
            "extra": "iterations: 6908\ncpu: 124691.87898089232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 98140.76465212238,
            "unit": "ns/iter",
            "extra": "iterations: 8753\ncpu: 98132.01188164073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98749.98692960864,
            "unit": "ns/iter",
            "extra": "iterations: 8722\ncpu: 98746.0903462507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 95719.953691274,
            "unit": "ns/iter",
            "extra": "iterations: 8940\ncpu: 95712.6398210292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 198343.21555657528,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 198332.70985401436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1652209.0362318407,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1652061.05072463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1301751.5574229446,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1301708.1232493035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1313243.3333332746,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1313124.1773962737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1297388.912552935,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1297337.9407616365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 698097.5494011301,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 698052.8443113816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1280878.4903045609,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1280834.626038773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2669.1706635116734,
            "unit": "ns/iter",
            "extra": "iterations: 262874\ncpu: 2668.938731103114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17386.24686932006,
            "unit": "ns/iter",
            "extra": "iterations: 40167\ncpu: 17385.273981128783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13478.639006546415,
            "unit": "ns/iter",
            "extra": "iterations: 51940\ncpu: 13477.271852137084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14200.643842825546,
            "unit": "ns/iter",
            "extra": "iterations: 51306\ncpu: 14199.918138229445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10311.349599965772,
            "unit": "ns/iter",
            "extra": "iterations: 67869\ncpu: 10310.543841812907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67042.3878388742,
            "unit": "ns/iter",
            "extra": "iterations: 10476\ncpu: 67040.5307369228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 114461.68007819334,
            "unit": "ns/iter",
            "extra": "iterations: 6139\ncpu: 114462.6975077372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27853.380451188852,
            "unit": "ns/iter",
            "extra": "iterations: 25178\ncpu: 27852.67694018584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27863.803191064668,
            "unit": "ns/iter",
            "extra": "iterations: 25070\ncpu: 27863.39050658165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27237.66505591955,
            "unit": "ns/iter",
            "extra": "iterations: 25661\ncpu: 27237.087408908483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54826.8133731023,
            "unit": "ns/iter",
            "extra": "iterations: 12742\ncpu: 54823.708993878594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52850.73575601568,
            "unit": "ns/iter",
            "extra": "iterations: 13181\ncpu: 52844.26826492697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21185.28478300237,
            "unit": "ns/iter",
            "extra": "iterations: 33134\ncpu: 21184.100923522732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 103933.93620486249,
            "unit": "ns/iter",
            "extra": "iterations: 6756\ncpu: 103927.07223209072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84217.17425336469,
            "unit": "ns/iter",
            "extra": "iterations: 8304\ncpu: 84214.66763005928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84733.92362971918,
            "unit": "ns/iter",
            "extra": "iterations: 8210\ncpu: 84729.6589524961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83631.5376524111,
            "unit": "ns/iter",
            "extra": "iterations: 8366\ncpu: 83619.62706191874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 128290.07955376513,
            "unit": "ns/iter",
            "extra": "iterations: 5468\ncpu: 128280.37673737977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 486252.76400555315,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 486209.943977584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 403475.12637045764,
            "unit": "ns/iter",
            "extra": "iterations: 1733\ncpu: 403453.83727639855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 403484.1382488013,
            "unit": "ns/iter",
            "extra": "iterations: 1736\ncpu: 403479.3778801859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 396467.985835698,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 396448.4985835733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 252599.53246752245,
            "unit": "ns/iter",
            "extra": "iterations: 2772\ncpu: 252595.99567099544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 399947.4431034496,
            "unit": "ns/iter",
            "extra": "iterations: 1740\ncpu: 399912.3563218387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22004.320634421285,
            "unit": "ns/iter",
            "extra": "iterations: 31840\ncpu: 22003.401381909316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107446.87640103971,
            "unit": "ns/iter",
            "extra": "iterations: 6513\ncpu: 107445.2786734222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87795.1181852341,
            "unit": "ns/iter",
            "extra": "iterations: 7979\ncpu: 87785.87542298605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88716.12040556791,
            "unit": "ns/iter",
            "extra": "iterations: 7890\ncpu: 88710.49429657828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86293.3145051488,
            "unit": "ns/iter",
            "extra": "iterations: 8073\ncpu: 86284.30571039305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 130925.23005046298,
            "unit": "ns/iter",
            "extra": "iterations: 5351\ncpu: 130918.3517099611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 492974.07872343826,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 492918.51063830225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 404689.5950318278,
            "unit": "ns/iter",
            "extra": "iterations: 1731\ncpu: 404662.7383015572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 407738.5060728907,
            "unit": "ns/iter",
            "extra": "iterations: 1729\ncpu: 407699.8843261994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 398477.12079772516,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 398476.41025641456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 259154.31604298062,
            "unit": "ns/iter",
            "extra": "iterations: 2699\ncpu: 259152.87143386374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 407547.5324751308,
            "unit": "ns/iter",
            "extra": "iterations: 1709\ncpu: 407543.8853130432 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}