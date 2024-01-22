window.BENCHMARK_DATA = {
  "lastUpdate": 1705958559847,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-12 18.04 Release c++-17": [
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
        "date": 1702490304997,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 577.4276499366405,
            "unit": "ns/iter",
            "extra": "iterations: 1218831\ncpu: 577.4267310234151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5270.9208099997795,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5270.798999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10253.81872928778,
            "unit": "ns/iter",
            "extra": "iterations: 80868\ncpu: 10253.651629816493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15451.84256430844,
            "unit": "ns/iter",
            "extra": "iterations: 54346\ncpu: 15451.44996871895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20584.176729004623,
            "unit": "ns/iter",
            "extra": "iterations: 40746\ncpu: 20583.63274922692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25263.806142447746,
            "unit": "ns/iter",
            "extra": "iterations: 32658\ncpu: 25263.0259048319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30459.658941607526,
            "unit": "ns/iter",
            "extra": "iterations: 27400\ncpu: 30458.81386861314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35134.218338954124,
            "unit": "ns/iter",
            "extra": "iterations: 23720\ncpu: 35133.34738617202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40432.71885029312,
            "unit": "ns/iter",
            "extra": "iterations: 21188\ncpu: 40431.885973192366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 557.9732396016848,
            "unit": "ns/iter",
            "extra": "iterations: 1254503\ncpu: 557.9565772262011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 422.9075335996578,
            "unit": "ns/iter",
            "extra": "iterations: 1656937\ncpu: 422.89924119022044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 425.7539562109725,
            "unit": "ns/iter",
            "extra": "iterations: 1642923\ncpu: 425.7464287735951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 419.2934910253272,
            "unit": "ns/iter",
            "extra": "iterations: 1674150\ncpu: 419.27354179732936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 879.2493551549913,
            "unit": "ns/iter",
            "extra": "iterations: 795540\ncpu: 879.2324710259707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1660.888190334512,
            "unit": "ns/iter",
            "extra": "iterations: 480039\ncpu: 1660.8404733782038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9214.744207241094,
            "unit": "ns/iter",
            "extra": "iterations: 87782\ncpu: 9214.561071745906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7254.375473364875,
            "unit": "ns/iter",
            "extra": "iterations: 110908\ncpu: 7254.158401558052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7163.766845685807,
            "unit": "ns/iter",
            "extra": "iterations: 111720\ncpu: 7163.501611170786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7679.221926838973,
            "unit": "ns/iter",
            "extra": "iterations: 101939\ncpu: 7679.045311411741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35250.01174661382,
            "unit": "ns/iter",
            "extra": "iterations: 23411\ncpu: 35248.695057878824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 247596.93139768016,
            "unit": "ns/iter",
            "extra": "iterations: 3513\ncpu: 247576.23114147413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 187649.83299388137,
            "unit": "ns/iter",
            "extra": "iterations: 4419\ncpu: 187635.52840009058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 194403.1492869843,
            "unit": "ns/iter",
            "extra": "iterations: 4488\ncpu: 194398.95276292358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 188389.85636733702,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 188384.64148382735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98667.80038345196,
            "unit": "ns/iter",
            "extra": "iterations: 8867\ncpu: 98664.7231307093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 189509.20938315277,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 189505.03909643771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5168.797492533934,
            "unit": "ns/iter",
            "extra": "iterations: 157051\ncpu: 5168.677053950639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23216.538828134257,
            "unit": "ns/iter",
            "extra": "iterations: 36301\ncpu: 23215.473402936546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17974.521348364713,
            "unit": "ns/iter",
            "extra": "iterations: 44172\ncpu: 17973.261342026562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17712.171997249527,
            "unit": "ns/iter",
            "extra": "iterations: 46524\ncpu: 17711.804659960482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17765.58771687634,
            "unit": "ns/iter",
            "extra": "iterations: 47089\ncpu: 17765.478137144557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50393.37319436447,
            "unit": "ns/iter",
            "extra": "iterations: 16407\ncpu: 50390.08350094461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 271817.9157076149,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 271804.41679626884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 209995.0012033826,
            "unit": "ns/iter",
            "extra": "iterations: 4155\ncpu: 209980.1444043336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 208871.52979338268,
            "unit": "ns/iter",
            "extra": "iterations: 4162\ncpu: 208859.6828447855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 208561.96740173284,
            "unit": "ns/iter",
            "extra": "iterations: 4172\ncpu: 208547.9865771811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108637.0850692217,
            "unit": "ns/iter",
            "extra": "iterations: 8017\ncpu: 108632.01945865003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 188477.4325195905,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 188472.20175034422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 788896.1191666983,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 788868.2499999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 441963.5836245578,
            "unit": "ns/iter",
            "extra": "iterations: 2003\ncpu: 441943.1852221693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1657.2016945870223,
            "unit": "ns/iter",
            "extra": "iterations: 485546\ncpu: 1657.1888142421137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9399.237259376197,
            "unit": "ns/iter",
            "extra": "iterations: 87221\ncpu: 9398.968138407066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7170.762312295488,
            "unit": "ns/iter",
            "extra": "iterations: 113809\ncpu: 7170.478608897317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7185.424351850843,
            "unit": "ns/iter",
            "extra": "iterations: 114094\ncpu: 7185.262152260379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6815.45398900684,
            "unit": "ns/iter",
            "extra": "iterations: 120080\ncpu: 6815.15906062624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34940.89621694233,
            "unit": "ns/iter",
            "extra": "iterations: 23896\ncpu: 34940.06109809149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 262986.6389301739,
            "unit": "ns/iter",
            "extra": "iterations: 3365\ncpu: 262976.46359584003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 197804.04427547814,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 197799.3291592125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 181907.7627990062,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 181894.16498993943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 197680.00805008804,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 197659.74955277148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96994.68912202417,
            "unit": "ns/iter",
            "extra": "iterations: 9055\ncpu: 96987.95140806149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 179214.49861317922,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 179195.62620012864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 185.78641298474818,
            "unit": "ns/iter",
            "extra": "iterations: 3766081\ncpu: 185.77975354220976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1354.7241448635154,
            "unit": "ns/iter",
            "extra": "iterations: 512316\ncpu: 1354.684218333994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1063.2161314666862,
            "unit": "ns/iter",
            "extra": "iterations: 649290\ncpu: 1063.1531365029534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1129.6281568990846,
            "unit": "ns/iter",
            "extra": "iterations: 649411\ncpu: 1129.56094060618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 825.0543619814149,
            "unit": "ns/iter",
            "extra": "iterations: 849270\ncpu: 825.0274942009031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9545.62229635415,
            "unit": "ns/iter",
            "extra": "iterations: 73142\ncpu: 9545.18334199229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12437.132617506266,
            "unit": "ns/iter",
            "extra": "iterations: 56252\ncpu: 12436.148048069374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2770.820737655863,
            "unit": "ns/iter",
            "extra": "iterations: 252150\ncpu: 2770.6270077334702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2768.207687082841,
            "unit": "ns/iter",
            "extra": "iterations: 251773\ncpu: 2767.9548641037713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2774.9247439114683,
            "unit": "ns/iter",
            "extra": "iterations: 253428\ncpu: 2774.76877061727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5163.739394207221,
            "unit": "ns/iter",
            "extra": "iterations: 135822\ncpu: 5163.360869373159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5233.662658851549,
            "unit": "ns/iter",
            "extra": "iterations: 132907\ncpu: 5233.417351982989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1924.2384823478535,
            "unit": "ns/iter",
            "extra": "iterations: 364853\ncpu: 1924.2209876306308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10050.841092435126,
            "unit": "ns/iter",
            "extra": "iterations: 69789\ncpu: 10050.421986272966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8126.598719613787,
            "unit": "ns/iter",
            "extra": "iterations: 86224\ncpu: 8126.193403228807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8043.112659391158,
            "unit": "ns/iter",
            "extra": "iterations: 87050\ncpu: 8042.4755887420815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8058.251996985799,
            "unit": "ns/iter",
            "extra": "iterations: 86255\ncpu: 8057.88070256809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17853.686831110736,
            "unit": "ns/iter",
            "extra": "iterations: 39244\ncpu: 17852.54306390818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54241.051132731714,
            "unit": "ns/iter",
            "extra": "iterations: 12536\ncpu: 54239.63784301247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44690.92839774162,
            "unit": "ns/iter",
            "extra": "iterations: 15628\ncpu: 44689.768364474556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44659.23001214313,
            "unit": "ns/iter",
            "extra": "iterations: 15647\ncpu: 44657.03968811887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44731.276175826846,
            "unit": "ns/iter",
            "extra": "iterations: 15606\ncpu: 44727.790593361555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25385.348759492357,
            "unit": "ns/iter",
            "extra": "iterations: 27529\ncpu: 25383.6390715246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43772.3271690068,
            "unit": "ns/iter",
            "extra": "iterations: 15952\ncpu: 43768.712387161715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1946.8670194169474,
            "unit": "ns/iter",
            "extra": "iterations: 360406\ncpu: 1946.7603203054437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10227.287222546405,
            "unit": "ns/iter",
            "extra": "iterations: 68480\ncpu: 10226.362441588675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8284.17337035271,
            "unit": "ns/iter",
            "extra": "iterations: 85003\ncpu: 8283.600578803049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8203.011510286404,
            "unit": "ns/iter",
            "extra": "iterations: 85315\ncpu: 8202.814276504589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8228.072474657953,
            "unit": "ns/iter",
            "extra": "iterations: 83850\ncpu: 8227.333333333296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17988.22865148241,
            "unit": "ns/iter",
            "extra": "iterations: 38902\ncpu: 17987.29885352918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53489.574664104155,
            "unit": "ns/iter",
            "extra": "iterations: 13025\ncpu: 53486.464491362305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42551.35932079757,
            "unit": "ns/iter",
            "extra": "iterations: 16431\ncpu: 42548.591077840385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42460.52582588653,
            "unit": "ns/iter",
            "extra": "iterations: 16437\ncpu: 42459.45123806067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42124.413730582964,
            "unit": "ns/iter",
            "extra": "iterations: 16547\ncpu: 42123.684051489814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25087.426102145513,
            "unit": "ns/iter",
            "extra": "iterations: 28059\ncpu: 25086.806372287276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42106.243128603295,
            "unit": "ns/iter",
            "extra": "iterations: 17682\ncpu: 42105.921275874214 ns\nthreads: 1"
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
        "date": 1702493011981,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 588.5337058642939,
            "unit": "ns/iter",
            "extra": "iterations: 1176457\ncpu: 588.5146673444078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5359.31769000058,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5359.262999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10384.973914336455,
            "unit": "ns/iter",
            "extra": "iterations: 80734\ncpu: 10384.749919488693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15381.112291915893,
            "unit": "ns/iter",
            "extra": "iterations: 53824\ncpu: 15381.196120689656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20505.726112927245,
            "unit": "ns/iter",
            "extra": "iterations: 40681\ncpu: 20504.47629114328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25367.858856935036,
            "unit": "ns/iter",
            "extra": "iterations: 32754\ncpu: 25366.813213653295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30516.778464986895,
            "unit": "ns/iter",
            "extra": "iterations: 27648\ncpu: 30514.48929398146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35547.28269485115,
            "unit": "ns/iter",
            "extra": "iterations: 23467\ncpu: 35545.135722503954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40667.60221151339,
            "unit": "ns/iter",
            "extra": "iterations: 21162\ncpu: 40664.79538795958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 551.5755232942272,
            "unit": "ns/iter",
            "extra": "iterations: 1279347\ncpu: 551.5785005944438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 419.9277903655909,
            "unit": "ns/iter",
            "extra": "iterations: 1654156\ncpu: 419.90815860172756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 417.2704375984901,
            "unit": "ns/iter",
            "extra": "iterations: 1678365\ncpu: 417.2653147557304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 410.649716452255,
            "unit": "ns/iter",
            "extra": "iterations: 1697245\ncpu: 410.64719589687985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 891.0636347670775,
            "unit": "ns/iter",
            "extra": "iterations: 785844\ncpu: 891.0311715811281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1663.1827601220573,
            "unit": "ns/iter",
            "extra": "iterations: 482370\ncpu: 1663.084147024071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9445.383378263747,
            "unit": "ns/iter",
            "extra": "iterations: 86056\ncpu: 9444.95444826626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7332.404347508855,
            "unit": "ns/iter",
            "extra": "iterations: 110086\ncpu: 7331.88598005196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7502.495247926034,
            "unit": "ns/iter",
            "extra": "iterations: 107532\ncpu: 7502.459732916715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7020.272412773461,
            "unit": "ns/iter",
            "extra": "iterations: 115046\ncpu: 7020.045894685603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35391.91785389656,
            "unit": "ns/iter",
            "extra": "iterations: 23093\ncpu: 35391.685792231336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 245897.30286690322,
            "unit": "ns/iter",
            "extra": "iterations: 3523\ncpu: 245882.14589838163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 191537.2578018789,
            "unit": "ns/iter",
            "extra": "iterations: 4422\ncpu: 191536.13749434636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 188780.08072559483,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 188761.33786848097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 197532.76347371575,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 197528.60571677887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98218.48253399653,
            "unit": "ns/iter",
            "extra": "iterations: 8903\ncpu: 98207.6603392116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 189504.59765369256,
            "unit": "ns/iter",
            "extra": "iterations: 4603\ncpu: 189502.65044536194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5034.334676165407,
            "unit": "ns/iter",
            "extra": "iterations: 160854\ncpu: 5034.255909085272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23283.066333726267,
            "unit": "ns/iter",
            "extra": "iterations: 35442\ncpu: 23283.02014558989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18818.148811000363,
            "unit": "ns/iter",
            "extra": "iterations: 44365\ncpu: 18817.516059957172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17909.871493705472,
            "unit": "ns/iter",
            "extra": "iterations: 46060\ncpu: 17909.515848892774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17880.53122002039,
            "unit": "ns/iter",
            "extra": "iterations: 45868\ncpu: 17880.29781111008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51659.09589209684,
            "unit": "ns/iter",
            "extra": "iterations: 16164\ncpu: 51656.76812670141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 270831.42472118133,
            "unit": "ns/iter",
            "extra": "iterations: 3228\ncpu: 270829.6778190832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204676.20479045552,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 204657.24550898056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 207782.12684789905,
            "unit": "ns/iter",
            "extra": "iterations: 4194\ncpu: 207773.29518359588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 207383.4363982544,
            "unit": "ns/iter",
            "extra": "iterations: 4198\ncpu: 207367.55597903876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108752.45580697413,
            "unit": "ns/iter",
            "extra": "iterations: 7999\ncpu: 108747.73096637074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193627.16918428612,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 193609.69091331688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 805552.8584668479,
            "unit": "ns/iter",
            "extra": "iterations: 1187\ncpu: 805532.8559393485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 439194.158966753,
            "unit": "ns/iter",
            "extra": "iterations: 2013\ncpu: 439163.18926974817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1649.9868576083506,
            "unit": "ns/iter",
            "extra": "iterations: 484615\ncpu: 1649.9965952353825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9498.868304316502,
            "unit": "ns/iter",
            "extra": "iterations: 86791\ncpu: 9498.411125577546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7332.298014132664,
            "unit": "ns/iter",
            "extra": "iterations: 111941\ncpu: 7332.270571104401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7183.897049460379,
            "unit": "ns/iter",
            "extra": "iterations: 114657\ncpu: 7183.780318689665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7048.73233915784,
            "unit": "ns/iter",
            "extra": "iterations: 116076\ncpu: 7048.773217547111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34378.13863589195,
            "unit": "ns/iter",
            "extra": "iterations: 23825\ncpu: 34375.479538299944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 264363.90295610356,
            "unit": "ns/iter",
            "extra": "iterations: 3349\ncpu: 264352.49328157713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 191958.47118413838,
            "unit": "ns/iter",
            "extra": "iterations: 4442\ncpu: 191938.63124718628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 196330.1556593436,
            "unit": "ns/iter",
            "extra": "iterations: 4497\ncpu: 196322.2815210144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 195914.7363858713,
            "unit": "ns/iter",
            "extra": "iterations: 4499\ncpu: 195894.3320737949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96749.49400373097,
            "unit": "ns/iter",
            "extra": "iterations: 9089\ncpu: 96742.73297392481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 189326.16576959877,
            "unit": "ns/iter",
            "extra": "iterations: 4645\ncpu: 189309.94617868768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 186.86427346371428,
            "unit": "ns/iter",
            "extra": "iterations: 3749090\ncpu: 186.85537023650994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1414.4303894960342,
            "unit": "ns/iter",
            "extra": "iterations: 502496\ncpu: 1414.2946411513753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1092.9878624345604,
            "unit": "ns/iter",
            "extra": "iterations: 644116\ncpu: 1092.9178905662955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1137.0049754321833,
            "unit": "ns/iter",
            "extra": "iterations: 581859\ncpu: 1136.9757965417684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 830.3284838014981,
            "unit": "ns/iter",
            "extra": "iterations: 845305\ncpu: 830.259847037454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9688.313079910284,
            "unit": "ns/iter",
            "extra": "iterations: 72317\ncpu: 9687.82997082297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12041.908124783336,
            "unit": "ns/iter",
            "extra": "iterations: 58340\ncpu: 12040.894754885136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2742.5555751239253,
            "unit": "ns/iter",
            "extra": "iterations: 255519\ncpu: 2742.2990071188246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2560.198818028397,
            "unit": "ns/iter",
            "extra": "iterations: 256013\ncpu: 2560.058278290542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2737.6794432957972,
            "unit": "ns/iter",
            "extra": "iterations: 256510\ncpu: 2737.693657167362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5095.098398602178,
            "unit": "ns/iter",
            "extra": "iterations: 137380\ncpu: 5094.982530208184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5150.127219978486,
            "unit": "ns/iter",
            "extra": "iterations: 136150\ncpu: 5150.0727139184755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1914.3815296459295,
            "unit": "ns/iter",
            "extra": "iterations: 364032\ncpu: 1914.3926907524467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10039.02084286196,
            "unit": "ns/iter",
            "extra": "iterations: 69952\ncpu: 10038.78230786823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8090.825561711387,
            "unit": "ns/iter",
            "extra": "iterations: 86833\ncpu: 8090.554282358061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8017.203635740808,
            "unit": "ns/iter",
            "extra": "iterations: 87465\ncpu: 8016.5346138455725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7960.619374409154,
            "unit": "ns/iter",
            "extra": "iterations: 88013\ncpu: 7960.376308045443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17904.393002588655,
            "unit": "ns/iter",
            "extra": "iterations: 39043\ncpu: 17903.51663550467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55246.491469204564,
            "unit": "ns/iter",
            "extra": "iterations: 12660\ncpu: 55244.41548183211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43059.74376276532,
            "unit": "ns/iter",
            "extra": "iterations: 16153\ncpu: 43058.280195629704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43346.99790434221,
            "unit": "ns/iter",
            "extra": "iterations: 16224\ncpu: 43345.925788955166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44013.70511609599,
            "unit": "ns/iter",
            "extra": "iterations: 15891\ncpu: 44011.20760178769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25200.692640535708,
            "unit": "ns/iter",
            "extra": "iterations: 27733\ncpu: 25200.879818266705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43289.46484350124,
            "unit": "ns/iter",
            "extra": "iterations: 16199\ncpu: 43287.51774800951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1932.5671754486907,
            "unit": "ns/iter",
            "extra": "iterations: 362893\ncpu: 1932.5330055966895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9904.077946088903,
            "unit": "ns/iter",
            "extra": "iterations: 69779\ncpu: 9903.695954370172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8162.559216748136,
            "unit": "ns/iter",
            "extra": "iterations: 85643\ncpu: 8162.354191235751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8039.049587442972,
            "unit": "ns/iter",
            "extra": "iterations: 87018\ncpu: 8039.10225470598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8111.24656992732,
            "unit": "ns/iter",
            "extra": "iterations: 86004\ncpu: 8110.827403376697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17811.92921636583,
            "unit": "ns/iter",
            "extra": "iterations: 39317\ncpu: 17810.791769463656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53845.68365527249,
            "unit": "ns/iter",
            "extra": "iterations: 12891\ncpu: 53841.16049957312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42483.93170880983,
            "unit": "ns/iter",
            "extra": "iterations: 16415\ncpu: 42481.81541273223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41748.43104081977,
            "unit": "ns/iter",
            "extra": "iterations: 16314\ncpu: 41746.66544072544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42385.74832518149,
            "unit": "ns/iter",
            "extra": "iterations: 16569\ncpu: 42385.41251735239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24996.87552487162,
            "unit": "ns/iter",
            "extra": "iterations: 28102\ncpu: 24995.548359547254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42066.62349092858,
            "unit": "ns/iter",
            "extra": "iterations: 16815\ncpu: 42065.66755872765 ns\nthreads: 1"
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
        "date": 1702503997490,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 585.770540346097,
            "unit": "ns/iter",
            "extra": "iterations: 1192458\ncpu: 585.7737547150508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5422.090220000655,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5421.678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10574.890674956181,
            "unit": "ns/iter",
            "extra": "iterations: 79131\ncpu: 10574.501775536766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15641.180943051406,
            "unit": "ns/iter",
            "extra": "iterations: 53083\ncpu: 15640.51202833299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20500.782373131125,
            "unit": "ns/iter",
            "extra": "iterations: 40790\ncpu: 20500.15444962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25609.46933870064,
            "unit": "ns/iter",
            "extra": "iterations: 33283\ncpu: 25607.757714148363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30451.450117435812,
            "unit": "ns/iter",
            "extra": "iterations: 27675\ncpu: 30450.12104787715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36122.30146399697,
            "unit": "ns/iter",
            "extra": "iterations: 23429\ncpu: 36120.35938366982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40352.40016374156,
            "unit": "ns/iter",
            "extra": "iterations: 20764\ncpu: 40350.13003274897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 569.4052486654917,
            "unit": "ns/iter",
            "extra": "iterations: 1228236\ncpu: 569.3843039936943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 427.3086180176624,
            "unit": "ns/iter",
            "extra": "iterations: 1714443\ncpu: 427.310094298848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 430.7063983224072,
            "unit": "ns/iter",
            "extra": "iterations: 1619909\ncpu: 430.68869918001565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 424.3712319165507,
            "unit": "ns/iter",
            "extra": "iterations: 1642181\ncpu: 424.34232280120085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 906.5829598304481,
            "unit": "ns/iter",
            "extra": "iterations: 782457\ncpu: 906.5534591677233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1660.1387943145417,
            "unit": "ns/iter",
            "extra": "iterations: 479047\ncpu: 1660.0874235722163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9009.23717486477,
            "unit": "ns/iter",
            "extra": "iterations: 88732\ncpu: 9009.113961141404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7155.753252524453,
            "unit": "ns/iter",
            "extra": "iterations: 112528\ncpu: 7155.58616522111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7202.567927902087,
            "unit": "ns/iter",
            "extra": "iterations: 110183\ncpu: 7202.228111414647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7474.7597982295365,
            "unit": "ns/iter",
            "extra": "iterations: 107647\ncpu: 7474.60310087599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35348.097347026334,
            "unit": "ns/iter",
            "extra": "iterations: 23370\ncpu: 35347.23577235782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 230557.15442196938,
            "unit": "ns/iter",
            "extra": "iterations: 3607\ncpu: 230539.7005822013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 196505.32596436338,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 196497.90209790206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 188807.0808471993,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 188807.8569801868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 189472.30856642587,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 189471.1756993002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98475.3477914338,
            "unit": "ns/iter",
            "extra": "iterations: 8784\ncpu: 98475.78551912558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 188437.59209970137,
            "unit": "ns/iter",
            "extra": "iterations: 4734\ncpu: 188431.7490494296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4980.807202033462,
            "unit": "ns/iter",
            "extra": "iterations: 160899\ncpu: 4980.827724224532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23543.352060348185,
            "unit": "ns/iter",
            "extra": "iterations: 35528\ncpu: 23542.909817608568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18390.720582396814,
            "unit": "ns/iter",
            "extra": "iterations: 45330\ncpu: 18389.651444959163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18030.248887011523,
            "unit": "ns/iter",
            "extra": "iterations: 44924\ncpu: 18029.5053868756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17963.74260024042,
            "unit": "ns/iter",
            "extra": "iterations: 46488\ncpu: 17963.072190672832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49387.380243408705,
            "unit": "ns/iter",
            "extra": "iterations: 16926\ncpu: 49385.50159517888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 269939.8910952762,
            "unit": "ns/iter",
            "extra": "iterations: 3223\ncpu: 269922.02916537324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 208895.33381155948,
            "unit": "ns/iter",
            "extra": "iterations: 4182\ncpu: 208884.81587756984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 206630.87603896586,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 206623.79482308115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 192891.2951091949,
            "unit": "ns/iter",
            "extra": "iterations: 4212\ncpu: 192879.96201329643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 105561.0087554677,
            "unit": "ns/iter",
            "extra": "iterations: 7995\ncpu: 105555.60975609742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194332.10130645064,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 194321.43020857216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 777540.597359799,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 777492.9867986786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 434581.19921295205,
            "unit": "ns/iter",
            "extra": "iterations: 2033\ncpu: 434572.25774717063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1686.2743515404563,
            "unit": "ns/iter",
            "extra": "iterations: 466336\ncpu: 1686.2554038289973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9653.378897081202,
            "unit": "ns/iter",
            "extra": "iterations: 84775\ncpu: 9652.975523444418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7258.634743201868,
            "unit": "ns/iter",
            "extra": "iterations: 112540\ncpu: 7258.43344588594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7380.2623311911775,
            "unit": "ns/iter",
            "extra": "iterations: 110776\ncpu: 7379.993861486271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7166.670651834907,
            "unit": "ns/iter",
            "extra": "iterations: 115428\ncpu: 7166.283743978925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35105.38401910546,
            "unit": "ns/iter",
            "extra": "iterations: 23866\ncpu: 35103.2598675938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 243047.672035132,
            "unit": "ns/iter",
            "extra": "iterations: 3415\ncpu: 243041.66910688113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 197208.66614419254,
            "unit": "ns/iter",
            "extra": "iterations: 4466\ncpu: 197208.0832960145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 197007.61466664416,
            "unit": "ns/iter",
            "extra": "iterations: 4500\ncpu: 197000.3555555561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 196174.0990911018,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 196175.26047439734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97502.38445285094,
            "unit": "ns/iter",
            "extra": "iterations: 8992\ncpu: 97501.3011565837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 186524.72474908805,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 186524.10847747093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 184.96874152142792,
            "unit": "ns/iter",
            "extra": "iterations: 3785277\ncpu: 184.96308196203324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1394.702256719792,
            "unit": "ns/iter",
            "extra": "iterations: 502322\ncpu: 1394.709369687173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1071.0710804654389,
            "unit": "ns/iter",
            "extra": "iterations: 643482\ncpu: 1071.014263025222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1137.223517362656,
            "unit": "ns/iter",
            "extra": "iterations: 640514\ncpu: 1137.229318953212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 836.5346173500021,
            "unit": "ns/iter",
            "extra": "iterations: 833686\ncpu: 836.5149468744837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9930.2107366815,
            "unit": "ns/iter",
            "extra": "iterations: 70804\ncpu: 9929.84859612456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12815.352528269546,
            "unit": "ns/iter",
            "extra": "iterations: 54563\ncpu: 12815.193446108153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2875.057417370184,
            "unit": "ns/iter",
            "extra": "iterations: 243132\ncpu: 2874.9683299606936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2854.2902468897155,
            "unit": "ns/iter",
            "extra": "iterations: 242497\ncpu: 2854.3029398301833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2851.332242419513,
            "unit": "ns/iter",
            "extra": "iterations: 244749\ncpu: 2851.212466649499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4961.900492387002,
            "unit": "ns/iter",
            "extra": "iterations: 140743\ncpu: 4961.926348024424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5445.157127070025,
            "unit": "ns/iter",
            "extra": "iterations: 127591\ncpu: 5445.108197286621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1955.2563657296043,
            "unit": "ns/iter",
            "extra": "iterations: 358757\ncpu: 1955.2660993374245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10280.375845548037,
            "unit": "ns/iter",
            "extra": "iterations: 69925\ncpu: 10280.018591347778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8289.748868644327,
            "unit": "ns/iter",
            "extra": "iterations: 84633\ncpu: 8289.774674181463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8106.913563613513,
            "unit": "ns/iter",
            "extra": "iterations: 86098\ncpu: 8106.937443378427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7917.012490091152,
            "unit": "ns/iter",
            "extra": "iterations: 88310\ncpu: 7916.837277771506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17856.34645689349,
            "unit": "ns/iter",
            "extra": "iterations: 39344\ncpu: 17856.425376169376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55376.35117296225,
            "unit": "ns/iter",
            "extra": "iterations: 12575\ncpu: 55374.059642146254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44150.97238022825,
            "unit": "ns/iter",
            "extra": "iterations: 15822\ncpu: 44151.219820503575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44364.4836327773,
            "unit": "ns/iter",
            "extra": "iterations: 16252\ncpu: 44363.782919024845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43929.0008154503,
            "unit": "ns/iter",
            "extra": "iterations: 15942\ncpu: 43928.754234098546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25125.552801725513,
            "unit": "ns/iter",
            "extra": "iterations: 27840\ncpu: 25125.3591954022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43210.328383041175,
            "unit": "ns/iter",
            "extra": "iterations: 16228\ncpu: 43210.50653192017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1908.9735009485937,
            "unit": "ns/iter",
            "extra": "iterations: 366315\ncpu: 1908.9837980972602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10204.051761583787,
            "unit": "ns/iter",
            "extra": "iterations: 68603\ncpu: 10204.008571053797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8213.09501497293,
            "unit": "ns/iter",
            "extra": "iterations: 85155\ncpu: 8212.860078680123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8016.814255629472,
            "unit": "ns/iter",
            "extra": "iterations: 86899\ncpu: 8016.85289819219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8017.545442047179,
            "unit": "ns/iter",
            "extra": "iterations: 87287\ncpu: 8017.582228739752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17897.16928044294,
            "unit": "ns/iter",
            "extra": "iterations: 39024\ncpu: 17897.24784747837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 50614.37239748187,
            "unit": "ns/iter",
            "extra": "iterations: 12680\ncpu: 50614.045741325266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43374.8273916582,
            "unit": "ns/iter",
            "extra": "iterations: 16129\ncpu: 43375.03875007748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42529.526647665356,
            "unit": "ns/iter",
            "extra": "iterations: 16493\ncpu: 42530.36439701674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42388.767738018025,
            "unit": "ns/iter",
            "extra": "iterations: 16490\ncpu: 42388.95694360162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25044.863624989288,
            "unit": "ns/iter",
            "extra": "iterations: 27967\ncpu: 25043.844531054518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42282.36267416506,
            "unit": "ns/iter",
            "extra": "iterations: 16723\ncpu: 42282.586856425674 ns\nthreads: 1"
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
        "date": 1705575671883,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 580.6754113331154,
            "unit": "ns/iter",
            "extra": "iterations: 1202371\ncpu: 580.6567190991799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5322.367479999457,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5322.235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10346.39520662145,
            "unit": "ns/iter",
            "extra": "iterations: 80945\ncpu: 10346.178269195134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15470.50363663237,
            "unit": "ns/iter",
            "extra": "iterations: 53896\ncpu: 15470.11652070655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20538.982681756006,
            "unit": "ns/iter",
            "extra": "iterations: 40824\ncpu: 20538.952576915544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25612.463870674073,
            "unit": "ns/iter",
            "extra": "iterations: 32785\ncpu: 25611.593716638712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32293.112995173204,
            "unit": "ns/iter",
            "extra": "iterations: 27364\ncpu: 32291.002777371734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35743.712595894576,
            "unit": "ns/iter",
            "extra": "iterations: 23333\ncpu: 35742.720610294426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40087.362447926476,
            "unit": "ns/iter",
            "extra": "iterations: 20883\ncpu: 40086.481827323645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 561.2212267086649,
            "unit": "ns/iter",
            "extra": "iterations: 1246816\ncpu: 561.2049412262916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 410.9450419601907,
            "unit": "ns/iter",
            "extra": "iterations: 1815294\ncpu: 410.93844853781246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 419.67670075342124,
            "unit": "ns/iter",
            "extra": "iterations: 1667217\ncpu: 419.6760229772127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 413.8240389329304,
            "unit": "ns/iter",
            "extra": "iterations: 1695017\ncpu: 413.80682317640463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 878.166747969181,
            "unit": "ns/iter",
            "extra": "iterations: 801533\ncpu: 878.1491217454542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1652.1432011846848,
            "unit": "ns/iter",
            "extra": "iterations: 482084\ncpu: 1652.1158138415733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9132.791385078943,
            "unit": "ns/iter",
            "extra": "iterations: 89078\ncpu: 9132.253755135953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7023.318453511646,
            "unit": "ns/iter",
            "extra": "iterations: 115772\ncpu: 7022.81812528074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7463.729646372537,
            "unit": "ns/iter",
            "extra": "iterations: 108617\ncpu: 7463.436662769205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6880.894191980774,
            "unit": "ns/iter",
            "extra": "iterations: 117751\ncpu: 6880.459613931092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35576.126042516975,
            "unit": "ns/iter",
            "extra": "iterations: 23381\ncpu: 35574.427954321814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 248279.87110064487,
            "unit": "ns/iter",
            "extra": "iterations: 3398\ncpu: 248268.36374337834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 188505.11893479008,
            "unit": "ns/iter",
            "extra": "iterations: 4431\ncpu: 188497.58519521554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 196233.3567986588,
            "unit": "ns/iter",
            "extra": "iterations: 4773\ncpu: 196228.03268384645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 190139.36380009318,
            "unit": "ns/iter",
            "extra": "iterations: 4442\ncpu: 190134.01620891466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99125.46986456146,
            "unit": "ns/iter",
            "extra": "iterations: 8860\ncpu: 99123.30699774258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 194203.15443926165,
            "unit": "ns/iter",
            "extra": "iterations: 4280\ncpu: 194193.5280373829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4983.686146775965,
            "unit": "ns/iter",
            "extra": "iterations: 158418\ncpu: 4983.370576575872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23313.93347843104,
            "unit": "ns/iter",
            "extra": "iterations: 35838\ncpu: 23313.072716111372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18305.347419711674,
            "unit": "ns/iter",
            "extra": "iterations: 45150\ncpu: 18304.564784053153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19137.821361329246,
            "unit": "ns/iter",
            "extra": "iterations: 45147\ncpu: 19137.10767049862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17937.637078896078,
            "unit": "ns/iter",
            "extra": "iterations: 46010\ncpu: 17936.844164312086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49512.203329514,
            "unit": "ns/iter",
            "extra": "iterations: 16579\ncpu: 49510.597744134284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 270581.5269516725,
            "unit": "ns/iter",
            "extra": "iterations: 3228\ncpu: 270569.268897149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 209078.14570333387,
            "unit": "ns/iter",
            "extra": "iterations: 4166\ncpu: 209066.20259241588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 208556.91947430692,
            "unit": "ns/iter",
            "extra": "iterations: 4185\ncpu: 208547.07287933188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 207099.30597745324,
            "unit": "ns/iter",
            "extra": "iterations: 4082\ncpu: 207085.6687898093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110543.74217642653,
            "unit": "ns/iter",
            "extra": "iterations: 7765\ncpu: 110538.99549259502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 200682.78275860279,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 200669.95402298804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 786130.3415883514,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 786099.4876174246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 433612.14512135094,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 433599.6532937128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1655.586950345588,
            "unit": "ns/iter",
            "extra": "iterations: 478710\ncpu: 1655.539888450213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9432.6392042197,
            "unit": "ns/iter",
            "extra": "iterations: 87210\ncpu: 9432.402247448676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7269.770252832435,
            "unit": "ns/iter",
            "extra": "iterations: 112367\ncpu: 7269.580926784517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7186.699316750528,
            "unit": "ns/iter",
            "extra": "iterations: 111965\ncpu: 7186.632429777193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6568.834756830286,
            "unit": "ns/iter",
            "extra": "iterations: 124810\ncpu: 6568.722057527414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35313.664522677944,
            "unit": "ns/iter",
            "extra": "iterations: 23632\ncpu: 35312.313811780565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 262428.5362232922,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 262423.0106888362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 201852.65575620253,
            "unit": "ns/iter",
            "extra": "iterations: 4430\ncpu: 201848.7584650101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 197176.88921415992,
            "unit": "ns/iter",
            "extra": "iterations: 4441\ncpu: 197172.43863994628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 195516.42889624622,
            "unit": "ns/iter",
            "extra": "iterations: 4838\ncpu: 195505.62215791535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95169.51853089049,
            "unit": "ns/iter",
            "extra": "iterations: 8985\ncpu: 95165.48692264916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 174532.3090986372,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 174520.89710884413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 184.7040502840863,
            "unit": "ns/iter",
            "extra": "iterations: 3789191\ncpu: 184.69939889543758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1422.4368586953133,
            "unit": "ns/iter",
            "extra": "iterations: 514576\ncpu: 1422.3951369671402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1021.048537628859,
            "unit": "ns/iter",
            "extra": "iterations: 685633\ncpu: 1021.0148869730563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1135.7756191623396,
            "unit": "ns/iter",
            "extra": "iterations: 614540\ncpu: 1135.77488853451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 831.415853545462,
            "unit": "ns/iter",
            "extra": "iterations: 840998\ncpu: 831.3504907264908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9723.837600251642,
            "unit": "ns/iter",
            "extra": "iterations: 72691\ncpu: 9723.566878980906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11978.02642616656,
            "unit": "ns/iter",
            "extra": "iterations: 55551\ncpu: 11977.38474554912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2908.5740950953186,
            "unit": "ns/iter",
            "extra": "iterations: 240495\ncpu: 2908.405995966667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2895.7775081271593,
            "unit": "ns/iter",
            "extra": "iterations: 241465\ncpu: 2895.6266953802633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2883.502666677594,
            "unit": "ns/iter",
            "extra": "iterations: 244124\ncpu: 2883.461683406797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5327.288970166149,
            "unit": "ns/iter",
            "extra": "iterations: 132332\ncpu: 5326.957954236353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5470.5592296486975,
            "unit": "ns/iter",
            "extra": "iterations: 126955\ncpu: 5470.327281320136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1987.9382184805518,
            "unit": "ns/iter",
            "extra": "iterations: 352306\ncpu: 1987.88496363956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10350.886170906819,
            "unit": "ns/iter",
            "extra": "iterations: 67452\ncpu: 10350.680483899492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8351.408482463205,
            "unit": "ns/iter",
            "extra": "iterations: 83820\ncpu: 8351.21212121213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8217.889423359178,
            "unit": "ns/iter",
            "extra": "iterations: 85443\ncpu: 8217.31914843819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8184.162614034085,
            "unit": "ns/iter",
            "extra": "iterations: 85829\ncpu: 8183.801512309272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18102.850578582806,
            "unit": "ns/iter",
            "extra": "iterations: 38629\ncpu: 18102.02438582402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55532.229821076166,
            "unit": "ns/iter",
            "extra": "iterations: 12575\ncpu: 55529.200795228666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44648.21436716232,
            "unit": "ns/iter",
            "extra": "iterations: 15786\ncpu: 44645.850753832034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43765.04024181592,
            "unit": "ns/iter",
            "extra": "iterations: 16376\ncpu: 43764.22203224287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43982.1760545747,
            "unit": "ns/iter",
            "extra": "iterations: 15978\ncpu: 43981.186631618766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26080.61824081901,
            "unit": "ns/iter",
            "extra": "iterations: 26501\ncpu: 26079.89132485563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43083.14103118361,
            "unit": "ns/iter",
            "extra": "iterations: 16195\ncpu: 43082.02531645556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1918.3755954998928,
            "unit": "ns/iter",
            "extra": "iterations: 361671\ncpu: 1918.305310627612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10053.434396651484,
            "unit": "ns/iter",
            "extra": "iterations: 69280\ncpu: 10053.334295611992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8058.978581809532,
            "unit": "ns/iter",
            "extra": "iterations: 86702\ncpu: 8058.834859634268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8037.535762621604,
            "unit": "ns/iter",
            "extra": "iterations: 87186\ncpu: 8037.195191888728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7986.651587690408,
            "unit": "ns/iter",
            "extra": "iterations: 87517\ncpu: 7986.444919272827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18004.28094529298,
            "unit": "ns/iter",
            "extra": "iterations: 38972\ncpu: 18003.81555988886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53784.40150340639,
            "unit": "ns/iter",
            "extra": "iterations: 12904\ncpu: 53783.73372597588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40752.59508827111,
            "unit": "ns/iter",
            "extra": "iterations: 16369\ncpu: 40751.43869509369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42436.772001712045,
            "unit": "ns/iter",
            "extra": "iterations: 16351\ncpu: 42435.96721913049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42484.33777777831,
            "unit": "ns/iter",
            "extra": "iterations: 16425\ncpu: 42483.592085235316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25169.676949042863,
            "unit": "ns/iter",
            "extra": "iterations: 27847\ncpu: 25169.11336948319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42786.753923531214,
            "unit": "ns/iter",
            "extra": "iterations: 16503\ncpu: 42785.53596315777 ns\nthreads: 1"
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
        "date": 1705773457833,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 613.6695627414747,
            "unit": "ns/iter",
            "extra": "iterations: 1222229\ncpu: 613.6438425205098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5352.921779999633,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5352.626999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10281.008684647648,
            "unit": "ns/iter",
            "extra": "iterations: 80602\ncpu: 10280.650604203372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15376.277813293285,
            "unit": "ns/iter",
            "extra": "iterations: 54749\ncpu: 15375.756634824376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20131.171605504784,
            "unit": "ns/iter",
            "extra": "iterations: 41339\ncpu: 20130.54742494981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25335.91276203016,
            "unit": "ns/iter",
            "extra": "iterations: 33059\ncpu: 25334.8649384434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29987.53232442764,
            "unit": "ns/iter",
            "extra": "iterations: 27951\ncpu: 29986.99867625488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35129.54749423634,
            "unit": "ns/iter",
            "extra": "iterations: 23845\ncpu: 35128.106521283284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39021.85788948395,
            "unit": "ns/iter",
            "extra": "iterations: 21047\ncpu: 39019.6560079822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 555.7194913097948,
            "unit": "ns/iter",
            "extra": "iterations: 1257740\ncpu: 555.7053127037382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 424.1947977865899,
            "unit": "ns/iter",
            "extra": "iterations: 1661908\ncpu: 424.1655976143077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 418.27444647622224,
            "unit": "ns/iter",
            "extra": "iterations: 1670118\ncpu: 418.2366156163818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 409.34096580388865,
            "unit": "ns/iter",
            "extra": "iterations: 1710368\ncpu: 409.3097508840193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 834.91631095543,
            "unit": "ns/iter",
            "extra": "iterations: 799806\ncpu: 834.8843344511051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1658.8365938074166,
            "unit": "ns/iter",
            "extra": "iterations: 483672\ncpu: 1658.8111364726483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8858.415942282352,
            "unit": "ns/iter",
            "extra": "iterations: 91342\ncpu: 8858.204330975896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7365.994137589526,
            "unit": "ns/iter",
            "extra": "iterations: 110023\ncpu: 7365.731710642322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7495.237972691669,
            "unit": "ns/iter",
            "extra": "iterations: 108025\ncpu: 7494.986345753295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6867.569813128757,
            "unit": "ns/iter",
            "extra": "iterations: 116819\ncpu: 6867.198828957626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35687.486087818026,
            "unit": "ns/iter",
            "extra": "iterations: 23253\ncpu: 35684.77185739479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 227932.78463296304,
            "unit": "ns/iter",
            "extra": "iterations: 3501\ncpu: 227912.93916023982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 198578.70751522336,
            "unit": "ns/iter",
            "extra": "iterations: 4431\ncpu: 198574.27217332396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 195454.66312215838,
            "unit": "ns/iter",
            "extra": "iterations: 4420\ncpu: 195446.42533936663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 190023.55698779481,
            "unit": "ns/iter",
            "extra": "iterations: 4422\ncpu: 190018.88285843565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98603.74178616169,
            "unit": "ns/iter",
            "extra": "iterations: 8857\ncpu: 98600.3161341312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 187860.40410811218,
            "unit": "ns/iter",
            "extra": "iterations: 4625\ncpu: 187852.1729729735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5168.810524352656,
            "unit": "ns/iter",
            "extra": "iterations: 160865\ncpu: 5168.44372610574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 22764.764024069904,
            "unit": "ns/iter",
            "extra": "iterations: 36063\ncpu: 22762.90103430114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17590.115505295147,
            "unit": "ns/iter",
            "extra": "iterations: 45894\ncpu: 17588.4320390465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17583.517760726598,
            "unit": "ns/iter",
            "extra": "iterations: 45747\ncpu: 17582.105930443486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17407.847009883073,
            "unit": "ns/iter",
            "extra": "iterations: 47356\ncpu: 17406.563054312046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49449.84278875053,
            "unit": "ns/iter",
            "extra": "iterations: 16710\ncpu: 49445.374027528414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 255617.09284391647,
            "unit": "ns/iter",
            "extra": "iterations: 3242\ncpu: 255607.68044417017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 207629.54970344395,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 207622.633451957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205781.68100188713,
            "unit": "ns/iter",
            "extra": "iterations: 4232\ncpu: 205774.881852552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205978.3559801817,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 205972.39915074324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107963.23002600257,
            "unit": "ns/iter",
            "extra": "iterations: 8073\ncpu: 107959.68041620204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 198024.20836171825,
            "unit": "ns/iter",
            "extra": "iterations: 4401\ncpu: 198012.01999545543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 793352.3410981166,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 793327.870216309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 446093.3172833312,
            "unit": "ns/iter",
            "extra": "iterations: 1973\ncpu: 446083.0207805397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1691.6967917691989,
            "unit": "ns/iter",
            "extra": "iterations: 474997\ncpu: 1691.6361577020382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8699.698592088947,
            "unit": "ns/iter",
            "extra": "iterations: 93969\ncpu: 8699.489193244599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7202.395402217648,
            "unit": "ns/iter",
            "extra": "iterations: 113272\ncpu: 7202.22385055444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7203.9066650202585,
            "unit": "ns/iter",
            "extra": "iterations: 113323\ncpu: 7203.749459509532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7109.560090344709,
            "unit": "ns/iter",
            "extra": "iterations: 113787\ncpu: 7109.3771696239555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35153.74380928338,
            "unit": "ns/iter",
            "extra": "iterations: 23826\ncpu: 35152.67774699915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 262397.8496751191,
            "unit": "ns/iter",
            "extra": "iterations: 3386\ncpu: 262391.90785587643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 197749.56559765863,
            "unit": "ns/iter",
            "extra": "iterations: 4459\ncpu: 197745.79502130533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 197368.41586594452,
            "unit": "ns/iter",
            "extra": "iterations: 4475\ncpu: 197360.20111731807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 196548.4920177402,
            "unit": "ns/iter",
            "extra": "iterations: 4510\ncpu: 196543.59201773888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98232.34473596187,
            "unit": "ns/iter",
            "extra": "iterations: 9033\ncpu: 98229.08225395763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 188594.20383385953,
            "unit": "ns/iter",
            "extra": "iterations: 4695\ncpu: 188590.13844515456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 185.40817564220893,
            "unit": "ns/iter",
            "extra": "iterations: 3774309\ncpu: 185.40347385441967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1380.0351807824597,
            "unit": "ns/iter",
            "extra": "iterations: 502206\ncpu: 1379.9970530021558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1095.940195862123,
            "unit": "ns/iter",
            "extra": "iterations: 638919\ncpu: 1095.863325398061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1142.7083722961352,
            "unit": "ns/iter",
            "extra": "iterations: 613834\ncpu: 1142.5908307457712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 840.3598968268851,
            "unit": "ns/iter",
            "extra": "iterations: 833550\ncpu: 840.2867254513809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9786.489676005667,
            "unit": "ns/iter",
            "extra": "iterations: 72162\ncpu: 9786.257309941484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12227.368092582652,
            "unit": "ns/iter",
            "extra": "iterations: 57203\ncpu: 12226.526580773701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2770.4136827352445,
            "unit": "ns/iter",
            "extra": "iterations: 251821\ncpu: 2770.1613447647387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2772.8144898155524,
            "unit": "ns/iter",
            "extra": "iterations: 252536\ncpu: 2772.582918870959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2779.8365220169717,
            "unit": "ns/iter",
            "extra": "iterations: 250260\ncpu: 2779.772236873653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5197.406580494043,
            "unit": "ns/iter",
            "extra": "iterations: 135309\ncpu: 5196.856824010224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5248.04370722582,
            "unit": "ns/iter",
            "extra": "iterations: 133113\ncpu: 5247.71585044285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1923.1527174586183,
            "unit": "ns/iter",
            "extra": "iterations: 363115\ncpu: 1922.9996006774538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10113.547699245459,
            "unit": "ns/iter",
            "extra": "iterations: 69173\ncpu: 10113.153976262429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8165.650084247247,
            "unit": "ns/iter",
            "extra": "iterations: 84869\ncpu: 8165.4302513284665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8033.8716812121165,
            "unit": "ns/iter",
            "extra": "iterations: 86854\ncpu: 8033.122251134098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8119.069962968872,
            "unit": "ns/iter",
            "extra": "iterations: 85874\ncpu: 8118.527144420948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18026.883785736223,
            "unit": "ns/iter",
            "extra": "iterations: 38756\ncpu: 18025.028382701974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56621.536966558364,
            "unit": "ns/iter",
            "extra": "iterations: 12349\ncpu: 56620.20406510674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45335.38535113675,
            "unit": "ns/iter",
            "extra": "iterations: 15578\ncpu: 45331.634356143375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45133.70205941134,
            "unit": "ns/iter",
            "extra": "iterations: 15587\ncpu: 45130.51260665956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45807.01982205983,
            "unit": "ns/iter",
            "extra": "iterations: 15286\ncpu: 45802.67565092295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25426.250680701392,
            "unit": "ns/iter",
            "extra": "iterations: 27545\ncpu: 25424.414594299793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44207.945857469844,
            "unit": "ns/iter",
            "extra": "iterations: 15884\ncpu: 44206.39637370965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1943.720097207023,
            "unit": "ns/iter",
            "extra": "iterations: 358821\ncpu: 1943.5980614289676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10395.964723903364,
            "unit": "ns/iter",
            "extra": "iterations: 67241\ncpu: 10394.830534941475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8353.036543747072,
            "unit": "ns/iter",
            "extra": "iterations: 84392\ncpu: 8352.484832685577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8278.11891596193,
            "unit": "ns/iter",
            "extra": "iterations: 84093\ncpu: 8277.288240400481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8260.700136837062,
            "unit": "ns/iter",
            "extra": "iterations: 84772\ncpu: 8260.377247204302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18100.240237207257,
            "unit": "ns/iter",
            "extra": "iterations: 38616\ncpu: 18099.81354878825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54682.30232376139,
            "unit": "ns/iter",
            "extra": "iterations: 12738\ncpu: 54677.359083058276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43458.53680004735,
            "unit": "ns/iter",
            "extra": "iterations: 16019\ncpu: 43457.531681128734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43244.60014956562,
            "unit": "ns/iter",
            "extra": "iterations: 16046\ncpu: 43242.97021064466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44356.7034802439,
            "unit": "ns/iter",
            "extra": "iterations: 15746\ncpu: 44353.34688174723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25332.429058962716,
            "unit": "ns/iter",
            "extra": "iterations: 27544\ncpu: 25330.827040371478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43244.79749749227,
            "unit": "ns/iter",
            "extra": "iterations: 16943\ncpu: 43239.98111314465 ns\nthreads: 1"
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
        "date": 1705774907390,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 589.2649593209359,
            "unit": "ns/iter",
            "extra": "iterations: 1188941\ncpu: 589.2391632553675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5401.3538200001685,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5400.993000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10418.674339759464,
            "unit": "ns/iter",
            "extra": "iterations: 79933\ncpu: 10418.086397357785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15742.923528189893,
            "unit": "ns/iter",
            "extra": "iterations: 53013\ncpu: 15741.557731122555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20970.680781516967,
            "unit": "ns/iter",
            "extra": "iterations: 40076\ncpu: 20969.05130252521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25913.160514611212,
            "unit": "ns/iter",
            "extra": "iterations: 31480\ncpu: 25911.59783989833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30344.10249900321,
            "unit": "ns/iter",
            "extra": "iterations: 27571\ncpu: 30342.185629828422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35593.237742520505,
            "unit": "ns/iter",
            "extra": "iterations: 23761\ncpu: 35589.07453390009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40227.70073838107,
            "unit": "ns/iter",
            "extra": "iterations: 20721\ncpu: 40225.24492061189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 541.2870897093935,
            "unit": "ns/iter",
            "extra": "iterations: 1265688\ncpu: 541.2680692240117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 417.57307667076196,
            "unit": "ns/iter",
            "extra": "iterations: 1676910\ncpu: 417.56289842627285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 423.59811845808565,
            "unit": "ns/iter",
            "extra": "iterations: 1649073\ncpu: 423.5941040815051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 417.84211552916736,
            "unit": "ns/iter",
            "extra": "iterations: 1676460\ncpu: 417.8385407346427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 884.0023262554444,
            "unit": "ns/iter",
            "extra": "iterations: 790111\ncpu: 883.9841490625993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1653.762381192633,
            "unit": "ns/iter",
            "extra": "iterations: 481557\ncpu: 1653.66384457084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9345.953958309652,
            "unit": "ns/iter",
            "extra": "iterations: 87790\ncpu: 9345.441394236255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7244.07691277981,
            "unit": "ns/iter",
            "extra": "iterations: 112049\ncpu: 7243.828146614416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6994.5690834589,
            "unit": "ns/iter",
            "extra": "iterations: 117387\ncpu: 6994.426128958072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6707.114295282962,
            "unit": "ns/iter",
            "extra": "iterations: 119445\ncpu: 6707.0492695382745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35638.83527583957,
            "unit": "ns/iter",
            "extra": "iterations: 23166\ncpu: 35637.5032375033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 249925.83190393815,
            "unit": "ns/iter",
            "extra": "iterations: 3498\ncpu: 249918.7249857063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 179694.33972601703,
            "unit": "ns/iter",
            "extra": "iterations: 4380\ncpu: 179685.22831050213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 190439.89364606587,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 190434.22910498714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 180290.88142559363,
            "unit": "ns/iter",
            "extra": "iterations: 4377\ncpu: 180283.3904500797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95822.5795737724,
            "unit": "ns/iter",
            "extra": "iterations: 8822\ncpu: 95819.45137157092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 181285.3036796629,
            "unit": "ns/iter",
            "extra": "iterations: 4620\ncpu: 181280.0649350652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5116.131420650213,
            "unit": "ns/iter",
            "extra": "iterations: 161588\ncpu: 5115.97643389361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 22693.503293771617,
            "unit": "ns/iter",
            "extra": "iterations: 36736\ncpu: 22692.522321428576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18092.951041780958,
            "unit": "ns/iter",
            "extra": "iterations: 44875\ncpu: 18092.336490250724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17663.108264410275,
            "unit": "ns/iter",
            "extra": "iterations: 45823\ncpu: 17662.5559216987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17242.609467331633,
            "unit": "ns/iter",
            "extra": "iterations: 48229\ncpu: 17242.217338116137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50543.43350172468,
            "unit": "ns/iter",
            "extra": "iterations: 16429\ncpu: 50542.40063302703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 274884.1142768411,
            "unit": "ns/iter",
            "extra": "iterations: 3229\ncpu: 274871.29142149293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 197972.18129498287,
            "unit": "ns/iter",
            "extra": "iterations: 4170\ncpu: 197965.3237410073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 196568.9668905889,
            "unit": "ns/iter",
            "extra": "iterations: 4168\ncpu: 196548.848368522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 207019.10695692437,
            "unit": "ns/iter",
            "extra": "iterations: 4226\ncpu: 207003.02886890594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108145.93650393553,
            "unit": "ns/iter",
            "extra": "iterations: 7969\ncpu: 108138.22311456881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197270.55613166455,
            "unit": "ns/iter",
            "extra": "iterations: 4436\ncpu: 197253.58431018904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 787589.0091133887,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 787505.7995028987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 445591.26160760625,
            "unit": "ns/iter",
            "extra": "iterations: 2003\ncpu: 445545.6814777845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1705.749710215306,
            "unit": "ns/iter",
            "extra": "iterations: 476216\ncpu: 1705.6518470609994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9290.093087890767,
            "unit": "ns/iter",
            "extra": "iterations: 88873\ncpu: 9289.507499465517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7293.402973090958,
            "unit": "ns/iter",
            "extra": "iterations: 110861\ncpu: 7292.786462326737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7208.104830358316,
            "unit": "ns/iter",
            "extra": "iterations: 114919\ncpu: 7207.492233660188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6978.579109364484,
            "unit": "ns/iter",
            "extra": "iterations: 117287\ncpu: 6977.993298490056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35280.06028190177,
            "unit": "ns/iter",
            "extra": "iterations: 23838\ncpu: 35276.88144978591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 260990.71512480098,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 260966.46108663813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200055.57196974027,
            "unit": "ns/iter",
            "extra": "iterations: 4488\ncpu: 200040.41889483057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 186561.28844523002,
            "unit": "ns/iter",
            "extra": "iterations: 4708\ncpu: 186555.4163126596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 187383.59488649515,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 187374.71897729632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97534.33451446275,
            "unit": "ns/iter",
            "extra": "iterations: 9031\ncpu: 97529.43195659383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 180043.95343913525,
            "unit": "ns/iter",
            "extra": "iterations: 4725\ncpu: 180039.42857142846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 185.27909852661193,
            "unit": "ns/iter",
            "extra": "iterations: 3777150\ncpu: 185.27731225924438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1390.8664328675345,
            "unit": "ns/iter",
            "extra": "iterations: 504136\ncpu: 1390.8354094926765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1027.752693630383,
            "unit": "ns/iter",
            "extra": "iterations: 681608\ncpu: 1027.7156371404135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1084.7472125830864,
            "unit": "ns/iter",
            "extra": "iterations: 654728\ncpu: 1084.6620275900827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 836.2682622867833,
            "unit": "ns/iter",
            "extra": "iterations: 836916\ncpu: 836.2495160804633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9758.075190809544,
            "unit": "ns/iter",
            "extra": "iterations: 71538\ncpu: 9757.587575833828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12478.337452811926,
            "unit": "ns/iter",
            "extra": "iterations: 56156\ncpu: 12477.706745494635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2813.1869982229723,
            "unit": "ns/iter",
            "extra": "iterations: 248243\ncpu: 2813.0412539326308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2820.7203159760065,
            "unit": "ns/iter",
            "extra": "iterations: 249006\ncpu: 2820.5400673076088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2798.827307375757,
            "unit": "ns/iter",
            "extra": "iterations: 250306\ncpu: 2798.6947975677836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5121.614237839948,
            "unit": "ns/iter",
            "extra": "iterations: 136369\ncpu: 5121.232831508667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5263.438070906105,
            "unit": "ns/iter",
            "extra": "iterations: 132684\ncpu: 5263.144011335204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1934.9648134861086,
            "unit": "ns/iter",
            "extra": "iterations: 362440\ncpu: 1934.8700474561347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10017.628920734238,
            "unit": "ns/iter",
            "extra": "iterations: 69853\ncpu: 10017.220448656475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8106.901320982397,
            "unit": "ns/iter",
            "extra": "iterations: 86148\ncpu: 8106.46329572363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8090.658260879822,
            "unit": "ns/iter",
            "extra": "iterations: 86607\ncpu: 8090.053921738522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8043.476623168194,
            "unit": "ns/iter",
            "extra": "iterations: 87052\ncpu: 8042.86977898273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18019.82980103341,
            "unit": "ns/iter",
            "extra": "iterations: 38549\ncpu: 18018.213183221356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55245.08776129618,
            "unit": "ns/iter",
            "extra": "iterations: 12534\ncpu: 55243.609382479306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45897.64025346689,
            "unit": "ns/iter",
            "extra": "iterations: 15939\ncpu: 45895.501599849544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44295.53864612228,
            "unit": "ns/iter",
            "extra": "iterations: 15836\ncpu: 44291.99924223256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43967.73842592501,
            "unit": "ns/iter",
            "extra": "iterations: 15984\ncpu: 43963.46971971968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25293.081291162984,
            "unit": "ns/iter",
            "extra": "iterations: 27789\ncpu: 25291.093598186548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43218.53245392186,
            "unit": "ns/iter",
            "extra": "iterations: 16223\ncpu: 43215.773901250985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1932.110902619602,
            "unit": "ns/iter",
            "extra": "iterations: 361858\ncpu: 1931.9722100934923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10108.944487770055,
            "unit": "ns/iter",
            "extra": "iterations: 69246\ncpu: 10107.825722785485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7977.94331706015,
            "unit": "ns/iter",
            "extra": "iterations: 87469\ncpu: 7977.46858887142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8053.4160094716735,
            "unit": "ns/iter",
            "extra": "iterations: 86986\ncpu: 8053.090152438304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8027.069507269635,
            "unit": "ns/iter",
            "extra": "iterations: 86883\ncpu: 8026.622008908566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18007.230888070913,
            "unit": "ns/iter",
            "extra": "iterations: 38837\ncpu: 18006.220871848942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53684.1758538221,
            "unit": "ns/iter",
            "extra": "iterations: 12971\ncpu: 53678.26690309077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42739.78953160735,
            "unit": "ns/iter",
            "extra": "iterations: 16354\ncpu: 42736.400880518755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42744.19619046436,
            "unit": "ns/iter",
            "extra": "iterations: 16800\ncpu: 42741.4940476188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42604.47122434467,
            "unit": "ns/iter",
            "extra": "iterations: 16368\ncpu: 42602.90200390953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24858.719578030534,
            "unit": "ns/iter",
            "extra": "iterations: 28154\ncpu: 24858.133835334334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41939.66406668658,
            "unit": "ns/iter",
            "extra": "iterations: 16795\ncpu: 41937.92795474827 ns\nthreads: 1"
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
        "date": 1705778447225,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 565.4639686057617,
            "unit": "ns/iter",
            "extra": "iterations: 1234368\ncpu: 565.4296773733603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5313.745720000043,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5313.333999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10382.072435410058,
            "unit": "ns/iter",
            "extra": "iterations: 80237\ncpu: 10381.60449667859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15364.6930064755,
            "unit": "ns/iter",
            "extra": "iterations: 54050\ncpu: 15363.914893617019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20577.16037317949,
            "unit": "ns/iter",
            "extra": "iterations: 40624\ncpu: 20576.137258763298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25510.76485312763,
            "unit": "ns/iter",
            "extra": "iterations: 33158\ncpu: 25509.195367633743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30406.029428631413,
            "unit": "ns/iter",
            "extra": "iterations: 27898\ncpu: 30346.5804000287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35445.73429346969,
            "unit": "ns/iter",
            "extra": "iterations: 23955\ncpu: 35443.72364850762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40432.2186327517,
            "unit": "ns/iter",
            "extra": "iterations: 20523\ncpu: 40429.01622569799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 551.9860487019612,
            "unit": "ns/iter",
            "extra": "iterations: 1269846\ncpu: 551.9475589953415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 417.8272619366452,
            "unit": "ns/iter",
            "extra": "iterations: 1674848\ncpu: 417.81881102046276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 419.1961898715312,
            "unit": "ns/iter",
            "extra": "iterations: 1672752\ncpu: 419.19794446516926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 388.5492704896972,
            "unit": "ns/iter",
            "extra": "iterations: 1698948\ncpu: 388.5413208644404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 875.5048874506748,
            "unit": "ns/iter",
            "extra": "iterations: 800315\ncpu: 875.4996470139872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1638.3399393084453,
            "unit": "ns/iter",
            "extra": "iterations: 483098\ncpu: 1638.3330090375066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8750.08339874586,
            "unit": "ns/iter",
            "extra": "iterations: 92999\ncpu: 8750.04247357498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7134.659686281448,
            "unit": "ns/iter",
            "extra": "iterations: 112840\ncpu: 7134.479794399144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7219.516268942088,
            "unit": "ns/iter",
            "extra": "iterations: 112515\ncpu: 7219.3227569657465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7021.492282201959,
            "unit": "ns/iter",
            "extra": "iterations: 116484\ncpu: 7021.389203667458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35262.57232542354,
            "unit": "ns/iter",
            "extra": "iterations: 23256\ncpu: 35261.96250429993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 246966.09727295893,
            "unit": "ns/iter",
            "extra": "iterations: 3557\ncpu: 246958.6449254997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197044.21465731482,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 197041.41596923745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 188098.7063205305,
            "unit": "ns/iter",
            "extra": "iterations: 4430\ncpu: 188096.72686230225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 188834.06219017218,
            "unit": "ns/iter",
            "extra": "iterations: 4438\ncpu: 188830.84722848068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98551.84044841967,
            "unit": "ns/iter",
            "extra": "iterations: 8831\ncpu: 98548.53357490666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 188082.3081733857,
            "unit": "ns/iter",
            "extra": "iterations: 4637\ncpu: 188077.07569549276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5057.690667720136,
            "unit": "ns/iter",
            "extra": "iterations: 164590\ncpu: 5057.635336290176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 22738.37550872387,
            "unit": "ns/iter",
            "extra": "iterations: 35874\ncpu: 22737.84913865195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18602.430599229443,
            "unit": "ns/iter",
            "extra": "iterations: 45158\ncpu: 18601.59218743081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18586.658644211526,
            "unit": "ns/iter",
            "extra": "iterations: 44417\ncpu: 18586.10216808883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18226.995552392244,
            "unit": "ns/iter",
            "extra": "iterations: 44968\ncpu: 18226.72344778508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49960.571073827276,
            "unit": "ns/iter",
            "extra": "iterations: 16511\ncpu: 49960.51723093687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 270248.0785819784,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 270241.1816838989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 208141.1403006513,
            "unit": "ns/iter",
            "extra": "iterations: 4191\ncpu: 208140.30064423714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 206956.4556480412,
            "unit": "ns/iter",
            "extra": "iterations: 4205\ncpu: 206952.86563614762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 206144.3701605295,
            "unit": "ns/iter",
            "extra": "iterations: 4236\ncpu: 206137.53541076535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107779.79460685125,
            "unit": "ns/iter",
            "extra": "iterations: 7936\ncpu: 107778.12499999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197625.162870649,
            "unit": "ns/iter",
            "extra": "iterations: 4654\ncpu: 197621.40094542358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 796401.1574150883,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 796375.8077879029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 442762.0089820253,
            "unit": "ns/iter",
            "extra": "iterations: 2004\ncpu: 442750.3493014005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1643.0042247045637,
            "unit": "ns/iter",
            "extra": "iterations: 482874\ncpu: 1643.0006585569017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9404.36639914158,
            "unit": "ns/iter",
            "extra": "iterations: 87593\ncpu: 9404.275455801217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6780.691867873418,
            "unit": "ns/iter",
            "extra": "iterations: 120854\ncpu: 6780.621245469768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6806.212059972133,
            "unit": "ns/iter",
            "extra": "iterations: 119254\ncpu: 6806.039210424792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6583.947016915979,
            "unit": "ns/iter",
            "extra": "iterations: 123379\ncpu: 6583.885426207097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34876.60208002921,
            "unit": "ns/iter",
            "extra": "iterations: 23942\ncpu: 34876.200818645055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 260022.8634762039,
            "unit": "ns/iter",
            "extra": "iterations: 3406\ncpu: 260019.2894891364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 197781.02779024097,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 197775.5042581798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 196589.4527462808,
            "unit": "ns/iter",
            "extra": "iterations: 4497\ncpu: 196586.1907938628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 196932.90390189606,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 196928.42809364514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96658.47166482889,
            "unit": "ns/iter",
            "extra": "iterations: 9070\ncpu: 96657.48621830181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 186745.13696298806,
            "unit": "ns/iter",
            "extra": "iterations: 4702\ncpu: 186740.0893236926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 186.17807357595643,
            "unit": "ns/iter",
            "extra": "iterations: 3761799\ncpu: 186.17674681714723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1352.5606242844942,
            "unit": "ns/iter",
            "extra": "iterations: 517136\ncpu: 1352.543238142382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1050.2605873336393,
            "unit": "ns/iter",
            "extra": "iterations: 661498\ncpu: 1050.2461080759056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1079.4766389279757,
            "unit": "ns/iter",
            "extra": "iterations: 648793\ncpu: 1079.468644082174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 831.5361673533339,
            "unit": "ns/iter",
            "extra": "iterations: 848265\ncpu: 831.5048952862624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9674.310827762347,
            "unit": "ns/iter",
            "extra": "iterations: 72545\ncpu: 9674.239437590453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12239.53680550765,
            "unit": "ns/iter",
            "extra": "iterations: 56948\ncpu: 12239.379785067187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2760.7212908083716,
            "unit": "ns/iter",
            "extra": "iterations: 252245\ncpu: 2760.6513508691837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2770.3649775574563,
            "unit": "ns/iter",
            "extra": "iterations: 252421\ncpu: 2770.2699062280835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2766.3315662457976,
            "unit": "ns/iter",
            "extra": "iterations: 252770\ncpu: 2766.282391106547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5166.359644864045,
            "unit": "ns/iter",
            "extra": "iterations: 135948\ncpu: 5166.384205725727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5183.352128137926,
            "unit": "ns/iter",
            "extra": "iterations: 135729\ncpu: 5183.323387043334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1946.6167657163871,
            "unit": "ns/iter",
            "extra": "iterations: 358911\ncpu: 1946.6090479255213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10052.28090953643,
            "unit": "ns/iter",
            "extra": "iterations: 69574\ncpu: 10052.040992324715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8209.391762898931,
            "unit": "ns/iter",
            "extra": "iterations: 85904\ncpu: 8209.348807971677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8637.066702932874,
            "unit": "ns/iter",
            "extra": "iterations: 86398\ncpu: 8636.977707817245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7890.341544350157,
            "unit": "ns/iter",
            "extra": "iterations: 88296\ncpu: 7890.226057805605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17777.71371070593,
            "unit": "ns/iter",
            "extra": "iterations: 39254\ncpu: 17777.296581240393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52428.28671641882,
            "unit": "ns/iter",
            "extra": "iterations: 13400\ncpu: 52426.23134328358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42265.492290882714,
            "unit": "ns/iter",
            "extra": "iterations: 16474\ncpu: 42265.67925215496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42164.34769454439,
            "unit": "ns/iter",
            "extra": "iterations: 16526\ncpu: 42163.687522691376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42348.399602508645,
            "unit": "ns/iter",
            "extra": "iterations: 16604\ncpu: 42346.946518910714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25353.940042372906,
            "unit": "ns/iter",
            "extra": "iterations: 28320\ncpu: 25353.520480226172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43108.397560522724,
            "unit": "ns/iter",
            "extra": "iterations: 16151\ncpu: 43107.86948176519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1966.4838216751432,
            "unit": "ns/iter",
            "extra": "iterations: 359277\ncpu: 1966.459584109194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10126.997235488965,
            "unit": "ns/iter",
            "extra": "iterations: 69090\ncpu: 10126.822984513039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8166.57521430435,
            "unit": "ns/iter",
            "extra": "iterations: 85509\ncpu: 8166.533347366891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8201.77666850431,
            "unit": "ns/iter",
            "extra": "iterations: 85241\ncpu: 8201.726868525766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8165.2760865759665,
            "unit": "ns/iter",
            "extra": "iterations: 85705\ncpu: 8165.182894813483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17922.34741915673,
            "unit": "ns/iter",
            "extra": "iterations: 39212\ncpu: 17922.115678873994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53905.63817885204,
            "unit": "ns/iter",
            "extra": "iterations: 12871\ncpu: 53904.69272006861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41127.73902574026,
            "unit": "ns/iter",
            "extra": "iterations: 16197\ncpu: 41127.085262703076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41799.57632052105,
            "unit": "ns/iter",
            "extra": "iterations: 16149\ncpu: 41799.052572914654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43212.49131604972,
            "unit": "ns/iter",
            "extra": "iterations: 16352\ncpu: 43212.27372798518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25475.169865295953,
            "unit": "ns/iter",
            "extra": "iterations: 27616\ncpu: 25474.583574739227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43723.13634109913,
            "unit": "ns/iter",
            "extra": "iterations: 16136\ncpu: 43722.97347545858 ns\nthreads: 1"
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
        "date": 1705953649672,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 590.5116948790475,
            "unit": "ns/iter",
            "extra": "iterations: 1192445\ncpu: 590.498345835657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5423.571970000012,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5423.38 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10262.808622305254,
            "unit": "ns/iter",
            "extra": "iterations: 80025\ncpu: 10262.318025616994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15347.6212655844,
            "unit": "ns/iter",
            "extra": "iterations: 55263\ncpu: 15347.311944700796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20434.670652251123,
            "unit": "ns/iter",
            "extra": "iterations: 40981\ncpu: 20434.320782801784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25204.077466056977,
            "unit": "ns/iter",
            "extra": "iterations: 33292\ncpu: 25203.01874324163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30110.610098832003,
            "unit": "ns/iter",
            "extra": "iterations: 27825\ncpu: 30109.746630727772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35177.999704727896,
            "unit": "ns/iter",
            "extra": "iterations: 20320\ncpu: 35177.598425196855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40157.42223994475,
            "unit": "ns/iter",
            "extra": "iterations: 21322\ncpu: 40156.58943813904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 553.8306627991606,
            "unit": "ns/iter",
            "extra": "iterations: 1266975\ncpu: 553.8120325973292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 419.8852396802781,
            "unit": "ns/iter",
            "extra": "iterations: 1667972\ncpu: 419.87395471866455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 422.2951920337434,
            "unit": "ns/iter",
            "extra": "iterations: 1660099\ncpu: 422.29367043772646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 414.86941732829763,
            "unit": "ns/iter",
            "extra": "iterations: 1685752\ncpu: 414.84909998623726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 882.4133371630168,
            "unit": "ns/iter",
            "extra": "iterations: 793812\ncpu: 882.3857538056858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1655.0867845634718,
            "unit": "ns/iter",
            "extra": "iterations: 481664\ncpu: 1655.036706085571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9885.807240668677,
            "unit": "ns/iter",
            "extra": "iterations: 82009\ncpu: 9885.771073906531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7377.416839916943,
            "unit": "ns/iter",
            "extra": "iterations: 109668\ncpu: 7377.1765692818335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7517.95677504706,
            "unit": "ns/iter",
            "extra": "iterations: 107276\ncpu: 7517.7215779857515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7331.886776286497,
            "unit": "ns/iter",
            "extra": "iterations: 109712\ncpu: 7331.862512760691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35734.61184953577,
            "unit": "ns/iter",
            "extra": "iterations: 23022\ncpu: 35733.93275996879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 250090.53920178913,
            "unit": "ns/iter",
            "extra": "iterations: 3533\ncpu: 250084.74384375877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 198503.32581452804,
            "unit": "ns/iter",
            "extra": "iterations: 4389\ncpu: 198495.62542720485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 190488.2896473131,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 190480.34129692818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 191045.34083389468,
            "unit": "ns/iter",
            "extra": "iterations: 4533\ncpu: 191042.84138539576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98338.64591307279,
            "unit": "ns/iter",
            "extra": "iterations: 8882\ncpu: 98333.57351947764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 188288.99870353672,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 188275.88591184068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4992.46768700225,
            "unit": "ns/iter",
            "extra": "iterations: 165305\ncpu: 4992.365627174009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23345.40522068608,
            "unit": "ns/iter",
            "extra": "iterations: 34823\ncpu: 23345.085144875586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18574.73262209171,
            "unit": "ns/iter",
            "extra": "iterations: 45273\ncpu: 18574.24071742536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18214.353853577413,
            "unit": "ns/iter",
            "extra": "iterations: 45581\ncpu: 18213.72940479581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17855.23130200038,
            "unit": "ns/iter",
            "extra": "iterations: 45914\ncpu: 17854.90482205868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50921.066875074706,
            "unit": "ns/iter",
            "extra": "iterations: 16314\ncpu: 50920.91455191846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 267941.2790411983,
            "unit": "ns/iter",
            "extra": "iterations: 3254\ncpu: 267924.5851259983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 207615.0756641214,
            "unit": "ns/iter",
            "extra": "iterations: 4216\ncpu: 207606.52277039946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 206565.8705547647,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 206557.89473684193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 206145.37378756792,
            "unit": "ns/iter",
            "extra": "iterations: 4227\ncpu: 206139.2240359589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107767.16334859523,
            "unit": "ns/iter",
            "extra": "iterations: 8087\ncpu: 107761.8276245828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197478.7233409596,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 197472.54004576648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 791994.3073130618,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 791991.7830731347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 452535.76950716466,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 452527.31006159994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1658.2381354460294,
            "unit": "ns/iter",
            "extra": "iterations: 483204\ncpu: 1658.1961242042628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9183.531770172542,
            "unit": "ns/iter",
            "extra": "iterations: 89093\ncpu: 9183.40273646636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7107.645570390297,
            "unit": "ns/iter",
            "extra": "iterations: 115044\ncpu: 7107.633601056977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7230.881687516502,
            "unit": "ns/iter",
            "extra": "iterations: 112710\ncpu: 7230.757696743897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7113.23240943769,
            "unit": "ns/iter",
            "extra": "iterations: 115417\ncpu: 7113.028410026263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34933.52420770659,
            "unit": "ns/iter",
            "extra": "iterations: 23918\ncpu: 34932.15151768552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 263379.3980409761,
            "unit": "ns/iter",
            "extra": "iterations: 3369\ncpu: 263372.92965271603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 199163.86436469888,
            "unit": "ns/iter",
            "extra": "iterations: 4431\ncpu: 199148.11554953764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 199193.4412556,
            "unit": "ns/iter",
            "extra": "iterations: 4460\ncpu: 199179.23766816134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 198629.94054538565,
            "unit": "ns/iter",
            "extra": "iterations: 4474\ncpu: 198613.74608851154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97381.14622746965,
            "unit": "ns/iter",
            "extra": "iterations: 8986\ncpu: 97376.44113064816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 186949.15966921666,
            "unit": "ns/iter",
            "extra": "iterations: 4716\ncpu: 186933.14249363946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 187.15857517542088,
            "unit": "ns/iter",
            "extra": "iterations: 3744489\ncpu: 187.15376116741209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1391.5246862707427,
            "unit": "ns/iter",
            "extra": "iterations: 502344\ncpu: 1391.4293790709096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1132.8898482736288,
            "unit": "ns/iter",
            "extra": "iterations: 617757\ncpu: 1132.8357266692215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1099.7944615567187,
            "unit": "ns/iter",
            "extra": "iterations: 636966\ncpu: 1099.7346797160312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 844.1397348447425,
            "unit": "ns/iter",
            "extra": "iterations: 827138\ncpu: 844.0914333521152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9794.769024613563,
            "unit": "ns/iter",
            "extra": "iterations: 70895\ncpu: 9794.484801466991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11746.75242939136,
            "unit": "ns/iter",
            "extra": "iterations: 59377\ncpu: 11746.543274331785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2767.5466253058253,
            "unit": "ns/iter",
            "extra": "iterations: 253060\ncpu: 2767.48636686951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2753.732077582304,
            "unit": "ns/iter",
            "extra": "iterations: 253872\ncpu: 2753.697532614842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2749.5867531272474,
            "unit": "ns/iter",
            "extra": "iterations: 254913\ncpu: 2749.5165017083996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5176.3983149312235,
            "unit": "ns/iter",
            "extra": "iterations: 133407\ncpu: 5176.2905994438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5149.066833600644,
            "unit": "ns/iter",
            "extra": "iterations: 132987\ncpu: 5148.87395008533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1953.1921784555482,
            "unit": "ns/iter",
            "extra": "iterations: 354150\ncpu: 1953.1692785543075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10065.117019590676,
            "unit": "ns/iter",
            "extra": "iterations: 69373\ncpu: 10064.809075576826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8149.860517776334,
            "unit": "ns/iter",
            "extra": "iterations: 85674\ncpu: 8149.737376566975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8059.612656458745,
            "unit": "ns/iter",
            "extra": "iterations: 87323\ncpu: 8059.118445312231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8042.784846863037,
            "unit": "ns/iter",
            "extra": "iterations: 87863\ncpu: 8042.630003528285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18855.02253740994,
            "unit": "ns/iter",
            "extra": "iterations: 38425\ncpu: 18854.23552374758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55212.876253647024,
            "unit": "ns/iter",
            "extra": "iterations: 12663\ncpu: 55211.06372897485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46134.19591475439,
            "unit": "ns/iter",
            "extra": "iterations: 15813\ncpu: 46133.23847467241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41896.200858477554,
            "unit": "ns/iter",
            "extra": "iterations: 15842\ncpu: 41893.914909733394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43887.71782955709,
            "unit": "ns/iter",
            "extra": "iterations: 15923\ncpu: 43885.51780443378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25168.609069471164,
            "unit": "ns/iter",
            "extra": "iterations: 27565\ncpu: 25167.36441139129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42713.41707898224,
            "unit": "ns/iter",
            "extra": "iterations: 16371\ncpu: 42711.42874595323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1925.653207949417,
            "unit": "ns/iter",
            "extra": "iterations: 362194\ncpu: 1925.5733115402322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10038.459808550577,
            "unit": "ns/iter",
            "extra": "iterations: 69679\ncpu: 10037.629701918731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8065.995564020085,
            "unit": "ns/iter",
            "extra": "iterations: 86114\ncpu: 8065.863854889908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7993.105320936828,
            "unit": "ns/iter",
            "extra": "iterations: 87447\ncpu: 7992.9991880796515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7937.9745465278265,
            "unit": "ns/iter",
            "extra": "iterations: 88043\ncpu: 7937.653192190093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17993.236704041934,
            "unit": "ns/iter",
            "extra": "iterations: 38884\ncpu: 17993.171998765563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53751.16557212055,
            "unit": "ns/iter",
            "extra": "iterations: 12943\ncpu: 53750.421077029874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42303.23265851594,
            "unit": "ns/iter",
            "extra": "iterations: 16449\ncpu: 42302.55334670751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42644.1500061019,
            "unit": "ns/iter",
            "extra": "iterations: 16386\ncpu: 42642.31050897108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42222.6811115774,
            "unit": "ns/iter",
            "extra": "iterations: 16661\ncpu: 42221.89544445082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25133.453081959604,
            "unit": "ns/iter",
            "extra": "iterations: 27953\ncpu: 25132.651236002872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42350.82956448718,
            "unit": "ns/iter",
            "extra": "iterations: 16716\ncpu: 42350.30509691308 ns\nthreads: 1"
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
        "date": 1705955061830,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 570.590439982819,
            "unit": "ns/iter",
            "extra": "iterations: 1198115\ncpu: 570.5533275186439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5317.4196899999515,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5317.135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10252.091292359159,
            "unit": "ns/iter",
            "extra": "iterations: 81595\ncpu: 10251.7213064526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15306.32594651328,
            "unit": "ns/iter",
            "extra": "iterations: 54331\ncpu: 15305.678157957704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20175.212108098836,
            "unit": "ns/iter",
            "extra": "iterations: 41592\ncpu: 20174.442200423153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25291.2804973739,
            "unit": "ns/iter",
            "extra": "iterations: 33134\ncpu: 25290.707430433973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30214.724372668006,
            "unit": "ns/iter",
            "extra": "iterations: 27617\ncpu: 30213.22011804326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35540.74855733077,
            "unit": "ns/iter",
            "extra": "iterations: 23914\ncpu: 35539.2698837501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39893.10201605206,
            "unit": "ns/iter",
            "extra": "iterations: 21428\ncpu: 39891.37577002053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 556.174062199426,
            "unit": "ns/iter",
            "extra": "iterations: 1261009\ncpu: 556.1556658199898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 425.43385105389353,
            "unit": "ns/iter",
            "extra": "iterations: 1649603\ncpu: 425.4116899641911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 420.78936104263624,
            "unit": "ns/iter",
            "extra": "iterations: 1661535\ncpu: 420.7883071978626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 416.3029205933696,
            "unit": "ns/iter",
            "extra": "iterations: 1681850\ncpu: 416.29402146445835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 882.974558399974,
            "unit": "ns/iter",
            "extra": "iterations: 786232\ncpu: 882.977034768362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1663.932232991981,
            "unit": "ns/iter",
            "extra": "iterations: 478094\ncpu: 1663.8472768953366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9239.963889825842,
            "unit": "ns/iter",
            "extra": "iterations: 88950\ncpu: 9239.669477234404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7420.485288202071,
            "unit": "ns/iter",
            "extra": "iterations: 109368\ncpu: 7419.942762051067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7320.436773054269,
            "unit": "ns/iter",
            "extra": "iterations: 111511\ncpu: 7320.2374653621855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7073.552034730931,
            "unit": "ns/iter",
            "extra": "iterations: 114020\ncpu: 7073.351166462038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35881.98548646131,
            "unit": "ns/iter",
            "extra": "iterations: 23013\ncpu: 35880.515360882906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 258086.34952841897,
            "unit": "ns/iter",
            "extra": "iterations: 3499\ncpu: 258073.79251214562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 200216.9346699672,
            "unit": "ns/iter",
            "extra": "iterations: 4439\ncpu: 200211.93962604128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 187128.76396939062,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 187118.1776025972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 192853.43532683377,
            "unit": "ns/iter",
            "extra": "iterations: 4314\ncpu: 192839.98609179395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99710.33318041319,
            "unit": "ns/iter",
            "extra": "iterations: 8719\ncpu: 99706.10161715797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 185951.08287047403,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 185944.87891579623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5070.266991816696,
            "unit": "ns/iter",
            "extra": "iterations: 159106\ncpu: 5070.234309202676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 22886.168824588163,
            "unit": "ns/iter",
            "extra": "iterations: 35528\ncpu: 22885.791488403498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18256.175077032927,
            "unit": "ns/iter",
            "extra": "iterations: 44786\ncpu: 18255.99294422365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18144.652535126555,
            "unit": "ns/iter",
            "extra": "iterations: 45619\ncpu: 18144.474889848523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17199.371164620552,
            "unit": "ns/iter",
            "extra": "iterations: 47844\ncpu: 17199.097065462778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50566.2061517917,
            "unit": "ns/iter",
            "extra": "iterations: 16483\ncpu: 50564.029606260905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 275366.2908684559,
            "unit": "ns/iter",
            "extra": "iterations: 3132\ncpu: 275356.13026819803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 213259.73434442535,
            "unit": "ns/iter",
            "extra": "iterations: 4088\ncpu: 213252.15264187797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 208443.44749754615,
            "unit": "ns/iter",
            "extra": "iterations: 4076\ncpu: 208435.5986261044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 212055.3293192487,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 212045.51486851755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108996.66392092672,
            "unit": "ns/iter",
            "extra": "iterations: 7891\ncpu: 108993.8917754407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 198366.26062455119,
            "unit": "ns/iter",
            "extra": "iterations: 4259\ncpu: 198357.50176097755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 836549.8417021065,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 836506.9787234045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 433540.8166258823,
            "unit": "ns/iter",
            "extra": "iterations: 2045\ncpu: 433530.85574572074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1673.1369725890745,
            "unit": "ns/iter",
            "extra": "iterations: 489514\ncpu: 1673.0792173461887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8875.956712982956,
            "unit": "ns/iter",
            "extra": "iterations: 92984\ncpu: 8875.764647681362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7304.444427582762,
            "unit": "ns/iter",
            "extra": "iterations: 112025\ncpu: 7304.229413077452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7324.225872653942,
            "unit": "ns/iter",
            "extra": "iterations: 111585\ncpu: 7323.946767038581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7062.24850434918,
            "unit": "ns/iter",
            "extra": "iterations: 123692\ncpu: 7062.141448113054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35052.250773603286,
            "unit": "ns/iter",
            "extra": "iterations: 23914\ncpu: 35051.01614117269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 260527.82399765198,
            "unit": "ns/iter",
            "extra": "iterations: 3392\ncpu: 260520.07665094236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 196359.4235555522,
            "unit": "ns/iter",
            "extra": "iterations: 4500\ncpu: 196355.66666666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 196906.2444046454,
            "unit": "ns/iter",
            "extra": "iterations: 4468\ncpu: 196899.68666069763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 183684.58159643837,
            "unit": "ns/iter",
            "extra": "iterations: 4510\ncpu: 183681.4855875832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97699.71835728036,
            "unit": "ns/iter",
            "extra": "iterations: 8912\ncpu: 97697.486535009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 186688.1751531738,
            "unit": "ns/iter",
            "extra": "iterations: 4733\ncpu: 186683.62560743678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 184.4029280337635,
            "unit": "ns/iter",
            "extra": "iterations: 3797224\ncpu: 184.39725968233552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1380.1259062032664,
            "unit": "ns/iter",
            "extra": "iterations: 504026\ncpu: 1380.0847575323432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1028.3587521080567,
            "unit": "ns/iter",
            "extra": "iterations: 682527\ncpu: 1028.336900957766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1028.5706844310012,
            "unit": "ns/iter",
            "extra": "iterations: 681515\ncpu: 1028.5343682824287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 841.3637203310097,
            "unit": "ns/iter",
            "extra": "iterations: 833657\ncpu: 841.363414449827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9715.522957936577,
            "unit": "ns/iter",
            "extra": "iterations: 71631\ncpu: 9715.145677150998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12344.6801626549,
            "unit": "ns/iter",
            "extra": "iterations: 56807\ncpu: 12344.337845688118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2739.4018569194864,
            "unit": "ns/iter",
            "extra": "iterations: 264201\ncpu: 2739.268208674476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2768.7615267850406,
            "unit": "ns/iter",
            "extra": "iterations: 252976\ncpu: 2768.644851685519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2750.5160093190943,
            "unit": "ns/iter",
            "extra": "iterations: 254102\ncpu: 2750.4411614233677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5094.898002102977,
            "unit": "ns/iter",
            "extra": "iterations: 136944\ncpu: 5094.716088328051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5140.143066989761,
            "unit": "ns/iter",
            "extra": "iterations: 142961\ncpu: 5139.926273599082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1930.1929575875972,
            "unit": "ns/iter",
            "extra": "iterations: 364023\ncpu: 1930.141776755842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10053.209632659702,
            "unit": "ns/iter",
            "extra": "iterations: 69908\ncpu: 10052.92527321617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8111.063654579045,
            "unit": "ns/iter",
            "extra": "iterations: 86341\ncpu: 8110.7897754253845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8055.434864928165,
            "unit": "ns/iter",
            "extra": "iterations: 86620\ncpu: 8055.431770953737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7968.83459711882,
            "unit": "ns/iter",
            "extra": "iterations: 86117\ncpu: 7968.538151584446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18002.106386253625,
            "unit": "ns/iter",
            "extra": "iterations: 38990\ncpu: 18001.390100025437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54587.59696658019,
            "unit": "ns/iter",
            "extra": "iterations: 12659\ncpu: 54585.654475077026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44369.282118607094,
            "unit": "ns/iter",
            "extra": "iterations: 15614\ncpu: 44368.323299602234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44907.77978362498,
            "unit": "ns/iter",
            "extra": "iterations: 15898\ncpu: 44905.69883004201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45125.370616290325,
            "unit": "ns/iter",
            "extra": "iterations: 15512\ncpu: 45124.8388344511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25394.440657666677,
            "unit": "ns/iter",
            "extra": "iterations: 27552\ncpu: 25393.96051103368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43833.870654559585,
            "unit": "ns/iter",
            "extra": "iterations: 15965\ncpu: 43832.546194800874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1937.0182541025924,
            "unit": "ns/iter",
            "extra": "iterations: 360193\ncpu: 1936.9890586435615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10304.443640109213,
            "unit": "ns/iter",
            "extra": "iterations: 67965\ncpu: 10304.444934892983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8152.839406715084,
            "unit": "ns/iter",
            "extra": "iterations: 85153\ncpu: 8152.5430695337045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8170.180601616697,
            "unit": "ns/iter",
            "extra": "iterations: 85636\ncpu: 8169.782568078743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8121.917303449604,
            "unit": "ns/iter",
            "extra": "iterations: 86110\ncpu: 8121.76286145628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18208.75143828629,
            "unit": "ns/iter",
            "extra": "iterations: 38240\ncpu: 18207.978556485705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51466.20514858224,
            "unit": "ns/iter",
            "extra": "iterations: 12586\ncpu: 51466.09725091432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44056.01638315414,
            "unit": "ns/iter",
            "extra": "iterations: 15931\ncpu: 44052.8529282525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42025.6622622867,
            "unit": "ns/iter",
            "extra": "iterations: 16196\ncpu: 42024.95677945141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43708.364305481795,
            "unit": "ns/iter",
            "extra": "iterations: 16983\ncpu: 43707.2896425836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25293.625599768766,
            "unit": "ns/iter",
            "extra": "iterations: 27719\ncpu: 25293.50986687865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43124.40621754973,
            "unit": "ns/iter",
            "extra": "iterations: 16373\ncpu: 43124.11897636332 ns\nthreads: 1"
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
        "date": 1705957098076,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 589.6243834868529,
            "unit": "ns/iter",
            "extra": "iterations: 1191175\ncpu: 589.610594580981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5571.552930000508,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5571.440999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10945.475503448772,
            "unit": "ns/iter",
            "extra": "iterations: 75827\ncpu: 10945.13168132723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16313.3873513136,
            "unit": "ns/iter",
            "extra": "iterations: 51199\ncpu: 16312.927986874736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21249.27714249349,
            "unit": "ns/iter",
            "extra": "iterations: 39265\ncpu: 21248.923978097544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26536.09718475185,
            "unit": "ns/iter",
            "extra": "iterations: 31507\ncpu: 26535.062049703247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31901.98511599502,
            "unit": "ns/iter",
            "extra": "iterations: 26337\ncpu: 31900.23541025933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36808.72978128312,
            "unit": "ns/iter",
            "extra": "iterations: 22541\ncpu: 36807.84348520475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41525.33090072958,
            "unit": "ns/iter",
            "extra": "iterations: 20006\ncpu: 41523.74787563728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 565.0092373048142,
            "unit": "ns/iter",
            "extra": "iterations: 1238673\ncpu: 564.9916483204208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 436.1238416494097,
            "unit": "ns/iter",
            "extra": "iterations: 1557279\ncpu: 436.11427367864127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 435.8834943395169,
            "unit": "ns/iter",
            "extra": "iterations: 1589794\ncpu: 435.8744592066643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 434.83016524508776,
            "unit": "ns/iter",
            "extra": "iterations: 1609488\ncpu: 434.8155438251169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 920.6206670536026,
            "unit": "ns/iter",
            "extra": "iterations: 720122\ncpu: 920.5502678712778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1741.2692852762534,
            "unit": "ns/iter",
            "extra": "iterations: 482648\ncpu: 1741.1716198969013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9461.572435018728,
            "unit": "ns/iter",
            "extra": "iterations: 85449\ncpu: 9461.262273402846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7107.25977641336,
            "unit": "ns/iter",
            "extra": "iterations: 113513\ncpu: 7106.712887510665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7494.7422842935,
            "unit": "ns/iter",
            "extra": "iterations: 107832\ncpu: 7494.407040581621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7214.444654819132,
            "unit": "ns/iter",
            "extra": "iterations: 110913\ncpu: 7214.001063896906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35681.16063338261,
            "unit": "ns/iter",
            "extra": "iterations: 23177\ncpu: 35676.86068084729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 260937.554909936,
            "unit": "ns/iter",
            "extra": "iterations: 3442\ncpu: 260927.51307379428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 198145.04792255626,
            "unit": "ns/iter",
            "extra": "iterations: 4236\ncpu: 198145.0188857409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 191339.3345917703,
            "unit": "ns/iter",
            "extra": "iterations: 4238\ncpu: 191333.10523832028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 197739.16819788056,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 197734.36984687822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102333.11708749182,
            "unit": "ns/iter",
            "extra": "iterations: 8515\ncpu: 102327.44568408703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 195184.98606115932,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 195169.76169064763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4959.853280781606,
            "unit": "ns/iter",
            "extra": "iterations: 162126\ncpu: 4959.606725633143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23409.378622218177,
            "unit": "ns/iter",
            "extra": "iterations: 35579\ncpu: 23407.850136316312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18213.555580301898,
            "unit": "ns/iter",
            "extra": "iterations: 44899\ncpu: 18212.254170471508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18268.23692996999,
            "unit": "ns/iter",
            "extra": "iterations: 45524\ncpu: 18266.263948686425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17418.700054791047,
            "unit": "ns/iter",
            "extra": "iterations: 47452\ncpu: 17417.92548259297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49978.392704375095,
            "unit": "ns/iter",
            "extra": "iterations: 16832\ncpu: 49975.30299429669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 278769.1203585343,
            "unit": "ns/iter",
            "extra": "iterations: 3124\ncpu: 278762.6120358511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 216008.8545183783,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 216002.40814299995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 215138.35585699423,
            "unit": "ns/iter",
            "extra": "iterations: 4055\ncpu: 215131.81257706578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 213772.29247362592,
            "unit": "ns/iter",
            "extra": "iterations: 4079\ncpu: 213761.8288796278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112058.14896356882,
            "unit": "ns/iter",
            "extra": "iterations: 7767\ncpu: 112057.37092828599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 204604.217993901,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 204596.85224336386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 814734.4854700948,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 814720.2564102545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 447761.8477182992,
            "unit": "ns/iter",
            "extra": "iterations: 2016\ncpu: 447748.1646825401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1664.320414526697,
            "unit": "ns/iter",
            "extra": "iterations: 483636\ncpu: 1664.2706498275631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8957.456495736857,
            "unit": "ns/iter",
            "extra": "iterations: 91129\ncpu: 8957.246321149143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7239.126039632971,
            "unit": "ns/iter",
            "extra": "iterations: 113742\ncpu: 7239.062087883099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7361.98310856076,
            "unit": "ns/iter",
            "extra": "iterations: 111891\ncpu: 7361.703801020644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7124.065675564641,
            "unit": "ns/iter",
            "extra": "iterations: 116436\ncpu: 7123.93675495551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35262.35334960787,
            "unit": "ns/iter",
            "extra": "iterations: 23764\ncpu: 35261.60579027102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 270796.6390496666,
            "unit": "ns/iter",
            "extra": "iterations: 3283\ncpu: 270794.2126104174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 204738.34648410193,
            "unit": "ns/iter",
            "extra": "iterations: 4309\ncpu: 204731.81712694393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 203312.994936709,
            "unit": "ns/iter",
            "extra": "iterations: 4345\ncpu: 203307.34177215284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 203087.83364011202,
            "unit": "ns/iter",
            "extra": "iterations: 4346\ncpu: 203080.87896916745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100865.49229885057,
            "unit": "ns/iter",
            "extra": "iterations: 8700\ncpu: 100860.37931034523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 194346.72435188058,
            "unit": "ns/iter",
            "extra": "iterations: 4513\ncpu: 194340.52736538896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 191.3761321368467,
            "unit": "ns/iter",
            "extra": "iterations: 3641013\ncpu: 191.3688305974182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1460.6467075994003,
            "unit": "ns/iter",
            "extra": "iterations: 478997\ncpu: 1460.6195863439618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1130.8943006791642,
            "unit": "ns/iter",
            "extra": "iterations: 617828\ncpu: 1130.8809247881254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1159.5283939452452,
            "unit": "ns/iter",
            "extra": "iterations: 614867\ncpu: 1159.505876880698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 881.3711002159523,
            "unit": "ns/iter",
            "extra": "iterations: 824020\ncpu: 881.3441421324738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9821.506380827332,
            "unit": "ns/iter",
            "extra": "iterations: 71229\ncpu: 9821.282062081447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12760.096606458497,
            "unit": "ns/iter",
            "extra": "iterations: 54810\ncpu: 12759.680715198047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2938.33508444027,
            "unit": "ns/iter",
            "extra": "iterations: 237564\ncpu: 2938.2583219679805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2927.325530109418,
            "unit": "ns/iter",
            "extra": "iterations: 238064\ncpu: 2927.248975065524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2926.9103718640695,
            "unit": "ns/iter",
            "extra": "iterations: 239523\ncpu: 2926.7811441907375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5430.88212662065,
            "unit": "ns/iter",
            "extra": "iterations: 130216\ncpu: 5430.81725747988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5050.681339999983,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5050.6049999999905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2017.2730955349627,
            "unit": "ns/iter",
            "extra": "iterations: 346344\ncpu: 2017.2270921396168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10549.618799703878,
            "unit": "ns/iter",
            "extra": "iterations: 66267\ncpu: 10549.314138258773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8437.236671409486,
            "unit": "ns/iter",
            "extra": "iterations: 82942\ncpu: 8437.156084975093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8392.597051093864,
            "unit": "ns/iter",
            "extra": "iterations: 82946\ncpu: 8392.519229378131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8306.846986840164,
            "unit": "ns/iter",
            "extra": "iterations: 84496\ncpu: 8306.66895474341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18406.79690827425,
            "unit": "ns/iter",
            "extra": "iterations: 38037\ncpu: 18406.096695322743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 57420.65891023657,
            "unit": "ns/iter",
            "extra": "iterations: 12076\ncpu: 57417.273931765405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43450.570614964854,
            "unit": "ns/iter",
            "extra": "iterations: 15627\ncpu: 43449.612849555284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44897.4755829008,
            "unit": "ns/iter",
            "extra": "iterations: 15440\ncpu: 44896.386010362214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45588.77003189831,
            "unit": "ns/iter",
            "extra": "iterations: 15363\ncpu: 45587.74327930784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25927.563435333795,
            "unit": "ns/iter",
            "extra": "iterations: 26862\ncpu: 25927.30995458302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44572.68463782628,
            "unit": "ns/iter",
            "extra": "iterations: 15766\ncpu: 44571.628821514125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1998.2268161390125,
            "unit": "ns/iter",
            "extra": "iterations: 350923\ncpu: 1998.2081539255112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10408.29343843056,
            "unit": "ns/iter",
            "extra": "iterations: 66859\ncpu: 10408.102125368272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8463.19895824163,
            "unit": "ns/iter",
            "extra": "iterations: 80057\ncpu: 8462.993866869881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8413.224381924643,
            "unit": "ns/iter",
            "extra": "iterations: 82676\ncpu: 8413.036431370807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8433.236017720797,
            "unit": "ns/iter",
            "extra": "iterations: 82837\ncpu: 8432.945422938932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18417.30224885267,
            "unit": "ns/iter",
            "extra": "iterations: 37886\ncpu: 18416.898062608827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55523.00314897029,
            "unit": "ns/iter",
            "extra": "iterations: 12385\ncpu: 55520.53290270507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43907.23181846912,
            "unit": "ns/iter",
            "extra": "iterations: 15909\ncpu: 43906.84518197177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43827.935793638186,
            "unit": "ns/iter",
            "extra": "iterations: 15933\ncpu: 43826.981736019465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43901.38892396902,
            "unit": "ns/iter",
            "extra": "iterations: 15836\ncpu: 43900.53043697833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25845.654615070554,
            "unit": "ns/iter",
            "extra": "iterations: 27161\ncpu: 25844.70012149772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43126.63503382633,
            "unit": "ns/iter",
            "extra": "iterations: 16407\ncpu: 43125.87919790311 ns\nthreads: 1"
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
        "date": 1705958559289,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 593.685056931972,
            "unit": "ns/iter",
            "extra": "iterations: 1185011\ncpu: 593.6735608361441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5480.779119999397,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5480.565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10710.438844300785,
            "unit": "ns/iter",
            "extra": "iterations: 77875\ncpu: 10710.010914927769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15960.829996177432,
            "unit": "ns/iter",
            "extra": "iterations: 52340\ncpu: 15960.785250286588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21009.488049992855,
            "unit": "ns/iter",
            "extra": "iterations: 39205\ncpu: 21008.886621604386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26274.63615171192,
            "unit": "ns/iter",
            "extra": "iterations: 31744\ncpu: 26274.05808971773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31249.205569848036,
            "unit": "ns/iter",
            "extra": "iterations: 26823\ncpu: 31248.02221973677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36345.79057093542,
            "unit": "ns/iter",
            "extra": "iterations: 23120\ncpu: 36344.94809688581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41582.09806732219,
            "unit": "ns/iter",
            "extra": "iterations: 20231\ncpu: 41580.84128317929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 586.9214738206164,
            "unit": "ns/iter",
            "extra": "iterations: 1193551\ncpu: 586.8945692308077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 444.74290405237724,
            "unit": "ns/iter",
            "extra": "iterations: 1567761\ncpu: 444.7371761384547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 446.6812615004568,
            "unit": "ns/iter",
            "extra": "iterations: 1565691\ncpu: 446.6653381797558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 435.5801100790186,
            "unit": "ns/iter",
            "extra": "iterations: 1585044\ncpu: 435.5735235110196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 876.9567354372731,
            "unit": "ns/iter",
            "extra": "iterations: 795108\ncpu: 876.8871650140607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1638.8633043349341,
            "unit": "ns/iter",
            "extra": "iterations: 484624\ncpu: 1638.7370415002154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9261.84492301344,
            "unit": "ns/iter",
            "extra": "iterations: 87808\ncpu: 9261.317875364435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7523.71551249935,
            "unit": "ns/iter",
            "extra": "iterations: 107249\ncpu: 7523.055692826972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7132.222703289722,
            "unit": "ns/iter",
            "extra": "iterations: 114098\ncpu: 7131.847183999726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7154.052364923986,
            "unit": "ns/iter",
            "extra": "iterations: 113492\ncpu: 7153.506855108727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35817.75502408884,
            "unit": "ns/iter",
            "extra": "iterations: 23039\ncpu: 35814.95724640825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 244190.65185187888,
            "unit": "ns/iter",
            "extra": "iterations: 3510\ncpu: 244169.2592592592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184238.336949158,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 184224.88135593152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 187078.1815122404,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 187060.10769575994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 187190.71177266556,
            "unit": "ns/iter",
            "extra": "iterations: 4434\ncpu: 187179.67974740601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98414.3375860899,
            "unit": "ns/iter",
            "extra": "iterations: 8857\ncpu: 98408.65981709356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 189438.09047309714,
            "unit": "ns/iter",
            "extra": "iterations: 4587\ncpu: 189421.75713974301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5075.290516077107,
            "unit": "ns/iter",
            "extra": "iterations: 157709\ncpu: 5074.916460062506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23793.327248043035,
            "unit": "ns/iter",
            "extra": "iterations: 34619\ncpu: 23791.412230278223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18498.163419205906,
            "unit": "ns/iter",
            "extra": "iterations: 44291\ncpu: 18497.72640039737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18285.81895774063,
            "unit": "ns/iter",
            "extra": "iterations: 45459\ncpu: 18284.909478871054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18194.623463271488,
            "unit": "ns/iter",
            "extra": "iterations: 45714\ncpu: 18194.58152863458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49791.4435342982,
            "unit": "ns/iter",
            "extra": "iterations: 16603\ncpu: 49790.15238209973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 270246.7608560763,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 270239.7022332508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 193587.57293664914,
            "unit": "ns/iter",
            "extra": "iterations: 4168\ncpu: 193576.7754318625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205227.24827915072,
            "unit": "ns/iter",
            "extra": "iterations: 4213\ncpu: 205219.2736767149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 204911.51389543235,
            "unit": "ns/iter",
            "extra": "iterations: 4246\ncpu: 204896.65567593058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 106699.84099999396,
            "unit": "ns/iter",
            "extra": "iterations: 8000\ncpu: 106696.38749999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 195035.54988761933,
            "unit": "ns/iter",
            "extra": "iterations: 4450\ncpu: 195018.1797752812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 776316.5856672114,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 776265.4859967072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 431582.0815429805,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 430576.66015625105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1677.8601400647212,
            "unit": "ns/iter",
            "extra": "iterations: 478064\ncpu: 1677.7170002342814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8924.240227813483,
            "unit": "ns/iter",
            "extra": "iterations: 89898\ncpu: 8923.581169770167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6452.488675787739,
            "unit": "ns/iter",
            "extra": "iterations: 128265\ncpu: 6452.4741745604415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6145.93703676241,
            "unit": "ns/iter",
            "extra": "iterations: 134650\ncpu: 6145.778685480873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 5912.900165046095,
            "unit": "ns/iter",
            "extra": "iterations: 139961\ncpu: 5912.794992890873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34652.72975545398,
            "unit": "ns/iter",
            "extra": "iterations: 24167\ncpu: 34651.061364670655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 256230.83879387766,
            "unit": "ns/iter",
            "extra": "iterations: 3449\ncpu: 256229.97970426176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 194363.30323153952,
            "unit": "ns/iter",
            "extra": "iterations: 4518\ncpu: 194358.3444001764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 194090.25060558517,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 194085.4877780222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 192526.22391688378,
            "unit": "ns/iter",
            "extra": "iterations: 4524\ncpu: 192521.10963748983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96237.51042360392,
            "unit": "ns/iter",
            "extra": "iterations: 9018\ncpu: 96236.50476824079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 185582.54683490834,
            "unit": "ns/iter",
            "extra": "iterations: 4676\ncpu: 185578.9991445676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 187.76103063052201,
            "unit": "ns/iter",
            "extra": "iterations: 3728436\ncpu: 187.75792316134658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1401.4439541571594,
            "unit": "ns/iter",
            "extra": "iterations: 498574\ncpu: 1401.424462567242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1093.1250684103973,
            "unit": "ns/iter",
            "extra": "iterations: 639522\ncpu: 1093.1234578325748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1118.8334419661423,
            "unit": "ns/iter",
            "extra": "iterations: 642839\ncpu: 1118.7622406232329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 830.759550210691,
            "unit": "ns/iter",
            "extra": "iterations: 844929\ncpu: 830.7075505752556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9626.069185555205,
            "unit": "ns/iter",
            "extra": "iterations: 73498\ncpu: 9625.41429698768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11770.607523269582,
            "unit": "ns/iter",
            "extra": "iterations: 59522\ncpu: 11769.345788111874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2768.6705693692534,
            "unit": "ns/iter",
            "extra": "iterations: 252560\ncpu: 2768.5132245803115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2785.96894530674,
            "unit": "ns/iter",
            "extra": "iterations: 252007\ncpu: 2785.708333498683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2711.4314786071786,
            "unit": "ns/iter",
            "extra": "iterations: 255132\ncpu: 2711.291801890785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5152.379931193839,
            "unit": "ns/iter",
            "extra": "iterations: 135743\ncpu: 5152.156648961637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5167.565341370612,
            "unit": "ns/iter",
            "extra": "iterations: 135366\ncpu: 5167.554629670696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1928.5583880832282,
            "unit": "ns/iter",
            "extra": "iterations: 363319\ncpu: 1928.496720512829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10093.692296534628,
            "unit": "ns/iter",
            "extra": "iterations: 68943\ncpu: 10093.680286613631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8105.536055936532,
            "unit": "ns/iter",
            "extra": "iterations: 86241\ncpu: 8105.326932665573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8013.350865924806,
            "unit": "ns/iter",
            "extra": "iterations: 87190\ncpu: 8012.985434109393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7979.054453577309,
            "unit": "ns/iter",
            "extra": "iterations: 87469\ncpu: 7978.962832546482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17867.377430013665,
            "unit": "ns/iter",
            "extra": "iterations: 39043\ncpu: 17866.76484901268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54728.38691969751,
            "unit": "ns/iter",
            "extra": "iterations: 12752\ncpu: 54724.88237139281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43801.07488299538,
            "unit": "ns/iter",
            "extra": "iterations: 16025\ncpu: 43798.10920436827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43601.543357245,
            "unit": "ns/iter",
            "extra": "iterations: 16168\ncpu: 43597.358980703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43799.2566670902,
            "unit": "ns/iter",
            "extra": "iterations: 15974\ncpu: 43797.57731313408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24966.503604020425,
            "unit": "ns/iter",
            "extra": "iterations: 28163\ncpu: 24965.8026488659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44856.97103057622,
            "unit": "ns/iter",
            "extra": "iterations: 16224\ncpu: 44852.78599605522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1917.9136437497325,
            "unit": "ns/iter",
            "extra": "iterations: 364328\ncpu: 1917.8748270788903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10192.552256932031,
            "unit": "ns/iter",
            "extra": "iterations: 68345\ncpu: 10192.335942643796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8172.732721564085,
            "unit": "ns/iter",
            "extra": "iterations: 86307\ncpu: 8172.161006639119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8099.31922956203,
            "unit": "ns/iter",
            "extra": "iterations: 86029\ncpu: 8098.565599972176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7971.137734107336,
            "unit": "ns/iter",
            "extra": "iterations: 87727\ncpu: 7970.323845566309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17954.133560940965,
            "unit": "ns/iter",
            "extra": "iterations: 38956\ncpu: 17953.72471506302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53955.84849190083,
            "unit": "ns/iter",
            "extra": "iterations: 12897\ncpu: 53953.70241141298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43103.417232441476,
            "unit": "ns/iter",
            "extra": "iterations: 16202\ncpu: 43101.92568818663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42950.57187615363,
            "unit": "ns/iter",
            "extra": "iterations: 16278\ncpu: 42949.50239587122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40511.52733491971,
            "unit": "ns/iter",
            "extra": "iterations: 17249\ncpu: 40510.86439793594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24524.4403685721,
            "unit": "ns/iter",
            "extra": "iterations: 28651\ncpu: 24523.939827579885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40396.51827355949,
            "unit": "ns/iter",
            "extra": "iterations: 17539\ncpu: 40395.23347967426 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}