window.BENCHMARK_DATA = {
  "lastUpdate": 1705772704374,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-10 18.04 Debug c++-17": [
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
        "date": 1702489542850,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8536.205143496289,
            "unit": "ns/iter",
            "extra": "iterations: 82162\ncpu: 8536.135926584066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60502.662955247804,
            "unit": "ns/iter",
            "extra": "iterations: 13921\ncpu: 60502.19093455931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 111846.12482121533,
            "unit": "ns/iter",
            "extra": "iterations: 7691\ncpu: 111843.80444675595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 162675.40045378284,
            "unit": "ns/iter",
            "extra": "iterations: 5289\ncpu: 162669.16241255437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 214889.12382368627,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 214882.66468548778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 266127.34327898175,
            "unit": "ns/iter",
            "extra": "iterations: 3251\ncpu: 266125.31528760376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 314796.4799999996,
            "unit": "ns/iter",
            "extra": "iterations: 2750\ncpu: 314783.4545454548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 366150.6592154953,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 366136.4403205403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 416028.714149148,
            "unit": "ns/iter",
            "extra": "iterations: 2092\ncpu: 416012.71510516247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6938.220949052504,
            "unit": "ns/iter",
            "extra": "iterations: 100711\ncpu: 6938.150748180432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5737.531242560172,
            "unit": "ns/iter",
            "extra": "iterations: 121805\ncpu: 5737.423751077538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5635.676165865916,
            "unit": "ns/iter",
            "extra": "iterations: 124221\ncpu: 5635.613946112169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5697.604021227608,
            "unit": "ns/iter",
            "extra": "iterations: 123047\ncpu: 5697.509894593121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10280.53485667106,
            "unit": "ns/iter",
            "extra": "iterations: 67921\ncpu: 10279.992932966245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 32746.654374373415,
            "unit": "ns/iter",
            "extra": "iterations: 24975\ncpu: 32745.50950950949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 150374.58057704617,
            "unit": "ns/iter",
            "extra": "iterations: 5684\ncpu: 150371.3757916961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 117300.52210438644,
            "unit": "ns/iter",
            "extra": "iterations: 7261\ncpu: 117295.7168434099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116189.25382096223,
            "unit": "ns/iter",
            "extra": "iterations: 7328\ncpu: 116184.02019650654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111837.4943040504,
            "unit": "ns/iter",
            "extra": "iterations: 7637\ncpu: 111834.94827811989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 380225.7889649366,
            "unit": "ns/iter",
            "extra": "iterations: 2483\ncpu: 380211.1558598473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1981379.2731183246,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1981315.9139784928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1563900.4577703825,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1563822.4662162128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1563428.6952861885,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1563383.3333333354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1541225.3094841987,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1541175.5407653933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 868887.2624647447,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 868833.3019755401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1511440.553017854,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1511419.2495921652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38055.56638110851,
            "unit": "ns/iter",
            "extra": "iterations: 21595\ncpu: 38053.60963185933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 184397.52398209044,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 184393.2636964398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 144531.26448234497,
            "unit": "ns/iter",
            "extra": "iterations: 5921\ncpu: 144523.28998480007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 143375.5106561489,
            "unit": "ns/iter",
            "extra": "iterations: 5959\ncpu: 143371.87447558308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 142480.78044740047,
            "unit": "ns/iter",
            "extra": "iterations: 6035\ncpu: 142475.16155758116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 338441.0449921721,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 338429.02973396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2044034.1652174438,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2043933.9130434846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1613250.9289429414,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1613197.920277305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1596313.2517240723,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1596231.7241379311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1574105.8279385844,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1574037.649063036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 889482.1759082875,
            "unit": "ns/iter",
            "extra": "iterations: 1046\ncpu: 889432.6959847036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1549390.9133334681,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1549323.3333333358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5525181.020000218,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5524787.999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3479092.0149811776,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3478960.299625465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27658.697588566996,
            "unit": "ns/iter",
            "extra": "iterations: 29526\ncpu: 27657.03786493259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 140707.05298556335,
            "unit": "ns/iter",
            "extra": "iterations: 6096\ncpu: 140701.0826771652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107403.24386560793,
            "unit": "ns/iter",
            "extra": "iterations: 7947\ncpu: 107397.91116144464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113183.29418790317,
            "unit": "ns/iter",
            "extra": "iterations: 7536\ncpu: 113179.06050955354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108992.32048656653,
            "unit": "ns/iter",
            "extra": "iterations: 7810\ncpu: 108984.7759282973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 290919.490268474,
            "unit": "ns/iter",
            "extra": "iterations: 2980\ncpu: 290903.95973154355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2004575.3605149775,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 2004502.5751072983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1565798.0553690386,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1565748.8255033602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1576315.89579829,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1576243.6974789833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1542881.2624585715,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1542835.049833881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 849125.6960874262,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 849100.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1509006.7862969467,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1508937.84665579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3217.8407555862527,
            "unit": "ns/iter",
            "extra": "iterations: 217050\ncpu: 3217.796821008998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20811.05298565219,
            "unit": "ns/iter",
            "extra": "iterations: 33594\ncpu: 20810.990057748266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16083.763663933869,
            "unit": "ns/iter",
            "extra": "iterations: 43527\ncpu: 16083.617065269857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16821.033810268622,
            "unit": "ns/iter",
            "extra": "iterations: 41585\ncpu: 16820.14909222075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12125.308446129167,
            "unit": "ns/iter",
            "extra": "iterations: 57553\ncpu: 12124.408805796484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103123.33141677764,
            "unit": "ns/iter",
            "extra": "iterations: 6783\ncpu: 103119.96166887778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 141392.7548008912,
            "unit": "ns/iter",
            "extra": "iterations: 4947\ncpu: 141386.01172427705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34696.64613789454,
            "unit": "ns/iter",
            "extra": "iterations: 20248\ncpu: 34695.604504148694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33668.62765548211,
            "unit": "ns/iter",
            "extra": "iterations: 20806\ncpu: 33666.3077958281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33547.12069873084,
            "unit": "ns/iter",
            "extra": "iterations: 20895\ncpu: 33546.1306532663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65456.15152651188,
            "unit": "ns/iter",
            "extra": "iterations: 10678\ncpu: 65453.380782918604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56750.060534654025,
            "unit": "ns/iter",
            "extra": "iterations: 12307\ncpu: 56750.645973835795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23952.08006849344,
            "unit": "ns/iter",
            "extra": "iterations: 29200\ncpu: 23951.8458904111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120325.86887781412,
            "unit": "ns/iter",
            "extra": "iterations: 5819\ncpu: 120316.6695308487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 97773.02477728188,
            "unit": "ns/iter",
            "extra": "iterations: 7184\ncpu: 97766.8151447667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97640.32370586628,
            "unit": "ns/iter",
            "extra": "iterations: 7167\ncpu: 97634.65885307589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96843.3039580776,
            "unit": "ns/iter",
            "extra": "iterations: 7251\ncpu: 96840.38063715308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 176676.98789406903,
            "unit": "ns/iter",
            "extra": "iterations: 3965\ncpu: 176667.96973518076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 597864.5008679865,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 597853.124999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 493799.6518361714,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 493774.78813559905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 491906.33310009295,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 491891.182645204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 483618.4264909794,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 483586.8238557595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 307520.748353107,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 307508.12472551217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 478774.7709190155,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 478775.51440329227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24139.0325481666,
            "unit": "ns/iter",
            "extra": "iterations: 28911\ncpu: 24139.043962505402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117133.99615255294,
            "unit": "ns/iter",
            "extra": "iterations: 5978\ncpu: 117125.09200401502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94503.2035302125,
            "unit": "ns/iter",
            "extra": "iterations: 7365\ncpu: 94500.09504412813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96759.32235195625,
            "unit": "ns/iter",
            "extra": "iterations: 7194\ncpu: 96757.7703641921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 96978.22890896426,
            "unit": "ns/iter",
            "extra": "iterations: 7195\ncpu: 96978.29047950002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 172361.09169124532,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 172361.25860373548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 600398.6977739867,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 600372.5171232922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 487296.64231031964,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 487302.08768267056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 486216.80446929374,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 486209.706703909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 480039.33584644337,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 480008.8416723827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 303664.62337666366,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 303651.4285714291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 473888.68449554406,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 473866.28300609224 ns\nthreads: 1"
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
        "date": 1702492166277,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8407.419618968566,
            "unit": "ns/iter",
            "extra": "iterations: 86712\ncpu: 8407.26081741858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60449.492299994745,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60447.85 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 112483.297503283,
            "unit": "ns/iter",
            "extra": "iterations: 7610\ncpu: 112480.01314060444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 164838.72302157036,
            "unit": "ns/iter",
            "extra": "iterations: 5282\ncpu: 164836.5013252556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 216643.74461616756,
            "unit": "ns/iter",
            "extra": "iterations: 3947\ncpu: 216636.8887762856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 266470.9941913812,
            "unit": "ns/iter",
            "extra": "iterations: 3271\ncpu: 266468.0525833077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 319803.4156848005,
            "unit": "ns/iter",
            "extra": "iterations: 2716\ncpu: 319796.4285714285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 365715.2055023135,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 365714.71446436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 416065.5466536712,
            "unit": "ns/iter",
            "extra": "iterations: 2047\ncpu: 416059.64826575405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7189.955454924493,
            "unit": "ns/iter",
            "extra": "iterations: 96060\ncpu: 7189.886529252568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5750.955030384806,
            "unit": "ns/iter",
            "extra": "iterations: 118480\ncpu: 5750.726704929093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5814.859749427138,
            "unit": "ns/iter",
            "extra": "iterations: 125233\ncpu: 5814.849121238012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5649.718109249066,
            "unit": "ns/iter",
            "extra": "iterations: 119635\ncpu: 5649.502235967732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10114.803193624099,
            "unit": "ns/iter",
            "extra": "iterations: 67259\ncpu: 10114.583921854335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29154.136776068248,
            "unit": "ns/iter",
            "extra": "iterations: 28214\ncpu: 29153.53016233081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 140751.5816972219,
            "unit": "ns/iter",
            "extra": "iterations: 6163\ncpu: 140749.40775596298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107988.04378031266,
            "unit": "ns/iter",
            "extra": "iterations: 7629\ncpu: 107987.90142875853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 108631.83318339587,
            "unit": "ns/iter",
            "extra": "iterations: 7781\ncpu: 108628.51818532331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 104485.88053690686,
            "unit": "ns/iter",
            "extra": "iterations: 8195\ncpu: 104485.03965832821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 361122.2382767985,
            "unit": "ns/iter",
            "extra": "iterations: 2623\ncpu: 361110.0648112839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2019953.1659483619,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2019924.353448275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1594128.3287671632,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1594099.315068493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1564833.2691029904,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1564774.0863787392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1570988.9045996878,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1570943.1005110703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 859153.8244782219,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 859131.8785578755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1555716.8006699297,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1555704.1876046902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37911.582501918776,
            "unit": "ns/iter",
            "extra": "iterations: 22151\ncpu: 37910.77603719918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 179361.65578817145,
            "unit": "ns/iter",
            "extra": "iterations: 4872\ncpu: 179357.9433497535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137499.59641327354,
            "unit": "ns/iter",
            "extra": "iterations: 6301\ncpu: 137494.36597365484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 134921.28349007032,
            "unit": "ns/iter",
            "extra": "iterations: 6487\ncpu: 134919.05349159875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134374.70951234212,
            "unit": "ns/iter",
            "extra": "iterations: 6644\ncpu: 134369.85249849525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 326424.78439503023,
            "unit": "ns/iter",
            "extra": "iterations: 2653\ncpu: 326412.0995099894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2074010.0197368166,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2073913.377192978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1666990.4901609845,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1663886.9409660168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1614609.2024432833,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1614532.9842931954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1587210.4999998359,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1587149.1610738316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 899923.8293172659,
            "unit": "ns/iter",
            "extra": "iterations: 996\ncpu: 899883.0321285167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1543853.8154363025,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1543780.536912746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5475523.54000004,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5475389.999999933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3284531.318020964,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3284409.8939929297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27204.216152350018,
            "unit": "ns/iter",
            "extra": "iterations: 28776\ncpu: 27202.76619405048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132111.0556900732,
            "unit": "ns/iter",
            "extra": "iterations: 6608\ncpu: 132105.3571428572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 101454.57539636928,
            "unit": "ns/iter",
            "extra": "iterations: 8641\ncpu: 101447.71438490952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106914.52528467274,
            "unit": "ns/iter",
            "extra": "iterations: 8167\ncpu: 106911.71788906581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101015.58250145645,
            "unit": "ns/iter",
            "extra": "iterations: 8515\ncpu: 101013.27069876724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 278012.01905060955,
            "unit": "ns/iter",
            "extra": "iterations: 3202\ncpu: 277999.5627732675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2086835.2383074262,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2086735.1893095882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1566738.6046900854,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1566735.3433835865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1566645.9862306819,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1566611.8760757304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1503211.8393443597,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1503191.1475409765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 847076.5270655137,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 847054.5109211813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1504414.7192690428,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1504386.3787375384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3082.422016081147,
            "unit": "ns/iter",
            "extra": "iterations: 226598\ncpu: 3082.256683642414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20309.438183856342,
            "unit": "ns/iter",
            "extra": "iterations: 34821\ncpu: 20308.532207575856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16197.198150438411,
            "unit": "ns/iter",
            "extra": "iterations: 42821\ncpu: 16196.557763714043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16578.503831968865,
            "unit": "ns/iter",
            "extra": "iterations: 41754\ncpu: 16577.62130574322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12147.92565255397,
            "unit": "ns/iter",
            "extra": "iterations: 59612\ncpu: 12147.433402670595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 97260.20708981826,
            "unit": "ns/iter",
            "extra": "iterations: 7137\ncpu: 97258.5259913128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 134742.4354130754,
            "unit": "ns/iter",
            "extra": "iterations: 5241\ncpu: 134733.84850219404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34228.9135321863,
            "unit": "ns/iter",
            "extra": "iterations: 20551\ncpu: 34228.31005790474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33991.89795434849,
            "unit": "ns/iter",
            "extra": "iterations: 21118\ncpu: 33990.82772989888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33607.38823138127,
            "unit": "ns/iter",
            "extra": "iterations: 21039\ncpu: 33607.10109796108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64137.98901708015,
            "unit": "ns/iter",
            "extra": "iterations: 10835\ncpu: 64136.908167974194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62478.69682481803,
            "unit": "ns/iter",
            "extra": "iterations: 11086\ncpu: 62476.1771603823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23598.127874543803,
            "unit": "ns/iter",
            "extra": "iterations: 29396\ncpu: 23597.931691386817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115655.12235703337,
            "unit": "ns/iter",
            "extra": "iterations: 5770\ncpu: 115650.10398613571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95568.14071343884,
            "unit": "ns/iter",
            "extra": "iterations: 7597\ncpu: 95567.2239041724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97148.95960407855,
            "unit": "ns/iter",
            "extra": "iterations: 7476\ncpu: 97146.42857142811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93262.93374655025,
            "unit": "ns/iter",
            "extra": "iterations: 7260\ncpu: 93261.08815427008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 169553.3588390569,
            "unit": "ns/iter",
            "extra": "iterations: 4169\ncpu: 169552.0508515231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 591196.9957983771,
            "unit": "ns/iter",
            "extra": "iterations: 1190\ncpu: 591185.6302520989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 491913.18256691727,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 491887.9203843498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 485157.1625344364,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 485153.03030303214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 475666.4431585808,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 475637.0319945545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 298448.7787197699,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 298431.7507418365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 465761.5492192776,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 465742.4983027817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23642.138664073875,
            "unit": "ns/iter",
            "extra": "iterations: 28789\ncpu: 23641.085136684404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118427.40331397341,
            "unit": "ns/iter",
            "extra": "iterations: 5854\ncpu: 118419.96925179582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92908.47558889085,
            "unit": "ns/iter",
            "extra": "iterations: 7599\ncpu: 92907.00092117378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 94310.75972994369,
            "unit": "ns/iter",
            "extra": "iterations: 7554\ncpu: 94304.76568705367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93400.78318286427,
            "unit": "ns/iter",
            "extra": "iterations: 7421\ncpu: 93394.52903921169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 165786.18947623507,
            "unit": "ns/iter",
            "extra": "iterations: 4143\ncpu: 165776.90079652125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 598396.4903169087,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 598363.292253518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 486893.6771879215,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 486883.57245337014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 479944.315717203,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 479918.8743994578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 476420.7460964447,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 476400.6788866316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 304562.50885739725,
            "unit": "ns/iter",
            "extra": "iterations: 2258\ncpu: 304551.10717449104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 483334.74326140253,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 483328.5040431344 ns\nthreads: 1"
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
        "date": 1702506760568,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8724.530939119317,
            "unit": "ns/iter",
            "extra": "iterations: 82226\ncpu: 8724.405905674605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61398.92935178105,
            "unit": "ns/iter",
            "extra": "iterations: 13730\ncpu: 61398.164603059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 113191.0992748822,
            "unit": "ns/iter",
            "extra": "iterations: 7585\ncpu: 113189.22874093606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 164365.62923282618,
            "unit": "ns/iter",
            "extra": "iterations: 5227\ncpu: 164364.01377463175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 219380.46480976933,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 219376.44864461586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 265954.24090617767,
            "unit": "ns/iter",
            "extra": "iterations: 3134\ncpu: 265948.21314613917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 317734.5043795818,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 317733.5036496352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 368663.57914734667,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 368644.99788940465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 419465.6631325306,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 419443.6144578317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7008.425836507606,
            "unit": "ns/iter",
            "extra": "iterations: 100029\ncpu: 7007.969688790244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5847.179633164757,
            "unit": "ns/iter",
            "extra": "iterations: 120490\ncpu: 5847.157440451484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5796.05018386141,
            "unit": "ns/iter",
            "extra": "iterations: 121015\ncpu: 5796.09056728505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5741.738276428592,
            "unit": "ns/iter",
            "extra": "iterations: 122339\ncpu: 5741.230515207745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10152.104887289082,
            "unit": "ns/iter",
            "extra": "iterations: 68893\ncpu: 10151.288229573402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29293.40694279538,
            "unit": "ns/iter",
            "extra": "iterations: 27741\ncpu: 29291.290869110737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 158481.79249121263,
            "unit": "ns/iter",
            "extra": "iterations: 5407\ncpu: 158477.28869983365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 120909.72542084557,
            "unit": "ns/iter",
            "extra": "iterations: 7069\ncpu: 120901.95218559897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 121687.2211607021,
            "unit": "ns/iter",
            "extra": "iterations: 7013\ncpu: 121681.04947953804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 112808.39759354873,
            "unit": "ns/iter",
            "extra": "iterations: 7563\ncpu: 112802.2345630041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 367406.47250193247,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 367396.78543764463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1973393.3175965413,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1973233.6909871267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1576951.0662139447,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1576945.5008488933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1587535.2191780203,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1587466.2671232878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1505199.553945195,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1505184.5410628037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 865744.3574109349,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 865723.4521575983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1512525.7394136554,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1512478.0130293167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37184.70193955671,
            "unit": "ns/iter",
            "extra": "iterations: 22170\ncpu: 37184.650428506924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 195542.09490216195,
            "unit": "ns/iter",
            "extra": "iterations: 4394\ncpu: 195541.7387346378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 150092.39489228782,
            "unit": "ns/iter",
            "extra": "iterations: 5756\ncpu: 150090.5663655312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 145224.71553757988,
            "unit": "ns/iter",
            "extra": "iterations: 5934\ncpu: 145223.2221098755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 139520.9805762402,
            "unit": "ns/iter",
            "extra": "iterations: 6178\ncpu: 139520.76723858892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 332963.607156608,
            "unit": "ns/iter",
            "extra": "iterations: 2599\ncpu: 332958.7918430157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2013915.973969681,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2013777.6572668224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1613365.1941073798,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1613263.0849220047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1633845.60175429,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1633778.2456140441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1549738.602329437,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1549640.2662229573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 884845.5719733082,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 884795.6148713081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1540275.6721854776,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1540148.3443708664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5515812.639999921,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5515414.00000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3292708.003533502,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3292462.8975265045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27154.681461533688,
            "unit": "ns/iter",
            "extra": "iterations: 30078\ncpu: 27153.052064632015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 152787.5718344763,
            "unit": "ns/iter",
            "extra": "iterations: 5631\ncpu: 152777.32196767814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 112991.63400158918,
            "unit": "ns/iter",
            "extra": "iterations: 7582\ncpu: 112984.0807174893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 118070.24783385875,
            "unit": "ns/iter",
            "extra": "iterations: 7271\ncpu: 118062.24728372965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 111775.0257786038,
            "unit": "ns/iter",
            "extra": "iterations: 7642\ncpu: 111768.79089243688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 281933.98472539353,
            "unit": "ns/iter",
            "extra": "iterations: 3077\ncpu: 281918.71953201306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2021520.7623127082,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 2021447.1092076988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1552165.1016666738,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1552063.5000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1581702.6627117277,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1581623.2203389872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1484365.279552752,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1484284.8242811526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 850879.4171220431,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 850859.0163934402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1496917.6462033899,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1496791.9224555732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3204.8303323112323,
            "unit": "ns/iter",
            "extra": "iterations: 217537\ncpu: 3204.792288208443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20945.241005837128,
            "unit": "ns/iter",
            "extra": "iterations: 34439\ncpu: 20945.24231249466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16834.84281114592,
            "unit": "ns/iter",
            "extra": "iterations: 43171\ncpu: 16834.2521600148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16380.818028684027,
            "unit": "ns/iter",
            "extra": "iterations: 42743\ncpu: 16379.442247853542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11507.81952394183,
            "unit": "ns/iter",
            "extra": "iterations: 60623\ncpu: 11507.061676261486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 99764.66295979127,
            "unit": "ns/iter",
            "extra": "iterations: 7014\ncpu: 99755.80268035353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 139527.57817166936,
            "unit": "ns/iter",
            "extra": "iterations: 5021\ncpu: 139522.64489145557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34548.49629556786,
            "unit": "ns/iter",
            "extra": "iterations: 20246\ncpu: 34548.25644571762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33667.06462945232,
            "unit": "ns/iter",
            "extra": "iterations: 20780\ncpu: 33666.342637151276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33209.33668008537,
            "unit": "ns/iter",
            "extra": "iterations: 21115\ncpu: 33209.220932986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67828.0469415432,
            "unit": "ns/iter",
            "extra": "iterations: 10332\ncpu: 67827.65195509058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62535.16650219449,
            "unit": "ns/iter",
            "extra": "iterations: 11147\ncpu: 62532.627612811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23430.394205443397,
            "unit": "ns/iter",
            "extra": "iterations: 30753\ncpu: 23430.58888563702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 118626.64006126946,
            "unit": "ns/iter",
            "extra": "iterations: 5876\ncpu: 118625.95302927066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95169.00720107913,
            "unit": "ns/iter",
            "extra": "iterations: 7360\ncpu: 95167.09239130557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96781.3036294668,
            "unit": "ns/iter",
            "extra": "iterations: 7384\ncpu: 96780.94528710705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92536.54007708913,
            "unit": "ns/iter",
            "extra": "iterations: 7523\ncpu: 92536.15578891267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 169843.5499149842,
            "unit": "ns/iter",
            "extra": "iterations: 4117\ncpu: 169842.89531212344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 589261.8877722308,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 589250.5862646565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 484141.40235458466,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 484144.7368421073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 489894.6610761817,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 489847.798742145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 472693.4373315306,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 472652.6280323406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 298102.51638993307,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 298075.0532141356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 470498.41160591936,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 470501.012145749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23366.44103112045,
            "unit": "ns/iter",
            "extra": "iterations: 29948\ncpu: 23364.995993054486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 114373.40880298731,
            "unit": "ns/iter",
            "extra": "iterations: 6157\ncpu: 114364.78804612627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92868.1618054535,
            "unit": "ns/iter",
            "extra": "iterations: 7577\ncpu: 92862.00343143777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 94174.19314177558,
            "unit": "ns/iter",
            "extra": "iterations: 7378\ncpu: 94169.66657630743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92867.95892786224,
            "unit": "ns/iter",
            "extra": "iterations: 7499\ncpu: 92867.64901986973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 166246.77337446332,
            "unit": "ns/iter",
            "extra": "iterations: 4214\ncpu: 166245.98955861482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 582696.4756302349,
            "unit": "ns/iter",
            "extra": "iterations: 1190\ncpu: 582654.7058823487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 477021.3459422544,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 477013.48005501897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 485043.8743055463,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 485011.1111111074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 463652.62191048905,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 463622.4448897737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 298826.5425395119,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 298801.58187259256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 470054.0168236639,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 470036.4737550421 ns\nthreads: 1"
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
        "date": 1705574932996,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8401.137058094546,
            "unit": "ns/iter",
            "extra": "iterations: 83191\ncpu: 8400.915964467311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59360.99090000653,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59359.82999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110300.31334102388,
            "unit": "ns/iter",
            "extra": "iterations: 7803\ncpu: 110299.12854030503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159743.2801556378,
            "unit": "ns/iter",
            "extra": "iterations: 5397\ncpu: 159743.00537335555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 210117.41313942755,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 210114.93118670475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 259625.1196042939,
            "unit": "ns/iter",
            "extra": "iterations: 3336\ncpu: 259616.4868105516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 311020.8248384783,
            "unit": "ns/iter",
            "extra": "iterations: 2786\ncpu: 311013.7473079683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 360060.2491708253,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 360058.00165837497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 411138.8406412244,
            "unit": "ns/iter",
            "extra": "iterations: 2121\ncpu: 411111.55115511536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6897.942362914967,
            "unit": "ns/iter",
            "extra": "iterations: 102035\ncpu: 6897.847797324442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5692.324379357696,
            "unit": "ns/iter",
            "extra": "iterations: 122776\ncpu: 5692.243598097342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5569.083936138851,
            "unit": "ns/iter",
            "extra": "iterations: 125524\ncpu: 5569.060896720947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5571.680896622291,
            "unit": "ns/iter",
            "extra": "iterations: 125627\ncpu: 5571.658162656121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10117.236196718837,
            "unit": "ns/iter",
            "extra": "iterations: 69277\ncpu: 10116.8959394893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29828.644204653847,
            "unit": "ns/iter",
            "extra": "iterations: 27246\ncpu: 29828.04448359387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 152940.133499903,
            "unit": "ns/iter",
            "extra": "iterations: 5603\ncpu: 152936.94449402115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 121616.9924716,
            "unit": "ns/iter",
            "extra": "iterations: 7040\ncpu: 121616.32102272724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 119506.09287709968,
            "unit": "ns/iter",
            "extra": "iterations: 7160\ncpu: 119502.05307262613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 112901.03555848054,
            "unit": "ns/iter",
            "extra": "iterations: 7565\ncpu: 112900.38334434917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 384612.1913856327,
            "unit": "ns/iter",
            "extra": "iterations: 2461\ncpu: 384600.04063388926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1966632.281116042,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1966620.6008583654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1540926.5574041686,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1540853.4109816947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1536105.1068448615,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1536095.65943239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1483572.4182693008,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1483532.5320512801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 853818.3351800228,
            "unit": "ns/iter",
            "extra": "iterations: 1083\ncpu: 853801.4773776542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1488388.0256410846,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1488325.801282052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38713.97523030541,
            "unit": "ns/iter",
            "extra": "iterations: 21276\ncpu: 38713.15566835866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 194108.5940035867,
            "unit": "ns/iter",
            "extra": "iterations: 4436\ncpu: 194107.50676284902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 146248.61682882084,
            "unit": "ns/iter",
            "extra": "iterations: 5859\ncpu: 146243.98361495137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 144673.22304581775,
            "unit": "ns/iter",
            "extra": "iterations: 5936\ncpu: 144666.45889487845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 142068.4199134246,
            "unit": "ns/iter",
            "extra": "iterations: 6006\ncpu: 142064.06926406946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 344631.8848749434,
            "unit": "ns/iter",
            "extra": "iterations: 2519\ncpu: 344625.44660579646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2003795.088362122,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2003711.2068965554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1596352.4082331557,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1596332.2469982875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1613426.650766595,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1613389.7785349202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1546370.8706467354,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1546361.5257048125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 887122.6816016305,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 887079.0276453819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1533741.7660624778,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1533713.838550246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5495463.890000565,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5495285.99999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3234047.2812499856,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3233922.2222222346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28767.490789565192,
            "unit": "ns/iter",
            "extra": "iterations: 28446\ncpu: 28765.967095549408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 153678.1061741664,
            "unit": "ns/iter",
            "extra": "iterations: 5604\ncpu: 153677.40899357604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114438.02639648825,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 114435.70190641264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 114291.25182627758,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 114289.8260061094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 109386.84770408423,
            "unit": "ns/iter",
            "extra": "iterations: 7840\ncpu: 109379.60459183638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 294413.72980313003,
            "unit": "ns/iter",
            "extra": "iterations: 2946\ncpu: 294396.9789545154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1986291.9914711863,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1986187.206823025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1544018.5631228117,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1543934.3853820588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1562250.4228189192,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1562148.322147652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1489501.9568000862,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1489413.9199999927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 845677.3575317492,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 845632.4863883813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1489799.4743588965,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1489716.6666666605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3198.0475361602494,
            "unit": "ns/iter",
            "extra": "iterations: 218886\ncpu: 3197.9875368913395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20510.944765141285,
            "unit": "ns/iter",
            "extra": "iterations: 34127\ncpu: 20510.6279485451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16772.55274215095,
            "unit": "ns/iter",
            "extra": "iterations: 45220\ncpu: 16772.319770013284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16743.679779305974,
            "unit": "ns/iter",
            "extra": "iterations: 41868\ncpu: 16742.70803477584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12101.74627510732,
            "unit": "ns/iter",
            "extra": "iterations: 57854\ncpu: 12100.765720606947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 104226.49167161935,
            "unit": "ns/iter",
            "extra": "iterations: 6724\ncpu: 104221.43069601459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 132126.71501320472,
            "unit": "ns/iter",
            "extra": "iterations: 5302\ncpu: 132117.3519426632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33634.591941603416,
            "unit": "ns/iter",
            "extra": "iterations: 20823\ncpu: 33632.32483311702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33234.652981705396,
            "unit": "ns/iter",
            "extra": "iterations: 21045\ncpu: 33231.627464956095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33231.21276190207,
            "unit": "ns/iter",
            "extra": "iterations: 21000\ncpu: 33229.6047619047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65488.17257506839,
            "unit": "ns/iter",
            "extra": "iterations: 10691\ncpu: 65483.76204283998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62244.291426027565,
            "unit": "ns/iter",
            "extra": "iterations: 11255\ncpu: 62244.03376277199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23023.526418011672,
            "unit": "ns/iter",
            "extra": "iterations: 30377\ncpu: 23023.18201270717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 118802.12044482771,
            "unit": "ns/iter",
            "extra": "iterations: 5845\ncpu: 118792.84858853779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95192.82033483966,
            "unit": "ns/iter",
            "extra": "iterations: 7347\ncpu: 95190.4859126176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95195.93299809104,
            "unit": "ns/iter",
            "extra": "iterations: 7358\ncpu: 95193.77548246917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92914.09102937962,
            "unit": "ns/iter",
            "extra": "iterations: 7558\ncpu: 92912.66207991478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 174359.89488138843,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 174356.7790262166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 593750.3076922934,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 593735.502958584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 482450.8058051193,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 482441.18866620114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 484310.765928023,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 484304.5706371192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 469303.41152813286,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 469286.86327078636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 299672.45014976384,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 299671.1596063287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 469975.64942914515,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 469959.1000671575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23741.072033899247,
            "unit": "ns/iter",
            "extra": "iterations: 29500\ncpu: 23740.04406779668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120147.95226647287,
            "unit": "ns/iter",
            "extra": "iterations: 5824\ncpu: 120143.3035714298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94573.00378276089,
            "unit": "ns/iter",
            "extra": "iterations: 7402\ncpu: 94571.72385841678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95782.04463306902,
            "unit": "ns/iter",
            "extra": "iterations: 7304\ncpu: 95778.62814895892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95920.79532003187,
            "unit": "ns/iter",
            "extra": "iterations: 7265\ncpu: 95918.37577426089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 172333.8093711531,
            "unit": "ns/iter",
            "extra": "iterations: 4055\ncpu: 172333.11960542636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 589509.2122999688,
            "unit": "ns/iter",
            "extra": "iterations: 1187\ncpu: 589485.1727042911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 478307.5525051244,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 478305.49073438713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 477298.7324710599,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 477296.46017699264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 470650.636485622,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 470632.5955734409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 294800.22788545856,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 294798.90480202186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 465665.4454848926,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 465657.9264214073 ns\nthreads: 1"
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
        "date": 1705772703265,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8579.447281986204,
            "unit": "ns/iter",
            "extra": "iterations: 81291\ncpu: 8579.387632087193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61633.41343195892,
            "unit": "ns/iter",
            "extra": "iterations: 13654\ncpu: 61632.44470484839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 115243.3876758199,
            "unit": "ns/iter",
            "extra": "iterations: 7465\ncpu: 115239.1426657736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 168249.0859649224,
            "unit": "ns/iter",
            "extra": "iterations: 5130\ncpu: 168243.09941520478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 219292.9564226016,
            "unit": "ns/iter",
            "extra": "iterations: 3947\ncpu: 219283.50646060295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 272656.06281408266,
            "unit": "ns/iter",
            "extra": "iterations: 3184\ncpu: 272635.2386934674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 324558.5268857427,
            "unit": "ns/iter",
            "extra": "iterations: 2678\ncpu: 324549.29051531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 377742.5054182682,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 377732.76983094914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 434133.91390398104,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 434089.31222167227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7270.420706655962,
            "unit": "ns/iter",
            "extra": "iterations: 96143\ncpu: 7270.07790478765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5934.511591228877,
            "unit": "ns/iter",
            "extra": "iterations: 117934\ncpu: 5934.429426628452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5888.662621196818,
            "unit": "ns/iter",
            "extra": "iterations: 119228\ncpu: 5888.337471063841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5908.195611353988,
            "unit": "ns/iter",
            "extra": "iterations: 118761\ncpu: 5907.89989979876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10489.287702182999,
            "unit": "ns/iter",
            "extra": "iterations: 66833\ncpu: 10488.394954588326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29608.517112607617,
            "unit": "ns/iter",
            "extra": "iterations: 27582\ncpu: 29606.689145094664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 142446.38492395176,
            "unit": "ns/iter",
            "extra": "iterations: 5983\ncpu: 142439.77937489556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 112182.23583036255,
            "unit": "ns/iter",
            "extra": "iterations: 7569\ncpu: 112171.34363852578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 112465.45214739219,
            "unit": "ns/iter",
            "extra": "iterations: 7544\ncpu: 112458.8944856841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 107997.55894695735,
            "unit": "ns/iter",
            "extra": "iterations: 7863\ncpu: 107991.49179702405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 381728.525802527,
            "unit": "ns/iter",
            "extra": "iterations: 2461\ncpu: 381701.34091832617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2051252.2761692305,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2051169.933184852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1616483.8671328768,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1616484.265734271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1623107.3636362425,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1623072.2027972033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1586868.4657534328,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1586848.1164383534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 886906.9626078791,
            "unit": "ns/iter",
            "extra": "iterations: 1043\ncpu: 886861.3614573324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1563431.6902355903,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1563390.5723905691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38343.460919593796,
            "unit": "ns/iter",
            "extra": "iterations: 21379\ncpu: 38341.72318630425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 177235.851362501,
            "unit": "ns/iter",
            "extra": "iterations: 4844\ncpu: 177222.6878612719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 146873.8111840972,
            "unit": "ns/iter",
            "extra": "iterations: 5937\ncpu: 146856.37527370724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 140919.59638752576,
            "unit": "ns/iter",
            "extra": "iterations: 6090\ncpu: 140911.70771756987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 138327.21508154526,
            "unit": "ns/iter",
            "extra": "iterations: 6193\ncpu: 138320.3294041658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 346169.11478680227,
            "unit": "ns/iter",
            "extra": "iterations: 2509\ncpu: 346157.7520924664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2095507.4999999665,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2095352.9279279234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1656266.4597495964,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1656203.2200357819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1658364.7985740388,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1658284.4919786023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1620558.198260962,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1620509.739130435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 910978.2480079792,
            "unit": "ns/iter",
            "extra": "iterations: 1004\ncpu: 910869.5219123501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1600201.3917525338,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1600103.0927835081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5652047.250000578,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5651852.999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3319336.5673756124,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3319122.695035456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27698.43863957687,
            "unit": "ns/iter",
            "extra": "iterations: 29726\ncpu: 27696.86469757125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 135139.35011800882,
            "unit": "ns/iter",
            "extra": "iterations: 6355\ncpu: 135131.7073170741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 103702.99658661273,
            "unit": "ns/iter",
            "extra": "iterations: 8203\ncpu: 103695.45288309129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109960.94186341602,
            "unit": "ns/iter",
            "extra": "iterations: 7878\ncpu: 109952.88144198978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 104122.53245485999,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 104115.6905807716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 300224.83681280754,
            "unit": "ns/iter",
            "extra": "iterations: 2874\ncpu: 300199.02574808616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2070424.3088890607,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2070202.666666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1609781.2258620032,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1609691.7241379267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1617950.600694387,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1617853.2986111073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1583908.123938757,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1583828.3531409197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 864807.3011152124,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 864761.152416359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1555489.3913044422,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1555414.0468227456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3195.603153570691,
            "unit": "ns/iter",
            "extra": "iterations: 218863\ncpu: 3195.4519493929993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20744.720005926658,
            "unit": "ns/iter",
            "extra": "iterations: 33740\ncpu: 20743.438055720206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16071.145420792625,
            "unit": "ns/iter",
            "extra": "iterations: 43632\ncpu: 16070.187018701854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16266.58542876952,
            "unit": "ns/iter",
            "extra": "iterations: 43030\ncpu: 16265.605391587387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12292.294843734871,
            "unit": "ns/iter",
            "extra": "iterations: 57115\ncpu: 12291.368292042383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 105095.67898832746,
            "unit": "ns/iter",
            "extra": "iterations: 6682\ncpu: 105088.10236456207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 141632.21473258574,
            "unit": "ns/iter",
            "extra": "iterations: 4955\ncpu: 141628.9404641787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 35296.82893936372,
            "unit": "ns/iter",
            "extra": "iterations: 19724\ncpu: 35295.83248833891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34860.78258703959,
            "unit": "ns/iter",
            "extra": "iterations: 20077\ncpu: 34858.35533197179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34732.149326439525,
            "unit": "ns/iter",
            "extra": "iterations: 20117\ncpu: 34730.17845603223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68172.32072706221,
            "unit": "ns/iter",
            "extra": "iterations: 10233\ncpu: 68171.03488712963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 65265.21231810719,
            "unit": "ns/iter",
            "extra": "iterations: 10927\ncpu: 65261.27939965227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23837.160965108724,
            "unit": "ns/iter",
            "extra": "iterations: 29261\ncpu: 23835.55244181698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116453.51552383642,
            "unit": "ns/iter",
            "extra": "iterations: 6023\ncpu: 116441.14228789593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95651.52680397342,
            "unit": "ns/iter",
            "extra": "iterations: 7331\ncpu: 95644.16859910008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95490.78161390901,
            "unit": "ns/iter",
            "extra": "iterations: 7299\ncpu: 95481.25770653518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93984.53559915094,
            "unit": "ns/iter",
            "extra": "iterations: 7444\ncpu: 93982.59000537256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 178973.10461852181,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 178970.14544526415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 605175.7512952796,
            "unit": "ns/iter",
            "extra": "iterations: 1158\ncpu: 605136.3557858343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 500656.1759656794,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 500626.108726754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 500337.66594667954,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 500289.1288696864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 489403.4877537021,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 489368.9293212067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 304677.19120210834,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 304660.1480836255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 486914.8854961305,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 486875.29493407346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23586.551607048434,
            "unit": "ns/iter",
            "extra": "iterations: 29744\ncpu: 23584.544782141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117286.56042851802,
            "unit": "ns/iter",
            "extra": "iterations: 5974\ncpu: 117277.95446936802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94069.17311829362,
            "unit": "ns/iter",
            "extra": "iterations: 7440\ncpu: 94061.88172042916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95291.22143537622,
            "unit": "ns/iter",
            "extra": "iterations: 7343\ncpu: 95283.24935312569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94687.37432358341,
            "unit": "ns/iter",
            "extra": "iterations: 7392\ncpu: 94687.1753246766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 176915.84493190362,
            "unit": "ns/iter",
            "extra": "iterations: 3966\ncpu: 176911.54815935664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 599472.7091531687,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 599446.7921300277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 491125.8821052718,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 491113.192982457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 495873.5746638328,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 495832.48407642706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 489457.1638655974,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 489425.14005602634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 308029.9783950648,
            "unit": "ns/iter",
            "extra": "iterations: 2268\ncpu: 308004.6296296297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 481758.8566506252,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 481730.530668509 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}