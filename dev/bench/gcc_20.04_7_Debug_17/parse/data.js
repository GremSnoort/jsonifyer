window.BENCHMARK_DATA = {
  "lastUpdate": 1702422466787,
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
      }
    ]
  }
}