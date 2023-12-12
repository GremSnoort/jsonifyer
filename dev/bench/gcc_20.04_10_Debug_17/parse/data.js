window.BENCHMARK_DATA = {
  "lastUpdate": 1702381132003,
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
      }
    ]
  }
}