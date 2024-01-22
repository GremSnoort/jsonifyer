window.BENCHMARK_DATA = {
  "lastUpdate": 1705959191926,
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
        "date": 1705774096082,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8490.648716396201,
            "unit": "ns/iter",
            "extra": "iterations: 82580\ncpu: 8490.2300799225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60929.60934336669,
            "unit": "ns/iter",
            "extra": "iterations: 13828\ncpu: 60927.21290135956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 112042.58405116372,
            "unit": "ns/iter",
            "extra": "iterations: 7662\ncpu: 112037.87522839989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 162312.01164100177,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 162307.39767179874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 213352.00666667504,
            "unit": "ns/iter",
            "extra": "iterations: 4050\ncpu: 213345.35802469138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 266949.1835058054,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 266942.3311016432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 316713.39461226895,
            "unit": "ns/iter",
            "extra": "iterations: 2747\ncpu: 316707.57189661433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 373286.0375527097,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 373269.1139240509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 415357.35984293884,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 415344.57535591593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7187.09978583626,
            "unit": "ns/iter",
            "extra": "iterations: 97589\ncpu: 7186.837655883352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5875.909412099744,
            "unit": "ns/iter",
            "extra": "iterations: 119442\ncpu: 5875.810016577082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5831.509351943013,
            "unit": "ns/iter",
            "extra": "iterations: 120082\ncpu: 5831.407704735101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5869.103786994398,
            "unit": "ns/iter",
            "extra": "iterations: 118194\ncpu: 5868.970506117064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10301.747204038315,
            "unit": "ns/iter",
            "extra": "iterations: 68134\ncpu: 10301.480905274895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28938.11735273338,
            "unit": "ns/iter",
            "extra": "iterations: 28180\ncpu: 28936.891412349174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148786.38290093045,
            "unit": "ns/iter",
            "extra": "iterations: 5743\ncpu: 148781.66463520817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115252.35691057016,
            "unit": "ns/iter",
            "extra": "iterations: 7380\ncpu: 115249.36314363126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116235.60286884366,
            "unit": "ns/iter",
            "extra": "iterations: 7320\ncpu: 116232.85519125657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110264.27701654464,
            "unit": "ns/iter",
            "extra": "iterations: 7736\ncpu: 110261.55635987583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 386802.99180663365,
            "unit": "ns/iter",
            "extra": "iterations: 2441\ncpu: 386779.8443260959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2004793.9891303882,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2004693.69565217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1555618.862184814,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1555548.7394957999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1586867.4982936631,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1586789.4197952207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1563090.8484848014,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1563035.5218855264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 837195.93989074,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 837140.4371584727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1517713.8461538698,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1517662.3567921463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38302.4460261537,
            "unit": "ns/iter",
            "extra": "iterations: 21566\ncpu: 38300.338495780416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 184102.8155131677,
            "unit": "ns/iter",
            "extra": "iterations: 4667\ncpu: 184095.00749946455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 147127.46149897273,
            "unit": "ns/iter",
            "extra": "iterations: 5844\ncpu: 147119.33607118423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 143508.89484226404,
            "unit": "ns/iter",
            "extra": "iterations: 5991\ncpu: 143501.45217826776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 141363.68695651862,
            "unit": "ns/iter",
            "extra": "iterations: 6095\ncpu: 141355.8982772765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 359486.13623189146,
            "unit": "ns/iter",
            "extra": "iterations: 2415\ncpu: 359470.5175983446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2070263.871396915,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2070157.2062084265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1601120.5670104297,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1601031.4432989794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1633866.058201128,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1633771.604938277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1598849.3848797204,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1598773.195876292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 849872.3361033824,
            "unit": "ns/iter",
            "extra": "iterations: 1083\ncpu: 849832.8716528105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1551247.6516666615,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1551178.1666666735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5357939.149999993,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5357618.999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3241281.7228070004,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3241138.5964912483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27264.843395659558,
            "unit": "ns/iter",
            "extra": "iterations: 29897\ncpu: 27263.82245710268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 140546.13696614248,
            "unit": "ns/iter",
            "extra": "iterations: 6111\ncpu: 140537.73523154878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108787.44848175977,
            "unit": "ns/iter",
            "extra": "iterations: 7871\ncpu: 108784.29678566885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 112237.71830619042,
            "unit": "ns/iter",
            "extra": "iterations: 7675\ncpu: 112234.64495114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105684.44482800688,
            "unit": "ns/iter",
            "extra": "iterations: 8111\ncpu: 105680.6558993959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 299164.42037994,
            "unit": "ns/iter",
            "extra": "iterations: 2895\ncpu: 299150.7081174436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2071264.155701831,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2071203.7280701841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1548925.4568105284,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1548885.2159468404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1600895.503448273,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1600859.4827586142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1567377.372053886,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1567317.6767676857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 834215.3732014153,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 834202.3381294966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1529614.9029605929,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1529521.7105263204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3197.7305214120315,
            "unit": "ns/iter",
            "extra": "iterations: 218522\ncpu: 3197.674376035385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20767.818300381365,
            "unit": "ns/iter",
            "extra": "iterations: 33737\ncpu: 20767.311853454725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16224.59919936966,
            "unit": "ns/iter",
            "extra": "iterations: 43216\ncpu: 16224.317382450932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15627.549756685503,
            "unit": "ns/iter",
            "extra": "iterations: 44798\ncpu: 15627.010134381015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12200.04647746884,
            "unit": "ns/iter",
            "extra": "iterations: 57189\ncpu: 12199.592578992448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 104882.19949041046,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 104877.08333333292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 142242.3832384063,
            "unit": "ns/iter",
            "extra": "iterations: 4916\ncpu: 142238.85272579428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33938.81685764461,
            "unit": "ns/iter",
            "extra": "iterations: 20596\ncpu: 33937.79860167009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33954.238231860305,
            "unit": "ns/iter",
            "extra": "iterations: 20564\ncpu: 33951.867340984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34196.96377307074,
            "unit": "ns/iter",
            "extra": "iterations: 20482\ncpu: 34195.18113465508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65481.68164793455,
            "unit": "ns/iter",
            "extra": "iterations: 10680\ncpu: 65478.17415730302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62712.3310295338,
            "unit": "ns/iter",
            "extra": "iterations: 11141\ncpu: 62710.618436406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23484.605984452275,
            "unit": "ns/iter",
            "extra": "iterations: 29844\ncpu: 23484.191127194612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 121716.20670489325,
            "unit": "ns/iter",
            "extra": "iterations: 5757\ncpu: 121711.84644780096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 97567.0036241984,
            "unit": "ns/iter",
            "extra": "iterations: 7174\ncpu: 97561.72288820817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97085.07783018344,
            "unit": "ns/iter",
            "extra": "iterations: 7208\ncpu: 97080.71587125423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95185.33094885234,
            "unit": "ns/iter",
            "extra": "iterations: 7409\ncpu: 95180.5641787024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 176361.46725662646,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 176355.2465233882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 605816.533854152,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 605801.7361111087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 493865.49435821146,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 493827.7856135399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 494975.6029619251,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 494953.8787023885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 483263.4337265938,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 483243.2338653718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 301001.2406692484,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 300983.3118833176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 480220.584076879,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 480211.53054221347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23945.141724988527,
            "unit": "ns/iter",
            "extra": "iterations: 29148\ncpu: 23944.42500343086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118917.13064899977,
            "unit": "ns/iter",
            "extra": "iterations: 5886\ncpu: 118911.7397213737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96550.66993373052,
            "unit": "ns/iter",
            "extra": "iterations: 7244\ncpu: 96545.91385974639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 98542.32985768044,
            "unit": "ns/iter",
            "extra": "iterations: 7097\ncpu: 98538.18514865443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 96823.14639889708,
            "unit": "ns/iter",
            "extra": "iterations: 7220\ncpu: 96819.81994459737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 175222.04553413246,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 175218.81411058182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 607474.6202749257,
            "unit": "ns/iter",
            "extra": "iterations: 1164\ncpu: 607445.0171821284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 487457.3344875097,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 487438.7119113588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 491223.0698659509,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 491186.7325335255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 483029.6554333419,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 483008.7345254443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 296775.8847457883,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 296757.33050847636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 480002.1316507488,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 479980.08185539255 ns\nthreads: 1"
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
        "date": 1705952892974,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8905.40906261413,
            "unit": "ns/iter",
            "extra": "iterations: 78719\ncpu: 8905.3786252366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 64497.45336688447,
            "unit": "ns/iter",
            "extra": "iterations: 13113\ncpu: 64492.68664683901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 118818.07299875339,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 118813.54901147519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 172789.3893344124,
            "unit": "ns/iter",
            "extra": "iterations: 4988\ncpu: 172780.95429029677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 228669.4906357032,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 228658.50699023998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 283150.6170421377,
            "unit": "ns/iter",
            "extra": "iterations: 3063\ncpu: 283137.0878223963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 335931.38955509284,
            "unit": "ns/iter",
            "extra": "iterations: 2585\ncpu: 335913.73307543504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 390510.4658886992,
            "unit": "ns/iter",
            "extra": "iterations: 2228\ncpu: 390489.31777378824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 443961.26700766874,
            "unit": "ns/iter",
            "extra": "iterations: 1955\ncpu: 443936.98209718603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7362.8933939626895,
            "unit": "ns/iter",
            "extra": "iterations: 95004\ncpu: 7362.415266725609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 6033.459900138045,
            "unit": "ns/iter",
            "extra": "iterations: 116160\ncpu: 6033.248966942143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5962.894558345238,
            "unit": "ns/iter",
            "extra": "iterations: 117354\ncpu: 5962.9386301276545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5990.1074770746945,
            "unit": "ns/iter",
            "extra": "iterations: 117011\ncpu: 5989.871037765667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10571.269592619126,
            "unit": "ns/iter",
            "extra": "iterations: 66007\ncpu: 10570.56069810779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29963.274692384603,
            "unit": "ns/iter",
            "extra": "iterations: 27063\ncpu: 29961.500942245915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 144986.37995576134,
            "unit": "ns/iter",
            "extra": "iterations: 5877\ncpu: 144980.55130168446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113783.63576690352,
            "unit": "ns/iter",
            "extra": "iterations: 7465\ncpu: 113777.25385130638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 112706.18470916273,
            "unit": "ns/iter",
            "extra": "iterations: 7547\ncpu: 112698.64846959095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 108060.47321884955,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 108055.17683239399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 384140.43628248526,
            "unit": "ns/iter",
            "extra": "iterations: 2464\ncpu: 384126.4610389615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2149691.760465155,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2149573.9534883713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1675178.2882883581,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1675090.450450454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1678408.4576575216,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1678326.66666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1626884.7055749346,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1626862.3693379788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 895840.5470250109,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 895838.5796545123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1613877.7399651404,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1613806.1082024388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37596.499886017635,
            "unit": "ns/iter",
            "extra": "iterations: 21933\ncpu: 37596.7537500571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 183794.23721530885,
            "unit": "ns/iter",
            "extra": "iterations: 4654\ncpu: 183787.38719381168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 142196.12787596037,
            "unit": "ns/iter",
            "extra": "iterations: 5998\ncpu: 142190.89696565532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 143111.24577546548,
            "unit": "ns/iter",
            "extra": "iterations: 5977\ncpu: 143109.6202108079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 137151.37631831097,
            "unit": "ns/iter",
            "extra": "iterations: 6258\ncpu: 137152.4768296578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 356626.99958815204,
            "unit": "ns/iter",
            "extra": "iterations: 2428\ncpu: 356616.9275123541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2196083.8188234074,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2195992.2352941167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1716211.939001688,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1716174.6765249479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1716588.1663585089,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1716568.3918669112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1667330.6905187215,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1667296.7799642268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 918367.827309278,
            "unit": "ns/iter",
            "extra": "iterations: 996\ncpu: 918333.9357429696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1640415.77561854,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1640394.3462897455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5681001.7400005115,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5680831.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3306151.950354875,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3306084.751773046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27419.22734777685,
            "unit": "ns/iter",
            "extra": "iterations: 29677\ncpu: 27418.53624018587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138478.96536655418,
            "unit": "ns/iter",
            "extra": "iterations: 6179\ncpu: 138474.62372552126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106252.28638673096,
            "unit": "ns/iter",
            "extra": "iterations: 8073\ncpu: 106250.83612040115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110654.7028638114,
            "unit": "ns/iter",
            "extra": "iterations: 7717\ncpu: 110653.58299857452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 104873.55935539493,
            "unit": "ns/iter",
            "extra": "iterations: 8129\ncpu: 104869.83638823905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 296836.2342249515,
            "unit": "ns/iter",
            "extra": "iterations: 2916\ncpu: 296816.32373114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2171645.2697673533,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2171588.372093019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1667205.463327459,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1667109.660107339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1680551.8720719863,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1680471.7117117085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1622376.2747825317,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1622299.3043478308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 886303.3866665708,
            "unit": "ns/iter",
            "extra": "iterations: 1050\ncpu: 886309.0476190479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1604901.2728842136,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1604833.6787564654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3177.187334649734,
            "unit": "ns/iter",
            "extra": "iterations: 220365\ncpu: 3176.983186985233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20749.083713759417,
            "unit": "ns/iter",
            "extra": "iterations: 33734\ncpu: 20749.247050453454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15603.19520249903,
            "unit": "ns/iter",
            "extra": "iterations: 44815\ncpu: 15603.320316858188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16331.106021066513,
            "unit": "ns/iter",
            "extra": "iterations: 42916\ncpu: 16330.790381209803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12279.208533547646,
            "unit": "ns/iter",
            "extra": "iterations: 57022\ncpu: 12278.420609589259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 107593.40191093592,
            "unit": "ns/iter",
            "extra": "iterations: 6489\ncpu: 107587.20912313086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 149099.83283647514,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 149092.37649063038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 36097.83862147038,
            "unit": "ns/iter",
            "extra": "iterations: 19383\ncpu: 36095.454779961954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 35694.14376720153,
            "unit": "ns/iter",
            "extra": "iterations: 19622\ncpu: 35692.04464376752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 35290.99050840646,
            "unit": "ns/iter",
            "extra": "iterations: 19807\ncpu: 35288.77669510773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 69317.5218771723,
            "unit": "ns/iter",
            "extra": "iterations: 10079\ncpu: 69314.98164500456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 65769.23239834688,
            "unit": "ns/iter",
            "extra": "iterations: 10624\ncpu: 65765.1826054215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23434.0014721142,
            "unit": "ns/iter",
            "extra": "iterations: 29889\ncpu: 23432.717722239235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120889.50578683185,
            "unit": "ns/iter",
            "extra": "iterations: 5789\ncpu: 120886.73346001077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 97989.8478837831,
            "unit": "ns/iter",
            "extra": "iterations: 7159\ncpu: 97986.72999022213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 98168.20719201013,
            "unit": "ns/iter",
            "extra": "iterations: 7119\ncpu: 98163.59039190951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96700.13874345351,
            "unit": "ns/iter",
            "extra": "iterations: 7258\ncpu: 96692.42215486387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 176408.376008039,
            "unit": "ns/iter",
            "extra": "iterations: 3968\ncpu: 176396.5725806458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 638900.9412295815,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 638877.5768535193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 515436.37050624524,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 515433.822450481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 512603.7118890982,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 512575.3464624264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 502443.512247838,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 502407.5648414953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 312616.9768167636,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 312592.10878287716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 497473.19277105696,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 497439.82990787126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24067.587518401062,
            "unit": "ns/iter",
            "extra": "iterations: 29211\ncpu: 24066.783061175767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 121609.05299859967,
            "unit": "ns/iter",
            "extra": "iterations: 5736\ncpu: 121596.77475592913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96598.04190872076,
            "unit": "ns/iter",
            "extra": "iterations: 7230\ncpu: 96590.38727524129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96311.58795977147,
            "unit": "ns/iter",
            "extra": "iterations: 7259\ncpu: 96307.7834412446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 96297.41238816359,
            "unit": "ns/iter",
            "extra": "iterations: 7265\ncpu: 96298.141775637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 175981.14418486514,
            "unit": "ns/iter",
            "extra": "iterations: 3981\ncpu: 175982.41647827212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 627133.0107912974,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 627080.3956834521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 510219.8318840619,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 510215.72463767487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 511688.1518247747,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 511683.6496350361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 500176.4974982504,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 500166.04717655026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 308786.55438132485,
            "unit": "ns/iter",
            "extra": "iterations: 2271\ncpu: 308784.2360193703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 493512.995744629,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 493509.929078021 ns\nthreads: 1"
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
        "date": 1705954305998,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8569.522449330607,
            "unit": "ns/iter",
            "extra": "iterations: 81606\ncpu: 8569.346616670342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 63216.4459348071,
            "unit": "ns/iter",
            "extra": "iterations: 13345\ncpu: 63214.52978643686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 116665.34281842416,
            "unit": "ns/iter",
            "extra": "iterations: 7380\ncpu: 116658.9024390244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 169478.42868353456,
            "unit": "ns/iter",
            "extra": "iterations: 5097\ncpu: 169468.60898567786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 224658.223880601,
            "unit": "ns/iter",
            "extra": "iterations: 3886\ncpu: 224648.04426145146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 276602.03545194946,
            "unit": "ns/iter",
            "extra": "iterations: 3131\ncpu: 276595.081443628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 327336.43396225164,
            "unit": "ns/iter",
            "extra": "iterations: 2650\ncpu: 327330.4150943395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 382658.2925438615,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 382649.7807017543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 435301.2117882066,
            "unit": "ns/iter",
            "extra": "iterations: 2002\ncpu: 435289.9100899103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7162.162249461643,
            "unit": "ns/iter",
            "extra": "iterations: 98139\ncpu: 7162.0120441414765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5879.479810016119,
            "unit": "ns/iter",
            "extra": "iterations: 119168\ncpu: 5879.434076262078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5913.086150574068,
            "unit": "ns/iter",
            "extra": "iterations: 118467\ncpu: 5912.4397511543275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5897.5662241333075,
            "unit": "ns/iter",
            "extra": "iterations: 118635\ncpu: 5897.416445399759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10199.862357877726,
            "unit": "ns/iter",
            "extra": "iterations: 68867\ncpu: 10199.32333338172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29685.471689862406,
            "unit": "ns/iter",
            "extra": "iterations: 27446\ncpu: 29684.737302339123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 149058.44999125996,
            "unit": "ns/iter",
            "extra": "iterations: 5729\ncpu: 149052.0160586492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116607.88149972609,
            "unit": "ns/iter",
            "extra": "iterations: 7308\ncpu: 116606.02079912418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 115446.31116229555,
            "unit": "ns/iter",
            "extra": "iterations: 7382\ncpu: 115441.80438905479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110922.93093093533,
            "unit": "ns/iter",
            "extra": "iterations: 7659\ncpu: 110920.92962527722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 365381.69313800376,
            "unit": "ns/iter",
            "extra": "iterations: 2594\ncpu: 365363.0300693914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2054984.798206378,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2054925.11210762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1632820.28998239,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1632752.5483304022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1641774.8667849726,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1641722.2024866752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1596941.9210977608,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1596840.8233276145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 891202.5501433151,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 891189.398280801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1579201.1212653627,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1579137.434094901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38533.37818317778,
            "unit": "ns/iter",
            "extra": "iterations: 21323\ncpu: 38532.48135815794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 179816.04683597115,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 179808.3472106578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 143859.2801810976,
            "unit": "ns/iter",
            "extra": "iterations: 5964\ncpu: 143856.5727699528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 141461.52994557098,
            "unit": "ns/iter",
            "extra": "iterations: 6061\ncpu: 141455.65088269254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 139380.87299008426,
            "unit": "ns/iter",
            "extra": "iterations: 6157\ncpu: 139379.81159655642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 323469.24132788,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 323450.0559492728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2102745.9706545346,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2102686.90744921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1655305.6690391873,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1655152.4911032133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1685066.0961886528,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1684973.5027223234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1624063.782230084,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1623975.4355400768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 926491.800000008,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 926457.9000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1607313.8821491697,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1607210.051993072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5718005.459999632,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5717588.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3343370.032258124,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3343155.555555556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28036.65879931361,
            "unit": "ns/iter",
            "extra": "iterations: 29150\ncpu: 28035.725557461417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 141932.03777302877,
            "unit": "ns/iter",
            "extra": "iterations: 6089\ncpu: 141923.64920348205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108873.53888252674,
            "unit": "ns/iter",
            "extra": "iterations: 7857\ncpu: 108868.02850960937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 115007.71990336885,
            "unit": "ns/iter",
            "extra": "iterations: 7451\ncpu: 115000.12078915519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108924.36728434799,
            "unit": "ns/iter",
            "extra": "iterations: 7825\ncpu: 108919.11821086348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 277080.0266367235,
            "unit": "ns/iter",
            "extra": "iterations: 3116\ncpu: 277062.29139923037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2081366.4004476035,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2081200.8948545877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1624880.1762653475,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1624798.0802792436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1652402.936170279,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1652343.617021273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1588636.0632478492,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1588553.1623931576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 887033.4823977628,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 886997.7164605148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1572410.8564189554,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1572330.7432432466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3192.6487887547137,
            "unit": "ns/iter",
            "extra": "iterations: 220104\ncpu: 3192.5626067676812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20839.472689328162,
            "unit": "ns/iter",
            "extra": "iterations: 33540\ncpu: 20838.941562313637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16394.854899480888,
            "unit": "ns/iter",
            "extra": "iterations: 42729\ncpu: 16393.58281260973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15611.857963657085,
            "unit": "ns/iter",
            "extra": "iterations: 44904\ncpu: 15610.818635310992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12243.411416773186,
            "unit": "ns/iter",
            "extra": "iterations: 57144\ncpu: 12242.9738905222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 101729.70821897784,
            "unit": "ns/iter",
            "extra": "iterations: 6923\ncpu: 101727.63252924968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 145132.9077720077,
            "unit": "ns/iter",
            "extra": "iterations: 4825\ncpu: 145132.10362694296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 35386.42764161523,
            "unit": "ns/iter",
            "extra": "iterations: 19666\ncpu: 35385.635106274865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 35111.27888526343,
            "unit": "ns/iter",
            "extra": "iterations: 19915\ncpu: 35110.57494351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 35118.318384304126,
            "unit": "ns/iter",
            "extra": "iterations: 19979\ncpu: 35117.58846789107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68322.24227912391,
            "unit": "ns/iter",
            "extra": "iterations: 10232\ncpu: 68320.95387021138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 64936.68677947556,
            "unit": "ns/iter",
            "extra": "iterations: 10756\ncpu: 64934.12049088852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23767.063255560002,
            "unit": "ns/iter",
            "extra": "iterations: 29531\ncpu: 23766.922894585143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 125571.99577092598,
            "unit": "ns/iter",
            "extra": "iterations: 5675\ncpu: 125565.49779735593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 98758.89028345294,
            "unit": "ns/iter",
            "extra": "iterations: 7091\ncpu: 98755.53518544685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 98915.86047496686,
            "unit": "ns/iter",
            "extra": "iterations: 7074\ncpu: 98909.66921119553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96500.98071891305,
            "unit": "ns/iter",
            "extra": "iterations: 7261\ncpu: 96498.11320754809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 177219.58160920115,
            "unit": "ns/iter",
            "extra": "iterations: 3915\ncpu: 177218.5440613006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 609145.5857267766,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 609115.0565709303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 504859.49603459187,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 504847.1521268985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 508609.27318844787,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 508583.6956521669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 496807.7373665062,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 496795.302491097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 305418.6204634931,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 305394.49059903837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 488444.59052924707,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 488435.16713092057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23666.4265605058,
            "unit": "ns/iter",
            "extra": "iterations: 29766\ncpu: 23665.097762548143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118690.86336668053,
            "unit": "ns/iter",
            "extra": "iterations: 5899\ncpu: 118686.65875571949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96328.69790230003,
            "unit": "ns/iter",
            "extra": "iterations: 7246\ncpu: 96325.1035053818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 98326.11709932733,
            "unit": "ns/iter",
            "extra": "iterations: 7088\ncpu: 98319.44130925558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 98103.48394785468,
            "unit": "ns/iter",
            "extra": "iterations: 7133\ncpu: 98098.80835553144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 171697.48645986328,
            "unit": "ns/iter",
            "extra": "iterations: 4062\ncpu: 171690.98966026714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 611659.9666666532,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 611644.6491228039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 498065.66951572587,
            "unit": "ns/iter",
            "extra": "iterations: 1404\ncpu: 498049.8575498608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 504466.5379655877,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 504449.4269340912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 494987.3185028544,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 494966.0310734433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 310864.406802145,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 310848.4982332156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 488708.7638015846,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 488676.0307477267 ns\nthreads: 1"
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
        "date": 1705956127457,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8488.195545997067,
            "unit": "ns/iter",
            "extra": "iterations: 82308\ncpu: 8487.761821451137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 62385.2789427066,
            "unit": "ns/iter",
            "extra": "iterations: 13544\ncpu: 62384.0445953928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 114868.19476705899,
            "unit": "ns/iter",
            "extra": "iterations: 7491\ncpu: 114863.64971298895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 167340.20066110333,
            "unit": "ns/iter",
            "extra": "iterations: 5143\ncpu: 167336.24343768225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 220438.74471877422,
            "unit": "ns/iter",
            "extra": "iterations: 3929\ncpu: 220430.5675744464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 271780.70492317376,
            "unit": "ns/iter",
            "extra": "iterations: 3189\ncpu: 271770.83725305763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 325166.62986526225,
            "unit": "ns/iter",
            "extra": "iterations: 2672\ncpu: 325154.9026946108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 377431.7934027592,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 377420.5729166665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 430598.5970370751,
            "unit": "ns/iter",
            "extra": "iterations: 2025\ncpu: 430570.5679012351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7045.562009939315,
            "unit": "ns/iter",
            "extra": "iterations: 99605\ncpu: 7045.193514381816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5838.702613314978,
            "unit": "ns/iter",
            "extra": "iterations: 119733\ncpu: 5838.557457008515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5760.242318654275,
            "unit": "ns/iter",
            "extra": "iterations: 121398\ncpu: 5760.071006112136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5800.452236780332,
            "unit": "ns/iter",
            "extra": "iterations: 120888\ncpu: 5800.140626034023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10285.660160328214,
            "unit": "ns/iter",
            "extra": "iterations: 67985\ncpu: 10285.543869971321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30276.472089905652,
            "unit": "ns/iter",
            "extra": "iterations: 26872\ncpu: 30275.003721345634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 149522.392544621,
            "unit": "ns/iter",
            "extra": "iterations: 5714\ncpu: 149519.46097304858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 117126.22316772724,
            "unit": "ns/iter",
            "extra": "iterations: 7286\ncpu: 117119.53060664311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118184.14230343231,
            "unit": "ns/iter",
            "extra": "iterations: 7224\ncpu: 118182.87652270192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 113021.81205910021,
            "unit": "ns/iter",
            "extra": "iterations: 7513\ncpu: 113016.01224544115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 366449.31556420913,
            "unit": "ns/iter",
            "extra": "iterations: 2570\ncpu: 366442.60700389155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2022423.2326086166,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2022328.043478261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1598965.7689656583,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1598924.1379310326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1587783.8356165555,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1587678.7671232892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1543604.0465891182,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1543567.5540765398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 873474.0170777221,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 873425.0474383275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1534410.612582791,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1534355.1324503324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 40257.49756738164,
            "unit": "ns/iter",
            "extra": "iterations: 20554\ncpu: 40256.46589471644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 189893.6663743988,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 189890.5523893031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 148501.16770725057,
            "unit": "ns/iter",
            "extra": "iterations: 5766\ncpu: 148494.9531737769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 141487.52029702693,
            "unit": "ns/iter",
            "extra": "iterations: 6060\ncpu: 141484.38943894414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 139603.66557591033,
            "unit": "ns/iter",
            "extra": "iterations: 6112\ncpu: 139596.18782722478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 327807.21070486336,
            "unit": "ns/iter",
            "extra": "iterations: 2653\ncpu: 327806.483226537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2032301.4603524727,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2032168.7224669596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1636584.2166961923,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1636494.3161634034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1627138.8912280982,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1627110.701754388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1563705.5738541272,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1563630.5602716394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 922977.1079207698,
            "unit": "ns/iter",
            "extra": "iterations: 1010\ncpu: 922966.5346534653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1577631.7060811676,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1577533.2770270233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5651327.609999726,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5651025.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3238986.6829268807,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3238828.571428563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27696.48843763725,
            "unit": "ns/iter",
            "extra": "iterations: 29449\ncpu: 27696.11871370852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143110.54824196777,
            "unit": "ns/iter",
            "extra": "iterations: 6001\ncpu: 143099.03349441782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110730.00221181811,
            "unit": "ns/iter",
            "extra": "iterations: 7686\ncpu: 110728.68852459082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 118186.83505437638,
            "unit": "ns/iter",
            "extra": "iterations: 7263\ncpu: 118180.4075450914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 109040.72868612607,
            "unit": "ns/iter",
            "extra": "iterations: 7847\ncpu: 109040.48681024622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 279109.6330096903,
            "unit": "ns/iter",
            "extra": "iterations: 3090\ncpu: 279092.4271844658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2024535.7015251687,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2024409.5860566418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1590942.0601374644,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1590872.508591062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1610685.5618556852,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1610615.463917522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1515178.819512237,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1515114.471544713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 871782.682629024,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 871771.5492957736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1526847.677577832,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1526771.6857610545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3206.042184088197,
            "unit": "ns/iter",
            "extra": "iterations: 218471\ncpu: 3205.778799016817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20922.68111269988,
            "unit": "ns/iter",
            "extra": "iterations: 33504\ncpu: 20921.084049665795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16909.706404235123,
            "unit": "ns/iter",
            "extra": "iterations: 40239\ncpu: 16908.529038991972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15631.69405770127,
            "unit": "ns/iter",
            "extra": "iterations: 44747\ncpu: 15630.52048181996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12206.866079678906,
            "unit": "ns/iter",
            "extra": "iterations: 57355\ncpu: 12205.856507715162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 98067.84234108435,
            "unit": "ns/iter",
            "extra": "iterations: 7142\ncpu: 98066.24194903324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 139556.66653426617,
            "unit": "ns/iter",
            "extra": "iterations: 5035\ncpu: 139554.33962264124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34456.44123599746,
            "unit": "ns/iter",
            "extra": "iterations: 20259\ncpu: 34455.23964657692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34457.133943507535,
            "unit": "ns/iter",
            "extra": "iterations: 20322\ncpu: 34457.06623363855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33639.32628239104,
            "unit": "ns/iter",
            "extra": "iterations: 20801\ncpu: 33636.8251526367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68971.87152161599,
            "unit": "ns/iter",
            "extra": "iterations: 10134\ncpu: 68970.60390763721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 63084.10090333746,
            "unit": "ns/iter",
            "extra": "iterations: 11070\ncpu: 63082.8997289973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23176.75688650725,
            "unit": "ns/iter",
            "extra": "iterations: 30204\ncpu: 23175.341014435333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116002.76317535264,
            "unit": "ns/iter",
            "extra": "iterations: 6034\ncpu: 115992.3102419622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95205.39872126588,
            "unit": "ns/iter",
            "extra": "iterations: 7351\ncpu: 95197.32009250352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95469.90587431764,
            "unit": "ns/iter",
            "extra": "iterations: 7320\ncpu: 95463.70218579276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94269.98260282735,
            "unit": "ns/iter",
            "extra": "iterations: 7415\ncpu: 94268.24005394478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 175322.65354726985,
            "unit": "ns/iter",
            "extra": "iterations: 3989\ncpu: 175313.13612434152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 590392.8169605073,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 590369.1855583587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 488817.08842105704,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 488760.0701754348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 501330.47096774605,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 501297.84946237266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 475674.382716031,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 475603.56652948714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 307803.9194690015,
            "unit": "ns/iter",
            "extra": "iterations: 2260\ncpu: 307794.82300884847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 480952.2531034669,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 480951.86206896394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23242.281326946915,
            "unit": "ns/iter",
            "extra": "iterations: 30054\ncpu: 23241.9777733411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115486.60668421838,
            "unit": "ns/iter",
            "extra": "iterations: 6074\ncpu: 115481.14916035724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95652.31741986952,
            "unit": "ns/iter",
            "extra": "iterations: 7457\ncpu: 95650.04693576573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95135.750612574,
            "unit": "ns/iter",
            "extra": "iterations: 7346\ncpu: 95130.95562210865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94840.74007074135,
            "unit": "ns/iter",
            "extra": "iterations: 7352\ncpu: 94836.5206746473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 170158.5292546587,
            "unit": "ns/iter",
            "extra": "iterations: 4119\ncpu: 170148.50691915813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 603510.125862111,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 603500.6896551749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 493850.3913963064,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 493828.5613540235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 484919.5821104664,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 484919.7763801494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 476971.2751859049,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 476945.97701149294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 309168.91145375604,
            "unit": "ns/iter",
            "extra": "iterations: 2270\ncpu: 309160.66079295496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 478500.6527110645,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 478494.92107069417 ns\nthreads: 1"
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
        "date": 1705957717916,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8462.101338201166,
            "unit": "ns/iter",
            "extra": "iterations: 82723\ncpu: 8461.88363574822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60663.507853401585,
            "unit": "ns/iter",
            "extra": "iterations: 13943\ncpu: 60662.09567524922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 113417.59915667583,
            "unit": "ns/iter",
            "extra": "iterations: 7589\ncpu: 113414.40242456186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 164666.44106972078,
            "unit": "ns/iter",
            "extra": "iterations: 5235\ncpu: 164663.38108882512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 222463.58233232386,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 222459.95995995993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 268881.96551723836,
            "unit": "ns/iter",
            "extra": "iterations: 3219\ncpu: 268867.5365020191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 319219.43641725654,
            "unit": "ns/iter",
            "extra": "iterations: 2713\ncpu: 319205.16033910797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 368970.3509513804,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 368947.35729386914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 418497.6446921889,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 418454.6776539022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6992.006627209512,
            "unit": "ns/iter",
            "extra": "iterations: 100193\ncpu: 6991.878674158879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5709.616887199087,
            "unit": "ns/iter",
            "extra": "iterations: 122507\ncpu: 5709.610879378323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5760.592989985802,
            "unit": "ns/iter",
            "extra": "iterations: 121626\ncpu: 5760.496111028885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5792.326499049163,
            "unit": "ns/iter",
            "extra": "iterations: 120910\ncpu: 5792.22644942519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9935.206464417073,
            "unit": "ns/iter",
            "extra": "iterations: 70540\ncpu: 9935.025517436925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29332.222711521074,
            "unit": "ns/iter",
            "extra": "iterations: 27704\ncpu: 29330.87640773898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 143131.14024798534,
            "unit": "ns/iter",
            "extra": "iterations: 5968\ncpu: 143128.48525469162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113434.18871440268,
            "unit": "ns/iter",
            "extra": "iterations: 7514\ncpu: 113431.14186851232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 114403.3399433402,
            "unit": "ns/iter",
            "extra": "iterations: 7413\ncpu: 114399.12316201249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 107428.11812317735,
            "unit": "ns/iter",
            "extra": "iterations: 7907\ncpu: 107421.5758188946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 364888.2138437679,
            "unit": "ns/iter",
            "extra": "iterations: 2586\ncpu: 364878.03557618003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2014352.7478259548,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2014271.9565217341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1550740.100334379,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1550675.418060198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1594037.8339039804,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1593978.9383561625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1548341.3294315783,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1548242.6421404693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 849288.8839779259,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 849257.3664825032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1517962.5433715277,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1517868.0851063821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38421.890238207015,
            "unit": "ns/iter",
            "extra": "iterations: 21410\ncpu: 38420.91078935078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 185468.35286429655,
            "unit": "ns/iter",
            "extra": "iterations: 4591\ncpu: 185453.95338706186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 144842.2037443044,
            "unit": "ns/iter",
            "extra": "iterations: 5929\ncpu: 144840.1416765052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 140257.58904333884,
            "unit": "ns/iter",
            "extra": "iterations: 6115\ncpu: 140251.561733442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 137014.86653895647,
            "unit": "ns/iter",
            "extra": "iterations: 6264\ncpu: 137012.51596424048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 326300.3825857518,
            "unit": "ns/iter",
            "extra": "iterations: 2653\ncpu: 326286.24199020007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2049556.2307692475,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2049520.659340661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1583301.829642199,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1583204.0885860282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1623195.0711805215,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1623140.6250000068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1584441.2057823108,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1584372.4489795982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 903001.8872691897,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 902981.1467444116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1552489.439597247,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1552364.7651006712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5584304.2500009695,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5584114.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3346651.1623617816,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3346511.4391143806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27316.709832937267,
            "unit": "ns/iter",
            "extra": "iterations: 29869\ncpu: 27316.592453714467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137126.18341587664,
            "unit": "ns/iter",
            "extra": "iterations: 6259\ncpu: 137118.82089790748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106270.30916975967,
            "unit": "ns/iter",
            "extra": "iterations: 8070\ncpu: 106269.8265179683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109688.39318964964,
            "unit": "ns/iter",
            "extra": "iterations: 7841\ncpu: 109685.43553118267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105999.94557907344,
            "unit": "ns/iter",
            "extra": "iterations: 8030\ncpu: 105999.5143212947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 278323.05880452995,
            "unit": "ns/iter",
            "extra": "iterations: 3095\ncpu: 278307.98061389325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2020962.1125540158,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2020909.3073593169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1538598.1735537953,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1538505.1239669474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1579478.815878511,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1579420.4391891784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1523899.9325659408,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1523840.4605263085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 848663.1880733187,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 848618.6238532059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1517830.3371336232,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1517722.638436479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3147.151382236702,
            "unit": "ns/iter",
            "extra": "iterations: 222972\ncpu: 3146.987962614147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19996.012827821745,
            "unit": "ns/iter",
            "extra": "iterations: 35080\ncpu: 19995.71835803874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15533.87714704054,
            "unit": "ns/iter",
            "extra": "iterations: 45062\ncpu: 15533.33851138432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16965.218371556624,
            "unit": "ns/iter",
            "extra": "iterations: 41205\ncpu: 16964.147554908282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12253.323494335624,
            "unit": "ns/iter",
            "extra": "iterations: 57018\ncpu: 12252.467641797362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 100070.2495714287,
            "unit": "ns/iter",
            "extra": "iterations: 7000\ncpu: 100062.7142857137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 138186.91275168865,
            "unit": "ns/iter",
            "extra": "iterations: 5066\ncpu: 138177.3983418877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34585.99540287115,
            "unit": "ns/iter",
            "extra": "iterations: 20230\ncpu: 34583.69253583813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33963.97570320224,
            "unit": "ns/iter",
            "extra": "iterations: 20620\ncpu: 33962.16294859376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33599.859458937564,
            "unit": "ns/iter",
            "extra": "iterations: 20663\ncpu: 33597.89478778495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67901.24847309008,
            "unit": "ns/iter",
            "extra": "iterations: 10315\ncpu: 67896.89772176424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 59831.5246686625,
            "unit": "ns/iter",
            "extra": "iterations: 11695\ncpu: 59829.84181274015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22533.409112862577,
            "unit": "ns/iter",
            "extra": "iterations: 31055\ncpu: 22533.305425857143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116417.84489050429,
            "unit": "ns/iter",
            "extra": "iterations: 6028\ncpu: 116413.38752488265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93932.82083725238,
            "unit": "ns/iter",
            "extra": "iterations: 7429\ncpu: 93925.99273118761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93925.67349945985,
            "unit": "ns/iter",
            "extra": "iterations: 7464\ncpu: 93918.40836012918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91985.27388452346,
            "unit": "ns/iter",
            "extra": "iterations: 7620\ncpu: 91976.6404199476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 168991.8922445129,
            "unit": "ns/iter",
            "extra": "iterations: 4139\ncpu: 168982.36288958893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 587655.1283556782,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 587640.1845637562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 480273.1436425863,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 480233.6769759456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 485378.5423023164,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 485335.3675450744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 475915.36394557636,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 475880.9523809527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 300220.7384020508,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 300202.878006875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 471019.70492911123,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 471008.5752869706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23114.786659608268,
            "unit": "ns/iter",
            "extra": "iterations: 30224\ncpu: 23113.803599788258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115059.26695265807,
            "unit": "ns/iter",
            "extra": "iterations: 6061\ncpu: 115057.43276687083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92465.4339372966,
            "unit": "ns/iter",
            "extra": "iterations: 7561\ncpu: 92460.98399682684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93643.7191854174,
            "unit": "ns/iter",
            "extra": "iterations: 7464\ncpu: 93640.11254019318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93617.210314798,
            "unit": "ns/iter",
            "extra": "iterations: 7465\ncpu: 93615.19089082222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 168328.6810096099,
            "unit": "ns/iter",
            "extra": "iterations: 4160\ncpu: 168326.20192307723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 585686.0360737818,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 585684.0604026831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 475419.12415196525,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 475412.8222523788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 498601.125528894,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 498559.5909732027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 472566.32860044105,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 472539.1480730187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 295141.14828899247,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 295122.2222222213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 465630.30516431807,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 465578.53789403307 ns\nthreads: 1"
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
        "date": 1705959190976,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8770.613302437396,
            "unit": "ns/iter",
            "extra": "iterations: 78542\ncpu: 8769.926918082045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 63929.16475298536,
            "unit": "ns/iter",
            "extra": "iterations: 13238\ncpu: 63924.769602659006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 118467.85959846409,
            "unit": "ns/iter",
            "extra": "iterations: 7272\ncpu: 118458.99339933992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 171722.69846337728,
            "unit": "ns/iter",
            "extra": "iterations: 5011\ncpu: 171711.6942726003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 226314.91198744113,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 226298.01514755818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 281267.2132424347,
            "unit": "ns/iter",
            "extra": "iterations: 3081\ncpu: 281238.9808503735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 335904.87164529157,
            "unit": "ns/iter",
            "extra": "iterations: 2571\ncpu: 335886.0754570208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 391418.22686436883,
            "unit": "ns/iter",
            "extra": "iterations: 2226\ncpu: 391398.203054807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 442848.92926209007,
            "unit": "ns/iter",
            "extra": "iterations: 1965\ncpu: 442823.71501272277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7400.303348230346,
            "unit": "ns/iter",
            "extra": "iterations: 94647\ncpu: 7399.853138504114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 6063.711217802061,
            "unit": "ns/iter",
            "extra": "iterations: 115807\ncpu: 6063.786299619192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 6024.055272746067,
            "unit": "ns/iter",
            "extra": "iterations: 116097\ncpu: 6023.770640068232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 6024.692990698854,
            "unit": "ns/iter",
            "extra": "iterations: 116003\ncpu: 6024.342473901539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10564.853170473836,
            "unit": "ns/iter",
            "extra": "iterations: 66315\ncpu: 10563.787981602965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30202.32299148171,
            "unit": "ns/iter",
            "extra": "iterations: 27010\ncpu: 30200.618289522386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145859.94536453212,
            "unit": "ns/iter",
            "extra": "iterations: 5857\ncpu: 145851.8866313812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115012.93175033832,
            "unit": "ns/iter",
            "extra": "iterations: 7370\ncpu: 115005.95658073266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113158.81943706315,
            "unit": "ns/iter",
            "extra": "iterations: 7532\ncpu: 113153.30589484841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109839.24056178823,
            "unit": "ns/iter",
            "extra": "iterations: 7761\ncpu: 109832.37984795764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 378452.7669474333,
            "unit": "ns/iter",
            "extra": "iterations: 2493\ncpu: 378431.60850381036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2112487.354022845,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2112377.70114943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1672072.8507193974,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1671927.6978417279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1671606.3075540883,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1671560.4316546796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1640426.5388692846,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1640363.0742049448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 893588.6595949861,
            "unit": "ns/iter",
            "extra": "iterations: 1037\ncpu: 893585.0530376087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1606314.6747404763,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1606264.5328719707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37797.5002293365,
            "unit": "ns/iter",
            "extra": "iterations: 21802\ncpu: 37797.55068342355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 186791.74124513037,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 186791.3964548208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 146009.52193799205,
            "unit": "ns/iter",
            "extra": "iterations: 5903\ncpu: 146007.72488565117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 140906.89973701187,
            "unit": "ns/iter",
            "extra": "iterations: 6084\ncpu: 140904.01051939515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 140309.61205616043,
            "unit": "ns/iter",
            "extra": "iterations: 6055\ncpu: 140309.54582989274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 339185.86867895804,
            "unit": "ns/iter",
            "extra": "iterations: 2551\ncpu: 339181.3406507254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2163662.8860466224,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2163614.651162785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1733597.3296090246,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1733527.7467411598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1710301.5046040283,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1710275.8747697931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1678458.9135133978,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1678441.8018018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 938971.8400809707,
            "unit": "ns/iter",
            "extra": "iterations: 988\ncpu: 938939.0688259098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1658672.0534759513,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1658641.3547237036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5715087.959999892,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5715032.999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3392597.149091175,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3392544.3636363703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27756.28589412168,
            "unit": "ns/iter",
            "extra": "iterations: 29392\ncpu: 27755.7668753403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 146293.03323109023,
            "unit": "ns/iter",
            "extra": "iterations: 5868\ncpu: 146291.13837764182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108152.08129669438,
            "unit": "ns/iter",
            "extra": "iterations: 7897\ncpu: 108152.43763454398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111239.54263464751,
            "unit": "ns/iter",
            "extra": "iterations: 7705\ncpu: 111236.69046073918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 106228.07786527526,
            "unit": "ns/iter",
            "extra": "iterations: 8001\ncpu: 106225.73428321516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 291055.8618951628,
            "unit": "ns/iter",
            "extra": "iterations: 2976\ncpu: 291055.94758064306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2146674.0438797427,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2146671.5935334726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1679291.5909910982,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1679273.3333333319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1683974.1750900939,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1683923.2851985537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1642237.624561435,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1642240.3508771884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 888635.5152671811,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 888632.9198473293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1614326.1815007767,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1614227.3996509616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3197.8464497164105,
            "unit": "ns/iter",
            "extra": "iterations: 218391\ncpu: 3197.803938807009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21116.282877664464,
            "unit": "ns/iter",
            "extra": "iterations: 33138\ncpu: 21115.49580541989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16862.66041827168,
            "unit": "ns/iter",
            "extra": "iterations: 41504\ncpu: 16862.034984579863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16224.851423406122,
            "unit": "ns/iter",
            "extra": "iterations: 43136\ncpu: 16223.597459198842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12412.960240244944,
            "unit": "ns/iter",
            "extra": "iterations: 56942\ncpu: 12411.759334059168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 105575.4176557859,
            "unit": "ns/iter",
            "extra": "iterations: 6740\ncpu: 105570.0148367953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 147871.90533167584,
            "unit": "ns/iter",
            "extra": "iterations: 4764\ncpu: 147873.6985726289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 35798.54720449774,
            "unit": "ns/iter",
            "extra": "iterations: 19585\ncpu: 35798.41715598646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 35506.4026467921,
            "unit": "ns/iter",
            "extra": "iterations: 19722\ncpu: 35506.04401176348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 35078.73337678826,
            "unit": "ns/iter",
            "extra": "iterations: 19942\ncpu: 35079.19967906942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 69290.6895971447,
            "unit": "ns/iter",
            "extra": "iterations: 10103\ncpu: 69291.58665742807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 66260.4614656363,
            "unit": "ns/iter",
            "extra": "iterations: 10562\ncpu: 66259.88449157367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23974.02792016951,
            "unit": "ns/iter",
            "extra": "iterations: 29262\ncpu: 23972.64028432748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119992.1626744765,
            "unit": "ns/iter",
            "extra": "iterations: 5803\ncpu: 119989.55712562484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 97285.36479910914,
            "unit": "ns/iter",
            "extra": "iterations: 7193\ncpu: 97280.48102321634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97139.21688419627,
            "unit": "ns/iter",
            "extra": "iterations: 7202\ncpu: 97139.19744515391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96506.57144832077,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 96504.94748479879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 179238.1614142802,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 179234.23007942658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 631278.5872302171,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 631260.43165468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 515285.05367649725,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 515246.76470587304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 518352.18060694495,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 518309.6965210913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 507176.7249097609,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 507144.83754512825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 314093.50697256846,
            "unit": "ns/iter",
            "extra": "iterations: 2223\ncpu: 314074.6738641483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 500113.19685043866,
            "unit": "ns/iter",
            "extra": "iterations: 1397\ncpu: 500095.20400858036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24364.15823732295,
            "unit": "ns/iter",
            "extra": "iterations: 28729\ncpu: 24363.190504368515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120373.02234060857,
            "unit": "ns/iter",
            "extra": "iterations: 5819\ncpu: 120368.27633614035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95693.17448378888,
            "unit": "ns/iter",
            "extra": "iterations: 7313\ncpu: 95684.75317927082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96914.36250346727,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 96910.99418443591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 97447.21625382679,
            "unit": "ns/iter",
            "extra": "iterations: 7186\ncpu: 97446.70192039965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 175034.00828105528,
            "unit": "ns/iter",
            "extra": "iterations: 3985\ncpu: 175033.12421580972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 627416.9479820149,
            "unit": "ns/iter",
            "extra": "iterations: 1115\ncpu: 627412.2869955124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 510515.6766642369,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 510491.6605705945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 512146.5969275842,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 512114.92318946536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 504403.47113994596,
            "unit": "ns/iter",
            "extra": "iterations: 1386\ncpu: 504377.48917749047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 314134.9919064769,
            "unit": "ns/iter",
            "extra": "iterations: 2224\ncpu: 314121.4478417231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 497853.5356125404,
            "unit": "ns/iter",
            "extra": "iterations: 1404\ncpu: 497820.72649572924 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}