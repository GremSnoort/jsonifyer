window.BENCHMARK_DATA = {
  "lastUpdate": 1705575614756,
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
        "date": 1702492909205,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 681.6388591576991,
            "unit": "ns/iter",
            "extra": "iterations: 1035200\ncpu: 681.629926584235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10595.09173327848,
            "unit": "ns/iter",
            "extra": "iterations: 78314\ncpu: 10594.822126312027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23639.381455866227,
            "unit": "ns/iter",
            "extra": "iterations: 35278\ncpu: 23639.180225636377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37958.94262008426,
            "unit": "ns/iter",
            "extra": "iterations: 22900\ncpu: 37957.358078602614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48639.238201715016,
            "unit": "ns/iter",
            "extra": "iterations: 16994\ncpu: 48639.32564434504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58396.35454482768,
            "unit": "ns/iter",
            "extra": "iterations: 14489\ncpu: 58394.73393608943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58165.1082999997,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58163.020000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66996.64954284891,
            "unit": "ns/iter",
            "extra": "iterations: 12906\ncpu: 66993.66186269946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76645.12358457893,
            "unit": "ns/iter",
            "extra": "iterations: 11304\ncpu: 76641.23319179048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 555.6111561979992,
            "unit": "ns/iter",
            "extra": "iterations: 1262993\ncpu: 555.6018125199425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 464.8774042750499,
            "unit": "ns/iter",
            "extra": "iterations: 1507679\ncpu: 464.87667467677187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 447.1621194876741,
            "unit": "ns/iter",
            "extra": "iterations: 1524425\ncpu: 447.16637420666785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 454.2379794940091,
            "unit": "ns/iter",
            "extra": "iterations: 1545692\ncpu: 454.2223159594545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 931.5947309782937,
            "unit": "ns/iter",
            "extra": "iterations: 751259\ncpu: 931.6030822925263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4297.397450821036,
            "unit": "ns/iter",
            "extra": "iterations: 188139\ncpu: 4297.23395999766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18334.627889285235,
            "unit": "ns/iter",
            "extra": "iterations: 44691\ncpu: 18333.863641449072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14769.542351702725,
            "unit": "ns/iter",
            "extra": "iterations: 56019\ncpu: 14769.049786679532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14833.049834006777,
            "unit": "ns/iter",
            "extra": "iterations: 55424\ncpu: 14832.503969399479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14796.248110152359,
            "unit": "ns/iter",
            "extra": "iterations: 55560\ncpu: 14795.54715622746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47154.33033707444,
            "unit": "ns/iter",
            "extra": "iterations: 17800\ncpu: 47152.53932584278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 434231.47259930446,
            "unit": "ns/iter",
            "extra": "iterations: 1989\ncpu: 434209.7033685273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 356929.21108829696,
            "unit": "ns/iter",
            "extra": "iterations: 2435\ncpu: 356916.34496919956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 355384.84790564846,
            "unit": "ns/iter",
            "extra": "iterations: 2459\ncpu: 355384.0585603902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 355542.29670783627,
            "unit": "ns/iter",
            "extra": "iterations: 2430\ncpu: 355531.0288065846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 221894.13173958068,
            "unit": "ns/iter",
            "extra": "iterations: 3932\ncpu: 221888.02136317416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 357782.28736103984,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 357760.60107040015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1855237.4849095154,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1855145.6740442691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 762444.6813365886,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 762408.3129584354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2488841.5567568555,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2488708.378378375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4240.293505773902,
            "unit": "ns/iter",
            "extra": "iterations: 187659\ncpu: 4240.152617247227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19093.373353057137,
            "unit": "ns/iter",
            "extra": "iterations: 43262\ncpu: 19092.961490453446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15311.822243959663,
            "unit": "ns/iter",
            "extra": "iterations: 54181\ncpu: 15311.618464037198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14641.49145503968,
            "unit": "ns/iter",
            "extra": "iterations: 56349\ncpu: 14641.267813093351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14889.323917308675,
            "unit": "ns/iter",
            "extra": "iterations: 55579\ncpu: 14889.179366307464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46713.90362862486,
            "unit": "ns/iter",
            "extra": "iterations: 17858\ncpu: 46713.512151416595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 460094.21693121095,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 460088.5185185185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 377871.61883993866,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 377857.69733972766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 372427.636675241,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 372422.40788346087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 372912.7169085847,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 372906.7036720757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221631.13616694225,
            "unit": "ns/iter",
            "extra": "iterations: 3929\ncpu: 221627.33519979691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 371468.4417413217,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 371461.0328638517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1868404.0265848099,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1868400.4089979543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 738226.7809752245,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 738202.3980815355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4133.2596052693425,
            "unit": "ns/iter",
            "extra": "iterations: 191067\ncpu: 4133.19045151698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18873.811109080933,
            "unit": "ns/iter",
            "extra": "iterations: 43766\ncpu: 18873.531965452526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15224.574819893878,
            "unit": "ns/iter",
            "extra": "iterations: 54551\ncpu: 15224.335025938968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14700.742370676271,
            "unit": "ns/iter",
            "extra": "iterations: 56853\ncpu: 14700.613863824261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14942.531363250295,
            "unit": "ns/iter",
            "extra": "iterations: 55463\ncpu: 14942.49499666446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47219.643919757174,
            "unit": "ns/iter",
            "extra": "iterations: 17746\ncpu: 47219.50862166125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 450479.92029362725,
            "unit": "ns/iter",
            "extra": "iterations: 1907\ncpu: 450464.81384373404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 373329.3507108753,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 373326.15252046485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 365192.08964055614,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 365181.3107822417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 365893.2731871939,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 365878.75210792664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 220536.35110996966,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 220527.9663179388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 368912.8487147443,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 368891.192583228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 311.66897754055003,
            "unit": "ns/iter",
            "extra": "iterations: 2249077\ncpu: 311.651668662299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1691.6115380072415,
            "unit": "ns/iter",
            "extra": "iterations: 415011\ncpu: 1691.5214295524654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1314.739853039799,
            "unit": "ns/iter",
            "extra": "iterations: 532253\ncpu: 1314.6915094889052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1252.3147433810736,
            "unit": "ns/iter",
            "extra": "iterations: 558922\ncpu: 1252.2470040542298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1052.7837097611027,
            "unit": "ns/iter",
            "extra": "iterations: 665245\ncpu: 1052.7767965185699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7928.434657992035,
            "unit": "ns/iter",
            "extra": "iterations: 87922\ncpu: 7928.325106344294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18791.537306267524,
            "unit": "ns/iter",
            "extra": "iterations: 37487\ncpu: 18790.626083709372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4395.599109173144,
            "unit": "ns/iter",
            "extra": "iterations: 159178\ncpu: 4395.442837578039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4323.32964344879,
            "unit": "ns/iter",
            "extra": "iterations: 161071\ncpu: 4323.2257824189455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4361.465280636178,
            "unit": "ns/iter",
            "extra": "iterations: 160314\ncpu: 4361.3888992851535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9145.858487487434,
            "unit": "ns/iter",
            "extra": "iterations: 76601\ncpu: 9145.691309512873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8151.364326885921,
            "unit": "ns/iter",
            "extra": "iterations: 85706\ncpu: 8151.359298065597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3254.118610468932,
            "unit": "ns/iter",
            "extra": "iterations: 211870\ncpu: 3254.073252466151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15929.998498291696,
            "unit": "ns/iter",
            "extra": "iterations: 43950\ncpu: 15929.965870307013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12682.451563856455,
            "unit": "ns/iter",
            "extra": "iterations: 55248\ncpu: 12682.209310744267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12443.440888320221,
            "unit": "ns/iter",
            "extra": "iterations: 56241\ncpu: 12443.304706531047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12872.19404579951,
            "unit": "ns/iter",
            "extra": "iterations: 54281\ncpu: 12872.165214347477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28530.820916731136,
            "unit": "ns/iter",
            "extra": "iterations: 24631\ncpu: 28530.266737038317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98468.32953105355,
            "unit": "ns/iter",
            "extra": "iterations: 7101\ncpu: 98468.94803548667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84777.54245680907,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 84774.05483754062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 82960.48781930629,
            "unit": "ns/iter",
            "extra": "iterations: 8456\ncpu: 82959.50804162609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84025.92256982267,
            "unit": "ns/iter",
            "extra": "iterations: 8343\ncpu: 84023.24104039295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54256.866827522244,
            "unit": "ns/iter",
            "extra": "iterations: 12848\ncpu: 54256.28891656281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84113.15221047774,
            "unit": "ns/iter",
            "extra": "iterations: 8324\ncpu: 84112.85439692454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2966.6004381187536,
            "unit": "ns/iter",
            "extra": "iterations: 232357\ncpu: 2966.4572188485745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15212.379303591639,
            "unit": "ns/iter",
            "extra": "iterations: 45950\ncpu: 15212.065288356991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12196.06973041895,
            "unit": "ns/iter",
            "extra": "iterations: 56532\ncpu: 12196.023491120171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12059.266517664604,
            "unit": "ns/iter",
            "extra": "iterations: 58165\ncpu: 12058.569586521113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12599.122072772783,
            "unit": "ns/iter",
            "extra": "iterations: 55983\ncpu: 12598.41023167746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27250.650958092865,
            "unit": "ns/iter",
            "extra": "iterations: 25676\ncpu: 27249.606636547665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96738.17948004074,
            "unit": "ns/iter",
            "extra": "iterations: 7193\ncpu: 96733.86625886158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82574.68250412706,
            "unit": "ns/iter",
            "extra": "iterations: 8482\ncpu: 82570.37255364184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81274.83006993815,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 81272.76223776238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81442.36460875662,
            "unit": "ns/iter",
            "extra": "iterations: 8601\ncpu: 81437.797930473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54541.96310106499,
            "unit": "ns/iter",
            "extra": "iterations: 12873\ncpu: 54539.58673191933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 81921.18359237224,
            "unit": "ns/iter",
            "extra": "iterations: 8557\ncpu: 81916.55954189492 ns\nthreads: 1"
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
        "date": 1702503975296,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 683.6340602736743,
            "unit": "ns/iter",
            "extra": "iterations: 1019616\ncpu: 683.5787198317798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10821.288250747299,
            "unit": "ns/iter",
            "extra": "iterations: 77273\ncpu: 10820.481927710844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24860.183861054426,
            "unit": "ns/iter",
            "extra": "iterations: 34488\ncpu: 24858.83205752726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39282.45956807599,
            "unit": "ns/iter",
            "extra": "iterations: 22643\ncpu: 39280.135141103216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48251.841156544586,
            "unit": "ns/iter",
            "extra": "iterations: 16532\ncpu: 48249.77014275345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59514.17854143704,
            "unit": "ns/iter",
            "extra": "iterations: 14288\ncpu: 59509.38549832029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59576.85099999708,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59575.45 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68770.64961435873,
            "unit": "ns/iter",
            "extra": "iterations: 12706\ncpu: 68767.8970565087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78826.25020359686,
            "unit": "ns/iter",
            "extra": "iterations: 11051\ncpu: 78819.8262600669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 607.6453431492048,
            "unit": "ns/iter",
            "extra": "iterations: 1148888\ncpu: 607.5949091643383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 514.4771774604889,
            "unit": "ns/iter",
            "extra": "iterations: 1366259\ncpu: 514.4294017459355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 513.2050533873892,
            "unit": "ns/iter",
            "extra": "iterations: 1367083\ncpu: 513.1732308864936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 524.408810006189,
            "unit": "ns/iter",
            "extra": "iterations: 1337570\ncpu: 524.3898263268466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 946.7305372488931,
            "unit": "ns/iter",
            "extra": "iterations: 740774\ncpu: 946.6514753487581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4341.231698036288,
            "unit": "ns/iter",
            "extra": "iterations: 186592\ncpu: 4340.968530269255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19282.548014883316,
            "unit": "ns/iter",
            "extra": "iterations: 42466\ncpu: 19281.31210851034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15106.423715415027,
            "unit": "ns/iter",
            "extra": "iterations: 54395\ncpu: 15105.752366945468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14492.111251934866,
            "unit": "ns/iter",
            "extra": "iterations: 56808\ncpu: 14490.663286860983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14843.109545291334,
            "unit": "ns/iter",
            "extra": "iterations: 55420\ncpu: 14842.093107181521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 45083.557072639465,
            "unit": "ns/iter",
            "extra": "iterations: 18310\ncpu: 45082.2282905517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 445529.23523471673,
            "unit": "ns/iter",
            "extra": "iterations: 1981\ncpu: 445490.3584048443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 361100.8388309154,
            "unit": "ns/iter",
            "extra": "iterations: 2395\ncpu: 361071.5240083505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 360460.34802494734,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 360434.46985446993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 359830.9610878418,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 359809.8744769873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 221094.56028733053,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 221074.83324781957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 359106.23539092485,
            "unit": "ns/iter",
            "extra": "iterations: 2430\ncpu: 359088.4362139916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1852085.9580000886,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1851969.4000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 759689.5397727264,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 759626.2987012992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2484249.967741872,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2484041.6666666735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4288.624018809294,
            "unit": "ns/iter",
            "extra": "iterations: 187145\ncpu: 4288.180288011958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19267.572418411688,
            "unit": "ns/iter",
            "extra": "iterations: 43297\ncpu: 19251.34766842972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15130.645221196504,
            "unit": "ns/iter",
            "extra": "iterations: 54386\ncpu: 15130.134593461504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14585.813364708345,
            "unit": "ns/iter",
            "extra": "iterations: 56522\ncpu: 14585.318990835358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14875.376823104714,
            "unit": "ns/iter",
            "extra": "iterations: 55400\ncpu: 14875.075812274366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 45543.162470762356,
            "unit": "ns/iter",
            "extra": "iterations: 17954\ncpu: 45542.107608332575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 458987.6951283248,
            "unit": "ns/iter",
            "extra": "iterations: 1909\ncpu: 458974.59402828646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 372984.04409245425,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 372971.44691780844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 372980.1460195895,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 372967.8586632598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 372689.8904801888,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 372679.9494524002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 217878.51997987568,
            "unit": "ns/iter",
            "extra": "iterations: 3979\ncpu: 217868.61020356847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 371338.1656131576,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 371330.5520438274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1869561.2397541723,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1869369.6721311472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 710333.8767228811,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 710311.1791730472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4193.159580694458,
            "unit": "ns/iter",
            "extra": "iterations: 193081\ncpu: 4193.017438277211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18745.568906838376,
            "unit": "ns/iter",
            "extra": "iterations: 44074\ncpu: 18745.32604256471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15063.15255412019,
            "unit": "ns/iter",
            "extra": "iterations: 54833\ncpu: 15062.807068736056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14464.2315743338,
            "unit": "ns/iter",
            "extra": "iterations: 57040\ncpu: 14463.802594670353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14784.637657518813,
            "unit": "ns/iter",
            "extra": "iterations: 55787\ncpu: 14784.15580690839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46460.89105447819,
            "unit": "ns/iter",
            "extra": "iterations: 18009\ncpu: 46459.970014992155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 442093.57201016566,
            "unit": "ns/iter",
            "extra": "iterations: 1965\ncpu: 442084.5801526729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 362626.9555928165,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 362612.1910347704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 357463.52992520214,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 357455.8603491264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 359441.69494359277,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 359433.5144170483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 220895.98662965864,
            "unit": "ns/iter",
            "extra": "iterations: 3964\ncpu: 220889.93440968622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 362373.33403361286,
            "unit": "ns/iter",
            "extra": "iterations: 2380\ncpu: 362366.21848739526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 310.55526137065556,
            "unit": "ns/iter",
            "extra": "iterations: 2261616\ncpu: 310.5513933399837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1676.94886102273,
            "unit": "ns/iter",
            "extra": "iterations: 417392\ncpu: 1676.927444704264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1232.9225140253454,
            "unit": "ns/iter",
            "extra": "iterations: 568077\ncpu: 1232.896420731691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1297.8037200359918,
            "unit": "ns/iter",
            "extra": "iterations: 538812\ncpu: 1297.7563602889381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1044.411580639068,
            "unit": "ns/iter",
            "extra": "iterations: 671431\ncpu: 1044.389520293218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8000.481860549518,
            "unit": "ns/iter",
            "extra": "iterations: 87544\ncpu: 8000.28328611899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18518.347256608766,
            "unit": "ns/iter",
            "extra": "iterations: 37563\ncpu: 18517.89793147527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4458.46006511683,
            "unit": "ns/iter",
            "extra": "iterations: 157256\ncpu: 4458.185379254242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4436.156194271341,
            "unit": "ns/iter",
            "extra": "iterations: 157573\ncpu: 4436.046784664872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4435.0648081765685,
            "unit": "ns/iter",
            "extra": "iterations: 157619\ncpu: 4434.9513700759135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9175.305228587387,
            "unit": "ns/iter",
            "extra": "iterations: 76120\ncpu: 9175.097214923873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8303.407324365035,
            "unit": "ns/iter",
            "extra": "iterations: 84294\ncpu: 8302.99902721431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3219.2162291147033,
            "unit": "ns/iter",
            "extra": "iterations: 217917\ncpu: 3219.141691561459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16149.605831158346,
            "unit": "ns/iter",
            "extra": "iterations: 43319\ncpu: 16149.163184745716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13011.284941072414,
            "unit": "ns/iter",
            "extra": "iterations: 54134\ncpu: 13011.000480289542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12901.538487376232,
            "unit": "ns/iter",
            "extra": "iterations: 53589\ncpu: 12901.233462091279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13290.641567407549,
            "unit": "ns/iter",
            "extra": "iterations: 52724\ncpu: 13290.00455200685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28135.683950321105,
            "unit": "ns/iter",
            "extra": "iterations: 24879\ncpu: 28135.06973752993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97538.30144806961,
            "unit": "ns/iter",
            "extra": "iterations: 7182\ncpu: 97535.75605680839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84127.75977586281,
            "unit": "ns/iter",
            "extra": "iterations: 8209\ncpu: 84125.81313192843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83234.42037080467,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 83229.95008319513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84170.47859968901,
            "unit": "ns/iter",
            "extra": "iterations: 8341\ncpu: 84169.4880709744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53874.73351775599,
            "unit": "ns/iter",
            "extra": "iterations: 13014\ncpu: 53874.0817581072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83489.02756892265,
            "unit": "ns/iter",
            "extra": "iterations: 8379\ncpu: 83486.95548394733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3025.2006011102517,
            "unit": "ns/iter",
            "extra": "iterations: 230906\ncpu: 3025.1271080006672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15010.38592525526,
            "unit": "ns/iter",
            "extra": "iterations: 46452\ncpu: 15009.8381124602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12264.227032062403,
            "unit": "ns/iter",
            "extra": "iterations: 57983\ncpu: 12263.960126243928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12061.912879696003,
            "unit": "ns/iter",
            "extra": "iterations: 58402\ncpu: 12061.775281668346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12604.955121864714,
            "unit": "ns/iter",
            "extra": "iterations: 55595\ncpu: 12604.800791438049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27002.294710810438,
            "unit": "ns/iter",
            "extra": "iterations: 25883\ncpu: 27001.56087006879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96395.13132713824,
            "unit": "ns/iter",
            "extra": "iterations: 7211\ncpu: 96391.1940091532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82148.69858657585,
            "unit": "ns/iter",
            "extra": "iterations: 8490\ncpu: 82146.3604240278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81459.83118392125,
            "unit": "ns/iter",
            "extra": "iterations: 8607\ncpu: 81457.62751248907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81641.13337989473,
            "unit": "ns/iter",
            "extra": "iterations: 8592\ncpu: 81639.35055865959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54963.86525935506,
            "unit": "ns/iter",
            "extra": "iterations: 12743\ncpu: 54961.79863454358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82764.36254417474,
            "unit": "ns/iter",
            "extra": "iterations: 8490\ncpu: 82760.51825677358 ns\nthreads: 1"
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
        "date": 1705575614166,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 679.5524869295423,
            "unit": "ns/iter",
            "extra": "iterations: 1027894\ncpu: 679.5343683298084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10665.82677307021,
            "unit": "ns/iter",
            "extra": "iterations: 77817\ncpu: 10665.424007607593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23833.448497974572,
            "unit": "ns/iter",
            "extra": "iterations: 35086\ncpu: 23832.74525451748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37203.77676836506,
            "unit": "ns/iter",
            "extra": "iterations: 22125\ncpu: 37201.600000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47345.49615000684,
            "unit": "ns/iter",
            "extra": "iterations: 17013\ncpu: 47341.897372597436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58546.584428989445,
            "unit": "ns/iter",
            "extra": "iterations: 14527\ncpu: 58542.59654436566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58451.27320000074,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58445.98999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67449.8428648991,
            "unit": "ns/iter",
            "extra": "iterations: 12887\ncpu: 67444.12974315204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77103.72122874936,
            "unit": "ns/iter",
            "extra": "iterations: 11296\ncpu: 77098.59242209629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 557.1855906911321,
            "unit": "ns/iter",
            "extra": "iterations: 1226360\ncpu: 556.8158615740895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 487.17661570751966,
            "unit": "ns/iter",
            "extra": "iterations: 1503428\ncpu: 487.1780357955288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 462.07337178084083,
            "unit": "ns/iter",
            "extra": "iterations: 1507337\ncpu: 462.05845142791577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 464.9553147363355,
            "unit": "ns/iter",
            "extra": "iterations: 1502464\ncpu: 464.9570305844263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 926.961306814555,
            "unit": "ns/iter",
            "extra": "iterations: 755792\ncpu: 926.9447149480284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4293.843724796104,
            "unit": "ns/iter",
            "extra": "iterations: 187221\ncpu: 4293.893847378232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19369.909519232002,
            "unit": "ns/iter",
            "extra": "iterations: 42661\ncpu: 19369.40531164298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15541.939902759503,
            "unit": "ns/iter",
            "extra": "iterations: 53064\ncpu: 15541.792929292922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14197.84809558396,
            "unit": "ns/iter",
            "extra": "iterations: 57918\ncpu: 14197.468835249862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14906.918072288414,
            "unit": "ns/iter",
            "extra": "iterations: 55195\ncpu: 14906.862940483714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46649.63289636927,
            "unit": "ns/iter",
            "extra": "iterations: 18537\ncpu: 46648.35194475917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 436035.33216603985,
            "unit": "ns/iter",
            "extra": "iterations: 1999\ncpu: 436032.8164082052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 359241.24500832835,
            "unit": "ns/iter",
            "extra": "iterations: 2404\ncpu: 359239.0183028291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 351377.53675283486,
            "unit": "ns/iter",
            "extra": "iterations: 2476\ncpu: 351362.96445880464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 356322.8482105884,
            "unit": "ns/iter",
            "extra": "iterations: 2431\ncpu: 356323.9819004531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 218995.05775075257,
            "unit": "ns/iter",
            "extra": "iterations: 3948\ncpu: 218991.74265450868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 352444.4881921831,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 352442.0602605872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1861695.3466934154,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1861437.8757515019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 737823.675527765,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 737806.6458170444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2473914.131720358,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2473612.9032258037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4383.387157867331,
            "unit": "ns/iter",
            "extra": "iterations: 186916\ncpu: 4383.217595069427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18737.926719636507,
            "unit": "ns/iter",
            "extra": "iterations: 44050\ncpu: 18737.64131668557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15059.169500521699,
            "unit": "ns/iter",
            "extra": "iterations: 54637\ncpu: 15059.201639914347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14519.212771576324,
            "unit": "ns/iter",
            "extra": "iterations: 56798\ncpu: 14518.96721715553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14789.391276308383,
            "unit": "ns/iter",
            "extra": "iterations: 55825\ncpu: 14789.19122257054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46864.529438081285,
            "unit": "ns/iter",
            "extra": "iterations: 17885\ncpu: 46864.07045009773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 457650.69439997507,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 457641.70666666736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 376084.57917381305,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 376065.14629948325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 369999.313933706,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 369978.97196261684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 367924.37929573446,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 367906.4488756905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 218586.5121219585,
            "unit": "ns/iter",
            "extra": "iterations: 4001\ncpu: 218570.63234191536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 367840.7487330957,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 367817.7364864889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1854602.4826883934,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1854558.0448065111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 714906.7614679117,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 714882.3394495414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4287.59982797056,
            "unit": "ns/iter",
            "extra": "iterations: 187177\ncpu: 4287.3723801535125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18958.908344357325,
            "unit": "ns/iter",
            "extra": "iterations: 43838\ncpu: 18958.082029289533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15121.873345970514,
            "unit": "ns/iter",
            "extra": "iterations: 54866\ncpu: 15120.92917289394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14530.613376719759,
            "unit": "ns/iter",
            "extra": "iterations: 57159\ncpu: 14530.00227435745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14857.079773869962,
            "unit": "ns/iter",
            "extra": "iterations: 55720\ncpu: 14856.261665470147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46707.73884177748,
            "unit": "ns/iter",
            "extra": "iterations: 17924\ncpu: 46706.28207989296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 441917.8940161971,
            "unit": "ns/iter",
            "extra": "iterations: 1972\ncpu: 441895.33468559885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 366011.4164922473,
            "unit": "ns/iter",
            "extra": "iterations: 2389\ncpu: 365988.15403934673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 360905.55366765417,
            "unit": "ns/iter",
            "extra": "iterations: 2413\ncpu: 360880.978035643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 362450.82860663487,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 362427.7846280314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 221662.5466464741,
            "unit": "ns/iter",
            "extra": "iterations: 3966\ncpu: 221655.29500756486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 363472.45828141744,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 363449.273557494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 310.08478384330743,
            "unit": "ns/iter",
            "extra": "iterations: 2245015\ncpu: 310.06518887401904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1643.5936578172327,
            "unit": "ns/iter",
            "extra": "iterations: 425784\ncpu: 1643.5619938748187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1303.6094600702477,
            "unit": "ns/iter",
            "extra": "iterations: 537607\ncpu: 1303.6132342026813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1287.6906011161732,
            "unit": "ns/iter",
            "extra": "iterations: 545086\ncpu: 1287.614798398782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1008.9927098372275,
            "unit": "ns/iter",
            "extra": "iterations: 694086\ncpu: 1008.926703607324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7990.63741740697,
            "unit": "ns/iter",
            "extra": "iterations: 87478\ncpu: 7989.949473010433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18426.21790518154,
            "unit": "ns/iter",
            "extra": "iterations: 37989\ncpu: 18425.09673852954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4443.166006265892,
            "unit": "ns/iter",
            "extra": "iterations: 156723\ncpu: 4442.795888286927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4425.411953000877,
            "unit": "ns/iter",
            "extra": "iterations: 158387\ncpu: 4425.052561131937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4473.528005066567,
            "unit": "ns/iter",
            "extra": "iterations: 156311\ncpu: 4471.447946721612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9238.255872680642,
            "unit": "ns/iter",
            "extra": "iterations: 76030\ncpu: 9238.09811916354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8327.73793709791,
            "unit": "ns/iter",
            "extra": "iterations: 84163\ncpu: 8327.646352910442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3172.733800874294,
            "unit": "ns/iter",
            "extra": "iterations: 220444\ncpu: 3172.5939467620074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15904.061478135856,
            "unit": "ns/iter",
            "extra": "iterations: 43609\ncpu: 15903.749226077296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12611.28464067489,
            "unit": "ns/iter",
            "extra": "iterations: 55354\ncpu: 12611.310835712004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12407.655080686998,
            "unit": "ns/iter",
            "extra": "iterations: 56390\ncpu: 12407.407341727238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12847.289667456664,
            "unit": "ns/iter",
            "extra": "iterations: 54459\ncpu: 12847.187792651162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28088.338425757527,
            "unit": "ns/iter",
            "extra": "iterations: 24939\ncpu: 28087.30903404318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97730.41852678687,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 97729.4642857158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83757.47181753349,
            "unit": "ns/iter",
            "extra": "iterations: 8374\ncpu: 83756.55600668717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 82023.52482353224,
            "unit": "ns/iter",
            "extra": "iterations: 8500\ncpu: 82022.50588235295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83414.86029935183,
            "unit": "ns/iter",
            "extra": "iterations: 8418\ncpu: 83413.35234022271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54211.016782140614,
            "unit": "ns/iter",
            "extra": "iterations: 12990\ncpu: 54208.51424172462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83892.97262074928,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 83892.30033476767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2990.0638276068958,
            "unit": "ns/iter",
            "extra": "iterations: 234209\ncpu: 2989.992698828829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14958.515839426138,
            "unit": "ns/iter",
            "extra": "iterations: 46782\ncpu: 14958.394254200408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12042.499261908515,
            "unit": "ns/iter",
            "extra": "iterations: 57581\ncpu: 12042.296938226264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11871.305014350637,
            "unit": "ns/iter",
            "extra": "iterations: 59230\ncpu: 11871.038325173102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12430.492102648755,
            "unit": "ns/iter",
            "extra": "iterations: 56348\ncpu: 12430.53524526148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27166.36763050974,
            "unit": "ns/iter",
            "extra": "iterations: 25765\ncpu: 27165.682126916105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96904.46642669782,
            "unit": "ns/iter",
            "extra": "iterations: 7223\ncpu: 96904.77640869345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82642.68552196724,
            "unit": "ns/iter",
            "extra": "iterations: 8468\ncpu: 82637.99008030156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81299.55009892001,
            "unit": "ns/iter",
            "extra": "iterations: 8593\ncpu: 81298.70825090316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82010.08225767798,
            "unit": "ns/iter",
            "extra": "iterations: 8522\ncpu: 82007.42783384223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56241.681643834825,
            "unit": "ns/iter",
            "extra": "iterations: 12775\ncpu: 56240.06262230933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 81723.02772555339,
            "unit": "ns/iter",
            "extra": "iterations: 8512\ncpu: 81722.20394736821 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}