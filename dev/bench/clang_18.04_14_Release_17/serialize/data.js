window.BENCHMARK_DATA = {
  "lastUpdate": 1702490320606,
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
      }
    ]
  }
}