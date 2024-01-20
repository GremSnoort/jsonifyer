window.BENCHMARK_DATA = {
  "lastUpdate": 1705777736533,
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
        "date": 1702492243592,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6680.245759145662,
            "unit": "ns/iter",
            "extra": "iterations: 104578\ncpu: 6679.912601120695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55851.158513125745,
            "unit": "ns/iter",
            "extra": "iterations: 14554\ncpu: 55847.20351793322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 87727.14586527883,
            "unit": "ns/iter",
            "extra": "iterations: 9783\ncpu: 87723.73505059798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 126864.90644827374,
            "unit": "ns/iter",
            "extra": "iterations: 6777\ncpu: 126862.03334808907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 167338.185313994,
            "unit": "ns/iter",
            "extra": "iterations: 5175\ncpu: 167330.5314009662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 206127.90844064328,
            "unit": "ns/iter",
            "extra": "iterations: 4194\ncpu: 206118.3595612779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 245667.19960134235,
            "unit": "ns/iter",
            "extra": "iterations: 3512\ncpu: 245643.33712984037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 285383.7077024091,
            "unit": "ns/iter",
            "extra": "iterations: 3038\ncpu: 285367.18235681363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 325010.056264064,
            "unit": "ns/iter",
            "extra": "iterations: 2666\ncpu: 324989.6099024756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5514.7338900078685,
            "unit": "ns/iter",
            "extra": "iterations: 127064\ncpu: 5514.565888056414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4441.856390037308,
            "unit": "ns/iter",
            "extra": "iterations: 157503\ncpu: 4441.862059770297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4438.20572327273,
            "unit": "ns/iter",
            "extra": "iterations: 156414\ncpu: 4438.033040520671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4524.572161158597,
            "unit": "ns/iter",
            "extra": "iterations: 155028\ncpu: 4524.440101143017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7154.997156155042,
            "unit": "ns/iter",
            "extra": "iterations: 97755\ncpu: 7154.5005370569415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23910.412773874992,
            "unit": "ns/iter",
            "extra": "iterations: 33866\ncpu: 23910.0572845922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126489.7626344478,
            "unit": "ns/iter",
            "extra": "iterations: 6787\ncpu: 126480.56578753475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 95514.01097669968,
            "unit": "ns/iter",
            "extra": "iterations: 8928\ncpu: 95512.8920250897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 94327.91337453562,
            "unit": "ns/iter",
            "extra": "iterations: 9062\ncpu: 94322.64400794514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 91362.19602150812,
            "unit": "ns/iter",
            "extra": "iterations: 9300\ncpu: 91360.97849462346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 187744.36187020713,
            "unit": "ns/iter",
            "extra": "iterations: 4684\ncpu: 187737.98035866782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1539758.0918195487,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1539759.4323873078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1209437.1057441742,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 1209360.0522193208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1214157.967277427,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 1214140.8376963367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1199958.1306596969,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 1199895.6015523935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 685756.6035634466,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 685731.4773570906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1173332.4165604946,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 1173218.3439490455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 31171.194452864027,
            "unit": "ns/iter",
            "extra": "iterations: 26392\ncpu: 31170.146256441367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158633.90980895646,
            "unit": "ns/iter",
            "extra": "iterations: 5444\ncpu: 158625.90007347535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123657.00784593746,
            "unit": "ns/iter",
            "extra": "iterations: 7010\ncpu: 123651.34094151207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 126414.87161469138,
            "unit": "ns/iter",
            "extra": "iterations: 6831\ncpu: 126405.82637973933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121252.87942961261,
            "unit": "ns/iter",
            "extra": "iterations: 7083\ncpu: 121245.75744740928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 208477.79281029923,
            "unit": "ns/iter",
            "extra": "iterations: 4117\ncpu: 208465.07165411604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1591353.852233688,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1591280.4123711362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1236553.7573332402,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1236453.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1265707.7879616793,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1265677.4281805775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1232190.7019867052,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1232131.3907284793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 717175.787037063,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 717114.6604938286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1211251.009126375,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 1211177.1838331134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5946947.569619808,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5946746.202531628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2748512.3852941613,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2748423.82352941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 21533.598683342916,
            "unit": "ns/iter",
            "extra": "iterations: 37975\ncpu: 21532.9321922317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 119242.09084614369,
            "unit": "ns/iter",
            "extra": "iterations: 7221\ncpu: 119239.16355075409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 95263.22536932296,
            "unit": "ns/iter",
            "extra": "iterations: 9003\ncpu: 95260.29101410594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 93600.63506280666,
            "unit": "ns/iter",
            "extra": "iterations: 9155\ncpu: 93596.29710540675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92810.90367717923,
            "unit": "ns/iter",
            "extra": "iterations: 9219\ncpu: 92805.04393101245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 190589.4818321923,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 190575.37987227444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1549828.722591389,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1549739.368770757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1211140.2129869622,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 1211017.9220779222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1208844.5058365932,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 1208731.9066147949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1196379.1452441425,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 1196263.3676092504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 684367.4088560968,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 684333.2103321058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1172113.5195460308,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 1172016.141235819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2564.7179361290487,
            "unit": "ns/iter",
            "extra": "iterations: 272924\ncpu: 2564.5487388430524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17180.502501360163,
            "unit": "ns/iter",
            "extra": "iterations: 40378\ncpu: 17179.525979493905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13350.947927004645,
            "unit": "ns/iter",
            "extra": "iterations: 52388\ncpu: 13350.46766435057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12727.033799237815,
            "unit": "ns/iter",
            "extra": "iterations: 55090\ncpu: 12725.759666001115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10198.950135201232,
            "unit": "ns/iter",
            "extra": "iterations: 68786\ncpu: 10198.17113947598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63707.21832517072,
            "unit": "ns/iter",
            "extra": "iterations: 11034\ncpu: 63701.794453507515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 103592.41599880734,
            "unit": "ns/iter",
            "extra": "iterations: 6738\ncpu: 103592.6090828145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 26851.657188901772,
            "unit": "ns/iter",
            "extra": "iterations: 26061\ncpu: 26851.206784083486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27426.958713616434,
            "unit": "ns/iter",
            "extra": "iterations: 25529\ncpu: 27427.000665909316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 26815.487882384263,
            "unit": "ns/iter",
            "extra": "iterations: 26119\ncpu: 26814.414793828208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56213.30321493981,
            "unit": "ns/iter",
            "extra": "iterations: 12473\ncpu: 56210.51070311877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 50365.660392269565,
            "unit": "ns/iter",
            "extra": "iterations: 13919\ncpu: 50364.595157698044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 18670.506078377697,
            "unit": "ns/iter",
            "extra": "iterations: 37510\ncpu: 18669.693415089336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 93770.04972524039,
            "unit": "ns/iter",
            "extra": "iterations: 7461\ncpu: 93766.97493633654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 76448.08489741833,
            "unit": "ns/iter",
            "extra": "iterations: 9164\ncpu: 76444.9367088614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 75544.72145478436,
            "unit": "ns/iter",
            "extra": "iterations: 9266\ncpu: 75537.40556874643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 75896.70037045314,
            "unit": "ns/iter",
            "extra": "iterations: 9178\ncpu: 75890.53170625359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 117729.78515035204,
            "unit": "ns/iter",
            "extra": "iterations: 5953\ncpu: 117719.70435074766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 465411.35861609457,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 465391.2175648707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 385161.11159978824,
            "unit": "ns/iter",
            "extra": "iterations: 1819\ncpu: 385124.95876855147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 372265.8636121408,
            "unit": "ns/iter",
            "extra": "iterations: 1877\ncpu: 372258.7639850832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 382161.33859554003,
            "unit": "ns/iter",
            "extra": "iterations: 1837\ncpu: 382151.98693522613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 248686.36982881435,
            "unit": "ns/iter",
            "extra": "iterations: 2804\ncpu: 248676.212553493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 376358.19344437524,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 376343.5249865688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 19728.871904665277,
            "unit": "ns/iter",
            "extra": "iterations: 35497\ncpu: 19728.501000084532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 97441.12442589218,
            "unit": "ns/iter",
            "extra": "iterations: 7185\ncpu: 97435.22616562281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 79768.87101910709,
            "unit": "ns/iter",
            "extra": "iterations: 8792\ncpu: 79764.87716105602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 81603.3053452897,
            "unit": "ns/iter",
            "extra": "iterations: 8587\ncpu: 81598.10178176359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 81067.20496173346,
            "unit": "ns/iter",
            "extra": "iterations: 8626\ncpu: 81063.42453049004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128204.48786066103,
            "unit": "ns/iter",
            "extra": "iterations: 5684\ncpu: 128202.77973258276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 461140.0678524543,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 461122.9907773397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 379363.0048727366,
            "unit": "ns/iter",
            "extra": "iterations: 1847\ncpu: 379331.0774228498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 399476.0429042916,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 398837.29372937675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 378939.756903123,
            "unit": "ns/iter",
            "extra": "iterations: 1847\ncpu: 378911.04493773135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 254926.37077826608,
            "unit": "ns/iter",
            "extra": "iterations: 2724\ncpu: 254906.24082232016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 378391.5654054073,
            "unit": "ns/iter",
            "extra": "iterations: 1850\ncpu: 378377.89189189154 ns\nthreads: 1"
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
        "date": 1702503261338,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6601.0727927456255,
            "unit": "ns/iter",
            "extra": "iterations: 106082\ncpu: 6600.533549518297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55067.52685559648,
            "unit": "ns/iter",
            "extra": "iterations: 14820\ncpu: 55065.35087719299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 86683.95802993498,
            "unit": "ns/iter",
            "extra": "iterations: 9888\ncpu: 86680.82524271845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 125730.10329188681,
            "unit": "ns/iter",
            "extra": "iterations: 6835\ncpu: 125725.7937088514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 165233.50657768085,
            "unit": "ns/iter",
            "extra": "iterations: 5245\ncpu: 165223.90848427077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 204016.06816038964,
            "unit": "ns/iter",
            "extra": "iterations: 4240\ncpu: 204007.28773584895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 242750.78717446196,
            "unit": "ns/iter",
            "extra": "iterations: 3571\ncpu: 242742.6771212546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 282193.9321428509,
            "unit": "ns/iter",
            "extra": "iterations: 3080\ncpu: 282187.07792207756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 319557.8381162656,
            "unit": "ns/iter",
            "extra": "iterations: 2718\ncpu: 319545.51140544517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5411.961131727252,
            "unit": "ns/iter",
            "extra": "iterations: 129077\ncpu: 5411.893675867894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4516.091962103839,
            "unit": "ns/iter",
            "extra": "iterations: 155053\ncpu: 4515.8868257950535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4525.161708343157,
            "unit": "ns/iter",
            "extra": "iterations: 154723\ncpu: 4524.921957304343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4491.482817780967,
            "unit": "ns/iter",
            "extra": "iterations: 155626\ncpu: 4491.308650225549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7190.886928512788,
            "unit": "ns/iter",
            "extra": "iterations: 97487\ncpu: 7190.472575830622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24496.29232816284,
            "unit": "ns/iter",
            "extra": "iterations: 33069\ncpu: 24495.14348785872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126552.816173208,
            "unit": "ns/iter",
            "extra": "iterations: 6789\ncpu: 126546.48696420665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97223.12148367216,
            "unit": "ns/iter",
            "extra": "iterations: 8816\ncpu: 97218.27359346673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100896.51907699235,
            "unit": "ns/iter",
            "extra": "iterations: 8754\ncpu: 100892.5291295408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 90881.25776165414,
            "unit": "ns/iter",
            "extra": "iterations: 9373\ncpu: 90877.20046943345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 190566.09299803345,
            "unit": "ns/iter",
            "extra": "iterations: 4613\ncpu: 190553.69607630608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1537182.8835275108,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1537102.4958402626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1206553.361979168,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 1206496.8749999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1202306.396373047,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 1202262.1761658068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1197285.4180646297,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 1197225.161290319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 692091.690690684,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 692062.5375375377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1172304.5286623873,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 1172270.9554140123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32326.05714285685,
            "unit": "ns/iter",
            "extra": "iterations: 25480\ncpu: 32324.5094191522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 163418.39173303015,
            "unit": "ns/iter",
            "extra": "iterations: 5274\ncpu: 163412.1918847173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123511.48170383161,
            "unit": "ns/iter",
            "extra": "iterations: 6996\ncpu: 123506.38936535163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 128389.4023518852,
            "unit": "ns/iter",
            "extra": "iterations: 6718\ncpu: 128386.75200952687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 115667.16751883706,
            "unit": "ns/iter",
            "extra": "iterations: 7432\ncpu: 115663.53606027967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 210994.13855570465,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 210987.8090575266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1569785.1385135585,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1569712.837837842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1238948.1733333317,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1238898.8000000059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1251900.2398921547,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1251855.3908355746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1229278.2311757372,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 1229217.3051519163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 717791.9752895066,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 717755.212355213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1204911.9337662687,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 1204873.7662337667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5969617.775641668,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5969387.820512814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2757889.399408305,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2757801.183431959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22510.313655878166,
            "unit": "ns/iter",
            "extra": "iterations: 36336\ncpu: 22509.651585204723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 121877.85692112768,
            "unit": "ns/iter",
            "extra": "iterations: 7087\ncpu: 121875.56088612953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 98349.1419206381,
            "unit": "ns/iter",
            "extra": "iterations: 8695\ncpu: 98346.77400805018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96844.16553825099,
            "unit": "ns/iter",
            "extra": "iterations: 8862\ncpu: 96840.57774768633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 91543.43384943932,
            "unit": "ns/iter",
            "extra": "iterations: 9365\ncpu: 91541.36679124359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 192605.164076387,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 192599.5559502664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1551098.642737949,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1551030.3839732984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1201469.1288660527,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 1201434.4072164972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1205450.606727129,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 1205412.160413966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1192299.3435503556,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 1192269.6040868524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 682082.7873900125,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 682059.017595304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1174385.6226414794,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 1174360.503144655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2584.4005875252246,
            "unit": "ns/iter",
            "extra": "iterations: 270967\ncpu: 2584.3279808980565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17275.012449157533,
            "unit": "ns/iter",
            "extra": "iterations: 40565\ncpu: 17274.719585849914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 12417.751817957746,
            "unit": "ns/iter",
            "extra": "iterations: 56382\ncpu: 12417.322904473067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13947.122138011931,
            "unit": "ns/iter",
            "extra": "iterations: 50140\ncpu: 13946.786996410026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10206.18387662728,
            "unit": "ns/iter",
            "extra": "iterations: 68410\ncpu: 10206.002046484413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66878.74392789551,
            "unit": "ns/iter",
            "extra": "iterations: 10540\ncpu: 66876.99240986728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 108962.80462444633,
            "unit": "ns/iter",
            "extra": "iterations: 6444\ncpu: 108959.15580384871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 26904.58447065952,
            "unit": "ns/iter",
            "extra": "iterations: 25938\ncpu: 26903.462101935467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 26539.29002504917,
            "unit": "ns/iter",
            "extra": "iterations: 26346\ncpu: 26538.810445608357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 26025.231624342483,
            "unit": "ns/iter",
            "extra": "iterations: 26897\ncpu: 26024.433951741878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55662.61954624509,
            "unit": "ns/iter",
            "extra": "iterations: 12606\ncpu: 55662.39885768725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 50313.3550432263,
            "unit": "ns/iter",
            "extra": "iterations: 13880\ncpu: 50312.478386166964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19263.13833883174,
            "unit": "ns/iter",
            "extra": "iterations: 36360\ncpu: 19262.48349834999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 94713.489120153,
            "unit": "ns/iter",
            "extra": "iterations: 7399\ncpu: 94710.42032707152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 77557.32693374419,
            "unit": "ns/iter",
            "extra": "iterations: 9011\ncpu: 77553.97847075778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 75230.89988170854,
            "unit": "ns/iter",
            "extra": "iterations: 9299\ncpu: 75229.54081084058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 75651.12850668863,
            "unit": "ns/iter",
            "extra": "iterations: 9268\ncpu: 75650.78765645258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 116063.05572138335,
            "unit": "ns/iter",
            "extra": "iterations: 6030\ncpu: 116059.20398009988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 457227.1793193303,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 457225.58900523465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 376065.842557763,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 376061.09618484764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 372357.20459401485,
            "unit": "ns/iter",
            "extra": "iterations: 1872\ncpu: 372348.5042734977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 372130.2791068456,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 372124.7740563554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 244207.43743466798,
            "unit": "ns/iter",
            "extra": "iterations: 2869\ncpu: 244200.62739630605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 368404.5708267651,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 368395.997893629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 19892.815511064688,
            "unit": "ns/iter",
            "extra": "iterations: 35162\ncpu: 19892.167681019524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 97364.51083634842,
            "unit": "ns/iter",
            "extra": "iterations: 7198\ncpu: 97364.3373159211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 80605.8943313849,
            "unit": "ns/iter",
            "extra": "iterations: 8697\ncpu: 80605.57663562146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 80887.24647725586,
            "unit": "ns/iter",
            "extra": "iterations: 8658\ncpu: 80883.945483946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 80984.79646119419,
            "unit": "ns/iter",
            "extra": "iterations: 8647\ncpu: 80982.93049612503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 122315.02830021514,
            "unit": "ns/iter",
            "extra": "iterations: 5689\ncpu: 122309.79082439838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 458518.2195282088,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 458504.71821756754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 371857.0701009359,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 371846.9994689267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 379342.1024811289,
            "unit": "ns/iter",
            "extra": "iterations: 1854\ncpu: 379335.7065803696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 370914.5887652462,
            "unit": "ns/iter",
            "extra": "iterations: 1887\ncpu: 370905.5113937497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 259739.49409234535,
            "unit": "ns/iter",
            "extra": "iterations: 2793\ncpu: 259735.30254207202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 371249.5146980129,
            "unit": "ns/iter",
            "extra": "iterations: 1871\ncpu: 371248.0491715681 ns\nthreads: 1"
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
        "date": 1705574917722,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6789.693197418126,
            "unit": "ns/iter",
            "extra": "iterations: 102711\ncpu: 6789.233869789994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57579.65514824383,
            "unit": "ns/iter",
            "extra": "iterations: 14267\ncpu: 57577.850984790086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97058.5974736734,
            "unit": "ns/iter",
            "extra": "iterations: 9500\ncpu: 97054.07368421051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 131321.2954891971,
            "unit": "ns/iter",
            "extra": "iterations: 6562\ncpu: 131314.47729350813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 172548.68977227982,
            "unit": "ns/iter",
            "extra": "iterations: 5006\ncpu: 172540.27167399126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 213143.02118224173,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 213134.9014778325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 253591.46456925385,
            "unit": "ns/iter",
            "extra": "iterations: 3401\ncpu: 253581.56424580995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 294551.89510962775,
            "unit": "ns/iter",
            "extra": "iterations: 2965\ncpu: 294536.05396290036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 333325.31492135616,
            "unit": "ns/iter",
            "extra": "iterations: 2607\ncpu: 333309.47449175344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5610.4059589421295,
            "unit": "ns/iter",
            "extra": "iterations: 125190\ncpu: 5610.095055515609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4740.814297116469,
            "unit": "ns/iter",
            "extra": "iterations: 149093\ncpu: 4740.419067293559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4650.377999734143,
            "unit": "ns/iter",
            "extra": "iterations: 150180\ncpu: 4650.000665867625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4686.242099764531,
            "unit": "ns/iter",
            "extra": "iterations: 149331\ncpu: 4685.871654244596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7279.980180313046,
            "unit": "ns/iter",
            "extra": "iterations: 95612\ncpu: 7279.614483537623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23886.607760139268,
            "unit": "ns/iter",
            "extra": "iterations: 34020\ncpu: 23884.838330393897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 128509.81424054557,
            "unit": "ns/iter",
            "extra": "iterations: 6643\ncpu: 128500.15053439695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 96687.73102515058,
            "unit": "ns/iter",
            "extra": "iterations: 8867\ncpu: 96680.00451110872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 95495.06667411028,
            "unit": "ns/iter",
            "extra": "iterations: 8954\ncpu: 95490.49586776826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 92163.64557373314,
            "unit": "ns/iter",
            "extra": "iterations: 9229\ncpu: 92158.28367103687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 184812.3224008665,
            "unit": "ns/iter",
            "extra": "iterations: 4665\ncpu: 184797.3847802787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1621816.8191305622,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1621702.7826086928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1272662.1243168628,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1272573.087431695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1263077.2108843834,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1262997.5510204108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1242061.7970429892,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 1241980.779569896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 704396.2768878245,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 704350.2669717766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1223960.4637682391,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 1223885.6389986859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 31914.865258106616,
            "unit": "ns/iter",
            "extra": "iterations: 25842\ncpu: 31911.299435028308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 160004.5442138593,
            "unit": "ns/iter",
            "extra": "iterations: 5349\ncpu: 159993.71845204686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 121443.46339750433,
            "unit": "ns/iter",
            "extra": "iterations: 7117\ncpu: 121433.30054798385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 123399.59231651142,
            "unit": "ns/iter",
            "extra": "iterations: 6976\ncpu: 123393.96502293585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 120537.34016854498,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 120529.01685393267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 203058.86647795208,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 203044.35008256734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1644586.5795052245,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1644468.3745583023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1291767.1198871543,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1291694.499294785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1311501.939351104,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1311405.641748942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1284618.1479944715,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1284540.387275244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 737884.7763679334,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 737802.379064232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1255535.5905405846,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1255461.4864864917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6068261.305194761,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6067782.46753246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2886950.076923103,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2886733.2307692314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22112.028184648032,
            "unit": "ns/iter",
            "extra": "iterations: 36935\ncpu: 22110.9760389875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 124218.02365838813,
            "unit": "ns/iter",
            "extra": "iterations: 6932\ncpu: 124208.58338141894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 96455.28397840745,
            "unit": "ns/iter",
            "extra": "iterations: 8888\ncpu: 96448.22232223234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98136.02997711819,
            "unit": "ns/iter",
            "extra": "iterations: 8740\ncpu: 98129.53089244802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94734.24273352149,
            "unit": "ns/iter",
            "extra": "iterations: 9014\ncpu: 94727.612602618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 187395.78676153062,
            "unit": "ns/iter",
            "extra": "iterations: 4638\ncpu: 187384.02328589943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1597154.3647260068,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1597045.2054794577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1251758.112600624,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 1251666.0857908828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1281859.7951482572,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1281776.1455525623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1234861.6677685687,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1234788.9256198322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 709325.7152619379,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 709273.5763097949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1215035.6344646187,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 1214974.9347258413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2557.142827320196,
            "unit": "ns/iter",
            "extra": "iterations: 273043\ncpu: 2557.000911944263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17726.91024407499,
            "unit": "ns/iter",
            "extra": "iterations: 39496\ncpu: 17725.455742353573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14104.357665186086,
            "unit": "ns/iter",
            "extra": "iterations: 53606\ncpu: 14103.618997873307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13902.763667031224,
            "unit": "ns/iter",
            "extra": "iterations: 50395\ncpu: 13902.651056652421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10483.925236069648,
            "unit": "ns/iter",
            "extra": "iterations: 65553\ncpu: 10482.928317544569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63203.50665926559,
            "unit": "ns/iter",
            "extra": "iterations: 10812\ncpu: 63199.09359970437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 106881.31166056372,
            "unit": "ns/iter",
            "extra": "iterations: 6552\ncpu: 106873.68742368765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27798.356016992715,
            "unit": "ns/iter",
            "extra": "iterations: 25187\ncpu: 27796.295708103553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27888.79131647197,
            "unit": "ns/iter",
            "extra": "iterations: 25105\ncpu: 27886.739693288266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27289.25617802366,
            "unit": "ns/iter",
            "extra": "iterations: 25615\ncpu: 27287.823540893976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59136.46742615492,
            "unit": "ns/iter",
            "extra": "iterations: 11850\ncpu: 59135.99999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52074.062137652545,
            "unit": "ns/iter",
            "extra": "iterations: 13454\ncpu: 52072.417125018634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19693.894337598682,
            "unit": "ns/iter",
            "extra": "iterations: 35462\ncpu: 19692.671028142744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 95141.2362995068,
            "unit": "ns/iter",
            "extra": "iterations: 7372\ncpu: 95133.39663591869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 76940.41056329383,
            "unit": "ns/iter",
            "extra": "iterations: 9107\ncpu: 76935.75271769035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 75956.48170267668,
            "unit": "ns/iter",
            "extra": "iterations: 9209\ncpu: 75950.55923553031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 76227.59169663246,
            "unit": "ns/iter",
            "extra": "iterations: 9177\ncpu: 76223.88580146088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 115908.66987232858,
            "unit": "ns/iter",
            "extra": "iterations: 6031\ncpu: 115901.42596584455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 479171.6000000492,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 479158.3783783802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 387540.9291643829,
            "unit": "ns/iter",
            "extra": "iterations: 1807\ncpu: 387514.4991698948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 383698.2047071803,
            "unit": "ns/iter",
            "extra": "iterations: 1827\ncpu: 383668.74657909095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 388498.1876734795,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 388474.4586340899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 252422.1091498662,
            "unit": "ns/iter",
            "extra": "iterations: 2776\ncpu: 252410.01440922075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 380446.0799347888,
            "unit": "ns/iter",
            "extra": "iterations: 1839\ncpu: 380418.3795541097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 19960.67244470896,
            "unit": "ns/iter",
            "extra": "iterations: 35133\ncpu: 19959.123900606333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 99480.96606302535,
            "unit": "ns/iter",
            "extra": "iterations: 7013\ncpu: 99473.26393839916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 82245.34995318663,
            "unit": "ns/iter",
            "extra": "iterations: 8544\ncpu: 82242.46254681604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 82236.46277407644,
            "unit": "ns/iter",
            "extra": "iterations: 8529\ncpu: 82235.77207175492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 80606.93234208848,
            "unit": "ns/iter",
            "extra": "iterations: 8676\ncpu: 80600.23052097637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 121463.74444831283,
            "unit": "ns/iter",
            "extra": "iterations: 5764\ncpu: 121459.88896599623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 472268.8486486652,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 472265.0675675689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 388624.19230770954,
            "unit": "ns/iter",
            "extra": "iterations: 1794\ncpu: 388621.23745819443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 414297.1655480509,
            "unit": "ns/iter",
            "extra": "iterations: 1788\ncpu: 414294.01565994904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 389119.2837312199,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 389115.9911160454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 258750.24990729298,
            "unit": "ns/iter",
            "extra": "iterations: 2697\ncpu: 258744.71635150132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 386025.21578364796,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 386017.99116997735 ns\nthreads: 1"
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
        "date": 1705772785687,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6543.532224353983,
            "unit": "ns/iter",
            "extra": "iterations: 104781\ncpu: 6543.422948817058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53913.97287258638,
            "unit": "ns/iter",
            "extra": "iterations: 15077\ncpu: 53911.328513630026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 84082.67969650966,
            "unit": "ns/iter",
            "extra": "iterations: 10412\ncpu: 84080.65693430656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 122396.3995268602,
            "unit": "ns/iter",
            "extra": "iterations: 7186\ncpu: 122393.38992485394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 161803.0829441427,
            "unit": "ns/iter",
            "extra": "iterations: 5353\ncpu: 161798.91649542324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 201380.50794715856,
            "unit": "ns/iter",
            "extra": "iterations: 4467\ncpu: 201369.7783747482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 238108.03884572067,
            "unit": "ns/iter",
            "extra": "iterations: 3604\ncpu: 238101.88679245283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 270972.8369043731,
            "unit": "ns/iter",
            "extra": "iterations: 3127\ncpu: 270963.4793732013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 315720.0840819473,
            "unit": "ns/iter",
            "extra": "iterations: 2783\ncpu: 315712.7560186845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5478.858520900651,
            "unit": "ns/iter",
            "extra": "iterations: 125955\ncpu: 5478.596324083999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4404.136854441171,
            "unit": "ns/iter",
            "extra": "iterations: 159571\ncpu: 4404.032687643743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4490.286144695466,
            "unit": "ns/iter",
            "extra": "iterations: 154006\ncpu: 4490.187395296295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4294.292911145199,
            "unit": "ns/iter",
            "extra": "iterations: 155286\ncpu: 4294.2866710456765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 6948.8223740917765,
            "unit": "ns/iter",
            "extra": "iterations: 97452\ncpu: 6948.472068300296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23121.128326969334,
            "unit": "ns/iter",
            "extra": "iterations: 34303\ncpu: 23120.432615223148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 125538.75689553493,
            "unit": "ns/iter",
            "extra": "iterations: 6816\ncpu: 125533.75880281694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97964.11447158706,
            "unit": "ns/iter",
            "extra": "iterations: 8762\ncpu: 97962.05204291259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 96846.14699839737,
            "unit": "ns/iter",
            "extra": "iterations: 8762\ncpu: 96845.32070303602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 91930.54836218811,
            "unit": "ns/iter",
            "extra": "iterations: 9067\ncpu: 91928.87393845817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 183091.97669095153,
            "unit": "ns/iter",
            "extra": "iterations: 4805\ncpu: 183089.49011446405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1535158.52631574,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1535131.7487266583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1227182.952000021,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1227150.2666666692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1188926.5644089775,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 1188894.0239043783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1191751.3897435,
            "unit": "ns/iter",
            "extra": "iterations: 780\ncpu: 1191707.8205128198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 674660.2392273109,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 674638.9301634469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1166110.2873710939,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 1166056.1855670125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 30927.1776999538,
            "unit": "ns/iter",
            "extra": "iterations: 26269\ncpu: 30926.281929270284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 159231.27666729884,
            "unit": "ns/iter",
            "extra": "iterations: 5353\ncpu: 159225.98542873128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 124378.39702668329,
            "unit": "ns/iter",
            "extra": "iterations: 6861\ncpu: 124376.30083078264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 127336.45753823603,
            "unit": "ns/iter",
            "extra": "iterations: 6865\ncpu: 127332.61471230876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123279.64380403464,
            "unit": "ns/iter",
            "extra": "iterations: 6940\ncpu: 123274.48126801189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 203643.22272296532,
            "unit": "ns/iter",
            "extra": "iterations: 4216\ncpu: 203634.89089184153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1600308.4974183268,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1600255.9380378737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1259755.6214765343,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 1259712.751677849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1254528.907356958,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 1254483.7874659433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1237349.5394020411,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1237300.271739135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 705263.3556740336,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 705240.8225437948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1198942.184594847,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 1198891.7662682615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5788042.98124993,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 5787936.250000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2740208.466858802,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2740143.2276657056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 21735.406387665822,
            "unit": "ns/iter",
            "extra": "iterations: 39044\ncpu: 21734.591742649238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 121350.77462483573,
            "unit": "ns/iter",
            "extra": "iterations: 7330\ncpu: 121347.24420190911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 95924.02811428785,
            "unit": "ns/iter",
            "extra": "iterations: 8750\ncpu: 95921.19999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98395.48975093814,
            "unit": "ns/iter",
            "extra": "iterations: 9074\ncpu: 98391.51421644237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 95629.60322407288,
            "unit": "ns/iter",
            "extra": "iterations: 9305\ncpu: 95626.31918323475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 182373.42186219632,
            "unit": "ns/iter",
            "extra": "iterations: 4876\ncpu: 182368.90894175554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1550565.225649244,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1550498.0519480566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1213932.8145780303,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 1213899.616368286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1200827.041343655,
            "unit": "ns/iter",
            "extra": "iterations: 774\ncpu: 1200785.1421188614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1185371.195302938,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1185349.9381953035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 667868.2489051545,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 667845.5474452556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1152331.9536340546,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 1152294.9874686676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2490.502717029648,
            "unit": "ns/iter",
            "extra": "iterations: 278061\ncpu: 2490.393834446418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16864.459059129815,
            "unit": "ns/iter",
            "extra": "iterations: 41047\ncpu: 16863.714765999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13662.441457149007,
            "unit": "ns/iter",
            "extra": "iterations: 54490\ncpu: 13662.20040374374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12971.28997739559,
            "unit": "ns/iter",
            "extra": "iterations: 54856\ncpu: 12970.985853871956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10052.30210783031,
            "unit": "ns/iter",
            "extra": "iterations: 69313\ncpu: 10052.273022376805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63304.01864314538,
            "unit": "ns/iter",
            "extra": "iterations: 10996\ncpu: 63301.846125863995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 108342.27946442418,
            "unit": "ns/iter",
            "extra": "iterations: 6423\ncpu: 108338.84477658429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 26587.649478255287,
            "unit": "ns/iter",
            "extra": "iterations: 26258\ncpu: 26586.43080204134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 26457.394912572076,
            "unit": "ns/iter",
            "extra": "iterations: 25907\ncpu: 26456.70282163119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 26211.69961659563,
            "unit": "ns/iter",
            "extra": "iterations: 26343\ncpu: 26210.796036897664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54926.90804690376,
            "unit": "ns/iter",
            "extra": "iterations: 12365\ncpu: 54925.426607359346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 49301.44707158771,
            "unit": "ns/iter",
            "extra": "iterations: 13830\ncpu: 49301.72812725954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 18802.52436785924,
            "unit": "ns/iter",
            "extra": "iterations: 36503\ncpu: 18802.177903186126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 92132.3527397163,
            "unit": "ns/iter",
            "extra": "iterations: 7300\ncpu: 92129.73972602778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 74615.73029502257,
            "unit": "ns/iter",
            "extra": "iterations: 9084\ncpu: 74611.91105240054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 75353.40383432194,
            "unit": "ns/iter",
            "extra": "iterations: 9754\ncpu: 75351.404551978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 74443.63925055838,
            "unit": "ns/iter",
            "extra": "iterations: 9447\ncpu: 74442.26738647236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 116542.87215441509,
            "unit": "ns/iter",
            "extra": "iterations: 6062\ncpu: 116540.6136588586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 453875.6405946599,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 453860.24563671654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 368352.3164754926,
            "unit": "ns/iter",
            "extra": "iterations: 1918\ncpu: 368342.1272158506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 375115.38162733795,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 375108.60892388393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 370495.61641630734,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 370491.2017167353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 234559.17855958067,
            "unit": "ns/iter",
            "extra": "iterations: 3013\ncpu: 234557.01958181235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 360983.8967136054,
            "unit": "ns/iter",
            "extra": "iterations: 1917\ncpu: 360970.4747000551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 19876.660992092646,
            "unit": "ns/iter",
            "extra": "iterations: 34775\ncpu: 19876.238677210444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 96485.02297151953,
            "unit": "ns/iter",
            "extra": "iterations: 7444\ncpu: 96483.71843095131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 80952.65935722725,
            "unit": "ns/iter",
            "extra": "iterations: 8619\ncpu: 80951.38647174892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 81490.36467970243,
            "unit": "ns/iter",
            "extra": "iterations: 8539\ncpu: 81487.6097903745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 81612.12406803366,
            "unit": "ns/iter",
            "extra": "iterations: 8584\ncpu: 81610.85740913247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 119793.67252283543,
            "unit": "ns/iter",
            "extra": "iterations: 5692\ncpu: 119792.07659873419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 453596.97980458644,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 453587.817589576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 369790.12763658987,
            "unit": "ns/iter",
            "extra": "iterations: 1849\ncpu: 369786.80367766024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 370797.2192655299,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 370794.99733901053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 365740.0949015481,
            "unit": "ns/iter",
            "extra": "iterations: 1981\ncpu: 365732.45835437067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 242876.2906525643,
            "unit": "ns/iter",
            "extra": "iterations: 2835\ncpu: 242872.20458553766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 367762.64256620803,
            "unit": "ns/iter",
            "extra": "iterations: 1964\ncpu: 367751.9857433804 ns\nthreads: 1"
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
        "date": 1705774729426,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6705.09765845389,
            "unit": "ns/iter",
            "extra": "iterations: 104589\ncpu: 6704.751933759764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57246.93200140388,
            "unit": "ns/iter",
            "extra": "iterations: 14265\ncpu: 57246.01472134597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 89439.58225198709,
            "unit": "ns/iter",
            "extra": "iterations: 9556\ncpu: 89432.80661364591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 129580.52610138517,
            "unit": "ns/iter",
            "extra": "iterations: 6628\ncpu: 129577.82136391076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 170628.93082013624,
            "unit": "ns/iter",
            "extra": "iterations: 4987\ncpu: 170620.31281331464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 209452.27965074364,
            "unit": "ns/iter",
            "extra": "iterations: 4123\ncpu: 209447.07737084647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 249492.7279284438,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 249485.7761107905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 289739.7409136339,
            "unit": "ns/iter",
            "extra": "iterations: 2999\ncpu: 289731.4438146048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 331378.2710706453,
            "unit": "ns/iter",
            "extra": "iterations: 2634\ncpu: 331369.32422171615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5449.412146712081,
            "unit": "ns/iter",
            "extra": "iterations: 128578\ncpu: 5449.355255175846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4555.705674976896,
            "unit": "ns/iter",
            "extra": "iterations: 154309\ncpu: 4555.598830917182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4545.436038942086,
            "unit": "ns/iter",
            "extra": "iterations: 154383\ncpu: 4545.238789244923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4598.688603531332,
            "unit": "ns/iter",
            "extra": "iterations: 153258\ncpu: 4598.426183298756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7179.409163995618,
            "unit": "ns/iter",
            "extra": "iterations: 97643\ncpu: 7179.128048093566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23528.10233654569,
            "unit": "ns/iter",
            "extra": "iterations: 34367\ncpu: 23527.474030319743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 128200.70720788589,
            "unit": "ns/iter",
            "extra": "iterations: 6701\ncpu: 128195.23951649002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 95431.06605769676,
            "unit": "ns/iter",
            "extra": "iterations: 8977\ncpu: 95430.28851509438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 93755.54057620127,
            "unit": "ns/iter",
            "extra": "iterations: 9094\ncpu: 93753.95865405753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 90060.93494816961,
            "unit": "ns/iter",
            "extra": "iterations: 9454\ncpu: 90061.00063465169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 184399.5033388984,
            "unit": "ns/iter",
            "extra": "iterations: 4792\ncpu: 184391.77796327148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1556490.9023569103,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1556467.8451178472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1228635.55835545,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 1228604.7745358092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1245432.5093833893,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 1245378.2841823068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1218216.7178478893,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 1218154.5931758543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 694954.9887218737,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 694926.1654135342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1192193.2844272908,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 1192135.907335908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 31473.37129168358,
            "unit": "ns/iter",
            "extra": "iterations: 26090\ncpu: 31472.37638942115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 159260.71678967425,
            "unit": "ns/iter",
            "extra": "iterations: 5420\ncpu: 159255.31365313698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 121487.98510608765,
            "unit": "ns/iter",
            "extra": "iterations: 7117\ncpu: 121484.12252353522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 121058.48386646922,
            "unit": "ns/iter",
            "extra": "iterations: 7159\ncpu: 121054.47688224608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 118488.08675862027,
            "unit": "ns/iter",
            "extra": "iterations: 7250\ncpu: 118485.36551724121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 203125.9621710328,
            "unit": "ns/iter",
            "extra": "iterations: 4256\ncpu: 203117.57518796987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1608157.2210707602,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1608084.8013816928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1259123.0744249136,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1259073.0717185412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1290577.9111111176,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1290549.1666666633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1259167.4810812185,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1259116.2162162121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 727023.3541829283,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 726988.6630179797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1230395.0886244439,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 1230339.814814816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6001079.548386476,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6000836.1290322635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2874168.3876922675,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2874091.3846154003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 21625.76769548448,
            "unit": "ns/iter",
            "extra": "iterations: 37778\ncpu: 21625.401027052685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 120125.90516039637,
            "unit": "ns/iter",
            "extra": "iterations: 7170\ncpu: 120124.85355648545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 93903.46421109952,
            "unit": "ns/iter",
            "extra": "iterations: 9095\ncpu: 93901.07751511797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94726.15692342161,
            "unit": "ns/iter",
            "extra": "iterations: 9049\ncpu: 94724.00265222671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 91486.22434597173,
            "unit": "ns/iter",
            "extra": "iterations: 9365\ncpu: 91483.34223171364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 187269.83613627971,
            "unit": "ns/iter",
            "extra": "iterations: 4638\ncpu: 187265.17895644627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1563056.4723618699,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1562990.954773877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1228589.881045789,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 1228523.921568627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1229849.154557481,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 1229770.1453104394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1206195.826649523,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 1206195.7309184955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 696551.3310861727,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 696537.9775280879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1188687.626275433,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 1188672.4489795957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2553.8394127042566,
            "unit": "ns/iter",
            "extra": "iterations: 274206\ncpu: 2553.762499726485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17028.841658148678,
            "unit": "ns/iter",
            "extra": "iterations: 41082\ncpu: 17028.84231536923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13869.948867686673,
            "unit": "ns/iter",
            "extra": "iterations: 50516\ncpu: 13869.773933011327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12880.141794351035,
            "unit": "ns/iter",
            "extra": "iterations: 54170\ncpu: 12879.765552888995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10273.938257637283,
            "unit": "ns/iter",
            "extra": "iterations: 68057\ncpu: 10273.407584818538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63197.571325972174,
            "unit": "ns/iter",
            "extra": "iterations: 11139\ncpu: 63195.188077924366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 105156.628472746,
            "unit": "ns/iter",
            "extra": "iterations: 6659\ncpu: 105156.67517645327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27264.960504298844,
            "unit": "ns/iter",
            "extra": "iterations: 25699\ncpu: 27264.337133740635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27763.867722974934,
            "unit": "ns/iter",
            "extra": "iterations: 25182\ncpu: 27763.593042649678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27193.83509003952,
            "unit": "ns/iter",
            "extra": "iterations: 25711\ncpu: 27192.964100968482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58948.63697049826,
            "unit": "ns/iter",
            "extra": "iterations: 12134\ncpu: 58948.71435635409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55345.110783952296,
            "unit": "ns/iter",
            "extra": "iterations: 13585\ncpu: 55342.31873389778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 18915.36331683885,
            "unit": "ns/iter",
            "extra": "iterations: 36987\ncpu: 18914.456430637492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 94416.91878786858,
            "unit": "ns/iter",
            "extra": "iterations: 7425\ncpu: 94413.13131313022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 76461.43736359796,
            "unit": "ns/iter",
            "extra": "iterations: 9164\ncpu: 76456.61283282471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 75652.91066220003,
            "unit": "ns/iter",
            "extra": "iterations: 9257\ncpu: 75652.94371826766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 75302.44203288759,
            "unit": "ns/iter",
            "extra": "iterations: 9307\ncpu: 75297.7866122284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 114521.36151460254,
            "unit": "ns/iter",
            "extra": "iterations: 6127\ncpu: 114515.6846743917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 468624.85056704725,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 468603.8692461584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 378757.54515954823,
            "unit": "ns/iter",
            "extra": "iterations: 1849\ncpu: 378752.83937262936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 381242.77917122794,
            "unit": "ns/iter",
            "extra": "iterations: 1834\ncpu: 381229.3893129773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 381894.4482571071,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 381874.94553377054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 253227.86618444283,
            "unit": "ns/iter",
            "extra": "iterations: 2765\ncpu: 253214.71971066782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 375922.3640750451,
            "unit": "ns/iter",
            "extra": "iterations: 1865\ncpu: 375907.4530831096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20677.655682622888,
            "unit": "ns/iter",
            "extra": "iterations: 33928\ncpu: 20676.237915586156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 99176.14853586817,
            "unit": "ns/iter",
            "extra": "iterations: 7069\ncpu: 99175.06012165868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 81271.54757484647,
            "unit": "ns/iter",
            "extra": "iterations: 8618\ncpu: 81270.71246228779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 82282.2450634752,
            "unit": "ns/iter",
            "extra": "iterations: 8508\ncpu: 82278.10296191799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 80324.11834862275,
            "unit": "ns/iter",
            "extra": "iterations: 8720\ncpu: 80318.95642201713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 119854.81561378126,
            "unit": "ns/iter",
            "extra": "iterations: 5841\ncpu: 119846.13935969921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 466244.06956522027,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 466220.40133779525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 383247.5569550926,
            "unit": "ns/iter",
            "extra": "iterations: 1826\ncpu: 383228.7513691148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 387504.5132890404,
            "unit": "ns/iter",
            "extra": "iterations: 1806\ncpu: 387488.7043189331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 382759.2594416697,
            "unit": "ns/iter",
            "extra": "iterations: 1827\ncpu: 382754.7345374949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 260836.1387648829,
            "unit": "ns/iter",
            "extra": "iterations: 2688\ncpu: 260833.3705357132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 380917.76755584177,
            "unit": "ns/iter",
            "extra": "iterations: 1837\ncpu: 380917.5285792085 ns\nthreads: 1"
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
        "date": 1705777735477,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6730.502113506559,
            "unit": "ns/iter",
            "extra": "iterations: 104329\ncpu: 6730.3482253256525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57031.41448565461,
            "unit": "ns/iter",
            "extra": "iterations: 14290\ncpu: 57030.64380685795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 89562.27439088644,
            "unit": "ns/iter",
            "extra": "iterations: 9563\ncpu: 89559.78249503292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 131313.30746043773,
            "unit": "ns/iter",
            "extra": "iterations: 6635\ncpu: 131306.3451394122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 170802.10226601947,
            "unit": "ns/iter",
            "extra": "iterations: 5075\ncpu: 170788.17733990142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 210741.64473683195,
            "unit": "ns/iter",
            "extra": "iterations: 4104\ncpu: 210738.79142300197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 251527.1834542766,
            "unit": "ns/iter",
            "extra": "iterations: 3445\ncpu: 251518.519593614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 292106.972982108,
            "unit": "ns/iter",
            "extra": "iterations: 2961\ncpu: 292098.9868287739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 331762.6970621612,
            "unit": "ns/iter",
            "extra": "iterations: 2621\ncpu: 331740.17550553224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5492.79778291065,
            "unit": "ns/iter",
            "extra": "iterations: 127284\ncpu: 5492.697432513115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4608.7660467871265,
            "unit": "ns/iter",
            "extra": "iterations: 152180\ncpu: 4608.317124457884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4519.470931612524,
            "unit": "ns/iter",
            "extra": "iterations: 155891\ncpu: 4519.384698282777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4502.71614924382,
            "unit": "ns/iter",
            "extra": "iterations: 155772\ncpu: 4502.581978789515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7143.387555090313,
            "unit": "ns/iter",
            "extra": "iterations: 97341\ncpu: 7143.1596141399905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23580.93423732802,
            "unit": "ns/iter",
            "extra": "iterations: 34366\ncpu: 23578.85409998252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126301.36942675883,
            "unit": "ns/iter",
            "extra": "iterations: 6751\ncpu: 126296.84491186484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98201.0006886341,
            "unit": "ns/iter",
            "extra": "iterations: 8713\ncpu: 98195.83381154593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 96712.28065610083,
            "unit": "ns/iter",
            "extra": "iterations: 8840\ncpu: 96710.81447963793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93194.86277948285,
            "unit": "ns/iter",
            "extra": "iterations: 9124\ncpu: 93190.23454625162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 184811.2222689008,
            "unit": "ns/iter",
            "extra": "iterations: 4760\ncpu: 184802.54201680722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1586181.3950616806,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1586050.4409171084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1245771.5234270298,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1245739.4912985242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1252707.9243242852,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1252605.810810811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1226338.7027741754,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 1226291.0171730497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 684354.79747775,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 684308.0118694366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1203954.7766234693,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 1203910.1298701272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 31223.273274189098,
            "unit": "ns/iter",
            "extra": "iterations: 26263\ncpu: 31220.70974374595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 159038.38609465977,
            "unit": "ns/iter",
            "extra": "iterations: 5408\ncpu: 159034.7448224851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123866.50438030041,
            "unit": "ns/iter",
            "extra": "iterations: 6963\ncpu: 123854.9906649437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 125947.96889216873,
            "unit": "ns/iter",
            "extra": "iterations: 6815\ncpu: 125945.09170946438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123159.17732517411,
            "unit": "ns/iter",
            "extra": "iterations: 7021\ncpu: 123148.11280444388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 200050.6574289521,
            "unit": "ns/iter",
            "extra": "iterations: 4294\ncpu: 200044.50395901193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1621915.7617390167,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1621807.6521739184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1289350.3955740675,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1289317.1507607216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1298078.8286908045,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1297976.6016713039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1255139.5851352713,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1255140.54054054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 711990.3759571731,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 711976.4931087287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1239906.704939966,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 1239906.8090787695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5904834.455695661,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5904525.949367059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2786735.388059893,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2786628.3582089557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 21753.77202416003,
            "unit": "ns/iter",
            "extra": "iterations: 37754\ncpu: 21753.774434496998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 121421.05292792873,
            "unit": "ns/iter",
            "extra": "iterations: 7104\ncpu: 121420.07319819897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97365.05198188,
            "unit": "ns/iter",
            "extra": "iterations: 8830\ncpu: 97364.36013590067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96893.63317093524,
            "unit": "ns/iter",
            "extra": "iterations: 8827\ncpu: 96889.02231788854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96081.0997758058,
            "unit": "ns/iter",
            "extra": "iterations: 8920\ncpu: 96080.62780269088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 185597.0861847993,
            "unit": "ns/iter",
            "extra": "iterations: 4676\ncpu: 185585.37211291664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1582678.6220340168,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1582621.8644067843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1242966.2689747647,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1242887.3501997306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1243958.2826667295,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1243938.0000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1215303.6710181513,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 1215254.960835509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 685056.7595588539,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 685058.8970588244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1199196.3788659046,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 1199189.3041237104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2515.6248996479103,
            "unit": "ns/iter",
            "extra": "iterations: 277771\ncpu: 2515.6607421221065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17261.72817777662,
            "unit": "ns/iter",
            "extra": "iterations: 40681\ncpu: 17260.396745409347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 12868.804632962554,
            "unit": "ns/iter",
            "extra": "iterations: 54436\ncpu: 12868.390403409485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13939.829811056423,
            "unit": "ns/iter",
            "extra": "iterations: 50015\ncpu: 13939.430170948775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10255.003750586558,
            "unit": "ns/iter",
            "extra": "iterations: 68256\ncpu: 10254.62230426628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63354.885789090826,
            "unit": "ns/iter",
            "extra": "iterations: 11076\ncpu: 63353.41278439888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112831.7020315871,
            "unit": "ns/iter",
            "extra": "iterations: 6202\ncpu: 112823.05707836186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27410.779522939047,
            "unit": "ns/iter",
            "extra": "iterations: 25531\ncpu: 27409.8468528455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27774.30791206625,
            "unit": "ns/iter",
            "extra": "iterations: 25202\ncpu: 27772.470438853998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 26642.483857490348,
            "unit": "ns/iter",
            "extra": "iterations: 26328\ncpu: 26641.936341537385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 53655.52418239273,
            "unit": "ns/iter",
            "extra": "iterations: 13026\ncpu: 53654.76738830019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51909.035134923666,
            "unit": "ns/iter",
            "extra": "iterations: 13377\ncpu: 51905.44217687132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 18881.370974254816,
            "unit": "ns/iter",
            "extra": "iterations: 37167\ncpu: 18880.498829606746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 94506.01375588364,
            "unit": "ns/iter",
            "extra": "iterations: 7415\ncpu: 94501.11935266362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 76916.28453857344,
            "unit": "ns/iter",
            "extra": "iterations: 9113\ncpu: 76913.79348183908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 76706.54666665546,
            "unit": "ns/iter",
            "extra": "iterations: 9150\ncpu: 76704.054644808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 75801.29230434544,
            "unit": "ns/iter",
            "extra": "iterations: 9213\ncpu: 75800.3256268317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123684.09385922368,
            "unit": "ns/iter",
            "extra": "iterations: 6009\ncpu: 123676.25228823417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 475551.04613285774,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 475550.0678426081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 385856.15270127496,
            "unit": "ns/iter",
            "extra": "iterations: 1814\ncpu: 385835.72216096945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 385017.98954893387,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 385022.2222222211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 388410.55241268507,
            "unit": "ns/iter",
            "extra": "iterations: 1803\ncpu: 388402.3294509166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 250207.22587560728,
            "unit": "ns/iter",
            "extra": "iterations: 2798\ncpu: 250209.68548963545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 381305.9012547984,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 381281.2329514509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 19555.261033413917,
            "unit": "ns/iter",
            "extra": "iterations: 35823\ncpu: 19554.903274432407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 98065.17398625842,
            "unit": "ns/iter",
            "extra": "iterations: 7127\ncpu: 98062.95776624259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 81035.7837368374,
            "unit": "ns/iter",
            "extra": "iterations: 8633\ncpu: 81036.82381559015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 82415.04709204528,
            "unit": "ns/iter",
            "extra": "iterations: 8494\ncpu: 82414.64563221076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 80649.44192210784,
            "unit": "ns/iter",
            "extra": "iterations: 8678\ncpu: 80646.78497349644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 123410.78754190219,
            "unit": "ns/iter",
            "extra": "iterations: 5667\ncpu: 123408.18775366188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 470507.15658598306,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 470500.53763441223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 390911.50391493837,
            "unit": "ns/iter",
            "extra": "iterations: 1788\ncpu: 390917.7852348977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 389924.3800223725,
            "unit": "ns/iter",
            "extra": "iterations: 1792\ncpu: 389920.70312499866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 393333.90433309827,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 393321.9471018518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 251445.25924591644,
            "unit": "ns/iter",
            "extra": "iterations: 2785\ncpu: 251449.08438061367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 384713.94221252436,
            "unit": "ns/iter",
            "extra": "iterations: 1817\ncpu: 384704.6780407247 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}