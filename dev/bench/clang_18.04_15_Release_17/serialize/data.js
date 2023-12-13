window.BENCHMARK_DATA = {
  "lastUpdate": 1702490348891,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-15 18.04 Release c++-17": [
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
        "date": 1702490348162,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 682.9935288561551,
            "unit": "ns/iter",
            "extra": "iterations: 1022694\ncpu: 682.9456318312224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10642.446570890746,
            "unit": "ns/iter",
            "extra": "iterations: 77542\ncpu: 10641.507828015785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23270.12552324464,
            "unit": "ns/iter",
            "extra": "iterations: 35834\ncpu: 23269.983814254614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37672.70154470022,
            "unit": "ns/iter",
            "extra": "iterations: 23176\ncpu: 37671.74231964102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48051.58973917195,
            "unit": "ns/iter",
            "extra": "iterations: 17406\ncpu: 48049.71274273239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58187.116293448795,
            "unit": "ns/iter",
            "extra": "iterations: 14558\ncpu: 58185.382607501015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 57819.56289999926,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57815.28000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66530.7574200467,
            "unit": "ns/iter",
            "extra": "iterations: 13039\ncpu: 66529.51146560314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76628.62986614706,
            "unit": "ns/iter",
            "extra": "iterations: 11431\ncpu: 76625.7195345988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 550.4947046598209,
            "unit": "ns/iter",
            "extra": "iterations: 1255349\ncpu: 550.4580001258608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 463.65260279404777,
            "unit": "ns/iter",
            "extra": "iterations: 1493472\ncpu: 463.6323278909812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 469.28795236896235,
            "unit": "ns/iter",
            "extra": "iterations: 1490625\ncpu: 469.2801341719071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 469.8964319238263,
            "unit": "ns/iter",
            "extra": "iterations: 1493578\ncpu: 469.8768996329617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 945.0583033554783,
            "unit": "ns/iter",
            "extra": "iterations: 741381\ncpu: 945.0429671113764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4306.524562912588,
            "unit": "ns/iter",
            "extra": "iterations: 188292\ncpu: 4306.354491959297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18360.9385118315,
            "unit": "ns/iter",
            "extra": "iterations: 44968\ncpu: 18360.676481053233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14796.863277040204,
            "unit": "ns/iter",
            "extra": "iterations: 55660\ncpu: 14796.351060007139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14920.62624524479,
            "unit": "ns/iter",
            "extra": "iterations: 55210\ncpu: 14920.19561673606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14906.813218025145,
            "unit": "ns/iter",
            "extra": "iterations: 55273\ncpu: 14906.068062164211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47069.37784427469,
            "unit": "ns/iter",
            "extra": "iterations: 17711\ncpu: 47067.89001185703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 436838.50554992835,
            "unit": "ns/iter",
            "extra": "iterations: 1982\ncpu: 436810.1917255302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 357230.0057708263,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 357209.2745259681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 360154.9066611803,
            "unit": "ns/iter",
            "extra": "iterations: 2432\ncpu: 360148.8486842108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 364760.0599500713,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 364741.5070774358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 222292.16932168734,
            "unit": "ns/iter",
            "extra": "iterations: 3892\ncpu: 222279.8304213777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 357636.36041664885,
            "unit": "ns/iter",
            "extra": "iterations: 2400\ncpu: 357604.9583333344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1841400.4095426647,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1841341.5506958272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 725634.4556764829,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 725587.0917573882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2502823.8016303657,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2502688.858695655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4235.839703824434,
            "unit": "ns/iter",
            "extra": "iterations: 186511\ncpu: 4235.778050624377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19049.118344688904,
            "unit": "ns/iter",
            "extra": "iterations: 43593\ncpu: 19048.590370013582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15125.394445780737,
            "unit": "ns/iter",
            "extra": "iterations: 53977\ncpu: 15124.982863071335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14535.407921210393,
            "unit": "ns/iter",
            "extra": "iterations: 56658\ncpu: 14535.190087895873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14843.942387869287,
            "unit": "ns/iter",
            "extra": "iterations: 55405\ncpu: 14842.839093944564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46971.150482420206,
            "unit": "ns/iter",
            "extra": "iterations: 17723\ncpu: 46967.17260057579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 464263.071082393,
            "unit": "ns/iter",
            "extra": "iterations: 1857\ncpu: 464226.602046309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 380671.3825591711,
            "unit": "ns/iter",
            "extra": "iterations: 2282\ncpu: 380629.53549517813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 376952.6084519484,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 376925.2695127205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 376603.2585534619,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 376585.23170203355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 220914.78540443984,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 220897.55039550806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 368367.5239520621,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 368331.47989734844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1885533.0824743358,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1885387.8350515408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 725162.3047918295,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 725100.8641005503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4292.991108438382,
            "unit": "ns/iter",
            "extra": "iterations: 186244\ncpu: 4292.634393591206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19342.546859457954,
            "unit": "ns/iter",
            "extra": "iterations: 43225\ncpu: 19341.068825910916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16388.555179617484,
            "unit": "ns/iter",
            "extra": "iterations: 54087\ncpu: 16387.24462440136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15852.495066052034,
            "unit": "ns/iter",
            "extra": "iterations: 56243\ncpu: 15850.703198620204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16173.183547417502,
            "unit": "ns/iter",
            "extra": "iterations: 54885\ncpu: 16171.791928577994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47649.85433843535,
            "unit": "ns/iter",
            "extra": "iterations: 17829\ncpu: 47646.92916035676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 454099.2689512021,
            "unit": "ns/iter",
            "extra": "iterations: 1926\ncpu: 454055.39979231666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 374784.94210978365,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 374759.9056603798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370531.01575136185,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 370501.2345679019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 373310.35811966547,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 373275.47008546937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225212.74801537694,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 225198.3866837389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 369196.01053514704,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 369173.66203118244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 314.9808013750285,
            "unit": "ns/iter",
            "extra": "iterations: 2221357\ncpu: 314.97913212509263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1678.8330848099542,
            "unit": "ns/iter",
            "extra": "iterations: 421825\ncpu: 1678.7594381556412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1307.1114445008432,
            "unit": "ns/iter",
            "extra": "iterations: 535576\ncpu: 1307.0863892332732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1277.5456056730777,
            "unit": "ns/iter",
            "extra": "iterations: 552212\ncpu: 1277.4304071624667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1030.8568518620448,
            "unit": "ns/iter",
            "extra": "iterations: 672569\ncpu: 1030.7966914918802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8003.372882709194,
            "unit": "ns/iter",
            "extra": "iterations: 87671\ncpu: 8002.893773311632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18740.378161043296,
            "unit": "ns/iter",
            "extra": "iterations: 36934\ncpu: 18738.66356202943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4445.205422625449,
            "unit": "ns/iter",
            "extra": "iterations: 157894\ncpu: 4444.793975705227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4443.662481433257,
            "unit": "ns/iter",
            "extra": "iterations: 157538\ncpu: 4443.334941410948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4464.57650424659,
            "unit": "ns/iter",
            "extra": "iterations: 156939\ncpu: 4464.112808161149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9261.049242022846,
            "unit": "ns/iter",
            "extra": "iterations: 75464\ncpu: 9260.294975087541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8360.278153152243,
            "unit": "ns/iter",
            "extra": "iterations: 83472\ncpu: 8359.494201648484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3185.8448112287197,
            "unit": "ns/iter",
            "extra": "iterations: 220293\ncpu: 3185.6150672059593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16139.856230842612,
            "unit": "ns/iter",
            "extra": "iterations: 43389\ncpu: 16138.385305031237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12707.578311501198,
            "unit": "ns/iter",
            "extra": "iterations: 55043\ncpu: 12707.136238940539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12870.496752487266,
            "unit": "ns/iter",
            "extra": "iterations: 55581\ncpu: 12870.049117504124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12982.248804624867,
            "unit": "ns/iter",
            "extra": "iterations: 53958\ncpu: 12981.624596908716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28094.83718782623,
            "unit": "ns/iter",
            "extra": "iterations: 24906\ncpu: 28093.7685698227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98120.00994474492,
            "unit": "ns/iter",
            "extra": "iterations: 7240\ncpu: 98109.17127071787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84462.08014021072,
            "unit": "ns/iter",
            "extra": "iterations: 8273\ncpu: 84461.8034570286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83879.99316628958,
            "unit": "ns/iter",
            "extra": "iterations: 8341\ncpu: 83876.5975302719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84734.56368694738,
            "unit": "ns/iter",
            "extra": "iterations: 8267\ncpu: 84732.09144792563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53762.238208997755,
            "unit": "ns/iter",
            "extra": "iterations: 12976\ncpu: 53761.21300863199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84390.66415410343,
            "unit": "ns/iter",
            "extra": "iterations: 8358\ncpu: 84385.73821488445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2985.53162890121,
            "unit": "ns/iter",
            "extra": "iterations: 233900\ncpu: 2985.446772124836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15130.371576004678,
            "unit": "ns/iter",
            "extra": "iterations: 46510\ncpu: 15129.716190066789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12091.360749663449,
            "unit": "ns/iter",
            "extra": "iterations: 57946\ncpu: 12091.152107134223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11975.506460875762,
            "unit": "ns/iter",
            "extra": "iterations: 58506\ncpu: 11975.226472498593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12634.647639955983,
            "unit": "ns/iter",
            "extra": "iterations: 55571\ncpu: 12634.38124201456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26978.232612979762,
            "unit": "ns/iter",
            "extra": "iterations: 25867\ncpu: 26977.102099199914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97153.5976773088,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 97149.86865754217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82268.3435069498,
            "unit": "ns/iter",
            "extra": "iterations: 8486\ncpu: 82267.05161442499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80908.39268404778,
            "unit": "ns/iter",
            "extra": "iterations: 8666\ncpu: 80903.33487191173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81226.82713044502,
            "unit": "ns/iter",
            "extra": "iterations: 8625\ncpu: 81222.88695652066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54503.15432922627,
            "unit": "ns/iter",
            "extra": "iterations: 12739\ncpu: 54500.58089332008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82143.71368074398,
            "unit": "ns/iter",
            "extra": "iterations: 8501\ncpu: 82140.33643100757 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}