window.BENCHMARK_DATA = {
  "lastUpdate": 1705959833553,
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
        "date": 1705575522144,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7121.8962507514,
            "unit": "ns/iter",
            "extra": "iterations: 98073\ncpu: 7121.560470261949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52019.15719999306,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52016.789999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96318.9937332181,
            "unit": "ns/iter",
            "extra": "iterations: 8936\ncpu: 96315.65577439571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139983.62632523623,
            "unit": "ns/iter",
            "extra": "iterations: 6131\ncpu: 139976.69221986632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 184225.206574778,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 184220.38176033943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 228063.85379965152,
            "unit": "ns/iter",
            "extra": "iterations: 3803\ncpu: 228051.72232448074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 271211.64726132766,
            "unit": "ns/iter",
            "extra": "iterations: 3195\ncpu: 271207.94992175273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 316691.61292663525,
            "unit": "ns/iter",
            "extra": "iterations: 2754\ncpu: 316679.9201161946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 359356.8151052253,
            "unit": "ns/iter",
            "extra": "iterations: 2423\ncpu: 359338.7536112258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6090.389711816554,
            "unit": "ns/iter",
            "extra": "iterations: 115239\ncpu: 6090.260241758429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4887.765584228241,
            "unit": "ns/iter",
            "extra": "iterations: 142179\ncpu: 4887.581147708174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5003.992476374049,
            "unit": "ns/iter",
            "extra": "iterations: 141687\ncpu: 5003.648182260903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4925.663337183892,
            "unit": "ns/iter",
            "extra": "iterations: 141964\ncpu: 4925.48322109831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7734.614680322472,
            "unit": "ns/iter",
            "extra": "iterations: 90216\ncpu: 7734.4584109248835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25047.782081801073,
            "unit": "ns/iter",
            "extra": "iterations: 32347\ncpu: 25046.718397378438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 125302.43704029196,
            "unit": "ns/iter",
            "extra": "iterations: 6798\ncpu: 125297.1020888497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 96906.7741678979,
            "unit": "ns/iter",
            "extra": "iterations: 8803\ncpu: 96903.19209360448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 94904.52212094441,
            "unit": "ns/iter",
            "extra": "iterations: 8996\ncpu: 94902.56780791466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93468.45191882766,
            "unit": "ns/iter",
            "extra": "iterations: 9068\ncpu: 93464.78826643115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 198031.48592492007,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 198023.70420017917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1753961.2954545254,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1753891.2878787888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1379573.9807121684,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1379547.9228486666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1364480.3142438156,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1364413.3627019087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1362598.920353981,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1362544.690265489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 769006.168193198,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 768967.1107410499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1331090.263005768,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1331061.994219653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35007.01795271622,
            "unit": "ns/iter",
            "extra": "iterations: 23729\ncpu: 35005.08660289106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 151172.126493333,
            "unit": "ns/iter",
            "extra": "iterations: 5692\ncpu: 151167.30498945908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123609.26083201276,
            "unit": "ns/iter",
            "extra": "iterations: 6947\ncpu: 123604.73585720445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 125581.18019597654,
            "unit": "ns/iter",
            "extra": "iterations: 6837\ncpu: 125578.06055287394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121641.94516082996,
            "unit": "ns/iter",
            "extra": "iterations: 7057\ncpu: 121636.84285106983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 223464.29507350855,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 223456.6933195775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1792372.3294797635,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1792288.2466281303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1421468.6559632942,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1421448.929663603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1419695.2045802197,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1419625.3435114485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1390987.4283582661,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1390942.0895522297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 786534.847586803,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 786508.7214225245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1368271.4757708197,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1368238.6196769546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6496711.805555025,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6495943.055555563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3027472.113636243,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3027267.532467545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25758.5526762157,
            "unit": "ns/iter",
            "extra": "iterations: 31836\ncpu: 25757.089458474566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 133644.52963078022,
            "unit": "ns/iter",
            "extra": "iterations: 6446\ncpu: 133636.11542041544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 100764.10178865744,
            "unit": "ns/iter",
            "extra": "iterations: 8498\ncpu: 100757.88420804877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97847.222439131,
            "unit": "ns/iter",
            "extra": "iterations: 8708\ncpu: 97840.52595314638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93193.67811815158,
            "unit": "ns/iter",
            "extra": "iterations: 9140\ncpu: 93189.03719912455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 189831.88487783787,
            "unit": "ns/iter",
            "extra": "iterations: 4543\ncpu: 189818.864186661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1766718.7647060172,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1766601.8975332112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1384518.2245509948,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1384459.730538923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1376994.5576922854,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1376975.4437869813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1362399.2704679014,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1362344.5906432774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 764684.5554642652,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 764660.2300739511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1334413.6031519235,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1334353.5816618875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2774.291473487311,
            "unit": "ns/iter",
            "extra": "iterations: 252788\ncpu: 2774.2282070351625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18971.499132583413,
            "unit": "ns/iter",
            "extra": "iterations: 38044\ncpu: 18970.686573441275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14813.677513479552,
            "unit": "ns/iter",
            "extra": "iterations: 47295\ncpu: 14813.221270747421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14556.887142828666,
            "unit": "ns/iter",
            "extra": "iterations: 47981\ncpu: 14556.172234843007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10943.758884123152,
            "unit": "ns/iter",
            "extra": "iterations: 63878\ncpu: 10943.529853783806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66567.56372781459,
            "unit": "ns/iter",
            "extra": "iterations: 10537\ncpu: 66566.05295624916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 123069.5606885741,
            "unit": "ns/iter",
            "extra": "iterations: 5693\ncpu: 123065.71227823738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30536.53016588078,
            "unit": "ns/iter",
            "extra": "iterations: 23089\ncpu: 30535.64034821785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30463.581396357535,
            "unit": "ns/iter",
            "extra": "iterations: 23017\ncpu: 30462.940435330493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29994.137324542757,
            "unit": "ns/iter",
            "extra": "iterations: 23368\ncpu: 29993.773536459983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60361.61597581229,
            "unit": "ns/iter",
            "extra": "iterations: 11580\ncpu: 60359.05872193405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55920.99704755495,
            "unit": "ns/iter",
            "extra": "iterations: 12532\ncpu: 55918.185445260344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22322.423052320344,
            "unit": "ns/iter",
            "extra": "iterations: 31268\ncpu: 22319.96929768497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 106980.30771580776,
            "unit": "ns/iter",
            "extra": "iterations: 6545\ncpu: 106973.07868601843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 86929.37327703767,
            "unit": "ns/iter",
            "extra": "iterations: 8053\ncpu: 86925.00931329858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86491.70684321293,
            "unit": "ns/iter",
            "extra": "iterations: 8081\ncpu: 86489.03601039448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86693.71600346251,
            "unit": "ns/iter",
            "extra": "iterations: 8067\ncpu: 86687.41787529555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 126337.26239595666,
            "unit": "ns/iter",
            "extra": "iterations: 5526\ncpu: 126329.02642055735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 528482.1220799184,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 528459.3067068615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 429754.9353448383,
            "unit": "ns/iter",
            "extra": "iterations: 1624\ncpu: 429700.61576354556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 434304.5272615159,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 434268.71127633017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 420479.0812274762,
            "unit": "ns/iter",
            "extra": "iterations: 1662\ncpu: 420461.37184115517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 272915.5811232307,
            "unit": "ns/iter",
            "extra": "iterations: 2564\ncpu: 272911.97347893403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 420733.5345760526,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 420719.0018039651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22215.25005563599,
            "unit": "ns/iter",
            "extra": "iterations: 31453\ncpu: 22214.520077575882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106669.82656322104,
            "unit": "ns/iter",
            "extra": "iterations: 6573\ncpu: 106665.26700136847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86864.33878967224,
            "unit": "ns/iter",
            "extra": "iterations: 8064\ncpu: 86863.33085317607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86263.61684548073,
            "unit": "ns/iter",
            "extra": "iterations: 8109\ncpu: 86259.68676778786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86086.79837719083,
            "unit": "ns/iter",
            "extra": "iterations: 8134\ncpu: 86083.93164494832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128079.91563859924,
            "unit": "ns/iter",
            "extra": "iterations: 5512\ncpu: 128077.14078374278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 520876.30580356315,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 520849.776785713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 428463.8149726704,
            "unit": "ns/iter",
            "extra": "iterations: 1643\ncpu: 428459.2209373091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 427034.0517976643,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 427019.50030469144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 421992.42512078735,
            "unit": "ns/iter",
            "extra": "iterations: 1656\ncpu: 421974.0338164196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 271900.10209625267,
            "unit": "ns/iter",
            "extra": "iterations: 2576\ncpu: 271890.1785714268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 418107.24117299257,
            "unit": "ns/iter",
            "extra": "iterations: 1671\ncpu: 418086.5948533735 ns\nthreads: 1"
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
        "date": 1705773346884,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7365.555723176602,
            "unit": "ns/iter",
            "extra": "iterations: 95454\ncpu: 7365.378087874789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52894.17760000106,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52889.84000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98297.78837795205,
            "unit": "ns/iter",
            "extra": "iterations: 8742\ncpu: 98293.10226492795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 142487.86707498707,
            "unit": "ns/iter",
            "extra": "iterations: 6041\ncpu: 142481.32759476904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 187964.99544962723,
            "unit": "ns/iter",
            "extra": "iterations: 4615\ncpu: 187956.14301191756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 231709.35171304544,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 231700.66916488225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 276196.63084263285,
            "unit": "ns/iter",
            "extra": "iterations: 3145\ncpu: 276182.575516693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 320840.074456319,
            "unit": "ns/iter",
            "extra": "iterations: 2713\ncpu: 320826.0228529304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 367087.94177219167,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 367078.3544303795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6155.5713330582685,
            "unit": "ns/iter",
            "extra": "iterations: 113671\ncpu: 6155.52339646875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4941.164935608023,
            "unit": "ns/iter",
            "extra": "iterations: 141243\ncpu: 4941.08805392125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4973.289538367754,
            "unit": "ns/iter",
            "extra": "iterations: 141173\ncpu: 4973.24630063823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4957.034119991057,
            "unit": "ns/iter",
            "extra": "iterations: 141061\ncpu: 4956.919346949203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7876.545778728146,
            "unit": "ns/iter",
            "extra": "iterations: 88895\ncpu: 7876.507115135826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25685.865659426592,
            "unit": "ns/iter",
            "extra": "iterations: 31770\ncpu: 25685.50204595532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 132427.33936581813,
            "unit": "ns/iter",
            "extra": "iterations: 6465\ncpu: 132426.14075792703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100182.43197838335,
            "unit": "ns/iter",
            "extra": "iterations: 8512\ncpu: 100182.22509398525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99749.82812317555,
            "unit": "ns/iter",
            "extra": "iterations: 8541\ncpu: 99749.27994380044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96820.85186448455,
            "unit": "ns/iter",
            "extra": "iterations: 8796\ncpu: 96819.7930877671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 202200.98181400448,
            "unit": "ns/iter",
            "extra": "iterations: 4344\ncpu: 202200.3683241252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1773636.9233716251,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1773614.5593869789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1406057.4604861904,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1406024.0121580546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1412804.2537992843,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1412772.036474166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1384051.3338301177,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1384035.1713859912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 735562.4642289495,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 735550.4769475358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1357372.9678362417,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1357352.0467836293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35918.3939933938,
            "unit": "ns/iter",
            "extra": "iterations: 23008\ncpu: 35917.71992350488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156468.82315404326,
            "unit": "ns/iter",
            "extra": "iterations: 5485\ncpu: 156467.1832269827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125800.23684209093,
            "unit": "ns/iter",
            "extra": "iterations: 6802\ncpu: 125799.70596883292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 128135.76629948954,
            "unit": "ns/iter",
            "extra": "iterations: 6718\ncpu: 128133.93867222377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 125927.48920863938,
            "unit": "ns/iter",
            "extra": "iterations: 6811\ncpu: 125925.6790485978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 227094.51210528784,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 227081.76315789393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1807320.8233011083,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1807271.2621359327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1445712.9875389517,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1445611.9937694701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1462151.9513343663,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1462102.0408163273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1418536.2511415775,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1418466.3622526543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 765749.4888152607,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 765717.9784589856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1388347.0104634068,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1388273.2436472347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6362997.952380568,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6362718.367346936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2848360.6261396687,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2848237.6899696076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26498.036557822586,
            "unit": "ns/iter",
            "extra": "iterations: 30992\ncpu: 26496.608802271447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137546.2577286428,
            "unit": "ns/iter",
            "extra": "iterations: 6243\ncpu: 137540.38122697378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 101961.53760611697,
            "unit": "ns/iter",
            "extra": "iterations: 8363\ncpu: 101958.02941528134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 101377.60347287635,
            "unit": "ns/iter",
            "extra": "iterations: 8408\ncpu: 101374.91674595633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 98196.59074692143,
            "unit": "ns/iter",
            "extra": "iterations: 8689\ncpu: 98193.65864886629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 194365.51299864124,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 194354.28059166297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1796387.6563706254,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1796325.6756756739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1411523.195454403,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1411455.6060606148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1410340.7214611494,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1410280.0608828051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1386046.4059701425,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1386003.1343283665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 734234.7895981685,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 734198.7391646963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1356001.453352607,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1355953.352769675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2791.438383531694,
            "unit": "ns/iter",
            "extra": "iterations: 250274\ncpu: 2791.1928526335137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18051.186576595548,
            "unit": "ns/iter",
            "extra": "iterations: 38783\ncpu: 18049.836268468047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14529.21856778298,
            "unit": "ns/iter",
            "extra": "iterations: 48191\ncpu: 14528.563424705788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15064.394934312855,
            "unit": "ns/iter",
            "extra": "iterations: 46509\ncpu: 15063.766152787535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11269.095761079256,
            "unit": "ns/iter",
            "extra": "iterations: 62280\ncpu: 11268.855170199076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 72237.13921041005,
            "unit": "ns/iter",
            "extra": "iterations: 9676\ncpu: 72233.34022323294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 126095.27343047055,
            "unit": "ns/iter",
            "extra": "iterations: 5559\ncpu: 126089.908256881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31059.53345469183,
            "unit": "ns/iter",
            "extra": "iterations: 22523\ncpu: 31057.638858056045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30634.015836907,
            "unit": "ns/iter",
            "extra": "iterations: 22858\ncpu: 30632.94251465575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30464.305237493925,
            "unit": "ns/iter",
            "extra": "iterations: 22969\ncpu: 30462.140276023947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55909.694433351804,
            "unit": "ns/iter",
            "extra": "iterations: 12521\ncpu: 55906.804568325424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56618.15444984422,
            "unit": "ns/iter",
            "extra": "iterations: 12360\ncpu: 56616.05987055046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21790.40705538025,
            "unit": "ns/iter",
            "extra": "iterations: 32089\ncpu: 21789.943594378234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108737.2011834225,
            "unit": "ns/iter",
            "extra": "iterations: 6422\ncpu: 108736.48396138144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89042.46404152413,
            "unit": "ns/iter",
            "extra": "iterations: 7898\ncpu: 89038.66801721993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90283.3978855073,
            "unit": "ns/iter",
            "extra": "iterations: 7756\ncpu: 90279.68024755071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89190.26274409755,
            "unit": "ns/iter",
            "extra": "iterations: 7886\ncpu: 89185.10017752921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 130576.28160598599,
            "unit": "ns/iter",
            "extra": "iterations: 5355\ncpu: 130571.6900093363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 535405.0664629535,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 535408.2505729531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 438902.64487738133,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 438885.41797611874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 442018.10151326604,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 442002.017654477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 434794.49844818143,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 434779.20546245214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 270251.4648919471,
            "unit": "ns/iter",
            "extra": "iterations: 2592\ncpu: 270231.25000000297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 427794.29877304146,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 427792.6993864954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22016.503658844274,
            "unit": "ns/iter",
            "extra": "iterations: 31704\ncpu: 22015.035957607874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108573.25456515636,
            "unit": "ns/iter",
            "extra": "iterations: 6462\ncpu: 108568.58557722162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89413.52292757967,
            "unit": "ns/iter",
            "extra": "iterations: 7829\ncpu: 89410.32060288629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88823.2553272514,
            "unit": "ns/iter",
            "extra": "iterations: 7884\ncpu: 88818.83561643727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89269.04913440699,
            "unit": "ns/iter",
            "extra": "iterations: 7856\ncpu: 89269.00458248385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128550.37647492216,
            "unit": "ns/iter",
            "extra": "iterations: 5424\ncpu: 128546.01769911581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 525493.3523239007,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 525469.04047975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 440234.6452830189,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 440206.41509434104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 430953.0836408219,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 430938.5608856032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 426347.119120384,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 426323.5797189979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 266183.7433358379,
            "unit": "ns/iter",
            "extra": "iterations: 2626\ncpu: 266177.38004570175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 422510.0369920834,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 422495.6943602244 ns\nthreads: 1"
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
        "date": 1705774769003,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7211.262708792219,
            "unit": "ns/iter",
            "extra": "iterations: 96567\ncpu: 7211.222260192407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54675.11120000381,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54674.27 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98395.38149760089,
            "unit": "ns/iter",
            "extra": "iterations: 8734\ncpu: 98391.1495305702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 142833.97728781553,
            "unit": "ns/iter",
            "extra": "iterations: 6032\ncpu: 142827.80172413794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 187548.50346321196,
            "unit": "ns/iter",
            "extra": "iterations: 4620\ncpu: 187526.2987012987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 232074.48270312813,
            "unit": "ns/iter",
            "extra": "iterations: 3729\ncpu: 232066.88120139446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 275736.5709287563,
            "unit": "ns/iter",
            "extra": "iterations: 3144\ncpu: 275718.92493638676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 321062.53951256943,
            "unit": "ns/iter",
            "extra": "iterations: 2708\ncpu: 321057.6809453472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 366871.79411765025,
            "unit": "ns/iter",
            "extra": "iterations: 2380\ncpu: 366860.9243697481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6135.478520002421,
            "unit": "ns/iter",
            "extra": "iterations: 113757\ncpu: 6135.409689074074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5032.101042323783,
            "unit": "ns/iter",
            "extra": "iterations: 139496\ncpu: 5032.065435568043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5039.504964427094,
            "unit": "ns/iter",
            "extra": "iterations: 139291\ncpu: 5039.4540925113615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5036.075403808459,
            "unit": "ns/iter",
            "extra": "iterations: 139237\ncpu: 5035.999051976126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7774.084557522164,
            "unit": "ns/iter",
            "extra": "iterations: 90400\ncpu: 7773.943584070785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25797.10221091278,
            "unit": "ns/iter",
            "extra": "iterations: 31435\ncpu: 25796.83155718149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 124065.5010928179,
            "unit": "ns/iter",
            "extra": "iterations: 6863\ncpu: 124063.48535625839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 95218.02222473068,
            "unit": "ns/iter",
            "extra": "iterations: 8864\ncpu: 95217.77978339352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 96056.2066749388,
            "unit": "ns/iter",
            "extra": "iterations: 8869\ncpu: 96052.82444469501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93253.7880780279,
            "unit": "ns/iter",
            "extra": "iterations: 9126\ncpu: 93249.82467674768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199041.88669949982,
            "unit": "ns/iter",
            "extra": "iterations: 4466\ncpu: 199030.3627407075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1797005.9825580136,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1796980.4263565862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1407692.8727271906,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1407638.6363636367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1410173.5744680176,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1410180.3951367782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1394132.2105262217,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1394070.9774436092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 754593.4844006931,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 754568.8013136297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1359661.5102638984,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1359606.4516129058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36927.91519026628,
            "unit": "ns/iter",
            "extra": "iterations: 22521\ncpu: 36926.2688157719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 150039.09375001024,
            "unit": "ns/iter",
            "extra": "iterations: 5728\ncpu: 150035.00349162004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 122069.92296779962,
            "unit": "ns/iter",
            "extra": "iterations: 7049\ncpu: 122061.20017023665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 124195.1677978345,
            "unit": "ns/iter",
            "extra": "iterations: 6925\ncpu: 124188.85198555983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121088.94013241101,
            "unit": "ns/iter",
            "extra": "iterations: 7099\ncpu: 121079.1942527115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 222229.76165938427,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 222223.18989951024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1840962.673267232,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1840816.2376237577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1437164.13953487,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1437119.224806195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1445244.8976744,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1445187.2868217065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1426006.2465543577,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1425961.102603365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 775060.8983333033,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 775003.9999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1388709.37070251,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1388650.8221225652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6407239.534246556,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6407103.424657544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2955931.370253153,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2955759.8101265756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26396.11036821585,
            "unit": "ns/iter",
            "extra": "iterations: 31259\ncpu: 26395.262164496762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 131716.9689412476,
            "unit": "ns/iter",
            "extra": "iterations: 6536\ncpu: 131712.07160342712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 100222.88100526328,
            "unit": "ns/iter",
            "extra": "iterations: 8555\ncpu: 100219.76621858566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97032.01258931153,
            "unit": "ns/iter",
            "extra": "iterations: 8817\ncpu: 97028.87603493237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93971.72711228632,
            "unit": "ns/iter",
            "extra": "iterations: 9066\ncpu: 93967.61526582773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 191935.62319804667,
            "unit": "ns/iter",
            "extra": "iterations: 4509\ncpu: 191929.14171656707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1802562.8485437427,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1802483.4951456378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1413474.1727272023,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1413394.0909090908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1413281.530302997,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1413237.5757575769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1396562.0404191415,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1396514.3712574828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 751689.2145748776,
            "unit": "ns/iter",
            "extra": "iterations: 1235\ncpu: 751669.8785425116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1363246.7467057237,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1363135.2855051227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2802.135693512334,
            "unit": "ns/iter",
            "extra": "iterations: 248258\ncpu: 2802.0921782983714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18556.464914606415,
            "unit": "ns/iter",
            "extra": "iterations: 37708\ncpu: 18556.2241434178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13747.47694756597,
            "unit": "ns/iter",
            "extra": "iterations: 50884\ncpu: 13747.225060922989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14307.607019337345,
            "unit": "ns/iter",
            "extra": "iterations: 48865\ncpu: 14307.731505167296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11097.190475433745,
            "unit": "ns/iter",
            "extra": "iterations: 62890\ncpu: 11096.951820639177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 68767.0760015635,
            "unit": "ns/iter",
            "extra": "iterations: 10184\ncpu: 68765.88766692865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 125935.52610801418,
            "unit": "ns/iter",
            "extra": "iterations: 5573\ncpu: 125929.84030145258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30372.07409333175,
            "unit": "ns/iter",
            "extra": "iterations: 23079\ncpu: 30371.59322327665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30672.34521411954,
            "unit": "ns/iter",
            "extra": "iterations: 22838\ncpu: 30671.166476924507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30369.18819859441,
            "unit": "ns/iter",
            "extra": "iterations: 23082\ncpu: 30368.741876787066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60767.72189502317,
            "unit": "ns/iter",
            "extra": "iterations: 11546\ncpu: 60765.69374675214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56718.87344246129,
            "unit": "ns/iter",
            "extra": "iterations: 12279\ncpu: 56717.88419252357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22364.02069097425,
            "unit": "ns/iter",
            "extra": "iterations: 31318\ncpu: 22363.902548055492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112874.49190938531,
            "unit": "ns/iter",
            "extra": "iterations: 6180\ncpu: 112871.01941747604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90682.27243256252,
            "unit": "ns/iter",
            "extra": "iterations: 7712\ncpu: 90681.66493775933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89694.72245735537,
            "unit": "ns/iter",
            "extra": "iterations: 7797\ncpu: 89691.75323842584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89590.83375925942,
            "unit": "ns/iter",
            "extra": "iterations: 7826\ncpu: 89587.52875031879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 131798.99566610873,
            "unit": "ns/iter",
            "extra": "iterations: 5307\ncpu: 131797.6069342387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 540340.3364269179,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 540323.3565351978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 442026.9898670267,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 441999.2400253335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 436367.1260137103,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 436344.354335622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 437760.1008140541,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 437726.54978083825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 278144.20700633526,
            "unit": "ns/iter",
            "extra": "iterations: 2512\ncpu: 278128.34394904436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 431506.0598026749,
            "unit": "ns/iter",
            "extra": "iterations: 1622\ncpu: 431491.43033292476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22675.683508321516,
            "unit": "ns/iter",
            "extra": "iterations: 30955\ncpu: 22674.995961880075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111620.10864710175,
            "unit": "ns/iter",
            "extra": "iterations: 6268\ncpu: 111612.53988513061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90229.73811670496,
            "unit": "ns/iter",
            "extra": "iterations: 7763\ncpu: 90226.56189617382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89460.16611296641,
            "unit": "ns/iter",
            "extra": "iterations: 7826\ncpu: 89459.32788142105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90248.83072950397,
            "unit": "ns/iter",
            "extra": "iterations: 7745\ncpu: 90248.53453841138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128861.70660775517,
            "unit": "ns/iter",
            "extra": "iterations: 5433\ncpu: 128854.9788330586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 533859.7699315958,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 533821.2604403974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 440525.3335431305,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 440501.9509125176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 430317.6853793882,
            "unit": "ns/iter",
            "extra": "iterations: 1621\ncpu: 430316.22455274867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 431441.48301419616,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 431440.2100061731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 277750.94361197215,
            "unit": "ns/iter",
            "extra": "iterations: 2536\ncpu: 277743.2965299691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 427605.5879827761,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 427584.1201716752 ns\nthreads: 1"
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
        "date": 1705778356412,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7065.3041823551375,
            "unit": "ns/iter",
            "extra": "iterations: 98796\ncpu: 7064.989473258027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51779.33420000045,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51778.74000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95802.41869782486,
            "unit": "ns/iter",
            "extra": "iterations: 8985\ncpu: 95799.30996104618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 140545.96917306064,
            "unit": "ns/iter",
            "extra": "iterations: 6131\ncpu: 140534.26847170116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 184983.56669499254,
            "unit": "ns/iter",
            "extra": "iterations: 4708\ncpu: 184976.84791843672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 228318.71251318816,
            "unit": "ns/iter",
            "extra": "iterations: 3788\ncpu: 228306.2565997888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 270979.03022751026,
            "unit": "ns/iter",
            "extra": "iterations: 3209\ncpu: 270972.5771268309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 314577.4257318322,
            "unit": "ns/iter",
            "extra": "iterations: 2767\ncpu: 314566.8955547521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 358804.4966969466,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 358794.59124690347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6310.449040114048,
            "unit": "ns/iter",
            "extra": "iterations: 114649\ncpu: 6310.316705771533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4989.926524138949,
            "unit": "ns/iter",
            "extra": "iterations: 140604\ncpu: 4989.828881112914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5023.992679999765,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5023.947999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4920.9099951890885,
            "unit": "ns/iter",
            "extra": "iterations: 141348\ncpu: 4920.85915612531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7620.77510768553,
            "unit": "ns/iter",
            "extra": "iterations: 92631\ncpu: 7620.697174811889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25416.843572101774,
            "unit": "ns/iter",
            "extra": "iterations: 31970\ncpu: 25416.440412887103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 125211.14229134454,
            "unit": "ns/iter",
            "extra": "iterations: 6817\ncpu: 125207.27592782755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 96118.12886363552,
            "unit": "ns/iter",
            "extra": "iterations: 8800\ncpu: 96114.94318181837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 94678.19599999276,
            "unit": "ns/iter",
            "extra": "iterations: 9000\ncpu: 94672.27777777746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93627.8120251077,
            "unit": "ns/iter",
            "extra": "iterations: 9081\ncpu: 93622.99306243793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 195149.83296801572,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 195138.16308636547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1752180.9886793476,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1752107.1698113214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1382536.76376804,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1382489.7101449282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1394768.939939945,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1394721.9219219254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1371510.177252472,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1371444.6085672064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 773696.6126878371,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 773659.7662771258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1336743.2424242585,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1336692.9292929298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34910.12690655174,
            "unit": "ns/iter",
            "extra": "iterations: 23734\ncpu: 34909.76657959042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 146851.8819716823,
            "unit": "ns/iter",
            "extra": "iterations: 5863\ncpu: 146848.91693672218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 122694.83648067446,
            "unit": "ns/iter",
            "extra": "iterations: 6990\ncpu: 122692.51788268982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 123856.56006377225,
            "unit": "ns/iter",
            "extra": "iterations: 6901\ncpu: 123853.31111433115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 124825.26558384365,
            "unit": "ns/iter",
            "extra": "iterations: 6834\ncpu: 124822.914837577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 222943.6478946036,
            "unit": "ns/iter",
            "extra": "iterations: 3871\ncpu: 222932.83389305096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1785589.9367816837,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1785545.4022988542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1421434.7614678855,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1421392.0489296669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1422785.2293578333,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1422748.6238532052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1403809.1855203412,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1403776.168929101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 788231.3686006669,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 788204.5221843006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1370044.516224236,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1369988.64306784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6493940.694444373,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6493676.388888907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2957072.4367089686,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2957014.240506321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25736.283303423206,
            "unit": "ns/iter",
            "extra": "iterations: 31761\ncpu: 25735.609710021792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 133646.0183258228,
            "unit": "ns/iter",
            "extra": "iterations: 6439\ncpu: 133643.50054356313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 103004.1429243546,
            "unit": "ns/iter",
            "extra": "iterations: 8501\ncpu: 102998.08257852095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97647.70644609109,
            "unit": "ns/iter",
            "extra": "iterations: 8765\ncpu: 97646.59440958386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94048.43658211011,
            "unit": "ns/iter",
            "extra": "iterations: 8988\ncpu: 94041.68891855775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 186295.78804936688,
            "unit": "ns/iter",
            "extra": "iterations: 4619\ncpu: 186290.04113444468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1743328.1167607224,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1743237.476459505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1367111.3132351607,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1367086.3235294102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1376266.5066667104,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1376175.7037036975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1358656.6213449694,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1358626.1695906452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 760634.9533932857,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 760605.5600981181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1318905.5988537634,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1318858.1661891036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2738.4300731225526,
            "unit": "ns/iter",
            "extra": "iterations: 256282\ncpu: 2738.332774053576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18131.05684304946,
            "unit": "ns/iter",
            "extra": "iterations: 37929\ncpu: 18130.549184001597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14727.555579162046,
            "unit": "ns/iter",
            "extra": "iterations: 47068\ncpu: 14727.022605592023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14720.30459636141,
            "unit": "ns/iter",
            "extra": "iterations: 47233\ncpu: 14719.935214786374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11022.074037065266,
            "unit": "ns/iter",
            "extra": "iterations: 64049\ncpu: 11021.4788677419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67917.11947723002,
            "unit": "ns/iter",
            "extra": "iterations: 10253\ncpu: 67913.46922851831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121681.07263542146,
            "unit": "ns/iter",
            "extra": "iterations: 5741\ncpu: 121675.61400452968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29439.74588836627,
            "unit": "ns/iter",
            "extra": "iterations: 23470\ncpu: 29438.615253515385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30138.407632860974,
            "unit": "ns/iter",
            "extra": "iterations: 23163\ncpu: 30137.598756637748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29750.701038795334,
            "unit": "ns/iter",
            "extra": "iterations: 23585\ncpu: 29749.64596141602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59869.4510572981,
            "unit": "ns/iter",
            "extra": "iterations: 11728\ncpu: 59867.54774897679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55419.327145809,
            "unit": "ns/iter",
            "extra": "iterations: 12606\ncpu: 55417.61066158952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22103.0837146199,
            "unit": "ns/iter",
            "extra": "iterations: 31691\ncpu: 22102.66006121598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108906.81210435992,
            "unit": "ns/iter",
            "extra": "iterations: 6477\ncpu: 108901.42041068374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87445.58777193628,
            "unit": "ns/iter",
            "extra": "iterations: 7998\ncpu: 87441.73543385862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86343.04860596747,
            "unit": "ns/iter",
            "extra": "iterations: 8106\ncpu: 86340.55020972145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87233.23585845975,
            "unit": "ns/iter",
            "extra": "iterations: 8026\ncpu: 87230.0398704207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 131106.07239056617,
            "unit": "ns/iter",
            "extra": "iterations: 5346\ncpu: 131099.70071081072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 525671.4338345678,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 525629.2481202988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 428637.111587999,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 428632.0049049672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 430052.7680443832,
            "unit": "ns/iter",
            "extra": "iterations: 1621\ncpu: 430036.27390499884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 429741.89366931,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 429726.92071296537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 273117.09976620716,
            "unit": "ns/iter",
            "extra": "iterations: 2566\ncpu: 273100.7014809078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 421389.8275030157,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 421356.87575392384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22275.601752492134,
            "unit": "ns/iter",
            "extra": "iterations: 31498\ncpu: 22274.461870595303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107970.17499227784,
            "unit": "ns/iter",
            "extra": "iterations: 6486\ncpu: 107966.06537156954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86843.40590498547,
            "unit": "ns/iter",
            "extra": "iterations: 8061\ncpu: 86836.7944423771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86256.3551494192,
            "unit": "ns/iter",
            "extra": "iterations: 8098\ncpu: 86251.29661644723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86221.20732158696,
            "unit": "ns/iter",
            "extra": "iterations: 8113\ncpu: 86213.21336127222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 124897.43219582271,
            "unit": "ns/iter",
            "extra": "iterations: 5597\ncpu: 124891.26317670016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 519239.13037036854,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 519219.0370370305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 428995.96689147654,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 428976.02697731473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 428299.3098159231,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 428260.7361963189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 420531.2154862285,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 420505.0420168055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 273815.9310344705,
            "unit": "ns/iter",
            "extra": "iterations: 2552\ncpu: 273789.4200626953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 419785.3509615777,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 419775.42067308014 ns\nthreads: 1"
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
        "date": 1705952886603,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7199.768169291818,
            "unit": "ns/iter",
            "extra": "iterations: 97252\ncpu: 7199.565047505451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53209.911900000865,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53206.27 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97654.1273907052,
            "unit": "ns/iter",
            "extra": "iterations: 8784\ncpu: 97649.15755919853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 141337.78035538938,
            "unit": "ns/iter",
            "extra": "iterations: 6078\ncpu: 141329.4340243501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 186164.0668810228,
            "unit": "ns/iter",
            "extra": "iterations: 4665\ncpu: 186157.64201500526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 229669.85214628308,
            "unit": "ns/iter",
            "extra": "iterations: 3774\ncpu: 229652.1992580814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 273403.3495575435,
            "unit": "ns/iter",
            "extra": "iterations: 3164\ncpu: 273390.8659924146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 320031.5937157691,
            "unit": "ns/iter",
            "extra": "iterations: 2737\ncpu: 320022.6525392766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 360872.68508517987,
            "unit": "ns/iter",
            "extra": "iterations: 2407\ncpu: 360853.427503116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6048.864071562421,
            "unit": "ns/iter",
            "extra": "iterations: 116039\ncpu: 6048.5603977973005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4924.931852660613,
            "unit": "ns/iter",
            "extra": "iterations: 141062\ncpu: 4924.803986899382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4939.280127147949,
            "unit": "ns/iter",
            "extra": "iterations: 141882\ncpu: 4939.006357395591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4987.102780309283,
            "unit": "ns/iter",
            "extra": "iterations: 140416\ncpu: 4986.735842069273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7716.561870463801,
            "unit": "ns/iter",
            "extra": "iterations: 90245\ncpu: 7716.067372153574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25576.587915198328,
            "unit": "ns/iter",
            "extra": "iterations: 31792\ncpu: 25574.770382486175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130526.5430705862,
            "unit": "ns/iter",
            "extra": "iterations: 6559\ncpu: 130519.89632565918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97594.74510028042,
            "unit": "ns/iter",
            "extra": "iterations: 8725\ncpu: 97590.17765042974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98564.36048925894,
            "unit": "ns/iter",
            "extra": "iterations: 8666\ncpu: 98560.63927994456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95431.86182958215,
            "unit": "ns/iter",
            "extra": "iterations: 8931\ncpu: 95429.6831261898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 200257.9471791512,
            "unit": "ns/iter",
            "extra": "iterations: 4449\ncpu: 200244.1897055517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1805112.1342411484,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1805012.6459143974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1395305.0464768258,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1395233.283358317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1400861.5098039245,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1400777.6772247367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1382299.6745913546,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1382202.9717682027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 744205.0530973109,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 744152.9364440879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1350191.9213972497,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1350107.278020376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35556.67412154135,
            "unit": "ns/iter",
            "extra": "iterations: 23251\ncpu: 35553.924562384454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156333.03720507928,
            "unit": "ns/iter",
            "extra": "iterations: 5510\ncpu: 156327.1143375682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125419.85999708148,
            "unit": "ns/iter",
            "extra": "iterations: 6857\ncpu: 125413.95654076114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 128190.75701912753,
            "unit": "ns/iter",
            "extra": "iterations: 6696\ncpu: 128183.55734766982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123006.43301194173,
            "unit": "ns/iter",
            "extra": "iterations: 6949\ncpu: 122996.73334292676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 224411.75318263497,
            "unit": "ns/iter",
            "extra": "iterations: 3849\ncpu: 224399.2465575476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1841148.6047429738,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1841032.0158102803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1427805.00614442,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1427688.3256528466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1448832.1801242128,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1448706.677018632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1416043.293313115,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1415977.2036474086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 768833.6013234634,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 768785.8560794003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1381706.756314984,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1381610.8469539445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6382822.547945193,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6382521.232876687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2889502.861111,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2889324.9999999865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25474.250015594516,
            "unit": "ns/iter",
            "extra": "iterations: 32062\ncpu: 25473.217516062694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 139442.8568421048,
            "unit": "ns/iter",
            "extra": "iterations: 6175\ncpu: 139434.29959514146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 103493.70744681632,
            "unit": "ns/iter",
            "extra": "iterations: 8272\ncpu: 103487.45164410016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 101304.28394186216,
            "unit": "ns/iter",
            "extra": "iterations: 8463\ncpu: 101295.10811768904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 97692.18253969461,
            "unit": "ns/iter",
            "extra": "iterations: 8820\ncpu: 97683.2993197284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 192449.03041065528,
            "unit": "ns/iter",
            "extra": "iterations: 4505\ncpu: 192432.67480577182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1823704.594117575,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1823631.568627446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1393102.4185351767,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1393041.704035871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1397125.3103447638,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1397071.3643178414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1385460.4613096437,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1385370.089285716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 747190.9615075967,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 747161.6680032039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1357940.6588921351,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1357875.0728862947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2780.866419641894,
            "unit": "ns/iter",
            "extra": "iterations: 251257\ncpu: 2780.6998411984678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18944.289918240775,
            "unit": "ns/iter",
            "extra": "iterations: 36938\ncpu: 18943.18317180146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14412.792117145187,
            "unit": "ns/iter",
            "extra": "iterations: 48282\ncpu: 14412.143241787719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13824.343339069002,
            "unit": "ns/iter",
            "extra": "iterations: 50571\ncpu: 13823.620256668832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11104.971676974714,
            "unit": "ns/iter",
            "extra": "iterations: 63376\ncpu: 11104.893019439574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 70480.15479782216,
            "unit": "ns/iter",
            "extra": "iterations: 9942\ncpu: 70478.4148058739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124618.65177773578,
            "unit": "ns/iter",
            "extra": "iterations: 5597\ncpu: 124610.79149544511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30351.551277030812,
            "unit": "ns/iter",
            "extra": "iterations: 22983\ncpu: 30349.958665100337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30560.65042742412,
            "unit": "ns/iter",
            "extra": "iterations: 22928\ncpu: 30558.879972086535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30071.78606729933,
            "unit": "ns/iter",
            "extra": "iterations: 23269\ncpu: 30070.217886458508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59372.150266976525,
            "unit": "ns/iter",
            "extra": "iterations: 11799\ncpu: 59368.63293499456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56114.66133034628,
            "unit": "ns/iter",
            "extra": "iterations: 12493\ncpu: 56110.46185864103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21648.8993048059,
            "unit": "ns/iter",
            "extra": "iterations: 32365\ncpu: 21647.764560482305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111791.51166134645,
            "unit": "ns/iter",
            "extra": "iterations: 6260\ncpu: 111782.41214057647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88882.68496633026,
            "unit": "ns/iter",
            "extra": "iterations: 7869\ncpu: 88880.68369551409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88155.14992388664,
            "unit": "ns/iter",
            "extra": "iterations: 7884\ncpu: 88148.89649923892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88100.93970291696,
            "unit": "ns/iter",
            "extra": "iterations: 7944\ncpu: 88095.27945619336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 131842.15837104083,
            "unit": "ns/iter",
            "extra": "iterations: 5304\ncpu: 131832.3906485682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 549186.3252541105,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 549151.9155590279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 435586.51532208564,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 435550.3439649763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 439222.6378446483,
            "unit": "ns/iter",
            "extra": "iterations: 1596\ncpu: 439194.61152882385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 434021.0403225857,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 433988.3995037218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 279246.9683042793,
            "unit": "ns/iter",
            "extra": "iterations: 2524\ncpu: 279224.7622820904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 431895.80581318535,
            "unit": "ns/iter",
            "extra": "iterations: 1617\ncpu: 431874.08781694894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22521.180126309955,
            "unit": "ns/iter",
            "extra": "iterations: 29768\ncpu: 22520.461569470375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109509.01641650787,
            "unit": "ns/iter",
            "extra": "iterations: 6396\ncpu: 109503.84615384642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88321.33413308856,
            "unit": "ns/iter",
            "extra": "iterations: 7919\ncpu: 88316.27730774187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89520.80502178527,
            "unit": "ns/iter",
            "extra": "iterations: 7806\ncpu: 89513.92518575318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88869.53996446978,
            "unit": "ns/iter",
            "extra": "iterations: 7882\ncpu: 88865.90966759603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127501.17996726836,
            "unit": "ns/iter",
            "extra": "iterations: 5501\ncpu: 127498.00036357134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 537514.3279693179,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 537484.2911877444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 434823.97504679725,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 434809.48222083476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 434551.7381841377,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 434539.2412935307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 430682.58425583807,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 430650.55350554164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 270374.81751258567,
            "unit": "ns/iter",
            "extra": "iterations: 2581\ncpu: 270358.9306470366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 426805.30116064963,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 426777.6420280977 ns\nthreads: 1"
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
        "date": 1705954932208,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7124.404140761394,
            "unit": "ns/iter",
            "extra": "iterations: 98436\ncpu: 7124.254337843879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51862.17130000159,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51858.98 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96365.01941746895,
            "unit": "ns/iter",
            "extra": "iterations: 8961\ncpu: 96361.92389242274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 140218.04999998814,
            "unit": "ns/iter",
            "extra": "iterations: 6140\ncpu: 140213.79478827363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 184447.57325384315,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 184440.56643952295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 228611.96727368698,
            "unit": "ns/iter",
            "extra": "iterations: 3789\ncpu: 228600.31670625485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 272790.52694234793,
            "unit": "ns/iter",
            "extra": "iterations: 3192\ncpu: 272781.015037594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 315773.5005444471,
            "unit": "ns/iter",
            "extra": "iterations: 2755\ncpu: 315764.3920145191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 359055.40667488123,
            "unit": "ns/iter",
            "extra": "iterations: 2427\ncpu: 359049.15533580526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6029.346212324338,
            "unit": "ns/iter",
            "extra": "iterations: 115097\ncpu: 6029.021607861185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4834.2644038383105,
            "unit": "ns/iter",
            "extra": "iterations: 145187\ncpu: 4834.217250855794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4828.54264250646,
            "unit": "ns/iter",
            "extra": "iterations: 143765\ncpu: 4828.367126908504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4817.235394517658,
            "unit": "ns/iter",
            "extra": "iterations: 145887\ncpu: 4817.098165018132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7739.381538699667,
            "unit": "ns/iter",
            "extra": "iterations: 90557\ncpu: 7739.225018496642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26496.054568568346,
            "unit": "ns/iter",
            "extra": "iterations: 31465\ncpu: 26495.33449864931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 141986.2429069091,
            "unit": "ns/iter",
            "extra": "iterations: 6027\ncpu: 141981.16807698665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104913.06056164953,
            "unit": "ns/iter",
            "extra": "iterations: 8190\ncpu: 104909.987789988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105341.64544782272,
            "unit": "ns/iter",
            "extra": "iterations: 8106\ncpu: 105336.49148778655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100744.17103709836,
            "unit": "ns/iter",
            "extra": "iterations: 8466\ncpu: 100741.94424757855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 193901.41060903246,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 193895.7214581967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1786522.0921303767,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1786451.8234165043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1394761.7198795115,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1394692.1686747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1388341.1939850294,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1388323.9097744352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1371570.0752213586,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1371500.2949852508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 764193.6302589154,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 764124.9190938498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1340614.8225108306,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1340524.6753246787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35918.33126868078,
            "unit": "ns/iter",
            "extra": "iterations: 23087\ncpu: 35915.80543162823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176947.16734944418,
            "unit": "ns/iter",
            "extra": "iterations: 4882\ncpu: 176937.23883654195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 135202.91223945515,
            "unit": "ns/iter",
            "extra": "iterations: 6381\ncpu: 135197.96270177094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 134136.48822702974,
            "unit": "ns/iter",
            "extra": "iterations: 6413\ncpu: 134133.91548417296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 129442.62563947943,
            "unit": "ns/iter",
            "extra": "iterations: 6646\ncpu: 129440.20463436641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 219917.10101523437,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 219912.36040609097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1810888.0097086125,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1810769.1262135848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1433460.9891974116,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1433381.9444444464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1419611.567073167,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1419541.0060975573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1403566.1372548284,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1403486.576168933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 775102.0933333545,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 775042.3333333305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1372128.995575076,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1372045.4277286227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6399920.399999716,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6399541.379310357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2979862.642172529,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2979701.5974440835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26853.33089746398,
            "unit": "ns/iter",
            "extra": "iterations: 30653\ncpu: 26851.985123805287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 149186.04422178812,
            "unit": "ns/iter",
            "extra": "iterations: 5789\ncpu: 149182.27673173306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108090.03884964855,
            "unit": "ns/iter",
            "extra": "iterations: 7928\ncpu: 108087.44954591311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106274.21208369086,
            "unit": "ns/iter",
            "extra": "iterations: 8077\ncpu: 106272.63835582553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101952.9859624074,
            "unit": "ns/iter",
            "extra": "iterations: 8406\ncpu: 101949.63121579836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 186733.13425426945,
            "unit": "ns/iter",
            "extra": "iterations: 4633\ncpu: 186729.95898985458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1785176.208412994,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1785081.8355640422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1394067.1805970403,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1394024.477611948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1383659.8698224786,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1383603.2544378669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1364658.6603219958,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1364611.2737920918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 741109.2133757111,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 741081.1305732442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1337043.6954021861,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1336959.0517241375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2757.775777775452,
            "unit": "ns/iter",
            "extra": "iterations: 253833\ncpu: 2757.643805179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18869.257693873496,
            "unit": "ns/iter",
            "extra": "iterations: 36815\ncpu: 18868.466657612236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14085.742061336176,
            "unit": "ns/iter",
            "extra": "iterations: 49725\ncpu: 14085.071895424937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15083.195417412458,
            "unit": "ns/iter",
            "extra": "iterations: 46393\ncpu: 15082.396051128395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11025.54409512254,
            "unit": "ns/iter",
            "extra": "iterations: 63329\ncpu: 11024.783274645117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67027.30761895442,
            "unit": "ns/iter",
            "extra": "iterations: 10487\ncpu: 67023.56250595952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 123186.27665961004,
            "unit": "ns/iter",
            "extra": "iterations: 5664\ncpu: 123177.89548022488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29905.505232582807,
            "unit": "ns/iter",
            "extra": "iterations: 23411\ncpu: 29903.827260689573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30189.09030865781,
            "unit": "ns/iter",
            "extra": "iterations: 23165\ncpu: 30186.90265486743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29762.59982993039,
            "unit": "ns/iter",
            "extra": "iterations: 23520\ncpu: 29761.190476190404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59124.04641920847,
            "unit": "ns/iter",
            "extra": "iterations: 11827\ncpu: 59120.224909106386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55762.917265034055,
            "unit": "ns/iter",
            "extra": "iterations: 12534\ncpu: 55759.95691718499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21857.612962617593,
            "unit": "ns/iter",
            "extra": "iterations: 32046\ncpu: 21856.565562004787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111275.89685315435,
            "unit": "ns/iter",
            "extra": "iterations: 6292\ncpu: 111269.35791481251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89437.63055129453,
            "unit": "ns/iter",
            "extra": "iterations: 7836\ncpu: 89433.05257784572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88952.9043489225,
            "unit": "ns/iter",
            "extra": "iterations: 7841\ncpu: 88946.47366407295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88089.74094111839,
            "unit": "ns/iter",
            "extra": "iterations: 7948\ncpu: 88084.12179164632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 129132.70247323834,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 129129.19896640921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 539620.6797536969,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 539606.8514241653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 431627.32264034584,
            "unit": "ns/iter",
            "extra": "iterations: 1621\ncpu: 431620.1110425705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 434359.5837468895,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 434349.06947890884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 423227.68542041566,
            "unit": "ns/iter",
            "extra": "iterations: 1653\ncpu: 423214.5190562661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 274181.0297689009,
            "unit": "ns/iter",
            "extra": "iterations: 2553\ncpu: 274177.00744222617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 425149.9116930756,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 425136.9671132732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22159.461536017214,
            "unit": "ns/iter",
            "extra": "iterations: 31458\ncpu: 22158.93890266392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107755.83564600997,
            "unit": "ns/iter",
            "extra": "iterations: 6486\ncpu: 107749.0903484433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88182.67919767823,
            "unit": "ns/iter",
            "extra": "iterations: 7927\ncpu: 88179.91674025424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87163.2987933701,
            "unit": "ns/iter",
            "extra": "iterations: 8039\ncpu: 87160.87821868404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87806.60735275657,
            "unit": "ns/iter",
            "extra": "iterations: 7997\ncpu: 87803.96398649453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127484.87538713578,
            "unit": "ns/iter",
            "extra": "iterations: 5489\ncpu: 127483.14811440994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 523370.6342557961,
            "unit": "ns/iter",
            "extra": "iterations: 1337\ncpu: 523335.45250561583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 428205.4204405833,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 428199.5716034271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 422834.72151897306,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 422830.01808318385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 424531.73083890305,
            "unit": "ns/iter",
            "extra": "iterations: 1657\ncpu: 424519.5534097716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 264635.606129384,
            "unit": "ns/iter",
            "extra": "iterations: 2643\ncpu: 264623.26901248435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 418295.2807645999,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 418267.5029868583 ns\nthreads: 1"
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
        "date": 1705956774667,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7194.460548610892,
            "unit": "ns/iter",
            "extra": "iterations: 97373\ncpu: 7194.10616906124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52073.71859999057,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52068.20999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96205.2037284983,
            "unit": "ns/iter",
            "extra": "iterations: 8958\ncpu: 96195.24447421297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 141220.29257927157,
            "unit": "ns/iter",
            "extra": "iterations: 6118\ncpu: 141214.17129780975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 184467.1239051278,
            "unit": "ns/iter",
            "extra": "iterations: 4681\ncpu: 184450.0747703482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 228325.28417171683,
            "unit": "ns/iter",
            "extra": "iterations: 3797\ncpu: 228309.74453515917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 271909.5671267589,
            "unit": "ns/iter",
            "extra": "iterations: 3188\ncpu: 271886.8569636134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 315157.34803036606,
            "unit": "ns/iter",
            "extra": "iterations: 2767\ncpu: 315124.8644741596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 359615.7747934244,
            "unit": "ns/iter",
            "extra": "iterations: 2420\ncpu: 359603.59504132235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6143.192256644268,
            "unit": "ns/iter",
            "extra": "iterations: 114524\ncpu: 6142.841675107392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4950.287035921879,
            "unit": "ns/iter",
            "extra": "iterations: 141167\ncpu: 4950.195867306092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4998.160597006526,
            "unit": "ns/iter",
            "extra": "iterations: 140233\ncpu: 4997.956258512622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4920.576315491431,
            "unit": "ns/iter",
            "extra": "iterations: 141164\ncpu: 4920.428012807787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7728.025624889128,
            "unit": "ns/iter",
            "extra": "iterations: 90576\ncpu: 7727.778881823004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25063.270983067214,
            "unit": "ns/iter",
            "extra": "iterations: 32419\ncpu: 25062.15490915822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 125552.81109797231,
            "unit": "ns/iter",
            "extra": "iterations: 6776\ncpu: 125538.4149940965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 96220.21844659002,
            "unit": "ns/iter",
            "extra": "iterations: 8858\ncpu: 96218.24339580034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 95500.62594047905,
            "unit": "ns/iter",
            "extra": "iterations: 8905\ncpu: 95494.90174059528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93874.01213992298,
            "unit": "ns/iter",
            "extra": "iterations: 9061\ncpu: 93873.18176801651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 195520.86524513317,
            "unit": "ns/iter",
            "extra": "iterations: 4549\ncpu: 195507.14442734633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1769495.3244275346,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1769415.076335875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1387870.580597269,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1387807.9104477612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1386287.4895210438,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1386239.9700598847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1368281.6207407692,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1368205.9259259284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 755611.96617157,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 755582.5907590751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1339024.9638206218,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1338978.871201159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34932.62125110181,
            "unit": "ns/iter",
            "extra": "iterations: 23707\ncpu: 34931.83447926775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 151375.06566902692,
            "unit": "ns/iter",
            "extra": "iterations: 5680\ncpu: 151368.71478873267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 122730.85667379762,
            "unit": "ns/iter",
            "extra": "iterations: 7005\ncpu: 122727.48037116333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 128334.1399502255,
            "unit": "ns/iter",
            "extra": "iterations: 6831\ncpu: 128325.32572097791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 120777.45081049163,
            "unit": "ns/iter",
            "extra": "iterations: 6231\ncpu: 120774.56267051876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 236094.7219485737,
            "unit": "ns/iter",
            "extra": "iterations: 3654\ncpu: 236079.8576902034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1810609.7887599291,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1810527.5193798388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1431002.7668711408,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1430906.28834355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1427703.1070335729,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1427656.1162079514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1396799.1786785207,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1396709.1591591544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 781657.9789385811,
            "unit": "ns/iter",
            "extra": "iterations: 1187\ncpu: 781611.7944397677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1375221.5724852944,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1375140.5325443773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6451434.724138004,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6450804.137930999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3051089.2516339677,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3050913.0718954224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25468.314442753366,
            "unit": "ns/iter",
            "extra": "iterations: 32203\ncpu: 25466.35717169211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 133499.44472090548,
            "unit": "ns/iter",
            "extra": "iterations: 6431\ncpu: 133494.01337272578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 100224.41294460895,
            "unit": "ns/iter",
            "extra": "iterations: 8575\ncpu: 100216.9096209907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97033.15313067716,
            "unit": "ns/iter",
            "extra": "iterations: 8816\ncpu: 97027.847096189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 95021.36967196323,
            "unit": "ns/iter",
            "extra": "iterations: 8962\ncpu: 95005.48984601669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 185518.67934668376,
            "unit": "ns/iter",
            "extra": "iterations: 4653\ncpu: 185508.72555340637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1776910.215237963,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1776755.6190476276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1389166.434328285,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1389079.8507462698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1396184.6771770332,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1396069.8198198224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1367214.4450951128,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1367124.7437774444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 756478.2894307679,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 756447.6422764236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1343462.1414142025,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1343422.2222222306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2766.978398597551,
            "unit": "ns/iter",
            "extra": "iterations: 253178\ncpu: 2766.8656044363865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18122.049829505628,
            "unit": "ns/iter",
            "extra": "iterations: 38712\ncpu: 18121.577288695902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14993.579338718551,
            "unit": "ns/iter",
            "extra": "iterations: 46667\ncpu: 14992.60933850478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14902.650612174972,
            "unit": "ns/iter",
            "extra": "iterations: 46882\ncpu: 14902.081822447946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11085.343210696077,
            "unit": "ns/iter",
            "extra": "iterations: 63276\ncpu: 11084.89948795755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 68462.63759177155,
            "unit": "ns/iter",
            "extra": "iterations: 10215\ncpu: 68461.05726872245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 123778.13478181501,
            "unit": "ns/iter",
            "extra": "iterations: 5661\ncpu: 123777.08885355959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30377.839923527266,
            "unit": "ns/iter",
            "extra": "iterations: 23014\ncpu: 30375.445381072463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30484.948208382422,
            "unit": "ns/iter",
            "extra": "iterations: 22996\ncpu: 30483.01443729355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30238.364397997822,
            "unit": "ns/iter",
            "extra": "iterations: 23156\ncpu: 30237.104854033714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 57450.902791464025,
            "unit": "ns/iter",
            "extra": "iterations: 12180\ncpu: 57450.410509031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56341.70270487528,
            "unit": "ns/iter",
            "extra": "iterations: 12459\ncpu: 56338.46215587106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21968.350588829697,
            "unit": "ns/iter",
            "extra": "iterations: 31758\ncpu: 21967.4507210781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108644.33876727267,
            "unit": "ns/iter",
            "extra": "iterations: 6441\ncpu: 108637.24576928988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88411.84658087544,
            "unit": "ns/iter",
            "extra": "iterations: 7926\ncpu: 88409.58869543119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88357.08819811912,
            "unit": "ns/iter",
            "extra": "iterations: 7914\ncpu: 88354.0813747797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87952.22178890496,
            "unit": "ns/iter",
            "extra": "iterations: 7949\ncpu: 87946.16932947455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 131889.81578948064,
            "unit": "ns/iter",
            "extra": "iterations: 5282\ncpu: 131881.59787959137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 531714.3770865452,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 531671.6995447641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 440229.0031466027,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 440205.0346129673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 439290.9719451989,
            "unit": "ns/iter",
            "extra": "iterations: 1604\ncpu: 439263.52867830364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 430189.7341538279,
            "unit": "ns/iter",
            "extra": "iterations: 1625\ncpu: 430175.5076923148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 273310.9122122363,
            "unit": "ns/iter",
            "extra": "iterations: 2563\ncpu: 273295.7861880586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 426157.27439020126,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 426139.93902439065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22541.343383589276,
            "unit": "ns/iter",
            "extra": "iterations: 31044\ncpu: 22540.835588197144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107309.82768665145,
            "unit": "ns/iter",
            "extra": "iterations: 6523\ncpu: 107306.3007818499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87436.60574642634,
            "unit": "ns/iter",
            "extra": "iterations: 8005\ncpu: 87431.85509056908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87455.4946947935,
            "unit": "ns/iter",
            "extra": "iterations: 8011\ncpu: 87453.31419298402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87580.748279745,
            "unit": "ns/iter",
            "extra": "iterations: 7993\ncpu: 87574.85299637097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127637.08441206328,
            "unit": "ns/iter",
            "extra": "iterations: 5485\ncpu: 127634.20237009956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 523464.345549658,
            "unit": "ns/iter",
            "extra": "iterations: 1337\ncpu: 523436.7988032964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 429946.2786986245,
            "unit": "ns/iter",
            "extra": "iterations: 1629\ncpu: 429926.70349908364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 424186.4778922316,
            "unit": "ns/iter",
            "extra": "iterations: 1651\ncpu: 424167.47425802384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 421756.4149577747,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 421730.2774427022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 272705.7640186989,
            "unit": "ns/iter",
            "extra": "iterations: 2568\ncpu: 272692.1339563864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 418986.10643414216,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 418975.1052315111 ns\nthreads: 1"
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
        "date": 1705958379155,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7169.7355791416485,
            "unit": "ns/iter",
            "extra": "iterations: 97515\ncpu: 7169.513408193611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53003.63339999876,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53001.53999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97875.90392714582,
            "unit": "ns/iter",
            "extra": "iterations: 8785\ncpu: 97872.79453614114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 141652.3619439879,
            "unit": "ns/iter",
            "extra": "iterations: 6070\ncpu: 141650.67545304773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 186169.8843843856,
            "unit": "ns/iter",
            "extra": "iterations: 4662\ncpu: 186167.48176748178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 229549.11858548917,
            "unit": "ns/iter",
            "extra": "iterations: 3761\ncpu: 229539.88300983785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 272925.4026506926,
            "unit": "ns/iter",
            "extra": "iterations: 3169\ncpu: 272915.9356263807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 321435.7199999749,
            "unit": "ns/iter",
            "extra": "iterations: 2725\ncpu: 321430.7889908257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 362731.3899082867,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 362719.39115929947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6045.440965257632,
            "unit": "ns/iter",
            "extra": "iterations: 115161\ncpu: 6045.286164586969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4863.3105259866115,
            "unit": "ns/iter",
            "extra": "iterations: 143901\ncpu: 4863.257378336501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4875.556728803019,
            "unit": "ns/iter",
            "extra": "iterations: 143287\ncpu: 4875.292245632887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4908.99822366504,
            "unit": "ns/iter",
            "extra": "iterations: 143554\ncpu: 4908.989648494643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7710.30463285341,
            "unit": "ns/iter",
            "extra": "iterations: 91067\ncpu: 7710.065116891952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25814.108815687414,
            "unit": "ns/iter",
            "extra": "iterations: 31512\ncpu: 25813.236227468926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 133438.98424090477,
            "unit": "ns/iter",
            "extra": "iterations: 6409\ncpu: 133435.96504914947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100568.68170574075,
            "unit": "ns/iter",
            "extra": "iterations: 8489\ncpu: 100566.98079868067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99587.78584751682,
            "unit": "ns/iter",
            "extra": "iterations: 8578\ncpu: 99585.28794590845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98526.55175995652,
            "unit": "ns/iter",
            "extra": "iterations: 8665\ncpu: 98525.11252163882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 200401.90875994836,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 200395.69965870297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1796817.8934107658,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1796756.2015503875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1385802.7200599676,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1385749.9999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1411009.364188142,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1410986.9499241272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1383316.9687498999,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1383257.7380952383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 792772.774359025,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 792732.7350427341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1358878.3850659365,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1358808.0527086384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35095.84352647337,
            "unit": "ns/iter",
            "extra": "iterations: 23627\ncpu: 35094.18038684556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156660.9394435399,
            "unit": "ns/iter",
            "extra": "iterations: 5499\ncpu: 156651.1365702854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 126554.81609194435,
            "unit": "ns/iter",
            "extra": "iterations: 6786\ncpu: 126547.86324786308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 131126.9116883166,
            "unit": "ns/iter",
            "extra": "iterations: 6545\ncpu: 131120.55003819676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 125470.77923977535,
            "unit": "ns/iter",
            "extra": "iterations: 6840\ncpu: 125463.27485380086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 223715.90355198382,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 223710.26704692686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1833734.7499999758,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1833730.3149606234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1437510.108024683,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1437470.9876543216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1434124.3312693413,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1434093.3436532519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1420108.0503818318,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1420026.4122137392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 805757.6310764129,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 805739.4965277785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1391450.8295963681,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1391408.221225714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5004797.760000202,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5004318.9999999525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3121862.4013379603,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3121648.16053512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26115.761594482352,
            "unit": "ns/iter",
            "extra": "iterations: 31308\ncpu: 26114.727865082332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 139085.15874555463,
            "unit": "ns/iter",
            "extra": "iterations: 6186\ncpu: 139073.01972195244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104621.25112764281,
            "unit": "ns/iter",
            "extra": "iterations: 8203\ncpu: 104616.42082165122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 101683.1740158403,
            "unit": "ns/iter",
            "extra": "iterations: 8459\ncpu: 101674.99704456714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 98620.00300092148,
            "unit": "ns/iter",
            "extra": "iterations: 8664\ncpu: 98616.07802400796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 190010.11332748257,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 190003.20035072463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1821424.3091977644,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1821420.5479452016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1391124.6810729555,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1391052.1609537925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1413780.282477369,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1413781.570996979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1383450.8945022167,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1383425.2600297173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 785456.3021097796,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 785447.2573839644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1358485.6948904896,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1358339.8540145997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2801.187721062341,
            "unit": "ns/iter",
            "extra": "iterations: 249647\ncpu: 2801.0086241773365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18747.784024142224,
            "unit": "ns/iter",
            "extra": "iterations: 37444\ncpu: 18746.19965815619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13773.390106857283,
            "unit": "ns/iter",
            "extra": "iterations: 50722\ncpu: 13772.41039391191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14427.473120268616,
            "unit": "ns/iter",
            "extra": "iterations: 48624\ncpu: 14426.797466271752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11080.421373086947,
            "unit": "ns/iter",
            "extra": "iterations: 63725\ncpu: 11080.25264809729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67661.08128198003,
            "unit": "ns/iter",
            "extra": "iterations: 10359\ncpu: 67660.2085143351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 126186.85271318704,
            "unit": "ns/iter",
            "extra": "iterations: 5547\ncpu: 126183.19812511365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30578.30671442599,
            "unit": "ns/iter",
            "extra": "iterations: 22891\ncpu: 30578.380149403874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30927.581986043322,
            "unit": "ns/iter",
            "extra": "iterations: 22638\ncpu: 30924.30868451292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30441.032860378666,
            "unit": "ns/iter",
            "extra": "iterations: 22976\ncpu: 30439.432451253415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62239.193970109634,
            "unit": "ns/iter",
            "extra": "iterations: 11244\ncpu: 62233.44895055141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57146.045502910754,
            "unit": "ns/iter",
            "extra": "iterations: 12219\ncpu: 57142.34389066189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21860.601968356288,
            "unit": "ns/iter",
            "extra": "iterations: 32108\ncpu: 21858.90432291039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111405.83662420065,
            "unit": "ns/iter",
            "extra": "iterations: 6280\ncpu: 111402.48407643203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89172.5885503031,
            "unit": "ns/iter",
            "extra": "iterations: 7843\ncpu: 89168.41769731052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87724.30277638133,
            "unit": "ns/iter",
            "extra": "iterations: 7996\ncpu: 87716.53326663363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86937.40268122638,
            "unit": "ns/iter",
            "extra": "iterations: 8056\ncpu: 86931.55412115165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 130335.35640978145,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 130321.08602351003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 541771.889147252,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 541760.6976744134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 431633.9275989927,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 431604.6410891066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 436445.83510302077,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 436417.30168644624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 432801.3976499674,
            "unit": "ns/iter",
            "extra": "iterations: 1617\ncpu: 432740.8163265346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 285962.6817062896,
            "unit": "ns/iter",
            "extra": "iterations: 2438\ncpu: 285944.58572600485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 428169.6554467184,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 428140.6976744176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22096.398238746955,
            "unit": "ns/iter",
            "extra": "iterations: 31682\ncpu: 22095.230730383206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108841.10905193226,
            "unit": "ns/iter",
            "extra": "iterations: 6529\ncpu: 108833.435441874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87255.1093925444,
            "unit": "ns/iter",
            "extra": "iterations: 8017\ncpu: 87248.74641387051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87302.87607530785,
            "unit": "ns/iter",
            "extra": "iterations: 8021\ncpu: 87296.72110709462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87002.84646890523,
            "unit": "ns/iter",
            "extra": "iterations: 8057\ncpu: 87002.81742584085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126859.03799999985,
            "unit": "ns/iter",
            "extra": "iterations: 5500\ncpu: 126852.45454545422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 531269.9605163609,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 531229.5368261185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 426422.853406355,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 426404.6836982941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 432937.9616811293,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 432937.70086526376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 430144.47044333845,
            "unit": "ns/iter",
            "extra": "iterations: 1624\ncpu: 430114.1009852178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 274320.8375196386,
            "unit": "ns/iter",
            "extra": "iterations: 2548\ncpu: 274305.2982731594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 424374.49696598534,
            "unit": "ns/iter",
            "extra": "iterations: 1648\ncpu: 424342.47572815575 ns\nthreads: 1"
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
        "date": 1705959833052,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7176.385539825112,
            "unit": "ns/iter",
            "extra": "iterations: 97689\ncpu: 7176.039267471261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53280.14699999812,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53278.47 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98394.83652413328,
            "unit": "ns/iter",
            "extra": "iterations: 8723\ncpu: 98391.53960793308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143052.3024650352,
            "unit": "ns/iter",
            "extra": "iterations: 6004\ncpu: 143039.67355096605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 188208.26020852267,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 188199.3701129452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 232298.93683081577,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 232288.11563169156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 277434.6041065439,
            "unit": "ns/iter",
            "extra": "iterations: 3117\ncpu: 277427.6868784087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 322550.57079483254,
            "unit": "ns/iter",
            "extra": "iterations: 2705\ncpu: 322529.75970425125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 367004.3063973063,
            "unit": "ns/iter",
            "extra": "iterations: 2376\ncpu: 366984.76430976443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6132.5068987461045,
            "unit": "ns/iter",
            "extra": "iterations: 114731\ncpu: 6132.147370806493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4906.100947081775,
            "unit": "ns/iter",
            "extra": "iterations: 142332\ncpu: 4905.784363319557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4961.5306032610915,
            "unit": "ns/iter",
            "extra": "iterations: 140851\ncpu: 4961.191613833051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5029.148853257849,
            "unit": "ns/iter",
            "extra": "iterations: 138828\ncpu: 5028.816233036558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7670.672934354622,
            "unit": "ns/iter",
            "extra": "iterations: 91049\ncpu: 7670.147942316773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25225.939437968045,
            "unit": "ns/iter",
            "extra": "iterations: 32347\ncpu: 25224.156799703233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 132545.63342067538,
            "unit": "ns/iter",
            "extra": "iterations: 6487\ncpu: 132538.09156775114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102483.73726477852,
            "unit": "ns/iter",
            "extra": "iterations: 8343\ncpu: 102478.5928323144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102359.9201720878,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 102352.77246653906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100866.11803666338,
            "unit": "ns/iter",
            "extra": "iterations: 8455\ncpu: 100863.00413956269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 206988.03602975956,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 206973.77963737783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1798272.8317214798,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1798163.6363636407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1415579.5609754967,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1415503.3536585358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1421299.7461773413,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1421208.562691131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1404788.913897272,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1404671.148036252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 761323.3939144312,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 761275.2467105262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1365222.783823583,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1365137.058823533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35604.310840994825,
            "unit": "ns/iter",
            "extra": "iterations: 23282\ncpu: 35601.636457348955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157070.94429223478,
            "unit": "ns/iter",
            "extra": "iterations: 5475\ncpu: 157062.57534246627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 129208.84599188724,
            "unit": "ns/iter",
            "extra": "iterations: 6649\ncpu: 129199.21792750816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132281.310127542,
            "unit": "ns/iter",
            "extra": "iterations: 6507\ncpu: 132273.58229598848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 128892.7326331568,
            "unit": "ns/iter",
            "extra": "iterations: 6665\ncpu: 128883.51087771932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 233239.44150231328,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 233225.53363955638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1837190.6765285197,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1837020.3155818542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1457054.5446008758,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1456956.0250391152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1460220.7708006832,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1460124.4897959214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1438646.6219135318,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1438620.216049392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 784345.0826306392,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 784311.1298482317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1398650.5610858798,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1398624.434389136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6484597.50694504,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6484339.583333338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2955644.5253163767,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2955554.430379746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24832.530009679973,
            "unit": "ns/iter",
            "extra": "iterations: 33056\ncpu: 24831.827807357222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142360.0713339912,
            "unit": "ns/iter",
            "extra": "iterations: 6042\ncpu: 142353.55842436364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107301.76494871012,
            "unit": "ns/iter",
            "extra": "iterations: 7994\ncpu: 107298.9116837622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104176.06794235653,
            "unit": "ns/iter",
            "extra": "iterations: 8257\ncpu: 104172.04795930666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101177.73400871297,
            "unit": "ns/iter",
            "extra": "iterations: 8489\ncpu: 101175.0500647903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 198583.7885321147,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 198574.97706421933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1812830.2829458609,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1812782.170542635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1413111.7465858043,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1413066.6160849717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1414363.8774885542,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1414325.5742725814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1405043.661144562,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1404989.1566265014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 756376.8805848638,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 756350.5280259989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1366353.6876831858,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1366295.1612903252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2767.853802399078,
            "unit": "ns/iter",
            "extra": "iterations: 252104\ncpu: 2767.793450322082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18506.970365084264,
            "unit": "ns/iter",
            "extra": "iterations: 37827\ncpu: 18506.1728395063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14992.283879682462,
            "unit": "ns/iter",
            "extra": "iterations: 46643\ncpu: 14992.125292112343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14389.112799868672,
            "unit": "ns/iter",
            "extra": "iterations: 48688\ncpu: 14388.253779165268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11040.77294663132,
            "unit": "ns/iter",
            "extra": "iterations: 63408\ncpu: 11040.23624779208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 72437.2610587431,
            "unit": "ns/iter",
            "extra": "iterations: 9653\ncpu: 72435.76090334648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 125550.90894368463,
            "unit": "ns/iter",
            "extra": "iterations: 5557\ncpu: 125538.09609501553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30657.05613743055,
            "unit": "ns/iter",
            "extra": "iterations: 22819\ncpu: 30656.724659275114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30650.514885782333,
            "unit": "ns/iter",
            "extra": "iterations: 22807\ncpu: 30649.169114745593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30359.0546275009,
            "unit": "ns/iter",
            "extra": "iterations: 23047\ncpu: 30358.159413372556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 57628.23908762482,
            "unit": "ns/iter",
            "extra": "iterations: 12188\ncpu: 57623.03905480797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56731.94373483876,
            "unit": "ns/iter",
            "extra": "iterations: 12370\ncpu: 56729.692805173516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22541.310466762487,
            "unit": "ns/iter",
            "extra": "iterations: 31108\ncpu: 22539.796836826397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 109630.9258099895,
            "unit": "ns/iter",
            "extra": "iterations: 6389\ncpu: 109622.49178275076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89681.25303980133,
            "unit": "ns/iter",
            "extra": "iterations: 7813\ncpu: 89677.83181876288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89749.9489547195,
            "unit": "ns/iter",
            "extra": "iterations: 7797\ncpu: 89741.77247659383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89042.96504127435,
            "unit": "ns/iter",
            "extra": "iterations: 7752\ncpu: 89037.680598554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 129481.33044278872,
            "unit": "ns/iter",
            "extra": "iterations: 5420\ncpu: 129472.14022140023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 542835.0369799335,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 542800.8474576254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 441432.67654476553,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 441394.3253467796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 438752.7098185949,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 438726.8918073724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 436918.5071650789,
            "unit": "ns/iter",
            "extra": "iterations: 1605\ncpu: 436883.9252336399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 274103.15556425106,
            "unit": "ns/iter",
            "extra": "iterations: 2552\ncpu: 274089.53761755605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 429749.4630995853,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 429720.47970480256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22662.23040999899,
            "unit": "ns/iter",
            "extra": "iterations: 31049\ncpu: 22661.631614544698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109222.96442502963,
            "unit": "ns/iter",
            "extra": "iterations: 6409\ncpu: 109215.6342643153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89425.87712135105,
            "unit": "ns/iter",
            "extra": "iterations: 7837\ncpu: 89419.8162562217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88325.29203986513,
            "unit": "ns/iter",
            "extra": "iterations: 7927\ncpu: 88320.19679576151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89395.26046452264,
            "unit": "ns/iter",
            "extra": "iterations: 7836\ncpu: 89388.13169984771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127410.29978158369,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 127407.00764470435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 532954.8199088585,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 532920.5167173304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 438633.0879397413,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 438622.36180904857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 432416.3798640792,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 432385.79369981476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 434269.82711442764,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 434243.781094524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 277696.04135484813,
            "unit": "ns/iter",
            "extra": "iterations: 2539\ncpu: 277681.0555336767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 426445.7585574556,
            "unit": "ns/iter",
            "extra": "iterations: 1636\ncpu: 426411.67481662513 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}