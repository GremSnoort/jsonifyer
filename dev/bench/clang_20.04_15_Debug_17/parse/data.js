window.BENCHMARK_DATA = {
  "lastUpdate": 1705961449164,
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
        "date": 1705952883178,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6768.801151367395,
            "unit": "ns/iter",
            "extra": "iterations: 103008\ncpu: 6768.484972041007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58005.62937708465,
            "unit": "ns/iter",
            "extra": "iterations: 14079\ncpu: 58002.457560906325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91616.76021768255,
            "unit": "ns/iter",
            "extra": "iterations: 9371\ncpu: 91615.07843346494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 132799.55329008613,
            "unit": "ns/iter",
            "extra": "iterations: 6474\ncpu: 132794.71733086192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 174267.7818035548,
            "unit": "ns/iter",
            "extra": "iterations: 4968\ncpu: 174260.95008051532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 216135.81003495635,
            "unit": "ns/iter",
            "extra": "iterations: 4006\ncpu: 216129.18122815795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 257322.02491843127,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 257317.82853752596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 298751.52133516804,
            "unit": "ns/iter",
            "extra": "iterations: 2906\ncpu: 298730.76393668266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 339423.7639485135,
            "unit": "ns/iter",
            "extra": "iterations: 2563\ncpu: 339418.3769020675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5614.148723301612,
            "unit": "ns/iter",
            "extra": "iterations: 124540\ncpu: 5613.971414806485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4612.06930731974,
            "unit": "ns/iter",
            "extra": "iterations: 152639\ncpu: 4612.110273259124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4585.560201704013,
            "unit": "ns/iter",
            "extra": "iterations: 151906\ncpu: 4585.401498295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4652.826588254326,
            "unit": "ns/iter",
            "extra": "iterations: 150826\ncpu: 4652.616259796056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7281.321134864744,
            "unit": "ns/iter",
            "extra": "iterations: 95941\ncpu: 7281.090461846345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24298.07105734712,
            "unit": "ns/iter",
            "extra": "iterations: 33480\ncpu: 24297.14157706094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129201.7808692921,
            "unit": "ns/iter",
            "extra": "iterations: 6649\ncpu: 129197.27778613329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99346.70779747477,
            "unit": "ns/iter",
            "extra": "iterations: 8631\ncpu: 99343.30900243315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98935.62227377543,
            "unit": "ns/iter",
            "extra": "iterations: 8620\ncpu: 98932.27378190258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95871.58569181933,
            "unit": "ns/iter",
            "extra": "iterations: 8904\ncpu: 95870.50763701707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 185316.2251948708,
            "unit": "ns/iter",
            "extra": "iterations: 4747\ncpu: 185312.85022119194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1620832.5096321923,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1620746.409807355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1268425.3100137047,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1268386.145404661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1274388.5624142275,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1274363.9231824405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1256707.514208382,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1256678.349120435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 715922.6566125102,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 715904.2536736272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1232064.2443257726,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 1232031.6421895877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 31989.5604981525,
            "unit": "ns/iter",
            "extra": "iterations: 25695\ncpu: 31988.1416618019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 163364.10155069953,
            "unit": "ns/iter",
            "extra": "iterations: 5288\ncpu: 163353.95234493192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 127432.94991875037,
            "unit": "ns/iter",
            "extra": "iterations: 6769\ncpu: 127426.85773378615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 128740.53502614742,
            "unit": "ns/iter",
            "extra": "iterations: 6695\ncpu: 128736.9529499624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 125616.19596667615,
            "unit": "ns/iter",
            "extra": "iterations: 6843\ncpu: 125609.60105217017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 203945.413182139,
            "unit": "ns/iter",
            "extra": "iterations: 4233\ncpu: 203934.37278525872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1644826.0636043705,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1644760.2473498306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1298767.3944054903,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1298727.97202797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1314625.9293785463,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1314551.8361581888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1288103.8468964922,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1288037.65517241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 749645.5665064197,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 749618.0288461538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1262750.270380393,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1262686.9565217346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6134071.164473497,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6133887.499999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2936277.353311995,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2936143.5331230466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22138.499499173715,
            "unit": "ns/iter",
            "extra": "iterations: 36939\ncpu: 22137.662091556384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 122201.17780939866,
            "unit": "ns/iter",
            "extra": "iterations: 7030\ncpu: 122197.8662873401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 99332.65499652734,
            "unit": "ns/iter",
            "extra": "iterations: 8626\ncpu: 99328.35613262272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 99359.64101674821,
            "unit": "ns/iter",
            "extra": "iterations: 8655\ncpu: 99358.10514153626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 98702.13835175673,
            "unit": "ns/iter",
            "extra": "iterations: 8688\ncpu: 98699.343922652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 187429.57720430134,
            "unit": "ns/iter",
            "extra": "iterations: 4650\ncpu: 187429.95698924692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1619561.9532062265,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1619522.1837088421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1268441.5537414928,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1268414.013605441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1271964.1133879225,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1271934.9726775899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1249817.3739946827,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 1249809.2493297548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 712810.6682427081,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 712795.9022852603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1229661.577075135,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 1229662.977602115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2598.1367397528757,
            "unit": "ns/iter",
            "extra": "iterations: 269863\ncpu: 2598.1116344219045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17309.62279835986,
            "unit": "ns/iter",
            "extra": "iterations: 40538\ncpu: 17309.763678523785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13523.071510742986,
            "unit": "ns/iter",
            "extra": "iterations: 53894\ncpu: 13522.906074887705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13680.060492568418,
            "unit": "ns/iter",
            "extra": "iterations: 50998\ncpu: 13679.899211733835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10391.744424109314,
            "unit": "ns/iter",
            "extra": "iterations: 67209\ncpu: 10391.828475353008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63029.916418988985,
            "unit": "ns/iter",
            "extra": "iterations: 11103\ncpu: 63030.43321624831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 113318.84373988846,
            "unit": "ns/iter",
            "extra": "iterations: 6182\ncpu: 113319.89647363249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27769.09244532496,
            "unit": "ns/iter",
            "extra": "iterations: 25150\ncpu: 27768.56063618287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27763.52681087546,
            "unit": "ns/iter",
            "extra": "iterations: 25195\ncpu: 27763.492756499316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27125.722710891238,
            "unit": "ns/iter",
            "extra": "iterations: 25807\ncpu: 27125.42333475409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58381.67705901104,
            "unit": "ns/iter",
            "extra": "iterations: 11996\ncpu: 58382.152384127934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52185.40134178262,
            "unit": "ns/iter",
            "extra": "iterations: 13415\ncpu: 52184.38315318641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19154.09186718307,
            "unit": "ns/iter",
            "extra": "iterations: 36531\ncpu: 19153.874791273123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 96927.458367915,
            "unit": "ns/iter",
            "extra": "iterations: 7230\ncpu: 96928.21576763419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 78420.11320754945,
            "unit": "ns/iter",
            "extra": "iterations: 8957\ncpu: 78415.17249078976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 78367.24885257198,
            "unit": "ns/iter",
            "extra": "iterations: 8933\ncpu: 78365.91290719774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 78351.34372207308,
            "unit": "ns/iter",
            "extra": "iterations: 8952\ncpu: 78350.33512064352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 118277.8909552093,
            "unit": "ns/iter",
            "extra": "iterations: 5915\ncpu: 118272.79797125899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 481891.0331263009,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 481885.85231194174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 394562.2661789837,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 394550.5908835136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 393412.36629214755,
            "unit": "ns/iter",
            "extra": "iterations: 1780\ncpu: 393393.5393258385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 393196.90623244917,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 393171.8135878779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 257577.15574374594,
            "unit": "ns/iter",
            "extra": "iterations: 2716\ncpu: 257568.1885125154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 389268.27768498845,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 389245.9654980481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20944.66743262861,
            "unit": "ns/iter",
            "extra": "iterations: 33509\ncpu: 20943.373422065677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 100437.17916667201,
            "unit": "ns/iter",
            "extra": "iterations: 6960\ncpu: 100433.64942528702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 83215.39639211776,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 83213.09043436857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 83091.65766086178,
            "unit": "ns/iter",
            "extra": "iterations: 8439\ncpu: 83092.27396611043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 83635.55927342224,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 83631.35755258144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126781.4512217368,
            "unit": "ns/iter",
            "extra": "iterations: 5525\ncpu: 126774.08144796426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 483623.460526334,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 483593.76731301897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 393842.8593134345,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 393841.5869442857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 397532.9584519413,
            "unit": "ns/iter",
            "extra": "iterations: 1757\ncpu: 397526.92088788137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 390701.57349667366,
            "unit": "ns/iter",
            "extra": "iterations: 1796\ncpu: 390691.31403118075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 262050.89404715394,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 262042.38113066516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 391628.49131656764,
            "unit": "ns/iter",
            "extra": "iterations: 1785\ncpu: 391614.0056022437 ns\nthreads: 1"
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
        "date": 1705954904322,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6833.845102461436,
            "unit": "ns/iter",
            "extra": "iterations: 102429\ncpu: 6833.543234826075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57809.5970402894,
            "unit": "ns/iter",
            "extra": "iterations: 14123\ncpu: 57808.90037527437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92015.32118018244,
            "unit": "ns/iter",
            "extra": "iterations: 9490\ncpu: 92012.47629083246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 131917.15147801957,
            "unit": "ns/iter",
            "extra": "iterations: 6529\ncpu: 131914.55046714653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 173476.6042877123,
            "unit": "ns/iter",
            "extra": "iterations: 4991\ncpu: 173476.4375876578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 214038.16152135373,
            "unit": "ns/iter",
            "extra": "iterations: 4049\ncpu: 214036.87330204976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 254919.20252794583,
            "unit": "ns/iter",
            "extra": "iterations: 3402\ncpu: 254917.75426219866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 296322.7445578162,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 296317.1088435373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 336644.23750482895,
            "unit": "ns/iter",
            "extra": "iterations: 2581\ncpu: 336640.8368849288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5553.738262294652,
            "unit": "ns/iter",
            "extra": "iterations: 125706\ncpu: 5553.693538892329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4622.2962543164085,
            "unit": "ns/iter",
            "extra": "iterations: 151748\ncpu: 4622.142631204361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4596.182439171979,
            "unit": "ns/iter",
            "extra": "iterations: 152396\ncpu: 4596.1088217538545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4592.274863247906,
            "unit": "ns/iter",
            "extra": "iterations: 152283\ncpu: 4592.232882199595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7225.511787425274,
            "unit": "ns/iter",
            "extra": "iterations: 97095\ncpu: 7225.496678510732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24050.07799277896,
            "unit": "ns/iter",
            "extra": "iterations: 33798\ncpu: 24049.724835789104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 124228.3791455459,
            "unit": "ns/iter",
            "extra": "iterations: 6905\ncpu: 124229.13830557592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 94505.10314298492,
            "unit": "ns/iter",
            "extra": "iterations: 9036\ncpu: 94503.03231518353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 95641.34460439089,
            "unit": "ns/iter",
            "extra": "iterations: 8961\ncpu: 95641.2565561882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94678.81304961251,
            "unit": "ns/iter",
            "extra": "iterations: 9211\ncpu: 94678.47139289991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 183822.0815262674,
            "unit": "ns/iter",
            "extra": "iterations: 4796\ncpu: 183821.18432026744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1599883.2383420228,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1599807.944732294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1263975.3845108838,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1263916.4402173893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1263895.8608459597,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1263855.5252387465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1262054.1504065038,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1262052.3035230364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 718346.770962721,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 718333.1521739135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1223365.6306067868,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1223357.78364116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 31896.594337432933,
            "unit": "ns/iter",
            "extra": "iterations: 25854\ncpu: 31895.99675098626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158171.16073060178,
            "unit": "ns/iter",
            "extra": "iterations: 5475\ncpu: 158172.87671232902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123437.67361310785,
            "unit": "ns/iter",
            "extra": "iterations: 6958\ncpu: 123433.80281690141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 127371.08802350154,
            "unit": "ns/iter",
            "extra": "iterations: 6805\ncpu: 127371.10947832483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127517.16191286544,
            "unit": "ns/iter",
            "extra": "iterations: 7047\ncpu: 127510.54349368492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 201932.9478728418,
            "unit": "ns/iter",
            "extra": "iterations: 4278\ncpu: 201932.58532024286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1634686.739054094,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1634641.8563922916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1288577.7590026932,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1288543.0747922494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1304675.4551820445,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1304620.3081232507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1287310.1495844463,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1287272.5761772846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 747613.6416464701,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 747583.2929782072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1250520.8644985787,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1250425.880758806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6148845.263158059,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6148646.052631575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2825225.960843608,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2825036.7469879505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22811.11080401221,
            "unit": "ns/iter",
            "extra": "iterations: 36181\ncpu: 22809.66253005721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 119133.0259161234,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 119124.8989828627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 95180.46944444653,
            "unit": "ns/iter",
            "extra": "iterations: 9000\ncpu: 95177.05555555504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96924.42058191053,
            "unit": "ns/iter",
            "extra": "iterations: 8833\ncpu: 96918.75919846064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93470.37060947182,
            "unit": "ns/iter",
            "extra": "iterations: 9139\ncpu: 93467.14082503524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 185839.06552464547,
            "unit": "ns/iter",
            "extra": "iterations: 4670\ncpu: 185835.2676659525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1608675.2478485059,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1608666.9535283973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1256363.380376406,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 1256318.2795698948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1261053.3121621632,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1261044.324324326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1247417.7684070112,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1247366.6666666595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 714195.4330527738,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 714183.091048203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1221157.4980288316,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 1221085.8081471687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2607.147129659641,
            "unit": "ns/iter",
            "extra": "iterations: 268226\ncpu: 2607.116759747387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17144.434159954515,
            "unit": "ns/iter",
            "extra": "iterations: 40849\ncpu: 17144.035349702433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 12835.41549399272,
            "unit": "ns/iter",
            "extra": "iterations: 54434\ncpu: 12835.499871403894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12794.084642935102,
            "unit": "ns/iter",
            "extra": "iterations: 54724\ncpu: 12793.766903004269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10222.421133210088,
            "unit": "ns/iter",
            "extra": "iterations: 68584\ncpu: 10222.29820366273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64724.56180819783,
            "unit": "ns/iter",
            "extra": "iterations: 10751\ncpu: 64724.32331876103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 111256.84285713891,
            "unit": "ns/iter",
            "extra": "iterations: 6300\ncpu: 111254.6984126986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27296.90574121537,
            "unit": "ns/iter",
            "extra": "iterations: 25674\ncpu: 27297.035911817617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27747.16020222693,
            "unit": "ns/iter",
            "extra": "iterations: 25318\ncpu: 27746.642704795235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27024.414074528373,
            "unit": "ns/iter",
            "extra": "iterations: 25976\ncpu: 27024.318601786246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 57746.311956243306,
            "unit": "ns/iter",
            "extra": "iterations: 12069\ncpu: 57744.99130002479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51387.37541332612,
            "unit": "ns/iter",
            "extra": "iterations: 13609\ncpu: 51386.773458740696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19351.55095426577,
            "unit": "ns/iter",
            "extra": "iterations: 36101\ncpu: 19351.22572781909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 97888.47050600895,
            "unit": "ns/iter",
            "extra": "iterations: 7154\ncpu: 97887.4615599677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 79059.24299275668,
            "unit": "ns/iter",
            "extra": "iterations: 8848\ncpu: 79057.67405063198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 77020.1819180497,
            "unit": "ns/iter",
            "extra": "iterations: 9103\ncpu: 77018.56530813982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 77810.0909090873,
            "unit": "ns/iter",
            "extra": "iterations: 8987\ncpu: 77809.2911983963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 120340.32955131787,
            "unit": "ns/iter",
            "extra": "iterations: 5817\ncpu: 120337.61389032124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 473352.38357093144,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 473343.7881873705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 391302.5193277659,
            "unit": "ns/iter",
            "extra": "iterations: 1785\ncpu: 391294.45378151495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 394127.2751828726,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 394122.50984806014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 390889.898663706,
            "unit": "ns/iter",
            "extra": "iterations: 1796\ncpu: 390885.6904231675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 254171.79934568895,
            "unit": "ns/iter",
            "extra": "iterations: 2751\ncpu: 254156.05234460247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 384187.6496430612,
            "unit": "ns/iter",
            "extra": "iterations: 1821\ncpu: 384179.6265788063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20413.37012873394,
            "unit": "ns/iter",
            "extra": "iterations: 34334\ncpu: 20412.835673093818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 101846.56727695711,
            "unit": "ns/iter",
            "extra": "iterations: 6882\ncpu: 101839.18918918855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 83556.18863419583,
            "unit": "ns/iter",
            "extra": "iterations: 8376\ncpu: 83553.41451767024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84171.46345274843,
            "unit": "ns/iter",
            "extra": "iterations: 8318\ncpu: 84166.20581870712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84263.93247626869,
            "unit": "ns/iter",
            "extra": "iterations: 8323\ncpu: 84262.81388922296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127271.68019657112,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 127267.74663268951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 478267.98086122226,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 478265.8920027338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 390707.6203028803,
            "unit": "ns/iter",
            "extra": "iterations: 1783\ncpu: 390687.6051598427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 395419.06723164784,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 395411.7514124337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 392412.99551319104,
            "unit": "ns/iter",
            "extra": "iterations: 1783\ncpu: 392407.6836791962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 264374.67750470625,
            "unit": "ns/iter",
            "extra": "iterations: 2645\ncpu: 264373.9130434787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 388680.22067819827,
            "unit": "ns/iter",
            "extra": "iterations: 1799\ncpu: 388672.15119510656 ns\nthreads: 1"
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
        "date": 1705956451912,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6651.288402118975,
            "unit": "ns/iter",
            "extra": "iterations: 105183\ncpu: 6651.147048477415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55945.235728960004,
            "unit": "ns/iter",
            "extra": "iterations: 14610\ncpu: 55942.42299794661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 88699.20590960605,
            "unit": "ns/iter",
            "extra": "iterations: 9713\ncpu: 88697.25110676416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 128043.65476721463,
            "unit": "ns/iter",
            "extra": "iterations: 6723\ncpu: 128039.68466458432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 168428.1738622945,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 168420.7701283548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 207969.4140418522,
            "unit": "ns/iter",
            "extra": "iterations: 4159\ncpu: 207960.4231786487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 247960.90994854362,
            "unit": "ns/iter",
            "extra": "iterations: 3498\ncpu: 247955.86049170952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 288186.4768365507,
            "unit": "ns/iter",
            "extra": "iterations: 3022\ncpu: 288171.74056915945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 327364.780083028,
            "unit": "ns/iter",
            "extra": "iterations: 2651\ncpu: 327357.29913240334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5470.85255654536,
            "unit": "ns/iter",
            "extra": "iterations: 128083\ncpu: 5470.667457820311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4595.837830719673,
            "unit": "ns/iter",
            "extra": "iterations: 151866\ncpu: 4595.779173745283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4594.788004808716,
            "unit": "ns/iter",
            "extra": "iterations: 152211\ncpu: 4594.561496869478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4587.929876383899,
            "unit": "ns/iter",
            "extra": "iterations: 152003\ncpu: 4587.793004085442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7317.917629200912,
            "unit": "ns/iter",
            "extra": "iterations: 96187\ncpu: 7317.493008410707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24234.746605388744,
            "unit": "ns/iter",
            "extra": "iterations: 33509\ncpu: 24233.841654480857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123435.94110023661,
            "unit": "ns/iter",
            "extra": "iterations: 6944\ncpu: 123432.38767281102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 93881.22147945927,
            "unit": "ns/iter",
            "extra": "iterations: 9125\ncpu: 93878.15890410948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 94921.6808392585,
            "unit": "ns/iter",
            "extra": "iterations: 9008\ncpu: 94918.78330372983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 90660.55219574308,
            "unit": "ns/iter",
            "extra": "iterations: 9359\ncpu: 90661.43818784047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 185959.6897717519,
            "unit": "ns/iter",
            "extra": "iterations: 4732\ncpu: 185954.6069315294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1584868.154639127,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1584825.2577319627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1241654.8970588064,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 1241610.0267379666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1240529.3627844758,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1240510.977242303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1225143.1715039008,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1225102.5065963059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 692949.5221305431,
            "unit": "ns/iter",
            "extra": "iterations: 1333\ncpu: 692923.1807951967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1197233.73091845,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 1197202.1992238064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32362.75816814233,
            "unit": "ns/iter",
            "extra": "iterations: 25526\ncpu: 32361.846744495735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157375.51332116406,
            "unit": "ns/iter",
            "extra": "iterations: 5480\ncpu: 157369.14233576643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 121318.21108922716,
            "unit": "ns/iter",
            "extra": "iterations: 7106\ncpu: 121314.8888263438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 123103.73892473584,
            "unit": "ns/iter",
            "extra": "iterations: 6975\ncpu: 123099.1111111113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 118750.42942154035,
            "unit": "ns/iter",
            "extra": "iterations: 7226\ncpu: 118745.39164129554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 201867.2181647948,
            "unit": "ns/iter",
            "extra": "iterations: 4272\ncpu: 201860.36985018774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1621137.3982607415,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1621100.347826094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1274460.2005494263,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1274426.7857142782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1286418.4834253949,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 1286364.3646408815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1270409.0845838715,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1270355.2523874477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 736202.2193190819,
            "unit": "ns/iter",
            "extra": "iterations: 1263\ncpu: 736175.8511480588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1238285.6755674703,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 1238233.110814419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6003702.787096876,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6003485.161290342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2770534.333333582,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2770472.0238095233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22469.494042845738,
            "unit": "ns/iter",
            "extra": "iterations: 36175\ncpu: 22468.66344160328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 118190.80306798611,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 118188.66777224909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94846.15608730243,
            "unit": "ns/iter",
            "extra": "iterations: 9027\ncpu: 94845.18666223608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94099.1365435384,
            "unit": "ns/iter",
            "extra": "iterations: 9096\ncpu: 94097.66930518844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92841.52288292897,
            "unit": "ns/iter",
            "extra": "iterations: 9199\ncpu: 92838.83030764214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 186335.79571273655,
            "unit": "ns/iter",
            "extra": "iterations: 4665\ncpu: 186332.79742765395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1587822.4378192835,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1587795.741056214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1237572.1832668,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 1237570.6507304166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1245873.7666667427,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1245816.6666666653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1224595.9696969178,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 1224578.1291172623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 689060.303030273,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 689036.511456026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1203841.5945596625,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 1203811.3989637345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2594.535714418066,
            "unit": "ns/iter",
            "extra": "iterations: 270045\ncpu: 2594.4527763891324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17374.74958421108,
            "unit": "ns/iter",
            "extra": "iterations: 40285\ncpu: 17374.926151172956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 12856.152650449889,
            "unit": "ns/iter",
            "extra": "iterations: 54104\ncpu: 12856.029129084769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13022.140900486098,
            "unit": "ns/iter",
            "extra": "iterations: 53882\ncpu: 13021.59904977542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10204.940295893799,
            "unit": "ns/iter",
            "extra": "iterations: 68538\ncpu: 10204.536169716084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64079.57920611574,
            "unit": "ns/iter",
            "extra": "iterations: 10984\ncpu: 64077.13037144957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 106844.76384440278,
            "unit": "ns/iter",
            "extra": "iterations: 6555\ncpu: 106842.80701754452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27269.962417727897,
            "unit": "ns/iter",
            "extra": "iterations: 25677\ncpu: 27268.855395879415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27822.94908309766,
            "unit": "ns/iter",
            "extra": "iterations: 25139\ncpu: 27822.43128207163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 26657.34856162768,
            "unit": "ns/iter",
            "extra": "iterations: 26245\ncpu: 26656.570775385873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56488.91338962502,
            "unit": "ns/iter",
            "extra": "iterations: 12435\ncpu: 56489.529553679364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51500.09893107438,
            "unit": "ns/iter",
            "extra": "iterations: 13565\ncpu: 51498.474014007006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19111.88746481527,
            "unit": "ns/iter",
            "extra": "iterations: 36593\ncpu: 19110.991173175003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 95764.67154582546,
            "unit": "ns/iter",
            "extra": "iterations: 7310\ncpu: 95761.73734610074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 77110.2928037022,
            "unit": "ns/iter",
            "extra": "iterations: 9088\ncpu: 77108.16461267504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 75564.13220816465,
            "unit": "ns/iter",
            "extra": "iterations: 9243\ncpu: 75564.90316996588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 75835.47612874328,
            "unit": "ns/iter",
            "extra": "iterations: 9258\ncpu: 75830.65456902128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 117757.24655231586,
            "unit": "ns/iter",
            "extra": "iterations: 5946\ncpu: 117750.97544567737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 470682.5700808631,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 470673.65229110996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 383347.2312328312,
            "unit": "ns/iter",
            "extra": "iterations: 1825\ncpu: 383351.5068493177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 381858.9847411174,
            "unit": "ns/iter",
            "extra": "iterations: 1835\ncpu: 381850.89918256033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 383368.10624319577,
            "unit": "ns/iter",
            "extra": "iterations: 1826\ncpu: 383351.4238773232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 250401.38127687774,
            "unit": "ns/iter",
            "extra": "iterations: 2788\ncpu: 250388.2352941191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 377516.8694009749,
            "unit": "ns/iter",
            "extra": "iterations: 1853\ncpu: 377503.0760928216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20157.185298712335,
            "unit": "ns/iter",
            "extra": "iterations: 34582\ncpu: 20156.5612168179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 98113.14063377357,
            "unit": "ns/iter",
            "extra": "iterations: 7132\ncpu: 98112.05832865846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 80792.42042563281,
            "unit": "ns/iter",
            "extra": "iterations: 8646\ncpu: 80790.712468193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 81513.23787367498,
            "unit": "ns/iter",
            "extra": "iterations: 8597\ncpu: 81510.58508782227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 80146.00654044427,
            "unit": "ns/iter",
            "extra": "iterations: 8715\ncpu: 80142.59323006161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 125848.86071171355,
            "unit": "ns/iter",
            "extra": "iterations: 5564\ncpu: 125843.65564342281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 470933.8402965282,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 470909.83827493485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 387409.92707185214,
            "unit": "ns/iter",
            "extra": "iterations: 1810\ncpu: 387399.06077348196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 388109.7715397833,
            "unit": "ns/iter",
            "extra": "iterations: 1799\ncpu: 388088.60478042945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 381930.2134279541,
            "unit": "ns/iter",
            "extra": "iterations: 1832\ncpu: 381929.5851528414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 252082.35789093137,
            "unit": "ns/iter",
            "extra": "iterations: 2769\ncpu: 252079.37883712503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 380268.0693231561,
            "unit": "ns/iter",
            "extra": "iterations: 1832\ncpu: 380266.64847161295 ns\nthreads: 1"
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
        "date": 1705957965270,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6763.71187451218,
            "unit": "ns/iter",
            "extra": "iterations: 102320\ncpu: 6763.352228303362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57572.02439539283,
            "unit": "ns/iter",
            "extra": "iterations: 14224\ncpu: 57570.40916760403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 90940.80286168249,
            "unit": "ns/iter",
            "extra": "iterations: 9435\ncpu: 90937.89083200847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 132006.03279190988,
            "unit": "ns/iter",
            "extra": "iterations: 6526\ncpu: 132001.5936254981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 173513.7372423479,
            "unit": "ns/iter",
            "extra": "iterations: 4997\ncpu: 173506.40384230544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 213988.5365370322,
            "unit": "ns/iter",
            "extra": "iterations: 4037\ncpu: 213980.05945008664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 255043.23823527637,
            "unit": "ns/iter",
            "extra": "iterations: 3400\ncpu: 255031.52941176482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 300420.1728479151,
            "unit": "ns/iter",
            "extra": "iterations: 2939\ncpu: 300412.7254168085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 336754.6181606513,
            "unit": "ns/iter",
            "extra": "iterations: 2577\ncpu: 336735.6228172293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5565.935394189738,
            "unit": "ns/iter",
            "extra": "iterations: 126614\ncpu: 5565.758131012376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4595.70259869017,
            "unit": "ns/iter",
            "extra": "iterations: 152269\ncpu: 4595.619594270667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4570.691537374819,
            "unit": "ns/iter",
            "extra": "iterations: 152884\ncpu: 4570.49266110254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4595.957992013197,
            "unit": "ns/iter",
            "extra": "iterations: 151495\ncpu: 4595.881712267743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7299.400839212764,
            "unit": "ns/iter",
            "extra": "iterations: 95804\ncpu: 7299.107552920551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24131.624678662898,
            "unit": "ns/iter",
            "extra": "iterations: 33454\ncpu: 24130.854307407193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123723.9782103355,
            "unit": "ns/iter",
            "extra": "iterations: 6884\ncpu: 123719.55258570613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 94763.94058746108,
            "unit": "ns/iter",
            "extra": "iterations: 8988\ncpu: 94758.53360035618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 93225.77486910853,
            "unit": "ns/iter",
            "extra": "iterations: 9168\ncpu: 93222.72033158818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 90330.0175383045,
            "unit": "ns/iter",
            "extra": "iterations: 9465\ncpu: 90327.05758056002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 186149.8547261717,
            "unit": "ns/iter",
            "extra": "iterations: 4729\ncpu: 186141.10805667102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1609244.0625001814,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1609202.9513888883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1279865.1184572463,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1279824.2424242417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1280265.8266850107,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 1280228.748280605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1270318.9890560482,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1270260.1915184676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 692819.0623122711,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 692786.5615615625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1230871.513297839,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 1230802.3936170232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 31672.88201108993,
            "unit": "ns/iter",
            "extra": "iterations: 26155\ncpu: 31670.885108009894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 159200.91138541425,
            "unit": "ns/iter",
            "extra": "iterations: 5428\ncpu: 159196.07590272644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 118939.75416150421,
            "unit": "ns/iter",
            "extra": "iterations: 7269\ncpu: 118934.13124226156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 123724.5325197437,
            "unit": "ns/iter",
            "extra": "iterations: 6965\ncpu: 123720.63173007919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 115732.30158944748,
            "unit": "ns/iter",
            "extra": "iterations: 7424\ncpu: 115729.00053879339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 202855.612403083,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 202848.5553206484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1647148.4603174105,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1647064.0211640212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1308384.695224674,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1308349.4382022438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1320140.1914892625,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1320096.5957446885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1304003.7740585,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1303954.2538354327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 723535.438910474,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 723503.4241245175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1262426.2713703327,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1262377.747625513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5998136.685897238,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5997843.589743578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2767680.147929055,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2767616.2721893387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22018.112275125277,
            "unit": "ns/iter",
            "extra": "iterations: 37132\ncpu: 22017.494344500607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 120212.8480693955,
            "unit": "ns/iter",
            "extra": "iterations: 7148\ncpu: 120209.19138220494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 92039.6406856398,
            "unit": "ns/iter",
            "extra": "iterations: 9276\ncpu: 92036.67529107332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 95031.93688297783,
            "unit": "ns/iter",
            "extra": "iterations: 9015\ncpu: 95030.08319467574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 90824.53979570865,
            "unit": "ns/iter",
            "extra": "iterations: 9398\ncpu: 90821.1959991483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 187863.17242869036,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 187861.1711322373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1623855.2118055495,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1623767.5347222276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1283462.6232877045,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1283424.1095890368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1278490.148703987,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1278431.3778990451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1259291.4358974693,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 1259268.0161943357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 685903.0768094459,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 685871.1964549477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1231363.58707123,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1231285.6200527726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2573.3867641435286,
            "unit": "ns/iter",
            "extra": "iterations: 271928\ncpu: 2573.2635109293565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17132.2510285053,
            "unit": "ns/iter",
            "extra": "iterations: 41079\ncpu: 17091.418973198084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13426.737617493523,
            "unit": "ns/iter",
            "extra": "iterations: 52130\ncpu: 13426.410895837447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13453.951994148665,
            "unit": "ns/iter",
            "extra": "iterations: 51952\ncpu: 13453.765013859012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10170.725802482419,
            "unit": "ns/iter",
            "extra": "iterations: 69067\ncpu: 10170.582188309849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66842.36973344367,
            "unit": "ns/iter",
            "extra": "iterations: 10467\ncpu: 66839.11340403155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112536.99517917936,
            "unit": "ns/iter",
            "extra": "iterations: 6223\ncpu: 112530.06588462161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27834.484036623704,
            "unit": "ns/iter",
            "extra": "iterations: 25120\ncpu: 27833.045382165583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27637.668690131395,
            "unit": "ns/iter",
            "extra": "iterations: 25369\ncpu: 27636.53277622294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27438.381988428897,
            "unit": "ns/iter",
            "extra": "iterations: 25417\ncpu: 27437.392296494505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56253.83427841784,
            "unit": "ns/iter",
            "extra": "iterations: 12521\ncpu: 56252.048558421826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51561.074213836706,
            "unit": "ns/iter",
            "extra": "iterations: 13515\ncpu: 51560.443951164976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 18876.997490215967,
            "unit": "ns/iter",
            "extra": "iterations: 37055\ncpu: 18876.372959114993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 95698.12219044258,
            "unit": "ns/iter",
            "extra": "iterations: 7341\ncpu: 95694.03351042137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 77404.64938080477,
            "unit": "ns/iter",
            "extra": "iterations: 9044\ncpu: 77400.39805395962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 76641.3501422022,
            "unit": "ns/iter",
            "extra": "iterations: 9142\ncpu: 76637.93480638861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 76724.38698743242,
            "unit": "ns/iter",
            "extra": "iterations: 9145\ncpu: 76721.64024056845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 118752.5596407893,
            "unit": "ns/iter",
            "extra": "iterations: 5902\ncpu: 118750.4235852266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 468479.5533915637,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 468472.330423106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 395045.487846224,
            "unit": "ns/iter",
            "extra": "iterations: 1769\ncpu: 395012.7190503141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 387799.4939024269,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 387772.94900222437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 395158.8983625211,
            "unit": "ns/iter",
            "extra": "iterations: 1771\ncpu: 395145.96273292013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 248871.41456481908,
            "unit": "ns/iter",
            "extra": "iterations: 2815\ncpu: 248845.96802841677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 384663.45134688925,
            "unit": "ns/iter",
            "extra": "iterations: 1819\ncpu: 384639.03243540635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 19895.48499232431,
            "unit": "ns/iter",
            "extra": "iterations: 35182\ncpu: 19894.49718606112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 97256.25323140678,
            "unit": "ns/iter",
            "extra": "iterations: 7195\ncpu: 97250.91035441218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 81266.8104011171,
            "unit": "ns/iter",
            "extra": "iterations: 8576\ncpu: 81265.35680970237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 82506.2682494755,
            "unit": "ns/iter",
            "extra": "iterations: 8466\ncpu: 82503.071107961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 82611.46007784094,
            "unit": "ns/iter",
            "extra": "iterations: 8479\ncpu: 82606.40405708192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 125639.20496671106,
            "unit": "ns/iter",
            "extra": "iterations: 5557\ncpu: 125628.90048587378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 471005.47638329346,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 470980.70175438694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 390919.27008927386,
            "unit": "ns/iter",
            "extra": "iterations: 1792\ncpu: 390914.2299107136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 395517.8071266693,
            "unit": "ns/iter",
            "extra": "iterations: 1768\ncpu: 395517.8733031715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 388393.6773836331,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 388366.6297117487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 254635.447234343,
            "unit": "ns/iter",
            "extra": "iterations: 2748\ncpu: 254622.5618631722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 386093.91929244297,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 386079.8231066856 ns\nthreads: 1"
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
        "date": 1705959725229,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6862.675840408727,
            "unit": "ns/iter",
            "extra": "iterations: 101885\ncpu: 6862.645139127449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58165.2918677314,
            "unit": "ns/iter",
            "extra": "iterations: 14092\ncpu: 58163.00028384899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91392.75740463975,
            "unit": "ns/iter",
            "extra": "iterations: 9386\ncpu: 91388.89835925847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 132420.7533446135,
            "unit": "ns/iter",
            "extra": "iterations: 6503\ncpu: 132415.3006304783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 174409.68155300434,
            "unit": "ns/iter",
            "extra": "iterations: 4971\ncpu: 174403.21866827612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 216213.2506866394,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 216207.215980025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 257093.73843417855,
            "unit": "ns/iter",
            "extra": "iterations: 3372\ncpu: 257083.27402135238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 298099.84264657256,
            "unit": "ns/iter",
            "extra": "iterations: 2917\ncpu: 298092.21803222515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 339969.7766081767,
            "unit": "ns/iter",
            "extra": "iterations: 2565\ncpu: 339954.26900584804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5597.098130617114,
            "unit": "ns/iter",
            "extra": "iterations: 125068\ncpu: 5596.912879393621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4628.106887004756,
            "unit": "ns/iter",
            "extra": "iterations: 150617\ncpu: 4627.899905057202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4625.684303814085,
            "unit": "ns/iter",
            "extra": "iterations: 152330\ncpu: 4625.608218998227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4631.114390509642,
            "unit": "ns/iter",
            "extra": "iterations: 151315\ncpu: 4630.88590027427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7270.4978018673355,
            "unit": "ns/iter",
            "extra": "iterations: 96673\ncpu: 7270.400215158318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23931.003432052818,
            "unit": "ns/iter",
            "extra": "iterations: 33799\ncpu: 23930.855942483526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 125711.27288784982,
            "unit": "ns/iter",
            "extra": "iterations: 6794\ncpu: 125706.9325875769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 95145.41619270346,
            "unit": "ns/iter",
            "extra": "iterations: 8967\ncpu: 95142.83483885358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 95114.66399554964,
            "unit": "ns/iter",
            "extra": "iterations: 8985\ncpu: 95111.36338341686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 90701.2186031676,
            "unit": "ns/iter",
            "extra": "iterations: 9364\ncpu: 90697.5544639044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 187441.7619250457,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 187437.96848381616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1627528.2749561586,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1627463.3975481603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1276669.895604384,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1276625.0000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1270453.9246574813,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1270423.835616436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1265228.3142857773,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1265172.1088435417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 698324.4712991016,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 698305.8912386708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1230658.5731382251,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 1230628.9893617043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 31987.829479991447,
            "unit": "ns/iter",
            "extra": "iterations: 25692\ncpu: 31987.984586641756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 159193.47499999712,
            "unit": "ns/iter",
            "extra": "iterations: 5400\ncpu: 159189.14814814847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 122150.31766705857,
            "unit": "ns/iter",
            "extra": "iterations: 7064\ncpu: 122149.84428086056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 125258.50531528053,
            "unit": "ns/iter",
            "extra": "iterations: 6867\ncpu: 125254.15756516652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 118564.65550963725,
            "unit": "ns/iter",
            "extra": "iterations: 7260\ncpu: 118563.99449035802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 204453.88169749052,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 204449.35988620203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1652563.4875445422,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1652530.6049822115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1301305.3840782316,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1301237.9888268209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1329474.6206895525,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1329446.5517241426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1309340.7478871879,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1309298.1690140832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 734340.6172741787,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 734320.4437400947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1274055.373626497,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1273999.7252747242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6080586.352941193,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6080473.856209147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2887443.335404023,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2887319.2546583894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22077.171776827443,
            "unit": "ns/iter",
            "extra": "iterations: 37083\ncpu: 22076.23169646459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 121521.99618374286,
            "unit": "ns/iter",
            "extra": "iterations: 7075\ncpu: 121517.10247349784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94623.68425127545,
            "unit": "ns/iter",
            "extra": "iterations: 9042\ncpu: 94619.4647201945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94139.72620226524,
            "unit": "ns/iter",
            "extra": "iterations: 9087\ncpu: 94135.13810938649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 91969.89625795731,
            "unit": "ns/iter",
            "extra": "iterations: 9273\ncpu: 91966.3107947807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 189800.4348395553,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 189790.48242741683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1635055.453427152,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1635027.0650263664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1272839.344262326,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1272789.2076502712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1277016.8686730606,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1276951.0259917926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1256898.0013494291,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 1256843.724696365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 703006.2741691568,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 702989.9546827782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1231296.8535620603,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1231240.2374670152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2589.517894619896,
            "unit": "ns/iter",
            "extra": "iterations: 270165\ncpu: 2589.4501508337676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17322.18937987172,
            "unit": "ns/iter",
            "extra": "iterations: 40395\ncpu: 17321.5917811611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13902.908857510853,
            "unit": "ns/iter",
            "extra": "iterations: 52193\ncpu: 13902.567394095058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13913.450875448472,
            "unit": "ns/iter",
            "extra": "iterations: 50260\ncpu: 13912.449263828086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10268.528414158232,
            "unit": "ns/iter",
            "extra": "iterations: 68399\ncpu: 10268.160353221498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62736.21505856782,
            "unit": "ns/iter",
            "extra": "iterations: 11183\ncpu: 62732.81766967719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 113684.98329821705,
            "unit": "ns/iter",
            "extra": "iterations: 6167\ncpu: 113682.73066320733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28168.859227400957,
            "unit": "ns/iter",
            "extra": "iterations: 24877\ncpu: 28168.70201390829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27520.01169086052,
            "unit": "ns/iter",
            "extra": "iterations: 25490\ncpu: 27519.55668889756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27476.07595135901,
            "unit": "ns/iter",
            "extra": "iterations: 25411\ncpu: 27475.37287001683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58094.85716653351,
            "unit": "ns/iter",
            "extra": "iterations: 12070\ncpu: 58091.83927091975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52162.08935716223,
            "unit": "ns/iter",
            "extra": "iterations: 14996\ncpu: 52161.20298746328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19024.02646979162,
            "unit": "ns/iter",
            "extra": "iterations: 36910\ncpu: 19023.649417501772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 96590.08902692788,
            "unit": "ns/iter",
            "extra": "iterations: 7245\ncpu: 96585.0517598349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 78277.95020098223,
            "unit": "ns/iter",
            "extra": "iterations: 8956\ncpu: 78273.50379633675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 77258.7721421535,
            "unit": "ns/iter",
            "extra": "iterations: 9089\ncpu: 77256.50786665124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 76078.51021518053,
            "unit": "ns/iter",
            "extra": "iterations: 9202\ncpu: 76075.74440338979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 116449.23236858354,
            "unit": "ns/iter",
            "extra": "iterations: 6012\ncpu: 116447.40518962187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 483334.15756739257,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 483294.4713199758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 396704.0783201085,
            "unit": "ns/iter",
            "extra": "iterations: 1762\ncpu: 396689.6140749174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 396706.5628539049,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 396686.9195922929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 399377.8154727887,
            "unit": "ns/iter",
            "extra": "iterations: 1745\ncpu: 399344.18338109244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 249068.94845360226,
            "unit": "ns/iter",
            "extra": "iterations: 2813\ncpu: 249057.7319587584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 388761.49666294974,
            "unit": "ns/iter",
            "extra": "iterations: 1798\ncpu: 388748.776418242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 19590.886079840315,
            "unit": "ns/iter",
            "extra": "iterations: 35797\ncpu: 19590.02151018267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 100093.45376588688,
            "unit": "ns/iter",
            "extra": "iterations: 6997\ncpu: 100087.59468343577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 82075.86925422747,
            "unit": "ns/iter",
            "extra": "iterations: 8528\ncpu: 82069.27767354615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 81728.23143593127,
            "unit": "ns/iter",
            "extra": "iterations: 8538\ncpu: 81728.66010775355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 81748.64973199437,
            "unit": "ns/iter",
            "extra": "iterations: 8582\ncpu: 81747.01701235095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 122685.01401540636,
            "unit": "ns/iter",
            "extra": "iterations: 5708\ncpu: 122680.27330063115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 483184.2641770509,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 483176.69432918273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 395282.2943502637,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 395284.5762711858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 401084.51034481847,
            "unit": "ns/iter",
            "extra": "iterations: 1740\ncpu: 401067.3563218399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 389453.24527253665,
            "unit": "ns/iter",
            "extra": "iterations: 1798\ncpu: 389438.37597330415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 257534.37923419033,
            "unit": "ns/iter",
            "extra": "iterations: 2716\ncpu: 257521.28129602177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 389626.7189943831,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 389607.43016759306 ns\nthreads: 1"
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
        "date": 1705961448535,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6798.893112583689,
            "unit": "ns/iter",
            "extra": "iterations: 103043\ncpu: 6798.710247178363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56780.96116910416,
            "unit": "ns/iter",
            "extra": "iterations: 14370\ncpu: 56780.41057759221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 89846.44700944597,
            "unit": "ns/iter",
            "extra": "iterations: 9530\ncpu: 89843.14795382999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 130786.50799939895,
            "unit": "ns/iter",
            "extra": "iterations: 6563\ncpu: 130769.28234039305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 171975.44986127628,
            "unit": "ns/iter",
            "extra": "iterations: 5046\ncpu: 171966.80539040818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 211515.2472540887,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 211502.36758603854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 252737.61390748306,
            "unit": "ns/iter",
            "extra": "iterations: 3437\ncpu: 252723.62525458244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 294800.1910870871,
            "unit": "ns/iter",
            "extra": "iterations: 2962\ncpu: 294772.8899392301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 333122.01994628203,
            "unit": "ns/iter",
            "extra": "iterations: 2607\ncpu: 333105.98388952797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5698.1695470823815,
            "unit": "ns/iter",
            "extra": "iterations: 122031\ncpu: 5697.58012308347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4672.337745371241,
            "unit": "ns/iter",
            "extra": "iterations: 149213\ncpu: 4671.961558309261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4634.231101297133,
            "unit": "ns/iter",
            "extra": "iterations: 150804\ncpu: 4634.003076841457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4689.332828905128,
            "unit": "ns/iter",
            "extra": "iterations: 149344\ncpu: 4689.245634240418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7213.620241971391,
            "unit": "ns/iter",
            "extra": "iterations: 96127\ncpu: 7213.250179450102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24327.319626336666,
            "unit": "ns/iter",
            "extra": "iterations: 33292\ncpu: 24325.507629460546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126233.96584078662,
            "unit": "ns/iter",
            "extra": "iterations: 6821\ncpu: 126224.38058935634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 94289.4185017093,
            "unit": "ns/iter",
            "extra": "iterations: 9037\ncpu: 94286.11264800277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 94876.07715364997,
            "unit": "ns/iter",
            "extra": "iterations: 9008\ncpu: 94869.03863232666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 90194.2748970383,
            "unit": "ns/iter",
            "extra": "iterations: 9469\ncpu: 90189.27025029043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 186224.44867723875,
            "unit": "ns/iter",
            "extra": "iterations: 4725\ncpu: 186210.45502645496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1642869.0017824455,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1642797.1479500872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1322104.0198581934,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1321995.602836881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1348493.974576273,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1348402.2598870061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1301725.6075418359,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1301617.4581005576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 746545.3333333008,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 746483.0985915491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1267018.357435272,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1266965.8935879932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32610.428112732676,
            "unit": "ns/iter",
            "extra": "iterations: 25227\ncpu: 32610.155785467938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158693.4573529424,
            "unit": "ns/iter",
            "extra": "iterations: 5440\ncpu: 158690.33088235278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 124101.34260321115,
            "unit": "ns/iter",
            "extra": "iterations: 6976\ncpu: 124101.27580275251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 125169.48026220115,
            "unit": "ns/iter",
            "extra": "iterations: 6865\ncpu: 125169.46831755288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 120588.49421232214,
            "unit": "ns/iter",
            "extra": "iterations: 7084\ncpu: 120579.00903444404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 205702.18096835833,
            "unit": "ns/iter",
            "extra": "iterations: 4172\ncpu: 205699.2569511029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1710110.3406593536,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1710057.875457868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1349876.324127969,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1349800.8720930235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1383674.7351664251,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1383570.6222865332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1327188.9618105157,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1327110.8910891102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 754097.6116977663,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 754064.987814781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1293569.7507002659,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1293485.9943977608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6147270.50000029,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6146976.9736841945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2840101.279635307,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2839966.261398165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22368.250628965583,
            "unit": "ns/iter",
            "extra": "iterations: 36568\ncpu: 22367.042222708544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 120896.93399664074,
            "unit": "ns/iter",
            "extra": "iterations: 7136\ncpu: 120889.96636771252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 95952.62670849035,
            "unit": "ns/iter",
            "extra": "iterations: 8926\ncpu: 95946.63903204162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 95776.92312856931,
            "unit": "ns/iter",
            "extra": "iterations: 8937\ncpu: 95771.59001902233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93687.90389268422,
            "unit": "ns/iter",
            "extra": "iterations: 9094\ncpu: 93680.06377831512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 189205.16851248406,
            "unit": "ns/iter",
            "extra": "iterations: 4605\ncpu: 189190.20629750213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1669805.2724014053,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1669704.3010752648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1314702.1440677352,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1314637.7118644034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1311581.8115330753,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1311449.3670886054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1294261.5509065269,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1294063.5983263636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 728818.8607198676,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 728733.5680751195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1264076.537517098,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1264031.3778990468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2562.5551227640376,
            "unit": "ns/iter",
            "extra": "iterations: 272392\ncpu: 2562.515418955045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17352.000843527218,
            "unit": "ns/iter",
            "extra": "iterations: 40307\ncpu: 17351.405463071074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13110.350748365303,
            "unit": "ns/iter",
            "extra": "iterations: 53383\ncpu: 13109.488039263517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13007.138816095325,
            "unit": "ns/iter",
            "extra": "iterations: 53805\ncpu: 13006.135117554184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10209.008680048804,
            "unit": "ns/iter",
            "extra": "iterations: 68548\ncpu: 10208.52103635411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63345.0096753735,
            "unit": "ns/iter",
            "extra": "iterations: 11059\ncpu: 63342.915272628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115088.2469482137,
            "unit": "ns/iter",
            "extra": "iterations: 6062\ncpu: 115077.46618277741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28406.584966261147,
            "unit": "ns/iter",
            "extra": "iterations: 24598\ncpu: 28405.60208147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28311.96157739422,
            "unit": "ns/iter",
            "extra": "iterations: 24699\ncpu: 28311.251467670663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28082.303930621518,
            "unit": "ns/iter",
            "extra": "iterations: 24907\ncpu: 28081.79628216949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58392.05169695859,
            "unit": "ns/iter",
            "extra": "iterations: 12051\ncpu: 58387.99269770123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52857.943466108234,
            "unit": "ns/iter",
            "extra": "iterations: 13231\ncpu: 52854.28916937493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19125.74991122726,
            "unit": "ns/iter",
            "extra": "iterations: 36611\ncpu: 19123.88626369128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 95084.00884234029,
            "unit": "ns/iter",
            "extra": "iterations: 7351\ncpu: 95078.15263229526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 77707.55786087562,
            "unit": "ns/iter",
            "extra": "iterations: 9013\ncpu: 77704.08299123483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 79246.29410458612,
            "unit": "ns/iter",
            "extra": "iterations: 9007\ncpu: 79239.85788830945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 77563.95130549495,
            "unit": "ns/iter",
            "extra": "iterations: 9077\ncpu: 77559.2927178579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 117085.47169812133,
            "unit": "ns/iter",
            "extra": "iterations: 5989\ncpu: 117075.92252462835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 490600.5979021191,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 490567.6923076964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 402529.32797239535,
            "unit": "ns/iter",
            "extra": "iterations: 1741\ncpu: 402511.48765077506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 397771.4533029297,
            "unit": "ns/iter",
            "extra": "iterations: 1756\ncpu: 397760.2505694725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 398263.69545453,
            "unit": "ns/iter",
            "extra": "iterations: 1760\ncpu: 398244.5454545443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 255144.9108118062,
            "unit": "ns/iter",
            "extra": "iterations: 2747\ncpu: 255133.27266108268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 392374.74733296497,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 392346.04154968983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20018.530987752154,
            "unit": "ns/iter",
            "extra": "iterations: 35272\ncpu: 20017.778974824178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 99379.7816750154,
            "unit": "ns/iter",
            "extra": "iterations: 6985\ncpu: 99379.49892626962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 83670.79428231313,
            "unit": "ns/iter",
            "extra": "iterations: 8395\ncpu: 83667.62358546896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 83036.5522228761,
            "unit": "ns/iter",
            "extra": "iterations: 8435\ncpu: 83034.67694131692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 82717.45676825043,
            "unit": "ns/iter",
            "extra": "iterations: 8466\ncpu: 82714.00897708544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 129823.21616197983,
            "unit": "ns/iter",
            "extra": "iterations: 5482\ncpu: 129819.64611455784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 489204.877536688,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 489187.1238628378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 402232.17233425943,
            "unit": "ns/iter",
            "extra": "iterations: 1735\ncpu: 402218.84726224316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 401145.8660561345,
            "unit": "ns/iter",
            "extra": "iterations: 1747\ncpu: 401123.2398397299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 395028.21156007715,
            "unit": "ns/iter",
            "extra": "iterations: 1782\ncpu: 395027.0482603873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 261149.30182360706,
            "unit": "ns/iter",
            "extra": "iterations: 2687\ncpu: 261140.52847041577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 393090.3009599594,
            "unit": "ns/iter",
            "extra": "iterations: 1771\ncpu: 393082.77809148084 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}