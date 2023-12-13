window.BENCHMARK_DATA = {
  "lastUpdate": 1702492190169,
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
      }
    ]
  }
}