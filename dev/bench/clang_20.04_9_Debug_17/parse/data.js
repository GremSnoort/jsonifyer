window.BENCHMARK_DATA = {
  "lastUpdate": 1705574869633,
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
      }
    ]
  }
}