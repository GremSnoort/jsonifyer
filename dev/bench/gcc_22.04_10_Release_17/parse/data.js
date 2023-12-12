window.BENCHMARK_DATA = {
  "lastUpdate": 1702381112970,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-10 22.04 Release c++-17": [
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
        "date": 1702381112532,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 614.1659776328507,
            "unit": "ns/iter",
            "extra": "iterations: 1125489\ncpu: 614.1436300132655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5533.980280000037,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5533.918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10722.637333264096,
            "unit": "ns/iter",
            "extra": "iterations: 77443\ncpu: 10722.14144596671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16569.952801625594,
            "unit": "ns/iter",
            "extra": "iterations: 52184\ncpu: 16569.28943737544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21582.219541170663,
            "unit": "ns/iter",
            "extra": "iterations: 37879\ncpu: 21581.86066158031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26654.35493988602,
            "unit": "ns/iter",
            "extra": "iterations: 30608\ncpu: 26653.361866178766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32440.786374942658,
            "unit": "ns/iter",
            "extra": "iterations: 25732\ncpu: 32439.503342142074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37659.664421500485,
            "unit": "ns/iter",
            "extra": "iterations: 22567\ncpu: 37656.68897062083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42744.31829739662,
            "unit": "ns/iter",
            "extra": "iterations: 19664\ncpu: 42742.010781122815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 722.6251702087884,
            "unit": "ns/iter",
            "extra": "iterations: 971601\ncpu: 722.5810800935775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 442.7018075063292,
            "unit": "ns/iter",
            "extra": "iterations: 1574379\ncpu: 442.6821623001835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 454.2725012774879,
            "unit": "ns/iter",
            "extra": "iterations: 1549912\ncpu: 454.2555964467661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 438.6559147018741,
            "unit": "ns/iter",
            "extra": "iterations: 1590562\ncpu: 438.640304496147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 938.032961696489,
            "unit": "ns/iter",
            "extra": "iterations: 747504\ncpu: 938.0019371133804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1562.8766697878798,
            "unit": "ns/iter",
            "extra": "iterations: 509421\ncpu: 1562.8097388996507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10481.16033896723,
            "unit": "ns/iter",
            "extra": "iterations: 86498\ncpu: 10480.70013179497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8316.946844299846,
            "unit": "ns/iter",
            "extra": "iterations: 96904\ncpu: 8299.794642120016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10188.315840117963,
            "unit": "ns/iter",
            "extra": "iterations: 81060\ncpu: 10187.590673575145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9239.866876622204,
            "unit": "ns/iter",
            "extra": "iterations: 93988\ncpu: 9239.508235093876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28018.441730847724,
            "unit": "ns/iter",
            "extra": "iterations: 29604\ncpu: 28016.997703013094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 272519.06345732365,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 272506.72085026494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 216312.1603657077,
            "unit": "ns/iter",
            "extra": "iterations: 4047\ncpu: 216301.40845070418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 215181.43324251275,
            "unit": "ns/iter",
            "extra": "iterations: 4037\ncpu: 215172.62818924934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 215743.03941856793,
            "unit": "ns/iter",
            "extra": "iterations: 4059\ncpu: 215735.27962552285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108832.12778751996,
            "unit": "ns/iter",
            "extra": "iterations: 7982\ncpu: 108825.11901779032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 207593.2171945749,
            "unit": "ns/iter",
            "extra": "iterations: 4199\ncpu: 207589.2355322698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5776.387829999976,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5776.37499999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27487.096772077926,
            "unit": "ns/iter",
            "extra": "iterations: 30515\ncpu: 27486.619695231864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21974.78291132681,
            "unit": "ns/iter",
            "extra": "iterations: 38072\ncpu: 21974.38537507881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23738.783803611866,
            "unit": "ns/iter",
            "extra": "iterations: 35440\ncpu: 23738.61173814891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 24304.202790721174,
            "unit": "ns/iter",
            "extra": "iterations: 37768\ncpu: 24303.701546282577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44940.23760767188,
            "unit": "ns/iter",
            "extra": "iterations: 18459\ncpu: 44940.34888130454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 293724.63418745896,
            "unit": "ns/iter",
            "extra": "iterations: 2966\ncpu: 293711.2946729584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 227191.61512296868,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 227189.8220826788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 227014.7607105419,
            "unit": "ns/iter",
            "extra": "iterations: 3828\ncpu: 227007.88923720008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 224951.5706900929,
            "unit": "ns/iter",
            "extra": "iterations: 3869\ncpu: 224950.1421555973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117629.26284717748,
            "unit": "ns/iter",
            "extra": "iterations: 7453\ncpu: 117623.81591305438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 216425.93151712097,
            "unit": "ns/iter",
            "extra": "iterations: 4001\ncpu: 216422.9942514377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 868126.4871559636,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 868100.5504587112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 487865.6767454688,
            "unit": "ns/iter",
            "extra": "iterations: 1819\ncpu: 487844.7498625612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2397.880942561888,
            "unit": "ns/iter",
            "extra": "iterations: 332201\ncpu: 2397.7772493159177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8804.276962842903,
            "unit": "ns/iter",
            "extra": "iterations: 92850\ncpu: 8803.866451265485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9404.555782120975,
            "unit": "ns/iter",
            "extra": "iterations: 88765\ncpu: 9403.963273812886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8606.49310960895,
            "unit": "ns/iter",
            "extra": "iterations: 95713\ncpu: 8606.120380721552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8310.82993190465,
            "unit": "ns/iter",
            "extra": "iterations: 99419\ncpu: 8310.414508293223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27087.563905402432,
            "unit": "ns/iter",
            "extra": "iterations: 30952\ncpu: 27086.5662962005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 283835.31377550657,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 283815.3380102039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 212905.2664418204,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 212892.00192724614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 211554.87982730538,
            "unit": "ns/iter",
            "extra": "iterations: 4169\ncpu: 211545.64643799613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 209156.8837043984,
            "unit": "ns/iter",
            "extra": "iterations: 4222\ncpu: 209143.84178114653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 103027.17246240139,
            "unit": "ns/iter",
            "extra": "iterations: 8512\ncpu: 103022.63862781962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 200798.8028912261,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 200783.06562643533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 196.42728232170754,
            "unit": "ns/iter",
            "extra": "iterations: 3540879\ncpu: 196.41676544157468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1526.3063973357093,
            "unit": "ns/iter",
            "extra": "iterations: 460598\ncpu: 1526.246314573669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1220.4232022545073,
            "unit": "ns/iter",
            "extra": "iterations: 572022\ncpu: 1220.3333088587456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1341.3153651862744,
            "unit": "ns/iter",
            "extra": "iterations: 522610\ncpu: 1341.267675704638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 944.8406982822136,
            "unit": "ns/iter",
            "extra": "iterations: 740331\ncpu: 944.7822663106045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8797.232325408879,
            "unit": "ns/iter",
            "extra": "iterations: 78941\ncpu: 8797.102899633986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13271.5553144119,
            "unit": "ns/iter",
            "extra": "iterations: 52988\ncpu: 13270.763191666021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2967.4601857131174,
            "unit": "ns/iter",
            "extra": "iterations: 233371\ncpu: 2967.3301309931376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2992.9618781587037,
            "unit": "ns/iter",
            "extra": "iterations: 234485\ncpu: 2992.7910100859203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2930.8829636681844,
            "unit": "ns/iter",
            "extra": "iterations: 239541\ncpu: 2930.8961722627723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5061.45199135507,
            "unit": "ns/iter",
            "extra": "iterations: 139277\ncpu: 5061.230497497776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4989.909541919124,
            "unit": "ns/iter",
            "extra": "iterations: 139888\ncpu: 4989.440838384995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1872.8090208459894,
            "unit": "ns/iter",
            "extra": "iterations: 373690\ncpu: 1872.7108030720715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9878.82952889118,
            "unit": "ns/iter",
            "extra": "iterations: 70663\ncpu: 9878.129997311196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8052.310799898762,
            "unit": "ns/iter",
            "extra": "iterations: 86686\ncpu: 8052.234501534386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8075.845014876283,
            "unit": "ns/iter",
            "extra": "iterations: 86718\ncpu: 8075.761664244997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8023.823889950935,
            "unit": "ns/iter",
            "extra": "iterations: 86798\ncpu: 8023.710223737928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18133.58506181197,
            "unit": "ns/iter",
            "extra": "iterations: 38666\ncpu: 18132.92815393392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58764.53314361897,
            "unit": "ns/iter",
            "extra": "iterations: 11948\ncpu: 58762.705055238745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46496.21083683583,
            "unit": "ns/iter",
            "extra": "iterations: 14746\ncpu: 46496.310863963125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47154.0796525233,
            "unit": "ns/iter",
            "extra": "iterations: 14965\ncpu: 47153.87236886089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46528.99853985437,
            "unit": "ns/iter",
            "extra": "iterations: 15067\ncpu: 46527.35780181837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27244.413392231545,
            "unit": "ns/iter",
            "extra": "iterations: 25806\ncpu: 27244.183523211297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45760.27678338014,
            "unit": "ns/iter",
            "extra": "iterations: 15308\ncpu: 45758.86464593742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1883.4643643549646,
            "unit": "ns/iter",
            "extra": "iterations: 371945\ncpu: 1883.4725564263538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9827.39065918037,
            "unit": "ns/iter",
            "extra": "iterations: 71771\ncpu: 9827.129341934658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7887.180182717212,
            "unit": "ns/iter",
            "extra": "iterations: 88771\ncpu: 7887.138817857166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7940.6814234543035,
            "unit": "ns/iter",
            "extra": "iterations: 88208\ncpu: 7940.717395247556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8029.663798254519,
            "unit": "ns/iter",
            "extra": "iterations: 87040\ncpu: 8029.50367647055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18223.542269056263,
            "unit": "ns/iter",
            "extra": "iterations: 38527\ncpu: 18223.59903444323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59662.4123807892,
            "unit": "ns/iter",
            "extra": "iterations: 11744\ncpu: 59660.43085831055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47044.87075515952,
            "unit": "ns/iter",
            "extra": "iterations: 14871\ncpu: 47045.007060722164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46524.85433464331,
            "unit": "ns/iter",
            "extra": "iterations: 15007\ncpu: 46523.042580130124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46814.07560665455,
            "unit": "ns/iter",
            "extra": "iterations: 14959\ncpu: 46813.77097399595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26677.595169155917,
            "unit": "ns/iter",
            "extra": "iterations: 26248\ncpu: 26677.083968302722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45770.12595744566,
            "unit": "ns/iter",
            "extra": "iterations: 15275\ncpu: 45770.27823240572 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}