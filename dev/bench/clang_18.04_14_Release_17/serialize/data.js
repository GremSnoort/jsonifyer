window.BENCHMARK_DATA = {
  "lastUpdate": 1705773467999,
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
      }
    ]
  }
}