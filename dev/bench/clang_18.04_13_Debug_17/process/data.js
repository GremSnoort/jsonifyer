window.BENCHMARK_DATA = {
  "lastUpdate": 1702394263488,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-13 18.04 Debug c++-17": [
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
        "date": 1702392426958,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17647.062143182004,
            "unit": "ns/iter",
            "extra": "iterations: 39586\ncpu: 17646.20572929824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 166622.90177352919,
            "unit": "ns/iter",
            "extra": "iterations: 5131\ncpu: 166621.73065679206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 316256.48926101555,
            "unit": "ns/iter",
            "extra": "iterations: 2747\ncpu: 316249.69057153247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 463109.62419701763,
            "unit": "ns/iter",
            "extra": "iterations: 1868\ncpu: 463095.61027837254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 615127.0821052542,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 615101.052631579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 616029.1340000299,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616003.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 733772.2098569337,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 733755.4054054054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 854066.7343173461,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 854040.7749077484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 972285.5413612316,
            "unit": "ns/iter",
            "extra": "iterations: 955\ncpu: 972259.1623036652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14449.957724113314,
            "unit": "ns/iter",
            "extra": "iterations: 48491\ncpu: 14449.316367985826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11876.719578464685,
            "unit": "ns/iter",
            "extra": "iterations: 57599\ncpu: 11876.444035486747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11826.663809169477,
            "unit": "ns/iter",
            "extra": "iterations: 59026\ncpu: 11826.573035611444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11808.931176272625,
            "unit": "ns/iter",
            "extra": "iterations: 59340\ncpu: 11808.731041456036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19715.54804461493,
            "unit": "ns/iter",
            "extra": "iterations: 35415\ncpu: 19714.76775377665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69853.05545104685,
            "unit": "ns/iter",
            "extra": "iterations: 12227\ncpu: 69850.09405414251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 371759.77738978417,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 371752.0296813616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 299268.3750438074,
            "unit": "ns/iter",
            "extra": "iterations: 2853\ncpu: 299250.7886435326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 304055.75071023137,
            "unit": "ns/iter",
            "extra": "iterations: 2816\ncpu: 304047.90482954506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 304406.708616358,
            "unit": "ns/iter",
            "extra": "iterations: 2797\ncpu: 304400.89381480165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 623741.1700000166,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 623736.700000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5196577.4301675465,
            "unit": "ns/iter",
            "extra": "iterations: 179\ncpu: 5196408.379888262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4166300.2017937205,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4166123.318385638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4162635.89686107,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4162560.5381165897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4153414.946188404,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4153228.6995515814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2389948.565891403,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2389833.0749353957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4078170.7685589846,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4070420.960698696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15836674.358209154,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15836235.820895545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6886347.820000082,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6886070.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19613012.981482014,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 19612288.88888892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 76341.97151073837,
            "unit": "ns/iter",
            "extra": "iterations: 11127\ncpu: 76339.77711872003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 415368.8510638462,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 415357.3017408129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 328492.9861378484,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 328477.55102040997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 329179.984230756,
            "unit": "ns/iter",
            "extra": "iterations: 2600\ncpu: 329165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 329429.0880869046,
            "unit": "ns/iter",
            "extra": "iterations: 2577\ncpu: 329420.87698874663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 624120.0719999825,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624109.1999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5250317.644067943,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 5250138.983050844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4216857.245454393,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4216748.181818178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4219930.253393778,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4219795.475113112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4211915.558558504,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4211781.081081102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2435853.6214098646,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2435786.4229764957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4105994.991189444,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4105711.013215871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16173345.030302994,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16173069.696969705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6981019.35000011,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6980637.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 69355.5617959026,
            "unit": "ns/iter",
            "extra": "iterations: 12161\ncpu: 69353.0548474629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 363535.848896424,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 363521.7317487242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 294005.742631946,
            "unit": "ns/iter",
            "extra": "iterations: 2918\ncpu: 293999.2803289937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 297318.08780487935,
            "unit": "ns/iter",
            "extra": "iterations: 2870\ncpu: 297304.8780487806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 294698.56646005705,
            "unit": "ns/iter",
            "extra": "iterations: 2904\ncpu: 294691.97658402316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 559929.1730000005,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559884.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5242320.039325876,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 5242130.337078657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4170665.4215247077,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4170525.1121076085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4179201.3883930375,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4179111.1607142803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4174870.9237669935,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4174800.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2394009.8688945523,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2393904.3701799475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4081389.995594781,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4081286.784140964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6622.009468606009,
            "unit": "ns/iter",
            "extra": "iterations: 105929\ncpu: 6621.837268359014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 43735.96337887805,
            "unit": "ns/iter",
            "extra": "iterations: 16029\ncpu: 43734.71832303914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 34898.53661958255,
            "unit": "ns/iter",
            "extra": "iterations: 20672\ncpu: 34897.987616099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 35026.644124926,
            "unit": "ns/iter",
            "extra": "iterations: 23438\ncpu: 35025.505589214394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 26020.75787240225,
            "unit": "ns/iter",
            "extra": "iterations: 26866\ncpu: 26020.125809573434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 201706.74064479067,
            "unit": "ns/iter",
            "extra": "iterations: 3474\ncpu: 201697.55325273096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 347004.2124352273,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 346995.14837494335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 84980.6051580113,
            "unit": "ns/iter",
            "extra": "iterations: 8259\ncpu: 84979.98547039554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 85029.21337503137,
            "unit": "ns/iter",
            "extra": "iterations: 8314\ncpu: 85026.77411594846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 85106.29980468948,
            "unit": "ns/iter",
            "extra": "iterations: 8192\ncpu: 85104.65087890711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 174486.04405507032,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 174475.869837294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 155157.74051895473,
            "unit": "ns/iter",
            "extra": "iterations: 4509\ncpu: 155155.00110889567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 51940.67340267255,
            "unit": "ns/iter",
            "extra": "iterations: 13460\ncpu: 51938.59583952478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 257009.19646798915,
            "unit": "ns/iter",
            "extra": "iterations: 2718\ncpu: 257003.6791758662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 208849.67710195828,
            "unit": "ns/iter",
            "extra": "iterations: 3354\ncpu: 208840.2206320804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 207128.101895746,
            "unit": "ns/iter",
            "extra": "iterations: 3376\ncpu: 207123.193127963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 207901.98246655404,
            "unit": "ns/iter",
            "extra": "iterations: 3365\ncpu: 207898.2763744446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 363067.42487048503,
            "unit": "ns/iter",
            "extra": "iterations: 1930\ncpu: 363061.24352331297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1472733.4810924325,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1472666.1764705905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1210381.2179931353,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1210330.1038062347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1204000.0429553082,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1203966.151202753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1208448.1522491572,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1208405.3633218217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 770612.5894621224,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 770598.463227213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1202764.383820991,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1202723.7521514508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 51672.91970100325,
            "unit": "ns/iter",
            "extra": "iterations: 13512\ncpu: 51671.89165186529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 256454.9109639597,
            "unit": "ns/iter",
            "extra": "iterations: 2718\ncpu: 256449.1169977888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 210335.691007853,
            "unit": "ns/iter",
            "extra": "iterations: 3314\ncpu: 210317.10923355122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 207348.7156921402,
            "unit": "ns/iter",
            "extra": "iterations: 3352\ncpu: 207338.8424820975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 210121.7812499825,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 210110.06610576884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 362904.62306896114,
            "unit": "ns/iter",
            "extra": "iterations: 1942\ncpu: 362218.434603504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1463755.853556461,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1463632.8451882647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1214369.2812500717,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1214333.680555556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1206725.3595112474,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1206629.6684118705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1212191.3788926664,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1212169.72318337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 764832.0559824407,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 764818.0021953889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1198240.4810997334,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1198181.2714776515 ns\nthreads: 1"
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
        "date": 1702394252292,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18188.770962337447,
            "unit": "ns/iter",
            "extra": "iterations: 39404\ncpu: 18185.458329103647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 165947.35617235105,
            "unit": "ns/iter",
            "extra": "iterations: 5152\ncpu: 165934.375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 313041.371274696,
            "unit": "ns/iter",
            "extra": "iterations: 2785\ncpu: 313024.9910233394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 458591.4631690861,
            "unit": "ns/iter",
            "extra": "iterations: 1887\ncpu: 458586.69846316887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 607858.1240418548,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 607842.5783972121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 608919.9819999748,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608891.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 730241.2100708273,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 730225.2557041701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 842654.2917047127,
            "unit": "ns/iter",
            "extra": "iterations: 1097\ncpu: 842622.7894257067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 960361.0776397457,
            "unit": "ns/iter",
            "extra": "iterations: 966\ncpu: 960353.3126294003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14228.444726578635,
            "unit": "ns/iter",
            "extra": "iterations: 49228\ncpu: 14227.94547818317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11737.480392985477,
            "unit": "ns/iter",
            "extra": "iterations: 59137\ncpu: 11737.506129834139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11741.145299145479,
            "unit": "ns/iter",
            "extra": "iterations: 59553\ncpu: 11739.868688395207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11749.675190698497,
            "unit": "ns/iter",
            "extra": "iterations: 59518\ncpu: 11748.430726838946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20119.54612072578,
            "unit": "ns/iter",
            "extra": "iterations: 35071\ncpu: 20119.583131362077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 68544.82761398694,
            "unit": "ns/iter",
            "extra": "iterations: 12414\ncpu: 68542.02513291441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 378073.61548672325,
            "unit": "ns/iter",
            "extra": "iterations: 2260\ncpu: 378048.36283185886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 297243.6214335645,
            "unit": "ns/iter",
            "extra": "iterations: 2874\ncpu: 297207.028531663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 300034.9259389555,
            "unit": "ns/iter",
            "extra": "iterations: 2849\ncpu: 300019.51561951585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 292655.6353305511,
            "unit": "ns/iter",
            "extra": "iterations: 2904\ncpu: 292629.924242425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 627318.73000007,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 627261.9999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5070204.01092853,
            "unit": "ns/iter",
            "extra": "iterations: 183\ncpu: 5069736.612021852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4106062.048672316,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4105627.8761061924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4105959.8157893987,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4105807.8947368506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4111874.6991150654,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4111282.7433628268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2357284.822335144,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2357082.23350254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3991452.8836209816,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 3991254.31034483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15611103.382353269,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15610627.941176489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6947861.119999742,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6947866.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19619460.703703832,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 19618675.925925925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 79240.6807738778,
            "unit": "ns/iter",
            "extra": "iterations: 10751\ncpu: 79239.79164728869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 408527.49403339374,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 408515.9427207622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 328662.4748560373,
            "unit": "ns/iter",
            "extra": "iterations: 2605\ncpu: 328662.9558541264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 328401.1158864358,
            "unit": "ns/iter",
            "extra": "iterations: 2606\ncpu: 328402.1488871851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 328901.8325009745,
            "unit": "ns/iter",
            "extra": "iterations: 2603\ncpu: 328885.09412216616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 630395.488999966,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 630375.0000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5162467.855555835,
            "unit": "ns/iter",
            "extra": "iterations: 180\ncpu: 5162306.666666675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4162747.1294641993,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4162709.37500001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4157475.3392857085,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4157437.053571427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4169647.1964287288,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4169572.3214285923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2397456.209302221,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2397422.9974160227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4062742.000000008,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4062556.7685589613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15883352.53731331,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15882358.208955232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6840241.099999957,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6839635.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 68959.63079564602,
            "unit": "ns/iter",
            "extra": "iterations: 12229\ncpu: 68953.54485239978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 357730.9324097729,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 357707.17884131207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 298371.1943095265,
            "unit": "ns/iter",
            "extra": "iterations: 2882\ncpu: 298358.5010409433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 292365.2885076976,
            "unit": "ns/iter",
            "extra": "iterations: 2915\ncpu: 292346.2092624374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 289877.9616038018,
            "unit": "ns/iter",
            "extra": "iterations: 2943\ncpu: 289862.21542643633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 566007.4830000212,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565981.2999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5118397.6648353515,
            "unit": "ns/iter",
            "extra": "iterations: 182\ncpu: 5118368.131868119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4119908.4867259515,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4119868.5840708013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4131760.4867255385,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4131688.053097357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4151874.966824809,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4151592.8909952543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2371036.9338423265,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2370884.2239185655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4024893.6666664016,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4024890.9090908924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6690.986799373385,
            "unit": "ns/iter",
            "extra": "iterations: 104692\ncpu: 6690.90379398614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 44462.424936222254,
            "unit": "ns/iter",
            "extra": "iterations: 15680\ncpu: 44461.383928571195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 35336.41296379847,
            "unit": "ns/iter",
            "extra": "iterations: 19917\ncpu: 35336.16508510331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 35086.837427013386,
            "unit": "ns/iter",
            "extra": "iterations: 20723\ncpu: 35086.174781643545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 25999.477493214705,
            "unit": "ns/iter",
            "extra": "iterations: 26903\ncpu: 25999.561387206013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 200321.6096866053,
            "unit": "ns/iter",
            "extra": "iterations: 3510\ncpu: 200319.20227920316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 339429.84164358926,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 339424.37673130084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 83834.84287886036,
            "unit": "ns/iter",
            "extra": "iterations: 7892\ncpu: 83830.96806893157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 84068.13798896606,
            "unit": "ns/iter",
            "extra": "iterations: 8334\ncpu: 84066.51067914664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 83520.30521032332,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 83520.44694072554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 171216.3256723856,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 171209.90220048916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 159314.65234198395,
            "unit": "ns/iter",
            "extra": "iterations: 4398\ncpu: 159314.9840836726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 51396.81017424422,
            "unit": "ns/iter",
            "extra": "iterations: 13544\ncpu: 51391.84140578894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 257042.11221122518,
            "unit": "ns/iter",
            "extra": "iterations: 2727\ncpu: 257008.43417675127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 207615.38712550042,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 207601.80955206326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 206968.9931972535,
            "unit": "ns/iter",
            "extra": "iterations: 3381\ncpu: 206936.7051168287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 207344.80836547198,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 207342.68762978577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 376788.3446236679,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 376781.6666666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1461831.1774530548,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1461799.7912317296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1265133.4886163606,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1265096.3222416777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1205505.9498269951,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1205506.9204152187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1209755.3806227546,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1209724.9134948244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 768573.8836442799,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 768574.3139407398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1200380.3835617038,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1200347.2602739688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 51735.14322800247,
            "unit": "ns/iter",
            "extra": "iterations: 13482\ncpu: 51732.76220145366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 256596.94283618202,
            "unit": "ns/iter",
            "extra": "iterations: 2729\ncpu: 256594.57676804686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 210531.4134615523,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 210527.34374999735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 208670.09754621293,
            "unit": "ns/iter",
            "extra": "iterations: 3301\ncpu: 208670.19085125817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 208896.38711599386,
            "unit": "ns/iter",
            "extra": "iterations: 3353\ncpu: 208891.321204889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 372846.97761193314,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 372842.8571428613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1449306.6239669705,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1449267.1487603076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1209767.1493056023,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1209748.9583333428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1201622.061962091,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1201593.9759036077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1214821.4429066605,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1214806.2283736975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 765907.623362431,
            "unit": "ns/iter",
            "extra": "iterations: 916\ncpu: 765882.751091698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1193023.3037542896,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1192968.941979534 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}