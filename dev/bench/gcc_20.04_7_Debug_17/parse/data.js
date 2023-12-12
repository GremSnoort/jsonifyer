window.BENCHMARK_DATA = {
  "lastUpdate": 1702409142117,
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
      }
    ]
  }
}