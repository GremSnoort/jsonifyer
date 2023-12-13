window.BENCHMARK_DATA = {
  "lastUpdate": 1702490792128,
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412513119,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1689.3997275263812,
            "unit": "ns/iter",
            "extra": "iterations: 411783\ncpu: 1689.3448733920538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19526.021864675964,
            "unit": "ns/iter",
            "extra": "iterations: 42077\ncpu: 19525.460465337364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40786.94161301402,
            "unit": "ns/iter",
            "extra": "iterations: 20347\ncpu: 40785.53103651645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50138.69059999934,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50137.52 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 67303.80697603521,
            "unit": "ns/iter",
            "extra": "iterations: 13102\ncpu: 67301.69439780182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 84623.5073133205,
            "unit": "ns/iter",
            "extra": "iterations: 10392\ncpu: 84621.10277136252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 100295.1918584457,
            "unit": "ns/iter",
            "extra": "iterations: 8647\ncpu: 100294.12513010284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 117473.83542948752,
            "unit": "ns/iter",
            "extra": "iterations: 7474\ncpu: 117473.70885737227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 133289.43243243665,
            "unit": "ns/iter",
            "extra": "iterations: 6290\ncpu: 133287.2972972974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1442.6900044787787,
            "unit": "ns/iter",
            "extra": "iterations: 484507\ncpu: 1442.6881345367544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1193.4834667926532,
            "unit": "ns/iter",
            "extra": "iterations: 525004\ncpu: 1193.4175739613427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1182.4498417238703,
            "unit": "ns/iter",
            "extra": "iterations: 586633\ncpu: 1182.3988762991512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1204.6373714567153,
            "unit": "ns/iter",
            "extra": "iterations: 580641\ncpu: 1204.5851050821407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2106.7093259558824,
            "unit": "ns/iter",
            "extra": "iterations: 333628\ncpu: 2106.6259426666843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7486.4658495943095,
            "unit": "ns/iter",
            "extra": "iterations: 109823\ncpu: 7486.25697713594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 39026.13232104313,
            "unit": "ns/iter",
            "extra": "iterations: 21206\ncpu: 39025.50693200038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 31116.838304610857,
            "unit": "ns/iter",
            "extra": "iterations: 26519\ncpu: 31116.38070817149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30708.817368420576,
            "unit": "ns/iter",
            "extra": "iterations: 26600\ncpu: 30702.819548872154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30377.73860673323,
            "unit": "ns/iter",
            "extra": "iterations: 27231\ncpu: 30375.046821637043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 81618.00929131008,
            "unit": "ns/iter",
            "extra": "iterations: 10978\ncpu: 81614.50173073445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 648495.8649999726,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648455.2000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 533682.4469999897,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533678.0999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 523476.4439999822,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523431.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 524039.9040000057,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523182.60000000196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 369617.8891741377,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 369602.43902438984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 522881.4400000488,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522878.99999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2657745.944444461,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2657626.900584789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1227546.615691466,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 1227463.829787235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3592078.8108108137,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3591628.571428563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10232.100441405993,
            "unit": "ns/iter",
            "extra": "iterations: 81331\ncpu: 10232.000098363493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53326.483289327545,
            "unit": "ns/iter",
            "extra": "iterations: 15529\ncpu: 53324.86959881494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42681.24179504495,
            "unit": "ns/iter",
            "extra": "iterations: 19409\ncpu: 42680.64300066981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42049.62780678106,
            "unit": "ns/iter",
            "extra": "iterations: 19729\ncpu: 42049.31319377563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41877.089154921894,
            "unit": "ns/iter",
            "extra": "iterations: 19797\ncpu: 41876.87023286355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 90012.32722377697,
            "unit": "ns/iter",
            "extra": "iterations: 9657\ncpu: 90009.04007455758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 689624.7213114798,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 689614.8286140102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 557910.4210000309,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557900.5000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 551722.3780000221,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551725.899999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 549368.7690000116,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549363.3000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 387283.6833333319,
            "unit": "ns/iter",
            "extra": "iterations: 2220\ncpu: 387276.9369369358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 526755.5949999974,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526741.9999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2804371.648484806,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2804324.5454545463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1247439.8808567282,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1247424.4979919707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7517.004154207236,
            "unit": "ns/iter",
            "extra": "iterations: 111694\ncpu: 7516.898848640051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 38265.18610113158,
            "unit": "ns/iter",
            "extra": "iterations: 21714\ncpu: 38264.43308464586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30597.36625971191,
            "unit": "ns/iter",
            "extra": "iterations: 27030\ncpu: 30597.26600073999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 30110.80075011703,
            "unit": "ns/iter",
            "extra": "iterations: 27729\ncpu: 30110.64589419002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29905.31890766832,
            "unit": "ns/iter",
            "extra": "iterations: 27867\ncpu: 29905.11716367018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 79041.6643574002,
            "unit": "ns/iter",
            "extra": "iterations: 11259\ncpu: 79026.36113331541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 670415.7376697623,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 670406.790564686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 542083.9969999634,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542073.7000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 529438.4580000156,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529428.7999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 524642.2050000206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524618.7999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 378066.0651986184,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 378060.66493955057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 525306.468999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525301.8000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 703.8576216347385,
            "unit": "ns/iter",
            "extra": "iterations: 992110\ncpu: 703.8278013526775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4046.506702986376,
            "unit": "ns/iter",
            "extra": "iterations: 172908\ncpu: 4046.313068221257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3247.9373450231797,
            "unit": "ns/iter",
            "extra": "iterations: 225840\ncpu: 3247.7585901523144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2951.093996177327,
            "unit": "ns/iter",
            "extra": "iterations: 236999\ncpu: 2950.9664597741003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2442.0970133097944,
            "unit": "ns/iter",
            "extra": "iterations: 286404\ncpu: 2441.985796287775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20767.135824733956,
            "unit": "ns/iter",
            "extra": "iterations: 33823\ncpu: 20766.14138308263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 37658.17431192565,
            "unit": "ns/iter",
            "extra": "iterations: 18639\ncpu: 37656.134985782264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 9029.285393375238,
            "unit": "ns/iter",
            "extra": "iterations: 77013\ncpu: 9028.7302143794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8985.305306455937,
            "unit": "ns/iter",
            "extra": "iterations: 78282\ncpu: 8984.910962928829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8975.68425226093,
            "unit": "ns/iter",
            "extra": "iterations: 78189\ncpu: 8975.395515993327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17597.629363710512,
            "unit": "ns/iter",
            "extra": "iterations: 39416\ncpu: 17597.323421960624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16871.956267450114,
            "unit": "ns/iter",
            "extra": "iterations: 41548\ncpu: 16871.85183402337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5773.82964538183,
            "unit": "ns/iter",
            "extra": "iterations: 121793\ncpu: 5773.5937204929605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28595.905886702752,
            "unit": "ns/iter",
            "extra": "iterations: 24343\ncpu: 28594.614468225285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22988.893479834103,
            "unit": "ns/iter",
            "extra": "iterations: 30398\ncpu: 22987.604447660866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 23216.636795429888,
            "unit": "ns/iter",
            "extra": "iterations: 30107\ncpu: 23215.315375161874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23467.642289401458,
            "unit": "ns/iter",
            "extra": "iterations: 30069\ncpu: 23466.69659782515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51639.392404128244,
            "unit": "ns/iter",
            "extra": "iterations: 13560\ncpu: 51637.00589970486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 183560.94997381093,
            "unit": "ns/iter",
            "extra": "iterations: 3818\ncpu: 183554.68831849424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 151701.06670998991,
            "unit": "ns/iter",
            "extra": "iterations: 4617\ncpu: 151696.77279618793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 151393.02459016076,
            "unit": "ns/iter",
            "extra": "iterations: 4636\ncpu: 151391.9758412429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 151704.6452732072,
            "unit": "ns/iter",
            "extra": "iterations: 4612\ncpu: 151704.01127493556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 94323.0830976461,
            "unit": "ns/iter",
            "extra": "iterations: 7425\ncpu: 94318.77441077499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 149814.32815198513,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 149807.31865284857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5628.839330020065,
            "unit": "ns/iter",
            "extra": "iterations: 126153\ncpu: 5628.539947524106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27839.934192158104,
            "unit": "ns/iter",
            "extra": "iterations: 25073\ncpu: 27838.978183703322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21901.062879878395,
            "unit": "ns/iter",
            "extra": "iterations: 31918\ncpu: 21900.08145873777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21682.771232749594,
            "unit": "ns/iter",
            "extra": "iterations: 32391\ncpu: 21682.056744157304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22362.783501509515,
            "unit": "ns/iter",
            "extra": "iterations: 31118\ncpu: 22360.94864708502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49285.8009988742,
            "unit": "ns/iter",
            "extra": "iterations: 14216\ncpu: 49283.602982554876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 174333.1692307736,
            "unit": "ns/iter",
            "extra": "iterations: 3965\ncpu: 174325.27112231994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 143330.58696097383,
            "unit": "ns/iter",
            "extra": "iterations: 4893\ncpu: 143331.39178418322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 142442.9729674795,
            "unit": "ns/iter",
            "extra": "iterations: 4920\ncpu: 142439.34959349706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 141819.35951417466,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 141818.50202429135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 90854.0668831171,
            "unit": "ns/iter",
            "extra": "iterations: 7700\ncpu: 90849.46753246784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 142077.97108531385,
            "unit": "ns/iter",
            "extra": "iterations: 4911\ncpu: 142071.55365505963 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702415978388,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1680.8663749927907,
            "unit": "ns/iter",
            "extra": "iterations: 415304\ncpu: 1680.8147766455415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19479.507482446457,
            "unit": "ns/iter",
            "extra": "iterations: 42299\ncpu: 19478.874205063952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40390.03243164048,
            "unit": "ns/iter",
            "extra": "iterations: 20443\ncpu: 40389.551435699264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 60379.12762933524,
            "unit": "ns/iter",
            "extra": "iterations: 14072\ncpu: 60378.03439454235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 66859.7910607686,
            "unit": "ns/iter",
            "extra": "iterations: 13066\ncpu: 66859.22240930665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 83394.21644359478,
            "unit": "ns/iter",
            "extra": "iterations: 10460\ncpu: 83391.5391969407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 99941.38981097369,
            "unit": "ns/iter",
            "extra": "iterations: 8676\ncpu: 99939.14246196397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 114571.27249529981,
            "unit": "ns/iter",
            "extra": "iterations: 7446\ncpu: 114567.44560838037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 134430.88563992936,
            "unit": "ns/iter",
            "extra": "iterations: 6532\ncpu: 134429.91426821798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1448.807073834981,
            "unit": "ns/iter",
            "extra": "iterations: 482143\ncpu: 1448.7338818566245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1206.6881548234687,
            "unit": "ns/iter",
            "extra": "iterations: 581359\ncpu: 1206.6729851950336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1198.2153163628566,
            "unit": "ns/iter",
            "extra": "iterations: 582227\ncpu: 1198.1836981108736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1204.7322847965022,
            "unit": "ns/iter",
            "extra": "iterations: 579347\ncpu: 1204.721522679845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2207.416729262798,
            "unit": "ns/iter",
            "extra": "iterations: 316846\ncpu: 2207.422848955016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7280.9829653982215,
            "unit": "ns/iter",
            "extra": "iterations: 108896\ncpu: 7280.725646488384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 39504.47782896639,
            "unit": "ns/iter",
            "extra": "iterations: 20838\ncpu: 39504.22785296096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 31350.7979001619,
            "unit": "ns/iter",
            "extra": "iterations: 26002\ncpu: 31350.473040535413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30698.54842724548,
            "unit": "ns/iter",
            "extra": "iterations: 26514\ncpu: 30698.265067511406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30712.184475160782,
            "unit": "ns/iter",
            "extra": "iterations: 26551\ncpu: 30711.359270837256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 81979.40657615352,
            "unit": "ns/iter",
            "extra": "iterations: 10827\ncpu: 81976.71561836131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 661022.3779999842,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 661012.7000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 531734.1729999896,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531715.3000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 520168.6489999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520170.30000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 509140.34600000945,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509125.60000000085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 371589.1615150223,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 371541.4453635179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 517029.4510000133,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516986.00000000285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2650703.0315186046,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2650553.581661894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1232523.4209827473,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 1232466.9322709155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3603090.1634241357,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3602829.571984437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10458.411925581438,
            "unit": "ns/iter",
            "extra": "iterations: 81539\ncpu: 10457.054906241177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53131.77289400814,
            "unit": "ns/iter",
            "extra": "iterations: 15539\ncpu: 53128.187142029776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42284.949593994585,
            "unit": "ns/iter",
            "extra": "iterations: 19581\ncpu: 42284.2806802513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 41764.55074783648,
            "unit": "ns/iter",
            "extra": "iterations: 19991\ncpu: 41762.788254714476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41548.915141515085,
            "unit": "ns/iter",
            "extra": "iterations: 19998\ncpu: 41546.969696969376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 91281.37647550348,
            "unit": "ns/iter",
            "extra": "iterations: 9573\ncpu: 91277.54100073065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 694235.7641296134,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 694200.2260738504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 561435.4399999968,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561431.1999999941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 553077.4319999807,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553050.5000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 552602.4879999909,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552559.0000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 395009.65978455264,
            "unit": "ns/iter",
            "extra": "iterations: 2228\ncpu: 394994.38958707516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 540848.04499999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540849.8000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2807059.7082066927,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2806920.060790258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1228927.6048387326,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 1228840.1881720435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7412.591916159561,
            "unit": "ns/iter",
            "extra": "iterations: 111259\ncpu: 7412.486180893266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 38038.480612998566,
            "unit": "ns/iter",
            "extra": "iterations: 21664\ncpu: 38035.41820531744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30249.76384466224,
            "unit": "ns/iter",
            "extra": "iterations: 27321\ncpu: 30248.38768712727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29719.25984592153,
            "unit": "ns/iter",
            "extra": "iterations: 27778\ncpu: 29718.02865577073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29289.138786600735,
            "unit": "ns/iter",
            "extra": "iterations: 27971\ncpu: 29288.098387615722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 77984.33719285831,
            "unit": "ns/iter",
            "extra": "iterations: 11314\ncpu: 77978.73431147262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 646126.8820000043,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 646093.4999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 521431.8440000057,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521434.3999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 520517.6219999998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520479.899999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 517716.5170000251,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517709.19999999873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 378299.6874729086,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 378282.9648894677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 519856.88299998856,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519849.6000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 686.0126180963842,
            "unit": "ns/iter",
            "extra": "iterations: 1024481\ncpu: 685.9789493411791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3871.644683240865,
            "unit": "ns/iter",
            "extra": "iterations: 178953\ncpu: 3871.5366604639107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3093.801855738449,
            "unit": "ns/iter",
            "extra": "iterations: 226325\ncpu: 3093.8075775985926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3137.5772635859958,
            "unit": "ns/iter",
            "extra": "iterations: 221275\ncpu: 3137.493616540495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2416.95108308406,
            "unit": "ns/iter",
            "extra": "iterations: 290513\ncpu: 2416.8660266493903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20314.623054855096,
            "unit": "ns/iter",
            "extra": "iterations: 34509\ncpu: 20313.4573589499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 36960.856486371704,
            "unit": "ns/iter",
            "extra": "iterations: 18932\ncpu: 36959.38094232013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8832.418738170174,
            "unit": "ns/iter",
            "extra": "iterations: 79250\ncpu: 8831.799369085173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8818.630763802434,
            "unit": "ns/iter",
            "extra": "iterations: 79353\ncpu: 8818.2400161305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8797.912135469986,
            "unit": "ns/iter",
            "extra": "iterations: 79486\ncpu: 8797.783257428991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17573.020529734127,
            "unit": "ns/iter",
            "extra": "iterations: 39114\ncpu: 17572.810246970323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16867.90684277768,
            "unit": "ns/iter",
            "extra": "iterations: 41489\ncpu: 16867.909566391136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5705.531482113744,
            "unit": "ns/iter",
            "extra": "iterations: 123054\ncpu: 5705.141645131426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27967.974970872718,
            "unit": "ns/iter",
            "extra": "iterations: 24891\ncpu: 27966.69478928139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22461.74836893914,
            "unit": "ns/iter",
            "extra": "iterations: 31268\ncpu: 22460.36522962793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22992.327405618566,
            "unit": "ns/iter",
            "extra": "iterations: 30647\ncpu: 22991.362939276205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23027.405684328838,
            "unit": "ns/iter",
            "extra": "iterations: 30329\ncpu: 23025.520129249206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51404.00669117936,
            "unit": "ns/iter",
            "extra": "iterations: 13600\ncpu: 51399.71323529417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 180077.95439234082,
            "unit": "ns/iter",
            "extra": "iterations: 3859\ncpu: 180062.1145374473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 151610.12381567011,
            "unit": "ns/iter",
            "extra": "iterations: 4644\ncpu: 151606.61068044876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 147974.4118798988,
            "unit": "ns/iter",
            "extra": "iterations: 4596\ncpu: 147974.63011314382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 147676.50443974521,
            "unit": "ns/iter",
            "extra": "iterations: 4730\ncpu: 147664.01691331694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 93450.62869704152,
            "unit": "ns/iter",
            "extra": "iterations: 7506\ncpu: 93450.78603783579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 148914.39226519916,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 148913.19592010396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5392.34780805827,
            "unit": "ns/iter",
            "extra": "iterations: 130227\ncpu: 5392.358727452733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27354.11105000417,
            "unit": "ns/iter",
            "extra": "iterations: 25457\ncpu: 27354.02836155108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21726.62502697411,
            "unit": "ns/iter",
            "extra": "iterations: 32437\ncpu: 21726.33720751028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21610.501741185668,
            "unit": "ns/iter",
            "extra": "iterations: 32162\ncpu: 21610.030470741625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22570.79128323036,
            "unit": "ns/iter",
            "extra": "iterations: 31296\ncpu: 22570.45309304694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49076.93833780174,
            "unit": "ns/iter",
            "extra": "iterations: 14174\ncpu: 49075.70904472947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 175231.8964652753,
            "unit": "ns/iter",
            "extra": "iterations: 3989\ncpu: 175230.30834795753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 147402.77789496433,
            "unit": "ns/iter",
            "extra": "iterations: 4741\ncpu: 147402.9740561055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 146834.48563640655,
            "unit": "ns/iter",
            "extra": "iterations: 4769\ncpu: 146831.53700985602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 144949.1493372037,
            "unit": "ns/iter",
            "extra": "iterations: 4828\ncpu: 144947.6180613063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 91006.58900898775,
            "unit": "ns/iter",
            "extra": "iterations: 7679\ncpu: 91001.41945565795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 143987.0761316797,
            "unit": "ns/iter",
            "extra": "iterations: 4860\ncpu: 143984.5267489706 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418333854,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1677.0758692739623,
            "unit": "ns/iter",
            "extra": "iterations: 389578\ncpu: 1677.0269368393492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19388.183785821657,
            "unit": "ns/iter",
            "extra": "iterations: 39780\ncpu: 19387.85570638512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40924.758131488576,
            "unit": "ns/iter",
            "extra": "iterations: 20230\ncpu: 40924.21651013346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50357.24729999913,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50356.77999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 67431.94825207007,
            "unit": "ns/iter",
            "extra": "iterations: 13044\ncpu: 67432.32904017172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 84236.1420470906,
            "unit": "ns/iter",
            "extra": "iterations: 10405\ncpu: 84234.79096588181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 99971.72969837634,
            "unit": "ns/iter",
            "extra": "iterations: 8620\ncpu: 99969.83758700697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 115539.31321108279,
            "unit": "ns/iter",
            "extra": "iterations: 7471\ncpu: 115534.58707000403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 134834.5244479525,
            "unit": "ns/iter",
            "extra": "iterations: 6340\ncpu: 134832.00315457417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1467.7455295504872,
            "unit": "ns/iter",
            "extra": "iterations: 476574\ncpu: 1467.7214871142776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1213.5055863456978,
            "unit": "ns/iter",
            "extra": "iterations: 577927\ncpu: 1213.4634651089145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1224.4642647726012,
            "unit": "ns/iter",
            "extra": "iterations: 573020\ncpu: 1224.474363896549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1215.2741384556068,
            "unit": "ns/iter",
            "extra": "iterations: 578496\ncpu: 1215.270978537449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2166.5031831078927,
            "unit": "ns/iter",
            "extra": "iterations: 325311\ncpu: 2166.500056868659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7438.811772945247,
            "unit": "ns/iter",
            "extra": "iterations: 109947\ncpu: 7438.777774746016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 39631.57818811309,
            "unit": "ns/iter",
            "extra": "iterations: 20796\ncpu: 39631.1406039623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 31358.96989503589,
            "unit": "ns/iter",
            "extra": "iterations: 26009\ncpu: 31358.360567495885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30778.689137738053,
            "unit": "ns/iter",
            "extra": "iterations: 26790\ncpu: 30776.091825307973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30474.883805184552,
            "unit": "ns/iter",
            "extra": "iterations: 26774\ncpu: 30473.089564502792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 81792.39266291834,
            "unit": "ns/iter",
            "extra": "iterations: 10849\ncpu: 81787.11401972518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 645290.2020000124,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645286.3000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 519650.3349999943,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519626.0000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 521482.87899998995,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521437.49999999756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 517237.9309999826,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517233.4999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 374140.06624203466,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 374123.736730361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 513776.8629999755,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513710.39999999723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2674384.068571385,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2674286.285714292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1223344.4196547307,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 1223282.3373174004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3585598.965250995,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3585439.768339767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10263.709611976741,
            "unit": "ns/iter",
            "extra": "iterations: 81825\ncpu: 10263.131072410659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53948.237172842135,
            "unit": "ns/iter",
            "extra": "iterations: 15436\ncpu: 53944.843223632924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42711.967499231556,
            "unit": "ns/iter",
            "extra": "iterations: 19538\ncpu: 42709.67345685336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42110.71743406027,
            "unit": "ns/iter",
            "extra": "iterations: 19829\ncpu: 42107.574764234276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41670.15169270761,
            "unit": "ns/iter",
            "extra": "iterations: 19968\ncpu: 41668.20913461548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 91131.16277628647,
            "unit": "ns/iter",
            "extra": "iterations: 9682\ncpu: 91126.88494112823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 696794.1894736837,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 696770.0751879669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 556792.9730000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 556748.9000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 543860.2469999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543863.0000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 541204.4270000252,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541167.3999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 389619.3257065998,
            "unit": "ns/iter",
            "extra": "iterations: 2229\ncpu: 389599.10273665364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 537726.0859999921,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537690.8999999941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2809912.189758981,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2809704.8192771133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1232312.496021226,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 1232243.8992042376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7462.069759533007,
            "unit": "ns/iter",
            "extra": "iterations: 111741\ncpu: 7461.585273086867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 38676.83562969484,
            "unit": "ns/iter",
            "extra": "iterations: 21701\ncpu: 38675.222339984466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30545.086951718094,
            "unit": "ns/iter",
            "extra": "iterations: 27153\ncpu: 30543.37273966049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29833.214308978473,
            "unit": "ns/iter",
            "extra": "iterations: 27633\ncpu: 29832.03778091418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29549.27417860468,
            "unit": "ns/iter",
            "extra": "iterations: 28062\ncpu: 29548.63516499176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 78570.39261092506,
            "unit": "ns/iter",
            "extra": "iterations: 11314\ncpu: 78567.0761887926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 677852.1233766249,
            "unit": "ns/iter",
            "extra": "iterations: 1386\ncpu: 677810.4617604638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 541695.1130000029,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541647.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 536327.6409999855,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536330.3000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 530365.5829999911,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530290.9000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 380537.3955613555,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 380531.2880765894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 526557.6520000082,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526545.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 687.0340488868464,
            "unit": "ns/iter",
            "extra": "iterations: 1019211\ncpu: 687.029574837795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4037.775350330646,
            "unit": "ns/iter",
            "extra": "iterations: 173479\ncpu: 4037.797658506237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3230.7432614835143,
            "unit": "ns/iter",
            "extra": "iterations: 217073\ncpu: 3230.727451133936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3184.4286400917463,
            "unit": "ns/iter",
            "extra": "iterations: 226780\ncpu: 3184.4016227180223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2463.2865306037233,
            "unit": "ns/iter",
            "extra": "iterations: 284378\ncpu: 2463.2759918137176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20796.309401860297,
            "unit": "ns/iter",
            "extra": "iterations: 33972\ncpu: 20796.423525256167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 37201.12771683935,
            "unit": "ns/iter",
            "extra": "iterations: 19692\ncpu: 37200.436725573876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8923.985464337362,
            "unit": "ns/iter",
            "extra": "iterations: 78359\ncpu: 8923.881111295435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8995.919703206779,
            "unit": "ns/iter",
            "extra": "iterations: 78708\ncpu: 8995.743761752266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8812.963638193829,
            "unit": "ns/iter",
            "extra": "iterations: 79479\ncpu: 8812.535386705938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17576.682634278663,
            "unit": "ns/iter",
            "extra": "iterations: 39768\ncpu: 17576.579159122863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16787.390542065783,
            "unit": "ns/iter",
            "extra": "iterations: 41637\ncpu: 16787.088406945662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5654.958914344739,
            "unit": "ns/iter",
            "extra": "iterations: 123133\ncpu: 5654.9211015731125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 29316.254999368583,
            "unit": "ns/iter",
            "extra": "iterations: 23753\ncpu: 29316.103229065437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22621.93456945951,
            "unit": "ns/iter",
            "extra": "iterations: 30903\ncpu: 22622.065818852596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22943.464216697146,
            "unit": "ns/iter",
            "extra": "iterations: 30531\ncpu: 22943.585208476463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23017.320296472728,
            "unit": "ns/iter",
            "extra": "iterations: 30222\ncpu: 23017.1431407585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50732.957778099684,
            "unit": "ns/iter",
            "extra": "iterations: 13808\ncpu: 50732.66946697629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 182725.48765755282,
            "unit": "ns/iter",
            "extra": "iterations: 3808\ncpu: 182722.13760504103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 149016.25250159763,
            "unit": "ns/iter",
            "extra": "iterations: 4697\ncpu: 149013.58313817263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 149368.77998717438,
            "unit": "ns/iter",
            "extra": "iterations: 4677\ncpu: 149362.81804575486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 149337.0989761114,
            "unit": "ns/iter",
            "extra": "iterations: 4688\ncpu: 149324.0401023869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 92816.47478491347,
            "unit": "ns/iter",
            "extra": "iterations: 7555\ncpu: 92815.44672402482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 149641.69694379254,
            "unit": "ns/iter",
            "extra": "iterations: 4679\ncpu: 149642.38085060913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5458.646105364767,
            "unit": "ns/iter",
            "extra": "iterations: 128202\ncpu: 5458.605169966104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27134.585354460105,
            "unit": "ns/iter",
            "extra": "iterations: 25687\ncpu: 27134.09896056367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22157.6418278341,
            "unit": "ns/iter",
            "extra": "iterations: 31644\ncpu: 22157.464290228592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21456.27229196841,
            "unit": "ns/iter",
            "extra": "iterations: 32579\ncpu: 21455.983916019646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21965.244346494426,
            "unit": "ns/iter",
            "extra": "iterations: 31308\ncpu: 21964.849239811283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49465.836385925395,
            "unit": "ns/iter",
            "extra": "iterations: 13868\ncpu: 49465.128353043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 175893.5490881908,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 175889.58281289128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 147170.8712663073,
            "unit": "ns/iter",
            "extra": "iterations: 4754\ncpu: 147168.27934371209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 145591.80304293006,
            "unit": "ns/iter",
            "extra": "iterations: 4798\ncpu: 145592.5802417687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 144932.5536864029,
            "unit": "ns/iter",
            "extra": "iterations: 4815\ncpu: 144931.52647975023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 91597.74406469896,
            "unit": "ns/iter",
            "extra": "iterations: 7666\ncpu: 91596.15183929072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 143812.9726393738,
            "unit": "ns/iter",
            "extra": "iterations: 4861\ncpu: 143809.66879243017 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420949821,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1655.8751815787434,
            "unit": "ns/iter",
            "extra": "iterations: 417863\ncpu: 1655.8216448931828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19638.327384792457,
            "unit": "ns/iter",
            "extra": "iterations: 41859\ncpu: 19637.795933968806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40694.260715166805,
            "unit": "ns/iter",
            "extra": "iterations: 20275\ncpu: 40693.1146732429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50396.73359999597,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50396.790000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 67663.57100114987,
            "unit": "ns/iter",
            "extra": "iterations: 13035\ncpu: 67662.38588415804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 84062.03982725648,
            "unit": "ns/iter",
            "extra": "iterations: 10420\ncpu: 84060.49904030706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 100027.67334715503,
            "unit": "ns/iter",
            "extra": "iterations: 8682\ncpu: 100023.70421561848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 117015.85426934823,
            "unit": "ns/iter",
            "extra": "iterations: 7507\ncpu: 117013.76049020907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 134682.27258493024,
            "unit": "ns/iter",
            "extra": "iterations: 6387\ncpu: 134676.48348207303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1490.4227348479844,
            "unit": "ns/iter",
            "extra": "iterations: 470432\ncpu: 1490.397336915854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1236.8671833532308,
            "unit": "ns/iter",
            "extra": "iterations: 567075\ncpu: 1236.8067715910595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1225.2317612716045,
            "unit": "ns/iter",
            "extra": "iterations: 571394\ncpu: 1225.17947335814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1240.3987965279725,
            "unit": "ns/iter",
            "extra": "iterations: 565198\ncpu: 1240.3808930675598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2143.891348169473,
            "unit": "ns/iter",
            "extra": "iterations: 323446\ncpu: 2143.8731658453044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7529.565186606563,
            "unit": "ns/iter",
            "extra": "iterations: 107338\ncpu: 7529.3987217947015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 39002.70210946424,
            "unit": "ns/iter",
            "extra": "iterations: 21048\ncpu: 39001.591600152045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 31322.732528467935,
            "unit": "ns/iter",
            "extra": "iterations: 26257\ncpu: 31322.5692196367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30667.9896960902,
            "unit": "ns/iter",
            "extra": "iterations: 26883\ncpu: 30667.525945764937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30589.7170582998,
            "unit": "ns/iter",
            "extra": "iterations: 26896\ncpu: 30589.013236168947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 82571.7640743142,
            "unit": "ns/iter",
            "extra": "iterations: 10711\ncpu: 82568.91980207253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 661483.4769999902,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 661451.2999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 524121.0750000391,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524110.9999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 521898.3099999832,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521886.60000000196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 522970.335000025,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522965.10000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 375202.9413034138,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 375192.0155373331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 522315.94899996027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522316.29999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2676470.3381501404,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2676331.2138728364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1236138.7417218336,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1236110.9933774867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3593217.40856035,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3593043.1906614797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10314.213559067393,
            "unit": "ns/iter",
            "extra": "iterations: 79917\ncpu: 10313.915687525829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54675.736253196286,
            "unit": "ns/iter",
            "extra": "iterations: 15640\ncpu: 54674.60358056279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43195.33586600724,
            "unit": "ns/iter",
            "extra": "iterations: 18031\ncpu: 43194.59264599861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42016.37424434862,
            "unit": "ns/iter",
            "extra": "iterations: 19685\ncpu: 42014.610109220215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41736.856274184036,
            "unit": "ns/iter",
            "extra": "iterations: 19899\ncpu: 41735.74551485015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 91812.87518324779,
            "unit": "ns/iter",
            "extra": "iterations: 9550\ncpu: 91810.85863874349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 678162.7856093985,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 678134.8017621161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 553264.9630000037,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553260.2000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 541162.1999999739,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541138.200000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 541070.2480000396,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541052.6000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 390288.8681269461,
            "unit": "ns/iter",
            "extra": "iterations: 2237\ncpu: 390281.09074653673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 531814.761000021,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531804.1000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2794868.198795275,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2794440.0602409677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1229404.1473684034,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 1229372.3684210514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7630.399773254973,
            "unit": "ns/iter",
            "extra": "iterations: 111138\ncpu: 7625.671687451678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 38283.272048942956,
            "unit": "ns/iter",
            "extra": "iterations: 21577\ncpu: 38282.4674421839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30378.780259127303,
            "unit": "ns/iter",
            "extra": "iterations: 27091\ncpu: 30378.03698645307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29528.433483407814,
            "unit": "ns/iter",
            "extra": "iterations: 27542\ncpu: 29528.06622612743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 28880.460483064693,
            "unit": "ns/iter",
            "extra": "iterations: 27988\ncpu: 28879.77347434619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 78182.3185357552,
            "unit": "ns/iter",
            "extra": "iterations: 11173\ncpu: 78179.4594110806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 654952.52300002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 654939.6000000058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 532049.9970000015,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532036.3000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 532840.2330000018,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532823.399999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 536975.7490000211,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536968.6000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 379774.1156668178,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 379763.7030643087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 522669.79799998127,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522656.69999999885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 699.78419961028,
            "unit": "ns/iter",
            "extra": "iterations: 1004317\ncpu: 699.7655122834731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3982.67175130007,
            "unit": "ns/iter",
            "extra": "iterations: 175955\ncpu: 3982.551788809628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2985.134940951626,
            "unit": "ns/iter",
            "extra": "iterations: 234384\ncpu: 2985.0587070790048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2944.256966022369,
            "unit": "ns/iter",
            "extra": "iterations: 237510\ncpu: 2944.132878615637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2441.658178273743,
            "unit": "ns/iter",
            "extra": "iterations: 286234\ncpu: 2441.5841584158343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20520.080845552166,
            "unit": "ns/iter",
            "extra": "iterations: 33966\ncpu: 20519.507743037117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 38110.4788640437,
            "unit": "ns/iter",
            "extra": "iterations: 18381\ncpu: 38110.157227572075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 9154.432533605808,
            "unit": "ns/iter",
            "extra": "iterations: 76401\ncpu: 9154.148505909678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 9025.31254136107,
            "unit": "ns/iter",
            "extra": "iterations: 77065\ncpu: 9025.0126516577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 9038.643968248423,
            "unit": "ns/iter",
            "extra": "iterations: 77979\ncpu: 9038.075635748095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17637.878097378943,
            "unit": "ns/iter",
            "extra": "iterations: 39146\ncpu: 17637.301384560284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16910.406935102244,
            "unit": "ns/iter",
            "extra": "iterations: 41326\ncpu: 16910.242946329286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5673.635030606482,
            "unit": "ns/iter",
            "extra": "iterations: 122687\ncpu: 5673.410385778447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28301.29997552261,
            "unit": "ns/iter",
            "extra": "iterations: 24512\ncpu: 28300.640502611164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22706.229975414382,
            "unit": "ns/iter",
            "extra": "iterations: 30912\ncpu: 22705.4994824014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22716.08572175673,
            "unit": "ns/iter",
            "extra": "iterations: 30599\ncpu: 22715.902480473225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22958.253224263277,
            "unit": "ns/iter",
            "extra": "iterations: 30317\ncpu: 22957.353959824424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50858.298254506924,
            "unit": "ns/iter",
            "extra": "iterations: 13807\ncpu: 50856.753820526064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 180304.07901907052,
            "unit": "ns/iter",
            "extra": "iterations: 3670\ncpu: 180295.61307901837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 151624.40073688253,
            "unit": "ns/iter",
            "extra": "iterations: 4614\ncpu: 151622.8435197233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 149934.43233895357,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 149929.09641158738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 149604.9084100092,
            "unit": "ns/iter",
            "extra": "iterations: 4673\ncpu: 149601.30537128128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 93282.82555347696,
            "unit": "ns/iter",
            "extra": "iterations: 7498\ncpu: 93282.75540144104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 150413.82685665268,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 150408.67875647894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5395.171218641453,
            "unit": "ns/iter",
            "extra": "iterations: 129431\ncpu: 5395.080004017639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27064.79157566367,
            "unit": "ns/iter",
            "extra": "iterations: 25640\ncpu: 27064.067862714575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21673.701253568746,
            "unit": "ns/iter",
            "extra": "iterations: 32228\ncpu: 21673.55094948481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21551.052273771988,
            "unit": "ns/iter",
            "extra": "iterations: 32655\ncpu: 21551.05496861133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22078.80515450938,
            "unit": "ns/iter",
            "extra": "iterations: 31584\ncpu: 22078.6094224925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49156.38996707342,
            "unit": "ns/iter",
            "extra": "iterations: 14273\ncpu: 49155.00595530043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 176521.20568815432,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 176519.80700863217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 147515.0365623021,
            "unit": "ns/iter",
            "extra": "iterations: 4759\ncpu: 147515.10821601457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 146674.25502934447,
            "unit": "ns/iter",
            "extra": "iterations: 4772\ncpu: 146672.98826487784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 145910.38221203114,
            "unit": "ns/iter",
            "extra": "iterations: 4801\ncpu: 145906.58196209068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 91849.36819973474,
            "unit": "ns/iter",
            "extra": "iterations: 7610\ncpu: 91845.12483574184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 146546.70695052648,
            "unit": "ns/iter",
            "extra": "iterations: 4791\ncpu: 146542.7885618854 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421921767,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1702.496557090669,
            "unit": "ns/iter",
            "extra": "iterations: 408666\ncpu: 1702.4088130649482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19611.9914614673,
            "unit": "ns/iter",
            "extra": "iterations: 41342\ncpu: 19610.817086739873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40329.78076150257,
            "unit": "ns/iter",
            "extra": "iterations: 20407\ncpu: 40328.70093595334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 60343.84853884561,
            "unit": "ns/iter",
            "extra": "iterations: 14030\ncpu: 60222.886671418426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 67746.6042062087,
            "unit": "ns/iter",
            "extra": "iterations: 13171\ncpu: 67742.63913142508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 85124.1511266498,
            "unit": "ns/iter",
            "extra": "iterations: 10296\ncpu: 85120.60994560995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 100873.85433848227,
            "unit": "ns/iter",
            "extra": "iterations: 8609\ncpu: 100870.484376815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 117094.28187558294,
            "unit": "ns/iter",
            "extra": "iterations: 7443\ncpu: 117088.20368131138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 133560.5219435668,
            "unit": "ns/iter",
            "extra": "iterations: 6380\ncpu: 133556.7868338559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1467.828301515365,
            "unit": "ns/iter",
            "extra": "iterations: 472427\ncpu: 1466.680354848474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1181.090158644383,
            "unit": "ns/iter",
            "extra": "iterations: 591890\ncpu: 1181.0665833178477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1187.7168981867856,
            "unit": "ns/iter",
            "extra": "iterations: 587566\ncpu: 1187.6687895487482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1171.505663456059,
            "unit": "ns/iter",
            "extra": "iterations: 598133\ncpu: 1171.4648748689665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2108.7900508992725,
            "unit": "ns/iter",
            "extra": "iterations: 332814\ncpu: 2108.7165804323117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7442.458849248748,
            "unit": "ns/iter",
            "extra": "iterations: 110241\ncpu: 7441.93358187969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 39681.90947095238,
            "unit": "ns/iter",
            "extra": "iterations: 20811\ncpu: 39680.42381432897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 31435.843402074217,
            "unit": "ns/iter",
            "extra": "iterations: 26137\ncpu: 31434.476030148908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30748.819452333883,
            "unit": "ns/iter",
            "extra": "iterations: 26403\ncpu: 30747.218119153167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30334.6440703114,
            "unit": "ns/iter",
            "extra": "iterations: 26966\ncpu: 30333.371653192873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 81982.4359069074,
            "unit": "ns/iter",
            "extra": "iterations: 10828\ncpu: 81978.97118581469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 648869.010999988,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648844.699999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 524339.6870000083,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524309.500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 521237.3140000182,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521207.09999999806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 523867.54499997327,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523845.30000000144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 376638.7245560761,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 376613.4690342143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 516515.6769999726,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516487.9000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2681380.9106628043,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2681253.6023054775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1228085.6301189123,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 1228022.8533685599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3590303.3359374614,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3590140.625000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10290.825285455398,
            "unit": "ns/iter",
            "extra": "iterations: 82237\ncpu: 10290.383890462903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53607.758834949,
            "unit": "ns/iter",
            "extra": "iterations: 15450\ncpu: 53606.58252427186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42668.00701663153,
            "unit": "ns/iter",
            "extra": "iterations: 19240\ncpu: 42666.81392931388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42019.2303801353,
            "unit": "ns/iter",
            "extra": "iterations: 19572\ncpu: 42017.64765992232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41706.53596123646,
            "unit": "ns/iter",
            "extra": "iterations: 19813\ncpu: 41705.01690809063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 92640.82578832487,
            "unit": "ns/iter",
            "extra": "iterations: 9609\ncpu: 92637.8291185348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 684931.3752759452,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 684903.458425313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 554083.9129999995,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554032.4000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 549020.7379999674,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549000.4000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 550125.764000029,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550062.4999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 389431.67737617326,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 389415.5287817929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 527026.9089999715,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527004.6999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2807250.9281437006,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2807102.694610777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1225426.5714285152,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 1225365.2116402101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7341.157009836191,
            "unit": "ns/iter",
            "extra": "iterations: 110509\ncpu: 7340.802106615786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 37346.34445835095,
            "unit": "ns/iter",
            "extra": "iterations: 21573\ncpu: 37344.982153617944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30656.075342464577,
            "unit": "ns/iter",
            "extra": "iterations: 27448\ncpu: 30654.77630428453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29549.287903370965,
            "unit": "ns/iter",
            "extra": "iterations: 27735\ncpu: 29547.17865512887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29338.990402453994,
            "unit": "ns/iter",
            "extra": "iterations: 28028\ncpu: 29337.7265591552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 79246.15350090052,
            "unit": "ns/iter",
            "extra": "iterations: 11140\ncpu: 79243.50089766631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 672405.6120000341,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 672379.9000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 537941.0230000303,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537940.4000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 524487.7680000286,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524463.7999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 528660.3609999929,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528629.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 381731.13255612954,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 381720.4663212444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 515041.6070000006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515017.7999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 688.1219896135299,
            "unit": "ns/iter",
            "extra": "iterations: 1013242\ncpu: 688.1001774502048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4012.7194383732485,
            "unit": "ns/iter",
            "extra": "iterations: 174778\ncpu: 4012.554783782849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3090.8999198443203,
            "unit": "ns/iter",
            "extra": "iterations: 227058\ncpu: 3090.835381268222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3051.370550781046,
            "unit": "ns/iter",
            "extra": "iterations: 229928\ncpu: 3051.25995963953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2377.4960894772375,
            "unit": "ns/iter",
            "extra": "iterations: 292544\ncpu: 2377.490565521774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 21091.600389106297,
            "unit": "ns/iter",
            "extra": "iterations: 33410\ncpu: 21090.97575576181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 38840.07675219365,
            "unit": "ns/iter",
            "extra": "iterations: 18006\ncpu: 38839.64234144165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8988.548865340494,
            "unit": "ns/iter",
            "extra": "iterations: 78041\ncpu: 8988.076780153955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8940.630183054587,
            "unit": "ns/iter",
            "extra": "iterations: 78501\ncpu: 8940.348530591973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8905.946724380388,
            "unit": "ns/iter",
            "extra": "iterations: 78779\ncpu: 8905.658868480194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17654.251017047405,
            "unit": "ns/iter",
            "extra": "iterations: 41296\ncpu: 17653.174641611768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16841.661377440334,
            "unit": "ns/iter",
            "extra": "iterations: 41657\ncpu: 16840.83587392276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5677.794371079564,
            "unit": "ns/iter",
            "extra": "iterations: 121160\ncpu: 5677.646913172662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28328.645554551036,
            "unit": "ns/iter",
            "extra": "iterations: 24362\ncpu: 28328.58960676456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22677.88957333569,
            "unit": "ns/iter",
            "extra": "iterations: 30844\ncpu: 22676.608092335613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22865.061913696176,
            "unit": "ns/iter",
            "extra": "iterations: 30914\ncpu: 22864.123051044495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23043.248013657118,
            "unit": "ns/iter",
            "extra": "iterations: 30458\ncpu: 23041.867489657874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50617.05663113611,
            "unit": "ns/iter",
            "extra": "iterations: 13791\ncpu: 50614.56747153941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 180406.2797634301,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 180401.3113911015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 151416.99114087952,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 151409.09680207388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 151458.55548330705,
            "unit": "ns/iter",
            "extra": "iterations: 4614\ncpu: 151452.275682705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 145570.7186383644,
            "unit": "ns/iter",
            "extra": "iterations: 4759\ncpu: 145565.03467115038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 92875.20676841402,
            "unit": "ns/iter",
            "extra": "iterations: 7535\ncpu: 92872.18314532291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 149806.16310388572,
            "unit": "ns/iter",
            "extra": "iterations: 4678\ncpu: 149800.44890979055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5551.340735074786,
            "unit": "ns/iter",
            "extra": "iterations: 126817\ncpu: 5550.977392620836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27821.793361291126,
            "unit": "ns/iter",
            "extra": "iterations: 25276\ncpu: 27820.624307643797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22344.498846818242,
            "unit": "ns/iter",
            "extra": "iterations: 31218\ncpu: 22342.824652444313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21915.993479549303,
            "unit": "ns/iter",
            "extra": "iterations: 32053\ncpu: 21915.290300439712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22388.042137091903,
            "unit": "ns/iter",
            "extra": "iterations: 31089\ncpu: 22386.480748818092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49366.25511644647,
            "unit": "ns/iter",
            "extra": "iterations: 14170\ncpu: 49364.46718419196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 175140.66733365544,
            "unit": "ns/iter",
            "extra": "iterations: 3998\ncpu: 175131.39069534716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 146997.43986614046,
            "unit": "ns/iter",
            "extra": "iterations: 4781\ncpu: 146991.11064630846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 146481.37380258256,
            "unit": "ns/iter",
            "extra": "iterations: 4802\ncpu: 146474.4481466062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 146821.5659477362,
            "unit": "ns/iter",
            "extra": "iterations: 4822\ncpu: 146812.75404396438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 92111.13529103024,
            "unit": "ns/iter",
            "extra": "iterations: 7628\ncpu: 92106.97430519269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 146421.7838063487,
            "unit": "ns/iter",
            "extra": "iterations: 4792\ncpu: 146417.25792988416 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422455347,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1663.7574868643594,
            "unit": "ns/iter",
            "extra": "iterations: 430888\ncpu: 1663.74487105698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19254.23773989812,
            "unit": "ns/iter",
            "extra": "iterations: 42883\ncpu: 19253.408110440036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40477.38080419007,
            "unit": "ns/iter",
            "extra": "iterations: 20244\ncpu: 40475.948429164215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50087.760299999216,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50085.41000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 66927.9750762212,
            "unit": "ns/iter",
            "extra": "iterations: 13120\ncpu: 66928.04115853658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 84865.56819923168,
            "unit": "ns/iter",
            "extra": "iterations: 10440\ncpu: 84863.38122605365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 100876.75244072465,
            "unit": "ns/iter",
            "extra": "iterations: 8604\ncpu: 100876.8247326825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 116737.52694051781,
            "unit": "ns/iter",
            "extra": "iterations: 7498\ncpu: 116738.19685249397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 135865.96750788615,
            "unit": "ns/iter",
            "extra": "iterations: 6340\ncpu: 135864.98422712935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1440.2172110537056,
            "unit": "ns/iter",
            "extra": "iterations: 481214\ncpu: 1440.1019089220192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1219.3280961006508,
            "unit": "ns/iter",
            "extra": "iterations: 575813\ncpu: 1219.2645876352217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1191.4914322234645,
            "unit": "ns/iter",
            "extra": "iterations: 588309\ncpu: 1191.5076940859306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1184.7188902063856,
            "unit": "ns/iter",
            "extra": "iterations: 585298\ncpu: 1184.6867749419955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2140.5995695019546,
            "unit": "ns/iter",
            "extra": "iterations: 327063\ncpu: 2140.630704176261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7005.275412016918,
            "unit": "ns/iter",
            "extra": "iterations: 115772\ncpu: 7004.825864630475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 37320.73287887841,
            "unit": "ns/iter",
            "extra": "iterations: 22151\ncpu: 37319.66502640958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29947.5827019969,
            "unit": "ns/iter",
            "extra": "iterations: 27587\ncpu: 29947.03664769637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 31020.162227430395,
            "unit": "ns/iter",
            "extra": "iterations: 28158\ncpu: 31019.060302578335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30525.56147080612,
            "unit": "ns/iter",
            "extra": "iterations: 21376\ncpu: 30524.494760479098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 82422.31829849498,
            "unit": "ns/iter",
            "extra": "iterations: 10908\ncpu: 82422.38723872381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 648441.8730000244,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648433.1999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 528111.1319999923,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528101.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 528596.4830000012,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528603.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 514807.6379999793,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514784.80000000104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 375960.1499148024,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 375962.39352640597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 521609.6099999845,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521601.1000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2679025.4856322315,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2678973.850574704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1219749.3403973477,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1219745.1655629135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3593425.1317830645,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3593425.9689922435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10265.21842625909,
            "unit": "ns/iter",
            "extra": "iterations: 81373\ncpu: 10265.196072407321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53495.58576072794,
            "unit": "ns/iter",
            "extra": "iterations: 15380\ncpu: 53495.585175552565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42318.237109657464,
            "unit": "ns/iter",
            "extra": "iterations: 19278\ncpu: 42317.92198360825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 41689.87927141116,
            "unit": "ns/iter",
            "extra": "iterations: 19929\ncpu: 41690.88765116159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41589.49609748534,
            "unit": "ns/iter",
            "extra": "iterations: 19859\ncpu: 41589.47076892079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 90962.64703446801,
            "unit": "ns/iter",
            "extra": "iterations: 9661\ncpu: 90962.08467032442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 692978.2710209928,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 692974.0240240205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 557104.6539999997,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557112.1999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 543339.6020000032,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543331.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 541154.9070000205,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541163.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 394598.00452692306,
            "unit": "ns/iter",
            "extra": "iterations: 2209\ncpu: 394598.95880488836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 538693.7029999786,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538681.099999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2800652.605421785,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2800665.963855416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1212183.94647522,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 1212172.062663177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7344.027459871603,
            "unit": "ns/iter",
            "extra": "iterations: 110707\ncpu: 7344.015283586409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 38690.38870914809,
            "unit": "ns/iter",
            "extra": "iterations: 21327\ncpu: 38689.07019271336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30458.723775448874,
            "unit": "ns/iter",
            "extra": "iterations: 27112\ncpu: 30458.66774859829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29823.01346801361,
            "unit": "ns/iter",
            "extra": "iterations: 27621\ncpu: 29822.348937402523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29444.400230306972,
            "unit": "ns/iter",
            "extra": "iterations: 27789\ncpu: 29444.14336608009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 78672.84993717392,
            "unit": "ns/iter",
            "extra": "iterations: 11142\ncpu: 78673.90055645315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 678723.1210601813,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 678727.2922636111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 543222.3020000039,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543208.3000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 538760.4719999785,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538755.6999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 541454.2309999887,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541462.199999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 383198.6205083297,
            "unit": "ns/iter",
            "extra": "iterations: 2282\ncpu: 383192.1560035069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 528417.6669999851,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528417.9000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 683.7916603645816,
            "unit": "ns/iter",
            "extra": "iterations: 1024793\ncpu: 683.7836519179973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4027.0432618532504,
            "unit": "ns/iter",
            "extra": "iterations: 179211\ncpu: 4026.9910887166407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3174.610469650458,
            "unit": "ns/iter",
            "extra": "iterations: 224401\ncpu: 3174.559382533948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3151.228525835691,
            "unit": "ns/iter",
            "extra": "iterations: 222465\ncpu: 3151.2727844829474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2438.061646957366,
            "unit": "ns/iter",
            "extra": "iterations: 287427\ncpu: 2437.9226725394733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20476.219796686626,
            "unit": "ns/iter",
            "extra": "iterations: 34036\ncpu: 20476.292748854168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 36481.64354829971,
            "unit": "ns/iter",
            "extra": "iterations: 18499\ncpu: 36482.11795232201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8886.595878825146,
            "unit": "ns/iter",
            "extra": "iterations: 78036\ncpu: 8886.72407606749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8850.25309663013,
            "unit": "ns/iter",
            "extra": "iterations: 79199\ncpu: 8850.38447455136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8797.905161566174,
            "unit": "ns/iter",
            "extra": "iterations: 79472\ncpu: 8797.86968995368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17505.112995479285,
            "unit": "ns/iter",
            "extra": "iterations: 40037\ncpu: 17504.750605689762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16763.81461077757,
            "unit": "ns/iter",
            "extra": "iterations: 41750\ncpu: 16764.05748502993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5655.364612274997,
            "unit": "ns/iter",
            "extra": "iterations: 124173\ncpu: 5655.442809628521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28554.19534116628,
            "unit": "ns/iter",
            "extra": "iterations: 24255\ncpu: 28554.570191712814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22638.23447585849,
            "unit": "ns/iter",
            "extra": "iterations: 30984\ncpu: 22638.12935708742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22987.60086175635,
            "unit": "ns/iter",
            "extra": "iterations: 30403\ncpu: 22987.399269808684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23137.812545513887,
            "unit": "ns/iter",
            "extra": "iterations: 30210\ncpu: 23138.12644819604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50085.87212880265,
            "unit": "ns/iter",
            "extra": "iterations: 13975\ncpu: 50086.01073345232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 176061.88352272843,
            "unit": "ns/iter",
            "extra": "iterations: 3872\ncpu: 176061.05371900593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 147574.26025369714,
            "unit": "ns/iter",
            "extra": "iterations: 4730\ncpu: 147573.04439746265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 145983.33638633945,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 145985.13738551087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 146755.38775510195,
            "unit": "ns/iter",
            "extra": "iterations: 4802\ncpu: 146757.22615576952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 92804.43565010914,
            "unit": "ns/iter",
            "extra": "iterations: 7568\ncpu: 92804.34725158689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 149246.2960288822,
            "unit": "ns/iter",
            "extra": "iterations: 4709\ncpu: 149245.42365682594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5478.994233609401,
            "unit": "ns/iter",
            "extra": "iterations: 127983\ncpu: 5478.951892048157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27393.950448861164,
            "unit": "ns/iter",
            "extra": "iterations: 25509\ncpu: 27394.276529852148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21728.981341541563,
            "unit": "ns/iter",
            "extra": "iterations: 32157\ncpu: 21729.057436950243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21407.127133210117,
            "unit": "ns/iter",
            "extra": "iterations: 32580\ncpu: 21407.151626764506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22226.83476360759,
            "unit": "ns/iter",
            "extra": "iterations: 31579\ncpu: 22226.68228886271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48799.813649397445,
            "unit": "ns/iter",
            "extra": "iterations: 14301\ncpu: 48800.51744633259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 176274.68704402808,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 176274.9182389934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 147498.79953625478,
            "unit": "ns/iter",
            "extra": "iterations: 4744\ncpu: 147499.24114671294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 145059.82501552402,
            "unit": "ns/iter",
            "extra": "iterations: 4829\ncpu: 145061.77262373333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 145184.92604902646,
            "unit": "ns/iter",
            "extra": "iterations: 4814\ncpu: 145186.91316992146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 91935.02409954362,
            "unit": "ns/iter",
            "extra": "iterations: 7635\ncpu: 91935.11460379805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 143463.58469260184,
            "unit": "ns/iter",
            "extra": "iterations: 4782\ncpu: 143462.46340443278 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453325846,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1693.531553832713,
            "unit": "ns/iter",
            "extra": "iterations: 407605\ncpu: 1693.437273831283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19656.701812783063,
            "unit": "ns/iter",
            "extra": "iterations: 41759\ncpu: 19655.62633204818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40845.45215417177,
            "unit": "ns/iter",
            "extra": "iterations: 20263\ncpu: 40844.01618713911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50282.9926000004,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50280.119999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 67414.15227185866,
            "unit": "ns/iter",
            "extra": "iterations: 13095\ncpu: 67411.30202367318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 84211.24370720283,
            "unit": "ns/iter",
            "extra": "iterations: 10369\ncpu: 84208.41932683963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 100849.79450307584,
            "unit": "ns/iter",
            "extra": "iterations: 8623\ncpu: 100845.84251420622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 116120.71428571634,
            "unit": "ns/iter",
            "extra": "iterations: 7497\ncpu: 116116.79338402014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 136046.30485282617,
            "unit": "ns/iter",
            "extra": "iterations: 6285\ncpu: 136039.55449482906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1505.633568313274,
            "unit": "ns/iter",
            "extra": "iterations: 467274\ncpu: 1505.6146928782669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1233.421715602086,
            "unit": "ns/iter",
            "extra": "iterations: 569526\ncpu: 1233.406376530657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1215.5894679675268,
            "unit": "ns/iter",
            "extra": "iterations: 568969\ncpu: 1215.5113898999791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1226.545904528933,
            "unit": "ns/iter",
            "extra": "iterations: 570728\ncpu: 1226.4758343729413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2167.761536171506,
            "unit": "ns/iter",
            "extra": "iterations: 319105\ncpu: 2167.6269566443616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7390.915191531205,
            "unit": "ns/iter",
            "extra": "iterations: 109199\ncpu: 7390.714200679489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 39722.17540888347,
            "unit": "ns/iter",
            "extra": "iterations: 20666\ncpu: 39720.73453982387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30976.179012345216,
            "unit": "ns/iter",
            "extra": "iterations: 26406\ncpu: 30974.774672422987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30690.736668541005,
            "unit": "ns/iter",
            "extra": "iterations: 26685\ncpu: 30689.271126100793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30309.288260464516,
            "unit": "ns/iter",
            "extra": "iterations: 26875\ncpu: 30308.167441860456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 81808.8872166642,
            "unit": "ns/iter",
            "extra": "iterations: 10897\ncpu: 81804.87290079851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 638577.4370000093,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638519.2999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 515031.66699995974,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515018.59999999765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 520299.9489999911,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520276.599999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 527262.8059999533,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527231.4999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 374465.67375565186,
            "unit": "ns/iter",
            "extra": "iterations: 2210\ncpu: 374438.7782805431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 522791.7240000011,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522789.19999999827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2673071.1002865047,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2672982.808022919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1190197.9496855657,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 1190152.2012578612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3595421.027131704,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3595262.015503887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10284.83085410899,
            "unit": "ns/iter",
            "extra": "iterations: 81746\ncpu: 10284.443275511921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53103.53975003331,
            "unit": "ns/iter",
            "extra": "iterations: 15522\ncpu: 53101.58484731351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42232.00601109914,
            "unit": "ns/iter",
            "extra": "iterations: 19464\ncpu: 42230.23530620629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 41688.317351482714,
            "unit": "ns/iter",
            "extra": "iterations: 19981\ncpu: 41687.28291877282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41095.6441677916,
            "unit": "ns/iter",
            "extra": "iterations: 20001\ncpu: 41094.885255737296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 91482.09201750756,
            "unit": "ns/iter",
            "extra": "iterations: 9596\ncpu: 91480.75239683213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 675062.6796760007,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 675059.4992636255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 551803.2930000344,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551789.9000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 547988.6060000467,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547986.1999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 543762.5910000178,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543760.4999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 386224.2756324983,
            "unit": "ns/iter",
            "extra": "iterations: 2253\ncpu: 386222.41455836757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 534511.1480000356,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534508.6000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2787819.555223803,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2787731.04477611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1222196.9999999665,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 1222172.047244094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7409.679811549322,
            "unit": "ns/iter",
            "extra": "iterations: 112921\ncpu: 7409.651880518225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 38849.901000748345,
            "unit": "ns/iter",
            "extra": "iterations: 21384\ncpu: 38849.022633744906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30634.81751233563,
            "unit": "ns/iter",
            "extra": "iterations: 27158\ncpu: 30634.07467412908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29575.49741965412,
            "unit": "ns/iter",
            "extra": "iterations: 28097\ncpu: 29575.35324055959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29701.70755565164,
            "unit": "ns/iter",
            "extra": "iterations: 27807\ncpu: 29701.56795051619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 78557.29515418469,
            "unit": "ns/iter",
            "extra": "iterations: 11123\ncpu: 78556.94506877587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 672390.4550682984,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 672379.367361612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 538525.1859999585,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538513.2000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 522675.58399995556,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522673.3999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 519866.38500000024,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519856.4000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 373871.404741399,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 373869.4827586207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 517563.69999998243,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517546.5000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 725.0674564994129,
            "unit": "ns/iter",
            "extra": "iterations: 967631\ncpu: 725.0552121624852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3889.6950732060477,
            "unit": "ns/iter",
            "extra": "iterations: 179630\ncpu: 3889.6442687747062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2966.323144751494,
            "unit": "ns/iter",
            "extra": "iterations: 236343\ncpu: 2966.30913545145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3166.8952466945443,
            "unit": "ns/iter",
            "extra": "iterations: 220394\ncpu: 3166.830766717776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2435.966086114614,
            "unit": "ns/iter",
            "extra": "iterations: 286107\ncpu: 2435.9243220193966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20873.206814673056,
            "unit": "ns/iter",
            "extra": "iterations: 33692\ncpu: 20873.118247655286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 36939.25830316608,
            "unit": "ns/iter",
            "extra": "iterations: 19059\ncpu: 36939.099637966225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8973.741912853055,
            "unit": "ns/iter",
            "extra": "iterations: 78396\ncpu: 8973.549670901573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8750.83365022575,
            "unit": "ns/iter",
            "extra": "iterations: 79417\ncpu: 8750.790133094904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8794.321087416949,
            "unit": "ns/iter",
            "extra": "iterations: 78829\ncpu: 8794.278755280446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17645.045629867847,
            "unit": "ns/iter",
            "extra": "iterations: 39667\ncpu: 17644.95676506919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16680.78673908247,
            "unit": "ns/iter",
            "extra": "iterations: 41611\ncpu: 16680.70462137418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5727.366281142631,
            "unit": "ns/iter",
            "extra": "iterations: 120615\ncpu: 5727.183186170841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28016.66349463663,
            "unit": "ns/iter",
            "extra": "iterations: 24695\ncpu: 28016.209759060617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22863.8889176095,
            "unit": "ns/iter",
            "extra": "iterations: 30950\ncpu: 22863.52827140572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22939.987875593117,
            "unit": "ns/iter",
            "extra": "iterations: 30352\ncpu: 22939.67119135486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23242.422344956783,
            "unit": "ns/iter",
            "extra": "iterations: 30056\ncpu: 23241.938381687178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51275.86388970354,
            "unit": "ns/iter",
            "extra": "iterations: 13636\ncpu: 51274.81666177732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 181325.8607430468,
            "unit": "ns/iter",
            "extra": "iterations: 3849\ncpu: 181323.66848532256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 146721.69080898468,
            "unit": "ns/iter",
            "extra": "iterations: 4722\ncpu: 146721.05040237246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 146500.25910422174,
            "unit": "ns/iter",
            "extra": "iterations: 4778\ncpu: 146499.560485559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 145664.2749897113,
            "unit": "ns/iter",
            "extra": "iterations: 4862\ncpu: 145661.31221719517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 92292.50145695939,
            "unit": "ns/iter",
            "extra": "iterations: 7550\ncpu: 92290.92715231853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 149301.19785846918,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 149296.88081936477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5749.503165527662,
            "unit": "ns/iter",
            "extra": "iterations: 127151\ncpu: 5749.482111819772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27088.535696281026,
            "unit": "ns/iter",
            "extra": "iterations: 25787\ncpu: 27087.62942567925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21999.119050633093,
            "unit": "ns/iter",
            "extra": "iterations: 31600\ncpu: 21998.287974683546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21352.193540501958,
            "unit": "ns/iter",
            "extra": "iterations: 32727\ncpu: 21351.349039019817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22240.90051600792,
            "unit": "ns/iter",
            "extra": "iterations: 31201\ncpu: 22240.110893881476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48796.886661100056,
            "unit": "ns/iter",
            "extra": "iterations: 14364\ncpu: 48795.90643274847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 170544.75544793304,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 170535.69007263728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 145516.50165288514,
            "unit": "ns/iter",
            "extra": "iterations: 4840\ncpu: 145490.04132231354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 149657.3135271811,
            "unit": "ns/iter",
            "extra": "iterations: 4746\ncpu: 149644.6481247355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 146877.08999370897,
            "unit": "ns/iter",
            "extra": "iterations: 4767\ncpu: 146876.442206838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 92041.03389606913,
            "unit": "ns/iter",
            "extra": "iterations: 7582\ncpu: 92031.4692693216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 145330.20482672434,
            "unit": "ns/iter",
            "extra": "iterations: 4848\ncpu: 145318.68811881138 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479530011,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1690.8286614597316,
            "unit": "ns/iter",
            "extra": "iterations: 407795\ncpu: 1690.7688912321144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19665.65361525041,
            "unit": "ns/iter",
            "extra": "iterations: 41809\ncpu: 19665.495467483077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 41040.62005762044,
            "unit": "ns/iter",
            "extra": "iterations: 20132\ncpu: 41038.54063182994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50932.02099999985,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50928.58000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 68894.71249133431,
            "unit": "ns/iter",
            "extra": "iterations: 12977\ncpu: 68890.91469523002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 85482.30136319564,
            "unit": "ns/iter",
            "extra": "iterations: 10270\ncpu: 85478.95813047713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 100948.16053001925,
            "unit": "ns/iter",
            "extra": "iterations: 8528\ncpu: 100942.3545966229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 114010.61444816497,
            "unit": "ns/iter",
            "extra": "iterations: 7475\ncpu: 114007.53177257533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 133027.8847422003,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 133020.20383693048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1436.915211406478,
            "unit": "ns/iter",
            "extra": "iterations: 486740\ncpu: 1436.8888934544116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1201.8285592537595,
            "unit": "ns/iter",
            "extra": "iterations: 581997\ncpu: 1201.8197688304251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1210.3552958649277,
            "unit": "ns/iter",
            "extra": "iterations: 577696\ncpu: 1210.3486955076723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1199.8067188029875,
            "unit": "ns/iter",
            "extra": "iterations: 583854\ncpu: 1199.779054352627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2130.508309280399,
            "unit": "ns/iter",
            "extra": "iterations: 330173\ncpu: 2130.4446456857454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7094.986739381637,
            "unit": "ns/iter",
            "extra": "iterations: 115153\ncpu: 7094.806040658941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 37344.00076968394,
            "unit": "ns/iter",
            "extra": "iterations: 22087\ncpu: 37343.44184361843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29725.362066457932,
            "unit": "ns/iter",
            "extra": "iterations: 27506\ncpu: 29724.66007416564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29242.871792141486,
            "unit": "ns/iter",
            "extra": "iterations: 28173\ncpu: 29242.136087743573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 28708.680287538155,
            "unit": "ns/iter",
            "extra": "iterations: 28657\ncpu: 28708.493561782463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 82075.93011917784,
            "unit": "ns/iter",
            "extra": "iterations: 11076\ncpu: 82073.17623690848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 641726.6980000136,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641708.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 524270.45600001066,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524252.19999999943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 523786.4310000191,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523774.8999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 522626.5769999827,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522614.10000000196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 371274.4265584895,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 371264.1759180186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 517283.8810000257,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517285.1999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2629893.765042926,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2629839.5415472877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1175862.8864795465,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 1175838.647959181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3555651.6590037006,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3555543.2950191665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10172.80374027916,
            "unit": "ns/iter",
            "extra": "iterations: 81010\ncpu: 10172.618195284536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 52922.52788246524,
            "unit": "ns/iter",
            "extra": "iterations: 15655\ncpu: 52920.88150750556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42785.878183776396,
            "unit": "ns/iter",
            "extra": "iterations: 19513\ncpu: 42784.661507712844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 43258.698008009866,
            "unit": "ns/iter",
            "extra": "iterations: 19729\ncpu: 43241.91798874762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41672.678800965754,
            "unit": "ns/iter",
            "extra": "iterations: 19916\ncpu: 41670.02410122537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 91838.84169803133,
            "unit": "ns/iter",
            "extra": "iterations: 9564\ncpu: 91833.77248013344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 688129.7296489984,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 688125.1680358483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 554816.0559999929,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554805.899999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 551677.6590000063,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551678.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 539205.6680000223,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539196.3000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 390704.399734394,
            "unit": "ns/iter",
            "extra": "iterations: 2259\ncpu: 390698.93758300215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 538270.2969999969,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538261.300000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2807988.9578313176,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2807865.361445779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1221647.3276539713,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 1221628.1782437703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7397.477589202129,
            "unit": "ns/iter",
            "extra": "iterations: 112245\ncpu: 7397.328166065348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 38959.36363636273,
            "unit": "ns/iter",
            "extra": "iterations: 21373\ncpu: 38958.849950872565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30958.70837972107,
            "unit": "ns/iter",
            "extra": "iterations: 26946\ncpu: 30958.7471238774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 30949.593293673206,
            "unit": "ns/iter",
            "extra": "iterations: 27735\ncpu: 30949.08599242831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29952.763512295565,
            "unit": "ns/iter",
            "extra": "iterations: 27697\ncpu: 29952.803552731213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 80232.5780177529,
            "unit": "ns/iter",
            "extra": "iterations: 10927\ncpu: 80231.10643360468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 668614.6800000188,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668616.2000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 538514.1219999809,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538515.0000000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 534339.9049999675,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534333.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 531508.3360000016,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531491.0000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 377677.33362675103,
            "unit": "ns/iter",
            "extra": "iterations: 2272\ncpu: 377671.17077464756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 514020.9410000125,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514008.0999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 722.121936670172,
            "unit": "ns/iter",
            "extra": "iterations: 1015888\ncpu: 722.112772274108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3802.9119994253883,
            "unit": "ns/iter",
            "extra": "iterations: 180942\ncpu: 3802.742315217031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3177.4025931957854,
            "unit": "ns/iter",
            "extra": "iterations: 222274\ncpu: 3177.2393532306805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2900.020511846139,
            "unit": "ns/iter",
            "extra": "iterations: 242104\ncpu: 2899.91573869079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2395.507864030105,
            "unit": "ns/iter",
            "extra": "iterations: 292153\ncpu: 2395.4691548606384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20390.864380086517,
            "unit": "ns/iter",
            "extra": "iterations: 34287\ncpu: 20390.057456178736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 37101.36783860859,
            "unit": "ns/iter",
            "extra": "iterations: 18886\ncpu: 37098.66567828054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8933.895386143431,
            "unit": "ns/iter",
            "extra": "iterations: 78546\ncpu: 8933.465739821217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8848.157075928704,
            "unit": "ns/iter",
            "extra": "iterations: 78548\ncpu: 8847.779701583708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8832.649964714543,
            "unit": "ns/iter",
            "extra": "iterations: 79352\ncpu: 8832.473031555555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17564.902578724177,
            "unit": "ns/iter",
            "extra": "iterations: 39981\ncpu: 17564.478127110262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16788.31096977807,
            "unit": "ns/iter",
            "extra": "iterations: 41824\ncpu: 16787.29676740641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5685.541863293735,
            "unit": "ns/iter",
            "extra": "iterations: 123330\ncpu: 5685.368523473628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28199.41954978781,
            "unit": "ns/iter",
            "extra": "iterations: 24655\ncpu: 28198.77509632908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22803.305916774956,
            "unit": "ns/iter",
            "extra": "iterations: 30760\ncpu: 22802.451235370736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22997.553603217373,
            "unit": "ns/iter",
            "extra": "iterations: 30334\ncpu: 22996.838531021138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23175.057653147425,
            "unit": "ns/iter",
            "extra": "iterations: 29955\ncpu: 23174.304790519058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51057.24773391957,
            "unit": "ns/iter",
            "extra": "iterations: 13680\ncpu: 51055.928362573155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 182343.79791122928,
            "unit": "ns/iter",
            "extra": "iterations: 3830\ncpu: 182340.0783289822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 152272.74951204483,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 152269.39926263216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 151124.9113597193,
            "unit": "ns/iter",
            "extra": "iterations: 4648\ncpu: 151123.47246127157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 148913.98045048918,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 148907.69230769185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 93327.66702170293,
            "unit": "ns/iter",
            "extra": "iterations: 7511\ncpu: 93324.81693516056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 149395.18623048233,
            "unit": "ns/iter",
            "extra": "iterations: 4677\ncpu: 149386.74363908547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5548.272448938927,
            "unit": "ns/iter",
            "extra": "iterations: 126075\ncpu: 5548.195915129863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 28053.989873518025,
            "unit": "ns/iter",
            "extra": "iterations: 24984\ncpu: 28052.761767531105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22213.74072899272,
            "unit": "ns/iter",
            "extra": "iterations: 31523\ncpu: 22213.494908479643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21897.653087425446,
            "unit": "ns/iter",
            "extra": "iterations: 31936\ncpu: 21896.76540581164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22647.547441964554,
            "unit": "ns/iter",
            "extra": "iterations: 31059\ncpu: 22647.132876139152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50144.56320000136,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50141.44000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 174382.548974945,
            "unit": "ns/iter",
            "extra": "iterations: 3951\ncpu: 174374.68995191093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 145242.8002087658,
            "unit": "ns/iter",
            "extra": "iterations: 4790\ncpu: 145236.3256784979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 143894.6358381542,
            "unit": "ns/iter",
            "extra": "iterations: 4844\ncpu: 143884.8678777865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 143592.93811677373,
            "unit": "ns/iter",
            "extra": "iterations: 4864\ncpu: 143589.55592105433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 91530.72784053478,
            "unit": "ns/iter",
            "extra": "iterations: 7525\ncpu: 91523.46843853801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 144514.40774488528,
            "unit": "ns/iter",
            "extra": "iterations: 4829\ncpu: 144510.02277904196 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702486177301,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1666.2044059803177,
            "unit": "ns/iter",
            "extra": "iterations: 420247\ncpu: 1666.0428271944832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19554.083028487155,
            "unit": "ns/iter",
            "extra": "iterations: 42371\ncpu: 19552.101673314297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40839.16821132929,
            "unit": "ns/iter",
            "extra": "iterations: 20177\ncpu: 40837.29493978292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 60441.260357982275,
            "unit": "ns/iter",
            "extra": "iterations: 14023\ncpu: 60438.75775511659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 66680.74781617906,
            "unit": "ns/iter",
            "extra": "iterations: 13165\ncpu: 66678.72388909987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 83711.33326974577,
            "unit": "ns/iter",
            "extra": "iterations: 10484\ncpu: 83710.6447920641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 99585.4948144714,
            "unit": "ns/iter",
            "extra": "iterations: 8678\ncpu: 99578.37059230241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 118657.83594171467,
            "unit": "ns/iter",
            "extra": "iterations: 7412\ncpu: 118649.91905018891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 137955.15934154115,
            "unit": "ns/iter",
            "extra": "iterations: 6257\ncpu: 137946.79558894047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1474.3256971063258,
            "unit": "ns/iter",
            "extra": "iterations: 475322\ncpu: 1474.294688653167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1233.8707990223588,
            "unit": "ns/iter",
            "extra": "iterations: 567844\ncpu: 1233.7900902360502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1206.247954056505,
            "unit": "ns/iter",
            "extra": "iterations: 580539\ncpu: 1206.1456680774259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1208.325607819962,
            "unit": "ns/iter",
            "extra": "iterations: 578214\ncpu: 1208.1827835368906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2124.48326851331,
            "unit": "ns/iter",
            "extra": "iterations: 329887\ncpu: 2124.3155989778315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7438.937581358126,
            "unit": "ns/iter",
            "extra": "iterations: 108317\ncpu: 7438.321777744955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 39916.273867483476,
            "unit": "ns/iter",
            "extra": "iterations: 18896\ncpu: 39913.92358171044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 31625.287494094253,
            "unit": "ns/iter",
            "extra": "iterations: 23277\ncpu: 31622.361129011486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30782.275608928012,
            "unit": "ns/iter",
            "extra": "iterations: 26563\ncpu: 30780.036140496162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30176.412133891714,
            "unit": "ns/iter",
            "extra": "iterations: 26768\ncpu: 30174.424686192568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 81253.72522358224,
            "unit": "ns/iter",
            "extra": "iterations: 10958\ncpu: 81251.24110239095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 656884.9020000015,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656851.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 520052.6140000079,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520027.10000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 526352.2879999982,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526341.0999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 514223.8839999891,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514211.40000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 374446.51853410783,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 374432.0134793599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 514851.4900000123,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514847.1000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2649667.4045584807,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2649479.2022792026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1228336.1856764234,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 1228323.4748010628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3605323.4573644167,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3605138.372093015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10155.295602743841,
            "unit": "ns/iter",
            "extra": "iterations: 82506\ncpu: 10155.1232637626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53176.23236514792,
            "unit": "ns/iter",
            "extra": "iterations: 15665\ncpu: 53175.078199808435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42751.05612060283,
            "unit": "ns/iter",
            "extra": "iterations: 19369\ncpu: 42749.243636739135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 41822.79312957658,
            "unit": "ns/iter",
            "extra": "iterations: 19795\ncpu: 41822.36928517315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41741.720264646945,
            "unit": "ns/iter",
            "extra": "iterations: 19951\ncpu: 41739.60202496128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 90871.51838621618,
            "unit": "ns/iter",
            "extra": "iterations: 9518\ncpu: 90869.71002311436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 684617.7283018561,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 684585.2830188716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 549387.5539999636,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549382.6000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 542539.7810000164,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542535.3000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 539216.0889999786,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539174.2999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 389245.9521064347,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 389242.1286031044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 531233.2459999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531210.8999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2825790.5166161666,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2825707.5528700873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1237994.9133333715,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1237922.2666666673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7474.168275775557,
            "unit": "ns/iter",
            "extra": "iterations: 111656\ncpu: 7474.027369778585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 38318.25345003331,
            "unit": "ns/iter",
            "extra": "iterations: 21594\ncpu: 38315.82847087169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30492.846219483745,
            "unit": "ns/iter",
            "extra": "iterations: 26954\ncpu: 30491.919566669327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29897.32045274222,
            "unit": "ns/iter",
            "extra": "iterations: 27742\ncpu: 29895.56628938092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29600.251722158064,
            "unit": "ns/iter",
            "extra": "iterations: 27872\ncpu: 29598.213260619956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 78785.79845864786,
            "unit": "ns/iter",
            "extra": "iterations: 11159\ncpu: 78779.2723362313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 675082.1280000423,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 675067.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 533102.1899999655,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533026.8000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 529740.9770000172,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529729.8999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 537923.5030000018,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537882.4000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 378915.84571677074,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 378888.6800699323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 518196.4180000023,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518149.600000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 696.9213212517577,
            "unit": "ns/iter",
            "extra": "iterations: 1010133\ncpu: 696.8467518633657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4002.4285592705323,
            "unit": "ns/iter",
            "extra": "iterations: 176251\ncpu: 4002.0391373665734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3009.708735812115,
            "unit": "ns/iter",
            "extra": "iterations: 236555\ncpu: 3009.49927078269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2876.414404204721,
            "unit": "ns/iter",
            "extra": "iterations: 243540\ncpu: 2876.256056499942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2407.319691810733,
            "unit": "ns/iter",
            "extra": "iterations: 292807\ncpu: 2407.24231319607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20221.261292116873,
            "unit": "ns/iter",
            "extra": "iterations: 34161\ncpu: 20196.938028746128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 36794.02866494374,
            "unit": "ns/iter",
            "extra": "iterations: 18943\ncpu: 36791.61695613142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8868.341394977735,
            "unit": "ns/iter",
            "extra": "iterations: 77693\ncpu: 8868.260975892292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8887.76327927009,
            "unit": "ns/iter",
            "extra": "iterations: 78920\ncpu: 8887.681196147993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8757.3908624342,
            "unit": "ns/iter",
            "extra": "iterations: 79693\ncpu: 8756.154241903307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17250.935704412346,
            "unit": "ns/iter",
            "extra": "iterations: 40516\ncpu: 17249.805015302583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16287.038753746441,
            "unit": "ns/iter",
            "extra": "iterations: 43041\ncpu: 16285.927371575866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6110.635452242807,
            "unit": "ns/iter",
            "extra": "iterations: 113313\ncpu: 6110.248603425943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28243.905759161727,
            "unit": "ns/iter",
            "extra": "iterations: 24830\ncpu: 28242.85541683456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22427.185122273033,
            "unit": "ns/iter",
            "extra": "iterations: 31201\ncpu: 22426.021601871624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22733.452417893903,
            "unit": "ns/iter",
            "extra": "iterations: 30936\ncpu: 22732.60602534271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22920.084368139203,
            "unit": "ns/iter",
            "extra": "iterations: 30521\ncpu: 22919.144195799858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50388.6266618746,
            "unit": "ns/iter",
            "extra": "iterations: 13915\ncpu: 50388.17822493673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 178170.895941729,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 178157.8563995823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 148593.91385529234,
            "unit": "ns/iter",
            "extra": "iterations: 4713\ncpu: 148585.99618077726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 147963.39174604064,
            "unit": "ns/iter",
            "extra": "iterations: 4725\ncpu: 147953.75661375478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 148171.4397312024,
            "unit": "ns/iter",
            "extra": "iterations: 4762\ncpu: 148163.523729527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 94222.04302810488,
            "unit": "ns/iter",
            "extra": "iterations: 7437\ncpu: 94217.99112545415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 149013.13372092624,
            "unit": "ns/iter",
            "extra": "iterations: 4644\ncpu: 149008.87166236067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5462.390906813876,
            "unit": "ns/iter",
            "extra": "iterations: 127744\ncpu: 5462.274549098274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27436.69454416297,
            "unit": "ns/iter",
            "extra": "iterations: 25349\ncpu: 27435.883072310447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22542.05990620527,
            "unit": "ns/iter",
            "extra": "iterations: 31132\ncpu: 22540.66555312851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21829.082889302907,
            "unit": "ns/iter",
            "extra": "iterations: 31717\ncpu: 21827.54674149521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22451.574863913123,
            "unit": "ns/iter",
            "extra": "iterations: 31230\ncpu: 22450.46429715054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48648.981047935835,
            "unit": "ns/iter",
            "extra": "iterations: 14352\ncpu: 48647.519509476144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 173507.3397865491,
            "unit": "ns/iter",
            "extra": "iterations: 4029\ncpu: 173496.9719533356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 146586.53522012298,
            "unit": "ns/iter",
            "extra": "iterations: 4770\ncpu: 146575.95387840652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 145825.32925818308,
            "unit": "ns/iter",
            "extra": "iterations: 4826\ncpu: 145817.67509324368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 145487.98340249326,
            "unit": "ns/iter",
            "extra": "iterations: 4820\ncpu: 145482.26141079032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 91753.36963089937,
            "unit": "ns/iter",
            "extra": "iterations: 7613\ncpu: 91748.52226454746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 145130.45315091245,
            "unit": "ns/iter",
            "extra": "iterations: 4824\ncpu: 145124.6890547285 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488552523,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1691.943812228148,
            "unit": "ns/iter",
            "extra": "iterations: 413097\ncpu: 1691.9282880292037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19473.73176157696,
            "unit": "ns/iter",
            "extra": "iterations: 41355\ncpu: 19473.579978237216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40997.80792951441,
            "unit": "ns/iter",
            "extra": "iterations: 20430\ncpu: 40998.05188448359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52659.11969999593,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52656.88000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 67066.66802557788,
            "unit": "ns/iter",
            "extra": "iterations: 12510\ncpu: 67060.02398081533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 83855.05444153667,
            "unit": "ns/iter",
            "extra": "iterations: 10323\ncpu: 83851.40947399009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 100219.9418835361,
            "unit": "ns/iter",
            "extra": "iterations: 8569\ncpu: 100214.83253588526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 116315.90647865282,
            "unit": "ns/iter",
            "extra": "iterations: 7517\ncpu: 116312.119196488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 134399.25241358014,
            "unit": "ns/iter",
            "extra": "iterations: 6422\ncpu: 134394.67455621294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1471.5069374618981,
            "unit": "ns/iter",
            "extra": "iterations: 475390\ncpu: 1471.4337701676536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1199.7763185879392,
            "unit": "ns/iter",
            "extra": "iterations: 578327\ncpu: 1199.7667409614285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1202.348774930933,
            "unit": "ns/iter",
            "extra": "iterations: 585518\ncpu: 1202.355862672027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1170.3519733152407,
            "unit": "ns/iter",
            "extra": "iterations: 579507\ncpu: 1170.3491070858504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2127.411418826505,
            "unit": "ns/iter",
            "extra": "iterations: 315479\ncpu: 2127.401189936573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7467.125251047892,
            "unit": "ns/iter",
            "extra": "iterations: 108047\ncpu: 7467.091173285707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 39344.80968248648,
            "unit": "ns/iter",
            "extra": "iterations: 21007\ncpu: 39344.280477935965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 31345.034733595134,
            "unit": "ns/iter",
            "extra": "iterations: 26257\ncpu: 31343.752142285903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30457.95651378839,
            "unit": "ns/iter",
            "extra": "iterations: 27342\ncpu: 30457.749981713125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30202.52290498659,
            "unit": "ns/iter",
            "extra": "iterations: 27112\ncpu: 30202.500737680733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 81730.39014941639,
            "unit": "ns/iter",
            "extra": "iterations: 10842\ncpu: 81730.81534772168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 643851.7999999931,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 643843.799999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 517234.64200000535,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517225.79999999853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 514714.3949999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514704.8000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 516998.4420000446,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516992.10000000306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 366213.6928870252,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 366210.2510460246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 519217.9699999997,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519211.0999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2676570.2947978107,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2676532.080924856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1208847.1877444307,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 1208804.9543676637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3608032.1361866505,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3608008.5603112867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10240.457574536194,
            "unit": "ns/iter",
            "extra": "iterations: 81873\ncpu: 10240.377169518611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54227.41797635859,
            "unit": "ns/iter",
            "extra": "iterations: 15398\ncpu: 54226.951552149665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42203.817061950744,
            "unit": "ns/iter",
            "extra": "iterations: 19564\ncpu: 42203.73134328361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42125.57139960595,
            "unit": "ns/iter",
            "extra": "iterations: 19727\ncpu: 42125.80726922489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41872.45967619041,
            "unit": "ns/iter",
            "extra": "iterations: 19703\ncpu: 41872.329086941136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 92025.24006674295,
            "unit": "ns/iter",
            "extra": "iterations: 9589\ncpu: 92024.43424757554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 697075.444614203,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 697074.0259740243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 557333.2929999992,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557330.7999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 553050.3870000415,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553029.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 544368.1749999882,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544365.3000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 389489.2546749809,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 389483.52626891993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 533973.0559999794,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533969.8000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2811946.990909126,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2811915.4545454537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1215886.535064916,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 1215876.363636361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7419.58187535623,
            "unit": "ns/iter",
            "extra": "iterations: 112256\ncpu: 7419.505416191562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 38619.99004951886,
            "unit": "ns/iter",
            "extra": "iterations: 21406\ncpu: 38619.91497710952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30851.162129869066,
            "unit": "ns/iter",
            "extra": "iterations: 26781\ncpu: 30851.338635599826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29837.396726169074,
            "unit": "ns/iter",
            "extra": "iterations: 27674\ncpu: 29837.3708173736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29672.66039282663,
            "unit": "ns/iter",
            "extra": "iterations: 28053\ncpu: 29672.40223861971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 78363.85141678849,
            "unit": "ns/iter",
            "extra": "iterations: 11152\ncpu: 78362.56276900986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 668813.3968481388,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 668812.4641833815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 537399.1130000491,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537395.8999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 533884.7969999847,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533879.9000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 531693.7530000132,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531691.2000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 383443.490350874,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 383442.93859648914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 524845.1289999707,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524848.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 694.5110770375727,
            "unit": "ns/iter",
            "extra": "iterations: 1007625\ncpu: 694.5091675970748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3979.742891408077,
            "unit": "ns/iter",
            "extra": "iterations: 175105\ncpu: 3979.7001798920655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3196.7887894640844,
            "unit": "ns/iter",
            "extra": "iterations: 217920\ncpu: 3196.7515602055764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2972.9998143421176,
            "unit": "ns/iter",
            "extra": "iterations: 236995\ncpu: 2972.9922572206183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2435.4391751422863,
            "unit": "ns/iter",
            "extra": "iterations: 285722\ncpu: 2435.363045197787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20743.98961231134,
            "unit": "ns/iter",
            "extra": "iterations: 33790\ncpu: 20743.761467889854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 37736.8233447016,
            "unit": "ns/iter",
            "extra": "iterations: 18471\ncpu: 37736.11065995319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 9001.677104524833,
            "unit": "ns/iter",
            "extra": "iterations: 77666\ncpu: 9001.731774521675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8930.109246487915,
            "unit": "ns/iter",
            "extra": "iterations: 78300\ncpu: 8929.923371647514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8955.878379927288,
            "unit": "ns/iter",
            "extra": "iterations: 78515\ncpu: 8955.853021715599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17674.94479523297,
            "unit": "ns/iter",
            "extra": "iterations: 39435\ncpu: 17674.918219855546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16331.593023797557,
            "unit": "ns/iter",
            "extra": "iterations: 42946\ncpu: 16331.4068830625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5668.1869910802,
            "unit": "ns/iter",
            "extra": "iterations: 123546\ncpu: 5668.2199342755275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28476.930423419588,
            "unit": "ns/iter",
            "extra": "iterations: 24491\ncpu: 28476.040178024658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22412.31045562606,
            "unit": "ns/iter",
            "extra": "iterations: 31122\ncpu: 22411.87905661586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22721.359755110334,
            "unit": "ns/iter",
            "extra": "iterations: 30871\ncpu: 22721.081273687036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22944.396269470173,
            "unit": "ns/iter",
            "extra": "iterations: 30237\ncpu: 22944.528227006922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50994.72961748476,
            "unit": "ns/iter",
            "extra": "iterations: 13725\ncpu: 50993.65391621079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 182534.4658142062,
            "unit": "ns/iter",
            "extra": "iterations: 3832\ncpu: 182534.00313152443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 151279.1636481332,
            "unit": "ns/iter",
            "extra": "iterations: 4638\ncpu: 151278.89176368923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 148530.69044070417,
            "unit": "ns/iter",
            "extra": "iterations: 4697\ncpu: 148529.2314243133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 149795.94250686624,
            "unit": "ns/iter",
            "extra": "iterations: 4731\ncpu: 149796.85056013498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 94035.68663346193,
            "unit": "ns/iter",
            "extra": "iterations: 7429\ncpu: 94033.75959079256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 151724.045494121,
            "unit": "ns/iter",
            "extra": "iterations: 4594\ncpu: 151721.9851980847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5511.7184067899,
            "unit": "ns/iter",
            "extra": "iterations: 125834\ncpu: 5511.636759540313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27643.409628044254,
            "unit": "ns/iter",
            "extra": "iterations: 25218\ncpu: 27643.36188436853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21863.51187368361,
            "unit": "ns/iter",
            "extra": "iterations: 31793\ncpu: 21863.067341867743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22042.242832209955,
            "unit": "ns/iter",
            "extra": "iterations: 32088\ncpu: 22042.003241086983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22436.388404409383,
            "unit": "ns/iter",
            "extra": "iterations: 31305\ncpu: 22436.514933716582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50976.08208222249,
            "unit": "ns/iter",
            "extra": "iterations: 14254\ncpu: 50975.92956363205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 175876.0963037481,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 175873.77420165925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 148642.99319582948,
            "unit": "ns/iter",
            "extra": "iterations: 4703\ncpu: 148642.61109929925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 147909.41305725122,
            "unit": "ns/iter",
            "extra": "iterations: 4733\ncpu: 147907.83858018022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 148202.79169302632,
            "unit": "ns/iter",
            "extra": "iterations: 4743\ncpu: 148198.33438751946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 93227.94987970777,
            "unit": "ns/iter",
            "extra": "iterations: 7482\ncpu: 93228.4950547975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 148604.6752445739,
            "unit": "ns/iter",
            "extra": "iterations: 4702\ncpu: 148601.44619311203 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490787683,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1682.993995243335,
            "unit": "ns/iter",
            "extra": "iterations: 415837\ncpu: 1682.9361023670333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19561.2721713265,
            "unit": "ns/iter",
            "extra": "iterations: 42352\ncpu: 19547.020211560255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 41235.86919729141,
            "unit": "ns/iter",
            "extra": "iterations: 20680\ncpu: 41235.14023210831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 59403.773846587195,
            "unit": "ns/iter",
            "extra": "iterations: 14132\ncpu: 59402.087461081195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 65913.93823063496,
            "unit": "ns/iter",
            "extra": "iterations: 13259\ncpu: 65911.54687382154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 83450.84965201658,
            "unit": "ns/iter",
            "extra": "iterations: 10489\ncpu: 83446.1245113929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 99214.2758225351,
            "unit": "ns/iter",
            "extra": "iterations: 8723\ncpu: 99212.26642210255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 112506.02661396758,
            "unit": "ns/iter",
            "extra": "iterations: 7590\ncpu: 112505.7839262186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 133241.12840526827,
            "unit": "ns/iter",
            "extra": "iterations: 6534\ncpu: 133241.38353229276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1416.4315386074795,
            "unit": "ns/iter",
            "extra": "iterations: 484828\ncpu: 1416.4299504154046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1217.1990627380078,
            "unit": "ns/iter",
            "extra": "iterations: 573799\ncpu: 1217.2000996864763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1202.4859664785806,
            "unit": "ns/iter",
            "extra": "iterations: 583567\ncpu: 1202.4958573737038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1223.7701248709297,
            "unit": "ns/iter",
            "extra": "iterations: 573072\ncpu: 1223.7800834799139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2132.269626377932,
            "unit": "ns/iter",
            "extra": "iterations: 325302\ncpu: 2132.2700137103398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7389.329295011246,
            "unit": "ns/iter",
            "extra": "iterations: 115477\ncpu: 7389.33207478545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 37152.69037063323,
            "unit": "ns/iter",
            "extra": "iterations: 22556\ncpu: 37152.762014541586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29562.13766515762,
            "unit": "ns/iter",
            "extra": "iterations: 27625\ncpu: 29561.643438913987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 28954.30532173563,
            "unit": "ns/iter",
            "extra": "iterations: 28393\ncpu: 28953.809037438805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 28496.320709938165,
            "unit": "ns/iter",
            "extra": "iterations: 29073\ncpu: 28496.367763904647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 80086.81085496371,
            "unit": "ns/iter",
            "extra": "iterations: 11018\ncpu: 80086.44037030319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 652626.395000027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652626.9000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 518724.43899998185,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518728.699999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 523147.81699999457,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523122.4999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 521937.5899999932,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521942.0000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 366763.1550021485,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 366761.4856161451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 520560.76299999177,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520555.59999999806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2654921.710601825,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2654941.8338108878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1244606.1144736493,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 1244598.5526315821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3579175.4517374234,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3579121.6216216246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10235.516120749888,
            "unit": "ns/iter",
            "extra": "iterations: 81789\ncpu: 10235.523114355225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53138.25137034833,
            "unit": "ns/iter",
            "extra": "iterations: 15507\ncpu: 53137.744244534835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 41985.98818496671,
            "unit": "ns/iter",
            "extra": "iterations: 19636\ncpu: 41986.32104298227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 41960.045243448374,
            "unit": "ns/iter",
            "extra": "iterations: 20025\ncpu: 41960.36953807729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41341.664746832976,
            "unit": "ns/iter",
            "extra": "iterations: 19967\ncpu: 41341.67876997054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 90473.93778610148,
            "unit": "ns/iter",
            "extra": "iterations: 9612\ncpu: 90449.9583853517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 691230.9805097496,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 691210.8695652196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 558702.9699999561,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558671.3000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 552640.6919999544,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552618.1999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 552059.1430000081,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552063.699999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 387961.8748352905,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 387954.41370223835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 535728.9540000352,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535708.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2774277.0813252795,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2774138.855421689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1214076.7503302963,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 1214039.1017173142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7418.362589095015,
            "unit": "ns/iter",
            "extra": "iterations: 112240\ncpu: 7418.040805416988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 38945.21746039037,
            "unit": "ns/iter",
            "extra": "iterations: 21397\ncpu: 38944.40809459286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30478.521807827656,
            "unit": "ns/iter",
            "extra": "iterations: 27215\ncpu: 30477.942311225437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29695.862210537696,
            "unit": "ns/iter",
            "extra": "iterations: 27767\ncpu: 29696.096085281002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29646.220561350223,
            "unit": "ns/iter",
            "extra": "iterations: 27897\ncpu: 29644.786177725135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 78607.74395831123,
            "unit": "ns/iter",
            "extra": "iterations: 11131\ncpu: 78605.46222262147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 657282.3340000013,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 657270.9000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 528711.4729999871,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528691.2999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 530928.2299999723,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530932.5999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 528325.2360000006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528288.7000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 371090.0730145292,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 371082.06660973525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 514826.6609999723,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514803.4999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 700.9062219858292,
            "unit": "ns/iter",
            "extra": "iterations: 1003956\ncpu: 700.8974496890349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3997.1654580655522,
            "unit": "ns/iter",
            "extra": "iterations: 174582\ncpu: 3997.031767307063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2947.0121475161613,
            "unit": "ns/iter",
            "extra": "iterations: 240543\ncpu: 2946.908452958492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3078.9731006873917,
            "unit": "ns/iter",
            "extra": "iterations: 229820\ncpu: 3078.8917413628037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2324.4041733911677,
            "unit": "ns/iter",
            "extra": "iterations: 298654\ncpu: 2324.3201162549267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20544.288108139568,
            "unit": "ns/iter",
            "extra": "iterations: 33956\ncpu: 20543.544587112672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 38088.15019569599,
            "unit": "ns/iter",
            "extra": "iterations: 18396\ncpu: 38085.801261143584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 9072.582212092137,
            "unit": "ns/iter",
            "extra": "iterations: 77221\ncpu: 9072.559277916649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8718.593417120215,
            "unit": "ns/iter",
            "extra": "iterations: 78294\ncpu: 8718.66171098681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8990.329744569455,
            "unit": "ns/iter",
            "extra": "iterations: 79043\ncpu: 8990.400161937201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17702.38274381,
            "unit": "ns/iter",
            "extra": "iterations: 39580\ncpu: 17702.15765538146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16987.661302067278,
            "unit": "ns/iter",
            "extra": "iterations: 41196\ncpu: 16987.80464122733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5705.162326529003,
            "unit": "ns/iter",
            "extra": "iterations: 123652\ncpu: 5705.162067738469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28662.370347698958,
            "unit": "ns/iter",
            "extra": "iterations: 24504\ncpu: 28662.614267058507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22825.108464133915,
            "unit": "ns/iter",
            "extra": "iterations: 30517\ncpu: 22825.077825474338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22574.169240231553,
            "unit": "ns/iter",
            "extra": "iterations: 30891\ncpu: 22574.354990126758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22827.056691572205,
            "unit": "ns/iter",
            "extra": "iterations: 30516\ncpu: 22826.756455629544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50485.723310444955,
            "unit": "ns/iter",
            "extra": "iterations: 13835\ncpu: 50486.143838091586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 180847.69709544512,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 180849.19605809206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 151190.1410283769,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 151188.32942180496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 149266.42153589556,
            "unit": "ns/iter",
            "extra": "iterations: 4792\ncpu: 149267.61268781318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 150307.67287120668,
            "unit": "ns/iter",
            "extra": "iterations: 4674\ncpu: 150307.6379974317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 93074.51458389091,
            "unit": "ns/iter",
            "extra": "iterations: 7474\ncpu: 93075.27428418442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 150202.37378535833,
            "unit": "ns/iter",
            "extra": "iterations: 4631\ncpu: 150201.9218311385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5402.541625494107,
            "unit": "ns/iter",
            "extra": "iterations: 129536\ncpu: 5402.392385128433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27066.691843017128,
            "unit": "ns/iter",
            "extra": "iterations: 25990\ncpu: 27066.644863409394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21266.6433503926,
            "unit": "ns/iter",
            "extra": "iterations: 32438\ncpu: 21265.56816079913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21150.59660385149,
            "unit": "ns/iter",
            "extra": "iterations: 33803\ncpu: 21150.075437091222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22169.063018557907,
            "unit": "ns/iter",
            "extra": "iterations: 31578\ncpu: 22167.543859649217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47531.3247148264,
            "unit": "ns/iter",
            "extra": "iterations: 14465\ncpu: 47531.365364673235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 172954.83083083277,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 172942.9429429428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 146683.35711305877,
            "unit": "ns/iter",
            "extra": "iterations: 4794\ncpu: 146679.70379641448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 146057.97806028542,
            "unit": "ns/iter",
            "extra": "iterations: 4877\ncpu: 146050.46134918905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 144596.83726219405,
            "unit": "ns/iter",
            "extra": "iterations: 4836\ncpu: 144591.56327543475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 91512.55423263136,
            "unit": "ns/iter",
            "extra": "iterations: 7643\ncpu: 91509.47272013602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 142259.69600651893,
            "unit": "ns/iter",
            "extra": "iterations: 4908\ncpu: 142257.43683781606 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}