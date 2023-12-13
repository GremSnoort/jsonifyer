window.BENCHMARK_DATA = {
  "lastUpdate": 1702502574289,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-7 20.04 Debug c++-17": [
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397923049,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7637.391905899729,
            "unit": "ns/iter",
            "extra": "iterations: 91647\ncpu: 7637.360742850285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55079.21520000423,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55079.070000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101134.78670131607,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 101129.63269162634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147092.97652262088,
            "unit": "ns/iter",
            "extra": "iterations: 5878\ncpu: 147086.38992854705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 194259.11061551707,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 194251.22658340778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 239981.70524562706,
            "unit": "ns/iter",
            "extra": "iterations: 3603\ncpu: 239977.21343325006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 285601.310979627,
            "unit": "ns/iter",
            "extra": "iterations: 3042\ncpu: 285589.3162393164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 346050.4423296604,
            "unit": "ns/iter",
            "extra": "iterations: 2627\ncpu: 345992.1964217738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 378161.67678957654,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 378143.2537960957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6492.673121438531,
            "unit": "ns/iter",
            "extra": "iterations: 107569\ncpu: 6492.516431313853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5343.3960121808195,
            "unit": "ns/iter",
            "extra": "iterations: 130698\ncpu: 5343.235550658772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5374.024898917954,
            "unit": "ns/iter",
            "extra": "iterations: 129845\ncpu: 5373.687088451614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5380.9254021374745,
            "unit": "ns/iter",
            "extra": "iterations: 129682\ncpu: 5380.566308354275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8970.925581335581,
            "unit": "ns/iter",
            "extra": "iterations: 78139\ncpu: 8970.58063195075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30295.37103387288,
            "unit": "ns/iter",
            "extra": "iterations: 27073\ncpu: 30232.4677723193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148576.4896157936,
            "unit": "ns/iter",
            "extra": "iterations: 5778\ncpu: 148569.6261682243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 117058.52743193325,
            "unit": "ns/iter",
            "extra": "iterations: 7309\ncpu: 117056.4509508825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118302.7718547154,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 118301.07719928192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 114854.59019475662,
            "unit": "ns/iter",
            "extra": "iterations: 7445\ncpu: 114851.69912693098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 340944.1943724695,
            "unit": "ns/iter",
            "extra": "iterations: 2701\ncpu: 340931.9511292115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1786321.5191570802,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1786250.1915708792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1417689.609756141,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1417626.5243902397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1419381.728943314,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1419303.6753445659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1397227.1506023803,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1397147.5903614466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 798014.572782078,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 797976.8303186919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1365980.1558822985,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1365930.441176472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37840.83435272462,
            "unit": "ns/iter",
            "extra": "iterations: 21745\ncpu: 37839.37456886638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 182657.68474361688,
            "unit": "ns/iter",
            "extra": "iterations: 4739\ncpu: 182649.7995357669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 142969.26828055244,
            "unit": "ns/iter",
            "extra": "iterations: 6031\ncpu: 142964.89802686148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 145300.00913706463,
            "unit": "ns/iter",
            "extra": "iterations: 5910\ncpu: 145295.3976311336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 140703.60350761653,
            "unit": "ns/iter",
            "extra": "iterations: 6101\ncpu: 140696.49237829846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 315340.7288629634,
            "unit": "ns/iter",
            "extra": "iterations: 2744\ncpu: 315329.664723032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1836791.1775147747,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1836690.3353057248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1452717.4389857799,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1452677.4960380385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1457402.5282131457,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1457345.768025078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1432952.7251552555,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1432878.1055900592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 825341.2597517904,
            "unit": "ns/iter",
            "extra": "iterations: 1128\ncpu: 825299.8226950354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1398521.199699711,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1398504.6546546572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5097405.6600000495,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5097301.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2904357.38629282,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2904233.644859819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28782.108615416073,
            "unit": "ns/iter",
            "extra": "iterations: 28449\ncpu: 28780.923758304212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 140883.0031157771,
            "unit": "ns/iter",
            "extra": "iterations: 6098\ncpu: 140879.22269596622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110027.53562275622,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 110024.33367503894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110834.75468528274,
            "unit": "ns/iter",
            "extra": "iterations: 7737\ncpu: 110829.70143466441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 106443.75233238474,
            "unit": "ns/iter",
            "extra": "iterations: 8039\ncpu: 106439.59447692502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 280746.57077772985,
            "unit": "ns/iter",
            "extra": "iterations: 3073\ncpu: 280738.46404165274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1780132.3904762154,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1780065.3333333388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1403037.6726726661,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1402973.7237237284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1419064.511346471,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1419033.7367624873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1391532.084947804,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1391472.7272727208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 782906.5054393122,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 782881.4225941414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1356359.7569141078,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1356234.0611353696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3104.604945363127,
            "unit": "ns/iter",
            "extra": "iterations: 226313\ncpu: 3104.4867064640575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18884.57207694017,
            "unit": "ns/iter",
            "extra": "iterations: 37016\ncpu: 18883.5800734819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14423.13700579486,
            "unit": "ns/iter",
            "extra": "iterations: 48487\ncpu: 14422.878297275482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15692.924337132516,
            "unit": "ns/iter",
            "extra": "iterations: 44315\ncpu: 15692.896310504408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10701.193638871662,
            "unit": "ns/iter",
            "extra": "iterations: 65240\ncpu: 10700.869098712463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 98768.04523107168,
            "unit": "ns/iter",
            "extra": "iterations: 7119\ncpu: 98763.6606264929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122346.45146056324,
            "unit": "ns/iter",
            "extra": "iterations: 5717\ncpu: 122338.18436242755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29963.070037245372,
            "unit": "ns/iter",
            "extra": "iterations: 23359\ncpu: 29961.655036602493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30063.824964564505,
            "unit": "ns/iter",
            "extra": "iterations: 23281\ncpu: 30062.381341007633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29757.28711270196,
            "unit": "ns/iter",
            "extra": "iterations: 23496\ncpu: 29756.039325842692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60205.370485305044,
            "unit": "ns/iter",
            "extra": "iterations: 11601\ncpu: 60202.08602706612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55647.27683256713,
            "unit": "ns/iter",
            "extra": "iterations: 12578\ncpu: 55646.080457942386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22338.715884673948,
            "unit": "ns/iter",
            "extra": "iterations: 31181\ncpu: 22338.667778454856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 109268.17055233513,
            "unit": "ns/iter",
            "extra": "iterations: 6391\ncpu: 109267.04741041949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89094.26077559088,
            "unit": "ns/iter",
            "extra": "iterations: 7865\ncpu: 89094.1131595669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88436.61039616383,
            "unit": "ns/iter",
            "extra": "iterations: 7926\ncpu: 88433.78753469746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87717.68776635424,
            "unit": "ns/iter",
            "extra": "iterations: 7978\ncpu: 87718.43820506534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 156615.62469245575,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 156612.23439946352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 527266.2926093508,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 527260.1055806957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 434783.66002487764,
            "unit": "ns/iter",
            "extra": "iterations: 1606\ncpu: 434774.9688667493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 435551.81456130685,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 435554.94710641145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 428022.6096517908,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 428005.4367745879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 278927.4462579541,
            "unit": "ns/iter",
            "extra": "iterations: 2512\ncpu: 278930.1353503169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 424997.6662584271,
            "unit": "ns/iter",
            "extra": "iterations: 1633\ncpu: 424983.64972443605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22419.715612138752,
            "unit": "ns/iter",
            "extra": "iterations: 31341\ncpu: 22419.728151622203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112359.1603985891,
            "unit": "ns/iter",
            "extra": "iterations: 6222\ncpu: 112353.92156862681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92653.2786885213,
            "unit": "ns/iter",
            "extra": "iterations: 7564\ncpu: 92654.11158117384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90922.4016872126,
            "unit": "ns/iter",
            "extra": "iterations: 7705\ncpu: 90922.12848799591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90833.09901246919,
            "unit": "ns/iter",
            "extra": "iterations: 7696\ncpu: 90831.96465696476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 157638.47894618806,
            "unit": "ns/iter",
            "extra": "iterations: 4441\ncpu: 157638.39225399683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 535565.3675149746,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 535546.0329341347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 430325.9840098533,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 430302.09102091735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 428240.3677102261,
            "unit": "ns/iter",
            "extra": "iterations: 1629\ncpu: 428195.3959484414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 426168.0475320121,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 426160.0853138301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 275937.9838328167,
            "unit": "ns/iter",
            "extra": "iterations: 2536\ncpu: 275937.5000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 423919.32606061676,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 423892.9696969701 ns\nthreads: 1"
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409136681,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7581.721064627525,
            "unit": "ns/iter",
            "extra": "iterations: 92577\ncpu: 7581.445715458483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55306.18120000099,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55303.09999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102593.44896502949,
            "unit": "ns/iter",
            "extra": "iterations: 8406\ncpu: 102590.42350701882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 148885.80839668761,
            "unit": "ns/iter",
            "extra": "iterations: 5788\ncpu: 148873.13407049066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 198110.75141114875,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 198103.4996613231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 242143.61145251276,
            "unit": "ns/iter",
            "extra": "iterations: 3580\ncpu: 242140.44692737426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 289348.25765645126,
            "unit": "ns/iter",
            "extra": "iterations: 3004\ncpu: 289342.0439414112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 336813.19474497385,
            "unit": "ns/iter",
            "extra": "iterations: 2588\ncpu: 336807.032457496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 383162.32995594625,
            "unit": "ns/iter",
            "extra": "iterations: 2270\ncpu: 383154.2731277533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6289.709134377574,
            "unit": "ns/iter",
            "extra": "iterations: 111261\ncpu: 6289.512048246902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5234.042035100233,
            "unit": "ns/iter",
            "extra": "iterations: 133674\ncpu: 5233.782186513454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5248.840071526996,
            "unit": "ns/iter",
            "extra": "iterations: 133097\ncpu: 5248.6382112294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5288.4153824079785,
            "unit": "ns/iter",
            "extra": "iterations: 132437\ncpu: 5288.445071996492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8680.466919673123,
            "unit": "ns/iter",
            "extra": "iterations: 80894\ncpu: 8680.34959329493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29485.20218756737,
            "unit": "ns/iter",
            "extra": "iterations: 27702\ncpu: 29483.94339758868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 143623.92557827168,
            "unit": "ns/iter",
            "extra": "iterations: 5966\ncpu: 143617.0633590344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113615.01132880521,
            "unit": "ns/iter",
            "extra": "iterations: 7503\ncpu: 113610.23590563762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113803.20872688592,
            "unit": "ns/iter",
            "extra": "iterations: 7517\ncpu: 113799.64081415448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111833.18213958654,
            "unit": "ns/iter",
            "extra": "iterations: 7637\ncpu: 111828.4012046615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 322254.2790132014,
            "unit": "ns/iter",
            "extra": "iterations: 2878\ncpu: 322230.5767894365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1772028.6952380992,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1771955.9999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1415947.2667682918,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1415873.7804878056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1404077.7207890654,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1404003.490136571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1401912.157575766,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1401819.2424242445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 780682.371935755,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 780687.1513102289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1356392.5360825022,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1356324.5949926358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37970.52609439346,
            "unit": "ns/iter",
            "extra": "iterations: 21633\ncpu: 37969.093514538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176106.28597673064,
            "unit": "ns/iter",
            "extra": "iterations: 4899\ncpu: 176092.5086752399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 141439.5559750475,
            "unit": "ns/iter",
            "extra": "iterations: 6092\ncpu: 141435.73539067685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138227.69846897328,
            "unit": "ns/iter",
            "extra": "iterations: 6205\ncpu: 138220.25785656724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 137737.643646853,
            "unit": "ns/iter",
            "extra": "iterations: 6241\ncpu: 137726.6944399937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 300749.0713543356,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 300731.4513335642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1791856.0499041136,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1791760.0767754363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1442606.3786708568,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1442504.0185471466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1437155.3713405314,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1437042.835130973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1426080.839999993,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1425978.3076922998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 815466.7261592179,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 815424.3219597528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1382304.8736998267,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1382216.4933135218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5075997.539999548,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5075269.999999961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2929381.4514107336,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2929173.981191227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28369.12973252789,
            "unit": "ns/iter",
            "extra": "iterations: 28975\ncpu: 28367.886108714356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 135121.48005027138,
            "unit": "ns/iter",
            "extra": "iterations: 6366\ncpu: 135113.76060320524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 105558.4161757479,
            "unit": "ns/iter",
            "extra": "iterations: 8148\ncpu: 105550.94501718193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106092.39945529531,
            "unit": "ns/iter",
            "extra": "iterations: 6609\ncpu: 106084.06718111702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103370.02555756463,
            "unit": "ns/iter",
            "extra": "iterations: 8295\ncpu: 103365.79867389952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 262674.22118566674,
            "unit": "ns/iter",
            "extra": "iterations: 3323\ncpu: 262582.78663858015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1756512.9041353296,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1756482.1428571467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1398975.0855856827,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1398939.4894894846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1397380.1656716003,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1397370.5970149245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1387164.5809807682,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1387134.0267459145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 768624.5694330214,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 768596.877567791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1348110.7283235826,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1348050.5780346915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2932.54146178125,
            "unit": "ns/iter",
            "extra": "iterations: 238955\ncpu: 2932.568056747082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18933.910673731232,
            "unit": "ns/iter",
            "extra": "iterations: 36988\ncpu: 18933.091813561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14845.029240880944,
            "unit": "ns/iter",
            "extra": "iterations: 47160\ncpu: 14844.378710771774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14147.46754034583,
            "unit": "ns/iter",
            "extra": "iterations: 49446\ncpu: 14146.925939408604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11440.690094274396,
            "unit": "ns/iter",
            "extra": "iterations: 65023\ncpu: 11440.613321440154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 92507.48399894717,
            "unit": "ns/iter",
            "extra": "iterations: 7562\ncpu: 92506.61200740603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 120062.97093520238,
            "unit": "ns/iter",
            "extra": "iterations: 5849\ncpu: 120062.47221747228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29596.347914546495,
            "unit": "ns/iter",
            "extra": "iterations: 23592\ncpu: 29596.375890132247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29657.091698432465,
            "unit": "ns/iter",
            "extra": "iterations: 23610\ncpu: 29656.59042778464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29705.244728243575,
            "unit": "ns/iter",
            "extra": "iterations: 23569\ncpu: 29705.57511986094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56562.702943075,
            "unit": "ns/iter",
            "extra": "iterations: 12368\ncpu: 56561.41655886154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55209.73116412084,
            "unit": "ns/iter",
            "extra": "iterations: 12662\ncpu: 55208.2372453012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21238.454936663504,
            "unit": "ns/iter",
            "extra": "iterations: 32998\ncpu: 21237.820473968197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 105438.05666917237,
            "unit": "ns/iter",
            "extra": "iterations: 6635\ncpu: 105437.22682743036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87542.86253133786,
            "unit": "ns/iter",
            "extra": "iterations: 7980\ncpu: 87542.20551378459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87063.2696992397,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 87062.78896345885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86562.29781454543,
            "unit": "ns/iter",
            "extra": "iterations: 8099\ncpu: 86560.77293492996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 151098.6615583929,
            "unit": "ns/iter",
            "extra": "iterations: 4633\ncpu: 151090.97776818599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 515527.95952904865,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 515512.877115524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 435888.71694599144,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 435871.5083798909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 431986.57346557034,
            "unit": "ns/iter",
            "extra": "iterations: 1613\ncpu: 431980.03719776287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 434246.88764738606,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 434242.7684667914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 275548.8337273252,
            "unit": "ns/iter",
            "extra": "iterations: 2538\ncpu: 275550.47281323763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 425139.8145695422,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 425131.30644190585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22056.706460143698,
            "unit": "ns/iter",
            "extra": "iterations: 31764\ncpu: 22056.633295554613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108899.1562207616,
            "unit": "ns/iter",
            "extra": "iterations: 6414\ncpu: 108897.9731836593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90621.07907698964,
            "unit": "ns/iter",
            "extra": "iterations: 7714\ncpu: 90620.01555613181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90649.8773291914,
            "unit": "ns/iter",
            "extra": "iterations: 7728\ncpu: 90646.09213250528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89636.21564102818,
            "unit": "ns/iter",
            "extra": "iterations: 7800\ncpu: 89634.06410256443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 156102.69328574292,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 156100.06691947335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 519271.3172721134,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 519269.2364714666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 433209.0657652232,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 433212.0467117308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 435315.2366790604,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 435305.26641884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 423400.93757578265,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 423385.93939394003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 274780.31007447507,
            "unit": "ns/iter",
            "extra": "iterations: 2551\ncpu: 274777.5382203062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 424354.93227575574,
            "unit": "ns/iter",
            "extra": "iterations: 1639\ncpu: 424337.94996949256 ns\nthreads: 1"
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412522108,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7508.970943106392,
            "unit": "ns/iter",
            "extra": "iterations: 92577\ncpu: 7508.615530855396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54569.516800000885,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54569.19 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101302.99941079026,
            "unit": "ns/iter",
            "extra": "iterations: 8486\ncpu: 101297.08932359179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147026.55295923768,
            "unit": "ns/iter",
            "extra": "iterations: 5863\ncpu: 147023.11103530615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 194137.3989706867,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 194129.96196017016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 240505.39756704273,
            "unit": "ns/iter",
            "extra": "iterations: 3617\ncpu: 240497.64998617646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 285939.60915376846,
            "unit": "ns/iter",
            "extra": "iterations: 3037\ncpu: 285923.01613434305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 332091.6709874192,
            "unit": "ns/iter",
            "extra": "iterations: 2623\ncpu: 332089.4014487225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 377469.59921670007,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 377455.2654482156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6510.858611731419,
            "unit": "ns/iter",
            "extra": "iterations: 110094\ncpu: 6510.574599887359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5349.609255244551,
            "unit": "ns/iter",
            "extra": "iterations: 130996\ncpu: 5349.307612446181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5380.6745849765775,
            "unit": "ns/iter",
            "extra": "iterations: 130836\ncpu: 5380.1828242991305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5522.842332243853,
            "unit": "ns/iter",
            "extra": "iterations: 128460\ncpu: 5522.544761015102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8854.809681681125,
            "unit": "ns/iter",
            "extra": "iterations: 78726\ncpu: 8854.288291034729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29895.25299571243,
            "unit": "ns/iter",
            "extra": "iterations: 27289\ncpu: 29893.418593572464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 142887.6894938984,
            "unit": "ns/iter",
            "extra": "iterations: 5987\ncpu: 142880.4743611157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110443.6627622651,
            "unit": "ns/iter",
            "extra": "iterations: 7769\ncpu: 110439.33582185594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 111346.52656249837,
            "unit": "ns/iter",
            "extra": "iterations: 7680\ncpu: 111337.08333333307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 108894.9152650349,
            "unit": "ns/iter",
            "extra": "iterations: 7848\ncpu: 108889.37308868469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 326619.59498587355,
            "unit": "ns/iter",
            "extra": "iterations: 2832\ncpu: 326597.98728813574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1790478.1841085765,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1790395.5426356592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1430993.5471406376,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1430899.3817619786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1438734.8500772384,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1438651.1591962872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1416753.3902438628,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1416657.3170731752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 801520.9792027794,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 801469.0641247827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1379717.6983655677,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1379615.1560178327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37831.03259272723,
            "unit": "ns/iter",
            "extra": "iterations: 21784\ncpu: 37828.9753947853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 171365.72040654425,
            "unit": "ns/iter",
            "extra": "iterations: 5018\ncpu: 171354.70306895208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137160.77573823213,
            "unit": "ns/iter",
            "extra": "iterations: 6265\ncpu: 137154.58898643265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138599.88894261402,
            "unit": "ns/iter",
            "extra": "iterations: 6204\ncpu: 138591.63442940038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132862.78103448395,
            "unit": "ns/iter",
            "extra": "iterations: 6380\ncpu: 132855.43887147345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 319866.736467239,
            "unit": "ns/iter",
            "extra": "iterations: 2808\ncpu: 319849.82193732174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1976432.7224409475,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1976268.8976377961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1465069.4614173996,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1464971.1811023639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1464664.198425188,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1464549.9212598447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1455571.102964173,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1455510.6084243355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 833626.847048297,
            "unit": "ns/iter",
            "extra": "iterations: 1118\ncpu: 833582.2003577797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1411944.430955951,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1411800.910470417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5157101.510000075,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5156850.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2991568.3365386003,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2991500.320512809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28172.521316431186,
            "unit": "ns/iter",
            "extra": "iterations: 29109\ncpu: 28171.20821738975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 135830.56333807015,
            "unit": "ns/iter",
            "extra": "iterations: 6339\ncpu: 135822.1328285229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 103593.45351089448,
            "unit": "ns/iter",
            "extra": "iterations: 8260\ncpu: 103585.2542372879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 105619.7421855744,
            "unit": "ns/iter",
            "extra": "iterations: 8126\ncpu: 105617.27787349177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100982.82142856761,
            "unit": "ns/iter",
            "extra": "iterations: 8456\ncpu: 100978.85525070949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 261723.7951263529,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 261708.3935018049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1795124.5519229204,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1794994.615384605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1424009.582952857,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1423865.144596649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1429836.497702926,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1429757.1209800856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1411786.9456192055,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1411734.8942598149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 791599.3121289802,
            "unit": "ns/iter",
            "extra": "iterations: 1179\ncpu: 791561.323155219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1370640.5882352195,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1370606.4705882322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2960.4673469564036,
            "unit": "ns/iter",
            "extra": "iterations: 236272\ncpu: 2960.3545913184807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18991.81363882871,
            "unit": "ns/iter",
            "extra": "iterations: 36880\ncpu: 18990.601952277564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15701.302537676307,
            "unit": "ns/iter",
            "extra": "iterations: 46381\ncpu: 15700.319096181534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14303.663710483786,
            "unit": "ns/iter",
            "extra": "iterations: 48937\ncpu: 14303.402333612577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11235.313015699761,
            "unit": "ns/iter",
            "extra": "iterations: 62294\ncpu: 11234.871737246023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 92930.37827068052,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 92929.75162704261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115696.11649843668,
            "unit": "ns/iter",
            "extra": "iterations: 6043\ncpu: 115684.94125434392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29911.240592491733,
            "unit": "ns/iter",
            "extra": "iterations: 23359\ncpu: 29910.214478359347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30017.375793717674,
            "unit": "ns/iter",
            "extra": "iterations: 23308\ncpu: 30015.74137635143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29921.858646359866,
            "unit": "ns/iter",
            "extra": "iterations: 23374\ncpu: 29921.1089244457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60886.90792794809,
            "unit": "ns/iter",
            "extra": "iterations: 11491\ncpu: 60882.68209903422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55999.82300503135,
            "unit": "ns/iter",
            "extra": "iterations: 13910\ncpu: 55997.35442127975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22036.483097261123,
            "unit": "ns/iter",
            "extra": "iterations: 31770\ncpu: 22035.49575070816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108083.47703015886,
            "unit": "ns/iter",
            "extra": "iterations: 6465\ncpu: 108078.25212683783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88830.01865008354,
            "unit": "ns/iter",
            "extra": "iterations: 7882\ncpu: 88829.45952803797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89956.82213387541,
            "unit": "ns/iter",
            "extra": "iterations: 7798\ncpu: 89948.56373428996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89235.20592763984,
            "unit": "ns/iter",
            "extra": "iterations: 7794\ncpu: 89232.61483192275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 159167.77143507532,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 159163.67978167042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 527405.7906976404,
            "unit": "ns/iter",
            "extra": "iterations: 1333\ncpu: 527365.4163540853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 441487.70384369214,
            "unit": "ns/iter",
            "extra": "iterations: 1587\ncpu: 441466.41461877327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 436240.73953779065,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 436229.668956902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 430832.6502159066,
            "unit": "ns/iter",
            "extra": "iterations: 1621\ncpu: 430802.03578038665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 282423.411788433,
            "unit": "ns/iter",
            "extra": "iterations: 2477\ncpu: 282417.8037949118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 428340.02264381404,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 428314.93268054293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22761.60506898537,
            "unit": "ns/iter",
            "extra": "iterations: 30223\ncpu: 22760.070145253387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112885.52707931245,
            "unit": "ns/iter",
            "extra": "iterations: 6204\ncpu: 112875.61250805978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94150.23919815612,
            "unit": "ns/iter",
            "extra": "iterations: 7383\ncpu: 94145.33387511696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92967.72623473521,
            "unit": "ns/iter",
            "extra": "iterations: 7532\ncpu: 92961.09930961362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91769.77052189768,
            "unit": "ns/iter",
            "extra": "iterations: 7626\ncpu: 91765.05376344176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 157456.02876404006,
            "unit": "ns/iter",
            "extra": "iterations: 4450\ncpu: 157455.1910112384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 529516.6488319506,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 529482.9691032342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 434681.96459630434,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 434679.0062111804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 437958.6545682149,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 437917.20901126775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 433474.4950799472,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 433466.35916359443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 281370.67565392505,
            "unit": "ns/iter",
            "extra": "iterations: 2485\ncpu: 281356.0965794773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 428001.32781864284,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 427974.6323529443 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702415996358,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7791.526337535878,
            "unit": "ns/iter",
            "extra": "iterations: 89549\ncpu: 7791.526426872439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58096.95030000057,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58092.11 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 107330.1063936132,
            "unit": "ns/iter",
            "extra": "iterations: 8008\ncpu: 107326.47352647355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 155992.24646112818,
            "unit": "ns/iter",
            "extra": "iterations: 5157\ncpu: 155986.65891021912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 203468.86701128806,
            "unit": "ns/iter",
            "extra": "iterations: 4256\ncpu: 203465.0610902255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 254137.29038005654,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 254124.0498812351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 303482.06685336045,
            "unit": "ns/iter",
            "extra": "iterations: 2857\ncpu: 303481.8340917047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 351754.88097166974,
            "unit": "ns/iter",
            "extra": "iterations: 2470\ncpu: 351726.88259109313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 400791.3966789435,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 400787.7767527675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6613.285898237388,
            "unit": "ns/iter",
            "extra": "iterations: 105618\ncpu: 6612.952337669709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5470.284465507177,
            "unit": "ns/iter",
            "extra": "iterations: 128926\ncpu: 5470.241068519928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5543.265464217928,
            "unit": "ns/iter",
            "extra": "iterations: 128571\ncpu: 5543.264033102342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5417.594467718033,
            "unit": "ns/iter",
            "extra": "iterations: 128663\ncpu: 5417.463451030985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8993.378887260053,
            "unit": "ns/iter",
            "extra": "iterations: 77754\ncpu: 8993.379118759165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29983.247188111854,
            "unit": "ns/iter",
            "extra": "iterations: 27117\ncpu: 29981.82321053213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 151526.84040475747,
            "unit": "ns/iter",
            "extra": "iterations: 5633\ncpu: 151526.77081484115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118030.38698961805,
            "unit": "ns/iter",
            "extra": "iterations: 7225\ncpu: 118026.46366782014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118765.36148359039,
            "unit": "ns/iter",
            "extra": "iterations: 7010\ncpu: 118764.25106990008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 114409.52867095805,
            "unit": "ns/iter",
            "extra": "iterations: 7464\ncpu: 114402.5187566989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 325349.7453394287,
            "unit": "ns/iter",
            "extra": "iterations: 2843\ncpu: 325343.96763981745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1878795.5975610418,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1878713.4146341425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1487229.0320513006,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1487219.551282054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1502707.9207119711,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1502657.766990289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1479393.6847133199,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1479391.2420382185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 821538.8056787855,
            "unit": "ns/iter",
            "extra": "iterations: 1127\ncpu: 821497.1606033733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1439403.8374613065,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1439376.7801857532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37920.452710416896,
            "unit": "ns/iter",
            "extra": "iterations: 21897\ncpu: 37919.92510389544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 178283.62993591966,
            "unit": "ns/iter",
            "extra": "iterations: 4837\ncpu: 178279.94624767435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 142620.83012607874,
            "unit": "ns/iter",
            "extra": "iterations: 6028\ncpu: 142616.4233576643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 142713.9349053478,
            "unit": "ns/iter",
            "extra": "iterations: 6022\ncpu: 142709.6645632676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 139101.5403160123,
            "unit": "ns/iter",
            "extra": "iterations: 6139\ncpu: 139099.7230819352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 303374.8384508052,
            "unit": "ns/iter",
            "extra": "iterations: 2866\ncpu: 303368.1786461964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1924153.7933883956,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1924055.7851239638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1521854.9428103822,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1521758.4967320224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1556216.4044445124,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 1556123.777777777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1507906.6003235735,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1507812.9449838197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 846474.9299999787,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 846443.3636363627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1468286.9605678122,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1468179.0220820147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5175020.219999738,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5174535.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3053226.509803859,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3053076.4705882277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27980.11067207311,
            "unit": "ns/iter",
            "extra": "iterations: 29357\ncpu: 27978.959021698618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 140116.63508886058,
            "unit": "ns/iter",
            "extra": "iterations: 6133\ncpu: 140110.15816076891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111920.67139142012,
            "unit": "ns/iter",
            "extra": "iterations: 7690\ncpu: 111916.65799739832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 112476.65922735684,
            "unit": "ns/iter",
            "extra": "iterations: 7662\ncpu: 112472.82693813602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108225.75881756197,
            "unit": "ns/iter",
            "extra": "iterations: 7882\ncpu: 108221.25095153518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 268401.7283393386,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 268387.6353790605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1891038.5645161264,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1890977.0161290371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1475924.3581617195,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1475849.44532488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1492455.3023999578,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1492384.160000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1470494.5055118012,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1470409.1338582719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 810421.9156521831,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 810396.7826086984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1425669.0427480286,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1425642.2900763322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2952.807802057207,
            "unit": "ns/iter",
            "extra": "iterations: 237604\ncpu: 2952.752478914512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19420.94672325658,
            "unit": "ns/iter",
            "extra": "iterations: 35813\ncpu: 19420.249630022638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15247.45998346338,
            "unit": "ns/iter",
            "extra": "iterations: 45956\ncpu: 15247.458438506355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16311.390764411182,
            "unit": "ns/iter",
            "extra": "iterations: 44047\ncpu: 16310.715826276482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11289.383798783512,
            "unit": "ns/iter",
            "extra": "iterations: 61983\ncpu: 11288.934062565564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 92630.361713381,
            "unit": "ns/iter",
            "extra": "iterations: 7564\ncpu: 92624.18032786838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 127570.31013698038,
            "unit": "ns/iter",
            "extra": "iterations: 5475\ncpu: 127561.60730593685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31262.82303057302,
            "unit": "ns/iter",
            "extra": "iterations: 22405\ncpu: 31261.41932604303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31405.04378777641,
            "unit": "ns/iter",
            "extra": "iterations: 22335\ncpu: 31403.129617192644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30836.641099152373,
            "unit": "ns/iter",
            "extra": "iterations: 22672\ncpu: 30834.685956245554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62078.86644229876,
            "unit": "ns/iter",
            "extra": "iterations: 11291\ncpu: 62074.91807634443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58022.30384360575,
            "unit": "ns/iter",
            "extra": "iterations: 12072\ncpu: 58022.29953611641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22293.8465365475,
            "unit": "ns/iter",
            "extra": "iterations: 31356\ncpu: 22293.347365735517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111492.06348449002,
            "unit": "ns/iter",
            "extra": "iterations: 6285\ncpu: 111487.30310262517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90062.49801204918,
            "unit": "ns/iter",
            "extra": "iterations: 7797\ncpu: 90056.35500833686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91021.58674996573,
            "unit": "ns/iter",
            "extra": "iterations: 7683\ncpu: 91015.39763113453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91361.26018808344,
            "unit": "ns/iter",
            "extra": "iterations: 7656\ncpu: 91360.24033437864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 158019.70944419515,
            "unit": "ns/iter",
            "extra": "iterations: 4426\ncpu: 158012.08766380363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 549579.189167999,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 549558.7912087924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 452273.01937986724,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 452256.39534883806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 453281.2405966215,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 453260.63553826266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 443830.88684043003,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 443801.017164653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 284761.57357724477,
            "unit": "ns/iter",
            "extra": "iterations: 2460\ncpu: 284761.13821138535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 441423.0541902928,
            "unit": "ns/iter",
            "extra": "iterations: 1587\ncpu: 441414.9338374277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23179.59799893949,
            "unit": "ns/iter",
            "extra": "iterations: 30184\ncpu: 23179.588523721224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115936.82370468184,
            "unit": "ns/iter",
            "extra": "iterations: 6041\ncpu: 115933.17331567484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94559.28443963756,
            "unit": "ns/iter",
            "extra": "iterations: 7397\ncpu: 94556.59050966639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 94640.7905250373,
            "unit": "ns/iter",
            "extra": "iterations: 7409\ncpu: 94634.84950735506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93936.01595388044,
            "unit": "ns/iter",
            "extra": "iterations: 7459\ncpu: 93935.25941815255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 157032.81643160674,
            "unit": "ns/iter",
            "extra": "iterations: 4467\ncpu: 157027.7143496775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 550027.7999999971,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 550012.6274509788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 451614.95741937077,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 451606.32258064346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 455050.6183354779,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 455050.65019505913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 444762.010171635,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 444746.28099173703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 286852.22412386595,
            "unit": "ns/iter",
            "extra": "iterations: 2454\ncpu: 286846.98451507924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 444455.92793369933,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 444439.4770408156 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418351043,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7806.171581380522,
            "unit": "ns/iter",
            "extra": "iterations: 89561\ncpu: 7806.208059311532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57708.502000002685,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57702.96 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 106562.61379395862,
            "unit": "ns/iter",
            "extra": "iterations: 8076\ncpu: 106558.85339276868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 154201.51570634003,
            "unit": "ns/iter",
            "extra": "iterations: 5571\ncpu: 154194.23801830914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 203519.2445281363,
            "unit": "ns/iter",
            "extra": "iterations: 4249\ncpu: 203512.28524358658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 251260.7209504446,
            "unit": "ns/iter",
            "extra": "iterations: 3451\ncpu: 251243.05998261363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 300309.33977904206,
            "unit": "ns/iter",
            "extra": "iterations: 2896\ncpu: 300294.12983425404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 348089.4887999966,
            "unit": "ns/iter",
            "extra": "iterations: 2500\ncpu: 348073.60000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 398675.58944015176,
            "unit": "ns/iter",
            "extra": "iterations: 2197\ncpu: 398658.67091488413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6538.666172383427,
            "unit": "ns/iter",
            "extra": "iterations: 107226\ncpu: 6538.490664577624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5485.248781518412,
            "unit": "ns/iter",
            "extra": "iterations: 127823\ncpu: 5485.20845231296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5483.183613077783,
            "unit": "ns/iter",
            "extra": "iterations: 127736\ncpu: 5483.050980146542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5427.5059376165755,
            "unit": "ns/iter",
            "extra": "iterations: 129008\ncpu: 5427.433182438296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8919.85436843761,
            "unit": "ns/iter",
            "extra": "iterations: 78678\ncpu: 8919.799689875179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30278.53277959117,
            "unit": "ns/iter",
            "extra": "iterations: 26968\ncpu: 30277.725452388026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 147181.1957753611,
            "unit": "ns/iter",
            "extra": "iterations: 5823\ncpu: 147178.70513481015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113884.03070760252,
            "unit": "ns/iter",
            "extra": "iterations: 7490\ncpu: 113879.69292389865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 115079.91465551805,
            "unit": "ns/iter",
            "extra": "iterations: 7417\ncpu: 115077.90211675879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109842.59631014883,
            "unit": "ns/iter",
            "extra": "iterations: 7751\ncpu: 109840.29157528047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 325408.5854940233,
            "unit": "ns/iter",
            "extra": "iterations: 2854\ncpu: 325405.4660126145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1857819.5370743244,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1857776.7535070179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1475449.6751591687,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1475387.89808917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1490235.7967999706,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1490161.119999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1468685.4699367357,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1468632.4367088617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 810278.6244541267,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 810237.3799126642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1426048.4539877842,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1425977.607361964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37817.157858552586,
            "unit": "ns/iter",
            "extra": "iterations: 21817\ncpu: 37815.63459687396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 175165.73689576396,
            "unit": "ns/iter",
            "extra": "iterations: 4903\ncpu: 175156.78156230872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 139625.56287620345,
            "unit": "ns/iter",
            "extra": "iterations: 6147\ncpu: 139619.7820074832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 139729.14211382248,
            "unit": "ns/iter",
            "extra": "iterations: 6150\ncpu: 139722.53658536542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134878.49306430234,
            "unit": "ns/iter",
            "extra": "iterations: 6344\ncpu: 134873.95964691025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 301618.9123478082,
            "unit": "ns/iter",
            "extra": "iterations: 2875\ncpu: 301604.3478260873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1889222.832323178,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1889160.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1574283.0537458532,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1574197.882736157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1510678.8606157855,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1510602.431118313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1499688.0966183401,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1499597.5845410738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 847634.4918032227,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 847601.3661202173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1451996.8181819743,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1451945.2978056457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5176184.2799999155,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5175994.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3085382.2524917074,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3085218.2724252446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28228.84835882557,
            "unit": "ns/iter",
            "extra": "iterations: 29095\ncpu: 28227.640488056484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137563.5610339767,
            "unit": "ns/iter",
            "extra": "iterations: 6267\ncpu: 137558.44901866908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107354.7494989882,
            "unit": "ns/iter",
            "extra": "iterations: 7984\ncpu: 107351.11472945898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108612.0554430325,
            "unit": "ns/iter",
            "extra": "iterations: 7900\ncpu: 108606.99999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103113.32362889893,
            "unit": "ns/iter",
            "extra": "iterations: 8278\ncpu: 103108.66151244231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 257344.97453360978,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 257332.12910867718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1855361.9543650162,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1855279.1666666688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1464800.2684457516,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1464737.3626373624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1477003.7841268885,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1476938.2539682514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1454037.1170046178,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1453963.806552264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 797760.9365895878,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 797765.20994002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1410473.308623173,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1410420.272314671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2979.127337420731,
            "unit": "ns/iter",
            "extra": "iterations: 235516\ncpu: 2979.086346575206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19361.70472952424,
            "unit": "ns/iter",
            "extra": "iterations: 36177\ncpu: 19361.047074108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15179.594547032955,
            "unit": "ns/iter",
            "extra": "iterations: 46030\ncpu: 15179.682815555001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15067.607354021078,
            "unit": "ns/iter",
            "extra": "iterations: 46342\ncpu: 15067.079539079094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11389.821652839004,
            "unit": "ns/iter",
            "extra": "iterations: 61470\ncpu: 11389.520091101416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 91894.57560655758,
            "unit": "ns/iter",
            "extra": "iterations: 7625\ncpu: 91893.45573770517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 125168.49544236469,
            "unit": "ns/iter",
            "extra": "iterations: 5595\ncpu: 125165.39767649745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30669.993827971084,
            "unit": "ns/iter",
            "extra": "iterations: 22845\ncpu: 30669.89713285173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30967.604893101154,
            "unit": "ns/iter",
            "extra": "iterations: 22685\ncpu: 30967.639409301475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30497.48036529971,
            "unit": "ns/iter",
            "extra": "iterations: 22995\ncpu: 30497.368993259435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58881.02053008399,
            "unit": "ns/iter",
            "extra": "iterations: 11885\ncpu: 58879.09970551082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57293.941962455705,
            "unit": "ns/iter",
            "extra": "iterations: 12199\ncpu: 57294.19624559432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22135.7514388711,
            "unit": "ns/iter",
            "extra": "iterations: 31622\ncpu: 22134.934539244976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110425.87409276322,
            "unit": "ns/iter",
            "extra": "iterations: 6338\ncpu: 110424.91322183731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90160.10200153395,
            "unit": "ns/iter",
            "extra": "iterations: 7794\ncpu: 90159.71259943447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89910.78287186132,
            "unit": "ns/iter",
            "extra": "iterations: 7765\ncpu: 89909.56857694796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89546.001278932,
            "unit": "ns/iter",
            "extra": "iterations: 7819\ncpu: 89546.39979537205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 156122.47539524775,
            "unit": "ns/iter",
            "extra": "iterations: 4491\ncpu: 156116.811400578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 540918.6507324534,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 540916.2683114875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 443789.1337579748,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 443783.9490445864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 449570.1469833096,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 449555.8408215635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 439140.48117938096,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 439123.3375156878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 281661.46107299713,
            "unit": "ns/iter",
            "extra": "iterations: 2479\ncpu: 281660.8713190812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 434339.9987554456,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 434314.4368388337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22771.459490325626,
            "unit": "ns/iter",
            "extra": "iterations: 30647\ncpu: 22770.63007798475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113679.59658537444,
            "unit": "ns/iter",
            "extra": "iterations: 6150\ncpu: 113673.85365853734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92734.04289119443,
            "unit": "ns/iter",
            "extra": "iterations: 7554\ncpu: 92728.76621657352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 94233.89959785901,
            "unit": "ns/iter",
            "extra": "iterations: 7460\ncpu: 94231.87667560394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93158.66542404909,
            "unit": "ns/iter",
            "extra": "iterations: 7511\ncpu: 93155.33217946922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 156521.16280105463,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 156512.7564674399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 540283.8591331621,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 540262.925696597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 443490.96007603465,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 443475.79214194894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 446238.11033162044,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 446222.1301020364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 436258.5948973543,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 436242.0659614122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 282114.42626260663,
            "unit": "ns/iter",
            "extra": "iterations: 2475\ncpu: 282109.9797979755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 436745.1613507882,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 436717.2607879897 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420974597,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7631.472661659192,
            "unit": "ns/iter",
            "extra": "iterations: 91721\ncpu: 7631.35268913335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55710.282899997306,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55705.46 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102357.63685151463,
            "unit": "ns/iter",
            "extra": "iterations: 8385\ncpu: 102355.50387596896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 148683.8484482801,
            "unit": "ns/iter",
            "extra": "iterations: 5800\ncpu: 148678.70689655174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 194680.9134052985,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 194676.92307692306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 242122.81508380076,
            "unit": "ns/iter",
            "extra": "iterations: 3580\ncpu: 242102.90502793307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 287606.8971713819,
            "unit": "ns/iter",
            "extra": "iterations: 3005\ncpu: 287600.8319467552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 333989.83096427715,
            "unit": "ns/iter",
            "extra": "iterations: 2603\ncpu: 333973.49212447146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 382532.0113785423,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 382522.66958424536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6420.04802829289,
            "unit": "ns/iter",
            "extra": "iterations: 109144\ncpu: 6419.793117349566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5358.686301202145,
            "unit": "ns/iter",
            "extra": "iterations: 130756\ncpu: 5358.506684205698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5370.199938411608,
            "unit": "ns/iter",
            "extra": "iterations: 129895\ncpu: 5369.959582739907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5382.062107086939,
            "unit": "ns/iter",
            "extra": "iterations: 130436\ncpu: 5381.827102947035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8867.17596349516,
            "unit": "ns/iter",
            "extra": "iterations: 79113\ncpu: 8867.073679420573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30136.330704870637,
            "unit": "ns/iter",
            "extra": "iterations: 27012\ncpu: 30135.484229231493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 142023.2528201772,
            "unit": "ns/iter",
            "extra": "iterations: 6028\ncpu: 142022.67750497686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 108894.05365603793,
            "unit": "ns/iter",
            "extra": "iterations: 7809\ncpu: 108890.77986938154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109993.78679221422,
            "unit": "ns/iter",
            "extra": "iterations: 7753\ncpu: 109989.30736489104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 108925.50557049562,
            "unit": "ns/iter",
            "extra": "iterations: 7809\ncpu: 108918.86285055705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 315682.17524718505,
            "unit": "ns/iter",
            "extra": "iterations: 2933\ncpu: 315673.9856801908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1797419.8313953285,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1797302.3255813948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1425401.3384614747,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1425365.3846153852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1427797.4538461317,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1427709.6923076946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1412014.4505327835,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1411961.3394216094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 803758.0877497655,
            "unit": "ns/iter",
            "extra": "iterations: 1151\ncpu: 803720.5039096435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1382022.0863095585,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1381938.9880952383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38237.04131694696,
            "unit": "ns/iter",
            "extra": "iterations: 21565\ncpu: 38235.70136795736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172060.9992001537,
            "unit": "ns/iter",
            "extra": "iterations: 5001\ncpu: 172053.40931813652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134725.35865641027,
            "unit": "ns/iter",
            "extra": "iterations: 6371\ncpu: 134721.6135614506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137427.50302066846,
            "unit": "ns/iter",
            "extra": "iterations: 6290\ncpu: 137421.03338632782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132882.6453263032,
            "unit": "ns/iter",
            "extra": "iterations: 6451\ncpu: 132879.18152224435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 300255.16493415314,
            "unit": "ns/iter",
            "extra": "iterations: 2886\ncpu: 300244.5599445595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1838924.7317553526,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1838845.7593688455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1454036.4844237084,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1453920.249221178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1462721.491311231,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1462663.0331753597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1446359.2850467302,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1446272.8971962593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 842489.0653357256,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 842463.7023593484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1408635.60606056,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1408548.9393939357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5193955.940000024,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5193784.999999949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3106847.6079735546,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3106669.7674418436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28754.030827512466,
            "unit": "ns/iter",
            "extra": "iterations: 28773\ncpu: 28753.432036978902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 134602.16339193314,
            "unit": "ns/iter",
            "extra": "iterations: 5802\ncpu: 134593.4677697345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 102683.71587777011,
            "unit": "ns/iter",
            "extra": "iterations: 8345\ncpu: 102681.56980227746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103408.78708509334,
            "unit": "ns/iter",
            "extra": "iterations: 8285\ncpu: 103404.93663246813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99504.72607683073,
            "unit": "ns/iter",
            "extra": "iterations: 8590\ncpu: 99501.79278230476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 253589.7911799098,
            "unit": "ns/iter",
            "extra": "iterations: 3424\ncpu: 253578.12499999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1799307.893616988,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1799205.996131523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1414222.8003025255,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1414132.9803328272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1421217.065548839,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1421188.2621951315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1410477.2039573947,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1410393.6073059374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 796351.8117444178,
            "unit": "ns/iter",
            "extra": "iterations: 1158\ncpu: 796333.7651122606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1371296.7151335261,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1371237.982195841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3023.5029851573836,
            "unit": "ns/iter",
            "extra": "iterations: 233991\ncpu: 3023.4038916026702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18975.082011226994,
            "unit": "ns/iter",
            "extra": "iterations: 36873\ncpu: 18973.907737368707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15691.195985612208,
            "unit": "ns/iter",
            "extra": "iterations: 48376\ncpu: 15690.803290888034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14883.73375279947,
            "unit": "ns/iter",
            "extra": "iterations: 46885\ncpu: 14883.088407806274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11482.434073225462,
            "unit": "ns/iter",
            "extra": "iterations: 61045\ncpu: 11482.042755344375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 92444.95871801724,
            "unit": "ns/iter",
            "extra": "iterations: 7582\ncpu: 92442.29754682188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122861.55789472998,
            "unit": "ns/iter",
            "extra": "iterations: 5700\ncpu: 122855.36842105347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30009.82569004025,
            "unit": "ns/iter",
            "extra": "iterations: 23332\ncpu: 30009.38196468389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30061.953806564285,
            "unit": "ns/iter",
            "extra": "iterations: 23315\ncpu: 30060.7377224962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29948.180522870174,
            "unit": "ns/iter",
            "extra": "iterations: 23371\ncpu: 29947.738650464275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61201.45252860477,
            "unit": "ns/iter",
            "extra": "iterations: 11449\ncpu: 61198.27932570493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56822.69713406707,
            "unit": "ns/iter",
            "extra": "iterations: 12352\ncpu: 56820.2315414504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22627.994514767044,
            "unit": "ns/iter",
            "extra": "iterations: 30810\ncpu: 22627.322297955085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112082.56998719029,
            "unit": "ns/iter",
            "extra": "iterations: 6244\ncpu: 112077.5784753373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89616.16894743475,
            "unit": "ns/iter",
            "extra": "iterations: 7819\ncpu: 89613.79971863475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89754.37765548831,
            "unit": "ns/iter",
            "extra": "iterations: 7814\ncpu: 89747.7604299978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89397.85030628165,
            "unit": "ns/iter",
            "extra": "iterations: 7836\ncpu: 89396.50331802014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 153807.4721916895,
            "unit": "ns/iter",
            "extra": "iterations: 4549\ncpu: 153800.72543416213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 529673.7962264143,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 529660.1509434032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 438630.9855163829,
            "unit": "ns/iter",
            "extra": "iterations: 1588\ncpu: 438606.8010075592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 437633.72732955805,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 437627.39212007454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 435919.9421281896,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 435897.6353453604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 280800.4410585394,
            "unit": "ns/iter",
            "extra": "iterations: 2494\ncpu: 280793.26383319736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 429268.8590686594,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 429243.1985294148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23202.362160370874,
            "unit": "ns/iter",
            "extra": "iterations: 30180\ncpu: 23202.021206096797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115614.47957839405,
            "unit": "ns/iter",
            "extra": "iterations: 6072\ncpu: 115608.7285902487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93896.7093351267,
            "unit": "ns/iter",
            "extra": "iterations: 7445\ncpu: 93895.47347212983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 94472.80765563688,
            "unit": "ns/iter",
            "extra": "iterations: 7341\ncpu: 94468.41029832435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93678.26751336963,
            "unit": "ns/iter",
            "extra": "iterations: 7480\ncpu: 93674.94652406505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 158787.01121831228,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 158784.675790892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 528817.0294339871,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 528789.6603773497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 434866.1315136566,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 434853.5980148829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 439257.7203282632,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 439242.2979798009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 432455.94372291485,
            "unit": "ns/iter",
            "extra": "iterations: 1617\ncpu: 432441.620284474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 279655.76929225825,
            "unit": "ns/iter",
            "extra": "iterations: 2501\ncpu: 279648.78048780555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 429287.43518522434,
            "unit": "ns/iter",
            "extra": "iterations: 1620\ncpu: 429258.0864197565 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421381790,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7776.792544119028,
            "unit": "ns/iter",
            "extra": "iterations: 89701\ncpu: 7776.546526794575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55656.25579999959,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55652.79999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102168.62957680026,
            "unit": "ns/iter",
            "extra": "iterations: 8412\ncpu: 102165.35901093672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 148144.77269601202,
            "unit": "ns/iter",
            "extra": "iterations: 5816\ncpu: 148138.6863823934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 195484.61503726224,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 195477.42153985085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 241380.55713489137,
            "unit": "ns/iter",
            "extra": "iterations: 3588\ncpu: 241366.86176142682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 288077.31720252434,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 288069.83758700715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 335051.31497882376,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 335029.38005390845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 384178.4283837099,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 384155.1467367497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6472.70512666408,
            "unit": "ns/iter",
            "extra": "iterations: 108121\ncpu: 6472.567771293286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5321.919438953563,
            "unit": "ns/iter",
            "extra": "iterations: 131540\ncpu: 5321.7059449597045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5391.949792956898,
            "unit": "ns/iter",
            "extra": "iterations: 129683\ncpu: 5391.700531295556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5355.786773247149,
            "unit": "ns/iter",
            "extra": "iterations: 130856\ncpu: 5355.622974873141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8835.792046071138,
            "unit": "ns/iter",
            "extra": "iterations: 79181\ncpu: 8835.55650976876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29709.336569931915,
            "unit": "ns/iter",
            "extra": "iterations: 27498\ncpu: 29709.08793366788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 147437.32879075024,
            "unit": "ns/iter",
            "extra": "iterations: 5797\ncpu: 147434.5351043643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113544.88029004385,
            "unit": "ns/iter",
            "extra": "iterations: 7585\ncpu: 113543.8628872777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113323.52471432563,
            "unit": "ns/iter",
            "extra": "iterations: 7526\ncpu: 113321.31278235448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 112038.89365328712,
            "unit": "ns/iter",
            "extra": "iterations: 7626\ncpu: 112032.34985575646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 314269.6682480523,
            "unit": "ns/iter",
            "extra": "iterations: 2951\ncpu: 314255.8454761094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1795670.5241779436,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1795598.4526112138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1431527.285493804,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1431449.074074071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1443848.9550387613,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1443782.01550388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1427928.990783403,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1427854.377880187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 789576.0920715868,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 789540.3239556686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1380107.5185735438,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1380038.335809808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37744.19033039234,
            "unit": "ns/iter",
            "extra": "iterations: 21883\ncpu: 37742.64954530913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 178179.55230385816,
            "unit": "ns/iter",
            "extra": "iterations: 4818\ncpu: 178168.72146118683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 139130.7356749742,
            "unit": "ns/iter",
            "extra": "iterations: 6178\ncpu: 139123.43800582673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 140995.65382092545,
            "unit": "ns/iter",
            "extra": "iterations: 6098\ncpu: 140987.19252213856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 138588.2213765174,
            "unit": "ns/iter",
            "extra": "iterations: 6175\ncpu: 138582.2995951417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 303293.9965034817,
            "unit": "ns/iter",
            "extra": "iterations: 2860\ncpu: 303279.5104895108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1840839.001968496,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1840775.1968503864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1470855.2429021571,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1470745.8990536297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1487743.1932907088,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1487706.7092651788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1459975.6034482906,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1459923.5109717848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 826159.7024866941,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 826126.9982238021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1410235.5690440545,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1410137.177541724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5078121.569999894,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5077842.999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2951431.9905363116,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2951303.1545741195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27958.43534144848,
            "unit": "ns/iter",
            "extra": "iterations: 29331\ncpu: 27957.942109031308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138799.36555023838,
            "unit": "ns/iter",
            "extra": "iterations: 6270\ncpu: 138795.80542264789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106891.8668244628,
            "unit": "ns/iter",
            "extra": "iterations: 8027\ncpu: 106891.80266600249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107884.80856138459,
            "unit": "ns/iter",
            "extra": "iterations: 7966\ncpu: 107882.42530755709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 104173.35329924004,
            "unit": "ns/iter",
            "extra": "iterations: 8214\ncpu: 104171.87728268797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 250299.124747914,
            "unit": "ns/iter",
            "extra": "iterations: 3471\ncpu: 250291.58743877988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1800509.5876685155,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1800505.5876685956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1429183.2499999655,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1429146.189024398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1429336.2584097625,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1429266.3608562695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1416902.3211568147,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1416846.423135461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 777194.0566194897,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 777167.8601165734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1366755.9180088353,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1366698.0966325032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2879.6359850578856,
            "unit": "ns/iter",
            "extra": "iterations: 242534\ncpu: 2879.5909027187877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18950.05630837447,
            "unit": "ns/iter",
            "extra": "iterations: 37046\ncpu: 18949.40884306006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15005.803583705541,
            "unit": "ns/iter",
            "extra": "iterations: 46544\ncpu: 15005.788071502124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15460.387733450678,
            "unit": "ns/iter",
            "extra": "iterations: 45245\ncpu: 15459.95137584267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11309.037020899583,
            "unit": "ns/iter",
            "extra": "iterations: 61965\ncpu: 11308.895344145922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 90813.19405888836,
            "unit": "ns/iter",
            "extra": "iterations: 7709\ncpu: 90813.16642884925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122645.96712136593,
            "unit": "ns/iter",
            "extra": "iterations: 5718\ncpu: 122641.92025183553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30417.7130959099,
            "unit": "ns/iter",
            "extra": "iterations: 23053\ncpu: 30417.169132000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30397.613888887165,
            "unit": "ns/iter",
            "extra": "iterations: 23040\ncpu: 30397.005208333365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30479.06507846995,
            "unit": "ns/iter",
            "extra": "iterations: 23003\ncpu: 30479.05925314079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60572.49077522716,
            "unit": "ns/iter",
            "extra": "iterations: 11545\ncpu: 60570.06496318725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56155.2238037799,
            "unit": "ns/iter",
            "extra": "iterations: 12435\ncpu: 56155.1829513473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22838.208900078247,
            "unit": "ns/iter",
            "extra": "iterations: 30584\ncpu: 22837.74849594572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112224.99518459172,
            "unit": "ns/iter",
            "extra": "iterations: 6230\ncpu: 112223.37078651693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 92747.87632837455,
            "unit": "ns/iter",
            "extra": "iterations: 7528\ncpu: 92747.88788522757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93396.43208227235,
            "unit": "ns/iter",
            "extra": "iterations: 7487\ncpu: 93392.18645652327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93405.61155484176,
            "unit": "ns/iter",
            "extra": "iterations: 7512\ncpu: 93404.48615548504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 159731.66377538652,
            "unit": "ns/iter",
            "extra": "iterations: 4381\ncpu: 159723.87582743782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 526811.5157894626,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 526804.7368420996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 435686.35153796297,
            "unit": "ns/iter",
            "extra": "iterations: 1593\ncpu: 435676.02008788375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 438799.185857323,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 438798.6858573283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 440863.24025156983,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 440851.8238993714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 279237.1889198879,
            "unit": "ns/iter",
            "extra": "iterations: 2509\ncpu: 279236.7477082487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 428562.04589961725,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 428557.4051407529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23654.84093139846,
            "unit": "ns/iter",
            "extra": "iterations: 29547\ncpu: 23654.810979117887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117220.5265886289,
            "unit": "ns/iter",
            "extra": "iterations: 5980\ncpu: 117217.89297658652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96157.97622320455,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96156.65200659646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95924.35149938194,
            "unit": "ns/iter",
            "extra": "iterations: 7303\ncpu: 95921.1283034374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94192.20261349792,
            "unit": "ns/iter",
            "extra": "iterations: 7423\ncpu: 94192.21339081257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 163010.6922896602,
            "unit": "ns/iter",
            "extra": "iterations: 4267\ncpu: 163010.4523084155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 532002.1642694833,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 531990.6131718344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 434750.5668116938,
            "unit": "ns/iter",
            "extra": "iterations: 1609\ncpu: 434750.0310751981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 437347.6844751577,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 437347.58013827633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 433522.7234568009,
            "unit": "ns/iter",
            "extra": "iterations: 1620\ncpu: 433513.0246913559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 280784.93832598504,
            "unit": "ns/iter",
            "extra": "iterations: 2497\ncpu: 280781.09731678193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 430104.3169230769,
            "unit": "ns/iter",
            "extra": "iterations: 1625\ncpu: 430087.4461538429 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422465087,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7570.553678061478,
            "unit": "ns/iter",
            "extra": "iterations: 92440\ncpu: 7570.345088706188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54771.824800002374,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54769.58999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100772.13994374542,
            "unit": "ns/iter",
            "extra": "iterations: 8532\ncpu: 100768.04969526488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147587.39996594843,
            "unit": "ns/iter",
            "extra": "iterations: 5873\ncpu: 147579.99318917078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193034.9367060477,
            "unit": "ns/iter",
            "extra": "iterations: 4487\ncpu: 193031.37954089587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 238202.29003021427,
            "unit": "ns/iter",
            "extra": "iterations: 3641\ncpu: 238200.82394946445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 283842.4370904333,
            "unit": "ns/iter",
            "extra": "iterations: 3052\ncpu: 283835.9108781128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 330254.9405528164,
            "unit": "ns/iter",
            "extra": "iterations: 2641\ncpu: 330242.0295342674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 374681.88610869757,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 374662.9421915441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6388.221228018956,
            "unit": "ns/iter",
            "extra": "iterations: 109412\ncpu: 6387.785617665333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5295.659588958231,
            "unit": "ns/iter",
            "extra": "iterations: 132152\ncpu: 5295.515769719708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5256.179678543511,
            "unit": "ns/iter",
            "extra": "iterations: 133455\ncpu: 5255.87950994717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5351.1237433742335,
            "unit": "ns/iter",
            "extra": "iterations: 131304\ncpu: 5350.900201060144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8804.064941277036,
            "unit": "ns/iter",
            "extra": "iterations: 79441\ncpu: 8803.605191274019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30902.89612895956,
            "unit": "ns/iter",
            "extra": "iterations: 26427\ncpu: 30901.506035493996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 147977.77984177085,
            "unit": "ns/iter",
            "extra": "iterations: 5814\ncpu: 147969.62504299966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 114152.09990675186,
            "unit": "ns/iter",
            "extra": "iterations: 7507\ncpu: 114144.47848674576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 112680.02411702937,
            "unit": "ns/iter",
            "extra": "iterations: 7588\ncpu: 112674.55192409054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 107058.37816714664,
            "unit": "ns/iter",
            "extra": "iterations: 7933\ncpu: 107052.0610109667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 316415.4806517324,
            "unit": "ns/iter",
            "extra": "iterations: 2946\ncpu: 316395.3496266134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1793588.0715667938,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1793496.7117988402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1421532.8315466822,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1421457.7335375205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1437250.8809891792,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1437182.0710973719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1430590.2407407262,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1430486.7283950627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 777632.3204047227,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 777596.5430016866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1381445.394932905,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1381357.2280178857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38282.37749563212,
            "unit": "ns/iter",
            "extra": "iterations: 21738\ncpu: 38280.03956205719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 179230.5451143513,
            "unit": "ns/iter",
            "extra": "iterations: 4810\ncpu: 179227.77546777553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137496.84740882664,
            "unit": "ns/iter",
            "extra": "iterations: 6252\ncpu: 137494.24184261047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 139263.20191371266,
            "unit": "ns/iter",
            "extra": "iterations: 6166\ncpu: 139260.9957833278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 135837.41835763826,
            "unit": "ns/iter",
            "extra": "iterations: 6308\ncpu: 135836.68357641096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 295544.3459183634,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 295535.3401360534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1833174.601178767,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1833128.6836935135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1461125.5494505526,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1461095.2904238657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1463668.2259083644,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1463621.6429699885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1460518.8888888701,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1460490.7668231619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 808637.6040034861,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 808598.6074847727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1411410.6707132237,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1411325.189681336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5011967.789999971,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5011627.999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2997152.9297124045,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2996934.1853035092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28382.7749186135,
            "unit": "ns/iter",
            "extra": "iterations: 28874\ncpu: 28380.480709288786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 135167.3174478753,
            "unit": "ns/iter",
            "extra": "iterations: 6379\ncpu: 135164.9474839322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104551.62693857218,
            "unit": "ns/iter",
            "extra": "iterations: 8189\ncpu: 104548.28428379464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106300.15996535799,
            "unit": "ns/iter",
            "extra": "iterations: 8083\ncpu: 106295.01422739043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100700.75830279906,
            "unit": "ns/iter",
            "extra": "iterations: 8461\ncpu: 100700.10637040486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 250915.47636888045,
            "unit": "ns/iter",
            "extra": "iterations: 3470\ncpu: 250905.85014409153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1798679.1596154734,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1798560.0000000065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1412562.2567975037,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1412477.6435045353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1430000.127300601,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1429871.3190184094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1420329.5350609284,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1420248.7804878077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 767843.4673823171,
            "unit": "ns/iter",
            "extra": "iterations: 1211\ncpu: 767782.5763831537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1367273.5307917902,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1367203.6656891524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2953.2520861912312,
            "unit": "ns/iter",
            "extra": "iterations: 236915\ncpu: 2953.105122090199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19085.38594912872,
            "unit": "ns/iter",
            "extra": "iterations: 36681\ncpu: 19084.934979962385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14283.107195331373,
            "unit": "ns/iter",
            "extra": "iterations: 49004\ncpu: 14282.79528201781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14807.58356436895,
            "unit": "ns/iter",
            "extra": "iterations: 47251\ncpu: 14807.212545766224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11286.349080772874,
            "unit": "ns/iter",
            "extra": "iterations: 62063\ncpu: 11286.133445047733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 91900.25416393061,
            "unit": "ns/iter",
            "extra": "iterations: 7625\ncpu: 91897.12786885277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122586.69845992181,
            "unit": "ns/iter",
            "extra": "iterations: 5714\ncpu: 122584.0567028361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29934.130343797566,
            "unit": "ns/iter",
            "extra": "iterations: 23415\ncpu: 29932.560324578484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29944.583290511255,
            "unit": "ns/iter",
            "extra": "iterations: 23352\ncpu: 29943.86776293269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30103.87573557972,
            "unit": "ns/iter",
            "extra": "iterations: 23281\ncpu: 30102.985266955744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59513.12473374704,
            "unit": "ns/iter",
            "extra": "iterations: 11737\ncpu: 59511.67248871121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55761.4387194361,
            "unit": "ns/iter",
            "extra": "iterations: 12557\ncpu: 55759.902843036136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21922.12769149087,
            "unit": "ns/iter",
            "extra": "iterations: 31999\ncpu: 21921.681927560057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110113.19861504412,
            "unit": "ns/iter",
            "extra": "iterations: 6354\ncpu: 110112.55901794069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88811.57920792441,
            "unit": "ns/iter",
            "extra": "iterations: 7878\ncpu: 88811.10687991892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90057.44774011377,
            "unit": "ns/iter",
            "extra": "iterations: 7788\ncpu: 90055.84232152007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90015.20969400633,
            "unit": "ns/iter",
            "extra": "iterations: 7778\ncpu: 90008.47261506875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 157535.89743590035,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 157533.08591992845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 525888.057634737,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 525885.1796407289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 431648.07129573566,
            "unit": "ns/iter",
            "extra": "iterations: 1613\ncpu: 431640.4215747049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 437912.51972445316,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 437866.9380087689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 430078.5236341332,
            "unit": "ns/iter",
            "extra": "iterations: 1629\ncpu: 430057.02885205287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 273334.2040577456,
            "unit": "ns/iter",
            "extra": "iterations: 2563\ncpu: 273307.3351541159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 424586.97575756506,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 424565.7575757612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22326.696279084532,
            "unit": "ns/iter",
            "extra": "iterations: 31417\ncpu: 22324.43263201433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112688.11818620574,
            "unit": "ns/iter",
            "extra": "iterations: 6219\ncpu: 112682.61778420975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92305.6856879309,
            "unit": "ns/iter",
            "extra": "iterations: 7588\ncpu: 92294.75487612153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92533.75927889589,
            "unit": "ns/iter",
            "extra": "iterations: 7544\ncpu: 92531.97242842155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91956.17908290708,
            "unit": "ns/iter",
            "extra": "iterations: 7611\ncpu: 91955.77453685406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 156389.90026773675,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 156371.21820615782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 525103.8211077984,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 525077.3952095862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 432309.99630085594,
            "unit": "ns/iter",
            "extra": "iterations: 1622\ncpu: 432265.7213316854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 434728.2356965085,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 434726.11940298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 426459.7789281305,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 426451.15712545364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 275330.1273084629,
            "unit": "ns/iter",
            "extra": "iterations: 2545\ncpu: 275320.6286836904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 424632.21611723484,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 424604.3956043898 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453379980,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7777.394004330556,
            "unit": "ns/iter",
            "extra": "iterations: 90065\ncpu: 7777.097651695997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57091.21130000199,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57090.56 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 105359.59777015993,
            "unit": "ns/iter",
            "extra": "iterations: 8162\ncpu: 105354.5577064445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160712.49547310392,
            "unit": "ns/iter",
            "extra": "iterations: 5633\ncpu: 160707.72235043492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 201074.0062761441,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 201067.57322175728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 248666.47229399922,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 248664.7143267298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 295740.81762296415,
            "unit": "ns/iter",
            "extra": "iterations: 2928\ncpu: 295730.6010928963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 343930.11427441274,
            "unit": "ns/iter",
            "extra": "iterations: 2529\ncpu: 343922.14313958073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 392347.0126239777,
            "unit": "ns/iter",
            "extra": "iterations: 2218\ncpu: 392333.22813345364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6519.556687648371,
            "unit": "ns/iter",
            "extra": "iterations: 107078\ncpu: 6519.31022245467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5443.004075030121,
            "unit": "ns/iter",
            "extra": "iterations: 128588\ncpu: 5442.693719476159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5439.281797470021,
            "unit": "ns/iter",
            "extra": "iterations: 128603\ncpu: 5439.203595561541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5407.981428582552,
            "unit": "ns/iter",
            "extra": "iterations: 129877\ncpu: 5407.993717132355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8847.403094904754,
            "unit": "ns/iter",
            "extra": "iterations: 79227\ncpu: 8846.957476617825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30066.144839159388,
            "unit": "ns/iter",
            "extra": "iterations: 24434\ncpu: 30065.277891462778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 155101.60353853888,
            "unit": "ns/iter",
            "extra": "iterations: 5539\ncpu: 155096.71420834083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 117368.56864627766,
            "unit": "ns/iter",
            "extra": "iterations: 7291\ncpu: 117367.32958441917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 117535.43487828154,
            "unit": "ns/iter",
            "extra": "iterations: 7271\ncpu: 117531.6462659883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 118376.55282356338,
            "unit": "ns/iter",
            "extra": "iterations: 7402\ncpu: 118370.48095109421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 324037.7024390111,
            "unit": "ns/iter",
            "extra": "iterations: 2870\ncpu: 324029.7909407671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1843726.060728804,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1843707.4898785395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1466670.799368043,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1466610.5845181686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1483669.575079944,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1483619.169329078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1476128.2969983965,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1476129.5418641341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 824257.884615342,
            "unit": "ns/iter",
            "extra": "iterations: 1118\ncpu: 824246.0644007152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1423804.4165390204,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1423769.8315467103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37620.58660004568,
            "unit": "ns/iter",
            "extra": "iterations: 22015\ncpu: 37619.40495116962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 182470.83707152898,
            "unit": "ns/iter",
            "extra": "iterations: 4726\ncpu: 182467.64705882338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 143161.93893257575,
            "unit": "ns/iter",
            "extra": "iterations: 5977\ncpu: 143156.26568512616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 144509.67945482038,
            "unit": "ns/iter",
            "extra": "iterations: 5943\ncpu: 144505.4854450613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 139272.75093358784,
            "unit": "ns/iter",
            "extra": "iterations: 6159\ncpu: 139268.53385289817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 300632.5024322399,
            "unit": "ns/iter",
            "extra": "iterations: 2878\ncpu: 300613.481584434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1883354.1636363498,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1883299.3939393845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1503923.6016128422,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1503831.6129032264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1513148.706168804,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1513114.935064934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1498437.3775999302,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1498377.599999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 861877.7922078209,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 861859.6474953592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1456807.025236597,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1456701.735015773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5234497.349999856,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5234214.000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3144153.486486493,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3144012.8378378255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28241.832524856978,
            "unit": "ns/iter",
            "extra": "iterations: 29067\ncpu: 28241.153197784566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143827.3486820164,
            "unit": "ns/iter",
            "extra": "iterations: 5994\ncpu: 143814.9983316648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 113346.99705694581,
            "unit": "ns/iter",
            "extra": "iterations: 7815\ncpu: 113343.37811900201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110981.66085271693,
            "unit": "ns/iter",
            "extra": "iterations: 7740\ncpu: 110977.9457364348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105561.39795035844,
            "unit": "ns/iter",
            "extra": "iterations: 8099\ncpu: 105558.98259044292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 255380.48138374518,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 255364.64379947347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1845117.3438735157,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1845075.296442675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1462241.607476657,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1462167.1339563883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1483982.5007999935,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1483950.880000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1466140.2704401794,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1466066.352201259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 818865.4350877451,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 818847.7192982453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1418454.1656533414,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1418391.6413373877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2981.9561149305596,
            "unit": "ns/iter",
            "extra": "iterations: 235342\ncpu: 2981.837496069526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19545.617622450496,
            "unit": "ns/iter",
            "extra": "iterations: 35852\ncpu: 19544.379671984836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16493.712826073403,
            "unit": "ns/iter",
            "extra": "iterations: 47957\ncpu: 16493.298162937594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15683.273769535745,
            "unit": "ns/iter",
            "extra": "iterations: 44658\ncpu: 15682.500335886156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11443.844233444519,
            "unit": "ns/iter",
            "extra": "iterations: 61085\ncpu: 11443.501677989685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 93091.24717306547,
            "unit": "ns/iter",
            "extra": "iterations: 7517\ncpu: 93086.60369828354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121332.29274207633,
            "unit": "ns/iter",
            "extra": "iterations: 5773\ncpu: 121329.23956348482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30948.827768948973,
            "unit": "ns/iter",
            "extra": "iterations: 22644\ncpu: 30948.53824412648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30913.005082198888,
            "unit": "ns/iter",
            "extra": "iterations: 22628\ncpu: 30912.493371044777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30901.22738332445,
            "unit": "ns/iter",
            "extra": "iterations: 22605\ncpu: 30900.71665560716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63382.004267297154,
            "unit": "ns/iter",
            "extra": "iterations: 11014\ncpu: 63380.079898310745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58289.79845219038,
            "unit": "ns/iter",
            "extra": "iterations: 12017\ncpu: 58288.45801780837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22304.60287279315,
            "unit": "ns/iter",
            "extra": "iterations: 31398\ncpu: 22304.000254793402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112976.18556199921,
            "unit": "ns/iter",
            "extra": "iterations: 6192\ncpu: 112974.12790697782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 91016.45860948357,
            "unit": "ns/iter",
            "extra": "iterations: 7695\ncpu: 91013.9701104624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 98235.61615627503,
            "unit": "ns/iter",
            "extra": "iterations: 7576\ncpu: 98233.96251319922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92700.69524943919,
            "unit": "ns/iter",
            "extra": "iterations: 7557\ncpu: 92700.91306073822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 160333.70059606418,
            "unit": "ns/iter",
            "extra": "iterations: 4362\ncpu: 160333.92939018653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 544547.8472867671,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 544534.5736434174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 446899.8679486848,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 446893.0128205091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 454389.27608552837,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 454390.47310433676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 450867.3373879115,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 450851.2804097305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 290969.6475238956,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 290960.6741573043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 441952.1279949298,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 441934.5523329134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22868.079968664704,
            "unit": "ns/iter",
            "extra": "iterations: 30637\ncpu: 22867.539249926413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 116191.51501500899,
            "unit": "ns/iter",
            "extra": "iterations: 5994\ncpu: 116184.28428428396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94785.60636425503,
            "unit": "ns/iter",
            "extra": "iterations: 7385\ncpu: 94785.97156398027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93604.90577384844,
            "unit": "ns/iter",
            "extra": "iterations: 7482\ncpu: 93598.55653568474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93200.29481540465,
            "unit": "ns/iter",
            "extra": "iterations: 7503\ncpu: 93197.4543515919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 157226.9316450057,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 157220.52891080076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 545117.161240352,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 545096.124031011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 446548.41443167883,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 446516.66666666593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 448727.74358974514,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 448708.1410256421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 444385.795555559,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 444364.38095238095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 288164.7476327925,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 288152.49073693104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 439717.80340266234,
            "unit": "ns/iter",
            "extra": "iterations: 1587\ncpu: 439707.6874606157 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702479261690,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8115.39427159518,
            "unit": "ns/iter",
            "extra": "iterations: 86202\ncpu: 8114.960209739913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59852.97089999903,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59848.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110669.20200333887,
            "unit": "ns/iter",
            "extra": "iterations: 7787\ncpu: 110660.56247592141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160606.22636954274,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 160595.35747446615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 211238.618084326,
            "unit": "ns/iter",
            "extra": "iterations: 4103\ncpu: 211224.44552766276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 261641.1470765643,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 261622.1518987342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 310402.68991415645,
            "unit": "ns/iter",
            "extra": "iterations: 2796\ncpu: 310377.89699570823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 362001.7093555131,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 361987.56756756746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 411921.1393365018,
            "unit": "ns/iter",
            "extra": "iterations: 2110\ncpu: 411907.81990521366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6610.2350406349515,
            "unit": "ns/iter",
            "extra": "iterations: 105820\ncpu: 6610.011340011342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5434.202042735801,
            "unit": "ns/iter",
            "extra": "iterations: 128651\ncpu: 5433.718354307383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5439.592664646052,
            "unit": "ns/iter",
            "extra": "iterations: 129019\ncpu: 5439.322115347347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5522.146994651674,
            "unit": "ns/iter",
            "extra": "iterations: 126957\ncpu: 5521.712863410454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9018.267719484218,
            "unit": "ns/iter",
            "extra": "iterations: 77443\ncpu: 9017.631031855699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30158.06105037617,
            "unit": "ns/iter",
            "extra": "iterations: 27076\ncpu: 30155.92775890089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 142672.0816258569,
            "unit": "ns/iter",
            "extra": "iterations: 6003\ncpu: 142662.41879060466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 109638.02353092747,
            "unit": "ns/iter",
            "extra": "iterations: 7777\ncpu: 109631.09168059663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 110762.70484122446,
            "unit": "ns/iter",
            "extra": "iterations: 7684\ncpu: 110756.7282665277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 108391.35908623844,
            "unit": "ns/iter",
            "extra": "iterations: 7792\ncpu: 108387.25616016472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 330291.3339298461,
            "unit": "ns/iter",
            "extra": "iterations: 2794\ncpu: 330259.6635647821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1855675.614000006,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1855554.2000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1461302.4929134531,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1461213.7007874013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1472703.4619047644,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1472611.5873015898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1456369.0235109713,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1456348.1191222586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 796621.5756013688,
            "unit": "ns/iter",
            "extra": "iterations: 1164\ncpu: 796626.5463917522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1414579.4512195317,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1414558.3841463402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38199.28152695943,
            "unit": "ns/iter",
            "extra": "iterations: 21664\ncpu: 38198.84601181685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 169497.72552897196,
            "unit": "ns/iter",
            "extra": "iterations: 5057\ncpu: 169497.50840419193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136031.83790246243,
            "unit": "ns/iter",
            "extra": "iterations: 6274\ncpu: 136032.75422378056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137847.83434992345,
            "unit": "ns/iter",
            "extra": "iterations: 6230\ncpu: 137846.27608346732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 135093.16095192972,
            "unit": "ns/iter",
            "extra": "iterations: 6387\ncpu: 135092.5473618291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 324711.9406841424,
            "unit": "ns/iter",
            "extra": "iterations: 2748\ncpu: 324708.87918486126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1895974.3617886293,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1895960.7723577225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1497343.256410306,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1497318.7500000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1509866.037337624,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1509832.4675324603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1480681.1542129708,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1480690.7790143047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 837823.7770758466,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 837822.833935016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1442403.4666667255,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1442386.2015503838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5124096.039999699,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5123902.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3049927.08496724,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3049894.117647038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28683.830560967835,
            "unit": "ns/iter",
            "extra": "iterations: 28736\ncpu: 28683.80776726055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 133592.94420267548,
            "unit": "ns/iter",
            "extra": "iterations: 6434\ncpu: 133589.58657133966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 102698.35584446866,
            "unit": "ns/iter",
            "extra": "iterations: 8307\ncpu: 102696.64138678166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104571.3653940295,
            "unit": "ns/iter",
            "extra": "iterations: 8172\ncpu: 104571.39011258008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101774.9285544466,
            "unit": "ns/iter",
            "extra": "iterations: 8412\ncpu: 101775.60627674713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 265604.88242461,
            "unit": "ns/iter",
            "extra": "iterations: 3283\ncpu: 265606.8230277184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1855247.892857095,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1855241.6666666677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1456508.6968749696,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1456519.0624999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1469113.6340693964,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1469108.517350156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1454795.882445148,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1454694.9843260245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 789944.4474576265,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 789884.6610169515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1403946.3393665312,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1403853.2428355978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3033.3162458588254,
            "unit": "ns/iter",
            "extra": "iterations: 231222\ncpu: 3033.072977484847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19184.84125287802,
            "unit": "ns/iter",
            "extra": "iterations: 36492\ncpu: 19183.215499287544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15181.49794872885,
            "unit": "ns/iter",
            "extra": "iterations: 46069\ncpu: 15180.657274957135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15044.564108070332,
            "unit": "ns/iter",
            "extra": "iterations: 46562\ncpu: 15044.398866028137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11509.115283886124,
            "unit": "ns/iter",
            "extra": "iterations: 60711\ncpu: 11508.547050781544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 95268.27798178174,
            "unit": "ns/iter",
            "extra": "iterations: 7353\ncpu: 95262.70909832718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 125981.85008089847,
            "unit": "ns/iter",
            "extra": "iterations: 5563\ncpu: 125973.37767391761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30740.49109929398,
            "unit": "ns/iter",
            "extra": "iterations: 22751\ncpu: 30738.376335105993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30779.572530798447,
            "unit": "ns/iter",
            "extra": "iterations: 22811\ncpu: 30777.133838937298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30811.13127396137,
            "unit": "ns/iter",
            "extra": "iterations: 22693\ncpu: 30809.196668576376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61572.9673846135,
            "unit": "ns/iter",
            "extra": "iterations: 11375\ncpu: 61568.08791208769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57579.98520831564,
            "unit": "ns/iter",
            "extra": "iterations: 12169\ncpu: 57577.08932533525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22475.868328202207,
            "unit": "ns/iter",
            "extra": "iterations: 31176\ncpu: 22475.391326661495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112654.84667202046,
            "unit": "ns/iter",
            "extra": "iterations: 6235\ncpu: 112649.62309543008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 91994.01760147429,
            "unit": "ns/iter",
            "extra": "iterations: 7613\ncpu: 91990.05648233302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91892.92746386747,
            "unit": "ns/iter",
            "extra": "iterations: 7610\ncpu: 91885.44021024961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91585.72513467338,
            "unit": "ns/iter",
            "extra": "iterations: 7611\ncpu: 91577.6639075027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 161017.0907207021,
            "unit": "ns/iter",
            "extra": "iterations: 4343\ncpu: 161013.21667050244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 546079.7987519646,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 546069.3447737886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 449146.4571796313,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 449129.1049581529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 454009.93125809514,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 453971.5953307402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 445054.1058972793,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 445020.7355738746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 280144.0605210615,
            "unit": "ns/iter",
            "extra": "iterations: 2495\ncpu: 280121.28256513464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 438287.24796495365,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 438253.16217909014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23708.02673344446,
            "unit": "ns/iter",
            "extra": "iterations: 29551\ncpu: 23706.778112415766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117104.4183246961,
            "unit": "ns/iter",
            "extra": "iterations: 5981\ncpu: 117095.51914395615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94918.73024969322,
            "unit": "ns/iter",
            "extra": "iterations: 7329\ncpu: 94910.19238641072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96414.78510344973,
            "unit": "ns/iter",
            "extra": "iterations: 7250\ncpu: 96409.9310344844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94904.84964940278,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 94902.11704422816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 162541.83588672214,
            "unit": "ns/iter",
            "extra": "iterations: 4308\ncpu: 162535.14391829094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 543479.3281613546,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 543441.9705197845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 446641.6909323285,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 446616.60280970734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 447282.06581471174,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 447268.62619808275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 443669.8965079293,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 443641.2698412693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 283008.40419523075,
            "unit": "ns/iter",
            "extra": "iterations: 2479\ncpu: 282984.3081887863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 440310.70480403,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 440268.26801516744 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479549021,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7850.282483474713,
            "unit": "ns/iter",
            "extra": "iterations: 89407\ncpu: 7850.239914100687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57133.74960000124,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57133.41000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 104453.23642328191,
            "unit": "ns/iter",
            "extra": "iterations: 8231\ncpu: 104448.82760296439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 152581.09623209017,
            "unit": "ns/iter",
            "extra": "iterations: 5653\ncpu: 152573.35927825933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 202117.90373462383,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 202109.81210855945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 247973.55171428339,
            "unit": "ns/iter",
            "extra": "iterations: 3500\ncpu: 247965.1428571429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 296162.12448839546,
            "unit": "ns/iter",
            "extra": "iterations: 2932\ncpu: 296154.6043656206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 343875.4858155991,
            "unit": "ns/iter",
            "extra": "iterations: 2538\ncpu: 343873.6800630415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 390831.23177316465,
            "unit": "ns/iter",
            "extra": "iterations: 2222\ncpu: 390876.1476147614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6602.650145854654,
            "unit": "ns/iter",
            "extra": "iterations: 106270\ncpu: 6603.051660863834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5383.545402170576,
            "unit": "ns/iter",
            "extra": "iterations: 130181\ncpu: 5383.612047841083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5398.2637962027675,
            "unit": "ns/iter",
            "extra": "iterations: 129619\ncpu: 5397.990263773047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5484.039520068719,
            "unit": "ns/iter",
            "extra": "iterations: 127935\ncpu: 5483.843357955217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8818.90973571216,
            "unit": "ns/iter",
            "extra": "iterations: 78248\ncpu: 8818.523157141395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29681.82184494282,
            "unit": "ns/iter",
            "extra": "iterations: 27448\ncpu: 29680.883853104082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 152714.8420398011,
            "unit": "ns/iter",
            "extra": "iterations: 5628\ncpu: 152703.87348969435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 119729.91940674625,
            "unit": "ns/iter",
            "extra": "iterations: 7147\ncpu: 119727.5780047573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 119999.9719180047,
            "unit": "ns/iter",
            "extra": "iterations: 7122\ncpu: 119998.188711036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 118105.88002764255,
            "unit": "ns/iter",
            "extra": "iterations: 7235\ncpu: 118107.57429163775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 318889.6931544538,
            "unit": "ns/iter",
            "extra": "iterations: 2907\ncpu: 318875.6793945642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1868951.7746478186,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1868863.7826961766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1476158.1093502196,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1476085.8954041179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1501927.8239095923,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1501888.0452342497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1489836.7756410053,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1489728.8461538458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 818678.7539682789,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 818647.8835978825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1436128.0740740276,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1436082.2530864198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37747.56611304834,
            "unit": "ns/iter",
            "extra": "iterations: 21796\ncpu: 37746.797577537225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 182491.32241706815,
            "unit": "ns/iter",
            "extra": "iterations: 4733\ncpu: 182487.06951193715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145092.3966914213,
            "unit": "ns/iter",
            "extra": "iterations: 5924\ncpu: 145087.30587440915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 145961.5787241229,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 145957.44825246042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 142551.34910549887,
            "unit": "ns/iter",
            "extra": "iterations: 5981\ncpu: 142550.72730312668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 303141.2227688068,
            "unit": "ns/iter",
            "extra": "iterations: 2846\ncpu: 303140.47786366753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1908965.1190965718,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1908856.4681724866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1521524.39869278,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1521510.7843137295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1532841.190789488,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1532822.203947366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1526855.5049180472,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1526817.8688524577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 850657.404003646,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 850609.6451319335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1468120.1719242865,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1468082.9652996787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5208341.919999952,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5208271.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3044405.816993297,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3044298.6928104595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28071.833140091574,
            "unit": "ns/iter",
            "extra": "iterations: 29324\ncpu: 28071.507979811962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142431.6894553849,
            "unit": "ns/iter",
            "extra": "iterations: 6041\ncpu: 142432.4780665461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 112536.94765696033,
            "unit": "ns/iter",
            "extra": "iterations: 7661\ncpu: 112535.269547057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 114165.48521183217,
            "unit": "ns/iter",
            "extra": "iterations: 7506\ncpu: 114164.52171596106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 109728.45467349148,
            "unit": "ns/iter",
            "extra": "iterations: 7810\ncpu: 109724.53265044757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 254779.99706830928,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 254765.0542362941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1877817.0863454014,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1877722.89156626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1473956.1232227671,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1473923.854660345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1501840.088282557,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1501775.9229534585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1482453.9427663065,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1482434.9761526235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 803913.7140396067,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 803907.751937985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1430231.2980030875,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1430217.204301076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2963.800374498675,
            "unit": "ns/iter",
            "extra": "iterations: 236583\ncpu: 2963.686739960176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19327.39208642979,
            "unit": "ns/iter",
            "extra": "iterations: 36191\ncpu: 19326.75803376541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15937.284627760831,
            "unit": "ns/iter",
            "extra": "iterations: 47859\ncpu: 15936.089345786604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15810.782917184526,
            "unit": "ns/iter",
            "extra": "iterations: 44255\ncpu: 15810.294881934191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11511.13935570772,
            "unit": "ns/iter",
            "extra": "iterations: 60873\ncpu: 11510.970380957036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 90645.16853346703,
            "unit": "ns/iter",
            "extra": "iterations: 7678\ncpu: 90639.46340192782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121532.18191286112,
            "unit": "ns/iter",
            "extra": "iterations: 5761\ncpu: 121527.61673320572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30950.839090106176,
            "unit": "ns/iter",
            "extra": "iterations: 22640\ncpu: 30949.26678445215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31350.814308071414,
            "unit": "ns/iter",
            "extra": "iterations: 22365\ncpu: 31349.836798569144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31591.972731376733,
            "unit": "ns/iter",
            "extra": "iterations: 22150\ncpu: 31590.415349886993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62071.327454801685,
            "unit": "ns/iter",
            "extra": "iterations: 11284\ncpu: 62070.18787663966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52082.176155392015,
            "unit": "ns/iter",
            "extra": "iterations: 13437\ncpu: 52077.34613380968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22105.63702158543,
            "unit": "ns/iter",
            "extra": "iterations: 31641\ncpu: 22105.287443506735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113724.48661365747,
            "unit": "ns/iter",
            "extra": "iterations: 6163\ncpu: 113724.74444264034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 91803.50543977687,
            "unit": "ns/iter",
            "extra": "iterations: 7629\ncpu: 91802.35941801098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 92253.905299058,
            "unit": "ns/iter",
            "extra": "iterations: 7624\ncpu: 92252.89874081864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91661.53502683817,
            "unit": "ns/iter",
            "extra": "iterations: 7637\ncpu: 91654.2752389679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 157217.57280680267,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 157212.20551940947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 545284.9766899489,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 545281.3519813528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 451210.12863613665,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 451201.68067226827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 452440.2404899525,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 452415.3449387497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 447518.95153060084,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 447504.5280612251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 282542.32876158593,
            "unit": "ns/iter",
            "extra": "iterations: 2479\ncpu: 282527.99515933765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 440405.7182564739,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 440396.46241313574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22657.294302567127,
            "unit": "ns/iter",
            "extra": "iterations: 30856\ncpu: 22656.47848068446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115261.4515704619,
            "unit": "ns/iter",
            "extra": "iterations: 6081\ncpu: 115257.78654826507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94579.51638342034,
            "unit": "ns/iter",
            "extra": "iterations: 7355\ncpu: 94574.77906186145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92942.99414971386,
            "unit": "ns/iter",
            "extra": "iterations: 7521\ncpu: 92941.35088419121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93824.32668095555,
            "unit": "ns/iter",
            "extra": "iterations: 7466\ncpu: 93823.88159657095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 156282.60049183373,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 156282.2714062134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 554833.7961239802,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 554816.356589149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 446719.47698213987,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 446718.5421994856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 447653.4555342153,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 447628.2149712096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 446282.86409608496,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 446271.6182048051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 281439.77840226324,
            "unit": "ns/iter",
            "extra": "iterations: 2491\ncpu: 281418.948213572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 441517.71689783514,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 441511.4754098384 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488594029,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7808.785987488232,
            "unit": "ns/iter",
            "extra": "iterations: 89677\ncpu: 7808.250722035752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57263.06120000118,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57262.94 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 105383.7460259224,
            "unit": "ns/iter",
            "extra": "iterations: 8178\ncpu: 105376.91367082413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 153450.47914077042,
            "unit": "ns/iter",
            "extra": "iterations: 5633\ncpu: 153441.68293981891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 200811.48620450415,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 200796.6380709484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 252254.4932100467,
            "unit": "ns/iter",
            "extra": "iterations: 3461\ncpu: 252238.0236925744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 313692.4020618467,
            "unit": "ns/iter",
            "extra": "iterations: 2910\ncpu: 313680.0687285224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 345328.2653693023,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 345305.70544007065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 393071.99549347034,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 393052.2757999098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6520.13629679319,
            "unit": "ns/iter",
            "extra": "iterations: 107442\ncpu: 6519.852571620044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5360.550579481554,
            "unit": "ns/iter",
            "extra": "iterations: 130893\ncpu: 5360.410411557531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5424.525176288296,
            "unit": "ns/iter",
            "extra": "iterations: 129050\ncpu: 5424.354901201073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5436.464019152282,
            "unit": "ns/iter",
            "extra": "iterations: 127818\ncpu: 5436.288316199604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8902.432827080442,
            "unit": "ns/iter",
            "extra": "iterations: 78551\ncpu: 8901.890491527784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30000.928941470676,
            "unit": "ns/iter",
            "extra": "iterations: 27217\ncpu: 29999.577469963682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 147687.8150189452,
            "unit": "ns/iter",
            "extra": "iterations: 5806\ncpu: 147678.9183603168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113755.29125566108,
            "unit": "ns/iter",
            "extra": "iterations: 7502\ncpu: 113750.86643561731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 112784.70679867092,
            "unit": "ns/iter",
            "extra": "iterations: 7575\ncpu: 112780.17161716163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109520.52918488382,
            "unit": "ns/iter",
            "extra": "iterations: 7778\ncpu: 109517.45950115728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 327599.64005653723,
            "unit": "ns/iter",
            "extra": "iterations: 2831\ncpu: 327584.3518191452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1840255.6408729998,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1840188.4920634958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1460633.6598425636,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1460556.220472439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1474123.40476194,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1474044.2857142824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1459756.301886835,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1459680.5031446533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 823852.0567375717,
            "unit": "ns/iter",
            "extra": "iterations: 1128\ncpu: 823791.7553191504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1420887.1923664315,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1420825.1908396932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37864.57783714103,
            "unit": "ns/iter",
            "extra": "iterations: 21712\ncpu: 37862.453942520384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176947.6127250473,
            "unit": "ns/iter",
            "extra": "iterations: 4888\ncpu: 176943.39198036032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137881.1953225801,
            "unit": "ns/iter",
            "extra": "iterations: 6200\ncpu: 137875.62903225824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137753.12477917617,
            "unit": "ns/iter",
            "extra": "iterations: 6227\ncpu: 137749.5583748194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132711.22747713744,
            "unit": "ns/iter",
            "extra": "iterations: 6449\ncpu: 132704.43479609265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 302781.61931418924,
            "unit": "ns/iter",
            "extra": "iterations: 2858\ncpu: 302773.4079776057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1884957.447368318,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1884821.4574898866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1507964.4846027833,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1507941.9773095641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1504481.6704361767,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1504364.4588045143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1500892.2354838667,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1500838.8709677344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 862550.7924003518,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 862505.0046339157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1449565.0234374935,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1449498.1249999928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5296528.989999843,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5296203.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3043308.2700967276,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3043198.070739538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28137.094897782044,
            "unit": "ns/iter",
            "extra": "iterations: 29105\ncpu: 28136.660367634347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138284.80623894042,
            "unit": "ns/iter",
            "extra": "iterations: 6219\ncpu: 138284.48303585837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104066.72208044218,
            "unit": "ns/iter",
            "extra": "iterations: 8229\ncpu: 104062.77798031374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104393.35401147214,
            "unit": "ns/iter",
            "extra": "iterations: 8189\ncpu: 104391.48858224486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99410.57017339901,
            "unit": "ns/iter",
            "extra": "iterations: 8650\ncpu: 99406.49710982648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 259113.3944926818,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 259112.840466926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1855519.2803181543,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1855470.9741550626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1457358.7554518555,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1457319.4704049805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1471242.9039369584,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1471176.0629921295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1456990.7628704992,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1456951.326053039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 811244.4852429827,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 811213.6284722269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1409254.3323261717,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1409212.9909365545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3126.052830693157,
            "unit": "ns/iter",
            "extra": "iterations: 231816\ncpu: 3125.8713807502418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19386.46070775867,
            "unit": "ns/iter",
            "extra": "iterations: 36114\ncpu: 19385.554078750672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15151.95232522829,
            "unit": "ns/iter",
            "extra": "iterations: 46146\ncpu: 15150.578598361672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15047.494707234235,
            "unit": "ns/iter",
            "extra": "iterations: 46573\ncpu: 15047.235522727722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11348.146177033088,
            "unit": "ns/iter",
            "extra": "iterations: 61706\ncpu: 11347.792759213107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 93425.19367747649,
            "unit": "ns/iter",
            "extra": "iterations: 7497\ncpu: 93422.06215819655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 125701.25062927333,
            "unit": "ns/iter",
            "extra": "iterations: 5562\ncpu: 125694.73211075203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30478.9180479191,
            "unit": "ns/iter",
            "extra": "iterations: 22745\ncpu: 30477.916025500064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30599.13057792239,
            "unit": "ns/iter",
            "extra": "iterations: 22477\ncpu: 30598.109178271203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30192.81775801874,
            "unit": "ns/iter",
            "extra": "iterations: 23167\ncpu: 30191.833211032852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62491.49482789519,
            "unit": "ns/iter",
            "extra": "iterations: 11214\ncpu: 62488.6748706971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57362.1627736083,
            "unit": "ns/iter",
            "extra": "iterations: 12244\ncpu: 57357.38320810164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22293.65159913346,
            "unit": "ns/iter",
            "extra": "iterations: 31392\ncpu: 22293.237130479025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112703.9183180238,
            "unit": "ns/iter",
            "extra": "iterations: 6207\ncpu: 112700.90220718521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 91704.86216394462,
            "unit": "ns/iter",
            "extra": "iterations: 7625\ncpu: 91701.80983606455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 92342.25448785725,
            "unit": "ns/iter",
            "extra": "iterations: 7576\ncpu: 92337.81678986219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92063.95423460663,
            "unit": "ns/iter",
            "extra": "iterations: 7604\ncpu: 92059.3634928969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 160441.92633265568,
            "unit": "ns/iter",
            "extra": "iterations: 4371\ncpu: 160436.67353008466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 546609.8792156153,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 546593.568627446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 448891.2577319273,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 448876.48195876344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 453673.7150225449,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 453645.8413926497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 443913.0000000342,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 443898.22784810053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 289119.31350684084,
            "unit": "ns/iter",
            "extra": "iterations: 2421\ncpu: 289104.8327137588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 442285.62460569205,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 442248.51735016087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22710.420717233195,
            "unit": "ns/iter",
            "extra": "iterations: 30757\ncpu: 22709.705107780446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 114780.93585337762,
            "unit": "ns/iter",
            "extra": "iterations: 6111\ncpu: 114777.12322042206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93648.76018703845,
            "unit": "ns/iter",
            "extra": "iterations: 7485\ncpu: 93645.15698062841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 94193.8103864721,
            "unit": "ns/iter",
            "extra": "iterations: 7452\ncpu: 94190.63338700964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92400.30354778844,
            "unit": "ns/iter",
            "extra": "iterations: 7554\ncpu: 92397.14058776846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 157485.69080279462,
            "unit": "ns/iter",
            "extra": "iterations: 4447\ncpu: 157485.51832696432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 543080.5309596868,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 543061.1455108438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 446361.26258767006,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 446359.9745060531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 450288.2843326886,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 450280.2063185115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 443842.33333332906,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 443813.5732323258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 283479.9643146882,
            "unit": "ns/iter",
            "extra": "iterations: 2466\ncpu: 283451.378751014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 439810.7625944467,
            "unit": "ns/iter",
            "extra": "iterations: 1588\ncpu: 439791.0579345156 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702502573489,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7653.986446560547,
            "unit": "ns/iter",
            "extra": "iterations: 91047\ncpu: 7653.967730952146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55629.23489999889,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55626.13000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101846.16654804158,
            "unit": "ns/iter",
            "extra": "iterations: 8430\ncpu: 101839.65599051009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 148922.42258619898,
            "unit": "ns/iter",
            "extra": "iterations: 5800\ncpu: 148915.84482758626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 195076.69873533075,
            "unit": "ns/iter",
            "extra": "iterations: 4428\ncpu: 195072.33514001803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 243074.82521009,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 243075.29411764705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 289080.81147815177,
            "unit": "ns/iter",
            "extra": "iterations: 2997\ncpu: 289081.3146479813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 336504.0787432117,
            "unit": "ns/iter",
            "extra": "iterations: 2578\ncpu: 336487.9363847944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 383317.8686291952,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 383313.13708260073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6481.454203833844,
            "unit": "ns/iter",
            "extra": "iterations: 107509\ncpu: 6481.404347542996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5362.545167166698,
            "unit": "ns/iter",
            "extra": "iterations: 130648\ncpu: 5362.476272120503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5408.838891897909,
            "unit": "ns/iter",
            "extra": "iterations: 129230\ncpu: 5408.8454693182675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5329.652205799167,
            "unit": "ns/iter",
            "extra": "iterations: 132265\ncpu: 5329.530866064335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8852.448523270605,
            "unit": "ns/iter",
            "extra": "iterations: 79026\ncpu: 8852.580163490495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30630.521517277703,
            "unit": "ns/iter",
            "extra": "iterations: 26653\ncpu: 30630.274265561067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 143721.32266174455,
            "unit": "ns/iter",
            "extra": "iterations: 5966\ncpu: 143719.94636272226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 109425.34375402576,
            "unit": "ns/iter",
            "extra": "iterations: 7773\ncpu: 109421.30451563088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 111075.75815888791,
            "unit": "ns/iter",
            "extra": "iterations: 7691\ncpu: 111074.68469639824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 108310.73591146588,
            "unit": "ns/iter",
            "extra": "iterations: 7861\ncpu: 108307.87431624497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 324624.40555750456,
            "unit": "ns/iter",
            "extra": "iterations: 2843\ncpu: 324622.23003869137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1880459.4716598957,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1880383.8056680178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1482620.8899520908,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1482565.3907496044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1485555.468152858,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1485506.2101910834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1469984.7456556002,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1469897.3143759854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 805692.6530434794,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 805660.9565217405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1424841.1993864821,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1424776.993865032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38767.70802168854,
            "unit": "ns/iter",
            "extra": "iterations: 21392\ncpu: 38766.02935676884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 171414.68485567535,
            "unit": "ns/iter",
            "extra": "iterations: 5058\ncpu: 171406.247528668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136797.19917210683,
            "unit": "ns/iter",
            "extra": "iterations: 6281\ncpu: 136792.51711510905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 142161.03375663154,
            "unit": "ns/iter",
            "extra": "iterations: 6221\ncpu: 142161.11557627402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134114.92953335174,
            "unit": "ns/iter",
            "extra": "iterations: 6386\ncpu: 134112.41778891327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 302555.92899407237,
            "unit": "ns/iter",
            "extra": "iterations: 2873\ncpu: 302550.0522102336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1909395.4928717634,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1909375.7637474504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1507887.55806449,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1507865.483870972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1512206.7205882245,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1512175.3267973836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1499542.860800011,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1499501.280000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 835691.8198924735,
            "unit": "ns/iter",
            "extra": "iterations: 1116\ncpu: 835659.4982078823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1449656.5046584213,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1449604.9689441028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5136484.199999813,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5136169.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3085930.0561056677,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3085776.567656751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28877.404389594274,
            "unit": "ns/iter",
            "extra": "iterations: 28522\ncpu: 28876.218357758975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 134526.52585669435,
            "unit": "ns/iter",
            "extra": "iterations: 6420\ncpu: 134523.31775700938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 103593.49771194764,
            "unit": "ns/iter",
            "extra": "iterations: 8304\ncpu: 103588.18641618564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104625.51621917206,
            "unit": "ns/iter",
            "extra": "iterations: 8231\ncpu: 104620.20410642742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100457.08487690006,
            "unit": "ns/iter",
            "extra": "iterations: 8530\ncpu: 100457.13950761971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 260106.77100149184,
            "unit": "ns/iter",
            "extra": "iterations: 3345\ncpu: 260096.74140508103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1876805.4431137182,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1876781.636726544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1455875.7394696097,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1455851.4820592848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1482722.1283676862,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1482700.9508716357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1454098.4665630113,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1454083.9813374789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 794502.9804918981,
            "unit": "ns/iter",
            "extra": "iterations: 1179\ncpu: 794491.3486005088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1408739.108597313,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1408701.6591251886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3001.7364146257873,
            "unit": "ns/iter",
            "extra": "iterations: 233560\ncpu: 3001.7691385511325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18854.680656392356,
            "unit": "ns/iter",
            "extra": "iterations: 37051\ncpu: 18854.481660413963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15627.302046213637,
            "unit": "ns/iter",
            "extra": "iterations: 44619\ncpu: 15627.120733319836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13642.156559164998,
            "unit": "ns/iter",
            "extra": "iterations: 51348\ncpu: 13641.960738490303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11225.97623676502,
            "unit": "ns/iter",
            "extra": "iterations: 62239\ncpu: 11225.98210125476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 91591.27454308017,
            "unit": "ns/iter",
            "extra": "iterations: 7660\ncpu: 91592.25848564011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 126632.69355712086,
            "unit": "ns/iter",
            "extra": "iterations: 5541\ncpu: 126628.89370149827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30574.980481199742,
            "unit": "ns/iter",
            "extra": "iterations: 22901\ncpu: 30574.590629230086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30892.071986581836,
            "unit": "ns/iter",
            "extra": "iterations: 22657\ncpu: 30891.33601094589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30771.183290895075,
            "unit": "ns/iter",
            "extra": "iterations: 22778\ncpu: 30771.49881464581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61576.718020949505,
            "unit": "ns/iter",
            "extra": "iterations: 11359\ncpu: 61575.40276432795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57388.20884196489,
            "unit": "ns/iter",
            "extra": "iterations: 12124\ncpu: 57388.14747608041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22137.921639312342,
            "unit": "ns/iter",
            "extra": "iterations: 31623\ncpu: 22137.42845397332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110440.38357244115,
            "unit": "ns/iter",
            "extra": "iterations: 6343\ncpu: 110440.2490934897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88403.25521162574,
            "unit": "ns/iter",
            "extra": "iterations: 7915\ncpu: 88402.86797220494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89344.919149482,
            "unit": "ns/iter",
            "extra": "iterations: 7854\ncpu: 89339.99236058093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89453.33026349121,
            "unit": "ns/iter",
            "extra": "iterations: 7818\ncpu: 89452.37912509755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 159932.21254594804,
            "unit": "ns/iter",
            "extra": "iterations: 4352\ncpu: 159928.19393382198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 544236.3523515702,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 544236.4687741015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 439484.13181244524,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 439478.960709752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 447521.9558823205,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 447518.35038363026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 440901.9172979758,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 440886.86868687335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 279113.8353221909,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 279116.6666666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 435568.2419355125,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 435554.1563275482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22699.41356141577,
            "unit": "ns/iter",
            "extra": "iterations: 30808\ncpu: 22698.85094780561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 110502.13701657776,
            "unit": "ns/iter",
            "extra": "iterations: 6335\ncpu: 110496.63772691414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91350.97599478682,
            "unit": "ns/iter",
            "extra": "iterations: 7665\ncpu: 91350.9849967394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90987.08702428686,
            "unit": "ns/iter",
            "extra": "iterations: 7699\ncpu: 90986.80348097239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91017.7320337921,
            "unit": "ns/iter",
            "extra": "iterations: 7695\ncpu: 91011.74788823913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 157843.02908025717,
            "unit": "ns/iter",
            "extra": "iterations: 4436\ncpu: 157828.80973850298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 541355.7679259679,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 541326.6769468023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 441501.64267677505,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 441488.699494949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 444420.6605212943,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 444390.9726637005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 437408.9195259017,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 437408.10979413055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 275697.22958578245,
            "unit": "ns/iter",
            "extra": "iterations: 2535\ncpu: 275696.8047337253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 433739.03360293736,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 433743.87056627165 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}