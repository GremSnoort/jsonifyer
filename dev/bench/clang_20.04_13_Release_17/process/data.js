window.BENCHMARK_DATA = {
  "lastUpdate": 1702503987866,
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
      }
    ]
  }
}