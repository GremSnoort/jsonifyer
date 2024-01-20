window.BENCHMARK_DATA = {
  "lastUpdate": 1705774176898,
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
        "date": 1702503288180,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8033.086872542534,
            "unit": "ns/iter",
            "extra": "iterations: 86978\ncpu: 8032.2299891926705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59029.1633999982,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59022.209999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 108329.49551711135,
            "unit": "ns/iter",
            "extra": "iterations: 7919\ncpu: 108319.54792271752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 158198.5089236438,
            "unit": "ns/iter",
            "extra": "iterations: 5435\ncpu: 158186.8077276909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 207872.56212592224,
            "unit": "ns/iter",
            "extra": "iterations: 4177\ncpu: 207856.69140531486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 257055.7665634745,
            "unit": "ns/iter",
            "extra": "iterations: 3230\ncpu: 257046.16099071212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 304650.9029877158,
            "unit": "ns/iter",
            "extra": "iterations: 2845\ncpu: 304647.45166959555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 354975.9840359973,
            "unit": "ns/iter",
            "extra": "iterations: 2443\ncpu: 354958.7392550141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 402609.98471514747,
            "unit": "ns/iter",
            "extra": "iterations: 2159\ncpu: 402601.9453450675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6715.595135261256,
            "unit": "ns/iter",
            "extra": "iterations: 103726\ncpu: 6715.090719780966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5534.49783276352,
            "unit": "ns/iter",
            "extra": "iterations: 126659\ncpu: 5534.446032259853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5461.693008115003,
            "unit": "ns/iter",
            "extra": "iterations: 127176\ncpu: 5461.403094923579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5419.787546383493,
            "unit": "ns/iter",
            "extra": "iterations: 129087\ncpu: 5419.418686622208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9432.918773050118,
            "unit": "ns/iter",
            "extra": "iterations: 74298\ncpu: 9432.563460658432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 32477.02542103482,
            "unit": "ns/iter",
            "extra": "iterations: 25176\ncpu: 32474.944391483972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 165093.17414755747,
            "unit": "ns/iter",
            "extra": "iterations: 5191\ncpu: 165090.11751107668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 123975.16543958423,
            "unit": "ns/iter",
            "extra": "iterations: 6927\ncpu: 123972.02252057166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 123915.1949484644,
            "unit": "ns/iter",
            "extra": "iterations: 6889\ncpu: 123913.96429089826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 121093.43421052441,
            "unit": "ns/iter",
            "extra": "iterations: 7068\ncpu: 121087.11092246712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 367030.30904129264,
            "unit": "ns/iter",
            "extra": "iterations: 2566\ncpu: 367023.3826968043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1919662.1288981442,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1919577.3388773405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1528035.9835526494,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1527986.5131578979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1520458.8756137611,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1520421.4402618632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1507934.6839545586,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1507860.7779578634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 849392.4701560708,
            "unit": "ns/iter",
            "extra": "iterations: 1089\ncpu: 849296.6942148759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1476742.3031744761,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1476644.1269841215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41206.54805377356,
            "unit": "ns/iter",
            "extra": "iterations: 19936\ncpu: 41203.927568218416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 200043.3143719334,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 200023.65915950786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 153999.88298830265,
            "unit": "ns/iter",
            "extra": "iterations: 5555\ncpu: 153988.7668766876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 152742.58690266102,
            "unit": "ns/iter",
            "extra": "iterations: 5650\ncpu: 152728.17699115083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 151451.03415323605,
            "unit": "ns/iter",
            "extra": "iterations: 5651\ncpu: 151445.10706069734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 310028.6452762801,
            "unit": "ns/iter",
            "extra": "iterations: 2805\ncpu: 310015.0445632797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1975896.2802548793,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1975766.4543524375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1547225.3116666935,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1547095.4999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1546330.3283581997,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1546227.363184082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1551721.2316666474,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1551671.833333342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 884566.1191611157,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 884542.1353670161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1498023.2326332084,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1497876.898222935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5398773.309999569,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5398452.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3275326.44912281,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3274985.26315789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30088.238838622998,
            "unit": "ns/iter",
            "extra": "iterations: 26968\ncpu: 30087.221892613477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 154692.44436479904,
            "unit": "ns/iter",
            "extra": "iterations: 5581\ncpu: 154687.31410141502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 120384.16109168237,
            "unit": "ns/iter",
            "extra": "iterations: 7145\ncpu: 120370.6927921622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 119595.79559397671,
            "unit": "ns/iter",
            "extra": "iterations: 7172\ncpu: 119590.42108198578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 115438.6581735266,
            "unit": "ns/iter",
            "extra": "iterations: 7457\ncpu: 115429.40860936043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 282882.88689113024,
            "unit": "ns/iter",
            "extra": "iterations: 3059\ncpu: 282868.2902909447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1928930.2024791716,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1928760.537190088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1503821.1532258526,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1503673.3870967708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1504344.7306452654,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1504214.1935483888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1494887.0673078517,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1494692.3076923059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 828606.6240000058,
            "unit": "ns/iter",
            "extra": "iterations: 1125\ncpu: 828553.0666666685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1451190.959438405,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1451052.4180967226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3166.3719227785573,
            "unit": "ns/iter",
            "extra": "iterations: 220613\ncpu: 3166.1361751120826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19816.511028681638,
            "unit": "ns/iter",
            "extra": "iterations: 35317\ncpu: 19815.052241130325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16265.632119534164,
            "unit": "ns/iter",
            "extra": "iterations: 43033\ncpu: 16264.429623777065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15771.415862565209,
            "unit": "ns/iter",
            "extra": "iterations: 44356\ncpu: 15769.501307602131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12038.268285547534,
            "unit": "ns/iter",
            "extra": "iterations: 58106\ncpu: 12037.792999001755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 100078.67457819778,
            "unit": "ns/iter",
            "extra": "iterations: 6994\ncpu: 100066.04232199055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 128724.94207430052,
            "unit": "ns/iter",
            "extra": "iterations: 5438\ncpu: 128711.8609783004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32515.564647588722,
            "unit": "ns/iter",
            "extra": "iterations: 21594\ncpu: 32510.891914420627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32415.609212961273,
            "unit": "ns/iter",
            "extra": "iterations: 21600\ncpu: 32413.45833333345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31858.39383998511,
            "unit": "ns/iter",
            "extra": "iterations: 21948\ncpu: 31854.702022963527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65009.860927766036,
            "unit": "ns/iter",
            "extra": "iterations: 10757\ncpu: 65003.97880449892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 60625.74906691812,
            "unit": "ns/iter",
            "extra": "iterations: 11521\ncpu: 60620.99644128161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22810.32450288153,
            "unit": "ns/iter",
            "extra": "iterations: 30727\ncpu: 22808.383506362425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 128428.66591028415,
            "unit": "ns/iter",
            "extra": "iterations: 5729\ncpu: 128421.22534473562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96931.23583990351,
            "unit": "ns/iter",
            "extra": "iterations: 7221\ncpu: 96923.54244564475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96551.05901820467,
            "unit": "ns/iter",
            "extra": "iterations: 7252\ncpu: 96542.14009928264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94750.03231039904,
            "unit": "ns/iter",
            "extra": "iterations: 7397\ncpu: 94743.45004731609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170415.88266797605,
            "unit": "ns/iter",
            "extra": "iterations: 4108\ncpu: 170403.31061343726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 578903.2070956434,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 578861.7161716151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 470531.3144780546,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 470497.97979798005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 466666.0932090391,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 466622.30359520094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 462886.3043766746,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 462865.5835543776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 304362.930313583,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 304353.5714285711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 459483.2022397462,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 459464.7562582358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23962.14815320954,
            "unit": "ns/iter",
            "extra": "iterations: 29267\ncpu: 23961.564219086267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120408.16237113818,
            "unit": "ns/iter",
            "extra": "iterations: 5820\ncpu: 120401.63230240592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96868.80136224977,
            "unit": "ns/iter",
            "extra": "iterations: 7194\ncpu: 96861.70419794317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97045.99555123015,
            "unit": "ns/iter",
            "extra": "iterations: 7193\ncpu: 97044.02891700271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 96117.06565934398,
            "unit": "ns/iter",
            "extra": "iterations: 7280\ncpu: 96113.02197802158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 166675.50559658723,
            "unit": "ns/iter",
            "extra": "iterations: 4199\ncpu: 166669.54036675423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 570392.6962540805,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 570380.2931596014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 464010.39787799976,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 463998.47480106074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 465858.2558139403,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 465846.9767441863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 463591.8356527298,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 463571.63684558717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 301823.8988764434,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 301808.94554882933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 457414.22047248,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 457396.3254593213 ns\nthreads: 1"
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
        "date": 1705574906314,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8552.550822039404,
            "unit": "ns/iter",
            "extra": "iterations: 81687\ncpu: 8552.603229400029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 63076.20125457154,
            "unit": "ns/iter",
            "extra": "iterations: 13391\ncpu: 63077.104025091474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 116105.15736863427,
            "unit": "ns/iter",
            "extra": "iterations: 7403\ncpu: 116105.97055247876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 168135.35775693343,
            "unit": "ns/iter",
            "extra": "iterations: 5118\ncpu: 168137.29972645562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 221471.54473212108,
            "unit": "ns/iter",
            "extra": "iterations: 3901\ncpu: 221477.92873622154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 273366.1431279676,
            "unit": "ns/iter",
            "extra": "iterations: 3165\ncpu: 273371.12164297013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 325438.6954562399,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 325443.4096883215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 377594.06553819176,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 377590.5815972223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 429224.07851850113,
            "unit": "ns/iter",
            "extra": "iterations: 2025\ncpu: 429221.4320987651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7004.663558220308,
            "unit": "ns/iter",
            "extra": "iterations: 100050\ncpu: 7004.718640679659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5717.049043628615,
            "unit": "ns/iter",
            "extra": "iterations: 122442\ncpu: 5717.088090687845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5700.560641889286,
            "unit": "ns/iter",
            "extra": "iterations: 122638\ncpu: 5700.728974706042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5664.552603133093,
            "unit": "ns/iter",
            "extra": "iterations: 123966\ncpu: 5664.818579287857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9570.113397840325,
            "unit": "ns/iter",
            "extra": "iterations: 73273\ncpu: 9570.180011736942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30098.02726836644,
            "unit": "ns/iter",
            "extra": "iterations: 27101\ncpu: 30097.332201763773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 152164.2527531012,
            "unit": "ns/iter",
            "extra": "iterations: 5630\ncpu: 152160.40852575464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 120039.99199324867,
            "unit": "ns/iter",
            "extra": "iterations: 7119\ncpu: 120038.09523809516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 119464.14597315628,
            "unit": "ns/iter",
            "extra": "iterations: 7152\ncpu: 119462.41610738292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 115804.51728360473,
            "unit": "ns/iter",
            "extra": "iterations: 7348\ncpu: 115801.72836145906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 368244.7365949198,
            "unit": "ns/iter",
            "extra": "iterations: 2555\ncpu: 368237.1428571426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2015149.9934782982,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2015136.0869565208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1584969.2435678637,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1584969.4682675828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1580899.9897959349,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1580879.421768708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1564402.609507654,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1564380.1358234298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 890080.7068467019,
            "unit": "ns/iter",
            "extra": "iterations: 1037\ncpu: 890064.9951783991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1535103.3222591875,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1535085.2159468431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41269.41005356841,
            "unit": "ns/iter",
            "extra": "iterations: 19973\ncpu: 41269.12832323637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 190665.75499332367,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 190664.40301819763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 149108.2780767144,
            "unit": "ns/iter",
            "extra": "iterations: 5761\ncpu: 149105.7455302896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 148362.9317400229,
            "unit": "ns/iter",
            "extra": "iterations: 5816\ncpu: 148362.20770288882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 142446.9674256268,
            "unit": "ns/iter",
            "extra": "iterations: 6017\ncpu: 142446.95030746254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 307297.4875621839,
            "unit": "ns/iter",
            "extra": "iterations: 2814\ncpu: 307293.60341151303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2063335.349557636,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2063305.752212381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1616925.8086956295,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1616915.1304347783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1617440.9809028844,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1617418.4027777743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1603296.5086503618,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1603272.837370241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 924970.679282848,
            "unit": "ns/iter",
            "extra": "iterations: 1004\ncpu: 924956.8725099578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1570805.2956081186,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1570745.1013513443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5658139.330000723,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5657896.999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3280305.9753518933,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3280260.2112676157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 30379.244211607634,
            "unit": "ns/iter",
            "extra": "iterations: 27296\ncpu: 30378.850381008135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 149806.03841472947,
            "unit": "ns/iter",
            "extra": "iterations: 5753\ncpu: 149804.71058578123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 116598.90578825898,
            "unit": "ns/iter",
            "extra": "iterations: 7377\ncpu: 116596.44842076726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 115504.01980598335,
            "unit": "ns/iter",
            "extra": "iterations: 7422\ncpu: 115501.85933710587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 111628.8919129957,
            "unit": "ns/iter",
            "extra": "iterations: 7679\ncpu: 111628.16773017304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 286384.7825512153,
            "unit": "ns/iter",
            "extra": "iterations: 3026\ncpu: 286381.6589557166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2024634.6095445678,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2024596.3123644306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1578726.8817567683,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1578685.97972973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1571143.2895624004,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1571133.5016834964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1564629.0656566173,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1564588.8888888878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 878067.508026516,
            "unit": "ns/iter",
            "extra": "iterations: 1059\ncpu: 878061.0009442841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1516854.841503234,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1516828.9215686375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3160.4884605650745,
            "unit": "ns/iter",
            "extra": "iterations: 221328\ncpu: 3160.5255548326504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20130.597235394467,
            "unit": "ns/iter",
            "extra": "iterations: 34797\ncpu: 20130.31295801358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14560.2986885937,
            "unit": "ns/iter",
            "extra": "iterations: 48040\ncpu: 14560.151956702783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15294.140277929178,
            "unit": "ns/iter",
            "extra": "iterations: 45695\ncpu: 15293.69077579606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12127.793425684235,
            "unit": "ns/iter",
            "extra": "iterations: 57679\ncpu: 12127.549021307595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 100480.71938922128,
            "unit": "ns/iter",
            "extra": "iterations: 6942\ncpu: 100479.90492653367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 139649.87588293006,
            "unit": "ns/iter",
            "extra": "iterations: 4955\ncpu: 139647.68920282525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33728.64812849599,
            "unit": "ns/iter",
            "extra": "iterations: 20732\ncpu: 33728.23654254298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33837.704252546086,
            "unit": "ns/iter",
            "extra": "iterations: 20717\ncpu: 33836.71380991428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33603.95159059415,
            "unit": "ns/iter",
            "extra": "iterations: 20967\ncpu: 33603.41965946483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67310.58795715637,
            "unit": "ns/iter",
            "extra": "iterations: 10363\ncpu: 67310.17079996126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 63186.242686891404,
            "unit": "ns/iter",
            "extra": "iterations: 11076\ncpu: 63187.45034308355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24050.68504477146,
            "unit": "ns/iter",
            "extra": "iterations: 29147\ncpu: 24050.584965862457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115822.37069536324,
            "unit": "ns/iter",
            "extra": "iterations: 6040\ncpu: 115821.8211920518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96109.63331955357,
            "unit": "ns/iter",
            "extra": "iterations: 7257\ncpu: 96105.8150750988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95776.39324767949,
            "unit": "ns/iter",
            "extra": "iterations: 7316\ncpu: 95773.6331328591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93009.86413187106,
            "unit": "ns/iter",
            "extra": "iterations: 7522\ncpu: 93009.4256846577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 169491.48789345747,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 169488.35351089563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 596163.3627867596,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 596154.2056074752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 483367.8966713298,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 483363.2454923742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 482890.05544010946,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 482891.7532917558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 474147.48336727044,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 474152.2742701929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 319124.7396783569,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 319127.3794002655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 474280.67496639106,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 474270.5921938092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23652.83872056191,
            "unit": "ns/iter",
            "extra": "iterations: 29638\ncpu: 23652.746474120853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118393.38667116589,
            "unit": "ns/iter",
            "extra": "iterations: 5912\ncpu: 118393.18335588579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95703.24627579427,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 95702.74702747131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96811.94690264232,
            "unit": "ns/iter",
            "extra": "iterations: 7232\ncpu: 96811.44911504358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94738.13908356523,
            "unit": "ns/iter",
            "extra": "iterations: 7420\ncpu: 94737.02156334331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 168267.67346938446,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 168264.89795918277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 597898.7386848812,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 597904.953031601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 483233.78808869136,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 483230.1939058195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 482378.4502762776,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 482387.43093922874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 478056.17008200794,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 478060.860655737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 307950.73418280185,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 307953.6028119463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 474232.5648021847,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 474235.0613915465 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705772728277,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8378.049587073187,
            "unit": "ns/iter",
            "extra": "iterations: 83671\ncpu: 8377.88242043241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61053.35227928702,
            "unit": "ns/iter",
            "extra": "iterations: 13864\ncpu: 61048.83871898443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 114022.26194805534,
            "unit": "ns/iter",
            "extra": "iterations: 7700\ncpu: 114014.18181818182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 162457.83708183936,
            "unit": "ns/iter",
            "extra": "iterations: 5291\ncpu: 162452.1829521829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 212547.492262361,
            "unit": "ns/iter",
            "extra": "iterations: 4071\ncpu: 212545.0994841563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 264653.80146611424,
            "unit": "ns/iter",
            "extra": "iterations: 3274\ncpu: 264644.1967012828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 314822.94666184403,
            "unit": "ns/iter",
            "extra": "iterations: 2756\ncpu: 314812.59071117546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 366249.3549502976,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 366224.3839169908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 416490.78657074197,
            "unit": "ns/iter",
            "extra": "iterations: 2085\ncpu: 416465.99520383665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7012.754993061935,
            "unit": "ns/iter",
            "extra": "iterations: 99438\ncpu: 7012.3031436674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5747.739796295049,
            "unit": "ns/iter",
            "extra": "iterations: 122039\ncpu: 5747.553650882093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5697.307800324829,
            "unit": "ns/iter",
            "extra": "iterations: 123200\ncpu: 5696.932629870142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5670.472610907469,
            "unit": "ns/iter",
            "extra": "iterations: 123279\ncpu: 5670.080062297711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9612.371083511272,
            "unit": "ns/iter",
            "extra": "iterations: 72865\ncpu: 9611.787552322789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30699.969630663993,
            "unit": "ns/iter",
            "extra": "iterations: 26507\ncpu: 30697.842079450715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 159298.95779466524,
            "unit": "ns/iter",
            "extra": "iterations: 5260\ncpu: 159286.3688212929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 122843.35241657919,
            "unit": "ns/iter",
            "extra": "iterations: 6952\ncpu: 122836.3924050636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 121881.87922911793,
            "unit": "ns/iter",
            "extra": "iterations: 7005\ncpu: 121873.81870092782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 113985.68152014037,
            "unit": "ns/iter",
            "extra": "iterations: 7473\ncpu: 113978.6029706943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 374431.08552110515,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 374397.65314240253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1983926.4537634542,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1983869.0322580712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1584898.744027411,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1584824.2320819101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1568614.0996622287,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1568583.7837837844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1552685.235392293,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1552599.332220367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 874689.616840182,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 874678.9025544014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1519239.672667829,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1519184.6153846143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 40068.47665967655,
            "unit": "ns/iter",
            "extra": "iterations: 20501\ncpu: 40067.6064582215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 198890.36890737258,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 198881.51998152028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 152622.80549158607,
            "unit": "ns/iter",
            "extra": "iterations: 5645\ncpu: 152621.09831709447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 146048.37604503785,
            "unit": "ns/iter",
            "extra": "iterations: 5861\ncpu: 146042.55246544944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 139870.88877969174,
            "unit": "ns/iter",
            "extra": "iterations: 6105\ncpu: 139866.7649467648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 328931.46785175375,
            "unit": "ns/iter",
            "extra": "iterations: 2644\ncpu: 328919.0998487151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2053794.722466956,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2053742.0704845872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1609794.722891723,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1609692.5989672965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1613818.885615306,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1613729.6360485305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1599327.315608795,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1599201.2006860955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 911329.5258033556,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 911285.7838364161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1558713.7290970571,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1558605.5183946502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5512275.129999581,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5511906.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3401832.733576708,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3401508.0291970805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29514.4390891542,
            "unit": "ns/iter",
            "extra": "iterations: 27491\ncpu: 29512.66596340625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 150419.1544272646,
            "unit": "ns/iter",
            "extra": "iterations: 5692\ncpu: 150407.3963457494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 118723.70128612629,
            "unit": "ns/iter",
            "extra": "iterations: 7231\ncpu: 118719.31959618324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 114367.92523114083,
            "unit": "ns/iter",
            "extra": "iterations: 7463\ncpu: 114364.81307785083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 111151.8848864622,
            "unit": "ns/iter",
            "extra": "iterations: 7662\ncpu: 111150.62646828509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 289768.1101070647,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 289762.6506024091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2001594.720430207,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 2001441.9354838666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1573443.4847973406,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1573326.013513517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1571123.2154881728,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1571017.84511784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1548193.1495016995,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1548076.0797342143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 856898.0648748339,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 856828.0815569975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1511091.1918699036,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1510986.9918699183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3151.266824980469,
            "unit": "ns/iter",
            "extra": "iterations: 222764\ncpu: 3151.2048625451034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19958.42639983853,
            "unit": "ns/iter",
            "extra": "iterations: 35129\ncpu: 19957.402715704884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16234.172926575136,
            "unit": "ns/iter",
            "extra": "iterations: 43105\ncpu: 16232.780419904886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16495.477054930998,
            "unit": "ns/iter",
            "extra": "iterations: 42471\ncpu: 16493.9794212521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12246.52960768511,
            "unit": "ns/iter",
            "extra": "iterations: 57046\ncpu: 12245.817410510763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 102329.68151382578,
            "unit": "ns/iter",
            "extra": "iterations: 6870\ncpu: 102321.03347889351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 138601.29460580496,
            "unit": "ns/iter",
            "extra": "iterations: 5061\ncpu: 138593.02509385452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33815.80416263268,
            "unit": "ns/iter",
            "extra": "iterations: 20660\ncpu: 33813.581800580876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33495.65170427614,
            "unit": "ns/iter",
            "extra": "iterations: 20830\ncpu: 33493.24051848288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33431.60640786636,
            "unit": "ns/iter",
            "extra": "iterations: 20943\ncpu: 33428.52504416728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67315.72619275273,
            "unit": "ns/iter",
            "extra": "iterations: 10438\ncpu: 67314.95497221734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62522.59110832467,
            "unit": "ns/iter",
            "extra": "iterations: 11179\ncpu: 62520.055461132164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23591.490865042924,
            "unit": "ns/iter",
            "extra": "iterations: 29721\ncpu: 23591.221695097385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 118508.87901862444,
            "unit": "ns/iter",
            "extra": "iterations: 5910\ncpu: 118506.46362098161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96656.88499241306,
            "unit": "ns/iter",
            "extra": "iterations: 7243\ncpu: 96655.8470247137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95927.31903266213,
            "unit": "ns/iter",
            "extra": "iterations: 7319\ncpu: 95923.25454297152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95338.38441628657,
            "unit": "ns/iter",
            "extra": "iterations: 7341\ncpu: 95334.53208009906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 172579.186913582,
            "unit": "ns/iter",
            "extra": "iterations: 4050\ncpu: 172574.12345679136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 598839.1892122952,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 598814.04109589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 489088.1065171446,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 489056.20182199904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 485439.10069927643,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 485390.2097902098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 484147.19699041446,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 484121.27222982055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 313343.82632050803,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 313325.0671441364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 476355.930565042,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 476324.9829816114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24532.036850395678,
            "unit": "ns/iter",
            "extra": "iterations: 28575\ncpu: 24530.35170603693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119504.9544213028,
            "unit": "ns/iter",
            "extra": "iterations: 5858\ncpu: 119497.06384431437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97724.30009816862,
            "unit": "ns/iter",
            "extra": "iterations: 7131\ncpu: 97717.86565699197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97742.91943591574,
            "unit": "ns/iter",
            "extra": "iterations: 7162\ncpu: 97735.22759005865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 98954.03826207985,
            "unit": "ns/iter",
            "extra": "iterations: 7135\ncpu: 98947.44218640502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 171711.85384991608,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 171703.31044629784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 595118.6093617697,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 595106.9787233985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 484929.51177286217,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 484919.32132964476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 484746.4598337475,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 484731.6481994424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 479490.97404375044,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 479485.6557377023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 306058.90972831694,
            "unit": "ns/iter",
            "extra": "iterations: 2282\ncpu: 306055.12708150805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 473860.76834244264,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 473845.8559782586 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705774175577,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7991.327901009072,
            "unit": "ns/iter",
            "extra": "iterations: 87685\ncpu: 7990.871870901524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58316.951699998746,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58316.56999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 107770.31581587876,
            "unit": "ns/iter",
            "extra": "iterations: 7973\ncpu: 107768.50620845352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 155759.0423682708,
            "unit": "ns/iter",
            "extra": "iterations: 5523\ncpu: 155761.37968495386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 205952.67784118062,
            "unit": "ns/iter",
            "extra": "iterations: 4206\ncpu: 205950.42796005704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 254745.16980577243,
            "unit": "ns/iter",
            "extra": "iterations: 3398\ncpu: 254736.6097704532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 302659.3931564267,
            "unit": "ns/iter",
            "extra": "iterations: 2864\ncpu: 302654.2946927373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 351052.4999999949,
            "unit": "ns/iter",
            "extra": "iterations: 2480\ncpu: 351048.7500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 399527.0431787098,
            "unit": "ns/iter",
            "extra": "iterations: 2177\ncpu: 399518.46577859443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6592.992348118211,
            "unit": "ns/iter",
            "extra": "iterations: 105987\ncpu: 6592.893468066832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5465.13228420444,
            "unit": "ns/iter",
            "extra": "iterations: 127725\ncpu: 5464.919162262673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5497.434045388437,
            "unit": "ns/iter",
            "extra": "iterations: 127565\ncpu: 5497.456198800613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5411.2932921413085,
            "unit": "ns/iter",
            "extra": "iterations: 129475\ncpu: 5411.240007723503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9271.745268128034,
            "unit": "ns/iter",
            "extra": "iterations: 75393\ncpu: 9271.572957701641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31431.508073819467,
            "unit": "ns/iter",
            "extra": "iterations: 26010\ncpu: 31431.15340253744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 156068.12447603355,
            "unit": "ns/iter",
            "extra": "iterations: 5487\ncpu: 156063.2039365771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115522.42026240374,
            "unit": "ns/iter",
            "extra": "iterations: 7393\ncpu: 115520.91167320433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 117569.23344709176,
            "unit": "ns/iter",
            "extra": "iterations: 7325\ncpu: 117563.75426621179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110658.80376868717,
            "unit": "ns/iter",
            "extra": "iterations: 7695\ncpu: 110657.5828460042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 375532.326930785,
            "unit": "ns/iter",
            "extra": "iterations: 2499\ncpu: 375518.36734693806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1879099.1265305188,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1879028.3673469434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1518218.4330065567,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1518173.0392156837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1503076.6482982507,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1503029.6596434338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1476706.7722929209,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1476681.0509554134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 848446.2513761882,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 848406.5137614678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1452399.2065726777,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1452351.173708918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 42393.66358087438,
            "unit": "ns/iter",
            "extra": "iterations: 19660\ncpu: 42392.49237029502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 188738.96022726782,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 188739.37937062964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 148945.5456119124,
            "unit": "ns/iter",
            "extra": "iterations: 5777\ncpu: 148943.32698632483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 146515.4582053877,
            "unit": "ns/iter",
            "extra": "iterations: 5862\ncpu: 146513.5789832825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 137512.90793496373,
            "unit": "ns/iter",
            "extra": "iterations: 6213\ncpu: 137505.64944471268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 321428.91607872146,
            "unit": "ns/iter",
            "extra": "iterations: 2693\ncpu: 321425.8076494618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1929256.670103117,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1929162.4742268065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1535435.9322312924,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1535408.0991735517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1540835.6102818912,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1540741.293532344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1515957.255700257,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1515944.625407169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 896731.9980713497,
            "unit": "ns/iter",
            "extra": "iterations: 1037\ncpu: 896679.6528447407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1487246.4600640028,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1487243.4504792255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5485432.649999211,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5484883.999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3287470.3321554866,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3287347.349823324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29996.710479055106,
            "unit": "ns/iter",
            "extra": "iterations: 27283\ncpu: 29995.638309570026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 148587.80596756193,
            "unit": "ns/iter",
            "extra": "iterations: 5798\ncpu: 148586.46084856847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114218.14798504791,
            "unit": "ns/iter",
            "extra": "iterations: 7494\ncpu: 114211.67600747317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 112559.35407894258,
            "unit": "ns/iter",
            "extra": "iterations: 7600\ncpu: 112558.17105263221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108701.17537171028,
            "unit": "ns/iter",
            "extra": "iterations: 7869\ncpu: 108697.54733765444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 290457.00670915074,
            "unit": "ns/iter",
            "extra": "iterations: 2981\ncpu: 290454.5454545455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1879956.078787794,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1879867.0707070783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1493525.3173843247,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1493510.3668261545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1486493.6815287448,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1486425.3184713416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1471699.424722729,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1471643.581616483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 837716.9819657118,
            "unit": "ns/iter",
            "extra": "iterations: 1109\ncpu: 837700.3606853036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1443710.2894737246,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1443658.0495356058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3141.2759867727236,
            "unit": "ns/iter",
            "extra": "iterations: 222873\ncpu: 3141.285395718623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20098.016365720017,
            "unit": "ns/iter",
            "extra": "iterations: 34890\ncpu: 20097.916308397784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16169.666882127762,
            "unit": "ns/iter",
            "extra": "iterations: 43318\ncpu: 16169.409945057621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16361.468275565916,
            "unit": "ns/iter",
            "extra": "iterations: 44461\ncpu: 16361.222194732482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11957.235603525,
            "unit": "ns/iter",
            "extra": "iterations: 58556\ncpu: 11956.791789056722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 101690.72001731857,
            "unit": "ns/iter",
            "extra": "iterations: 6929\ncpu: 101688.18011256996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 130749.50121834931,
            "unit": "ns/iter",
            "extra": "iterations: 5335\ncpu: 130741.78069353446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31823.127271897454,
            "unit": "ns/iter",
            "extra": "iterations: 21953\ncpu: 31822.570947023294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32200.06396824586,
            "unit": "ns/iter",
            "extra": "iterations: 21667\ncpu: 32198.573868094227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31601.87727313585,
            "unit": "ns/iter",
            "extra": "iterations: 22106\ncpu: 31601.388763231847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63707.93727004598,
            "unit": "ns/iter",
            "extra": "iterations: 10872\ncpu: 63706.67770419431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 60062.388974362184,
            "unit": "ns/iter",
            "extra": "iterations: 11700\ncpu: 60059.70940170923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23278.36441411494,
            "unit": "ns/iter",
            "extra": "iterations: 30040\ncpu: 23278.13249001336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113223.65059070943,
            "unit": "ns/iter",
            "extra": "iterations: 6179\ncpu: 113222.39844635112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 91507.78556511943,
            "unit": "ns/iter",
            "extra": "iterations: 7662\ncpu: 91504.84207778756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 92437.38814051537,
            "unit": "ns/iter",
            "extra": "iterations: 7572\ncpu: 92432.48811410456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91705.69293194363,
            "unit": "ns/iter",
            "extra": "iterations: 7640\ncpu: 91706.1910994767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 167725.47025495724,
            "unit": "ns/iter",
            "extra": "iterations: 4236\ncpu: 167716.24173748927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 562364.3082466249,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 562355.3242594057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 462048.6626905769,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 462029.55599734734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 464137.8369781496,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 464135.52021205716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 460620.4606815431,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 460606.7496723449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 308978.65479333565,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 308979.41952506633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 452233.62987012946,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 452228.37662337994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22982.68861116643,
            "unit": "ns/iter",
            "extra": "iterations: 30486\ncpu: 22982.408318572645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 116432.17057356234,
            "unit": "ns/iter",
            "extra": "iterations: 6015\ncpu: 116428.41230257522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93554.34254439187,
            "unit": "ns/iter",
            "extra": "iterations: 7491\ncpu: 93552.71659324497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 94155.62776957137,
            "unit": "ns/iter",
            "extra": "iterations: 7447\ncpu: 94148.36847052524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92658.489039453,
            "unit": "ns/iter",
            "extra": "iterations: 7527\ncpu: 92658.34994021623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 163578.42773620636,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 163573.71375116825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 560835.3151999835,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 560813.4399999926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 456182.4495771191,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 456179.18022120785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 455831.17643229384,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 455837.9557291584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 454939.7160494034,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 454912.800519821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 301200.33433864376,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 301201.29254631867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 448891.7787096896,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 448875.1612903145 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}