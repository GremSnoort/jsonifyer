window.BENCHMARK_DATA = {
  "lastUpdate": 1702387062106,
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
        "date": 1702382255042,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 616.3956068056136,
            "unit": "ns/iter",
            "extra": "iterations: 1126242\ncpu: 616.3729464892981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5551.780100000202,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5551.499999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10903.467854610375,
            "unit": "ns/iter",
            "extra": "iterations: 76154\ncpu: 10903.163326942775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16241.950679084479,
            "unit": "ns/iter",
            "extra": "iterations: 51540\ncpu: 16241.540551028333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21321.410913654814,
            "unit": "ns/iter",
            "extra": "iterations: 39052\ncpu: 21320.552084400286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26432.68895069942,
            "unit": "ns/iter",
            "extra": "iterations: 31278\ncpu: 26432.032099239066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32046.978314177057,
            "unit": "ns/iter",
            "extra": "iterations: 26100\ncpu: 32045.16858237547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36705.47648279956,
            "unit": "ns/iter",
            "extra": "iterations: 22643\ncpu: 36703.97915470565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42061.619802678826,
            "unit": "ns/iter",
            "extra": "iterations: 19866\ncpu: 42059.619450317114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 574.354749705663,
            "unit": "ns/iter",
            "extra": "iterations: 1221402\ncpu: 574.3313012423426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 438.92921909962047,
            "unit": "ns/iter",
            "extra": "iterations: 1582814\ncpu: 438.9105100157058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 451.5268774368691,
            "unit": "ns/iter",
            "extra": "iterations: 1546297\ncpu: 451.4953466248711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 441.45304827849117,
            "unit": "ns/iter",
            "extra": "iterations: 1589963\ncpu: 441.4455556512954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 935.5865350770688,
            "unit": "ns/iter",
            "extra": "iterations: 732986\ncpu: 935.5151394433174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1569.9327504913465,
            "unit": "ns/iter",
            "extra": "iterations: 513461\ncpu: 1569.863728696046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9651.406352389506,
            "unit": "ns/iter",
            "extra": "iterations: 85763\ncpu: 9650.924058160273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7749.562127511899,
            "unit": "ns/iter",
            "extra": "iterations: 106547\ncpu: 7749.266520878123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9807.003663302057,
            "unit": "ns/iter",
            "extra": "iterations: 85988\ncpu: 9806.661394613178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8699.583256425634,
            "unit": "ns/iter",
            "extra": "iterations: 94269\ncpu: 8699.242593005114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27308.831059602857,
            "unit": "ns/iter",
            "extra": "iterations: 30200\ncpu: 27307.741721854258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 272356.0218818346,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 272344.07627383544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 213783.39087787434,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 213779.37714565944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 211509.61216086065,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 211503.5125968991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210641.52144578044,
            "unit": "ns/iter",
            "extra": "iterations: 4150\ncpu: 210633.51807228941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 105904.91561129871,
            "unit": "ns/iter",
            "extra": "iterations: 8212\ncpu: 105899.82951777887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 202565.61529520783,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 202558.69363086938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5670.2994099998705,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5670.211999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27358.995084868307,
            "unit": "ns/iter",
            "extra": "iterations: 30518\ncpu: 27358.355724490426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22165.098461699934,
            "unit": "ns/iter",
            "extra": "iterations: 37964\ncpu: 22163.839426825427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23414.532479389713,
            "unit": "ns/iter",
            "extra": "iterations: 36146\ncpu: 23414.04028108232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22515.822900104602,
            "unit": "ns/iter",
            "extra": "iterations: 37109\ncpu: 22515.462556253242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44619.90042339001,
            "unit": "ns/iter",
            "extra": "iterations: 18659\ncpu: 44617.19813494835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 292630.36473349435,
            "unit": "ns/iter",
            "extra": "iterations: 2983\ncpu: 292623.0640295012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 226018.26115145365,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 226010.9958506206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 225344.80692686504,
            "unit": "ns/iter",
            "extra": "iterations: 3869\ncpu: 225343.73223055113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 223225.5591784346,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 223216.22593067956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 114647.2876945183,
            "unit": "ns/iter",
            "extra": "iterations: 7647\ncpu: 114643.49418072453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 212898.66062683755,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 212887.340842312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 862795.7483989055,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 862772.2781335793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 464858.87632134306,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 464833.40380549734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2411.5704125605985,
            "unit": "ns/iter",
            "extra": "iterations: 332533\ncpu: 2411.559153527626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9519.179970431842,
            "unit": "ns/iter",
            "extra": "iterations: 85903\ncpu: 9518.723443884444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9239.375030781102,
            "unit": "ns/iter",
            "extra": "iterations: 89342\ncpu: 9239.093595397428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8783.175614771319,
            "unit": "ns/iter",
            "extra": "iterations: 96296\ncpu: 8782.754216166866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7989.947008995103,
            "unit": "ns/iter",
            "extra": "iterations: 102942\ncpu: 7989.819510015347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26291.96952908635,
            "unit": "ns/iter",
            "extra": "iterations: 31768\ncpu: 26290.732812893395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 278280.720680954,
            "unit": "ns/iter",
            "extra": "iterations: 3172\ncpu: 278272.8562421198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 210964.53666035202,
            "unit": "ns/iter",
            "extra": "iterations: 4228\ncpu: 210948.72280037924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 210684.2008567282,
            "unit": "ns/iter",
            "extra": "iterations: 4202\ncpu: 210677.51070918728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 209039.21315354202,
            "unit": "ns/iter",
            "extra": "iterations: 4227\ncpu: 209028.483558079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 103047.09008797782,
            "unit": "ns/iter",
            "extra": "iterations: 8525\ncpu: 103042.79178885576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 198478.33672316215,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 198466.41807909735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 195.37315142759587,
            "unit": "ns/iter",
            "extra": "iterations: 3585740\ncpu: 195.36667466129688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1519.7417431638212,
            "unit": "ns/iter",
            "extra": "iterations: 473002\ncpu: 1519.6521367774308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1154.2406529726225,
            "unit": "ns/iter",
            "extra": "iterations: 598800\ncpu: 1154.2024048096273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1267.8263778446276,
            "unit": "ns/iter",
            "extra": "iterations: 550189\ncpu: 1267.7732560992577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 935.9217597933493,
            "unit": "ns/iter",
            "extra": "iterations: 752452\ncpu: 935.8806940509137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8844.4727699526,
            "unit": "ns/iter",
            "extra": "iterations: 78810\ncpu: 8844.048978555982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12552.533008946817,
            "unit": "ns/iter",
            "extra": "iterations: 56106\ncpu: 12552.014044843718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2996.1215102955252,
            "unit": "ns/iter",
            "extra": "iterations: 234762\ncpu: 2996.0197987749198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2978.238627122175,
            "unit": "ns/iter",
            "extra": "iterations: 236088\ncpu: 2978.0734302463234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2961.5545126725374,
            "unit": "ns/iter",
            "extra": "iterations: 231836\ncpu: 2961.3644990424277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5343.277731960078,
            "unit": "ns/iter",
            "extra": "iterations: 132167\ncpu: 5342.979715057453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5517.091788844703,
            "unit": "ns/iter",
            "extra": "iterations: 127205\ncpu: 5517.070869855754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1844.0468025361656,
            "unit": "ns/iter",
            "extra": "iterations: 378206\ncpu: 1843.9577901990015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9900.42905262554,
            "unit": "ns/iter",
            "extra": "iterations: 70954\ncpu: 9899.990134453188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7946.294542590901,
            "unit": "ns/iter",
            "extra": "iterations: 87624\ncpu: 7946.036474025388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7969.810406296838,
            "unit": "ns/iter",
            "extra": "iterations: 87793\ncpu: 7969.360882986156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7958.269141371189,
            "unit": "ns/iter",
            "extra": "iterations: 86906\ncpu: 7957.999447679159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17996.71549893829,
            "unit": "ns/iter",
            "extra": "iterations: 39093\ncpu: 17995.90463765903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58743.700761057094,
            "unit": "ns/iter",
            "extra": "iterations: 11957\ncpu: 58739.70895709598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47124.02125947329,
            "unit": "ns/iter",
            "extra": "iterations: 14911\ncpu: 47122.45322245327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47430.39714150238,
            "unit": "ns/iter",
            "extra": "iterations: 14763\ncpu: 47428.158233421665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47029.76736531067,
            "unit": "ns/iter",
            "extra": "iterations: 14886\ncpu: 47026.864167674474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27152.50401730633,
            "unit": "ns/iter",
            "extra": "iterations: 25888\ncpu: 27151.541254635205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46921.453047446616,
            "unit": "ns/iter",
            "extra": "iterations: 15111\ncpu: 46919.80676328455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1897.888777934403,
            "unit": "ns/iter",
            "extra": "iterations: 372525\ncpu: 1896.0673780283257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9748.644445370213,
            "unit": "ns/iter",
            "extra": "iterations: 72003\ncpu: 9747.929947363375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7935.148660052637,
            "unit": "ns/iter",
            "extra": "iterations: 87690\ncpu: 7934.209145854705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7981.163005317558,
            "unit": "ns/iter",
            "extra": "iterations: 87445\ncpu: 7981.127565898528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7995.71511601694,
            "unit": "ns/iter",
            "extra": "iterations: 88608\ncpu: 7995.1855362947845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18028.095026231935,
            "unit": "ns/iter",
            "extra": "iterations: 38884\ncpu: 18026.573912148975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57712.415610079704,
            "unit": "ns/iter",
            "extra": "iterations: 12146\ncpu: 57707.16285196716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46701.75103678943,
            "unit": "ns/iter",
            "extra": "iterations: 14950\ncpu: 46697.404682274544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46605.11614617819,
            "unit": "ns/iter",
            "extra": "iterations: 15050\ncpu: 46604.27906976826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46710.536608153714,
            "unit": "ns/iter",
            "extra": "iterations: 14983\ncpu: 46706.66755656473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26801.54366745557,
            "unit": "ns/iter",
            "extra": "iterations: 26198\ncpu: 26801.007710512295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45840.583676403956,
            "unit": "ns/iter",
            "extra": "iterations: 15303\ncpu: 45837.07769718385 ns\nthreads: 1"
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
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387061532,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 622.1036262189866,
            "unit": "ns/iter",
            "extra": "iterations: 1123567\ncpu: 622.0874233579307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5509.433670000021,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5509.438000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10738.523244608956,
            "unit": "ns/iter",
            "extra": "iterations: 76792\ncpu: 10738.441504323366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16220.67710778482,
            "unit": "ns/iter",
            "extra": "iterations: 51974\ncpu: 16220.679570554503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21396.03923420444,
            "unit": "ns/iter",
            "extra": "iterations: 39175\ncpu: 21395.49712827059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26669.09795499628,
            "unit": "ns/iter",
            "extra": "iterations: 31198\ncpu: 26668.145393935512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31899.662045324356,
            "unit": "ns/iter",
            "extra": "iterations: 26255\ncpu: 31899.078270805556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37600.359206572626,
            "unit": "ns/iter",
            "extra": "iterations: 22636\ncpu: 37598.09595334863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41796.648881500536,
            "unit": "ns/iter",
            "extra": "iterations: 19848\ncpu: 41795.64691656594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 572.4852881058616,
            "unit": "ns/iter",
            "extra": "iterations: 1218198\ncpu: 572.461455362757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 439.36037630318856,
            "unit": "ns/iter",
            "extra": "iterations: 1591270\ncpu: 439.33920704845906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 451.1048312408712,
            "unit": "ns/iter",
            "extra": "iterations: 1452277\ncpu: 451.0853645688798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 434.7327632589313,
            "unit": "ns/iter",
            "extra": "iterations: 1602130\ncpu: 434.7102919238762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 944.5324833934511,
            "unit": "ns/iter",
            "extra": "iterations: 751661\ncpu: 944.498916399812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1562.8669184417129,
            "unit": "ns/iter",
            "extra": "iterations: 511303\ncpu: 1562.8126570741827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9640.359646733405,
            "unit": "ns/iter",
            "extra": "iterations: 88092\ncpu: 9640.032011987461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8557.724123547567,
            "unit": "ns/iter",
            "extra": "iterations: 95898\ncpu: 8557.202444263692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9906.16001677442,
            "unit": "ns/iter",
            "extra": "iterations: 83460\ncpu: 9905.64462017734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8654.383992937897,
            "unit": "ns/iter",
            "extra": "iterations: 95158\ncpu: 8653.999663717183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27647.487961852123,
            "unit": "ns/iter",
            "extra": "iterations: 29988\ncpu: 27646.155128718176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 271369.8823340789,
            "unit": "ns/iter",
            "extra": "iterations: 3119\ncpu: 271346.64956716914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211832.92391832217,
            "unit": "ns/iter",
            "extra": "iterations: 4114\ncpu: 211822.31404958683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 211286.7412875067,
            "unit": "ns/iter",
            "extra": "iterations: 4132\ncpu: 211276.79090029057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210834.07811741732,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 210825.4973313922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 107352.91050250898,
            "unit": "ns/iter",
            "extra": "iterations: 8179\ncpu: 107346.96173126288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 203438.4891431243,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 203428.4847069815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5617.216260000077,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5616.854000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27378.546695331515,
            "unit": "ns/iter",
            "extra": "iterations: 30699\ncpu: 27377.012280530307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21945.318444068165,
            "unit": "ns/iter",
            "extra": "iterations: 38305\ncpu: 21943.8898316147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23930.04245690972,
            "unit": "ns/iter",
            "extra": "iterations: 34694\ncpu: 23929.221190984103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22441.549827259034,
            "unit": "ns/iter",
            "extra": "iterations: 37339\ncpu: 22439.818956051302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44667.652536566486,
            "unit": "ns/iter",
            "extra": "iterations: 17504\ncpu: 44665.45361060317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 292892.27468100935,
            "unit": "ns/iter",
            "extra": "iterations: 2978\ncpu: 292874.07656145154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 225689.96270211032,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 225682.49869587884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 225814.03815994767,
            "unit": "ns/iter",
            "extra": "iterations: 3826\ncpu: 225807.05697856643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 225668.48225848537,
            "unit": "ns/iter",
            "extra": "iterations: 3861\ncpu: 225654.57135456998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116999.07046396175,
            "unit": "ns/iter",
            "extra": "iterations: 7479\ncpu: 116991.92405401828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 212947.36397516125,
            "unit": "ns/iter",
            "extra": "iterations: 4025\ncpu: 212937.93788819978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 860272.6651500732,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 860229.1173794386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 484488.4323432333,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 484441.2541254125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2416.0110072573775,
            "unit": "ns/iter",
            "extra": "iterations: 331236\ncpu: 2415.8832373292707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9492.104464539105,
            "unit": "ns/iter",
            "extra": "iterations: 87915\ncpu: 9491.563441960974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9304.727955202843,
            "unit": "ns/iter",
            "extra": "iterations: 89114\ncpu: 9304.632268779365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8698.298664032458,
            "unit": "ns/iter",
            "extra": "iterations: 95137\ncpu: 8698.04492468754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8159.969155651522,
            "unit": "ns/iter",
            "extra": "iterations: 100764\ncpu: 8159.529196935456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26570.43792654584,
            "unit": "ns/iter",
            "extra": "iterations: 31503\ncpu: 26570.19014062139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 281433.64786926936,
            "unit": "ns/iter",
            "extra": "iterations: 3121\ncpu: 281429.54181352095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 212626.4497847907,
            "unit": "ns/iter",
            "extra": "iterations: 4182\ncpu: 212615.06456240916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 210840.56342394432,
            "unit": "ns/iter",
            "extra": "iterations: 4194\ncpu: 210829.85216976554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 209171.96566525823,
            "unit": "ns/iter",
            "extra": "iterations: 4194\ncpu: 209164.997615641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 104199.34754873179,
            "unit": "ns/iter",
            "extra": "iterations: 8465\ncpu: 104192.03780271708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 201037.82180486238,
            "unit": "ns/iter",
            "extra": "iterations: 4366\ncpu: 201030.30233623425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 200.66237857003657,
            "unit": "ns/iter",
            "extra": "iterations: 3490593\ncpu: 200.6499755199179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1521.2334269476737,
            "unit": "ns/iter",
            "extra": "iterations: 455770\ncpu: 1521.1413651622472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1237.452842877884,
            "unit": "ns/iter",
            "extra": "iterations: 566521\ncpu: 1237.420854654991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1339.2757753499368,
            "unit": "ns/iter",
            "extra": "iterations: 522893\ncpu: 1339.18411606198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 940.6062761579262,
            "unit": "ns/iter",
            "extra": "iterations: 745233\ncpu: 940.5536255104163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8966.10547130007,
            "unit": "ns/iter",
            "extra": "iterations: 78135\ncpu: 8965.577526076708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13259.28821626176,
            "unit": "ns/iter",
            "extra": "iterations: 53158\ncpu: 13258.689190714436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3019.2261090682905,
            "unit": "ns/iter",
            "extra": "iterations: 232808\ncpu: 3019.027696642726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2978.133281783683,
            "unit": "ns/iter",
            "extra": "iterations: 236664\ncpu: 2977.9552445661475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3013.8911696689743,
            "unit": "ns/iter",
            "extra": "iterations: 234374\ncpu: 3013.6422982071313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5047.5003629184475,
            "unit": "ns/iter",
            "extra": "iterations: 137772\ncpu: 5047.261417414264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5656.268755611067,
            "unit": "ns/iter",
            "extra": "iterations: 125869\ncpu: 5656.186988059041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1866.0483337690198,
            "unit": "ns/iter",
            "extra": "iterations: 371107\ncpu: 1866.0124977432272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9860.827734759881,
            "unit": "ns/iter",
            "extra": "iterations: 71030\ncpu: 9860.212586231111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8009.62353617129,
            "unit": "ns/iter",
            "extra": "iterations: 87015\ncpu: 8009.120266620721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8163.712892300274,
            "unit": "ns/iter",
            "extra": "iterations: 86222\ncpu: 8163.2483588876075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8300.887104895774,
            "unit": "ns/iter",
            "extra": "iterations: 73493\ncpu: 8300.723878464529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17788.270604149693,
            "unit": "ns/iter",
            "extra": "iterations: 39179\ncpu: 17787.909339186714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58810.57673951162,
            "unit": "ns/iter",
            "extra": "iterations: 11943\ncpu: 58807.33484049255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46567.030563325,
            "unit": "ns/iter",
            "extra": "iterations: 15018\ncpu: 46564.10307630825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47114.93600161558,
            "unit": "ns/iter",
            "extra": "iterations: 14891\ncpu: 47113.92116043254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46372.42097244547,
            "unit": "ns/iter",
            "extra": "iterations: 15096\ncpu: 46370.707472178285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27325.392794886564,
            "unit": "ns/iter",
            "extra": "iterations: 25815\ncpu: 27324.68332364925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46084.22367475282,
            "unit": "ns/iter",
            "extra": "iterations: 15299\ncpu: 46084.26694555237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1881.1488175596153,
            "unit": "ns/iter",
            "extra": "iterations: 372577\ncpu: 1881.115849878024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9833.224007733852,
            "unit": "ns/iter",
            "extra": "iterations: 71377\ncpu: 9832.98961850465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7982.1467620323765,
            "unit": "ns/iter",
            "extra": "iterations: 87802\ncpu: 7982.149609348407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7867.825320330825,
            "unit": "ns/iter",
            "extra": "iterations: 88190\ncpu: 7867.666402086392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7925.547182382047,
            "unit": "ns/iter",
            "extra": "iterations: 88550\ncpu: 7925.429700734012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18151.769924968183,
            "unit": "ns/iter",
            "extra": "iterations: 38783\ncpu: 18151.06618879396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58052.404017854824,
            "unit": "ns/iter",
            "extra": "iterations: 12096\ncpu: 58050.48776455065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46425.94442975954,
            "unit": "ns/iter",
            "extra": "iterations: 15134\ncpu: 46424.996696181166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46303.75909936831,
            "unit": "ns/iter",
            "extra": "iterations: 15056\ncpu: 46303.81907545097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46122.96320317868,
            "unit": "ns/iter",
            "extra": "iterations: 15110\ncpu: 46121.38318994007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28300.33330784066,
            "unit": "ns/iter",
            "extra": "iterations: 26153\ncpu: 28300.099414981127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45412.975844778884,
            "unit": "ns/iter",
            "extra": "iterations: 15359\ncpu: 45412.91099680905 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}