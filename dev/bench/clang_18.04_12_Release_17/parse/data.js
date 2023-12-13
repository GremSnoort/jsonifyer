window.BENCHMARK_DATA = {
  "lastUpdate": 1702493014274,
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
      }
    ]
  }
}