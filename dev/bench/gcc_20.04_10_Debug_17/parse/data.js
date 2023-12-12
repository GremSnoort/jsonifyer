window.BENCHMARK_DATA = {
  "lastUpdate": 1702396480747,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-10 20.04 Debug c++-17": [
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381131709,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6949.398204867119,
            "unit": "ns/iter",
            "extra": "iterations: 101051\ncpu: 6949.216732145154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57971.64619530425,
            "unit": "ns/iter",
            "extra": "iterations: 14101\ncpu: 57970.4418126374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91800.2785904957,
            "unit": "ns/iter",
            "extra": "iterations: 9365\ncpu: 91798.73998932194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 133421.50495663413,
            "unit": "ns/iter",
            "extra": "iterations: 6456\ncpu: 133417.2397769517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 174825.99254784128,
            "unit": "ns/iter",
            "extra": "iterations: 4965\ncpu: 174822.41691842905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 216340.4842499972,
            "unit": "ns/iter",
            "extra": "iterations: 4000\ncpu: 216335.35000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 258167.7453841539,
            "unit": "ns/iter",
            "extra": "iterations: 3358\ncpu: 258162.1203097081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 299732.5928867447,
            "unit": "ns/iter",
            "extra": "iterations: 2896\ncpu: 299727.5552486188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 342190.6864207215,
            "unit": "ns/iter",
            "extra": "iterations: 2548\ncpu: 342184.2229199372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5679.85705835645,
            "unit": "ns/iter",
            "extra": "iterations: 123414\ncpu: 5679.8936911533565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4592.157204695835,
            "unit": "ns/iter",
            "extra": "iterations: 152470\ncpu: 4592.045648324262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4973.596580037308,
            "unit": "ns/iter",
            "extra": "iterations: 140060\ncpu: 4973.096530058548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4615.714337510612,
            "unit": "ns/iter",
            "extra": "iterations: 151693\ncpu: 4615.481927313711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7047.286850777195,
            "unit": "ns/iter",
            "extra": "iterations: 98926\ncpu: 7047.094798131928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25260.50661994961,
            "unit": "ns/iter",
            "extra": "iterations: 32251\ncpu: 25259.629158785774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 127003.58495863601,
            "unit": "ns/iter",
            "extra": "iterations: 6768\ncpu: 127000.01477541366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100687.36726547417,
            "unit": "ns/iter",
            "extra": "iterations: 8517\ncpu: 100684.5368087354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101003.03990999868,
            "unit": "ns/iter",
            "extra": "iterations: 8444\ncpu: 100999.86972998564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99090.7720195207,
            "unit": "ns/iter",
            "extra": "iterations: 8606\ncpu: 99091.7267023007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 202285.08576642754,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 202280.8394160589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1606981.5927210425,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1606909.185441939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1263309.2225237638,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1263269.1994572638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1260842.0460704505,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1260824.5257452563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1248909.6630872227,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 1248872.7516778533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 679600.3418928914,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 679577.47615554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1218087.88728702,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 1218042.3328964636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32261.43394897454,
            "unit": "ns/iter",
            "extra": "iterations: 25556\ncpu: 32260.615902332025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 161046.51221787056,
            "unit": "ns/iter",
            "extra": "iterations: 5361\ncpu: 161043.46204066425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 126934.65213549246,
            "unit": "ns/iter",
            "extra": "iterations: 6790\ncpu: 126932.53313696622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 125376.88767482656,
            "unit": "ns/iter",
            "extra": "iterations: 6864\ncpu: 125372.29020979059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123280.14861569472,
            "unit": "ns/iter",
            "extra": "iterations: 6971\ncpu: 123277.46377851114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 217414.10625471294,
            "unit": "ns/iter",
            "extra": "iterations: 3981\ncpu: 217409.3695051488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1641390.5824560572,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1641349.6491228149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1300109.5383542622,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1300058.8563458875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1285164.1862068297,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1285134.0689655214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1268722.4000000225,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1268688.7074829927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 717843.8754833695,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 717827.6102088174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1248272.2244624195,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 1248239.51612903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5923615.873417861,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5923630.379746825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2696999.6416184553,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2696853.468208093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24221.150628729287,
            "unit": "ns/iter",
            "extra": "iterations: 33878\ncpu: 24220.340634039945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 125680.93223550846,
            "unit": "ns/iter",
            "extra": "iterations: 6862\ncpu: 125676.53745263733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 98425.67769636009,
            "unit": "ns/iter",
            "extra": "iterations: 8734\ncpu: 98421.61667048377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98575.99610449823,
            "unit": "ns/iter",
            "extra": "iterations: 8728\ncpu: 98572.7428964252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 95684.71781007551,
            "unit": "ns/iter",
            "extra": "iterations: 8877\ncpu: 95681.93083248813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 185546.28663375304,
            "unit": "ns/iter",
            "extra": "iterations: 4661\ncpu: 185543.23106629524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1606809.1293103124,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1606794.3103448248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1259392.905533059,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 1259356.5452091699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1257397.3333333405,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 1257355.7795698901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1246654.5053333298,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1246623.1999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 689116.800724671,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 689096.666666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1210025.024675378,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 1210001.9480519423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2564.2972104377377,
            "unit": "ns/iter",
            "extra": "iterations: 273197\ncpu: 2564.2239848900176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17179.75455236048,
            "unit": "ns/iter",
            "extra": "iterations: 40803\ncpu: 17179.378967232813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14202.69122721494,
            "unit": "ns/iter",
            "extra": "iterations: 49266\ncpu: 14202.583932123633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13456.696448871624,
            "unit": "ns/iter",
            "extra": "iterations: 51899\ncpu: 13456.417272009116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10063.292123829426,
            "unit": "ns/iter",
            "extra": "iterations: 69450\ncpu: 10063.06983441332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65289.5746220203,
            "unit": "ns/iter",
            "extra": "iterations: 10781\ncpu: 65288.3127724699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 110621.11909651701,
            "unit": "ns/iter",
            "extra": "iterations: 6331\ncpu: 110618.79639867342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27112.46516036536,
            "unit": "ns/iter",
            "extra": "iterations: 25847\ncpu: 27111.989786048744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27115.128763512996,
            "unit": "ns/iter",
            "extra": "iterations: 25807\ncpu: 27114.391444181972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 26823.43696965036,
            "unit": "ns/iter",
            "extra": "iterations: 26162\ncpu: 26821.833193181054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 53478.69937480908,
            "unit": "ns/iter",
            "extra": "iterations: 13116\ncpu: 53476.63921927378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 50941.6275309567,
            "unit": "ns/iter",
            "extra": "iterations: 13730\ncpu: 50942.67297887844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20659.964475442808,
            "unit": "ns/iter",
            "extra": "iterations: 33695\ncpu: 20659.925805015522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101313.63707457019,
            "unit": "ns/iter",
            "extra": "iterations: 6905\ncpu: 101312.59956553171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 82649.4062426169,
            "unit": "ns/iter",
            "extra": "iterations: 8458\ncpu: 82647.8127216833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82921.71215351947,
            "unit": "ns/iter",
            "extra": "iterations: 8442\ncpu: 82918.5974887471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 81939.4790517577,
            "unit": "ns/iter",
            "extra": "iterations: 8521\ncpu: 81941.06325548525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 126082.54183196553,
            "unit": "ns/iter",
            "extra": "iterations: 5546\ncpu: 126082.36566894995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 480287.4547944973,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 480283.63013698725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 394243.23509561847,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 394230.3149606294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 394769.61923513253,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 394760.179977504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 389590.24999996927,
            "unit": "ns/iter",
            "extra": "iterations: 1800\ncpu: 389578.9444444454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 245019.2961794954,
            "unit": "ns/iter",
            "extra": "iterations: 2853\ncpu: 245011.6368734657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 385216.524255748,
            "unit": "ns/iter",
            "extra": "iterations: 1814\ncpu: 385211.46637265466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21713.340976607757,
            "unit": "ns/iter",
            "extra": "iterations: 32316\ncpu: 21712.984280232304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104759.84959592915,
            "unit": "ns/iter",
            "extra": "iterations: 6682\ncpu: 104757.57258305802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86166.1252304212,
            "unit": "ns/iter",
            "extra": "iterations: 8137\ncpu: 86163.63524640596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87922.75258381786,
            "unit": "ns/iter",
            "extra": "iterations: 7934\ncpu: 87921.31333501302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86867.95846249774,
            "unit": "ns/iter",
            "extra": "iterations: 8065\ncpu: 86866.95598264069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127111.54150054527,
            "unit": "ns/iter",
            "extra": "iterations: 5518\ncpu: 127107.32149329351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 479859.4396433194,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 479860.6310013672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 406983.2474285379,
            "unit": "ns/iter",
            "extra": "iterations: 1750\ncpu: 406986.2857142864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 398868.8928164451,
            "unit": "ns/iter",
            "extra": "iterations: 1754\ncpu: 398868.47206385684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 392044.38108559983,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 392033.74370453076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 253168.61474521572,
            "unit": "ns/iter",
            "extra": "iterations: 2767\ncpu: 253163.20925189994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 392164.4784555655,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 392153.1617235609 ns\nthreads: 1"
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
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382298412,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6849.596509622139,
            "unit": "ns/iter",
            "extra": "iterations: 102052\ncpu: 6849.226864735625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50714.848799998435,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50712.54999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93817.41582969393,
            "unit": "ns/iter",
            "extra": "iterations: 9160\ncpu: 93817.27074235806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136158.92416614707,
            "unit": "ns/iter",
            "extra": "iterations: 6356\ncpu: 136157.5833857772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179080.21190819773,
            "unit": "ns/iter",
            "extra": "iterations: 4837\ncpu: 179077.8788505273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 221249.780363075,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 221236.53796982867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 262942.50060863723,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 262935.17954960454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 304917.3493679834,
            "unit": "ns/iter",
            "extra": "iterations: 2848\ncpu: 304903.6867977528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 347134.1812748815,
            "unit": "ns/iter",
            "extra": "iterations: 2510\ncpu: 347122.2709163346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5622.409069737557,
            "unit": "ns/iter",
            "extra": "iterations: 124524\ncpu: 5622.227040570491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4589.267453828875,
            "unit": "ns/iter",
            "extra": "iterations: 152531\ncpu: 4589.071074076745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4642.717974075074,
            "unit": "ns/iter",
            "extra": "iterations: 150667\ncpu: 4642.613180059339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4607.01730895487,
            "unit": "ns/iter",
            "extra": "iterations: 153851\ncpu: 4606.978180187329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7154.191095736745,
            "unit": "ns/iter",
            "extra": "iterations: 97998\ncpu: 7154.090899814282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25359.98515191229,
            "unit": "ns/iter",
            "extra": "iterations: 32058\ncpu: 25358.893255973544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 122394.85953129157,
            "unit": "ns/iter",
            "extra": "iterations: 6998\ncpu: 122391.54044012574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 96599.2446663671,
            "unit": "ns/iter",
            "extra": "iterations: 8812\ncpu: 96596.0962324105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 96142.1580143096,
            "unit": "ns/iter",
            "extra": "iterations: 8803\ncpu: 96137.2486652279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93131.6316306508,
            "unit": "ns/iter",
            "extra": "iterations: 9162\ncpu: 93128.64003492687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 200820.4882313465,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 200815.01905402384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1624740.9213286524,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1624681.2937062911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1277011.537826652,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 1276971.939477303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1274227.7881705374,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 1274187.8954607986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1262138.666666655,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1262099.3224932267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 697698.2739622643,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 697675.8490566039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1232966.1369681149,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 1232930.8510638315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32479.491460800673,
            "unit": "ns/iter",
            "extra": "iterations: 25178\ncpu: 32479.13257605841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156388.60054495555,
            "unit": "ns/iter",
            "extra": "iterations: 5505\ncpu: 156379.80018165318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 121340.24788015652,
            "unit": "ns/iter",
            "extra": "iterations: 7076\ncpu: 121339.78236291728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 119863.71241465719,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 119862.60275881288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 116929.71935571924,
            "unit": "ns/iter",
            "extra": "iterations: 7326\ncpu: 116923.96942396929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 215151.99305037662,
            "unit": "ns/iter",
            "extra": "iterations: 4029\ncpu: 215148.10126582248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1652220.7765957941,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1652179.2553191392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1303080.3165266127,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1303049.7198879533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1302676.1173184265,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1302604.888268158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1280797.0841379694,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1280782.482758627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 723826.2482489981,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 723825.0583657611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1259454.1488497837,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1259410.013531798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5930637.675159027,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 5930538.853503195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2674189.6465517613,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2674097.70114942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24183.595069483537,
            "unit": "ns/iter",
            "extra": "iterations: 33749\ncpu: 24182.94764289303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 118989.92946752762,
            "unit": "ns/iter",
            "extra": "iterations: 7174\ncpu: 118985.90744354622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 92886.57237485143,
            "unit": "ns/iter",
            "extra": "iterations: 9209\ncpu: 92884.92778803353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 92886.94237030437,
            "unit": "ns/iter",
            "extra": "iterations: 9214\ncpu: 92883.08009550677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 90810.90495868085,
            "unit": "ns/iter",
            "extra": "iterations: 9438\ncpu: 90809.30281839345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 182009.2502107888,
            "unit": "ns/iter",
            "extra": "iterations: 4744\ncpu: 182002.59274873405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1632762.2849649454,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1632727.6223776273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1274012.0851647246,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1273966.3461538455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1269384.1482992482,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1269356.054421775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1254775.1434370324,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1254723.1393775402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 692649.7251114452,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 692632.9866270451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1230447.739652838,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 1230415.35380507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2580.2926380888734,
            "unit": "ns/iter",
            "extra": "iterations: 271981\ncpu: 2580.275460418181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16941.837894224213,
            "unit": "ns/iter",
            "extra": "iterations: 41220\ncpu: 16940.776322173613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13118.839680371162,
            "unit": "ns/iter",
            "extra": "iterations: 53437\ncpu: 13118.397365121531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13432.750868837542,
            "unit": "ns/iter",
            "extra": "iterations: 52081\ncpu: 13432.555058466636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10054.312920272503,
            "unit": "ns/iter",
            "extra": "iterations: 69449\ncpu: 10053.859666805873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63946.825306723615,
            "unit": "ns/iter",
            "extra": "iterations: 10922\ncpu: 63946.10877128786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112548.94244372891,
            "unit": "ns/iter",
            "extra": "iterations: 6220\ncpu: 112544.48553054698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27322.479224378676,
            "unit": "ns/iter",
            "extra": "iterations: 25631\ncpu: 27321.758807693943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27299.57150656951,
            "unit": "ns/iter",
            "extra": "iterations: 25641\ncpu: 27298.61549861546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 26925.90786940756,
            "unit": "ns/iter",
            "extra": "iterations: 25974\ncpu: 26925.29452529449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 51690.067756669756,
            "unit": "ns/iter",
            "extra": "iterations: 13578\ncpu: 51687.91427308894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51263.358498828486,
            "unit": "ns/iter",
            "extra": "iterations: 13696\ncpu: 51261.667640186904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20614.906439820017,
            "unit": "ns/iter",
            "extra": "iterations: 33914\ncpu: 20614.46305360624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101461.16792672685,
            "unit": "ns/iter",
            "extra": "iterations: 6878\ncpu: 101458.37452747852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83734.99342576938,
            "unit": "ns/iter",
            "extra": "iterations: 8366\ncpu: 83734.4250537902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84133.74059285167,
            "unit": "ns/iter",
            "extra": "iterations: 8265\ncpu: 84129.52208106438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82830.79058767438,
            "unit": "ns/iter",
            "extra": "iterations: 8457\ncpu: 82828.18966536643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 126186.5743109445,
            "unit": "ns/iter",
            "extra": "iterations: 5551\ncpu: 126180.47198702935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 487999.89059231756,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 487977.1428571476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 398015.4223990951,
            "unit": "ns/iter",
            "extra": "iterations: 1759\ncpu: 397998.3513359924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 397741.0728100481,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 397731.0580204741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 398223.88926746993,
            "unit": "ns/iter",
            "extra": "iterations: 1761\ncpu: 398217.8875638781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 254330.48656495742,
            "unit": "ns/iter",
            "extra": "iterations: 2754\ncpu: 254331.95352214942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 393583.14165263093,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 393576.9533445739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21836.72680556806,
            "unit": "ns/iter",
            "extra": "iterations: 32109\ncpu: 21836.63147404193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104825.40400718554,
            "unit": "ns/iter",
            "extra": "iterations: 6688\ncpu: 104820.97787081372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87954.65440990725,
            "unit": "ns/iter",
            "extra": "iterations: 7914\ncpu: 87952.36290118792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88046.93594261534,
            "unit": "ns/iter",
            "extra": "iterations: 7946\ncpu: 88044.84017115584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87172.82509270533,
            "unit": "ns/iter",
            "extra": "iterations: 8090\ncpu: 87168.78862793597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126716.67700961532,
            "unit": "ns/iter",
            "extra": "iterations: 5511\ncpu: 126717.63745236892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 490177.4635343542,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 490160.8695652144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 403082.2209435697,
            "unit": "ns/iter",
            "extra": "iterations: 1738\ncpu: 403064.4418872246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 404474.7855491261,
            "unit": "ns/iter",
            "extra": "iterations: 1730\ncpu: 404464.9710982705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 397270.08631456824,
            "unit": "ns/iter",
            "extra": "iterations: 1761\ncpu: 397253.0948324823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 259122.72057735495,
            "unit": "ns/iter",
            "extra": "iterations: 2702\ncpu: 259116.5433012583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 397161.24401368294,
            "unit": "ns/iter",
            "extra": "iterations: 1754\ncpu: 397150.228050171 ns\nthreads: 1"
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
          "id": "d1143eedaeca215bd4d59936eed187ebbc5a2705",
          "message": "uncomment",
          "timestamp": "2023-12-12T16:24:18+03:00",
          "tree_id": "24d13ef9110c03a703c985f6237d2ba22581ead7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d1143eedaeca215bd4d59936eed187ebbc5a2705"
        },
        "date": 1702388120195,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7191.797196676031,
            "unit": "ns/iter",
            "extra": "iterations: 97099\ncpu: 7191.514845672974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50917.82430000081,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50917.33999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92970.3232005213,
            "unit": "ns/iter",
            "extra": "iterations: 9211\ncpu: 92968.6896102486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 134636.08188235678,
            "unit": "ns/iter",
            "extra": "iterations: 6375\ncpu: 134636.73725490193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 176907.3279525857,
            "unit": "ns/iter",
            "extra": "iterations: 4894\ncpu: 176905.25132815682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 219208.10205115646,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 219199.64547986828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 261144.48537835653,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 261132.13747362077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 302493.92224546627,
            "unit": "ns/iter",
            "extra": "iterations: 2868\ncpu: 302482.8800557882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 344564.73801029194,
            "unit": "ns/iter",
            "extra": "iterations: 2523\ncpu: 344550.2179944509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5673.604294726036,
            "unit": "ns/iter",
            "extra": "iterations: 123966\ncpu: 5673.094235516192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4639.04891192652,
            "unit": "ns/iter",
            "extra": "iterations: 150863\ncpu: 4638.895554244578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4696.073320261753,
            "unit": "ns/iter",
            "extra": "iterations: 148922\ncpu: 4695.805186607751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4685.055847147038,
            "unit": "ns/iter",
            "extra": "iterations: 149372\ncpu: 4684.975095734138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7060.658338891646,
            "unit": "ns/iter",
            "extra": "iterations: 98946\ncpu: 7060.0327451337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25427.7810533599,
            "unit": "ns/iter",
            "extra": "iterations: 31784\ncpu: 25426.97898313614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 122929.64574376753,
            "unit": "ns/iter",
            "extra": "iterations: 6978\ncpu: 122923.51676698205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 95139.34219897482,
            "unit": "ns/iter",
            "extra": "iterations: 8986\ncpu: 95135.33273981768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 96820.21752437598,
            "unit": "ns/iter",
            "extra": "iterations: 8822\ncpu: 96813.99909317616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93776.19891998937,
            "unit": "ns/iter",
            "extra": "iterations: 9074\ncpu: 93775.74388362363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 207338.07880054653,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 207332.47326824703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1604472.4931033677,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1604470.3448275852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1264817.1372282677,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1264788.3152173883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1279503.8624484164,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 1279493.122420912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1251082.065948824,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 1251061.3728129216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 692167.5656041391,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 692163.8250555964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1221665.0527704742,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1221647.7572559372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32711.459292422096,
            "unit": "ns/iter",
            "extra": "iterations: 25241\ncpu: 32711.077215641184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156482.6788374212,
            "unit": "ns/iter",
            "extra": "iterations: 5505\ncpu: 156481.19891008193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 121190.99859135211,
            "unit": "ns/iter",
            "extra": "iterations: 7099\ncpu: 121188.51950979038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 119925.29699930089,
            "unit": "ns/iter",
            "extra": "iterations: 7165\ncpu: 119921.08862526178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 116530.34004899992,
            "unit": "ns/iter",
            "extra": "iterations: 7346\ncpu: 116529.90743261632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 222463.17710750765,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 222462.20675431864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1644343.943562618,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1644311.287477954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1295636.190542453,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1295609.7357440924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1295602.4561891456,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1295564.3949930433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1271847.4801641623,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1271824.076607379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 719512.1910285971,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 719490.3325599381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1246778.1671308973,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1246744.4289693562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5935737.866242066,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 5935678.343949058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2727436.1725145695,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2727347.660818705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24581.879249706933,
            "unit": "ns/iter",
            "extra": "iterations: 33267\ncpu: 24581.76270778838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 127456.21746220531,
            "unit": "ns/iter",
            "extra": "iterations: 6746\ncpu: 127456.84850281678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94935.13967162381,
            "unit": "ns/iter",
            "extra": "iterations: 9014\ncpu: 94935.70002218828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 93654.0065631158,
            "unit": "ns/iter",
            "extra": "iterations: 9142\ncpu: 93653.55502078288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 89582.18341341084,
            "unit": "ns/iter",
            "extra": "iterations: 9574\ncpu: 89579.17275955764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 190784.13715162693,
            "unit": "ns/iter",
            "extra": "iterations: 4557\ncpu: 190778.82378758027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1618987.8578856788,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1618994.6273830112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1271530.2925170562,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1271506.9387755075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1277800.807377046,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1277778.0054644889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1251283.0872483025,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 1251289.5302013408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 684713.8627306095,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 684708.0442804417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1227771.8802631686,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 1227767.3684210498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2553.3925495560625,
            "unit": "ns/iter",
            "extra": "iterations: 273326\ncpu: 2553.3158206683647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16538.088499145513,
            "unit": "ns/iter",
            "extra": "iterations: 42136\ncpu: 16538.169261439227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13598.225770603136,
            "unit": "ns/iter",
            "extra": "iterations: 51291\ncpu: 13598.286249049524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13395.16685447983,
            "unit": "ns/iter",
            "extra": "iterations: 52357\ncpu: 13394.999713505313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 9989.002007139663,
            "unit": "ns/iter",
            "extra": "iterations: 69751\ncpu: 9988.590844575636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63884.46022779374,
            "unit": "ns/iter",
            "extra": "iterations: 10975\ncpu: 63883.09794988643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 105725.84107358227,
            "unit": "ns/iter",
            "extra": "iterations: 6632\ncpu: 105725.25633293178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27142.269921284777,
            "unit": "ns/iter",
            "extra": "iterations: 25789\ncpu: 27141.967505525477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 26896.310417788678,
            "unit": "ns/iter",
            "extra": "iterations: 25994\ncpu: 26896.179887666338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 26983.52184353303,
            "unit": "ns/iter",
            "extra": "iterations: 25820\ncpu: 26983.307513555323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 53898.799907792636,
            "unit": "ns/iter",
            "extra": "iterations: 13014\ncpu: 53899.06254802557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 45686.69091742808,
            "unit": "ns/iter",
            "extra": "iterations: 15271\ncpu: 45686.94257088621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20719.07002958548,
            "unit": "ns/iter",
            "extra": "iterations: 33800\ncpu: 20718.89053254445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 100256.77974827924,
            "unit": "ns/iter",
            "extra": "iterations: 6992\ncpu: 100254.20480549189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 82612.40110993398,
            "unit": "ns/iter",
            "extra": "iterations: 8469\ncpu: 82611.59522965975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82854.65348288477,
            "unit": "ns/iter",
            "extra": "iterations: 8470\ncpu: 82854.1086186537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82464.38982650415,
            "unit": "ns/iter",
            "extra": "iterations: 8473\ncpu: 82463.02372241192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123719.96273952449,
            "unit": "ns/iter",
            "extra": "iterations: 5636\ncpu: 123719.10929737324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 477213.33855588705,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 477207.1525885543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 395767.4165727192,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 395768.6020293144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 399086.185037149,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 399082.41005140234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 386254.77661332005,
            "unit": "ns/iter",
            "extra": "iterations: 1813\ncpu: 386249.08990623197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 251400.55591397436,
            "unit": "ns/iter",
            "extra": "iterations: 2790\ncpu: 251396.16487455252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 387290.76174682094,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 387292.2056384754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22037.536003032244,
            "unit": "ns/iter",
            "extra": "iterations: 31664\ncpu: 22037.348408287162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106212.04653975063,
            "unit": "ns/iter",
            "extra": "iterations: 6618\ncpu: 106208.96041100028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88477.56263457649,
            "unit": "ns/iter",
            "extra": "iterations: 7895\ncpu: 88476.07346421784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88142.13963168708,
            "unit": "ns/iter",
            "extra": "iterations: 7928\ncpu: 88142.57063572187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87812.06083030852,
            "unit": "ns/iter",
            "extra": "iterations: 7973\ncpu: 87812.4545340516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127465.37527313079,
            "unit": "ns/iter",
            "extra": "iterations: 5492\ncpu: 127462.39985433363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 482308.5517241923,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 482305.03448275715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 398739.0665528762,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 398741.46757678984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 399233.953249701,
            "unit": "ns/iter",
            "extra": "iterations: 1754\ncpu: 399224.002280503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 394684.917653693,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 394677.9469825085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 260812.57281194555,
            "unit": "ns/iter",
            "extra": "iterations: 2685\ncpu: 260808.7150837956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 394538.68038330146,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 394534.55467869225 ns\nthreads: 1"
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702390814832,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6909.756491916047,
            "unit": "ns/iter",
            "extra": "iterations: 102050\ncpu: 6892.8887800098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58973.93254673418,
            "unit": "ns/iter",
            "extra": "iterations: 14069\ncpu: 58966.763806951465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91707.15063656856,
            "unit": "ns/iter",
            "extra": "iterations: 9347\ncpu: 91704.52551620839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 132925.90844526154,
            "unit": "ns/iter",
            "extra": "iterations: 6477\ncpu: 132922.5412999846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 175906.54991915557,
            "unit": "ns/iter",
            "extra": "iterations: 4948\ncpu: 175894.19967663716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 217367.21227365165,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 217363.95875251503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 258673.51102502545,
            "unit": "ns/iter",
            "extra": "iterations: 3356\ncpu: 258664.74970202608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 301782.35630195047,
            "unit": "ns/iter",
            "extra": "iterations: 2888\ncpu: 301780.09002770064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 342146.2767716582,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 342133.70078740217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5669.569078442281,
            "unit": "ns/iter",
            "extra": "iterations: 123823\ncpu: 5669.500819718469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4614.29122330737,
            "unit": "ns/iter",
            "extra": "iterations: 151025\ncpu: 4614.08177454064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4625.75752702332,
            "unit": "ns/iter",
            "extra": "iterations: 151720\ncpu: 4625.740838386499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4668.164218104032,
            "unit": "ns/iter",
            "extra": "iterations: 150020\ncpu: 4668.0829222770335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7191.417541437989,
            "unit": "ns/iter",
            "extra": "iterations: 97073\ncpu: 7191.131416562809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25370.241680922063,
            "unit": "ns/iter",
            "extra": "iterations: 30983\ncpu: 25369.36061711262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123870.66001157339,
            "unit": "ns/iter",
            "extra": "iterations: 6912\ncpu: 123870.87673611139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97632.00227247077,
            "unit": "ns/iter",
            "extra": "iterations: 8801\ncpu: 97628.81490739688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 96487.06402439246,
            "unit": "ns/iter",
            "extra": "iterations: 8856\ncpu: 96486.77732610675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 92659.31111593409,
            "unit": "ns/iter",
            "extra": "iterations: 9212\ncpu: 92655.14546244031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 205202.66689718518,
            "unit": "ns/iter",
            "extra": "iterations: 4338\ncpu: 205201.98248040557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1612739.9116118695,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1612662.5649913303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1262455.2340136168,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1262421.632653062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1260493.7489823727,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1260329.579375846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1249199.786290272,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 1249148.3870967731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 685859.7081481498,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 685802.9629629643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1217706.705111437,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 1217640.36697248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32362.12421154757,
            "unit": "ns/iter",
            "extra": "iterations: 24732\ncpu: 32360.443959243177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 161268.5521392815,
            "unit": "ns/iter",
            "extra": "iterations: 5399\ncpu: 161263.7155028712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 124112.58317702968,
            "unit": "ns/iter",
            "extra": "iterations: 6931\ncpu: 124104.42937527093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 120716.89224501207,
            "unit": "ns/iter",
            "extra": "iterations: 7118\ncpu: 120711.8010677161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 116499.888843535,
            "unit": "ns/iter",
            "extra": "iterations: 7350\ncpu: 116488.73469387738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 221744.06424366587,
            "unit": "ns/iter",
            "extra": "iterations: 3907\ncpu: 221733.3503967246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1645374.578849757,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1645237.1057514024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1292449.1569444442,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1292348.1944444445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1286631.518620699,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1286553.793103451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1267320.8831521305,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1267275.9510869605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 715246.0891621924,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 715216.2951575677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1246111.5502007701,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1246018.8755020022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5900481.987341908,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5900156.329113918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2694949.25144495,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2694753.757225437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24196.06635461688,
            "unit": "ns/iter",
            "extra": "iterations: 33969\ncpu: 24195.245665165232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 119286.74073049088,
            "unit": "ns/iter",
            "extra": "iterations: 7228\ncpu: 119277.18594355296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 93187.86071002536,
            "unit": "ns/iter",
            "extra": "iterations: 9211\ncpu: 93184.75735533582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 93165.04236367415,
            "unit": "ns/iter",
            "extra": "iterations: 9206\ncpu: 93158.35324788235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 89853.75913242115,
            "unit": "ns/iter",
            "extra": "iterations: 9636\ncpu: 89849.22166874207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 188605.23087014243,
            "unit": "ns/iter",
            "extra": "iterations: 4574\ncpu: 188593.8565806728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1605881.0189328676,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1605803.6144578285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1257102.6473755494,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 1257026.9179004033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1258005.6599190368,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 1257957.759784081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1241491.2596538104,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1241399.6005326237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 680456.6724763912,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 680438.3442265785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1212814.4427083025,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 1212703.9062499919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2541.367712465887,
            "unit": "ns/iter",
            "extra": "iterations: 274750\ncpu: 2541.39945404912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16496.947030458894,
            "unit": "ns/iter",
            "extra": "iterations: 42515\ncpu: 16495.817946607225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14024.75811892979,
            "unit": "ns/iter",
            "extra": "iterations: 53948\ncpu: 14024.679320827388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13407.237225508967,
            "unit": "ns/iter",
            "extra": "iterations: 52233\ncpu: 13406.652882277484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10013.466242640181,
            "unit": "ns/iter",
            "extra": "iterations: 69807\ncpu: 10013.206411964356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65342.08222093111,
            "unit": "ns/iter",
            "extra": "iterations: 10338\ncpu: 65340.66550590087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 110227.88620580548,
            "unit": "ns/iter",
            "extra": "iterations: 6336\ncpu: 110223.721590909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 26958.596061202847,
            "unit": "ns/iter",
            "extra": "iterations: 25947\ncpu: 26958.02983003793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 26921.46892262635,
            "unit": "ns/iter",
            "extra": "iterations: 25887\ncpu: 26920.794221037482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 26583.357256899035,
            "unit": "ns/iter",
            "extra": "iterations: 26306\ncpu: 26583.114118451947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 51608.07576092785,
            "unit": "ns/iter",
            "extra": "iterations: 13569\ncpu: 51604.44395312813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 50564.98822849791,
            "unit": "ns/iter",
            "extra": "iterations: 13847\ncpu: 50559.95522495794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20261.127102207167,
            "unit": "ns/iter",
            "extra": "iterations: 34547\ncpu: 20259.423394216723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101957.72205037808,
            "unit": "ns/iter",
            "extra": "iterations: 6789\ncpu: 101951.25939018997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 82052.61804087399,
            "unit": "ns/iter",
            "extra": "iterations: 8514\ncpu: 82051.15104533685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83044.46569670878,
            "unit": "ns/iter",
            "extra": "iterations: 8454\ncpu: 83039.53158268308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82664.29399881176,
            "unit": "ns/iter",
            "extra": "iterations: 8415\ncpu: 82659.5365418903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 127656.28514129948,
            "unit": "ns/iter",
            "extra": "iterations: 5485\ncpu: 127646.80036463094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 474780.3378653846,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 474752.4813052327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 394328.6754632122,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 394298.6524424447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 391563.9188584394,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 391550.9233352005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 388542.7372222239,
            "unit": "ns/iter",
            "extra": "iterations: 1800\ncpu: 388527.6111111106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 245977.3258944279,
            "unit": "ns/iter",
            "extra": "iterations: 2823\ncpu: 245974.1764080733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 383897.7803404776,
            "unit": "ns/iter",
            "extra": "iterations: 1821\ncpu: 383880.01098297467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21268.174223112168,
            "unit": "ns/iter",
            "extra": "iterations: 32952\ncpu: 21267.992838067665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106021.10794852459,
            "unit": "ns/iter",
            "extra": "iterations: 6605\ncpu: 106013.50492051359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86782.52748479937,
            "unit": "ns/iter",
            "extra": "iterations: 8059\ncpu: 86778.73185258631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87745.95298395069,
            "unit": "ns/iter",
            "extra": "iterations: 7976\ncpu: 87736.94834503497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87437.58950118218,
            "unit": "ns/iter",
            "extra": "iterations: 8039\ncpu: 87429.81714143543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126612.31723638657,
            "unit": "ns/iter",
            "extra": "iterations: 5529\ncpu: 126609.73051184643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 485728.2699514001,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 485687.36988201964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 394247.6966101701,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 394201.52542372484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 394790.36886633356,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 394776.02932882623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 393325.69562780194,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 393309.8654708538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 253228.90364489562,
            "unit": "ns/iter",
            "extra": "iterations: 2771\ncpu: 253224.90075784826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 392380.62121211103,
            "unit": "ns/iter",
            "extra": "iterations: 1782\ncpu: 392360.3254769874 ns\nthreads: 1"
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
        "date": 1702391769064,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7018.1721304901275,
            "unit": "ns/iter",
            "extra": "iterations: 99808\ncpu: 7017.860291760179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51230.10509999517,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51224.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95668.75986409342,
            "unit": "ns/iter",
            "extra": "iterations: 9124\ncpu: 95657.37615081102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138533.89131131614,
            "unit": "ns/iter",
            "extra": "iterations: 6238\ncpu: 138523.56524527093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 182025.18837843547,
            "unit": "ns/iter",
            "extra": "iterations: 4767\ncpu: 182014.03398363746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 224222.92968344397,
            "unit": "ns/iter",
            "extra": "iterations: 3854\ncpu: 224211.23508043578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 269580.34607020457,
            "unit": "ns/iter",
            "extra": "iterations: 3219\ncpu: 269570.39453246346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 311186.2129795564,
            "unit": "ns/iter",
            "extra": "iterations: 2789\ncpu: 311174.11258515593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 355540.60612245236,
            "unit": "ns/iter",
            "extra": "iterations: 2450\ncpu: 355517.7551020412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5838.643463257012,
            "unit": "ns/iter",
            "extra": "iterations: 119968\ncpu: 5838.490264070413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4735.409448712288,
            "unit": "ns/iter",
            "extra": "iterations: 147872\ncpu: 4735.191246483455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4736.553977080287,
            "unit": "ns/iter",
            "extra": "iterations: 147822\ncpu: 4736.366711314964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4749.325696258531,
            "unit": "ns/iter",
            "extra": "iterations: 147395\ncpu: 4749.138708911429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7223.092054523305,
            "unit": "ns/iter",
            "extra": "iterations: 96986\ncpu: 7222.662033695582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25452.955288371406,
            "unit": "ns/iter",
            "extra": "iterations: 31938\ncpu: 25451.706431210445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 127258.38109348832,
            "unit": "ns/iter",
            "extra": "iterations: 6749\ncpu: 127252.24477700383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99947.9064177398,
            "unit": "ns/iter",
            "extra": "iterations: 8570\ncpu: 99944.3523920654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100438.70913996897,
            "unit": "ns/iter",
            "extra": "iterations: 8523\ncpu: 100433.86131643798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97599.9200641282,
            "unit": "ns/iter",
            "extra": "iterations: 8732\ncpu: 97599.15254237277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 198374.4446174401,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 198365.92526690467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1692155.8996350823,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1692132.4817518261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1313309.0353107143,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1313288.8418079095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1430050.5495750662,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1430033.4277620423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1296793.945606756,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1296670.5718270584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 707610.0335621691,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 707591.1517925262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1266966.2777777861,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1266889.8611111077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32182.003545546122,
            "unit": "ns/iter",
            "extra": "iterations: 25666\ncpu: 32180.16831606006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 160850.92707554228,
            "unit": "ns/iter",
            "extra": "iterations: 5348\ncpu: 160839.95886312635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125637.78761320803,
            "unit": "ns/iter",
            "extra": "iterations: 6846\ncpu: 125630.5433829975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122873.87818130344,
            "unit": "ns/iter",
            "extra": "iterations: 6994\ncpu: 122869.30225907914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121068.29449062355,
            "unit": "ns/iter",
            "extra": "iterations: 7097\ncpu: 121056.22093842461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 213009.52342209686,
            "unit": "ns/iter",
            "extra": "iterations: 4056\ncpu: 212994.40335305696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1713757.6955719658,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1713676.3837638388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1344720.2789017598,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1344629.913294796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1345548.283236975,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1345469.6531791962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1322570.5213068489,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1322463.0681818249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 729626.7572662745,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 729603.9277297722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1293914.9652777833,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1293865.694444444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6042598.824675141,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6042079.2207792085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2657425.5880681104,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2657244.318181817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24476.734123321134,
            "unit": "ns/iter",
            "extra": "iterations: 33587\ncpu: 24475.18682823722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 123024.79248785366,
            "unit": "ns/iter",
            "extra": "iterations: 7002\ncpu: 123018.23764638694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97203.17962375385,
            "unit": "ns/iter",
            "extra": "iterations: 8824\ncpu: 97196.8041704442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97524.69385904938,
            "unit": "ns/iter",
            "extra": "iterations: 8826\ncpu: 97515.57897122136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94273.64861890872,
            "unit": "ns/iter",
            "extra": "iterations: 9087\ncpu: 94267.88819192274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 181138.32419995512,
            "unit": "ns/iter",
            "extra": "iterations: 4781\ncpu: 181127.37920936986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1684701.3351351148,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1684594.774774778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1312786.501404513,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1312716.0112359545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1320054.2454160538,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1319981.38222849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1291398.686546469,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1291346.6019417455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 709227.6704631953,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 709156.9476082025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1271694.093922686,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 1271647.0994475167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2541.6993916537904,
            "unit": "ns/iter",
            "extra": "iterations: 276323\ncpu: 2541.561505918793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17137.756118474936,
            "unit": "ns/iter",
            "extra": "iterations: 40819\ncpu: 17135.409980646324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14135.064492753632,
            "unit": "ns/iter",
            "extra": "iterations: 49680\ncpu: 14134.122383252825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13608.398943897115,
            "unit": "ns/iter",
            "extra": "iterations: 50942\ncpu: 13607.304385379475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10086.211337083481,
            "unit": "ns/iter",
            "extra": "iterations: 69330\ncpu: 10085.062743401164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64461.275637500476,
            "unit": "ns/iter",
            "extra": "iterations: 10902\ncpu: 64461.67675655821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115148.53959908268,
            "unit": "ns/iter",
            "extra": "iterations: 6086\ncpu: 115134.60400920121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27968.326792692285,
            "unit": "ns/iter",
            "extra": "iterations: 25074\ncpu: 27966.53505623358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28197.08377889478,
            "unit": "ns/iter",
            "extra": "iterations: 24875\ncpu: 28194.613065326605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27707.308448868534,
            "unit": "ns/iter",
            "extra": "iterations: 25317\ncpu: 27705.81032507801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54717.29413171528,
            "unit": "ns/iter",
            "extra": "iterations: 12542\ncpu: 54713.93717110533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52808.000972105925,
            "unit": "ns/iter",
            "extra": "iterations: 13373\ncpu: 52802.57234726702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21143.190686556918,
            "unit": "ns/iter",
            "extra": "iterations: 33049\ncpu: 21141.795515749196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 103746.30083111032,
            "unit": "ns/iter",
            "extra": "iterations: 6738\ncpu: 103741.54051647373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84088.00060009671,
            "unit": "ns/iter",
            "extra": "iterations: 8332\ncpu: 84088.53816610698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84302.90068534325,
            "unit": "ns/iter",
            "extra": "iterations: 8317\ncpu: 84293.3870385957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83342.4171129341,
            "unit": "ns/iter",
            "extra": "iterations: 8403\ncpu: 83340.21182910919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 125856.6914893651,
            "unit": "ns/iter",
            "extra": "iterations: 5546\ncpu: 125852.56040389517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 494365.195898153,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 494337.05799152126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 408164.8789289725,
            "unit": "ns/iter",
            "extra": "iterations: 1718\ncpu: 408137.3690337565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 405286.2485582435,
            "unit": "ns/iter",
            "extra": "iterations: 1734\ncpu: 405267.1856978035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 399049.9223300945,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 399036.72187322023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 258110.30212920767,
            "unit": "ns/iter",
            "extra": "iterations: 2724\ncpu: 258106.9383259923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 397814.1439909436,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 397777.26757370005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21958.01824212283,
            "unit": "ns/iter",
            "extra": "iterations: 31959\ncpu: 21956.97612566104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106274.83102872223,
            "unit": "ns/iter",
            "extra": "iterations: 6581\ncpu: 106271.03783619376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89173.67561720773,
            "unit": "ns/iter",
            "extra": "iterations: 7858\ncpu: 89169.21608551707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90228.13213135311,
            "unit": "ns/iter",
            "extra": "iterations: 7765\ncpu: 90221.73857050945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87897.4030881296,
            "unit": "ns/iter",
            "extra": "iterations: 7966\ncpu: 87885.78960582467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127442.71735566745,
            "unit": "ns/iter",
            "extra": "iterations: 5491\ncpu: 127431.9067565107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 501458.84924623417,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 501431.8736539868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 414141.09461856855,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 414143.87936132157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 411565.9252941588,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 411518.1176470628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 404440.17341040284,
            "unit": "ns/iter",
            "extra": "iterations: 1730\ncpu: 404414.1040462444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 259882.8687732106,
            "unit": "ns/iter",
            "extra": "iterations: 2690\ncpu: 259865.39033457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 406653.1720929804,
            "unit": "ns/iter",
            "extra": "iterations: 1720\ncpu: 406624.8255813949 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702396471323,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6931.066390206228,
            "unit": "ns/iter",
            "extra": "iterations: 100798\ncpu: 6931.1722454810615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50398.63949999699,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50395.12999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93007.34544074419,
            "unit": "ns/iter",
            "extra": "iterations: 9223\ncpu: 93007.17770790413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137854.82277289755,
            "unit": "ns/iter",
            "extra": "iterations: 6376\ncpu: 137855.59912170644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 178143.5457522995,
            "unit": "ns/iter",
            "extra": "iterations: 4885\ncpu: 178133.6745138178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 220356.37347250487,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 220345.21384928725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 263077.28402546485,
            "unit": "ns/iter",
            "extra": "iterations: 3299\ncpu: 263057.47196120035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 305269.77344572335,
            "unit": "ns/iter",
            "extra": "iterations: 2847\ncpu: 305257.7098700385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 346689.2888000075,
            "unit": "ns/iter",
            "extra": "iterations: 2500\ncpu: 346667.68000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5686.128824962058,
            "unit": "ns/iter",
            "extra": "iterations: 122779\ncpu: 5685.748377165485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4599.824498344754,
            "unit": "ns/iter",
            "extra": "iterations: 151349\ncpu: 4599.633297874449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4565.531005134171,
            "unit": "ns/iter",
            "extra": "iterations: 152507\ncpu: 4565.427816428102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4716.808876441223,
            "unit": "ns/iter",
            "extra": "iterations: 149249\ncpu: 4716.562925044721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7038.780164302803,
            "unit": "ns/iter",
            "extra": "iterations: 98842\ncpu: 7038.537261488025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25369.44478623011,
            "unit": "ns/iter",
            "extra": "iterations: 32184\ncpu: 25369.53144419591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126241.7147261812,
            "unit": "ns/iter",
            "extra": "iterations: 6811\ncpu: 126239.03978857723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98028.50646527158,
            "unit": "ns/iter",
            "extra": "iterations: 8739\ncpu: 98028.48151962478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98132.13831861998,
            "unit": "ns/iter",
            "extra": "iterations: 8719\ncpu: 98134.72875329717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93255.43951701446,
            "unit": "ns/iter",
            "extra": "iterations: 9110\ncpu: 93258.37541163572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 200581.65124634784,
            "unit": "ns/iter",
            "extra": "iterations: 4453\ncpu: 200569.86301369846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1620352.6596859298,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1620275.9162303633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1269765.2878581581,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1269687.7216916746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1280062.6579670312,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1280064.835164833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1257890.1391891977,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1257880.1351351368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 684129.9615952682,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 684112.6292466779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1227269.5205297922,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1227262.6490066235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32563.095741741974,
            "unit": "ns/iter",
            "extra": "iterations: 25339\ncpu: 32562.48470736814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158719.1754869495,
            "unit": "ns/iter",
            "extra": "iterations: 5442\ncpu: 158711.0804851152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 122554.69616219697,
            "unit": "ns/iter",
            "extra": "iterations: 6905\ncpu: 122549.52932657479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 120697.34311797755,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 120690.5617977526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 115905.35128552359,
            "unit": "ns/iter",
            "extra": "iterations: 7390\ncpu: 115901.556156969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 215994.6039900287,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 215982.84289276888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1656749.690941369,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1656693.783303732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1302738.8307693298,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1302701.3986014016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1298546.5153203683,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1298495.9610027832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1273689.7136987054,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1273633.6986301376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 708979.5625954125,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 708945.8015267183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1252030.0107961139,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 1252007.2874493902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5839885.225000074,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 5839868.124999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2670413.2385057374,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2670425.574712644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24376.839256649426,
            "unit": "ns/iter",
            "extra": "iterations: 33793\ncpu: 24376.915337495924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 127347.60100487525,
            "unit": "ns/iter",
            "extra": "iterations: 6767\ncpu: 127349.07640017729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94973.91204525369,
            "unit": "ns/iter",
            "extra": "iterations: 9016\ncpu: 94974.64507542185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94746.5655339836,
            "unit": "ns/iter",
            "extra": "iterations: 9064\ncpu: 94745.2228596647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 90707.56371147842,
            "unit": "ns/iter",
            "extra": "iterations: 9441\ncpu: 90706.47177205804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 194470.3215420432,
            "unit": "ns/iter",
            "extra": "iterations: 4721\ncpu: 194471.298453717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1626315.0506108422,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1626335.9511343832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1271011.3972788146,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1271018.2312925165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1271393.9849931935,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1271397.40791269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1251465.3409396596,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 1251488.9932885834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 679972.9737800021,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 679970.6482155878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1233218.2094862077,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 1233220.5533596901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2570.1361564545005,
            "unit": "ns/iter",
            "extra": "iterations: 272488\ncpu: 2570.1150142391525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17194.17588272903,
            "unit": "ns/iter",
            "extra": "iterations: 40726\ncpu: 17194.34268035175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13109.900794615387,
            "unit": "ns/iter",
            "extra": "iterations: 53485\ncpu: 13109.782181920122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13961.87103613728,
            "unit": "ns/iter",
            "extra": "iterations: 54240\ncpu: 13961.29424778752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10034.978034417803,
            "unit": "ns/iter",
            "extra": "iterations: 69791\ncpu: 10034.428507973895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63968.223483111906,
            "unit": "ns/iter",
            "extra": "iterations: 10927\ncpu: 63964.89429852612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 111697.07440523598,
            "unit": "ns/iter",
            "extra": "iterations: 6263\ncpu: 111694.12422161944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27185.539809287977,
            "unit": "ns/iter",
            "extra": "iterations: 25798\ncpu: 27184.4832932786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27017.952222907716,
            "unit": "ns/iter",
            "extra": "iterations: 25912\ncpu: 27016.733559740696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 26852.84049973191,
            "unit": "ns/iter",
            "extra": "iterations: 26094\ncpu: 26852.341534452364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 53006.75400423172,
            "unit": "ns/iter",
            "extra": "iterations: 13236\ncpu: 53005.84013297052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 45798.32362395659,
            "unit": "ns/iter",
            "extra": "iterations: 15243\ncpu: 45796.81821163819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20124.071944309817,
            "unit": "ns/iter",
            "extra": "iterations: 34763\ncpu: 20124.51744671054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 98934.8307952557,
            "unit": "ns/iter",
            "extra": "iterations: 7092\ncpu: 98933.19232938535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 80763.58595193847,
            "unit": "ns/iter",
            "extra": "iterations: 8656\ncpu: 80760.0970425134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 81790.62252505177,
            "unit": "ns/iter",
            "extra": "iterations: 8586\ncpu: 81787.88725832695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 80459.52118010556,
            "unit": "ns/iter",
            "extra": "iterations: 8711\ncpu: 80458.79921937789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 121938.61277409863,
            "unit": "ns/iter",
            "extra": "iterations: 5746\ncpu: 121941.4723285748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 480373.1428571178,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 480375.0686813164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 394552.00562426186,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 394549.7750281216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 392991.8323016271,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 392995.89195272845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 391299.1854341814,
            "unit": "ns/iter",
            "extra": "iterations: 1785\ncpu: 391297.9831932771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 247902.384397179,
            "unit": "ns/iter",
            "extra": "iterations: 2820\ncpu: 247901.84397163265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 385661.3283582365,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 385654.7263681609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21499.715392389346,
            "unit": "ns/iter",
            "extra": "iterations: 32659\ncpu: 21498.989558773912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 103320.40655303262,
            "unit": "ns/iter",
            "extra": "iterations: 6806\ncpu: 103319.42403761408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85295.56467721958,
            "unit": "ns/iter",
            "extra": "iterations: 8210\ncpu: 85295.26187576144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85650.87873224984,
            "unit": "ns/iter",
            "extra": "iterations: 8172\ncpu: 85652.9368575639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84741.69217748207,
            "unit": "ns/iter",
            "extra": "iterations: 8271\ncpu: 84742.49788417462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 121669.55626954402,
            "unit": "ns/iter",
            "extra": "iterations: 5758\ncpu: 121670.80583535967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 482554.55785126035,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 482560.6749311327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 395829.228279425,
            "unit": "ns/iter",
            "extra": "iterations: 1761\ncpu: 395841.4537194723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 398096.0721590841,
            "unit": "ns/iter",
            "extra": "iterations: 1760\ncpu: 398096.4772727317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 393211.3861720569,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 393207.02641933766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 251957.5871988222,
            "unit": "ns/iter",
            "extra": "iterations: 2781\ncpu: 251957.10176195783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 391494.0061589857,
            "unit": "ns/iter",
            "extra": "iterations: 1786\ncpu: 391498.09630459256 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}