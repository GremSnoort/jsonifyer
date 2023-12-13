window.BENCHMARK_DATA = {
  "lastUpdate": 1702492890866,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-7 18.04 Release c++-17": [
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
        "date": 1702490282102,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 576.0609784456941,
            "unit": "ns/iter",
            "extra": "iterations: 1234141\ncpu: 576.0221076846162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5320.600200000172,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5320.637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10248.337573818084,
            "unit": "ns/iter",
            "extra": "iterations: 81280\ncpu: 10247.976131889767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15542.420479022681,
            "unit": "ns/iter",
            "extra": "iterations: 54319\ncpu: 15541.924556784921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20538.216340848147,
            "unit": "ns/iter",
            "extra": "iterations: 40769\ncpu: 20537.396060732408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25096.638883005988,
            "unit": "ns/iter",
            "extra": "iterations: 33053\ncpu: 25095.843039966116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29992.65081107566,
            "unit": "ns/iter",
            "extra": "iterations: 28234\ncpu: 29992.48423886097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34936.455856608525,
            "unit": "ns/iter",
            "extra": "iterations: 23990\ncpu: 34936.315131304706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39927.21392060012,
            "unit": "ns/iter",
            "extra": "iterations: 20933\ncpu: 39926.403286676534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 547.8226953961287,
            "unit": "ns/iter",
            "extra": "iterations: 1278224\ncpu: 547.8244814680372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 404.7576924568348,
            "unit": "ns/iter",
            "extra": "iterations: 1728349\ncpu: 404.7506608908279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 422.22151663683127,
            "unit": "ns/iter",
            "extra": "iterations: 1655993\ncpu: 422.210480358311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 411.51644619172265,
            "unit": "ns/iter",
            "extra": "iterations: 1716446\ncpu: 411.5038282590887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 847.3175553839924,
            "unit": "ns/iter",
            "extra": "iterations: 824653\ncpu: 847.3111720929879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1714.5674377005535,
            "unit": "ns/iter",
            "extra": "iterations: 465133\ncpu: 1714.5205779852242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9502.087399137132,
            "unit": "ns/iter",
            "extra": "iterations: 85264\ncpu: 9501.897635578915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6837.189919327103,
            "unit": "ns/iter",
            "extra": "iterations: 118008\ncpu: 6837.033082502886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7018.322432877385,
            "unit": "ns/iter",
            "extra": "iterations: 114827\ncpu: 7018.355439051806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6748.055551352495,
            "unit": "ns/iter",
            "extra": "iterations: 118971\ncpu: 6747.912516495609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36321.648242529125,
            "unit": "ns/iter",
            "extra": "iterations: 22760\ncpu: 36321.489455184594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 247367.1312817512,
            "unit": "ns/iter",
            "extra": "iterations: 3542\ncpu: 247362.3094297005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185291.94419643702,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 185292.9910714285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 193535.15420000348,
            "unit": "ns/iter",
            "extra": "iterations: 5000\ncpu: 193526.33999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 185631.2266459002,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 185626.86832740172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97823.51507223827,
            "unit": "ns/iter",
            "extra": "iterations: 8791\ncpu: 97819.82709589356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184732.92511768028,
            "unit": "ns/iter",
            "extra": "iterations: 4674\ncpu: 184728.13436029103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5055.42536663649,
            "unit": "ns/iter",
            "extra": "iterations: 159627\ncpu: 5055.175502891103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23533.696211683848,
            "unit": "ns/iter",
            "extra": "iterations: 34580\ncpu: 23532.865818392132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18173.462359758345,
            "unit": "ns/iter",
            "extra": "iterations: 46081\ncpu: 18172.537488335776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18381.38707344202,
            "unit": "ns/iter",
            "extra": "iterations: 45627\ncpu: 18380.717557586468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17658.24542776637,
            "unit": "ns/iter",
            "extra": "iterations: 47187\ncpu: 17655.733570686833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50237.35437011817,
            "unit": "ns/iter",
            "extra": "iterations: 16384\ncpu: 50235.00366210928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 271131.46964066447,
            "unit": "ns/iter",
            "extra": "iterations: 3228\ncpu: 271118.21561338275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 205158.68970448503,
            "unit": "ns/iter",
            "extra": "iterations: 4196\ncpu: 205152.95519542508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204745.40745106866,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 204738.34001414754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 204035.1863339661,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 204030.317164179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108342.42662329263,
            "unit": "ns/iter",
            "extra": "iterations: 7993\ncpu: 108342.03678218495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197620.5788754658,
            "unit": "ns/iter",
            "extra": "iterations: 4393\ncpu: 197617.82381060696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 789877.8014949899,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 789865.448504982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 449762.0379170988,
            "unit": "ns/iter",
            "extra": "iterations: 1978\ncpu: 449733.56926188356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1713.0154990821604,
            "unit": "ns/iter",
            "extra": "iterations: 464092\ncpu: 1712.9638088999673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9414.840891348123,
            "unit": "ns/iter",
            "extra": "iterations: 87104\ncpu: 9414.39773144748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7073.643697797826,
            "unit": "ns/iter",
            "extra": "iterations: 115896\ncpu: 7073.276903430707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7114.976770803947,
            "unit": "ns/iter",
            "extra": "iterations: 115329\ncpu: 7114.846222545963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6719.904938773765,
            "unit": "ns/iter",
            "extra": "iterations: 120617\ncpu: 6719.652287820109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34542.07346302002,
            "unit": "ns/iter",
            "extra": "iterations: 24366\ncpu: 34540.35541328077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 244129.76298231597,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 244125.23933855526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 187042.9882018895,
            "unit": "ns/iter",
            "extra": "iterations: 4577\ncpu: 187040.44133711967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 192804.66076501986,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 192803.43169398783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 191913.49574327207,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 191909.67037764678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96764.21558413068,
            "unit": "ns/iter",
            "extra": "iterations: 9022\ncpu: 96762.5027710045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 183242.65573426563,
            "unit": "ns/iter",
            "extra": "iterations: 4787\ncpu: 183230.12325047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 181.81968458826873,
            "unit": "ns/iter",
            "extra": "iterations: 3850586\ncpu: 181.8208709012095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1412.2941314489424,
            "unit": "ns/iter",
            "extra": "iterations: 502918\ncpu: 1412.2791389451122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1029.0589180077468,
            "unit": "ns/iter",
            "extra": "iterations: 679894\ncpu: 1029.0542349248576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1031.3502313302472,
            "unit": "ns/iter",
            "extra": "iterations: 664418\ncpu: 1031.3058947830948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 838.7011596338976,
            "unit": "ns/iter",
            "extra": "iterations: 833194\ncpu: 838.6799472871865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9725.68575809194,
            "unit": "ns/iter",
            "extra": "iterations: 69787\ncpu: 9725.53914052766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12533.923750112881,
            "unit": "ns/iter",
            "extra": "iterations: 55305\ncpu: 12533.814302504297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2778.3872631475397,
            "unit": "ns/iter",
            "extra": "iterations: 251475\ncpu: 2778.3735957848794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2820.2524324478672,
            "unit": "ns/iter",
            "extra": "iterations: 247179\ncpu: 2820.1809215184308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2774.5722368410975,
            "unit": "ns/iter",
            "extra": "iterations: 253098\ncpu: 2774.591265043586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5194.886785606049,
            "unit": "ns/iter",
            "extra": "iterations: 135027\ncpu: 5194.8410317936405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5230.551623662335,
            "unit": "ns/iter",
            "extra": "iterations: 140023\ncpu: 5230.5078451397585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1945.8972897487913,
            "unit": "ns/iter",
            "extra": "iterations: 360188\ncpu: 1945.8438371072807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10155.504975991998,
            "unit": "ns/iter",
            "extra": "iterations: 68730\ncpu: 10155.349919976676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8212.85065049031,
            "unit": "ns/iter",
            "extra": "iterations: 85397\ncpu: 8212.614026253857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8121.47532784036,
            "unit": "ns/iter",
            "extra": "iterations: 86170\ncpu: 8121.230126494138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8087.389224600488,
            "unit": "ns/iter",
            "extra": "iterations: 86549\ncpu: 8087.072063224299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17581.783260024702,
            "unit": "ns/iter",
            "extra": "iterations: 39785\ncpu: 17581.176322734515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56257.2931409708,
            "unit": "ns/iter",
            "extra": "iterations: 12407\ncpu: 56257.652937857354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44248.9284267811,
            "unit": "ns/iter",
            "extra": "iterations: 15802\ncpu: 44248.37995190521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43829.70566108508,
            "unit": "ns/iter",
            "extra": "iterations: 15951\ncpu: 43828.49978057803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44158.17405562328,
            "unit": "ns/iter",
            "extra": "iterations: 15857\ncpu: 44156.845557167304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25559.92370879151,
            "unit": "ns/iter",
            "extra": "iterations: 27513\ncpu: 25559.37556791314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43516.99784654755,
            "unit": "ns/iter",
            "extra": "iterations: 16253\ncpu: 43515.54789884934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1944.0249841248017,
            "unit": "ns/iter",
            "extra": "iterations: 360629\ncpu: 1943.9448851867276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10357.6147830585,
            "unit": "ns/iter",
            "extra": "iterations: 67645\ncpu: 10357.142434769841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8154.203739568388,
            "unit": "ns/iter",
            "extra": "iterations: 85197\ncpu: 8154.255431529313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8018.274324741317,
            "unit": "ns/iter",
            "extra": "iterations: 87411\ncpu: 8018.329500863775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8020.418135329888,
            "unit": "ns/iter",
            "extra": "iterations: 87608\ncpu: 8020.315496301755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17776.590207491634,
            "unit": "ns/iter",
            "extra": "iterations: 39520\ncpu: 17775.637651821664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54695.09388492785,
            "unit": "ns/iter",
            "extra": "iterations: 12739\ncpu: 54693.86137059432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42432.732658168505,
            "unit": "ns/iter",
            "extra": "iterations: 16391\ncpu: 42432.115185163144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42297.38270708559,
            "unit": "ns/iter",
            "extra": "iterations: 16527\ncpu: 42296.71446723539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42266.6379530146,
            "unit": "ns/iter",
            "extra": "iterations: 16473\ncpu: 42265.883567049605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25151.04932350455,
            "unit": "ns/iter",
            "extra": "iterations: 27938\ncpu: 25151.1919249768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42286.707111460586,
            "unit": "ns/iter",
            "extra": "iterations: 16607\ncpu: 42285.656650809906 ns\nthreads: 1"
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
        "date": 1702492889606,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 581.4438965927085,
            "unit": "ns/iter",
            "extra": "iterations: 1199838\ncpu: 581.4311598732496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5404.8079400001825,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5404.649999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10428.506428955923,
            "unit": "ns/iter",
            "extra": "iterations: 79873\ncpu: 10428.418864948102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15676.463518104794,
            "unit": "ns/iter",
            "extra": "iterations: 53273\ncpu: 15676.27315901113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20744.04497851135,
            "unit": "ns/iter",
            "extra": "iterations: 40486\ncpu: 20744.010275156845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25166.13359124655,
            "unit": "ns/iter",
            "extra": "iterations: 33086\ncpu: 25165.100042313963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30057.44533180809,
            "unit": "ns/iter",
            "extra": "iterations: 27923\ncpu: 30056.297675751164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35018.91886028893,
            "unit": "ns/iter",
            "extra": "iterations: 23971\ncpu: 35017.46276751073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39811.52067250995,
            "unit": "ns/iter",
            "extra": "iterations: 21115\ncpu: 39811.35211934643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 561.6074458908154,
            "unit": "ns/iter",
            "extra": "iterations: 1254222\ncpu: 561.5989035433925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 423.4146980785603,
            "unit": "ns/iter",
            "extra": "iterations: 1652665\ncpu: 423.41460610589576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 429.4019098658781,
            "unit": "ns/iter",
            "extra": "iterations: 1631214\ncpu: 429.4009247100623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 418.8011485721306,
            "unit": "ns/iter",
            "extra": "iterations: 1669377\ncpu: 418.79599395463055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 866.2167934001072,
            "unit": "ns/iter",
            "extra": "iterations: 808258\ncpu: 866.2017573596547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1724.1900364693074,
            "unit": "ns/iter",
            "extra": "iterations: 462306\ncpu: 1724.178141750271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9712.745502714619,
            "unit": "ns/iter",
            "extra": "iterations: 84551\ncpu: 9712.359404383149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7498.072826049173,
            "unit": "ns/iter",
            "extra": "iterations: 112652\ncpu: 7498.050633810334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7412.784296102192,
            "unit": "ns/iter",
            "extra": "iterations: 109043\ncpu: 7412.716084480419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7202.276797468042,
            "unit": "ns/iter",
            "extra": "iterations: 112436\ncpu: 7202.224376534193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36247.82369435864,
            "unit": "ns/iter",
            "extra": "iterations: 22824\ncpu: 36247.20469681033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 249006.70598341114,
            "unit": "ns/iter",
            "extra": "iterations: 3493\ncpu: 249002.92012596678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 188123.2506830715,
            "unit": "ns/iter",
            "extra": "iterations: 4392\ncpu: 188119.60382513667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 172305.47479861422,
            "unit": "ns/iter",
            "extra": "iterations: 4345\ncpu: 172305.20138089787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 194638.1718611141,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 194629.83081032985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98238.65980313605,
            "unit": "ns/iter",
            "extra": "iterations: 8839\ncpu: 98238.53377078871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184176.00297682025,
            "unit": "ns/iter",
            "extra": "iterations: 4703\ncpu: 184164.3419094193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 4968.159875148296,
            "unit": "ns/iter",
            "extra": "iterations: 162752\ncpu: 4968.151543452606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23818.71123410951,
            "unit": "ns/iter",
            "extra": "iterations: 34689\ncpu: 23818.3055147164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18096.70971687882,
            "unit": "ns/iter",
            "extra": "iterations: 40054\ncpu: 18096.699455734775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18237.089261078578,
            "unit": "ns/iter",
            "extra": "iterations: 46392\ncpu: 18236.821003621324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18332.70600996565,
            "unit": "ns/iter",
            "extra": "iterations: 46556\ncpu: 18332.524271844653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51066.720965123815,
            "unit": "ns/iter",
            "extra": "iterations: 15998\ncpu: 51066.27078384788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 271277.4965752908,
            "unit": "ns/iter",
            "extra": "iterations: 3212\ncpu: 271267.5902864251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 206577.59210524388,
            "unit": "ns/iter",
            "extra": "iterations: 4256\ncpu: 206577.06766917204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204563.282567957,
            "unit": "ns/iter",
            "extra": "iterations: 4268\ncpu: 204560.84817244564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 204871.99528744046,
            "unit": "ns/iter",
            "extra": "iterations: 4244\ncpu: 204867.22431668197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109056.34310410469,
            "unit": "ns/iter",
            "extra": "iterations: 7983\ncpu: 109054.79143179237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197264.5400271589,
            "unit": "ns/iter",
            "extra": "iterations: 4422\ncpu: 197261.1035730449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 796644.9975164239,
            "unit": "ns/iter",
            "extra": "iterations: 1208\ncpu: 796595.8609271512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 444605.2162568594,
            "unit": "ns/iter",
            "extra": "iterations: 1993\ncpu: 444594.53085800254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1730.8927244722938,
            "unit": "ns/iter",
            "extra": "iterations: 463554\ncpu: 1730.8505589424406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9324.219452783425,
            "unit": "ns/iter",
            "extra": "iterations: 88265\ncpu: 9324.229309465825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7073.89819453642,
            "unit": "ns/iter",
            "extra": "iterations: 116369\ncpu: 7073.779099244665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6979.257256595683,
            "unit": "ns/iter",
            "extra": "iterations: 118065\ncpu: 6979.153855926792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7030.21547675855,
            "unit": "ns/iter",
            "extra": "iterations: 117544\ncpu: 7029.876471789289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34896.48944058447,
            "unit": "ns/iter",
            "extra": "iterations: 24007\ncpu: 34896.301078852004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 259280.48705270336,
            "unit": "ns/iter",
            "extra": "iterations: 3437\ncpu: 259273.72708757507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 193179.20623502278,
            "unit": "ns/iter",
            "extra": "iterations: 4587\ncpu: 193177.08742097276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 193939.18964390756,
            "unit": "ns/iter",
            "extra": "iterations: 4577\ncpu: 193935.06663753546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 194021.51317217443,
            "unit": "ns/iter",
            "extra": "iterations: 4593\ncpu: 194020.74896581686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96902.69159700316,
            "unit": "ns/iter",
            "extra": "iterations: 9092\ncpu: 96897.48130224428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 183927.62761505615,
            "unit": "ns/iter",
            "extra": "iterations: 4780\ncpu: 183926.19246861877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.6248296297853,
            "unit": "ns/iter",
            "extra": "iterations: 3870247\ncpu: 180.6204875296077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1414.0894097134656,
            "unit": "ns/iter",
            "extra": "iterations: 495539\ncpu: 1414.1050452133848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1166.1975904057513,
            "unit": "ns/iter",
            "extra": "iterations: 596947\ncpu: 1166.1492561316088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1094.369318485643,
            "unit": "ns/iter",
            "extra": "iterations: 635614\ncpu: 1094.3454675321714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 868.3349824069138,
            "unit": "ns/iter",
            "extra": "iterations: 811971\ncpu: 868.3239918666994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9846.179512005929,
            "unit": "ns/iter",
            "extra": "iterations: 72296\ncpu: 9845.949983401575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12619.82046772235,
            "unit": "ns/iter",
            "extra": "iterations: 55717\ncpu: 12619.940054202516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2812.3499374188345,
            "unit": "ns/iter",
            "extra": "iterations: 249276\ncpu: 2812.3144626839317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2813.358597982598,
            "unit": "ns/iter",
            "extra": "iterations: 249954\ncpu: 2813.386063035584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2760.712504300997,
            "unit": "ns/iter",
            "extra": "iterations: 252849\ncpu: 2760.6903725148272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5188.340926780827,
            "unit": "ns/iter",
            "extra": "iterations: 134897\ncpu: 5188.400038547943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5256.334080180019,
            "unit": "ns/iter",
            "extra": "iterations: 133450\ncpu: 5256.2787560884135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1932.4618995469514,
            "unit": "ns/iter",
            "extra": "iterations: 363434\ncpu: 1932.4452307709428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10044.295374280488,
            "unit": "ns/iter",
            "extra": "iterations: 69654\ncpu: 10044.274557096387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8181.9708883402645,
            "unit": "ns/iter",
            "extra": "iterations: 86048\ncpu: 8181.7996931946045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8113.869676052335,
            "unit": "ns/iter",
            "extra": "iterations: 85909\ncpu: 8113.714511867289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8001.140694381988,
            "unit": "ns/iter",
            "extra": "iterations: 86926\ncpu: 8000.9260750523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17533.972962785345,
            "unit": "ns/iter",
            "extra": "iterations: 39797\ncpu: 17533.746262280987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56614.113773906785,
            "unit": "ns/iter",
            "extra": "iterations: 12393\ncpu: 56613.06382635373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43945.74494156356,
            "unit": "ns/iter",
            "extra": "iterations: 15914\ncpu: 43945.56365464365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43561.42667581176,
            "unit": "ns/iter",
            "extra": "iterations: 16052\ncpu: 43560.11711936255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43992.77894869452,
            "unit": "ns/iter",
            "extra": "iterations: 15942\ncpu: 43993.244260444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25383.57704277249,
            "unit": "ns/iter",
            "extra": "iterations: 27634\ncpu: 25383.27784613111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43701.38576476401,
            "unit": "ns/iter",
            "extra": "iterations: 16129\ncpu: 43701.22140244306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1912.7487522746835,
            "unit": "ns/iter",
            "extra": "iterations: 367068\ncpu: 1912.7175346257357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10335.44884502936,
            "unit": "ns/iter",
            "extra": "iterations: 67794\ncpu: 10335.284833466068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8074.621821775614,
            "unit": "ns/iter",
            "extra": "iterations: 86015\ncpu: 8074.523048305463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8046.844414863827,
            "unit": "ns/iter",
            "extra": "iterations: 87142\ncpu: 8046.762755043501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7974.756353634369,
            "unit": "ns/iter",
            "extra": "iterations: 87627\ncpu: 7974.849076197951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17787.568742235555,
            "unit": "ns/iter",
            "extra": "iterations: 39459\ncpu: 17787.592184292444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54748.94879494416,
            "unit": "ns/iter",
            "extra": "iterations: 12655\ncpu: 54748.80284472517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42503.61337545108,
            "unit": "ns/iter",
            "extra": "iterations: 16463\ncpu: 42503.11000425161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42454.57013960542,
            "unit": "ns/iter",
            "extra": "iterations: 16403\ncpu: 42454.49003231131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42245.677682459034,
            "unit": "ns/iter",
            "extra": "iterations: 16552\ncpu: 42243.84364427291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25094.38638282408,
            "unit": "ns/iter",
            "extra": "iterations: 28420\ncpu: 25094.33849401829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42329.594622049124,
            "unit": "ns/iter",
            "extra": "iterations: 16735\ncpu: 42329.22617269115 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}