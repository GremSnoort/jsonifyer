window.BENCHMARK_DATA = {
  "lastUpdate": 1702392469681,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-14 22.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392468054,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7270.674970664377,
            "unit": "ns/iter",
            "extra": "iterations: 96299\ncpu: 7270.077570898971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54370.29020000636,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54370.63 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100051.13545306186,
            "unit": "ns/iter",
            "extra": "iterations: 8586\ncpu: 100044.67738178428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146848.83561643606,
            "unit": "ns/iter",
            "extra": "iterations: 5840\ncpu: 146837.70547945207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193204.21257551355,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 193192.6381740881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 238560.23023960128,
            "unit": "ns/iter",
            "extra": "iterations: 3631\ncpu: 238542.27485541167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284702.07056118565,
            "unit": "ns/iter",
            "extra": "iterations: 3047\ncpu: 284682.86839514266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 330250.13955253275,
            "unit": "ns/iter",
            "extra": "iterations: 2637\ncpu: 330225.8248009099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 374636.9051723691,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 374618.2758620686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6341.392116772512,
            "unit": "ns/iter",
            "extra": "iterations: 112492\ncpu: 6341.163816093585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5127.565518500269,
            "unit": "ns/iter",
            "extra": "iterations: 137030\ncpu: 5127.3436473764805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5149.945222230129,
            "unit": "ns/iter",
            "extra": "iterations: 136570\ncpu: 5149.395914183204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5170.047636293464,
            "unit": "ns/iter",
            "extra": "iterations: 135296\ncpu: 5169.68498699149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7923.905050001259,
            "unit": "ns/iter",
            "extra": "iterations: 88099\ncpu: 7923.810712947938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25850.91998983877,
            "unit": "ns/iter",
            "extra": "iterations: 31496\ncpu: 25849.55549911099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 131324.68112598354,
            "unit": "ns/iter",
            "extra": "iterations: 6501\ncpu: 131316.8127980311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101720.75813177717,
            "unit": "ns/iter",
            "extra": "iterations: 8393\ncpu: 101716.68056713932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101199.6685653305,
            "unit": "ns/iter",
            "extra": "iterations: 8427\ncpu: 101197.12827815366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99939.49005999477,
            "unit": "ns/iter",
            "extra": "iterations: 8501\ncpu: 99933.61957416739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 203971.02569984383,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 203964.06608536022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1885134.2469635825,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1884964.9797570875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1445557.4844720224,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1445482.9192546569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1451968.4734375817,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1451885.156249999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1432795.337962911,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1432705.2469135853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 792178.472961359,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 792125.1502145907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1407328.6134970398,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1407251.3803680977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34858.890695727896,
            "unit": "ns/iter",
            "extra": "iterations: 23860\ncpu: 34856.40821458501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158339.80077190863,
            "unit": "ns/iter",
            "extra": "iterations: 5441\ncpu: 158336.16982172342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 128462.799610314,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 128458.3483213427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 130783.52969083337,
            "unit": "ns/iter",
            "extra": "iterations: 6534\ncpu: 130782.36914600535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127985.72517493667,
            "unit": "ns/iter",
            "extra": "iterations: 6717\ncpu: 127980.95876135197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 220895.9946318984,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 220881.87627811855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1910237.74948649,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1910172.4845995922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1491640.415999973,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1491618.0800000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1481924.3439490038,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1481878.8216560564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1467954.2917980065,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1467861.51419559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 820173.4947089703,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 820147.1781305121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1446068.0077400096,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1445943.4984520169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5059526.119999873,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5058733.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3160551.9455782236,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3160308.843537401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26602.683493380402,
            "unit": "ns/iter",
            "extra": "iterations: 30824\ncpu: 26600.885673501107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 140317.86242869237,
            "unit": "ns/iter",
            "extra": "iterations: 6135\ncpu: 140309.4539527293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106417.39471082749,
            "unit": "ns/iter",
            "extra": "iterations: 8092\ncpu: 106408.42807711262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103629.9598746717,
            "unit": "ns/iter",
            "extra": "iterations: 8299\ncpu: 103627.87082781023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101527.30484905704,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 101519.812217732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 187866.23443938512,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 187854.088050316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1883760.2343433222,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1883598.9898989862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1455315.7062501044,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1455203.1250000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1456193.0880502318,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1456071.0691823892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1442092.6157408743,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1442037.8086419767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 793600.9803920946,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 793537.595907928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1416269.2998478296,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1416150.3805174995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2786.5238324990537,
            "unit": "ns/iter",
            "extra": "iterations: 250792\ncpu: 2786.2974098057275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18879.16581371425,
            "unit": "ns/iter",
            "extra": "iterations: 37126\ncpu: 18878.24166352425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15033.01009610857,
            "unit": "ns/iter",
            "extra": "iterations: 53585\ncpu: 15031.809274983749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15010.338988880974,
            "unit": "ns/iter",
            "extra": "iterations: 46503\ncpu: 15009.09188654497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11169.503065920859,
            "unit": "ns/iter",
            "extra": "iterations: 62787\ncpu: 11168.332616624453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66528.71024936622,
            "unit": "ns/iter",
            "extra": "iterations: 10547\ncpu: 66527.64767232405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124361.36789947878,
            "unit": "ns/iter",
            "extra": "iterations: 5651\ncpu: 124361.97133250666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31044.864255394798,
            "unit": "ns/iter",
            "extra": "iterations: 22616\ncpu: 31044.31376016987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31265.433336306713,
            "unit": "ns/iter",
            "extra": "iterations: 22426\ncpu: 31265.098546330337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31075.829282328934,
            "unit": "ns/iter",
            "extra": "iterations: 22587\ncpu: 31075.17598618676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62220.84160525872,
            "unit": "ns/iter",
            "extra": "iterations: 11263\ncpu: 62221.166651869076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58440.78023991867,
            "unit": "ns/iter",
            "extra": "iterations: 12004\ncpu: 58437.754081972496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22298.472235479967,
            "unit": "ns/iter",
            "extra": "iterations: 31425\ncpu: 22297.12967382675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 114105.61355933757,
            "unit": "ns/iter",
            "extra": "iterations: 6195\ncpu: 114102.95399515815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89959.7106481464,
            "unit": "ns/iter",
            "extra": "iterations: 7776\ncpu: 89958.01183127504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90718.13443090148,
            "unit": "ns/iter",
            "extra": "iterations: 7714\ncpu: 90717.39694062706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90492.34666148889,
            "unit": "ns/iter",
            "extra": "iterations: 7728\ncpu: 90491.66666666792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 130938.70124327176,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 130930.20968639749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 555920.062003194,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 555898.8871224128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 452795.04209847184,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 452782.6424870479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 453003.9670329638,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 452998.2546864895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 450057.53920312773,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 450048.3933161962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 287309.1379451241,
            "unit": "ns/iter",
            "extra": "iterations: 2443\ncpu: 287300.16373311507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 443700.759212251,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 443694.9174078831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22556.4862471012,
            "unit": "ns/iter",
            "extra": "iterations: 31048\ncpu: 22555.082452975963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111420.42759388531,
            "unit": "ns/iter",
            "extra": "iterations: 6284\ncpu: 111418.95289624344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90434.17651612125,
            "unit": "ns/iter",
            "extra": "iterations: 7750\ncpu: 90434.72258064405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89708.70600307436,
            "unit": "ns/iter",
            "extra": "iterations: 7796\ncpu: 89705.33606977893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90359.05448923528,
            "unit": "ns/iter",
            "extra": "iterations: 7763\ncpu: 90358.25067628492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 129087.99170813794,
            "unit": "ns/iter",
            "extra": "iterations: 5427\ncpu: 129080.09950248605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 559101.7071029765,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 559086.9114126142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 452207.04970949225,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 452198.4506133052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 447094.35012760205,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 447087.81887754874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 446498.4766773109,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 446479.4888178858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 291043.4894234846,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 291045.16798009013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 444604.6937737802,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 444600.95298602106 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392468054,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7270.674970664377,
            "unit": "ns/iter",
            "extra": "iterations: 96299\ncpu: 7270.077570898971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54370.29020000636,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54370.63 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100051.13545306186,
            "unit": "ns/iter",
            "extra": "iterations: 8586\ncpu: 100044.67738178428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146848.83561643606,
            "unit": "ns/iter",
            "extra": "iterations: 5840\ncpu: 146837.70547945207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193204.21257551355,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 193192.6381740881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 238560.23023960128,
            "unit": "ns/iter",
            "extra": "iterations: 3631\ncpu: 238542.27485541167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284702.07056118565,
            "unit": "ns/iter",
            "extra": "iterations: 3047\ncpu: 284682.86839514266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 330250.13955253275,
            "unit": "ns/iter",
            "extra": "iterations: 2637\ncpu: 330225.8248009099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 374636.9051723691,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 374618.2758620686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6341.392116772512,
            "unit": "ns/iter",
            "extra": "iterations: 112492\ncpu: 6341.163816093585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5127.565518500269,
            "unit": "ns/iter",
            "extra": "iterations: 137030\ncpu: 5127.3436473764805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5149.945222230129,
            "unit": "ns/iter",
            "extra": "iterations: 136570\ncpu: 5149.395914183204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5170.047636293464,
            "unit": "ns/iter",
            "extra": "iterations: 135296\ncpu: 5169.68498699149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7923.905050001259,
            "unit": "ns/iter",
            "extra": "iterations: 88099\ncpu: 7923.810712947938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25850.91998983877,
            "unit": "ns/iter",
            "extra": "iterations: 31496\ncpu: 25849.55549911099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 131324.68112598354,
            "unit": "ns/iter",
            "extra": "iterations: 6501\ncpu: 131316.8127980311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101720.75813177717,
            "unit": "ns/iter",
            "extra": "iterations: 8393\ncpu: 101716.68056713932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101199.6685653305,
            "unit": "ns/iter",
            "extra": "iterations: 8427\ncpu: 101197.12827815366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99939.49005999477,
            "unit": "ns/iter",
            "extra": "iterations: 8501\ncpu: 99933.61957416739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 203971.02569984383,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 203964.06608536022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1885134.2469635825,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1884964.9797570875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1445557.4844720224,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1445482.9192546569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1451968.4734375817,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1451885.156249999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1432795.337962911,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1432705.2469135853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 792178.472961359,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 792125.1502145907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1407328.6134970398,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1407251.3803680977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34858.890695727896,
            "unit": "ns/iter",
            "extra": "iterations: 23860\ncpu: 34856.40821458501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158339.80077190863,
            "unit": "ns/iter",
            "extra": "iterations: 5441\ncpu: 158336.16982172342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 128462.799610314,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 128458.3483213427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 130783.52969083337,
            "unit": "ns/iter",
            "extra": "iterations: 6534\ncpu: 130782.36914600535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127985.72517493667,
            "unit": "ns/iter",
            "extra": "iterations: 6717\ncpu: 127980.95876135197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 220895.9946318984,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 220881.87627811855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1910237.74948649,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1910172.4845995922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1491640.415999973,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1491618.0800000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1481924.3439490038,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1481878.8216560564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1467954.2917980065,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1467861.51419559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 820173.4947089703,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 820147.1781305121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1446068.0077400096,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1445943.4984520169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5059526.119999873,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5058733.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3160551.9455782236,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3160308.843537401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26602.683493380402,
            "unit": "ns/iter",
            "extra": "iterations: 30824\ncpu: 26600.885673501107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 140317.86242869237,
            "unit": "ns/iter",
            "extra": "iterations: 6135\ncpu: 140309.4539527293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106417.39471082749,
            "unit": "ns/iter",
            "extra": "iterations: 8092\ncpu: 106408.42807711262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103629.9598746717,
            "unit": "ns/iter",
            "extra": "iterations: 8299\ncpu: 103627.87082781023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101527.30484905704,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 101519.812217732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 187866.23443938512,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 187854.088050316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1883760.2343433222,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1883598.9898989862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1455315.7062501044,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1455203.1250000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1456193.0880502318,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1456071.0691823892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1442092.6157408743,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1442037.8086419767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 793600.9803920946,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 793537.595907928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1416269.2998478296,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1416150.3805174995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2786.5238324990537,
            "unit": "ns/iter",
            "extra": "iterations: 250792\ncpu: 2786.2974098057275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18879.16581371425,
            "unit": "ns/iter",
            "extra": "iterations: 37126\ncpu: 18878.24166352425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15033.01009610857,
            "unit": "ns/iter",
            "extra": "iterations: 53585\ncpu: 15031.809274983749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15010.338988880974,
            "unit": "ns/iter",
            "extra": "iterations: 46503\ncpu: 15009.09188654497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11169.503065920859,
            "unit": "ns/iter",
            "extra": "iterations: 62787\ncpu: 11168.332616624453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66528.71024936622,
            "unit": "ns/iter",
            "extra": "iterations: 10547\ncpu: 66527.64767232405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124361.36789947878,
            "unit": "ns/iter",
            "extra": "iterations: 5651\ncpu: 124361.97133250666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31044.864255394798,
            "unit": "ns/iter",
            "extra": "iterations: 22616\ncpu: 31044.31376016987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31265.433336306713,
            "unit": "ns/iter",
            "extra": "iterations: 22426\ncpu: 31265.098546330337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31075.829282328934,
            "unit": "ns/iter",
            "extra": "iterations: 22587\ncpu: 31075.17598618676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62220.84160525872,
            "unit": "ns/iter",
            "extra": "iterations: 11263\ncpu: 62221.166651869076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58440.78023991867,
            "unit": "ns/iter",
            "extra": "iterations: 12004\ncpu: 58437.754081972496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22298.472235479967,
            "unit": "ns/iter",
            "extra": "iterations: 31425\ncpu: 22297.12967382675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 114105.61355933757,
            "unit": "ns/iter",
            "extra": "iterations: 6195\ncpu: 114102.95399515815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89959.7106481464,
            "unit": "ns/iter",
            "extra": "iterations: 7776\ncpu: 89958.01183127504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90718.13443090148,
            "unit": "ns/iter",
            "extra": "iterations: 7714\ncpu: 90717.39694062706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90492.34666148889,
            "unit": "ns/iter",
            "extra": "iterations: 7728\ncpu: 90491.66666666792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 130938.70124327176,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 130930.20968639749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 555920.062003194,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 555898.8871224128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 452795.04209847184,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 452782.6424870479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 453003.9670329638,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 452998.2546864895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 450057.53920312773,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 450048.3933161962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 287309.1379451241,
            "unit": "ns/iter",
            "extra": "iterations: 2443\ncpu: 287300.16373311507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 443700.759212251,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 443694.9174078831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22556.4862471012,
            "unit": "ns/iter",
            "extra": "iterations: 31048\ncpu: 22555.082452975963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111420.42759388531,
            "unit": "ns/iter",
            "extra": "iterations: 6284\ncpu: 111418.95289624344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90434.17651612125,
            "unit": "ns/iter",
            "extra": "iterations: 7750\ncpu: 90434.72258064405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89708.70600307436,
            "unit": "ns/iter",
            "extra": "iterations: 7796\ncpu: 89705.33606977893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90359.05448923528,
            "unit": "ns/iter",
            "extra": "iterations: 7763\ncpu: 90358.25067628492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 129087.99170813794,
            "unit": "ns/iter",
            "extra": "iterations: 5427\ncpu: 129080.09950248605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 559101.7071029765,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 559086.9114126142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 452207.04970949225,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 452198.4506133052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 447094.35012760205,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 447087.81887754874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 446498.4766773109,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 446479.4888178858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 291043.4894234846,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 291045.16798009013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 444604.6937737802,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 444600.95298602106 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392468054,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7270.674970664377,
            "unit": "ns/iter",
            "extra": "iterations: 96299\ncpu: 7270.077570898971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54370.29020000636,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54370.63 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100051.13545306186,
            "unit": "ns/iter",
            "extra": "iterations: 8586\ncpu: 100044.67738178428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146848.83561643606,
            "unit": "ns/iter",
            "extra": "iterations: 5840\ncpu: 146837.70547945207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193204.21257551355,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 193192.6381740881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 238560.23023960128,
            "unit": "ns/iter",
            "extra": "iterations: 3631\ncpu: 238542.27485541167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284702.07056118565,
            "unit": "ns/iter",
            "extra": "iterations: 3047\ncpu: 284682.86839514266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 330250.13955253275,
            "unit": "ns/iter",
            "extra": "iterations: 2637\ncpu: 330225.8248009099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 374636.9051723691,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 374618.2758620686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6341.392116772512,
            "unit": "ns/iter",
            "extra": "iterations: 112492\ncpu: 6341.163816093585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5127.565518500269,
            "unit": "ns/iter",
            "extra": "iterations: 137030\ncpu: 5127.3436473764805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5149.945222230129,
            "unit": "ns/iter",
            "extra": "iterations: 136570\ncpu: 5149.395914183204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5170.047636293464,
            "unit": "ns/iter",
            "extra": "iterations: 135296\ncpu: 5169.68498699149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7923.905050001259,
            "unit": "ns/iter",
            "extra": "iterations: 88099\ncpu: 7923.810712947938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25850.91998983877,
            "unit": "ns/iter",
            "extra": "iterations: 31496\ncpu: 25849.55549911099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 131324.68112598354,
            "unit": "ns/iter",
            "extra": "iterations: 6501\ncpu: 131316.8127980311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101720.75813177717,
            "unit": "ns/iter",
            "extra": "iterations: 8393\ncpu: 101716.68056713932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101199.6685653305,
            "unit": "ns/iter",
            "extra": "iterations: 8427\ncpu: 101197.12827815366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99939.49005999477,
            "unit": "ns/iter",
            "extra": "iterations: 8501\ncpu: 99933.61957416739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 203971.02569984383,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 203964.06608536022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1885134.2469635825,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1884964.9797570875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1445557.4844720224,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1445482.9192546569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1451968.4734375817,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1451885.156249999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1432795.337962911,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1432705.2469135853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 792178.472961359,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 792125.1502145907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1407328.6134970398,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1407251.3803680977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34858.890695727896,
            "unit": "ns/iter",
            "extra": "iterations: 23860\ncpu: 34856.40821458501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158339.80077190863,
            "unit": "ns/iter",
            "extra": "iterations: 5441\ncpu: 158336.16982172342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 128462.799610314,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 128458.3483213427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 130783.52969083337,
            "unit": "ns/iter",
            "extra": "iterations: 6534\ncpu: 130782.36914600535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127985.72517493667,
            "unit": "ns/iter",
            "extra": "iterations: 6717\ncpu: 127980.95876135197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 220895.9946318984,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 220881.87627811855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1910237.74948649,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1910172.4845995922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1491640.415999973,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1491618.0800000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1481924.3439490038,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1481878.8216560564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1467954.2917980065,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1467861.51419559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 820173.4947089703,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 820147.1781305121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1446068.0077400096,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1445943.4984520169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5059526.119999873,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5058733.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3160551.9455782236,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3160308.843537401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26602.683493380402,
            "unit": "ns/iter",
            "extra": "iterations: 30824\ncpu: 26600.885673501107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 140317.86242869237,
            "unit": "ns/iter",
            "extra": "iterations: 6135\ncpu: 140309.4539527293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106417.39471082749,
            "unit": "ns/iter",
            "extra": "iterations: 8092\ncpu: 106408.42807711262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103629.9598746717,
            "unit": "ns/iter",
            "extra": "iterations: 8299\ncpu: 103627.87082781023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101527.30484905704,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 101519.812217732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 187866.23443938512,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 187854.088050316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1883760.2343433222,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1883598.9898989862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1455315.7062501044,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1455203.1250000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1456193.0880502318,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1456071.0691823892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1442092.6157408743,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1442037.8086419767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 793600.9803920946,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 793537.595907928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1416269.2998478296,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1416150.3805174995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2786.5238324990537,
            "unit": "ns/iter",
            "extra": "iterations: 250792\ncpu: 2786.2974098057275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18879.16581371425,
            "unit": "ns/iter",
            "extra": "iterations: 37126\ncpu: 18878.24166352425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15033.01009610857,
            "unit": "ns/iter",
            "extra": "iterations: 53585\ncpu: 15031.809274983749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15010.338988880974,
            "unit": "ns/iter",
            "extra": "iterations: 46503\ncpu: 15009.09188654497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11169.503065920859,
            "unit": "ns/iter",
            "extra": "iterations: 62787\ncpu: 11168.332616624453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66528.71024936622,
            "unit": "ns/iter",
            "extra": "iterations: 10547\ncpu: 66527.64767232405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124361.36789947878,
            "unit": "ns/iter",
            "extra": "iterations: 5651\ncpu: 124361.97133250666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31044.864255394798,
            "unit": "ns/iter",
            "extra": "iterations: 22616\ncpu: 31044.31376016987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31265.433336306713,
            "unit": "ns/iter",
            "extra": "iterations: 22426\ncpu: 31265.098546330337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31075.829282328934,
            "unit": "ns/iter",
            "extra": "iterations: 22587\ncpu: 31075.17598618676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62220.84160525872,
            "unit": "ns/iter",
            "extra": "iterations: 11263\ncpu: 62221.166651869076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58440.78023991867,
            "unit": "ns/iter",
            "extra": "iterations: 12004\ncpu: 58437.754081972496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22298.472235479967,
            "unit": "ns/iter",
            "extra": "iterations: 31425\ncpu: 22297.12967382675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 114105.61355933757,
            "unit": "ns/iter",
            "extra": "iterations: 6195\ncpu: 114102.95399515815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89959.7106481464,
            "unit": "ns/iter",
            "extra": "iterations: 7776\ncpu: 89958.01183127504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90718.13443090148,
            "unit": "ns/iter",
            "extra": "iterations: 7714\ncpu: 90717.39694062706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90492.34666148889,
            "unit": "ns/iter",
            "extra": "iterations: 7728\ncpu: 90491.66666666792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 130938.70124327176,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 130930.20968639749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 555920.062003194,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 555898.8871224128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 452795.04209847184,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 452782.6424870479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 453003.9670329638,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 452998.2546864895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 450057.53920312773,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 450048.3933161962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 287309.1379451241,
            "unit": "ns/iter",
            "extra": "iterations: 2443\ncpu: 287300.16373311507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 443700.759212251,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 443694.9174078831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22556.4862471012,
            "unit": "ns/iter",
            "extra": "iterations: 31048\ncpu: 22555.082452975963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111420.42759388531,
            "unit": "ns/iter",
            "extra": "iterations: 6284\ncpu: 111418.95289624344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90434.17651612125,
            "unit": "ns/iter",
            "extra": "iterations: 7750\ncpu: 90434.72258064405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89708.70600307436,
            "unit": "ns/iter",
            "extra": "iterations: 7796\ncpu: 89705.33606977893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90359.05448923528,
            "unit": "ns/iter",
            "extra": "iterations: 7763\ncpu: 90358.25067628492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 129087.99170813794,
            "unit": "ns/iter",
            "extra": "iterations: 5427\ncpu: 129080.09950248605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 559101.7071029765,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 559086.9114126142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 452207.04970949225,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 452198.4506133052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 447094.35012760205,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 447087.81887754874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 446498.4766773109,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 446479.4888178858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 291043.4894234846,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 291045.16798009013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 444604.6937737802,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 444600.95298602106 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}