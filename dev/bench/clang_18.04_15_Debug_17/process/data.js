window.BENCHMARK_DATA = {
  "lastUpdate": 1702394252554,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-15 18.04 Debug c++-17": [
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394243648,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16378.561209626874,
            "unit": "ns/iter",
            "extra": "iterations: 43253\ncpu: 16377.978406122118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 153111.8081869259,
            "unit": "ns/iter",
            "extra": "iterations: 5521\ncpu: 153109.2917949647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 289283.3462308296,
            "unit": "ns/iter",
            "extra": "iterations: 2998\ncpu: 289273.14876584377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 425024.86909448187,
            "unit": "ns/iter",
            "extra": "iterations: 2032\ncpu: 425013.82874015754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 564561.9358808403,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 564558.8730569949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 564170.1440000021,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564155.5999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 674291.3401162918,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 674287.6453488372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 783990.1385135057,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 783976.0979729729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 894187.8819577675,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 894144.8176583482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13042.400572991242,
            "unit": "ns/iter",
            "extra": "iterations: 53753\ncpu: 13041.770691868358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10810.881028592876,
            "unit": "ns/iter",
            "extra": "iterations: 64982\ncpu: 10810.695269459242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10789.8713899063,
            "unit": "ns/iter",
            "extra": "iterations: 65026\ncpu: 10789.685664195858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10808.712501926706,
            "unit": "ns/iter",
            "extra": "iterations: 64870\ncpu: 10808.615692924319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18517.99058735895,
            "unit": "ns/iter",
            "extra": "iterations: 37609\ncpu: 18517.785636416826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61604.138832854136,
            "unit": "ns/iter",
            "extra": "iterations: 13880\ncpu: 61601.527377521525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 343784.2031375608,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 343782.3411102172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 265322.5348909633,
            "unit": "ns/iter",
            "extra": "iterations: 3210\ncpu: 265317.8504672893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 263940.59352629556,
            "unit": "ns/iter",
            "extra": "iterations: 3213\ncpu: 263939.68253968185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 262416.6320346312,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 262408.53432282043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 540463.6760000017,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540470.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4683644.313131469,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4683515.656565647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3802484.261224231,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3802406.53061224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3785360.1747966846,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3785280.8943089345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3788775.7926827865,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3788669.9186991826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2208180.2267304873,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2208176.8496420044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3696639.2479998833,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3696480.8000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14537946.164383257,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14537524.657534253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6525272.600000563,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6525032.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18281095.637930855,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18280803.448275823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 68762.44986252497,
            "unit": "ns/iter",
            "extra": "iterations: 12366\ncpu: 68760.2377486658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 364908.25425168936,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 364901.40306122485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 292281.5903655573,
            "unit": "ns/iter",
            "extra": "iterations: 2927\ncpu: 292275.33310556953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 295413.9717825129,
            "unit": "ns/iter",
            "extra": "iterations: 2906\ncpu: 295402.5808671715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 293554.8741880145,
            "unit": "ns/iter",
            "extra": "iterations: 2925\ncpu: 293554.01709401765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 552020.5059999626,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552005.6999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4753389.729591609,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4753291.326530598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3852421.293388507,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3852178.0991735775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3821856.9344261126,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3821897.5409836173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3837220.020491501,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3837128.6885245787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2241837.4915661337,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2241734.457831324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3735745.5341364415,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3735673.493975916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14831177.309860593,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14830397.18309868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6402477.269999735,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6402414.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58702.221700002614,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58699.76999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 324369.35711573745,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 324354.3453510434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 260742.78388280448,
            "unit": "ns/iter",
            "extra": "iterations: 3276\ncpu: 260733.08913308842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 259377.5719939264,
            "unit": "ns/iter",
            "extra": "iterations: 3285\ncpu: 259364.65753424607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 257855.19993971032,
            "unit": "ns/iter",
            "extra": "iterations: 3316\ncpu: 257849.4873341377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 501484.6969999098,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501473.4000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4739285.710660034,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4739153.299492368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3839724.489711941,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3839454.732510271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3781468.6544716945,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3781104.06504063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3786455.975609823,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3786311.788617865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2221568.1393643087,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2221456.234718824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3704169.920318606,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3703968.525896419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6099.11230573991,
            "unit": "ns/iter",
            "extra": "iterations: 115052\ncpu: 6098.782289747225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41655.944992864584,
            "unit": "ns/iter",
            "extra": "iterations: 16816\ncpu: 41651.96241674603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32693.813810861473,
            "unit": "ns/iter",
            "extra": "iterations: 21360\ncpu: 32691.807116104712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30294.60726187087,
            "unit": "ns/iter",
            "extra": "iterations: 23107\ncpu: 30291.517721902375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24607.336744022567,
            "unit": "ns/iter",
            "extra": "iterations: 28440\ncpu: 24605.685654008426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 187662.69416823454,
            "unit": "ns/iter",
            "extra": "iterations: 3721\ncpu: 187649.12657887803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 313565.08678924467,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 313542.58230012865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78111.28836066996,
            "unit": "ns/iter",
            "extra": "iterations: 8961\ncpu: 78103.8946546159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78130.47371952349,
            "unit": "ns/iter",
            "extra": "iterations: 8942\ncpu: 78130.3064191453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 78448.18335195658,
            "unit": "ns/iter",
            "extra": "iterations: 8950\ncpu: 78442.5586592186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162870.58420682763,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 162856.81341719086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148452.92990653779,
            "unit": "ns/iter",
            "extra": "iterations: 4708\ncpu: 148443.67034834102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46039.45757575351,
            "unit": "ns/iter",
            "extra": "iterations: 15180\ncpu: 46034.986824769454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234591.7916116172,
            "unit": "ns/iter",
            "extra": "iterations: 3028\ncpu: 234571.49933949506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 187296.52540107182,
            "unit": "ns/iter",
            "extra": "iterations: 3740\ncpu: 187278.79679144121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 186656.73290598154,
            "unit": "ns/iter",
            "extra": "iterations: 3744\ncpu: 186645.4861111129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 186922.583845931,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 186907.14094677745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 341860.1669106939,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 341832.45485603233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1340528.651340977,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1340395.593869729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1117734.0637957102,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1117645.9330143419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1111320.6492062826,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1111332.8571428477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1119706.5821370212,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1119655.661881982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 718450.3350462583,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 718401.4388489157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1104479.535432995,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1104375.5905511824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46933.55419990615,
            "unit": "ns/iter",
            "extra": "iterations: 14917\ncpu: 46930.47529664199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 234331.05589023675,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 234298.49397590218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 189471.6858922468,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 189459.13891145398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 189893.58804345637,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 189876.08695652307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 189701.2790886839,
            "unit": "ns/iter",
            "extra": "iterations: 3687\ncpu: 189686.92704095592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 344876.2705765959,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 344832.7747659001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1338037.4176245697,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1337964.7509578527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1117471.0429252125,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1117373.2909380104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1123257.9102564245,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1123251.442307695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1119657.4983923007,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1119651.4469453346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 715236.7123983903,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 715141.2601626018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1108756.6148970404,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1108696.196513478 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394243648,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16378.561209626874,
            "unit": "ns/iter",
            "extra": "iterations: 43253\ncpu: 16377.978406122118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 153111.8081869259,
            "unit": "ns/iter",
            "extra": "iterations: 5521\ncpu: 153109.2917949647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 289283.3462308296,
            "unit": "ns/iter",
            "extra": "iterations: 2998\ncpu: 289273.14876584377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 425024.86909448187,
            "unit": "ns/iter",
            "extra": "iterations: 2032\ncpu: 425013.82874015754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 564561.9358808403,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 564558.8730569949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 564170.1440000021,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564155.5999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 674291.3401162918,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 674287.6453488372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 783990.1385135057,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 783976.0979729729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 894187.8819577675,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 894144.8176583482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13042.400572991242,
            "unit": "ns/iter",
            "extra": "iterations: 53753\ncpu: 13041.770691868358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10810.881028592876,
            "unit": "ns/iter",
            "extra": "iterations: 64982\ncpu: 10810.695269459242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10789.8713899063,
            "unit": "ns/iter",
            "extra": "iterations: 65026\ncpu: 10789.685664195858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10808.712501926706,
            "unit": "ns/iter",
            "extra": "iterations: 64870\ncpu: 10808.615692924319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18517.99058735895,
            "unit": "ns/iter",
            "extra": "iterations: 37609\ncpu: 18517.785636416826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61604.138832854136,
            "unit": "ns/iter",
            "extra": "iterations: 13880\ncpu: 61601.527377521525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 343784.2031375608,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 343782.3411102172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 265322.5348909633,
            "unit": "ns/iter",
            "extra": "iterations: 3210\ncpu: 265317.8504672893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 263940.59352629556,
            "unit": "ns/iter",
            "extra": "iterations: 3213\ncpu: 263939.68253968185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 262416.6320346312,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 262408.53432282043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 540463.6760000017,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540470.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4683644.313131469,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4683515.656565647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3802484.261224231,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3802406.53061224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3785360.1747966846,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3785280.8943089345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3788775.7926827865,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3788669.9186991826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2208180.2267304873,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2208176.8496420044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3696639.2479998833,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3696480.8000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14537946.164383257,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14537524.657534253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6525272.600000563,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6525032.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18281095.637930855,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18280803.448275823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 68762.44986252497,
            "unit": "ns/iter",
            "extra": "iterations: 12366\ncpu: 68760.2377486658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 364908.25425168936,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 364901.40306122485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 292281.5903655573,
            "unit": "ns/iter",
            "extra": "iterations: 2927\ncpu: 292275.33310556953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 295413.9717825129,
            "unit": "ns/iter",
            "extra": "iterations: 2906\ncpu: 295402.5808671715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 293554.8741880145,
            "unit": "ns/iter",
            "extra": "iterations: 2925\ncpu: 293554.01709401765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 552020.5059999626,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552005.6999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4753389.729591609,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4753291.326530598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3852421.293388507,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3852178.0991735775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3821856.9344261126,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3821897.5409836173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3837220.020491501,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3837128.6885245787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2241837.4915661337,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2241734.457831324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3735745.5341364415,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3735673.493975916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14831177.309860593,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14830397.18309868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6402477.269999735,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6402414.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58702.221700002614,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58699.76999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 324369.35711573745,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 324354.3453510434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 260742.78388280448,
            "unit": "ns/iter",
            "extra": "iterations: 3276\ncpu: 260733.08913308842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 259377.5719939264,
            "unit": "ns/iter",
            "extra": "iterations: 3285\ncpu: 259364.65753424607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 257855.19993971032,
            "unit": "ns/iter",
            "extra": "iterations: 3316\ncpu: 257849.4873341377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 501484.6969999098,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501473.4000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4739285.710660034,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4739153.299492368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3839724.489711941,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3839454.732510271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3781468.6544716945,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3781104.06504063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3786455.975609823,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3786311.788617865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2221568.1393643087,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2221456.234718824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3704169.920318606,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3703968.525896419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6099.11230573991,
            "unit": "ns/iter",
            "extra": "iterations: 115052\ncpu: 6098.782289747225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41655.944992864584,
            "unit": "ns/iter",
            "extra": "iterations: 16816\ncpu: 41651.96241674603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32693.813810861473,
            "unit": "ns/iter",
            "extra": "iterations: 21360\ncpu: 32691.807116104712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30294.60726187087,
            "unit": "ns/iter",
            "extra": "iterations: 23107\ncpu: 30291.517721902375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24607.336744022567,
            "unit": "ns/iter",
            "extra": "iterations: 28440\ncpu: 24605.685654008426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 187662.69416823454,
            "unit": "ns/iter",
            "extra": "iterations: 3721\ncpu: 187649.12657887803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 313565.08678924467,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 313542.58230012865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78111.28836066996,
            "unit": "ns/iter",
            "extra": "iterations: 8961\ncpu: 78103.8946546159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78130.47371952349,
            "unit": "ns/iter",
            "extra": "iterations: 8942\ncpu: 78130.3064191453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 78448.18335195658,
            "unit": "ns/iter",
            "extra": "iterations: 8950\ncpu: 78442.5586592186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162870.58420682763,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 162856.81341719086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148452.92990653779,
            "unit": "ns/iter",
            "extra": "iterations: 4708\ncpu: 148443.67034834102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46039.45757575351,
            "unit": "ns/iter",
            "extra": "iterations: 15180\ncpu: 46034.986824769454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234591.7916116172,
            "unit": "ns/iter",
            "extra": "iterations: 3028\ncpu: 234571.49933949506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 187296.52540107182,
            "unit": "ns/iter",
            "extra": "iterations: 3740\ncpu: 187278.79679144121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 186656.73290598154,
            "unit": "ns/iter",
            "extra": "iterations: 3744\ncpu: 186645.4861111129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 186922.583845931,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 186907.14094677745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 341860.1669106939,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 341832.45485603233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1340528.651340977,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1340395.593869729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1117734.0637957102,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1117645.9330143419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1111320.6492062826,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1111332.8571428477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1119706.5821370212,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1119655.661881982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 718450.3350462583,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 718401.4388489157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1104479.535432995,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1104375.5905511824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46933.55419990615,
            "unit": "ns/iter",
            "extra": "iterations: 14917\ncpu: 46930.47529664199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 234331.05589023675,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 234298.49397590218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 189471.6858922468,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 189459.13891145398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 189893.58804345637,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 189876.08695652307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 189701.2790886839,
            "unit": "ns/iter",
            "extra": "iterations: 3687\ncpu: 189686.92704095592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 344876.2705765959,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 344832.7747659001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1338037.4176245697,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1337964.7509578527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1117471.0429252125,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1117373.2909380104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1123257.9102564245,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1123251.442307695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1119657.4983923007,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1119651.4469453346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 715236.7123983903,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 715141.2601626018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1108756.6148970404,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1108696.196513478 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394243648,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16378.561209626874,
            "unit": "ns/iter",
            "extra": "iterations: 43253\ncpu: 16377.978406122118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 153111.8081869259,
            "unit": "ns/iter",
            "extra": "iterations: 5521\ncpu: 153109.2917949647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 289283.3462308296,
            "unit": "ns/iter",
            "extra": "iterations: 2998\ncpu: 289273.14876584377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 425024.86909448187,
            "unit": "ns/iter",
            "extra": "iterations: 2032\ncpu: 425013.82874015754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 564561.9358808403,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 564558.8730569949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 564170.1440000021,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564155.5999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 674291.3401162918,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 674287.6453488372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 783990.1385135057,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 783976.0979729729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 894187.8819577675,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 894144.8176583482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13042.400572991242,
            "unit": "ns/iter",
            "extra": "iterations: 53753\ncpu: 13041.770691868358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10810.881028592876,
            "unit": "ns/iter",
            "extra": "iterations: 64982\ncpu: 10810.695269459242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10789.8713899063,
            "unit": "ns/iter",
            "extra": "iterations: 65026\ncpu: 10789.685664195858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10808.712501926706,
            "unit": "ns/iter",
            "extra": "iterations: 64870\ncpu: 10808.615692924319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18517.99058735895,
            "unit": "ns/iter",
            "extra": "iterations: 37609\ncpu: 18517.785636416826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61604.138832854136,
            "unit": "ns/iter",
            "extra": "iterations: 13880\ncpu: 61601.527377521525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 343784.2031375608,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 343782.3411102172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 265322.5348909633,
            "unit": "ns/iter",
            "extra": "iterations: 3210\ncpu: 265317.8504672893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 263940.59352629556,
            "unit": "ns/iter",
            "extra": "iterations: 3213\ncpu: 263939.68253968185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 262416.6320346312,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 262408.53432282043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 540463.6760000017,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540470.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4683644.313131469,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4683515.656565647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3802484.261224231,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3802406.53061224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3785360.1747966846,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3785280.8943089345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3788775.7926827865,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3788669.9186991826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2208180.2267304873,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2208176.8496420044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3696639.2479998833,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3696480.8000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14537946.164383257,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14537524.657534253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6525272.600000563,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6525032.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18281095.637930855,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18280803.448275823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 68762.44986252497,
            "unit": "ns/iter",
            "extra": "iterations: 12366\ncpu: 68760.2377486658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 364908.25425168936,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 364901.40306122485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 292281.5903655573,
            "unit": "ns/iter",
            "extra": "iterations: 2927\ncpu: 292275.33310556953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 295413.9717825129,
            "unit": "ns/iter",
            "extra": "iterations: 2906\ncpu: 295402.5808671715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 293554.8741880145,
            "unit": "ns/iter",
            "extra": "iterations: 2925\ncpu: 293554.01709401765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 552020.5059999626,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552005.6999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4753389.729591609,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4753291.326530598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3852421.293388507,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3852178.0991735775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3821856.9344261126,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3821897.5409836173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3837220.020491501,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3837128.6885245787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2241837.4915661337,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2241734.457831324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3735745.5341364415,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3735673.493975916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14831177.309860593,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14830397.18309868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6402477.269999735,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6402414.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58702.221700002614,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58699.76999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 324369.35711573745,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 324354.3453510434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 260742.78388280448,
            "unit": "ns/iter",
            "extra": "iterations: 3276\ncpu: 260733.08913308842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 259377.5719939264,
            "unit": "ns/iter",
            "extra": "iterations: 3285\ncpu: 259364.65753424607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 257855.19993971032,
            "unit": "ns/iter",
            "extra": "iterations: 3316\ncpu: 257849.4873341377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 501484.6969999098,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501473.4000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4739285.710660034,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4739153.299492368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3839724.489711941,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3839454.732510271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3781468.6544716945,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3781104.06504063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3786455.975609823,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3786311.788617865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2221568.1393643087,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2221456.234718824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3704169.920318606,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3703968.525896419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6099.11230573991,
            "unit": "ns/iter",
            "extra": "iterations: 115052\ncpu: 6098.782289747225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41655.944992864584,
            "unit": "ns/iter",
            "extra": "iterations: 16816\ncpu: 41651.96241674603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32693.813810861473,
            "unit": "ns/iter",
            "extra": "iterations: 21360\ncpu: 32691.807116104712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30294.60726187087,
            "unit": "ns/iter",
            "extra": "iterations: 23107\ncpu: 30291.517721902375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24607.336744022567,
            "unit": "ns/iter",
            "extra": "iterations: 28440\ncpu: 24605.685654008426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 187662.69416823454,
            "unit": "ns/iter",
            "extra": "iterations: 3721\ncpu: 187649.12657887803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 313565.08678924467,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 313542.58230012865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78111.28836066996,
            "unit": "ns/iter",
            "extra": "iterations: 8961\ncpu: 78103.8946546159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78130.47371952349,
            "unit": "ns/iter",
            "extra": "iterations: 8942\ncpu: 78130.3064191453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 78448.18335195658,
            "unit": "ns/iter",
            "extra": "iterations: 8950\ncpu: 78442.5586592186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162870.58420682763,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 162856.81341719086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148452.92990653779,
            "unit": "ns/iter",
            "extra": "iterations: 4708\ncpu: 148443.67034834102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46039.45757575351,
            "unit": "ns/iter",
            "extra": "iterations: 15180\ncpu: 46034.986824769454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234591.7916116172,
            "unit": "ns/iter",
            "extra": "iterations: 3028\ncpu: 234571.49933949506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 187296.52540107182,
            "unit": "ns/iter",
            "extra": "iterations: 3740\ncpu: 187278.79679144121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 186656.73290598154,
            "unit": "ns/iter",
            "extra": "iterations: 3744\ncpu: 186645.4861111129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 186922.583845931,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 186907.14094677745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 341860.1669106939,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 341832.45485603233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1340528.651340977,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1340395.593869729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1117734.0637957102,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1117645.9330143419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1111320.6492062826,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1111332.8571428477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1119706.5821370212,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1119655.661881982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 718450.3350462583,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 718401.4388489157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1104479.535432995,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1104375.5905511824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46933.55419990615,
            "unit": "ns/iter",
            "extra": "iterations: 14917\ncpu: 46930.47529664199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 234331.05589023675,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 234298.49397590218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 189471.6858922468,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 189459.13891145398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 189893.58804345637,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 189876.08695652307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 189701.2790886839,
            "unit": "ns/iter",
            "extra": "iterations: 3687\ncpu: 189686.92704095592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 344876.2705765959,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 344832.7747659001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1338037.4176245697,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1337964.7509578527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1117471.0429252125,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1117373.2909380104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1123257.9102564245,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1123251.442307695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1119657.4983923007,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1119651.4469453346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 715236.7123983903,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 715141.2601626018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1108756.6148970404,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1108696.196513478 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394243648,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16378.561209626874,
            "unit": "ns/iter",
            "extra": "iterations: 43253\ncpu: 16377.978406122118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 153111.8081869259,
            "unit": "ns/iter",
            "extra": "iterations: 5521\ncpu: 153109.2917949647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 289283.3462308296,
            "unit": "ns/iter",
            "extra": "iterations: 2998\ncpu: 289273.14876584377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 425024.86909448187,
            "unit": "ns/iter",
            "extra": "iterations: 2032\ncpu: 425013.82874015754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 564561.9358808403,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 564558.8730569949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 564170.1440000021,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564155.5999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 674291.3401162918,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 674287.6453488372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 783990.1385135057,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 783976.0979729729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 894187.8819577675,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 894144.8176583482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13042.400572991242,
            "unit": "ns/iter",
            "extra": "iterations: 53753\ncpu: 13041.770691868358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10810.881028592876,
            "unit": "ns/iter",
            "extra": "iterations: 64982\ncpu: 10810.695269459242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10789.8713899063,
            "unit": "ns/iter",
            "extra": "iterations: 65026\ncpu: 10789.685664195858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10808.712501926706,
            "unit": "ns/iter",
            "extra": "iterations: 64870\ncpu: 10808.615692924319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18517.99058735895,
            "unit": "ns/iter",
            "extra": "iterations: 37609\ncpu: 18517.785636416826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61604.138832854136,
            "unit": "ns/iter",
            "extra": "iterations: 13880\ncpu: 61601.527377521525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 343784.2031375608,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 343782.3411102172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 265322.5348909633,
            "unit": "ns/iter",
            "extra": "iterations: 3210\ncpu: 265317.8504672893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 263940.59352629556,
            "unit": "ns/iter",
            "extra": "iterations: 3213\ncpu: 263939.68253968185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 262416.6320346312,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 262408.53432282043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 540463.6760000017,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540470.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4683644.313131469,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4683515.656565647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3802484.261224231,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3802406.53061224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3785360.1747966846,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3785280.8943089345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3788775.7926827865,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3788669.9186991826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2208180.2267304873,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2208176.8496420044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3696639.2479998833,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3696480.8000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14537946.164383257,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14537524.657534253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6525272.600000563,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6525032.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18281095.637930855,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18280803.448275823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 68762.44986252497,
            "unit": "ns/iter",
            "extra": "iterations: 12366\ncpu: 68760.2377486658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 364908.25425168936,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 364901.40306122485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 292281.5903655573,
            "unit": "ns/iter",
            "extra": "iterations: 2927\ncpu: 292275.33310556953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 295413.9717825129,
            "unit": "ns/iter",
            "extra": "iterations: 2906\ncpu: 295402.5808671715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 293554.8741880145,
            "unit": "ns/iter",
            "extra": "iterations: 2925\ncpu: 293554.01709401765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 552020.5059999626,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552005.6999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4753389.729591609,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4753291.326530598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3852421.293388507,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3852178.0991735775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3821856.9344261126,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3821897.5409836173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3837220.020491501,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3837128.6885245787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2241837.4915661337,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2241734.457831324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3735745.5341364415,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3735673.493975916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14831177.309860593,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14830397.18309868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6402477.269999735,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6402414.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58702.221700002614,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58699.76999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 324369.35711573745,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 324354.3453510434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 260742.78388280448,
            "unit": "ns/iter",
            "extra": "iterations: 3276\ncpu: 260733.08913308842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 259377.5719939264,
            "unit": "ns/iter",
            "extra": "iterations: 3285\ncpu: 259364.65753424607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 257855.19993971032,
            "unit": "ns/iter",
            "extra": "iterations: 3316\ncpu: 257849.4873341377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 501484.6969999098,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501473.4000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4739285.710660034,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4739153.299492368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3839724.489711941,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3839454.732510271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3781468.6544716945,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3781104.06504063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3786455.975609823,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3786311.788617865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2221568.1393643087,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2221456.234718824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3704169.920318606,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3703968.525896419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6099.11230573991,
            "unit": "ns/iter",
            "extra": "iterations: 115052\ncpu: 6098.782289747225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41655.944992864584,
            "unit": "ns/iter",
            "extra": "iterations: 16816\ncpu: 41651.96241674603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32693.813810861473,
            "unit": "ns/iter",
            "extra": "iterations: 21360\ncpu: 32691.807116104712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30294.60726187087,
            "unit": "ns/iter",
            "extra": "iterations: 23107\ncpu: 30291.517721902375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24607.336744022567,
            "unit": "ns/iter",
            "extra": "iterations: 28440\ncpu: 24605.685654008426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 187662.69416823454,
            "unit": "ns/iter",
            "extra": "iterations: 3721\ncpu: 187649.12657887803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 313565.08678924467,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 313542.58230012865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78111.28836066996,
            "unit": "ns/iter",
            "extra": "iterations: 8961\ncpu: 78103.8946546159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78130.47371952349,
            "unit": "ns/iter",
            "extra": "iterations: 8942\ncpu: 78130.3064191453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 78448.18335195658,
            "unit": "ns/iter",
            "extra": "iterations: 8950\ncpu: 78442.5586592186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162870.58420682763,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 162856.81341719086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148452.92990653779,
            "unit": "ns/iter",
            "extra": "iterations: 4708\ncpu: 148443.67034834102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46039.45757575351,
            "unit": "ns/iter",
            "extra": "iterations: 15180\ncpu: 46034.986824769454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234591.7916116172,
            "unit": "ns/iter",
            "extra": "iterations: 3028\ncpu: 234571.49933949506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 187296.52540107182,
            "unit": "ns/iter",
            "extra": "iterations: 3740\ncpu: 187278.79679144121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 186656.73290598154,
            "unit": "ns/iter",
            "extra": "iterations: 3744\ncpu: 186645.4861111129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 186922.583845931,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 186907.14094677745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 341860.1669106939,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 341832.45485603233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1340528.651340977,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1340395.593869729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1117734.0637957102,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1117645.9330143419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1111320.6492062826,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1111332.8571428477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1119706.5821370212,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1119655.661881982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 718450.3350462583,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 718401.4388489157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1104479.535432995,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1104375.5905511824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46933.55419990615,
            "unit": "ns/iter",
            "extra": "iterations: 14917\ncpu: 46930.47529664199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 234331.05589023675,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 234298.49397590218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 189471.6858922468,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 189459.13891145398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 189893.58804345637,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 189876.08695652307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 189701.2790886839,
            "unit": "ns/iter",
            "extra": "iterations: 3687\ncpu: 189686.92704095592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 344876.2705765959,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 344832.7747659001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1338037.4176245697,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1337964.7509578527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1117471.0429252125,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1117373.2909380104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1123257.9102564245,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1123251.442307695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1119657.4983923007,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1119651.4469453346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 715236.7123983903,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 715141.2601626018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1108756.6148970404,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1108696.196513478 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394243648,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16378.561209626874,
            "unit": "ns/iter",
            "extra": "iterations: 43253\ncpu: 16377.978406122118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 153111.8081869259,
            "unit": "ns/iter",
            "extra": "iterations: 5521\ncpu: 153109.2917949647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 289283.3462308296,
            "unit": "ns/iter",
            "extra": "iterations: 2998\ncpu: 289273.14876584377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 425024.86909448187,
            "unit": "ns/iter",
            "extra": "iterations: 2032\ncpu: 425013.82874015754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 564561.9358808403,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 564558.8730569949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 564170.1440000021,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564155.5999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 674291.3401162918,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 674287.6453488372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 783990.1385135057,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 783976.0979729729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 894187.8819577675,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 894144.8176583482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13042.400572991242,
            "unit": "ns/iter",
            "extra": "iterations: 53753\ncpu: 13041.770691868358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10810.881028592876,
            "unit": "ns/iter",
            "extra": "iterations: 64982\ncpu: 10810.695269459242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10789.8713899063,
            "unit": "ns/iter",
            "extra": "iterations: 65026\ncpu: 10789.685664195858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10808.712501926706,
            "unit": "ns/iter",
            "extra": "iterations: 64870\ncpu: 10808.615692924319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18517.99058735895,
            "unit": "ns/iter",
            "extra": "iterations: 37609\ncpu: 18517.785636416826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61604.138832854136,
            "unit": "ns/iter",
            "extra": "iterations: 13880\ncpu: 61601.527377521525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 343784.2031375608,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 343782.3411102172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 265322.5348909633,
            "unit": "ns/iter",
            "extra": "iterations: 3210\ncpu: 265317.8504672893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 263940.59352629556,
            "unit": "ns/iter",
            "extra": "iterations: 3213\ncpu: 263939.68253968185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 262416.6320346312,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 262408.53432282043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 540463.6760000017,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540470.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4683644.313131469,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4683515.656565647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3802484.261224231,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3802406.53061224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3785360.1747966846,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3785280.8943089345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3788775.7926827865,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3788669.9186991826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2208180.2267304873,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2208176.8496420044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3696639.2479998833,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3696480.8000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14537946.164383257,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14537524.657534253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6525272.600000563,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6525032.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18281095.637930855,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18280803.448275823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 68762.44986252497,
            "unit": "ns/iter",
            "extra": "iterations: 12366\ncpu: 68760.2377486658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 364908.25425168936,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 364901.40306122485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 292281.5903655573,
            "unit": "ns/iter",
            "extra": "iterations: 2927\ncpu: 292275.33310556953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 295413.9717825129,
            "unit": "ns/iter",
            "extra": "iterations: 2906\ncpu: 295402.5808671715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 293554.8741880145,
            "unit": "ns/iter",
            "extra": "iterations: 2925\ncpu: 293554.01709401765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 552020.5059999626,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552005.6999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4753389.729591609,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4753291.326530598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3852421.293388507,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3852178.0991735775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3821856.9344261126,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3821897.5409836173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3837220.020491501,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3837128.6885245787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2241837.4915661337,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2241734.457831324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3735745.5341364415,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3735673.493975916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14831177.309860593,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14830397.18309868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6402477.269999735,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6402414.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58702.221700002614,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58699.76999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 324369.35711573745,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 324354.3453510434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 260742.78388280448,
            "unit": "ns/iter",
            "extra": "iterations: 3276\ncpu: 260733.08913308842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 259377.5719939264,
            "unit": "ns/iter",
            "extra": "iterations: 3285\ncpu: 259364.65753424607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 257855.19993971032,
            "unit": "ns/iter",
            "extra": "iterations: 3316\ncpu: 257849.4873341377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 501484.6969999098,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501473.4000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4739285.710660034,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4739153.299492368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3839724.489711941,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3839454.732510271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3781468.6544716945,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3781104.06504063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3786455.975609823,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3786311.788617865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2221568.1393643087,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2221456.234718824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3704169.920318606,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3703968.525896419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6099.11230573991,
            "unit": "ns/iter",
            "extra": "iterations: 115052\ncpu: 6098.782289747225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41655.944992864584,
            "unit": "ns/iter",
            "extra": "iterations: 16816\ncpu: 41651.96241674603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32693.813810861473,
            "unit": "ns/iter",
            "extra": "iterations: 21360\ncpu: 32691.807116104712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30294.60726187087,
            "unit": "ns/iter",
            "extra": "iterations: 23107\ncpu: 30291.517721902375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24607.336744022567,
            "unit": "ns/iter",
            "extra": "iterations: 28440\ncpu: 24605.685654008426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 187662.69416823454,
            "unit": "ns/iter",
            "extra": "iterations: 3721\ncpu: 187649.12657887803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 313565.08678924467,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 313542.58230012865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78111.28836066996,
            "unit": "ns/iter",
            "extra": "iterations: 8961\ncpu: 78103.8946546159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78130.47371952349,
            "unit": "ns/iter",
            "extra": "iterations: 8942\ncpu: 78130.3064191453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 78448.18335195658,
            "unit": "ns/iter",
            "extra": "iterations: 8950\ncpu: 78442.5586592186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162870.58420682763,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 162856.81341719086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148452.92990653779,
            "unit": "ns/iter",
            "extra": "iterations: 4708\ncpu: 148443.67034834102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46039.45757575351,
            "unit": "ns/iter",
            "extra": "iterations: 15180\ncpu: 46034.986824769454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234591.7916116172,
            "unit": "ns/iter",
            "extra": "iterations: 3028\ncpu: 234571.49933949506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 187296.52540107182,
            "unit": "ns/iter",
            "extra": "iterations: 3740\ncpu: 187278.79679144121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 186656.73290598154,
            "unit": "ns/iter",
            "extra": "iterations: 3744\ncpu: 186645.4861111129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 186922.583845931,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 186907.14094677745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 341860.1669106939,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 341832.45485603233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1340528.651340977,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1340395.593869729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1117734.0637957102,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1117645.9330143419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1111320.6492062826,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1111332.8571428477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1119706.5821370212,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1119655.661881982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 718450.3350462583,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 718401.4388489157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1104479.535432995,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1104375.5905511824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46933.55419990615,
            "unit": "ns/iter",
            "extra": "iterations: 14917\ncpu: 46930.47529664199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 234331.05589023675,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 234298.49397590218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 189471.6858922468,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 189459.13891145398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 189893.58804345637,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 189876.08695652307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 189701.2790886839,
            "unit": "ns/iter",
            "extra": "iterations: 3687\ncpu: 189686.92704095592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 344876.2705765959,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 344832.7747659001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1338037.4176245697,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1337964.7509578527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1117471.0429252125,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1117373.2909380104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1123257.9102564245,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1123251.442307695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1119657.4983923007,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1119651.4469453346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 715236.7123983903,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 715141.2601626018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1108756.6148970404,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1108696.196513478 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394243648,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16378.561209626874,
            "unit": "ns/iter",
            "extra": "iterations: 43253\ncpu: 16377.978406122118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 153111.8081869259,
            "unit": "ns/iter",
            "extra": "iterations: 5521\ncpu: 153109.2917949647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 289283.3462308296,
            "unit": "ns/iter",
            "extra": "iterations: 2998\ncpu: 289273.14876584377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 425024.86909448187,
            "unit": "ns/iter",
            "extra": "iterations: 2032\ncpu: 425013.82874015754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 564561.9358808403,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 564558.8730569949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 564170.1440000021,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564155.5999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 674291.3401162918,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 674287.6453488372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 783990.1385135057,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 783976.0979729729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 894187.8819577675,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 894144.8176583482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13042.400572991242,
            "unit": "ns/iter",
            "extra": "iterations: 53753\ncpu: 13041.770691868358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10810.881028592876,
            "unit": "ns/iter",
            "extra": "iterations: 64982\ncpu: 10810.695269459242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10789.8713899063,
            "unit": "ns/iter",
            "extra": "iterations: 65026\ncpu: 10789.685664195858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10808.712501926706,
            "unit": "ns/iter",
            "extra": "iterations: 64870\ncpu: 10808.615692924319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18517.99058735895,
            "unit": "ns/iter",
            "extra": "iterations: 37609\ncpu: 18517.785636416826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61604.138832854136,
            "unit": "ns/iter",
            "extra": "iterations: 13880\ncpu: 61601.527377521525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 343784.2031375608,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 343782.3411102172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 265322.5348909633,
            "unit": "ns/iter",
            "extra": "iterations: 3210\ncpu: 265317.8504672893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 263940.59352629556,
            "unit": "ns/iter",
            "extra": "iterations: 3213\ncpu: 263939.68253968185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 262416.6320346312,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 262408.53432282043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 540463.6760000017,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540470.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4683644.313131469,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4683515.656565647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3802484.261224231,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3802406.53061224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3785360.1747966846,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3785280.8943089345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3788775.7926827865,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3788669.9186991826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2208180.2267304873,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2208176.8496420044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3696639.2479998833,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3696480.8000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14537946.164383257,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14537524.657534253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6525272.600000563,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6525032.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18281095.637930855,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18280803.448275823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 68762.44986252497,
            "unit": "ns/iter",
            "extra": "iterations: 12366\ncpu: 68760.2377486658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 364908.25425168936,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 364901.40306122485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 292281.5903655573,
            "unit": "ns/iter",
            "extra": "iterations: 2927\ncpu: 292275.33310556953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 295413.9717825129,
            "unit": "ns/iter",
            "extra": "iterations: 2906\ncpu: 295402.5808671715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 293554.8741880145,
            "unit": "ns/iter",
            "extra": "iterations: 2925\ncpu: 293554.01709401765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 552020.5059999626,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552005.6999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4753389.729591609,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4753291.326530598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3852421.293388507,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3852178.0991735775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3821856.9344261126,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3821897.5409836173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3837220.020491501,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3837128.6885245787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2241837.4915661337,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2241734.457831324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3735745.5341364415,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3735673.493975916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14831177.309860593,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14830397.18309868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6402477.269999735,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6402414.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58702.221700002614,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58699.76999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 324369.35711573745,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 324354.3453510434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 260742.78388280448,
            "unit": "ns/iter",
            "extra": "iterations: 3276\ncpu: 260733.08913308842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 259377.5719939264,
            "unit": "ns/iter",
            "extra": "iterations: 3285\ncpu: 259364.65753424607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 257855.19993971032,
            "unit": "ns/iter",
            "extra": "iterations: 3316\ncpu: 257849.4873341377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 501484.6969999098,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501473.4000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4739285.710660034,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4739153.299492368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3839724.489711941,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3839454.732510271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3781468.6544716945,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3781104.06504063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3786455.975609823,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3786311.788617865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2221568.1393643087,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2221456.234718824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3704169.920318606,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3703968.525896419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6099.11230573991,
            "unit": "ns/iter",
            "extra": "iterations: 115052\ncpu: 6098.782289747225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41655.944992864584,
            "unit": "ns/iter",
            "extra": "iterations: 16816\ncpu: 41651.96241674603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32693.813810861473,
            "unit": "ns/iter",
            "extra": "iterations: 21360\ncpu: 32691.807116104712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30294.60726187087,
            "unit": "ns/iter",
            "extra": "iterations: 23107\ncpu: 30291.517721902375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24607.336744022567,
            "unit": "ns/iter",
            "extra": "iterations: 28440\ncpu: 24605.685654008426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 187662.69416823454,
            "unit": "ns/iter",
            "extra": "iterations: 3721\ncpu: 187649.12657887803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 313565.08678924467,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 313542.58230012865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78111.28836066996,
            "unit": "ns/iter",
            "extra": "iterations: 8961\ncpu: 78103.8946546159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78130.47371952349,
            "unit": "ns/iter",
            "extra": "iterations: 8942\ncpu: 78130.3064191453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 78448.18335195658,
            "unit": "ns/iter",
            "extra": "iterations: 8950\ncpu: 78442.5586592186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162870.58420682763,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 162856.81341719086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148452.92990653779,
            "unit": "ns/iter",
            "extra": "iterations: 4708\ncpu: 148443.67034834102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46039.45757575351,
            "unit": "ns/iter",
            "extra": "iterations: 15180\ncpu: 46034.986824769454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234591.7916116172,
            "unit": "ns/iter",
            "extra": "iterations: 3028\ncpu: 234571.49933949506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 187296.52540107182,
            "unit": "ns/iter",
            "extra": "iterations: 3740\ncpu: 187278.79679144121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 186656.73290598154,
            "unit": "ns/iter",
            "extra": "iterations: 3744\ncpu: 186645.4861111129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 186922.583845931,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 186907.14094677745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 341860.1669106939,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 341832.45485603233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1340528.651340977,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1340395.593869729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1117734.0637957102,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1117645.9330143419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1111320.6492062826,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1111332.8571428477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1119706.5821370212,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1119655.661881982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 718450.3350462583,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 718401.4388489157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1104479.535432995,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1104375.5905511824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46933.55419990615,
            "unit": "ns/iter",
            "extra": "iterations: 14917\ncpu: 46930.47529664199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 234331.05589023675,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 234298.49397590218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 189471.6858922468,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 189459.13891145398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 189893.58804345637,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 189876.08695652307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 189701.2790886839,
            "unit": "ns/iter",
            "extra": "iterations: 3687\ncpu: 189686.92704095592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 344876.2705765959,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 344832.7747659001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1338037.4176245697,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1337964.7509578527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1117471.0429252125,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1117373.2909380104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1123257.9102564245,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1123251.442307695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1119657.4983923007,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1119651.4469453346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 715236.7123983903,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 715141.2601626018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1108756.6148970404,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1108696.196513478 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}