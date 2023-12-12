window.BENCHMARK_DATA = {
  "lastUpdate": 1702394274218,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-16 20.04 Debug c++-17": [
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
        "date": 1702394273273,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6895.611721863907,
            "unit": "ns/iter",
            "extra": "iterations: 101878\ncpu: 6895.317929287972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58086.71287690123,
            "unit": "ns/iter",
            "extra": "iterations: 14095\ncpu: 58083.92337708407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91137.92352628753,
            "unit": "ns/iter",
            "extra": "iterations: 9415\ncpu: 91132.45884227296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 132780.92509652436,
            "unit": "ns/iter",
            "extra": "iterations: 6475\ncpu: 132779.42857142864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 174987.5727547912,
            "unit": "ns/iter",
            "extra": "iterations: 4955\ncpu: 174977.2956609486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 215652.58705355483,
            "unit": "ns/iter",
            "extra": "iterations: 4032\ncpu: 215638.6656746031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 256900.6159999979,
            "unit": "ns/iter",
            "extra": "iterations: 3375\ncpu: 256883.82222222222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 298326.56760469003,
            "unit": "ns/iter",
            "extra": "iterations: 2914\ncpu: 298318.8057652711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 339277.5914230245,
            "unit": "ns/iter",
            "extra": "iterations: 2565\ncpu: 339260.1169590642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5696.178200873121,
            "unit": "ns/iter",
            "extra": "iterations: 123849\ncpu: 5695.85705173235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4620.01585897193,
            "unit": "ns/iter",
            "extra": "iterations: 151460\ncpu: 4619.82371583256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4609.79401947413,
            "unit": "ns/iter",
            "extra": "iterations: 151893\ncpu: 4609.62848847544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4625.958674827102,
            "unit": "ns/iter",
            "extra": "iterations: 150320\ncpu: 4625.748403406059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7442.672338839202,
            "unit": "ns/iter",
            "extra": "iterations: 93850\ncpu: 7442.378263185931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24574.25460464985,
            "unit": "ns/iter",
            "extra": "iterations: 33173\ncpu: 24573.65327223946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 116465.88966175653,
            "unit": "ns/iter",
            "extra": "iterations: 7332\ncpu: 116461.25204582664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 89483.00389596728,
            "unit": "ns/iter",
            "extra": "iterations: 9497\ncpu: 89478.38264715183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 90862.25134091488,
            "unit": "ns/iter",
            "extra": "iterations: 9322\ncpu: 90858.65694057071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 87185.23555464359,
            "unit": "ns/iter",
            "extra": "iterations: 9709\ncpu: 87182.74796580501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 189505.02606073802,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 189498.51389188002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1615950.2543858476,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1615853.8596491262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1273912.663461405,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1273815.5219780204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1272505.2757202317,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1272441.2894375876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1254318.3486487838,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1254256.3513513496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 705288.6236476453,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 705254.5595054106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1230007.9521912585,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 1229839.5750332014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 30644.837419546046,
            "unit": "ns/iter",
            "extra": "iterations: 26879\ncpu: 30643.07823951792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 150307.80314411785,
            "unit": "ns/iter",
            "extra": "iterations: 5725\ncpu: 150301.0655021832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 117682.49224647606,
            "unit": "ns/iter",
            "extra": "iterations: 7287\ncpu: 117678.4959516947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 115591.46874156962,
            "unit": "ns/iter",
            "extra": "iterations: 7422\ncpu: 115580.94853139353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 113695.85395809573,
            "unit": "ns/iter",
            "extra": "iterations: 7491\ncpu: 113688.8265919102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 211696.62947524255,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 211672.8298185391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1656198.2313166056,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1656122.2419928848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1291941.0166898314,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1291895.2712100132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1310768.630985998,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1310718.591549301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1281739.9065933959,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1281616.2087912115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 737443.161111128,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 737396.111111112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1266715.8722825148,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1266610.3260869535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6177038.476821599,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6176662.91390725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2942920.0126183466,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2942793.059936922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22548.513717081976,
            "unit": "ns/iter",
            "extra": "iterations: 36378\ncpu: 22546.602342074777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 129663.65291115292,
            "unit": "ns/iter",
            "extra": "iterations: 6664\ncpu: 129659.39375750317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 93598.03676552103,
            "unit": "ns/iter",
            "extra": "iterations: 9139\ncpu: 93594.45234708326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 90654.93574382227,
            "unit": "ns/iter",
            "extra": "iterations: 9431\ncpu: 90648.0224790581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 86193.16545673832,
            "unit": "ns/iter",
            "extra": "iterations: 9918\ncpu: 86187.19499899186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 181903.90048288775,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 181887.38190216254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1629829.6631761058,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1629750.2617801027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1276071.711354315,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1275910.533515733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1268743.0298507614,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1268681.5468114016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1253309.555854599,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 1253214.5356662204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 715860.0567920462,
            "unit": "ns/iter",
            "extra": "iterations: 1303\ncpu: 715818.4957789743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1233529.6278146512,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1233437.8807947075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2676.304985494265,
            "unit": "ns/iter",
            "extra": "iterations: 261278\ncpu: 2676.0534756083457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16559.339048972775,
            "unit": "ns/iter",
            "extra": "iterations: 42165\ncpu: 16558.833155460565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13680.964918809063,
            "unit": "ns/iter",
            "extra": "iterations: 51053\ncpu: 13680.802303488474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13743.75513006735,
            "unit": "ns/iter",
            "extra": "iterations: 50974\ncpu: 13742.454977047084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10338.264991273118,
            "unit": "ns/iter",
            "extra": "iterations: 67606\ncpu: 10337.240777445857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64729.201769751155,
            "unit": "ns/iter",
            "extra": "iterations: 10849\ncpu: 64721.24619780638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115013.49271504003,
            "unit": "ns/iter",
            "extra": "iterations: 6383\ncpu: 115005.23264922471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28310.430985005558,
            "unit": "ns/iter",
            "extra": "iterations: 24741\ncpu: 28308.031203265626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27791.634445770283,
            "unit": "ns/iter",
            "extra": "iterations: 25170\ncpu: 27789.153754469542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27802.375990131375,
            "unit": "ns/iter",
            "extra": "iterations: 25123\ncpu: 27799.800979182313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54680.044557558846,
            "unit": "ns/iter",
            "extra": "iterations: 12770\ncpu: 54678.74706343006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53171.97135534739,
            "unit": "ns/iter",
            "extra": "iterations: 13266\ncpu: 53169.02608171288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19623.25998330844,
            "unit": "ns/iter",
            "extra": "iterations: 33556\ncpu: 19620.938133269836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 98073.9438710647,
            "unit": "ns/iter",
            "extra": "iterations: 7073\ncpu: 97964.48465997438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 80281.1654022986,
            "unit": "ns/iter",
            "extra": "iterations: 8700\ncpu: 80278.19540229828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 80939.40769944742,
            "unit": "ns/iter",
            "extra": "iterations: 8624\ncpu: 80934.84461966656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 80199.02844688664,
            "unit": "ns/iter",
            "extra": "iterations: 8718\ncpu: 80198.16471667764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123294.12861170582,
            "unit": "ns/iter",
            "extra": "iterations: 5676\ncpu: 123283.47427765875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 480342.12954075617,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 480330.9801233717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 399886.16780824674,
            "unit": "ns/iter",
            "extra": "iterations: 1752\ncpu: 399869.1780821885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 399520.60148659156,
            "unit": "ns/iter",
            "extra": "iterations: 1749\ncpu: 399479.3596340721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 400988.7991967837,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 400947.7337923168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 261108.86040416965,
            "unit": "ns/iter",
            "extra": "iterations: 2672\ncpu: 261085.5913173659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 392062.83491354086,
            "unit": "ns/iter",
            "extra": "iterations: 1793\ncpu: 392032.1807027308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20468.29423127451,
            "unit": "ns/iter",
            "extra": "iterations: 34167\ncpu: 20466.060818918995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 100411.36713036973,
            "unit": "ns/iter",
            "extra": "iterations: 6973\ncpu: 100402.82518284864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 84247.38381044203,
            "unit": "ns/iter",
            "extra": "iterations: 8314\ncpu: 84245.56170315234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84610.90230928133,
            "unit": "ns/iter",
            "extra": "iterations: 8271\ncpu: 84603.7601257413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85493.18900011576,
            "unit": "ns/iter",
            "extra": "iterations: 8291\ncpu: 85492.2325413107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 131519.81061837065,
            "unit": "ns/iter",
            "extra": "iterations: 4916\ncpu: 131512.65256306098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 488830.17725048726,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 488808.37404046906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 395042.94416245254,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 395011.4495205856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 400502.8518306663,
            "unit": "ns/iter",
            "extra": "iterations: 1748\ncpu: 400498.6842105236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 403405.39034092036,
            "unit": "ns/iter",
            "extra": "iterations: 1760\ncpu: 403387.89772727585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 266834.09514563094,
            "unit": "ns/iter",
            "extra": "iterations: 2575\ncpu: 266827.22330097196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 396091.97904870304,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 396080.35107587255 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}