window.BENCHMARK_DATA = {
  "lastUpdate": 1705961347363,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-9 18.04 Debug c++-17": [
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
        "date": 1702489593242,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17689.420373064153,
            "unit": "ns/iter",
            "extra": "iterations: 39189\ncpu: 17689.0964301207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 143680.5981212568,
            "unit": "ns/iter",
            "extra": "iterations: 5855\ncpu: 143681.0418445773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 264653.10442748724,
            "unit": "ns/iter",
            "extra": "iterations: 3275\ncpu: 264635.0229007634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 389653.07878246903,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 389614.6821844228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 508586.09325511154,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 508554.48680351884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 511681.11399999814,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511675.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 608663.784999976,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608663.5000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 704914.3697478399,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 704886.9365928185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 802432.9591303879,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 802428.2608695659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14155.04107236727,
            "unit": "ns/iter",
            "extra": "iterations: 49498\ncpu: 14155.22647379693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11907.717571907,
            "unit": "ns/iter",
            "extra": "iterations: 58861\ncpu: 11907.030121812413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 12117.245634194704,
            "unit": "ns/iter",
            "extra": "iterations: 53083\ncpu: 12116.398847088532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11848.696124031228,
            "unit": "ns/iter",
            "extra": "iterations: 59340\ncpu: 11847.94068082239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20179.621242254852,
            "unit": "ns/iter",
            "extra": "iterations: 34695\ncpu: 20178.26199740599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60287.220099996826,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60287.929999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 287163.138823531,
            "unit": "ns/iter",
            "extra": "iterations: 2975\ncpu: 287163.7647058826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 229029.77088369257,
            "unit": "ns/iter",
            "extra": "iterations: 3723\ncpu: 229024.33521353762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 230711.19962435061,
            "unit": "ns/iter",
            "extra": "iterations: 3727\ncpu: 230699.8926750741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 226338.63587967967,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 226328.16076656836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 515948.858999991,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515931.2000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4341485.032710237,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4341279.906542058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3545535.7748094313,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3545387.4045801484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3539487.278625727,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3539316.030534342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3521392.321969739,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3521180.68181818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2024953.2565789227,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2024876.0964912311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3431027.2481480683,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3431036.2962962943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12962956.63414695,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12962295.12195125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5702004.0300005805,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5702074.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16627316.984127786,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 16626734.920634875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 66053.85703222417,
            "unit": "ns/iter",
            "extra": "iterations: 12912\ncpu: 66050.99907063188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 330753.5374855929,
            "unit": "ns/iter",
            "extra": "iterations: 2601\ncpu: 330744.9058054591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 262947.68548633787,
            "unit": "ns/iter",
            "extra": "iterations: 3259\ncpu: 262938.5087450143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 258944.32768017973,
            "unit": "ns/iter",
            "extra": "iterations: 3302\ncpu: 258942.67110841864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 251415.87098671787,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 251396.73048600933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 504949.0680000872,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504947.60000000126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4412502.019047657,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4412376.666666687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3603939.9379848326,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3603788.759689923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3615664.809338143,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3615461.0894941534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3583081.54230739,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3582882.6923077027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2059562.9910713192,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2059462.2767857094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3489194.36194027,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3489083.9552238765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13207007.777777793,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13206254.320987698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5774298.430000044,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5774296.999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56575.86529999889,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56572.32000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 319487.4063079533,
            "unit": "ns/iter",
            "extra": "iterations: 2695\ncpu: 319476.9573283854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 233257.05070883196,
            "unit": "ns/iter",
            "extra": "iterations: 3668\ncpu: 233247.41003271655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 223961.10577173345,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 223951.26664925512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 222163.8368886588,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 222155.07284079056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 575673.1320504731,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 575632.0504313202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4403008.118483783,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4402752.606635061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3546869.0763357226,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3546610.6870228997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3525568.2319390834,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3525436.501901143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3545425.3384029847,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3545277.566539906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2021421.7978261588,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2021346.086956531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3452725.911110806,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3452612.5925925956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6891.182658687662,
            "unit": "ns/iter",
            "extra": "iterations: 102103\ncpu: 6890.839642321953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38644.68666262346,
            "unit": "ns/iter",
            "extra": "iterations: 18137\ncpu: 38642.008049842676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31084.026695371835,
            "unit": "ns/iter",
            "extra": "iterations: 23225\ncpu: 31082.368137782556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31300.58073040817,
            "unit": "ns/iter",
            "extra": "iterations: 23083\ncpu: 31291.339947147346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24181.064000553346,
            "unit": "ns/iter",
            "extra": "iterations: 28781\ncpu: 24179.754004377897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 170776.09293860072,
            "unit": "ns/iter",
            "extra": "iterations: 4121\ncpu: 170760.34942975055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 296791.9961783818,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 296774.9893842907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74781.94725039991,
            "unit": "ns/iter",
            "extra": "iterations: 9365\ncpu: 74779.58355579252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74762.86265957843,
            "unit": "ns/iter",
            "extra": "iterations: 9400\ncpu: 74762.5106382965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74587.35135999935,
            "unit": "ns/iter",
            "extra": "iterations: 9375\ncpu: 74586.75200000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 150313.80090108386,
            "unit": "ns/iter",
            "extra": "iterations: 4661\ncpu: 150305.49238360758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 138988.38281406116,
            "unit": "ns/iter",
            "extra": "iterations: 5039\ncpu: 138980.47231593708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46132.75478901622,
            "unit": "ns/iter",
            "extra": "iterations: 15191\ncpu: 46130.75505233342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 223285.4499681514,
            "unit": "ns/iter",
            "extra": "iterations: 3138\ncpu: 223274.6653919677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 182572.31847797555,
            "unit": "ns/iter",
            "extra": "iterations: 3837\ncpu: 182561.63669533608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 182118.81711757975,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 182109.3392299687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 180856.8981073157,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 180846.56468758133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 337513.05432693136,
            "unit": "ns/iter",
            "extra": "iterations: 2080\ncpu: 337498.0769230741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1282031.3729431604,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1281919.0127970874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1068132.6722560795,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1068079.725609771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1073855.0061254832,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1073854.8238897477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1060363.7060607222,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1060321.2121212252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 683071.5537109455,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 683028.2226562568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1046418.2728637042,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1046332.6836581709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46304.14432989998,
            "unit": "ns/iter",
            "extra": "iterations: 15132\ncpu: 46302.2799365583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 226022.51552394035,
            "unit": "ns/iter",
            "extra": "iterations: 3092\ncpu: 226009.99353169347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 182931.8274693697,
            "unit": "ns/iter",
            "extra": "iterations: 3837\ncpu: 182919.5725827459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 182617.61546473086,
            "unit": "ns/iter",
            "extra": "iterations: 3841\ncpu: 182600.31241864094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 181819.18217254482,
            "unit": "ns/iter",
            "extra": "iterations: 3848\ncpu: 181808.00415800404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 338131.5070082292,
            "unit": "ns/iter",
            "extra": "iterations: 2069\ncpu: 338113.5814403087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1274008.1381819188,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1273967.8181818384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1072107.8134556997,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1072090.061162076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1060085.4530302898,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1060070.9090909036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1057935.380664637,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1057880.9667673726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 682672.5566406733,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 682643.3593749986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1047215.4813153553,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1047169.95515694 ns\nthreads: 1"
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
        "date": 1702503243286,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17071.50113373214,
            "unit": "ns/iter",
            "extra": "iterations: 41456\ncpu: 17069.999517560787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 137444.7750040604,
            "unit": "ns/iter",
            "extra": "iterations: 6169\ncpu: 137442.81082833523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 259084.82093992515,
            "unit": "ns/iter",
            "extra": "iterations: 3362\ncpu: 259065.8536585366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 379185.0039421634,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 379178.1865965835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 497760.41996555065,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 497728.6861732647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 618102.4555160117,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 618056.15658363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 594251.2120000174,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594231.7999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 689847.7194940543,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 689783.5565476188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 783708.5050847193,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 783658.5593220344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13548.105860515885,
            "unit": "ns/iter",
            "extra": "iterations: 51719\ncpu: 13547.334635240433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11414.829077644436,
            "unit": "ns/iter",
            "extra": "iterations: 61408\ncpu: 11413.988405419475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11388.27464628068,
            "unit": "ns/iter",
            "extra": "iterations: 61348\ncpu: 11387.59209754189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11377.481214599838,
            "unit": "ns/iter",
            "extra": "iterations: 61617\ncpu: 11377.092360874434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19837.490977570265,
            "unit": "ns/iter",
            "extra": "iterations: 35578\ncpu: 19837.3995165552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60357.31610000425,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60354.19999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 282408.3993388462,
            "unit": "ns/iter",
            "extra": "iterations: 3025\ncpu: 282391.6033057857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 229123.7239429142,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 229113.81632103483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 229383.43945102493,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 229364.0742734118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 228374.73149879152,
            "unit": "ns/iter",
            "extra": "iterations: 3743\ncpu: 228365.42880042698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 527311.8900000213,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527256.3999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4234778.842592687,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4234700.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3444086.2111110887,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3444004.814814808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3429684.7666666964,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3429616.2962962925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3412559.4227941246,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3412415.0735294004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1984871.0643776883,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1984813.519313299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3337371.4928057883,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3337258.6330935233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12678396.821429027,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12677651.190476194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5601681.699999971,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5601433.999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16141655.769230897,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16140263.076923078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60828.28136882259,
            "unit": "ns/iter",
            "extra": "iterations: 13939\ncpu: 60825.31028050807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 327583.4599847588,
            "unit": "ns/iter",
            "extra": "iterations: 2624\ncpu: 327558.4984756092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 259863.02035236536,
            "unit": "ns/iter",
            "extra": "iterations: 3292\ncpu: 259850.63791008497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 264588.87133600534,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 264573.65010799054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 257392.1262077438,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 257377.11352656936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 512655.14199997147,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512616.0999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4316226.17129632,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4316094.9074074095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3522909.8707223027,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3522823.5741444835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3495923.6075472822,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3495686.7924528145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3465528.511194008,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3465421.268656716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2025962.1877729204,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2025833.4061135342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3392168.1569341854,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3391991.9708029376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12928291.353658529,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12927623.170731654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5608241.919999842,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5608075.999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54535.49479999537,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54533.860000000095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 301279.8310740205,
            "unit": "ns/iter",
            "extra": "iterations: 2877\ncpu: 301273.5140771645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 230289.54826565788,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 230279.94084431365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 223480.04391009265,
            "unit": "ns/iter",
            "extra": "iterations: 3826\ncpu: 223469.18452692148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 221025.33445335086,
            "unit": "ns/iter",
            "extra": "iterations: 3869\ncpu: 221017.57560093043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 594818.6479836137,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 594800.8885851002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4271455.8944954695,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4271248.623853181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3453222.297397728,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3453122.6765799355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3421805.4779411573,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3421693.014705884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3416371.6433821674,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3416201.838235283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1976680.1535181308,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1976624.0938166357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3342467.046762455,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3342356.834532385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6748.383448647362,
            "unit": "ns/iter",
            "extra": "iterations: 103774\ncpu: 6748.286661398766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38577.33800176094,
            "unit": "ns/iter",
            "extra": "iterations: 18136\ncpu: 38576.174459638016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29754.816573080672,
            "unit": "ns/iter",
            "extra": "iterations: 23508\ncpu: 29754.71754296414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29963.53266783921,
            "unit": "ns/iter",
            "extra": "iterations: 23341\ncpu: 29963.424874683915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23946.61761586983,
            "unit": "ns/iter",
            "extra": "iterations: 29235\ncpu: 23946.150162476595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 173282.606956519,
            "unit": "ns/iter",
            "extra": "iterations: 4025\ncpu: 173275.45341615027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 292200.55314712675,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 292199.41642351187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73662.6398273914,
            "unit": "ns/iter",
            "extra": "iterations: 9501\ncpu: 73659.41479844162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 73358.3779033233,
            "unit": "ns/iter",
            "extra": "iterations: 9558\ncpu: 73355.01150868402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73152.28978994973,
            "unit": "ns/iter",
            "extra": "iterations: 9569\ncpu: 73147.8628905844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 147947.40809443904,
            "unit": "ns/iter",
            "extra": "iterations: 4744\ncpu: 147940.21922428557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 136525.7436448921,
            "unit": "ns/iter",
            "extra": "iterations: 5114\ncpu: 136525.43996871106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45495.9577455621,
            "unit": "ns/iter",
            "extra": "iterations: 15383\ncpu: 45494.22739387657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 222143.840496679,
            "unit": "ns/iter",
            "extra": "iterations: 3141\ncpu: 222140.36930913542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 179548.84030808226,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 179543.95378690466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 179346.7982097331,
            "unit": "ns/iter",
            "extra": "iterations: 3910\ncpu: 179346.36828644478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 179116.1063829781,
            "unit": "ns/iter",
            "extra": "iterations: 3901\ncpu: 179112.04819277072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 336114.98799809103,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 336110.4176668283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1240178.1046100177,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1240103.7234042431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1044361.91017975,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1044308.532934143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1044620.6343283562,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1044559.7014925365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1035605.9466667594,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1035582.6666666543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 668444.953154893,
            "unit": "ns/iter",
            "extra": "iterations: 1046\ncpu: 668435.2772466553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1021446.7991265465,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1021383.5516739624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45980.42338177249,
            "unit": "ns/iter",
            "extra": "iterations: 15140\ncpu: 45980.24438573337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 221129.5347222009,
            "unit": "ns/iter",
            "extra": "iterations: 3168\ncpu: 221124.3055555524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 179011.9468574123,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 179009.45324476223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 176685.97448207147,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 176676.5538150577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178794.10101779227,
            "unit": "ns/iter",
            "extra": "iterations: 3930\ncpu: 178787.63358778405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 336129.1039770079,
            "unit": "ns/iter",
            "extra": "iterations: 2087\ncpu: 336114.27886918985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1231944.7957746838,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1231901.0563380227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1046788.1853513012,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1046726.7563527689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1039152.7284865518,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1039082.4925816046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1035449.9999999057,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1035446.3703703863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 671072.9177033126,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 671034.162679436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1024345.3674962175,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1024306.1493411352 ns\nthreads: 1"
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
        "date": 1705574891990,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18230.214970253874,
            "unit": "ns/iter",
            "extra": "iterations: 40173\ncpu: 18229.57458989869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 141344.05356249434,
            "unit": "ns/iter",
            "extra": "iterations: 5993\ncpu: 141340.08009344235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 267083.6537037125,
            "unit": "ns/iter",
            "extra": "iterations: 3240\ncpu: 267063.58024691365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 387935.50807900267,
            "unit": "ns/iter",
            "extra": "iterations: 2228\ncpu: 387915.3949730701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 513595.73817964765,
            "unit": "ns/iter",
            "extra": "iterations: 1692\ncpu: 513547.9905437354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 514339.2539999923,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514331.7000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 613524.3379999906,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 613491.5999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 713298.8929946332,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 713271.4395688991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 812527.448154636,
            "unit": "ns/iter",
            "extra": "iterations: 1138\ncpu: 812526.8014059747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13818.43643556448,
            "unit": "ns/iter",
            "extra": "iterations: 50555\ncpu: 13818.247453268743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11612.60235841222,
            "unit": "ns/iter",
            "extra": "iterations: 60210\ncpu: 11612.577644909501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11631.929509317688,
            "unit": "ns/iter",
            "extra": "iterations: 59937\ncpu: 11631.898493418086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11593.057090788,
            "unit": "ns/iter",
            "extra": "iterations: 60360\ncpu: 11592.81974817761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19962.449124306862,
            "unit": "ns/iter",
            "extra": "iterations: 35115\ncpu: 19961.833974085137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56312.258299999485,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56307.60000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 282429.478849958,
            "unit": "ns/iter",
            "extra": "iterations: 3026\ncpu: 282413.4170522141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 229275.31340872232,
            "unit": "ns/iter",
            "extra": "iterations: 3714\ncpu: 229255.3850296179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 231289.61338389738,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 231274.04497426166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 228835.8814377656,
            "unit": "ns/iter",
            "extra": "iterations: 3728\ncpu: 228816.7918454934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 522853.5539999939,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522809.80000000104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4417507.595237999,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4417447.142857138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3599396.1434108987,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3599362.0155038796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3622797.953307463,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3622707.7821011585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3543551.586206854,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3543514.176245217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2031829.6681319145,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2031809.890109893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3495520.128787823,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3495506.0606060657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13026402.024691401,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13026023.45679016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5744970.590000094,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5744442.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16551014.015623977,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16550307.812499998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60898.456614406,
            "unit": "ns/iter",
            "extra": "iterations: 13841\ncpu: 60893.923849432846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 323830.4243110411,
            "unit": "ns/iter",
            "extra": "iterations: 2649\ncpu: 323812.83503208647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 258331.6875376296,
            "unit": "ns/iter",
            "extra": "iterations: 3322\ncpu: 258316.85731487075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 263167.8796324696,
            "unit": "ns/iter",
            "extra": "iterations: 3265\ncpu: 263158.03981623333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 255405.296052627,
            "unit": "ns/iter",
            "extra": "iterations: 3344\ncpu: 255406.907894736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 513139.0389999524,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513136.70000000397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4488689.850241509,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4488679.227053169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3659757.51574798,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3659747.63779526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3714467.6334665054,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3714405.5776892626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3608233.796078411,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3608213.3333333195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2079064.717149331,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2079059.2427616825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3527008.8371214224,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3526940.530303012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13236713.674999123,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13236220.00000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5819792.620000044,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5819538.999999949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54258.036900000654,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54256.999999999774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 309706.7883922066,
            "unit": "ns/iter",
            "extra": "iterations: 2774\ncpu: 309698.77433309285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 232629.72154307758,
            "unit": "ns/iter",
            "extra": "iterations: 3681\ncpu: 232629.42135289375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 223622.17154812114,
            "unit": "ns/iter",
            "extra": "iterations: 3824\ncpu: 223610.6694560669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 220956.4684824965,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 220944.954604409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 583443.7256756806,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 583423.4459459484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4450839.166666551,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4450523.333333358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3633786.9062501583,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3633640.234374985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3590720.262548119,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3590455.212355223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3534872.787072397,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3534659.695817479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2034273.6754386444,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2034206.578947365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3495044.4716982157,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3490574.3396226475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6795.532982301721,
            "unit": "ns/iter",
            "extra": "iterations: 102555\ncpu: 6795.579932719026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37936.0307451229,
            "unit": "ns/iter",
            "extra": "iterations: 18507\ncpu: 37934.21408115867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29976.896251758968,
            "unit": "ns/iter",
            "extra": "iterations: 23451\ncpu: 29976.670504456186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30795.89313914587,
            "unit": "ns/iter",
            "extra": "iterations: 22796\ncpu: 30794.16564309531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23674.7419365773,
            "unit": "ns/iter",
            "extra": "iterations: 29578\ncpu: 23674.07194536467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 171400.7574791661,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 171392.03040706337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 273633.1491022736,
            "unit": "ns/iter",
            "extra": "iterations: 2562\ncpu: 273627.283372364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75642.05527090828,
            "unit": "ns/iter",
            "extra": "iterations: 9173\ncpu: 75639.4418401833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75167.24442060351,
            "unit": "ns/iter",
            "extra": "iterations: 9320\ncpu: 75160.49356223163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74548.72332268984,
            "unit": "ns/iter",
            "extra": "iterations: 9390\ncpu: 74542.3748668796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 151384.7173206187,
            "unit": "ns/iter",
            "extra": "iterations: 4613\ncpu: 151371.2117927596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 139328.7693227047,
            "unit": "ns/iter",
            "extra": "iterations: 5020\ncpu: 139325.5378486041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45139.11770403,
            "unit": "ns/iter",
            "extra": "iterations: 15488\ncpu: 45135.14333677689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 228016.51776980667,
            "unit": "ns/iter",
            "extra": "iterations: 3067\ncpu: 227999.5761330256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 183237.41932115037,
            "unit": "ns/iter",
            "extra": "iterations: 3830\ncpu: 183227.88511749278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 181256.6010957626,
            "unit": "ns/iter",
            "extra": "iterations: 3833\ncpu: 181251.47404121974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 180792.8589842781,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 180791.77623098582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 337887.2786093733,
            "unit": "ns/iter",
            "extra": "iterations: 2071\ncpu: 337872.7667793362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1274545.198181675,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1274539.454545437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1073085.5890411653,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1072995.890410961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1092733.7903727768,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1092651.2422360256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1070922.5183485327,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1070830.581039755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 681803.0349853538,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 681764.3343051423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1058928.402420539,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1058906.807866884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45665.92476836448,
            "unit": "ns/iter",
            "extra": "iterations: 15326\ncpu: 45665.12462482113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 228789.14561518776,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 228778.66492146242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 182524.34397069577,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 182519.3042113559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 180194.86795367868,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 180191.73745173606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 180781.77421037212,
            "unit": "ns/iter",
            "extra": "iterations: 3831\ncpu: 180773.34899503784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 342294.32160313096,
            "unit": "ns/iter",
            "extra": "iterations: 2046\ncpu: 342292.71749755484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1282832.880952359,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1282746.1538461589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1073962.2331289165,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1073890.0306748396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1078614.6692308087,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1078473.230769226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1063729.0820669425,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1063669.1489361871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 681362.9590643318,
            "unit": "ns/iter",
            "extra": "iterations: 1026\ncpu: 681357.5048732907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1055669.31722049,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1055590.1812688708 ns\nthreads: 1"
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
        "date": 1705772713348,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17591.991269459875,
            "unit": "ns/iter",
            "extra": "iterations: 39631\ncpu: 17592.008781004773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 141574.30701754,
            "unit": "ns/iter",
            "extra": "iterations: 5586\ncpu: 141559.5775152166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 266287.16317734437,
            "unit": "ns/iter",
            "extra": "iterations: 3248\ncpu: 266267.58004926104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 388145.3742110045,
            "unit": "ns/iter",
            "extra": "iterations: 2218\ncpu: 388125.3832281332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 510806.45556209114,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 510796.11536197783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 512618.8680000041,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512580.90000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 609752.7410000225,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609736.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 706567.4123947739,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 706550.2677888295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 805182.7299651626,
            "unit": "ns/iter",
            "extra": "iterations: 1148\ncpu: 805140.0696864113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14048.853148664923,
            "unit": "ns/iter",
            "extra": "iterations: 50180\ncpu: 14048.696691909148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11699.288280167852,
            "unit": "ns/iter",
            "extra": "iterations: 59907\ncpu: 11698.99677833977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11736.566183234872,
            "unit": "ns/iter",
            "extra": "iterations: 59781\ncpu: 11736.570147705785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11652.22329677606,
            "unit": "ns/iter",
            "extra": "iterations: 60180\ncpu: 11652.023928215345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20035.084702582462,
            "unit": "ns/iter",
            "extra": "iterations: 34934\ncpu: 20034.862884296148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 62081.934152767644,
            "unit": "ns/iter",
            "extra": "iterations: 13668\ncpu: 62082.074919520106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 293596.317574513,
            "unit": "ns/iter",
            "extra": "iterations: 2919\ncpu: 293586.2624186364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 240636.9616793383,
            "unit": "ns/iter",
            "extra": "iterations: 3549\ncpu: 240628.31783601022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 239950.64197532102,
            "unit": "ns/iter",
            "extra": "iterations: 3564\ncpu: 239945.14590347942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 237550.7863105123,
            "unit": "ns/iter",
            "extra": "iterations: 3594\ncpu: 237540.70673344468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 544377.150999992,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544348.8999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4386558.046948301,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4386470.892018785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3559495.0344828325,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3559422.988505754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3590230.9806951205,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3590070.2702702675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3541916.8854962,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3541858.77862595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2066517.5915179595,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2066449.3303571404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3458279.712686629,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3458144.402985063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13227036.308642058,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13226672.839506183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5866522.999999688,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5866456.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16613936.765624614,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16613332.812499993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 65330.5255710206,
            "unit": "ns/iter",
            "extra": "iterations: 13003\ncpu: 65329.17019149432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 343568.815747372,
            "unit": "ns/iter",
            "extra": "iterations: 2502\ncpu: 343565.1878497194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 265542.13795234537,
            "unit": "ns/iter",
            "extra": "iterations: 3233\ncpu: 265529.9103000313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 267901.0544089755,
            "unit": "ns/iter",
            "extra": "iterations: 3198\ncpu: 267895.6222639131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 261744.01043585592,
            "unit": "ns/iter",
            "extra": "iterations: 3258\ncpu: 261732.32044198705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 535801.048000053,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535793.4000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4462175.856459228,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4461858.373205754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3616846.9727624287,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3616849.0272373618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3648313.6745096534,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3648194.1176470616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3568566.4559386866,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3568483.524904216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2110158.324999971,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2110117.045454548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3506027.2142859367,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3505990.22556389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13466694.237499153,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13466406.249999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5986392.60999903,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5986270.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58787.70819999772,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58786.800000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 310962.04965568625,
            "unit": "ns/iter",
            "extra": "iterations: 2759\ncpu: 310958.13700615964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 237004.84287689065,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 237001.6320885194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 234239.51489478338,
            "unit": "ns/iter",
            "extra": "iterations: 3659\ncpu: 234230.52746652154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 232893.6578521581,
            "unit": "ns/iter",
            "extra": "iterations: 3706\ncpu: 232891.66216945427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 611566.0835673469,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 611549.7893258453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4403398.000000221,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4403296.698113191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3564912.2758620996,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3564834.4827586394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3577822.2538458346,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3577722.3076923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3543249.8625956206,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3543154.19847327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2054616.4966886686,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2054561.5894039767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3465092.557620898,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3465091.078066925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6842.392495742109,
            "unit": "ns/iter",
            "extra": "iterations: 102182\ncpu: 6842.0504589850025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39232.77266106679,
            "unit": "ns/iter",
            "extra": "iterations: 17850\ncpu: 39232.4481792719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31343.900020954716,
            "unit": "ns/iter",
            "extra": "iterations: 23865\ncpu: 31343.532369578792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31458.543075119196,
            "unit": "ns/iter",
            "extra": "iterations: 25560\ncpu: 31458.603286384972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24124.119463688992,
            "unit": "ns/iter",
            "extra": "iterations: 29013\ncpu: 24123.579085237812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 180638.02217640096,
            "unit": "ns/iter",
            "extra": "iterations: 3878\ncpu: 180636.64259927865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 298448.20281810936,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 298444.4491887271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74369.76507431603,
            "unit": "ns/iter",
            "extra": "iterations: 9420\ncpu: 74368.86411889574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75011.90074281418,
            "unit": "ns/iter",
            "extra": "iterations: 9289\ncpu: 75005.80256216993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74025.12530452432,
            "unit": "ns/iter",
            "extra": "iterations: 9441\ncpu: 74024.38301027463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 151450.47206582254,
            "unit": "ns/iter",
            "extra": "iterations: 4618\ncpu: 151447.24989172848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 139047.6756810459,
            "unit": "ns/iter",
            "extra": "iterations: 5029\ncpu: 139045.97335454499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46232.7720396475,
            "unit": "ns/iter",
            "extra": "iterations: 15336\ncpu: 46230.894627022084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 225539.55124476313,
            "unit": "ns/iter",
            "extra": "iterations: 3093\ncpu: 225530.03556417863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 182555.64386424885,
            "unit": "ns/iter",
            "extra": "iterations: 3830\ncpu: 182553.94255874748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 181859.644155852,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 181853.97402597594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 181868.07576545404,
            "unit": "ns/iter",
            "extra": "iterations: 3854\ncpu: 181868.08510638453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 335090.3253012035,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 335086.0240963896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1272270.308957923,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1272206.2157221204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1062186.243939495,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1062115.1515151567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1064070.1079026847,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1064052.431610946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1054388.219879607,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1054358.5843373511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 685452.4877570707,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 685427.6199804044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1045012.6597015018,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1044990.149253734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46170.42384630508,
            "unit": "ns/iter",
            "extra": "iterations: 15147\ncpu: 46169.776193305785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 225288.7802374107,
            "unit": "ns/iter",
            "extra": "iterations: 3117\ncpu: 225288.99582932558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 182078.37194168926,
            "unit": "ns/iter",
            "extra": "iterations: 3842\ncpu: 182071.4211348225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 181481.07528004135,
            "unit": "ns/iter",
            "extra": "iterations: 3839\ncpu: 181477.02526699667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 181722.13012986776,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 181709.2207792198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 335095.9554810432,
            "unit": "ns/iter",
            "extra": "iterations: 2089\ncpu: 335081.90521780937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1267548.6263537349,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1267492.779783392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1058636.232980438,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1058616.7927382877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1053949.26204811,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1053885.2409638579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1045839.9159158755,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1045818.7687687497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 685661.6421568524,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 685662.5490196064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1043018.2842262815,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1042970.3869047652 ns\nthreads: 1"
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
        "date": 1705774146297,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17911.950935357963,
            "unit": "ns/iter",
            "extra": "iterations: 38969\ncpu: 17910.66488747466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 146116.91834258448,
            "unit": "ns/iter",
            "extra": "iterations: 5768\ncpu: 146106.64008321782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 275835.42460949597,
            "unit": "ns/iter",
            "extra": "iterations: 3137\ncpu: 275830.18807778135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 401036.10656121274,
            "unit": "ns/iter",
            "extra": "iterations: 2149\ncpu: 401030.80502559314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 529201.7471054164,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 529179.7074954293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 527980.3070000071,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527962.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 632038.8670000057,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632030.1000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 731236.0635930002,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 731183.9427662959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 834185.6810422643,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 834161.0062893088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14235.744349133303,
            "unit": "ns/iter",
            "extra": "iterations: 49196\ncpu: 14235.043499471523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 12064.706669871106,
            "unit": "ns/iter",
            "extra": "iterations: 58262\ncpu: 12064.575538086583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11972.15868064474,
            "unit": "ns/iter",
            "extra": "iterations: 58665\ncpu: 11971.596352169117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11946.353960983217,
            "unit": "ns/iter",
            "extra": "iterations: 58950\ncpu: 11946.030534351139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19988.16337947699,
            "unit": "ns/iter",
            "extra": "iterations: 35035\ncpu: 19988.134722420433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58093.720600004424,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58089.019999999895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 296241.7492184634,
            "unit": "ns/iter",
            "extra": "iterations: 2879\ncpu: 296238.3466481423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 237166.01112039253,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 237151.4039477342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 231379.12347020218,
            "unit": "ns/iter",
            "extra": "iterations: 3677\ncpu: 231373.07587707406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 232907.19524849197,
            "unit": "ns/iter",
            "extra": "iterations: 3662\ncpu: 232891.9716002188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 510190.29799999774,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510167.20000000147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4472177.371428101,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4471897.142857138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3623997.7529413747,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3623957.6470588245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3643025.372549328,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3642909.019607845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3609912.5647056364,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3609686.2745097964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2078546.3573032797,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2078495.0561797747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3553749.8999999044,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3553461.5384615376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13307121.687499546,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13306405.00000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5786170.860000083,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5785713.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16757344.857141439,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 16756292.063492073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62020.275424971616,
            "unit": "ns/iter",
            "extra": "iterations: 13648\ncpu: 62016.22215709266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 335894.0634796156,
            "unit": "ns/iter",
            "extra": "iterations: 2552\ncpu: 335868.1818181816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 269573.06011962425,
            "unit": "ns/iter",
            "extra": "iterations: 3177\ncpu: 269552.21907459863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 267635.32229854073,
            "unit": "ns/iter",
            "extra": "iterations: 3202\ncpu: 267624.8906933163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 258240.88395285362,
            "unit": "ns/iter",
            "extra": "iterations: 3309\ncpu: 258232.6382592944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 603944.4633636003,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 603900.0000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4516380.791044559,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4516284.577114434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3704673.4103585486,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3704490.8366533797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3721728.011999858,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3721612.8000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3683347.0551179857,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3683292.5196850463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2107474.790909175,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2107407.4999999907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3618734.832684822,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3618724.5136186774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13747779.93589614,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 13747032.05128205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6016032.980001,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6015596.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55882.655300001716,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55878.64000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 312105.3222990034,
            "unit": "ns/iter",
            "extra": "iterations: 2749\ncpu: 312091.3423062917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 234049.5686970509,
            "unit": "ns/iter",
            "extra": "iterations: 3661\ncpu: 234032.6686697632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 226361.10840823656,
            "unit": "ns/iter",
            "extra": "iterations: 3782\ncpu: 226346.58910629226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 227408.82359192873,
            "unit": "ns/iter",
            "extra": "iterations: 3764\ncpu: 227393.4909670558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 564231.6593121184,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 564200.8436080511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4466226.624999719,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4465879.807692299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3634642.945312461,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3634393.7499999925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3624894.2723735725,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3624641.6342412475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3613929.5836574445,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3613600.3891050625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2076864.8769575483,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2076790.6040268582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3568795.796934802,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3568557.85440613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6898.256761537527,
            "unit": "ns/iter",
            "extra": "iterations: 101752\ncpu: 6898.1445082160735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39771.624652246945,
            "unit": "ns/iter",
            "extra": "iterations: 17613\ncpu: 39771.01004939534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31484.77775278009,
            "unit": "ns/iter",
            "extra": "iterations: 22223\ncpu: 31483.193088241725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30624.29864451237,
            "unit": "ns/iter",
            "extra": "iterations: 22870\ncpu: 30621.95015303869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24465.770672353716,
            "unit": "ns/iter",
            "extra": "iterations: 28601\ncpu: 24463.82294325379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 174947.19884798233,
            "unit": "ns/iter",
            "extra": "iterations: 3993\ncpu: 174944.77836213555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 279160.78608766553,
            "unit": "ns/iter",
            "extra": "iterations: 2487\ncpu: 279159.99195817945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77063.43527081255,
            "unit": "ns/iter",
            "extra": "iterations: 9084\ncpu: 77061.29458388312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76904.41001651381,
            "unit": "ns/iter",
            "extra": "iterations: 9085\ncpu: 76899.55971381423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77268.11051004707,
            "unit": "ns/iter",
            "extra": "iterations: 9058\ncpu: 77260.48796643726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 153681.3945981503,
            "unit": "ns/iter",
            "extra": "iterations: 4554\ncpu: 153672.94685990526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 142535.79894287203,
            "unit": "ns/iter",
            "extra": "iterations: 4919\ncpu: 142528.86765602723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46673.033926660726,
            "unit": "ns/iter",
            "extra": "iterations: 14944\ncpu: 46670.26231263417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 227423.21322101483,
            "unit": "ns/iter",
            "extra": "iterations: 3086\ncpu: 227402.7867790048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 183155.69246860655,
            "unit": "ns/iter",
            "extra": "iterations: 3824\ncpu: 183141.97175732255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 185964.0838863887,
            "unit": "ns/iter",
            "extra": "iterations: 3767\ncpu: 185963.81736129546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 183998.09225092188,
            "unit": "ns/iter",
            "extra": "iterations: 3794\ncpu: 183992.51449657397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 336582.5237866582,
            "unit": "ns/iter",
            "extra": "iterations: 2081\ncpu: 336577.84718885046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1287243.502752104,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1287188.073394511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1086514.6403100584,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1086467.131782945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1094669.6781250152,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1094556.5625000154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1087177.1503875502,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1087092.5581395281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 690469.6551383375,
            "unit": "ns/iter",
            "extra": "iterations: 1012\ncpu: 690413.8339920973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1071983.0934150093,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1071966.921898941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47383.03566353461,
            "unit": "ns/iter",
            "extra": "iterations: 14777\ncpu: 47380.848616092495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 230931.15255356,
            "unit": "ns/iter",
            "extra": "iterations: 3035\ncpu: 230916.3756177911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 184318.17587020906,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 184315.4148128759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 185151.4060766477,
            "unit": "ns/iter",
            "extra": "iterations: 3785\ncpu: 185148.42800528483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 186188.92534539546,
            "unit": "ns/iter",
            "extra": "iterations: 3764\ncpu: 186186.37088204073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 336736.7983677367,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 336722.2275564037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1301879.614814854,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1301858.703703697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1087995.2535212021,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1087915.962441329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1090997.7120500272,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1090935.2112676208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1087071.457364384,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1086996.1240310199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 689299.9479371553,
            "unit": "ns/iter",
            "extra": "iterations: 1018\ncpu: 689278.9783889932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1071065.4196017908,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1071049.310872891 ns\nthreads: 1"
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
        "date": 1705952893522,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17472.544120210885,
            "unit": "ns/iter",
            "extra": "iterations: 40129\ncpu: 17471.666375937602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 140453.4632401839,
            "unit": "ns/iter",
            "extra": "iterations: 6012\ncpu: 140442.86427145707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 266458.3121936162,
            "unit": "ns/iter",
            "extra": "iterations: 3264\ncpu: 266449.7855392158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 387060.2203695537,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 387049.0761604324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 509995.40481783054,
            "unit": "ns/iter",
            "extra": "iterations: 1702\ncpu: 509951.1750881317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 510067.73099993553,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510064.19999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 612150.3370000027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 612145.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 705773.9323077454,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 705700.846153846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 801473.6913043199,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 801445.5652173919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14069.74649719707,
            "unit": "ns/iter",
            "extra": "iterations: 49960\ncpu: 14069.069255404309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11851.573686436592,
            "unit": "ns/iter",
            "extra": "iterations: 59095\ncpu: 11850.52373297234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11807.664810005388,
            "unit": "ns/iter",
            "extra": "iterations: 58528\ncpu: 11806.477241662136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11736.852006340006,
            "unit": "ns/iter",
            "extra": "iterations: 59935\ncpu: 11735.928922999929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19865.46644438455,
            "unit": "ns/iter",
            "extra": "iterations: 35091\ncpu: 19864.441024764168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 59596.225400002826,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59590.86999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 290117.6799049718,
            "unit": "ns/iter",
            "extra": "iterations: 2946\ncpu: 290114.8336727766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 232879.64014413842,
            "unit": "ns/iter",
            "extra": "iterations: 3607\ncpu: 232865.42833379543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 227906.4460470103,
            "unit": "ns/iter",
            "extra": "iterations: 3744\ncpu: 227887.04594017117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 224910.1265789477,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 224889.4473684213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 521185.41400000144,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521180.10000000225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4436192.699999776,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4435672.857142846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3573844.765384575,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3573718.8461538404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3581408.4712644992,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3581116.4750957824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3500703.916981091,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3500390.943396217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2036548.0903084134,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2036465.1982378862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3463536.161048869,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3463234.456928832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13117516.123457666,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13116761.728395056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5935837.659999379,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5935036.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16488642.203123406,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16488040.625000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 63685.019522448754,
            "unit": "ns/iter",
            "extra": "iterations: 13318\ncpu: 63679.30620213249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 328765.0237274848,
            "unit": "ns/iter",
            "extra": "iterations: 2613\ncpu: 328757.25220053573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 254203.3757053714,
            "unit": "ns/iter",
            "extra": "iterations: 3367\ncpu: 254184.88268488247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 262416.68564431247,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 262407.2849709213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 247932.2386199053,
            "unit": "ns/iter",
            "extra": "iterations: 3449\ncpu: 247910.524789794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 507249.80999996205,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507221.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4484555.289855272,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4484170.048309169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3639102.003905936,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3638974.2187500075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3618450.918288138,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3618256.0311284047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3551453.1832059426,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3551185.87786258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2076431.8210291027,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2076379.1946308778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3504941.5660373513,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3504683.396226401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13405504.734178182,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13404386.075949337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6036947.310000187,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6036479.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54722.666400004986,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54718.74999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 298581.4524555961,
            "unit": "ns/iter",
            "extra": "iterations: 2871\ncpu: 298558.65552072495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 230833.13656031698,
            "unit": "ns/iter",
            "extra": "iterations: 3698\ncpu: 230820.44348296424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 221012.1429679368,
            "unit": "ns/iter",
            "extra": "iterations: 3868\ncpu: 220993.82109617256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 219701.76998707582,
            "unit": "ns/iter",
            "extra": "iterations: 3865\ncpu: 219685.8732212175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 584164.595158031,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 584116.0726294562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4445452.617224355,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4445021.531100475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3589007.311538458,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3588806.538461552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3562158.2835247684,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3561851.3409961723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3494207.9812732316,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3493812.359550557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2025266.4575163971,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2025063.8344226533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3443082.0703703463,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3442734.074074086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6885.596414670892,
            "unit": "ns/iter",
            "extra": "iterations: 101748\ncpu: 6884.927467861786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38840.07351309433,
            "unit": "ns/iter",
            "extra": "iterations: 18024\ncpu: 38836.029738126745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30915.686992769224,
            "unit": "ns/iter",
            "extra": "iterations: 22549\ncpu: 30913.02496784794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31115.25748556167,
            "unit": "ns/iter",
            "extra": "iterations: 22510\ncpu: 31112.039093736254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23920.445987071475,
            "unit": "ns/iter",
            "extra": "iterations: 29243\ncpu: 23918.493314639247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 174049.3663022047,
            "unit": "ns/iter",
            "extra": "iterations: 4024\ncpu: 174045.99900596472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 285351.9763554872,
            "unit": "ns/iter",
            "extra": "iterations: 2453\ncpu: 285335.30370974075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75400.29554262897,
            "unit": "ns/iter",
            "extra": "iterations: 9288\ncpu: 75398.56804478892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75379.76702894564,
            "unit": "ns/iter",
            "extra": "iterations: 9293\ncpu: 75371.44086947192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75229.9008565326,
            "unit": "ns/iter",
            "extra": "iterations: 9340\ncpu: 75229.33618843654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 151051.74383916223,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 151046.36835278847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 139286.31120826458,
            "unit": "ns/iter",
            "extra": "iterations: 5032\ncpu: 139282.33306836267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46258.845192435016,
            "unit": "ns/iter",
            "extra": "iterations: 15122\ncpu: 46256.8840100518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 231283.27221671835,
            "unit": "ns/iter",
            "extra": "iterations: 3027\ncpu: 231281.43376280056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 186469.72480723797,
            "unit": "ns/iter",
            "extra": "iterations: 3761\ncpu: 186466.04626429235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 180694.3046854811,
            "unit": "ns/iter",
            "extra": "iterations: 3863\ncpu: 180686.40952627352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 180840.3373742493,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 180831.85452669597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 336179.87998081854,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 336163.8502160363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1290278.5860805018,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1290210.9890109857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1065645.5356601353,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1065495.1441578153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1060862.2045453736,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1060830.909090914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1048562.5067264348,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1048446.6367713079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 678665.3905039182,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 678608.5271317917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1041797.0538921854,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1041685.1796407073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46426.82465808674,
            "unit": "ns/iter",
            "extra": "iterations: 15062\ncpu: 46424.492099323186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 226563.77640959175,
            "unit": "ns/iter",
            "extra": "iterations: 3086\ncpu: 226538.20479585248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 184052.17048147545,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 184024.99342278633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 180531.3468074229,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 180511.2512873325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 182303.21025241373,
            "unit": "ns/iter",
            "extra": "iterations: 3843\ncpu: 182285.84439240184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 336647.9674173653,
            "unit": "ns/iter",
            "extra": "iterations: 2087\ncpu: 336593.9626257833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1277677.0895794916,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1277585.557586843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1070637.486238504,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1070604.28134555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1056324.7274095959,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1056301.3554217059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1039552.8749999102,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1039460.2678571306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 679776.6391852609,
            "unit": "ns/iter",
            "extra": "iterations: 1031\ncpu: 679734.3355965025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1043715.7922271896,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1043623.6173393124 ns\nthreads: 1"
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
        "date": 1705954300464,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17438.525001248967,
            "unit": "ns/iter",
            "extra": "iterations: 40118\ncpu: 17438.40420758762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 140480.40418813692,
            "unit": "ns/iter",
            "extra": "iterations: 6017\ncpu: 140466.4118331395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 263546.2326852996,
            "unit": "ns/iter",
            "extra": "iterations: 3292\ncpu: 263534.47752126365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 386928.71944692807,
            "unit": "ns/iter",
            "extra": "iterations: 2242\ncpu: 386911.73059768084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 507143.79451250605,
            "unit": "ns/iter",
            "extra": "iterations: 1713\ncpu: 507111.50029188546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 508813.07600002404,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508791.0999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 606427.2160000427,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606382.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 701738.8834729281,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 701698.7814166031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 797543.1598962693,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 797496.5427830588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14292.923148899887,
            "unit": "ns/iter",
            "extra": "iterations: 49160\ncpu: 14292.158258746971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11807.15935707431,
            "unit": "ns/iter",
            "extra": "iterations: 58918\ncpu: 11806.9384568383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11844.902020151452,
            "unit": "ns/iter",
            "extra": "iterations: 59451\ncpu: 11844.82515012362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11793.792594589748,
            "unit": "ns/iter",
            "extra": "iterations: 59362\ncpu: 11793.246521343612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20031.514877806767,
            "unit": "ns/iter",
            "extra": "iterations: 34985\ncpu: 20030.76461340573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61856.09909519045,
            "unit": "ns/iter",
            "extra": "iterations: 13815\ncpu: 61852.47195077809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 300648.88658706855,
            "unit": "ns/iter",
            "extra": "iterations: 2848\ncpu: 300632.6193820224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 243071.1396537134,
            "unit": "ns/iter",
            "extra": "iterations: 3523\ncpu: 243059.77859778545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 240775.49494095394,
            "unit": "ns/iter",
            "extra": "iterations: 3558\ncpu: 240758.9657110738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 239103.33770215604,
            "unit": "ns/iter",
            "extra": "iterations: 3586\ncpu: 239082.041271612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 563963.3629999708,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563920.8000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4386174.877358268,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4385944.811320769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3624520.9571983586,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3624375.4863813254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3599698.4202334355,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3599405.058365761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3540513.8625953146,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3540329.0076335785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2026138.8722464778,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2026080.8370044013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3484535.8314607115,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3484264.7940074834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12990395.170731971,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12989519.512195114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5778598.859999419,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5778019.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16507945.328125829,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16507301.56250002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 63641.653522993605,
            "unit": "ns/iter",
            "extra": "iterations: 13568\ncpu: 63637.82429245299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 339033.7381516312,
            "unit": "ns/iter",
            "extra": "iterations: 2532\ncpu: 339011.6508688782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 277365.04096772533,
            "unit": "ns/iter",
            "extra": "iterations: 3100\ncpu: 277347.2580645158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 271841.35236283846,
            "unit": "ns/iter",
            "extra": "iterations: 3153\ncpu: 271839.6764985742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 262425.846957597,
            "unit": "ns/iter",
            "extra": "iterations: 3254\ncpu: 262414.1057160418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 516511.97699993645,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516497.00000000105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4460584.0673077945,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4460326.442307692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3658000.594488543,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3657879.133858265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3648280.952941105,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3647981.960784317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3583302.625482609,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3583057.9150579246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2082081.228699619,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2082009.8654708457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3513007.7500001146,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3512742.4242424136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13686798.1249992,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13685507.50000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5727005.480000571,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5726676.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55567.51920000806,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55565.079999999514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 310108.4500901158,
            "unit": "ns/iter",
            "extra": "iterations: 2775\ncpu: 310090.41441441374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 240862.03500420306,
            "unit": "ns/iter",
            "extra": "iterations: 3571\ncpu: 240845.001400167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 233898.6058614029,
            "unit": "ns/iter",
            "extra": "iterations: 3651\ncpu: 233880.16981648994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 233593.81491561403,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 233585.79205225906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 587764.6900269414,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 587747.6415094325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4560776.9714284325,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4560434.285714283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3634188.17829465,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3634037.2093023313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3598594.3643411226,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3598287.5968992175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3532276.973383825,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3532215.969581764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2024541.8845317052,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2024503.921568612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3473736.9626866304,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3473578.3582089664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6917.281027527435,
            "unit": "ns/iter",
            "extra": "iterations: 101136\ncpu: 6917.037454516706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39699.707589415564,
            "unit": "ns/iter",
            "extra": "iterations: 17643\ncpu: 39698.826730147855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30653.425976184604,
            "unit": "ns/iter",
            "extra": "iterations: 22844\ncpu: 30653.248117667885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30897.633228977415,
            "unit": "ns/iter",
            "extra": "iterations: 22679\ncpu: 30896.163852021684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24362.481344967426,
            "unit": "ns/iter",
            "extra": "iterations: 28759\ncpu: 24361.215619458286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 176896.73603033356,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 176893.14791403274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 302478.7634083274,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 302476.3408304521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76207.59490639389,
            "unit": "ns/iter",
            "extra": "iterations: 9188\ncpu: 76206.02960383115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76032.38354828568,
            "unit": "ns/iter",
            "extra": "iterations: 9227\ncpu: 76029.29446190457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75229.72381874514,
            "unit": "ns/iter",
            "extra": "iterations: 9291\ncpu: 75225.72381874915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 152524.44362212997,
            "unit": "ns/iter",
            "extra": "iterations: 4594\ncpu: 152514.64954288237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 140973.71454471556,
            "unit": "ns/iter",
            "extra": "iterations: 4964\ncpu: 140970.58823529593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46017.89537328564,
            "unit": "ns/iter",
            "extra": "iterations: 15216\ncpu: 46015.891167192814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 225493.45527669063,
            "unit": "ns/iter",
            "extra": "iterations: 3108\ncpu: 225488.83526383725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 181451.36575876136,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 181440.4150453964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 182008.7626367878,
            "unit": "ns/iter",
            "extra": "iterations: 3838\ncpu: 182005.36737884238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 182462.7016401896,
            "unit": "ns/iter",
            "extra": "iterations: 3841\ncpu: 182457.90158812873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 331984.78832465515,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 331962.9805410579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1270269.4076086322,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1270206.15942029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1069757.1656441423,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1069713.0368098186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1081222.8338557726,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1081215.987460801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1058519.450831948,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1058431.7700453969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 680727.2887597317,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 680683.914728681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1048941.088191337,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1048897.6083707015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46416.83036128309,
            "unit": "ns/iter",
            "extra": "iterations: 15085\ncpu: 46415.01491547887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 228642.5868146417,
            "unit": "ns/iter",
            "extra": "iterations: 3064\ncpu: 228627.4151436041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 182205.20104167785,
            "unit": "ns/iter",
            "extra": "iterations: 3840\ncpu: 182187.03124999919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 182851.31705405793,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 182839.80151475643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 183135.20005222908,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 183118.75163228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 331610.8020832827,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 331597.2537878813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1265989.5181158527,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1265924.6376811466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1066434.3648855053,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1066397.0992366425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1066601.0350075674,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1066503.9573820538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1054546.1924811774,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1054504.812030077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 681447.6757547186,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 681418.889970787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1049346.5074851273,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1049304.4910179728 ns\nthreads: 1"
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
        "date": 1705956345047,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17963.398884058795,
            "unit": "ns/iter",
            "extra": "iterations: 38891\ncpu: 17963.107145612095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 144392.6981582604,
            "unit": "ns/iter",
            "extra": "iterations: 5864\ncpu: 144388.6255115962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 271942.93530378304,
            "unit": "ns/iter",
            "extra": "iterations: 3045\ncpu: 271943.18555008224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 395820.79292932653,
            "unit": "ns/iter",
            "extra": "iterations: 2178\ncpu: 395821.02846648305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 520777.68847542396,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 520753.4213685475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 521920.9230000388,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521925.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 621771.1189999591,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621777.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 720148.6765393578,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 720125.9547934528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 822586.910381573,
            "unit": "ns/iter",
            "extra": "iterations: 1127\ncpu: 822554.3034605143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14391.289823462164,
            "unit": "ns/iter",
            "extra": "iterations: 48602\ncpu: 14390.868688531367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 12097.716826666836,
            "unit": "ns/iter",
            "extra": "iterations: 58021\ncpu: 12097.824925458044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 12111.670635811448,
            "unit": "ns/iter",
            "extra": "iterations: 57863\ncpu: 12111.473653284493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 12005.334283017488,
            "unit": "ns/iter",
            "extra": "iterations: 58265\ncpu: 12005.19694499271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20454.887029043257,
            "unit": "ns/iter",
            "extra": "iterations: 34053\ncpu: 20454.538513493662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 59357.70710000269,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59355.99000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 298815.157248164,
            "unit": "ns/iter",
            "extra": "iterations: 2849\ncpu: 298814.60161460104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 235943.29018100898,
            "unit": "ns/iter",
            "extra": "iterations: 3646\ncpu: 235936.99945145388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 232128.28357393367,
            "unit": "ns/iter",
            "extra": "iterations: 3671\ncpu: 232123.12721329334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 227940.26780931515,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 227936.93090519548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 523099.1550000681,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523091.29999999725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4502043.980676427,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4501937.1980676325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3629094.1259844513,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3629052.7559055053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3619846.3902436504,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3619793.9024390364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3575646.494208596,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3575586.87258687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2071657.3982102922,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2071625.7270693548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3519422.965779369,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3519289.7338403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13167273.740740724,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13167286.419753108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5776953.939999884,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5775122.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16752743.873017346,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 16752295.238095233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 63297.7159361898,
            "unit": "ns/iter",
            "extra": "iterations: 13416\ncpu: 63296.14639236726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 331917.58481794957,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 331915.6080557705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 267171.30846079375,
            "unit": "ns/iter",
            "extra": "iterations: 3203\ncpu: 267164.502029348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 263682.48906679987,
            "unit": "ns/iter",
            "extra": "iterations: 3247\ncpu: 263679.95072374464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 256184.45326118547,
            "unit": "ns/iter",
            "extra": "iterations: 3327\ncpu: 256181.21430718462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 502284.02499999444,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502275.400000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4531179.864734485,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4531066.183574857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3705825.199203339,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3705742.629482058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3699687.063745041,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3699649.8007968217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3628055.7276264974,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3627939.688715956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2104161.2312924755,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2104128.5714285746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3570146.419230888,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3570051.923076916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13437501.645568509,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13437589.873417703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6073493.5000004945,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6073261.999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56865.95060000173,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56863.33000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 306851.9656897962,
            "unit": "ns/iter",
            "extra": "iterations: 2798\ncpu: 306835.7398141538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 236514.1180038444,
            "unit": "ns/iter",
            "extra": "iterations: 3627\ncpu: 236511.74524400302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 224328.73713237295,
            "unit": "ns/iter",
            "extra": "iterations: 3808\ncpu: 224318.82878151233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 221311.24456523347,
            "unit": "ns/iter",
            "extra": "iterations: 3864\ncpu: 221305.7194616989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 587073.0420054198,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 587041.3279132786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4538423.254901956,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4538247.0588235045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3634874.476562189,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3634724.2187499963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3607606.131782991,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3607429.8449612414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3582794.12307682,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3582668.846153844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2060170.0931262637,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2060056.3192904773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3521307.9469697694,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3521138.257575758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6895.39869602487,
            "unit": "ns/iter",
            "extra": "iterations: 101689\ncpu: 6895.218755224207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38705.98171271058,
            "unit": "ns/iter",
            "extra": "iterations: 18100\ncpu: 38705.87845303844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31423.62057516725,
            "unit": "ns/iter",
            "extra": "iterations: 22289\ncpu: 31422.822917133948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30649.345182328645,
            "unit": "ns/iter",
            "extra": "iterations: 22843\ncpu: 30648.73265332914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24364.242751225363,
            "unit": "ns/iter",
            "extra": "iterations: 28729\ncpu: 24363.566431132105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 172171.26855037335,
            "unit": "ns/iter",
            "extra": "iterations: 4070\ncpu: 172172.45700245802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 302886.98789975425,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 302880.1210025941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76991.97703295846,
            "unit": "ns/iter",
            "extra": "iterations: 9100\ncpu: 76989.51648351709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76261.5582768357,
            "unit": "ns/iter",
            "extra": "iterations: 9146\ncpu: 76259.31554778092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75956.7514664406,
            "unit": "ns/iter",
            "extra": "iterations: 9206\ncpu: 75957.24527482022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 153434.37087549965,
            "unit": "ns/iter",
            "extra": "iterations: 4546\ncpu: 153435.32776066978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 140795.1909072538,
            "unit": "ns/iter",
            "extra": "iterations: 4971\ncpu: 140794.68919734482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46856.852177412875,
            "unit": "ns/iter",
            "extra": "iterations: 14903\ncpu: 46857.18311749368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 224532.6921341032,
            "unit": "ns/iter",
            "extra": "iterations: 3102\ncpu: 224522.501611865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 183945.70558908427,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 183942.6659669399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 185129.58023715406,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 185129.14361001345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 185024.88486928568,
            "unit": "ns/iter",
            "extra": "iterations: 3787\ncpu: 185022.89411143117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 340784.46191168745,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 340777.8748180502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1299178.3888889197,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1299187.4074074083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1078147.5540124187,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1078095.6790123428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1084490.4829721828,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1084436.6873064965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1070278.9786910284,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1070232.8767123462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 687497.1445427819,
            "unit": "ns/iter",
            "extra": "iterations: 1017\ncpu: 687494.198623405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1058650.861027212,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1058658.4592145188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 47174.67441233996,
            "unit": "ns/iter",
            "extra": "iterations: 14847\ncpu: 47173.361621876065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 230478.96342671113,
            "unit": "ns/iter",
            "extra": "iterations: 3035\ncpu: 230480.72487644356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 185859.78490064488,
            "unit": "ns/iter",
            "extra": "iterations: 3775\ncpu: 185861.1390728445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 185566.00451287735,
            "unit": "ns/iter",
            "extra": "iterations: 3767\ncpu: 185567.42766126926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 185592.63450294582,
            "unit": "ns/iter",
            "extra": "iterations: 3762\ncpu: 185588.83572568092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 342556.1003917568,
            "unit": "ns/iter",
            "extra": "iterations: 2042\ncpu: 342555.53379039955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1284435.247252645,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1284443.9560439691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1075900.0768049022,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1075907.5268817232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1075300.139356819,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1075307.350689124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1064849.1859755511,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1064835.9756097416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 690916.5173095536,
            "unit": "ns/iter",
            "extra": "iterations: 1011\ncpu: 690915.9248269021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1058219.6475036938,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1058228.7443267808 ns\nthreads: 1"
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
        "date": 1705957841620,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17516.59991546336,
            "unit": "ns/iter",
            "extra": "iterations: 40219\ncpu: 17516.091896864666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 139919.87128060666,
            "unit": "ns/iter",
            "extra": "iterations: 6083\ncpu: 139916.38993917478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 261044.11897590006,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 261034.00602409634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 380352.28816539195,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 380350.02199736045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 499953.6480092362,
            "unit": "ns/iter",
            "extra": "iterations: 1733\ncpu: 499940.6231967688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 617928.2972972352,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 617909.1749644382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 596552.719999977,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 596532.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 690901.2537425202,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 690875.2994011975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 790918.032395602,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 790880.9889173064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13755.18271594196,
            "unit": "ns/iter",
            "extra": "iterations: 45973\ncpu: 13753.933830726754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11625.292329115786,
            "unit": "ns/iter",
            "extra": "iterations: 60319\ncpu: 11624.945705333299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11523.253237148558,
            "unit": "ns/iter",
            "extra": "iterations: 60856\ncpu: 11522.799723938486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11507.658799376142,
            "unit": "ns/iter",
            "extra": "iterations: 60885\ncpu: 11507.377843475419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19784.883134128544,
            "unit": "ns/iter",
            "extra": "iterations: 35391\ncpu: 19784.535616399608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58098.74920000767,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58095.27999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 304273.02155172965,
            "unit": "ns/iter",
            "extra": "iterations: 2784\ncpu: 304253.4482758623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 240689.98051946211,
            "unit": "ns/iter",
            "extra": "iterations: 3542\ncpu: 240677.24449463584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 236774.4741809992,
            "unit": "ns/iter",
            "extra": "iterations: 3602\ncpu: 236765.79677956647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 234034.77899643208,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 234019.11159857403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 525016.51700004,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524975.6000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4274385.357798419,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4274133.486238529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3463241.850187351,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3463159.1760299536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3446057.5259260996,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3445915.5555555485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3401721.4835166303,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3401541.0256410246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1990367.3913978965,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1990316.7741935484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3349949.29963878,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3349764.9819494537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12671731.3928566,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12671107.14285714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5638284.309999335,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5637984.999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16205094.630768493,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16204460.000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62347.95782691354,
            "unit": "ns/iter",
            "extra": "iterations: 13658\ncpu: 62345.262849611834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 346056.3915492893,
            "unit": "ns/iter",
            "extra": "iterations: 2485\ncpu: 346042.53521126835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 274932.73719593073,
            "unit": "ns/iter",
            "extra": "iterations: 3124\ncpu: 274916.35723431606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 268251.65903388226,
            "unit": "ns/iter",
            "extra": "iterations: 3188\ncpu: 268241.15432873246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 258870.23184020948,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 258858.62590798992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 512851.76900000806,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512813.9000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4425668.640186746,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4425421.9626168115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3512658.3132077423,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3512578.490566023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3523591.8068183754,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3523421.969696959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3451766.251851883,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3451614.0740740667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2026486.3864628638,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2026415.9388646227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3405514.639706051,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3405324.632352958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12928290.658536997,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12927696.341463437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5686094.940000431,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5685829.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54038.71969999727,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54036.23000000053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 321418.30774961977,
            "unit": "ns/iter",
            "extra": "iterations: 2684\ncpu: 321404.88077496126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 235548.76617325997,
            "unit": "ns/iter",
            "extra": "iterations: 3648\ncpu: 235537.96600877013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 231817.18925486773,
            "unit": "ns/iter",
            "extra": "iterations: 3704\ncpu: 231809.44924406218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 229703.6114393052,
            "unit": "ns/iter",
            "extra": "iterations: 3724\ncpu: 229693.01825993418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 592027.2253425157,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 591995.890410959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4305618.074074279,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4305355.555555553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3494327.605263398,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3494181.2030075192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3451968.3011152917,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3451823.420074364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3418711.191176355,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3418572.0588235264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1998976.4150537783,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1998881.2903225715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3357907.4727272615,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3357786.5454545408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6833.172170780302,
            "unit": "ns/iter",
            "extra": "iterations: 102166\ncpu: 6833.002172934269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38535.5031072988,
            "unit": "ns/iter",
            "extra": "iterations: 18183\ncpu: 38533.223340482786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30171.00444348286,
            "unit": "ns/iter",
            "extra": "iterations: 23180\ncpu: 30169.525452976646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28187.337898804377,
            "unit": "ns/iter",
            "extra": "iterations: 24824\ncpu: 28186.364002578208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24051.53789647181,
            "unit": "ns/iter",
            "extra": "iterations: 29132\ncpu: 24051.119044349925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 175355.46806910305,
            "unit": "ns/iter",
            "extra": "iterations: 3993\ncpu: 175348.0340596048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 291964.27576135285,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 291950.0625782214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73583.3895013101,
            "unit": "ns/iter",
            "extra": "iterations: 9525\ncpu: 73580.97637795338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 73411.05010983982,
            "unit": "ns/iter",
            "extra": "iterations: 9559\ncpu: 73405.86881473067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73301.65383005176,
            "unit": "ns/iter",
            "extra": "iterations: 9556\ncpu: 73299.2256174133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 148314.31095106903,
            "unit": "ns/iter",
            "extra": "iterations: 4721\ncpu: 148309.93433594573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 136183.93316495224,
            "unit": "ns/iter",
            "extra": "iterations: 5147\ncpu: 136180.66835049493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45730.31839005466,
            "unit": "ns/iter",
            "extra": "iterations: 15280\ncpu: 45728.14790575928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 224434.6342948598,
            "unit": "ns/iter",
            "extra": "iterations: 3120\ncpu: 224422.05128205143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 179456.9091839275,
            "unit": "ns/iter",
            "extra": "iterations: 3909\ncpu: 179444.51266308315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 179543.7734976946,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 179539.3168977917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 178425.3574522351,
            "unit": "ns/iter",
            "extra": "iterations: 3925\ncpu: 178424.2038216569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 328504.31722198025,
            "unit": "ns/iter",
            "extra": "iterations: 2131\ncpu: 328496.52745189494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1241208.3280142364,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1241167.7304964664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1039170.1943620815,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1039104.7477744691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1037306.8192592217,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1037280.8888889005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1023663.3464913075,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1023626.6081871401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 669725.5854824072,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 669708.5959885399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1019578.154069792,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1019545.6395348931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45576.5319606436,
            "unit": "ns/iter",
            "extra": "iterations: 15347\ncpu: 45575.7802827911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 222750.89827805004,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 222741.80484693986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 179910.4514242015,
            "unit": "ns/iter",
            "extra": "iterations: 3932\ncpu: 179900.83926754977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177532.7247590054,
            "unit": "ns/iter",
            "extra": "iterations: 3942\ncpu: 177523.56671740414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 177555.8775044207,
            "unit": "ns/iter",
            "extra": "iterations: 3943\ncpu: 177544.35708851274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 329675.9806420921,
            "unit": "ns/iter",
            "extra": "iterations: 2118\ncpu: 329661.5675165188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1227184.2736842637,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1227108.2456140304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1042892.7436662342,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1042826.9746646658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1027920.0587371544,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1027886.7841409737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1026546.9502197091,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1026529.2825768731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 665666.6486229966,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 665646.5337132073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1016418.4374999556,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1016362.6453488396 ns\nthreads: 1"
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
        "date": 1705959247320,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17531.570430909327,
            "unit": "ns/iter",
            "extra": "iterations: 39521\ncpu: 17531.10498216138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 142250.19419268263,
            "unit": "ns/iter",
            "extra": "iterations: 5958\ncpu: 142246.17321248743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 266813.34298028494,
            "unit": "ns/iter",
            "extra": "iterations: 3248\ncpu: 266813.08497536933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 387336.59640446387,
            "unit": "ns/iter",
            "extra": "iterations: 2225\ncpu: 387332.8988764046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 510742.9340011823,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 510709.72304065997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 512056.31799996353,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512043.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 619264.3499999803,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 619240.5000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 708088.7156105393,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 708065.0695517769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 804972.3560208826,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 804947.8184991276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14329.667042355772,
            "unit": "ns/iter",
            "extra": "iterations: 48799\ncpu: 14328.939117604868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11967.52425187731,
            "unit": "ns/iter",
            "extra": "iterations: 58346\ncpu: 11967.461351249442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11978.09991815557,
            "unit": "ns/iter",
            "extra": "iterations: 58648\ncpu: 11978.185104351413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11931.860682330582,
            "unit": "ns/iter",
            "extra": "iterations: 58564\ncpu: 11931.58083464242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19982.45464661739,
            "unit": "ns/iter",
            "extra": "iterations: 35047\ncpu: 19982.118298285146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57950.01710000633,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57947.34000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 288611.5752122159,
            "unit": "ns/iter",
            "extra": "iterations: 2945\ncpu: 288602.34295415954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 240169.81518988233,
            "unit": "ns/iter",
            "extra": "iterations: 3555\ncpu: 240162.72855133636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 234203.11620881606,
            "unit": "ns/iter",
            "extra": "iterations: 3640\ncpu: 234198.76373626373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 231973.66885068038,
            "unit": "ns/iter",
            "extra": "iterations: 3663\ncpu: 231968.3592683592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 550226.3230000607,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550193.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4405297.668246512,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4405073.933649298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3580613.1884616944,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3580556.5384615436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3582059.235521081,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3581955.598455593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3559214.402299104,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3559139.8467433006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2033199.0745613407,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2033159.6491228088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3465068.531835222,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3464914.2322097477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12936368.14457715,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12935995.180722887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5698137.079999697,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5697739.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16485135.640625259,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16484726.562500052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59805.89929999951,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59805.53999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 346911.98947365984,
            "unit": "ns/iter",
            "extra": "iterations: 2470\ncpu: 346900.4453441296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 267660.604965443,
            "unit": "ns/iter",
            "extra": "iterations: 3182\ncpu: 267652.7341294782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 266355.9661595885,
            "unit": "ns/iter",
            "extra": "iterations: 3221\ncpu: 266342.9369760936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 260675.45587340638,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 260667.43761411848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 533164.4080000615,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533160.499999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4494735.51690822,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4494605.797101433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3618143.042801442,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3617999.6108949315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3656662.3858265495,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3656486.220472441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3603510.113725415,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3603468.2352941297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2057425.0801780561,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2057388.8641425502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3518365.5509433937,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3518264.150943409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13121570.012346223,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13121014.814814817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5738621.310000553,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5738410.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51965.844000005745,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51964.59000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 301471.2439886958,
            "unit": "ns/iter",
            "extra": "iterations: 2828\ncpu: 301467.75106082147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 233132.2465940009,
            "unit": "ns/iter",
            "extra": "iterations: 3670\ncpu: 233127.73841961756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 228898.16318888016,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 228894.59604066252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 224742.366842119,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 224736.81578947318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 615126.5722379674,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 615109.1359773356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4445765.500000085,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4445614.285714294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3601506.8957528938,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3601428.1853282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3597275.550000107,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3597096.5384615227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3576711.2192305513,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3576583.076923065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2036971.9409190863,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2036907.0021881692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3484017.685393363,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3483998.127340827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6863.247093450971,
            "unit": "ns/iter",
            "extra": "iterations: 101925\ncpu: 6862.955114054457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38950.22437966205,
            "unit": "ns/iter",
            "extra": "iterations: 17974\ncpu: 38950.083453878004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29154.98584336182,
            "unit": "ns/iter",
            "extra": "iterations: 24017\ncpu: 29154.22825498622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30755.472035499475,
            "unit": "ns/iter",
            "extra": "iterations: 22761\ncpu: 30755.30073371136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24153.606350734633,
            "unit": "ns/iter",
            "extra": "iterations: 29036\ncpu: 24153.11337649804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 177809.24465376357,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 177808.42668024392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 299462.39931590983,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 299455.0662676359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74946.75831817863,
            "unit": "ns/iter",
            "extra": "iterations: 9347\ncpu: 74943.84294426012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75060.11945428989,
            "unit": "ns/iter",
            "extra": "iterations: 9309\ncpu: 75056.77301536077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74869.72658335791,
            "unit": "ns/iter",
            "extra": "iterations: 9363\ncpu: 74867.15796219172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 148310.1533742326,
            "unit": "ns/iter",
            "extra": "iterations: 4727\ncpu: 148309.9428813209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 139357.30956173773,
            "unit": "ns/iter",
            "extra": "iterations: 5020\ncpu: 139353.24701195039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45989.75812487245,
            "unit": "ns/iter",
            "extra": "iterations: 15231\ncpu: 45989.48854310272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 222939.55498883812,
            "unit": "ns/iter",
            "extra": "iterations: 3137\ncpu: 222932.80204016858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 180038.17575913566,
            "unit": "ns/iter",
            "extra": "iterations: 3886\ncpu: 180037.59650025817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 180096.15024441035,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 180090.0694623103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 179123.0335295547,
            "unit": "ns/iter",
            "extra": "iterations: 3907\ncpu: 179107.19221909592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 345638.02569170337,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 345620.10869565496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1285170.6972477743,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1285116.5137614724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1068992.180428052,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1068945.259938839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1064196.4246576957,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1064204.109589022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1057894.7274096315,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1057889.156626493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 682172.3148688002,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 682146.2585034093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1047394.2912912692,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1047369.6696696697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45505.768946032826,
            "unit": "ns/iter",
            "extra": "iterations: 15399\ncpu: 45504.14312617738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 225275.93554623498,
            "unit": "ns/iter",
            "extra": "iterations: 3103\ncpu: 225264.19593941158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 181719.6821363716,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 181708.84106818773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 179594.7269694785,
            "unit": "ns/iter",
            "extra": "iterations: 3897\ncpu: 179587.86245829964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 182354.67880363986,
            "unit": "ns/iter",
            "extra": "iterations: 3845\ncpu: 182344.4993498041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 345295.5695266297,
            "unit": "ns/iter",
            "extra": "iterations: 2028\ncpu: 345290.13806706446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1274647.6502732595,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1274595.446265925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1063596.4220182984,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1063589.9082568784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1060865.6166666744,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1060861.2121212052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1048299.2050897733,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1048256.5868263426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 678175.2843327237,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 678169.8259187717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1043500.8958333402,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1043453.5714285644 ns\nthreads: 1"
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
        "date": 1705961340448,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17468.434399640955,
            "unit": "ns/iter",
            "extra": "iterations: 40076\ncpu: 17467.786206208206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 142340.56277273071,
            "unit": "ns/iter",
            "extra": "iterations: 5958\ncpu: 142338.2510909701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 268294.99007750524,
            "unit": "ns/iter",
            "extra": "iterations: 3225\ncpu: 268290.48062015517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 392463.1012715768,
            "unit": "ns/iter",
            "extra": "iterations: 2202\ncpu: 392455.5858310628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 515900.00804954005,
            "unit": "ns/iter",
            "extra": "iterations: 1615\ncpu: 515893.9938080496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 516398.2010000154,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516385.60000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 613820.5329999664,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 613823.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 712576.2439405317,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 712558.0922595777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 814691.4084506852,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 814668.4859154922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14098.393544093535,
            "unit": "ns/iter",
            "extra": "iterations: 49598\ncpu: 14098.463647727745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11803.92341932311,
            "unit": "ns/iter",
            "extra": "iterations: 59310\ncpu: 11803.673916708816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11859.119022244178,
            "unit": "ns/iter",
            "extra": "iterations: 59115\ncpu: 11858.922439313195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11696.948287945672,
            "unit": "ns/iter",
            "extra": "iterations: 59928\ncpu: 11696.585903083702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20176.932081881747,
            "unit": "ns/iter",
            "extra": "iterations: 34733\ncpu: 20176.466184896184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61118.74519999673,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61117.72000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 297678.8886207001,
            "unit": "ns/iter",
            "extra": "iterations: 2900\ncpu: 297676.48275862075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 236365.33101045794,
            "unit": "ns/iter",
            "extra": "iterations: 3444\ncpu: 236357.8687572593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 238240.37538287326,
            "unit": "ns/iter",
            "extra": "iterations: 3591\ncpu: 238228.40434419393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 237260.5180355123,
            "unit": "ns/iter",
            "extra": "iterations: 3604\ncpu: 237253.19089900123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 564025.7169999359,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564027.8999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4399973.483412081,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4399800.473933658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3626691.342412471,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3626603.891050583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3677907.13043494,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3677799.2094861707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3605856.533073813,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3605778.5992217907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2063782.8822221614,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2063739.3333333323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3526382.205322799,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3526269.581749048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13216880.1975299,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13216602.469135806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5743771.029999606,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5743675.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16801978.523807924,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 16801222.22222222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61929.39348079311,
            "unit": "ns/iter",
            "extra": "iterations: 13744\ncpu: 61927.8012223516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 344658.06597358285,
            "unit": "ns/iter",
            "extra": "iterations: 2501\ncpu: 344649.8200719715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 265494.52141524863,
            "unit": "ns/iter",
            "extra": "iterations: 3222\ncpu: 265486.87150837947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 270279.10783701035,
            "unit": "ns/iter",
            "extra": "iterations: 3190\ncpu: 270274.7335423206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 266787.81304617936,
            "unit": "ns/iter",
            "extra": "iterations: 3204\ncpu: 266778.3707865155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 520234.81999992783,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520225.4000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4528297.4000002,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4528233.65853659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3719380.4720000112,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3719311.5999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3758204.6491937055,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3758110.080645158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3646279.5294121807,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3646195.2941176416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2085645.0426967302,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2085546.0674157215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3582637.8206108166,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3582491.6030534133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13425073.912500808,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13424192.499999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5802808.480000295,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5802349.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57511.63319999932,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57510.46000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 307569.51214284205,
            "unit": "ns/iter",
            "extra": "iterations: 2800\ncpu: 307568.35714285815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 233390.89975484528,
            "unit": "ns/iter",
            "extra": "iterations: 3671\ncpu: 233389.64859711102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 235648.06523532295,
            "unit": "ns/iter",
            "extra": "iterations: 3633\ncpu: 235632.59014588443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 230363.9252966775,
            "unit": "ns/iter",
            "extra": "iterations: 3708\ncpu: 230350.56634304204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 603759.836692131,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 603721.5427380101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4489893.816425037,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4489704.347826081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3662917.682352903,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3662694.901960773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3683851.1541502066,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3683593.2806324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3610647.325581516,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3610469.767441859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2058820.3429202517,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2058713.2743362903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3543855.2462124154,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3543703.030303017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6851.121460623885,
            "unit": "ns/iter",
            "extra": "iterations: 102066\ncpu: 6850.6309642780025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39577.05786199703,
            "unit": "ns/iter",
            "extra": "iterations: 17680\ncpu: 39576.78733031672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29423.36982846049,
            "unit": "ns/iter",
            "extra": "iterations: 23784\ncpu: 29422.847292297327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29681.930679656623,
            "unit": "ns/iter",
            "extra": "iterations: 23615\ncpu: 29681.685369468523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24381.79651787583,
            "unit": "ns/iter",
            "extra": "iterations: 28833\ncpu: 24381.247182048326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 177105.88208503876,
            "unit": "ns/iter",
            "extra": "iterations: 3952\ncpu: 177096.1032388669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 282783.86014551384,
            "unit": "ns/iter",
            "extra": "iterations: 2474\ncpu: 282762.287793044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75322.68355651245,
            "unit": "ns/iter",
            "extra": "iterations: 9335\ncpu: 75318.35029458995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76202.0660202682,
            "unit": "ns/iter",
            "extra": "iterations: 9179\ncpu: 76198.70356247995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74848.7359418471,
            "unit": "ns/iter",
            "extra": "iterations: 9354\ncpu: 74848.18259568178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 150244.25348361288,
            "unit": "ns/iter",
            "extra": "iterations: 4880\ncpu: 150242.9918032789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 140272.2275641211,
            "unit": "ns/iter",
            "extra": "iterations: 4992\ncpu: 140270.9735576925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46622.993605543445,
            "unit": "ns/iter",
            "extra": "iterations: 15013\ncpu: 46622.18077666011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 230720.61535918355,
            "unit": "ns/iter",
            "extra": "iterations: 3021\ncpu: 230712.97583581338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 185426.17988856975,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 185422.65853011442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 184329.2795472703,
            "unit": "ns/iter",
            "extra": "iterations: 3799\ncpu: 184325.98052118756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 184851.28537487914,
            "unit": "ns/iter",
            "extra": "iterations: 3788\ncpu: 184848.6536430822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 344153.4515494305,
            "unit": "ns/iter",
            "extra": "iterations: 2033\ncpu: 344154.64830299956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1296181.9259258104,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1296146.4814814862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1084824.2437888705,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1084789.130434791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1097306.8777430002,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1097279.623824455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1077876.2095531935,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1077862.8659476154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 685951.8039215229,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 685946.0784313686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1063344.948484731,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1063334.2424242403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46773.160302277494,
            "unit": "ns/iter",
            "extra": "iterations: 14953\ncpu: 46772.25305958706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 230584.83706384167,
            "unit": "ns/iter",
            "extra": "iterations: 3038\ncpu: 230581.50098749084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 184723.64106623706,
            "unit": "ns/iter",
            "extra": "iterations: 3789\ncpu: 184721.87912378003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 185380.04582781572,
            "unit": "ns/iter",
            "extra": "iterations: 3775\ncpu: 185378.22516556305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 185997.5035818424,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 185990.2626691423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 343435.79921456,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 343431.76239568344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1280497.223853188,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1280461.6513761596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1076522.820276526,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1076512.135176647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1083063.1068110834,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1083049.0712074223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1073592.716257642,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1073572.8527607496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 688042.1907115498,
            "unit": "ns/iter",
            "extra": "iterations: 1012\ncpu: 688035.4743083059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1057450.110271938,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1057416.7673715977 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}