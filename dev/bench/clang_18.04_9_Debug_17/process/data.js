window.BENCHMARK_DATA = {
  "lastUpdate": 1705772716315,
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
      }
    ]
  }
}