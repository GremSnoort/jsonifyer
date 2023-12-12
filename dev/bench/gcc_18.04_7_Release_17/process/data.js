window.BENCHMARK_DATA = {
  "lastUpdate": 1702409075504,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-7 18.04 Release c++-17": [
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397890164,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1861.1090549463217,
            "unit": "ns/iter",
            "extra": "iterations: 343790\ncpu: 1861.0494778789378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27180.213750041527,
            "unit": "ns/iter",
            "extra": "iterations: 30269\ncpu: 27179.100730119928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 56420.14173978073,
            "unit": "ns/iter",
            "extra": "iterations: 14703\ncpu: 56417.050941984606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 70817.31557740408,
            "unit": "ns/iter",
            "extra": "iterations: 12409\ncpu: 70815.76275284064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 99534.70501188091,
            "unit": "ns/iter",
            "extra": "iterations: 9258\ncpu: 99531.58349535531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 123909.65172855061,
            "unit": "ns/iter",
            "extra": "iterations: 7029\ncpu: 123901.09546165876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 149597.3596817904,
            "unit": "ns/iter",
            "extra": "iterations: 5908\ncpu: 149593.92349356817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 173840.74793305088,
            "unit": "ns/iter",
            "extra": "iterations: 4959\ncpu: 173831.1554748941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 197319.11403107585,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 197312.7513711149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1684.7306438251323,
            "unit": "ns/iter",
            "extra": "iterations: 415268\ncpu: 1684.6166812757049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1391.3601815020368,
            "unit": "ns/iter",
            "extra": "iterations: 503796\ncpu: 1391.3169219287206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1376.7478152481547,
            "unit": "ns/iter",
            "extra": "iterations: 507037\ncpu: 1376.6555497922238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1351.5717692665537,
            "unit": "ns/iter",
            "extra": "iterations: 519526\ncpu: 1351.5082979485123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2395.1164116925283,
            "unit": "ns/iter",
            "extra": "iterations: 292840\ncpu: 2395.070004097798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9237.833638515765,
            "unit": "ns/iter",
            "extra": "iterations: 89564\ncpu: 9237.545219061238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 51854.10887782799,
            "unit": "ns/iter",
            "extra": "iterations: 15871\ncpu: 51853.12834730018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 39797.8818563355,
            "unit": "ns/iter",
            "extra": "iterations: 20729\ncpu: 39797.047614453215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 40742.578527064885,
            "unit": "ns/iter",
            "extra": "iterations: 20286\ncpu: 40740.367741299466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 40406.0406928508,
            "unit": "ns/iter",
            "extra": "iterations: 20495\ncpu: 40405.40619663345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 106290.23227645182,
            "unit": "ns/iter",
            "extra": "iterations: 8421\ncpu: 106287.04429402683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 835098.1849191854,
            "unit": "ns/iter",
            "extra": "iterations: 1114\ncpu: 835073.6086175963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 697157.8388059789,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 697115.2985074646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 700772.4237668379,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 700750.1494768313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 692971.6277153183,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 692935.2808988759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 491384.02552467684,
            "unit": "ns/iter",
            "extra": "iterations: 1763\ncpu: 491374.02155417047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 691094.1716196239,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 691051.1144130761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3718724.9601592757,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3718622.3107569697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1619003.677586173,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1618926.7241379311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4866489.374359016,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4866208.717948713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12292.282585377183,
            "unit": "ns/iter",
            "extra": "iterations: 68988\ncpu: 12291.830463268967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54695.64480000031,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54694.040000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 49582.528333331764,
            "unit": "ns/iter",
            "extra": "iterations: 16800\ncpu: 49579.9761904762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 50168.25711722521,
            "unit": "ns/iter",
            "extra": "iterations: 16720\ncpu: 50165.06578947365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 50178.18736449236,
            "unit": "ns/iter",
            "extra": "iterations: 16604\ncpu: 50177.180197542824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 112634.89657894723,
            "unit": "ns/iter",
            "extra": "iterations: 7600\ncpu: 112627.82894736783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 883399.3521531203,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 883380.3827751208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 725167.9135802243,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 725131.0956790136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 728411.663060293,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 728377.9752704795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 724796.3632872243,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 724752.9185867899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 506849.57809798047,
            "unit": "ns/iter",
            "extra": "iterations: 1735\ncpu: 506839.8847262232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 705427.9269201793,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 705376.2863534677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3915969.3263598066,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3915537.238493727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1692010.3496377117,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1691940.9420289819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8642.219292865613,
            "unit": "ns/iter",
            "extra": "iterations: 96191\ncpu: 8641.669179029217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 48238.69030583037,
            "unit": "ns/iter",
            "extra": "iterations: 17330\ncpu: 48236.07039815328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 36600.05924066286,
            "unit": "ns/iter",
            "extra": "iterations: 22704\ncpu: 36598.23379140246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 36094.781113089215,
            "unit": "ns/iter",
            "extra": "iterations: 23053\ncpu: 36093.48891684381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 38196.56152465019,
            "unit": "ns/iter",
            "extra": "iterations: 21723\ncpu: 38196.27583667093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 102408.18082864933,
            "unit": "ns/iter",
            "extra": "iterations: 8544\ncpu: 102405.99250936325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 868025.7255985601,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 867981.3075506471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 702204.8608825695,
            "unit": "ns/iter",
            "extra": "iterations: 1337\ncpu: 702168.287210169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 706029.3583643361,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 705999.3308550171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 700083.5357143217,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 700045.312500003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 498585.75977336057,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 498567.5354107641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 704724.7146034032,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 704675.6115641235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 690.8100994351889,
            "unit": "ns/iter",
            "extra": "iterations: 1014631\ncpu: 690.7833488233617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4937.514399729771,
            "unit": "ns/iter",
            "extra": "iterations: 142086\ncpu: 4937.153554889296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3899.912461173522,
            "unit": "ns/iter",
            "extra": "iterations: 179646\ncpu: 3899.752290615986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3904.5592079272774,
            "unit": "ns/iter",
            "extra": "iterations: 179731\ncpu: 3904.275278054389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2949.8819684023424,
            "unit": "ns/iter",
            "extra": "iterations: 237106\ncpu: 2949.6925425758886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25887.867393076172,
            "unit": "ns/iter",
            "extra": "iterations: 26982\ncpu: 25884.752798161677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 49982.355226710686,
            "unit": "ns/iter",
            "extra": "iterations: 13718\ncpu: 49980.449045051035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11657.990166489652,
            "unit": "ns/iter",
            "extra": "iterations: 60304\ncpu: 11657.090740249376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11612.693324696886,
            "unit": "ns/iter",
            "extra": "iterations: 60207\ncpu: 11612.606507548862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11609.241369585441,
            "unit": "ns/iter",
            "extra": "iterations: 60281\ncpu: 11608.860171530014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 23934.009517614944,
            "unit": "ns/iter",
            "extra": "iterations: 29209\ncpu: 23933.558149885448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 21464.059784773748,
            "unit": "ns/iter",
            "extra": "iterations: 32617\ncpu: 21463.209369347518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 7132.796636905716,
            "unit": "ns/iter",
            "extra": "iterations: 96994\ncpu: 7132.057653050666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 35084.426655992975,
            "unit": "ns/iter",
            "extra": "iterations: 19988\ncpu: 35084.21552931798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 28389.279290277034,
            "unit": "ns/iter",
            "extra": "iterations: 24573\ncpu: 28388.023440361223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 27831.220061655913,
            "unit": "ns/iter",
            "extra": "iterations: 25302\ncpu: 27829.89091771399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28436.114842066876,
            "unit": "ns/iter",
            "extra": "iterations: 24599\ncpu: 28433.960730111237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 59578.65187712924,
            "unit": "ns/iter",
            "extra": "iterations: 11720\ncpu: 59577.525597269574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 222398.43422733614,
            "unit": "ns/iter",
            "extra": "iterations: 3132\ncpu: 222388.7931034454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 194003.19187170902,
            "unit": "ns/iter",
            "extra": "iterations: 3617\ncpu: 193999.50235001402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 193244.40507726304,
            "unit": "ns/iter",
            "extra": "iterations: 3624\ncpu: 193230.04966887494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 194183.06616624197,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 194179.06588824032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 114722.82570913045,
            "unit": "ns/iter",
            "extra": "iterations: 6099\ncpu: 114719.46220691944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 191348.86356210435,
            "unit": "ns/iter",
            "extra": "iterations: 3672\ncpu: 191342.78322440307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6784.037544871772,
            "unit": "ns/iter",
            "extra": "iterations: 101958\ncpu: 6783.988505070775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 34355.89581901881,
            "unit": "ns/iter",
            "extra": "iterations: 20378\ncpu: 34354.32819707481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 26862.44643268637,
            "unit": "ns/iter",
            "extra": "iterations: 26042\ncpu: 26861.362414561332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 27347.013197968332,
            "unit": "ns/iter",
            "extra": "iterations: 25610\ncpu: 27345.755564232884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 28134.470186160124,
            "unit": "ns/iter",
            "extra": "iterations: 24871\ncpu: 28134.31707611275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 57973.18203642624,
            "unit": "ns/iter",
            "extra": "iterations: 12080\ncpu: 57970.87748344395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 217848.52173912636,
            "unit": "ns/iter",
            "extra": "iterations: 3220\ncpu: 217843.10559006003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 187668.8817233012,
            "unit": "ns/iter",
            "extra": "iterations: 3737\ncpu: 187662.21568102587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 187739.95116714932,
            "unit": "ns/iter",
            "extra": "iterations: 3727\ncpu: 187735.8196941256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 190181.15151516497,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 190173.43073593208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 112222.37818764696,
            "unit": "ns/iter",
            "extra": "iterations: 6235\ncpu: 112220.70569366432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 187078.84746666727,
            "unit": "ns/iter",
            "extra": "iterations: 3750\ncpu: 187072.4800000024 ns\nthreads: 1"
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409074384,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1726.6535272526226,
            "unit": "ns/iter",
            "extra": "iterations: 405117\ncpu: 1726.6286035885933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26064.007192436497,
            "unit": "ns/iter",
            "extra": "iterations: 31839\ncpu: 26063.494456484186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 53427.580898076165,
            "unit": "ns/iter",
            "extra": "iterations: 15433\ncpu: 53427.32456424546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 67060.42662481804,
            "unit": "ns/iter",
            "extra": "iterations: 13063\ncpu: 67059.93263415755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 93819.04932598164,
            "unit": "ns/iter",
            "extra": "iterations: 9792\ncpu: 93817.93300653598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 117271.60310658744,
            "unit": "ns/iter",
            "extra": "iterations: 7468\ncpu: 117265.06427423665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 142795.135837195,
            "unit": "ns/iter",
            "extra": "iterations: 6044\ncpu: 142790.83388484438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 164072.8918402426,
            "unit": "ns/iter",
            "extra": "iterations: 5233\ncpu: 164069.90254156332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 187995.88215200137,
            "unit": "ns/iter",
            "extra": "iterations: 4684\ncpu: 187991.246797609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1519.4106929269074,
            "unit": "ns/iter",
            "extra": "iterations: 458995\ncpu: 1519.3766816631985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1254.1456515137622,
            "unit": "ns/iter",
            "extra": "iterations: 559850\ncpu: 1254.108779137269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1187.478267877577,
            "unit": "ns/iter",
            "extra": "iterations: 576980\ncpu: 1187.4375194980773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1190.7856455559913,
            "unit": "ns/iter",
            "extra": "iterations: 591343\ncpu: 1190.7696548365327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2383.7062876124114,
            "unit": "ns/iter",
            "extra": "iterations: 292623\ncpu: 2383.6824173082796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9055.767379561215,
            "unit": "ns/iter",
            "extra": "iterations: 90710\ncpu: 9055.710506008167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 51002.57701726563,
            "unit": "ns/iter",
            "extra": "iterations: 16334\ncpu: 50998.56740541211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 38497.49850397365,
            "unit": "ns/iter",
            "extra": "iterations: 21390\ncpu: 38496.43291257599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 38095.45096681817,
            "unit": "ns/iter",
            "extra": "iterations: 21669\ncpu: 38092.348516313716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 39402.522222750755,
            "unit": "ns/iter",
            "extra": "iterations: 21037\ncpu: 39398.06531349537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 103226.55169971862,
            "unit": "ns/iter",
            "extra": "iterations: 8472\ncpu: 103223.97308781858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 824627.5004468323,
            "unit": "ns/iter",
            "extra": "iterations: 1119\ncpu: 824607.6854334199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 668442.0237752182,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 668429.3227665687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 664330.121475062,
            "unit": "ns/iter",
            "extra": "iterations: 1383\ncpu: 664316.7028199587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 668815.4385838063,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 668799.7109826606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 473591.6478405388,
            "unit": "ns/iter",
            "extra": "iterations: 1806\ncpu: 473580.3986710974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 664096.4844089772,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 664005.9463379248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3598225.32432425,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3597757.5289575276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1613828.5448154635,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1613807.5571177474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4743262.4416244505,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4743002.030456852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12690.191364927778,
            "unit": "ns/iter",
            "extra": "iterations: 66172\ncpu: 12689.868826694026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54528.897199998035,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54526.120000000235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 50485.6268376797,
            "unit": "ns/iter",
            "extra": "iterations: 16529\ncpu: 50485.201766592174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 50793.27500920516,
            "unit": "ns/iter",
            "extra": "iterations: 16294\ncpu: 50792.83171719643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 50179.71460674301,
            "unit": "ns/iter",
            "extra": "iterations: 16465\ncpu: 50178.49377467344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 113023.42464318156,
            "unit": "ns/iter",
            "extra": "iterations: 7637\ncpu: 113016.72122561188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 883878.2495201544,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 883829.1746641053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 702594.3474001529,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 702550.7159005313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 707519.6927162352,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 706028.5280728391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 699607.5875663299,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 699563.6846095535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 490612.5181405877,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 490579.138321995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 690849.9432989514,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 690816.4948453566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3780279.9918699376,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3779791.056910571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1640976.1813380155,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1640947.359154928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8945.152681209864,
            "unit": "ns/iter",
            "extra": "iterations: 92048\ncpu: 8944.749478532909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 50078.767503620074,
            "unit": "ns/iter",
            "extra": "iterations: 16568\ncpu: 50072.869386769635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 39405.0665927273,
            "unit": "ns/iter",
            "extra": "iterations: 20738\ncpu: 39403.192207541666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 37148.51586489205,
            "unit": "ns/iter",
            "extra": "iterations: 22471\ncpu: 37145.13372791613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 37434.85368035118,
            "unit": "ns/iter",
            "extra": "iterations: 22362\ncpu: 37433.217064663484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 101376.72584555039,
            "unit": "ns/iter",
            "extra": "iterations: 8663\ncpu: 101367.57474316079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 857304.4995467118,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 857262.7379873097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 692807.0470588377,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 692746.69117647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 696562.278881534,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 696526.7844002967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 697424.2822222247,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 697358.7407407388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 493995.0050732907,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 493985.79481397866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 686657.812220569,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 686623.3979135604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 674.3914897134389,
            "unit": "ns/iter",
            "extra": "iterations: 1040482\ncpu: 674.3801430490876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4586.732076587209,
            "unit": "ns/iter",
            "extra": "iterations: 152245\ncpu: 4586.544057276098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3548.204738505055,
            "unit": "ns/iter",
            "extra": "iterations: 197193\ncpu: 3547.994097153538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3587.0868699067287,
            "unit": "ns/iter",
            "extra": "iterations: 193761\ncpu: 3586.8095230722533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2753.5333375441555,
            "unit": "ns/iter",
            "extra": "iterations: 253318\ncpu: 2753.3163849390744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25710.801868204555,
            "unit": "ns/iter",
            "extra": "iterations: 27406\ncpu: 25708.490841421444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 45864.24332799454,
            "unit": "ns/iter",
            "extra": "iterations: 14351\ncpu: 45859.264162775566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11132.732998000702,
            "unit": "ns/iter",
            "extra": "iterations: 63022\ncpu: 11131.809526831994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10871.561356854627,
            "unit": "ns/iter",
            "extra": "iterations: 64679\ncpu: 10871.403392136615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11095.423616609683,
            "unit": "ns/iter",
            "extra": "iterations: 63142\ncpu: 11094.52345506961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21995.84242481459,
            "unit": "ns/iter",
            "extra": "iterations: 31788\ncpu: 21995.602114005378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 21549.075029956548,
            "unit": "ns/iter",
            "extra": "iterations: 32547\ncpu: 21546.904476603122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6625.762726415287,
            "unit": "ns/iter",
            "extra": "iterations: 106000\ncpu: 6625.300943396252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 32560.141666282158,
            "unit": "ns/iter",
            "extra": "iterations: 21593\ncpu: 32556.008891770365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 27293.2010333309,
            "unit": "ns/iter",
            "extra": "iterations: 25742\ncpu: 27291.91981974983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 27229.06360410224,
            "unit": "ns/iter",
            "extra": "iterations: 25643\ncpu: 27226.416565924344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 26668.723826989706,
            "unit": "ns/iter",
            "extra": "iterations: 26172\ncpu: 26667.55693107159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 56285.57988547653,
            "unit": "ns/iter",
            "extra": "iterations: 12399\ncpu: 56277.31268650765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 213511.12648581262,
            "unit": "ns/iter",
            "extra": "iterations: 3281\ncpu: 213496.28162145897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 178522.72539521274,
            "unit": "ns/iter",
            "extra": "iterations: 3922\ncpu: 178510.60683324738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 181166.26107224697,
            "unit": "ns/iter",
            "extra": "iterations: 3861\ncpu: 181150.11655011927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 183235.06016216354,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 183225.68663353453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 108892.35362228645,
            "unit": "ns/iter",
            "extra": "iterations: 6391\ncpu: 108885.08840557023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 181741.7531055891,
            "unit": "ns/iter",
            "extra": "iterations: 3864\ncpu: 181731.0817805389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6304.082402612498,
            "unit": "ns/iter",
            "extra": "iterations: 110846\ncpu: 6303.447124839797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 32296.637598414498,
            "unit": "ns/iter",
            "extra": "iterations: 21719\ncpu: 32294.28610893697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 25573.631381409177,
            "unit": "ns/iter",
            "extra": "iterations: 27443\ncpu: 25570.480632583858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 25402.85903905238,
            "unit": "ns/iter",
            "extra": "iterations: 27348\ncpu: 25400.994588269805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 25949.325220309827,
            "unit": "ns/iter",
            "extra": "iterations: 26213\ncpu: 25946.1107084269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 57282.96749162959,
            "unit": "ns/iter",
            "extra": "iterations: 12243\ncpu: 57278.39581801828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 207795.38498212103,
            "unit": "ns/iter",
            "extra": "iterations: 3356\ncpu: 207776.3110846253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 186085.7885790277,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 186071.18193891126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 176993.84007209862,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 176985.93870718603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 182484.1618723811,
            "unit": "ns/iter",
            "extra": "iterations: 3824\ncpu: 182471.26046025095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 109933.99984293578,
            "unit": "ns/iter",
            "extra": "iterations: 6367\ncpu: 109928.91471650537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 179952.33298968207,
            "unit": "ns/iter",
            "extra": "iterations: 3880\ncpu: 179929.4587628862 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}