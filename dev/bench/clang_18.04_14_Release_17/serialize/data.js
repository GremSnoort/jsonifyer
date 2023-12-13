window.BENCHMARK_DATA = {
  "lastUpdate": 1702492953962,
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
      }
    ]
  }
}