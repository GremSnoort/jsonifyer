window.BENCHMARK_DATA = {
  "lastUpdate": 1702492166791,
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
      }
    ]
  }
}