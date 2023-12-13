window.BENCHMARK_DATA = {
  "lastUpdate": 1702490225623,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-14 22.04 Debug c++-17": [
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
        "date": 1702490225276,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7144.149911925285,
            "unit": "ns/iter",
            "extra": "iterations: 97644\ncpu: 7144.036499938552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52377.24529999923,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52376.08999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97393.0845979538,
            "unit": "ns/iter",
            "extra": "iterations: 8830\ncpu: 97391.71007927519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 141580.99654263054,
            "unit": "ns/iter",
            "extra": "iterations: 6074\ncpu: 141579.9143891999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 185557.30253002295,
            "unit": "ns/iter",
            "extra": "iterations: 4664\ncpu: 185558.94082332766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 229776.41232731414,
            "unit": "ns/iter",
            "extra": "iterations: 3764\ncpu: 229774.6280552604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 272579.66551615996,
            "unit": "ns/iter",
            "extra": "iterations: 3187\ncpu: 272581.801066834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 317263.1629521348,
            "unit": "ns/iter",
            "extra": "iterations: 2737\ncpu: 317242.08987943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 373999.71173046535,
            "unit": "ns/iter",
            "extra": "iterations: 2404\ncpu: 373997.25457570766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6140.327327827878,
            "unit": "ns/iter",
            "extra": "iterations: 114173\ncpu: 6140.139963038556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4879.057503208348,
            "unit": "ns/iter",
            "extra": "iterations: 141053\ncpu: 4879.095091915798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4964.021838596685,
            "unit": "ns/iter",
            "extra": "iterations: 142500\ncpu: 4963.957894736843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4890.680896641813,
            "unit": "ns/iter",
            "extra": "iterations: 142844\ncpu: 4890.72344655709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7662.833066531844,
            "unit": "ns/iter",
            "extra": "iterations: 91204\ncpu: 7662.8031665277895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25508.950636197744,
            "unit": "ns/iter",
            "extra": "iterations: 31987\ncpu: 25508.675399381005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 131457.6134505563,
            "unit": "ns/iter",
            "extra": "iterations: 6483\ncpu: 131452.07465679466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98440.31077810208,
            "unit": "ns/iter",
            "extra": "iterations: 8675\ncpu: 98441.06051873179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98939.25805703504,
            "unit": "ns/iter",
            "extra": "iterations: 8626\ncpu: 98937.27104103848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95724.8890393868,
            "unit": "ns/iter",
            "extra": "iterations: 8859\ncpu: 95724.67547127239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199612.80417229363,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 199604.68820098724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1761820.826996249,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1761812.5475285181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1379544.1572700047,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1379509.7922848656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1381603.0373134967,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1381575.9701492572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1364030.7885462467,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1363983.259911897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 750852.6024389908,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 750838.2113821114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1333696.1494252887,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1333590.3735632168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35915.69422640839,
            "unit": "ns/iter",
            "extra": "iterations: 22932\ncpu: 35913.66213151926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158433.02557027913,
            "unit": "ns/iter",
            "extra": "iterations: 5436\ncpu: 158423.23399558492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 127640.36100816292,
            "unit": "ns/iter",
            "extra": "iterations: 6745\ncpu: 127634.02520385434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132273.98248310178,
            "unit": "ns/iter",
            "extra": "iterations: 6508\ncpu: 132267.34787953278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 124280.63472444855,
            "unit": "ns/iter",
            "extra": "iterations: 6877\ncpu: 124269.94328922489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 224111.4968912024,
            "unit": "ns/iter",
            "extra": "iterations: 3860\ncpu: 224098.34196891103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1799483.635135039,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1799443.629343632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1420250.412843972,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1420261.9266055017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1431541.85362105,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1431485.2080123161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1406459.8441756445,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1406457.639939483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 775175.0434419885,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 775157.811194652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1371684.0811208547,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1371654.5722713869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6401108.410959096,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6400655.47945205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3005153.798045309,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3004936.1563517973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25917.379714611627,
            "unit": "ns/iter",
            "extra": "iterations: 31816\ncpu: 25916.444556198094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 141478.56154978083,
            "unit": "ns/iter",
            "extra": "iterations: 6117\ncpu: 141469.49485041687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104557.91787675809,
            "unit": "ns/iter",
            "extra": "iterations: 8195\ncpu: 104551.87309334982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 102608.98254006433,
            "unit": "ns/iter",
            "extra": "iterations: 8362\ncpu: 102603.43219325526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99009.55107930077,
            "unit": "ns/iter",
            "extra": "iterations: 8663\ncpu: 99009.0615260308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 191389.61473962964,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 191371.93292144762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1772644.5247148627,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1772507.414448665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1373901.7425150368,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1373775.1497005941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1382714.0667656017,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1382607.4183976226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1363809.4883041256,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1363784.064327481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 747630.2367109328,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 747591.5282392062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1333712.1604584036,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1333650.859598853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2737.34720969535,
            "unit": "ns/iter",
            "extra": "iterations: 256119\ncpu: 2737.138986174391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18245.543455631912,
            "unit": "ns/iter",
            "extra": "iterations: 38430\ncpu: 18244.056726515733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14860.951494437038,
            "unit": "ns/iter",
            "extra": "iterations: 47108\ncpu: 14860.374034134224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14931.79092962905,
            "unit": "ns/iter",
            "extra": "iterations: 46922\ncpu: 14931.533182728755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10950.557941323834,
            "unit": "ns/iter",
            "extra": "iterations: 63944\ncpu: 10949.720067559023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67816.32558590209,
            "unit": "ns/iter",
            "extra": "iterations: 10326\ncpu: 67809.9554522568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122629.75136084473,
            "unit": "ns/iter",
            "extra": "iterations: 5695\ncpu: 122617.61194029909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30080.078523029148,
            "unit": "ns/iter",
            "extra": "iterations: 23318\ncpu: 30077.528089887666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30205.817382306574,
            "unit": "ns/iter",
            "extra": "iterations: 23196\ncpu: 30204.048111743326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29896.291780819327,
            "unit": "ns/iter",
            "extra": "iterations: 23360\ncpu: 29893.797089041054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59327.24294551189,
            "unit": "ns/iter",
            "extra": "iterations: 11801\ncpu: 59323.201423608545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55930.5212594596,
            "unit": "ns/iter",
            "extra": "iterations: 12418\ncpu: 55930.214205185905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22435.88933717516,
            "unit": "ns/iter",
            "extra": "iterations: 31230\ncpu: 22435.28017931469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108283.48066214044,
            "unit": "ns/iter",
            "extra": "iterations: 6464\ncpu: 108279.95049504892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88073.82384788523,
            "unit": "ns/iter",
            "extra": "iterations: 7942\ncpu: 88065.2984134993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88761.64632139124,
            "unit": "ns/iter",
            "extra": "iterations: 7897\ncpu: 88750.905407118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87238.55986530428,
            "unit": "ns/iter",
            "extra": "iterations: 8018\ncpu: 87234.13569468679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 131850.49302675624,
            "unit": "ns/iter",
            "extra": "iterations: 5306\ncpu: 131849.754994346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 529130.2921779141,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 529124.8466257713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 437239.8574999892,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 437212.3125000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 433276.8390304183,
            "unit": "ns/iter",
            "extra": "iterations: 1609\ncpu: 433280.6090739661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 427202.26373627386,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 427200.610500614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 272434.6513439951,
            "unit": "ns/iter",
            "extra": "iterations: 2567\ncpu: 272436.8134008588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 425467.64320392034,
            "unit": "ns/iter",
            "extra": "iterations: 1648\ncpu: 425445.0849514547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22435.61982808514,
            "unit": "ns/iter",
            "extra": "iterations: 31178\ncpu: 22435.38392456225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107161.07846435293,
            "unit": "ns/iter",
            "extra": "iterations: 6538\ncpu: 107160.46191495766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87726.2549514359,
            "unit": "ns/iter",
            "extra": "iterations: 7927\ncpu: 87725.43206761798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88025.712001003,
            "unit": "ns/iter",
            "extra": "iterations: 7941\ncpu: 88025.29908071973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87005.3488748014,
            "unit": "ns/iter",
            "extra": "iterations: 8043\ncpu: 86998.61991794211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127689.16116079748,
            "unit": "ns/iter",
            "extra": "iterations: 5479\ncpu: 127688.11826975699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 519768.3063798266,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 519755.71216616523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 430208.246465927,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 430211.43208359263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 424976.5048780734,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 424955.4268292733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 425691.9448150503,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 425695.2092177107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 268901.29398147605,
            "unit": "ns/iter",
            "extra": "iterations: 2592\ncpu: 268896.29629629676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 418711.97900414164,
            "unit": "ns/iter",
            "extra": "iterations: 1667\ncpu: 418708.69826034934 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}