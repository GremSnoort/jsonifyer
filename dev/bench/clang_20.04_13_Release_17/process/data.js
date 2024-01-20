window.BENCHMARK_DATA = {
  "lastUpdate": 1705778456494,
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
      }
    ]
  }
}