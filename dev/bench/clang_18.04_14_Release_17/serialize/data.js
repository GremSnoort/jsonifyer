window.BENCHMARK_DATA = {
  "lastUpdate": 1705962094642,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-14 18.04 Release c++-17": [
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
        "date": 1702490320190,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 712.0460011806049,
            "unit": "ns/iter",
            "extra": "iterations: 982540\ncpu: 712.034420990494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10913.6625134729,
            "unit": "ns/iter",
            "extra": "iterations: 76086\ncpu: 10913.50576978682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24438.40343699087,
            "unit": "ns/iter",
            "extra": "iterations: 34216\ncpu: 24437.324643441665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38590.809171322566,
            "unit": "ns/iter",
            "extra": "iterations: 21480\ncpu: 38590.05121042831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47973.30639932956,
            "unit": "ns/iter",
            "extra": "iterations: 16658\ncpu: 47972.66178412777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60400.56898873178,
            "unit": "ns/iter",
            "extra": "iterations: 14111\ncpu: 60398.9015661541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60042.25110000334,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60041.499999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68761.32805501937,
            "unit": "ns/iter",
            "extra": "iterations: 12504\ncpu: 68759.00511836211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81187.63269907198,
            "unit": "ns/iter",
            "extra": "iterations: 11089\ncpu: 81184.17350527557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 584.9616208430571,
            "unit": "ns/iter",
            "extra": "iterations: 1197056\ncpu: 584.931114333833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 489.8959396941131,
            "unit": "ns/iter",
            "extra": "iterations: 1427922\ncpu: 489.8715055864397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 476.1287578543524,
            "unit": "ns/iter",
            "extra": "iterations: 1470520\ncpu: 476.1249761988955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 489.5081015907859,
            "unit": "ns/iter",
            "extra": "iterations: 1378433\ncpu: 489.48697542789563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 959.045904915776,
            "unit": "ns/iter",
            "extra": "iterations: 730510\ncpu: 958.9968652037633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4292.887684297589,
            "unit": "ns/iter",
            "extra": "iterations: 187062\ncpu: 4292.611005976636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20213.98633488108,
            "unit": "ns/iter",
            "extra": "iterations: 40468\ncpu: 20213.299397054456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16193.809704799634,
            "unit": "ns/iter",
            "extra": "iterations: 50779\ncpu: 16193.194036904999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15376.71913660926,
            "unit": "ns/iter",
            "extra": "iterations: 53510\ncpu: 15376.15398990842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15998.540908039271,
            "unit": "ns/iter",
            "extra": "iterations: 51848\ncpu: 15997.30944298724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 49276.24104788078,
            "unit": "ns/iter",
            "extra": "iterations: 17063\ncpu: 49275.871769325306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 454989.7629937535,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 454970.0103950099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 368077.19897958933,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 368069.8129251697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 364458.59856477124,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 364445.6732798647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 371752.139365319,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 371752.1440823325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 228458.22685788322,
            "unit": "ns/iter",
            "extra": "iterations: 3835\ncpu: 228449.4915254235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 372251.4620954443,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 372231.2606473585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1892911.116803149,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1892705.12295082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 737534.3426517178,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 737515.4153354611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2524041.602179926,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2523636.2397820214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4308.255915317636,
            "unit": "ns/iter",
            "extra": "iterations: 186296\ncpu: 4308.117726628581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20231.12607839967,
            "unit": "ns/iter",
            "extra": "iterations: 41149\ncpu: 20230.987387299745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16016.795438596893,
            "unit": "ns/iter",
            "extra": "iterations: 51300\ncpu: 16016.475633528384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15291.635096922795,
            "unit": "ns/iter",
            "extra": "iterations: 53754\ncpu: 15291.217397775094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15790.04902112741,
            "unit": "ns/iter",
            "extra": "iterations: 51590\ncpu: 15789.819732506376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 49387.635937318555,
            "unit": "ns/iter",
            "extra": "iterations: 16846\ncpu: 49387.4569630773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 472642.5141612522,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 472633.22440087027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 381452.82216383266,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 381445.1598773544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 379217.4909169595,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 379214.1435986154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 378411.3421394712,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 378401.9488956241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227068.18513724027,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 227061.47074055008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 382187.88010425615,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 382178.97480451764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1918795.2154810922,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1918767.9916317938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 759148.1892562618,
            "unit": "ns/iter",
            "extra": "iterations: 1210\ncpu: 759132.0661157033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4411.974103891653,
            "unit": "ns/iter",
            "extra": "iterations: 182344\ncpu: 4411.859452463488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20065.370230578745,
            "unit": "ns/iter",
            "extra": "iterations: 41331\ncpu: 20064.86656504805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16003.147768722976,
            "unit": "ns/iter",
            "extra": "iterations: 51540\ncpu: 16002.9899107489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15296.11345416892,
            "unit": "ns/iter",
            "extra": "iterations: 54013\ncpu: 15295.821376335318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15784.908438988972,
            "unit": "ns/iter",
            "extra": "iterations: 52293\ncpu: 15784.621268621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 49449.69362052533,
            "unit": "ns/iter",
            "extra": "iterations: 16992\ncpu: 49449.72928436883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 460764.39605543023,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 460746.8017057582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380184.9457805094,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 380170.74770441593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 376953.27813991986,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 376945.5888744031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 381060.000880675,
            "unit": "ns/iter",
            "extra": "iterations: 2271\ncpu: 381052.0475561442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 234310.05608463913,
            "unit": "ns/iter",
            "extra": "iterations: 3780\ncpu: 234303.67724867573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 374697.7974683597,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 374684.4609340896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 300.61590745567287,
            "unit": "ns/iter",
            "extra": "iterations: 2327965\ncpu: 300.61272398854675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1607.9229340762838,
            "unit": "ns/iter",
            "extra": "iterations: 435108\ncpu: 1607.8840195997282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1252.3444484289776,
            "unit": "ns/iter",
            "extra": "iterations: 560499\ncpu: 1252.344607216065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1240.721983672576,
            "unit": "ns/iter",
            "extra": "iterations: 565920\ncpu: 1240.723423805482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1028.420494072311,
            "unit": "ns/iter",
            "extra": "iterations: 681641\ncpu: 1028.4032210503667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8297.959078889917,
            "unit": "ns/iter",
            "extra": "iterations: 84333\ncpu: 8297.954537369824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18913.41249323923,
            "unit": "ns/iter",
            "extra": "iterations: 36980\ncpu: 18912.682531098042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4481.871687016197,
            "unit": "ns/iter",
            "extra": "iterations: 156430\ncpu: 4481.773317138696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4451.992367964637,
            "unit": "ns/iter",
            "extra": "iterations: 157363\ncpu: 4451.939147067594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4485.65532018794,
            "unit": "ns/iter",
            "extra": "iterations: 155643\ncpu: 4485.595240389831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9522.755337105156,
            "unit": "ns/iter",
            "extra": "iterations: 74057\ncpu: 9522.421918252156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 7650.9677391192245,
            "unit": "ns/iter",
            "extra": "iterations: 91628\ncpu: 7650.8698214519445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3178.6701441656346,
            "unit": "ns/iter",
            "extra": "iterations: 219123\ncpu: 3178.581435997119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15903.333865485309,
            "unit": "ns/iter",
            "extra": "iterations: 43847\ncpu: 15903.33660227612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12665.05551328032,
            "unit": "ns/iter",
            "extra": "iterations: 55194\ncpu: 12664.588542232854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12516.099712556557,
            "unit": "ns/iter",
            "extra": "iterations: 56011\ncpu: 12515.72726785827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13006.324176645645,
            "unit": "ns/iter",
            "extra": "iterations: 53440\ncpu: 13005.81399700606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28174.208662216584,
            "unit": "ns/iter",
            "extra": "iterations: 24705\ncpu: 28174.211698037096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100026.73487113064,
            "unit": "ns/iter",
            "extra": "iterations: 7023\ncpu: 100026.79766481629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85497.13969605474,
            "unit": "ns/iter",
            "extra": "iterations: 8225\ncpu: 85495.22188449881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85045.06283488889,
            "unit": "ns/iter",
            "extra": "iterations: 8212\ncpu: 85042.19434973282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85376.72141550176,
            "unit": "ns/iter",
            "extra": "iterations: 8195\ncpu: 85374.92373398558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55262.62381777579,
            "unit": "ns/iter",
            "extra": "iterations: 12688\ncpu: 55261.349306431075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86357.12305238939,
            "unit": "ns/iter",
            "extra": "iterations: 8151\ncpu: 86357.13409397767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3151.930387137324,
            "unit": "ns/iter",
            "extra": "iterations: 222660\ncpu: 3151.851253031539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15659.879728005379,
            "unit": "ns/iter",
            "extra": "iterations: 44707\ncpu: 15659.549958619436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12453.476803438822,
            "unit": "ns/iter",
            "extra": "iterations: 56323\ncpu: 12453.063579709877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12290.68230494647,
            "unit": "ns/iter",
            "extra": "iterations: 56869\ncpu: 12290.675060226296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12719.82726131756,
            "unit": "ns/iter",
            "extra": "iterations: 54979\ncpu: 12719.438330999163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28105.230645873176,
            "unit": "ns/iter",
            "extra": "iterations: 24943\ncpu: 28104.321853826186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97418.45637676805,
            "unit": "ns/iter",
            "extra": "iterations: 7198\ncpu: 97415.67101972841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83348.85879546044,
            "unit": "ns/iter",
            "extra": "iterations: 8385\ncpu: 83347.06022659414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82715.22110493717,
            "unit": "ns/iter",
            "extra": "iterations: 8453\ncpu: 82715.2608541352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85536.8119331651,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 85532.99522672928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55577.655040919475,
            "unit": "ns/iter",
            "extra": "iterations: 12587\ncpu: 55574.211488042536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84897.74891304676,
            "unit": "ns/iter",
            "extra": "iterations: 8280\ncpu: 84894.97584541059 ns\nthreads: 1"
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
        "date": 1702492952644,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 708.7512647323264,
            "unit": "ns/iter",
            "extra": "iterations: 986177\ncpu: 708.7005679507837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10992.398180979542,
            "unit": "ns/iter",
            "extra": "iterations: 75865\ncpu: 10991.594279311936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24503.7481542261,
            "unit": "ns/iter",
            "extra": "iterations: 34132\ncpu: 24501.810617602256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40056.07372199071,
            "unit": "ns/iter",
            "extra": "iterations: 20618\ncpu: 40054.13716170338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48574.877224308664,
            "unit": "ns/iter",
            "extra": "iterations: 16241\ncpu: 48571.966011945085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50501.248900002334,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50494.81 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59958.12380000416,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59955.810000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69484.72143199312,
            "unit": "ns/iter",
            "extra": "iterations: 12514\ncpu: 69481.96420009588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79528.39828654884,
            "unit": "ns/iter",
            "extra": "iterations: 10972\ncpu: 79524.31644185202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 588.2650759448319,
            "unit": "ns/iter",
            "extra": "iterations: 1189942\ncpu: 588.2343004953188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 490.6293631458075,
            "unit": "ns/iter",
            "extra": "iterations: 1422225\ncpu: 490.6060574100441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 477.20831567370425,
            "unit": "ns/iter",
            "extra": "iterations: 1467566\ncpu: 477.1871248039269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 486.1545316586141,
            "unit": "ns/iter",
            "extra": "iterations: 1439815\ncpu: 486.12842622142426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 950.0951862032188,
            "unit": "ns/iter",
            "extra": "iterations: 737796\ncpu: 950.06980249283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4290.4168643225785,
            "unit": "ns/iter",
            "extra": "iterations: 182978\ncpu: 4290.157833182128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20262.605889015587,
            "unit": "ns/iter",
            "extra": "iterations: 40618\ncpu: 20260.574129696186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16309.054960289159,
            "unit": "ns/iter",
            "extra": "iterations: 50491\ncpu: 16307.63898516565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15472.202114847772,
            "unit": "ns/iter",
            "extra": "iterations: 53148\ncpu: 15471.291487920522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16044.23378412459,
            "unit": "ns/iter",
            "extra": "iterations: 51539\ncpu: 16043.099400453999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48246.03389138146,
            "unit": "ns/iter",
            "extra": "iterations: 17143\ncpu: 48243.7146357115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 471306.7367325634,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 471199.8439125921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 370223.58960269135,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 370211.0735418416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 366568.0598398392,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 366545.5962916143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 372620.71276593796,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 372591.4893617032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 229029.8204391065,
            "unit": "ns/iter",
            "extra": "iterations: 3826\ncpu: 229018.8970203866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 375422.9106677934,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 375388.2046834358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1907104.3706004824,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1906966.2525879964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 764512.0416666531,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 764444.526143793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2539652.466850839,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2539501.65745856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4313.560002838517,
            "unit": "ns/iter",
            "extra": "iterations: 183183\ncpu: 4313.354405157682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20481.32500373983,
            "unit": "ns/iter",
            "extra": "iterations: 40098\ncpu: 20481.046436231274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16115.149123151332,
            "unit": "ns/iter",
            "extra": "iterations: 51092\ncpu: 16114.747905738739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15397.438948993931,
            "unit": "ns/iter",
            "extra": "iterations: 53701\ncpu: 15396.938604495233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15916.151616175177,
            "unit": "ns/iter",
            "extra": "iterations: 51294\ncpu: 15915.49888875895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 49191.550460348684,
            "unit": "ns/iter",
            "extra": "iterations: 16835\ncpu: 49187.692307692494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 472388.71094172925,
            "unit": "ns/iter",
            "extra": "iterations: 1837\ncpu: 472365.6505171499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 397616.6000000043,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 397584.3303571417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 379470.99169217766,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 379457.71753388696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 378508.57995640987,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 378497.7342047934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227571.71804801436,
            "unit": "ns/iter",
            "extra": "iterations: 3873\ncpu: 227477.20113606952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 379276.35967184044,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 379271.2435233162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1919229.063025127,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1919153.7815126076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 750731.8704453246,
            "unit": "ns/iter",
            "extra": "iterations: 1235\ncpu: 750709.5546558686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4430.303387729889,
            "unit": "ns/iter",
            "extra": "iterations: 182364\ncpu: 4429.89460639164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20079.430989395587,
            "unit": "ns/iter",
            "extra": "iterations: 41298\ncpu: 20079.17816843434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16050.45062850615,
            "unit": "ns/iter",
            "extra": "iterations: 51710\ncpu: 16049.988396828485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15334.172826248987,
            "unit": "ns/iter",
            "extra": "iterations: 54008\ncpu: 15333.969041623546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15919.509883998664,
            "unit": "ns/iter",
            "extra": "iterations: 52155\ncpu: 15918.901351740064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 49105.73737016579,
            "unit": "ns/iter",
            "extra": "iterations: 16944\ncpu: 49104.520774315606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 455664.9296508514,
            "unit": "ns/iter",
            "extra": "iterations: 1919\ncpu: 455658.52006253443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 373956.12109373626,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 373937.8038194432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370938.35620499164,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 370928.12367640855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 378444.80122324877,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 378430.62472695636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 230614.24828858848,
            "unit": "ns/iter",
            "extra": "iterations: 3798\ncpu: 230609.95260663476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 374315.8403979265,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 374298.7889273365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 300.68392198011276,
            "unit": "ns/iter",
            "extra": "iterations: 2327457\ncpu: 300.6825045532545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1659.6276599534203,
            "unit": "ns/iter",
            "extra": "iterations: 421295\ncpu: 1659.5815283827233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1230.029675212772,
            "unit": "ns/iter",
            "extra": "iterations: 557873\ncpu: 1230.012924088459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1218.565920523899,
            "unit": "ns/iter",
            "extra": "iterations: 572902\ncpu: 1218.4848368481887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1047.6969541238136,
            "unit": "ns/iter",
            "extra": "iterations: 667427\ncpu: 1047.6826679172373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8186.217171303773,
            "unit": "ns/iter",
            "extra": "iterations: 85573\ncpu: 8186.104261858243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19434.72067426313,
            "unit": "ns/iter",
            "extra": "iterations: 36069\ncpu: 19434.239929024854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4499.366679282587,
            "unit": "ns/iter",
            "extra": "iterations: 155891\ncpu: 4499.090390080286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4443.143538417866,
            "unit": "ns/iter",
            "extra": "iterations: 157268\ncpu: 4443.099676984544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4490.421168440285,
            "unit": "ns/iter",
            "extra": "iterations: 155883\ncpu: 4490.293361046393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9479.968601823726,
            "unit": "ns/iter",
            "extra": "iterations: 73603\ncpu: 9479.875820279109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8491.722129885773,
            "unit": "ns/iter",
            "extra": "iterations: 82427\ncpu: 8491.2370946413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3230.412055766013,
            "unit": "ns/iter",
            "extra": "iterations: 218269\ncpu: 3230.3744462108284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16026.678517467613,
            "unit": "ns/iter",
            "extra": "iterations: 43682\ncpu: 16026.491461013726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12844.77796725355,
            "unit": "ns/iter",
            "extra": "iterations: 54537\ncpu: 12844.626583787012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12666.457533355397,
            "unit": "ns/iter",
            "extra": "iterations: 55314\ncpu: 12666.314133853803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13260.730845498765,
            "unit": "ns/iter",
            "extra": "iterations: 52951\ncpu: 13259.90632849249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28444.97886033209,
            "unit": "ns/iter",
            "extra": "iterations: 24551\ncpu: 28444.71915604299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100528.87537688346,
            "unit": "ns/iter",
            "extra": "iterations: 6965\ncpu: 100524.7523330942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85883.44719184373,
            "unit": "ns/iter",
            "extra": "iterations: 8048\ncpu: 85882.56709741565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85178.20873372827,
            "unit": "ns/iter",
            "extra": "iterations: 8221\ncpu: 85176.46271743189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85569.7318415295,
            "unit": "ns/iter",
            "extra": "iterations: 8178\ncpu: 85566.87454145128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55550.458128078455,
            "unit": "ns/iter",
            "extra": "iterations: 12586\ncpu: 55549.856983950565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85636.23890785096,
            "unit": "ns/iter",
            "extra": "iterations: 8204\ncpu: 85633.02047781557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3125.463465748659,
            "unit": "ns/iter",
            "extra": "iterations: 223790\ncpu: 3125.4309844050135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15813.448122719681,
            "unit": "ns/iter",
            "extra": "iterations: 44133\ncpu: 15812.514444973382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12536.477858689173,
            "unit": "ns/iter",
            "extra": "iterations: 55891\ncpu: 12536.410155481135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12372.500238771832,
            "unit": "ns/iter",
            "extra": "iterations: 56539\ncpu: 12372.406657351527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12758.344779040173,
            "unit": "ns/iter",
            "extra": "iterations: 54693\ncpu: 12757.952571627204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28147.597428686746,
            "unit": "ns/iter",
            "extra": "iterations: 24890\ncpu: 28147.3202089191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99143.02818504834,
            "unit": "ns/iter",
            "extra": "iterations: 7025\ncpu: 99134.50533807962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84486.40414757979,
            "unit": "ns/iter",
            "extra": "iterations: 8294\ncpu: 84485.51965276132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83137.66403633433,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 83134.050693449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84310.48039684749,
            "unit": "ns/iter",
            "extra": "iterations: 8366\ncpu: 84309.5864212297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56624.39125161945,
            "unit": "ns/iter",
            "extra": "iterations: 12368\ncpu: 56623.81144890103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85492.51975609433,
            "unit": "ns/iter",
            "extra": "iterations: 8200\ncpu: 85488.4024390245 ns\nthreads: 1"
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
        "date": 1702504029474,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 729.5650976163269,
            "unit": "ns/iter",
            "extra": "iterations: 964490\ncpu: 729.5533390703897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11034.137620638852,
            "unit": "ns/iter",
            "extra": "iterations: 75432\ncpu: 11034.033301516596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24462.808762127675,
            "unit": "ns/iter",
            "extra": "iterations: 34010\ncpu: 24462.616877388995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38439.77127436676,
            "unit": "ns/iter",
            "extra": "iterations: 21493\ncpu: 38439.845531103165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48902.03360928742,
            "unit": "ns/iter",
            "extra": "iterations: 16186\ncpu: 48900.889657728905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50186.86610000032,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50187.680000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60739.80739998888,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60739.73000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70074.64658298726,
            "unit": "ns/iter",
            "extra": "iterations: 10755\ncpu: 70075.71362157133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79543.3407973789,
            "unit": "ns/iter",
            "extra": "iterations: 10986\ncpu: 79542.85454214452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 591.5669754773171,
            "unit": "ns/iter",
            "extra": "iterations: 1180335\ncpu: 591.5565496236246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 494.61448980845614,
            "unit": "ns/iter",
            "extra": "iterations: 1413283\ncpu: 494.6167894186801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 480.0362561820072,
            "unit": "ns/iter",
            "extra": "iterations: 1445519\ncpu: 480.04495271248635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 490.5702181884067,
            "unit": "ns/iter",
            "extra": "iterations: 1426703\ncpu: 490.5679738530018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 975.6077301771087,
            "unit": "ns/iter",
            "extra": "iterations: 716025\ncpu: 975.6222198945552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4356.49749710365,
            "unit": "ns/iter",
            "extra": "iterations: 182988\ncpu: 4356.409709926337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20362.289917104645,
            "unit": "ns/iter",
            "extra": "iterations: 40653\ncpu: 20362.423437384685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16400.788822821905,
            "unit": "ns/iter",
            "extra": "iterations: 50621\ncpu: 16401.029217123327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15475.300210265608,
            "unit": "ns/iter",
            "extra": "iterations: 53266\ncpu: 15475.513460744174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16252.06366157222,
            "unit": "ns/iter",
            "extra": "iterations: 50847\ncpu: 16252.091568824086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48947.29597599762,
            "unit": "ns/iter",
            "extra": "iterations: 16998\ncpu: 48946.82315566536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 445307.86550309806,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 445300.56468172424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 367776.61427355564,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 367775.78589634586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 363882.55402193347,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 363887.9581151825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 371568.60407813254,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 371566.1002548858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227978.13750328,
            "unit": "ns/iter",
            "extra": "iterations: 3789\ncpu: 227980.2850356297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 367938.129606096,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 367936.5946632791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1895527.6735111645,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1895467.7618069798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 723308.5864197303,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 723290.8179012329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2541869.48493124,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2541744.9315068475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4309.219260616849,
            "unit": "ns/iter",
            "extra": "iterations: 184397\ncpu: 4309.281604364495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20380.052848924384,
            "unit": "ns/iter",
            "extra": "iterations: 40682\ncpu: 20379.634727889526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16343.306624269268,
            "unit": "ns/iter",
            "extra": "iterations: 50632\ncpu: 16342.793095275709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15535.687215168975,
            "unit": "ns/iter",
            "extra": "iterations: 53321\ncpu: 15535.2975375555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 16059.350029313848,
            "unit": "ns/iter",
            "extra": "iterations: 51170\ncpu: 16058.962282587454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48546.92531770659,
            "unit": "ns/iter",
            "extra": "iterations: 17233\ncpu: 48545.19816630912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 466789.9515086133,
            "unit": "ns/iter",
            "extra": "iterations: 1856\ncpu: 466773.11422413855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 380756.1100352275,
            "unit": "ns/iter",
            "extra": "iterations: 2272\ncpu: 380738.3802816905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 378758.29684117826,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 378744.43963652063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 378482.3359307579,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 378479.56709956605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223991.2968107134,
            "unit": "ns/iter",
            "extra": "iterations: 3888\ncpu: 223990.97222222196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 378344.8857018796,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 378331.59495871485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1909731.4088052167,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1909579.8742138473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 737078.5544082314,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 737050.6751389998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4443.175246122932,
            "unit": "ns/iter",
            "extra": "iterations: 182937\ncpu: 4443.024647829576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19955.81101717586,
            "unit": "ns/iter",
            "extra": "iterations: 41517\ncpu: 19954.946166630467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16079.909191112838,
            "unit": "ns/iter",
            "extra": "iterations: 51713\ncpu: 16078.852512907813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14627.654125376748,
            "unit": "ns/iter",
            "extra": "iterations: 56613\ncpu: 14627.108614629196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15571.623600782237,
            "unit": "ns/iter",
            "extra": "iterations: 53244\ncpu: 15570.969498910665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48949.84974332772,
            "unit": "ns/iter",
            "extra": "iterations: 17337\ncpu: 48947.97831228006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 454111.10234990774,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 454107.62402088864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 374951.8012205679,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 374943.3740191819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 369714.88804714597,
            "unit": "ns/iter",
            "extra": "iterations: 2376\ncpu: 369700.7996632992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 377431.33260774205,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 377410.1872006953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 233283.44432690283,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 233273.41973022989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 370922.8839209077,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 370906.87876182253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 326.3546100043897,
            "unit": "ns/iter",
            "extra": "iterations: 2166191\ncpu: 326.34412200955705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1633.9616970700642,
            "unit": "ns/iter",
            "extra": "iterations: 429941\ncpu: 1633.936749460975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1271.2801202669204,
            "unit": "ns/iter",
            "extra": "iterations: 546119\ncpu: 1271.218360833436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1284.0632419907217,
            "unit": "ns/iter",
            "extra": "iterations: 558885\ncpu: 1284.0224733174089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1047.2643105166592,
            "unit": "ns/iter",
            "extra": "iterations: 669001\ncpu: 1047.2120370522616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8209.714304078843,
            "unit": "ns/iter",
            "extra": "iterations: 85570\ncpu: 8209.32920416038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19196.259264336448,
            "unit": "ns/iter",
            "extra": "iterations: 36484\ncpu: 19196.50257647169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4539.263797224669,
            "unit": "ns/iter",
            "extra": "iterations: 153944\ncpu: 4539.117471288274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4455.068220608271,
            "unit": "ns/iter",
            "extra": "iterations: 157020\ncpu: 4454.882180613902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4525.220988802115,
            "unit": "ns/iter",
            "extra": "iterations: 154854\ncpu: 4524.969971715322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9724.86090513311,
            "unit": "ns/iter",
            "extra": "iterations: 71879\ncpu: 9724.343688699204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8586.585834201793,
            "unit": "ns/iter",
            "extra": "iterations: 81605\ncpu: 8586.227559585835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3203.650510321028,
            "unit": "ns/iter",
            "extra": "iterations: 218490\ncpu: 3203.5072543366264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15967.520776762129,
            "unit": "ns/iter",
            "extra": "iterations: 43823\ncpu: 15966.848458571983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12818.765571664495,
            "unit": "ns/iter",
            "extra": "iterations: 54490\ncpu: 12818.757570196456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12529.202883809277,
            "unit": "ns/iter",
            "extra": "iterations: 56037\ncpu: 12529.17358174048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12969.772323174031,
            "unit": "ns/iter",
            "extra": "iterations: 53655\ncpu: 12969.253564439365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28369.28064058328,
            "unit": "ns/iter",
            "extra": "iterations: 24665\ncpu: 28368.051895398257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100236.64622157408,
            "unit": "ns/iter",
            "extra": "iterations: 6815\ncpu: 100230.33015407044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85948.12434153917,
            "unit": "ns/iter",
            "extra": "iterations: 8163\ncpu: 85944.28518926984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84444.97833152734,
            "unit": "ns/iter",
            "extra": "iterations: 8307\ncpu: 84442.14517876499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85285.77253898742,
            "unit": "ns/iter",
            "extra": "iterations: 8208\ncpu: 85286.93957115035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56306.799499553366,
            "unit": "ns/iter",
            "extra": "iterations: 12389\ncpu: 56303.89861974407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85938.14780144393,
            "unit": "ns/iter",
            "extra": "iterations: 8119\ncpu: 85931.56792708473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3160.8620280514638,
            "unit": "ns/iter",
            "extra": "iterations: 221661\ncpu: 3160.6601973283578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15801.004545763446,
            "unit": "ns/iter",
            "extra": "iterations: 44217\ncpu: 15800.151525431544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12498.603619862139,
            "unit": "ns/iter",
            "extra": "iterations: 55969\ncpu: 12498.592077757392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12269.193030663486,
            "unit": "ns/iter",
            "extra": "iterations: 57136\ncpu: 12269.21380565665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12696.081431215256,
            "unit": "ns/iter",
            "extra": "iterations: 55114\ncpu: 12696.064520811515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27885.92194244613,
            "unit": "ns/iter",
            "extra": "iterations: 25020\ncpu: 27885.70743405285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99233.99586835451,
            "unit": "ns/iter",
            "extra": "iterations: 7019\ncpu: 99235.16170394645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84585.03465346062,
            "unit": "ns/iter",
            "extra": "iterations: 8282\ncpu: 84586.09031634855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83707.23181655601,
            "unit": "ns/iter",
            "extra": "iterations: 8373\ncpu: 83706.22238146499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85028.36589783008,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 85029.33220625394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56168.56446301398,
            "unit": "ns/iter",
            "extra": "iterations: 12449\ncpu: 56166.551530242985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85194.45705520757,
            "unit": "ns/iter",
            "extra": "iterations: 8150\ncpu: 85195.11656441707 ns\nthreads: 1"
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
        "date": 1705575645328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 715.9051945139629,
            "unit": "ns/iter",
            "extra": "iterations: 976357\ncpu: 715.9122124386879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11062.195678904976,
            "unit": "ns/iter",
            "extra": "iterations: 75629\ncpu: 11061.72499966944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24817.706954520174,
            "unit": "ns/iter",
            "extra": "iterations: 33906\ncpu: 24816.817082522262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39553.459440784936,
            "unit": "ns/iter",
            "extra": "iterations: 21709\ncpu: 39552.49896356351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49687.90335908222,
            "unit": "ns/iter",
            "extra": "iterations: 16701\ncpu: 49684.851206514555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50975.86380001076,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50976.40000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 63363.83382152928,
            "unit": "ns/iter",
            "extra": "iterations: 13997\ncpu: 63352.36122026148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68505.95447207056,
            "unit": "ns/iter",
            "extra": "iterations: 12388\ncpu: 68506.04617371646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78749.99540167362,
            "unit": "ns/iter",
            "extra": "iterations: 11091\ncpu: 78749.23812099891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 594.7393400002157,
            "unit": "ns/iter",
            "extra": "iterations: 1179667\ncpu: 594.7196963210805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 497.7377491256494,
            "unit": "ns/iter",
            "extra": "iterations: 1408777\ncpu: 497.73789606161967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 484.37995429644354,
            "unit": "ns/iter",
            "extra": "iterations: 1449777\ncpu: 484.37932178535044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 497.74168373577885,
            "unit": "ns/iter",
            "extra": "iterations: 1411421\ncpu: 497.73511942928457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 951.6544278629433,
            "unit": "ns/iter",
            "extra": "iterations: 736292\ncpu: 951.6536917418628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4397.566116448967,
            "unit": "ns/iter",
            "extra": "iterations: 182655\ncpu: 4397.6086063891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20306.438580996823,
            "unit": "ns/iter",
            "extra": "iterations: 40761\ncpu: 20306.46205932141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16223.328259626282,
            "unit": "ns/iter",
            "extra": "iterations: 50719\ncpu: 16222.971667422442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15311.659820545061,
            "unit": "ns/iter",
            "extra": "iterations: 53607\ncpu: 15311.681310276663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15715.292976306338,
            "unit": "ns/iter",
            "extra": "iterations: 52209\ncpu: 15715.443697446799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48449.16544117487,
            "unit": "ns/iter",
            "extra": "iterations: 17136\ncpu: 48448.51190476179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 466088.4598424935,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 466075.48556430516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 365945.86286203837,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 365944.16524701833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 363517.9987504834,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 363517.7426072462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 372888.7165387949,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 372881.9693094629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 230755.88031496364,
            "unit": "ns/iter",
            "extra": "iterations: 3810\ncpu: 230754.59317585302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 369626.36305190483,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 369630.1328761256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1906371.952381103,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1906214.6997929576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 736470.1009389901,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 736443.896713616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2552127.424242205,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2551960.606060609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4391.030450077964,
            "unit": "ns/iter",
            "extra": "iterations: 179080\ncpu: 4390.997319633685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20135.719349386964,
            "unit": "ns/iter",
            "extra": "iterations: 40823\ncpu: 20135.553487004876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16046.831036772513,
            "unit": "ns/iter",
            "extra": "iterations: 51236\ncpu: 16046.65469591694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15324.110196385689,
            "unit": "ns/iter",
            "extra": "iterations: 53568\ncpu: 15324.126344086015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15931.367163709216,
            "unit": "ns/iter",
            "extra": "iterations: 50901\ncpu: 15931.345160212923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48100.90108487842,
            "unit": "ns/iter",
            "extra": "iterations: 17237\ncpu: 48100.005801473664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 474709.1262188188,
            "unit": "ns/iter",
            "extra": "iterations: 1846\ncpu: 474706.22968580615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 389751.4298481126,
            "unit": "ns/iter",
            "extra": "iterations: 2238\ncpu: 389752.189454872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 385147.4437610061,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 385139.4112478005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385040.9506666842,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 385034.88888888963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227205.30451813323,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 227205.40611125706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 382971.9912126582,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 382972.71528998116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1923552.8493722195,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1923497.2803347365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 728935.5078863932,
            "unit": "ns/iter",
            "extra": "iterations: 1268\ncpu: 728924.3690851736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4346.060433876141,
            "unit": "ns/iter",
            "extra": "iterations: 184615\ncpu: 4346.105137719029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20334.76124257878,
            "unit": "ns/iter",
            "extra": "iterations: 40271\ncpu: 20334.779369769814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16255.719582667942,
            "unit": "ns/iter",
            "extra": "iterations: 50703\ncpu: 16255.414866970377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15434.226382164436,
            "unit": "ns/iter",
            "extra": "iterations: 53286\ncpu: 15434.245392786135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16038.283194310761,
            "unit": "ns/iter",
            "extra": "iterations: 51191\ncpu: 16038.44621124812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48868.8537395482,
            "unit": "ns/iter",
            "extra": "iterations: 17462\ncpu: 48868.49158172032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 461266.84127817745,
            "unit": "ns/iter",
            "extra": "iterations: 1909\ncpu: 461264.16972236906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 376645.7102148191,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 376649.62735642225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 371214.4364100141,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 371208.5495533841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 378420.15075596346,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 378411.317494601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 229488.24126151056,
            "unit": "ns/iter",
            "extra": "iterations: 3805\ncpu: 229488.48883048745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 375700.07010750705,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 375697.80645161204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.1015147440273,
            "unit": "ns/iter",
            "extra": "iterations: 2316629\ncpu: 302.09476787176453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1647.8298003841794,
            "unit": "ns/iter",
            "extra": "iterations: 423914\ncpu: 1647.7917690852485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1223.624341660103,
            "unit": "ns/iter",
            "extra": "iterations: 573412\ncpu: 1223.6090280635872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1283.0524542220826,
            "unit": "ns/iter",
            "extra": "iterations: 545733\ncpu: 1283.0664445800494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1041.458039941917,
            "unit": "ns/iter",
            "extra": "iterations: 672878\ncpu: 1041.4620480978738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8211.725427612955,
            "unit": "ns/iter",
            "extra": "iterations: 85533\ncpu: 8211.607215928307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19061.1794019952,
            "unit": "ns/iter",
            "extra": "iterations: 36722\ncpu: 19060.552257502382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4505.598237001904,
            "unit": "ns/iter",
            "extra": "iterations: 155644\ncpu: 4505.598031405047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4450.005265395344,
            "unit": "ns/iter",
            "extra": "iterations: 157633\ncpu: 4449.950835167724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4502.0109348984715,
            "unit": "ns/iter",
            "extra": "iterations: 155557\ncpu: 4501.913767943615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9198.122720660487,
            "unit": "ns/iter",
            "extra": "iterations: 76996\ncpu: 9198.037560392711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8540.3540960001,
            "unit": "ns/iter",
            "extra": "iterations: 81958\ncpu: 8540.346274921187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3151.8004256029094,
            "unit": "ns/iter",
            "extra": "iterations: 222273\ncpu: 3151.5960103116413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15465.154909945033,
            "unit": "ns/iter",
            "extra": "iterations: 45194\ncpu: 15464.482010886435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12398.3619611239,
            "unit": "ns/iter",
            "extra": "iterations: 56437\ncpu: 12397.632758651322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12293.92203842829,
            "unit": "ns/iter",
            "extra": "iterations: 56887\ncpu: 12293.866788545687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12798.376903738834,
            "unit": "ns/iter",
            "extra": "iterations: 54892\ncpu: 12798.227428404929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28382.691355016017,
            "unit": "ns/iter",
            "extra": "iterations: 24627\ncpu: 28382.697851951398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99055.7531627617,
            "unit": "ns/iter",
            "extra": "iterations: 7114\ncpu: 99051.41973573144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85451.99951160258,
            "unit": "ns/iter",
            "extra": "iterations: 8190\ncpu: 85446.6056166066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84775.4767146518,
            "unit": "ns/iter",
            "extra": "iterations: 8267\ncpu: 84772.31160033871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85064.12861657719,
            "unit": "ns/iter",
            "extra": "iterations: 8226\ncpu: 85062.14442013117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55747.003101638635,
            "unit": "ns/iter",
            "extra": "iterations: 12574\ncpu: 55745.498648003704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 87750.29530039194,
            "unit": "ns/iter",
            "extra": "iterations: 8256\ncpu: 87640.45542635677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3089.6791342831207,
            "unit": "ns/iter",
            "extra": "iterations: 227095\ncpu: 3089.640458838805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15553.704479399299,
            "unit": "ns/iter",
            "extra": "iterations: 45073\ncpu: 15553.877043906645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12307.281042871788,
            "unit": "ns/iter",
            "extra": "iterations: 56728\ncpu: 12306.947186574567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12186.947386808486,
            "unit": "ns/iter",
            "extra": "iterations: 57248\ncpu: 12186.832727781042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12572.76113002964,
            "unit": "ns/iter",
            "extra": "iterations: 55503\ncpu: 12572.446534421704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28077.069866534646,
            "unit": "ns/iter",
            "extra": "iterations: 24876\ncpu: 28076.611995497242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98994.3127303657,
            "unit": "ns/iter",
            "extra": "iterations: 7054\ncpu: 98993.50722993925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83889.76814540708,
            "unit": "ns/iter",
            "extra": "iterations: 8363\ncpu: 83888.54478058191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83081.08089194789,
            "unit": "ns/iter",
            "extra": "iterations: 8431\ncpu: 83079.69398647772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84717.72185350512,
            "unit": "ns/iter",
            "extra": "iterations: 8287\ncpu: 84716.47158199626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56186.883503822355,
            "unit": "ns/iter",
            "extra": "iterations: 12318\ncpu: 56186.72674135401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85651.33672850223,
            "unit": "ns/iter",
            "extra": "iterations: 8247\ncpu: 85649.72717351805 ns\nthreads: 1"
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
        "date": 1705773466823,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 716.56550144943,
            "unit": "ns/iter",
            "extra": "iterations: 981734\ncpu: 716.5577437472881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11220.039118045686,
            "unit": "ns/iter",
            "extra": "iterations: 73700\ncpu: 11219.88195386703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24860.419389171602,
            "unit": "ns/iter",
            "extra": "iterations: 33823\ncpu: 24860.104071194157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40196.5350993961,
            "unit": "ns/iter",
            "extra": "iterations: 21026\ncpu: 40196.675544563885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49380.33637635886,
            "unit": "ns/iter",
            "extra": "iterations: 16431\ncpu: 49379.672570141825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50562.042100000326,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50562.660000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61550.517099999524,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61548.86 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71154.93909173195,
            "unit": "ns/iter",
            "extra": "iterations: 12133\ncpu: 71154.98227973293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80998.70033575842,
            "unit": "ns/iter",
            "extra": "iterations: 10722\ncpu: 80997.52844618546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 601.6723746050822,
            "unit": "ns/iter",
            "extra": "iterations: 1161949\ncpu: 601.6557525330281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 499.79111404433473,
            "unit": "ns/iter",
            "extra": "iterations: 1377297\ncpu: 499.78051211902846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 473.9997530847067,
            "unit": "ns/iter",
            "extra": "iterations: 1478240\ncpu: 473.99055633726607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 490.65887145567024,
            "unit": "ns/iter",
            "extra": "iterations: 1421300\ncpu: 490.650109055091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 972.3928272268117,
            "unit": "ns/iter",
            "extra": "iterations: 722259\ncpu: 972.3565923027625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4423.606533928141,
            "unit": "ns/iter",
            "extra": "iterations: 183167\ncpu: 4423.514060938925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20365.33562065031,
            "unit": "ns/iter",
            "extra": "iterations: 40659\ncpu: 20365.018815022497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16150.175376825475,
            "unit": "ns/iter",
            "extra": "iterations: 50554\ncpu: 16149.63801083987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14687.870379260023,
            "unit": "ns/iter",
            "extra": "iterations: 56241\ncpu: 14687.539339627672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15552.797175024501,
            "unit": "ns/iter",
            "extra": "iterations: 53381\ncpu: 15552.26766077824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48234.44413994435,
            "unit": "ns/iter",
            "extra": "iterations: 17150\ncpu: 48234.40233236155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 450752.6046875062,
            "unit": "ns/iter",
            "extra": "iterations: 1920\ncpu: 450741.0416666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 366975.92147712153,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 366977.24957555265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 367241.7038753396,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 367246.0825610782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 370713.577350453,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 370708.8888888895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 226434.0102067436,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 226431.82412980826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 370561.5588982856,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 370552.20338983176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1897902.0349077294,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1897909.034907601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 745892.691082818,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 745865.2866242033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2535478.755494533,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2535303.296703301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4369.37726995392,
            "unit": "ns/iter",
            "extra": "iterations: 180290\ncpu: 4369.401519773692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20191.532271211185,
            "unit": "ns/iter",
            "extra": "iterations: 40485\ncpu: 20191.33259231818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16007.41211108249,
            "unit": "ns/iter",
            "extra": "iterations: 51457\ncpu: 16007.30901529429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15301.00744287743,
            "unit": "ns/iter",
            "extra": "iterations: 53877\ncpu: 15300.915047237224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15927.8001536546,
            "unit": "ns/iter",
            "extra": "iterations: 52065\ncpu: 15927.899740708679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48032.20827102186,
            "unit": "ns/iter",
            "extra": "iterations: 17386\ncpu: 48031.57713102487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 469925.24239131046,
            "unit": "ns/iter",
            "extra": "iterations: 1840\ncpu: 469924.94565217086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 387611.87616927945,
            "unit": "ns/iter",
            "extra": "iterations: 2245\ncpu: 387603.3407572396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 378492.0983750206,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 378496.5744400548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 379844.29761388904,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 379844.07809110667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 225522.70774376628,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 225520.14406997725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 381718.8788942622,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 381723.38745063456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1911949.0568420205,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1911775.368421047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 768942.6744186556,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 768924.2524916964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4353.897069743696,
            "unit": "ns/iter",
            "extra": "iterations: 181793\ncpu: 4353.870061003448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20349.558539231624,
            "unit": "ns/iter",
            "extra": "iterations: 40554\ncpu: 20349.563544903227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16037.211936639897,
            "unit": "ns/iter",
            "extra": "iterations: 50567\ncpu: 16036.79870271118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15308.413315767923,
            "unit": "ns/iter",
            "extra": "iterations: 53891\ncpu: 15308.224007719298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15822.3505251454,
            "unit": "ns/iter",
            "extra": "iterations: 52176\ncpu: 15822.038868445157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48413.95845543627,
            "unit": "ns/iter",
            "extra": "iterations: 17403\ncpu: 48413.62408780125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 458651.36659554613,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 458641.0352187855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 376434.0218722763,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 376420.5599300087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370181.8041060694,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 370180.9238665516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 379125.09809028765,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 379120.9635416675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 231842.9011164243,
            "unit": "ns/iter",
            "extra": "iterations: 3762\ncpu: 231837.0547581078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 375400.62813430757,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 375394.64513387077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.19816613183843,
            "unit": "ns/iter",
            "extra": "iterations: 2312489\ncpu: 302.19019420200397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1658.4319118917401,
            "unit": "ns/iter",
            "extra": "iterations: 421755\ncpu: 1658.402152908686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1266.22241119379,
            "unit": "ns/iter",
            "extra": "iterations: 553875\ncpu: 1266.1916497404657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1177.4718204521923,
            "unit": "ns/iter",
            "extra": "iterations: 595006\ncpu: 1177.4708154203465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1035.8682070478758,
            "unit": "ns/iter",
            "extra": "iterations: 673989\ncpu: 1035.864531913729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8029.311672516026,
            "unit": "ns/iter",
            "extra": "iterations: 86331\ncpu: 8028.960628279565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18275.92375029212,
            "unit": "ns/iter",
            "extra": "iterations: 38269\ncpu: 18275.47362094654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4506.492775905131,
            "unit": "ns/iter",
            "extra": "iterations: 155452\ncpu: 4506.326068496998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4516.101449737856,
            "unit": "ns/iter",
            "extra": "iterations: 156856\ncpu: 4516.155582190025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4616.203515197865,
            "unit": "ns/iter",
            "extra": "iterations: 154529\ncpu: 4616.072064143231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9043.64041055983,
            "unit": "ns/iter",
            "extra": "iterations: 77455\ncpu: 9043.612420114936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8531.006489063377,
            "unit": "ns/iter",
            "extra": "iterations: 81830\ncpu: 8530.775999022344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3205.090944070575,
            "unit": "ns/iter",
            "extra": "iterations: 218310\ncpu: 3205.0496999679285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16083.219054813539,
            "unit": "ns/iter",
            "extra": "iterations: 43674\ncpu: 16082.747172230806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12905.492508807207,
            "unit": "ns/iter",
            "extra": "iterations: 53930\ncpu: 12904.887817541377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12717.638717071462,
            "unit": "ns/iter",
            "extra": "iterations: 54968\ncpu: 12717.295517392144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13235.59159793924,
            "unit": "ns/iter",
            "extra": "iterations: 52987\ncpu: 13235.112386057122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28471.608605555546,
            "unit": "ns/iter",
            "extra": "iterations: 24612\ncpu: 28470.84755403838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100176.73649800476,
            "unit": "ns/iter",
            "extra": "iterations: 7036\ncpu: 100174.68732234192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86746.09822866862,
            "unit": "ns/iter",
            "extra": "iterations: 8073\ncpu: 86744.4072835372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86305.4394275776,
            "unit": "ns/iter",
            "extra": "iterations: 8106\ncpu: 86302.54132741052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86725.74056603017,
            "unit": "ns/iter",
            "extra": "iterations: 8056\ncpu: 86724.05660377222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56258.194217529155,
            "unit": "ns/iter",
            "extra": "iterations: 12486\ncpu: 56257.36024347267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85965.83792385616,
            "unit": "ns/iter",
            "extra": "iterations: 8169\ncpu: 85965.381319622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3057.5615991647483,
            "unit": "ns/iter",
            "extra": "iterations: 227844\ncpu: 3057.544196906668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15471.359331660939,
            "unit": "ns/iter",
            "extra": "iterations: 45067\ncpu: 15471.542370248648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12220.482208331388,
            "unit": "ns/iter",
            "extra": "iterations: 57274\ncpu: 12220.525893075168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12112.514592611142,
            "unit": "ns/iter",
            "extra": "iterations: 57255\ncpu: 12112.65391668856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12547.90478061892,
            "unit": "ns/iter",
            "extra": "iterations: 55976\ncpu: 12547.588252108057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28004.1614124101,
            "unit": "ns/iter",
            "extra": "iterations: 24837\ncpu: 28004.263799976212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99594.8820948386,
            "unit": "ns/iter",
            "extra": "iterations: 7065\ncpu: 99596.0651096969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 90040.96555847305,
            "unit": "ns/iter",
            "extra": "iterations: 8362\ncpu: 90042.02343936959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82901.77145566129,
            "unit": "ns/iter",
            "extra": "iterations: 8436\ncpu: 82902.76197250005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83375.43170907938,
            "unit": "ns/iter",
            "extra": "iterations: 8332\ncpu: 83373.06769083146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55766.45675868698,
            "unit": "ns/iter",
            "extra": "iterations: 12569\ncpu: 55764.404487230044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83924.0188407417,
            "unit": "ns/iter",
            "extra": "iterations: 8333\ncpu: 83920.70082803443 ns\nthreads: 1"
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
        "date": 1705774898026,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 715.3177727274373,
            "unit": "ns/iter",
            "extra": "iterations: 981667\ncpu: 715.2950032954149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11388.476783060076,
            "unit": "ns/iter",
            "extra": "iterations: 75376\ncpu: 11388.16068775207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24746.67631215095,
            "unit": "ns/iter",
            "extra": "iterations: 33971\ncpu: 24745.512348768065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38532.384597918615,
            "unit": "ns/iter",
            "extra": "iterations: 22023\ncpu: 38531.25823003221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49051.88977771951,
            "unit": "ns/iter",
            "extra": "iterations: 16376\ncpu: 49050.04885197851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50461.71169999525,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50460.18000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61274.22889999252,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61274.14 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70442.70928536615,
            "unit": "ns/iter",
            "extra": "iterations: 12342\ncpu: 70440.46345811049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80568.3472931559,
            "unit": "ns/iter",
            "extra": "iterations: 10769\ncpu: 80565.65140681592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 601.9632114678423,
            "unit": "ns/iter",
            "extra": "iterations: 1162210\ncpu: 601.9336436616453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 504.5764278725659,
            "unit": "ns/iter",
            "extra": "iterations: 1391966\ncpu: 504.5565049721046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 486.58203532829987,
            "unit": "ns/iter",
            "extra": "iterations: 1441507\ncpu: 486.5679459066105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 523.2498418448835,
            "unit": "ns/iter",
            "extra": "iterations: 1410008\ncpu: 523.237598651923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 962.8890556556706,
            "unit": "ns/iter",
            "extra": "iterations: 727563\ncpu: 962.8592987823743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4400.309878258163,
            "unit": "ns/iter",
            "extra": "iterations: 182107\ncpu: 4400.2103159131775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20113.623931412076,
            "unit": "ns/iter",
            "extra": "iterations: 40591\ncpu: 20113.535020078318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16114.321905280794,
            "unit": "ns/iter",
            "extra": "iterations: 51394\ncpu: 16114.4588862513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15397.03037361384,
            "unit": "ns/iter",
            "extra": "iterations: 53665\ncpu: 15396.806111991053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15902.783787939152,
            "unit": "ns/iter",
            "extra": "iterations: 52023\ncpu: 15902.919862368513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48229.99594587205,
            "unit": "ns/iter",
            "extra": "iterations: 17513\ncpu: 48228.31610803402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 448789.98868313024,
            "unit": "ns/iter",
            "extra": "iterations: 1944\ncpu: 448785.0823045256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 367458.32893051853,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 367457.3072006812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 364057.1869275658,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 364049.00083263905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 375857.4657009236,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 375860.97145291814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224881.5539549613,
            "unit": "ns/iter",
            "extra": "iterations: 3818\ncpu: 224876.68936615967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 373246.1448718228,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 373246.9230769228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1882805.6880166957,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1882663.223140495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 745941.2621513427,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 745929.5617529873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2538300.986338609,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2538210.3825136633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4531.0610554655095,
            "unit": "ns/iter",
            "extra": "iterations: 180508\ncpu: 4530.967048551862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20055.35268916099,
            "unit": "ns/iter",
            "extra": "iterations: 41314\ncpu: 20054.65459650486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16107.45459138996,
            "unit": "ns/iter",
            "extra": "iterations: 51455\ncpu: 16106.78262559521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15371.76067138191,
            "unit": "ns/iter",
            "extra": "iterations: 53859\ncpu: 15371.308416420585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15995.787019826315,
            "unit": "ns/iter",
            "extra": "iterations: 51648\ncpu: 15995.34541511771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48363.713125139635,
            "unit": "ns/iter",
            "extra": "iterations: 17356\ncpu: 48362.42797879695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 467973.3841530063,
            "unit": "ns/iter",
            "extra": "iterations: 1830\ncpu: 467934.1530054633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 380998.2915387689,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 380985.1380973243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 376716.46974930645,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 376707.9083837512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 379312.1594958699,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 379306.4754454577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 225932.6258346122,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 225927.76065742184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 380049.37664621725,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 380038.6303775229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1893311.1499999692,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1893278.125000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 755091.1462226377,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 755063.3631194131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4317.552844851781,
            "unit": "ns/iter",
            "extra": "iterations: 180273\ncpu: 4317.4596306712365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20362.16035136043,
            "unit": "ns/iter",
            "extra": "iterations: 40642\ncpu: 20361.707101028438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16352.784758478634,
            "unit": "ns/iter",
            "extra": "iterations: 51714\ncpu: 16352.550566577773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15633.869121865959,
            "unit": "ns/iter",
            "extra": "iterations: 54035\ncpu: 15633.483853058253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16137.88577073611,
            "unit": "ns/iter",
            "extra": "iterations: 52132\ncpu: 16137.52397759533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48709.30623306321,
            "unit": "ns/iter",
            "extra": "iterations: 17343\ncpu: 48708.17620942164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 455173.97537976806,
            "unit": "ns/iter",
            "extra": "iterations: 1909\ncpu: 455159.61236249347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 374439.7948494129,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 374426.2330859884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 368043.9149484675,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 368043.4707903766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 372476.9148660149,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 372473.8980120983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 229047.4052304469,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 229041.0150181256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 371889.6919813003,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 371876.5803988107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 300.060816274406,
            "unit": "ns/iter",
            "extra": "iterations: 2311355\ncpu: 300.04901886555905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1675.7741681732325,
            "unit": "ns/iter",
            "extra": "iterations: 422053\ncpu: 1675.7243758485345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1246.896077538398,
            "unit": "ns/iter",
            "extra": "iterations: 562198\ncpu: 1246.8568013404508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1248.312559657398,
            "unit": "ns/iter",
            "extra": "iterations: 562587\ncpu: 1248.2611578298106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1037.5459434713562,
            "unit": "ns/iter",
            "extra": "iterations: 674949\ncpu: 1037.550540855684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8092.470402388914,
            "unit": "ns/iter",
            "extra": "iterations: 86409\ncpu: 8092.108460924181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19350.102182293354,
            "unit": "ns/iter",
            "extra": "iterations: 36063\ncpu: 19349.47453068267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4596.368786681757,
            "unit": "ns/iter",
            "extra": "iterations: 152153\ncpu: 4596.335267789711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4574.753687199762,
            "unit": "ns/iter",
            "extra": "iterations: 152826\ncpu: 4574.73466556744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4556.782661742778,
            "unit": "ns/iter",
            "extra": "iterations: 154087\ncpu: 4556.788697294391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9414.539092605904,
            "unit": "ns/iter",
            "extra": "iterations: 74477\ncpu: 9414.327913315545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8549.658876162574,
            "unit": "ns/iter",
            "extra": "iterations: 81809\ncpu: 8549.55689471828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3194.625185973625,
            "unit": "ns/iter",
            "extra": "iterations: 219789\ncpu: 3194.585716300616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15791.830554925637,
            "unit": "ns/iter",
            "extra": "iterations: 44150\ncpu: 15791.979614948792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12785.839244579249,
            "unit": "ns/iter",
            "extra": "iterations: 54698\ncpu: 12785.432739770973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12462.260600108784,
            "unit": "ns/iter",
            "extra": "iterations: 55990\ncpu: 12462.248615824441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12949.417099984386,
            "unit": "ns/iter",
            "extra": "iterations: 53848\ncpu: 12949.311023622013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28364.73103560078,
            "unit": "ns/iter",
            "extra": "iterations: 24691\ncpu: 28364.638937264353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99630.78850804108,
            "unit": "ns/iter",
            "extra": "iterations: 7031\ncpu: 99631.70246053295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85209.24960505455,
            "unit": "ns/iter",
            "extra": "iterations: 8229\ncpu: 85206.81735326334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85191.9416757533,
            "unit": "ns/iter",
            "extra": "iterations: 8247\ncpu: 85190.46926154991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85532.78783436923,
            "unit": "ns/iter",
            "extra": "iterations: 8187\ncpu: 85530.41407108832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55984.24310496591,
            "unit": "ns/iter",
            "extra": "iterations: 12509\ncpu: 55984.19537932641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84654.20826285865,
            "unit": "ns/iter",
            "extra": "iterations: 8278\ncpu: 84654.94080695882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3134.7538397132857,
            "unit": "ns/iter",
            "extra": "iterations: 222152\ncpu: 3134.7050668011198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15707.220745693941,
            "unit": "ns/iter",
            "extra": "iterations: 44549\ncpu: 15707.052908033706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12502.46418020001,
            "unit": "ns/iter",
            "extra": "iterations: 55849\ncpu: 12502.159394080394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12380.695574088535,
            "unit": "ns/iter",
            "extra": "iterations: 56237\ncpu: 12380.704874015324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12757.569699735122,
            "unit": "ns/iter",
            "extra": "iterations: 54785\ncpu: 12757.345988865784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27757.544704807333,
            "unit": "ns/iter",
            "extra": "iterations: 25221\ncpu: 27757.53538717739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98965.47426112214,
            "unit": "ns/iter",
            "extra": "iterations: 7207\ncpu: 98963.97946440862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83961.97331258997,
            "unit": "ns/iter",
            "extra": "iterations: 8356\ncpu: 83959.98085208224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83425.46478032785,
            "unit": "ns/iter",
            "extra": "iterations: 8376\ncpu: 83426.18194842331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83868.67235371411,
            "unit": "ns/iter",
            "extra": "iterations: 8323\ncpu: 83866.26216508397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56065.5009218511,
            "unit": "ns/iter",
            "extra": "iterations: 12475\ncpu: 56065.37875751575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85139.31734495847,
            "unit": "ns/iter",
            "extra": "iterations: 8256\ncpu: 85138.50532945625 ns\nthreads: 1"
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
        "date": 1705778475576,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 711.7508117446985,
            "unit": "ns/iter",
            "extra": "iterations: 978140\ncpu: 711.7318584251743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11136.170098802571,
            "unit": "ns/iter",
            "extra": "iterations: 74492\ncpu: 11136.144820920368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24763.456887330045,
            "unit": "ns/iter",
            "extra": "iterations: 33656\ncpu: 24762.904088424064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38837.20820074831,
            "unit": "ns/iter",
            "extra": "iterations: 21998\ncpu: 38836.716974270406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48296.513241955676,
            "unit": "ns/iter",
            "extra": "iterations: 16123\ncpu: 48292.9231532593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50550.31630000712,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50550.14999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60750.618800000215,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60748.45 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70697.94877869391,
            "unit": "ns/iter",
            "extra": "iterations: 12241\ncpu: 70693.99558859566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80815.97622143998,
            "unit": "ns/iter",
            "extra": "iterations: 10766\ncpu: 80810.04086940367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 594.7489268325988,
            "unit": "ns/iter",
            "extra": "iterations: 1177123\ncpu: 594.68645162825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 505.234929677874,
            "unit": "ns/iter",
            "extra": "iterations: 1386334\ncpu: 505.22413790616105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 485.8715205303767,
            "unit": "ns/iter",
            "extra": "iterations: 1436821\ncpu: 485.830872460801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 498.77236150851394,
            "unit": "ns/iter",
            "extra": "iterations: 1402667\ncpu: 498.7270677929972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 982.3702788830363,
            "unit": "ns/iter",
            "extra": "iterations: 711696\ncpu: 982.3400721656454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4482.244897959047,
            "unit": "ns/iter",
            "extra": "iterations: 183848\ncpu: 4482.231517340414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20267.504672898274,
            "unit": "ns/iter",
            "extra": "iterations: 40339\ncpu: 20267.279803663947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16446.85272763337,
            "unit": "ns/iter",
            "extra": "iterations: 50410\ncpu: 16446.37571910335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14908.475934294127,
            "unit": "ns/iter",
            "extra": "iterations: 55764\ncpu: 14908.213184133101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15609.863433887447,
            "unit": "ns/iter",
            "extra": "iterations: 53205\ncpu: 15609.826144159357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48967.637094455225,
            "unit": "ns/iter",
            "extra": "iterations: 17415\ncpu: 48965.11053689344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 453100.6969855009,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 453080.09355509357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 373028.30779110896,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 373012.4571917797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 367618.58143458056,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 367596.4135021097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 374241.12085105624,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 374220.2553191474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 229999.81574761032,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 229987.6458112407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 371546.98711340403,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 371530.79896907153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1879248.5216495479,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1879242.061855668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 751760.0272653555,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 751704.8115477139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2535490.4725275817,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2535416.758241751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4397.623137074803,
            "unit": "ns/iter",
            "extra": "iterations: 180697\ncpu: 4397.303220308036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20072.986841465772,
            "unit": "ns/iter",
            "extra": "iterations: 41190\ncpu: 20071.7285748969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16080.700201479995,
            "unit": "ns/iter",
            "extra": "iterations: 51618\ncpu: 16079.416095160585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15351.897473498904,
            "unit": "ns/iter",
            "extra": "iterations: 53869\ncpu: 15351.369061983665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15969.020695186016,
            "unit": "ns/iter",
            "extra": "iterations: 51123\ncpu: 15967.985055650131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 49000.703158882454,
            "unit": "ns/iter",
            "extra": "iterations: 17063\ncpu: 48991.74822715831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 475280.84725278645,
            "unit": "ns/iter",
            "extra": "iterations: 1820\ncpu: 475223.4065934053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 388885.8733780499,
            "unit": "ns/iter",
            "extra": "iterations: 2235\ncpu: 388877.8523489917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 380517.6896703715,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 380501.93406593404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 383828.0615926446,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 383796.524417069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227624.85621255418,
            "unit": "ns/iter",
            "extra": "iterations: 3839\ncpu: 227609.4034904924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 379186.54019991506,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 379164.31986092933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1907778.0589472433,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1907544.6315789546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 762431.7085386222,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 762370.8538587866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4350.849563296351,
            "unit": "ns/iter",
            "extra": "iterations: 182389\ncpu: 4350.749771093642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20045.493526919312,
            "unit": "ns/iter",
            "extra": "iterations: 41325\ncpu: 20045.09618874763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16061.707910472967,
            "unit": "ns/iter",
            "extra": "iterations: 51337\ncpu: 16061.11381654549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15368.788015787017,
            "unit": "ns/iter",
            "extra": "iterations: 53971\ncpu: 15367.98465842766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15933.000696783178,
            "unit": "ns/iter",
            "extra": "iterations: 51666\ncpu: 15932.123640305073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47867.73986987307,
            "unit": "ns/iter",
            "extra": "iterations: 17522\ncpu: 47864.39904120514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 454794.2234867965,
            "unit": "ns/iter",
            "extra": "iterations: 1933\ncpu: 454744.85256078833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380124.89119169494,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 380104.2746113963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370396.13496413967,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 370371.4888232814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 376072.93987890915,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 376055.1038062272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224555.73193473535,
            "unit": "ns/iter",
            "extra": "iterations: 3861\ncpu: 224553.56125356082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 368458.00633447594,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 368448.0996621616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.5569740121719,
            "unit": "ns/iter",
            "extra": "iterations: 2320049\ncpu: 302.53304994851493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1670.1340475743236,
            "unit": "ns/iter",
            "extra": "iterations: 419933\ncpu: 1669.9940228560235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1266.786428394337,
            "unit": "ns/iter",
            "extra": "iterations: 553037\ncpu: 1266.7378493663139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1287.0211977563968,
            "unit": "ns/iter",
            "extra": "iterations: 541095\ncpu: 1286.9660595643982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1032.2869467931203,
            "unit": "ns/iter",
            "extra": "iterations: 678408\ncpu: 1032.216748623245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8338.354333696918,
            "unit": "ns/iter",
            "extra": "iterations: 84316\ncpu: 8337.653588879883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19160.6767030406,
            "unit": "ns/iter",
            "extra": "iterations: 36567\ncpu: 19158.971203544053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4492.504829399767,
            "unit": "ns/iter",
            "extra": "iterations: 155920\ncpu: 4492.2479476654125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4429.7050309170345,
            "unit": "ns/iter",
            "extra": "iterations: 158003\ncpu: 4429.586147098429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4468.904567767354,
            "unit": "ns/iter",
            "extra": "iterations: 156247\ncpu: 4468.6950789454795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9604.89469870006,
            "unit": "ns/iter",
            "extra": "iterations: 73133\ncpu: 9604.575225958222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8528.016983958565,
            "unit": "ns/iter",
            "extra": "iterations: 82784\ncpu: 8508.424333204439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3192.782959600095,
            "unit": "ns/iter",
            "extra": "iterations: 218070\ncpu: 3192.6092539092915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16103.077342892824,
            "unit": "ns/iter",
            "extra": "iterations: 43792\ncpu: 16102.500456704269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12940.375018469813,
            "unit": "ns/iter",
            "extra": "iterations: 54144\ncpu: 12940.133717494291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12824.435972859617,
            "unit": "ns/iter",
            "extra": "iterations: 55414\ncpu: 12824.333200996163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13087.740262938902,
            "unit": "ns/iter",
            "extra": "iterations: 52788\ncpu: 13087.442221716912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28544.310677622987,
            "unit": "ns/iter",
            "extra": "iterations: 24453\ncpu: 28543.728785834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100784.99203641783,
            "unit": "ns/iter",
            "extra": "iterations: 7032\ncpu: 100780.75938566563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87152.40937848753,
            "unit": "ns/iter",
            "extra": "iterations: 8061\ncpu: 87151.70574370447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84953.70160700518,
            "unit": "ns/iter",
            "extra": "iterations: 8214\ncpu: 84953.00706111577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85273.5638051063,
            "unit": "ns/iter",
            "extra": "iterations: 8189\ncpu: 85270.05739406591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55633.02122940333,
            "unit": "ns/iter",
            "extra": "iterations: 12624\ncpu: 55631.376742712586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85362.52608962827,
            "unit": "ns/iter",
            "extra": "iterations: 8145\ncpu: 85359.23879680772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3114.4116886130446,
            "unit": "ns/iter",
            "extra": "iterations: 224184\ncpu: 3114.3114584448213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15814.535016598726,
            "unit": "ns/iter",
            "extra": "iterations: 44279\ncpu: 15814.399602520487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12587.237907791256,
            "unit": "ns/iter",
            "extra": "iterations: 55635\ncpu: 12587.119618944927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12418.305884848049,
            "unit": "ns/iter",
            "extra": "iterations: 56603\ncpu: 12417.822376905933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12809.82296493666,
            "unit": "ns/iter",
            "extra": "iterations: 54814\ncpu: 12809.57237202167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28283.149703019935,
            "unit": "ns/iter",
            "extra": "iterations: 24749\ncpu: 28282.908400339453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99482.41099181477,
            "unit": "ns/iter",
            "extra": "iterations: 7078\ncpu: 99480.63012150311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84732.60669253393,
            "unit": "ns/iter",
            "extra": "iterations: 8248\ncpu: 84731.9228903969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84570.08275029587,
            "unit": "ns/iter",
            "extra": "iterations: 8290\ncpu: 84567.55126658623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85143.40206560915,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 85141.85905224913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56307.494460501126,
            "unit": "ns/iter",
            "extra": "iterations: 12456\ncpu: 56307.121066152074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85110.81911263357,
            "unit": "ns/iter",
            "extra": "iterations: 8204\ncpu: 85107.50853242335 ns\nthreads: 1"
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
        "date": 1705953627625,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 749.1268476366271,
            "unit": "ns/iter",
            "extra": "iterations: 928957\ncpu: 749.0958139074252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11018.956229938893,
            "unit": "ns/iter",
            "extra": "iterations: 75394\ncpu: 11018.776029922805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24733.222731816353,
            "unit": "ns/iter",
            "extra": "iterations: 34014\ncpu: 24731.954489327924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37943.78098848546,
            "unit": "ns/iter",
            "extra": "iterations: 21629\ncpu: 37941.42124000184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48822.98417230717,
            "unit": "ns/iter",
            "extra": "iterations: 16111\ncpu: 48821.37049221025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50201.39750000681,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50199.22999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60862.59749999954,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60859.41999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68984.78669932319,
            "unit": "ns/iter",
            "extra": "iterations: 11022\ncpu: 68982.61658501181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78543.21786038137,
            "unit": "ns/iter",
            "extra": "iterations: 11030\ncpu: 78541.24206708977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 592.3123063404871,
            "unit": "ns/iter",
            "extra": "iterations: 1172160\ncpu: 592.2960176085182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 494.70805775318763,
            "unit": "ns/iter",
            "extra": "iterations: 1410207\ncpu: 494.69531777958804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 478.4079469645883,
            "unit": "ns/iter",
            "extra": "iterations: 1460457\ncpu: 478.3976522417304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 492.2384255143236,
            "unit": "ns/iter",
            "extra": "iterations: 1422763\ncpu: 492.2120549944023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 945.2535878266901,
            "unit": "ns/iter",
            "extra": "iterations: 742023\ncpu: 945.1806749925546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4393.45367727809,
            "unit": "ns/iter",
            "extra": "iterations: 182200\ncpu: 4393.031833150377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20256.786216074746,
            "unit": "ns/iter",
            "extra": "iterations: 40569\ncpu: 20256.474155143067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16267.829273635693,
            "unit": "ns/iter",
            "extra": "iterations: 50209\ncpu: 16267.023840347383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15417.804214551596,
            "unit": "ns/iter",
            "extra": "iterations: 53339\ncpu: 15417.538761506597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15811.475973964416,
            "unit": "ns/iter",
            "extra": "iterations: 51465\ncpu: 15810.834547750852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48812.1295997224,
            "unit": "ns/iter",
            "extra": "iterations: 17338\ncpu: 48810.964355750344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 450977.7931211647,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 450962.8336755655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 368475.66580866167,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 368463.02016302134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 364344.93171345536,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 364335.1487222458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 370083.5304644306,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 370062.4201107802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227397.31595492008,
            "unit": "ns/iter",
            "extra": "iterations: 3817\ncpu: 227012.26093790994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 370259.14352243504,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 370236.7061812029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1883752.979508336,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1883701.6393442668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 750575.582733843,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 750548.0415667471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2533258.5741760163,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2533187.0879120845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4443.55597075682,
            "unit": "ns/iter",
            "extra": "iterations: 178227\ncpu: 4443.314985944891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20078.666304750383,
            "unit": "ns/iter",
            "extra": "iterations: 40525\ncpu: 20078.213448488605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16020.577590578598,
            "unit": "ns/iter",
            "extra": "iterations: 51282\ncpu: 16020.018720018656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15320.90443666976,
            "unit": "ns/iter",
            "extra": "iterations: 54027\ncpu: 15320.226923575345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15772.076550219714,
            "unit": "ns/iter",
            "extra": "iterations: 51783\ncpu: 15771.34387733427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48584.18904219422,
            "unit": "ns/iter",
            "extra": "iterations: 17467\ncpu: 48581.954542852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 467824.7127771804,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 467791.76346357085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 389171.41049800656,
            "unit": "ns/iter",
            "extra": "iterations: 2229\ncpu: 389140.33198743925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 381027.4354340971,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 381007.888937859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 381378.7583187632,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 381362.47810858383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 225452.8409149304,
            "unit": "ns/iter",
            "extra": "iterations: 3891\ncpu: 225445.84939604104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 381664.7305025974,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 381656.2824956679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1911983.9536843805,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1911680.0000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 769626.7738908316,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 769614.2491467592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4400.9555109704825,
            "unit": "ns/iter",
            "extra": "iterations: 179932\ncpu: 4400.676366627405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20115.026668910592,
            "unit": "ns/iter",
            "extra": "iterations: 41584\ncpu: 20114.510388611074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16099.502265583937,
            "unit": "ns/iter",
            "extra": "iterations: 51863\ncpu: 16098.721631992075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15394.108598873865,
            "unit": "ns/iter",
            "extra": "iterations: 54135\ncpu: 15393.688002216748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15913.388434333674,
            "unit": "ns/iter",
            "extra": "iterations: 52310\ncpu: 15912.267252915282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47474.773954657736,
            "unit": "ns/iter",
            "extra": "iterations: 17554\ncpu: 47474.14264555074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 459703.2985554359,
            "unit": "ns/iter",
            "extra": "iterations: 1869\ncpu: 459677.47458533937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 379301.4066754228,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 379279.1392182707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370578.2954057408,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 370572.13396307646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 377860.4116106573,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 377846.57354866737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 228399.79173208599,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 228392.4908424921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 372283.17712338734,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 372260.56338028354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 301.8634524447392,
            "unit": "ns/iter",
            "extra": "iterations: 2312037\ncpu: 301.8521329892229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1635.1773013255481,
            "unit": "ns/iter",
            "extra": "iterations: 424853\ncpu: 1635.1250903253526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1263.53082931958,
            "unit": "ns/iter",
            "extra": "iterations: 552899\ncpu: 1263.5144936055244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1282.111469413387,
            "unit": "ns/iter",
            "extra": "iterations: 547334\ncpu: 1282.0352837572775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1039.5144557495084,
            "unit": "ns/iter",
            "extra": "iterations: 673642\ncpu: 1039.4818019066488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8080.020617483699,
            "unit": "ns/iter",
            "extra": "iterations: 86480\ncpu: 8079.795328399652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19133.946671398462,
            "unit": "ns/iter",
            "extra": "iterations: 36622\ncpu: 19133.062093823555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4507.904899451606,
            "unit": "ns/iter",
            "extra": "iterations: 155099\ncpu: 4507.655755356225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4450.693509271603,
            "unit": "ns/iter",
            "extra": "iterations: 157101\ncpu: 4450.296306197917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4500.64682745965,
            "unit": "ns/iter",
            "extra": "iterations: 155853\ncpu: 4500.381770001203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9415.692878358892,
            "unit": "ns/iter",
            "extra": "iterations: 74407\ncpu: 9414.928702944704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8479.765017196498,
            "unit": "ns/iter",
            "extra": "iterations: 82572\ncpu: 8479.145473041594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3244.949956016491,
            "unit": "ns/iter",
            "extra": "iterations: 215990\ncpu: 3244.682161211109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16186.382157340477,
            "unit": "ns/iter",
            "extra": "iterations: 43155\ncpu: 16185.658672228245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12965.88204805602,
            "unit": "ns/iter",
            "extra": "iterations: 54022\ncpu: 12965.3604087223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12783.889669391809,
            "unit": "ns/iter",
            "extra": "iterations: 54808\ncpu: 12783.538899430912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13259.85250933238,
            "unit": "ns/iter",
            "extra": "iterations: 52783\ncpu: 13258.596517818149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28782.888184957796,
            "unit": "ns/iter",
            "extra": "iterations: 24308\ncpu: 28780.45088036879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100599.4394285738,
            "unit": "ns/iter",
            "extra": "iterations: 7000\ncpu: 100590.77142857121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86888.01760476104,
            "unit": "ns/iter",
            "extra": "iterations: 8066\ncpu: 86880.6471609216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85712.61898874547,
            "unit": "ns/iter",
            "extra": "iterations: 8089\ncpu: 85707.30621832005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85752.47851705884,
            "unit": "ns/iter",
            "extra": "iterations: 8146\ncpu: 85749.33709796182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55919.76624102167,
            "unit": "ns/iter",
            "extra": "iterations: 12530\ncpu: 55915.586592179265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86274.9326405856,
            "unit": "ns/iter",
            "extra": "iterations: 8180\ncpu: 86268.72860635625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3188.1751852374096,
            "unit": "ns/iter",
            "extra": "iterations: 219853\ncpu: 3187.9255684479917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16234.3419900383,
            "unit": "ns/iter",
            "extra": "iterations: 43165\ncpu: 16232.950306961484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12893.48591161294,
            "unit": "ns/iter",
            "extra": "iterations: 54442\ncpu: 12892.221079313842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12730.20074268296,
            "unit": "ns/iter",
            "extra": "iterations: 54936\ncpu: 12729.576234163242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13150.52286344935,
            "unit": "ns/iter",
            "extra": "iterations: 53907\ncpu: 13149.895189864148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28153.681343822136,
            "unit": "ns/iter",
            "extra": "iterations: 24914\ncpu: 28152.962189933573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99617.402207746,
            "unit": "ns/iter",
            "extra": "iterations: 7066\ncpu: 99612.25587319474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85066.51503394684,
            "unit": "ns/iter",
            "extra": "iterations: 8248\ncpu: 85059.22647914565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84357.95523466147,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 84351.99759326171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84638.45626592402,
            "unit": "ns/iter",
            "extra": "iterations: 8243\ncpu: 84631.78454446176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56577.72663551854,
            "unit": "ns/iter",
            "extra": "iterations: 12412\ncpu: 56576.0876571069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85564.6675606412,
            "unit": "ns/iter",
            "extra": "iterations: 8203\ncpu: 85556.83286602389 ns\nthreads: 1"
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
        "date": 1705955083399,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 726.349845395675,
            "unit": "ns/iter",
            "extra": "iterations: 971189\ncpu: 726.3133128567148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11079.320100015952,
            "unit": "ns/iter",
            "extra": "iterations: 75189\ncpu: 11078.71231164133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24570.772695119806,
            "unit": "ns/iter",
            "extra": "iterations: 33928\ncpu: 24568.41546804999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41523.64599447813,
            "unit": "ns/iter",
            "extra": "iterations: 22107\ncpu: 41520.48220020807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47736.45893920904,
            "unit": "ns/iter",
            "extra": "iterations: 16780\ncpu: 47734.70202622165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59739.73492453035,
            "unit": "ns/iter",
            "extra": "iterations: 14245\ncpu: 59735.92839592841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59629.948500003135,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59628.419999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69884.43645709798,
            "unit": "ns/iter",
            "extra": "iterations: 12645\ncpu: 69878.67141162517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80130.81023959046,
            "unit": "ns/iter",
            "extra": "iterations: 10977\ncpu: 80125.37123075526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 607.7885976343969,
            "unit": "ns/iter",
            "extra": "iterations: 1151761\ncpu: 607.7558625444002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 502.69594058779023,
            "unit": "ns/iter",
            "extra": "iterations: 1378303\ncpu: 502.66189654959794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 487.4775160793121,
            "unit": "ns/iter",
            "extra": "iterations: 1434603\ncpu: 487.44481922873484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 489.62170906089875,
            "unit": "ns/iter",
            "extra": "iterations: 1438837\ncpu: 489.6007678423619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 973.0031157283547,
            "unit": "ns/iter",
            "extra": "iterations: 718933\ncpu: 972.9646573463746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4160.721120748792,
            "unit": "ns/iter",
            "extra": "iterations: 182735\ncpu: 4160.5532601855175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20276.044985250057,
            "unit": "ns/iter",
            "extra": "iterations: 40680\ncpu: 20275.540806293022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16273.61446282486,
            "unit": "ns/iter",
            "extra": "iterations: 50654\ncpu: 16273.166975954484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15453.494194348235,
            "unit": "ns/iter",
            "extra": "iterations: 53224\ncpu: 15452.705546370044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15904.081358411953,
            "unit": "ns/iter",
            "extra": "iterations: 51943\ncpu: 15903.236239724343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47883.30778546695,
            "unit": "ns/iter",
            "extra": "iterations: 17340\ncpu: 47882.797001153376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 450582.79081633035,
            "unit": "ns/iter",
            "extra": "iterations: 1960\ncpu: 450555.61224489706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 372714.5692771278,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 372687.4354561102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 369353.6854561296,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 369337.43545611046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 375691.0558683387,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 375660.2858380246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 228358.5917671888,
            "unit": "ns/iter",
            "extra": "iterations: 3814\ncpu: 228349.7115888836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 376659.68521739915,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 376652.91304347874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1908923.457732112,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1908636.9072164965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 773767.646864697,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 773753.4653465354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2582369.841225539,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2582184.6796657387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4414.935019596068,
            "unit": "ns/iter",
            "extra": "iterations: 179885\ncpu: 4414.7433082246935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20075.103007830836,
            "unit": "ns/iter",
            "extra": "iterations: 41259\ncpu: 20073.797232119075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16113.661749251183,
            "unit": "ns/iter",
            "extra": "iterations: 51382\ncpu: 16112.916974816058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15379.815387766825,
            "unit": "ns/iter",
            "extra": "iterations: 53718\ncpu: 15379.209948248257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 16136.655121678037,
            "unit": "ns/iter",
            "extra": "iterations: 51653\ncpu: 16136.282500532452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48544.64539089896,
            "unit": "ns/iter",
            "extra": "iterations: 17140\ncpu: 48542.36872812125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 475145.56474425015,
            "unit": "ns/iter",
            "extra": "iterations: 1838\ncpu: 475147.9325353649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 388385.1813309459,
            "unit": "ns/iter",
            "extra": "iterations: 2239\ncpu: 388369.67396159156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 385357.7348652065,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 385341.53778170526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 384332.79298090964,
            "unit": "ns/iter",
            "extra": "iterations: 2251\ncpu: 384315.45979564654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 228017.0740259741,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 228005.40259740312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 380070.6204950486,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 380072.2970039082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1915929.2067509356,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1915749.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 750904.7065040679,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 750861.9512195098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4396.215058537481,
            "unit": "ns/iter",
            "extra": "iterations: 182448\ncpu: 4396.049285275798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20027.782236747138,
            "unit": "ns/iter",
            "extra": "iterations: 41614\ncpu: 20026.733791512524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16061.498125243254,
            "unit": "ns/iter",
            "extra": "iterations: 51740\ncpu: 16060.945110166134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15350.814469637631,
            "unit": "ns/iter",
            "extra": "iterations: 54293\ncpu: 15350.072753393639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15960.11243181228,
            "unit": "ns/iter",
            "extra": "iterations: 52245\ncpu: 15959.26882955298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48631.01999188645,
            "unit": "ns/iter",
            "extra": "iterations: 17257\ncpu: 48628.18566378871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 455632.8457112949,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 455611.61087866157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 373712.48962834815,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 373692.4373379425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 369575.9039282959,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 369569.3851409065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 374173.64062501217,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 374162.3697916684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 230091.30448464828,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 230081.51062155794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 369310.8666380899,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 369295.3259005149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.5541288103621,
            "unit": "ns/iter",
            "extra": "iterations: 2310932\ncpu: 302.5362927165326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1622.2068884761163,
            "unit": "ns/iter",
            "extra": "iterations: 431271\ncpu: 1622.1097639303425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1269.868496124392,
            "unit": "ns/iter",
            "extra": "iterations: 552805\ncpu: 1269.7647452537565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1261.0166745034455,
            "unit": "ns/iter",
            "extra": "iterations: 557198\ncpu: 1260.9688118047784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1041.9783720512144,
            "unit": "ns/iter",
            "extra": "iterations: 666360\ncpu: 1041.9564499669798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8159.83720821996,
            "unit": "ns/iter",
            "extra": "iterations: 85895\ncpu: 8159.400430758498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19632.3481039272,
            "unit": "ns/iter",
            "extra": "iterations: 35679\ncpu: 19631.228453712556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4598.715100914371,
            "unit": "ns/iter",
            "extra": "iterations: 152110\ncpu: 4598.702912366115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4508.691883450862,
            "unit": "ns/iter",
            "extra": "iterations: 151764\ncpu: 4508.617326902292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4533.12518442798,
            "unit": "ns/iter",
            "extra": "iterations: 154532\ncpu: 4532.956280899704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9548.56021925015,
            "unit": "ns/iter",
            "extra": "iterations: 73523\ncpu: 9548.620159678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8569.468725111969,
            "unit": "ns/iter",
            "extra": "iterations: 81615\ncpu: 8569.444342339004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3246.673700771507,
            "unit": "ns/iter",
            "extra": "iterations: 215474\ncpu: 3246.60794341777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17009.01623642832,
            "unit": "ns/iter",
            "extra": "iterations: 41450\ncpu: 17008.653799758584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13090.923845379086,
            "unit": "ns/iter",
            "extra": "iterations: 53654\ncpu: 13090.250493905527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12882.633001659713,
            "unit": "ns/iter",
            "extra": "iterations: 54270\ncpu: 12881.778146305443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13779.882057594303,
            "unit": "ns/iter",
            "extra": "iterations: 51983\ncpu: 13779.087393955699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28746.605595669058,
            "unit": "ns/iter",
            "extra": "iterations: 24376\ncpu: 28744.067935674073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101156.57649442497,
            "unit": "ns/iter",
            "extra": "iterations: 6909\ncpu: 101151.7441018973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86133.51579594202,
            "unit": "ns/iter",
            "extra": "iterations: 8135\ncpu: 86132.58758451043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85168.03871828906,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 85161.98567787478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86178.70553577735,
            "unit": "ns/iter",
            "extra": "iterations: 8147\ncpu: 86174.0517982083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56040.36108655767,
            "unit": "ns/iter",
            "extra": "iterations: 12443\ncpu: 56035.77111629008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86188.34785811223,
            "unit": "ns/iter",
            "extra": "iterations: 8147\ncpu: 86181.91972505291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3166.99812283456,
            "unit": "ns/iter",
            "extra": "iterations: 221078\ncpu: 3166.8062855644125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16939.25836625828,
            "unit": "ns/iter",
            "extra": "iterations: 42014\ncpu: 16938.458609034875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12781.676825899358,
            "unit": "ns/iter",
            "extra": "iterations: 54302\ncpu: 12781.597362896186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12580.092409536086,
            "unit": "ns/iter",
            "extra": "iterations: 55741\ncpu: 12579.162555390114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12951.224943127087,
            "unit": "ns/iter",
            "extra": "iterations: 54067\ncpu: 12950.483659163518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28083.94536177627,
            "unit": "ns/iter",
            "extra": "iterations: 24891\ncpu: 28082.06580691857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99447.5643465846,
            "unit": "ns/iter",
            "extra": "iterations: 7040\ncpu: 99440.59659090913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84556.50749879218,
            "unit": "ns/iter",
            "extra": "iterations: 8268\ncpu: 84548.22206095813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83642.05688336755,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 83642.50717017264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84792.48065098925,
            "unit": "ns/iter",
            "extra": "iterations: 8295\ncpu: 84789.62025316455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56462.35960669908,
            "unit": "ns/iter",
            "extra": "iterations: 12408\ncpu: 56458.518697615065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85515.13808597767,
            "unit": "ns/iter",
            "extra": "iterations: 8234\ncpu: 85506.74034491209 ns\nthreads: 1"
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
        "date": 1705957143296,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 744.7128725170617,
            "unit": "ns/iter",
            "extra": "iterations: 941836\ncpu: 744.6352655876394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11030.758357818971,
            "unit": "ns/iter",
            "extra": "iterations: 75558\ncpu: 11029.781095317507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24114.319915007,
            "unit": "ns/iter",
            "extra": "iterations: 34356\ncpu: 24112.035743392713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37542.22578155109,
            "unit": "ns/iter",
            "extra": "iterations: 23319\ncpu: 37542.08156438956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47290.69315199355,
            "unit": "ns/iter",
            "extra": "iterations: 16764\ncpu: 47290.02028155569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58991.99069185862,
            "unit": "ns/iter",
            "extra": "iterations: 14396\ncpu: 58990.30980828008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59189.216799995855,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59187.169999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68507.97589040507,
            "unit": "ns/iter",
            "extra": "iterations: 12775\ncpu: 68505.85518591008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78513.86549022692,
            "unit": "ns/iter",
            "extra": "iterations: 11107\ncpu: 78511.89340055817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 607.944288482496,
            "unit": "ns/iter",
            "extra": "iterations: 1198298\ncpu: 607.6168031658224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 479.0351670267528,
            "unit": "ns/iter",
            "extra": "iterations: 1461113\ncpu: 479.02003472695196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 471.51114670750286,
            "unit": "ns/iter",
            "extra": "iterations: 1481424\ncpu: 471.49182138267014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 484.03669837246787,
            "unit": "ns/iter",
            "extra": "iterations: 1451890\ncpu: 483.99741027212855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 951.3413952678345,
            "unit": "ns/iter",
            "extra": "iterations: 735142\ncpu: 951.2959401040885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4461.301148999069,
            "unit": "ns/iter",
            "extra": "iterations: 183464\ncpu: 4461.089914097592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20295.496396176426,
            "unit": "ns/iter",
            "extra": "iterations: 40790\ncpu: 20295.187545967136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16281.52911039638,
            "unit": "ns/iter",
            "extra": "iterations: 50944\ncpu: 16281.085113065294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15452.527433462945,
            "unit": "ns/iter",
            "extra": "iterations: 53730\ncpu: 15452.2296668528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16025.411590385158,
            "unit": "ns/iter",
            "extra": "iterations: 51629\ncpu: 16024.645063820722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48286.149262335566,
            "unit": "ns/iter",
            "extra": "iterations: 17352\ncpu: 48284.74527431992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 443562.68165738625,
            "unit": "ns/iter",
            "extra": "iterations: 1979\ncpu: 443532.3900960075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 366525.59177618637,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 366516.1085205605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 365850.57870174537,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 365845.6088247759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 367651.28631756164,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 367640.3716216218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227666.521647304,
            "unit": "ns/iter",
            "extra": "iterations: 3788\ncpu: 227660.34846884894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 367835.53002939693,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 367818.3536329272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1897445.661122575,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1897418.295218301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 754162.7307692085,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 754129.6474358963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2558175.955678519,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2558080.886426596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4497.66199340609,
            "unit": "ns/iter",
            "extra": "iterations: 180174\ncpu: 4497.532940379856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19974.572931749106,
            "unit": "ns/iter",
            "extra": "iterations: 41436\ncpu: 19973.971908485342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16067.042747944157,
            "unit": "ns/iter",
            "extra": "iterations: 51675\ncpu: 16066.595065311993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15329.74551598661,
            "unit": "ns/iter",
            "extra": "iterations: 53858\ncpu: 15329.477514946693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15762.53053825348,
            "unit": "ns/iter",
            "extra": "iterations: 51853\ncpu: 15762.470831003036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48537.06021231232,
            "unit": "ns/iter",
            "extra": "iterations: 17239\ncpu: 48536.26660479168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 469993.05747737695,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 469977.9137839274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 386288.5997334528,
            "unit": "ns/iter",
            "extra": "iterations: 2251\ncpu: 386276.5881830312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 380111.68875328184,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 380110.3312990402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385726.6304920847,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 385720.2548330417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 228306.84306569095,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 228299.86965589185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 377867.09457093454,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 377860.770577933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1914804.1134454012,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1914743.9075630228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 747185.6781700974,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 747151.926163727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4372.990231354359,
            "unit": "ns/iter",
            "extra": "iterations: 184263\ncpu: 4372.914258424111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20485.335898072037,
            "unit": "ns/iter",
            "extra": "iterations: 40420\ncpu: 20484.982681840735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16442.68953578635,
            "unit": "ns/iter",
            "extra": "iterations: 50257\ncpu: 16442.12547505819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15623.695126794077,
            "unit": "ns/iter",
            "extra": "iterations: 52881\ncpu: 15623.203040789651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16219.190304464277,
            "unit": "ns/iter",
            "extra": "iterations: 50745\ncpu: 16218.693467336683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48630.83907717261,
            "unit": "ns/iter",
            "extra": "iterations: 17468\ncpu: 48630.67895580495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 465756.5135710513,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 465727.3017562537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 384024.9489973905,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 383978.5963382714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 377391.7313818051,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 377377.61515282193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 383005.05125978886,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 382973.28410078265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 230486.86630036132,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 230483.80429094628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 374794.4485739299,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 374769.7493517714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.9699876753356,
            "unit": "ns/iter",
            "extra": "iterations: 2304320\ncpu: 304.94419177891933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1653.3001698266642,
            "unit": "ns/iter",
            "extra": "iterations: 422784\ncpu: 1653.1663922948899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1316.0164957362235,
            "unit": "ns/iter",
            "extra": "iterations: 532380\ncpu: 1315.9893309290321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1298.780970775861,
            "unit": "ns/iter",
            "extra": "iterations: 540001\ncpu: 1298.6768543021185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1045.5393245843854,
            "unit": "ns/iter",
            "extra": "iterations: 669721\ncpu: 1045.4675902353433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8326.763500411455,
            "unit": "ns/iter",
            "extra": "iterations: 86127\ncpu: 8325.777050170087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19140.17777473815,
            "unit": "ns/iter",
            "extra": "iterations: 36535\ncpu: 19139.140550157274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4524.608161578979,
            "unit": "ns/iter",
            "extra": "iterations: 154921\ncpu: 4524.033539675044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4482.540846620371,
            "unit": "ns/iter",
            "extra": "iterations: 156292\ncpu: 4482.453996365762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4484.90811883499,
            "unit": "ns/iter",
            "extra": "iterations: 153187\ncpu: 4484.893626743725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 8641.4063015994,
            "unit": "ns/iter",
            "extra": "iterations: 81154\ncpu: 8641.010917514894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8487.701043926629,
            "unit": "ns/iter",
            "extra": "iterations: 82477\ncpu: 8487.418310559311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3199.13378672403,
            "unit": "ns/iter",
            "extra": "iterations: 219678\ncpu: 3199.0904869854908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16179.105864469833,
            "unit": "ns/iter",
            "extra": "iterations: 43414\ncpu: 16178.822499654634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12835.353985386546,
            "unit": "ns/iter",
            "extra": "iterations: 54474\ncpu: 12835.13052098226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12480.496268058738,
            "unit": "ns/iter",
            "extra": "iterations: 56137\ncpu: 12480.036339668988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13032.363475909344,
            "unit": "ns/iter",
            "extra": "iterations: 53258\ncpu: 13032.072176949874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28461.58691140263,
            "unit": "ns/iter",
            "extra": "iterations: 24571\ncpu: 28461.47083960744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100786.15120968345,
            "unit": "ns/iter",
            "extra": "iterations: 6944\ncpu: 100782.66129032125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86309.78499260046,
            "unit": "ns/iter",
            "extra": "iterations: 8116\ncpu: 86306.6781665838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85825.10950337374,
            "unit": "ns/iter",
            "extra": "iterations: 8155\ncpu: 85822.14592274712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85762.61869799753,
            "unit": "ns/iter",
            "extra": "iterations: 8172\ncpu: 85759.45912873086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56306.20723843199,
            "unit": "ns/iter",
            "extra": "iterations: 12406\ncpu: 56306.02128002571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85530.37283344535,
            "unit": "ns/iter",
            "extra": "iterations: 8135\ncpu: 85525.64228641614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3104.0401293778823,
            "unit": "ns/iter",
            "extra": "iterations: 225695\ncpu: 3103.9943286293715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15765.045435213573,
            "unit": "ns/iter",
            "extra": "iterations: 44679\ncpu: 15764.287472861986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12539.188765454113,
            "unit": "ns/iter",
            "extra": "iterations: 55810\ncpu: 12538.967926894968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12317.358674498291,
            "unit": "ns/iter",
            "extra": "iterations: 57035\ncpu: 12316.970281406086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12777.89697578655,
            "unit": "ns/iter",
            "extra": "iterations: 54725\ncpu: 12777.595248971913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27900.44235529015,
            "unit": "ns/iter",
            "extra": "iterations: 25050\ncpu: 27899.249500998038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98801.6201793059,
            "unit": "ns/iter",
            "extra": "iterations: 7027\ncpu: 98801.29500497923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84320.72847842297,
            "unit": "ns/iter",
            "extra": "iterations: 8294\ncpu: 84319.37545213406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83560.26315790026,
            "unit": "ns/iter",
            "extra": "iterations: 8398\ncpu: 83557.04929745113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84535.44037682602,
            "unit": "ns/iter",
            "extra": "iterations: 8386\ncpu: 84533.79441927075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55987.44356388405,
            "unit": "ns/iter",
            "extra": "iterations: 12492\ncpu: 55984.96637848264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83554.26235649108,
            "unit": "ns/iter",
            "extra": "iterations: 8275\ncpu: 83552.66465256833 ns\nthreads: 1"
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
        "date": 1705958571240,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 713.3264936023569,
            "unit": "ns/iter",
            "extra": "iterations: 980984\ncpu: 713.3214201250988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11085.12244354085,
            "unit": "ns/iter",
            "extra": "iterations: 75055\ncpu: 11084.456731730066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24833.878976939126,
            "unit": "ns/iter",
            "extra": "iterations: 33820\ncpu: 24832.34180958013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38230.38932157696,
            "unit": "ns/iter",
            "extra": "iterations: 21314\ncpu: 38227.615651684326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48109.45284108957,
            "unit": "ns/iter",
            "extra": "iterations: 15575\ncpu: 48107.76886035313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59978.63532401079,
            "unit": "ns/iter",
            "extra": "iterations: 14166\ncpu: 59974.5305661443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60248.330100000654,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60243.55000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69569.19781455955,
            "unit": "ns/iter",
            "extra": "iterations: 12446\ncpu: 69564.32588783548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79508.2112792271,
            "unit": "ns/iter",
            "extra": "iterations: 10905\ncpu: 79504.3741403026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 593.0777946673616,
            "unit": "ns/iter",
            "extra": "iterations: 1182189\ncpu: 593.0390995010117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 500.14345899990076,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 500.1138000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 478.6615120181362,
            "unit": "ns/iter",
            "extra": "iterations: 1461464\ncpu: 478.6325219095371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 492.27685638856445,
            "unit": "ns/iter",
            "extra": "iterations: 1396623\ncpu: 492.24579575160845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 973.3441049996045,
            "unit": "ns/iter",
            "extra": "iterations: 725793\ncpu: 973.2824648350168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4406.317455795054,
            "unit": "ns/iter",
            "extra": "iterations: 182501\ncpu: 4406.052569574963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20321.07609633378,
            "unit": "ns/iter",
            "extra": "iterations: 40567\ncpu: 20319.70074198243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16280.748087539507,
            "unit": "ns/iter",
            "extra": "iterations: 50720\ncpu: 16279.826498422708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15320.89466237086,
            "unit": "ns/iter",
            "extra": "iterations: 53713\ncpu: 15320.479213598162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15803.764293148799,
            "unit": "ns/iter",
            "extra": "iterations: 51878\ncpu: 15803.249932534027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 49371.25567200447,
            "unit": "ns/iter",
            "extra": "iterations: 17366\ncpu: 49368.38650236112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 449679.39049700263,
            "unit": "ns/iter",
            "extra": "iterations: 1831\ncpu: 449668.104860732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 371064.8062180923,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 371041.6098807484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 364006.9167013833,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 363973.09454393963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 372288.39256729424,
            "unit": "ns/iter",
            "extra": "iterations: 2341\ncpu: 372264.4169158478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227569.60094020996,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 227553.87829720546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 366576.5362379432,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 366561.4160033517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1894862.0821355104,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1894685.215605751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 739432.0109889869,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 739401.4128728429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2532193.068493006,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2531976.9863013728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4496.139601360079,
            "unit": "ns/iter",
            "extra": "iterations: 180514\ncpu: 4495.772627053853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20058.852209711593,
            "unit": "ns/iter",
            "extra": "iterations: 41295\ncpu: 20057.554183315086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16019.558113820682,
            "unit": "ns/iter",
            "extra": "iterations: 51554\ncpu: 16019.028591379933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15326.606605381998,
            "unit": "ns/iter",
            "extra": "iterations: 53956\ncpu: 15326.339980724933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15843.849429803984,
            "unit": "ns/iter",
            "extra": "iterations: 52175\ncpu: 15843.526593195986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48890.846100242175,
            "unit": "ns/iter",
            "extra": "iterations: 17219\ncpu: 48889.8832684822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 472786.06864868355,
            "unit": "ns/iter",
            "extra": "iterations: 1850\ncpu: 472778.1621621632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 390163.8832214926,
            "unit": "ns/iter",
            "extra": "iterations: 2235\ncpu: 390153.60178970906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 383515.37819949345,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 383506.44307149184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 387926.95004456956,
            "unit": "ns/iter",
            "extra": "iterations: 2242\ncpu: 387924.576271188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 228560.0406885735,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 228554.799165362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 383776.56801065325,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 383755.9592379252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1905434.3158995644,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1905365.0627615042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 748478.8210272776,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 748460.433386838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4504.117877110406,
            "unit": "ns/iter",
            "extra": "iterations: 181545\ncpu: 4503.89985953897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20516.68983471094,
            "unit": "ns/iter",
            "extra": "iterations: 40717\ncpu: 20515.799297590558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16346.745862191145,
            "unit": "ns/iter",
            "extra": "iterations: 51114\ncpu: 16346.61345228307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15519.563099769162,
            "unit": "ns/iter",
            "extra": "iterations: 53875\ncpu: 15518.76009280745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16233.50462228845,
            "unit": "ns/iter",
            "extra": "iterations: 51706\ncpu: 16232.412099176216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 49108.94266383958,
            "unit": "ns/iter",
            "extra": "iterations: 17441\ncpu: 49106.25537526493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 449378.8566994513,
            "unit": "ns/iter",
            "extra": "iterations: 1933\ncpu: 449348.8360062072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 377902.7519514113,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 377883.99826539465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 373378.8286203543,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 373357.02656384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 377652.71366779937,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 377651.5138408303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 230090.91084965915,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 230078.79738562074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 371941.1349956832,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 371915.7781599325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 300.36307302460324,
            "unit": "ns/iter",
            "extra": "iterations: 2327518\ncpu: 300.3485687328716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1641.4018330898518,
            "unit": "ns/iter",
            "extra": "iterations: 426493\ncpu: 1641.319318253755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1262.7857049054007,
            "unit": "ns/iter",
            "extra": "iterations: 555869\ncpu: 1262.7669468885597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1291.5143076741379,
            "unit": "ns/iter",
            "extra": "iterations: 541248\ncpu: 1291.4660192739652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1039.8037781506098,
            "unit": "ns/iter",
            "extra": "iterations: 673610\ncpu: 1039.7056160092643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8192.614993053792,
            "unit": "ns/iter",
            "extra": "iterations: 85653\ncpu: 8192.141547873473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18959.342841679365,
            "unit": "ns/iter",
            "extra": "iterations: 36950\ncpu: 18958.25710419471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4543.910802846206,
            "unit": "ns/iter",
            "extra": "iterations: 154052\ncpu: 4543.6696699816075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4475.603487330116,
            "unit": "ns/iter",
            "extra": "iterations: 156280\ncpu: 4475.422958791913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4540.255432950236,
            "unit": "ns/iter",
            "extra": "iterations: 154244\ncpu: 4540.226524208454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9546.82415210768,
            "unit": "ns/iter",
            "extra": "iterations: 73211\ncpu: 9546.64872765028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8508.317093881591,
            "unit": "ns/iter",
            "extra": "iterations: 82433\ncpu: 8507.924011014911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3201.3206513801338,
            "unit": "ns/iter",
            "extra": "iterations: 219104\ncpu: 3201.0533810428274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15998.04596644561,
            "unit": "ns/iter",
            "extra": "iterations: 43510\ncpu: 15997.255803263371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12885.162481834326,
            "unit": "ns/iter",
            "extra": "iterations: 54363\ncpu: 12884.331254713696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12670.184466898027,
            "unit": "ns/iter",
            "extra": "iterations: 55327\ncpu: 12669.307932835522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13170.382293873792,
            "unit": "ns/iter",
            "extra": "iterations: 53281\ncpu: 13169.70777575502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28368.975722449304,
            "unit": "ns/iter",
            "extra": "iterations: 24673\ncpu: 28366.663964657615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101267.77135025119,
            "unit": "ns/iter",
            "extra": "iterations: 6932\ncpu: 101267.18118869074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85807.93992628361,
            "unit": "ns/iter",
            "extra": "iterations: 8140\ncpu: 85802.24815724796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85403.27777101124,
            "unit": "ns/iter",
            "extra": "iterations: 8201\ncpu: 85398.26850384101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85849.15922709712,
            "unit": "ns/iter",
            "extra": "iterations: 8177\ncpu: 85842.06921853946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55666.564244919726,
            "unit": "ns/iter",
            "extra": "iterations: 12608\ncpu: 55663.57868020267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85631.31362751029,
            "unit": "ns/iter",
            "extra": "iterations: 8204\ncpu: 85629.8878595812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3160.645835483821,
            "unit": "ns/iter",
            "extra": "iterations: 222823\ncpu: 3160.5871027676585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15909.945968619413,
            "unit": "ns/iter",
            "extra": "iterations: 44104\ncpu: 15909.334754217347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12620.454133047358,
            "unit": "ns/iter",
            "extra": "iterations: 55770\ncpu: 12619.228976152059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12315.939036641737,
            "unit": "ns/iter",
            "extra": "iterations: 56739\ncpu: 12315.150073141982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12706.503362274263,
            "unit": "ns/iter",
            "extra": "iterations: 55171\ncpu: 12705.905276322701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28153.850050291432,
            "unit": "ns/iter",
            "extra": "iterations: 24855\ncpu: 28152.17058941849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98845.72408429255,
            "unit": "ns/iter",
            "extra": "iterations: 7071\ncpu: 98839.64078631048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84273.81356960694,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 84271.1251365456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83918.26175844892,
            "unit": "ns/iter",
            "extra": "iterations: 8462\ncpu: 83913.98014653735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83490.79616849209,
            "unit": "ns/iter",
            "extra": "iterations: 8404\ncpu: 83485.68538791171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55691.3407065597,
            "unit": "ns/iter",
            "extra": "iterations: 12568\ncpu: 55687.61935073221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85309.2465523487,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 85302.79410001112 ns\nthreads: 1"
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
        "date": 1705960012752,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 724.0828378760168,
            "unit": "ns/iter",
            "extra": "iterations: 960056\ncpu: 724.0579716183223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10816.338439095693,
            "unit": "ns/iter",
            "extra": "iterations: 76776\ncpu: 10815.737991038864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24474.674356209653,
            "unit": "ns/iter",
            "extra": "iterations: 34289\ncpu: 24473.116742978797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38187.251881027136,
            "unit": "ns/iter",
            "extra": "iterations: 22594\ncpu: 38184.43392050986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48265.72139924472,
            "unit": "ns/iter",
            "extra": "iterations: 16809\ncpu: 48262.09173656969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 63276.42069892126,
            "unit": "ns/iter",
            "extra": "iterations: 14136\ncpu: 63269.87125070742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59739.177699998436,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59735.88999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69295.73139415843,
            "unit": "ns/iter",
            "extra": "iterations: 12617\ncpu: 69290.29087738761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78747.77808938043,
            "unit": "ns/iter",
            "extra": "iterations: 11054\ncpu: 78741.46915143839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 589.2706744904903,
            "unit": "ns/iter",
            "extra": "iterations: 1185265\ncpu: 589.2294972010484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 500.8513340000036,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 500.8069000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 483.4009029819251,
            "unit": "ns/iter",
            "extra": "iterations: 1448091\ncpu: 483.36437420024083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 496.92571905643285,
            "unit": "ns/iter",
            "extra": "iterations: 1391824\ncpu: 496.88351400751844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 960.7600876022387,
            "unit": "ns/iter",
            "extra": "iterations: 730575\ncpu: 960.7286041816373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4304.49594857428,
            "unit": "ns/iter",
            "extra": "iterations: 185120\ncpu: 4304.267502160752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20326.357853669684,
            "unit": "ns/iter",
            "extra": "iterations: 40497\ncpu: 20325.029014494896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16136.259617078198,
            "unit": "ns/iter",
            "extra": "iterations: 51133\ncpu: 16135.42721921264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15438.933441769535,
            "unit": "ns/iter",
            "extra": "iterations: 53487\ncpu: 15437.934451362018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15868.792939354975,
            "unit": "ns/iter",
            "extra": "iterations: 51695\ncpu: 15868.205822613445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48639.454018272176,
            "unit": "ns/iter",
            "extra": "iterations: 17072\ncpu: 48636.32263355197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 447129.3607068135,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 447098.02494802553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 366695.4222127886,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 366674.22636710556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 368675.062340951,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 368667.72688719194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 370021.7530811803,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 370001.31746706326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 225670.9245282807,
            "unit": "ns/iter",
            "extra": "iterations: 3816\ncpu: 225656.6823899376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 372384.6131511432,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 372354.739538856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1909298.3319587428,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1909149.0721649507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 752363.4611066165,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 752308.7409783481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2544914.4060774376,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2544580.662983429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4280.37994691368,
            "unit": "ns/iter",
            "extra": "iterations: 183852\ncpu: 4280.165024041084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20512.70510663521,
            "unit": "ns/iter",
            "extra": "iterations: 40418\ncpu: 20511.358800534468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16125.960188538857,
            "unit": "ns/iter",
            "extra": "iterations: 51342\ncpu: 16124.706867671739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15452.002401473905,
            "unit": "ns/iter",
            "extra": "iterations: 53717\ncpu: 15451.00247593876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15984.447768653932,
            "unit": "ns/iter",
            "extra": "iterations: 52009\ncpu: 15983.464400392311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 49163.982569172316,
            "unit": "ns/iter",
            "extra": "iterations: 17383\ncpu: 49162.04912845893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 471204.0804597603,
            "unit": "ns/iter",
            "extra": "iterations: 1827\ncpu: 471166.5024630562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 384844.71592921455,
            "unit": "ns/iter",
            "extra": "iterations: 2260\ncpu: 384821.2831858402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 382749.7889624705,
            "unit": "ns/iter",
            "extra": "iterations: 2265\ncpu: 382724.01766004623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385225.3434744128,
            "unit": "ns/iter",
            "extra": "iterations: 2268\ncpu: 385199.29453262815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 225318.8391101685,
            "unit": "ns/iter",
            "extra": "iterations: 3866\ncpu: 225309.88101396838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 380361.5581192699,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 380340.2699172861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1923205.303347234,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1923081.171548109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 734557.5869737597,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 734497.2994440031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4406.341999582895,
            "unit": "ns/iter",
            "extra": "iterations: 182278\ncpu: 4406.068752125891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20078.04828920377,
            "unit": "ns/iter",
            "extra": "iterations: 41355\ncpu: 20076.80328859872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16091.949288567068,
            "unit": "ns/iter",
            "extra": "iterations: 51586\ncpu: 16090.978172372288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15352.285253138938,
            "unit": "ns/iter",
            "extra": "iterations: 53903\ncpu: 15351.186390367879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15870.241297436953,
            "unit": "ns/iter",
            "extra": "iterations: 52226\ncpu: 15869.270095354701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48024.4720859056,
            "unit": "ns/iter",
            "extra": "iterations: 17321\ncpu: 48021.59806015808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 457417.48660234397,
            "unit": "ns/iter",
            "extra": "iterations: 1866\ncpu: 457398.82100750174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 372239.9067649637,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 372213.2697311365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 368649.7633753899,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 368631.14397564327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 375001.51999997004,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 374970.9565217383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 233850.9561586842,
            "unit": "ns/iter",
            "extra": "iterations: 3832\ncpu: 233832.933194154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 375332.36466489197,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 375310.35683202813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 301.32952833583875,
            "unit": "ns/iter",
            "extra": "iterations: 2323348\ncpu: 301.31848522046556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1644.4157343413442,
            "unit": "ns/iter",
            "extra": "iterations: 426532\ncpu: 1644.3005448594786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1255.019702431736,
            "unit": "ns/iter",
            "extra": "iterations: 558662\ncpu: 1254.9290984530976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1278.4722260073472,
            "unit": "ns/iter",
            "extra": "iterations: 565079\ncpu: 1278.4054972844406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1043.482606784433,
            "unit": "ns/iter",
            "extra": "iterations: 671095\ncpu: 1043.4287246962033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8194.492276452249,
            "unit": "ns/iter",
            "extra": "iterations: 85194\ncpu: 8194.266028124155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19097.18434474432,
            "unit": "ns/iter",
            "extra": "iterations: 36665\ncpu: 19096.448929496626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4507.572830358564,
            "unit": "ns/iter",
            "extra": "iterations: 155210\ncpu: 4507.305585980231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4512.27995550126,
            "unit": "ns/iter",
            "extra": "iterations: 156407\ncpu: 4511.984118357862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4512.652737965902,
            "unit": "ns/iter",
            "extra": "iterations: 155243\ncpu: 4512.355468523532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9501.211045391541,
            "unit": "ns/iter",
            "extra": "iterations: 73714\ncpu: 9500.381203027828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8090.521781309269,
            "unit": "ns/iter",
            "extra": "iterations: 86588\ncpu: 8090.092160576507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3239.1606669509197,
            "unit": "ns/iter",
            "extra": "iterations: 215788\ncpu: 3239.0049493021065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16011.52271100145,
            "unit": "ns/iter",
            "extra": "iterations: 43305\ncpu: 16010.673132432827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12750.307426157451,
            "unit": "ns/iter",
            "extra": "iterations: 54914\ncpu: 12749.765087227255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12687.338851618639,
            "unit": "ns/iter",
            "extra": "iterations: 55452\ncpu: 12686.95267979508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13167.028457886574,
            "unit": "ns/iter",
            "extra": "iterations: 53096\ncpu: 13166.914645171073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28481.614986654848,
            "unit": "ns/iter",
            "extra": "iterations: 24355\ncpu: 28480.648737425723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99282.99518957724,
            "unit": "ns/iter",
            "extra": "iterations: 7068\ncpu: 99276.83927560713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85603.03259005025,
            "unit": "ns/iter",
            "extra": "iterations: 8162\ncpu: 85598.48076451849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84370.05331081647,
            "unit": "ns/iter",
            "extra": "iterations: 8291\ncpu: 84366.1078277652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85364.0559922695,
            "unit": "ns/iter",
            "extra": "iterations: 8269\ncpu: 85363.3692103045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55876.030419158575,
            "unit": "ns/iter",
            "extra": "iterations: 12525\ncpu: 55874.18762475121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85522.02254723186,
            "unit": "ns/iter",
            "extra": "iterations: 8205\ncpu: 85518.53747714704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3135.538990415488,
            "unit": "ns/iter",
            "extra": "iterations: 223696\ncpu: 3135.3604892353796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15892.70499942547,
            "unit": "ns/iter",
            "extra": "iterations: 43705\ncpu: 15892.103878274573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12648.24142487562,
            "unit": "ns/iter",
            "extra": "iterations: 55247\ncpu: 12647.906673665564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12360.682430119146,
            "unit": "ns/iter",
            "extra": "iterations: 55487\ncpu: 12360.033881810272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12832.029627739777,
            "unit": "ns/iter",
            "extra": "iterations: 54881\ncpu: 12831.746870501429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28056.069353027884,
            "unit": "ns/iter",
            "extra": "iterations: 24916\ncpu: 28054.872371167326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99450.11820231234,
            "unit": "ns/iter",
            "extra": "iterations: 7098\ncpu: 99449.23922231782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83742.40324927207,
            "unit": "ns/iter",
            "extra": "iterations: 8248\ncpu: 83738.27594568382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83171.29825394471,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 83167.3239102038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84599.04651722398,
            "unit": "ns/iter",
            "extra": "iterations: 8298\ncpu: 84595.37237888678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56699.44975728166,
            "unit": "ns/iter",
            "extra": "iterations: 12360\ncpu: 56697.677993527315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86532.4990135659,
            "unit": "ns/iter",
            "extra": "iterations: 8110\ncpu: 86531.73859432747 ns\nthreads: 1"
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
        "date": 1705962093399,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 711.4976361327747,
            "unit": "ns/iter",
            "extra": "iterations: 980385\ncpu: 711.4491755789818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11106.543541421135,
            "unit": "ns/iter",
            "extra": "iterations: 76410\ncpu: 11105.870959298521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24666.397760265383,
            "unit": "ns/iter",
            "extra": "iterations: 33754\ncpu: 24665.058955975586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38434.928486512144,
            "unit": "ns/iter",
            "extra": "iterations: 21870\ncpu: 38432.43712848651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48989.04312851607,
            "unit": "ns/iter",
            "extra": "iterations: 16161\ncpu: 48986.46123383457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50534.980400004766,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50529.810000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62710.680199995746,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62708.65999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70219.78604952845,
            "unit": "ns/iter",
            "extra": "iterations: 12358\ncpu: 70216.07865350379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80145.4961726424,
            "unit": "ns/iter",
            "extra": "iterations: 10843\ncpu: 80138.31965323248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 597.0035098944376,
            "unit": "ns/iter",
            "extra": "iterations: 1172115\ncpu: 596.9799891648858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 499.2185990795583,
            "unit": "ns/iter",
            "extra": "iterations: 1400779\ncpu: 499.2100110010216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 484.48321340681724,
            "unit": "ns/iter",
            "extra": "iterations: 1442133\ncpu: 484.480626960204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 494.6557875011862,
            "unit": "ns/iter",
            "extra": "iterations: 1415274\ncpu: 494.62994444891984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 988.712992423583,
            "unit": "ns/iter",
            "extra": "iterations: 709044\ncpu: 988.6459796571171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4396.760499655974,
            "unit": "ns/iter",
            "extra": "iterations: 183006\ncpu: 4396.571150672657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20241.870840092306,
            "unit": "ns/iter",
            "extra": "iterations: 40686\ncpu: 20240.901047043193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16227.916956114957,
            "unit": "ns/iter",
            "extra": "iterations: 50383\ncpu: 16227.183772304135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15410.614531326553,
            "unit": "ns/iter",
            "extra": "iterations: 53278\ncpu: 15409.4523067683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15461.40429331194,
            "unit": "ns/iter",
            "extra": "iterations: 51522\ncpu: 15461.216567679807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48310.87749797489,
            "unit": "ns/iter",
            "extra": "iterations: 17314\ncpu: 48308.64040660743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 454182.0444679498,
            "unit": "ns/iter",
            "extra": "iterations: 1889\ncpu: 454173.4250926411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 370133.3638306662,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 370123.4715690465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 371501.6967004713,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 371489.38240270707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 378615.46223958186,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 378609.8090277773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 230372.32890187926,
            "unit": "ns/iter",
            "extra": "iterations: 3761\ncpu: 230357.883541611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 372592.3288135969,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 372586.99152542313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1903213.89211632,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1902902.9045643131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 771180.662875766,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 771172.5426482544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2540371.4490358243,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2540191.4600550923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4376.1553391609195,
            "unit": "ns/iter",
            "extra": "iterations: 180534\ncpu: 4376.053264205092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19931.671339113786,
            "unit": "ns/iter",
            "extra": "iterations: 41520\ncpu: 19931.13198458563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15919.650358912966,
            "unit": "ns/iter",
            "extra": "iterations: 52102\ncpu: 15919.768914820948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15279.427446714004,
            "unit": "ns/iter",
            "extra": "iterations: 54236\ncpu: 15279.115347739596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15768.106465932875,
            "unit": "ns/iter",
            "extra": "iterations: 51810\ncpu: 15768.232001544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48557.33692969953,
            "unit": "ns/iter",
            "extra": "iterations: 17425\ncpu: 48555.36298421828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 470968.1978320053,
            "unit": "ns/iter",
            "extra": "iterations: 1845\ncpu: 470901.951219513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 385865.8136646057,
            "unit": "ns/iter",
            "extra": "iterations: 2254\ncpu: 385835.22626441624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 384200.9426807776,
            "unit": "ns/iter",
            "extra": "iterations: 2268\ncpu: 384190.2557319232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 384877.564872042,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 384857.8111209191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 229750.3823375247,
            "unit": "ns/iter",
            "extra": "iterations: 3816\ncpu: 229736.97589098525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 383353.9956159826,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 383333.1871985978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1919282.706131116,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1919219.2389006335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 745289.586538397,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 745254.0064102599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4392.844957485711,
            "unit": "ns/iter",
            "extra": "iterations: 181705\ncpu: 4392.780055584598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20040.191443616255,
            "unit": "ns/iter",
            "extra": "iterations: 41396\ncpu: 20038.66798724505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16103.447822882697,
            "unit": "ns/iter",
            "extra": "iterations: 51536\ncpu: 16103.240453275477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15417.80570049207,
            "unit": "ns/iter",
            "extra": "iterations: 53855\ncpu: 15416.860087271383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15908.487667357855,
            "unit": "ns/iter",
            "extra": "iterations: 51611\ncpu: 15908.248241653979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46338.44825446886,
            "unit": "ns/iter",
            "extra": "iterations: 17731\ncpu: 46336.69843776434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 461391.95298463653,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 461375.0660327544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 379462.28640140267,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 379444.8622649777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 373912.2225074672,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 373890.1583226378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 380338.7845617373,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 380320.7588312259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 229548.71398636425,
            "unit": "ns/iter",
            "extra": "iterations: 3818\ncpu: 229532.13724463142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 376860.4724511707,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 376863.51409978274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.02595788376954,
            "unit": "ns/iter",
            "extra": "iterations: 2318679\ncpu: 302.0023901540489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1652.9560687791075,
            "unit": "ns/iter",
            "extra": "iterations: 405065\ncpu: 1652.940392282726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1302.4878421804976,
            "unit": "ns/iter",
            "extra": "iterations: 536157\ncpu: 1302.4625249693597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1295.6890585082444,
            "unit": "ns/iter",
            "extra": "iterations: 541343\ncpu: 1295.631235649111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1037.7468171653327,
            "unit": "ns/iter",
            "extra": "iterations: 673849\ncpu: 1037.690046286334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8192.626363211248,
            "unit": "ns/iter",
            "extra": "iterations: 85460\ncpu: 8192.183477650482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19173.65715066346,
            "unit": "ns/iter",
            "extra": "iterations: 36605\ncpu: 19172.77694304093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4513.009720824866,
            "unit": "ns/iter",
            "extra": "iterations: 155028\ncpu: 4512.771886368841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4469.219817862694,
            "unit": "ns/iter",
            "extra": "iterations: 156475\ncpu: 4468.954785109476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4513.20446063059,
            "unit": "ns/iter",
            "extra": "iterations: 155135\ncpu: 4513.052502658981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9797.312887194148,
            "unit": "ns/iter",
            "extra": "iterations: 71831\ncpu: 9796.65743202803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8560.97968541103,
            "unit": "ns/iter",
            "extra": "iterations: 81567\ncpu: 8560.55880441847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3198.104918390448,
            "unit": "ns/iter",
            "extra": "iterations: 220133\ncpu: 3197.9153511740406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16004.06421410821,
            "unit": "ns/iter",
            "extra": "iterations: 43791\ncpu: 16003.14904889118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12838.948084529748,
            "unit": "ns/iter",
            "extra": "iterations: 54608\ncpu: 12838.17206270145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12582.79532258693,
            "unit": "ns/iter",
            "extra": "iterations: 55458\ncpu: 12582.500270474904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13122.705022453209,
            "unit": "ns/iter",
            "extra": "iterations: 53221\ncpu: 13122.808665752205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28479.871586144352,
            "unit": "ns/iter",
            "extra": "iterations: 24569\ncpu: 28479.079327607997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101005.4813183754,
            "unit": "ns/iter",
            "extra": "iterations: 7039\ncpu: 100998.15314675389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86593.61302682826,
            "unit": "ns/iter",
            "extra": "iterations: 8091\ncpu: 86586.21925596287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85955.91268472397,
            "unit": "ns/iter",
            "extra": "iterations: 8120\ncpu: 85950.86206896475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86529.61617410745,
            "unit": "ns/iter",
            "extra": "iterations: 8087\ncpu: 86530.15951527067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56737.49446253795,
            "unit": "ns/iter",
            "extra": "iterations: 12280\ncpu: 56735.62703583072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86042.96406597202,
            "unit": "ns/iter",
            "extra": "iterations: 8126\ncpu: 86038.23529411765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3129.635411090558,
            "unit": "ns/iter",
            "extra": "iterations: 224184\ncpu: 3129.3361702886873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15830.615752976342,
            "unit": "ns/iter",
            "extra": "iterations: 44271\ncpu: 15829.744076257568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12580.682422238531,
            "unit": "ns/iter",
            "extra": "iterations: 55684\ncpu: 12580.118166798404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12459.44838056672,
            "unit": "ns/iter",
            "extra": "iterations: 56316\ncpu: 12458.672490943838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12838.657665919862,
            "unit": "ns/iter",
            "extra": "iterations: 54514\ncpu: 12838.56990864732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27776.224463111183,
            "unit": "ns/iter",
            "extra": "iterations: 25238\ncpu: 27775.307076630444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99986.38339750894,
            "unit": "ns/iter",
            "extra": "iterations: 7011\ncpu: 99987.19155612594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84899.75760514456,
            "unit": "ns/iter",
            "extra": "iterations: 8251\ncpu: 84895.18846200437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83471.26405634283,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 83466.94520711551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84151.097944957,
            "unit": "ns/iter",
            "extra": "iterations: 8321\ncpu: 84147.18182910686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56579.28543642304,
            "unit": "ns/iter",
            "extra": "iterations: 12339\ncpu: 56578.27214523072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84869.84986076005,
            "unit": "ns/iter",
            "extra": "iterations: 8259\ncpu: 84870.43225572056 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}