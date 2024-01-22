window.BENCHMARK_DATA = {
  "lastUpdate": 1705963420794,
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
        "date": 1702503967304,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 575.1957413350345,
            "unit": "ns/iter",
            "extra": "iterations: 1217142\ncpu: 575.1799707840171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5437.9576999997425,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5437.774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10433.482947379032,
            "unit": "ns/iter",
            "extra": "iterations: 79284\ncpu: 10433.334594621863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15508.823065594663,
            "unit": "ns/iter",
            "extra": "iterations: 53647\ncpu: 15508.69386918187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20557.11832406822,
            "unit": "ns/iter",
            "extra": "iterations: 40837\ncpu: 20557.09772999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25443.515418098283,
            "unit": "ns/iter",
            "extra": "iterations: 32851\ncpu: 25442.46446074703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29724.356952580896,
            "unit": "ns/iter",
            "extra": "iterations: 28155\ncpu: 29724.020600248627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34432.724080822714,
            "unit": "ns/iter",
            "extra": "iterations: 24152\ncpu: 34431.86899635642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39188.23388954526,
            "unit": "ns/iter",
            "extra": "iterations: 21275\ncpu: 39187.71797884843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 546.7019677110065,
            "unit": "ns/iter",
            "extra": "iterations: 1280066\ncpu: 546.6782962753477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 418.3397515327113,
            "unit": "ns/iter",
            "extra": "iterations: 1670562\ncpu: 418.3299392659481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 424.2645324669133,
            "unit": "ns/iter",
            "extra": "iterations: 1649049\ncpu: 424.26325718641516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 410.58785481305097,
            "unit": "ns/iter",
            "extra": "iterations: 1700015\ncpu: 410.5803772319655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 865.4986576822305,
            "unit": "ns/iter",
            "extra": "iterations: 822458\ncpu: 865.4765349719991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1714.4448431130838,
            "unit": "ns/iter",
            "extra": "iterations: 463487\ncpu: 1714.3919894193361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10149.700420389177,
            "unit": "ns/iter",
            "extra": "iterations: 81591\ncpu: 10149.65376083146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7458.471917833265,
            "unit": "ns/iter",
            "extra": "iterations: 109144\ncpu: 7458.319284614831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6983.7764097492245,
            "unit": "ns/iter",
            "extra": "iterations: 115251\ncpu: 6983.538537626564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7080.854811798985,
            "unit": "ns/iter",
            "extra": "iterations: 114479\ncpu: 7080.418242647124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36080.6048810103,
            "unit": "ns/iter",
            "extra": "iterations: 23069\ncpu: 36079.13650353297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 244664.74837618557,
            "unit": "ns/iter",
            "extra": "iterations: 3541\ncpu: 244642.98220841624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184592.10609783346,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 184580.05360732588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 184452.35139353367,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 184438.7736900783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 186004.9460367112,
            "unit": "ns/iter",
            "extra": "iterations: 4466\ncpu: 185999.01477832484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97849.81197739819,
            "unit": "ns/iter",
            "extra": "iterations: 8850\ncpu: 97843.03954802253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186395.60543198534,
            "unit": "ns/iter",
            "extra": "iterations: 4676\ncpu: 186385.65012831448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5085.754899152003,
            "unit": "ns/iter",
            "extra": "iterations: 160538\ncpu: 5085.438338586514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23292.791029128733,
            "unit": "ns/iter",
            "extra": "iterations: 35292\ncpu: 23292.199365295237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17803.113937197424,
            "unit": "ns/iter",
            "extra": "iterations: 45253\ncpu: 17801.915895078775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18020.558506298374,
            "unit": "ns/iter",
            "extra": "iterations: 45337\ncpu: 18019.650616494277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17261.28927853378,
            "unit": "ns/iter",
            "extra": "iterations: 47736\ncpu: 17259.942182001025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50268.98987626418,
            "unit": "ns/iter",
            "extra": "iterations: 16002\ncpu: 50268.06024246986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 270260.97207571246,
            "unit": "ns/iter",
            "extra": "iterations: 3223\ncpu: 270250.69810735324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 206606.49124881232,
            "unit": "ns/iter",
            "extra": "iterations: 4228\ncpu: 206594.91485335943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 206390.6553432563,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 206384.61901391836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205149.32378018193,
            "unit": "ns/iter",
            "extra": "iterations: 4222\ncpu: 205135.52818569425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108190.78975132405,
            "unit": "ns/iter",
            "extra": "iterations: 7962\ncpu: 108185.90806330096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 195436.70733901474,
            "unit": "ns/iter",
            "extra": "iterations: 4442\ncpu: 195423.7280504278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 780032.8794979068,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 780006.4435146409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 438843.3931411548,
            "unit": "ns/iter",
            "extra": "iterations: 2012\ncpu: 438834.2445328019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1619.1639542034052,
            "unit": "ns/iter",
            "extra": "iterations: 507288\ncpu: 1619.0970415227625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9181.02053559268,
            "unit": "ns/iter",
            "extra": "iterations: 88724\ncpu: 9180.916099364284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6647.842292871883,
            "unit": "ns/iter",
            "extra": "iterations: 121193\ncpu: 6647.836921274333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6682.248963334333,
            "unit": "ns/iter",
            "extra": "iterations: 122267\ncpu: 6682.242142197003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6668.383178175327,
            "unit": "ns/iter",
            "extra": "iterations: 123637\ncpu: 6668.237663482607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34460.43312574513,
            "unit": "ns/iter",
            "extra": "iterations: 24247\ncpu: 34460.0321689283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 258146.7596830851,
            "unit": "ns/iter",
            "extra": "iterations: 3408\ncpu: 258142.86971831127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192964.80232812182,
            "unit": "ns/iter",
            "extra": "iterations: 4553\ncpu: 192961.6736217878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 190619.29976122567,
            "unit": "ns/iter",
            "extra": "iterations: 4607\ncpu: 190613.41436943717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 192733.20989276376,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 192732.82994090623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97823.33765652742,
            "unit": "ns/iter",
            "extra": "iterations: 8944\ncpu: 97822.45080500895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 183288.87628866732,
            "unit": "ns/iter",
            "extra": "iterations: 4753\ncpu: 183284.38880706948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.2263854054531,
            "unit": "ns/iter",
            "extra": "iterations: 3873505\ncpu: 180.22116919947203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1396.7879655928716,
            "unit": "ns/iter",
            "extra": "iterations: 496410\ncpu: 1396.783505569996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1031.3395699763603,
            "unit": "ns/iter",
            "extra": "iterations: 679265\ncpu: 1031.3276850713683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1147.325405987913,
            "unit": "ns/iter",
            "extra": "iterations: 610671\ncpu: 1147.3217166035345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 814.6426792059899,
            "unit": "ns/iter",
            "extra": "iterations: 860658\ncpu: 814.6328739173975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9712.7489740559,
            "unit": "ns/iter",
            "extra": "iterations: 71885\ncpu: 9712.296028378662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12664.904880441662,
            "unit": "ns/iter",
            "extra": "iterations: 55036\ncpu: 12664.781234101376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2784.458186903742,
            "unit": "ns/iter",
            "extra": "iterations: 250974\ncpu: 2784.450182090582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2828.2836794748173,
            "unit": "ns/iter",
            "extra": "iterations: 247057\ncpu: 2828.280113496094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2697.0903737390468,
            "unit": "ns/iter",
            "extra": "iterations: 257265\ncpu: 2696.8903659650537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5124.579962713745,
            "unit": "ns/iter",
            "extra": "iterations: 135707\ncpu: 5124.359097172567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5115.259938547181,
            "unit": "ns/iter",
            "extra": "iterations: 136690\ncpu: 5115.000365791224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1936.870512062605,
            "unit": "ns/iter",
            "extra": "iterations: 362026\ncpu: 1936.833266119002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10279.670347026893,
            "unit": "ns/iter",
            "extra": "iterations: 68381\ncpu: 10279.057048010425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8234.471776567578,
            "unit": "ns/iter",
            "extra": "iterations: 84894\ncpu: 8234.170848351967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8128.8720470134695,
            "unit": "ns/iter",
            "extra": "iterations: 85422\ncpu: 8128.537144997835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7910.946304713082,
            "unit": "ns/iter",
            "extra": "iterations: 88667\ncpu: 7910.652215593306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17585.92678885351,
            "unit": "ns/iter",
            "extra": "iterations: 39830\ncpu: 17585.877479286988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54671.32801947424,
            "unit": "ns/iter",
            "extra": "iterations: 12734\ncpu: 54667.70849693714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43186.35304626936,
            "unit": "ns/iter",
            "extra": "iterations: 16233\ncpu: 43185.36930943153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42863.95591490185,
            "unit": "ns/iter",
            "extra": "iterations: 16264\ncpu: 42862.026561731436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43545.53748442737,
            "unit": "ns/iter",
            "extra": "iterations: 16060\ncpu: 43544.67621419648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25277.192615850287,
            "unit": "ns/iter",
            "extra": "iterations: 27708\ncpu: 25276.33174534402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42990.57678223278,
            "unit": "ns/iter",
            "extra": "iterations: 16384\ncpu: 42988.684082030486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1923.8685365018512,
            "unit": "ns/iter",
            "extra": "iterations: 362884\ncpu: 1923.8023721079041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10420.225719827857,
            "unit": "ns/iter",
            "extra": "iterations: 67030\ncpu: 10420.123825152925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8196.033517252932,
            "unit": "ns/iter",
            "extra": "iterations: 85001\ncpu: 8195.687109563327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8152.409007988675,
            "unit": "ns/iter",
            "extra": "iterations: 86612\ncpu: 8152.049369602432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7968.701855391988,
            "unit": "ns/iter",
            "extra": "iterations: 87367\ncpu: 7968.275206885972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17837.98056177488,
            "unit": "ns/iter",
            "extra": "iterations: 39304\ncpu: 17837.650111947667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54156.01174365993,
            "unit": "ns/iter",
            "extra": "iterations: 12858\ncpu: 54155.90293980364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41969.315416067104,
            "unit": "ns/iter",
            "extra": "iterations: 16632\ncpu: 41967.23785473724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42110.50183657923,
            "unit": "ns/iter",
            "extra": "iterations: 16607\ncpu: 42107.82802432665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41946.33939031863,
            "unit": "ns/iter",
            "extra": "iterations: 16730\ncpu: 41945.0687387925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24966.097656527694,
            "unit": "ns/iter",
            "extra": "iterations: 28078\ncpu: 24964.199729325523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41849.17055316016,
            "unit": "ns/iter",
            "extra": "iterations: 16939\ncpu: 41847.145640238414 ns\nthreads: 1"
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
        "date": 1705575604883,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 573.33818010411,
            "unit": "ns/iter",
            "extra": "iterations: 1221982\ncpu: 573.2830761827915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5377.555730000267,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5377.415999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10371.006238691838,
            "unit": "ns/iter",
            "extra": "iterations: 80145\ncpu: 10370.205252978974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15360.23959240465,
            "unit": "ns/iter",
            "extra": "iterations: 53975\ncpu: 15359.377489578506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20357.514407349674,
            "unit": "ns/iter",
            "extra": "iterations: 41576\ncpu: 20355.799018664613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25069.628531921808,
            "unit": "ns/iter",
            "extra": "iterations: 33268\ncpu: 25067.96921967056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30515.866108938833,
            "unit": "ns/iter",
            "extra": "iterations: 27851\ncpu: 30513.73738824457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34980.349286314144,
            "unit": "ns/iter",
            "extra": "iterations: 23820\ncpu: 34978.22837951301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39588.13619137868,
            "unit": "ns/iter",
            "extra": "iterations: 21110\ncpu: 39586.80246328753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 548.0731535395983,
            "unit": "ns/iter",
            "extra": "iterations: 1273978\ncpu: 548.0540480290866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 414.89923896750537,
            "unit": "ns/iter",
            "extra": "iterations: 1685999\ncpu: 414.88162211246805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 422.06916504800034,
            "unit": "ns/iter",
            "extra": "iterations: 1660275\ncpu: 422.04580566472345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 409.1393580368958,
            "unit": "ns/iter",
            "extra": "iterations: 1707824\ncpu: 409.1278141073092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 859.3750556873928,
            "unit": "ns/iter",
            "extra": "iterations: 826040\ncpu: 859.3468839281389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1716.5859945717598,
            "unit": "ns/iter",
            "extra": "iterations: 463506\ncpu: 1716.539375973559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9445.120364605384,
            "unit": "ns/iter",
            "extra": "iterations: 85133\ncpu: 9444.771122831336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7106.599818641292,
            "unit": "ns/iter",
            "extra": "iterations: 112484\ncpu: 7106.376017922564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6929.034707044418,
            "unit": "ns/iter",
            "extra": "iterations: 114847\ncpu: 6928.836626119954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6666.124666644652,
            "unit": "ns/iter",
            "extra": "iterations: 122992\ncpu: 6665.842493820743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36207.558375410525,
            "unit": "ns/iter",
            "extra": "iterations: 22972\ncpu: 36205.928956991076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 245817.5400451294,
            "unit": "ns/iter",
            "extra": "iterations: 3546\ncpu: 245807.21940214306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 172030.2918246946,
            "unit": "ns/iter",
            "extra": "iterations: 4746\ncpu: 172025.49515381374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 174852.6696269972,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 174847.40230905876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 196052.4234476584,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 196048.35238735643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98298.3545875105,
            "unit": "ns/iter",
            "extra": "iterations: 8861\ncpu: 98293.88330888152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186444.46415578702,
            "unit": "ns/iter",
            "extra": "iterations: 4673\ncpu: 186437.49197517667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5193.648694455184,
            "unit": "ns/iter",
            "extra": "iterations: 156946\ncpu: 5193.518152740445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24227.648778051036,
            "unit": "ns/iter",
            "extra": "iterations: 34044\ncpu: 24226.87404535309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18906.80141476518,
            "unit": "ns/iter",
            "extra": "iterations: 44389\ncpu: 18906.0510486832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18877.10606787728,
            "unit": "ns/iter",
            "extra": "iterations: 43755\ncpu: 18875.986744372076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18497.489833435724,
            "unit": "ns/iter",
            "extra": "iterations: 44607\ncpu: 18497.26276145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50510.969470744756,
            "unit": "ns/iter",
            "extra": "iterations: 16476\ncpu: 50507.47754309287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 270571.18552877434,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 270559.3382807685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 205549.42123851227,
            "unit": "ns/iter",
            "extra": "iterations: 4247\ncpu: 205536.63762656058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204664.22500591096,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 204657.220515245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 192531.52501180698,
            "unit": "ns/iter",
            "extra": "iterations: 4238\ncpu: 192523.54884379296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109058.00212846368,
            "unit": "ns/iter",
            "extra": "iterations: 7987\ncpu: 109052.15975960906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 195360.93022731622,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 195349.35854152602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 785339.9012345916,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 785313.4979423897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 432831.5348380744,
            "unit": "ns/iter",
            "extra": "iterations: 2038\ncpu: 432788.9106967645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1717.195248333878,
            "unit": "ns/iter",
            "extra": "iterations: 465100\ncpu: 1717.0905181681355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9358.589396792991,
            "unit": "ns/iter",
            "extra": "iterations: 87615\ncpu: 9357.930719625678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7301.4233831769825,
            "unit": "ns/iter",
            "extra": "iterations: 112149\ncpu: 7301.207322401412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7272.229172743839,
            "unit": "ns/iter",
            "extra": "iterations: 113133\ncpu: 7271.692609583391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7222.008830272183,
            "unit": "ns/iter",
            "extra": "iterations: 114719\ncpu: 7221.4498034327335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35184.33015819869,
            "unit": "ns/iter",
            "extra": "iterations: 23831\ncpu: 35111.54378750371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 260617.1043249634,
            "unit": "ns/iter",
            "extra": "iterations: 3422\ncpu: 260611.6890707172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 189829.65191546016,
            "unit": "ns/iter",
            "extra": "iterations: 4542\ncpu: 189822.63320123308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 193879.37669140444,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 193872.74116106518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 192467.99759248234,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 192459.9693587213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96676.01536266197,
            "unit": "ns/iter",
            "extra": "iterations: 9113\ncpu: 96673.42258312317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 184464.67001045722,
            "unit": "ns/iter",
            "extra": "iterations: 4785\ncpu: 184457.1786833869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.35749943309239,
            "unit": "ns/iter",
            "extra": "iterations: 3845304\ncpu: 180.35312682690505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1409.3064513850816,
            "unit": "ns/iter",
            "extra": "iterations: 495537\ncpu: 1409.2511759969605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1022.3823483545224,
            "unit": "ns/iter",
            "extra": "iterations: 686123\ncpu: 1022.3703330160922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1147.0484320242524,
            "unit": "ns/iter",
            "extra": "iterations: 609225\ncpu: 1146.9836267388928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 830.1767458897444,
            "unit": "ns/iter",
            "extra": "iterations: 843567\ncpu: 830.1510134938902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9860.852905760541,
            "unit": "ns/iter",
            "extra": "iterations: 72253\ncpu: 9860.56911131717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12640.035430355707,
            "unit": "ns/iter",
            "extra": "iterations: 55094\ncpu: 12639.677641848464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2794.468478078396,
            "unit": "ns/iter",
            "extra": "iterations: 250302\ncpu: 2794.4347228547945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2815.886150930822,
            "unit": "ns/iter",
            "extra": "iterations: 247995\ncpu: 2815.7757212846936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2775.6677141298824,
            "unit": "ns/iter",
            "extra": "iterations: 251401\ncpu: 2775.5991424059584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5224.548728782033,
            "unit": "ns/iter",
            "extra": "iterations: 133966\ncpu: 5224.250182882209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5344.352717829082,
            "unit": "ns/iter",
            "extra": "iterations: 131686\ncpu: 5344.2871679601585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1951.2048068011977,
            "unit": "ns/iter",
            "extra": "iterations: 358284\ncpu: 1951.1259224525954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10128.74394103803,
            "unit": "ns/iter",
            "extra": "iterations: 68246\ncpu: 10127.787709169772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8134.169824824941,
            "unit": "ns/iter",
            "extra": "iterations: 85229\ncpu: 8133.840594163953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7999.360835669458,
            "unit": "ns/iter",
            "extra": "iterations: 87738\ncpu: 7999.067678770832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7963.149348512747,
            "unit": "ns/iter",
            "extra": "iterations: 88183\ncpu: 7962.828436319992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17532.223373229866,
            "unit": "ns/iter",
            "extra": "iterations: 39772\ncpu: 17530.285125213748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54661.957491938294,
            "unit": "ns/iter",
            "extra": "iterations: 12727\ncpu: 54660.82344621736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43223.039301579694,
            "unit": "ns/iter",
            "extra": "iterations: 16208\ncpu: 43220.65646594287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43047.8140789763,
            "unit": "ns/iter",
            "extra": "iterations: 16308\ncpu: 43046.60902624456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42807.156110670636,
            "unit": "ns/iter",
            "extra": "iterations: 16373\ncpu: 42804.672326391184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25006.58665947315,
            "unit": "ns/iter",
            "extra": "iterations: 27810\ncpu: 25005.836030204995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42400.082532882916,
            "unit": "ns/iter",
            "extra": "iterations: 16345\ncpu: 42398.94157234641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1905.9259262276837,
            "unit": "ns/iter",
            "extra": "iterations: 368025\ncpu: 1905.903675022042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10400.333487284344,
            "unit": "ns/iter",
            "extra": "iterations: 67121\ncpu: 10399.770563609192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8102.419909219848,
            "unit": "ns/iter",
            "extra": "iterations: 86583\ncpu: 8101.984223230947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8077.893239872001,
            "unit": "ns/iter",
            "extra": "iterations: 86596\ncpu: 8077.5567000785995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7998.543947180425,
            "unit": "ns/iter",
            "extra": "iterations: 86786\ncpu: 7998.386836586528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17829.387000611277,
            "unit": "ns/iter",
            "extra": "iterations: 39248\ncpu: 17829.183652670443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54932.81139659323,
            "unit": "ns/iter",
            "extra": "iterations: 12688\ncpu: 54929.63430012697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42891.5659076945,
            "unit": "ns/iter",
            "extra": "iterations: 16250\ncpu: 42890.307692307666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42826.21799052181,
            "unit": "ns/iter",
            "extra": "iterations: 16253\ncpu: 42825.35531901773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42695.697071593204,
            "unit": "ns/iter",
            "extra": "iterations: 16357\ncpu: 42694.65060830191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24974.228232944486,
            "unit": "ns/iter",
            "extra": "iterations: 28024\ncpu: 24973.59406223241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42120.48783856729,
            "unit": "ns/iter",
            "extra": "iterations: 16651\ncpu: 42118.71959642038 ns\nthreads: 1"
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
        "date": 1705773425935,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 591.9596348007225,
            "unit": "ns/iter",
            "extra": "iterations: 1224099\ncpu: 591.932433569507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5480.408119999537,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5480.288000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10551.727126277025,
            "unit": "ns/iter",
            "extra": "iterations: 78835\ncpu: 10551.473330373563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15950.97145962116,
            "unit": "ns/iter",
            "extra": "iterations: 52452\ncpu: 15950.907496377637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20295.077834588174,
            "unit": "ns/iter",
            "extra": "iterations: 41267\ncpu: 20294.86756972884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25556.040249382157,
            "unit": "ns/iter",
            "extra": "iterations: 32721\ncpu: 25555.676782494418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30569.173727278347,
            "unit": "ns/iter",
            "extra": "iterations: 27618\ncpu: 30568.071547541436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34802.58067082418,
            "unit": "ns/iter",
            "extra": "iterations: 23881\ncpu: 34801.46141283867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39820.454272791576,
            "unit": "ns/iter",
            "extra": "iterations: 21005\ncpu: 39818.847893358645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 563.9052706213331,
            "unit": "ns/iter",
            "extra": "iterations: 1239721\ncpu: 563.9020392491539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 417.417535367163,
            "unit": "ns/iter",
            "extra": "iterations: 1681151\ncpu: 417.4127130757437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 429.5739820539673,
            "unit": "ns/iter",
            "extra": "iterations: 1633903\ncpu: 429.57231855257044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 381.3523057237521,
            "unit": "ns/iter",
            "extra": "iterations: 1691985\ncpu: 380.75101138603395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 860.3415179559822,
            "unit": "ns/iter",
            "extra": "iterations: 812988\ncpu: 860.3065481901348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1755.271814168086,
            "unit": "ns/iter",
            "extra": "iterations: 462956\ncpu: 1755.1853739880255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9355.783421019752,
            "unit": "ns/iter",
            "extra": "iterations: 87243\ncpu: 9355.431381314263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7330.913610994369,
            "unit": "ns/iter",
            "extra": "iterations: 111623\ncpu: 7330.593157324202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7660.301956002236,
            "unit": "ns/iter",
            "extra": "iterations: 107413\ncpu: 7659.894984778383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7119.954015142212,
            "unit": "ns/iter",
            "extra": "iterations: 112798\ncpu: 7119.872692778256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36633.21354281042,
            "unit": "ns/iter",
            "extra": "iterations: 22787\ncpu: 36632.48343353659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 246683.58858601603,
            "unit": "ns/iter",
            "extra": "iterations: 3522\ncpu: 246677.68313458175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185851.4187668849,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 185846.78217821816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 196670.12917044057,
            "unit": "ns/iter",
            "extra": "iterations: 4436\ncpu: 196666.45626690754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 187807.09121620224,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 187803.55855855878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99110.7842671227,
            "unit": "ns/iter",
            "extra": "iterations: 8835\ncpu: 99109.19071873203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186887.62118917282,
            "unit": "ns/iter",
            "extra": "iterations: 4625\ncpu: 186881.98918918925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5099.112103631385,
            "unit": "ns/iter",
            "extra": "iterations: 160646\ncpu: 5099.002153804027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23665.24872459764,
            "unit": "ns/iter",
            "extra": "iterations: 35087\ncpu: 23665.17798614874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18630.140591703872,
            "unit": "ns/iter",
            "extra": "iterations: 44583\ncpu: 18629.52694973422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18042.714100309702,
            "unit": "ns/iter",
            "extra": "iterations: 45460\ncpu: 18042.644082710085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18064.17487759366,
            "unit": "ns/iter",
            "extra": "iterations: 46158\ncpu: 18063.71809870445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50688.320097443146,
            "unit": "ns/iter",
            "extra": "iterations: 16420\ncpu: 50687.71619975654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 272758.84058877645,
            "unit": "ns/iter",
            "extra": "iterations: 3193\ncpu: 272748.2618227361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 206375.9084170394,
            "unit": "ns/iter",
            "extra": "iterations: 4182\ncpu: 206362.0516499282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 207292.12717728963,
            "unit": "ns/iter",
            "extra": "iterations: 4191\ncpu: 207283.08279646872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205103.74293851294,
            "unit": "ns/iter",
            "extra": "iterations: 4213\ncpu: 205092.66555898532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109322.41968326167,
            "unit": "ns/iter",
            "extra": "iterations: 7956\ncpu: 109315.00754147815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197706.06741315348,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 197695.9323583187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 792103.9560530394,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 792076.0364842488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 439128.6052242725,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 439108.5756530299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1737.9879624739365,
            "unit": "ns/iter",
            "extra": "iterations: 461972\ncpu: 1737.938662949279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9338.97775456171,
            "unit": "ns/iter",
            "extra": "iterations: 88063\ncpu: 9338.79949581555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7140.660196371362,
            "unit": "ns/iter",
            "extra": "iterations: 114884\ncpu: 7140.482573726491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7205.58339286649,
            "unit": "ns/iter",
            "extra": "iterations: 114782\ncpu: 7205.4424909829295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7297.246424101034,
            "unit": "ns/iter",
            "extra": "iterations: 115845\ncpu: 7297.103888816924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34571.02797582095,
            "unit": "ns/iter",
            "extra": "iterations: 23985\ncpu: 34569.58932666262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 261096.0187793563,
            "unit": "ns/iter",
            "extra": "iterations: 3408\ncpu: 261079.34272300414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 188244.15649108138,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 188232.57659246246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 193335.3717105459,
            "unit": "ns/iter",
            "extra": "iterations: 4560\ncpu: 193323.04824561355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 191338.6570548195,
            "unit": "ns/iter",
            "extra": "iterations: 4543\ncpu: 191328.74752366214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96823.69974611462,
            "unit": "ns/iter",
            "extra": "iterations: 9059\ncpu: 96818.7658681973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 184035.53386287764,
            "unit": "ns/iter",
            "extra": "iterations: 4784\ncpu: 184026.65133779278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.84041093629708,
            "unit": "ns/iter",
            "extra": "iterations: 3876124\ncpu: 180.83224375690764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1343.37668872538,
            "unit": "ns/iter",
            "extra": "iterations: 517106\ncpu: 1343.318391200252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1093.6595110455544,
            "unit": "ns/iter",
            "extra": "iterations: 640755\ncpu: 1093.6329798440927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1089.2549365352686,
            "unit": "ns/iter",
            "extra": "iterations: 643113\ncpu: 1089.235173289918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 817.5024907612474,
            "unit": "ns/iter",
            "extra": "iterations: 855361\ncpu: 817.4782343361442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9695.860510420842,
            "unit": "ns/iter",
            "extra": "iterations: 71353\ncpu: 9695.76471907279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11694.808612117631,
            "unit": "ns/iter",
            "extra": "iterations: 59335\ncpu: 11694.119828094783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2705.9681059067016,
            "unit": "ns/iter",
            "extra": "iterations: 258794\ncpu: 2705.8896264983005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2750.4432224250972,
            "unit": "ns/iter",
            "extra": "iterations: 255497\ncpu: 2750.3657577192625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2711.2520858533144,
            "unit": "ns/iter",
            "extra": "iterations: 257928\ncpu: 2711.190332185721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5122.228557594194,
            "unit": "ns/iter",
            "extra": "iterations: 136307\ncpu: 5122.1008458846645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5114.8165947345005,
            "unit": "ns/iter",
            "extra": "iterations: 133922\ncpu: 5114.668239721649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1951.8338516710019,
            "unit": "ns/iter",
            "extra": "iterations: 359161\ncpu: 1951.8252260128495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10091.505073526467,
            "unit": "ns/iter",
            "extra": "iterations: 68887\ncpu: 10091.39750606057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8118.420115657607,
            "unit": "ns/iter",
            "extra": "iterations: 85943\ncpu: 8118.2551225813695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7977.415074578896,
            "unit": "ns/iter",
            "extra": "iterations: 86888\ncpu: 7977.322530153714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8465.837133551238,
            "unit": "ns/iter",
            "extra": "iterations: 86574\ncpu: 8465.483863515685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17566.360313119112,
            "unit": "ns/iter",
            "extra": "iterations: 39857\ncpu: 17565.960809895278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56519.849141753504,
            "unit": "ns/iter",
            "extra": "iterations: 12409\ncpu: 56518.23676363913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44696.34494153949,
            "unit": "ns/iter",
            "extra": "iterations: 15736\ncpu: 44695.67869852618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44142.622495276715,
            "unit": "ns/iter",
            "extra": "iterations: 15870\ncpu: 44141.550094518025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43965.13462995696,
            "unit": "ns/iter",
            "extra": "iterations: 15836\ncpu: 43935.00252589005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25219.99574158337,
            "unit": "ns/iter",
            "extra": "iterations: 27475\ncpu: 25218.689717925154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42506.16324796185,
            "unit": "ns/iter",
            "extra": "iterations: 16478\ncpu: 42503.85362301247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1907.4134706552825,
            "unit": "ns/iter",
            "extra": "iterations: 367020\ncpu: 1907.3273936025344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10288.477108114106,
            "unit": "ns/iter",
            "extra": "iterations: 67928\ncpu: 10288.352373100859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8175.148030377288,
            "unit": "ns/iter",
            "extra": "iterations: 85854\ncpu: 8174.809560416502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8059.741087353272,
            "unit": "ns/iter",
            "extra": "iterations: 86338\ncpu: 8059.70488081721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7995.296238963457,
            "unit": "ns/iter",
            "extra": "iterations: 87210\ncpu: 7995.016626533653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17884.593972085044,
            "unit": "ns/iter",
            "extra": "iterations: 39118\ncpu: 17884.130067999457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53613.49608294834,
            "unit": "ns/iter",
            "extra": "iterations: 13020\ncpu: 53612.38095238077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41868.35971913875,
            "unit": "ns/iter",
            "extra": "iterations: 16663\ncpu: 41867.29880573744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41682.4140388358,
            "unit": "ns/iter",
            "extra": "iterations: 16839\ncpu: 41681.86353108891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41702.566145175275,
            "unit": "ns/iter",
            "extra": "iterations: 16683\ncpu: 41702.385662051056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24947.411793801977,
            "unit": "ns/iter",
            "extra": "iterations: 28303\ncpu: 24947.521464155983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41482.15915088245,
            "unit": "ns/iter",
            "extra": "iterations: 17053\ncpu: 41481.991438456775 ns\nthreads: 1"
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
        "date": 1705774844518,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 568.049683921953,
            "unit": "ns/iter",
            "extra": "iterations: 1231183\ncpu: 568.0433371805817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5280.4294100008065,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5280.352999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10174.19732060987,
            "unit": "ns/iter",
            "extra": "iterations: 81735\ncpu: 10174.006239677003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15450.242723437428,
            "unit": "ns/iter",
            "extra": "iterations: 54490\ncpu: 15449.776105707471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20425.95898098921,
            "unit": "ns/iter",
            "extra": "iterations: 40981\ncpu: 20425.262926722145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24989.159917332257,
            "unit": "ns/iter",
            "extra": "iterations: 33386\ncpu: 24987.43185766489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29746.284912152976,
            "unit": "ns/iter",
            "extra": "iterations: 27605\ncpu: 29745.249049085312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35216.45894305732,
            "unit": "ns/iter",
            "extra": "iterations: 23918\ncpu: 35215.19357805837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38673.988665277895,
            "unit": "ns/iter",
            "extra": "iterations: 21615\ncpu: 38672.292389544324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 538.1963483758201,
            "unit": "ns/iter",
            "extra": "iterations: 1297943\ncpu: 538.190043784665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 409.45207811990497,
            "unit": "ns/iter",
            "extra": "iterations: 1713111\ncpu: 409.4278771194633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 415.8005171986388,
            "unit": "ns/iter",
            "extra": "iterations: 1688326\ncpu: 415.7772254884426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 404.5168263437031,
            "unit": "ns/iter",
            "extra": "iterations: 1734126\ncpu: 404.4999613638218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 854.4913635814539,
            "unit": "ns/iter",
            "extra": "iterations: 819379\ncpu: 854.4279265150814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1770.1440160740515,
            "unit": "ns/iter",
            "extra": "iterations: 463851\ncpu: 1768.7837258085008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9549.119801122544,
            "unit": "ns/iter",
            "extra": "iterations: 84273\ncpu: 9548.516132094492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6995.929877012385,
            "unit": "ns/iter",
            "extra": "iterations: 114727\ncpu: 6995.851020248076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7043.0401935171785,
            "unit": "ns/iter",
            "extra": "iterations: 114098\ncpu: 7042.686988378404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6860.786756089014,
            "unit": "ns/iter",
            "extra": "iterations: 116899\ncpu: 6860.4727157631805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36282.00200156658,
            "unit": "ns/iter",
            "extra": "iterations: 22982\ncpu: 36279.61883212954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 246176.7048074036,
            "unit": "ns/iter",
            "extra": "iterations: 3557\ncpu: 246176.01911723445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184696.1498655878,
            "unit": "ns/iter",
            "extra": "iterations: 4464\ncpu: 184693.27956989253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 192518.28906772396,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 192515.31410686357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 196735.8772635846,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 196728.07958864345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98358.39050432827,
            "unit": "ns/iter",
            "extra": "iterations: 8804\ncpu: 98356.32666969547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 187134.2049356438,
            "unit": "ns/iter",
            "extra": "iterations: 4660\ncpu: 187130.12875536465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5046.025503079492,
            "unit": "ns/iter",
            "extra": "iterations: 160412\ncpu: 5045.696705982099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24444.07217870678,
            "unit": "ns/iter",
            "extra": "iterations: 34470\ncpu: 24442.78793153461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18718.382187423107,
            "unit": "ns/iter",
            "extra": "iterations: 44957\ncpu: 18717.859287763786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17697.43932106261,
            "unit": "ns/iter",
            "extra": "iterations: 46779\ncpu: 17696.46422540031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18053.147177201048,
            "unit": "ns/iter",
            "extra": "iterations: 46461\ncpu: 18052.112524482898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50863.60641829599,
            "unit": "ns/iter",
            "extra": "iterations: 16266\ncpu: 50861.63777204004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 271506.219831635,
            "unit": "ns/iter",
            "extra": "iterations: 3207\ncpu: 271489.9594636727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 206300.80279357842,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 206292.9214015142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 195498.83333333948,
            "unit": "ns/iter",
            "extra": "iterations: 4254\ncpu: 195485.94264221846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205514.343786841,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 205512.0962037255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108206.56697935962,
            "unit": "ns/iter",
            "extra": "iterations: 7995\ncpu: 108205.35334584178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 198376.07278120334,
            "unit": "ns/iter",
            "extra": "iterations: 4383\ncpu: 198372.89527720795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 792229.393005849,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 792203.1640299759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 440142.7781603614,
            "unit": "ns/iter",
            "extra": "iterations: 2033\ncpu: 440142.94146581384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1789.1288001557318,
            "unit": "ns/iter",
            "extra": "iterations: 451692\ncpu: 1789.0710926914865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10321.579556146165,
            "unit": "ns/iter",
            "extra": "iterations: 79711\ncpu: 10321.506442021759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7307.962387637397,
            "unit": "ns/iter",
            "extra": "iterations: 111692\ncpu: 7307.77495254809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7348.559327381894,
            "unit": "ns/iter",
            "extra": "iterations: 110910\ncpu: 7348.496077901024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7067.07607826047,
            "unit": "ns/iter",
            "extra": "iterations: 115000\ncpu: 7066.890434782574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34945.84992464838,
            "unit": "ns/iter",
            "extra": "iterations: 23888\ncpu: 34945.21517079705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 257250.92683639957,
            "unit": "ns/iter",
            "extra": "iterations: 3417\ncpu: 257243.0494585891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192021.98861645782,
            "unit": "ns/iter",
            "extra": "iterations: 4568\ncpu: 192021.69439579596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 182589.39307761338,
            "unit": "ns/iter",
            "extra": "iterations: 4536\ncpu: 182587.6763668422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 191331.04766069067,
            "unit": "ns/iter",
            "extra": "iterations: 4574\ncpu: 191329.20857017918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96812.44450654283,
            "unit": "ns/iter",
            "extra": "iterations: 8947\ncpu: 96808.15915949439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 185731.29469008444,
            "unit": "ns/iter",
            "extra": "iterations: 4727\ncpu: 185730.992172626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 178.84583523909927,
            "unit": "ns/iter",
            "extra": "iterations: 3898219\ncpu: 178.84279975034818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1411.0304726268723,
            "unit": "ns/iter",
            "extra": "iterations: 498152\ncpu: 1411.0042717885315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1138.3367641466084,
            "unit": "ns/iter",
            "extra": "iterations: 615306\ncpu: 1138.3040308399395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1139.2812249352396,
            "unit": "ns/iter",
            "extra": "iterations: 615902\ncpu: 1139.2672860292653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 820.6918786431667,
            "unit": "ns/iter",
            "extra": "iterations: 855559\ncpu: 820.683202444248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9557.95421706374,
            "unit": "ns/iter",
            "extra": "iterations: 73499\ncpu: 9557.634797752407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12568.529323903856,
            "unit": "ns/iter",
            "extra": "iterations: 55569\ncpu: 12568.394248591901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2767.3451584742857,
            "unit": "ns/iter",
            "extra": "iterations: 253133\ncpu: 2767.266614783548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2761.415584210908,
            "unit": "ns/iter",
            "extra": "iterations: 253513\ncpu: 2761.4110518987063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2765.7893811670265,
            "unit": "ns/iter",
            "extra": "iterations: 253154\ncpu: 2765.757602092002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5147.032371240199,
            "unit": "ns/iter",
            "extra": "iterations: 134533\ncpu: 5145.750113355053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5339.01344353058,
            "unit": "ns/iter",
            "extra": "iterations: 131885\ncpu: 5338.8527884141795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1926.0580842651289,
            "unit": "ns/iter",
            "extra": "iterations: 362284\ncpu: 1926.0381358271486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10224.650629077967,
            "unit": "ns/iter",
            "extra": "iterations: 68672\ncpu: 10224.63740680329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8254.708654669337,
            "unit": "ns/iter",
            "extra": "iterations: 85191\ncpu: 8254.62314094225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8170.093371589614,
            "unit": "ns/iter",
            "extra": "iterations: 85390\ncpu: 8169.9929734160005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8093.798031957837,
            "unit": "ns/iter",
            "extra": "iterations: 86177\ncpu: 8093.569049746452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17578.61887778139,
            "unit": "ns/iter",
            "extra": "iterations: 39814\ncpu: 17578.437233134096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54189.677265757935,
            "unit": "ns/iter",
            "extra": "iterations: 12391\ncpu: 54189.581147606885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44413.135136845936,
            "unit": "ns/iter",
            "extra": "iterations: 15784\ncpu: 44412.70273694912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44147.423263734956,
            "unit": "ns/iter",
            "extra": "iterations: 15853\ncpu: 44146.11114615526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44188.06894803498,
            "unit": "ns/iter",
            "extra": "iterations: 15780\ncpu: 44187.4841571607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25502.00827736371,
            "unit": "ns/iter",
            "extra": "iterations: 27545\ncpu: 25501.699037937786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43596.11131840737,
            "unit": "ns/iter",
            "extra": "iterations: 16080\ncpu: 43595.57213930291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1923.1024497233182,
            "unit": "ns/iter",
            "extra": "iterations: 363388\ncpu: 1923.0431384635424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10660.19303748999,
            "unit": "ns/iter",
            "extra": "iterations: 65350\ncpu: 10660.102524866272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8151.877964518723,
            "unit": "ns/iter",
            "extra": "iterations: 85680\ncpu: 8151.797385620796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8057.403374890801,
            "unit": "ns/iter",
            "extra": "iterations: 86225\ncpu: 8057.1516381560305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8067.892049356697,
            "unit": "ns/iter",
            "extra": "iterations: 87364\ncpu: 8067.810539810478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17805.709089980206,
            "unit": "ns/iter",
            "extra": "iterations: 39208\ncpu: 17805.134156294742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51071.343533116684,
            "unit": "ns/iter",
            "extra": "iterations: 12680\ncpu: 51070.55993690906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43199.463219943835,
            "unit": "ns/iter",
            "extra": "iterations: 16286\ncpu: 43198.999140366715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42741.10289624633,
            "unit": "ns/iter",
            "extra": "iterations: 16366\ncpu: 42740.67579127504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42823.94437985688,
            "unit": "ns/iter",
            "extra": "iterations: 16343\ncpu: 42823.09857431303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25194.38578352331,
            "unit": "ns/iter",
            "extra": "iterations: 27855\ncpu: 25194.363668999853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42493.42682488151,
            "unit": "ns/iter",
            "extra": "iterations: 16686\ncpu: 42493.02409205319 ns\nthreads: 1"
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
        "date": 1705778416589,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 571.1121648877253,
            "unit": "ns/iter",
            "extra": "iterations: 1208774\ncpu: 571.0821874064135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5356.971009999825,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5356.743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10339.43918506614,
            "unit": "ns/iter",
            "extra": "iterations: 80301\ncpu: 10338.786565547127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15262.858024802492,
            "unit": "ns/iter",
            "extra": "iterations: 54911\ncpu: 15261.940230554905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20362.518882615972,
            "unit": "ns/iter",
            "extra": "iterations: 41096\ncpu: 20361.619135682304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24865.87684141335,
            "unit": "ns/iter",
            "extra": "iterations: 33534\ncpu: 24864.47784338284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30472.844265836866,
            "unit": "ns/iter",
            "extra": "iterations: 27746\ncpu: 30470.947163555098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35074.27934764308,
            "unit": "ns/iter",
            "extra": "iterations: 23852\ncpu: 35073.14690591981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39676.99537412396,
            "unit": "ns/iter",
            "extra": "iterations: 20969\ncpu: 39674.84858600789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 545.9463170329399,
            "unit": "ns/iter",
            "extra": "iterations: 1288472\ncpu: 545.9339434617124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 410.8713091824122,
            "unit": "ns/iter",
            "extra": "iterations: 1701520\ncpu: 410.8487705110728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 419.71300842682126,
            "unit": "ns/iter",
            "extra": "iterations: 1668603\ncpu: 419.6856891663271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 386.72643222797194,
            "unit": "ns/iter",
            "extra": "iterations: 1712402\ncpu: 386.71252427876186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 852.2864605187722,
            "unit": "ns/iter",
            "extra": "iterations: 822225\ncpu: 852.2501748304884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1719.5070330078552,
            "unit": "ns/iter",
            "extra": "iterations: 463102\ncpu: 1719.453597695538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10031.711199852441,
            "unit": "ns/iter",
            "extra": "iterations: 59349\ncpu: 10031.196818817503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7174.821025094742,
            "unit": "ns/iter",
            "extra": "iterations: 111619\ncpu: 7174.734588197331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7028.161173286374,
            "unit": "ns/iter",
            "extra": "iterations: 117141\ncpu: 7027.985931484303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7151.046803427383,
            "unit": "ns/iter",
            "extra": "iterations: 116359\ncpu: 7151.011094973321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36475.30693155702,
            "unit": "ns/iter",
            "extra": "iterations: 22852\ncpu: 36473.54279712928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 246637.9165949906,
            "unit": "ns/iter",
            "extra": "iterations: 3489\ncpu: 246632.93207222706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 200054.56734234153,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 200041.6216216219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 192947.71246648906,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 192946.5817694374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 191097.29777177735,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 191088.0936304295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98058.23320874617,
            "unit": "ns/iter",
            "extra": "iterations: 8829\ncpu: 98056.83542870094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 187832.78004729393,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 187825.71490002118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5397.161043280704,
            "unit": "ns/iter",
            "extra": "iterations: 159957\ncpu: 5397.130478816173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23597.096500256506,
            "unit": "ns/iter",
            "extra": "iterations: 34974\ncpu: 23596.840510093247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18363.621566179143,
            "unit": "ns/iter",
            "extra": "iterations: 44848\ncpu: 18363.510078487347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18077.434969363974,
            "unit": "ns/iter",
            "extra": "iterations: 45863\ncpu: 18077.195124610244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17974.888988186376,
            "unit": "ns/iter",
            "extra": "iterations: 45878\ncpu: 17974.796198613712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51581.897714569495,
            "unit": "ns/iter",
            "extra": "iterations: 16102\ncpu: 51578.97155632821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 271854.86243384104,
            "unit": "ns/iter",
            "extra": "iterations: 3213\ncpu: 271842.7015250541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 206306.19067997165,
            "unit": "ns/iter",
            "extra": "iterations: 4206\ncpu: 206302.37755587208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204941.08839517925,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 204930.48924604076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 203533.94749179747,
            "unit": "ns/iter",
            "extra": "iterations: 4266\ncpu: 203530.37974683527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108816.20067813544,
            "unit": "ns/iter",
            "extra": "iterations: 7963\ncpu: 108811.95529323145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 195756.1908431621,
            "unit": "ns/iter",
            "extra": "iterations: 4412\ncpu: 195752.28921124196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 770723.0892562116,
            "unit": "ns/iter",
            "extra": "iterations: 1210\ncpu: 770686.6115702497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 431752.64527194196,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 431750.6614404706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1723.3669641120064,
            "unit": "ns/iter",
            "extra": "iterations: 462830\ncpu: 1723.308558217929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9367.91655406186,
            "unit": "ns/iter",
            "extra": "iterations: 90286\ncpu: 9367.626210043625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6850.128803065594,
            "unit": "ns/iter",
            "extra": "iterations: 112738\ncpu: 6849.77558587167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6811.092982470633,
            "unit": "ns/iter",
            "extra": "iterations: 119743\ncpu: 6810.740502576371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6591.211800020328,
            "unit": "ns/iter",
            "extra": "iterations: 123593\ncpu: 6591.010817764784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34450.67262027322,
            "unit": "ns/iter",
            "extra": "iterations: 24299\ncpu: 34449.1337092062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 258737.4444444386,
            "unit": "ns/iter",
            "extra": "iterations: 3393\ncpu: 258718.92130857616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 178893.2833186108,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 178886.31950573798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191750.64166852052,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 191743.82072331788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 191397.23477688144,
            "unit": "ns/iter",
            "extra": "iterations: 4549\ncpu: 191396.17498351302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94488.1665363498,
            "unit": "ns/iter",
            "extra": "iterations: 8953\ncpu: 94483.4357198703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 183940.60848661212,
            "unit": "ns/iter",
            "extra": "iterations: 4784\ncpu: 183927.65468227302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.65829547105002,
            "unit": "ns/iter",
            "extra": "iterations: 3856080\ncpu: 180.6490010580704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1379.25391878583,
            "unit": "ns/iter",
            "extra": "iterations: 507300\ncpu: 1379.1821407451175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1094.7260832431023,
            "unit": "ns/iter",
            "extra": "iterations: 640461\ncpu: 1094.6741487771992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1146.0697983027324,
            "unit": "ns/iter",
            "extra": "iterations: 612651\ncpu: 1146.016573873213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 816.4662142743834,
            "unit": "ns/iter",
            "extra": "iterations: 835116\ncpu: 816.4489723583315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9640.90252221166,
            "unit": "ns/iter",
            "extra": "iterations: 71247\ncpu: 9640.516793689554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12223.477120430425,
            "unit": "ns/iter",
            "extra": "iterations: 57453\ncpu: 12222.855203383631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2737.3143663517108,
            "unit": "ns/iter",
            "extra": "iterations: 255110\ncpu: 2737.1181059150917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2709.879684502317,
            "unit": "ns/iter",
            "extra": "iterations: 257498\ncpu: 2709.733667834328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2697.3747889114507,
            "unit": "ns/iter",
            "extra": "iterations: 259370\ncpu: 2697.2383082083534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5121.7169908182705,
            "unit": "ns/iter",
            "extra": "iterations: 136356\ncpu: 5121.526005456306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5168.939262409018,
            "unit": "ns/iter",
            "extra": "iterations: 134546\ncpu: 5168.674654021684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1944.0003433380125,
            "unit": "ns/iter",
            "extra": "iterations: 361160\ncpu: 1943.9580795215447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10162.941472625298,
            "unit": "ns/iter",
            "extra": "iterations: 68327\ncpu: 10162.705811758078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8204.212882427852,
            "unit": "ns/iter",
            "extra": "iterations: 85310\ncpu: 8203.802602274116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8060.95636191888,
            "unit": "ns/iter",
            "extra": "iterations: 86782\ncpu: 8060.537899564413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7934.9347150261265,
            "unit": "ns/iter",
            "extra": "iterations: 87815\ncpu: 7934.379092410225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17510.887668900188,
            "unit": "ns/iter",
            "extra": "iterations: 39891\ncpu: 17509.919530721214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54585.756609148084,
            "unit": "ns/iter",
            "extra": "iterations: 12634\ncpu: 54584.304258350814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42877.90846432694,
            "unit": "ns/iter",
            "extra": "iterations: 16540\ncpu: 42876.880290205736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42301.92944637636,
            "unit": "ns/iter",
            "extra": "iterations: 16654\ncpu: 42299.5496577404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43099.92940961256,
            "unit": "ns/iter",
            "extra": "iterations: 16362\ncpu: 43097.9586847571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25195.124587518538,
            "unit": "ns/iter",
            "extra": "iterations: 28486\ncpu: 25194.176086498468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42295.62658342909,
            "unit": "ns/iter",
            "extra": "iterations: 16499\ncpu: 42293.138978119925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1887.6583096545492,
            "unit": "ns/iter",
            "extra": "iterations: 378325\ncpu: 1887.54272120531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10097.14266229491,
            "unit": "ns/iter",
            "extra": "iterations: 68918\ncpu: 10096.620621608263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7993.983479138736,
            "unit": "ns/iter",
            "extra": "iterations: 87102\ncpu: 7993.539757984835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7982.614301846391,
            "unit": "ns/iter",
            "extra": "iterations: 87667\ncpu: 7982.433526868791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7938.168098453389,
            "unit": "ns/iter",
            "extra": "iterations: 88002\ncpu: 7937.7366423490985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17791.481257742103,
            "unit": "ns/iter",
            "extra": "iterations: 39563\ncpu: 17790.67310365716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52769.12064486443,
            "unit": "ns/iter",
            "extra": "iterations: 13088\ncpu: 52767.27536674776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41673.49669889618,
            "unit": "ns/iter",
            "extra": "iterations: 16964\ncpu: 41671.468993162394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41395.154590804865,
            "unit": "ns/iter",
            "extra": "iterations: 16838\ncpu: 41392.67133863825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40911.540820553346,
            "unit": "ns/iter",
            "extra": "iterations: 16891\ncpu: 40909.89284234256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24934.533193718093,
            "unit": "ns/iter",
            "extra": "iterations: 28650\ncpu: 24933.982547992917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40924.31651111638,
            "unit": "ns/iter",
            "extra": "iterations: 17358\ncpu: 40923.62599377872 ns\nthreads: 1"
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
        "date": 1705953582741,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 565.5490840414185,
            "unit": "ns/iter",
            "extra": "iterations: 1227894\ncpu: 565.5380676182147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5238.460069999746,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5238.358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10142.852999268627,
            "unit": "ns/iter",
            "extra": "iterations: 82020\ncpu: 10142.346988539379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15327.795039739294,
            "unit": "ns/iter",
            "extra": "iterations: 54352\ncpu: 15327.535325287023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20248.291396652767,
            "unit": "ns/iter",
            "extra": "iterations: 41356\ncpu: 20247.652094012945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25108.23436609658,
            "unit": "ns/iter",
            "extra": "iterations: 33341\ncpu: 25108.128130529964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30121.968523957352,
            "unit": "ns/iter",
            "extra": "iterations: 27926\ncpu: 30120.36453484206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34920.188660264736,
            "unit": "ns/iter",
            "extra": "iterations: 23863\ncpu: 34918.9121233709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40069.88227877759,
            "unit": "ns/iter",
            "extra": "iterations: 21415\ncpu: 40069.11043660986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 543.7567829178367,
            "unit": "ns/iter",
            "extra": "iterations: 1288273\ncpu: 543.7320350577874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 404.9912339092623,
            "unit": "ns/iter",
            "extra": "iterations: 1733612\ncpu: 404.9774113238716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 419.0664118793841,
            "unit": "ns/iter",
            "extra": "iterations: 1668843\ncpu: 419.0591925064251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 407.94440659723125,
            "unit": "ns/iter",
            "extra": "iterations: 1721841\ncpu: 407.942835604449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 848.318859532446,
            "unit": "ns/iter",
            "extra": "iterations: 823557\ncpu: 848.2820254092917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1769.9429887706049,
            "unit": "ns/iter",
            "extra": "iterations: 461909\ncpu: 1769.865925972429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9876.592668440864,
            "unit": "ns/iter",
            "extra": "iterations: 83502\ncpu: 9876.00296998875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7170.552187006672,
            "unit": "ns/iter",
            "extra": "iterations: 113237\ncpu: 7170.113125568501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7429.413140724665,
            "unit": "ns/iter",
            "extra": "iterations: 110207\ncpu: 7429.210485722345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7084.131404369827,
            "unit": "ns/iter",
            "extra": "iterations: 113809\ncpu: 7083.742937729015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36259.175181525796,
            "unit": "ns/iter",
            "extra": "iterations: 22725\ncpu: 36257.35093509357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 248408.66798868717,
            "unit": "ns/iter",
            "extra": "iterations: 3530\ncpu: 248393.37110481577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 186366.62777160175,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 186350.9294512873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 188991.32646205384,
            "unit": "ns/iter",
            "extra": "iterations: 4463\ncpu: 188978.84830831294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 188374.03189116355,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 188360.61552185513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98819.51943782684,
            "unit": "ns/iter",
            "extra": "iterations: 8823\ncpu: 98810.83531678583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186661.98408604405,
            "unit": "ns/iter",
            "extra": "iterations: 4650\ncpu: 186651.3118279568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5017.403259762713,
            "unit": "ns/iter",
            "extra": "iterations: 160073\ncpu: 5017.349584252184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24299.97383857517,
            "unit": "ns/iter",
            "extra": "iterations: 34096\ncpu: 24299.404622243146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18395.66279388649,
            "unit": "ns/iter",
            "extra": "iterations: 43810\ncpu: 18395.62885186034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18158.224805178274,
            "unit": "ns/iter",
            "extra": "iterations: 45426\ncpu: 18157.64319992953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17753.853900558366,
            "unit": "ns/iter",
            "extra": "iterations: 46660\ncpu: 17753.52978996998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50647.62655294457,
            "unit": "ns/iter",
            "extra": "iterations: 16179\ncpu: 50646.35020705842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 271478.442892581,
            "unit": "ns/iter",
            "extra": "iterations: 3222\ncpu: 271473.6499068902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 207043.035029609,
            "unit": "ns/iter",
            "extra": "iterations: 4225\ncpu: 207035.02958579952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 206412.0037950697,
            "unit": "ns/iter",
            "extra": "iterations: 4216\ncpu: 206406.8074003809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205647.77156998482,
            "unit": "ns/iter",
            "extra": "iterations: 4242\ncpu: 205642.85714285754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108653.67534572477,
            "unit": "ns/iter",
            "extra": "iterations: 8027\ncpu: 108651.27694032683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197473.891109581,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 197468.45853434328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 791295.3305647131,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 791280.8970099646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 439197.4443340281,
            "unit": "ns/iter",
            "extra": "iterations: 2012\ncpu: 439183.99602385686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1759.0630919379523,
            "unit": "ns/iter",
            "extra": "iterations: 457396\ncpu: 1758.9987669328211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9593.83765037408,
            "unit": "ns/iter",
            "extra": "iterations: 85205\ncpu: 9593.595446276591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7686.673894672472,
            "unit": "ns/iter",
            "extra": "iterations: 107683\ncpu: 7686.513191497278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7476.2745139241715,
            "unit": "ns/iter",
            "extra": "iterations: 109448\ncpu: 7476.0808785907375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7017.9439959815645,
            "unit": "ns/iter",
            "extra": "iterations: 113474\ncpu: 7017.839328833029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34438.57146385565,
            "unit": "ns/iter",
            "extra": "iterations: 24292\ncpu: 34436.90927054181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 259725.37620579178,
            "unit": "ns/iter",
            "extra": "iterations: 3421\ncpu: 259715.46331482028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 194490.71704741626,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 194485.58875219605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 194116.6745055043,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 194107.73626373656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 193227.67786256733,
            "unit": "ns/iter",
            "extra": "iterations: 4585\ncpu: 193226.89203925757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97308.00986151413,
            "unit": "ns/iter",
            "extra": "iterations: 9025\ncpu: 97305.0304709146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 183463.83680777458,
            "unit": "ns/iter",
            "extra": "iterations: 4749\ncpu: 183462.30785428517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.85614159653224,
            "unit": "ns/iter",
            "extra": "iterations: 3875971\ncpu: 180.85439751742337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1358.019706902529,
            "unit": "ns/iter",
            "extra": "iterations: 516824\ncpu: 1357.9829884061062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1087.5857334850293,
            "unit": "ns/iter",
            "extra": "iterations: 642876\ncpu: 1087.5724089871167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1134.1667317288882,
            "unit": "ns/iter",
            "extra": "iterations: 617357\ncpu: 1134.1290371697376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 815.7393811508148,
            "unit": "ns/iter",
            "extra": "iterations: 860145\ncpu: 815.7372303506959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9837.522424343904,
            "unit": "ns/iter",
            "extra": "iterations: 71574\ncpu: 9837.017632101037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12564.400678114145,
            "unit": "ns/iter",
            "extra": "iterations: 55743\ncpu: 12563.963188202999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2799.479264143508,
            "unit": "ns/iter",
            "extra": "iterations: 250701\ncpu: 2799.382132500463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2741.6472408923273,
            "unit": "ns/iter",
            "extra": "iterations: 256206\ncpu: 2741.4869284872216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2695.1493528694923,
            "unit": "ns/iter",
            "extra": "iterations: 260303\ncpu: 2694.948579155821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5133.403360478905,
            "unit": "ns/iter",
            "extra": "iterations: 135933\ncpu: 5133.149419199141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5135.717683633392,
            "unit": "ns/iter",
            "extra": "iterations: 137353\ncpu: 5135.490305999896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1920.2855852939206,
            "unit": "ns/iter",
            "extra": "iterations: 364364\ncpu: 1920.1743311633475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10057.462385910274,
            "unit": "ns/iter",
            "extra": "iterations: 68804\ncpu: 10056.887680948837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8104.943829551802,
            "unit": "ns/iter",
            "extra": "iterations: 86736\ncpu: 8104.427227448887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8044.4123045189,
            "unit": "ns/iter",
            "extra": "iterations: 87285\ncpu: 8044.041931603369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7903.542217963268,
            "unit": "ns/iter",
            "extra": "iterations: 88730\ncpu: 7902.966302265434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17459.498474314107,
            "unit": "ns/iter",
            "extra": "iterations: 39982\ncpu: 17458.33875243856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56090.64440491862,
            "unit": "ns/iter",
            "extra": "iterations: 12368\ncpu: 56086.66720569148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44061.22566200531,
            "unit": "ns/iter",
            "extra": "iterations: 15634\ncpu: 44056.44108993245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43525.99400554768,
            "unit": "ns/iter",
            "extra": "iterations: 15848\ncpu: 43522.50757193372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43722.826334978985,
            "unit": "ns/iter",
            "extra": "iterations: 17004\ncpu: 43721.97718183954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25333.977386115956,
            "unit": "ns/iter",
            "extra": "iterations: 27461\ncpu: 25333.891700957836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41967.6878602606,
            "unit": "ns/iter",
            "extra": "iterations: 17002\ncpu: 41965.86283966567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1896.6023748311163,
            "unit": "ns/iter",
            "extra": "iterations: 367942\ncpu: 1896.5638606084858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10269.097131281516,
            "unit": "ns/iter",
            "extra": "iterations: 68114\ncpu: 10268.839005197131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7922.8914511574785,
            "unit": "ns/iter",
            "extra": "iterations: 88550\ncpu: 7922.752117447817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7983.623542471302,
            "unit": "ns/iter",
            "extra": "iterations: 87391\ncpu: 7983.25571283089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7856.292518384832,
            "unit": "ns/iter",
            "extra": "iterations: 88938\ncpu: 7856.204322112047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17703.26599072077,
            "unit": "ns/iter",
            "extra": "iterations: 39648\ncpu: 17702.69118240504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52837.22419928054,
            "unit": "ns/iter",
            "extra": "iterations: 12645\ncpu: 52835.05733491454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41390.27637892384,
            "unit": "ns/iter",
            "extra": "iterations: 16879\ncpu: 41389.38325730223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41205.63637962322,
            "unit": "ns/iter",
            "extra": "iterations: 17048\ncpu: 41204.34068512455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41651.7594780477,
            "unit": "ns/iter",
            "extra": "iterations: 17013\ncpu: 41650.26156468618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24790.46008492637,
            "unit": "ns/iter",
            "extra": "iterations: 28260\ncpu: 24789.706298655256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41433.0681168724,
            "unit": "ns/iter",
            "extra": "iterations: 17147\ncpu: 41430.90919694365 ns\nthreads: 1"
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
        "date": 1705955012511,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 570.1698472231865,
            "unit": "ns/iter",
            "extra": "iterations: 1216611\ncpu: 570.1673747812571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5378.467150000006,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5378.166999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10396.233694147675,
            "unit": "ns/iter",
            "extra": "iterations: 79450\ncpu: 10395.647577092512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15472.779326493552,
            "unit": "ns/iter",
            "extra": "iterations: 53808\ncpu: 15471.846193874513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20238.253221509054,
            "unit": "ns/iter",
            "extra": "iterations: 40897\ncpu: 20237.291243856514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25656.325791022988,
            "unit": "ns/iter",
            "extra": "iterations: 32616\ncpu: 25654.862644101046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30447.289662381176,
            "unit": "ns/iter",
            "extra": "iterations: 27753\ncpu: 30445.20952689799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34931.48752720233,
            "unit": "ns/iter",
            "extra": "iterations: 23892\ncpu: 34929.474301021255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39728.74524822681,
            "unit": "ns/iter",
            "extra": "iterations: 21150\ncpu: 39726.732860520126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 548.6575843616575,
            "unit": "ns/iter",
            "extra": "iterations: 1277062\ncpu: 548.643918619456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 410.9151176475114,
            "unit": "ns/iter",
            "extra": "iterations: 1703605\ncpu: 410.90986466933407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 419.9800804688909,
            "unit": "ns/iter",
            "extra": "iterations: 1669216\ncpu: 419.95074334298323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 408.82679572738033,
            "unit": "ns/iter",
            "extra": "iterations: 1716505\ncpu: 408.8046349996071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 846.9598956340219,
            "unit": "ns/iter",
            "extra": "iterations: 828239\ncpu: 846.8997475366402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1718.6975173337266,
            "unit": "ns/iter",
            "extra": "iterations: 463977\ncpu: 1718.609543145457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9571.193215618217,
            "unit": "ns/iter",
            "extra": "iterations: 84724\ncpu: 9570.857136112556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7392.509949957863,
            "unit": "ns/iter",
            "extra": "iterations: 111307\ncpu: 7392.124484533782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7126.7111072170865,
            "unit": "ns/iter",
            "extra": "iterations: 114115\ncpu: 7126.205143933758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7012.79182646417,
            "unit": "ns/iter",
            "extra": "iterations: 115250\ncpu: 7012.380043383932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36530.17523457264,
            "unit": "ns/iter",
            "extra": "iterations: 22701\ncpu: 36527.368838377115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 242265.31887484534,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 242254.15352260775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 188600.5780723473,
            "unit": "ns/iter",
            "extra": "iterations: 4451\ncpu: 188593.64187822962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183522.5798470613,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 183519.298245614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 189955.97179944575,
            "unit": "ns/iter",
            "extra": "iterations: 4468\ncpu: 189949.68666069867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98732.6108157065,
            "unit": "ns/iter",
            "extra": "iterations: 8839\ncpu: 98729.00780631282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 174027.93871450514,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 174021.67414050785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5171.870792019019,
            "unit": "ns/iter",
            "extra": "iterations: 156221\ncpu: 5171.67922366391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23344.894084779306,
            "unit": "ns/iter",
            "extra": "iterations: 35434\ncpu: 23344.08477733249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18246.59869598978,
            "unit": "ns/iter",
            "extra": "iterations: 45245\ncpu: 18246.51121670903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18093.386957193623,
            "unit": "ns/iter",
            "extra": "iterations: 45297\ncpu: 18092.76773296242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17643.20136712605,
            "unit": "ns/iter",
            "extra": "iterations: 47545\ncpu: 17642.797349879056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51001.44169068854,
            "unit": "ns/iter",
            "extra": "iterations: 16301\ncpu: 51000.27605668369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 272213.22633870644,
            "unit": "ns/iter",
            "extra": "iterations: 3212\ncpu: 272204.8879202991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 206647.11652543856,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 206639.2890772131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 192516.93552976192,
            "unit": "ns/iter",
            "extra": "iterations: 4219\ncpu: 192509.59943114533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 194725.63568425004,
            "unit": "ns/iter",
            "extra": "iterations: 4282\ncpu: 194718.986454927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108658.37471754037,
            "unit": "ns/iter",
            "extra": "iterations: 7966\ncpu: 108650.30128044212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197340.77800359667,
            "unit": "ns/iter",
            "extra": "iterations: 4428\ncpu: 197334.16892502308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 796374.0024773033,
            "unit": "ns/iter",
            "extra": "iterations: 1211\ncpu: 796343.435177542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 440874.4910269235,
            "unit": "ns/iter",
            "extra": "iterations: 2006\ncpu: 440861.46560319205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1659.2667537706927,
            "unit": "ns/iter",
            "extra": "iterations: 483712\ncpu: 1659.2118864117492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8963.135016104994,
            "unit": "ns/iter",
            "extra": "iterations: 91278\ncpu: 8962.86728455925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6957.378426722969,
            "unit": "ns/iter",
            "extra": "iterations: 123551\ncpu: 6957.082500344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7163.175146020007,
            "unit": "ns/iter",
            "extra": "iterations: 114710\ncpu: 7163.038967831941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6683.602213579012,
            "unit": "ns/iter",
            "extra": "iterations: 121613\ncpu: 6683.204920526599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35014.51489539771,
            "unit": "ns/iter",
            "extra": "iterations: 23900\ncpu: 35013.451882845155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 262652.03432966786,
            "unit": "ns/iter",
            "extra": "iterations: 3379\ncpu: 262639.53832494817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 196482.55298824134,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 196477.0717618302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 194870.95834261287,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 194863.7558476275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 193335.16586645602,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 193326.82234831966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97812.63807180447,
            "unit": "ns/iter",
            "extra": "iterations: 8941\ncpu: 97809.18241807343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 185379.4394354458,
            "unit": "ns/iter",
            "extra": "iterations: 4747\ncpu: 185375.2685906897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 179.59523346129538,
            "unit": "ns/iter",
            "extra": "iterations: 3899811\ncpu: 179.58739538916188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1419.53097215586,
            "unit": "ns/iter",
            "extra": "iterations: 491845\ncpu: 1419.465685327701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1089.808078408117,
            "unit": "ns/iter",
            "extra": "iterations: 639730\ncpu: 1089.7370765791877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1093.6706968994104,
            "unit": "ns/iter",
            "extra": "iterations: 639748\ncpu: 1093.5949780226072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 824.2918385161298,
            "unit": "ns/iter",
            "extra": "iterations: 850066\ncpu: 824.2463526361494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9540.638951511348,
            "unit": "ns/iter",
            "extra": "iterations: 71417\ncpu: 9540.389543106052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12305.183815214063,
            "unit": "ns/iter",
            "extra": "iterations: 56584\ncpu: 12304.974904566669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2717.30477367817,
            "unit": "ns/iter",
            "extra": "iterations: 253201\ncpu: 2717.2183364204802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2783.392733419896,
            "unit": "ns/iter",
            "extra": "iterations: 252003\ncpu: 2783.324404868195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2749.0768680589294,
            "unit": "ns/iter",
            "extra": "iterations: 254462\ncpu: 2748.9601590807206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4908.290258783096,
            "unit": "ns/iter",
            "extra": "iterations: 143093\ncpu: 4908.182790213402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5225.576280459053,
            "unit": "ns/iter",
            "extra": "iterations: 135264\ncpu: 5225.358558079012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1958.8880653490885,
            "unit": "ns/iter",
            "extra": "iterations: 359424\ncpu: 1958.8402555199477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10143.273983550542,
            "unit": "ns/iter",
            "extra": "iterations: 68818\ncpu: 10142.952425237705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8216.18845143126,
            "unit": "ns/iter",
            "extra": "iterations: 84478\ncpu: 8215.988778143505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8088.6263699548435,
            "unit": "ns/iter",
            "extra": "iterations: 86773\ncpu: 8088.053887729927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8063.137362066819,
            "unit": "ns/iter",
            "extra": "iterations: 86727\ncpu: 8062.8293380377145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17592.83139828445,
            "unit": "ns/iter",
            "extra": "iterations: 39620\ncpu: 17592.317011610096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55617.22633112641,
            "unit": "ns/iter",
            "extra": "iterations: 12358\ncpu: 55616.34568700451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42768.69658439483,
            "unit": "ns/iter",
            "extra": "iterations: 16044\ncpu: 42766.828721017795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44743.00950667904,
            "unit": "ns/iter",
            "extra": "iterations: 15568\ncpu: 44741.21274409015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44662.82882247904,
            "unit": "ns/iter",
            "extra": "iterations: 15592\ncpu: 44662.15366854844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25790.574113579034,
            "unit": "ns/iter",
            "extra": "iterations: 27188\ncpu: 25789.96248344858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44209.652928555704,
            "unit": "ns/iter",
            "extra": "iterations: 15844\ncpu: 44208.457460237354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1919.2510704128028,
            "unit": "ns/iter",
            "extra": "iterations: 367148\ncpu: 1919.1582141261783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10449.979571693435,
            "unit": "ns/iter",
            "extra": "iterations: 66868\ncpu: 10449.62612909029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8446.35056367142,
            "unit": "ns/iter",
            "extra": "iterations: 86398\ncpu: 8445.9906479318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8121.870687953664,
            "unit": "ns/iter",
            "extra": "iterations: 86125\ncpu: 8121.703338171343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8006.834778425692,
            "unit": "ns/iter",
            "extra": "iterations: 87307\ncpu: 8006.7153836462385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17964.796915690145,
            "unit": "ns/iter",
            "extra": "iterations: 39166\ncpu: 17964.359393351235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55398.058406366494,
            "unit": "ns/iter",
            "extra": "iterations: 12550\ncpu: 55397.21912350637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43523.44432049953,
            "unit": "ns/iter",
            "extra": "iterations: 16137\ncpu: 43522.1912375287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43129.36405586017,
            "unit": "ns/iter",
            "extra": "iterations: 16253\ncpu: 43128.825447609815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43214.72921703378,
            "unit": "ns/iter",
            "extra": "iterations: 16131\ncpu: 43213.68793007251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25433.842786978017,
            "unit": "ns/iter",
            "extra": "iterations: 27485\ncpu: 25433.349099508898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43020.167777031354,
            "unit": "ns/iter",
            "extra": "iterations: 16361\ncpu: 43018.415744758495 ns\nthreads: 1"
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
        "date": 1705957022142,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 584.6222464240553,
            "unit": "ns/iter",
            "extra": "iterations: 1206522\ncpu: 584.6159456686244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5295.485069999586,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5295.321999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10380.617004554444,
            "unit": "ns/iter",
            "extra": "iterations: 80155\ncpu: 10380.227060071116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15427.87307543708,
            "unit": "ns/iter",
            "extra": "iterations: 54363\ncpu: 15427.669554660331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20433.80716964657,
            "unit": "ns/iter",
            "extra": "iterations: 41062\ncpu: 20392.326238371254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25032.292666189376,
            "unit": "ns/iter",
            "extra": "iterations: 33516\ncpu: 25030.797231173154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30181.04725172068,
            "unit": "ns/iter",
            "extra": "iterations: 27872\ncpu: 30179.330510907002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34648.25826987608,
            "unit": "ns/iter",
            "extra": "iterations: 24033\ncpu: 34646.83144010318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40181.55377399244,
            "unit": "ns/iter",
            "extra": "iterations: 20893\ncpu: 40180.06509357204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 549.9667753381631,
            "unit": "ns/iter",
            "extra": "iterations: 1269268\ncpu: 549.9424865355461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 408.0636158136342,
            "unit": "ns/iter",
            "extra": "iterations: 1684141\ncpu: 408.0419632322944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 417.99124701799684,
            "unit": "ns/iter",
            "extra": "iterations: 1675886\ncpu: 417.97580503685816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 403.4672133006279,
            "unit": "ns/iter",
            "extra": "iterations: 1719493\ncpu: 403.4593918090981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 850.7452021833861,
            "unit": "ns/iter",
            "extra": "iterations: 821259\ncpu: 850.6899772179047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1723.35901628057,
            "unit": "ns/iter",
            "extra": "iterations: 464848\ncpu: 1723.2639486455796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9472.437137331617,
            "unit": "ns/iter",
            "extra": "iterations: 85822\ncpu: 9472.056116147385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7280.376571961325,
            "unit": "ns/iter",
            "extra": "iterations: 111644\ncpu: 7280.072372899579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7184.299950182983,
            "unit": "ns/iter",
            "extra": "iterations: 114419\ncpu: 7183.630341114672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7157.12596552673,
            "unit": "ns/iter",
            "extra": "iterations: 113539\ncpu: 7156.82716951884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36507.627969380694,
            "unit": "ns/iter",
            "extra": "iterations: 22732\ncpu: 36505.75400316737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 245343.5090242394,
            "unit": "ns/iter",
            "extra": "iterations: 3546\ncpu: 245332.00789622104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 190696.75089125737,
            "unit": "ns/iter",
            "extra": "iterations: 4488\ncpu: 190681.21657754006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 190835.4590787182,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 190825.6484794276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 196306.83796504373,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 196296.32451815292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98671.17327012637,
            "unit": "ns/iter",
            "extra": "iterations: 8859\ncpu: 98665.80878202923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186773.77421425926,
            "unit": "ns/iter",
            "extra": "iterations: 4677\ncpu: 186758.15693820856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5258.2473812630615,
            "unit": "ns/iter",
            "extra": "iterations: 156564\ncpu: 5257.933496844722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24744.44540961608,
            "unit": "ns/iter",
            "extra": "iterations: 33385\ncpu: 24743.351804702706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18824.431700709803,
            "unit": "ns/iter",
            "extra": "iterations: 43917\ncpu: 18823.692419791816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18806.744415757654,
            "unit": "ns/iter",
            "extra": "iterations: 44545\ncpu: 18805.749242339236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18053.77711698867,
            "unit": "ns/iter",
            "extra": "iterations: 45064\ncpu: 18053.58379194033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50711.97942134241,
            "unit": "ns/iter",
            "extra": "iterations: 16279\ncpu: 50709.02389581665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 271084.3191423364,
            "unit": "ns/iter",
            "extra": "iterations: 3218\ncpu: 271057.76880049723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 207233.50261906013,
            "unit": "ns/iter",
            "extra": "iterations: 4200\ncpu: 207219.61904761885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 207078.7780157179,
            "unit": "ns/iter",
            "extra": "iterations: 4203\ncpu: 207070.7113966214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205595.99834787688,
            "unit": "ns/iter",
            "extra": "iterations: 4237\ncpu: 205578.5225395341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109294.41290160589,
            "unit": "ns/iter",
            "extra": "iterations: 7968\ncpu: 109286.60893574236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 199298.4373278213,
            "unit": "ns/iter",
            "extra": "iterations: 4356\ncpu: 199286.15702479362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 797174.203657597,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 797110.8063175392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 443536.6768843984,
            "unit": "ns/iter",
            "extra": "iterations: 1990\ncpu: 443512.46231155685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1807.632306688885,
            "unit": "ns/iter",
            "extra": "iterations: 449263\ncpu: 1807.5499206478175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9450.53709695711,
            "unit": "ns/iter",
            "extra": "iterations: 88390\ncpu: 9450.057698834715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7231.305397539266,
            "unit": "ns/iter",
            "extra": "iterations: 113737\ncpu: 7231.089267344838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7084.976436965604,
            "unit": "ns/iter",
            "extra": "iterations: 115817\ncpu: 7084.593798837782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6847.874373037673,
            "unit": "ns/iter",
            "extra": "iterations: 119425\ncpu: 6847.47330960855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35385.880547509696,
            "unit": "ns/iter",
            "extra": "iterations: 23817\ncpu: 35383.797287651716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 262005.13569754688,
            "unit": "ns/iter",
            "extra": "iterations: 3412\ncpu: 261993.11254396252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 196079.83403781767,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 196060.44493882055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 195389.6751929238,
            "unit": "ns/iter",
            "extra": "iterations: 4535\ncpu: 195376.4498346186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 194300.94115042785,
            "unit": "ns/iter",
            "extra": "iterations: 4520\ncpu: 194288.49557522224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97121.43837273747,
            "unit": "ns/iter",
            "extra": "iterations: 9095\ncpu: 97118.61462341993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 186105.59512297125,
            "unit": "ns/iter",
            "extra": "iterations: 4757\ncpu: 186095.2491065802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.12727561089883,
            "unit": "ns/iter",
            "extra": "iterations: 3877695\ncpu: 180.11697670910272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1436.485607018582,
            "unit": "ns/iter",
            "extra": "iterations: 510075\ncpu: 1436.406214772336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1098.5411926846089,
            "unit": "ns/iter",
            "extra": "iterations: 637067\ncpu: 1098.49780321379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1085.3391070103098,
            "unit": "ns/iter",
            "extra": "iterations: 638126\ncpu: 1085.2729711686993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 823.1428200225176,
            "unit": "ns/iter",
            "extra": "iterations: 850518\ncpu: 823.1295516379486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9705.229471724027,
            "unit": "ns/iter",
            "extra": "iterations: 71913\ncpu: 9704.925395964521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12786.801995185677,
            "unit": "ns/iter",
            "extra": "iterations: 54832\ncpu: 12786.199664429512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2813.9011162732086,
            "unit": "ns/iter",
            "extra": "iterations: 248595\ncpu: 2813.8120235724605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2902.7292109041873,
            "unit": "ns/iter",
            "extra": "iterations: 244419\ncpu: 2902.5889967637568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2810.9492898982558,
            "unit": "ns/iter",
            "extra": "iterations: 249260\ncpu: 2810.776297841622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5254.874338853671,
            "unit": "ns/iter",
            "extra": "iterations: 132913\ncpu: 5254.571787560252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5368.817462084469,
            "unit": "ns/iter",
            "extra": "iterations: 130225\ncpu: 5368.505279324278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1960.7062129017072,
            "unit": "ns/iter",
            "extra": "iterations: 357160\ncpu: 1960.5980512935173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10209.435504488089,
            "unit": "ns/iter",
            "extra": "iterations: 68059\ncpu: 10209.291937877466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8239.125024980529,
            "unit": "ns/iter",
            "extra": "iterations: 85063\ncpu: 8238.63959653431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8117.739018893827,
            "unit": "ns/iter",
            "extra": "iterations: 86535\ncpu: 8117.150286011486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8081.572155080658,
            "unit": "ns/iter",
            "extra": "iterations: 86716\ncpu: 8081.200701139336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17774.848124683966,
            "unit": "ns/iter",
            "extra": "iterations: 39460\ncpu: 17773.79624936668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53292.8918683762,
            "unit": "ns/iter",
            "extra": "iterations: 12642\ncpu: 53290.7846859674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44616.91315437028,
            "unit": "ns/iter",
            "extra": "iterations: 15683\ncpu: 44614.002423005986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44337.408221257705,
            "unit": "ns/iter",
            "extra": "iterations: 15837\ncpu: 44335.87800719789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44457.45067053154,
            "unit": "ns/iter",
            "extra": "iterations: 15883\ncpu: 44454.17112636166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25657.11301120678,
            "unit": "ns/iter",
            "extra": "iterations: 27484\ncpu: 25655.424974530575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43057.860509129234,
            "unit": "ns/iter",
            "extra": "iterations: 16381\ncpu: 43055.54605945934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1910.289962662478,
            "unit": "ns/iter",
            "extra": "iterations: 365854\ncpu: 1910.226210455554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10092.761290132925,
            "unit": "ns/iter",
            "extra": "iterations: 68179\ncpu: 10092.499156631813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7989.36679851951,
            "unit": "ns/iter",
            "extra": "iterations: 86966\ncpu: 7989.100338063018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7964.235633104106,
            "unit": "ns/iter",
            "extra": "iterations: 87458\ncpu: 7964.277710443993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7967.234936604859,
            "unit": "ns/iter",
            "extra": "iterations: 87862\ncpu: 7966.9470305706745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17784.38670733209,
            "unit": "ns/iter",
            "extra": "iterations: 39345\ncpu: 17784.11742279841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54215.5742451294,
            "unit": "ns/iter",
            "extra": "iterations: 12883\ncpu: 54215.159512535116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42307.11035736241,
            "unit": "ns/iter",
            "extra": "iterations: 16510\ncpu: 42305.20290732923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42125.67163547945,
            "unit": "ns/iter",
            "extra": "iterations: 16570\ncpu: 42125.26252263071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41998.111264555795,
            "unit": "ns/iter",
            "extra": "iterations: 16654\ncpu: 41998.31872222863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25018.795760528752,
            "unit": "ns/iter",
            "extra": "iterations: 27928\ncpu: 25018.314952735665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41577.54242693095,
            "unit": "ns/iter",
            "extra": "iterations: 16935\ncpu: 41577.55535872483 ns\nthreads: 1"
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
        "date": 1705958490522,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 581.3055874293588,
            "unit": "ns/iter",
            "extra": "iterations: 1207890\ncpu: 581.270479927808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5416.323150000153,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5415.862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10581.146961690854,
            "unit": "ns/iter",
            "extra": "iterations: 78728\ncpu: 10580.6142668428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15499.973277964633,
            "unit": "ns/iter",
            "extra": "iterations: 53701\ncpu: 15499.275618703563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20551.733201629864,
            "unit": "ns/iter",
            "extra": "iterations: 40495\ncpu: 20550.974194344988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24987.975060217024,
            "unit": "ns/iter",
            "extra": "iterations: 32799\ncpu: 24987.338028598435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30349.383105467612,
            "unit": "ns/iter",
            "extra": "iterations: 27867\ncpu: 30347.73746725518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34489.51385369605,
            "unit": "ns/iter",
            "extra": "iterations: 24073\ncpu: 34488.144394134506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39675.44982796638,
            "unit": "ns/iter",
            "extra": "iterations: 21217\ncpu: 39673.74275345242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 543.8785302292953,
            "unit": "ns/iter",
            "extra": "iterations: 1281751\ncpu: 543.8599228711354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 414.3496794083743,
            "unit": "ns/iter",
            "extra": "iterations: 1684074\ncpu: 414.3349995308988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 424.9196116864308,
            "unit": "ns/iter",
            "extra": "iterations: 1652479\ncpu: 424.91686732478826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 406.4962301638789,
            "unit": "ns/iter",
            "extra": "iterations: 1712276\ncpu: 406.4866294919741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 846.300054249485,
            "unit": "ns/iter",
            "extra": "iterations: 825814\ncpu: 846.2862097276134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1718.4366462735452,
            "unit": "ns/iter",
            "extra": "iterations: 463556\ncpu: 1718.3214110053596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9782.94367413697,
            "unit": "ns/iter",
            "extra": "iterations: 84526\ncpu: 9782.860894872569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7196.751105941823,
            "unit": "ns/iter",
            "extra": "iterations: 113478\ncpu: 7196.408995576234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7117.4448594524765,
            "unit": "ns/iter",
            "extra": "iterations: 114054\ncpu: 7117.267259368376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6748.113986619035,
            "unit": "ns/iter",
            "extra": "iterations: 120172\ncpu: 6747.853909396538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36239.57082165224,
            "unit": "ns/iter",
            "extra": "iterations: 22832\ncpu: 36238.78766643298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 256146.2338504993,
            "unit": "ns/iter",
            "extra": "iterations: 3545\ncpu: 256136.16361071955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 196336.33929768327,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 196330.5077163949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185703.72859377245,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 185697.02660406896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 186692.75553567635,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 186691.38895101706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98937.9811640022,
            "unit": "ns/iter",
            "extra": "iterations: 8866\ncpu: 98934.07399052578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 187124.05825658748,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 187114.8639965733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5104.013801117875,
            "unit": "ns/iter",
            "extra": "iterations: 160929\ncpu: 5103.865058504067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23506.7526572833,
            "unit": "ns/iter",
            "extra": "iterations: 34810\ncpu: 23506.56707842579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17947.34780034074,
            "unit": "ns/iter",
            "extra": "iterations: 45598\ncpu: 17946.947234527823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17851.71972736476,
            "unit": "ns/iter",
            "extra": "iterations: 46362\ncpu: 17851.259652301393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17513.65808900781,
            "unit": "ns/iter",
            "extra": "iterations: 47682\ncpu: 17513.25867203559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51871.029426431625,
            "unit": "ns/iter",
            "extra": "iterations: 16040\ncpu: 51869.47630922726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 271552.482887378,
            "unit": "ns/iter",
            "extra": "iterations: 3214\ncpu: 271541.9103920348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 206160.18284905903,
            "unit": "ns/iter",
            "extra": "iterations: 4233\ncpu: 206152.91755256368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 206065.8432994406,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 206059.63129283863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 204927.9320639542,
            "unit": "ns/iter",
            "extra": "iterations: 4254\ncpu: 204917.91255289107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109165.64459189595,
            "unit": "ns/iter",
            "extra": "iterations: 7988\ncpu: 109161.6049073618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 196963.62794918768,
            "unit": "ns/iter",
            "extra": "iterations: 4408\ncpu: 196954.46914700483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 786545.8981787836,
            "unit": "ns/iter",
            "extra": "iterations: 1208\ncpu: 786532.8642384106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 428159.9565004471,
            "unit": "ns/iter",
            "extra": "iterations: 2046\ncpu: 428143.9882697949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1585.3284216165007,
            "unit": "ns/iter",
            "extra": "iterations: 500436\ncpu: 1585.2896274448751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9363.485872638259,
            "unit": "ns/iter",
            "extra": "iterations: 88410\ncpu: 9363.099196923398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7023.137862155416,
            "unit": "ns/iter",
            "extra": "iterations: 117146\ncpu: 7023.083161183455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6755.907449172677,
            "unit": "ns/iter",
            "extra": "iterations: 120604\ncpu: 6755.568637856136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6552.063384923093,
            "unit": "ns/iter",
            "extra": "iterations: 125929\ncpu: 6551.5973286534345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34443.51834748836,
            "unit": "ns/iter",
            "extra": "iterations: 24254\ncpu: 34442.3517770265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 256972.3755458438,
            "unit": "ns/iter",
            "extra": "iterations: 3435\ncpu: 256958.98107714803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192439.59585603303,
            "unit": "ns/iter",
            "extra": "iterations: 4585\ncpu: 192431.86477644535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191276.30278624682,
            "unit": "ns/iter",
            "extra": "iterations: 4594\ncpu: 191264.43186765342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 190388.56769032363,
            "unit": "ns/iter",
            "extra": "iterations: 4624\ncpu: 190380.4282006923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96788.879293212,
            "unit": "ns/iter",
            "extra": "iterations: 9055\ncpu: 96785.05797901707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 184498.2889956242,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 184491.12549592782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.84674337004003,
            "unit": "ns/iter",
            "extra": "iterations: 3881359\ncpu: 180.83377497417732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1415.4455051458062,
            "unit": "ns/iter",
            "extra": "iterations: 501974\ncpu: 1415.3737046141816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1097.960326901686,
            "unit": "ns/iter",
            "extra": "iterations: 639703\ncpu: 1097.9526436486904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1055.4488132732542,
            "unit": "ns/iter",
            "extra": "iterations: 663590\ncpu: 1055.3968564927068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 880.3602894553972,
            "unit": "ns/iter",
            "extra": "iterations: 851668\ncpu: 880.3263713090071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9618.461125123664,
            "unit": "ns/iter",
            "extra": "iterations: 72952\ncpu: 9618.007731110856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12199.728148932785,
            "unit": "ns/iter",
            "extra": "iterations: 57583\ncpu: 12199.096955698766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2710.002631885111,
            "unit": "ns/iter",
            "extra": "iterations: 257990\ncpu: 2709.988759254247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2729.17447364827,
            "unit": "ns/iter",
            "extra": "iterations: 256245\ncpu: 2729.002712248047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2709.2169843872844,
            "unit": "ns/iter",
            "extra": "iterations: 257931\ncpu: 2709.0993327672672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5144.2624497065835,
            "unit": "ns/iter",
            "extra": "iterations: 136449\ncpu: 5143.965877360782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5247.55246678273,
            "unit": "ns/iter",
            "extra": "iterations: 133818\ncpu: 5247.512292815655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1921.4450277346527,
            "unit": "ns/iter",
            "extra": "iterations: 363265\ncpu: 1921.4031079239614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10283.529076009723,
            "unit": "ns/iter",
            "extra": "iterations: 67977\ncpu: 10283.05309148693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8248.667752211784,
            "unit": "ns/iter",
            "extra": "iterations: 84136\ncpu: 8248.377626699757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8016.353757252986,
            "unit": "ns/iter",
            "extra": "iterations: 86353\ncpu: 8015.743517885871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7960.798784228572,
            "unit": "ns/iter",
            "extra": "iterations: 88010\ncpu: 7960.279513691562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17588.157055400847,
            "unit": "ns/iter",
            "extra": "iterations: 39693\ncpu: 17588.015519109023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54781.80334662651,
            "unit": "ns/iter",
            "extra": "iterations: 12789\ncpu: 54780.87418875654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43117.815769989895,
            "unit": "ns/iter",
            "extra": "iterations: 16208\ncpu: 43117.44200394863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42763.564358273645,
            "unit": "ns/iter",
            "extra": "iterations: 16144\ncpu: 42760.170961348005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42775.679906829944,
            "unit": "ns/iter",
            "extra": "iterations: 16314\ncpu: 42773.5564545793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25143.064788937896,
            "unit": "ns/iter",
            "extra": "iterations: 27906\ncpu: 25141.145273418275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42650.721545823624,
            "unit": "ns/iter",
            "extra": "iterations: 16509\ncpu: 42647.895087528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1907.4231738929368,
            "unit": "ns/iter",
            "extra": "iterations: 366490\ncpu: 1907.3044284973455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10251.924610802847,
            "unit": "ns/iter",
            "extra": "iterations: 68153\ncpu: 10251.020497997157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8073.745532522584,
            "unit": "ns/iter",
            "extra": "iterations: 86738\ncpu: 8073.424565934348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8019.064319582656,
            "unit": "ns/iter",
            "extra": "iterations: 87314\ncpu: 8018.937398355329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7937.189166193928,
            "unit": "ns/iter",
            "extra": "iterations: 88150\ncpu: 7936.822461712856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17821.872333936783,
            "unit": "ns/iter",
            "extra": "iterations: 39337\ncpu: 17821.008211098997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53696.65080713442,
            "unit": "ns/iter",
            "extra": "iterations: 12947\ncpu: 53694.122190469636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42039.225845268506,
            "unit": "ns/iter",
            "extra": "iterations: 16622\ncpu: 42035.41691733856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41598.75100546148,
            "unit": "ns/iter",
            "extra": "iterations: 16659\ncpu: 41596.740500629894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41470.932630832875,
            "unit": "ns/iter",
            "extra": "iterations: 16892\ncpu: 41469.27539663792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25111.08117103638,
            "unit": "ns/iter",
            "extra": "iterations: 27941\ncpu: 25109.824272574187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42345.71427717911,
            "unit": "ns/iter",
            "extra": "iterations: 16726\ncpu: 42344.81047470971 ns\nthreads: 1"
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
        "date": 1705959944693,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 586.3060049377863,
            "unit": "ns/iter",
            "extra": "iterations: 1202144\ncpu: 586.2994782654989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5361.080449999918,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5360.373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10285.003724232649,
            "unit": "ns/iter",
            "extra": "iterations: 80822\ncpu: 10284.389151468664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15481.802288878911,
            "unit": "ns/iter",
            "extra": "iterations: 54175\ncpu: 15481.057683433319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20484.103301229625,
            "unit": "ns/iter",
            "extra": "iterations: 40803\ncpu: 20483.106634316107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25385.594856570562,
            "unit": "ns/iter",
            "extra": "iterations: 33013\ncpu: 25383.39744948961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30234.64496235278,
            "unit": "ns/iter",
            "extra": "iterations: 27890\ncpu: 30232.732162065276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35391.62127129825,
            "unit": "ns/iter",
            "extra": "iterations: 23299\ncpu: 35389.91802223273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40123.86260786348,
            "unit": "ns/iter",
            "extra": "iterations: 20860\ncpu: 40122.066155321154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 567.3618221413374,
            "unit": "ns/iter",
            "extra": "iterations: 1230179\ncpu: 567.3276815812975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 430.9830420243438,
            "unit": "ns/iter",
            "extra": "iterations: 1627081\ncpu: 430.97743750925696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 438.211897585933,
            "unit": "ns/iter",
            "extra": "iterations: 1595601\ncpu: 438.1832300180301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 424.5331878727954,
            "unit": "ns/iter",
            "extra": "iterations: 1643974\ncpu: 424.500934929628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 850.337634226365,
            "unit": "ns/iter",
            "extra": "iterations: 802469\ncpu: 850.3268039014602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1794.9041234448869,
            "unit": "ns/iter",
            "extra": "iterations: 464660\ncpu: 1794.8738862824428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9768.037605893842,
            "unit": "ns/iter",
            "extra": "iterations: 83338\ncpu: 9767.935395617855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7686.556487589084,
            "unit": "ns/iter",
            "extra": "iterations: 104908\ncpu: 7686.380447630292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7624.836924792358,
            "unit": "ns/iter",
            "extra": "iterations: 105853\ncpu: 7624.539691836761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7300.280374423223,
            "unit": "ns/iter",
            "extra": "iterations: 110570\ncpu: 7300.192638147756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36341.832332179365,
            "unit": "ns/iter",
            "extra": "iterations: 22807\ncpu: 36340.785723681205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 246547.20901055957,
            "unit": "ns/iter",
            "extra": "iterations: 3507\ncpu: 246538.8651268887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 195667.63495625506,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 195655.93448508013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186873.71425374152,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 186864.6677108975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 187680.69090909217,
            "unit": "ns/iter",
            "extra": "iterations: 4455\ncpu: 187677.59820426462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97874.39537767404,
            "unit": "ns/iter",
            "extra": "iterations: 8870\ncpu: 97871.35287485935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186837.82689832037,
            "unit": "ns/iter",
            "extra": "iterations: 4662\ncpu: 186830.86658086712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5239.851182943951,
            "unit": "ns/iter",
            "extra": "iterations: 150937\ncpu: 5239.760297342592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24773.157296048106,
            "unit": "ns/iter",
            "extra": "iterations: 33758\ncpu: 24772.898275964228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19071.75405492587,
            "unit": "ns/iter",
            "extra": "iterations: 43404\ncpu: 19071.083310293954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19036.80973781067,
            "unit": "ns/iter",
            "extra": "iterations: 44281\ncpu: 19036.360967457873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18477.226355415725,
            "unit": "ns/iter",
            "extra": "iterations: 44894\ncpu: 18476.65612331263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49547.70122758651,
            "unit": "ns/iter",
            "extra": "iterations: 16618\ncpu: 49541.268504031905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 271751.3496894392,
            "unit": "ns/iter",
            "extra": "iterations: 3220\ncpu: 271736.0248447195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 205848.73763896633,
            "unit": "ns/iter",
            "extra": "iterations: 4227\ncpu: 205826.4963330979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205599.7740486757,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 205585.84259040438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 207637.83953816656,
            "unit": "ns/iter",
            "extra": "iterations: 4244\ncpu: 207625.8953817158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108536.07361111825,
            "unit": "ns/iter",
            "extra": "iterations: 7920\ncpu: 108528.20707070704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197377.73817684728,
            "unit": "ns/iter",
            "extra": "iterations: 4377\ncpu: 197369.63673749077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 790101.6076476146,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 790087.1155444739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 436886.10196077917,
            "unit": "ns/iter",
            "extra": "iterations: 2040\ncpu: 436865.98039215873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1830.9896022534595,
            "unit": "ns/iter",
            "extra": "iterations: 433844\ncpu: 1830.828823263666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9184.545681147503,
            "unit": "ns/iter",
            "extra": "iterations: 87859\ncpu: 9184.089279413678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6612.689857143829,
            "unit": "ns/iter",
            "extra": "iterations: 121731\ncpu: 6612.455331838268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7169.995366152526,
            "unit": "ns/iter",
            "extra": "iterations: 114160\ncpu: 7169.562894183583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6907.086424442347,
            "unit": "ns/iter",
            "extra": "iterations: 121100\ncpu: 6906.84227910819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34529.34986655494,
            "unit": "ns/iter",
            "extra": "iterations: 24355\ncpu: 34528.40895093395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 262455.8668430385,
            "unit": "ns/iter",
            "extra": "iterations: 3402\ncpu: 262452.02821869444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 195503.56265193017,
            "unit": "ns/iter",
            "extra": "iterations: 4525\ncpu: 195493.5027624312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 194707.26723573147,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 194700.30641278133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 193629.27623456134,
            "unit": "ns/iter",
            "extra": "iterations: 4536\ncpu: 193621.14197530813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98350.64150943045,
            "unit": "ns/iter",
            "extra": "iterations: 8904\ncpu: 98347.98966756486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 185826.34909862242,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 185815.69459172952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.26817388940506,
            "unit": "ns/iter",
            "extra": "iterations: 3887459\ncpu: 180.26343171722263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1394.2103719845247,
            "unit": "ns/iter",
            "extra": "iterations: 493811\ncpu: 1394.166189088538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1088.1532373083512,
            "unit": "ns/iter",
            "extra": "iterations: 642957\ncpu: 1088.1514626950218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1092.3689913081266,
            "unit": "ns/iter",
            "extra": "iterations: 641633\ncpu: 1092.3454685154884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 824.0998635975869,
            "unit": "ns/iter",
            "extra": "iterations: 848958\ncpu: 824.0791652826226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9626.041027611636,
            "unit": "ns/iter",
            "extra": "iterations: 72829\ncpu: 9625.805654341013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12615.596059916268,
            "unit": "ns/iter",
            "extra": "iterations: 55278\ncpu: 12615.043959622191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2802.9717099584896,
            "unit": "ns/iter",
            "extra": "iterations: 249275\ncpu: 2802.9393240397085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2830.8659582052474,
            "unit": "ns/iter",
            "extra": "iterations: 246826\ncpu: 2830.736227139743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2825.6830868300594,
            "unit": "ns/iter",
            "extra": "iterations: 249084\ncpu: 2825.6258932729543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5228.194269173413,
            "unit": "ns/iter",
            "extra": "iterations: 140259\ncpu: 5228.1436485358945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5326.6874231934435,
            "unit": "ns/iter",
            "extra": "iterations: 131011\ncpu: 5326.620665440286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1952.9137368128536,
            "unit": "ns/iter",
            "extra": "iterations: 360200\ncpu: 1952.8575791227297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10277.993591802106,
            "unit": "ns/iter",
            "extra": "iterations: 68506\ncpu: 10277.780048462955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8318.616929092252,
            "unit": "ns/iter",
            "extra": "iterations: 85167\ncpu: 8318.45667923014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8134.589618362521,
            "unit": "ns/iter",
            "extra": "iterations: 85998\ncpu: 8134.451963999221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7981.3484521245,
            "unit": "ns/iter",
            "extra": "iterations: 87507\ncpu: 7981.211788771143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17709.362034035657,
            "unit": "ns/iter",
            "extra": "iterations: 39488\ncpu: 17708.70644246363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55641.3908657612,
            "unit": "ns/iter",
            "extra": "iterations: 12590\ncpu: 55639.65051628277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43146.49321607685,
            "unit": "ns/iter",
            "extra": "iterations: 15920\ncpu: 43144.89321608104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43019.72455493971,
            "unit": "ns/iter",
            "extra": "iterations: 16290\ncpu: 43019.158993247256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43493.2994760431,
            "unit": "ns/iter",
            "extra": "iterations: 15841\ncpu: 43492.24165141099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25258.58346271922,
            "unit": "ns/iter",
            "extra": "iterations: 27695\ncpu: 25258.292110489456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43386.30565659008,
            "unit": "ns/iter",
            "extra": "iterations: 15946\ncpu: 43386.165809606966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1914.8561798675746,
            "unit": "ns/iter",
            "extra": "iterations: 365380\ncpu: 1914.7999343149445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10347.37527198448,
            "unit": "ns/iter",
            "extra": "iterations: 67559\ncpu: 10346.991518524657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8290.984926372746,
            "unit": "ns/iter",
            "extra": "iterations: 86177\ncpu: 8290.796848347061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8051.718178878265,
            "unit": "ns/iter",
            "extra": "iterations: 86562\ncpu: 8051.508745176939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7950.773564932198,
            "unit": "ns/iter",
            "extra": "iterations: 87853\ncpu: 7950.750685804693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18101.448073488104,
            "unit": "ns/iter",
            "extra": "iterations: 39190\ncpu: 18100.954325083203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54307.81307158841,
            "unit": "ns/iter",
            "extra": "iterations: 12684\ncpu: 54305.629139072174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43033.3883837444,
            "unit": "ns/iter",
            "extra": "iterations: 16167\ncpu: 43032.20139790886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42750.56732242386,
            "unit": "ns/iter",
            "extra": "iterations: 16317\ncpu: 42750.432064717534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43044.096258000216,
            "unit": "ns/iter",
            "extra": "iterations: 16248\ncpu: 43042.90989660256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25551.80740285264,
            "unit": "ns/iter",
            "extra": "iterations: 27638\ncpu: 25551.356827555825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42682.65948198005,
            "unit": "ns/iter",
            "extra": "iterations: 16563\ncpu: 42681.33792187389 ns\nthreads: 1"
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
        "date": 1705962009646,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 579.7391630944169,
            "unit": "ns/iter",
            "extra": "iterations: 1207448\ncpu: 579.7351107459701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5417.8806499999155,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5417.684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10601.73006956255,
            "unit": "ns/iter",
            "extra": "iterations: 79928\ncpu: 10601.685266740065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15370.159472712538,
            "unit": "ns/iter",
            "extra": "iterations: 53633\ncpu: 15369.056364551676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20399.000386969718,
            "unit": "ns/iter",
            "extra": "iterations: 41347\ncpu: 20398.693980216212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25223.020444363032,
            "unit": "ns/iter",
            "extra": "iterations: 33261\ncpu: 25222.082919936256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30056.026880171994,
            "unit": "ns/iter",
            "extra": "iterations: 27790\ncpu: 30055.861820798844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34536.976993802644,
            "unit": "ns/iter",
            "extra": "iterations: 24037\ncpu: 34535.63672671296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39064.560524469416,
            "unit": "ns/iter",
            "extra": "iterations: 21355\ncpu: 39063.61507843601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 540.763340814491,
            "unit": "ns/iter",
            "extra": "iterations: 1294355\ncpu: 540.7390553596198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 414.2080703558096,
            "unit": "ns/iter",
            "extra": "iterations: 1688674\ncpu: 414.20410333788504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 424.04351203365354,
            "unit": "ns/iter",
            "extra": "iterations: 1654278\ncpu: 424.0333849570632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 411.5451706822928,
            "unit": "ns/iter",
            "extra": "iterations: 1701524\ncpu: 411.5156177638406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 846.6601597236568,
            "unit": "ns/iter",
            "extra": "iterations: 826553\ncpu: 846.6372997254864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1749.0191892751209,
            "unit": "ns/iter",
            "extra": "iterations: 465312\ncpu: 1748.9707980881637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9307.962403123018,
            "unit": "ns/iter",
            "extra": "iterations: 85805\ncpu: 9307.520540761017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7487.872962634225,
            "unit": "ns/iter",
            "extra": "iterations: 108228\ncpu: 7487.484754407379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7092.114098141716,
            "unit": "ns/iter",
            "extra": "iterations: 113937\ncpu: 7091.751582014634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6820.833429385587,
            "unit": "ns/iter",
            "extra": "iterations: 117992\ncpu: 6820.517492711366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36403.43124726678,
            "unit": "ns/iter",
            "extra": "iterations: 22850\ncpu: 36401.08533916858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 243345.3284174812,
            "unit": "ns/iter",
            "extra": "iterations: 3526\ncpu: 243330.7714123658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 183966.44050292246,
            "unit": "ns/iter",
            "extra": "iterations: 4454\ncpu: 183953.74943870696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 184927.475369457,
            "unit": "ns/iter",
            "extra": "iterations: 4466\ncpu: 184916.09941782308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 186219.0603680331,
            "unit": "ns/iter",
            "extra": "iterations: 4456\ncpu: 186207.65260323125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98474.54087979319,
            "unit": "ns/iter",
            "extra": "iterations: 8843\ncpu: 98469.04896528332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186242.36635795023,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 186232.06978246837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5030.737389804,
            "unit": "ns/iter",
            "extra": "iterations: 163459\ncpu: 5030.633369835864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24047.632998080833,
            "unit": "ns/iter",
            "extra": "iterations: 34899\ncpu: 24046.72913263989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18626.84040066586,
            "unit": "ns/iter",
            "extra": "iterations: 44925\ncpu: 18626.52198107954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18104.577521149386,
            "unit": "ns/iter",
            "extra": "iterations: 45981\ncpu: 18103.9342337052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18042.408186108143,
            "unit": "ns/iter",
            "extra": "iterations: 45565\ncpu: 18042.030066937317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51916.55123586673,
            "unit": "ns/iter",
            "extra": "iterations: 16102\ncpu: 51913.563532480606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 272551.1680672383,
            "unit": "ns/iter",
            "extra": "iterations: 3213\ncpu: 272536.97478991735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 206076.30879924636,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 206061.61830620447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200804.2012310677,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 200791.33522727338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 196303.68474416673,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 196294.29379863286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108925.675206205,
            "unit": "ns/iter",
            "extra": "iterations: 8002\ncpu: 108920.40739815049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 196397.62723771884,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 196384.50033990553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 788018.9322873561,
            "unit": "ns/iter",
            "extra": "iterations: 1211\ncpu: 787976.7134599474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 437613.57327373076,
            "unit": "ns/iter",
            "extra": "iterations: 2013\ncpu: 437595.72776949825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1737.7806541404275,
            "unit": "ns/iter",
            "extra": "iterations: 467759\ncpu: 1737.7113000498105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9760.709629470457,
            "unit": "ns/iter",
            "extra": "iterations: 83421\ncpu: 9760.179091595586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6860.3355214118355,
            "unit": "ns/iter",
            "extra": "iterations: 118064\ncpu: 6859.979333242996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7046.506435604959,
            "unit": "ns/iter",
            "extra": "iterations: 115063\ncpu: 7046.108653520239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6558.9553264600645,
            "unit": "ns/iter",
            "extra": "iterations: 123966\ncpu: 6558.546698288233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34537.71077025451,
            "unit": "ns/iter",
            "extra": "iterations: 24057\ncpu: 34535.523963918786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 258494.8878858543,
            "unit": "ns/iter",
            "extra": "iterations: 3434\ncpu: 258480.2271403623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190327.08595799288,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 190317.25721784664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 184886.50076534756,
            "unit": "ns/iter",
            "extra": "iterations: 4573\ncpu: 184874.8742619719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 191182.882981062,
            "unit": "ns/iter",
            "extra": "iterations: 4589\ncpu: 191180.34430158997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95630.93733480714,
            "unit": "ns/iter",
            "extra": "iterations: 9080\ncpu: 95627.7973568277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 184430.96538623638,
            "unit": "ns/iter",
            "extra": "iterations: 4738\ncpu: 184429.75939214823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.42867029864473,
            "unit": "ns/iter",
            "extra": "iterations: 3863657\ncpu: 180.4249963182556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1405.332865417979,
            "unit": "ns/iter",
            "extra": "iterations: 495104\ncpu: 1405.2817185884176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1142.2515097344456,
            "unit": "ns/iter",
            "extra": "iterations: 606398\ncpu: 1142.180712997078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1169.366936366095,
            "unit": "ns/iter",
            "extra": "iterations: 603388\ncpu: 1169.315432192882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 792.5650997801636,
            "unit": "ns/iter",
            "extra": "iterations: 857284\ncpu: 792.5561424218755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9438.75806451521,
            "unit": "ns/iter",
            "extra": "iterations: 74214\ncpu: 9438.455008488965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12306.892552086412,
            "unit": "ns/iter",
            "extra": "iterations: 56781\ncpu: 12306.910762402873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2732.7217647081125,
            "unit": "ns/iter",
            "extra": "iterations: 254637\ncpu: 2732.6480440784208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2794.332812974083,
            "unit": "ns/iter",
            "extra": "iterations: 253671\ncpu: 2794.339518510198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2706.4005971825964,
            "unit": "ns/iter",
            "extra": "iterations: 259887\ncpu: 2706.365843616646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5149.351086581622,
            "unit": "ns/iter",
            "extra": "iterations: 136069\ncpu: 5149.361720891599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5093.713033575737,
            "unit": "ns/iter",
            "extra": "iterations: 136110\ncpu: 5093.725663066617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1927.362417537804,
            "unit": "ns/iter",
            "extra": "iterations: 365926\ncpu: 1927.310439815698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10290.714252383252,
            "unit": "ns/iter",
            "extra": "iterations: 68578\ncpu: 10290.546530957494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8141.33505148646,
            "unit": "ns/iter",
            "extra": "iterations: 85751\ncpu: 8141.096896829304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7983.034952099658,
            "unit": "ns/iter",
            "extra": "iterations: 87577\ncpu: 7982.966989049568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7905.302962155245,
            "unit": "ns/iter",
            "extra": "iterations: 88044\ncpu: 7905.245104720462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17561.850728673264,
            "unit": "ns/iter",
            "extra": "iterations: 39867\ncpu: 17561.90082022728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54799.66101694281,
            "unit": "ns/iter",
            "extra": "iterations: 12803\ncpu: 54799.79692259673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42984.803925167354,
            "unit": "ns/iter",
            "extra": "iterations: 16356\ncpu: 42984.22597211974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42109.68097316162,
            "unit": "ns/iter",
            "extra": "iterations: 16729\ncpu: 42109.73758144516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42688.021581852256,
            "unit": "ns/iter",
            "extra": "iterations: 16310\ncpu: 42688.07480073555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25362.938855442695,
            "unit": "ns/iter",
            "extra": "iterations: 27574\ncpu: 25362.693116704104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43183.92612656849,
            "unit": "ns/iter",
            "extra": "iterations: 16244\ncpu: 43184.0002462452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1919.66092129776,
            "unit": "ns/iter",
            "extra": "iterations: 366266\ncpu: 1919.5882227670759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10254.581653284828,
            "unit": "ns/iter",
            "extra": "iterations: 68252\ncpu: 10254.505362480357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8015.26754582272,
            "unit": "ns/iter",
            "extra": "iterations: 87129\ncpu: 8015.287676893023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8005.002164155945,
            "unit": "ns/iter",
            "extra": "iterations: 87332\ncpu: 8004.907708514705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7887.87561846159,
            "unit": "ns/iter",
            "extra": "iterations: 88526\ncpu: 7887.899600117517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17769.758682893513,
            "unit": "ns/iter",
            "extra": "iterations: 39359\ncpu: 17769.24210472828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55166.24500235872,
            "unit": "ns/iter",
            "extra": "iterations: 12706\ncpu: 55166.36234849601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42848.497458509155,
            "unit": "ns/iter",
            "extra": "iterations: 16329\ncpu: 42847.939249188465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42778.525478675714,
            "unit": "ns/iter",
            "extra": "iterations: 16347\ncpu: 42778.61993026312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42493.81237063245,
            "unit": "ns/iter",
            "extra": "iterations: 16426\ncpu: 42492.578838427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24969.211644738927,
            "unit": "ns/iter",
            "extra": "iterations: 28047\ncpu: 24969.26944058197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42254.60409944026,
            "unit": "ns/iter",
            "extra": "iterations: 16734\ncpu: 42253.92016254286 ns\nthreads: 1"
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
        "date": 1705963420252,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 580.5408023007719,
            "unit": "ns/iter",
            "extra": "iterations: 1212787\ncpu: 580.5299694010572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5411.967979999872,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5411.556999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10665.25995889037,
            "unit": "ns/iter",
            "extra": "iterations: 79301\ncpu: 10664.904603977247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15650.91149275908,
            "unit": "ns/iter",
            "extra": "iterations: 53103\ncpu: 15650.44159463684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20456.022595284685,
            "unit": "ns/iter",
            "extra": "iterations: 40982\ncpu: 20455.597579425114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25614.97762959948,
            "unit": "ns/iter",
            "extra": "iterations: 32543\ncpu: 25613.47755277631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30473.925624616404,
            "unit": "ns/iter",
            "extra": "iterations: 27657\ncpu: 30472.487977727185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35781.817279977266,
            "unit": "ns/iter",
            "extra": "iterations: 23588\ncpu: 35780.591826352385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40481.02013939078,
            "unit": "ns/iter",
            "extra": "iterations: 20805\ncpu: 40480.78827204994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 571.9334827998372,
            "unit": "ns/iter",
            "extra": "iterations: 1223909\ncpu: 571.906734896139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 433.9166346931371,
            "unit": "ns/iter",
            "extra": "iterations: 1618527\ncpu: 433.91571472085406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 437.4410985899624,
            "unit": "ns/iter",
            "extra": "iterations: 1600488\ncpu: 437.42308595878296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 425.4094941141867,
            "unit": "ns/iter",
            "extra": "iterations: 1623469\ncpu: 425.38551706253736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 877.8483115925271,
            "unit": "ns/iter",
            "extra": "iterations: 797734\ncpu: 877.8438677554183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1722.647853585126,
            "unit": "ns/iter",
            "extra": "iterations: 462958\ncpu: 1722.6223545116425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9546.1692966194,
            "unit": "ns/iter",
            "extra": "iterations: 85743\ncpu: 9546.176364251294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7352.904454230138,
            "unit": "ns/iter",
            "extra": "iterations: 110816\ncpu: 7352.631388969101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7158.459328656479,
            "unit": "ns/iter",
            "extra": "iterations: 112610\ncpu: 7158.095195808534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7124.104772475493,
            "unit": "ns/iter",
            "extra": "iterations: 112625\ncpu: 7123.930743618211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36290.91633064817,
            "unit": "ns/iter",
            "extra": "iterations: 22816\ncpu: 36289.454768583404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 238665.23827909137,
            "unit": "ns/iter",
            "extra": "iterations: 3626\ncpu: 238658.32873690056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 188624.15435325765,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 188613.41213912246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 189944.50536162226,
            "unit": "ns/iter",
            "extra": "iterations: 4383\ncpu: 189938.92311202327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 190634.6495784996,
            "unit": "ns/iter",
            "extra": "iterations: 4389\ncpu: 190627.40943267237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 100201.94822006508,
            "unit": "ns/iter",
            "extra": "iterations: 8652\ncpu: 100197.75774387445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 190196.7054689175,
            "unit": "ns/iter",
            "extra": "iterations: 4553\ncpu: 190186.62420382147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5258.2752695481,
            "unit": "ns/iter",
            "extra": "iterations: 155909\ncpu: 5258.115952254187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24648.21786170115,
            "unit": "ns/iter",
            "extra": "iterations: 34476\ncpu: 24647.441698572948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19179.414862372185,
            "unit": "ns/iter",
            "extra": "iterations: 43923\ncpu: 19178.41222138742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18808.650146685184,
            "unit": "ns/iter",
            "extra": "iterations: 44653\ncpu: 18808.024096925197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18717.68403532675,
            "unit": "ns/iter",
            "extra": "iterations: 44160\ncpu: 18717.08333333329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50095.64795024425,
            "unit": "ns/iter",
            "extra": "iterations: 16563\ncpu: 50094.30054941757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 275733.0536175727,
            "unit": "ns/iter",
            "extra": "iterations: 3096\ncpu: 275715.7622739026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 208342.73083393395,
            "unit": "ns/iter",
            "extra": "iterations: 4161\ncpu: 208334.8954578239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 207600.94323354214,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 207591.47305389223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 208714.0339469149,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 208706.09610327618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110513.06691166433,
            "unit": "ns/iter",
            "extra": "iterations: 7891\ncpu: 110506.45038651585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 200357.15879146752,
            "unit": "ns/iter",
            "extra": "iterations: 4402\ncpu: 200350.0908677871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 773523.3078203059,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 773494.8419301204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 440963.4169558736,
            "unit": "ns/iter",
            "extra": "iterations: 2017\ncpu: 440955.57759047893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1726.4859215197223,
            "unit": "ns/iter",
            "extra": "iterations: 472068\ncpu: 1726.4156858757638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9271.084325741185,
            "unit": "ns/iter",
            "extra": "iterations: 89261\ncpu: 9271.065750999831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7364.558550193651,
            "unit": "ns/iter",
            "extra": "iterations: 116319\ncpu: 7364.262072404334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7211.9088799424235,
            "unit": "ns/iter",
            "extra": "iterations: 113762\ncpu: 7211.667340588273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7142.162100809974,
            "unit": "ns/iter",
            "extra": "iterations: 116298\ncpu: 7141.810693219136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35035.223169509794,
            "unit": "ns/iter",
            "extra": "iterations: 23928\ncpu: 35034.382313607486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 256750.00087287163,
            "unit": "ns/iter",
            "extra": "iterations: 3437\ncpu: 256741.8388129188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192675.5751978991,
            "unit": "ns/iter",
            "extra": "iterations: 4548\ncpu: 192673.1970096752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 185716.9727652231,
            "unit": "ns/iter",
            "extra": "iterations: 4553\ncpu: 185712.54118163863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 193106.74507228896,
            "unit": "ns/iter",
            "extra": "iterations: 4566\ncpu: 193104.862023653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96806.7111997351,
            "unit": "ns/iter",
            "extra": "iterations: 9027\ncpu: 96805.95989808293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 184204.488767591,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 184203.29624186576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 181.03274522223725,
            "unit": "ns/iter",
            "extra": "iterations: 3869847\ncpu: 181.03030946701648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1366.4379090569898,
            "unit": "ns/iter",
            "extra": "iterations: 513376\ncpu: 1366.4489574892457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1085.806105721935,
            "unit": "ns/iter",
            "extra": "iterations: 644805\ncpu: 1085.7648436348943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1032.4596727667713,
            "unit": "ns/iter",
            "extra": "iterations: 677743\ncpu: 1032.433828162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 833.9017524807919,
            "unit": "ns/iter",
            "extra": "iterations: 837955\ncpu: 833.8667350872124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9436.361350285531,
            "unit": "ns/iter",
            "extra": "iterations: 74562\ncpu: 9436.238298328928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12343.251433900263,
            "unit": "ns/iter",
            "extra": "iterations: 56838\ncpu: 12343.11200253345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2735.069984921354,
            "unit": "ns/iter",
            "extra": "iterations: 255998\ncpu: 2735.065117696231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2838.4475437039105,
            "unit": "ns/iter",
            "extra": "iterations: 261532\ncpu: 2838.433920132143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2791.2766826940747,
            "unit": "ns/iter",
            "extra": "iterations: 250818\ncpu: 2791.2163401350776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5221.220229743532,
            "unit": "ns/iter",
            "extra": "iterations: 133279\ncpu: 5221.058831473844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5368.391130240626,
            "unit": "ns/iter",
            "extra": "iterations: 130105\ncpu: 5368.17801006879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1934.1279779340052,
            "unit": "ns/iter",
            "extra": "iterations: 361828\ncpu: 1934.0625932763471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10216.555331786265,
            "unit": "ns/iter",
            "extra": "iterations: 68523\ncpu: 10216.092406929138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8209.684654438232,
            "unit": "ns/iter",
            "extra": "iterations: 85484\ncpu: 8209.552664826233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8066.924585426643,
            "unit": "ns/iter",
            "extra": "iterations: 87198\ncpu: 8066.564600105511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8032.977679388641,
            "unit": "ns/iter",
            "extra": "iterations: 87408\ncpu: 8032.570245286565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17601.558874428658,
            "unit": "ns/iter",
            "extra": "iterations: 39873\ncpu: 17601.00318511286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56285.54725645844,
            "unit": "ns/iter",
            "extra": "iterations: 12411\ncpu: 56283.160099911496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44064.56858921869,
            "unit": "ns/iter",
            "extra": "iterations: 15899\ncpu: 44061.90955406001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44019.1570674039,
            "unit": "ns/iter",
            "extra": "iterations: 15904\ncpu: 44017.32268611674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44265.18252809597,
            "unit": "ns/iter",
            "extra": "iterations: 15751\ncpu: 44263.44993968582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25388.042502352368,
            "unit": "ns/iter",
            "extra": "iterations: 27622\ncpu: 25386.242849901977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43358.91621252987,
            "unit": "ns/iter",
            "extra": "iterations: 16148\ncpu: 43359.239534308435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1917.4021914249565,
            "unit": "ns/iter",
            "extra": "iterations: 364968\ncpu: 1917.3990596435633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10336.644667652332,
            "unit": "ns/iter",
            "extra": "iterations: 67700\ncpu: 10336.290989660269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7972.646467767944,
            "unit": "ns/iter",
            "extra": "iterations: 87381\ncpu: 7972.123230450507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8052.257924176278,
            "unit": "ns/iter",
            "extra": "iterations: 86886\ncpu: 8051.905945721987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8042.419365941703,
            "unit": "ns/iter",
            "extra": "iterations: 87153\ncpu: 8042.393262423583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17854.331793590525,
            "unit": "ns/iter",
            "extra": "iterations: 39184\ncpu: 17854.274703960557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51843.70014945039,
            "unit": "ns/iter",
            "extra": "iterations: 12713\ncpu: 51840.82435302392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41622.90858709655,
            "unit": "ns/iter",
            "extra": "iterations: 16781\ncpu: 41622.57910732401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41420.27280246037,
            "unit": "ns/iter",
            "extra": "iterations: 16928\ncpu: 41419.37027410208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41467.92598527991,
            "unit": "ns/iter",
            "extra": "iterations: 16848\ncpu: 41468.18613485279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24792.336206284646,
            "unit": "ns/iter",
            "extra": "iterations: 28194\ncpu: 24791.6826275095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41401.9450555888,
            "unit": "ns/iter",
            "extra": "iterations: 17090\ncpu: 41401.802223522056 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}