window.BENCHMARK_DATA = {
  "lastUpdate": 1702394204479,
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
        "date": 1702394204017,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8107.274772429984,
            "unit": "ns/iter",
            "extra": "iterations: 86457\ncpu: 8107.174664862301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57288.16829999914,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57286.61 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 105300.83073332855,
            "unit": "ns/iter",
            "extra": "iterations: 8141\ncpu: 105294.82864512954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 154059.14707990503,
            "unit": "ns/iter",
            "extra": "iterations: 5582\ncpu: 154051.37943389473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 203664.8809078293,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 203652.24613944785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 250837.4722786889,
            "unit": "ns/iter",
            "extra": "iterations: 3445\ncpu: 250819.41944847605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 298591.90755432664,
            "unit": "ns/iter",
            "extra": "iterations: 2899\ncpu: 298571.67988961685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 347270.2753392064,
            "unit": "ns/iter",
            "extra": "iterations: 2506\ncpu: 347251.71588188346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 394808.44056260603,
            "unit": "ns/iter",
            "extra": "iterations: 2204\ncpu: 394781.2613430124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6787.502724054158,
            "unit": "ns/iter",
            "extra": "iterations: 104807\ncpu: 6787.165933573145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5520.996550611013,
            "unit": "ns/iter",
            "extra": "iterations: 126979\ncpu: 5520.8924310318935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5512.148786335092,
            "unit": "ns/iter",
            "extra": "iterations: 126806\ncpu: 5511.857483084394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5494.884001129039,
            "unit": "ns/iter",
            "extra": "iterations: 127484\ncpu: 5494.588340497637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9737.702957704863,
            "unit": "ns/iter",
            "extra": "iterations: 73131\ncpu: 9737.190794601449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29892.958396008198,
            "unit": "ns/iter",
            "extra": "iterations: 27257\ncpu: 29891.756246101933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 147057.83826566336,
            "unit": "ns/iter",
            "extra": "iterations: 5812\ncpu: 147052.75292498287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116246.90394021016,
            "unit": "ns/iter",
            "extra": "iterations: 7360\ncpu: 116242.06521739112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 115989.69234936191,
            "unit": "ns/iter",
            "extra": "iterations: 7385\ncpu: 115984.82058226167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111948.66163340017,
            "unit": "ns/iter",
            "extra": "iterations: 7616\ncpu: 111946.67804621863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 375059.4280031688,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 375053.77883850544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1924850.371900703,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1924794.6280991724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1502035.3230520177,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1501967.0454545487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1516882.3311476028,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1516839.5081967227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1473674.4847999944,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1473661.7599999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 841242.670598885,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 841223.95644283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1456327.4479495466,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1456268.2965299692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37171.534192674655,
            "unit": "ns/iter",
            "extra": "iterations: 22110\ncpu: 37170.47489823607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 185506.48502354586,
            "unit": "ns/iter",
            "extra": "iterations: 4674\ncpu: 185504.06504065008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145829.4755849417,
            "unit": "ns/iter",
            "extra": "iterations: 5898\ncpu: 145825.48321464885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 144605.54794289707,
            "unit": "ns/iter",
            "extra": "iterations: 5955\ncpu: 144599.12678421495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 139584.256807443,
            "unit": "ns/iter",
            "extra": "iterations: 6133\ncpu: 139582.8958095549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 344490.1183689794,
            "unit": "ns/iter",
            "extra": "iterations: 2526\ncpu: 344487.5296912122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1965820.58105258,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1965799.3684210558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1544149.225165577,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1544108.7748344336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1555541.5415282175,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1555518.4385381967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1516483.6938110343,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1516441.2052117346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 901849.2533848983,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 901796.8085106411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1499876.504025804,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1499845.7326892042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5541775.359999973,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5541647.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3323802.252668924,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3323699.644128094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27976.923366660965,
            "unit": "ns/iter",
            "extra": "iterations: 29204\ncpu: 27976.403917271527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 145963.4792548788,
            "unit": "ns/iter",
            "extra": "iterations: 5905\ncpu: 145960.15241320926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 112443.8039010339,
            "unit": "ns/iter",
            "extra": "iterations: 7639\ncpu: 112442.24374918269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108206.30798381625,
            "unit": "ns/iter",
            "extra": "iterations: 7916\ncpu: 108202.36230419381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103250.95127245753,
            "unit": "ns/iter",
            "extra": "iterations: 8291\ncpu: 103250.10252080558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 293142.79758307105,
            "unit": "ns/iter",
            "extra": "iterations: 2979\ncpu: 293135.01174890785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1931629.4616976415,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1931583.8509316766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1495534.6255999757,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1495490.2399999923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1514536.6132686755,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1514482.5242718456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1474135.922590921,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1474066.9826224304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 830765.6861184078,
            "unit": "ns/iter",
            "extra": "iterations: 1131\ncpu: 830754.818744474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1488581.5965462083,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1488536.4207221263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3162.0502510286165,
            "unit": "ns/iter",
            "extra": "iterations: 221090\ncpu: 3161.953503098293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20690.671825161153,
            "unit": "ns/iter",
            "extra": "iterations: 33860\ncpu: 20690.48434731246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15514.130355514813,
            "unit": "ns/iter",
            "extra": "iterations: 44977\ncpu: 15514.18280454463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16700.37714557871,
            "unit": "ns/iter",
            "extra": "iterations: 42005\ncpu: 16700.076181406897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11878.89820663472,
            "unit": "ns/iter",
            "extra": "iterations: 59051\ncpu: 11878.594774008969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 100732.1014016044,
            "unit": "ns/iter",
            "extra": "iterations: 6992\ncpu: 100728.68993134936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 126453.35364094198,
            "unit": "ns/iter",
            "extra": "iterations: 5548\ncpu: 126452.00072098055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32346.57927026193,
            "unit": "ns/iter",
            "extra": "iterations: 21679\ncpu: 32346.247520641904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31909.92665694338,
            "unit": "ns/iter",
            "extra": "iterations: 21938\ncpu: 31908.911477800917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32075.227812810615,
            "unit": "ns/iter",
            "extra": "iterations: 21882\ncpu: 32074.632117722238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65058.66188391201,
            "unit": "ns/iter",
            "extra": "iterations: 10733\ncpu: 65056.59181962184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 60653.45286108704,
            "unit": "ns/iter",
            "extra": "iterations: 11604\ncpu: 60650.09479489791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23960.009583464485,
            "unit": "ns/iter",
            "extra": "iterations: 29217\ncpu: 23958.240065715287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 114255.78639034262,
            "unit": "ns/iter",
            "extra": "iterations: 6128\ncpu: 114247.92754569244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94362.87570774167,
            "unit": "ns/iter",
            "extra": "iterations: 7418\ncpu: 94356.7808034505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94185.33185364756,
            "unit": "ns/iter",
            "extra": "iterations: 7434\ncpu: 94183.56201237609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94449.76869096012,
            "unit": "ns/iter",
            "extra": "iterations: 7410\ncpu: 94446.77462888055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 165412.92069128025,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 165399.1240530309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 574837.1059113019,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 574789.8193760321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 470028.4493628806,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 469998.05499664193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 466848.3426853202,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 466840.6145624589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 460563.3017751627,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 460537.1466140646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 299538.549999986,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 299522.09401709255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 459513.13154449646,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 459493.2591622971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22942.544375982805,
            "unit": "ns/iter",
            "extra": "iterations: 30512\ncpu: 22941.34766649188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119993.02099828757,
            "unit": "ns/iter",
            "extra": "iterations: 5810\ncpu: 119985.19793459539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96715.48382189397,
            "unit": "ns/iter",
            "extra": "iterations: 7232\ncpu: 96712.73506637187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97289.00222376685,
            "unit": "ns/iter",
            "extra": "iterations: 7195\ncpu: 97285.12856150135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95185.30123757952,
            "unit": "ns/iter",
            "extra": "iterations: 7353\ncpu: 95180.36175710606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 171887.31386502617,
            "unit": "ns/iter",
            "extra": "iterations: 4075\ncpu: 171874.28220858728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 565770.9750000007,
            "unit": "ns/iter",
            "extra": "iterations: 1240\ncpu: 565737.8225806503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 464728.0976095737,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 464703.38645418175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 471429.6588156368,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 471408.075370117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 458553.3935611028,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 458542.31274639047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 303728.0330147644,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 303721.9374456959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 457931.647482013,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 457908.69849575165 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}