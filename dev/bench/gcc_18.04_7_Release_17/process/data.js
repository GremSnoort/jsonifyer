window.BENCHMARK_DATA = {
  "lastUpdate": 1702421926876,
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
      }
    ]
  }
}