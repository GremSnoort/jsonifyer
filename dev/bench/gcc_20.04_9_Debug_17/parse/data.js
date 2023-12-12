window.BENCHMARK_DATA = {
  "lastUpdate": 1702398827079,
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
      }
    ]
  }
}