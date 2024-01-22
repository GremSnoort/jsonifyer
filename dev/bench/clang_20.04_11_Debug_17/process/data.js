window.BENCHMARK_DATA = {
  "lastUpdate": 1705954346405,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-11 20.04 Debug c++-17": [
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
        "date": 1702489551965,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16297.501371053264,
            "unit": "ns/iter",
            "extra": "iterations: 43762\ncpu: 16297.502399341894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 130493.22765105062,
            "unit": "ns/iter",
            "extra": "iterations: 6488\ncpu: 130493.21824907522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 244282.49675966825,
            "unit": "ns/iter",
            "extra": "iterations: 3549\ncpu: 244276.64130741058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 361327.33001246693,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 361312.4117891242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 470519.2212006823,
            "unit": "ns/iter",
            "extra": "iterations: 1849\ncpu: 470506.00324499706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 585622.5771043628,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 585622.2222222221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 560591.4930000608,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560560.6000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 650393.9199999422,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650394.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 742282.8372092812,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 742259.8235765845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12930.546399364288,
            "unit": "ns/iter",
            "extra": "iterations: 54171\ncpu: 12930.270809104493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10887.88809834877,
            "unit": "ns/iter",
            "extra": "iterations: 65075\ncpu: 10887.884748367265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10745.250253371492,
            "unit": "ns/iter",
            "extra": "iterations: 65122\ncpu: 10744.255397561503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10633.95901116965,
            "unit": "ns/iter",
            "extra": "iterations: 65896\ncpu: 10633.325239771777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18286.07061312929,
            "unit": "ns/iter",
            "extra": "iterations: 38279\ncpu: 18284.662608741088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56195.70600858179,
            "unit": "ns/iter",
            "extra": "iterations: 14446\ncpu: 56192.39928007747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 246720.87514416478,
            "unit": "ns/iter",
            "extra": "iterations: 3468\ncpu: 246699.56747404867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 200281.86466698605,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 200270.8313651397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 200789.3920922394,
            "unit": "ns/iter",
            "extra": "iterations: 4249\ncpu: 200773.89974111546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195710.26923960028,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 195694.09602572917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 492276.2455056513,
            "unit": "ns/iter",
            "extra": "iterations: 1780\ncpu: 492248.6516853928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4054453.108224782,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4054217.7489177426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3223171.6585364845,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3222948.4320557467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3266980.950704244,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3266591.197183093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3226661.076655229,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3226496.5156794465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1898907.0905350382,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1898810.288065846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3165988.5938566145,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3165677.8156996584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12205090.264368163,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12203947.126436792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5508472.970000185,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5508481.000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15990418.83333436,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 15990181.818181805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54547.721099993396,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54547.80999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290768.7021783764,
            "unit": "ns/iter",
            "extra": "iterations: 2938\ncpu: 290760.449285228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 232618.77219656022,
            "unit": "ns/iter",
            "extra": "iterations: 3683\ncpu: 232619.03339668855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 230545.37960720313,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 230533.4409469995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 221613.47811445768,
            "unit": "ns/iter",
            "extra": "iterations: 3861\ncpu: 221603.67780367922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 523437.67010938376,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 523425.27339003346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4095453.5110131474,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4095271.806167401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3277462.5477031004,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3277421.5547703234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3335360.695340517,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3335318.279569887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3300098.19148914,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3299983.6879432676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1953372.4411763889,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1953314.0756302522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3227039.1354166525,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3226720.486111094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12533844.47619104,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12533674.99999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5392796.359999466,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5392365.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57994.99143241272,
            "unit": "ns/iter",
            "extra": "iterations: 14123\ncpu: 57993.910642214985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 245235.3634027831,
            "unit": "ns/iter",
            "extra": "iterations: 3503\ncpu: 245217.7847559231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 198815.45139535476,
            "unit": "ns/iter",
            "extra": "iterations: 4300\ncpu: 198815.4651162787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 207986.38497082915,
            "unit": "ns/iter",
            "extra": "iterations: 4112\ncpu: 207975.72957198488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 195458.68034853454,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 195453.19880761355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 477850.28405312716,
            "unit": "ns/iter",
            "extra": "iterations: 1806\ncpu: 477830.17718715116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4085089.2412276664,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4084907.017543852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3232000.6271778867,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3231632.7526132427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3290585.9575968906,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3290283.0388692454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3242524.933566417,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3242343.0069930055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1928414.7780082787,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1928342.5311203268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3195525.127586248,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3195304.482758622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6343.325845131309,
            "unit": "ns/iter",
            "extra": "iterations: 110752\ncpu: 6343.100801791411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35611.18779867799,
            "unit": "ns/iter",
            "extra": "iterations: 19670\ncpu: 35610.35587188608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29281.889097901832,
            "unit": "ns/iter",
            "extra": "iterations: 23922\ncpu: 29281.3686146645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29233.98444212954,
            "unit": "ns/iter",
            "extra": "iterations: 23975\ncpu: 29233.017726798884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22629.316276657668,
            "unit": "ns/iter",
            "extra": "iterations: 30897\ncpu: 22628.886299640882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 137224.34977491933,
            "unit": "ns/iter",
            "extra": "iterations: 5109\ncpu: 137222.56801722362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 277266.2371338168,
            "unit": "ns/iter",
            "extra": "iterations: 2526\ncpu: 277261.6785431552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69859.32316709915,
            "unit": "ns/iter",
            "extra": "iterations: 10066\ncpu: 69854.72878998665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70176.74884561988,
            "unit": "ns/iter",
            "extra": "iterations: 9962\ncpu: 70171.0600281077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69494.76744417015,
            "unit": "ns/iter",
            "extra": "iterations: 10075\ncpu: 69488.7344913146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 141244.13138244202,
            "unit": "ns/iter",
            "extra": "iterations: 4955\ncpu: 141241.8567103954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 130366.6497858725,
            "unit": "ns/iter",
            "extra": "iterations: 5371\ncpu: 130364.94135170366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43621.39520099653,
            "unit": "ns/iter",
            "extra": "iterations: 16045\ncpu: 43617.6628233095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 214397.33792048914,
            "unit": "ns/iter",
            "extra": "iterations: 3270\ncpu: 214393.05810397875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 172614.333251051,
            "unit": "ns/iter",
            "extra": "iterations: 4051\ncpu: 172614.39150826924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 171153.75904201803,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 171148.09384164275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 172697.0922090853,
            "unit": "ns/iter",
            "extra": "iterations: 4056\ncpu: 172687.00690335254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 310635.58721706975,
            "unit": "ns/iter",
            "extra": "iterations: 2253\ncpu: 310617.2658677335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1203069.8384880072,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1202989.1752577217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1014574.6313558597,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1014536.5819208998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 999292.4807417179,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 999149.215406564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 988909.1765537203,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 988841.1016949057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 652639.5774253004,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 652619.9626865716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1014192.8295774639,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1014094.7887324027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44149.6664557777,
            "unit": "ns/iter",
            "extra": "iterations: 15806\ncpu: 44148.709350878955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 213228.783495729,
            "unit": "ns/iter",
            "extra": "iterations: 3284\ncpu: 213218.60535931925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 174478.20193982535,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 174459.2141258415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 174217.76723921657,
            "unit": "ns/iter",
            "extra": "iterations: 4017\ncpu: 174201.3442867827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 172452.85981768946,
            "unit": "ns/iter",
            "extra": "iterations: 4059\ncpu: 172439.59103227404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 307286.1901625122,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 307265.3052261761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1199905.5111491496,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1199757.4614065175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 994318.9450704152,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 994211.408450711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 992560.1765537444,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 992545.7627118629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 983817.5407304178,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 983803.7921348275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 648979.831168861,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 648910.8534322798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 983287.9269662579,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 983193.5393258425 ns\nthreads: 1"
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
        "date": 1702489551965,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16297.501371053264,
            "unit": "ns/iter",
            "extra": "iterations: 43762\ncpu: 16297.502399341894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 130493.22765105062,
            "unit": "ns/iter",
            "extra": "iterations: 6488\ncpu: 130493.21824907522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 244282.49675966825,
            "unit": "ns/iter",
            "extra": "iterations: 3549\ncpu: 244276.64130741058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 361327.33001246693,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 361312.4117891242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 470519.2212006823,
            "unit": "ns/iter",
            "extra": "iterations: 1849\ncpu: 470506.00324499706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 585622.5771043628,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 585622.2222222221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 560591.4930000608,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560560.6000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 650393.9199999422,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650394.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 742282.8372092812,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 742259.8235765845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12930.546399364288,
            "unit": "ns/iter",
            "extra": "iterations: 54171\ncpu: 12930.270809104493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10887.88809834877,
            "unit": "ns/iter",
            "extra": "iterations: 65075\ncpu: 10887.884748367265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10745.250253371492,
            "unit": "ns/iter",
            "extra": "iterations: 65122\ncpu: 10744.255397561503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10633.95901116965,
            "unit": "ns/iter",
            "extra": "iterations: 65896\ncpu: 10633.325239771777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18286.07061312929,
            "unit": "ns/iter",
            "extra": "iterations: 38279\ncpu: 18284.662608741088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56195.70600858179,
            "unit": "ns/iter",
            "extra": "iterations: 14446\ncpu: 56192.39928007747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 246720.87514416478,
            "unit": "ns/iter",
            "extra": "iterations: 3468\ncpu: 246699.56747404867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 200281.86466698605,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 200270.8313651397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 200789.3920922394,
            "unit": "ns/iter",
            "extra": "iterations: 4249\ncpu: 200773.89974111546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195710.26923960028,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 195694.09602572917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 492276.2455056513,
            "unit": "ns/iter",
            "extra": "iterations: 1780\ncpu: 492248.6516853928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4054453.108224782,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4054217.7489177426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3223171.6585364845,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3222948.4320557467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3266980.950704244,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3266591.197183093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3226661.076655229,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3226496.5156794465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1898907.0905350382,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1898810.288065846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3165988.5938566145,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3165677.8156996584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12205090.264368163,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12203947.126436792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5508472.970000185,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5508481.000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15990418.83333436,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 15990181.818181805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54547.721099993396,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54547.80999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290768.7021783764,
            "unit": "ns/iter",
            "extra": "iterations: 2938\ncpu: 290760.449285228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 232618.77219656022,
            "unit": "ns/iter",
            "extra": "iterations: 3683\ncpu: 232619.03339668855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 230545.37960720313,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 230533.4409469995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 221613.47811445768,
            "unit": "ns/iter",
            "extra": "iterations: 3861\ncpu: 221603.67780367922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 523437.67010938376,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 523425.27339003346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4095453.5110131474,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4095271.806167401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3277462.5477031004,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3277421.5547703234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3335360.695340517,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3335318.279569887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3300098.19148914,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3299983.6879432676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1953372.4411763889,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1953314.0756302522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3227039.1354166525,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3226720.486111094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12533844.47619104,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12533674.99999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5392796.359999466,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5392365.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57994.99143241272,
            "unit": "ns/iter",
            "extra": "iterations: 14123\ncpu: 57993.910642214985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 245235.3634027831,
            "unit": "ns/iter",
            "extra": "iterations: 3503\ncpu: 245217.7847559231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 198815.45139535476,
            "unit": "ns/iter",
            "extra": "iterations: 4300\ncpu: 198815.4651162787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 207986.38497082915,
            "unit": "ns/iter",
            "extra": "iterations: 4112\ncpu: 207975.72957198488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 195458.68034853454,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 195453.19880761355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 477850.28405312716,
            "unit": "ns/iter",
            "extra": "iterations: 1806\ncpu: 477830.17718715116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4085089.2412276664,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4084907.017543852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3232000.6271778867,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3231632.7526132427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3290585.9575968906,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3290283.0388692454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3242524.933566417,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3242343.0069930055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1928414.7780082787,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1928342.5311203268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3195525.127586248,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3195304.482758622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6343.325845131309,
            "unit": "ns/iter",
            "extra": "iterations: 110752\ncpu: 6343.100801791411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35611.18779867799,
            "unit": "ns/iter",
            "extra": "iterations: 19670\ncpu: 35610.35587188608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29281.889097901832,
            "unit": "ns/iter",
            "extra": "iterations: 23922\ncpu: 29281.3686146645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29233.98444212954,
            "unit": "ns/iter",
            "extra": "iterations: 23975\ncpu: 29233.017726798884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22629.316276657668,
            "unit": "ns/iter",
            "extra": "iterations: 30897\ncpu: 22628.886299640882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 137224.34977491933,
            "unit": "ns/iter",
            "extra": "iterations: 5109\ncpu: 137222.56801722362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 277266.2371338168,
            "unit": "ns/iter",
            "extra": "iterations: 2526\ncpu: 277261.6785431552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69859.32316709915,
            "unit": "ns/iter",
            "extra": "iterations: 10066\ncpu: 69854.72878998665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70176.74884561988,
            "unit": "ns/iter",
            "extra": "iterations: 9962\ncpu: 70171.0600281077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69494.76744417015,
            "unit": "ns/iter",
            "extra": "iterations: 10075\ncpu: 69488.7344913146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 141244.13138244202,
            "unit": "ns/iter",
            "extra": "iterations: 4955\ncpu: 141241.8567103954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 130366.6497858725,
            "unit": "ns/iter",
            "extra": "iterations: 5371\ncpu: 130364.94135170366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43621.39520099653,
            "unit": "ns/iter",
            "extra": "iterations: 16045\ncpu: 43617.6628233095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 214397.33792048914,
            "unit": "ns/iter",
            "extra": "iterations: 3270\ncpu: 214393.05810397875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 172614.333251051,
            "unit": "ns/iter",
            "extra": "iterations: 4051\ncpu: 172614.39150826924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 171153.75904201803,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 171148.09384164275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 172697.0922090853,
            "unit": "ns/iter",
            "extra": "iterations: 4056\ncpu: 172687.00690335254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 310635.58721706975,
            "unit": "ns/iter",
            "extra": "iterations: 2253\ncpu: 310617.2658677335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1203069.8384880072,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1202989.1752577217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1014574.6313558597,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1014536.5819208998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 999292.4807417179,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 999149.215406564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 988909.1765537203,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 988841.1016949057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 652639.5774253004,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 652619.9626865716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1014192.8295774639,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1014094.7887324027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44149.6664557777,
            "unit": "ns/iter",
            "extra": "iterations: 15806\ncpu: 44148.709350878955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 213228.783495729,
            "unit": "ns/iter",
            "extra": "iterations: 3284\ncpu: 213218.60535931925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 174478.20193982535,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 174459.2141258415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 174217.76723921657,
            "unit": "ns/iter",
            "extra": "iterations: 4017\ncpu: 174201.3442867827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 172452.85981768946,
            "unit": "ns/iter",
            "extra": "iterations: 4059\ncpu: 172439.59103227404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 307286.1901625122,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 307265.3052261761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1199905.5111491496,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1199757.4614065175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 994318.9450704152,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 994211.408450711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 992560.1765537444,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 992545.7627118629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 983817.5407304178,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 983803.7921348275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 648979.831168861,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 648910.8534322798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 983287.9269662579,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 983193.5393258425 ns\nthreads: 1"
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
        "date": 1702492185716,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16514.36607205875,
            "unit": "ns/iter",
            "extra": "iterations: 42549\ncpu: 16513.525582269856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 133451.67223710788,
            "unit": "ns/iter",
            "extra": "iterations: 6343\ncpu: 133448.4155762258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 249773.62715764655,
            "unit": "ns/iter",
            "extra": "iterations: 3476\ncpu: 249773.18757192174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 364144.2377740333,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 364132.8836424957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 479041.48870523035,
            "unit": "ns/iter",
            "extra": "iterations: 1815\ncpu: 479023.63636363676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 597811.5982142828,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 597782.2802197805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 572341.2129999588,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572310.2999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 664221.2284482532,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 664187.0689655171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 756783.8194444369,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 756760.2124183006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13058.378820025491,
            "unit": "ns/iter",
            "extra": "iterations: 53730\ncpu: 13057.537688442204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10865.360681906655,
            "unit": "ns/iter",
            "extra": "iterations: 64525\ncpu: 10865.309569934121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10873.455548486174,
            "unit": "ns/iter",
            "extra": "iterations: 64441\ncpu: 10873.366335097217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10854.297587631123,
            "unit": "ns/iter",
            "extra": "iterations: 64418\ncpu: 10853.915054798332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18085.48101625812,
            "unit": "ns/iter",
            "extra": "iterations: 38691\ncpu: 18084.779406063415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58078.97714285559,
            "unit": "ns/iter",
            "extra": "iterations: 14000\ncpu: 58079.18571428581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 256220.7544963864,
            "unit": "ns/iter",
            "extra": "iterations: 3336\ncpu: 256219.42446043133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 200311.75217697394,
            "unit": "ns/iter",
            "extra": "iterations: 4249\ncpu: 200302.04754059785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 203590.03546608408,
            "unit": "ns/iter",
            "extra": "iterations: 4173\ncpu: 203587.37119578267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 199779.1738620306,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 199770.74143594623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 500114.0267045527,
            "unit": "ns/iter",
            "extra": "iterations: 1760\ncpu: 500108.0113636364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4093582.656387869,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4093388.986784143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3312738.203571338,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3312701.0714285807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3308234.053571571,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3308218.214285714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3331043.5376346437,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3330868.1003584294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1923244.3444675035,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1923207.306889355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3226330.6933797165,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3226187.8048780477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12304651.348837217,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12304124.418604642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5577617.42999901,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5577243.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15941348.283582326,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15940653.73134332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 56926.34230000522,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56925.87000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 288601.72563054436,
            "unit": "ns/iter",
            "extra": "iterations: 2934\ncpu: 288589.84321744926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 230838.10645770252,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 230821.77789786592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 232490.75467100745,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 232475.65664771097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 226684.62817794524,
            "unit": "ns/iter",
            "extra": "iterations: 3776\ncpu: 226677.30402542348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 521475.0228916103,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 521452.89156626293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4151252.9642854393,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4151092.4107142715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3365190.707581154,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3365085.1985559775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3364199.9422382764,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3364161.3718411536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3343838.9748200914,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3343718.3453237396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1972130.3795307737,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1972052.878464808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3266386.8736842247,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3266240.350877188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12575328.964285994,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12574904.761904752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5740626.2899996815,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5740561.99999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53153.63009999601,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53152.65999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 250710.15296537324,
            "unit": "ns/iter",
            "extra": "iterations: 3406\ncpu: 250697.47504404053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202548.91767783958,
            "unit": "ns/iter",
            "extra": "iterations: 4203\ncpu: 202548.06090887616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 209251.59716102926,
            "unit": "ns/iter",
            "extra": "iterations: 4086\ncpu: 209240.47968673552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 200781.24788136844,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 200778.154425612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 476125.7847754481,
            "unit": "ns/iter",
            "extra": "iterations: 1826\ncpu: 476111.00766703096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4146550.551569405,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4146523.318385637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3324513.956989069,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3324467.383512537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3338528.1971327146,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3338403.2258064607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3331686.293907013,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3331649.820788542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1950437.9163180254,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1950372.803347293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3238872.4390244465,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3238878.745644583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6404.324801065821,
            "unit": "ns/iter",
            "extra": "iterations: 109584\ncpu: 6404.157541246874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36146.38509220494,
            "unit": "ns/iter",
            "extra": "iterations: 19359\ncpu: 36146.520997985615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27632.12125039481,
            "unit": "ns/iter",
            "extra": "iterations: 25336\ncpu: 27631.299336911885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29107.02641838106,
            "unit": "ns/iter",
            "extra": "iterations: 24112\ncpu: 29106.702057067025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22499.030994322147,
            "unit": "ns/iter",
            "extra": "iterations: 31167\ncpu: 22498.4406583886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 137344.89721839412,
            "unit": "ns/iter",
            "extra": "iterations: 5069\ncpu: 137345.31465772237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 267857.65939534846,
            "unit": "ns/iter",
            "extra": "iterations: 2613\ncpu: 267838.8825105272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70251.06220527498,
            "unit": "ns/iter",
            "extra": "iterations: 9967\ncpu: 70249.64382462089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70779.43041940601,
            "unit": "ns/iter",
            "extra": "iterations: 9895\ncpu: 70776.51339060208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70684.89375188957,
            "unit": "ns/iter",
            "extra": "iterations: 9939\ncpu: 70684.13321259596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 143962.15662898478,
            "unit": "ns/iter",
            "extra": "iterations: 4865\ncpu: 143955.00513874672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 131992.49886878984,
            "unit": "ns/iter",
            "extra": "iterations: 5304\ncpu: 131986.29336349704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44604.606655614996,
            "unit": "ns/iter",
            "extra": "iterations: 15686\ncpu: 44604.73670789261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 215723.68790394778,
            "unit": "ns/iter",
            "extra": "iterations: 3249\ncpu: 215720.40627885607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 175869.8886934856,
            "unit": "ns/iter",
            "extra": "iterations: 3980\ncpu: 175870.70351758704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173966.45431913127,
            "unit": "ns/iter",
            "extra": "iterations: 4017\ncpu: 173957.85411998865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175022.2308651222,
            "unit": "ns/iter",
            "extra": "iterations: 4011\ncpu: 175018.4741959598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 310454.5842945752,
            "unit": "ns/iter",
            "extra": "iterations: 2254\ncpu: 310436.6459627291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1213442.0675910164,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1213393.9341421195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1011887.3020231497,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1011811.8497109852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1011245.6275362711,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1011202.0289855072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 999857.1514285817,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 999861.2857143029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 651816.901960763,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 651790.102707747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 993030.1574468426,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 992967.2340425564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45200.38938511065,
            "unit": "ns/iter",
            "extra": "iterations: 15450\ncpu: 45198.576051779964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 217489.70447483638,
            "unit": "ns/iter",
            "extra": "iterations: 3218\ncpu: 217479.58359229675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 179001.38437977075,
            "unit": "ns/iter",
            "extra": "iterations: 3918\ncpu: 178996.6309341518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 176121.27288731918,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 176111.67002012115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 177916.70159454245,
            "unit": "ns/iter",
            "extra": "iterations: 3951\ncpu: 177906.47937231246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 308961.68708682794,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 308943.36712208565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1214162.0051993753,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1214111.7850953161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1010248.6040463088,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1010229.4797687792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1005467.205459844,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1005457.9022988335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 995771.4188034285,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 995717.0940170826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 655526.0692883716,
            "unit": "ns/iter",
            "extra": "iterations: 1068\ncpu: 655515.3558052506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 995064.2048364455,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 995028.5917496388 ns\nthreads: 1"
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
        "date": 1702503230972,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15932.914662423202,
            "unit": "ns/iter",
            "extra": "iterations: 43990\ncpu: 15931.263923619004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 129286.95455241208,
            "unit": "ns/iter",
            "extra": "iterations: 6535\ncpu: 129279.8775822494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 242928.8463045805,
            "unit": "ns/iter",
            "extra": "iterations: 3572\ncpu: 242913.04591265396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 354324.0572723556,
            "unit": "ns/iter",
            "extra": "iterations: 2427\ncpu: 354311.57807993423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 465534.2383252891,
            "unit": "ns/iter",
            "extra": "iterations: 1863\ncpu: 465499.73161567346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 576137.6010638668,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 576101.8617021271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 555324.5149999952,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555284.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 643026.1219999806,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 643008.4000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 731023.3792557076,
            "unit": "ns/iter",
            "extra": "iterations: 1263\ncpu: 730958.1155977836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12709.557499729131,
            "unit": "ns/iter",
            "extra": "iterations: 55322\ncpu: 12708.915078992084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10648.009894952333,
            "unit": "ns/iter",
            "extra": "iterations: 65589\ncpu: 10647.020079586518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10680.060602360021,
            "unit": "ns/iter",
            "extra": "iterations: 65509\ncpu: 10679.344822848752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10582.966902751683,
            "unit": "ns/iter",
            "extra": "iterations: 66078\ncpu: 10582.31938012653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17962.762804752023,
            "unit": "ns/iter",
            "extra": "iterations: 39048\ncpu: 17961.800860479372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55207.095543572716,
            "unit": "ns/iter",
            "extra": "iterations: 14653\ncpu: 55202.18385313592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 256391.7054240181,
            "unit": "ns/iter",
            "extra": "iterations: 3337\ncpu: 256377.1950854058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 202962.16031443942,
            "unit": "ns/iter",
            "extra": "iterations: 4198\ncpu: 202950.97665555007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 203673.88774780656,
            "unit": "ns/iter",
            "extra": "iterations: 4187\ncpu: 203664.81967996122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 197526.45629492085,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 197507.7672153953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 491857.0381593983,
            "unit": "ns/iter",
            "extra": "iterations: 1782\ncpu: 491834.6801346813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4044891.965217492,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4044732.6086956505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3256406.4090906326,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3256102.0979020954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3257066.122806831,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3256813.68421052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3216161.520833162,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3215831.9444444384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1903484.6329897903,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1903334.6391752602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3177301.4349312237,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3177214.041095883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12216713.942528248,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12216288.505747128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5523975.72000018,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5523891.000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15961649.8787872,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 15961116.666666657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54809.91529999528,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54808.450000000164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 298399.3396946561,
            "unit": "ns/iter",
            "extra": "iterations: 2882\ncpu: 298387.54337265773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 231670.7494588719,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 231664.9891774887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 231383.28382392693,
            "unit": "ns/iter",
            "extra": "iterations: 3703\ncpu: 231374.31812044405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 223259.00601937846,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 223252.78722847358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 520518.51562502526,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 520514.7836538488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4167678.7876104326,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4167584.5132743353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3315511.464285643,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3315430.3571428503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3307288.04982224,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3307262.277580087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3273923.8515900997,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3273834.6289752577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1965396.9302325947,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1965306.9767441854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3261250.863636655,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3260997.552447543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12612046.535714343,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12610754.761904731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5629821.460000812,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5629497.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55902.41815080072,
            "unit": "ns/iter",
            "extra": "iterations: 14655\ncpu: 55896.403957693845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 248816.38340609404,
            "unit": "ns/iter",
            "extra": "iterations: 3435\ncpu: 248802.29985443904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 201519.95642958846,
            "unit": "ns/iter",
            "extra": "iterations: 4246\ncpu: 201497.12670748826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 210517.0545052648,
            "unit": "ns/iter",
            "extra": "iterations: 4073\ncpu: 210500.39283083775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 199753.8211116384,
            "unit": "ns/iter",
            "extra": "iterations: 4282\ncpu: 199735.05371321848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 471524.30777596025,
            "unit": "ns/iter",
            "extra": "iterations: 1839\ncpu: 471503.09951060574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4093588.273127905,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4093332.1585903037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3271161.561403396,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3270825.6140350895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3305615.8091873485,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3305443.4628975214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3245010.261323807,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3244773.867595818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1934310.7006237076,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1934218.0873180907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3203206.7766319863,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3202947.422680393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6402.734372586066,
            "unit": "ns/iter",
            "extra": "iterations: 110079\ncpu: 6402.446424840313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36172.2657592388,
            "unit": "ns/iter",
            "extra": "iterations: 19322\ncpu: 36170.531000931536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29436.07449067891,
            "unit": "ns/iter",
            "extra": "iterations: 25426\ncpu: 29436.148037442006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29042.55372466866,
            "unit": "ns/iter",
            "extra": "iterations: 24821\ncpu: 29041.62604246404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22722.15039056207,
            "unit": "ns/iter",
            "extra": "iterations: 30853\ncpu: 22722.195572553686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 135308.63393891166,
            "unit": "ns/iter",
            "extra": "iterations: 5174\ncpu: 135306.51333591065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 276145.0655090536,
            "unit": "ns/iter",
            "extra": "iterations: 2534\ncpu: 276129.9921073375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69701.45778574822,
            "unit": "ns/iter",
            "extra": "iterations: 10044\ncpu: 69699.44245320665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69516.61653090164,
            "unit": "ns/iter",
            "extra": "iterations: 10066\ncpu: 69514.52414067129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69000.60777777778,
            "unit": "ns/iter",
            "extra": "iterations: 9900\ncpu: 69000.75757575814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 143813.97412199553,
            "unit": "ns/iter",
            "extra": "iterations: 4869\ncpu: 143807.4964058331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 129674.6364142549,
            "unit": "ns/iter",
            "extra": "iterations: 5388\ncpu: 129668.55976243371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43746.37158401764,
            "unit": "ns/iter",
            "extra": "iterations: 15991\ncpu: 43745.83828403493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 213240.29169212034,
            "unit": "ns/iter",
            "extra": "iterations: 3274\ncpu: 213240.6536346989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174048.9264889346,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 174036.78046349136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173110.33038131855,
            "unit": "ns/iter",
            "extra": "iterations: 4065\ncpu: 173108.68388683884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175326.97520660286,
            "unit": "ns/iter",
            "extra": "iterations: 3993\ncpu: 175318.53243175652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 303723.37229436124,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 303713.54978354723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1200565.7650085266,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1200552.4871354972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1004881.1473533766,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1004830.6151645118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 993187.3049645993,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 993141.9858155922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 985075.0253878029,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 985061.0719322948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 650741.6114708938,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 650732.0999074954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 983889.9591548231,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 983857.7464788685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44818.30796312587,
            "unit": "ns/iter",
            "extra": "iterations: 15622\ncpu: 44817.577774932324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 220895.20473407613,
            "unit": "ns/iter",
            "extra": "iterations: 3253\ncpu: 220888.53366123518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 176119.53343388997,
            "unit": "ns/iter",
            "extra": "iterations: 3978\ncpu: 175956.81246857424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 174439.3263629678,
            "unit": "ns/iter",
            "extra": "iterations: 4017\ncpu: 174417.99850634666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174701.93812374157,
            "unit": "ns/iter",
            "extra": "iterations: 4008\ncpu: 174686.4520958103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 303118.4772628428,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 303086.7475097425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1197489.6301368696,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1197374.8287671197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 991489.4943343368,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 991478.8951841485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 997139.0579710095,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 997085.9420290035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 979167.2067039697,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 979104.0502793236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 652595.3830382642,
            "unit": "ns/iter",
            "extra": "iterations: 1073\ncpu: 652534.3895619825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 982627.52668544,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 982562.2191011406 ns\nthreads: 1"
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
        "date": 1705574927834,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16698.108721791436,
            "unit": "ns/iter",
            "extra": "iterations: 43248\ncpu: 16698.00221975583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 132306.49385418088,
            "unit": "ns/iter",
            "extra": "iterations: 5939\ncpu: 132303.14867822867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 249002.0798162465,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 248995.5211024979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 362167.00882352534,
            "unit": "ns/iter",
            "extra": "iterations: 2380\ncpu: 362153.99159663863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 478686.04796032875,
            "unit": "ns/iter",
            "extra": "iterations: 1814\ncpu: 478662.18302094826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 592550.3475568212,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 592534.0674466621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 569997.3220000629,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569966.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 661118.255730648,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 661078.2951289391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 754933.0285016578,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 754898.9413680773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12927.171173995983,
            "unit": "ns/iter",
            "extra": "iterations: 54208\ncpu: 12926.256272136969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10911.204183918653,
            "unit": "ns/iter",
            "extra": "iterations: 64246\ncpu: 10911.032593468848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10875.33865572371,
            "unit": "ns/iter",
            "extra": "iterations: 64570\ncpu: 10875.047235558295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10766.58583545965,
            "unit": "ns/iter",
            "extra": "iterations: 65078\ncpu: 10766.317342266215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18187.353572354918,
            "unit": "ns/iter",
            "extra": "iterations: 38490\ncpu: 18186.861522473348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51846.40829999126,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51841.85999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 271122.66084473045,
            "unit": "ns/iter",
            "extra": "iterations: 3149\ncpu: 271120.86376627506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 209998.44799606505,
            "unit": "ns/iter",
            "extra": "iterations: 4067\ncpu: 209986.15687238693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 218301.19636922362,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 218291.255433393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 214017.0711779267,
            "unit": "ns/iter",
            "extra": "iterations: 3990\ncpu: 214002.30576441152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 496788.34087053046,
            "unit": "ns/iter",
            "extra": "iterations: 1769\ncpu: 496771.2832108523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4126383.8622222063,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4126291.5555555597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3324118.8129495117,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3323919.4244604316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3332677.5035711923,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3332532.8571428587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3290870.304964456,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3290660.283687944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1938970.5525209385,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1938869.3277310962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3237155.402097847,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3236945.104895103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12450522.337208303,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12449754.6511628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5586749.029999964,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5586489.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16351383.861538474,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16350552.307692332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 57950.605600001385,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57943.94999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 307151.20264001976,
            "unit": "ns/iter",
            "extra": "iterations: 2803\ncpu: 307142.2761327141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 241457.03829906596,
            "unit": "ns/iter",
            "extra": "iterations: 3551\ncpu: 241436.94733877855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 253841.2189349162,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 253826.9822485207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 238632.78938546494,
            "unit": "ns/iter",
            "extra": "iterations: 3580\ncpu: 238623.88268156364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 521463.2941176308,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 521423.4693877576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4213445.683257618,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4213285.067873313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3398543.3978102305,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3398372.6277372283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3383765.2872724985,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3383666.545454544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3365913.9927538596,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3365832.608695668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1989949.0580643541,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1989797.634408594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3299089.2241994943,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3299029.5373665444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12686596.654762503,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12685780.952381011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5691727.130000573,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5691514.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53176.428400001896,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53174.15000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 267452.9707347239,
            "unit": "ns/iter",
            "extra": "iterations: 3212\ncpu: 267434.838107097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 214313.89967476306,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 214306.85514135522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 224329.2749221353,
            "unit": "ns/iter",
            "extra": "iterations: 3852\ncpu: 224308.8525441322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 211739.67772279857,
            "unit": "ns/iter",
            "extra": "iterations: 4040\ncpu: 211729.62871287164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 485633.48722224316,
            "unit": "ns/iter",
            "extra": "iterations: 1800\ncpu: 485602.38888888876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4191098.05855837,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4190887.3873873875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3334233.0358424587,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3334053.0465949876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3341728.22222237,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3341554.4802867216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3295994.3427561903,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3295791.166077744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1957142.9915254542,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1957027.5423728735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3253544.8881119736,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3253307.6923077046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6407.529954760075,
            "unit": "ns/iter",
            "extra": "iterations: 109415\ncpu: 6407.137960974268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36545.3489064052,
            "unit": "ns/iter",
            "extra": "iterations: 19157\ncpu: 36542.87727723539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28077.5147907637,
            "unit": "ns/iter",
            "extra": "iterations: 24948\ncpu: 28076.00208433548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28758.08002137281,
            "unit": "ns/iter",
            "extra": "iterations: 24331\ncpu: 28756.002630389215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22712.73589186524,
            "unit": "ns/iter",
            "extra": "iterations: 30851\ncpu: 22711.07905740496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 138491.22929431516,
            "unit": "ns/iter",
            "extra": "iterations: 5059\ncpu: 138488.396916387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 284064.456574652,
            "unit": "ns/iter",
            "extra": "iterations: 2464\ncpu: 284062.9058441527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71925.04930388663,
            "unit": "ns/iter",
            "extra": "iterations: 9553\ncpu: 71923.78310478326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 71892.80737620885,
            "unit": "ns/iter",
            "extra": "iterations: 9734\ncpu: 71889.08978837029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 71601.47673586197,
            "unit": "ns/iter",
            "extra": "iterations: 9779\ncpu: 71599.35576234873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 144733.24741842112,
            "unit": "ns/iter",
            "extra": "iterations: 4842\ncpu: 144725.87773647223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 133405.08373069615,
            "unit": "ns/iter",
            "extra": "iterations: 5243\ncpu: 133398.8365439623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44577.41082903951,
            "unit": "ns/iter",
            "extra": "iterations: 15717\ncpu: 44574.40987465789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 217853.2784338095,
            "unit": "ns/iter",
            "extra": "iterations: 3218\ncpu: 217851.92666252377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 176585.39187484866,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 176578.17310118672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173569.5836856501,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 173561.9497637376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175856.59914549612,
            "unit": "ns/iter",
            "extra": "iterations: 3979\ncpu: 175853.8074893201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 312839.5371531027,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 312834.37779766985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1208089.8615915515,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1208054.844290665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1015386.188679319,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1015308.5631349819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1013947.3671988103,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1013907.1117561504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1009335.8089079956,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1009272.7011494263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 658858.2615675364,
            "unit": "ns/iter",
            "extra": "iterations: 1059\ncpu: 658853.4466477815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 995598.2684659985,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 995570.1704545456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44799.78827152409,
            "unit": "ns/iter",
            "extra": "iterations: 15586\ncpu: 44798.652636982035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 218102.26071988943,
            "unit": "ns/iter",
            "extra": "iterations: 3195\ncpu: 218095.1799687003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 177240.53027613883,
            "unit": "ns/iter",
            "extra": "iterations: 3947\ncpu: 177235.7740055732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 182381.81061947622,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 182376.43489254458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 177907.94298803643,
            "unit": "ns/iter",
            "extra": "iterations: 3929\ncpu: 177900.78900483582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 310737.83177985885,
            "unit": "ns/iter",
            "extra": "iterations: 2253\ncpu: 310729.6049711489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1204764.841652209,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1204678.8296041333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1012629.3637680633,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1012598.4057970978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1009982.2760116103,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1009931.5028901754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1010474.178826907,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1010453.2188841306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 666278.2376426079,
            "unit": "ns/iter",
            "extra": "iterations: 1052\ncpu: 666251.9011406822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 997819.9317211133,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 997750.0711237557 ns\nthreads: 1"
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
        "date": 1705772706109,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16148.604024832915,
            "unit": "ns/iter",
            "extra": "iterations: 43331\ncpu: 16148.722623525882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 130998.02760546304,
            "unit": "ns/iter",
            "extra": "iterations: 6448\ncpu: 130996.91377171216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 245033.27771492707,
            "unit": "ns/iter",
            "extra": "iterations: 3536\ncpu: 245031.24999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 358098.3250103901,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 358078.7765293382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 471134.92282609636,
            "unit": "ns/iter",
            "extra": "iterations: 1840\ncpu: 471113.42391304317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 588819.2398921865,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 588799.7304582212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 564844.3000000042,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564814.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 650899.891999984,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650883.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 743108.555466222,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 743092.7652733118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13041.384449604917,
            "unit": "ns/iter",
            "extra": "iterations: 53825\ncpu: 13041.06270320482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10869.330276081888,
            "unit": "ns/iter",
            "extra": "iterations: 64546\ncpu: 10869.217302388992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10765.374488319361,
            "unit": "ns/iter",
            "extra": "iterations: 64982\ncpu: 10764.981071681377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10785.69800018417,
            "unit": "ns/iter",
            "extra": "iterations: 65106\ncpu: 10785.48828065001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18154.434366489306,
            "unit": "ns/iter",
            "extra": "iterations: 38555\ncpu: 18153.64544157699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57147.55566544174,
            "unit": "ns/iter",
            "extra": "iterations: 14156\ncpu: 57146.121785815165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 277689.6096135063,
            "unit": "ns/iter",
            "extra": "iterations: 3079\ncpu: 277682.98148749565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 221669.55302049042,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 221665.7765102408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 221958.06389610775,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 221950.8571428571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 213006.48836044222,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 213008.33541927452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 497681.5751559867,
            "unit": "ns/iter",
            "extra": "iterations: 1763\ncpu: 497665.34316505917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4067137.2663756325,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4067043.231441049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3265527.7394365906,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3265474.647887318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3295674.3639576174,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3295525.441696114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3262418.2701754346,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3262417.8947368446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1876180.7131313342,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1876102.8282828287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3183072.7938143485,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3182907.560137448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12035772.318181546,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12035476.136363648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5475443.679999899,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5475399.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16067339.833333768,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16065648.484848503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55833.831400002506,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55833.09000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 315431.37188873964,
            "unit": "ns/iter",
            "extra": "iterations: 2732\ncpu: 315420.863836016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 253647.3186650852,
            "unit": "ns/iter",
            "extra": "iterations: 3386\ncpu: 253639.36798582395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 253032.0445296431,
            "unit": "ns/iter",
            "extra": "iterations: 3391\ncpu: 253024.0931878508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 237645.97861110637,
            "unit": "ns/iter",
            "extra": "iterations: 3600\ncpu: 237636.27777777665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 544852.5743119039,
            "unit": "ns/iter",
            "extra": "iterations: 1635\ncpu: 544829.4189602421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4126315.0977776297,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4126256.444444449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3333199.4172662604,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3333193.8848920856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3339875.7526881183,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3339838.351254477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3329381.402877778,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3329301.798561162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1920718.8427673734,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1920691.4046121566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3231997.0627178224,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3231938.675958175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12286317.816091567,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12286293.103448296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5463738.039999839,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5463607.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 50141.95449999761,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50141.670000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 280570.59941331175,
            "unit": "ns/iter",
            "extra": "iterations: 3068\ncpu: 280562.2881355938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 223648.29437793276,
            "unit": "ns/iter",
            "extra": "iterations: 3842\ncpu: 223647.7876106182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 228867.67275617275,
            "unit": "ns/iter",
            "extra": "iterations: 3777\ncpu: 228860.8684140849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 214870.83542713587,
            "unit": "ns/iter",
            "extra": "iterations: 3980\ncpu: 214869.1959798988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 482896.7743732642,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 482881.00278551393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4094797.3289477387,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4094827.631578973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3277864.503521129,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3277685.211267597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3316460.2526690466,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3316383.2740213503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3247078.6713289567,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3246958.041958036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1896610.4959349928,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1896509.1463414729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3200910.020689599,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3200711.724137933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6341.992621928011,
            "unit": "ns/iter",
            "extra": "iterations: 110598\ncpu: 6341.789182444476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35833.86937605584,
            "unit": "ns/iter",
            "extra": "iterations: 19537\ncpu: 35832.492194298036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29930.532400273078,
            "unit": "ns/iter",
            "extra": "iterations: 23364\ncpu: 29930.461393596805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29713.481715592923,
            "unit": "ns/iter",
            "extra": "iterations: 23572\ncpu: 29713.062107585327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22699.31280205058,
            "unit": "ns/iter",
            "extra": "iterations: 30831\ncpu: 22699.468067853843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 139828.71021140163,
            "unit": "ns/iter",
            "extra": "iterations: 5014\ncpu: 139822.65656162676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 277780.9916699367,
            "unit": "ns/iter",
            "extra": "iterations: 2521\ncpu: 277766.4022213382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70439.40903148962,
            "unit": "ns/iter",
            "extra": "iterations: 9943\ncpu: 70435.5224781255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69844.14344057506,
            "unit": "ns/iter",
            "extra": "iterations: 10039\ncpu: 69841.73722482269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69562.37322475087,
            "unit": "ns/iter",
            "extra": "iterations: 10069\ncpu: 69562.1511570168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 142320.9941009071,
            "unit": "ns/iter",
            "extra": "iterations: 4916\ncpu: 142322.0911310003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 130474.4027907069,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 130470.3999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44124.885878126166,
            "unit": "ns/iter",
            "extra": "iterations: 15869\ncpu: 44125.17486924199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 215860.75446704938,
            "unit": "ns/iter",
            "extra": "iterations: 3246\ncpu: 215855.48367221246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174682.64107676208,
            "unit": "ns/iter",
            "extra": "iterations: 4012\ncpu: 174672.0089730825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 174244.23387297025,
            "unit": "ns/iter",
            "extra": "iterations: 4015\ncpu: 174236.21419676236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175846.94951016488,
            "unit": "ns/iter",
            "extra": "iterations: 3981\ncpu: 175837.22682742952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 304178.9986956622,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 304170.1304347802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1201592.1913792947,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1201530.0000000147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1008772.5775862451,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1008727.4425287453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1007054.6149425409,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1007033.3333333405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 997009.1294451695,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 996995.3058321417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 647043.8538390126,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 647014.1535615124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 987783.6497175437,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 987720.3389830608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44824.445377072705,
            "unit": "ns/iter",
            "extra": "iterations: 15607\ncpu: 44822.759018389326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 216858.31036625383,
            "unit": "ns/iter",
            "extra": "iterations: 3222\ncpu: 216851.0242085671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 176557.24923935317,
            "unit": "ns/iter",
            "extra": "iterations: 3944\ncpu: 176553.34685598474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177277.72927756346,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 177274.3726235725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 175290.39549436735,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 175288.4605757208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 302795.67143478885,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 302791.8942349361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1201322.2594502163,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1201224.5704467364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1004516.3189655385,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1004504.7413793027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 996701.2745376388,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 996653.2005689985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 991642.253541094,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 991601.2747875288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 648630.6303538848,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 648601.4897579225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 993984.859154916,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 993944.9295774599 ns\nthreads: 1"
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
        "date": 1705774359686,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16375.935098466496,
            "unit": "ns/iter",
            "extra": "iterations: 42603\ncpu: 16375.485294462835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 133489.61436882667,
            "unit": "ns/iter",
            "extra": "iterations: 6361\ncpu: 133486.8102499607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 248567.82415376272,
            "unit": "ns/iter",
            "extra": "iterations: 3486\ncpu: 248559.78198508325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 363021.975157895,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 363010.1473684212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 479902.16870144533,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 479885.29411764716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 595219.2494714644,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 595200.7047216353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 571630.8529999879,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571605.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 662828.7287770023,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 662819.4244604313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 755497.1041837861,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 755466.0377358489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13152.948457102779,
            "unit": "ns/iter",
            "extra": "iterations: 53082\ncpu: 13152.441505595118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10896.159830004939,
            "unit": "ns/iter",
            "extra": "iterations: 64237\ncpu: 10895.661378956054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10780.63986013883,
            "unit": "ns/iter",
            "extra": "iterations: 64922\ncpu: 10780.601336988999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10895.464982441214,
            "unit": "ns/iter",
            "extra": "iterations: 64639\ncpu: 10895.21341604915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18084.79583247056,
            "unit": "ns/iter",
            "extra": "iterations: 38728\ncpu: 18084.46860152859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55860.341957557,
            "unit": "ns/iter",
            "extra": "iterations: 14610\ncpu: 55858.5284052019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 255486.17800421032,
            "unit": "ns/iter",
            "extra": "iterations: 3337\ncpu: 255484.89661372482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 201710.43501890957,
            "unit": "ns/iter",
            "extra": "iterations: 4232\ncpu: 201705.45841209881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 205867.4609738338,
            "unit": "ns/iter",
            "extra": "iterations: 4087\ncpu: 205863.86102275498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 197042.53104726798,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 197034.12882298412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 507972.81760273996,
            "unit": "ns/iter",
            "extra": "iterations: 1727\ncpu: 507935.32136653096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4160847.674107515,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4160653.5714285695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3322428.078571095,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3322166.7857142836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3324741.770609348,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3324526.1648745565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3302361.202846762,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3302182.2064056904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1932935.0772440836,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1932769.5198329892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3242567.297202758,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3242397.2027972015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12295994.9885051,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12295275.86206897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5587835.910000649,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5587406.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16020964.893939573,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16019442.424242431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54172.47839999391,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54167.820000000334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 303340.80570221925,
            "unit": "ns/iter",
            "extra": "iterations: 2841\ncpu: 303322.03449489665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 233541.52182214824,
            "unit": "ns/iter",
            "extra": "iterations: 3666\ncpu: 233529.48717948742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 234994.68669412468,
            "unit": "ns/iter",
            "extra": "iterations: 3645\ncpu: 234974.12894375826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 223329.61914725433,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 223323.54172116113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 528314.2907975591,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 528301.9631901841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4219552.5656107,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4219405.429864249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3363450.934782791,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3363373.188405803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3374726.712726938,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3374649.4545454714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3341687.5161289573,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3341610.0358422897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1969971.7940553618,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1969869.2144373748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3320770.568904917,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3320704.593639575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12566944.469136212,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 12566520.98765434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5529295.079999201,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5529150.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 59496.95091347838,
            "unit": "ns/iter",
            "extra": "iterations: 14505\ncpu: 59494.043433298844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 249944.50586166335,
            "unit": "ns/iter",
            "extra": "iterations: 3412\ncpu: 249941.67643610772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 203277.7141825039,
            "unit": "ns/iter",
            "extra": "iterations: 4153\ncpu: 203271.20154105456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 212983.83722762152,
            "unit": "ns/iter",
            "extra": "iterations: 3809\ncpu: 212969.04699396252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198129.29633069108,
            "unit": "ns/iter",
            "extra": "iterations: 4306\ncpu: 198119.5541105439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 484054.7101287468,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 484016.17235590174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4171354.964125687,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4171146.188340817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3323609.5480426517,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3323399.2882562373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3351044.186379651,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3350890.681003568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3291099.597173381,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3290928.2685512323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1955607.4570231626,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1955440.880503146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3256875.0596490707,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3256715.438596496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6398.638281349983,
            "unit": "ns/iter",
            "extra": "iterations: 109458\ncpu: 6398.175555921031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35947.86822900858,
            "unit": "ns/iter",
            "extra": "iterations: 19458\ncpu: 35946.14554424899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28464.90668076614,
            "unit": "ns/iter",
            "extra": "iterations: 24593\ncpu: 28462.23315577599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28271.644197021848,
            "unit": "ns/iter",
            "extra": "iterations: 24789\ncpu: 28270.01896002239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21577.524163108912,
            "unit": "ns/iter",
            "extra": "iterations: 32322\ncpu: 21575.79667099801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 140237.7889668906,
            "unit": "ns/iter",
            "extra": "iterations: 4985\ncpu: 140230.49147442373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 283555.87378641416,
            "unit": "ns/iter",
            "extra": "iterations: 2472\ncpu: 283515.37216828583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70874.00789234262,
            "unit": "ns/iter",
            "extra": "iterations: 9883\ncpu: 70867.83365374782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70749.50778249337,
            "unit": "ns/iter",
            "extra": "iterations: 9894\ncpu: 70747.56418031245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70308.22630892028,
            "unit": "ns/iter",
            "extra": "iterations: 9951\ncpu: 70305.75821525422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 136823.57285156322,
            "unit": "ns/iter",
            "extra": "iterations: 5120\ncpu: 136813.4570312485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 132210.0427898235,
            "unit": "ns/iter",
            "extra": "iterations: 5305\ncpu: 132191.93213948922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43941.293151029466,
            "unit": "ns/iter",
            "extra": "iterations: 15944\ncpu: 43938.93627696911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 216119.30621714582,
            "unit": "ns/iter",
            "extra": "iterations: 3233\ncpu: 216099.72162078292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 175653.8262828671,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 175640.57571965168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173272.7284226215,
            "unit": "ns/iter",
            "extra": "iterations: 4032\ncpu: 173251.04166666785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175102.02652652588,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 175087.56256256186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 306761.1946514718,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 306740.11398509605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1217249.7975352374,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1217159.5070422585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1015085.5281386076,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1015055.4112554238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1005153.1179856316,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1005094.964028765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1000542.4048641039,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1000493.2761087349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 653198.0186046407,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 653148.8372093141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 996089.9046941585,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 996010.2418207625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44437.75003180197,
            "unit": "ns/iter",
            "extra": "iterations: 15722\ncpu: 44433.37997710197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 218600.239300224,
            "unit": "ns/iter",
            "extra": "iterations: 3201\ncpu: 218586.28553576846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 177473.96136133408,
            "unit": "ns/iter",
            "extra": "iterations: 3908\ncpu: 177462.4360286595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 175923.1546002905,
            "unit": "ns/iter",
            "extra": "iterations: 3978\ncpu: 175909.52740070387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174906.2746127003,
            "unit": "ns/iter",
            "extra": "iterations: 4002\ncpu: 174899.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 304049.88145895675,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 304041.6413373901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1212704.6851210694,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1212685.8131487877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1012933.5798560957,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1012848.6330935213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1010831.4014387884,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1010772.3741007232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 997897.4120171973,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 997814.163090127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 657986.0244131287,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 657934.4600938967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 999500.282453647,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 999482.8815977164 ns\nthreads: 1"
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
        "date": 1705777697950,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16762.846214587353,
            "unit": "ns/iter",
            "extra": "iterations: 41792\ncpu: 16762.81824272588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 138826.2469642274,
            "unit": "ns/iter",
            "extra": "iterations: 6094\ncpu: 138817.42697735477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 261433.63789982302,
            "unit": "ns/iter",
            "extra": "iterations: 3314\ncpu: 261418.58780929388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 391845.41968225857,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 391826.43424536625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 504794.6384213105,
            "unit": "ns/iter",
            "extra": "iterations: 1723\ncpu: 504748.1137550783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 502483.0629999997,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502461.99999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 600315.0949999281,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600251.3999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 694218.2891566586,
            "unit": "ns/iter",
            "extra": "iterations: 1328\ncpu: 694180.647590361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 796008.9760068426,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 795970.6083976001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13302.891566722185,
            "unit": "ns/iter",
            "extra": "iterations: 52779\ncpu: 13302.878038613833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11065.03233661638,
            "unit": "ns/iter",
            "extra": "iterations: 63241\ncpu: 11064.537246406608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11060.470699016105,
            "unit": "ns/iter",
            "extra": "iterations: 63718\ncpu: 11060.491540851883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11083.667388673603,
            "unit": "ns/iter",
            "extra": "iterations: 62788\ncpu: 11083.38695292092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18298.997416830516,
            "unit": "ns/iter",
            "extra": "iterations: 38325\ncpu: 18298.969341161148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51773.33440000212,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51773.200000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 257621.54438404334,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 257617.7838164249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 206398.19384540632,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 206395.68693966584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 210854.91960541927,
            "unit": "ns/iter",
            "extra": "iterations: 4055\ncpu: 210850.25893958067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 205857.57845262357,
            "unit": "ns/iter",
            "extra": "iterations: 4149\ncpu: 205856.2304169675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 498362.8732314757,
            "unit": "ns/iter",
            "extra": "iterations: 1767\ncpu: 498358.68704018247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4351800.751174019,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4351633.333333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3633110.852272618,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3633073.106060603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3485825.1954888934,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3485709.7744360873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3454611.4646841437,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3454425.2788104136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2011243.7852495331,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2011170.2819956664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3394420.282051208,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3394295.2380952416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12869598.325301833,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12868643.373493966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5718098.940000118,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5717460.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16509710.874998974,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16509165.624999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58590.15270000328,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58588.81000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 301072.72436796036,
            "unit": "ns/iter",
            "extra": "iterations: 2848\ncpu: 301072.6123595503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 240548.8457878606,
            "unit": "ns/iter",
            "extra": "iterations: 3573\ncpu: 240530.4506017358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 244906.88144330546,
            "unit": "ns/iter",
            "extra": "iterations: 3492\ncpu: 244893.32760595658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 231202.43397244788,
            "unit": "ns/iter",
            "extra": "iterations: 3703\ncpu: 231192.22252227846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 513591.19881652924,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 513573.8461538431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4438340.483253368,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4438122.966507198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3562362.396946671,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3562252.2900763354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3528378.181817884,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3528206.439393939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3500756.5393260596,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3500661.4232209856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2070690.8053693392,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2070600.8948545912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3434610.424354128,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3434405.9040590324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13253180.237499861,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13252396.250000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5885580.670000081,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5885127.9999999665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51779.128200007566,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51778.82999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 285654.87620311434,
            "unit": "ns/iter",
            "extra": "iterations: 3013\ncpu: 285644.1752406221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 215121.86091551257,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 215112.50000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 218356.6251904615,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 218343.93092940602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 210543.33760474453,
            "unit": "ns/iter",
            "extra": "iterations: 4058\ncpu: 210542.21291276554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 465359.7611379239,
            "unit": "ns/iter",
            "extra": "iterations: 1863\ncpu: 465334.943639293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4409075.838862763,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4408836.966824615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3498433.845864715,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3498192.857142858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3509936.849624003,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3509866.1654135315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3468436.320895477,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3468286.5671641775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2035710.5317287028,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2035665.645514224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3415060.555146751,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3415022.4264705875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6455.219426516936,
            "unit": "ns/iter",
            "extra": "iterations: 108460\ncpu: 6455.294117647035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38374.69675014264,
            "unit": "ns/iter",
            "extra": "iterations: 19047\ncpu: 38373.82789940678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28086.97973677795,
            "unit": "ns/iter",
            "extra": "iterations: 24922\ncpu: 28086.935237942318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29553.565938938482,
            "unit": "ns/iter",
            "extra": "iterations: 23681\ncpu: 29553.422575059954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22739.291398689653,
            "unit": "ns/iter",
            "extra": "iterations: 30786\ncpu: 22739.28409017092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 140390.50832164363,
            "unit": "ns/iter",
            "extra": "iterations: 4987\ncpu: 140387.2869460592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 293796.08644565387,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 293793.70541334443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73272.27848101589,
            "unit": "ns/iter",
            "extra": "iterations: 9559\ncpu: 73271.61837012229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 73404.25005226448,
            "unit": "ns/iter",
            "extra": "iterations: 9566\ncpu: 73402.82249634094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73155.65826180248,
            "unit": "ns/iter",
            "extra": "iterations: 9320\ncpu: 73155.62231759692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 149664.08439897213,
            "unit": "ns/iter",
            "extra": "iterations: 4692\ncpu: 149654.88064791122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 137310.25396825318,
            "unit": "ns/iter",
            "extra": "iterations: 5103\ncpu: 137310.54281794967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45250.344655473236,
            "unit": "ns/iter",
            "extra": "iterations: 15427\ncpu: 45249.16056264979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 222426.29310892863,
            "unit": "ns/iter",
            "extra": "iterations: 3149\ncpu: 222426.35757383332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 179763.49858431306,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 179755.2895752869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 177752.1611591334,
            "unit": "ns/iter",
            "extra": "iterations: 3934\ncpu: 177696.03457041207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 179118.87806747947,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 179106.799591001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 303771.4889466786,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 303746.7706978751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1274459.4754098586,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1274440.0728597413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1058855.2496219205,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1058812.859304088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1049466.1482036333,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1049374.1017964105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1042851.4553571707,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1042811.7559523912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 675718.2750965307,
            "unit": "ns/iter",
            "extra": "iterations: 1036\ncpu: 675681.0810810784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1036608.9688888543,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1036544.2962962898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45796.44054160097,
            "unit": "ns/iter",
            "extra": "iterations: 15288\ncpu: 45796.93877551047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 222414.88338101248,
            "unit": "ns/iter",
            "extra": "iterations: 3147\ncpu: 222417.699396252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 181259.7869914409,
            "unit": "ns/iter",
            "extra": "iterations: 3859\ncpu: 181257.3723762639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 181952.19730359002,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 181945.9165154263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 180598.0441176376,
            "unit": "ns/iter",
            "extra": "iterations: 3876\ncpu: 180594.42724458218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 305406.1239092424,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 305401.87609075144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1275347.230347227,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1275322.3034734959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1059075.5438066232,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1059075.0755286925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1048306.2604790946,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1048255.9880239618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1041320.9435363872,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1041332.0950965853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 678493.4040697558,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 678500.5813953492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1039517.6810729753,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1039497.7645305477 ns\nthreads: 1"
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
        "date": 1705952864166,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17046.97605492737,
            "unit": "ns/iter",
            "extra": "iterations: 40927\ncpu: 17045.847484545655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 139561.98482349145,
            "unit": "ns/iter",
            "extra": "iterations: 6062\ncpu: 139559.27086770046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 264019.41365704784,
            "unit": "ns/iter",
            "extra": "iterations: 3295\ncpu: 264017.1168437027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 385066.35147188674,
            "unit": "ns/iter",
            "extra": "iterations: 2242\ncpu: 385053.7020517397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 511588.7276446589,
            "unit": "ns/iter",
            "extra": "iterations: 1711\ncpu: 511570.71887784934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 511734.23000000184,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511709.9000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 613500.7860000315,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 613503.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 707930.4340490606,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 707903.9110429448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 806075.2164502266,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 806051.1688311694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13700.535906309504,
            "unit": "ns/iter",
            "extra": "iterations: 51147\ncpu: 13700.174008250717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11246.08743125445,
            "unit": "ns/iter",
            "extra": "iterations: 62186\ncpu: 11245.786833049246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11251.064957758079,
            "unit": "ns/iter",
            "extra": "iterations: 62379\ncpu: 11250.274932268861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11261.284631809265,
            "unit": "ns/iter",
            "extra": "iterations: 62291\ncpu: 11260.572153280578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18750.138753154784,
            "unit": "ns/iter",
            "extra": "iterations: 37246\ncpu: 18748.475004027245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50178.17319999835,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50177.68999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 267748.39762053674,
            "unit": "ns/iter",
            "extra": "iterations: 3194\ncpu: 267749.2172824044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 213290.34536853136,
            "unit": "ns/iter",
            "extra": "iterations: 4016\ncpu: 213287.3256972109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 210679.68180683933,
            "unit": "ns/iter",
            "extra": "iterations: 4007\ncpu: 210670.92587971038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 203542.88588008154,
            "unit": "ns/iter",
            "extra": "iterations: 4136\ncpu: 203529.56963249535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 517735.0607831733,
            "unit": "ns/iter",
            "extra": "iterations: 1711\ncpu: 517703.91583869007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4368927.004694628,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4368706.572769954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3516943.303030301,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3516680.3030303004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3510249.568181955,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3510175.757575762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3492313.458646582,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3492228.9473684193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1998041.821120687,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1998028.879310351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3404236.703296574,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3404202.9304029346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12774949.578313392,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12774661.445783142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5735567.500000229,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5735500.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16424234.921875503,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16423662.49999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 56480.37270000259,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56479.939999999835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 306372.42159657105,
            "unit": "ns/iter",
            "extra": "iterations: 2806\ncpu: 306369.1732002846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 241334.99322032818,
            "unit": "ns/iter",
            "extra": "iterations: 3540\ncpu: 241332.57062146842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 239274.15852636893,
            "unit": "ns/iter",
            "extra": "iterations: 3583\ncpu: 239267.54116662027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 232506.83514392556,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 232507.68604019494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 536684.6006211643,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 536678.5093167692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4417290.1190476995,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4417187.619047626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3568464.1500001117,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3568433.0769230905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3550945.1488551106,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3550926.3358778516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3543158.6742424252,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3543140.5303030103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2053887.0044247615,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2053844.469026549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3452361.6728623635,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3452373.234200739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13122445.469135797,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13122041.975308629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5809368.650000124,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5809236.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 50673.69079999935,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50672.06000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 263687.35949521087,
            "unit": "ns/iter",
            "extra": "iterations: 3249\ncpu: 263688.11942136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 210176.33938205356,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 210172.53555664612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 217100.68990870065,
            "unit": "ns/iter",
            "extra": "iterations: 3944\ncpu: 217096.3742393516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 207031.29176816143,
            "unit": "ns/iter",
            "extra": "iterations: 4106\ncpu: 207021.748660498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 488209.91154929623,
            "unit": "ns/iter",
            "extra": "iterations: 1775\ncpu: 488212.1690140856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4417021.317535555,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4416783.412322267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3524842.9507575883,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3524639.3939393987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3537797.928030076,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3537676.51515151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3495478.82330824,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3495436.4661653913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2024055.0239130382,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2023962.3913043472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3427061.4132840843,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3426864.575645769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6476.868793147866,
            "unit": "ns/iter",
            "extra": "iterations: 108348\ncpu: 6476.629933178246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37053.99480657094,
            "unit": "ns/iter",
            "extra": "iterations: 18870\ncpu: 37051.73290937999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29288.610843830236,
            "unit": "ns/iter",
            "extra": "iterations: 23903\ncpu: 29286.666945571647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27901.571189080732,
            "unit": "ns/iter",
            "extra": "iterations: 25053\ncpu: 27900.227517662574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23039.768183163622,
            "unit": "ns/iter",
            "extra": "iterations: 30399\ncpu: 23038.951939208593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 138463.79703849566,
            "unit": "ns/iter",
            "extra": "iterations: 5065\ncpu: 138459.1510365255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 286004.33891383087,
            "unit": "ns/iter",
            "extra": "iterations: 2449\ncpu: 286002.73581053584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74704.35664709318,
            "unit": "ns/iter",
            "extra": "iterations: 9365\ncpu: 74701.61238654613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 73841.3549815547,
            "unit": "ns/iter",
            "extra": "iterations: 9485\ncpu: 73841.65524512365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74123.6817652712,
            "unit": "ns/iter",
            "extra": "iterations: 9449\ncpu: 74123.01830881664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 148659.63018134495,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 148655.09499136513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 138604.0270857858,
            "unit": "ns/iter",
            "extra": "iterations: 5058\ncpu: 138599.94068802093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45559.76404274822,
            "unit": "ns/iter",
            "extra": "iterations: 15346\ncpu: 45559.31187280059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 222658.6547199986,
            "unit": "ns/iter",
            "extra": "iterations: 3125\ncpu: 222659.2320000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 180961.50633568547,
            "unit": "ns/iter",
            "extra": "iterations: 3867\ncpu: 180951.84897853652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 179360.8445356626,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 179356.2339661338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 181206.4746376602,
            "unit": "ns/iter",
            "extra": "iterations: 3864\ncpu: 181200.12939958242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 312759.48103524325,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 312760.8210620248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1278042.3511029724,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1278013.051470605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1066484.9194529636,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1066451.3677811492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1058979.2911011553,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1058937.1040724046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1055018.8328312584,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1055004.0662650717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 676959.5531915306,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 676962.6692456516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1045957.3961135579,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1045934.9775784771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46110.31240539448,
            "unit": "ns/iter",
            "extra": "iterations: 15195\ncpu: 46109.45047713094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 224682.83349406917,
            "unit": "ns/iter",
            "extra": "iterations: 3111\ncpu: 224678.9778206359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 181798.3861104019,
            "unit": "ns/iter",
            "extra": "iterations: 3859\ncpu: 181799.19668307886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 180236.89979390686,
            "unit": "ns/iter",
            "extra": "iterations: 3882\ncpu: 180233.43637300617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 180845.509935499,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 180844.2064516128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 309440.9133126985,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 309431.6674038025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1282995.555147228,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1282975.7352940969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1065696.3124999697,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1065677.8963414638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1055349.4570135688,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1055340.8748114652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1052616.4451128803,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1052593.233082701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 677867.3304431589,
            "unit": "ns/iter",
            "extra": "iterations: 1038\ncpu: 677832.7552986473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1047190.82212246,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1047194.9177877584 ns\nthreads: 1"
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
        "date": 1705954336573,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17145.6787678771,
            "unit": "ns/iter",
            "extra": "iterations: 41814\ncpu: 17144.702731142683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 135204.0046244531,
            "unit": "ns/iter",
            "extra": "iterations: 6271\ncpu: 135198.42130441716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 254979.73996457274,
            "unit": "ns/iter",
            "extra": "iterations: 3388\ncpu: 254969.77567886648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 375569.7347468457,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 375563.3491994806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 490665.7186440606,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 490644.91525423696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 610049.2680196238,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 610016.2351294607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 583331.434999991,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583297.8000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 679529.1223287306,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 679504.0530582169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 770016.4458333347,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 769975.499999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13304.066129554338,
            "unit": "ns/iter",
            "extra": "iterations: 52503\ncpu: 13303.182675275688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11050.051109151402,
            "unit": "ns/iter",
            "extra": "iterations: 63472\ncpu: 11049.686475926408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10979.81935969777,
            "unit": "ns/iter",
            "extra": "iterations: 63751\ncpu: 10979.733651236835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11044.62180963421,
            "unit": "ns/iter",
            "extra": "iterations: 63394\ncpu: 11044.03413572263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18531.592723159338,
            "unit": "ns/iter",
            "extra": "iterations: 38011\ncpu: 18530.480650338082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58097.54166963518,
            "unit": "ns/iter",
            "extra": "iterations: 14027\ncpu: 58095.77956797609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 252790.75855909352,
            "unit": "ns/iter",
            "extra": "iterations: 3359\ncpu: 252793.00387019975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 202573.8885456375,
            "unit": "ns/iter",
            "extra": "iterations: 4208\ncpu: 202575.59410646398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 205421.87765446104,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 205422.2972972972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 200357.56843838515,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 200346.0724365008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 481558.1520307414,
            "unit": "ns/iter",
            "extra": "iterations: 1822\ncpu: 481535.72996707034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4139160.604444341,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4138975.999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3340525.647482052,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3340330.575539568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3415944.5404410227,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3415808.823529405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3359021.953068614,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3358875.0902526984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1919060.7308489305,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1918993.788819879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3271743.289752608,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3271599.293286214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12272266.632183231,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12271770.114942543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5550367.540000707,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5549879.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16100496.787878387,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16099704.545454534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55948.118300000264,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55943.6599999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290111.6125760746,
            "unit": "ns/iter",
            "extra": "iterations: 2958\ncpu: 290102.50169033057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 233846.24390912932,
            "unit": "ns/iter",
            "extra": "iterations: 3653\ncpu: 233834.10895154715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 235831.46953896002,
            "unit": "ns/iter",
            "extra": "iterations: 3644\ncpu: 235822.2008781559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 229328.5632521829,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 229316.28777748087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 509783.1204465473,
            "unit": "ns/iter",
            "extra": "iterations: 1702\ncpu: 509751.9388954164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4215661.8173519485,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4215640.182648422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3414068.3492647465,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3413895.2205882273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3460701.343283375,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3460486.94029851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3384674.0363639,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3384519.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1969088.808917269,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1968956.6878980834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3327552.014285727,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3327405.0000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12630920.499999221,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12630129.761904707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5719420.2900006985,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5719417.000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58213.23418754996,
            "unit": "ns/iter",
            "extra": "iterations: 14087\ncpu: 58213.0474905945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 258259.82721253316,
            "unit": "ns/iter",
            "extra": "iterations: 3322\ncpu: 258256.56231186172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 204413.11458581046,
            "unit": "ns/iter",
            "extra": "iterations: 4189\ncpu: 204412.55669610825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 210327.227016415,
            "unit": "ns/iter",
            "extra": "iterations: 4079\ncpu: 210322.7997058105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 204735.0987772568,
            "unit": "ns/iter",
            "extra": "iterations: 4171\ncpu: 204729.36945576686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 458955.17619047017,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 458954.39153439016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4233154.495454466,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4233163.636363619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3358712.5253623105,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3358652.5362318936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3430226.6125462586,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3430234.686346852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3362437.6739130574,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3362399.275362322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1959410.1215930867,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1959410.691823891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3308809.1957294713,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3308817.4377224036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6399.111777774072,
            "unit": "ns/iter",
            "extra": "iterations: 109834\ncpu: 6399.057668845684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35912.019489178216,
            "unit": "ns/iter",
            "extra": "iterations: 19498\ncpu: 35912.01148835768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27780.699912925535,
            "unit": "ns/iter",
            "extra": "iterations: 25266\ncpu: 27780.693421989963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26718.766089014956,
            "unit": "ns/iter",
            "extra": "iterations: 26198\ncpu: 26718.79532788759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22752.550510635607,
            "unit": "ns/iter",
            "extra": "iterations: 30746\ncpu: 22752.416574514078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 135825.1368932083,
            "unit": "ns/iter",
            "extra": "iterations: 5150\ncpu: 135825.32038835052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 285317.81351790624,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 285310.99348534434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 72110.63209876636,
            "unit": "ns/iter",
            "extra": "iterations: 9720\ncpu: 72108.91975308603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 72536.60355519553,
            "unit": "ns/iter",
            "extra": "iterations: 9676\ncpu: 72535.82058701935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 71847.70558064114,
            "unit": "ns/iter",
            "extra": "iterations: 9748\ncpu: 71847.3225276981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 144534.43845995815,
            "unit": "ns/iter",
            "extra": "iterations: 4883\ncpu: 144530.9850501751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 134162.69057774602,
            "unit": "ns/iter",
            "extra": "iterations: 5158\ncpu: 134153.1989143063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44520.97758247227,
            "unit": "ns/iter",
            "extra": "iterations: 15702\ncpu: 44518.1441854541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 214883.7614369024,
            "unit": "ns/iter",
            "extra": "iterations: 3257\ncpu: 214873.77955173183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174881.35905118947,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 174867.24094881403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 175772.0945098865,
            "unit": "ns/iter",
            "extra": "iterations: 3989\ncpu: 175761.01779894734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 178760.3427914064,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 178739.110429451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 309587.03065827134,
            "unit": "ns/iter",
            "extra": "iterations: 2218\ncpu: 309575.879170422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1237248.8460176953,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1237224.9557522065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1028307.1369661501,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1028305.891016194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1030850.7407952592,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1030830.7805596573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1022123.3892127093,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1022112.2448979698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 658445.3668862232,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 658433.3960489122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1013502.1994219681,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1013395.3757225482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45809.94805024852,
            "unit": "ns/iter",
            "extra": "iterations: 15284\ncpu: 45807.59617901082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 219278.20287587846,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 219267.27102219476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 178412.79827014855,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 178404.45179343762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 178008.3897657834,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 178000.99287169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 177593.20218996654,
            "unit": "ns/iter",
            "extra": "iterations: 3927\ncpu: 177584.05907817525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 309987.2069118627,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 309966.59282232943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1233159.7279151462,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1233147.8798586705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1027952.3058822887,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1027939.2647058676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1029402.3397059791,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1029327.7941176418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1018109.8938953062,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1018062.0639534799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 663328.621442145,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 663281.9734345275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1015355.2503639887,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1015337.7001455561 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}