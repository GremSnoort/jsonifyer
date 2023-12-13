window.BENCHMARK_DATA = {
  "lastUpdate": 1702489555621,
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
      }
    ]
  }
}