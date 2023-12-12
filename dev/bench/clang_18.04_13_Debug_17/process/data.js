window.BENCHMARK_DATA = {
  "lastUpdate": 1702392427843,
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
      }
    ]
  }
}