window.BENCHMARK_DATA = {
  "lastUpdate": 1702397891075,
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
      }
    ]
  }
}