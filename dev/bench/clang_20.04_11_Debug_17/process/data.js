window.BENCHMARK_DATA = {
  "lastUpdate": 1705772708605,
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
      }
    ]
  }
}