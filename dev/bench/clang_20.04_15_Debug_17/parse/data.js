window.BENCHMARK_DATA = {
  "lastUpdate": 1702489592377,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-15 20.04 Debug c++-17": [
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
        "date": 1702489592031,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6718.838697965127,
            "unit": "ns/iter",
            "extra": "iterations: 104667\ncpu: 6718.646755902052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55538.52386789078,
            "unit": "ns/iter",
            "extra": "iterations: 14685\ncpu: 55534.933605720114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 87362.24300397295,
            "unit": "ns/iter",
            "extra": "iterations: 9827\ncpu: 87360.60852752617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 126694.44986012235,
            "unit": "ns/iter",
            "extra": "iterations: 6791\ncpu: 126690.36960683264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 166347.08754080956,
            "unit": "ns/iter",
            "extra": "iterations: 5209\ncpu: 166343.36724899203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 205695.04884990602,
            "unit": "ns/iter",
            "extra": "iterations: 4217\ncpu: 205682.66540194442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 245218.48301245642,
            "unit": "ns/iter",
            "extra": "iterations: 3532\ncpu: 245211.91959229897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 284289.5085078276,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 284275.4253926701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 322723.8409933055,
            "unit": "ns/iter",
            "extra": "iterations: 2698\ncpu: 322714.9740548554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5559.117093241257,
            "unit": "ns/iter",
            "extra": "iterations: 125652\ncpu: 5558.834718110329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4545.781257115973,
            "unit": "ns/iter",
            "extra": "iterations: 153701\ncpu: 4545.681550542939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4537.23023902734,
            "unit": "ns/iter",
            "extra": "iterations: 153497\ncpu: 4537.172713473231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4573.907448782555,
            "unit": "ns/iter",
            "extra": "iterations: 153072\ncpu: 4573.69995818961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7219.969648891677,
            "unit": "ns/iter",
            "extra": "iterations: 97064\ncpu: 7219.82197313114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23782.356097274987,
            "unit": "ns/iter",
            "extra": "iterations: 34089\ncpu: 23781.829915808645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 124596.35897810744,
            "unit": "ns/iter",
            "extra": "iterations: 6850\ncpu: 124593.89781021923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 96366.76633506623,
            "unit": "ns/iter",
            "extra": "iterations: 8846\ncpu: 96361.768030748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 96093.33528749675,
            "unit": "ns/iter",
            "extra": "iterations: 8870\ncpu: 96088.60202931242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 90455.70531246725,
            "unit": "ns/iter",
            "extra": "iterations: 9393\ncpu: 90452.59235600995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 184827.8138163512,
            "unit": "ns/iter",
            "extra": "iterations: 4748\ncpu: 184823.0412805394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1580776.679180982,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1580692.832764507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1237250.685752365,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1237201.5978695066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1237589.2106667077,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1237545.6000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1229170.6640211795,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 1229123.6772486772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 691262.1551723743,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 691231.6341829085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1199615.6059819022,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 1199547.0741222366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 31983.34451892743,
            "unit": "ns/iter",
            "extra": "iterations: 25807\ncpu: 31981.93900879607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 160099.74346225118,
            "unit": "ns/iter",
            "extra": "iterations: 5430\ncpu: 160093.18600368354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 120614.14746092744,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 120607.75669642849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 124384.15076392311,
            "unit": "ns/iter",
            "extra": "iterations: 6938\ncpu: 124379.561833381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 119319.2633259308,
            "unit": "ns/iter",
            "extra": "iterations: 7204\ncpu: 119314.63076068816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 210176.23715608148,
            "unit": "ns/iter",
            "extra": "iterations: 4107\ncpu: 210165.64402240101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1623599.6556521137,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1623516.3478260788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1278356.7931506534,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1278288.6301369846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1277546.735253925,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1277506.995884767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1254460.8000000054,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1254395.2702702694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 723399.7936137115,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 723372.5077881636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1233429.6061008845,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 1233354.1114058364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5942999.044585811,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 5942768.1528662415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2803971.8018018557,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2803860.060060044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22112.846720469035,
            "unit": "ns/iter",
            "extra": "iterations: 36926\ncpu: 22112.02404809616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 121385.11709801239,
            "unit": "ns/iter",
            "extra": "iterations: 7071\ncpu: 121380.87964927168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97616.15879339185,
            "unit": "ns/iter",
            "extra": "iterations: 8785\ncpu: 97611.79282868563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94691.5317002837,
            "unit": "ns/iter",
            "extra": "iterations: 9022\ncpu: 94687.30880070948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 91629.51993569317,
            "unit": "ns/iter",
            "extra": "iterations: 9330\ncpu: 91623.80493033228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 186624.00366695313,
            "unit": "ns/iter",
            "extra": "iterations: 4636\ncpu: 186617.75237273553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1582237.2665534373,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1582176.4006791168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1234094.7063493363,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 1234040.2116402125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1242512.346205109,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1242453.7949400814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1217896.3342036419,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 1217854.046997383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 684004.274797929,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 683982.2189566486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1191985.748724539,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 1191936.224489794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2545.257443266564,
            "unit": "ns/iter",
            "extra": "iterations: 275719\ncpu: 2545.1528548993633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17221.74514479687,
            "unit": "ns/iter",
            "extra": "iterations: 40678\ncpu: 17221.082649097847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13271.443101158187,
            "unit": "ns/iter",
            "extra": "iterations: 52690\ncpu: 13270.893907762389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13732.849332522417,
            "unit": "ns/iter",
            "extra": "iterations: 51013\ncpu: 13732.217277948796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10195.639412815055,
            "unit": "ns/iter",
            "extra": "iterations: 68871\ncpu: 10195.147449579592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63016.55524588982,
            "unit": "ns/iter",
            "extra": "iterations: 11123\ncpu: 63012.50561898771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 110753.01121111773,
            "unit": "ns/iter",
            "extra": "iterations: 6333\ncpu: 110749.62892783804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27097.03051606587,
            "unit": "ns/iter",
            "extra": "iterations: 25888\ncpu: 27096.18742274403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27527.75543989121,
            "unit": "ns/iter",
            "extra": "iterations: 25552\ncpu: 27526.815904821553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27657.12455376551,
            "unit": "ns/iter",
            "extra": "iterations: 25491\ncpu: 27655.976619199046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 53091.96613123342,
            "unit": "ns/iter",
            "extra": "iterations: 13198\ncpu: 53089.90756175166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 50762.75172363317,
            "unit": "ns/iter",
            "extra": "iterations: 13779\ncpu: 50760.708324261504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19408.3475102587,
            "unit": "ns/iter",
            "extra": "iterations: 36068\ncpu: 19407.422091604716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 95172.12479585518,
            "unit": "ns/iter",
            "extra": "iterations: 7348\ncpu: 95168.59009254331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 78400.55055425664,
            "unit": "ns/iter",
            "extra": "iterations: 8931\ncpu: 78397.03280707724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 76790.59740972507,
            "unit": "ns/iter",
            "extra": "iterations: 9111\ncpu: 76787.5205795191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 76783.4881630852,
            "unit": "ns/iter",
            "extra": "iterations: 9124\ncpu: 76778.74835598416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 120008.23820998607,
            "unit": "ns/iter",
            "extra": "iterations: 5810\ncpu: 120002.56454388841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 469815.5408804873,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 469787.0719776426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 380195.0946166513,
            "unit": "ns/iter",
            "extra": "iterations: 1839\ncpu: 380180.36976617813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 380584.77186307305,
            "unit": "ns/iter",
            "extra": "iterations: 1841\ncpu: 380567.84356327687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 386417.69603524427,
            "unit": "ns/iter",
            "extra": "iterations: 1816\ncpu: 386408.8105726896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 251704.56058971572,
            "unit": "ns/iter",
            "extra": "iterations: 2781\ncpu: 251689.82380438992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 378166.13189189974,
            "unit": "ns/iter",
            "extra": "iterations: 1850\ncpu: 378155.1891891904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20248.48496837764,
            "unit": "ns/iter",
            "extra": "iterations: 34627\ncpu: 20247.520720824887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 99728.94167022864,
            "unit": "ns/iter",
            "extra": "iterations: 7029\ncpu: 99726.57561530806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 82136.80492667596,
            "unit": "ns/iter",
            "extra": "iterations: 8525\ncpu: 82130.25219941366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 82380.08346086183,
            "unit": "ns/iter",
            "extra": "iterations: 8495\ncpu: 82374.9735138325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 81892.35405469396,
            "unit": "ns/iter",
            "extra": "iterations: 8558\ncpu: 81888.6188361773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 123412.51857721146,
            "unit": "ns/iter",
            "extra": "iterations: 5679\ncpu: 123408.92762810325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 469110.8556078382,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 469094.15715245355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 381498.9296618983,
            "unit": "ns/iter",
            "extra": "iterations: 1834\ncpu: 381483.3151581281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 390179.81382387556,
            "unit": "ns/iter",
            "extra": "iterations: 1794\ncpu: 390164.8829431506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 379725.66015204403,
            "unit": "ns/iter",
            "extra": "iterations: 1842\ncpu: 379710.694896848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 256546.00146630936,
            "unit": "ns/iter",
            "extra": "iterations: 2728\ncpu: 256527.3826979511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 381714.56345734186,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 381698.5776805316 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}