window.BENCHMARK_DATA = {
  "lastUpdate": 1702489560777,
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
      }
    ]
  }
}