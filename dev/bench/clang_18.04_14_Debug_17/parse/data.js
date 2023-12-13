window.BENCHMARK_DATA = {
  "lastUpdate": 1702492189223,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-14 18.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702489616215,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8066.1704786253695,
            "unit": "ns/iter",
            "extra": "iterations: 86832\ncpu: 8061.0972913211735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58994.99709998963,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58993.959999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 108202.35849294132,
            "unit": "ns/iter",
            "extra": "iterations: 7936\ncpu: 108199.87399193548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 158030.5554945144,
            "unit": "ns/iter",
            "extra": "iterations: 5460\ncpu: 158021.8498168498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 206229.83690986127,
            "unit": "ns/iter",
            "extra": "iterations: 4194\ncpu: 206226.22794468285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 257769.36237860276,
            "unit": "ns/iter",
            "extra": "iterations: 3397\ncpu: 257764.96909037375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 304414.7919298299,
            "unit": "ns/iter",
            "extra": "iterations: 2850\ncpu: 304404.35087719304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 353314.7212515136,
            "unit": "ns/iter",
            "extra": "iterations: 2461\ncpu: 353301.8285249895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 403225.2081594523,
            "unit": "ns/iter",
            "extra": "iterations: 2157\ncpu: 403203.05980528524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6870.53412913992,
            "unit": "ns/iter",
            "extra": "iterations: 101951\ncpu: 6870.3122088061855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5599.302016161288,
            "unit": "ns/iter",
            "extra": "iterations: 124990\ncpu: 5599.1559324745995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5468.423823863354,
            "unit": "ns/iter",
            "extra": "iterations: 127855\ncpu: 5468.265613390161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5525.966524092388,
            "unit": "ns/iter",
            "extra": "iterations: 126718\ncpu: 5525.859783140513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9323.998909935772,
            "unit": "ns/iter",
            "extra": "iterations: 75225\ncpu: 9323.493519441681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30146.925013886503,
            "unit": "ns/iter",
            "extra": "iterations: 27005\ncpu: 30145.958155897035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 156510.49170464798,
            "unit": "ns/iter",
            "extra": "iterations: 5485\ncpu: 156501.33090246134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 120707.79098997945,
            "unit": "ns/iter",
            "extra": "iterations: 7081\ncpu: 120702.42903544685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 121440.0556186208,
            "unit": "ns/iter",
            "extra": "iterations: 7048\ncpu: 121433.51305334854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 113840.98786180883,
            "unit": "ns/iter",
            "extra": "iterations: 7497\ncpu: 113833.96025076725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 376754.36261532054,
            "unit": "ns/iter",
            "extra": "iterations: 2493\ncpu: 376717.08784596896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1929061.3708333145,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1928970.8333333358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1547469.8623548478,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1547309.7844112793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1498626.5928918854,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1498586.5912762524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1502464.8187702931,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1502327.669902916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 832544.1301989013,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 832506.8716094034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1468010.8546603825,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1467903.7914691935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41441.197690762536,
            "unit": "ns/iter",
            "extra": "iterations: 19920\ncpu: 41437.57028112454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 197242.02102376008,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 197229.34186471708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 147291.85586822682,
            "unit": "ns/iter",
            "extra": "iterations: 5828\ncpu: 147278.44886753638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 144228.59849119987,
            "unit": "ns/iter",
            "extra": "iterations: 5965\ncpu: 144214.6353730088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 138971.90468472216,
            "unit": "ns/iter",
            "extra": "iterations: 6169\ncpu: 138961.67936456492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 326714.51260819996,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 326689.34888972435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1985277.0554370799,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1985129.6375266535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1577277.4711865429,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1577184.4067796625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1528596.425287262,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1528443.3497536932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1535129.4810543144,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1535026.5238879665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 863341.1945996182,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 863263.8733705778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1501365.953150108,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1501300.1615508837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5331684.369999721,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5330742.000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3175221.006734208,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3174935.3535353537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30682.155397347084,
            "unit": "ns/iter",
            "extra": "iterations: 26828\ncpu: 30678.97346056368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 149191.2517947793,
            "unit": "ns/iter",
            "extra": "iterations: 5711\ncpu: 149183.2778847838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114376.29697536473,
            "unit": "ns/iter",
            "extra": "iterations: 7472\ncpu: 114371.38650963572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113101.31176237488,
            "unit": "ns/iter",
            "extra": "iterations: 7541\ncpu: 113100.59673783311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 110023.39129315835,
            "unit": "ns/iter",
            "extra": "iterations: 7764\ncpu: 110021.78001030377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 292966.70303032326,
            "unit": "ns/iter",
            "extra": "iterations: 2970\ncpu: 292962.65993265907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1923561.4855371153,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1923539.0495867762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1531208.4663382594,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1531172.9064039388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1482587.0174602657,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1482424.2857142866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1489460.6842105577,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1489396.9696969704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 818541.6698858243,
            "unit": "ns/iter",
            "extra": "iterations: 1139\ncpu: 818453.3801580302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1456304.7656249495,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1456265.1562500028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3159.4524696317,
            "unit": "ns/iter",
            "extra": "iterations: 221774\ncpu: 3159.16834254693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20123.972317245294,
            "unit": "ns/iter",
            "extra": "iterations: 34787\ncpu: 20123.540403024166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15126.968377992207,
            "unit": "ns/iter",
            "extra": "iterations: 46202\ncpu: 15125.76728280157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15849.522625309899,
            "unit": "ns/iter",
            "extra": "iterations: 43911\ncpu: 15849.470519915438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12010.697317416456,
            "unit": "ns/iter",
            "extra": "iterations: 58302\ncpu: 12009.253541902544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103041.06652959109,
            "unit": "ns/iter",
            "extra": "iterations: 6809\ncpu: 103033.74944925816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 134341.08644814361,
            "unit": "ns/iter",
            "extra": "iterations: 5217\ncpu: 134331.05232892538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32671.90456995541,
            "unit": "ns/iter",
            "extra": "iterations: 21335\ncpu: 32669.233653620566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32266.593572084585,
            "unit": "ns/iter",
            "extra": "iterations: 21780\ncpu: 32238.379247015797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32221.55133167248,
            "unit": "ns/iter",
            "extra": "iterations: 21702\ncpu: 32220.786102663333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65579.23146151887,
            "unit": "ns/iter",
            "extra": "iterations: 10667\ncpu: 65578.30692790798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 60541.4950726177,
            "unit": "ns/iter",
            "extra": "iterations: 11568\ncpu: 60540.43049792589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22214.834287164947,
            "unit": "ns/iter",
            "extra": "iterations: 31452\ncpu: 22214.739921149696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117311.40194596817,
            "unit": "ns/iter",
            "extra": "iterations: 5961\ncpu: 117307.43163898571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95006.73098783313,
            "unit": "ns/iter",
            "extra": "iterations: 7390\ncpu: 95003.85656292272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94196.16718224432,
            "unit": "ns/iter",
            "extra": "iterations: 7435\ncpu: 94195.81708137217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92525.46863421117,
            "unit": "ns/iter",
            "extra": "iterations: 7556\ncpu: 92522.64425622117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 171476.69652472288,
            "unit": "ns/iter",
            "extra": "iterations: 4086\ncpu: 171471.80616739878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 578664.4231404751,
            "unit": "ns/iter",
            "extra": "iterations: 1210\ncpu: 578654.4628099181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 474133.1370420434,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 474089.62008140684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 464111.03701253043,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 464081.6259087928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 460480.3526697426,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 460433.09162822086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 300911.63667523686,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 300889.97429305804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 460426.5302631168,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 460385.986842108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22904.928299532927,
            "unit": "ns/iter",
            "extra": "iterations: 30474\ncpu: 22903.635886329364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 116140.50946214593,
            "unit": "ns/iter",
            "extra": "iterations: 6024\ncpu: 116129.2496679959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95093.97744258697,
            "unit": "ns/iter",
            "extra": "iterations: 7359\ncpu: 95086.112243511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95726.10010924896,
            "unit": "ns/iter",
            "extra": "iterations: 7322\ncpu: 95721.00518983879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92842.02840833954,
            "unit": "ns/iter",
            "extra": "iterations: 7533\ncpu: 92836.02814283698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 167195.08404965358,
            "unit": "ns/iter",
            "extra": "iterations: 4188\ncpu: 167192.33524355097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 571323.5967347401,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 571263.8367346852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 469041.7456375651,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 469035.43624161114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 461858.0052666134,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 461843.7129690595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 462591.4888010086,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 462589.52569170715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 300036.5536480641,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 300032.2317596513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 456688.6192661015,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 456676.6055045872 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702492188829,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8178.46881156382,
            "unit": "ns/iter",
            "extra": "iterations: 85785\ncpu: 8178.190825901966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59403.24059999966,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59400.49 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110753.68721286929,
            "unit": "ns/iter",
            "extra": "iterations: 7836\ncpu: 110747.25625319041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159508.82117862283,
            "unit": "ns/iter",
            "extra": "iterations: 5430\ncpu: 159502.96500920807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 209200.35609168734,
            "unit": "ns/iter",
            "extra": "iterations: 4145\ncpu: 209196.019300362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 257899.83537131373,
            "unit": "ns/iter",
            "extra": "iterations: 3353\ncpu: 257891.97733373105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 307546.4014909522,
            "unit": "ns/iter",
            "extra": "iterations: 2817\ncpu: 307539.04863329756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 356902.07054963784,
            "unit": "ns/iter",
            "extra": "iterations: 2438\ncpu: 356880.31173092715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 406562.90798690723,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 406554.9743110696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6775.72515883011,
            "unit": "ns/iter",
            "extra": "iterations: 102783\ncpu: 6775.425897278735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5588.821068360219,
            "unit": "ns/iter",
            "extra": "iterations: 125819\ncpu: 5588.596316931479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5570.626553685567,
            "unit": "ns/iter",
            "extra": "iterations: 126393\ncpu: 5570.4619717864225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5490.740029507702,
            "unit": "ns/iter",
            "extra": "iterations: 128103\ncpu: 5490.634879745201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9371.749798431349,
            "unit": "ns/iter",
            "extra": "iterations: 74416\ncpu: 9371.145990109651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31038.919026952597,
            "unit": "ns/iter",
            "extra": "iterations: 26268\ncpu: 31037.60469011723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 150323.36865303302,
            "unit": "ns/iter",
            "extra": "iterations: 5672\ncpu: 150316.29055007081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 114624.15578833524,
            "unit": "ns/iter",
            "extra": "iterations: 7446\ncpu: 114619.82272361018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116254.2584849296,
            "unit": "ns/iter",
            "extra": "iterations: 7366\ncpu: 116247.46130871598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 112062.23650960531,
            "unit": "ns/iter",
            "extra": "iterations: 7598\ncpu: 112057.00184259034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 364046.80108149664,
            "unit": "ns/iter",
            "extra": "iterations: 2589\ncpu: 364022.82734646584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1950505.4524312404,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1950408.2452431335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1515579.9657423217,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1515468.8417618254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1520282.4779050571,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1520249.9181669443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1485087.2339742875,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1485024.1987179453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 838030.9040723981,
            "unit": "ns/iter",
            "extra": "iterations: 1105\ncpu: 838005.5203619932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1464875.7179080066,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1464783.6767036447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 40773.860406465115,
            "unit": "ns/iter",
            "extra": "iterations: 20223\ncpu: 40771.57197250663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 188566.83637562973,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 188558.80800527785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 143799.45871867848,
            "unit": "ns/iter",
            "extra": "iterations: 5947\ncpu: 143790.97023709433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 141315.42172260868,
            "unit": "ns/iter",
            "extra": "iterations: 6049\ncpu: 141307.6045627374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 136965.91655968875,
            "unit": "ns/iter",
            "extra": "iterations: 6232\ncpu: 136956.48267009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 307859.0353445221,
            "unit": "ns/iter",
            "extra": "iterations: 2801\ncpu: 307846.0192788286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1987412.2612418141,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1987256.7451820134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1539976.9867547816,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1539890.8940397436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1550190.7059799344,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1550084.717607977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1524145.3431371695,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1524075.8169934659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 877358.366130587,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 877303.5950804137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1499974.759289222,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1499913.4087237571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5382524.839999405,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5382071.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3236583.04181186,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3236415.331010442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30001.72869938489,
            "unit": "ns/iter",
            "extra": "iterations: 27018\ncpu: 29999.829743134174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 148464.059854275,
            "unit": "ns/iter",
            "extra": "iterations: 5764\ncpu: 148458.01526717626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 112329.16950930949,
            "unit": "ns/iter",
            "extra": "iterations: 7622\ncpu: 112317.7512463925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 112859.04003675378,
            "unit": "ns/iter",
            "extra": "iterations: 7618\ncpu: 112853.04541874542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105112.22805720277,
            "unit": "ns/iter",
            "extra": "iterations: 8112\ncpu: 105105.0295857989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 279197.3824855119,
            "unit": "ns/iter",
            "extra": "iterations: 3106\ncpu: 279184.8679974252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1952551.4205020901,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1952342.4686192367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1497625.9534509252,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1497564.3659711003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1511774.3327974712,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1511668.810289389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1475051.9363056812,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1474977.8662420362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 822962.8167258993,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 822910.5871886174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1445976.7841615176,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1445918.1677018674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3110.620475560341,
            "unit": "ns/iter",
            "extra": "iterations: 225166\ncpu: 3110.5131325333414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19784.132726862223,
            "unit": "ns/iter",
            "extra": "iterations: 35396\ncpu: 19783.478359136712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15575.924437227959,
            "unit": "ns/iter",
            "extra": "iterations: 44956\ncpu: 15575.164605392029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14532.668352123179,
            "unit": "ns/iter",
            "extra": "iterations: 48256\ncpu: 14531.913129973405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11940.923243778805,
            "unit": "ns/iter",
            "extra": "iterations: 58549\ncpu: 11939.96139985317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 102333.52500715206,
            "unit": "ns/iter",
            "extra": "iterations: 6998\ncpu: 102328.63675335882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 134763.22256535714,
            "unit": "ns/iter",
            "extra": "iterations: 4857\ncpu: 134754.25159563537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32179.085327356846,
            "unit": "ns/iter",
            "extra": "iterations: 21857\ncpu: 32177.15605984333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32174.658590410923,
            "unit": "ns/iter",
            "extra": "iterations: 21751\ncpu: 32173.03572249532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31838.812397824408,
            "unit": "ns/iter",
            "extra": "iterations: 22020\ncpu: 31837.170753860035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66139.80659586293,
            "unit": "ns/iter",
            "extra": "iterations: 10734\ncpu: 66137.19023663123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 60886.15458723741,
            "unit": "ns/iter",
            "extra": "iterations: 11314\ncpu: 60882.96800424269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22641.14658212534,
            "unit": "ns/iter",
            "extra": "iterations: 30911\ncpu: 22640.396622561733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117974.67582602848,
            "unit": "ns/iter",
            "extra": "iterations: 5932\ncpu: 117963.89076196974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94649.22447599017,
            "unit": "ns/iter",
            "extra": "iterations: 7395\ncpu: 94642.46112238064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94228.44616837348,
            "unit": "ns/iter",
            "extra": "iterations: 7412\ncpu: 94222.74689692428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93510.04008017047,
            "unit": "ns/iter",
            "extra": "iterations: 7485\ncpu: 93503.98129592481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 167681.04514888843,
            "unit": "ns/iter",
            "extra": "iterations: 4164\ncpu: 167679.8030739669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 570316.9542857722,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 570269.7959183719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 466814.61029410537,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 466806.6176470573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 458992.21132321365,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 458965.0427913079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 459981.89783889806,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 459958.677144727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 305180.71744791954,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 305162.3697916672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 456189.68166988064,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 456144.3574690226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23147.66149776864,
            "unit": "ns/iter",
            "extra": "iterations: 30245\ncpu: 23146.50355430672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119008.41685068542,
            "unit": "ns/iter",
            "extra": "iterations: 5887\ncpu: 119000.47562425504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95227.71250512887,
            "unit": "ns/iter",
            "extra": "iterations: 7301\ncpu: 95219.3124229555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96837.56257778447,
            "unit": "ns/iter",
            "extra": "iterations: 7231\ncpu: 96834.35209514636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94452.83737536074,
            "unit": "ns/iter",
            "extra": "iterations: 7422\ncpu: 94452.33090810961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 163212.47520759184,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 163205.4567022538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 574551.8077239449,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 574540.0164338518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 461864.2818482246,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 461845.2805280517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 461900.7628798139,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 461891.6776750411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 458065.9706074802,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 458039.25538862817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 298424.73484200536,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 298421.60546541074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 454978.7149380227,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 454969.667318982 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}