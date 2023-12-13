window.BENCHMARK_DATA = {
  "lastUpdate": 1702503898967,
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
        "date": 1702492845567,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7167.890044423938,
            "unit": "ns/iter",
            "extra": "iterations: 97694\ncpu: 7167.646938399493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53128.659300000436,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53127.57999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97980.27708095993,
            "unit": "ns/iter",
            "extra": "iterations: 8770\ncpu: 97977.32041049033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143053.457289765,
            "unit": "ns/iter",
            "extra": "iterations: 6029\ncpu: 143048.15060540725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 189743.81905805538,
            "unit": "ns/iter",
            "extra": "iterations: 4565\ncpu: 189738.02847754658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 232987.5417115225,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 232969.6986006461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 279213.42128884984,
            "unit": "ns/iter",
            "extra": "iterations: 3119\ncpu: 279201.34658544423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 323833.7991021451,
            "unit": "ns/iter",
            "extra": "iterations: 2673\ncpu: 323826.26262626244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 367469.29396879504,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 367448.8401518346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6147.680576262647,
            "unit": "ns/iter",
            "extra": "iterations: 113351\ncpu: 6147.560233257757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4992.7933466242985,
            "unit": "ns/iter",
            "extra": "iterations: 140951\ncpu: 4992.577562415316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4972.283644111597,
            "unit": "ns/iter",
            "extra": "iterations: 141258\ncpu: 4972.179982726637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4940.1432715678775,
            "unit": "ns/iter",
            "extra": "iterations: 142366\ncpu: 4939.970920023031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7799.005988757842,
            "unit": "ns/iter",
            "extra": "iterations: 89668\ncpu: 7798.832359370121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25161.183980674654,
            "unit": "ns/iter",
            "extra": "iterations: 32286\ncpu: 25159.676020566196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129886.37246222494,
            "unit": "ns/iter",
            "extra": "iterations: 6551\ncpu: 129882.52175240425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99324.35493647105,
            "unit": "ns/iter",
            "extra": "iterations: 8579\ncpu: 99319.61767105736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99187.9057152746,
            "unit": "ns/iter",
            "extra": "iterations: 8591\ncpu: 99186.19485508102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96508.05546750488,
            "unit": "ns/iter",
            "extra": "iterations: 8834\ncpu: 96504.02988453716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 202832.94232960304,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 202824.11670845633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1801548.9245647108,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1801481.2379110218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1428065.4371166194,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1428037.1165644175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1443635.7795031203,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1443599.534161491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1409267.1993912961,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1409229.9847792974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 772739.0369748091,
            "unit": "ns/iter",
            "extra": "iterations: 1190\ncpu: 772710.0000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1375167.425815964,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1375111.869436205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34240.22000496648,
            "unit": "ns/iter",
            "extra": "iterations: 24154\ncpu: 34238.94593028072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156766.05718448866,
            "unit": "ns/iter",
            "extra": "iterations: 5491\ncpu: 156761.82844654884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 127254.10497400908,
            "unit": "ns/iter",
            "extra": "iterations: 6735\ncpu: 127249.45805493656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 129475.18390455826,
            "unit": "ns/iter",
            "extra": "iterations: 6623\ncpu: 129472.74648950621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123895.99424541986,
            "unit": "ns/iter",
            "extra": "iterations: 6951\ncpu: 123892.08746942897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 229403.29080824094,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 229393.8985736934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1852944.1646824088,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1852867.8571428626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1480994.0556438738,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1480939.1096979282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1471972.2606635962,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1471915.1658767725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1446102.394409992,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1446047.981366458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 788359.6771186172,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 788321.5254237276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1411455.8814590317,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1411409.5744680874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6507940.377622668,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6507789.510489492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3053756.457516146,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3053636.6013072026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25345.518708385465,
            "unit": "ns/iter",
            "extra": "iterations: 31991\ncpu: 25345.07205151436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138666.73134569466,
            "unit": "ns/iter",
            "extra": "iterations: 6205\ncpu: 138664.04512489916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 102598.01661849537,
            "unit": "ns/iter",
            "extra": "iterations: 8304\ncpu: 102593.19605009706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 101619.7584282916,
            "unit": "ns/iter",
            "extra": "iterations: 8424\ncpu: 101616.57169990489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 97751.26198669102,
            "unit": "ns/iter",
            "extra": "iterations: 8718\ncpu: 97743.08327598058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 193230.1988356707,
            "unit": "ns/iter",
            "extra": "iterations: 4466\ncpu: 193219.86117330976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1799958.119922708,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1799826.4990328713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1411344.7939394065,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1411293.6363636362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1438831.863497001,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1438759.355828213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1401957.2335329114,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1401888.1736526913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 767043.4818780819,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 767002.5535420082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1365089.9882525087,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1364997.650513949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2810.6682517124145,
            "unit": "ns/iter",
            "extra": "iterations: 248363\ncpu: 2810.5373988879223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18472.575309554682,
            "unit": "ns/iter",
            "extra": "iterations: 37877\ncpu: 18471.536816537897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14368.135340041581,
            "unit": "ns/iter",
            "extra": "iterations: 48803\ncpu: 14367.286847119944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14872.755630629501,
            "unit": "ns/iter",
            "extra": "iterations: 47064\ncpu: 14871.965833758315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11025.89463211139,
            "unit": "ns/iter",
            "extra": "iterations: 63321\ncpu: 11025.231755657762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71531.2153751676,
            "unit": "ns/iter",
            "extra": "iterations: 9769\ncpu: 71527.61797522775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124824.07085631273,
            "unit": "ns/iter",
            "extra": "iterations: 5617\ncpu: 124818.03453800874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30727.06171970897,
            "unit": "ns/iter",
            "extra": "iterations: 22748\ncpu: 30725.523122911887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30818.677352593924,
            "unit": "ns/iter",
            "extra": "iterations: 22709\ncpu: 30817.248667929016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30343.774067312403,
            "unit": "ns/iter",
            "extra": "iterations: 22998\ncpu: 30342.39499086871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59961.83796731597,
            "unit": "ns/iter",
            "extra": "iterations: 11689\ncpu: 59958.41389340453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56660.61012145756,
            "unit": "ns/iter",
            "extra": "iterations: 12350\ncpu: 56658.882591092646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22105.845028133022,
            "unit": "ns/iter",
            "extra": "iterations: 31638\ncpu: 22105.237372779535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 107107.2853842657,
            "unit": "ns/iter",
            "extra": "iterations: 6493\ncpu: 107100.30802402554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88769.75148827398,
            "unit": "ns/iter",
            "extra": "iterations: 7895\ncpu: 88762.95123495883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88114.73704728278,
            "unit": "ns/iter",
            "extra": "iterations: 7952\ncpu: 88108.57645875252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87784.85052577856,
            "unit": "ns/iter",
            "extra": "iterations: 7988\ncpu: 87778.50525788807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 131086.37144460678,
            "unit": "ns/iter",
            "extra": "iterations: 5344\ncpu: 131081.28742514984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 536028.7269230377,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 535992.3846153856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 441938.01962028147,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 441930.5063291164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 439160.03385576775,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 439134.1692789947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 438124.6383510801,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 438103.4978138665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 274193.4813652542,
            "unit": "ns/iter",
            "extra": "iterations: 2549\ncpu: 274175.32365633495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 430022.1093365584,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 429997.2972972927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22062.591511101014,
            "unit": "ns/iter",
            "extra": "iterations: 31712\ncpu: 22061.576059536044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107942.96622773608,
            "unit": "ns/iter",
            "extra": "iterations: 6455\ncpu: 107935.21301316681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88111.52457572789,
            "unit": "ns/iter",
            "extra": "iterations: 7955\ncpu: 88108.98805782537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88300.99078515946,
            "unit": "ns/iter",
            "extra": "iterations: 7922\ncpu: 88299.0027770772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87883.30855996734,
            "unit": "ns/iter",
            "extra": "iterations: 7979\ncpu: 87878.31808497298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128014.64236110993,
            "unit": "ns/iter",
            "extra": "iterations: 5472\ncpu: 128005.7748538019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 529234.7217195242,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 529204.0723981836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 438610.2104271044,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 438590.5778894451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 436268.24890828435,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 436241.35995009245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 429457.9257212456,
            "unit": "ns/iter",
            "extra": "iterations: 1629\ncpu: 429445.9791282999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 271120.8309422596,
            "unit": "ns/iter",
            "extra": "iterations: 2579\ncpu: 271112.13648700964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 426415.9126983953,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 426408.3638583617 ns\nthreads: 1"
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
        "date": 1702503898446,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7157.323407074303,
            "unit": "ns/iter",
            "extra": "iterations: 98090\ncpu: 7156.932409012132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52602.23469999801,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52600.349999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97199.80324153045,
            "unit": "ns/iter",
            "extra": "iterations: 8823\ncpu: 97194.41233140651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 141018.374651588,
            "unit": "ns/iter",
            "extra": "iterations: 6099\ncpu: 141008.0996884735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 185115.66630992253,
            "unit": "ns/iter",
            "extra": "iterations: 4672\ncpu: 185104.36643835623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 228387.10360240986,
            "unit": "ns/iter",
            "extra": "iterations: 3803\ncpu: 228368.577438864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 272589.7147345413,
            "unit": "ns/iter",
            "extra": "iterations: 3183\ncpu: 272574.39522463083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 316316.60727275215,
            "unit": "ns/iter",
            "extra": "iterations: 2750\ncpu: 316282.98181818175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 359004.1720429953,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 358993.0521091812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6055.900916047182,
            "unit": "ns/iter",
            "extra": "iterations: 115387\ncpu: 6055.786180418945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4900.980313535287,
            "unit": "ns/iter",
            "extra": "iterations: 143652\ncpu: 4900.955085902039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4917.750109437082,
            "unit": "ns/iter",
            "extra": "iterations: 141634\ncpu: 4917.488032534557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5031.411051299802,
            "unit": "ns/iter",
            "extra": "iterations: 139513\ncpu: 5030.968440217037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7722.013768067537,
            "unit": "ns/iter",
            "extra": "iterations: 90354\ncpu: 7721.450074152779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25458.008398359263,
            "unit": "ns/iter",
            "extra": "iterations: 31911\ncpu: 25457.607094732248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 135996.8554445934,
            "unit": "ns/iter",
            "extra": "iterations: 6309\ncpu: 135992.88318275474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102382.69231690982,
            "unit": "ns/iter",
            "extra": "iterations: 8343\ncpu: 102380.10308042687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102860.3915184964,
            "unit": "ns/iter",
            "extra": "iterations: 8324\ncpu: 102857.17203267648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100569.78803579826,
            "unit": "ns/iter",
            "extra": "iterations: 8492\ncpu: 100567.99340555807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 201037.5708474477,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 201023.38983050868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1753888.0376648696,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1753829.0018832379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1368139.1413844142,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1368081.4432989713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1377037.1305637688,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1377019.1394658755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1356663.1405563727,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1356608.3455344075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 742987.6323410969,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 742964.8431214821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1323043.9985693286,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1323007.5822603726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35626.55870323612,
            "unit": "ns/iter",
            "extra": "iterations: 23227\ncpu: 35626.094631248176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 159210.06511713308,
            "unit": "ns/iter",
            "extra": "iterations: 5421\ncpu: 159206.45637336303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 128962.95912847771,
            "unit": "ns/iter",
            "extra": "iterations: 6655\ncpu: 128960.28549962434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 133358.0899906837,
            "unit": "ns/iter",
            "extra": "iterations: 6434\ncpu: 133354.60055952787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 128448.71454138207,
            "unit": "ns/iter",
            "extra": "iterations: 6705\ncpu: 128439.0305741986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 226502.20695968522,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 226487.93825222354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1790024.209212998,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1789942.9942418537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1419584.235921014,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1419483.5616438384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1407197.1706948304,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1407094.5619335282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1399176.109774438,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1399069.4736842096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 770336.0322581045,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 770269.7270471454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1366077.3245227162,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1365994.8604992637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6409455.799999266,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6408762.758620706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2964754.6285714847,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2964566.0317460247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26094.047340646106,
            "unit": "ns/iter",
            "extra": "iterations: 31643\ncpu: 26092.42802515574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143741.5546429686,
            "unit": "ns/iter",
            "extra": "iterations: 5966\ncpu: 143725.05866577214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110379.26192880688,
            "unit": "ns/iter",
            "extra": "iterations: 7922\ncpu: 110370.46200454418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 105134.08035824138,
            "unit": "ns/iter",
            "extra": "iterations: 8151\ncpu: 105128.92896577119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101953.33182628642,
            "unit": "ns/iter",
            "extra": "iterations: 8405\ncpu: 101949.2920880435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 192292.90771624693,
            "unit": "ns/iter",
            "extra": "iterations: 4497\ncpu: 192282.7662886363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1754851.4398496659,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1754702.06766917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1388426.2548434648,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1388319.5230998467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1393595.794336791,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1393455.737704916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1415046.9571006515,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1413074.5562130162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 749414.6978243823,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 749361.402095085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1334024.770773487,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1333947.5644699093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2748.9270980605324,
            "unit": "ns/iter",
            "extra": "iterations: 255343\ncpu: 2748.7767434392135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18426.29739249462,
            "unit": "ns/iter",
            "extra": "iterations: 38044\ncpu: 18425.19714015365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14279.604577033593,
            "unit": "ns/iter",
            "extra": "iterations: 48940\ncpu: 14278.506334286954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13798.694854030022,
            "unit": "ns/iter",
            "extra": "iterations: 50661\ncpu: 13798.227433331409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11049.931462654096,
            "unit": "ns/iter",
            "extra": "iterations: 63542\ncpu: 11049.704132699586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 69206.9823017637,
            "unit": "ns/iter",
            "extra": "iterations: 10114\ncpu: 69204.75578406143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122902.21340819928,
            "unit": "ns/iter",
            "extra": "iterations: 5698\ncpu: 122898.42049842051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30360.152697601352,
            "unit": "ns/iter",
            "extra": "iterations: 23039\ncpu: 30359.256044099053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30525.498823220973,
            "unit": "ns/iter",
            "extra": "iterations: 22944\ncpu: 30524.712343096184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30461.521532958704,
            "unit": "ns/iter",
            "extra": "iterations: 23197\ncpu: 30460.641462257998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59855.17118658869,
            "unit": "ns/iter",
            "extra": "iterations: 11689\ncpu: 59854.777996406534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56159.29886254626,
            "unit": "ns/iter",
            "extra": "iterations: 12484\ncpu: 56157.409484139534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22263.409843415353,
            "unit": "ns/iter",
            "extra": "iterations: 31229\ncpu: 22262.98632681151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110521.08786346279,
            "unit": "ns/iter",
            "extra": "iterations: 6328\ncpu: 110518.9633375456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89987.15122703867,
            "unit": "ns/iter",
            "extra": "iterations: 7783\ncpu: 89985.22420660437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89862.1978609742,
            "unit": "ns/iter",
            "extra": "iterations: 7854\ncpu: 89860.72065189779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88600.73915800516,
            "unit": "ns/iter",
            "extra": "iterations: 7886\ncpu: 88597.8189196038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 134720.62041130528,
            "unit": "ns/iter",
            "extra": "iterations: 5203\ncpu: 134719.9115894677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 530344.0303260742,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 530328.5822592855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 435643.1336664303,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 435627.29544034926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 437416.4259838128,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 437386.6958151182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 431833.68942193256,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 431802.0295202944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 273155.71612651204,
            "unit": "ns/iter",
            "extra": "iterations: 2561\ncpu: 273142.9910191377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 425339.3036585416,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 425302.86585365975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22601.459718527425,
            "unit": "ns/iter",
            "extra": "iterations: 31193\ncpu: 22599.913442118308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107585.0854556487,
            "unit": "ns/iter",
            "extra": "iterations: 6518\ncpu: 107574.76219699452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87881.68478808405,
            "unit": "ns/iter",
            "extra": "iterations: 7928\ncpu: 87873.66296670132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88639.33111083694,
            "unit": "ns/iter",
            "extra": "iterations: 7949\ncpu: 88636.72160020037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88788.790408529,
            "unit": "ns/iter",
            "extra": "iterations: 7882\ncpu: 88783.06267444711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128907.41282381973,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 128899.8897666706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 522313.36086306337,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 522278.4970238087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 430219.78215389163,
            "unit": "ns/iter",
            "extra": "iterations: 1625\ncpu: 430191.4461538515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 427501.85216859484,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 427471.22785582853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 427665.2530562362,
            "unit": "ns/iter",
            "extra": "iterations: 1636\ncpu: 427646.14914426033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 275911.35106381733,
            "unit": "ns/iter",
            "extra": "iterations: 2538\ncpu: 275897.32072498143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 422203.197336558,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 422178.69249394984 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}