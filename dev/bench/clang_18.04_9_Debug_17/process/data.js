window.BENCHMARK_DATA = {
  "lastUpdate": 1702503245331,
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
      }
    ]
  }
}