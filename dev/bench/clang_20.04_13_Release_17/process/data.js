window.BENCHMARK_DATA = {
  "lastUpdate": 1702490333124,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-13 20.04 Release c++-17": [
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
        "date": 1702490329552,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1369.8788019892438,
            "unit": "ns/iter",
            "extra": "iterations: 502533\ncpu: 1369.8648645959572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16159.462825809142,
            "unit": "ns/iter",
            "extra": "iterations: 52523\ncpu: 16159.303543209644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33726.74306348787,
            "unit": "ns/iter",
            "extra": "iterations: 24508\ncpu: 33725.652848049605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50676.30592871003,
            "unit": "ns/iter",
            "extra": "iterations: 16749\ncpu: 50607.66612932119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56027.57259999862,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56026.37000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70691.80017705173,
            "unit": "ns/iter",
            "extra": "iterations: 12426\ncpu: 70689.40125543218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83314.79318027802,
            "unit": "ns/iter",
            "extra": "iterations: 10323\ncpu: 83311.30485324032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97405.09207160168,
            "unit": "ns/iter",
            "extra": "iterations: 8993\ncpu: 97401.8125208496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113808.2414340485,
            "unit": "ns/iter",
            "extra": "iterations: 7559\ncpu: 113803.6380473607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1211.4632545738334,
            "unit": "ns/iter",
            "extra": "iterations: 609831\ncpu: 1211.4107023093281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 962.2003186761838,
            "unit": "ns/iter",
            "extra": "iterations: 704163\ncpu: 962.1529390212218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 975.2106262366502,
            "unit": "ns/iter",
            "extra": "iterations: 710035\ncpu: 975.1696747343437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 980.0384912315404,
            "unit": "ns/iter",
            "extra": "iterations: 718891\ncpu: 979.99919320175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1881.284536207698,
            "unit": "ns/iter",
            "extra": "iterations: 378219\ncpu: 1881.253718083967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5476.79689000006,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5476.410999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29261.69745900807,
            "unit": "ns/iter",
            "extra": "iterations: 28178\ncpu: 29260.58627297891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22070.326322873232,
            "unit": "ns/iter",
            "extra": "iterations: 35661\ncpu: 22069.212865595444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 20747.241004753,
            "unit": "ns/iter",
            "extra": "iterations: 38298\ncpu: 20746.649955611247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 21668.32826706849,
            "unit": "ns/iter",
            "extra": "iterations: 37174\ncpu: 21668.03141980956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 63808.010050625,
            "unit": "ns/iter",
            "extra": "iterations: 13631\ncpu: 63806.58792458368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 560448.6770000675,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560411.5000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 547703.6320815156,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 547693.5073201776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 546360.8585794921,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 546348.4600879943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 556115.3813451672,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 556091.7512690357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329306.3206480784,
            "unit": "ns/iter",
            "extra": "iterations: 2654\ncpu: 329293.8960060287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 552967.5230178627,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 552955.242966752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2408340.5259066806,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2408251.295336786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1112268.6626650416,
            "unit": "ns/iter",
            "extra": "iterations: 833\ncpu: 1112223.0492196893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3428551.265957311,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3428382.6241134703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8353.21605576339,
            "unit": "ns/iter",
            "extra": "iterations: 101571\ncpu: 8353.03679199775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46182.444748296286,
            "unit": "ns/iter",
            "extra": "iterations: 17918\ncpu: 46180.628418350345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36176.08851907797,
            "unit": "ns/iter",
            "extra": "iterations: 22594\ncpu: 36175.33858546514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 35496.568567550465,
            "unit": "ns/iter",
            "extra": "iterations: 23568\ncpu: 35495.58723693138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36403.9733049703,
            "unit": "ns/iter",
            "extra": "iterations: 23038\ncpu: 36402.64779928802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77750.08235398785,
            "unit": "ns/iter",
            "extra": "iterations: 11147\ncpu: 77747.90526599128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 595802.3419999563,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595784.5000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 594108.1320755214,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 594094.272237201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 588401.1335593503,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 588372.9491525412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 587847.0000000608,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 587830.7118644037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 350692.52931791573,
            "unit": "ns/iter",
            "extra": "iterations: 2507\ncpu: 350685.68009573093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 582984.6276595736,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 582960.1728723429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2563659.779005481,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2563555.524861884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1105453.2687277081,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 1105408.204518435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5512.754830000404,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5512.742000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29333.033046082728,
            "unit": "ns/iter",
            "extra": "iterations: 28082\ncpu: 29332.17007335665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23200.369436371668,
            "unit": "ns/iter",
            "extra": "iterations: 35094\ncpu: 23199.80053570408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22360.117654863217,
            "unit": "ns/iter",
            "extra": "iterations: 37695\ncpu: 22359.432285449067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22547.371934378814,
            "unit": "ns/iter",
            "extra": "iterations: 36208\ncpu: 22547.069708351628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62759.563832876345,
            "unit": "ns/iter",
            "extra": "iterations: 13786\ncpu: 62757.28275061657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 571096.4349999585,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571072.7999999961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 570360.7525839618,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 570343.6692506495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575085.2971204259,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 575060.9947643983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 575053.9211725872,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 575041.4332247567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 335232.92818947573,
            "unit": "ns/iter",
            "extra": "iterations: 2618\ncpu: 335220.2826585184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 562680.1931964287,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 562664.9550706038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 531.4603123339183,
            "unit": "ns/iter",
            "extra": "iterations: 1319037\ncpu: 531.4438488078769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3225.393725609711,
            "unit": "ns/iter",
            "extra": "iterations: 217296\ncpu: 3225.3175392091916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2597.2415820983183,
            "unit": "ns/iter",
            "extra": "iterations: 282612\ncpu: 2597.1763407074027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2561.384617090093,
            "unit": "ns/iter",
            "extra": "iterations: 270599\ncpu: 2561.3187779703603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1981.5088221495457,
            "unit": "ns/iter",
            "extra": "iterations: 360173\ncpu: 1981.472236952791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17753.06921634784,
            "unit": "ns/iter",
            "extra": "iterations: 40005\ncpu: 17752.768403949547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30521.306935454195,
            "unit": "ns/iter",
            "extra": "iterations: 22868\ncpu: 30520.15480146961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7262.586188609097,
            "unit": "ns/iter",
            "extra": "iterations: 96167\ncpu: 7262.34051181797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7101.583471280368,
            "unit": "ns/iter",
            "extra": "iterations: 96051\ncpu: 7101.338872057439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7160.326975193235,
            "unit": "ns/iter",
            "extra": "iterations: 95940\ncpu: 7160.0865124035745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14632.94949073131,
            "unit": "ns/iter",
            "extra": "iterations: 50268\ncpu: 14632.41227023163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13872.794052822313,
            "unit": "ns/iter",
            "extra": "iterations: 52630\ncpu: 13872.63917917524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5170.167300997481,
            "unit": "ns/iter",
            "extra": "iterations: 135576\ncpu: 5170.118605062894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 24690.140292338263,
            "unit": "ns/iter",
            "extra": "iterations: 27571\ncpu: 24689.913314714824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 19991.56381296407,
            "unit": "ns/iter",
            "extra": "iterations: 35416\ncpu: 19990.8544160832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20527.3461040489,
            "unit": "ns/iter",
            "extra": "iterations: 33984\ncpu: 20526.40360169527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21044.691434592816,
            "unit": "ns/iter",
            "extra": "iterations: 33215\ncpu: 21043.87174469366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49867.47161041259,
            "unit": "ns/iter",
            "extra": "iterations: 13984\ncpu: 49866.669050343844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154101.14464993158,
            "unit": "ns/iter",
            "extra": "iterations: 4542\ncpu: 154092.16204315264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130912.56326987366,
            "unit": "ns/iter",
            "extra": "iterations: 5358\ncpu: 130912.43001119861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128725.79239657105,
            "unit": "ns/iter",
            "extra": "iterations: 5366\ncpu: 128722.77301528188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 126635.93208038973,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 126632.82471157436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81665.73413861396,
            "unit": "ns/iter",
            "extra": "iterations: 8527\ncpu: 81663.84425941078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130328.78242129306,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 130321.57046476916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5390.634123054597,
            "unit": "ns/iter",
            "extra": "iterations: 129877\ncpu: 5390.519491518859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26649.196147040606,
            "unit": "ns/iter",
            "extra": "iterations: 26006\ncpu: 26648.338844881997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21962.589766831494,
            "unit": "ns/iter",
            "extra": "iterations: 31994\ncpu: 21962.352316059256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20733.61608197487,
            "unit": "ns/iter",
            "extra": "iterations: 33864\ncpu: 20733.42782896288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20596.97537127416,
            "unit": "ns/iter",
            "extra": "iterations: 35284\ncpu: 20596.783244530267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48966.43347309559,
            "unit": "ns/iter",
            "extra": "iterations: 14310\ncpu: 48964.62613556905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 150896.97900721684,
            "unit": "ns/iter",
            "extra": "iterations: 4573\ncpu: 150895.38596107438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 124821.57897611574,
            "unit": "ns/iter",
            "extra": "iterations: 5489\ncpu: 124820.33157223616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125160.32872394849,
            "unit": "ns/iter",
            "extra": "iterations: 5713\ncpu: 125154.62979170351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127504.75277572764,
            "unit": "ns/iter",
            "extra": "iterations: 5404\ncpu: 127494.43005181209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81826.49140580876,
            "unit": "ns/iter",
            "extra": "iterations: 8785\ncpu: 81822.1627774615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129828.80547842773,
            "unit": "ns/iter",
            "extra": "iterations: 5403\ncpu: 129823.85711641805 ns\nthreads: 1"
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
        "date": 1702490329552,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1369.8788019892438,
            "unit": "ns/iter",
            "extra": "iterations: 502533\ncpu: 1369.8648645959572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16159.462825809142,
            "unit": "ns/iter",
            "extra": "iterations: 52523\ncpu: 16159.303543209644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33726.74306348787,
            "unit": "ns/iter",
            "extra": "iterations: 24508\ncpu: 33725.652848049605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50676.30592871003,
            "unit": "ns/iter",
            "extra": "iterations: 16749\ncpu: 50607.66612932119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56027.57259999862,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56026.37000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70691.80017705173,
            "unit": "ns/iter",
            "extra": "iterations: 12426\ncpu: 70689.40125543218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83314.79318027802,
            "unit": "ns/iter",
            "extra": "iterations: 10323\ncpu: 83311.30485324032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97405.09207160168,
            "unit": "ns/iter",
            "extra": "iterations: 8993\ncpu: 97401.8125208496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113808.2414340485,
            "unit": "ns/iter",
            "extra": "iterations: 7559\ncpu: 113803.6380473607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1211.4632545738334,
            "unit": "ns/iter",
            "extra": "iterations: 609831\ncpu: 1211.4107023093281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 962.2003186761838,
            "unit": "ns/iter",
            "extra": "iterations: 704163\ncpu: 962.1529390212218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 975.2106262366502,
            "unit": "ns/iter",
            "extra": "iterations: 710035\ncpu: 975.1696747343437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 980.0384912315404,
            "unit": "ns/iter",
            "extra": "iterations: 718891\ncpu: 979.99919320175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1881.284536207698,
            "unit": "ns/iter",
            "extra": "iterations: 378219\ncpu: 1881.253718083967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5476.79689000006,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5476.410999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29261.69745900807,
            "unit": "ns/iter",
            "extra": "iterations: 28178\ncpu: 29260.58627297891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22070.326322873232,
            "unit": "ns/iter",
            "extra": "iterations: 35661\ncpu: 22069.212865595444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 20747.241004753,
            "unit": "ns/iter",
            "extra": "iterations: 38298\ncpu: 20746.649955611247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 21668.32826706849,
            "unit": "ns/iter",
            "extra": "iterations: 37174\ncpu: 21668.03141980956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 63808.010050625,
            "unit": "ns/iter",
            "extra": "iterations: 13631\ncpu: 63806.58792458368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 560448.6770000675,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560411.5000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 547703.6320815156,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 547693.5073201776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 546360.8585794921,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 546348.4600879943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 556115.3813451672,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 556091.7512690357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329306.3206480784,
            "unit": "ns/iter",
            "extra": "iterations: 2654\ncpu: 329293.8960060287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 552967.5230178627,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 552955.242966752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2408340.5259066806,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2408251.295336786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1112268.6626650416,
            "unit": "ns/iter",
            "extra": "iterations: 833\ncpu: 1112223.0492196893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3428551.265957311,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3428382.6241134703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8353.21605576339,
            "unit": "ns/iter",
            "extra": "iterations: 101571\ncpu: 8353.03679199775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46182.444748296286,
            "unit": "ns/iter",
            "extra": "iterations: 17918\ncpu: 46180.628418350345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36176.08851907797,
            "unit": "ns/iter",
            "extra": "iterations: 22594\ncpu: 36175.33858546514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 35496.568567550465,
            "unit": "ns/iter",
            "extra": "iterations: 23568\ncpu: 35495.58723693138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36403.9733049703,
            "unit": "ns/iter",
            "extra": "iterations: 23038\ncpu: 36402.64779928802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77750.08235398785,
            "unit": "ns/iter",
            "extra": "iterations: 11147\ncpu: 77747.90526599128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 595802.3419999563,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595784.5000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 594108.1320755214,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 594094.272237201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 588401.1335593503,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 588372.9491525412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 587847.0000000608,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 587830.7118644037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 350692.52931791573,
            "unit": "ns/iter",
            "extra": "iterations: 2507\ncpu: 350685.68009573093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 582984.6276595736,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 582960.1728723429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2563659.779005481,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2563555.524861884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1105453.2687277081,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 1105408.204518435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5512.754830000404,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5512.742000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29333.033046082728,
            "unit": "ns/iter",
            "extra": "iterations: 28082\ncpu: 29332.17007335665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23200.369436371668,
            "unit": "ns/iter",
            "extra": "iterations: 35094\ncpu: 23199.80053570408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22360.117654863217,
            "unit": "ns/iter",
            "extra": "iterations: 37695\ncpu: 22359.432285449067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22547.371934378814,
            "unit": "ns/iter",
            "extra": "iterations: 36208\ncpu: 22547.069708351628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62759.563832876345,
            "unit": "ns/iter",
            "extra": "iterations: 13786\ncpu: 62757.28275061657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 571096.4349999585,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571072.7999999961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 570360.7525839618,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 570343.6692506495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575085.2971204259,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 575060.9947643983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 575053.9211725872,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 575041.4332247567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 335232.92818947573,
            "unit": "ns/iter",
            "extra": "iterations: 2618\ncpu: 335220.2826585184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 562680.1931964287,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 562664.9550706038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 531.4603123339183,
            "unit": "ns/iter",
            "extra": "iterations: 1319037\ncpu: 531.4438488078769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3225.393725609711,
            "unit": "ns/iter",
            "extra": "iterations: 217296\ncpu: 3225.3175392091916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2597.2415820983183,
            "unit": "ns/iter",
            "extra": "iterations: 282612\ncpu: 2597.1763407074027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2561.384617090093,
            "unit": "ns/iter",
            "extra": "iterations: 270599\ncpu: 2561.3187779703603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1981.5088221495457,
            "unit": "ns/iter",
            "extra": "iterations: 360173\ncpu: 1981.472236952791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17753.06921634784,
            "unit": "ns/iter",
            "extra": "iterations: 40005\ncpu: 17752.768403949547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30521.306935454195,
            "unit": "ns/iter",
            "extra": "iterations: 22868\ncpu: 30520.15480146961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7262.586188609097,
            "unit": "ns/iter",
            "extra": "iterations: 96167\ncpu: 7262.34051181797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7101.583471280368,
            "unit": "ns/iter",
            "extra": "iterations: 96051\ncpu: 7101.338872057439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7160.326975193235,
            "unit": "ns/iter",
            "extra": "iterations: 95940\ncpu: 7160.0865124035745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14632.94949073131,
            "unit": "ns/iter",
            "extra": "iterations: 50268\ncpu: 14632.41227023163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13872.794052822313,
            "unit": "ns/iter",
            "extra": "iterations: 52630\ncpu: 13872.63917917524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5170.167300997481,
            "unit": "ns/iter",
            "extra": "iterations: 135576\ncpu: 5170.118605062894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 24690.140292338263,
            "unit": "ns/iter",
            "extra": "iterations: 27571\ncpu: 24689.913314714824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 19991.56381296407,
            "unit": "ns/iter",
            "extra": "iterations: 35416\ncpu: 19990.8544160832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20527.3461040489,
            "unit": "ns/iter",
            "extra": "iterations: 33984\ncpu: 20526.40360169527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21044.691434592816,
            "unit": "ns/iter",
            "extra": "iterations: 33215\ncpu: 21043.87174469366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49867.47161041259,
            "unit": "ns/iter",
            "extra": "iterations: 13984\ncpu: 49866.669050343844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154101.14464993158,
            "unit": "ns/iter",
            "extra": "iterations: 4542\ncpu: 154092.16204315264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130912.56326987366,
            "unit": "ns/iter",
            "extra": "iterations: 5358\ncpu: 130912.43001119861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128725.79239657105,
            "unit": "ns/iter",
            "extra": "iterations: 5366\ncpu: 128722.77301528188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 126635.93208038973,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 126632.82471157436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81665.73413861396,
            "unit": "ns/iter",
            "extra": "iterations: 8527\ncpu: 81663.84425941078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130328.78242129306,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 130321.57046476916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5390.634123054597,
            "unit": "ns/iter",
            "extra": "iterations: 129877\ncpu: 5390.519491518859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26649.196147040606,
            "unit": "ns/iter",
            "extra": "iterations: 26006\ncpu: 26648.338844881997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21962.589766831494,
            "unit": "ns/iter",
            "extra": "iterations: 31994\ncpu: 21962.352316059256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20733.61608197487,
            "unit": "ns/iter",
            "extra": "iterations: 33864\ncpu: 20733.42782896288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20596.97537127416,
            "unit": "ns/iter",
            "extra": "iterations: 35284\ncpu: 20596.783244530267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48966.43347309559,
            "unit": "ns/iter",
            "extra": "iterations: 14310\ncpu: 48964.62613556905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 150896.97900721684,
            "unit": "ns/iter",
            "extra": "iterations: 4573\ncpu: 150895.38596107438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 124821.57897611574,
            "unit": "ns/iter",
            "extra": "iterations: 5489\ncpu: 124820.33157223616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125160.32872394849,
            "unit": "ns/iter",
            "extra": "iterations: 5713\ncpu: 125154.62979170351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127504.75277572764,
            "unit": "ns/iter",
            "extra": "iterations: 5404\ncpu: 127494.43005181209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81826.49140580876,
            "unit": "ns/iter",
            "extra": "iterations: 8785\ncpu: 81822.1627774615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129828.80547842773,
            "unit": "ns/iter",
            "extra": "iterations: 5403\ncpu: 129823.85711641805 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}