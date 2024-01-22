window.BENCHMARK_DATA = {
  "lastUpdate": 1705963888494,
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
        "date": 1702492980745,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1394.9335326253602,
            "unit": "ns/iter",
            "extra": "iterations: 502111\ncpu: 1394.840981376628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16173.35387146177,
            "unit": "ns/iter",
            "extra": "iterations: 50459\ncpu: 16172.799698765331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34433.34443619204,
            "unit": "ns/iter",
            "extra": "iterations: 24228\ncpu: 34433.18887237908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50159.72305299529,
            "unit": "ns/iter",
            "extra": "iterations: 16718\ncpu: 50157.4171551621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57067.74069999483,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57066.92000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70459.76704040809,
            "unit": "ns/iter",
            "extra": "iterations: 12397\ncpu: 70458.83681535856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84164.9804063018,
            "unit": "ns/iter",
            "extra": "iterations: 9697\ncpu: 84163.22573991955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97999.63936074972,
            "unit": "ns/iter",
            "extra": "iterations: 8948\ncpu: 97997.11667411713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113681.94992113412,
            "unit": "ns/iter",
            "extra": "iterations: 7608\ncpu: 113677.82597266036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1209.9539242032838,
            "unit": "ns/iter",
            "extra": "iterations: 580500\ncpu: 1209.9316106804454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 973.8140412323123,
            "unit": "ns/iter",
            "extra": "iterations: 720649\ncpu: 973.7950097759104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 971.1590661148283,
            "unit": "ns/iter",
            "extra": "iterations: 711308\ncpu: 971.1246042501975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 979.720645158598,
            "unit": "ns/iter",
            "extra": "iterations: 712259\ncpu: 979.7149632366891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1890.0983483662992,
            "unit": "ns/iter",
            "extra": "iterations: 370845\ncpu: 1890.081031158569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5853.903109999693,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5853.933999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29046.538722203364,
            "unit": "ns/iter",
            "extra": "iterations: 28330\ncpu: 29045.15707730326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23260.2043529834,
            "unit": "ns/iter",
            "extra": "iterations: 35424\ncpu: 23260.058152664864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22572.0414695849,
            "unit": "ns/iter",
            "extra": "iterations: 36364\ncpu: 22571.939280607174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23112.97430907814,
            "unit": "ns/iter",
            "extra": "iterations: 35460\ncpu: 23111.95149464187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64992.50804631111,
            "unit": "ns/iter",
            "extra": "iterations: 13733\ncpu: 64990.286171994376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 559938.8190000809,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559928.1000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 564474.3666666312,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 564457.5816993455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 563035.0349741128,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 562989.5077720192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 560805.2743077482,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 560761.6870573077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 333295.1547975994,
            "unit": "ns/iter",
            "extra": "iterations: 2668\ncpu: 333277.43628185865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 562841.1040724476,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 562806.4641241124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2415229.940259616,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2415027.0129870134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1114967.8149038504,
            "unit": "ns/iter",
            "extra": "iterations: 832\ncpu: 1114868.3894230789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3382135.9301472516,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3381902.5735294055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8611.736554789251,
            "unit": "ns/iter",
            "extra": "iterations: 97637\ncpu: 8611.043968987178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47086.65293651318,
            "unit": "ns/iter",
            "extra": "iterations: 17674\ncpu: 47084.1235713478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36925.31616008206,
            "unit": "ns/iter",
            "extra": "iterations: 22438\ncpu: 36924.20893127718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36552.26374593302,
            "unit": "ns/iter",
            "extra": "iterations: 22734\ncpu: 36550.25512448318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36880.28543732447,
            "unit": "ns/iter",
            "extra": "iterations: 22695\ncpu: 36878.1141220534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 81824.38223345608,
            "unit": "ns/iter",
            "extra": "iterations: 11077\ncpu: 81791.66741897639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 598195.7610000564,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598170.4000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 601820.2226832627,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 601766.6666666662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 597855.314422441,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 597821.326042378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 597304.4610122587,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 597255.0615595077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 350915.0732200983,
            "unit": "ns/iter",
            "extra": "iterations: 2472\ncpu: 350900.1213592227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 586370.3006711783,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 586328.120805369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2584209.2625698796,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2583939.944134071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1165255.3508771579,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 1165148.2456140332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5521.595170000636,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5520.865000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29463.794176278952,
            "unit": "ns/iter",
            "extra": "iterations: 28092\ncpu: 29461.430300441334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23129.930138988246,
            "unit": "ns/iter",
            "extra": "iterations: 35542\ncpu: 23127.95003094945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22082.745576835583,
            "unit": "ns/iter",
            "extra": "iterations: 37021\ncpu: 22082.53153615515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22903.05388352397,
            "unit": "ns/iter",
            "extra": "iterations: 35818\ncpu: 22902.88681668435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63572.346274763455,
            "unit": "ns/iter",
            "extra": "iterations: 13677\ncpu: 63572.684068143775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 579491.1090000597,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579494.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 580268.7835671669,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 580271.0754843034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 579822.6886980146,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 579819.2333113052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 578257.4275313864,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 578242.8855062874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 338236.69287374296,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 338232.7265685511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 573888.5750487692,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 573884.3404808292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 539.1731561393331,
            "unit": "ns/iter",
            "extra": "iterations: 1293197\ncpu: 539.175392457607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3297.430369131463,
            "unit": "ns/iter",
            "extra": "iterations: 212255\ncpu: 3297.4426986407793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2682.3872889542363,
            "unit": "ns/iter",
            "extra": "iterations: 260844\ncpu: 2682.3998251828707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2661.7649264078304,
            "unit": "ns/iter",
            "extra": "iterations: 263275\ncpu: 2661.743804007211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2078.431201189465,
            "unit": "ns/iter",
            "extra": "iterations: 340987\ncpu: 2078.441113590846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17394.93615963652,
            "unit": "ns/iter",
            "extra": "iterations: 40241\ncpu: 17394.160184886237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30658.644379037527,
            "unit": "ns/iter",
            "extra": "iterations: 22763\ncpu: 30658.779598471592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7551.692757520069,
            "unit": "ns/iter",
            "extra": "iterations: 93711\ncpu: 7551.621474533332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7531.28901093086,
            "unit": "ns/iter",
            "extra": "iterations: 93775\ncpu: 7531.326046387689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7552.112927175104,
            "unit": "ns/iter",
            "extra": "iterations: 93609\ncpu: 7552.001410120799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14911.291082747186,
            "unit": "ns/iter",
            "extra": "iterations: 46382\ncpu: 14911.157345521884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14183.621413320132,
            "unit": "ns/iter",
            "extra": "iterations: 49175\ncpu: 14183.436705642995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5217.5752515615295,
            "unit": "ns/iter",
            "extra": "iterations: 133665\ncpu: 5217.527400591007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25717.078908501004,
            "unit": "ns/iter",
            "extra": "iterations: 27082\ncpu: 25716.88206188608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20899.603970178927,
            "unit": "ns/iter",
            "extra": "iterations: 33399\ncpu: 20899.314350729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20802.74083129559,
            "unit": "ns/iter",
            "extra": "iterations: 33538\ncpu: 20802.534438547573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21141.74296157585,
            "unit": "ns/iter",
            "extra": "iterations: 33104\ncpu: 21141.82878201999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50641.49588150056,
            "unit": "ns/iter",
            "extra": "iterations: 13840\ncpu: 50641.71242774507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155678.4075808196,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 155679.08584169298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131318.9792648585,
            "unit": "ns/iter",
            "extra": "iterations: 5305\ncpu: 131319.6795475956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130725.4312371609,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 130725.90035454187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131135.0265536896,
            "unit": "ns/iter",
            "extra": "iterations: 5310\ncpu: 131129.5291902065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83608.84973658486,
            "unit": "ns/iter",
            "extra": "iterations: 8352\ncpu: 83607.5670498073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131385.39450921398,
            "unit": "ns/iter",
            "extra": "iterations: 5318\ncpu: 131386.3858593448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5508.250075138296,
            "unit": "ns/iter",
            "extra": "iterations: 126434\ncpu: 5508.2825822168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26695.731066992554,
            "unit": "ns/iter",
            "extra": "iterations: 26092\ncpu: 26695.88379579965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21837.58902012085,
            "unit": "ns/iter",
            "extra": "iterations: 32004\ncpu: 21837.44844394467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20976.12550039115,
            "unit": "ns/iter",
            "extra": "iterations: 33474\ncpu: 20976.247236661307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21253.00816611337,
            "unit": "ns/iter",
            "extra": "iterations: 32941\ncpu: 21253.125284599642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49347.9401087637,
            "unit": "ns/iter",
            "extra": "iterations: 14159\ncpu: 49348.103679638836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152510.4281024155,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 152509.30181659025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128477.24926739448,
            "unit": "ns/iter",
            "extra": "iterations: 5460\ncpu: 128477.76556776642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129297.27553487176,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 129296.16744185993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127793.46272209873,
            "unit": "ns/iter",
            "extra": "iterations: 5459\ncpu: 127794.10148378725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83458.03959331028,
            "unit": "ns/iter",
            "extra": "iterations: 8360\ncpu: 83458.45693779866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129967.55333959278,
            "unit": "ns/iter",
            "extra": "iterations: 5315\ncpu: 129966.37817497809 ns\nthreads: 1"
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
        "date": 1702503984539,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1388.2279283908235,
            "unit": "ns/iter",
            "extra": "iterations: 496305\ncpu: 1388.2034232981737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16063.880765301743,
            "unit": "ns/iter",
            "extra": "iterations: 50908\ncpu: 16063.697257798383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34022.89908181456,
            "unit": "ns/iter",
            "extra": "iterations: 24287\ncpu: 34021.85119611315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50485.37487226112,
            "unit": "ns/iter",
            "extra": "iterations: 16635\ncpu: 50484.406372107005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56102.720100000166,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56103.19000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70479.7349375961,
            "unit": "ns/iter",
            "extra": "iterations: 11137\ncpu: 70478.18981772468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83355.47723096951,
            "unit": "ns/iter",
            "extra": "iterations: 10343\ncpu: 83353.35976022431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97170.98260481333,
            "unit": "ns/iter",
            "extra": "iterations: 8968\ncpu: 97168.1199821588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113250.33438320587,
            "unit": "ns/iter",
            "extra": "iterations: 7620\ncpu: 113246.5091863517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1202.2764711436457,
            "unit": "ns/iter",
            "extra": "iterations: 582455\ncpu: 1202.2705616742924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 984.6542258899173,
            "unit": "ns/iter",
            "extra": "iterations: 709602\ncpu: 984.6191245233229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 988.1361654672597,
            "unit": "ns/iter",
            "extra": "iterations: 712890\ncpu: 988.1408071371452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 984.8542971447395,
            "unit": "ns/iter",
            "extra": "iterations: 708133\ncpu: 984.8380177170125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1918.6617562434676,
            "unit": "ns/iter",
            "extra": "iterations: 364938\ncpu: 1918.6727608525284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5481.161959999099,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5481.189999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 28956.64312373419,
            "unit": "ns/iter",
            "extra": "iterations: 28133\ncpu: 28955.753030249143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23401.4842879387,
            "unit": "ns/iter",
            "extra": "iterations: 35355\ncpu: 23401.422712487652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22597.077088978076,
            "unit": "ns/iter",
            "extra": "iterations: 36166\ncpu: 22596.712381795103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22585.06573721787,
            "unit": "ns/iter",
            "extra": "iterations: 36007\ncpu: 22585.161218651945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64079.43456181246,
            "unit": "ns/iter",
            "extra": "iterations: 13784\ncpu: 64077.647997678454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 566695.7729999921,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566699.2999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 566871.608695679,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 566855.8728098635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 561152.7240472492,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 561150.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 564443.9674478511,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 564446.9401041666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329395.42813801795,
            "unit": "ns/iter",
            "extra": "iterations: 2637\ncpu: 329385.81721653475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 557795.2376046226,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 557790.9851899556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2418645.100775236,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2418590.9560723472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1108234.8800959354,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1108219.6642685863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3337032.388488954,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3337014.3884892026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8566.960803581791,
            "unit": "ns/iter",
            "extra": "iterations: 98708\ncpu: 8566.863881346984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46231.226055782085,
            "unit": "ns/iter",
            "extra": "iterations: 17854\ncpu: 46231.46633807553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36687.47246828452,
            "unit": "ns/iter",
            "extra": "iterations: 22465\ncpu: 36686.57022034279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 35855.90763658493,
            "unit": "ns/iter",
            "extra": "iterations: 23191\ncpu: 35856.05622870939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36433.665569599514,
            "unit": "ns/iter",
            "extra": "iterations: 22788\ncpu: 36433.074425136154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77971.7110124962,
            "unit": "ns/iter",
            "extra": "iterations: 11042\ncpu: 77971.1284187642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 608750.3940000262,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608732.6999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 601927.1725327311,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 601922.8433402358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 597550.9324137671,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 597553.4482758628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 594933.0836762656,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 594916.8724279839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 352632.284045135,
            "unit": "ns/iter",
            "extra": "iterations: 2482\ncpu: 352633.72280418914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 586208.2957746082,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 586210.2615694179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2572234.805555556,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2572098.888888874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1133328.2998776583,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 1133332.3133414953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5599.753059999556,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5599.784999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29222.77627321145,
            "unit": "ns/iter",
            "extra": "iterations: 28432\ncpu: 29222.242543612698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23418.20828020082,
            "unit": "ns/iter",
            "extra": "iterations: 35289\ncpu: 23417.727903879302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22546.15198303847,
            "unit": "ns/iter",
            "extra": "iterations: 36787\ncpu: 22546.266344088865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23365.015887850022,
            "unit": "ns/iter",
            "extra": "iterations: 35310\ncpu: 23365.11469838571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63703.87044624962,
            "unit": "ns/iter",
            "extra": "iterations: 13423\ncpu: 63703.68770021613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 582589.5750000427,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582592.4999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 580233.886742203,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 580228.4477015301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 579882.0179045264,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 579874.4031830211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 579657.4989992843,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 579649.4996664473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 341308.3029480427,
            "unit": "ns/iter",
            "extra": "iterations: 2578\ncpu: 341302.9092319633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 569821.1509803853,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 569809.6078431389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 536.3614271391889,
            "unit": "ns/iter",
            "extra": "iterations: 1306670\ncpu: 536.3632745834835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3245.7705820638994,
            "unit": "ns/iter",
            "extra": "iterations: 215406\ncpu: 3245.716925248147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2414.0803085255093,
            "unit": "ns/iter",
            "extra": "iterations: 291451\ncpu: 2414.060682584722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2497.267532652876,
            "unit": "ns/iter",
            "extra": "iterations: 280605\ncpu: 2497.2755296591195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1998.7977312225717,
            "unit": "ns/iter",
            "extra": "iterations: 349263\ncpu: 1998.806629960796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17708.824454257698,
            "unit": "ns/iter",
            "extra": "iterations: 39625\ncpu: 17708.42649842279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30535.40937049946,
            "unit": "ns/iter",
            "extra": "iterations: 22923\ncpu: 30535.32260175388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7334.2105297175185,
            "unit": "ns/iter",
            "extra": "iterations: 92823\ncpu: 7334.244745375658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7273.045314334429,
            "unit": "ns/iter",
            "extra": "iterations: 96283\ncpu: 7272.896565333513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7325.603491922997,
            "unit": "ns/iter",
            "extra": "iterations: 95592\ncpu: 7325.560716377957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14714.045628340027,
            "unit": "ns/iter",
            "extra": "iterations: 47339\ncpu: 14713.781448699769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13936.788705393543,
            "unit": "ns/iter",
            "extra": "iterations: 50077\ncpu: 13936.705473570759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5176.510905779373,
            "unit": "ns/iter",
            "extra": "iterations: 135066\ncpu: 5176.464839411849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25765.8013564823,
            "unit": "ns/iter",
            "extra": "iterations: 27129\ncpu: 25765.288068119124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20637.935455110717,
            "unit": "ns/iter",
            "extra": "iterations: 33651\ncpu: 20637.666042613822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20683.72952802409,
            "unit": "ns/iter",
            "extra": "iterations: 33900\ncpu: 20682.96755162243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21084.0769137869,
            "unit": "ns/iter",
            "extra": "iterations: 33128\ncpu: 21084.176527409032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49648.51017503975,
            "unit": "ns/iter",
            "extra": "iterations: 14054\ncpu: 49647.37441297869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155547.77988827432,
            "unit": "ns/iter",
            "extra": "iterations: 4475\ncpu: 155548.51396648143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131236.43927163185,
            "unit": "ns/iter",
            "extra": "iterations: 5327\ncpu: 131233.9403041119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130557.6710697625,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 130558.23255814007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130646.97152429195,
            "unit": "ns/iter",
            "extra": "iterations: 5373\ncpu: 130646.08226316802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83735.30870870184,
            "unit": "ns/iter",
            "extra": "iterations: 8325\ncpu: 83734.6906906903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131307.008284699,
            "unit": "ns/iter",
            "extra": "iterations: 5311\ncpu: 131305.85577104037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5014.384639999889,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5014.283000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25691.49173584284,
            "unit": "ns/iter",
            "extra": "iterations: 27226\ncpu: 25691.58524939362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21535.5692246376,
            "unit": "ns/iter",
            "extra": "iterations: 32604\ncpu: 21535.228806281684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21021.582027135148,
            "unit": "ns/iter",
            "extra": "iterations: 33239\ncpu: 21021.667318511558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22533.598306710537,
            "unit": "ns/iter",
            "extra": "iterations: 31300\ncpu: 22533.233226836845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49278.42975089333,
            "unit": "ns/iter",
            "extra": "iterations: 14171\ncpu: 49275.44280572918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152515.07080420043,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 152515.90909091165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129320.82152085882,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 129321.53931339929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129923.25593471898,
            "unit": "ns/iter",
            "extra": "iterations: 5392\ncpu: 129915.02225519248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128390.69059861753,
            "unit": "ns/iter",
            "extra": "iterations: 5446\ncpu: 128386.28351083366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 84442.10016795048,
            "unit": "ns/iter",
            "extra": "iterations: 8336\ncpu: 84436.63627639077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129877.89905363915,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 129866.50584523859 ns\nthreads: 1"
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
        "date": 1705575673630,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1360.6858088089268,
            "unit": "ns/iter",
            "extra": "iterations: 506300\ncpu: 1360.6478372506422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15940.002824919107,
            "unit": "ns/iter",
            "extra": "iterations: 47081\ncpu: 15939.438414647102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35343.317419088344,
            "unit": "ns/iter",
            "extra": "iterations: 24255\ncpu: 35340.76272933415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50564.935337797084,
            "unit": "ns/iter",
            "extra": "iterations: 16563\ncpu: 50564.197307251074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55915.69690000142,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55914.950000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71296.96364652798,
            "unit": "ns/iter",
            "extra": "iterations: 12516\ncpu: 71294.65484180249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84274.18060892967,
            "unit": "ns/iter",
            "extra": "iterations: 10149\ncpu: 84272.23371760765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98711.06085312237,
            "unit": "ns/iter",
            "extra": "iterations: 8463\ncpu: 98709.38201583362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 117583.05594778198,
            "unit": "ns/iter",
            "extra": "iterations: 7507\ncpu: 117580.53816437998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1188.8496375019427,
            "unit": "ns/iter",
            "extra": "iterations: 586210\ncpu: 1188.8033298647254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 966.9082725655064,
            "unit": "ns/iter",
            "extra": "iterations: 727634\ncpu: 966.8950323926581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 955.0662860837459,
            "unit": "ns/iter",
            "extra": "iterations: 733261\ncpu: 955.0520210402572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 953.209369492656,
            "unit": "ns/iter",
            "extra": "iterations: 733679\ncpu: 953.1992874267897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1907.4691642321175,
            "unit": "ns/iter",
            "extra": "iterations: 366944\ncpu: 1907.4057621871443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5203.870550000147,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5203.699000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29106.587190372837,
            "unit": "ns/iter",
            "extra": "iterations: 28260\ncpu: 29105.0176928521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23140.943336150525,
            "unit": "ns/iter",
            "extra": "iterations: 35490\ncpu: 23140.07326007324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22495.54352400909,
            "unit": "ns/iter",
            "extra": "iterations: 36589\ncpu: 22494.78531799175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22927.941577052225,
            "unit": "ns/iter",
            "extra": "iterations: 35243\ncpu: 22926.609539483034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64321.54210945052,
            "unit": "ns/iter",
            "extra": "iterations: 13833\ncpu: 64318.99804814564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 565399.272000036,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565366.9000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 569272.5414473749,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 569255.5263157882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 568528.5544683657,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 568505.8056099154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 566775.4303466085,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 566774.0353172015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 334559.5256901504,
            "unit": "ns/iter",
            "extra": "iterations: 2608\ncpu: 334548.54294478556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 565771.7693811303,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 565741.6938110742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2460798.7157893553,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2460711.8421052587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1096435.94251496,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 1094980.1197604784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3358507.2681162637,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3358417.7536231964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8774.013620670148,
            "unit": "ns/iter",
            "extra": "iterations: 94709\ncpu: 8773.81875006599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46695.66482618716,
            "unit": "ns/iter",
            "extra": "iterations: 17749\ncpu: 46694.00529607299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36665.80401166173,
            "unit": "ns/iter",
            "extra": "iterations: 22634\ncpu: 36664.68145268175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 35662.268677791464,
            "unit": "ns/iter",
            "extra": "iterations: 23370\ncpu: 35660.65040650413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36383.435745873954,
            "unit": "ns/iter",
            "extra": "iterations: 22839\ncpu: 36382.69626516046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77685.56116522341,
            "unit": "ns/iter",
            "extra": "iterations: 11191\ncpu: 77683.3258868736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 603177.1179999623,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603169.3000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 604011.6288872894,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 603955.7014512793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 598686.4648943592,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 598675.7327880036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 598696.3875862188,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 598692.3448275821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 347853.9813269773,
            "unit": "ns/iter",
            "extra": "iterations: 2517\ncpu: 347847.95391338924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 581587.3902438453,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 581568.8346883479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2575708.184659091,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2575701.136363629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1140327.3985419571,
            "unit": "ns/iter",
            "extra": "iterations: 823\ncpu: 1140318.104495745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5487.613840000449,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5487.590999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29073.240014062674,
            "unit": "ns/iter",
            "extra": "iterations: 28440\ncpu: 29072.742616033796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23028.441723636653,
            "unit": "ns/iter",
            "extra": "iterations: 35692\ncpu: 23028.087526616677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22240.178332122337,
            "unit": "ns/iter",
            "extra": "iterations: 37161\ncpu: 22239.72175129834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22714.2962796926,
            "unit": "ns/iter",
            "extra": "iterations: 35696\ncpu: 22713.923128642025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63901.28329385069,
            "unit": "ns/iter",
            "extra": "iterations: 13929\ncpu: 63900.3015291836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 578113.7499999432,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578088.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 582016.8203947082,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 582001.644736841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 578536.7915567316,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 578528.2321899765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 576928.1401315964,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 576913.552631579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 339817.5698128007,
            "unit": "ns/iter",
            "extra": "iterations: 2564\ncpu: 339809.6333853368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 568312.9960887011,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 568304.1069100423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 538.6101389758516,
            "unit": "ns/iter",
            "extra": "iterations: 1296916\ncpu: 538.5979508310495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3131.7668379087145,
            "unit": "ns/iter",
            "extra": "iterations: 222103\ncpu: 3131.7848025465655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2324.479263162574,
            "unit": "ns/iter",
            "extra": "iterations: 300962\ncpu: 2324.424013662858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2372.8004393796145,
            "unit": "ns/iter",
            "extra": "iterations: 294051\ncpu: 2372.775810998791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1960.3145752430996,
            "unit": "ns/iter",
            "extra": "iterations: 357428\ncpu: 1960.2308716720627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17300.217283099133,
            "unit": "ns/iter",
            "extra": "iterations: 40583\ncpu: 17299.69938151442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30656.293649055315,
            "unit": "ns/iter",
            "extra": "iterations: 22847\ncpu: 30655.302665557585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7347.33132177316,
            "unit": "ns/iter",
            "extra": "iterations: 95614\ncpu: 7347.189742088019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7295.230435829452,
            "unit": "ns/iter",
            "extra": "iterations: 95519\ncpu: 7295.143374616586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7342.689940790597,
            "unit": "ns/iter",
            "extra": "iterations: 95256\ncpu: 7342.5558495004125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14743.23071402984,
            "unit": "ns/iter",
            "extra": "iterations: 47379\ncpu: 14743.192131534994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13960.352540544314,
            "unit": "ns/iter",
            "extra": "iterations: 50068\ncpu: 13960.066309818614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5220.238509806494,
            "unit": "ns/iter",
            "extra": "iterations: 134506\ncpu: 5220.092040503803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25547.976936899202,
            "unit": "ns/iter",
            "extra": "iterations: 27273\ncpu: 25547.237194294434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20646.720084966095,
            "unit": "ns/iter",
            "extra": "iterations: 33896\ncpu: 20645.57764928027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20639.318135077687,
            "unit": "ns/iter",
            "extra": "iterations: 34039\ncpu: 20638.388319280763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21029.758293695202,
            "unit": "ns/iter",
            "extra": "iterations: 33218\ncpu: 21029.00535854026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49710.78481281881,
            "unit": "ns/iter",
            "extra": "iterations: 14104\ncpu: 49709.50085082254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154861.5399510406,
            "unit": "ns/iter",
            "extra": "iterations: 4493\ncpu: 154859.9599376831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131079.43883278256,
            "unit": "ns/iter",
            "extra": "iterations: 5346\ncpu: 131078.02095024523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129504.15925925224,
            "unit": "ns/iter",
            "extra": "iterations: 5400\ncpu: 129503.35185185172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129869.25625809646,
            "unit": "ns/iter",
            "extra": "iterations: 5393\ncpu: 129868.9041349902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83276.66069936461,
            "unit": "ns/iter",
            "extra": "iterations: 8379\ncpu: 83274.32867884089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130644.22621485626,
            "unit": "ns/iter",
            "extra": "iterations: 5371\ncpu: 130638.4099795193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5077.974298863236,
            "unit": "ns/iter",
            "extra": "iterations: 138632\ncpu: 5077.82113797677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25419.74336928101,
            "unit": "ns/iter",
            "extra": "iterations: 27448\ncpu: 25419.16350918105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21198.114650453666,
            "unit": "ns/iter",
            "extra": "iterations: 32900\ncpu: 21197.641337386063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20458.963229089437,
            "unit": "ns/iter",
            "extra": "iterations: 34375\ncpu: 20458.379636363796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21162.87791561533,
            "unit": "ns/iter",
            "extra": "iterations: 32969\ncpu: 21162.998574418463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48796.94495989039,
            "unit": "ns/iter",
            "extra": "iterations: 14335\ncpu: 48796.302755494464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152351.26936467615,
            "unit": "ns/iter",
            "extra": "iterations: 4596\ncpu: 152349.3255004355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 126776.94854170883,
            "unit": "ns/iter",
            "extra": "iterations: 5383\ncpu: 126774.47519970089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129281.5011566763,
            "unit": "ns/iter",
            "extra": "iterations: 4755\ncpu: 129279.20084121833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128370.0832266462,
            "unit": "ns/iter",
            "extra": "iterations: 5467\ncpu: 128365.61185293496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 84063.66698701713,
            "unit": "ns/iter",
            "extra": "iterations: 8324\ncpu: 84057.80874579561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129409.93424454695,
            "unit": "ns/iter",
            "extra": "iterations: 5414\ncpu: 129403.38012559977 ns\nthreads: 1"
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
        "date": 1705773498582,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1370.4143216927891,
            "unit": "ns/iter",
            "extra": "iterations: 513403\ncpu: 1370.3449337070488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16141.193335453961,
            "unit": "ns/iter",
            "extra": "iterations: 50296\ncpu: 16140.794496580245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33657.84165331315,
            "unit": "ns/iter",
            "extra": "iterations: 24339\ncpu: 33657.68108796581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50825.77135482675,
            "unit": "ns/iter",
            "extra": "iterations: 16659\ncpu: 50825.703823758944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56266.74549999962,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56267.11000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70517.05551550578,
            "unit": "ns/iter",
            "extra": "iterations: 12483\ncpu: 70516.10189858201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83443.72732524747,
            "unit": "ns/iter",
            "extra": "iterations: 10386\ncpu: 83443.6549200847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97290.912064531,
            "unit": "ns/iter",
            "extra": "iterations: 8927\ncpu: 97288.93245211164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114579.3639123548,
            "unit": "ns/iter",
            "extra": "iterations: 7576\ncpu: 114578.62988384372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1162.0950268795677,
            "unit": "ns/iter",
            "extra": "iterations: 596547\ncpu: 1162.0821159103957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 964.5061946319695,
            "unit": "ns/iter",
            "extra": "iterations: 727969\ncpu: 964.497801417368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 968.2796124865991,
            "unit": "ns/iter",
            "extra": "iterations: 724517\ncpu: 968.2727941511371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 966.5959167175223,
            "unit": "ns/iter",
            "extra": "iterations: 724858\ncpu: 966.5948365059094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1874.9757585302627,
            "unit": "ns/iter",
            "extra": "iterations: 374606\ncpu: 1874.9875869580326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5394.819740000684,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5394.737999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29312.656912244984,
            "unit": "ns/iter",
            "extra": "iterations: 28124\ncpu: 29312.619115346333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23268.76868968056,
            "unit": "ns/iter",
            "extra": "iterations: 35541\ncpu: 23268.312652992292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22663.578041107747,
            "unit": "ns/iter",
            "extra": "iterations: 36878\ncpu: 22663.566353923794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23532.99261594428,
            "unit": "ns/iter",
            "extra": "iterations: 35211\ncpu: 23532.58640765668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64254.04451901573,
            "unit": "ns/iter",
            "extra": "iterations: 13410\ncpu: 64252.57270693528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 565345.7730001037,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565337.9000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 572500.32000001,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 572494.8852458998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 559956.2098684361,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 559936.6447368417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 561885.912418273,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 561875.4248366022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 335973.28363914473,
            "unit": "ns/iter",
            "extra": "iterations: 2616\ncpu: 335968.19571865414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 570263.5744957853,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 570238.3864671428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2410019.036082381,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2409936.597938143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1104777.8365154911,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 1104748.3293556082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3357942.381818165,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3357759.9999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8596.690024825393,
            "unit": "ns/iter",
            "extra": "iterations: 97482\ncpu: 8596.39523194025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46730.97635211706,
            "unit": "ns/iter",
            "extra": "iterations: 17676\ncpu: 46729.305272686135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37040.95697150765,
            "unit": "ns/iter",
            "extra": "iterations: 22427\ncpu: 37039.46136353494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36127.99050578466,
            "unit": "ns/iter",
            "extra": "iterations: 23172\ncpu: 36127.22682547899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36190.802815046096,
            "unit": "ns/iter",
            "extra": "iterations: 22806\ncpu: 36189.80092957967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78430.55970877716,
            "unit": "ns/iter",
            "extra": "iterations: 11263\ncpu: 78431.02193021373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 602719.0410000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602686.7999999936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 598024.0696551626,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 598016.0689655193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 593247.6010966925,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 593244.3454420844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 591225.1446112457,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 591225.2387448876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 349796.6306089787,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 349790.42467948754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 577877.6063617985,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 577873.757455268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2557415.8461539596,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2557351.0989010865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1098092.255924103,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 1098050.1184834111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5471.9451899995875,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5471.699000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28673.08863867334,
            "unit": "ns/iter",
            "extra": "iterations: 28509\ncpu: 28671.815917780295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 22866.77145161738,
            "unit": "ns/iter",
            "extra": "iterations: 35953\ncpu: 22866.10853058167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22174.677049623773,
            "unit": "ns/iter",
            "extra": "iterations: 37080\ncpu: 22174.08036677451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22959.82898713143,
            "unit": "ns/iter",
            "extra": "iterations: 35740\ncpu: 22958.68774482371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63372.00283801588,
            "unit": "ns/iter",
            "extra": "iterations: 13742\ncpu: 63369.25483917904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 573796.399999992,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573799.7000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 576746.984947586,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 576729.8429319372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 572612.6142297927,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 572589.0339425578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 571859.0191546191,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 571862.4834874537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 338407.23360185407,
            "unit": "ns/iter",
            "extra": "iterations: 2607\ncpu: 338396.01074031455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 563430.3675048621,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 563419.148936171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 541.5601840060341,
            "unit": "ns/iter",
            "extra": "iterations: 1256480\ncpu: 541.5635744301527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3233.2502660538757,
            "unit": "ns/iter",
            "extra": "iterations: 217061\ncpu: 3233.180073804117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2425.1749691913396,
            "unit": "ns/iter",
            "extra": "iterations: 289691\ncpu: 2425.1895985722604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2514.6456550224907,
            "unit": "ns/iter",
            "extra": "iterations: 277021\ncpu: 2508.9769367665185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1983.593588855328,
            "unit": "ns/iter",
            "extra": "iterations: 352168\ncpu: 1983.577724267961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17283.839325981655,
            "unit": "ns/iter",
            "extra": "iterations: 40355\ncpu: 17283.60302316946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30861.575993626622,
            "unit": "ns/iter",
            "extra": "iterations: 22594\ncpu: 30861.55616535387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7402.466672295228,
            "unit": "ns/iter",
            "extra": "iterations: 94741\ncpu: 7402.384395351595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7347.587227969533,
            "unit": "ns/iter",
            "extra": "iterations: 95302\ncpu: 7347.404041887969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7403.256173393168,
            "unit": "ns/iter",
            "extra": "iterations: 94721\ncpu: 7403.255877788456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14602.576713818391,
            "unit": "ns/iter",
            "extra": "iterations: 47788\ncpu: 14602.362517786927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14070.209525337603,
            "unit": "ns/iter",
            "extra": "iterations: 49846\ncpu: 14070.294507081848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5160.910008454857,
            "unit": "ns/iter",
            "extra": "iterations: 133657\ncpu: 5160.851283509242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25892.519640270468,
            "unit": "ns/iter",
            "extra": "iterations: 26909\ncpu: 25892.47463673857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20789.235801624654,
            "unit": "ns/iter",
            "extra": "iterations: 33613\ncpu: 20789.147056198308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20734.95872320328,
            "unit": "ns/iter",
            "extra": "iterations: 33772\ncpu: 20734.940187137414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21164.516169228544,
            "unit": "ns/iter",
            "extra": "iterations: 32902\ncpu: 21164.263570603558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49520.94384250576,
            "unit": "ns/iter",
            "extra": "iterations: 14121\ncpu: 49520.8271368884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154069.48078620582,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 154068.68374558148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131105.00842223148,
            "unit": "ns/iter",
            "extra": "iterations: 5343\ncpu: 131102.58281864208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130617.22479462263,
            "unit": "ns/iter",
            "extra": "iterations: 5356\ncpu: 130617.00896190971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130611.76049245562,
            "unit": "ns/iter",
            "extra": "iterations: 5361\ncpu: 130607.92762544355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82271.09331756797,
            "unit": "ns/iter",
            "extra": "iterations: 8455\ncpu: 82267.58131283135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129767.04208565873,
            "unit": "ns/iter",
            "extra": "iterations: 5370\ncpu: 129767.85847299718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5244.260349171655,
            "unit": "ns/iter",
            "extra": "iterations: 133344\ncpu: 5244.195464362826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25956.34700070292,
            "unit": "ns/iter",
            "extra": "iterations: 27023\ncpu: 25955.267734892284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22033.615539288414,
            "unit": "ns/iter",
            "extra": "iterations: 31829\ncpu: 22032.473530428175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21144.07532688244,
            "unit": "ns/iter",
            "extra": "iterations: 32963\ncpu: 21143.08770439563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22219.935483870726,
            "unit": "ns/iter",
            "extra": "iterations: 31651\ncpu: 22219.019936179062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49825.51503006586,
            "unit": "ns/iter",
            "extra": "iterations: 13972\ncpu: 49823.35385055808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 150600.4126881586,
            "unit": "ns/iter",
            "extra": "iterations: 4650\ncpu: 150592.45161290417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 126780.12677336093,
            "unit": "ns/iter",
            "extra": "iterations: 5498\ncpu: 126778.84685339981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127826.41369862069,
            "unit": "ns/iter",
            "extra": "iterations: 5475\ncpu: 127827.15981735261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128521.68176814623,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 128516.15920762958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81567.65849100903,
            "unit": "ns/iter",
            "extra": "iterations: 8562\ncpu: 81563.64167250662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128536.14026069948,
            "unit": "ns/iter",
            "extra": "iterations: 5447\ncpu: 128534.71635763055 ns\nthreads: 1"
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
        "date": 1705775397219,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1356.2226574021204,
            "unit": "ns/iter",
            "extra": "iterations: 511921\ncpu: 1356.1938267818668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16024.574933468737,
            "unit": "ns/iter",
            "extra": "iterations: 51479\ncpu: 16024.394413255888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34288.12122713665,
            "unit": "ns/iter",
            "extra": "iterations: 24219\ncpu: 34285.721953837914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50376.35961032603,
            "unit": "ns/iter",
            "extra": "iterations: 16732\ncpu: 50374.89242170691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55719.97129999318,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55718.03000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70083.29087752714,
            "unit": "ns/iter",
            "extra": "iterations: 12672\ncpu: 70082.93087121211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85656.23568990258,
            "unit": "ns/iter",
            "extra": "iterations: 10255\ncpu: 85654.82203803024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97646.14529339527,
            "unit": "ns/iter",
            "extra": "iterations: 8913\ncpu: 97642.90362392008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113134.12130842837,
            "unit": "ns/iter",
            "extra": "iterations: 7551\ncpu: 113129.81062110979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1168.9972380370061,
            "unit": "ns/iter",
            "extra": "iterations: 596315\ncpu: 1168.9399059222073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 962.4592742542534,
            "unit": "ns/iter",
            "extra": "iterations: 731110\ncpu: 962.3882863043862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 949.6630474029067,
            "unit": "ns/iter",
            "extra": "iterations: 733943\ncpu: 949.363097679247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 953.6034169833513,
            "unit": "ns/iter",
            "extra": "iterations: 734449\ncpu: 953.5547056364694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1878.7919789358327,
            "unit": "ns/iter",
            "extra": "iterations: 380548\ncpu: 1878.734614293074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5355.029390000254,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5355.004999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 28979.2513470661,
            "unit": "ns/iter",
            "extra": "iterations: 28395\ncpu: 28977.93977812993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22979.340129827746,
            "unit": "ns/iter",
            "extra": "iterations: 36048\ncpu: 22978.46759875722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22570.451380358652,
            "unit": "ns/iter",
            "extra": "iterations: 37454\ncpu: 22569.258290169284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22822.867107518952,
            "unit": "ns/iter",
            "extra": "iterations: 36142\ncpu: 22822.303690996592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 63223.34701708864,
            "unit": "ns/iter",
            "extra": "iterations: 13812\ncpu: 63222.4370112946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 585040.8449999804,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584488.0000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 564454.9532771079,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 564444.256975989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 564908.9640333799,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 564884.328837508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 556798.1997414329,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 556779.1208791201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 330305.663238072,
            "unit": "ns/iter",
            "extra": "iterations: 2625\ncpu: 330296.4190476186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 562298.2123950386,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 562279.083279535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2389416.5784060187,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2389369.408740361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1104633.5897740624,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 1104595.005945301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3321922.3107140902,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3321781.071428579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8438.962525067855,
            "unit": "ns/iter",
            "extra": "iterations: 100227\ncpu: 8438.82985622635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46652.16473449209,
            "unit": "ns/iter",
            "extra": "iterations: 17683\ncpu: 46650.624893966065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36844.22406491355,
            "unit": "ns/iter",
            "extra": "iterations: 22431\ncpu: 36843.03865186589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 35813.426440150164,
            "unit": "ns/iter",
            "extra": "iterations: 23192\ncpu: 35812.75439806837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36231.67938997704,
            "unit": "ns/iter",
            "extra": "iterations: 22950\ncpu: 36231.01089324605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76859.86863534036,
            "unit": "ns/iter",
            "extra": "iterations: 11175\ncpu: 76858.47874720363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 597168.1099999842,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597159.0999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 595343.533607691,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 595326.131687245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 588361.597685513,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 588341.6609938738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 586513.8675767955,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 586500.6825938559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 347526.59781731415,
            "unit": "ns/iter",
            "extra": "iterations: 2474\ncpu: 347517.38075990276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 577148.6264822223,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 577137.4176548101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2542211.508241608,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2542150.824175835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1103951.3654761128,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 1103905.238095239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5447.565260000147,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5447.451000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29252.090819970515,
            "unit": "ns/iter",
            "extra": "iterations: 28562\ncpu: 29251.551011833948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23063.03783251135,
            "unit": "ns/iter",
            "extra": "iterations: 35525\ncpu: 23062.4827586207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 21964.50727518681,
            "unit": "ns/iter",
            "extra": "iterations: 37731\ncpu: 21963.828151917514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22505.25357561248,
            "unit": "ns/iter",
            "extra": "iterations: 36707\ncpu: 22504.767483041338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63243.51807054623,
            "unit": "ns/iter",
            "extra": "iterations: 13807\ncpu: 63242.413268631775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 570482.315999925,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570459.4999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 574433.3093053292,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 574415.8584534749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 573826.7030025779,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 573819.0600522194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 570886.3831592393,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 570871.2793733666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 333168.50699960336,
            "unit": "ns/iter",
            "extra": "iterations: 2643\ncpu: 333158.60764282884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 563132.2506426644,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 563100.8997429303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 532.9768776496708,
            "unit": "ns/iter",
            "extra": "iterations: 1314529\ncpu: 532.956214735467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3206.8194962896705,
            "unit": "ns/iter",
            "extra": "iterations: 218062\ncpu: 3206.6728728526637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2511.1080410592294,
            "unit": "ns/iter",
            "extra": "iterations: 278135\ncpu: 2510.944685134908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2568.3537733423245,
            "unit": "ns/iter",
            "extra": "iterations: 272146\ncpu: 2568.205669015883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1981.0452268009656,
            "unit": "ns/iter",
            "extra": "iterations: 352269\ncpu: 1980.9438241798252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17455.866900565852,
            "unit": "ns/iter",
            "extra": "iterations: 40188\ncpu: 17455.476759231533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30654.80165982019,
            "unit": "ns/iter",
            "extra": "iterations: 23858\ncpu: 30653.36993880455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7291.617428344786,
            "unit": "ns/iter",
            "extra": "iterations: 96016\ncpu: 7291.526412264632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7303.439959270345,
            "unit": "ns/iter",
            "extra": "iterations: 96243\ncpu: 7303.084899681009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7259.959914372638,
            "unit": "ns/iter",
            "extra": "iterations: 95296\ncpu: 7259.52505876421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14085.36692979879,
            "unit": "ns/iter",
            "extra": "iterations: 49658\ncpu: 14084.800032220306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13991.069790034966,
            "unit": "ns/iter",
            "extra": "iterations: 50437\ncpu: 13990.217499058375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5159.9138725107705,
            "unit": "ns/iter",
            "extra": "iterations: 136356\ncpu: 5159.885886943034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25623.356991604163,
            "unit": "ns/iter",
            "extra": "iterations: 27390\ncpu: 25622.69806498701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20557.39370218004,
            "unit": "ns/iter",
            "extra": "iterations: 33980\ncpu: 20557.092407298565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20443.075177427778,
            "unit": "ns/iter",
            "extra": "iterations: 34239\ncpu: 20441.87622302082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21154.046889523255,
            "unit": "ns/iter",
            "extra": "iterations: 33355\ncpu: 21152.879628241728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50126.352200004476,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50123.61999999939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155684.60817413803,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 155677.41003998116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131503.59891953273,
            "unit": "ns/iter",
            "extra": "iterations: 5368\ncpu: 131501.67660208594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130125.6496240536,
            "unit": "ns/iter",
            "extra": "iterations: 5320\ncpu: 130121.82330827076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130251.39802938345,
            "unit": "ns/iter",
            "extra": "iterations: 5379\ncpu: 130247.90853318456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83229.06769780444,
            "unit": "ns/iter",
            "extra": "iterations: 8405\ncpu: 83227.11481261185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130947.41814119213,
            "unit": "ns/iter",
            "extra": "iterations: 5369\ncpu: 130944.44030545508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5119.279373176853,
            "unit": "ns/iter",
            "extra": "iterations: 136434\ncpu: 5119.166043654832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25765.79574248692,
            "unit": "ns/iter",
            "extra": "iterations: 27152\ncpu: 25764.698733058558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21304.31964720131,
            "unit": "ns/iter",
            "extra": "iterations: 32880\ncpu: 21304.041970803297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20995.141821543475,
            "unit": "ns/iter",
            "extra": "iterations: 33521\ncpu: 20994.84800572797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20919.4853638894,
            "unit": "ns/iter",
            "extra": "iterations: 33513\ncpu: 20918.992629725522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49279.65884006592,
            "unit": "ns/iter",
            "extra": "iterations: 14225\ncpu: 49278.186291739796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153557.9049187497,
            "unit": "ns/iter",
            "extra": "iterations: 4554\ncpu: 153555.79710144736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128540.70478625549,
            "unit": "ns/iter",
            "extra": "iterations: 5474\ncpu: 128540.02557544813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130375.04678362017,
            "unit": "ns/iter",
            "extra": "iterations: 5472\ncpu: 130372.18567251386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127113.51024478007,
            "unit": "ns/iter",
            "extra": "iterations: 5515\ncpu: 127111.44152312045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82913.37807340358,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 82909.73987409446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128531.88803738049,
            "unit": "ns/iter",
            "extra": "iterations: 5350\ncpu: 128527.34579439319 ns\nthreads: 1"
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
        "date": 1705778452962,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1369.249289640401,
            "unit": "ns/iter",
            "extra": "iterations: 515232\ncpu: 1369.2379355319545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16228.451324140902,
            "unit": "ns/iter",
            "extra": "iterations: 51052\ncpu: 16227.601269294051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34176.6548446784,
            "unit": "ns/iter",
            "extra": "iterations: 24305\ncpu: 34176.827813207165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50238.35040382669,
            "unit": "ns/iter",
            "extra": "iterations: 16715\ncpu: 50236.11725994614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56047.61380000127,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56047.88999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70627.99951865463,
            "unit": "ns/iter",
            "extra": "iterations: 12465\ncpu: 70624.70918572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83724.11846050117,
            "unit": "ns/iter",
            "extra": "iterations: 10341\ncpu: 83719.78532056866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96932.50466029922,
            "unit": "ns/iter",
            "extra": "iterations: 8905\ncpu: 96927.50140370574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114096.4164459836,
            "unit": "ns/iter",
            "extra": "iterations: 7552\ncpu: 114089.22139830508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1158.580369864725,
            "unit": "ns/iter",
            "extra": "iterations: 602166\ncpu: 1158.506624419181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 961.4301341108327,
            "unit": "ns/iter",
            "extra": "iterations: 728875\ncpu: 961.38487394958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 950.1265326046974,
            "unit": "ns/iter",
            "extra": "iterations: 735431\ncpu: 950.0732223689233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 958.0248566807538,
            "unit": "ns/iter",
            "extra": "iterations: 727048\ncpu: 958.0286308469317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1888.4270960279043,
            "unit": "ns/iter",
            "extra": "iterations: 370069\ncpu: 1888.3646022768723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5037.42428999999,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5036.971999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27446.112659235183,
            "unit": "ns/iter",
            "extra": "iterations: 30144\ncpu: 27445.25942144372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22158.60710170453,
            "unit": "ns/iter",
            "extra": "iterations: 37315\ncpu: 22157.239715931937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 21279.792116729273,
            "unit": "ns/iter",
            "extra": "iterations: 38791\ncpu: 21278.59555051427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 21576.87534728752,
            "unit": "ns/iter",
            "extra": "iterations: 37793\ncpu: 21575.762707379694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64313.18618444763,
            "unit": "ns/iter",
            "extra": "iterations: 13825\ncpu: 64309.931283905906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 570617.1249998988,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570596.5999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 559037.3402328258,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 558992.5614489011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 565154.1526520406,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 565145.4721862869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 561888.4200913555,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 561879.5825179386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 332940.71091666876,
            "unit": "ns/iter",
            "extra": "iterations: 2629\ncpu: 332934.8421453021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 564302.9689521489,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 564286.0284605441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2397949.5309277484,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2397915.2061855705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1081673.9672897381,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1081650.9345794402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3361436.623188463,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3361234.4202898517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8571.913630174302,
            "unit": "ns/iter",
            "extra": "iterations: 98414\ncpu: 8571.860710874482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46480.061232493375,
            "unit": "ns/iter",
            "extra": "iterations: 17850\ncpu: 46478.072829131714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37144.23339995458,
            "unit": "ns/iter",
            "extra": "iterations: 22515\ncpu: 37141.7810348656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36181.72972505664,
            "unit": "ns/iter",
            "extra": "iterations: 23132\ncpu: 36179.99308317471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37142.40680302424,
            "unit": "ns/iter",
            "extra": "iterations: 22490\ncpu: 37141.26278345932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77327.63543896968,
            "unit": "ns/iter",
            "extra": "iterations: 11208\ncpu: 77323.9293361887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 603591.9189999958,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603541.9000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 591356.4255608044,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 591325.9007477865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 593260.8428961996,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 593237.3633879772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 589520.7418256189,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 589486.8528610372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 348697.7837837551,
            "unit": "ns/iter",
            "extra": "iterations: 2516\ncpu: 348679.45151033596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 583752.7186667254,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 583723.0666666689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2556083.5123969535,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2555965.5647382955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1134649.5388291888,
            "unit": "ns/iter",
            "extra": "iterations: 837\ncpu: 1134567.1445639215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5409.90555999997,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5409.851000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28802.770463201974,
            "unit": "ns/iter",
            "extra": "iterations: 28087\ncpu: 28802.549222060064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23296.15208214739,
            "unit": "ns/iter",
            "extra": "iterations: 35060\ncpu: 23296.038220193917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 21909.86852654044,
            "unit": "ns/iter",
            "extra": "iterations: 37171\ncpu: 21909.563907347227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22524.78314002843,
            "unit": "ns/iter",
            "extra": "iterations: 35350\ncpu: 22523.734087694458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63023.55375647343,
            "unit": "ns/iter",
            "extra": "iterations: 13896\ncpu: 63023.81980425981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 581943.6559999076,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581898.4 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 576570.5287508483,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 576567.1513549249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 576980.8015820186,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 576955.3065260368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 573248.9655856674,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 573215.089344807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 335878.65724110766,
            "unit": "ns/iter",
            "extra": "iterations: 2617\ncpu: 335862.5907527714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 563813.3415265685,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 563792.820181113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 537.3435649738367,
            "unit": "ns/iter",
            "extra": "iterations: 1303701\ncpu: 537.3459865413928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3224.8565597935235,
            "unit": "ns/iter",
            "extra": "iterations: 215365\ncpu: 3224.8006872054366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2607.510819500282,
            "unit": "ns/iter",
            "extra": "iterations: 267480\ncpu: 2607.4173770001466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2400.0057173860373,
            "unit": "ns/iter",
            "extra": "iterations: 291217\ncpu: 2399.949522177627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1994.9093499107928,
            "unit": "ns/iter",
            "extra": "iterations: 350998\ncpu: 1994.9184895640376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17021.628839880173,
            "unit": "ns/iter",
            "extra": "iterations: 41082\ncpu: 17021.32077308808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30899.007599854514,
            "unit": "ns/iter",
            "extra": "iterations: 22632\ncpu: 30898.79816189459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7317.773357267917,
            "unit": "ns/iter",
            "extra": "iterations: 95816\ncpu: 7317.261208983896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7255.983400600333,
            "unit": "ns/iter",
            "extra": "iterations: 96630\ncpu: 7255.638000620836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7321.42002532807,
            "unit": "ns/iter",
            "extra": "iterations: 95549\ncpu: 7321.05411882908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14706.985517009258,
            "unit": "ns/iter",
            "extra": "iterations: 47504\ncpu: 14706.767851128428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13275.324149016405,
            "unit": "ns/iter",
            "extra": "iterations: 52880\ncpu: 13275.236384266223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5233.485055858526,
            "unit": "ns/iter",
            "extra": "iterations: 133999\ncpu: 5233.150993664177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25539.05083376511,
            "unit": "ns/iter",
            "extra": "iterations: 27226\ncpu: 25537.67354734415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20637.23759522287,
            "unit": "ns/iter",
            "extra": "iterations: 33999\ncpu: 20635.389276155027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20633.525901695215,
            "unit": "ns/iter",
            "extra": "iterations: 33936\ncpu: 20632.16937765214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21198.227019162026,
            "unit": "ns/iter",
            "extra": "iterations: 32984\ncpu: 21196.47707979617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49782.855355749685,
            "unit": "ns/iter",
            "extra": "iterations: 14069\ncpu: 49781.53386878926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155426.8405153066,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 155415.32652154565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131232.9218808645,
            "unit": "ns/iter",
            "extra": "iterations: 5338\ncpu: 131225.40277257375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130715.53076492195,
            "unit": "ns/iter",
            "extra": "iterations: 5347\ncpu: 130704.76902936191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132639.40347890908,
            "unit": "ns/iter",
            "extra": "iterations: 5289\ncpu: 132634.2219701285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82430.54684197882,
            "unit": "ns/iter",
            "extra": "iterations: 8518\ncpu: 82429.72528762628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130681.4993481098,
            "unit": "ns/iter",
            "extra": "iterations: 5369\ncpu: 130671.13056434953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5146.765997059509,
            "unit": "ns/iter",
            "extra": "iterations: 135353\ncpu: 5146.5316616551345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26752.024475660637,
            "unit": "ns/iter",
            "extra": "iterations: 26271\ncpu: 26749.41570553129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22390.7672816973,
            "unit": "ns/iter",
            "extra": "iterations: 31218\ncpu: 22389.522070600415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21873.277056543408,
            "unit": "ns/iter",
            "extra": "iterations: 32275\ncpu: 21871.302865995545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22573.045024311188,
            "unit": "ns/iter",
            "extra": "iterations: 30850\ncpu: 22571.776337114785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49116.13381568375,
            "unit": "ns/iter",
            "extra": "iterations: 14236\ncpu: 49112.08204551851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152636.9601740941,
            "unit": "ns/iter",
            "extra": "iterations: 4595\ncpu: 152630.72905331774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127662.25545853293,
            "unit": "ns/iter",
            "extra": "iterations: 5496\ncpu: 127651.6921397401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129551.80334572466,
            "unit": "ns/iter",
            "extra": "iterations: 5380\ncpu: 129547.24907063396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129860.22187211951,
            "unit": "ns/iter",
            "extra": "iterations: 5395\ncpu: 129857.84986098293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82930.99260672505,
            "unit": "ns/iter",
            "extra": "iterations: 8386\ncpu: 82926.8542809456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129585.60859144329,
            "unit": "ns/iter",
            "extra": "iterations: 5424\ncpu: 129577.93141593048 ns\nthreads: 1"
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
        "date": 1705953595380,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1353.6619261356466,
            "unit": "ns/iter",
            "extra": "iterations: 518437\ncpu: 1353.599376587705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15943.776058130517,
            "unit": "ns/iter",
            "extra": "iterations: 51884\ncpu: 15942.616220800246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33847.59395890771,
            "unit": "ns/iter",
            "extra": "iterations: 24532\ncpu: 33845.54051850644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50604.71657849471,
            "unit": "ns/iter",
            "extra": "iterations: 16823\ncpu: 50601.058075254085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55289.90059999615,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55288.68000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70017.05907884697,
            "unit": "ns/iter",
            "extra": "iterations: 12441\ncpu: 70012.0729844868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83908.18449403129,
            "unit": "ns/iter",
            "extra": "iterations: 10396\ncpu: 83902.96267795311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96468.10963828689,
            "unit": "ns/iter",
            "extra": "iterations: 8902\ncpu: 96463.1094136149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112734.33146359911,
            "unit": "ns/iter",
            "extra": "iterations: 7666\ncpu: 112730.18523349863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1166.0836471878793,
            "unit": "ns/iter",
            "extra": "iterations: 600331\ncpu: 1166.048563209296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 955.7446746975052,
            "unit": "ns/iter",
            "extra": "iterations: 733010\ncpu: 955.6989672719352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 932.6052328985055,
            "unit": "ns/iter",
            "extra": "iterations: 747922\ncpu: 932.5481801578244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 948.4527235485269,
            "unit": "ns/iter",
            "extra": "iterations: 738687\ncpu: 948.3618907602278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1879.9578983963634,
            "unit": "ns/iter",
            "extra": "iterations: 371031\ncpu: 1879.8480450420575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5059.292239999422,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5059.193000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27240.00541987435,
            "unit": "ns/iter",
            "extra": "iterations: 30259\ncpu: 27238.676096368024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 21941.91404248487,
            "unit": "ns/iter",
            "extra": "iterations: 37472\ncpu: 21940.699722459416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 20689.03366769107,
            "unit": "ns/iter",
            "extra": "iterations: 40276\ncpu: 20688.21382461024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 21560.29074318966,
            "unit": "ns/iter",
            "extra": "iterations: 37810\ncpu: 21559.653530811975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64906.44698229213,
            "unit": "ns/iter",
            "extra": "iterations: 13835\ncpu: 64902.0744488617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 559189.755000034,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559146.3999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 558969.8825806702,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 558948.9677419353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 559279.5354838868,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 559235.6129032266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 562865.200129942,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 562833.7881741384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 329549.27383212687,
            "unit": "ns/iter",
            "extra": "iterations: 2633\ncpu: 329531.44701861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 565211.5051746797,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 565165.1358344133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2390388.894601718,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2390205.655526994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1109301.8333333742,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1109259.5923261396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3342084.7589928866,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3341860.0719424537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8620.89376575204,
            "unit": "ns/iter",
            "extra": "iterations: 96419\ncpu: 8620.117404246072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46359.36177683407,
            "unit": "ns/iter",
            "extra": "iterations: 17942\ncpu: 46356.73837922186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36990.78410258943,
            "unit": "ns/iter",
            "extra": "iterations: 22381\ncpu: 36988.624279522875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36430.862197878334,
            "unit": "ns/iter",
            "extra": "iterations: 23004\ncpu: 36428.24726134603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36616.916017775286,
            "unit": "ns/iter",
            "extra": "iterations: 22731\ncpu: 36615.66143152521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78277.25915238522,
            "unit": "ns/iter",
            "extra": "iterations: 11090\ncpu: 78273.4715960319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 606923.4599999618,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606894.0999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 603287.827823633,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 603251.7906336075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 599257.7749483939,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 599215.3475567789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 591699.9025395301,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 591661.0157858597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 348327.3358565511,
            "unit": "ns/iter",
            "extra": "iterations: 2510\ncpu: 348311.71314741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 585590.1384615343,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 585550.1672240791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2557674.0969530484,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2557461.772853187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1119887.8447653886,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 1119797.352587237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5476.534069999844,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5475.911999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29034.33265654862,
            "unit": "ns/iter",
            "extra": "iterations: 28074\ncpu: 29032.186364607885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23026.700203621578,
            "unit": "ns/iter",
            "extra": "iterations: 35851\ncpu: 23024.710607793393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 21958.069592089898,
            "unit": "ns/iter",
            "extra": "iterations: 37533\ncpu: 21956.726081048706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23198.958598816072,
            "unit": "ns/iter",
            "extra": "iterations: 35313\ncpu: 23197.006768045918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63474.69581003902,
            "unit": "ns/iter",
            "extra": "iterations: 13771\ncpu: 63470.07479485909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 573008.5019999933,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572990.8999999936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 577338.2893869131,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 577296.5721819387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 573696.4107965834,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 573662.2119815644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 575422.9279161335,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 575398.6238532106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 338096.7506733454,
            "unit": "ns/iter",
            "extra": "iterations: 2599\ncpu: 338087.53366679495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 566289.7352368819,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 566259.8312783921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 530.7410837442986,
            "unit": "ns/iter",
            "extra": "iterations: 1315827\ncpu: 530.7273676554697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3271.039281076998,
            "unit": "ns/iter",
            "extra": "iterations: 214098\ncpu: 3270.949284906908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2523.7074798367507,
            "unit": "ns/iter",
            "extra": "iterations: 275875\ncpu: 2523.669053013138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2410.7591646737937,
            "unit": "ns/iter",
            "extra": "iterations: 289372\ncpu: 2410.677259721061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2006.2968069039318,
            "unit": "ns/iter",
            "extra": "iterations: 346936\ncpu: 2006.1189960107981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17387.500708196963,
            "unit": "ns/iter",
            "extra": "iterations: 40243\ncpu: 17385.925502571907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30719.2677137573,
            "unit": "ns/iter",
            "extra": "iterations: 22666\ncpu: 30717.096091061838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7399.213799868195,
            "unit": "ns/iter",
            "extra": "iterations: 94827\ncpu: 7398.734537631653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7239.691043771335,
            "unit": "ns/iter",
            "extra": "iterations: 96525\ncpu: 7239.216783216774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7280.869212950374,
            "unit": "ns/iter",
            "extra": "iterations: 96271\ncpu: 7280.386616945863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14692.58498455561,
            "unit": "ns/iter",
            "extra": "iterations: 47591\ncpu: 14691.113866066931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13938.034552762861,
            "unit": "ns/iter",
            "extra": "iterations: 50242\ncpu: 13937.12829903259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5190.474108238592,
            "unit": "ns/iter",
            "extra": "iterations: 135294\ncpu: 5190.154774047599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25816.39414522524,
            "unit": "ns/iter",
            "extra": "iterations: 27089\ncpu: 25815.618885894608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20900.11840262074,
            "unit": "ns/iter",
            "extra": "iterations: 33555\ncpu: 20899.317538369836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20655.617800117092,
            "unit": "ns/iter",
            "extra": "iterations: 33820\ncpu: 20655.487876995907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21188.184935239995,
            "unit": "ns/iter",
            "extra": "iterations: 33044\ncpu: 21187.416777630002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50254.90438904911,
            "unit": "ns/iter",
            "extra": "iterations: 13921\ncpu: 50250.140076144475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155238.35603372243,
            "unit": "ns/iter",
            "extra": "iterations: 4508\ncpu: 155226.5084294595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131495.57776942354,
            "unit": "ns/iter",
            "extra": "iterations: 5317\ncpu: 131484.01354147078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130895.2279356692,
            "unit": "ns/iter",
            "extra": "iterations: 5348\ncpu: 130887.34106208135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131832.42202008897,
            "unit": "ns/iter",
            "extra": "iterations: 5277\ncpu: 131827.72408565355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83577.69692251734,
            "unit": "ns/iter",
            "extra": "iterations: 8351\ncpu: 83572.15902287139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132007.1705016954,
            "unit": "ns/iter",
            "extra": "iterations: 5302\ncpu: 131997.09543568385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5086.634282010886,
            "unit": "ns/iter",
            "extra": "iterations: 137349\ncpu: 5086.203030236843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26764.189157137032,
            "unit": "ns/iter",
            "extra": "iterations: 26137\ncpu: 26762.07674943562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21232.489736786945,
            "unit": "ns/iter",
            "extra": "iterations: 32787\ncpu: 21230.554793058112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21356.615483161564,
            "unit": "ns/iter",
            "extra": "iterations: 32784\ncpu: 21354.87127867225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21271.57910167818,
            "unit": "ns/iter",
            "extra": "iterations: 33084\ncpu: 21269.553258372824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50655.0139950963,
            "unit": "ns/iter",
            "extra": "iterations: 13862\ncpu: 50654.15524455289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155316.22083981434,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 155313.44145745382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128341.30838377535,
            "unit": "ns/iter",
            "extra": "iterations: 5451\ncpu: 128333.0948449812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128511.83238791667,
            "unit": "ns/iter",
            "extra": "iterations: 5465\ncpu: 128501.48215919534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127867.16794871459,
            "unit": "ns/iter",
            "extra": "iterations: 5460\ncpu: 127855.69597069795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 84029.66698736933,
            "unit": "ns/iter",
            "extra": "iterations: 8315\ncpu: 84022.45339747415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130343.53488371358,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 130338.17674418482 ns\nthreads: 1"
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
        "date": 1705955065127,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1360.4065463807287,
            "unit": "ns/iter",
            "extra": "iterations: 514330\ncpu: 1360.3713569109327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16143.97751764757,
            "unit": "ns/iter",
            "extra": "iterations: 50573\ncpu: 16143.82971150614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33755.874938695386,
            "unit": "ns/iter",
            "extra": "iterations: 24468\ncpu: 33755.402975314704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50296.73005043238,
            "unit": "ns/iter",
            "extra": "iterations: 16855\ncpu: 50294.962919015146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56377.02490000152,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56376.26999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70068.73734126147,
            "unit": "ns/iter",
            "extra": "iterations: 12442\ncpu: 70063.14901141294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84636.4352689428,
            "unit": "ns/iter",
            "extra": "iterations: 10281\ncpu: 84630.15270888044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97565.93333333268,
            "unit": "ns/iter",
            "extra": "iterations: 8895\ncpu: 97560.82068577853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114488.1455120612,
            "unit": "ns/iter",
            "extra": "iterations: 7587\ncpu: 114476.89468828251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1177.9056966735045,
            "unit": "ns/iter",
            "extra": "iterations: 592609\ncpu: 1177.8310825519022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 953.3880642972165,
            "unit": "ns/iter",
            "extra": "iterations: 730732\ncpu: 953.3549919806447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 966.7548894169529,
            "unit": "ns/iter",
            "extra": "iterations: 722172\ncpu: 966.7224705471817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 980.674962812686,
            "unit": "ns/iter",
            "extra": "iterations: 711937\ncpu: 980.6197739406715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1854.9480324357528,
            "unit": "ns/iter",
            "extra": "iterations: 375388\ncpu: 1854.874156872356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5236.4632399996935,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5236.33199999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 28786.742218001284,
            "unit": "ns/iter",
            "extra": "iterations: 28431\ncpu: 28785.150012310532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23241.335183708336,
            "unit": "ns/iter",
            "extra": "iterations: 32606\ncpu: 23240.560019628312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22306.840381843682,
            "unit": "ns/iter",
            "extra": "iterations: 36769\ncpu: 22305.472000870264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22711.85257950492,
            "unit": "ns/iter",
            "extra": "iterations: 35375\ncpu: 22710.708127208418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 63447.47620000248,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 63442.969999999834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 569263.5789999941,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569220.2999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 571389.9211886417,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 571337.7906976732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 570018.1424853884,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 569987.7033181505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 568078.6953381236,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 568052.199606042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 332684.59870427765,
            "unit": "ns/iter",
            "extra": "iterations: 2624\ncpu: 332662.46189024404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 565679.7001946889,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 565658.6632057114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2397947.082901621,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2397781.6062176223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1094754.2372479623,
            "unit": "ns/iter",
            "extra": "iterations: 843\ncpu: 1094715.7769869512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3356962.0652173995,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3356676.8115942036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8585.364577483968,
            "unit": "ns/iter",
            "extra": "iterations: 97949\ncpu: 8584.861509561097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46792.96609977858,
            "unit": "ns/iter",
            "extra": "iterations: 17699\ncpu: 46791.445844398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36448.72552195009,
            "unit": "ns/iter",
            "extra": "iterations: 22847\ncpu: 36445.94476298851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36031.15181673775,
            "unit": "ns/iter",
            "extra": "iterations: 23311\ncpu: 36030.47488310226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 35899.37280300014,
            "unit": "ns/iter",
            "extra": "iterations: 22929\ncpu: 35896.61563958304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77275.35121214569,
            "unit": "ns/iter",
            "extra": "iterations: 11261\ncpu: 77275.32190746845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 602171.2780000143,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602114.2999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 595313.632373115,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 595298.3539094642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 589119.5675492235,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 589080.6517311604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 610600.5645706623,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 610558.6883029056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 353148.45286060026,
            "unit": "ns/iter",
            "extra": "iterations: 2482\ncpu: 353142.1434327157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 588296.9600812084,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 588269.4181326122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2569071.354570619,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2569010.249307473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1101500.644287368,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 1101467.3733804487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5609.347000000184,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5609.245999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28038.91623294372,
            "unit": "ns/iter",
            "extra": "iterations: 28436\ncpu: 28037.769025179445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23203.85049349297,
            "unit": "ns/iter",
            "extra": "iterations: 35664\ncpu: 23202.902086137226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22283.16424589938,
            "unit": "ns/iter",
            "extra": "iterations: 37316\ncpu: 22281.771894093654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22906.14771270344,
            "unit": "ns/iter",
            "extra": "iterations: 36659\ncpu: 22905.041054038466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62697.20802366408,
            "unit": "ns/iter",
            "extra": "iterations: 13859\ncpu: 62693.448300743046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 577139.9589999646,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577138.4999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 581080.2370517767,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 581054.6480743708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 576384.9322813812,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 576379.9474030244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 574439.9591029164,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 574424.9340369382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 336179.7207792638,
            "unit": "ns/iter",
            "extra": "iterations: 2618\ncpu: 336170.0152788374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 569154.1148825209,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 569146.8668407347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 541.7068996483424,
            "unit": "ns/iter",
            "extra": "iterations: 1286167\ncpu: 541.6803572164414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3225.091185180255,
            "unit": "ns/iter",
            "extra": "iterations: 224565\ncpu: 3225.0493175695256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2506.8246473038794,
            "unit": "ns/iter",
            "extra": "iterations: 278781\ncpu: 2506.736829267421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2576.876677069361,
            "unit": "ns/iter",
            "extra": "iterations: 297990\ncpu: 2576.8512366186783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1990.0528463480764,
            "unit": "ns/iter",
            "extra": "iterations: 352153\ncpu: 1989.9776517593336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17396.90442763379,
            "unit": "ns/iter",
            "extra": "iterations: 40315\ncpu: 17396.884534292374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30862.833273717446,
            "unit": "ns/iter",
            "extra": "iterations: 25161\ncpu: 30860.772624299767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7338.38492508724,
            "unit": "ns/iter",
            "extra": "iterations: 95377\ncpu: 7338.001824339309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7429.705711741451,
            "unit": "ns/iter",
            "extra": "iterations: 96538\ncpu: 7426.1099256251655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7199.126409275692,
            "unit": "ns/iter",
            "extra": "iterations: 96947\ncpu: 7198.84163512034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13882.374052633915,
            "unit": "ns/iter",
            "extra": "iterations: 50271\ncpu: 13881.691233514295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13819.281639363526,
            "unit": "ns/iter",
            "extra": "iterations: 50483\ncpu: 13818.723134520618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5179.998136645272,
            "unit": "ns/iter",
            "extra": "iterations: 135240\ncpu: 5179.679828453098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25745.21970837749,
            "unit": "ns/iter",
            "extra": "iterations: 27227\ncpu: 25743.98942226481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20567.44362205388,
            "unit": "ns/iter",
            "extra": "iterations: 34047\ncpu: 20566.86639057779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20726.71404429472,
            "unit": "ns/iter",
            "extra": "iterations: 33729\ncpu: 20726.32452785444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21152.349570635204,
            "unit": "ns/iter",
            "extra": "iterations: 33072\ncpu: 21152.316158683934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50432.41379999017,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50430.830000000526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 153791.54991204003,
            "unit": "ns/iter",
            "extra": "iterations: 4548\ncpu: 153784.87247141596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130419.87813952335,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 130419.64651162564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129004.08354946588,
            "unit": "ns/iter",
            "extra": "iterations: 5398\ncpu: 129000.9633197464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130450.6512062777,
            "unit": "ns/iter",
            "extra": "iterations: 5347\ncpu: 130447.57808116698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82647.10335426853,
            "unit": "ns/iter",
            "extra": "iterations: 8437\ncpu: 82644.22187981366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129719.40229886134,
            "unit": "ns/iter",
            "extra": "iterations: 5394\ncpu: 129716.6295884316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5043.0469851445305,
            "unit": "ns/iter",
            "extra": "iterations: 138597\ncpu: 5042.814779540606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25370.259412557112,
            "unit": "ns/iter",
            "extra": "iterations: 27543\ncpu: 25368.347674545224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20954.111597506737,
            "unit": "ns/iter",
            "extra": "iterations: 33352\ncpu: 20953.32513792273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21718.098814108467,
            "unit": "ns/iter",
            "extra": "iterations: 32212\ncpu: 21716.40382466149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22380.855475617853,
            "unit": "ns/iter",
            "extra": "iterations: 31275\ncpu: 22379.92965627499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51116.607396038584,
            "unit": "ns/iter",
            "extra": "iterations: 13683\ncpu: 51113.98085215201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156145.12927756284,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 156137.79915007754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129376.55995560458,
            "unit": "ns/iter",
            "extra": "iterations: 5404\ncpu: 129370.17024426241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129129.44995374829,
            "unit": "ns/iter",
            "extra": "iterations: 5405\ncpu: 129119.74098057323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129223.00109249813,
            "unit": "ns/iter",
            "extra": "iterations: 5492\ncpu: 129216.29643117286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82464.1073594097,
            "unit": "ns/iter",
            "extra": "iterations: 8411\ncpu: 82461.33634526248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130478.61193751608,
            "unit": "ns/iter",
            "extra": "iterations: 5378\ncpu: 130477.2592041656 ns\nthreads: 1"
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
        "date": 1705957158060,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1408.0477187951021,
            "unit": "ns/iter",
            "extra": "iterations: 457346\ncpu: 1407.9690212661749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16255.064927627544,
            "unit": "ns/iter",
            "extra": "iterations: 50641\ncpu: 16254.228786951287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34792.87988464932,
            "unit": "ns/iter",
            "extra": "iterations: 23927\ncpu: 34789.94441426003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51790.10229007768,
            "unit": "ns/iter",
            "extra": "iterations: 16375\ncpu: 51787.83511450383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56688.42059999406,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56685.629999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71576.59988546988,
            "unit": "ns/iter",
            "extra": "iterations: 12224\ncpu: 71573.06119109948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84327.10612126018,
            "unit": "ns/iter",
            "extra": "iterations: 10243\ncpu: 84319.71102216147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97264.55599148729,
            "unit": "ns/iter",
            "extra": "iterations: 8921\ncpu: 97256.74251765496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113341.07890625944,
            "unit": "ns/iter",
            "extra": "iterations: 7680\ncpu: 113334.76562500009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1214.8929264743017,
            "unit": "ns/iter",
            "extra": "iterations: 576940\ncpu: 1214.8485111103394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 962.7195221574715,
            "unit": "ns/iter",
            "extra": "iterations: 734468\ncpu: 962.6894568585707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 967.9042838399058,
            "unit": "ns/iter",
            "extra": "iterations: 723253\ncpu: 967.8535726778881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 965.6055343156227,
            "unit": "ns/iter",
            "extra": "iterations: 725835\ncpu: 965.5702742358816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1848.5056524470685,
            "unit": "ns/iter",
            "extra": "iterations: 378774\ncpu: 1848.453167324051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5346.934180000744,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5346.697999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 28716.077206536378,
            "unit": "ns/iter",
            "extra": "iterations: 28223\ncpu: 28714.792899408254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22042.092318005783,
            "unit": "ns/iter",
            "extra": "iterations: 37295\ncpu: 22041.278991821942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 20116.230825614046,
            "unit": "ns/iter",
            "extra": "iterations: 40927\ncpu: 20115.83306863439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22861.09688329568,
            "unit": "ns/iter",
            "extra": "iterations: 35775\ncpu: 22860.12299091547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64710.5719185546,
            "unit": "ns/iter",
            "extra": "iterations: 13703\ncpu: 64707.89608115012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 573983.2279999746,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573953.5000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 561700.1526965115,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 561679.9870045481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 561268.4629994032,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 561252.3248199085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 563765.9231270558,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 563740.1954397392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 333126.8696818759,
            "unit": "ns/iter",
            "extra": "iterations: 2609\ncpu: 333123.2656190112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 563202.6003873994,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 563187.282117496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2395985.0206717867,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2395850.904392765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1093173.3440095342,
            "unit": "ns/iter",
            "extra": "iterations: 843\ncpu: 1093115.6583629893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3326607.5770607,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3326537.2759856633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8542.664260873411,
            "unit": "ns/iter",
            "extra": "iterations: 99205\ncpu: 8542.445441258016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46610.454916428105,
            "unit": "ns/iter",
            "extra": "iterations: 17889\ncpu: 46607.02107440315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36999.77940980091,
            "unit": "ns/iter",
            "extra": "iterations: 22467\ncpu: 36998.59349267825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36003.711636336026,
            "unit": "ns/iter",
            "extra": "iterations: 23186\ncpu: 36001.479340981794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36507.63902847698,
            "unit": "ns/iter",
            "extra": "iterations: 22686\ncpu: 36506.82799964746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78013.38975141068,
            "unit": "ns/iter",
            "extra": "iterations: 11143\ncpu: 78010.30243202014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 595081.5130000819,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595068.6000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 596943.9498970874,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 596913.1777625226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 594388.65044552,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 594365.0445510593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 593682.6719070723,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 593671.3602187257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 343005.5039588417,
            "unit": "ns/iter",
            "extra": "iterations: 2526\ncpu: 342989.62787015137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 581391.9417604094,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 581368.4976836508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2554989.054944966,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2554832.4175824085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1104622.7648456441,
            "unit": "ns/iter",
            "extra": "iterations: 842\ncpu: 1104601.9002375295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5401.634070000227,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5401.516000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28783.833986883048,
            "unit": "ns/iter",
            "extra": "iterations: 28817\ncpu: 28782.545025505704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23295.435454700506,
            "unit": "ns/iter",
            "extra": "iterations: 35386\ncpu: 23294.754987848224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22107.63704778772,
            "unit": "ns/iter",
            "extra": "iterations: 37206\ncpu: 22107.38859323764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22755.593219388396,
            "unit": "ns/iter",
            "extra": "iterations: 35631\ncpu: 22755.131767281197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63206.14419542674,
            "unit": "ns/iter",
            "extra": "iterations: 13877\ncpu: 63203.696764430424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 573672.299000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573659.1000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 577336.9621765409,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 577331.0550763104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 574682.9888158351,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 574667.8289473729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 571955.1114753947,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 571941.9016393427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 334011.15209128533,
            "unit": "ns/iter",
            "extra": "iterations: 2630\ncpu: 334002.7376425845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 562355.4284794015,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 562337.951030928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 536.4076813542636,
            "unit": "ns/iter",
            "extra": "iterations: 1307634\ncpu: 536.3903049324175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3299.384748929168,
            "unit": "ns/iter",
            "extra": "iterations: 211972\ncpu: 3299.3201932330876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2449.2969079743702,
            "unit": "ns/iter",
            "extra": "iterations: 285735\ncpu: 2449.270477890354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2512.797119127671,
            "unit": "ns/iter",
            "extra": "iterations: 278735\ncpu: 2512.746874271252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1986.851614692805,
            "unit": "ns/iter",
            "extra": "iterations: 353256\ncpu: 1986.7656883393447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17517.00892901962,
            "unit": "ns/iter",
            "extra": "iterations: 39982\ncpu: 17516.387374318427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30975.167435167783,
            "unit": "ns/iter",
            "extra": "iterations: 23639\ncpu: 30974.542070307143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7333.377224012496,
            "unit": "ns/iter",
            "extra": "iterations: 95267\ncpu: 7333.228715084901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7293.564403371698,
            "unit": "ns/iter",
            "extra": "iterations: 95981\ncpu: 7293.32576239058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7341.698273511658,
            "unit": "ns/iter",
            "extra": "iterations: 95338\ncpu: 7341.46720090626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15015.6596255691,
            "unit": "ns/iter",
            "extra": "iterations: 46631\ncpu: 15015.348158950144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13886.569860239837,
            "unit": "ns/iter",
            "extra": "iterations: 50372\ncpu: 13886.238386405319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5205.7874416536315,
            "unit": "ns/iter",
            "extra": "iterations: 134970\ncpu: 5205.636067274276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25575.367719429218,
            "unit": "ns/iter",
            "extra": "iterations: 27230\ncpu: 25574.524421593625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20589.743577671947,
            "unit": "ns/iter",
            "extra": "iterations: 33983\ncpu: 20589.053350204616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20660.44450345413,
            "unit": "ns/iter",
            "extra": "iterations: 33894\ncpu: 20660.028323596933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21151.528204198556,
            "unit": "ns/iter",
            "extra": "iterations: 33027\ncpu: 21151.300451146173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49850.14112874175,
            "unit": "ns/iter",
            "extra": "iterations: 14051\ncpu: 49848.00370080461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155861.1517103452,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 155858.01865837345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131289.0283248975,
            "unit": "ns/iter",
            "extra": "iterations: 5331\ncpu: 131285.81879572282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129913.50491925259,
            "unit": "ns/iter",
            "extra": "iterations: 5387\ncpu: 129912.10321143294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131025.2405466149,
            "unit": "ns/iter",
            "extra": "iterations: 5342\ncpu: 131020.02995133007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84820.49610730594,
            "unit": "ns/iter",
            "extra": "iterations: 8349\ncpu: 84817.03197987762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130791.04621691613,
            "unit": "ns/iter",
            "extra": "iterations: 5366\ncpu: 130786.54491241385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5144.797218085941,
            "unit": "ns/iter",
            "extra": "iterations: 136309\ncpu: 5144.659560263827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26303.96166302733,
            "unit": "ns/iter",
            "extra": "iterations: 26554\ncpu: 26303.314001656636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21847.437978562102,
            "unit": "ns/iter",
            "extra": "iterations: 31997\ncpu: 21846.79813732545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21893.104737137215,
            "unit": "ns/iter",
            "extra": "iterations: 31918\ncpu: 21892.286484115484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22417.45726838207,
            "unit": "ns/iter",
            "extra": "iterations: 31183\ncpu: 22416.890613475138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49539.03540262288,
            "unit": "ns/iter",
            "extra": "iterations: 14095\ncpu: 49536.94217807741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152417.39551588884,
            "unit": "ns/iter",
            "extra": "iterations: 4594\ncpu: 152409.86068785444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128028.36895162486,
            "unit": "ns/iter",
            "extra": "iterations: 5456\ncpu: 128022.61730205441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128611.47889133754,
            "unit": "ns/iter",
            "extra": "iterations: 5448\ncpu: 128603.37738619745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128690.39177529457,
            "unit": "ns/iter",
            "extra": "iterations: 5447\ncpu: 128688.96640352457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83354.00773810469,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 83350.90476190574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129212.95859402964,
            "unit": "ns/iter",
            "extra": "iterations: 5434\ncpu: 129210.4895104885 ns\nthreads: 1"
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
        "date": 1705958888840,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1364.352967691939,
            "unit": "ns/iter",
            "extra": "iterations: 510245\ncpu: 1364.3245891679487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16270.945291206384,
            "unit": "ns/iter",
            "extra": "iterations: 49535\ncpu: 16269.82335722217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33887.28203761979,
            "unit": "ns/iter",
            "extra": "iterations: 24401\ncpu: 33886.62759722961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50700.69689042498,
            "unit": "ns/iter",
            "extra": "iterations: 16819\ncpu: 50697.79416136512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55599.36669999389,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55598.04999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69739.07591206364,
            "unit": "ns/iter",
            "extra": "iterations: 12554\ncpu: 69736.88067548195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83180.89627275134,
            "unit": "ns/iter",
            "extra": "iterations: 10383\ncpu: 83175.93181161518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96823.81587160268,
            "unit": "ns/iter",
            "extra": "iterations: 8972\ncpu: 96818.91440035666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112971.45972367525,
            "unit": "ns/iter",
            "extra": "iterations: 7672\ncpu: 112964.83315954119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1180.028270925713,
            "unit": "ns/iter",
            "extra": "iterations: 590819\ncpu: 1180.0194306547378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 966.55543286524,
            "unit": "ns/iter",
            "extra": "iterations: 724498\ncpu: 966.4687825225197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 969.039563360505,
            "unit": "ns/iter",
            "extra": "iterations: 722335\ncpu: 969.0030249122624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 974.2859934289625,
            "unit": "ns/iter",
            "extra": "iterations: 716478\ncpu: 974.2361942725386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1882.6476838828798,
            "unit": "ns/iter",
            "extra": "iterations: 373988\ncpu: 1882.6419564264083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5366.533530000197,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5366.532999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29132.1833439558,
            "unit": "ns/iter",
            "extra": "iterations: 28242\ncpu: 29130.539621839845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23104.17803300225,
            "unit": "ns/iter",
            "extra": "iterations: 35089\ncpu: 23103.54812049357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22392.611094495343,
            "unit": "ns/iter",
            "extra": "iterations: 36775\ncpu: 22391.27668252887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22860.82089256266,
            "unit": "ns/iter",
            "extra": "iterations: 35314\ncpu: 22860.409469332248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65154.759229881,
            "unit": "ns/iter",
            "extra": "iterations: 13868\ncpu: 65150.25237957875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 557809.175999978,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557772.700000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 559534.5524790962,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 559493.9471989688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 562241.0366324249,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 562223.1362467873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 561057.1242793158,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 561026.4573991043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 334613.6484105467,
            "unit": "ns/iter",
            "extra": "iterations: 2611\ncpu: 334584.1440061283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 569624.5893782397,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 569590.9974093279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2401729.888888863,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2401581.653746771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1089388.6818714545,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 1089319.298245613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3352024.4548735027,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3351851.263537913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8614.118643024063,
            "unit": "ns/iter",
            "extra": "iterations: 97452\ncpu: 8613.561548249405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46648.6806356786,
            "unit": "ns/iter",
            "extra": "iterations: 17682\ncpu: 46643.32089130174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36894.92351695876,
            "unit": "ns/iter",
            "extra": "iterations: 22201\ncpu: 36892.26160983725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 35934.708526049966,
            "unit": "ns/iter",
            "extra": "iterations: 22918\ncpu: 35933.104982982775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36148.43071588636,
            "unit": "ns/iter",
            "extra": "iterations: 22783\ncpu: 36146.30206733098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77670.68026902554,
            "unit": "ns/iter",
            "extra": "iterations: 11003\ncpu: 77665.40034535997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 596952.6589999532,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 596895.6000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 595302.3810829448,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 595272.7210418114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 589458.7530612663,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 589430.4761904767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 586084.5211835941,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 586034.3644922692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 349331.0875447738,
            "unit": "ns/iter",
            "extra": "iterations: 2513\ncpu: 349308.7146836454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 580438.8686131623,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 580398.0756469792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2582874.2479108875,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2582716.4345403896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1149006.0914709996,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1148926.2051915934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5412.581669999099,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5412.393000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28628.721462769237,
            "unit": "ns/iter",
            "extra": "iterations: 28822\ncpu: 28627.867601138085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 22860.80652693716,
            "unit": "ns/iter",
            "extra": "iterations: 35545\ncpu: 22860.388240258875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22015.7336281768,
            "unit": "ns/iter",
            "extra": "iterations: 37534\ncpu: 22015.56455480373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22944.966558912503,
            "unit": "ns/iter",
            "extra": "iterations: 35884\ncpu: 22944.443205885556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63168.53215609762,
            "unit": "ns/iter",
            "extra": "iterations: 13761\ncpu: 63167.28435433467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 579521.246000013,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579452.6999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 579792.3083553968,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 579782.0291777203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 577587.0666226791,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 577551.3192612131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 576563.5342555735,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 576519.6310935436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 338259.25921660155,
            "unit": "ns/iter",
            "extra": "iterations: 2604\ncpu: 338228.5714285721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567131.0291262168,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 567089.3851132662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 536.3806750672109,
            "unit": "ns/iter",
            "extra": "iterations: 1304522\ncpu: 536.3684935938243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3267.1913839471963,
            "unit": "ns/iter",
            "extra": "iterations: 214553\ncpu: 3266.992304931659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2632.37504663634,
            "unit": "ns/iter",
            "extra": "iterations: 265351\ncpu: 2632.352996596941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2583.9375068635923,
            "unit": "ns/iter",
            "extra": "iterations: 291392\ncpu: 2583.7696299143363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2039.3033259152835,
            "unit": "ns/iter",
            "extra": "iterations: 343304\ncpu: 2039.25238272786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17480.60610298167,
            "unit": "ns/iter",
            "extra": "iterations: 40046\ncpu: 17480.127852969003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30355.010817888207,
            "unit": "ns/iter",
            "extra": "iterations: 22925\ncpu: 30354.054525627504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7280.48225650205,
            "unit": "ns/iter",
            "extra": "iterations: 96007\ncpu: 7280.109783661646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7255.397818469246,
            "unit": "ns/iter",
            "extra": "iterations: 96446\ncpu: 7254.769508325852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7333.614232287428,
            "unit": "ns/iter",
            "extra": "iterations: 95459\ncpu: 7332.897893336462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14661.56552751365,
            "unit": "ns/iter",
            "extra": "iterations: 47667\ncpu: 14660.18629240377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13925.724944453254,
            "unit": "ns/iter",
            "extra": "iterations: 50408\ncpu: 13925.63283605754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5212.132015675892,
            "unit": "ns/iter",
            "extra": "iterations: 134734\ncpu: 5211.832202710567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25668.1787945598,
            "unit": "ns/iter",
            "extra": "iterations: 27210\ncpu: 25665.692760014674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20687.66115360707,
            "unit": "ns/iter",
            "extra": "iterations: 33859\ncpu: 20686.006674739278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20379.07496559201,
            "unit": "ns/iter",
            "extra": "iterations: 34149\ncpu: 20377.322908430706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21003.952022863567,
            "unit": "ns/iter",
            "extra": "iterations: 33245\ncpu: 21002.881636336526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49671.33420717187,
            "unit": "ns/iter",
            "extra": "iterations: 14114\ncpu: 49669.28581550294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154090.81759030602,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 154078.48328472063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131848.0686145179,
            "unit": "ns/iter",
            "extra": "iterations: 5305\ncpu: 131837.66258246888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129933.42634508769,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 129926.21521335884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130002.1793579698,
            "unit": "ns/iter",
            "extra": "iterations: 5358\ncpu: 129987.84994400865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82802.44995814623,
            "unit": "ns/iter",
            "extra": "iterations: 8363\ncpu: 82799.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130140.93302239646,
            "unit": "ns/iter",
            "extra": "iterations: 5360\ncpu: 130136.82835820848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5018.59922527026,
            "unit": "ns/iter",
            "extra": "iterations: 138629\ncpu: 5018.241493482565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 28460.195412841917,
            "unit": "ns/iter",
            "extra": "iterations: 26160\ncpu: 28459.40749235479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21071.771348617505,
            "unit": "ns/iter",
            "extra": "iterations: 33234\ncpu: 21071.122946380237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20909.230456608508,
            "unit": "ns/iter",
            "extra": "iterations: 33464\ncpu: 20907.901027970463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20671.94326954358,
            "unit": "ns/iter",
            "extra": "iterations: 33809\ncpu: 20671.22955426067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50637.62370000404,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50600.979999998686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152583.09191898233,
            "unit": "ns/iter",
            "extra": "iterations: 4591\ncpu: 152578.37072533037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129422.26575493967,
            "unit": "ns/iter",
            "extra": "iterations: 5411\ncpu: 129413.30622805456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129929.27333088731,
            "unit": "ns/iter",
            "extra": "iterations: 5422\ncpu: 129921.13611213607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128688.49737729375,
            "unit": "ns/iter",
            "extra": "iterations: 5338\ncpu: 128678.9808917199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83748.27034119768,
            "unit": "ns/iter",
            "extra": "iterations: 8382\ncpu: 83743.99904557443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129118.63829389791,
            "unit": "ns/iter",
            "extra": "iterations: 5369\ncpu: 129117.7127956801 ns\nthreads: 1"
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
        "date": 1705960423112,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1357.523018436227,
            "unit": "ns/iter",
            "extra": "iterations: 517672\ncpu: 1357.4900709329459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16127.832258319551,
            "unit": "ns/iter",
            "extra": "iterations: 50852\ncpu: 16127.650829859202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34298.98112272088,
            "unit": "ns/iter",
            "extra": "iterations: 24209\ncpu: 34296.87306373663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50971.322254510975,
            "unit": "ns/iter",
            "extra": "iterations: 16518\ncpu: 50970.79549582273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56759.096600001154,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56756.86999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71440.19956032927,
            "unit": "ns/iter",
            "extra": "iterations: 12282\ncpu: 71439.9853444064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84014.16475547233,
            "unit": "ns/iter",
            "extra": "iterations: 10203\ncpu: 84008.35048515146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98228.82232987575,
            "unit": "ns/iter",
            "extra": "iterations: 8876\ncpu: 98221.2933753943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114922.69404949303,
            "unit": "ns/iter",
            "extra": "iterations: 7596\ncpu: 114913.70458135867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1154.0937912792197,
            "unit": "ns/iter",
            "extra": "iterations: 604875\ncpu: 1154.00619962802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 958.3561208093104,
            "unit": "ns/iter",
            "extra": "iterations: 731235\ncpu: 958.2935718339529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 960.7200966302983,
            "unit": "ns/iter",
            "extra": "iterations: 730620\ncpu: 960.6744956338456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 968.7067207890246,
            "unit": "ns/iter",
            "extra": "iterations: 723546\ncpu: 968.6358572917261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1892.3130007489917,
            "unit": "ns/iter",
            "extra": "iterations: 371194\ncpu: 1892.1852185110731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5401.14696000046,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5400.498999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 28995.439392880864,
            "unit": "ns/iter",
            "extra": "iterations: 28660\ncpu: 28993.562456385207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23732.709400742184,
            "unit": "ns/iter",
            "extra": "iterations: 35327\ncpu: 23730.823449486248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22723.76353840898,
            "unit": "ns/iter",
            "extra": "iterations: 35824\ncpu: 22721.92105850821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23187.56493413651,
            "unit": "ns/iter",
            "extra": "iterations: 34997\ncpu: 23186.938880475453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64543.17070631997,
            "unit": "ns/iter",
            "extra": "iterations: 13450\ncpu: 64541.93308550195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 568061.4350000041,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568014.0000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 565436.4133247026,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 565425.9379042671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 577215.7032966928,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 577186.2960568841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 562459.8813998481,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 562433.5061568363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 332244.2472169127,
            "unit": "ns/iter",
            "extra": "iterations: 2605\ncpu: 332238.73320537526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 560654.022114719,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 560645.196959224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2394086.1564104427,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2393991.02564102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1073856.820601838,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1073831.8287037027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3345989.45519703,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3345866.666666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8466.909715505713,
            "unit": "ns/iter",
            "extra": "iterations: 100283\ncpu: 8466.345242962429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46879.84039634949,
            "unit": "ns/iter",
            "extra": "iterations: 17863\ncpu: 46876.610871634286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36404.375536854655,
            "unit": "ns/iter",
            "extra": "iterations: 22818\ncpu: 36403.93548952565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 35939.57248817187,
            "unit": "ns/iter",
            "extra": "iterations: 23459\ncpu: 35938.88912570873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36091.67681437455,
            "unit": "ns/iter",
            "extra": "iterations: 22928\ncpu: 36088.61217725049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78312.48200799755,
            "unit": "ns/iter",
            "extra": "iterations: 11255\ncpu: 78305.90848511817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 599232.532999963,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599154.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 587204.4573960509,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 587161.2133605984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 588240.5429925347,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 588210.9004739311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 586775.1367637488,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 586735.4096140837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 346675.46804365225,
            "unit": "ns/iter",
            "extra": "iterations: 2566\ncpu: 346651.9095869063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 582697.4799999789,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 582613.8666666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2546834.619834946,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2546607.71349863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1123178.7479092441,
            "unit": "ns/iter",
            "extra": "iterations: 837\ncpu: 1123083.2735961745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5584.946510000464,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5584.847000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29582.26260943227,
            "unit": "ns/iter",
            "extra": "iterations: 28213\ncpu: 29579.948959699203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23648.030493707574,
            "unit": "ns/iter",
            "extra": "iterations: 35122\ncpu: 23645.942713968503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22628.85617014345,
            "unit": "ns/iter",
            "extra": "iterations: 36863\ncpu: 22626.83720804069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23461.63976641399,
            "unit": "ns/iter",
            "extra": "iterations: 35105\ncpu: 23460.76057541669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63176.0585804415,
            "unit": "ns/iter",
            "extra": "iterations: 13793\ncpu: 63171.15203364031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 578738.440000052,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578683.8000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 575646.2910643822,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 575594.0867279932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 577763.719816277,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 577719.7506561683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 570503.732459,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 570451.2131147534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 332807.72713527933,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 332788.2086167785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 565729.7954838126,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 565701.354838707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 547.9052490160186,
            "unit": "ns/iter",
            "extra": "iterations: 1282488\ncpu: 547.8774070400633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3218.576329442321,
            "unit": "ns/iter",
            "extra": "iterations: 216463\ncpu: 3218.51263264394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2494.027575184633,
            "unit": "ns/iter",
            "extra": "iterations: 280941\ncpu: 2493.946059848871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2455.9867941742004,
            "unit": "ns/iter",
            "extra": "iterations: 284950\ncpu: 2455.9771889805215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1991.7389646395927,
            "unit": "ns/iter",
            "extra": "iterations: 351665\ncpu: 1991.6568324968305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17283.126181309315,
            "unit": "ns/iter",
            "extra": "iterations: 39998\ncpu: 17282.45912295619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30942.08407567504,
            "unit": "ns/iter",
            "extra": "iterations: 23574\ncpu: 30939.314499024218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7326.579702140323,
            "unit": "ns/iter",
            "extra": "iterations: 95951\ncpu: 7326.10915988377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7247.495642135192,
            "unit": "ns/iter",
            "extra": "iterations: 96148\ncpu: 7246.788284727753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7301.9573430515875,
            "unit": "ns/iter",
            "extra": "iterations: 95764\ncpu: 7301.353326928688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14802.499643185902,
            "unit": "ns/iter",
            "extra": "iterations: 47644\ncpu: 14802.0779111746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13835.129638784081,
            "unit": "ns/iter",
            "extra": "iterations: 50579\ncpu: 13834.518278337053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5147.89997282698,
            "unit": "ns/iter",
            "extra": "iterations: 136163\ncpu: 5147.515844979944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25751.676865507336,
            "unit": "ns/iter",
            "extra": "iterations: 27258\ncpu: 25749.570768215184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20676.942576246875,
            "unit": "ns/iter",
            "extra": "iterations: 33871\ncpu: 20674.44716719295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20763.748047278972,
            "unit": "ns/iter",
            "extra": "iterations: 33927\ncpu: 20762.03613641062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21157.76838569121,
            "unit": "ns/iter",
            "extra": "iterations: 33042\ncpu: 21155.813812723143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50148.5254237359,
            "unit": "ns/iter",
            "extra": "iterations: 13983\ncpu: 50145.48380175886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155352.09971128884,
            "unit": "ns/iter",
            "extra": "iterations: 4503\ncpu: 155344.70353097675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131085.0557009336,
            "unit": "ns/iter",
            "extra": "iterations: 5350\ncpu: 131078.82242990512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129765.65646448208,
            "unit": "ns/iter",
            "extra": "iterations: 5391\ncpu: 129757.5959933225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130353.83742558758,
            "unit": "ns/iter",
            "extra": "iterations: 5376\ncpu: 130345.38690476217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82780.52336448651,
            "unit": "ns/iter",
            "extra": "iterations: 8453\ncpu: 82776.95492724422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130313.97469298042,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 130307.85262374356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5365.957935316807,
            "unit": "ns/iter",
            "extra": "iterations: 128659\ncpu: 5365.945639247937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27650.132038910262,
            "unit": "ns/iter",
            "extra": "iterations: 25288\ncpu: 27649.331698829366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21677.570309596915,
            "unit": "ns/iter",
            "extra": "iterations: 32300\ncpu: 21677.504643962857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21254.61570222859,
            "unit": "ns/iter",
            "extra": "iterations: 32938\ncpu: 21253.61284838183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21303.893595698126,
            "unit": "ns/iter",
            "extra": "iterations: 32931\ncpu: 21303.522516777623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50113.80010000721,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50112.52000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153722.07202459112,
            "unit": "ns/iter",
            "extra": "iterations: 4554\ncpu: 153705.357927097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128399.30934988539,
            "unit": "ns/iter",
            "extra": "iterations: 5476\ncpu: 128396.98685171788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129189.7276078057,
            "unit": "ns/iter",
            "extra": "iterations: 5426\ncpu: 129183.17360855192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129307.1568917815,
            "unit": "ns/iter",
            "extra": "iterations: 5405\ncpu: 129294.15356151605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82372.61839323583,
            "unit": "ns/iter",
            "extra": "iterations: 8514\ncpu: 82367.84120272429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129167.8630162337,
            "unit": "ns/iter",
            "extra": "iterations: 5424\ncpu: 129166.09513274481 ns\nthreads: 1"
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
        "date": 1705962144921,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1378.1874555651987,
            "unit": "ns/iter",
            "extra": "iterations: 506360\ncpu: 1378.1319614503516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16268.794851700886,
            "unit": "ns/iter",
            "extra": "iterations: 51046\ncpu: 16268.42651725894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35047.98929060476,
            "unit": "ns/iter",
            "extra": "iterations: 24091\ncpu: 35047.22095388321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50987.91413835171,
            "unit": "ns/iter",
            "extra": "iterations: 16480\ncpu: 50986.680825242714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56260.70929999969,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56259.330000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70545.77667856465,
            "unit": "ns/iter",
            "extra": "iterations: 12332\ncpu: 70543.79662666234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83983.53650638467,
            "unit": "ns/iter",
            "extra": "iterations: 10190\ncpu: 83980.99116781157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98187.54384571694,
            "unit": "ns/iter",
            "extra": "iterations: 8815\ncpu: 98181.66761202492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112330.36986301556,
            "unit": "ns/iter",
            "extra": "iterations: 7592\ncpu: 112325.39515279235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1172.2221739871395,
            "unit": "ns/iter",
            "extra": "iterations: 598918\ncpu: 1172.1743210255852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 998.0122750659193,
            "unit": "ns/iter",
            "extra": "iterations: 727491\ncpu: 997.9991505049533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 975.7880165548477,
            "unit": "ns/iter",
            "extra": "iterations: 716405\ncpu: 975.7563110251866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 968.27806802238,
            "unit": "ns/iter",
            "extra": "iterations: 722762\ncpu: 968.2646569686832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1870.323717726417,
            "unit": "ns/iter",
            "extra": "iterations: 374530\ncpu: 1870.2515152324231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5398.930939999218,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5398.86000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29356.859513074833,
            "unit": "ns/iter",
            "extra": "iterations: 27725\ncpu: 29356.440036068543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23134.730930474623,
            "unit": "ns/iter",
            "extra": "iterations: 35541\ncpu: 23134.14085141101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22187.222649940326,
            "unit": "ns/iter",
            "extra": "iterations: 37148\ncpu: 22186.922579950435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22767.87295684617,
            "unit": "ns/iter",
            "extra": "iterations: 36035\ncpu: 22767.573192729276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64372.72073892745,
            "unit": "ns/iter",
            "extra": "iterations: 13858\ncpu: 64370.024534564815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 559499.7279999915,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559492.6000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 567193.6783171628,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 567177.864077669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 566157.349837106,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 566138.8273615633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 561285.8709042601,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 561278.7024901687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 330947.46894409857,
            "unit": "ns/iter",
            "extra": "iterations: 2576\ncpu: 330939.09161490796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 567538.9573091966,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 567522.639068563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2404066.554687686,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2404004.166666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1089003.6882353663,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1088977.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3376932.6340577863,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3376717.028985504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8816.865079364587,
            "unit": "ns/iter",
            "extra": "iterations: 97776\ncpu: 8816.60939289806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46785.74196978377,
            "unit": "ns/iter",
            "extra": "iterations: 17870\ncpu: 46785.08114157808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36994.960969105734,
            "unit": "ns/iter",
            "extra": "iterations: 22495\ncpu: 36993.42520560123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36171.66071040423,
            "unit": "ns/iter",
            "extra": "iterations: 23001\ncpu: 36171.17081866032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36723.86320838464,
            "unit": "ns/iter",
            "extra": "iterations: 22516\ncpu: 36723.33895896249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77374.83720297235,
            "unit": "ns/iter",
            "extra": "iterations: 11026\ncpu: 77373.75294757877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 597997.5400000513,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597971.2000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 597057.8359642427,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 597043.170899107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 593577.004106822,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 593568.7885010274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 592848.6387754792,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 592828.163265309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 350098.54806544055,
            "unit": "ns/iter",
            "extra": "iterations: 2507\ncpu: 350093.69764658896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 585835.6212736994,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 585826.8970189693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2577041.806094206,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2576910.803324109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1154872.3992584203,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1154821.384425213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5492.002539999703,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5491.930000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29109.83879432337,
            "unit": "ns/iter",
            "extra": "iterations: 28200\ncpu: 29109.046099290852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23054.278257718426,
            "unit": "ns/iter",
            "extra": "iterations: 35884\ncpu: 23053.282800133773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22326.52435731096,
            "unit": "ns/iter",
            "extra": "iterations: 37032\ncpu: 22325.788507237015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22621.028499226835,
            "unit": "ns/iter",
            "extra": "iterations: 35615\ncpu: 22618.242313631974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63213.74247248957,
            "unit": "ns/iter",
            "extra": "iterations: 13816\ncpu: 63209.568616097094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 576621.9030000457,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576552.1000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 575961.9782321535,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 575924.0765171532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 576673.4530531906,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 576628.9560078776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 576079.8289646007,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 576024.574049803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 338486.9969064169,
            "unit": "ns/iter",
            "extra": "iterations: 2586\ncpu: 338452.59087393683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567877.4358808431,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 567830.0518134699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 544.9106567088268,
            "unit": "ns/iter",
            "extra": "iterations: 1284618\ncpu: 544.8772319864745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3282.546414243198,
            "unit": "ns/iter",
            "extra": "iterations: 213609\ncpu: 3282.216573271713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2559.140659469084,
            "unit": "ns/iter",
            "extra": "iterations: 273796\ncpu: 2558.9186839836934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2515.214294187582,
            "unit": "ns/iter",
            "extra": "iterations: 278197\ncpu: 2515.021729206285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2031.2201516328273,
            "unit": "ns/iter",
            "extra": "iterations: 345044\ncpu: 2031.085600677015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17251.776425041284,
            "unit": "ns/iter",
            "extra": "iterations: 41069\ncpu: 17250.05478584813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30601.227161682673,
            "unit": "ns/iter",
            "extra": "iterations: 22922\ncpu: 30597.98883169003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7276.5813808255725,
            "unit": "ns/iter",
            "extra": "iterations: 96073\ncpu: 7276.304476804133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7251.632383334384,
            "unit": "ns/iter",
            "extra": "iterations: 96772\ncpu: 7251.230727896485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7257.924683989319,
            "unit": "ns/iter",
            "extra": "iterations: 96832\ncpu: 7257.53676470593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14655.227690178497,
            "unit": "ns/iter",
            "extra": "iterations: 47692\ncpu: 14654.83519248534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13181.91600045254,
            "unit": "ns/iter",
            "extra": "iterations: 53036\ncpu: 13181.265555471746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5225.701350403318,
            "unit": "ns/iter",
            "extra": "iterations: 133886\ncpu: 5225.344696234129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25862.164044597394,
            "unit": "ns/iter",
            "extra": "iterations: 26188\ncpu: 25861.337253704023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20734.75158213762,
            "unit": "ns/iter",
            "extra": "iterations: 33657\ncpu: 20733.66907329818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20626.57314617517,
            "unit": "ns/iter",
            "extra": "iterations: 33768\ncpu: 20625.24875621855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21275.070986531988,
            "unit": "ns/iter",
            "extra": "iterations: 32964\ncpu: 21273.9382356512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50069.186839095346,
            "unit": "ns/iter",
            "extra": "iterations: 13996\ncpu: 50068.555301514985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154619.67680354824,
            "unit": "ns/iter",
            "extra": "iterations: 4505\ncpu: 154617.7136514966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131627.54123613442,
            "unit": "ns/iter",
            "extra": "iterations: 5323\ncpu: 131622.58125117363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130699.49210182537,
            "unit": "ns/iter",
            "extra": "iterations: 5381\ncpu: 130693.14253856121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130334.49008975434,
            "unit": "ns/iter",
            "extra": "iterations: 5348\ncpu: 130328.14136125786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83602.60198232441,
            "unit": "ns/iter",
            "extra": "iterations: 8374\ncpu: 83600.32242655927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130708.80607868674,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 130705.20231213744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5427.544068453115,
            "unit": "ns/iter",
            "extra": "iterations: 129140\ncpu: 5427.388880285022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27160.798761133956,
            "unit": "ns/iter",
            "extra": "iterations: 26153\ncpu: 27159.76369823752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22128.309072531487,
            "unit": "ns/iter",
            "extra": "iterations: 31656\ncpu: 22127.735658326703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21344.12008700344,
            "unit": "ns/iter",
            "extra": "iterations: 32643\ncpu: 21343.335477744353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21843.570238946766,
            "unit": "ns/iter",
            "extra": "iterations: 32183\ncpu: 21842.82074387098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49737.86883264399,
            "unit": "ns/iter",
            "extra": "iterations: 14066\ncpu: 49735.987487558734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152595.5185184994,
            "unit": "ns/iter",
            "extra": "iterations: 4590\ncpu: 152588.84531590412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128350.04821265666,
            "unit": "ns/iter",
            "extra": "iterations: 5455\ncpu: 128346.85609532623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127718.4674448289,
            "unit": "ns/iter",
            "extra": "iterations: 5483\ncpu: 127707.66004012537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128483.36406966265,
            "unit": "ns/iter",
            "extra": "iterations: 5455\ncpu: 128477.85517873504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82628.84027860129,
            "unit": "ns/iter",
            "extra": "iterations: 8471\ncpu: 82626.1598394531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128930.70402350913,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 128926.54785963618 ns\nthreads: 1"
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
        "date": 1705963884471,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1385.4144462471813,
            "unit": "ns/iter",
            "extra": "iterations: 499230\ncpu: 1385.3888989043128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15966.247631226406,
            "unit": "ns/iter",
            "extra": "iterations: 51609\ncpu: 15965.55639520239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33895.786596625556,
            "unit": "ns/iter",
            "extra": "iterations: 24367\ncpu: 33895.07941067837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50432.17368136886,
            "unit": "ns/iter",
            "extra": "iterations: 16703\ncpu: 50431.21594923067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55722.57549999903,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55723.76000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70933.4158224862,
            "unit": "ns/iter",
            "extra": "iterations: 12438\ncpu: 70930.55153561667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85054.91611585364,
            "unit": "ns/iter",
            "extra": "iterations: 10288\ncpu: 85052.08009331259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98238.12300373681,
            "unit": "ns/iter",
            "extra": "iterations: 8829\ncpu: 98234.13750141581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114036.68572941129,
            "unit": "ns/iter",
            "extra": "iterations: 7554\ncpu: 114033.10828700027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1150.7635672524214,
            "unit": "ns/iter",
            "extra": "iterations: 600877\ncpu: 1150.7642995155413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 954.7914226241684,
            "unit": "ns/iter",
            "extra": "iterations: 732625\ncpu: 954.7842347722216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 949.0048991829711,
            "unit": "ns/iter",
            "extra": "iterations: 637045\ncpu: 948.9908876139054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 962.3783336679679,
            "unit": "ns/iter",
            "extra": "iterations: 727202\ncpu: 962.3778537462778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1860.668605130839,
            "unit": "ns/iter",
            "extra": "iterations: 375899\ncpu: 1860.6678921731636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5133.477059999905,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5133.579000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27294.771132194906,
            "unit": "ns/iter",
            "extra": "iterations: 30463\ncpu: 27294.760857433575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22268.678877796243,
            "unit": "ns/iter",
            "extra": "iterations: 37070\ncpu: 22268.42729970327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 21783.889591939518,
            "unit": "ns/iter",
            "extra": "iterations: 38720\ncpu: 21783.961776859498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 21849.85206409922,
            "unit": "ns/iter",
            "extra": "iterations: 37692\ncpu: 21850.090204817985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64837.39438776096,
            "unit": "ns/iter",
            "extra": "iterations: 13720\ncpu: 64837.514577259484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 561383.0280000229,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561367.6000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 567828.2192583276,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 567826.8054651927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 565005.6132632872,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 564996.4543663828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 571901.9750328086,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 571896.6491458603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 338445.2091836822,
            "unit": "ns/iter",
            "extra": "iterations: 2548\ncpu: 338439.48194662534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 569694.3206056893,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 569693.7458854498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2420379.367187605,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2420376.3020833326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1126250.5229813836,
            "unit": "ns/iter",
            "extra": "iterations: 805\ncpu: 1126224.9689440986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3398490.5454545617,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3398445.090909092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8527.75474794112,
            "unit": "ns/iter",
            "extra": "iterations: 98727\ncpu: 8527.368399728539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46582.508206824044,
            "unit": "ns/iter",
            "extra": "iterations: 17851\ncpu: 46581.79933897257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37250.659883721906,
            "unit": "ns/iter",
            "extra": "iterations: 22360\ncpu: 37249.71377459757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 35930.212509192796,
            "unit": "ns/iter",
            "extra": "iterations: 23119\ncpu: 35928.65175829414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36261.71545749622,
            "unit": "ns/iter",
            "extra": "iterations: 22798\ncpu: 36261.50539520997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78132.83354626854,
            "unit": "ns/iter",
            "extra": "iterations: 10958\ncpu: 78129.98722394551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 605505.8969999437,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605466.3999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 603202.0401940488,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 603171.7255717273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 594143.4585899555,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 594142.0260095802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 596677.6954732959,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 596672.4965706444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 350013.9084732384,
            "unit": "ns/iter",
            "extra": "iterations: 2502\ncpu: 350016.8265387676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 602427.034274177,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 602422.9838709671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2602500.9860335453,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2600570.9497206677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1137486.6056167034,
            "unit": "ns/iter",
            "extra": "iterations: 819\ncpu: 1137472.039072042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5548.783330000332,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5548.766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29022.224027229215,
            "unit": "ns/iter",
            "extra": "iterations: 28501\ncpu: 29021.567664292503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23438.788956667566,
            "unit": "ns/iter",
            "extra": "iterations: 34917\ncpu: 23438.63447604314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22199.92614428226,
            "unit": "ns/iter",
            "extra": "iterations: 37316\ncpu: 22199.833851431038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22621.746941061207,
            "unit": "ns/iter",
            "extra": "iterations: 35715\ncpu: 22621.31877362454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63198.19763819679,
            "unit": "ns/iter",
            "extra": "iterations: 13803\ncpu: 63198.15257552707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 572999.8159999923,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572979.4000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 585591.8146437939,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 585590.5013192617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 581284.9369665238,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 581269.1398555508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 581348.7116523552,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 581342.9888084269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 338521.03686635563,
            "unit": "ns/iter",
            "extra": "iterations: 2604\ncpu: 338510.2534562202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 571325.0384114706,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 571308.4635416699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 536.9460894589935,
            "unit": "ns/iter",
            "extra": "iterations: 1303771\ncpu: 536.9508142150706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3152.728691141597,
            "unit": "ns/iter",
            "extra": "iterations: 222079\ncpu: 3152.6799021969737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2634.508670825098,
            "unit": "ns/iter",
            "extra": "iterations: 265661\ncpu: 2634.4996066415547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2519.30103275975,
            "unit": "ns/iter",
            "extra": "iterations: 277993\ncpu: 2519.2548013799083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2014.4359330112331,
            "unit": "ns/iter",
            "extra": "iterations: 347402\ncpu: 2014.4717071289022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17343.65212003974,
            "unit": "ns/iter",
            "extra": "iterations: 40353\ncpu: 17343.010432929463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29202.038342403423,
            "unit": "ns/iter",
            "extra": "iterations: 23890\ncpu: 29202.013394725698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7315.624621489316,
            "unit": "ns/iter",
            "extra": "iterations: 95770\ncpu: 7315.545577947115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7265.033812166591,
            "unit": "ns/iter",
            "extra": "iterations: 96415\ncpu: 7264.981590001538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7310.145886069192,
            "unit": "ns/iter",
            "extra": "iterations: 95602\ncpu: 7310.101253111932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13944.682202457834,
            "unit": "ns/iter",
            "extra": "iterations: 50035\ncpu: 13944.269011691691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13865.859306931026,
            "unit": "ns/iter",
            "extra": "iterations: 50500\ncpu: 13865.934653465512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5192.5930707080515,
            "unit": "ns/iter",
            "extra": "iterations: 135021\ncpu: 5192.536716510818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25935.814280959174,
            "unit": "ns/iter",
            "extra": "iterations: 27057\ncpu: 25935.743060945337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20889.944232601596,
            "unit": "ns/iter",
            "extra": "iterations: 33568\ncpu: 20889.504885605355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20744.836633075298,
            "unit": "ns/iter",
            "extra": "iterations: 33740\ncpu: 20744.994072317786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21190.27368484487,
            "unit": "ns/iter",
            "extra": "iterations: 33038\ncpu: 21190.647133603576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50584.98544563928,
            "unit": "ns/iter",
            "extra": "iterations: 13879\ncpu: 50584.34325239549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155065.82816652415,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 155066.51904340056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131444.63958059665,
            "unit": "ns/iter",
            "extra": "iterations: 5341\ncpu: 131441.2844036679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131282.69421023282,
            "unit": "ns/iter",
            "extra": "iterations: 5337\ncpu: 131282.18100056262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131887.64718046415,
            "unit": "ns/iter",
            "extra": "iterations: 5320\ncpu: 131885.60150375875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83332.39954746202,
            "unit": "ns/iter",
            "extra": "iterations: 8397\ncpu: 83330.5823508381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130600.94394786931,
            "unit": "ns/iter",
            "extra": "iterations: 5370\ncpu: 130601.41527002015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5059.694418396992,
            "unit": "ns/iter",
            "extra": "iterations: 138634\ncpu: 5059.579179710645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25896.182422643426,
            "unit": "ns/iter",
            "extra": "iterations: 26921\ncpu: 25896.255711155176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21949.25355472317,
            "unit": "ns/iter",
            "extra": "iterations: 31859\ncpu: 21948.90297875033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21118.845919073505,
            "unit": "ns/iter",
            "extra": "iterations: 33093\ncpu: 21119.010062550802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21206.793624059006,
            "unit": "ns/iter",
            "extra": "iterations: 33846\ncpu: 21206.396619984454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49798.881084541994,
            "unit": "ns/iter",
            "extra": "iterations: 14052\ncpu: 49799.74380871072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153205.75021852995,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 153205.98776223647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129847.72879176571,
            "unit": "ns/iter",
            "extra": "iterations: 5446\ncpu: 129843.7568857883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128989.13673168303,
            "unit": "ns/iter",
            "extra": "iterations: 5434\ncpu: 128980.971659919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128088.9493323573,
            "unit": "ns/iter",
            "extra": "iterations: 5467\ncpu: 128084.14121090247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82344.03375675976,
            "unit": "ns/iter",
            "extra": "iterations: 8502\ncpu: 82338.6614914143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129595.5232364263,
            "unit": "ns/iter",
            "extra": "iterations: 5401\ncpu: 129592.03851138636 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}