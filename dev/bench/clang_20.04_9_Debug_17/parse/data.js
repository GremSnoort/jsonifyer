window.BENCHMARK_DATA = {
  "lastUpdate": 1705777723760,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-9 20.04 Debug c++-17": [
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
        "date": 1702489553909,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8021.792080568248,
            "unit": "ns/iter",
            "extra": "iterations: 87279\ncpu: 8021.4461668900885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59419.219300002624,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59406.48 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109350.56537236276,
            "unit": "ns/iter",
            "extra": "iterations: 7855\ncpu: 109344.50668364097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159342.98762009208,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 159336.52993348113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 209197.80813954957,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 209184.54457364336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 258778.02215568762,
            "unit": "ns/iter",
            "extra": "iterations: 3340\ncpu: 258765.2095808385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 308492.6998223829,
            "unit": "ns/iter",
            "extra": "iterations: 2815\ncpu: 308479.96447602136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 357203.93547062454,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 357188.4504726673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 405811.62324927363,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 405790.3361344535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6800.290787377461,
            "unit": "ns/iter",
            "extra": "iterations: 102924\ncpu: 6800.004857953433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5571.794964114899,
            "unit": "ns/iter",
            "extra": "iterations: 125539\ncpu: 5571.640685364711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5578.854510268234,
            "unit": "ns/iter",
            "extra": "iterations: 126600\ncpu: 5578.749605055293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5537.977888906198,
            "unit": "ns/iter",
            "extra": "iterations: 126181\ncpu: 5537.663356606785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8872.353688275545,
            "unit": "ns/iter",
            "extra": "iterations: 78736\ncpu: 8871.620351554566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28649.468885826653,
            "unit": "ns/iter",
            "extra": "iterations: 28299\ncpu: 28646.36559595747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126130.05756773193,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 126122.9240282686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98880.56179125066,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 98873.15436241623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98138.2923147865,
            "unit": "ns/iter",
            "extra": "iterations: 8679\ncpu: 98128.39036755367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93297.00439222173,
            "unit": "ns/iter",
            "extra": "iterations: 9107\ncpu: 93290.98495662675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 242290.86022975954,
            "unit": "ns/iter",
            "extra": "iterations: 3656\ncpu: 242270.81509846874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1964895.283898363,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1964737.5000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1542254.207641234,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1542105.4817275763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1530412.4802632283,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1530337.3355263157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1521092.3770492538,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1521040.9836065604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 843623.4990892299,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 843567.3041894347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1483331.152000028,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1483252.319999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36246.63807807284,
            "unit": "ns/iter",
            "extra": "iterations: 22748\ncpu: 36244.570951292444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157893.6954831706,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 157890.6886338389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125456.3194282438,
            "unit": "ns/iter",
            "extra": "iterations: 6856\ncpu: 125451.19603267215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 127988.68520447111,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 127981.84386617085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121631.68694783797,
            "unit": "ns/iter",
            "extra": "iterations: 7018\ncpu: 121627.81419207771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 261607.45824542432,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 261604.58245402502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2013382.300215817,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2013254.859611233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1588716.2542662502,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1588661.4334470944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1586165.0170940747,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1586056.581196576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1573813.0793918855,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1573766.5540540568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 862798.3152896726,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 862721.4624881305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1527874.3848683673,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1527761.348684212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5338094.239999691,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5337436.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3150843.1216213396,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3150630.067567589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28120.688130572842,
            "unit": "ns/iter",
            "extra": "iterations: 29041\ncpu: 28118.246616851928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132774.98279367932,
            "unit": "ns/iter",
            "extra": "iterations: 6393\ncpu: 132766.15047708413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 100416.55681819304,
            "unit": "ns/iter",
            "extra": "iterations: 8448\ncpu: 100405.51609848504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 93119.23348927942,
            "unit": "ns/iter",
            "extra": "iterations: 9191\ncpu: 93113.12153193321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94854.03155204213,
            "unit": "ns/iter",
            "extra": "iterations: 9001\ncpu: 94843.51738695643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 226261.05543877874,
            "unit": "ns/iter",
            "extra": "iterations: 3806\ncpu: 226251.94429847714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1970268.0488324447,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1970095.541401271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1540626.76923072,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1540056.3545150594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1535009.27093604,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1534917.8981937582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1521026.3006536604,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1520980.2287581735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 840206.0804701415,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 840164.5569620279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1482567.5039745597,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1482539.9046104995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2914.2414779004234,
            "unit": "ns/iter",
            "extra": "iterations: 239935\ncpu: 2914.155083668508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18936.26204827394,
            "unit": "ns/iter",
            "extra": "iterations: 36997\ncpu: 18935.748844500737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15658.08207119698,
            "unit": "ns/iter",
            "extra": "iterations: 46350\ncpu: 15657.456310679683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15650.379602512903,
            "unit": "ns/iter",
            "extra": "iterations: 44731\ncpu: 15650.211262882562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11505.474311866328,
            "unit": "ns/iter",
            "extra": "iterations: 60962\ncpu: 11504.824316787552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 75180.79935828896,
            "unit": "ns/iter",
            "extra": "iterations: 9350\ncpu: 75177.48663101648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135215.2672330427,
            "unit": "ns/iter",
            "extra": "iterations: 5179\ncpu: 135211.2183819273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32851.050901579,
            "unit": "ns/iter",
            "extra": "iterations: 21296\ncpu: 32850.48835462032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32805.352639196106,
            "unit": "ns/iter",
            "extra": "iterations: 21427\ncpu: 32803.93895552324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32618.70810231247,
            "unit": "ns/iter",
            "extra": "iterations: 21463\ncpu: 32615.165633881606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65996.67191180483,
            "unit": "ns/iter",
            "extra": "iterations: 10613\ncpu: 65991.84961839281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61440.36968738976,
            "unit": "ns/iter",
            "extra": "iterations: 11388\ncpu: 61434.47488584508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24493.71434552063,
            "unit": "ns/iter",
            "extra": "iterations: 28664\ncpu: 24493.308679877213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117044.97616249644,
            "unit": "ns/iter",
            "extra": "iterations: 5957\ncpu: 117034.39650831002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95039.57631257322,
            "unit": "ns/iter",
            "extra": "iterations: 7371\ncpu: 95026.72636005907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94695.56325260898,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 94688.8918955491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93309.57650818983,
            "unit": "ns/iter",
            "extra": "iterations: 7509\ncpu: 93301.65135171285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 142596.10342020064,
            "unit": "ns/iter",
            "extra": "iterations: 4912\ncpu: 142592.01954397393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 607746.9949916604,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 607711.769616026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 478198.0540724938,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 478190.2806297011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 478303.4733969949,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 478287.38062755077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 472712.0971004537,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 472682.1982467963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 302956.22593234107,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 302946.487424114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 471029.5600268526,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 471001.4084507017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23881.80038985238,
            "unit": "ns/iter",
            "extra": "iterations: 29242\ncpu: 23881.013610560032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120562.62374871578,
            "unit": "ns/iter",
            "extra": "iterations: 5794\ncpu: 120551.00103555544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96797.55721393636,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 96789.12382531738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97561.04988156832,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 97551.38637313752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95626.39374060502,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 95620.73254065787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 143742.4282488059,
            "unit": "ns/iter",
            "extra": "iterations: 4871\ncpu: 143740.83350441416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 586162.5688927065,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 586109.2138630577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 476274.20286884165,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 476255.12295081967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 477595.79795918235,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 477568.3673469421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 474840.65332427574,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 474806.987788332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 305053.63913043175,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 305020.21739130095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 471527.6720647797,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 471481.84885290486 ns\nthreads: 1"
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
        "date": 1702489553909,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8021.792080568248,
            "unit": "ns/iter",
            "extra": "iterations: 87279\ncpu: 8021.4461668900885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59419.219300002624,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59406.48 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109350.56537236276,
            "unit": "ns/iter",
            "extra": "iterations: 7855\ncpu: 109344.50668364097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159342.98762009208,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 159336.52993348113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 209197.80813954957,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 209184.54457364336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 258778.02215568762,
            "unit": "ns/iter",
            "extra": "iterations: 3340\ncpu: 258765.2095808385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 308492.6998223829,
            "unit": "ns/iter",
            "extra": "iterations: 2815\ncpu: 308479.96447602136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 357203.93547062454,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 357188.4504726673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 405811.62324927363,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 405790.3361344535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6800.290787377461,
            "unit": "ns/iter",
            "extra": "iterations: 102924\ncpu: 6800.004857953433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5571.794964114899,
            "unit": "ns/iter",
            "extra": "iterations: 125539\ncpu: 5571.640685364711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5578.854510268234,
            "unit": "ns/iter",
            "extra": "iterations: 126600\ncpu: 5578.749605055293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5537.977888906198,
            "unit": "ns/iter",
            "extra": "iterations: 126181\ncpu: 5537.663356606785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8872.353688275545,
            "unit": "ns/iter",
            "extra": "iterations: 78736\ncpu: 8871.620351554566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28649.468885826653,
            "unit": "ns/iter",
            "extra": "iterations: 28299\ncpu: 28646.36559595747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126130.05756773193,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 126122.9240282686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98880.56179125066,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 98873.15436241623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98138.2923147865,
            "unit": "ns/iter",
            "extra": "iterations: 8679\ncpu: 98128.39036755367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93297.00439222173,
            "unit": "ns/iter",
            "extra": "iterations: 9107\ncpu: 93290.98495662675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 242290.86022975954,
            "unit": "ns/iter",
            "extra": "iterations: 3656\ncpu: 242270.81509846874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1964895.283898363,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1964737.5000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1542254.207641234,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1542105.4817275763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1530412.4802632283,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1530337.3355263157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1521092.3770492538,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1521040.9836065604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 843623.4990892299,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 843567.3041894347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1483331.152000028,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1483252.319999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36246.63807807284,
            "unit": "ns/iter",
            "extra": "iterations: 22748\ncpu: 36244.570951292444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157893.6954831706,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 157890.6886338389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125456.3194282438,
            "unit": "ns/iter",
            "extra": "iterations: 6856\ncpu: 125451.19603267215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 127988.68520447111,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 127981.84386617085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121631.68694783797,
            "unit": "ns/iter",
            "extra": "iterations: 7018\ncpu: 121627.81419207771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 261607.45824542432,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 261604.58245402502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2013382.300215817,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2013254.859611233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1588716.2542662502,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1588661.4334470944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1586165.0170940747,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1586056.581196576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1573813.0793918855,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1573766.5540540568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 862798.3152896726,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 862721.4624881305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1527874.3848683673,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1527761.348684212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5338094.239999691,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5337436.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3150843.1216213396,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3150630.067567589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28120.688130572842,
            "unit": "ns/iter",
            "extra": "iterations: 29041\ncpu: 28118.246616851928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132774.98279367932,
            "unit": "ns/iter",
            "extra": "iterations: 6393\ncpu: 132766.15047708413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 100416.55681819304,
            "unit": "ns/iter",
            "extra": "iterations: 8448\ncpu: 100405.51609848504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 93119.23348927942,
            "unit": "ns/iter",
            "extra": "iterations: 9191\ncpu: 93113.12153193321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94854.03155204213,
            "unit": "ns/iter",
            "extra": "iterations: 9001\ncpu: 94843.51738695643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 226261.05543877874,
            "unit": "ns/iter",
            "extra": "iterations: 3806\ncpu: 226251.94429847714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1970268.0488324447,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1970095.541401271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1540626.76923072,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1540056.3545150594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1535009.27093604,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1534917.8981937582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1521026.3006536604,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1520980.2287581735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 840206.0804701415,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 840164.5569620279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1482567.5039745597,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1482539.9046104995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2914.2414779004234,
            "unit": "ns/iter",
            "extra": "iterations: 239935\ncpu: 2914.155083668508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18936.26204827394,
            "unit": "ns/iter",
            "extra": "iterations: 36997\ncpu: 18935.748844500737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15658.08207119698,
            "unit": "ns/iter",
            "extra": "iterations: 46350\ncpu: 15657.456310679683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15650.379602512903,
            "unit": "ns/iter",
            "extra": "iterations: 44731\ncpu: 15650.211262882562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11505.474311866328,
            "unit": "ns/iter",
            "extra": "iterations: 60962\ncpu: 11504.824316787552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 75180.79935828896,
            "unit": "ns/iter",
            "extra": "iterations: 9350\ncpu: 75177.48663101648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135215.2672330427,
            "unit": "ns/iter",
            "extra": "iterations: 5179\ncpu: 135211.2183819273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32851.050901579,
            "unit": "ns/iter",
            "extra": "iterations: 21296\ncpu: 32850.48835462032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32805.352639196106,
            "unit": "ns/iter",
            "extra": "iterations: 21427\ncpu: 32803.93895552324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32618.70810231247,
            "unit": "ns/iter",
            "extra": "iterations: 21463\ncpu: 32615.165633881606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65996.67191180483,
            "unit": "ns/iter",
            "extra": "iterations: 10613\ncpu: 65991.84961839281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61440.36968738976,
            "unit": "ns/iter",
            "extra": "iterations: 11388\ncpu: 61434.47488584508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24493.71434552063,
            "unit": "ns/iter",
            "extra": "iterations: 28664\ncpu: 24493.308679877213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117044.97616249644,
            "unit": "ns/iter",
            "extra": "iterations: 5957\ncpu: 117034.39650831002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95039.57631257322,
            "unit": "ns/iter",
            "extra": "iterations: 7371\ncpu: 95026.72636005907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94695.56325260898,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 94688.8918955491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93309.57650818983,
            "unit": "ns/iter",
            "extra": "iterations: 7509\ncpu: 93301.65135171285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 142596.10342020064,
            "unit": "ns/iter",
            "extra": "iterations: 4912\ncpu: 142592.01954397393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 607746.9949916604,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 607711.769616026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 478198.0540724938,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 478190.2806297011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 478303.4733969949,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 478287.38062755077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 472712.0971004537,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 472682.1982467963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 302956.22593234107,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 302946.487424114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 471029.5600268526,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 471001.4084507017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23881.80038985238,
            "unit": "ns/iter",
            "extra": "iterations: 29242\ncpu: 23881.013610560032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120562.62374871578,
            "unit": "ns/iter",
            "extra": "iterations: 5794\ncpu: 120551.00103555544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96797.55721393636,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 96789.12382531738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97561.04988156832,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 97551.38637313752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95626.39374060502,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 95620.73254065787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 143742.4282488059,
            "unit": "ns/iter",
            "extra": "iterations: 4871\ncpu: 143740.83350441416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 586162.5688927065,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 586109.2138630577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 476274.20286884165,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 476255.12295081967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 477595.79795918235,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 477568.3673469421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 474840.65332427574,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 474806.987788332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 305053.63913043175,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 305020.21739130095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 471527.6720647797,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 471481.84885290486 ns\nthreads: 1"
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
        "date": 1702489553909,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8021.792080568248,
            "unit": "ns/iter",
            "extra": "iterations: 87279\ncpu: 8021.4461668900885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59419.219300002624,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59406.48 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109350.56537236276,
            "unit": "ns/iter",
            "extra": "iterations: 7855\ncpu: 109344.50668364097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159342.98762009208,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 159336.52993348113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 209197.80813954957,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 209184.54457364336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 258778.02215568762,
            "unit": "ns/iter",
            "extra": "iterations: 3340\ncpu: 258765.2095808385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 308492.6998223829,
            "unit": "ns/iter",
            "extra": "iterations: 2815\ncpu: 308479.96447602136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 357203.93547062454,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 357188.4504726673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 405811.62324927363,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 405790.3361344535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6800.290787377461,
            "unit": "ns/iter",
            "extra": "iterations: 102924\ncpu: 6800.004857953433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5571.794964114899,
            "unit": "ns/iter",
            "extra": "iterations: 125539\ncpu: 5571.640685364711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5578.854510268234,
            "unit": "ns/iter",
            "extra": "iterations: 126600\ncpu: 5578.749605055293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5537.977888906198,
            "unit": "ns/iter",
            "extra": "iterations: 126181\ncpu: 5537.663356606785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8872.353688275545,
            "unit": "ns/iter",
            "extra": "iterations: 78736\ncpu: 8871.620351554566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28649.468885826653,
            "unit": "ns/iter",
            "extra": "iterations: 28299\ncpu: 28646.36559595747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126130.05756773193,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 126122.9240282686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98880.56179125066,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 98873.15436241623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98138.2923147865,
            "unit": "ns/iter",
            "extra": "iterations: 8679\ncpu: 98128.39036755367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93297.00439222173,
            "unit": "ns/iter",
            "extra": "iterations: 9107\ncpu: 93290.98495662675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 242290.86022975954,
            "unit": "ns/iter",
            "extra": "iterations: 3656\ncpu: 242270.81509846874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1964895.283898363,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1964737.5000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1542254.207641234,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1542105.4817275763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1530412.4802632283,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1530337.3355263157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1521092.3770492538,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1521040.9836065604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 843623.4990892299,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 843567.3041894347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1483331.152000028,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1483252.319999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36246.63807807284,
            "unit": "ns/iter",
            "extra": "iterations: 22748\ncpu: 36244.570951292444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157893.6954831706,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 157890.6886338389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125456.3194282438,
            "unit": "ns/iter",
            "extra": "iterations: 6856\ncpu: 125451.19603267215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 127988.68520447111,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 127981.84386617085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121631.68694783797,
            "unit": "ns/iter",
            "extra": "iterations: 7018\ncpu: 121627.81419207771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 261607.45824542432,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 261604.58245402502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2013382.300215817,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2013254.859611233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1588716.2542662502,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1588661.4334470944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1586165.0170940747,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1586056.581196576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1573813.0793918855,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1573766.5540540568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 862798.3152896726,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 862721.4624881305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1527874.3848683673,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1527761.348684212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5338094.239999691,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5337436.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3150843.1216213396,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3150630.067567589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28120.688130572842,
            "unit": "ns/iter",
            "extra": "iterations: 29041\ncpu: 28118.246616851928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132774.98279367932,
            "unit": "ns/iter",
            "extra": "iterations: 6393\ncpu: 132766.15047708413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 100416.55681819304,
            "unit": "ns/iter",
            "extra": "iterations: 8448\ncpu: 100405.51609848504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 93119.23348927942,
            "unit": "ns/iter",
            "extra": "iterations: 9191\ncpu: 93113.12153193321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94854.03155204213,
            "unit": "ns/iter",
            "extra": "iterations: 9001\ncpu: 94843.51738695643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 226261.05543877874,
            "unit": "ns/iter",
            "extra": "iterations: 3806\ncpu: 226251.94429847714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1970268.0488324447,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1970095.541401271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1540626.76923072,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1540056.3545150594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1535009.27093604,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1534917.8981937582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1521026.3006536604,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1520980.2287581735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 840206.0804701415,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 840164.5569620279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1482567.5039745597,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1482539.9046104995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2914.2414779004234,
            "unit": "ns/iter",
            "extra": "iterations: 239935\ncpu: 2914.155083668508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18936.26204827394,
            "unit": "ns/iter",
            "extra": "iterations: 36997\ncpu: 18935.748844500737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15658.08207119698,
            "unit": "ns/iter",
            "extra": "iterations: 46350\ncpu: 15657.456310679683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15650.379602512903,
            "unit": "ns/iter",
            "extra": "iterations: 44731\ncpu: 15650.211262882562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11505.474311866328,
            "unit": "ns/iter",
            "extra": "iterations: 60962\ncpu: 11504.824316787552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 75180.79935828896,
            "unit": "ns/iter",
            "extra": "iterations: 9350\ncpu: 75177.48663101648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135215.2672330427,
            "unit": "ns/iter",
            "extra": "iterations: 5179\ncpu: 135211.2183819273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32851.050901579,
            "unit": "ns/iter",
            "extra": "iterations: 21296\ncpu: 32850.48835462032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32805.352639196106,
            "unit": "ns/iter",
            "extra": "iterations: 21427\ncpu: 32803.93895552324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32618.70810231247,
            "unit": "ns/iter",
            "extra": "iterations: 21463\ncpu: 32615.165633881606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65996.67191180483,
            "unit": "ns/iter",
            "extra": "iterations: 10613\ncpu: 65991.84961839281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61440.36968738976,
            "unit": "ns/iter",
            "extra": "iterations: 11388\ncpu: 61434.47488584508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24493.71434552063,
            "unit": "ns/iter",
            "extra": "iterations: 28664\ncpu: 24493.308679877213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117044.97616249644,
            "unit": "ns/iter",
            "extra": "iterations: 5957\ncpu: 117034.39650831002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95039.57631257322,
            "unit": "ns/iter",
            "extra": "iterations: 7371\ncpu: 95026.72636005907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94695.56325260898,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 94688.8918955491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93309.57650818983,
            "unit": "ns/iter",
            "extra": "iterations: 7509\ncpu: 93301.65135171285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 142596.10342020064,
            "unit": "ns/iter",
            "extra": "iterations: 4912\ncpu: 142592.01954397393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 607746.9949916604,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 607711.769616026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 478198.0540724938,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 478190.2806297011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 478303.4733969949,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 478287.38062755077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 472712.0971004537,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 472682.1982467963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 302956.22593234107,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 302946.487424114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 471029.5600268526,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 471001.4084507017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23881.80038985238,
            "unit": "ns/iter",
            "extra": "iterations: 29242\ncpu: 23881.013610560032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120562.62374871578,
            "unit": "ns/iter",
            "extra": "iterations: 5794\ncpu: 120551.00103555544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96797.55721393636,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 96789.12382531738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97561.04988156832,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 97551.38637313752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95626.39374060502,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 95620.73254065787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 143742.4282488059,
            "unit": "ns/iter",
            "extra": "iterations: 4871\ncpu: 143740.83350441416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 586162.5688927065,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 586109.2138630577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 476274.20286884165,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 476255.12295081967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 477595.79795918235,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 477568.3673469421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 474840.65332427574,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 474806.987788332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 305053.63913043175,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 305020.21739130095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 471527.6720647797,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 471481.84885290486 ns\nthreads: 1"
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
        "date": 1702489553909,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8021.792080568248,
            "unit": "ns/iter",
            "extra": "iterations: 87279\ncpu: 8021.4461668900885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59419.219300002624,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59406.48 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109350.56537236276,
            "unit": "ns/iter",
            "extra": "iterations: 7855\ncpu: 109344.50668364097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159342.98762009208,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 159336.52993348113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 209197.80813954957,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 209184.54457364336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 258778.02215568762,
            "unit": "ns/iter",
            "extra": "iterations: 3340\ncpu: 258765.2095808385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 308492.6998223829,
            "unit": "ns/iter",
            "extra": "iterations: 2815\ncpu: 308479.96447602136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 357203.93547062454,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 357188.4504726673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 405811.62324927363,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 405790.3361344535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6800.290787377461,
            "unit": "ns/iter",
            "extra": "iterations: 102924\ncpu: 6800.004857953433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5571.794964114899,
            "unit": "ns/iter",
            "extra": "iterations: 125539\ncpu: 5571.640685364711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5578.854510268234,
            "unit": "ns/iter",
            "extra": "iterations: 126600\ncpu: 5578.749605055293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5537.977888906198,
            "unit": "ns/iter",
            "extra": "iterations: 126181\ncpu: 5537.663356606785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8872.353688275545,
            "unit": "ns/iter",
            "extra": "iterations: 78736\ncpu: 8871.620351554566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28649.468885826653,
            "unit": "ns/iter",
            "extra": "iterations: 28299\ncpu: 28646.36559595747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126130.05756773193,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 126122.9240282686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98880.56179125066,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 98873.15436241623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98138.2923147865,
            "unit": "ns/iter",
            "extra": "iterations: 8679\ncpu: 98128.39036755367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93297.00439222173,
            "unit": "ns/iter",
            "extra": "iterations: 9107\ncpu: 93290.98495662675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 242290.86022975954,
            "unit": "ns/iter",
            "extra": "iterations: 3656\ncpu: 242270.81509846874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1964895.283898363,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1964737.5000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1542254.207641234,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1542105.4817275763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1530412.4802632283,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1530337.3355263157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1521092.3770492538,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1521040.9836065604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 843623.4990892299,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 843567.3041894347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1483331.152000028,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1483252.319999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36246.63807807284,
            "unit": "ns/iter",
            "extra": "iterations: 22748\ncpu: 36244.570951292444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157893.6954831706,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 157890.6886338389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125456.3194282438,
            "unit": "ns/iter",
            "extra": "iterations: 6856\ncpu: 125451.19603267215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 127988.68520447111,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 127981.84386617085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121631.68694783797,
            "unit": "ns/iter",
            "extra": "iterations: 7018\ncpu: 121627.81419207771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 261607.45824542432,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 261604.58245402502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2013382.300215817,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2013254.859611233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1588716.2542662502,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1588661.4334470944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1586165.0170940747,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1586056.581196576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1573813.0793918855,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1573766.5540540568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 862798.3152896726,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 862721.4624881305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1527874.3848683673,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1527761.348684212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5338094.239999691,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5337436.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3150843.1216213396,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3150630.067567589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28120.688130572842,
            "unit": "ns/iter",
            "extra": "iterations: 29041\ncpu: 28118.246616851928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132774.98279367932,
            "unit": "ns/iter",
            "extra": "iterations: 6393\ncpu: 132766.15047708413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 100416.55681819304,
            "unit": "ns/iter",
            "extra": "iterations: 8448\ncpu: 100405.51609848504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 93119.23348927942,
            "unit": "ns/iter",
            "extra": "iterations: 9191\ncpu: 93113.12153193321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94854.03155204213,
            "unit": "ns/iter",
            "extra": "iterations: 9001\ncpu: 94843.51738695643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 226261.05543877874,
            "unit": "ns/iter",
            "extra": "iterations: 3806\ncpu: 226251.94429847714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1970268.0488324447,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1970095.541401271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1540626.76923072,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1540056.3545150594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1535009.27093604,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1534917.8981937582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1521026.3006536604,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1520980.2287581735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 840206.0804701415,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 840164.5569620279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1482567.5039745597,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1482539.9046104995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2914.2414779004234,
            "unit": "ns/iter",
            "extra": "iterations: 239935\ncpu: 2914.155083668508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18936.26204827394,
            "unit": "ns/iter",
            "extra": "iterations: 36997\ncpu: 18935.748844500737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15658.08207119698,
            "unit": "ns/iter",
            "extra": "iterations: 46350\ncpu: 15657.456310679683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15650.379602512903,
            "unit": "ns/iter",
            "extra": "iterations: 44731\ncpu: 15650.211262882562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11505.474311866328,
            "unit": "ns/iter",
            "extra": "iterations: 60962\ncpu: 11504.824316787552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 75180.79935828896,
            "unit": "ns/iter",
            "extra": "iterations: 9350\ncpu: 75177.48663101648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135215.2672330427,
            "unit": "ns/iter",
            "extra": "iterations: 5179\ncpu: 135211.2183819273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32851.050901579,
            "unit": "ns/iter",
            "extra": "iterations: 21296\ncpu: 32850.48835462032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32805.352639196106,
            "unit": "ns/iter",
            "extra": "iterations: 21427\ncpu: 32803.93895552324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32618.70810231247,
            "unit": "ns/iter",
            "extra": "iterations: 21463\ncpu: 32615.165633881606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65996.67191180483,
            "unit": "ns/iter",
            "extra": "iterations: 10613\ncpu: 65991.84961839281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61440.36968738976,
            "unit": "ns/iter",
            "extra": "iterations: 11388\ncpu: 61434.47488584508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24493.71434552063,
            "unit": "ns/iter",
            "extra": "iterations: 28664\ncpu: 24493.308679877213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117044.97616249644,
            "unit": "ns/iter",
            "extra": "iterations: 5957\ncpu: 117034.39650831002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95039.57631257322,
            "unit": "ns/iter",
            "extra": "iterations: 7371\ncpu: 95026.72636005907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94695.56325260898,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 94688.8918955491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93309.57650818983,
            "unit": "ns/iter",
            "extra": "iterations: 7509\ncpu: 93301.65135171285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 142596.10342020064,
            "unit": "ns/iter",
            "extra": "iterations: 4912\ncpu: 142592.01954397393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 607746.9949916604,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 607711.769616026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 478198.0540724938,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 478190.2806297011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 478303.4733969949,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 478287.38062755077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 472712.0971004537,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 472682.1982467963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 302956.22593234107,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 302946.487424114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 471029.5600268526,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 471001.4084507017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23881.80038985238,
            "unit": "ns/iter",
            "extra": "iterations: 29242\ncpu: 23881.013610560032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120562.62374871578,
            "unit": "ns/iter",
            "extra": "iterations: 5794\ncpu: 120551.00103555544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96797.55721393636,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 96789.12382531738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97561.04988156832,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 97551.38637313752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95626.39374060502,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 95620.73254065787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 143742.4282488059,
            "unit": "ns/iter",
            "extra": "iterations: 4871\ncpu: 143740.83350441416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 586162.5688927065,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 586109.2138630577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 476274.20286884165,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 476255.12295081967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 477595.79795918235,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 477568.3673469421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 474840.65332427574,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 474806.987788332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 305053.63913043175,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 305020.21739130095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 471527.6720647797,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 471481.84885290486 ns\nthreads: 1"
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
        "date": 1702489553909,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8021.792080568248,
            "unit": "ns/iter",
            "extra": "iterations: 87279\ncpu: 8021.4461668900885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59419.219300002624,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59406.48 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109350.56537236276,
            "unit": "ns/iter",
            "extra": "iterations: 7855\ncpu: 109344.50668364097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159342.98762009208,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 159336.52993348113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 209197.80813954957,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 209184.54457364336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 258778.02215568762,
            "unit": "ns/iter",
            "extra": "iterations: 3340\ncpu: 258765.2095808385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 308492.6998223829,
            "unit": "ns/iter",
            "extra": "iterations: 2815\ncpu: 308479.96447602136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 357203.93547062454,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 357188.4504726673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 405811.62324927363,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 405790.3361344535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6800.290787377461,
            "unit": "ns/iter",
            "extra": "iterations: 102924\ncpu: 6800.004857953433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5571.794964114899,
            "unit": "ns/iter",
            "extra": "iterations: 125539\ncpu: 5571.640685364711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5578.854510268234,
            "unit": "ns/iter",
            "extra": "iterations: 126600\ncpu: 5578.749605055293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5537.977888906198,
            "unit": "ns/iter",
            "extra": "iterations: 126181\ncpu: 5537.663356606785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8872.353688275545,
            "unit": "ns/iter",
            "extra": "iterations: 78736\ncpu: 8871.620351554566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28649.468885826653,
            "unit": "ns/iter",
            "extra": "iterations: 28299\ncpu: 28646.36559595747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126130.05756773193,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 126122.9240282686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98880.56179125066,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 98873.15436241623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98138.2923147865,
            "unit": "ns/iter",
            "extra": "iterations: 8679\ncpu: 98128.39036755367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93297.00439222173,
            "unit": "ns/iter",
            "extra": "iterations: 9107\ncpu: 93290.98495662675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 242290.86022975954,
            "unit": "ns/iter",
            "extra": "iterations: 3656\ncpu: 242270.81509846874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1964895.283898363,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1964737.5000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1542254.207641234,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1542105.4817275763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1530412.4802632283,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1530337.3355263157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1521092.3770492538,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1521040.9836065604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 843623.4990892299,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 843567.3041894347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1483331.152000028,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1483252.319999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36246.63807807284,
            "unit": "ns/iter",
            "extra": "iterations: 22748\ncpu: 36244.570951292444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157893.6954831706,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 157890.6886338389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125456.3194282438,
            "unit": "ns/iter",
            "extra": "iterations: 6856\ncpu: 125451.19603267215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 127988.68520447111,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 127981.84386617085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121631.68694783797,
            "unit": "ns/iter",
            "extra": "iterations: 7018\ncpu: 121627.81419207771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 261607.45824542432,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 261604.58245402502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2013382.300215817,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2013254.859611233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1588716.2542662502,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1588661.4334470944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1586165.0170940747,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1586056.581196576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1573813.0793918855,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1573766.5540540568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 862798.3152896726,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 862721.4624881305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1527874.3848683673,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1527761.348684212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5338094.239999691,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5337436.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3150843.1216213396,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3150630.067567589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28120.688130572842,
            "unit": "ns/iter",
            "extra": "iterations: 29041\ncpu: 28118.246616851928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132774.98279367932,
            "unit": "ns/iter",
            "extra": "iterations: 6393\ncpu: 132766.15047708413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 100416.55681819304,
            "unit": "ns/iter",
            "extra": "iterations: 8448\ncpu: 100405.51609848504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 93119.23348927942,
            "unit": "ns/iter",
            "extra": "iterations: 9191\ncpu: 93113.12153193321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94854.03155204213,
            "unit": "ns/iter",
            "extra": "iterations: 9001\ncpu: 94843.51738695643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 226261.05543877874,
            "unit": "ns/iter",
            "extra": "iterations: 3806\ncpu: 226251.94429847714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1970268.0488324447,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1970095.541401271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1540626.76923072,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1540056.3545150594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1535009.27093604,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1534917.8981937582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1521026.3006536604,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1520980.2287581735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 840206.0804701415,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 840164.5569620279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1482567.5039745597,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1482539.9046104995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2914.2414779004234,
            "unit": "ns/iter",
            "extra": "iterations: 239935\ncpu: 2914.155083668508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18936.26204827394,
            "unit": "ns/iter",
            "extra": "iterations: 36997\ncpu: 18935.748844500737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15658.08207119698,
            "unit": "ns/iter",
            "extra": "iterations: 46350\ncpu: 15657.456310679683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15650.379602512903,
            "unit": "ns/iter",
            "extra": "iterations: 44731\ncpu: 15650.211262882562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11505.474311866328,
            "unit": "ns/iter",
            "extra": "iterations: 60962\ncpu: 11504.824316787552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 75180.79935828896,
            "unit": "ns/iter",
            "extra": "iterations: 9350\ncpu: 75177.48663101648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135215.2672330427,
            "unit": "ns/iter",
            "extra": "iterations: 5179\ncpu: 135211.2183819273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32851.050901579,
            "unit": "ns/iter",
            "extra": "iterations: 21296\ncpu: 32850.48835462032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32805.352639196106,
            "unit": "ns/iter",
            "extra": "iterations: 21427\ncpu: 32803.93895552324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32618.70810231247,
            "unit": "ns/iter",
            "extra": "iterations: 21463\ncpu: 32615.165633881606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65996.67191180483,
            "unit": "ns/iter",
            "extra": "iterations: 10613\ncpu: 65991.84961839281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61440.36968738976,
            "unit": "ns/iter",
            "extra": "iterations: 11388\ncpu: 61434.47488584508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24493.71434552063,
            "unit": "ns/iter",
            "extra": "iterations: 28664\ncpu: 24493.308679877213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117044.97616249644,
            "unit": "ns/iter",
            "extra": "iterations: 5957\ncpu: 117034.39650831002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95039.57631257322,
            "unit": "ns/iter",
            "extra": "iterations: 7371\ncpu: 95026.72636005907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94695.56325260898,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 94688.8918955491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93309.57650818983,
            "unit": "ns/iter",
            "extra": "iterations: 7509\ncpu: 93301.65135171285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 142596.10342020064,
            "unit": "ns/iter",
            "extra": "iterations: 4912\ncpu: 142592.01954397393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 607746.9949916604,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 607711.769616026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 478198.0540724938,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 478190.2806297011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 478303.4733969949,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 478287.38062755077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 472712.0971004537,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 472682.1982467963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 302956.22593234107,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 302946.487424114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 471029.5600268526,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 471001.4084507017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23881.80038985238,
            "unit": "ns/iter",
            "extra": "iterations: 29242\ncpu: 23881.013610560032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120562.62374871578,
            "unit": "ns/iter",
            "extra": "iterations: 5794\ncpu: 120551.00103555544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96797.55721393636,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 96789.12382531738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97561.04988156832,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 97551.38637313752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95626.39374060502,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 95620.73254065787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 143742.4282488059,
            "unit": "ns/iter",
            "extra": "iterations: 4871\ncpu: 143740.83350441416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 586162.5688927065,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 586109.2138630577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 476274.20286884165,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 476255.12295081967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 477595.79795918235,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 477568.3673469421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 474840.65332427574,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 474806.987788332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 305053.63913043175,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 305020.21739130095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 471527.6720647797,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 471481.84885290486 ns\nthreads: 1"
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
        "date": 1702489553909,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8021.792080568248,
            "unit": "ns/iter",
            "extra": "iterations: 87279\ncpu: 8021.4461668900885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59419.219300002624,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59406.48 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109350.56537236276,
            "unit": "ns/iter",
            "extra": "iterations: 7855\ncpu: 109344.50668364097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159342.98762009208,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 159336.52993348113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 209197.80813954957,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 209184.54457364336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 258778.02215568762,
            "unit": "ns/iter",
            "extra": "iterations: 3340\ncpu: 258765.2095808385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 308492.6998223829,
            "unit": "ns/iter",
            "extra": "iterations: 2815\ncpu: 308479.96447602136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 357203.93547062454,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 357188.4504726673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 405811.62324927363,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 405790.3361344535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6800.290787377461,
            "unit": "ns/iter",
            "extra": "iterations: 102924\ncpu: 6800.004857953433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5571.794964114899,
            "unit": "ns/iter",
            "extra": "iterations: 125539\ncpu: 5571.640685364711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5578.854510268234,
            "unit": "ns/iter",
            "extra": "iterations: 126600\ncpu: 5578.749605055293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5537.977888906198,
            "unit": "ns/iter",
            "extra": "iterations: 126181\ncpu: 5537.663356606785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8872.353688275545,
            "unit": "ns/iter",
            "extra": "iterations: 78736\ncpu: 8871.620351554566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28649.468885826653,
            "unit": "ns/iter",
            "extra": "iterations: 28299\ncpu: 28646.36559595747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126130.05756773193,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 126122.9240282686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98880.56179125066,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 98873.15436241623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98138.2923147865,
            "unit": "ns/iter",
            "extra": "iterations: 8679\ncpu: 98128.39036755367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93297.00439222173,
            "unit": "ns/iter",
            "extra": "iterations: 9107\ncpu: 93290.98495662675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 242290.86022975954,
            "unit": "ns/iter",
            "extra": "iterations: 3656\ncpu: 242270.81509846874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1964895.283898363,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1964737.5000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1542254.207641234,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1542105.4817275763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1530412.4802632283,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1530337.3355263157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1521092.3770492538,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1521040.9836065604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 843623.4990892299,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 843567.3041894347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1483331.152000028,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1483252.319999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36246.63807807284,
            "unit": "ns/iter",
            "extra": "iterations: 22748\ncpu: 36244.570951292444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157893.6954831706,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 157890.6886338389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125456.3194282438,
            "unit": "ns/iter",
            "extra": "iterations: 6856\ncpu: 125451.19603267215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 127988.68520447111,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 127981.84386617085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121631.68694783797,
            "unit": "ns/iter",
            "extra": "iterations: 7018\ncpu: 121627.81419207771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 261607.45824542432,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 261604.58245402502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2013382.300215817,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2013254.859611233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1588716.2542662502,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1588661.4334470944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1586165.0170940747,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1586056.581196576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1573813.0793918855,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1573766.5540540568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 862798.3152896726,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 862721.4624881305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1527874.3848683673,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1527761.348684212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5338094.239999691,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5337436.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3150843.1216213396,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3150630.067567589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28120.688130572842,
            "unit": "ns/iter",
            "extra": "iterations: 29041\ncpu: 28118.246616851928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132774.98279367932,
            "unit": "ns/iter",
            "extra": "iterations: 6393\ncpu: 132766.15047708413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 100416.55681819304,
            "unit": "ns/iter",
            "extra": "iterations: 8448\ncpu: 100405.51609848504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 93119.23348927942,
            "unit": "ns/iter",
            "extra": "iterations: 9191\ncpu: 93113.12153193321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94854.03155204213,
            "unit": "ns/iter",
            "extra": "iterations: 9001\ncpu: 94843.51738695643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 226261.05543877874,
            "unit": "ns/iter",
            "extra": "iterations: 3806\ncpu: 226251.94429847714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1970268.0488324447,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1970095.541401271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1540626.76923072,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1540056.3545150594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1535009.27093604,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1534917.8981937582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1521026.3006536604,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1520980.2287581735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 840206.0804701415,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 840164.5569620279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1482567.5039745597,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1482539.9046104995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2914.2414779004234,
            "unit": "ns/iter",
            "extra": "iterations: 239935\ncpu: 2914.155083668508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18936.26204827394,
            "unit": "ns/iter",
            "extra": "iterations: 36997\ncpu: 18935.748844500737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15658.08207119698,
            "unit": "ns/iter",
            "extra": "iterations: 46350\ncpu: 15657.456310679683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15650.379602512903,
            "unit": "ns/iter",
            "extra": "iterations: 44731\ncpu: 15650.211262882562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11505.474311866328,
            "unit": "ns/iter",
            "extra": "iterations: 60962\ncpu: 11504.824316787552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 75180.79935828896,
            "unit": "ns/iter",
            "extra": "iterations: 9350\ncpu: 75177.48663101648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135215.2672330427,
            "unit": "ns/iter",
            "extra": "iterations: 5179\ncpu: 135211.2183819273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32851.050901579,
            "unit": "ns/iter",
            "extra": "iterations: 21296\ncpu: 32850.48835462032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32805.352639196106,
            "unit": "ns/iter",
            "extra": "iterations: 21427\ncpu: 32803.93895552324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32618.70810231247,
            "unit": "ns/iter",
            "extra": "iterations: 21463\ncpu: 32615.165633881606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65996.67191180483,
            "unit": "ns/iter",
            "extra": "iterations: 10613\ncpu: 65991.84961839281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61440.36968738976,
            "unit": "ns/iter",
            "extra": "iterations: 11388\ncpu: 61434.47488584508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24493.71434552063,
            "unit": "ns/iter",
            "extra": "iterations: 28664\ncpu: 24493.308679877213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117044.97616249644,
            "unit": "ns/iter",
            "extra": "iterations: 5957\ncpu: 117034.39650831002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95039.57631257322,
            "unit": "ns/iter",
            "extra": "iterations: 7371\ncpu: 95026.72636005907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94695.56325260898,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 94688.8918955491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93309.57650818983,
            "unit": "ns/iter",
            "extra": "iterations: 7509\ncpu: 93301.65135171285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 142596.10342020064,
            "unit": "ns/iter",
            "extra": "iterations: 4912\ncpu: 142592.01954397393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 607746.9949916604,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 607711.769616026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 478198.0540724938,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 478190.2806297011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 478303.4733969949,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 478287.38062755077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 472712.0971004537,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 472682.1982467963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 302956.22593234107,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 302946.487424114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 471029.5600268526,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 471001.4084507017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23881.80038985238,
            "unit": "ns/iter",
            "extra": "iterations: 29242\ncpu: 23881.013610560032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120562.62374871578,
            "unit": "ns/iter",
            "extra": "iterations: 5794\ncpu: 120551.00103555544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96797.55721393636,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 96789.12382531738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97561.04988156832,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 97551.38637313752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95626.39374060502,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 95620.73254065787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 143742.4282488059,
            "unit": "ns/iter",
            "extra": "iterations: 4871\ncpu: 143740.83350441416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 586162.5688927065,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 586109.2138630577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 476274.20286884165,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 476255.12295081967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 477595.79795918235,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 477568.3673469421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 474840.65332427574,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 474806.987788332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 305053.63913043175,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 305020.21739130095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 471527.6720647797,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 471481.84885290486 ns\nthreads: 1"
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
        "date": 1702489553909,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8021.792080568248,
            "unit": "ns/iter",
            "extra": "iterations: 87279\ncpu: 8021.4461668900885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59419.219300002624,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59406.48 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109350.56537236276,
            "unit": "ns/iter",
            "extra": "iterations: 7855\ncpu: 109344.50668364097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159342.98762009208,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 159336.52993348113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 209197.80813954957,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 209184.54457364336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 258778.02215568762,
            "unit": "ns/iter",
            "extra": "iterations: 3340\ncpu: 258765.2095808385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 308492.6998223829,
            "unit": "ns/iter",
            "extra": "iterations: 2815\ncpu: 308479.96447602136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 357203.93547062454,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 357188.4504726673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 405811.62324927363,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 405790.3361344535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6800.290787377461,
            "unit": "ns/iter",
            "extra": "iterations: 102924\ncpu: 6800.004857953433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5571.794964114899,
            "unit": "ns/iter",
            "extra": "iterations: 125539\ncpu: 5571.640685364711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5578.854510268234,
            "unit": "ns/iter",
            "extra": "iterations: 126600\ncpu: 5578.749605055293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5537.977888906198,
            "unit": "ns/iter",
            "extra": "iterations: 126181\ncpu: 5537.663356606785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8872.353688275545,
            "unit": "ns/iter",
            "extra": "iterations: 78736\ncpu: 8871.620351554566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28649.468885826653,
            "unit": "ns/iter",
            "extra": "iterations: 28299\ncpu: 28646.36559595747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126130.05756773193,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 126122.9240282686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98880.56179125066,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 98873.15436241623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98138.2923147865,
            "unit": "ns/iter",
            "extra": "iterations: 8679\ncpu: 98128.39036755367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93297.00439222173,
            "unit": "ns/iter",
            "extra": "iterations: 9107\ncpu: 93290.98495662675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 242290.86022975954,
            "unit": "ns/iter",
            "extra": "iterations: 3656\ncpu: 242270.81509846874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1964895.283898363,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1964737.5000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1542254.207641234,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1542105.4817275763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1530412.4802632283,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1530337.3355263157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1521092.3770492538,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1521040.9836065604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 843623.4990892299,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 843567.3041894347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1483331.152000028,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1483252.319999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36246.63807807284,
            "unit": "ns/iter",
            "extra": "iterations: 22748\ncpu: 36244.570951292444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157893.6954831706,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 157890.6886338389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125456.3194282438,
            "unit": "ns/iter",
            "extra": "iterations: 6856\ncpu: 125451.19603267215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 127988.68520447111,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 127981.84386617085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121631.68694783797,
            "unit": "ns/iter",
            "extra": "iterations: 7018\ncpu: 121627.81419207771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 261607.45824542432,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 261604.58245402502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2013382.300215817,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2013254.859611233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1588716.2542662502,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1588661.4334470944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1586165.0170940747,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1586056.581196576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1573813.0793918855,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1573766.5540540568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 862798.3152896726,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 862721.4624881305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1527874.3848683673,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1527761.348684212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5338094.239999691,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5337436.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3150843.1216213396,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3150630.067567589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28120.688130572842,
            "unit": "ns/iter",
            "extra": "iterations: 29041\ncpu: 28118.246616851928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132774.98279367932,
            "unit": "ns/iter",
            "extra": "iterations: 6393\ncpu: 132766.15047708413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 100416.55681819304,
            "unit": "ns/iter",
            "extra": "iterations: 8448\ncpu: 100405.51609848504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 93119.23348927942,
            "unit": "ns/iter",
            "extra": "iterations: 9191\ncpu: 93113.12153193321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94854.03155204213,
            "unit": "ns/iter",
            "extra": "iterations: 9001\ncpu: 94843.51738695643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 226261.05543877874,
            "unit": "ns/iter",
            "extra": "iterations: 3806\ncpu: 226251.94429847714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1970268.0488324447,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1970095.541401271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1540626.76923072,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1540056.3545150594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1535009.27093604,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1534917.8981937582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1521026.3006536604,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1520980.2287581735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 840206.0804701415,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 840164.5569620279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1482567.5039745597,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1482539.9046104995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2914.2414779004234,
            "unit": "ns/iter",
            "extra": "iterations: 239935\ncpu: 2914.155083668508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18936.26204827394,
            "unit": "ns/iter",
            "extra": "iterations: 36997\ncpu: 18935.748844500737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15658.08207119698,
            "unit": "ns/iter",
            "extra": "iterations: 46350\ncpu: 15657.456310679683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15650.379602512903,
            "unit": "ns/iter",
            "extra": "iterations: 44731\ncpu: 15650.211262882562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11505.474311866328,
            "unit": "ns/iter",
            "extra": "iterations: 60962\ncpu: 11504.824316787552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 75180.79935828896,
            "unit": "ns/iter",
            "extra": "iterations: 9350\ncpu: 75177.48663101648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135215.2672330427,
            "unit": "ns/iter",
            "extra": "iterations: 5179\ncpu: 135211.2183819273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32851.050901579,
            "unit": "ns/iter",
            "extra": "iterations: 21296\ncpu: 32850.48835462032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32805.352639196106,
            "unit": "ns/iter",
            "extra": "iterations: 21427\ncpu: 32803.93895552324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32618.70810231247,
            "unit": "ns/iter",
            "extra": "iterations: 21463\ncpu: 32615.165633881606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65996.67191180483,
            "unit": "ns/iter",
            "extra": "iterations: 10613\ncpu: 65991.84961839281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61440.36968738976,
            "unit": "ns/iter",
            "extra": "iterations: 11388\ncpu: 61434.47488584508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24493.71434552063,
            "unit": "ns/iter",
            "extra": "iterations: 28664\ncpu: 24493.308679877213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117044.97616249644,
            "unit": "ns/iter",
            "extra": "iterations: 5957\ncpu: 117034.39650831002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95039.57631257322,
            "unit": "ns/iter",
            "extra": "iterations: 7371\ncpu: 95026.72636005907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94695.56325260898,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 94688.8918955491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93309.57650818983,
            "unit": "ns/iter",
            "extra": "iterations: 7509\ncpu: 93301.65135171285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 142596.10342020064,
            "unit": "ns/iter",
            "extra": "iterations: 4912\ncpu: 142592.01954397393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 607746.9949916604,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 607711.769616026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 478198.0540724938,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 478190.2806297011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 478303.4733969949,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 478287.38062755077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 472712.0971004537,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 472682.1982467963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 302956.22593234107,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 302946.487424114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 471029.5600268526,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 471001.4084507017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23881.80038985238,
            "unit": "ns/iter",
            "extra": "iterations: 29242\ncpu: 23881.013610560032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120562.62374871578,
            "unit": "ns/iter",
            "extra": "iterations: 5794\ncpu: 120551.00103555544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96797.55721393636,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 96789.12382531738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97561.04988156832,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 97551.38637313752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95626.39374060502,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 95620.73254065787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 143742.4282488059,
            "unit": "ns/iter",
            "extra": "iterations: 4871\ncpu: 143740.83350441416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 586162.5688927065,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 586109.2138630577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 476274.20286884165,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 476255.12295081967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 477595.79795918235,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 477568.3673469421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 474840.65332427574,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 474806.987788332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 305053.63913043175,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 305020.21739130095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 471527.6720647797,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 471481.84885290486 ns\nthreads: 1"
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
        "date": 1702492169981,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7869.553519605205,
            "unit": "ns/iter",
            "extra": "iterations: 88902\ncpu: 7869.278531416618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57543.635799993346,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57538.69 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 105617.54789460829,
            "unit": "ns/iter",
            "extra": "iterations: 8122\ncpu: 105615.98128539768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 157803.92532466576,
            "unit": "ns/iter",
            "extra": "iterations: 5544\ncpu: 157802.3809523809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 203541.5972648124,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 203539.21244989397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 251509.43584521316,
            "unit": "ns/iter",
            "extra": "iterations: 3437\ncpu: 251507.4192609836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 299159.28546769643,
            "unit": "ns/iter",
            "extra": "iterations: 2897\ncpu: 299156.43769416655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 348835.7531112135,
            "unit": "ns/iter",
            "extra": "iterations: 2491\ncpu: 348829.82737856277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 395803.42454547173,
            "unit": "ns/iter",
            "extra": "iterations: 2200\ncpu: 395801.4545454549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6691.374066122882,
            "unit": "ns/iter",
            "extra": "iterations: 104805\ncpu: 6691.067220075378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5376.693082744978,
            "unit": "ns/iter",
            "extra": "iterations: 130413\ncpu: 5376.556784983089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5338.721665328172,
            "unit": "ns/iter",
            "extra": "iterations: 130785\ncpu: 5338.599227740187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5426.554389394892,
            "unit": "ns/iter",
            "extra": "iterations: 128913\ncpu: 5426.429452421396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8687.23002175853,
            "unit": "ns/iter",
            "extra": "iterations: 80888\ncpu: 8687.26016219958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26909.74518911755,
            "unit": "ns/iter",
            "extra": "iterations: 30140\ncpu: 26909.362972793635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 133504.44246553513,
            "unit": "ns/iter",
            "extra": "iterations: 6457\ncpu: 133502.47793092762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103868.9261232916,
            "unit": "ns/iter",
            "extra": "iterations: 8257\ncpu: 103866.646481773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102018.57256605197,
            "unit": "ns/iter",
            "extra": "iterations: 8289\ncpu: 102017.45687055132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94054.62170250551,
            "unit": "ns/iter",
            "extra": "iterations: 9022\ncpu: 94051.48525825732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 225285.68074283138,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 225283.97354362797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1916849.5092785212,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1916808.2474226821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1489783.9003214624,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1489760.4501607725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1493927.3434990675,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1493890.0481540936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1474247.3895071438,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1474232.7503974545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 823319.5398388888,
            "unit": "ns/iter",
            "extra": "iterations: 1117\ncpu: 823304.2972247102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1440608.8170541925,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1440586.6666666633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33321.08541472246,
            "unit": "ns/iter",
            "extra": "iterations: 24703\ncpu: 33320.204023802726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 166266.88833076504,
            "unit": "ns/iter",
            "extra": "iterations: 5176\ncpu: 166265.9582689329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134058.99307087573,
            "unit": "ns/iter",
            "extra": "iterations: 6350\ncpu: 134054.77165354378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 133146.5056668342,
            "unit": "ns/iter",
            "extra": "iterations: 6441\ncpu: 133144.651451638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 124019.59270605611,
            "unit": "ns/iter",
            "extra": "iterations: 6855\ncpu: 124012.96863603189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 245401.42317522684,
            "unit": "ns/iter",
            "extra": "iterations: 3521\ncpu: 245399.5455836406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1962429.9242104827,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1962363.7894736808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1533524.6716917853,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1533493.132328304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1564887.3591904584,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1564857.8414839795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1536539.9136806028,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1536500.325732899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 863483.7453531523,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 863474.6282527855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1493925.3980738418,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1493862.7608346662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5323630.560000083,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5323508.999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3229957.5069446955,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3229915.972222219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26277.983627607497,
            "unit": "ns/iter",
            "extra": "iterations: 31150\ncpu: 26276.96308186198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143603.2751834703,
            "unit": "ns/iter",
            "extra": "iterations: 5996\ncpu: 143601.1507671782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106474.82607613504,
            "unit": "ns/iter",
            "extra": "iterations: 8038\ncpu: 106472.63000746517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 101551.24495849114,
            "unit": "ns/iter",
            "extra": "iterations: 8430\ncpu: 101550.0355871887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 98866.37197898701,
            "unit": "ns/iter",
            "extra": "iterations: 8565\ncpu: 98864.985405721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 211873.63226281916,
            "unit": "ns/iter",
            "extra": "iterations: 4079\ncpu: 211872.37067908733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1906498.7131146882,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1906456.9672131182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1483924.5629984094,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1483880.861244017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1490586.658692148,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1490571.2918660294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1468534.5031646453,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1468509.9683544335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 825149.1458885854,
            "unit": "ns/iter",
            "extra": "iterations: 1131\ncpu: 825143.4129089307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1434232.4000000549,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1434189.6124030966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2945.369246967405,
            "unit": "ns/iter",
            "extra": "iterations: 238396\ncpu: 2945.207134347871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19207.03981598119,
            "unit": "ns/iter",
            "extra": "iterations: 36518\ncpu: 19205.769757379934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15841.18654427305,
            "unit": "ns/iter",
            "extra": "iterations: 44011\ncpu: 15840.819340619306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15906.532179174159,
            "unit": "ns/iter",
            "extra": "iterations: 43957\ncpu: 15906.449484723762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11666.254126455628,
            "unit": "ns/iter",
            "extra": "iterations: 60100\ncpu: 11666.189683860237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 72068.71181733349,
            "unit": "ns/iter",
            "extra": "iterations: 9723\ncpu: 72064.59940347668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 132168.3776646027,
            "unit": "ns/iter",
            "extra": "iterations: 5301\ncpu: 132163.61063950206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32149.984717060943,
            "unit": "ns/iter",
            "extra": "iterations: 21789\ncpu: 32148.09307448722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32077.376758464303,
            "unit": "ns/iter",
            "extra": "iterations: 21823\ncpu: 32076.286486734087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31770.00517922787,
            "unit": "ns/iter",
            "extra": "iterations: 22011\ncpu: 31768.51574212864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66140.03655081431,
            "unit": "ns/iter",
            "extra": "iterations: 10588\ncpu: 66137.03248961101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 60476.227594539334,
            "unit": "ns/iter",
            "extra": "iterations: 11582\ncpu: 60473.89915385918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23960.164423442217,
            "unit": "ns/iter",
            "extra": "iterations: 29199\ncpu: 23959.31367512581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117356.51717779321,
            "unit": "ns/iter",
            "extra": "iterations: 5967\ncpu: 117355.605832077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94480.47735568452,
            "unit": "ns/iter",
            "extra": "iterations: 7397\ncpu: 94477.31512775438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95943.65670004507,
            "unit": "ns/iter",
            "extra": "iterations: 7291\ncpu: 95940.91345494505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93441.83808758146,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 93441.02049015506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 145661.65863787325,
            "unit": "ns/iter",
            "extra": "iterations: 4816\ncpu: 145656.39534883792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 570435.6317073319,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 570428.3739837348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 466815.17478316976,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 466795.1300867178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 467760.1965240568,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 467747.1925133733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 462422.53922214475,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 462406.0646011869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 305898.93566738354,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 305900.612691468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 460279.565789422,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 460272.43421052967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24050.657674994312,
            "unit": "ns/iter",
            "extra": "iterations: 29101\ncpu: 24050.40032988548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 116826.46865622838,
            "unit": "ns/iter",
            "extra": "iterations: 5998\ncpu: 116824.55818606107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95722.18125854884,
            "unit": "ns/iter",
            "extra": "iterations: 7310\ncpu: 95722.77701778298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96453.7644882814,
            "unit": "ns/iter",
            "extra": "iterations: 7299\ncpu: 96450.28086039342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95258.24935382372,
            "unit": "ns/iter",
            "extra": "iterations: 7351\ncpu: 95255.84274248267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 143627.6705035927,
            "unit": "ns/iter",
            "extra": "iterations: 4865\ncpu: 143626.22816032995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 571352.1471790668,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 571343.9901880717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 469268.6452045124,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 469258.7525150863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 462434.6851976389,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 462407.97052913404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 459756.7943495208,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 459738.04204993905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 302106.9423159628,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 302100.60266896384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 459967.9168316593,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 459957.68976897455 ns\nthreads: 1"
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
        "date": 1702503241530,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7981.692298909045,
            "unit": "ns/iter",
            "extra": "iterations: 87585\ncpu: 7981.73088999258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59119.89270000504,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59115.15999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109499.96891720116,
            "unit": "ns/iter",
            "extra": "iterations: 7850\ncpu: 109498.36942675158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159353.25821943284,
            "unit": "ns/iter",
            "extra": "iterations: 5414\ncpu: 159348.09752493532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 208963.6587071933,
            "unit": "ns/iter",
            "extra": "iterations: 4146\ncpu: 208963.94114809466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 259212.08739898057,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 259201.4666267584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 311728.3836545143,
            "unit": "ns/iter",
            "extra": "iterations: 2802\ncpu: 311720.5210563884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 358887.3362246914,
            "unit": "ns/iter",
            "extra": "iterations: 2421\ncpu: 358875.1342420488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 407913.7809568207,
            "unit": "ns/iter",
            "extra": "iterations: 2132\ncpu: 407903.2833020636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6771.149960833312,
            "unit": "ns/iter",
            "extra": "iterations: 103407\ncpu: 6771.088030790951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5457.261068190336,
            "unit": "ns/iter",
            "extra": "iterations: 128273\ncpu: 5457.157001083632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5531.664958673858,
            "unit": "ns/iter",
            "extra": "iterations: 128611\ncpu: 5531.202618749568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5462.334136081115,
            "unit": "ns/iter",
            "extra": "iterations: 127894\ncpu: 5462.102209642357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8885.972259016638,
            "unit": "ns/iter",
            "extra": "iterations: 78512\ncpu: 8885.984308131237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27286.676718490868,
            "unit": "ns/iter",
            "extra": "iterations: 29779\ncpu: 27285.37560025517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 137200.932938535,
            "unit": "ns/iter",
            "extra": "iterations: 6248\ncpu: 137197.4231754161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104213.31414312655,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 104210.6742940604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102402.16316735551,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 102401.07978404313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96896.16158397612,
            "unit": "ns/iter",
            "extra": "iterations: 8788\ncpu: 96892.28493400074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 238694.50000000364,
            "unit": "ns/iter",
            "extra": "iterations: 3700\ncpu: 238690.78378378338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1978263.2255318607,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1978141.9148936165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1542644.29401986,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1542560.2990033275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1525833.0213464284,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1525715.763546797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1535205.0711920653,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1535139.735099338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 845654.9826166304,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 845603.1107044833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1492627.7459547466,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1492547.8964401302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34527.34951008989,
            "unit": "ns/iter",
            "extra": "iterations: 23882\ncpu: 34523.888284063236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 161222.26466728532,
            "unit": "ns/iter",
            "extra": "iterations: 5335\ncpu: 161182.08059981253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 131866.16031819108,
            "unit": "ns/iter",
            "extra": "iterations: 6537\ncpu: 131865.16750803124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137840.54365335905,
            "unit": "ns/iter",
            "extra": "iterations: 6208\ncpu: 137832.76417525782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 128229.02429209855,
            "unit": "ns/iter",
            "extra": "iterations: 6710\ncpu: 128226.11028315913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 258376.31806008916,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 258369.1758405243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2030887.0784312468,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2030866.013071892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1589659.9215016954,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1589602.7303754245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1579039.320339134,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1578977.6271186462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1565092.1275167875,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1564997.818791949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 868807.3580131052,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 868801.7806935324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1525162.4426230323,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1525075.245901635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5403529.660000004,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5403240.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3272495.221052483,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3272354.385964928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26807.25710180909,
            "unit": "ns/iter",
            "extra": "iterations: 30626\ncpu: 26807.297720890794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143280.90414378128,
            "unit": "ns/iter",
            "extra": "iterations: 6009\ncpu: 143275.22050257973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106158.73138002583,
            "unit": "ns/iter",
            "extra": "iterations: 8123\ncpu: 106015.53613197064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 100564.13513513387,
            "unit": "ns/iter",
            "extra": "iterations: 8510\ncpu: 100558.01410105752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101815.60406031253,
            "unit": "ns/iter",
            "extra": "iterations: 8423\ncpu: 101815.31520835799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 225379.0610292135,
            "unit": "ns/iter",
            "extra": "iterations: 3867\ncpu: 225372.38169123224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1993067.1923076652,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1993010.4700854716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1546010.7188018598,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1545929.4509151378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1526906.3011455743,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1526894.4353518817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1523439.7495909128,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1523368.903436979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 845756.763851052,
            "unit": "ns/iter",
            "extra": "iterations: 1101\ncpu: 845743.0517711164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1486648.847376902,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1486603.6565977803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2892.8874918584534,
            "unit": "ns/iter",
            "extra": "iterations: 242578\ncpu: 2892.886824031879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19527.58261838507,
            "unit": "ns/iter",
            "extra": "iterations: 35900\ncpu: 19526.908077994507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14401.555960093865,
            "unit": "ns/iter",
            "extra": "iterations: 48615\ncpu: 14401.312352154602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15861.52379445231,
            "unit": "ns/iter",
            "extra": "iterations: 44233\ncpu: 15860.929622679776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11532.916779252791,
            "unit": "ns/iter",
            "extra": "iterations: 60694\ncpu: 11532.896167660789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 74900.38102808814,
            "unit": "ns/iter",
            "extra": "iterations: 9435\ncpu: 74898.33598304221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 130052.5831625905,
            "unit": "ns/iter",
            "extra": "iterations: 5369\ncpu: 130050.53082510698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33267.94576512177,
            "unit": "ns/iter",
            "extra": "iterations: 21075\ncpu: 33267.92408066426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32712.605533415073,
            "unit": "ns/iter",
            "extra": "iterations: 21325\ncpu: 32712.126611957574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32825.455628515585,
            "unit": "ns/iter",
            "extra": "iterations: 21320\ncpu: 32824.46998123814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66524.07184485249,
            "unit": "ns/iter",
            "extra": "iterations: 10467\ncpu: 66523.36868252623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61585.512411970594,
            "unit": "ns/iter",
            "extra": "iterations: 11360\ncpu: 61583.87323943705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24595.433408180965,
            "unit": "ns/iter",
            "extra": "iterations: 28502\ncpu: 24593.807452108667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115764.22797156328,
            "unit": "ns/iter",
            "extra": "iterations: 6049\ncpu: 115756.35642254932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95454.302123021,
            "unit": "ns/iter",
            "extra": "iterations: 7348\ncpu: 95448.25802939475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96417.77457999808,
            "unit": "ns/iter",
            "extra": "iterations: 7262\ncpu: 96411.4982098597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95348.63627703785,
            "unit": "ns/iter",
            "extra": "iterations: 7349\ncpu: 95347.53027622658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 145910.97273105872,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 145902.10241465466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 591080.292087492,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 591081.1447811443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 480898.6093534936,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 480877.1664374096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 477310.68481957435,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 477280.8713410563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 471285.1767880601,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 471252.0242914909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 309770.2672872282,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 309747.87234042655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 471978.28388399683,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 471929.66958867345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24144.543507502058,
            "unit": "ns/iter",
            "extra": "iterations: 28995\ncpu: 24142.645283669775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115641.75090787919,
            "unit": "ns/iter",
            "extra": "iterations: 6058\ncpu: 115633.12974579161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96013.64302374353,
            "unit": "ns/iter",
            "extra": "iterations: 7289\ncpu: 96005.7072300725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95987.70800218677,
            "unit": "ns/iter",
            "extra": "iterations: 7298\ncpu: 95981.30994793097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 96985.15678671704,
            "unit": "ns/iter",
            "extra": "iterations: 7220\ncpu: 96981.52354570656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 144561.0185911893,
            "unit": "ns/iter",
            "extra": "iterations: 4841\ncpu: 144552.8609791354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 586282.9205020469,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 586282.5941422646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 478987.10465120396,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 478965.2530779703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 472431.78677461046,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 472421.12010796263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 472070.66013516556,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 472065.8108108121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 307000.6544020955,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 306995.8388085875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 469331.6160054269,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 469317.3503698737 ns\nthreads: 1"
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
        "date": 1705574869199,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7664.868315281554,
            "unit": "ns/iter",
            "extra": "iterations: 91309\ncpu: 7664.665038495657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56553.30040000308,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56552.68 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 104489.66723674074,
            "unit": "ns/iter",
            "extra": "iterations: 8186\ncpu: 104489.22550696314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 152492.48972358776,
            "unit": "ns/iter",
            "extra": "iterations: 5644\ncpu: 152488.50106307585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 200546.27766181342,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 200546.64810948732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 247237.35267219218,
            "unit": "ns/iter",
            "extra": "iterations: 3499\ncpu: 247229.72277793646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 295529.2741707663,
            "unit": "ns/iter",
            "extra": "iterations: 2834\ncpu: 295149.2237120678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 344730.54099649464,
            "unit": "ns/iter",
            "extra": "iterations: 2549\ncpu: 344709.37622597103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 388596.3415398687,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 388595.3446732317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6575.193188105651,
            "unit": "ns/iter",
            "extra": "iterations: 106637\ncpu: 6574.92896461827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5320.429956814733,
            "unit": "ns/iter",
            "extra": "iterations: 131062\ncpu: 5320.38653461721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5315.961916527222,
            "unit": "ns/iter",
            "extra": "iterations: 131133\ncpu: 5315.842694058699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5370.17156617635,
            "unit": "ns/iter",
            "extra": "iterations: 129979\ncpu: 5370.082859538849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8812.422745598746,
            "unit": "ns/iter",
            "extra": "iterations: 79866\ncpu: 8812.422056945394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26665.996991338,
            "unit": "ns/iter",
            "extra": "iterations: 30246\ncpu: 26665.479732857202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 125692.96249448963,
            "unit": "ns/iter",
            "extra": "iterations: 6799\ncpu: 125690.99867627614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99619.25958188139,
            "unit": "ns/iter",
            "extra": "iterations: 8610\ncpu: 99619.3612078978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100453.8533018905,
            "unit": "ns/iter",
            "extra": "iterations: 8480\ncpu: 100454.65801886782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94852.73787166426,
            "unit": "ns/iter",
            "extra": "iterations: 8946\ncpu: 94852.74983232719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 249417.7244897988,
            "unit": "ns/iter",
            "extra": "iterations: 3528\ncpu: 249414.03061224523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1910054.8110882358,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1910046.406570845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1474791.2793650934,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1474795.079365081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1474153.54530999,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1474133.068362477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1456583.3134795846,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1456550.156739808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 806511.790940698,
            "unit": "ns/iter",
            "extra": "iterations: 1148\ncpu: 806494.5121951216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1427580.4653313048,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1427569.9537750378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34369.04215388399,
            "unit": "ns/iter",
            "extra": "iterations: 24031\ncpu: 34368.38250592983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 155715.20479105643,
            "unit": "ns/iter",
            "extra": "iterations: 5552\ncpu: 155711.59942363139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 126636.61986754519,
            "unit": "ns/iter",
            "extra": "iterations: 6795\ncpu: 126632.08241353906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 127163.389012294,
            "unit": "ns/iter",
            "extra": "iterations: 6753\ncpu: 127161.58744261795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 119809.32960423785,
            "unit": "ns/iter",
            "extra": "iterations: 7151\ncpu: 119803.92952034675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 272061.35342119954,
            "unit": "ns/iter",
            "extra": "iterations: 3186\ncpu: 272053.2956685496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1954059.2494758582,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1954008.3857442315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1523223.2111292449,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1523192.1440261814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1503098.8982229398,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1503075.9289176024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1487771.407704513,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1487746.3884430127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 848191.6404392096,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 848190.2104300105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1464679.058451914,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1464660.8214849948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5199530.910000476,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5199496.000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3109357.9699999434,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3109266.0000000196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26204.604680866636,
            "unit": "ns/iter",
            "extra": "iterations: 31319\ncpu: 26204.59146205178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 135212.15458255322,
            "unit": "ns/iter",
            "extra": "iterations: 6372\ncpu: 135208.17639673618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 99418.23340669172,
            "unit": "ns/iter",
            "extra": "iterations: 8633\ncpu: 99414.3287385611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 93301.15798080829,
            "unit": "ns/iter",
            "extra": "iterations: 9172\ncpu: 93298.11382468356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96191.0065212507,
            "unit": "ns/iter",
            "extra": "iterations: 8894\ncpu: 96187.42972790654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 234359.964950111,
            "unit": "ns/iter",
            "extra": "iterations: 3709\ncpu: 234355.7562685357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1900259.0448066492,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1900203.4623217897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1474158.7176655654,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1474094.0063091407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1469245.7692308952,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1469227.3155416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1448807.5791926687,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1448771.1180124236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 797953.778065626,
            "unit": "ns/iter",
            "extra": "iterations: 1158\ncpu: 797938.0829015553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1418367.8732824565,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1418295.1145038258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2924.1552732969917,
            "unit": "ns/iter",
            "extra": "iterations: 236190\ncpu: 2924.0513992971646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19296.038680131343,
            "unit": "ns/iter",
            "extra": "iterations: 36246\ncpu: 19295.806433813323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14975.738471645565,
            "unit": "ns/iter",
            "extra": "iterations: 48706\ncpu: 14975.604648297909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15151.182404084106,
            "unit": "ns/iter",
            "extra": "iterations: 46238\ncpu: 15150.901855616698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11459.906865232057,
            "unit": "ns/iter",
            "extra": "iterations: 61105\ncpu: 11459.221013010294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 75813.3896581521,
            "unit": "ns/iter",
            "extra": "iterations: 9244\ncpu: 75812.09433145798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 130504.16530004615,
            "unit": "ns/iter",
            "extra": "iterations: 5366\ncpu: 130497.3723443903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32033.854507721957,
            "unit": "ns/iter",
            "extra": "iterations: 21685\ncpu: 32032.55706709705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31459.50015728208,
            "unit": "ns/iter",
            "extra": "iterations: 22253\ncpu: 31457.87084887432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31594.397502366653,
            "unit": "ns/iter",
            "extra": "iterations: 22181\ncpu: 31593.70181687032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64077.59486944995,
            "unit": "ns/iter",
            "extra": "iterations: 10915\ncpu: 64073.98076042154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 59537.90761240249,
            "unit": "ns/iter",
            "extra": "iterations: 11744\ncpu: 59537.26158038139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24376.399408180638,
            "unit": "ns/iter",
            "extra": "iterations: 28725\ncpu: 24376.03133159264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116509.62612462479,
            "unit": "ns/iter",
            "extra": "iterations: 6002\ncpu: 116508.1972675773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95025.96114657582,
            "unit": "ns/iter",
            "extra": "iterations: 7361\ncpu: 95023.46148621105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95996.75803145274,
            "unit": "ns/iter",
            "extra": "iterations: 7315\ncpu: 95991.66097060847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94305.47324549762,
            "unit": "ns/iter",
            "extra": "iterations: 7438\ncpu: 94300.26888948625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 147918.21253693927,
            "unit": "ns/iter",
            "extra": "iterations: 4738\ncpu: 147918.31996622897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 563883.0627009146,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 563873.4726688178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 453307.1512385432,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 453310.95176009677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 455536.0305790593,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 455529.01756669284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 451240.41000651923,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 451223.9116309361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 292359.86705684714,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 292343.8963210675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 448598.27784892556,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 448575.4161331636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24397.063589635014,
            "unit": "ns/iter",
            "extra": "iterations: 28794\ncpu: 24396.294366882146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 116425.69086065849,
            "unit": "ns/iter",
            "extra": "iterations: 6007\ncpu: 116419.41068753213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95393.1044450565,
            "unit": "ns/iter",
            "extra": "iterations: 7334\ncpu: 95390.80992637061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97421.29240823015,
            "unit": "ns/iter",
            "extra": "iterations: 7192\ncpu: 97417.32480533826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 97041.37612894057,
            "unit": "ns/iter",
            "extra": "iterations: 7197\ncpu: 97040.32235653707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 151570.1295695368,
            "unit": "ns/iter",
            "extra": "iterations: 4623\ncpu: 151566.06099935118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 561962.6800643465,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 561935.3697749197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 455350.3602080384,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 455339.2717815308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 455788.947882753,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 455783.3876221533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 448433.13252240134,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 448412.48399488133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 295492.09923988587,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 295487.2043918935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 450173.94125245576,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 450148.8702388632 ns\nthreads: 1"
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
        "date": 1705772990730,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7666.299223358345,
            "unit": "ns/iter",
            "extra": "iterations: 90003\ncpu: 7665.887803739875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55952.90040000691,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55952.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102626.07655271726,
            "unit": "ns/iter",
            "extra": "iterations: 8308\ncpu: 102621.20847376024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 149615.84811221855,
            "unit": "ns/iter",
            "extra": "iterations: 5774\ncpu: 149609.30031174232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 197211.3474538015,
            "unit": "ns/iter",
            "extra": "iterations: 4438\ncpu: 197199.1662911222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 243658.95268936385,
            "unit": "ns/iter",
            "extra": "iterations: 3551\ncpu: 243659.08194874687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 291120.2001318948,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 291116.0567095285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 335658.1292835024,
            "unit": "ns/iter",
            "extra": "iterations: 2568\ncpu: 335653.3099688472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 380151.9475308754,
            "unit": "ns/iter",
            "extra": "iterations: 2268\ncpu: 380140.8730158725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6494.558549406852,
            "unit": "ns/iter",
            "extra": "iterations: 107294\ncpu: 6494.459149626249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5231.566733442696,
            "unit": "ns/iter",
            "extra": "iterations: 132782\ncpu: 5231.450045939956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5223.944310960654,
            "unit": "ns/iter",
            "extra": "iterations: 133599\ncpu: 5223.884909318177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5312.550669070028,
            "unit": "ns/iter",
            "extra": "iterations: 130928\ncpu: 5312.3999450079455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8425.928934636939,
            "unit": "ns/iter",
            "extra": "iterations: 81024\ncpu: 8425.78001579779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30997.017665971256,
            "unit": "ns/iter",
            "extra": "iterations: 26435\ncpu: 30996.179307735933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 132853.739948024,
            "unit": "ns/iter",
            "extra": "iterations: 6541\ncpu: 132848.31065586302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100281.63009405334,
            "unit": "ns/iter",
            "extra": "iterations: 8294\ncpu: 100278.5989872195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103510.62646809481,
            "unit": "ns/iter",
            "extra": "iterations: 8259\ncpu: 103505.47281753251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98112.2389176679,
            "unit": "ns/iter",
            "extra": "iterations: 8685\ncpu: 98110.73114565371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 237296.30623305452,
            "unit": "ns/iter",
            "extra": "iterations: 3690\ncpu: 237280.29810298118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1821072.6198831375,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1821006.4327485394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1427368.5999999035,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1427300.4724409461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1435828.0522153522,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1435759.1772151904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1419810.9569092845,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1419738.6329866266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 796757.71118818,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 796705.2038161318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1373272.7121438372,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1373216.4917541207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33228.29342657435,
            "unit": "ns/iter",
            "extra": "iterations: 25025\ncpu: 33226.45754245748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158596.61218785334,
            "unit": "ns/iter",
            "extra": "iterations: 5366\ncpu: 158591.42750652254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 132473.07393716314,
            "unit": "ns/iter",
            "extra": "iterations: 6492\ncpu: 132464.0326555765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 130785.79480479467,
            "unit": "ns/iter",
            "extra": "iterations: 6506\ncpu: 130780.95604057804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 119531.45531501918,
            "unit": "ns/iter",
            "extra": "iterations: 7206\ncpu: 119525.0069386621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 254646.6814159508,
            "unit": "ns/iter",
            "extra": "iterations: 3390\ncpu: 254637.34513274283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1897168.3024690798,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1897037.6543209846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1468048.528505392,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1467981.5100154073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1449312.8717155461,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1449203.400309123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1473693.2970902687,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1473628.0245023023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 822981.1132403885,
            "unit": "ns/iter",
            "extra": "iterations: 1148\ncpu: 822943.9895470379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1415257.2127329323,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1415196.5838509318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5213685.94999899,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5213365.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3191657.1660899394,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3191521.1072664494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26525.29163447695,
            "unit": "ns/iter",
            "extra": "iterations: 32359\ncpu: 26523.959331252634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 139377.0173346082,
            "unit": "ns/iter",
            "extra": "iterations: 6288\ncpu: 139376.04961832054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 103046.45826809386,
            "unit": "ns/iter",
            "extra": "iterations: 8303\ncpu: 103041.56329037686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97628.80934300326,
            "unit": "ns/iter",
            "extra": "iterations: 8691\ncpu: 97627.26958923024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99260.10853967743,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 99256.87340893336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 220381.49675971505,
            "unit": "ns/iter",
            "extra": "iterations: 4012\ncpu: 220373.75373878272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1825028.8946321225,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1824974.5526839069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1457795.6464497014,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1457743.1952662761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1427149.8350982254,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1427086.9894099794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1435864.6552795735,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1435814.5962732919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 807220.4659685984,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 807194.4153577617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1401906.0445104395,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1401853.5608308625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2887.367435236571,
            "unit": "ns/iter",
            "extra": "iterations: 240143\ncpu: 2887.2634222109436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19269.049499460765,
            "unit": "ns/iter",
            "extra": "iterations: 36061\ncpu: 19268.650342475266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15096.406518306943,
            "unit": "ns/iter",
            "extra": "iterations: 46239\ncpu: 15095.41945111274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15535.271296537472,
            "unit": "ns/iter",
            "extra": "iterations: 45876\ncpu: 15534.479902345392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11391.651086177399,
            "unit": "ns/iter",
            "extra": "iterations: 61316\ncpu: 11390.990932219993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 77199.93584240918,
            "unit": "ns/iter",
            "extra": "iterations: 9087\ncpu: 77196.25839110775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122571.64118784372,
            "unit": "ns/iter",
            "extra": "iterations: 5691\ncpu: 122564.99736425978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31578.8817235397,
            "unit": "ns/iter",
            "extra": "iterations: 20748\ncpu: 31577.202621939316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31381.546873594372,
            "unit": "ns/iter",
            "extra": "iterations: 22166\ncpu: 31380.321212667954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30634.581407634403,
            "unit": "ns/iter",
            "extra": "iterations: 22719\ncpu: 30633.49619261407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63253.773920249936,
            "unit": "ns/iter",
            "extra": "iterations: 10859\ncpu: 63253.23694631231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57582.862057529295,
            "unit": "ns/iter",
            "extra": "iterations: 12063\ncpu: 57579.30862969409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23848.311208472238,
            "unit": "ns/iter",
            "extra": "iterations: 30584\ncpu: 23847.446377190692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115624.86132232544,
            "unit": "ns/iter",
            "extra": "iterations: 6050\ncpu: 115617.00826446273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93452.31800921437,
            "unit": "ns/iter",
            "extra": "iterations: 7374\ncpu: 93450.61025223698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 92785.32062482534,
            "unit": "ns/iter",
            "extra": "iterations: 7554\ncpu: 92784.44532698025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92394.33157547678,
            "unit": "ns/iter",
            "extra": "iterations: 7585\ncpu: 92392.12920237289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 141105.30210015408,
            "unit": "ns/iter",
            "extra": "iterations: 4952\ncpu: 141102.46365104883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 554233.730434839,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 554210.434782611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 454104.2703053693,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 454099.28525016934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 437918.12031049386,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 437904.1397153882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 448065.1602523159,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 448061.26182965026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 294712.2065171126,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 294709.9449851851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 447981.6982704033,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 447982.57527226344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23746.46977171653,
            "unit": "ns/iter",
            "extra": "iterations: 29393\ncpu: 23746.21168305371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 114551.21211634313,
            "unit": "ns/iter",
            "extra": "iterations: 6223\ncpu: 114549.38132733329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93013.63237457289,
            "unit": "ns/iter",
            "extra": "iterations: 7475\ncpu: 93007.57190635447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92842.58205129029,
            "unit": "ns/iter",
            "extra": "iterations: 7800\ncpu: 92840.8076923094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93685.15712072932,
            "unit": "ns/iter",
            "extra": "iterations: 7752\ncpu: 93681.91434468461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 140963.42722619392,
            "unit": "ns/iter",
            "extra": "iterations: 4885\ncpu: 140955.98771750226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 544384.5088939762,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 544368.4454756416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 456775.48443577724,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 456752.65888456185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 454844.8482490752,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 454818.5473411161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 451898.69820969034,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 451898.46547315264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 293628.234578262,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 293617.708770458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 449416.09254500293,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 449402.63496143784 ns\nthreads: 1"
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
        "date": 1705774772515,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8074.313341217478,
            "unit": "ns/iter",
            "extra": "iterations: 88785\ncpu: 8072.808469899194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56519.259699996386,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56515.959999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 104277.15742201351,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 104275.37322490591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 151217.58393391388,
            "unit": "ns/iter",
            "extra": "iterations: 5689\ncpu: 151213.4997363333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 198554.10807709346,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 198541.96879302445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 245113.15179835647,
            "unit": "ns/iter",
            "extra": "iterations: 3531\ncpu: 245105.8340413481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 291961.89811698376,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 291959.5494283792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 337440.53229572455,
            "unit": "ns/iter",
            "extra": "iterations: 2570\ncpu: 337438.91050583636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 384221.4036251124,
            "unit": "ns/iter",
            "extra": "iterations: 2262\ncpu: 384208.9743589742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6552.935192735294,
            "unit": "ns/iter",
            "extra": "iterations: 106701\ncpu: 6552.989194103144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5280.106419288385,
            "unit": "ns/iter",
            "extra": "iterations: 132429\ncpu: 5280.002114340511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5350.337446039955,
            "unit": "ns/iter",
            "extra": "iterations: 130652\ncpu: 5349.93647246119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5292.552629986616,
            "unit": "ns/iter",
            "extra": "iterations: 132206\ncpu: 5292.597158979172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8640.217981674221,
            "unit": "ns/iter",
            "extra": "iterations: 81305\ncpu: 8639.83272861447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28540.053359057736,
            "unit": "ns/iter",
            "extra": "iterations: 28505\ncpu: 28539.97193474826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 138738.16046398794,
            "unit": "ns/iter",
            "extra": "iterations: 6207\ncpu: 138733.96165619462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106061.09662614106,
            "unit": "ns/iter",
            "extra": "iterations: 8062\ncpu: 106062.00694616727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 106907.09697197459,
            "unit": "ns/iter",
            "extra": "iterations: 7992\ncpu: 106902.26476476497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102504.5508881351,
            "unit": "ns/iter",
            "extra": "iterations: 8332\ncpu: 102505.3528564571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 235253.44669509496,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 235244.66950959488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1883631.146639649,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1883646.02851324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1474277.8541995499,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1474214.263074484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1473222.7735247365,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1473184.3700159488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1465733.2575039635,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1465673.6176935246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 801621.9930009345,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 801611.461067366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1425509.5830769558,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1425418.3076923091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34815.06048813904,
            "unit": "ns/iter",
            "extra": "iterations: 23641\ncpu: 34814.55522186025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 166338.57870190695,
            "unit": "ns/iter",
            "extra": "iterations: 5146\ncpu: 166333.2685581036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 135107.22631251925,
            "unit": "ns/iter",
            "extra": "iterations: 6438\ncpu: 135105.17241379299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135751.99148800713,
            "unit": "ns/iter",
            "extra": "iterations: 6344\ncpu: 135750.94577553606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 128607.35024771666,
            "unit": "ns/iter",
            "extra": "iterations: 6661\ncpu: 128607.3862783366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 256776.14053256414,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 256773.57988165706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1965127.324210459,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1965042.9473684179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1550375.412645626,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1550344.4259567347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1501827.5435482468,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1501797.4193548362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1510081.0714286596,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1510048.5389610422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 858333.5874190114,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 858315.3561517092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1480459.424483263,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1480436.565977739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5322882.3500001,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5322855.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3140152.20538728,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3140089.8989899023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27859.05089932268,
            "unit": "ns/iter",
            "extra": "iterations: 29411\ncpu: 27858.712726530957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143946.9373014417,
            "unit": "ns/iter",
            "extra": "iterations: 5981\ncpu: 143942.2170205656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109085.1267354444,
            "unit": "ns/iter",
            "extra": "iterations: 7851\ncpu: 109082.29524901242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103284.03852173858,
            "unit": "ns/iter",
            "extra": "iterations: 8307\ncpu: 103282.11147225162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105192.0676591602,
            "unit": "ns/iter",
            "extra": "iterations: 8262\ncpu: 105189.65141612153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 217469.76455822133,
            "unit": "ns/iter",
            "extra": "iterations: 3984\ncpu: 217464.00602409698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1892833.5283401348,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1892764.7773279317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1476396.561708823,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1476293.829113925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1468549.1133857395,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1468457.4803149619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1459138.2745709342,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1459056.6302652129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 801826.4620688867,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 801795.9482758619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1419137.3932927316,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1419081.2499999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2916.189110413729,
            "unit": "ns/iter",
            "extra": "iterations: 240505\ncpu: 2915.998835783031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19730.22114027444,
            "unit": "ns/iter",
            "extra": "iterations: 35430\ncpu: 19729.336720293504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14560.450761123551,
            "unit": "ns/iter",
            "extra": "iterations: 48021\ncpu: 14559.759271985207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15215.62633351432,
            "unit": "ns/iter",
            "extra": "iterations: 46025\ncpu: 15215.263443780557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11486.292653310416,
            "unit": "ns/iter",
            "extra": "iterations: 60939\ncpu: 11486.140238599206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 72129.42367825446,
            "unit": "ns/iter",
            "extra": "iterations: 9722\ncpu: 72122.83480765286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 131204.83432947355,
            "unit": "ns/iter",
            "extra": "iterations: 5354\ncpu: 131196.41389615336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31335.307675063414,
            "unit": "ns/iter",
            "extra": "iterations: 22306\ncpu: 31332.923876983874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31498.092690180336,
            "unit": "ns/iter",
            "extra": "iterations: 22203\ncpu: 31496.97338197542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31776.286883771238,
            "unit": "ns/iter",
            "extra": "iterations: 22232\ncpu: 31775.40931989928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65050.892163246,
            "unit": "ns/iter",
            "extra": "iterations: 10757\ncpu: 65051.426977781724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 59334.25434064211,
            "unit": "ns/iter",
            "extra": "iterations: 11807\ncpu: 59332.963496230805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23724.65871162199,
            "unit": "ns/iter",
            "extra": "iterations: 29541\ncpu: 23724.870518939755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115960.58505881089,
            "unit": "ns/iter",
            "extra": "iterations: 6037\ncpu: 115959.98012257661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93212.37759723875,
            "unit": "ns/iter",
            "extra": "iterations: 7508\ncpu: 93209.1236014914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93387.5417944252,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 93388.28156245909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91399.0199895596,
            "unit": "ns/iter",
            "extra": "iterations: 7654\ncpu: 91397.45231251756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 140142.67665269182,
            "unit": "ns/iter",
            "extra": "iterations: 5007\ncpu: 140141.72158977608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 569860.4211382307,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 569846.7479674711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 456815.0216109745,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 456818.9914865735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 463135.5931307981,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 463109.4451783308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 456082.1365120955,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 456052.9719137777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 299469.9567636969,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 299436.5582191824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 455412.1927082821,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 455398.8932291623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23119.995705321773,
            "unit": "ns/iter",
            "extra": "iterations: 30270\ncpu: 23119.21043937913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113325.08734257954,
            "unit": "ns/iter",
            "extra": "iterations: 6194\ncpu: 113319.13141750096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93740.0501004603,
            "unit": "ns/iter",
            "extra": "iterations: 7465\ncpu: 93729.55123911527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 94284.66594885894,
            "unit": "ns/iter",
            "extra": "iterations: 7430\ncpu: 94280.5921938095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93863.76157251855,
            "unit": "ns/iter",
            "extra": "iterations: 7453\ncpu: 93857.02401717528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 146377.7197492152,
            "unit": "ns/iter",
            "extra": "iterations: 4785\ncpu: 146371.8077324964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 567697.8270008902,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 567667.0978173091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 464786.5969455438,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 464772.3771580325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 460051.6423405835,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 460027.6791584458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 460396.7282894186,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 460380.3947368403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 297154.08139042155,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 297134.71810088935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 456017.94836597145,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 456017.18954247906 ns\nthreads: 1"
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
        "date": 1705777716958,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7909.88585641613,
            "unit": "ns/iter",
            "extra": "iterations: 88450\ncpu: 7909.573770491802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57771.72649999329,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57769.56 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 106583.94880716542,
            "unit": "ns/iter",
            "extra": "iterations: 8048\ncpu: 106569.70675944336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 154952.32925731989,
            "unit": "ns/iter",
            "extra": "iterations: 5561\ncpu: 154942.2765689625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 202870.24994142953,
            "unit": "ns/iter",
            "extra": "iterations: 4269\ncpu: 202850.45678144763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 252249.19681175792,
            "unit": "ns/iter",
            "extra": "iterations: 3262\ncpu: 252238.19742489248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 300243.7789692229,
            "unit": "ns/iter",
            "extra": "iterations: 2891\ncpu: 300235.5932203392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 348165.9671737295,
            "unit": "ns/iter",
            "extra": "iterations: 2498\ncpu: 348152.7221777422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 393819.3240909207,
            "unit": "ns/iter",
            "extra": "iterations: 2200\ncpu: 393805.6818181821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6675.017558584383,
            "unit": "ns/iter",
            "extra": "iterations: 104849\ncpu: 6674.732233974564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5384.782737247065,
            "unit": "ns/iter",
            "extra": "iterations: 129875\ncpu: 5384.712993262753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5436.8231552363,
            "unit": "ns/iter",
            "extra": "iterations: 129068\ncpu: 5436.6682678897905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5383.193174664016,
            "unit": "ns/iter",
            "extra": "iterations: 130250\ncpu: 5382.948176583493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8823.367782569048,
            "unit": "ns/iter",
            "extra": "iterations: 79547\ncpu: 8822.883326838228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27875.021289037504,
            "unit": "ns/iter",
            "extra": "iterations: 29076\ncpu: 27873.190947860767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129016.19127163004,
            "unit": "ns/iter",
            "extra": "iterations: 6645\ncpu: 129008.9841986456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99556.59772540926,
            "unit": "ns/iter",
            "extra": "iterations: 8529\ncpu: 99553.1949818267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98738.57196087226,
            "unit": "ns/iter",
            "extra": "iterations: 8588\ncpu: 98737.37773637654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95335.30463055772,
            "unit": "ns/iter",
            "extra": "iterations: 8919\ncpu: 95333.0081847742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 238807.70275428274,
            "unit": "ns/iter",
            "extra": "iterations: 3667\ncpu: 238795.55494955083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1899875.3018480472,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1899811.7043121178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1498392.6887097252,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1498293.3870967769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1491363.1109324256,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1491310.9324758863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1480382.5566186889,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1480316.9059011177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 819820.3097345361,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 819791.32743363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1444869.7153964937,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1444789.891135299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34688.13904458788,
            "unit": "ns/iter",
            "extra": "iterations: 23906\ncpu: 34686.78574416471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 155043.45293905344,
            "unit": "ns/iter",
            "extra": "iterations: 5546\ncpu: 155035.5030652719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 124635.49760905484,
            "unit": "ns/iter",
            "extra": "iterations: 6901\ncpu: 124630.74916678766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132095.39622640537,
            "unit": "ns/iter",
            "extra": "iterations: 6519\ncpu: 132087.95827580913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 122501.17711016482,
            "unit": "ns/iter",
            "extra": "iterations: 6990\ncpu: 122496.1373390554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 261408.0529180397,
            "unit": "ns/iter",
            "extra": "iterations: 3307\ncpu: 261395.3734502575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1972355.3156780836,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1972286.228813568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1554184.1051751738,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1554121.368948258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1540518.5910595562,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1540459.4370860986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1524664.8016395962,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1524607.7049180276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 859551.495829588,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 859532.8081556987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1522830.257648683,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1522773.4299516957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5258234.46000004,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5257755.999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3105615.953333351,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3105469.333333346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27204.81364376081,
            "unit": "ns/iter",
            "extra": "iterations: 30109\ncpu: 27204.533528180935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 135075.12278780737,
            "unit": "ns/iter",
            "extra": "iterations: 6385\ncpu: 135071.5270164451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 99780.42326070074,
            "unit": "ns/iter",
            "extra": "iterations: 8581\ncpu: 99778.28924367712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97193.9895442599,
            "unit": "ns/iter",
            "extra": "iterations: 8799\ncpu: 97182.96397317898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96816.82756664314,
            "unit": "ns/iter",
            "extra": "iterations: 8815\ncpu: 96809.68803176397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 223132.08237107517,
            "unit": "ns/iter",
            "extra": "iterations: 3897\ncpu: 223111.57300487562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1914060.3347018508,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1913949.2813141646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1494174.4912001013,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1494022.0800000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1492479.8766024413,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1492359.6153846136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1468974.25316448,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1468860.1265822812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 813643.2602979391,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 813582.9973707277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1435544.761978255,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1435430.4482225715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2919.965766680955,
            "unit": "ns/iter",
            "extra": "iterations: 238189\ncpu: 2919.855241006098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19194.54253858725,
            "unit": "ns/iter",
            "extra": "iterations: 36414\ncpu: 19193.115285329844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14988.15895972086,
            "unit": "ns/iter",
            "extra": "iterations: 46603\ncpu: 14986.674677595924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15727.625538638396,
            "unit": "ns/iter",
            "extra": "iterations: 46181\ncpu: 15725.976050756763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11579.379029994307,
            "unit": "ns/iter",
            "extra": "iterations: 60515\ncpu: 11578.549120052883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 79441.66583455556,
            "unit": "ns/iter",
            "extra": "iterations: 8813\ncpu: 79438.95381822265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 131581.02322507725,
            "unit": "ns/iter",
            "extra": "iterations: 5296\ncpu: 131579.4750755291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31894.282748844445,
            "unit": "ns/iter",
            "extra": "iterations: 21871\ncpu: 31892.999862832065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31971.151152117076,
            "unit": "ns/iter",
            "extra": "iterations: 21786\ncpu: 31970.75644909593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31378.763486783264,
            "unit": "ns/iter",
            "extra": "iterations: 22244\ncpu: 31377.553497572397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64603.36109043221,
            "unit": "ns/iter",
            "extra": "iterations: 10748\ncpu: 64602.64235206595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 59812.97698690695,
            "unit": "ns/iter",
            "extra": "iterations: 11689\ncpu: 59809.38489177845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23361.38380445616,
            "unit": "ns/iter",
            "extra": "iterations: 30070\ncpu: 23360.349185234634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 114066.38832901136,
            "unit": "ns/iter",
            "extra": "iterations: 6152\ncpu: 114058.6313394027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93527.9540475632,
            "unit": "ns/iter",
            "extra": "iterations: 7486\ncpu: 93523.45711995741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94995.79077964881,
            "unit": "ns/iter",
            "extra": "iterations: 7375\ncpu: 94992.0271186437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93742.78525469049,
            "unit": "ns/iter",
            "extra": "iterations: 7460\ncpu: 93738.8337801594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 141732.1260895822,
            "unit": "ns/iter",
            "extra": "iterations: 4933\ncpu: 141728.68437056628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 575209.2245067412,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 575166.1184210462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 466076.33044065326,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 466064.61949265737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 471081.69946100906,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 471062.60107816855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 458182.16633927776,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 458170.1375245624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 299622.534017991,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 299612.10954214697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 458252.4865573298,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 458216.524590165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23196.758594419174,
            "unit": "ns/iter",
            "extra": "iterations: 30194\ncpu: 23195.60177518704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 116694.67094945334,
            "unit": "ns/iter",
            "extra": "iterations: 5993\ncpu: 116693.30886033688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95705.00960220027,
            "unit": "ns/iter",
            "extra": "iterations: 7290\ncpu: 95700.91906721378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96246.71123950878,
            "unit": "ns/iter",
            "extra": "iterations: 7269\ncpu: 96244.58660063152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95112.2563997727,
            "unit": "ns/iter",
            "extra": "iterations: 7344\ncpu: 95106.26361655799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 145050.86241193747,
            "unit": "ns/iter",
            "extra": "iterations: 4826\ncpu: 145041.85661002953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 573495.9573770971,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 573492.0491803203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 464973.2140026246,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 464954.689564072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 465445.1830238839,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 465402.85145889083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 460145.199211059,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 460125.4437869869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 297174.6293616811,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 297159.5319148888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 459469.8302630724,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 459434.14473684714 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}