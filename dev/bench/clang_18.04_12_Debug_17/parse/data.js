window.BENCHMARK_DATA = {
  "lastUpdate": 1702392425646,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-12 18.04 Debug c++-17": [
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
        "date": 1702392423658,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8369.681370849037,
            "unit": "ns/iter",
            "extra": "iterations: 83627\ncpu: 8369.450057995626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60285.31639999528,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60280.15 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110900.90665973953,
            "unit": "ns/iter",
            "extra": "iterations: 7703\ncpu: 110896.48189017262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160989.77661366024,
            "unit": "ns/iter",
            "extra": "iterations: 5345\ncpu: 160987.52104770808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 211970.50549720414,
            "unit": "ns/iter",
            "extra": "iterations: 4093\ncpu: 211960.88443684333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 262938.8545069499,
            "unit": "ns/iter",
            "extra": "iterations: 3306\ncpu: 262929.28009679366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 314846.913974577,
            "unit": "ns/iter",
            "extra": "iterations: 2755\ncpu: 314829.0018148818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 364875.5979035628,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 364864.15094339655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 414802.8893129858,
            "unit": "ns/iter",
            "extra": "iterations: 2096\ncpu: 414778.2442748085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7028.09655158615,
            "unit": "ns/iter",
            "extra": "iterations: 100133\ncpu: 7027.91786923392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5833.287154428677,
            "unit": "ns/iter",
            "extra": "iterations: 120127\ncpu: 5833.01589151482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5781.759128842215,
            "unit": "ns/iter",
            "extra": "iterations: 121264\ncpu: 5781.44131811585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5799.30273421363,
            "unit": "ns/iter",
            "extra": "iterations: 121278\ncpu: 5798.972608387341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9872.368409903635,
            "unit": "ns/iter",
            "extra": "iterations: 70807\ncpu: 9871.785275467115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30716.654902699356,
            "unit": "ns/iter",
            "extra": "iterations: 26465\ncpu: 30715.359909314193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148265.78640946865,
            "unit": "ns/iter",
            "extra": "iterations: 5754\ncpu: 148259.22836287797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115798.30089821026,
            "unit": "ns/iter",
            "extra": "iterations: 7348\ncpu: 115792.03864997285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 115375.81734542554,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 115366.68921661483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110797.21872562046,
            "unit": "ns/iter",
            "extra": "iterations: 7690\ncpu: 110792.01560468148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 392948.1157232833,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 392917.77777777857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2020145.6652080046,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2020000.6564551422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1608717.2241380531,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1608620.5172413832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1578141.7792868987,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1578065.0254668898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1557299.464882948,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1557214.0468227435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 877498.2738432764,
            "unit": "ns/iter",
            "extra": "iterations: 1059\ncpu: 877423.607176581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1529303.790774356,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1529162.43822076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37928.76741722752,
            "unit": "ns/iter",
            "extra": "iterations: 21717\ncpu: 37926.56444260259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 188153.20918590805,
            "unit": "ns/iter",
            "extra": "iterations: 4594\ncpu: 188142.098389203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 148065.13694377543,
            "unit": "ns/iter",
            "extra": "iterations: 5798\ncpu: 148056.08830631248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 144819.78189786515,
            "unit": "ns/iter",
            "extra": "iterations: 5933\ncpu: 144812.28720714644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 140342.09947387164,
            "unit": "ns/iter",
            "extra": "iterations: 6082\ncpu: 140335.95856626093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 352218.19700039696,
            "unit": "ns/iter",
            "extra": "iterations: 2467\ncpu: 352201.3781921374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2045287.4517544934,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2045130.9210526429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1619471.2834782838,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1619389.5652173997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1604352.696551814,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1604244.8275862045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1607649.7499999858,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1607505.5172413818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 897737.6595950673,
            "unit": "ns/iter",
            "extra": "iterations: 1037\ncpu: 897670.2025072314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1598141.9564428083,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1598048.6388384819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5560244.110000667,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5560151.0000000335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3294503.466431401,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3294281.272084817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28058.98380497111,
            "unit": "ns/iter",
            "extra": "iterations: 29083\ncpu: 28057.191486435244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 145671.5272789015,
            "unit": "ns/iter",
            "extra": "iterations: 5902\ncpu: 145665.45238902103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109921.17775787477,
            "unit": "ns/iter",
            "extra": "iterations: 7814\ncpu: 109916.66240081936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109572.86917790829,
            "unit": "ns/iter",
            "extra": "iterations: 7858\ncpu: 109564.92746245845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105138.02888752444,
            "unit": "ns/iter",
            "extra": "iterations: 8135\ncpu: 105129.88322065191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 307423.02313166414,
            "unit": "ns/iter",
            "extra": "iterations: 2810\ncpu: 307404.8398576517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2013289.7969763337,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2013123.758099349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1590835.3049402945,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1590722.8279386656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1560366.2090299842,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1560279.26421405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1566998.5594640698,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1566946.063651592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 846701.8884859122,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 846670.5349048008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1520402.975530134,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1520360.685154978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3185.2296447905283,
            "unit": "ns/iter",
            "extra": "iterations: 219870\ncpu: 3185.176240505767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21122.821237979526,
            "unit": "ns/iter",
            "extra": "iterations: 33167\ncpu: 21122.471130943453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14804.562444472558,
            "unit": "ns/iter",
            "extra": "iterations: 47274\ncpu: 14804.317383762746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16877.924087123014,
            "unit": "ns/iter",
            "extra": "iterations: 46830\ncpu: 16876.818278880964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12066.85674689265,
            "unit": "ns/iter",
            "extra": "iterations: 58086\ncpu: 12066.482457046479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 104510.76475848662,
            "unit": "ns/iter",
            "extra": "iterations: 6708\ncpu: 104509.18306499634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 137185.1791715511,
            "unit": "ns/iter",
            "extra": "iterations: 5118\ncpu: 137183.05978898006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33094.087285093934,
            "unit": "ns/iter",
            "extra": "iterations: 21172\ncpu: 33092.68845645204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33408.1619065677,
            "unit": "ns/iter",
            "extra": "iterations: 21043\ncpu: 33407.23756118407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32892.63618000603,
            "unit": "ns/iter",
            "extra": "iterations: 21288\ncpu: 32892.10353250658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64420.240022071,
            "unit": "ns/iter",
            "extra": "iterations: 10874\ncpu: 64419.23855067145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62479.68855383931,
            "unit": "ns/iter",
            "extra": "iterations: 11209\ncpu: 62478.71353376758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24310.488142430906,
            "unit": "ns/iter",
            "extra": "iterations: 28758\ncpu: 24309.319145976642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119262.73642882206,
            "unit": "ns/iter",
            "extra": "iterations: 5858\ncpu: 119260.85694776174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 97182.08692028778,
            "unit": "ns/iter",
            "extra": "iterations: 7202\ncpu: 97177.6312135528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96769.45433190498,
            "unit": "ns/iter",
            "extra": "iterations: 7237\ncpu: 96765.24803095256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96578.40714186103,
            "unit": "ns/iter",
            "extra": "iterations: 7253\ncpu: 96575.56873018181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 178435.8488401635,
            "unit": "ns/iter",
            "extra": "iterations: 3923\ncpu: 178428.9319398439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 596131.8586030615,
            "unit": "ns/iter",
            "extra": "iterations: 1174\ncpu: 596122.5724020518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 482379.12396692735,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 482355.8539944881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 483398.38896552083,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 483379.1034482813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 480392.5199176015,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 480352.67857142806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 309375.68320783525,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 309358.44040762127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 475412.92119568365,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 475375.40760870295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23839.72598783792,
            "unit": "ns/iter",
            "extra": "iterations: 29433\ncpu: 23838.307342098757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 121835.45225257378,
            "unit": "ns/iter",
            "extra": "iterations: 5749\ncpu: 121819.81214124202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 99012.22802547233,
            "unit": "ns/iter",
            "extra": "iterations: 7065\ncpu: 99006.35527246993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 98390.20801123876,
            "unit": "ns/iter",
            "extra": "iterations: 7115\ncpu: 98387.44905129938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 97446.72387331787,
            "unit": "ns/iter",
            "extra": "iterations: 7167\ncpu: 97444.02120831706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 177859.75279472602,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 177843.3689024416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 587942.8645920987,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 587884.693019346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 491315.88061796397,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 491288.9747191018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 487553.7573017876,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 487527.3991655125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 485808.54374999186,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 485769.8611111121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 306869.224714181,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 306850.13192611706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 478179.9343365608,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 478145.7592339333 ns\nthreads: 1"
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
        "date": 1702392423658,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8369.681370849037,
            "unit": "ns/iter",
            "extra": "iterations: 83627\ncpu: 8369.450057995626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60285.31639999528,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60280.15 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110900.90665973953,
            "unit": "ns/iter",
            "extra": "iterations: 7703\ncpu: 110896.48189017262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160989.77661366024,
            "unit": "ns/iter",
            "extra": "iterations: 5345\ncpu: 160987.52104770808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 211970.50549720414,
            "unit": "ns/iter",
            "extra": "iterations: 4093\ncpu: 211960.88443684333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 262938.8545069499,
            "unit": "ns/iter",
            "extra": "iterations: 3306\ncpu: 262929.28009679366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 314846.913974577,
            "unit": "ns/iter",
            "extra": "iterations: 2755\ncpu: 314829.0018148818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 364875.5979035628,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 364864.15094339655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 414802.8893129858,
            "unit": "ns/iter",
            "extra": "iterations: 2096\ncpu: 414778.2442748085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7028.09655158615,
            "unit": "ns/iter",
            "extra": "iterations: 100133\ncpu: 7027.91786923392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5833.287154428677,
            "unit": "ns/iter",
            "extra": "iterations: 120127\ncpu: 5833.01589151482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5781.759128842215,
            "unit": "ns/iter",
            "extra": "iterations: 121264\ncpu: 5781.44131811585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5799.30273421363,
            "unit": "ns/iter",
            "extra": "iterations: 121278\ncpu: 5798.972608387341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9872.368409903635,
            "unit": "ns/iter",
            "extra": "iterations: 70807\ncpu: 9871.785275467115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30716.654902699356,
            "unit": "ns/iter",
            "extra": "iterations: 26465\ncpu: 30715.359909314193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148265.78640946865,
            "unit": "ns/iter",
            "extra": "iterations: 5754\ncpu: 148259.22836287797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115798.30089821026,
            "unit": "ns/iter",
            "extra": "iterations: 7348\ncpu: 115792.03864997285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 115375.81734542554,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 115366.68921661483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110797.21872562046,
            "unit": "ns/iter",
            "extra": "iterations: 7690\ncpu: 110792.01560468148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 392948.1157232833,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 392917.77777777857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2020145.6652080046,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2020000.6564551422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1608717.2241380531,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1608620.5172413832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1578141.7792868987,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1578065.0254668898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1557299.464882948,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1557214.0468227435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 877498.2738432764,
            "unit": "ns/iter",
            "extra": "iterations: 1059\ncpu: 877423.607176581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1529303.790774356,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1529162.43822076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37928.76741722752,
            "unit": "ns/iter",
            "extra": "iterations: 21717\ncpu: 37926.56444260259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 188153.20918590805,
            "unit": "ns/iter",
            "extra": "iterations: 4594\ncpu: 188142.098389203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 148065.13694377543,
            "unit": "ns/iter",
            "extra": "iterations: 5798\ncpu: 148056.08830631248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 144819.78189786515,
            "unit": "ns/iter",
            "extra": "iterations: 5933\ncpu: 144812.28720714644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 140342.09947387164,
            "unit": "ns/iter",
            "extra": "iterations: 6082\ncpu: 140335.95856626093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 352218.19700039696,
            "unit": "ns/iter",
            "extra": "iterations: 2467\ncpu: 352201.3781921374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2045287.4517544934,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2045130.9210526429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1619471.2834782838,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1619389.5652173997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1604352.696551814,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1604244.8275862045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1607649.7499999858,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1607505.5172413818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 897737.6595950673,
            "unit": "ns/iter",
            "extra": "iterations: 1037\ncpu: 897670.2025072314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1598141.9564428083,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1598048.6388384819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5560244.110000667,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5560151.0000000335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3294503.466431401,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3294281.272084817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28058.98380497111,
            "unit": "ns/iter",
            "extra": "iterations: 29083\ncpu: 28057.191486435244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 145671.5272789015,
            "unit": "ns/iter",
            "extra": "iterations: 5902\ncpu: 145665.45238902103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109921.17775787477,
            "unit": "ns/iter",
            "extra": "iterations: 7814\ncpu: 109916.66240081936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109572.86917790829,
            "unit": "ns/iter",
            "extra": "iterations: 7858\ncpu: 109564.92746245845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105138.02888752444,
            "unit": "ns/iter",
            "extra": "iterations: 8135\ncpu: 105129.88322065191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 307423.02313166414,
            "unit": "ns/iter",
            "extra": "iterations: 2810\ncpu: 307404.8398576517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2013289.7969763337,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2013123.758099349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1590835.3049402945,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1590722.8279386656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1560366.2090299842,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1560279.26421405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1566998.5594640698,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1566946.063651592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 846701.8884859122,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 846670.5349048008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1520402.975530134,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1520360.685154978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3185.2296447905283,
            "unit": "ns/iter",
            "extra": "iterations: 219870\ncpu: 3185.176240505767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21122.821237979526,
            "unit": "ns/iter",
            "extra": "iterations: 33167\ncpu: 21122.471130943453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14804.562444472558,
            "unit": "ns/iter",
            "extra": "iterations: 47274\ncpu: 14804.317383762746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16877.924087123014,
            "unit": "ns/iter",
            "extra": "iterations: 46830\ncpu: 16876.818278880964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12066.85674689265,
            "unit": "ns/iter",
            "extra": "iterations: 58086\ncpu: 12066.482457046479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 104510.76475848662,
            "unit": "ns/iter",
            "extra": "iterations: 6708\ncpu: 104509.18306499634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 137185.1791715511,
            "unit": "ns/iter",
            "extra": "iterations: 5118\ncpu: 137183.05978898006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33094.087285093934,
            "unit": "ns/iter",
            "extra": "iterations: 21172\ncpu: 33092.68845645204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33408.1619065677,
            "unit": "ns/iter",
            "extra": "iterations: 21043\ncpu: 33407.23756118407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32892.63618000603,
            "unit": "ns/iter",
            "extra": "iterations: 21288\ncpu: 32892.10353250658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64420.240022071,
            "unit": "ns/iter",
            "extra": "iterations: 10874\ncpu: 64419.23855067145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62479.68855383931,
            "unit": "ns/iter",
            "extra": "iterations: 11209\ncpu: 62478.71353376758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24310.488142430906,
            "unit": "ns/iter",
            "extra": "iterations: 28758\ncpu: 24309.319145976642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119262.73642882206,
            "unit": "ns/iter",
            "extra": "iterations: 5858\ncpu: 119260.85694776174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 97182.08692028778,
            "unit": "ns/iter",
            "extra": "iterations: 7202\ncpu: 97177.6312135528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96769.45433190498,
            "unit": "ns/iter",
            "extra": "iterations: 7237\ncpu: 96765.24803095256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96578.40714186103,
            "unit": "ns/iter",
            "extra": "iterations: 7253\ncpu: 96575.56873018181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 178435.8488401635,
            "unit": "ns/iter",
            "extra": "iterations: 3923\ncpu: 178428.9319398439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 596131.8586030615,
            "unit": "ns/iter",
            "extra": "iterations: 1174\ncpu: 596122.5724020518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 482379.12396692735,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 482355.8539944881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 483398.38896552083,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 483379.1034482813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 480392.5199176015,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 480352.67857142806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 309375.68320783525,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 309358.44040762127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 475412.92119568365,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 475375.40760870295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23839.72598783792,
            "unit": "ns/iter",
            "extra": "iterations: 29433\ncpu: 23838.307342098757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 121835.45225257378,
            "unit": "ns/iter",
            "extra": "iterations: 5749\ncpu: 121819.81214124202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 99012.22802547233,
            "unit": "ns/iter",
            "extra": "iterations: 7065\ncpu: 99006.35527246993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 98390.20801123876,
            "unit": "ns/iter",
            "extra": "iterations: 7115\ncpu: 98387.44905129938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 97446.72387331787,
            "unit": "ns/iter",
            "extra": "iterations: 7167\ncpu: 97444.02120831706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 177859.75279472602,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 177843.3689024416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 587942.8645920987,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 587884.693019346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 491315.88061796397,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 491288.9747191018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 487553.7573017876,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 487527.3991655125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 485808.54374999186,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 485769.8611111121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 306869.224714181,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 306850.13192611706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 478179.9343365608,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 478145.7592339333 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}