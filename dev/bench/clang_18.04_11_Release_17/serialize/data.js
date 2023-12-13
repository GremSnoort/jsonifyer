window.BENCHMARK_DATA = {
  "lastUpdate": 1702492922915,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-11 18.04 Release c++-17": [
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
        "date": 1702490295984,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 690.7178117805149,
            "unit": "ns/iter",
            "extra": "iterations: 985477\ncpu: 690.6971953683343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10753.95375610846,
            "unit": "ns/iter",
            "extra": "iterations: 77567\ncpu: 10753.842484561734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23871.291559075307,
            "unit": "ns/iter",
            "extra": "iterations: 34854\ncpu: 23870.88999827854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37433.68365879319,
            "unit": "ns/iter",
            "extra": "iterations: 21559\ncpu: 37432.16754023843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47535.40100986074,
            "unit": "ns/iter",
            "extra": "iterations: 17032\ncpu: 47532.77360263038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58971.17708187998,
            "unit": "ns/iter",
            "extra": "iterations: 14338\ncpu: 58969.256521132666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58540.28280000421,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58535.33000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67498.27762635042,
            "unit": "ns/iter",
            "extra": "iterations: 12841\ncpu: 67493.8244684993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77333.62642208354,
            "unit": "ns/iter",
            "extra": "iterations: 11339\ncpu: 77328.04480112885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 593.9448172778683,
            "unit": "ns/iter",
            "extra": "iterations: 1184175\ncpu: 593.9126396014107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 539.7894430118847,
            "unit": "ns/iter",
            "extra": "iterations: 1297245\ncpu: 539.7890914977509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 532.771877962684,
            "unit": "ns/iter",
            "extra": "iterations: 1313205\ncpu: 532.735102287914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 551.2779208741608,
            "unit": "ns/iter",
            "extra": "iterations: 1273035\ncpu: 551.2479232699798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 947.0385970676916,
            "unit": "ns/iter",
            "extra": "iterations: 724226\ncpu: 946.9708350708222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3340.408527877334,
            "unit": "ns/iter",
            "extra": "iterations: 240177\ncpu: 3340.2278319739153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15039.450998051903,
            "unit": "ns/iter",
            "extra": "iterations: 54406\ncpu: 15038.525162665896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11873.039320692355,
            "unit": "ns/iter",
            "extra": "iterations: 68717\ncpu: 11872.161182822318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10748.093965562075,
            "unit": "ns/iter",
            "extra": "iterations: 77124\ncpu: 10747.43270577254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11985.452262774577,
            "unit": "ns/iter",
            "extra": "iterations: 68500\ncpu: 11985.332846715326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 40961.32790272798,
            "unit": "ns/iter",
            "extra": "iterations: 20808\ncpu: 40960.19800076898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 437384.47132797324,
            "unit": "ns/iter",
            "extra": "iterations: 1988\ncpu: 437375.1006036203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 354969.77436526155,
            "unit": "ns/iter",
            "extra": "iterations: 2442\ncpu: 354956.51105651085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 355465.8813420858,
            "unit": "ns/iter",
            "extra": "iterations: 2444\ncpu: 355465.1391162029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 360986.72780084057,
            "unit": "ns/iter",
            "extra": "iterations: 2410\ncpu: 360982.78008298704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 219951.28261423207,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 219946.87260658736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 355944.31669394486,
            "unit": "ns/iter",
            "extra": "iterations: 2444\ncpu: 355930.7692307696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1845400.745020039,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1845363.1474103597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 738741.5523809855,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 738717.9365079358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2543695.6219838085,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2543602.144772126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3366.222793859498,
            "unit": "ns/iter",
            "extra": "iterations: 241995\ncpu: 3366.1778135911854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14676.280538042281,
            "unit": "ns/iter",
            "extra": "iterations: 55832\ncpu: 14675.986889239184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11655.000028207338,
            "unit": "ns/iter",
            "extra": "iterations: 70902\ncpu: 11654.851767228003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11183.770401864227,
            "unit": "ns/iter",
            "extra": "iterations: 72910\ncpu: 11183.651076669921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12048.43938062888,
            "unit": "ns/iter",
            "extra": "iterations: 67165\ncpu: 12048.327253777923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40996.74667851978,
            "unit": "ns/iter",
            "extra": "iterations: 20247\ncpu: 40995.69812811788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 451706.94255873054,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 451679.21671018226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 376063.966292118,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 376057.1305099405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 372429.4179487243,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 372405.0854700857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 369995.7266186887,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 369980.70249682665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221543.44688924903,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 221529.84319676258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 367081.96315120056,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 367069.5891571342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1847159.2813764191,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1846830.3643724772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 742184.4251208289,
            "unit": "ns/iter",
            "extra": "iterations: 1242\ncpu: 742164.0901771319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3380.634338604855,
            "unit": "ns/iter",
            "extra": "iterations: 241792\ncpu: 3380.5618051879314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15000.989716188837,
            "unit": "ns/iter",
            "extra": "iterations: 54649\ncpu: 15000.728284140563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12195.310821472243,
            "unit": "ns/iter",
            "extra": "iterations: 68438\ncpu: 12195.053917414263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11236.256831948904,
            "unit": "ns/iter",
            "extra": "iterations: 72966\ncpu: 11236.133267549241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12150.562079247424,
            "unit": "ns/iter",
            "extra": "iterations: 67736\ncpu: 12150.351364119491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40396.80822440699,
            "unit": "ns/iter",
            "extra": "iterations: 20962\ncpu: 40396.75603472951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 444461.2237583274,
            "unit": "ns/iter",
            "extra": "iterations: 1953\ncpu: 444456.9380440327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 366961.1386467556,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 366956.8700705674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 362407.5351530208,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 362402.77088502736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 362132.4782788727,
            "unit": "ns/iter",
            "extra": "iterations: 2417\ncpu: 362128.5477865132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 221321.67652263597,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 221318.77685115044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 359880.9121931053,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 359868.95547232614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 289.28714267539334,
            "unit": "ns/iter",
            "extra": "iterations: 2420908\ncpu: 289.28662303565585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1461.2630383540622,
            "unit": "ns/iter",
            "extra": "iterations: 477265\ncpu: 1461.2116958084218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1168.2881479395928,
            "unit": "ns/iter",
            "extra": "iterations: 599921\ncpu: 1168.2733226541502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1144.5102730151975,
            "unit": "ns/iter",
            "extra": "iterations: 611651\ncpu: 1144.498578437702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 959.3410185779835,
            "unit": "ns/iter",
            "extra": "iterations: 730057\ncpu: 959.329477013439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7241.053096434364,
            "unit": "ns/iter",
            "extra": "iterations: 97144\ncpu: 7241.040105410532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18694.478433973003,
            "unit": "ns/iter",
            "extra": "iterations: 37675\ncpu: 18694.261446582586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4402.641797331918,
            "unit": "ns/iter",
            "extra": "iterations: 159058\ncpu: 4402.633630499575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4340.509030576864,
            "unit": "ns/iter",
            "extra": "iterations: 161230\ncpu: 4340.451528871867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4363.804286383102,
            "unit": "ns/iter",
            "extra": "iterations: 160275\ncpu: 4363.732958976677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9137.65730916212,
            "unit": "ns/iter",
            "extra": "iterations: 76623\ncpu: 9137.353014108083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8280.830963104634,
            "unit": "ns/iter",
            "extra": "iterations: 84591\ncpu: 8280.818290361965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3206.186692553591,
            "unit": "ns/iter",
            "extra": "iterations: 218900\ncpu: 3206.13750571032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15968.09086695437,
            "unit": "ns/iter",
            "extra": "iterations: 43151\ncpu: 15968.06099511006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12736.34092773051,
            "unit": "ns/iter",
            "extra": "iterations: 54865\ncpu: 12736.168777909452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12548.95537765732,
            "unit": "ns/iter",
            "extra": "iterations: 55712\ncpu: 12548.795591613965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12988.960803591628,
            "unit": "ns/iter",
            "extra": "iterations: 53908\ncpu: 12988.80129108863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27734.016544629438,
            "unit": "ns/iter",
            "extra": "iterations: 25265\ncpu: 27733.956065703274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98276.04512963678,
            "unit": "ns/iter",
            "extra": "iterations: 7135\ncpu: 98274.94043447729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83896.28564581554,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 83895.26719386509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 82658.68499764407,
            "unit": "ns/iter",
            "extra": "iterations: 8492\ncpu: 82657.5247291567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83107.77868658779,
            "unit": "ns/iter",
            "extra": "iterations: 8436\ncpu: 83105.10905642394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54339.95321636828,
            "unit": "ns/iter",
            "extra": "iterations: 12825\ncpu: 54339.80506822561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83135.39292497444,
            "unit": "ns/iter",
            "extra": "iterations: 8424\ncpu: 83133.07217473815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3014.190465948649,
            "unit": "ns/iter",
            "extra": "iterations: 232472\ncpu: 3014.1169689252915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15207.663887081002,
            "unit": "ns/iter",
            "extra": "iterations: 46050\ncpu: 15207.491856677527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12133.515439223022,
            "unit": "ns/iter",
            "extra": "iterations: 57613\ncpu: 12133.334490479567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11961.017775955723,
            "unit": "ns/iter",
            "extra": "iterations: 58506\ncpu: 11960.990325778495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12449.958396142318,
            "unit": "ns/iter",
            "extra": "iterations: 56389\ncpu: 12449.791626026381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26675.41592514611,
            "unit": "ns/iter",
            "extra": "iterations: 26185\ncpu: 26675.081153332067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 95860.9330137104,
            "unit": "ns/iter",
            "extra": "iterations: 7300\ncpu: 95859.86301369827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82442.99187949233,
            "unit": "ns/iter",
            "extra": "iterations: 8497\ncpu: 82441.90890902535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80691.4643268102,
            "unit": "ns/iter",
            "extra": "iterations: 8690\ncpu: 80691.27733026455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81536.7188301061,
            "unit": "ns/iter",
            "extra": "iterations: 8582\ncpu: 81533.52365415992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54453.63180437926,
            "unit": "ns/iter",
            "extra": "iterations: 12841\ncpu: 54449.0226617857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82484.54975300179,
            "unit": "ns/iter",
            "extra": "iterations: 8502\ncpu: 82476.0056457305 ns\nthreads: 1"
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
        "date": 1702492921428,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 728.9774417570766,
            "unit": "ns/iter",
            "extra": "iterations: 962176\ncpu: 728.9007416522549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10830.391169442202,
            "unit": "ns/iter",
            "extra": "iterations: 75737\ncpu: 10829.680341180665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23817.83710901579,
            "unit": "ns/iter",
            "extra": "iterations: 34784\ncpu: 23817.430427782892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 36677.09147536687,
            "unit": "ns/iter",
            "extra": "iterations: 22957\ncpu: 36674.45223679053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46758.55441608541,
            "unit": "ns/iter",
            "extra": "iterations: 17357\ncpu: 46755.28029037275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58079.01815575907,
            "unit": "ns/iter",
            "extra": "iterations: 14651\ncpu: 58076.28148249267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58029.31179999859,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58027.52 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67025.33395233635,
            "unit": "ns/iter",
            "extra": "iterations: 12924\ncpu: 67021.86629526473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77293.48634214731,
            "unit": "ns/iter",
            "extra": "iterations: 11422\ncpu: 77287.68166695858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 572.5888738083431,
            "unit": "ns/iter",
            "extra": "iterations: 1228956\ncpu: 572.576886397886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 484.7965867824693,
            "unit": "ns/iter",
            "extra": "iterations: 1454522\ncpu: 484.7906734996096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 461.4194060366668,
            "unit": "ns/iter",
            "extra": "iterations: 1517198\ncpu: 461.41466044642846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 475.00757084865177,
            "unit": "ns/iter",
            "extra": "iterations: 1473811\ncpu: 474.96768581588753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 950.1519759222934,
            "unit": "ns/iter",
            "extra": "iterations: 739275\ncpu: 950.1374995772894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3365.255683969284,
            "unit": "ns/iter",
            "extra": "iterations: 235091\ncpu: 3365.070121782628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15133.796024703974,
            "unit": "ns/iter",
            "extra": "iterations: 54889\ncpu: 15132.736978265228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12332.701918834007,
            "unit": "ns/iter",
            "extra": "iterations: 65717\ncpu: 12332.178888263341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11297.996519193008,
            "unit": "ns/iter",
            "extra": "iterations: 72397\ncpu: 11297.510946586179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12065.581543569759,
            "unit": "ns/iter",
            "extra": "iterations: 67467\ncpu: 12065.480901774186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41198.54675614993,
            "unit": "ns/iter",
            "extra": "iterations: 20115\ncpu: 41198.3693760874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 440486.5665149639,
            "unit": "ns/iter",
            "extra": "iterations: 1977\ncpu: 440469.14516944764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 357561.77334992646,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 357553.67372353666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 354584.33169937733,
            "unit": "ns/iter",
            "extra": "iterations: 2448\ncpu: 354580.55555555556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 360027.0782859544,
            "unit": "ns/iter",
            "extra": "iterations: 2427\ncpu: 360015.7395962098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 219149.94011673942,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 219150.9515351439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 355938.30545149505,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 355933.37494798156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1847671.8962077568,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1847499.9999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 722307.1108527154,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 722279.3023255797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2492073.325268904,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2492047.8494623597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3278.424224656665,
            "unit": "ns/iter",
            "extra": "iterations: 242183\ncpu: 3278.3609914816398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14506.972119547167,
            "unit": "ns/iter",
            "extra": "iterations: 56814\ncpu: 14506.51247931851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11795.745068482222,
            "unit": "ns/iter",
            "extra": "iterations: 69654\ncpu: 11795.52358802083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11221.69315150867,
            "unit": "ns/iter",
            "extra": "iterations: 73111\ncpu: 11221.74638563284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11926.647093458912,
            "unit": "ns/iter",
            "extra": "iterations: 67933\ncpu: 11926.437813728244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40907.46064528593,
            "unit": "ns/iter",
            "extra": "iterations: 20239\ncpu: 40906.83334156825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 457415.036182491,
            "unit": "ns/iter",
            "extra": "iterations: 1907\ncpu: 457409.96329312987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 371483.74468081765,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 371485.7872340421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 364798.24756661465,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 364795.7257723218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 375324.5150753731,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 375313.2328308207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 218436.69300453187,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 218434.2224458984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 362734.0777870265,
            "unit": "ns/iter",
            "extra": "iterations: 2404\ncpu: 362721.9217970045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1856395.9032258668,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1856253.427419345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 732333.7482184604,
            "unit": "ns/iter",
            "extra": "iterations: 1263\ncpu: 732274.1092636578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3233.602606610365,
            "unit": "ns/iter",
            "extra": "iterations: 248522\ncpu: 3233.502064203557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14943.909561329267,
            "unit": "ns/iter",
            "extra": "iterations: 55463\ncpu: 14942.639236968827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12552.254013413632,
            "unit": "ns/iter",
            "extra": "iterations: 67835\ncpu: 12551.545662268723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11959.59203211444,
            "unit": "ns/iter",
            "extra": "iterations: 69253\ncpu: 11958.69204222197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12579.627432281033,
            "unit": "ns/iter",
            "extra": "iterations: 65011\ncpu: 12579.075848702427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41504.22425095536,
            "unit": "ns/iter",
            "extra": "iterations: 20593\ncpu: 41501.272276987125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 441162.0162932473,
            "unit": "ns/iter",
            "extra": "iterations: 1964\ncpu: 441133.35030549765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 365642.9283319695,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 365623.00922045024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 361030.8601485173,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 361004.4141914187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 359877.2395010441,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 359858.0873180864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 219655.73009074017,
            "unit": "ns/iter",
            "extra": "iterations: 3968\ncpu: 219638.81048387047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 356210.22595357994,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 356197.2222222227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 291.16724900077,
            "unit": "ns/iter",
            "extra": "iterations: 2398394\ncpu: 291.1472010020066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1458.6181417685916,
            "unit": "ns/iter",
            "extra": "iterations: 478950\ncpu: 1458.5102829105392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1145.3636713791007,
            "unit": "ns/iter",
            "extra": "iterations: 612718\ncpu: 1145.286901967949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1135.965291188488,
            "unit": "ns/iter",
            "extra": "iterations: 619324\ncpu: 1135.89994897662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 986.7271741870468,
            "unit": "ns/iter",
            "extra": "iterations: 710369\ncpu: 986.6981808046157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7277.0741568357735,
            "unit": "ns/iter",
            "extra": "iterations: 96215\ncpu: 7276.86119627916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18432.0247174406,
            "unit": "ns/iter",
            "extra": "iterations: 37868\ncpu: 18430.854547375413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4403.938562124374,
            "unit": "ns/iter",
            "extra": "iterations: 158762\ncpu: 4403.827112281256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4356.150504227942,
            "unit": "ns/iter",
            "extra": "iterations: 160939\ncpu: 4355.894469333139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4374.629850597915,
            "unit": "ns/iter",
            "extra": "iterations: 160908\ncpu: 4374.35801824645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9119.385017195307,
            "unit": "ns/iter",
            "extra": "iterations: 76768\ncpu: 9118.701802834672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8265.025509239676,
            "unit": "ns/iter",
            "extra": "iterations: 84636\ncpu: 8264.777399688182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3182.737936745225,
            "unit": "ns/iter",
            "extra": "iterations: 218577\ncpu: 3182.672010321296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15791.826164388991,
            "unit": "ns/iter",
            "extra": "iterations: 44358\ncpu: 15791.205644979536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12576.819455686886,
            "unit": "ns/iter",
            "extra": "iterations: 55593\ncpu: 12576.047344090124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12579.584583408652,
            "unit": "ns/iter",
            "extra": "iterations: 55330\ncpu: 12578.54690041569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12986.100973169056,
            "unit": "ns/iter",
            "extra": "iterations: 54153\ncpu: 12985.6351448674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27536.95928692211,
            "unit": "ns/iter",
            "extra": "iterations: 24906\ncpu: 27534.658315265457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97002.15478502393,
            "unit": "ns/iter",
            "extra": "iterations: 7210\ncpu: 96994.2995839109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83506.36862838351,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 83501.58768055408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 82126.51062082076,
            "unit": "ns/iter",
            "extra": "iterations: 8521\ncpu: 82116.95810350864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 82628.26657146652,
            "unit": "ns/iter",
            "extra": "iterations: 8403\ncpu: 82623.25359990491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54040.67548542106,
            "unit": "ns/iter",
            "extra": "iterations: 12927\ncpu: 54036.07952347883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 82838.80213017773,
            "unit": "ns/iter",
            "extra": "iterations: 8450\ncpu: 82834.36686390602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3006.995466454146,
            "unit": "ns/iter",
            "extra": "iterations: 229401\ncpu: 3006.751060370278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15167.672352001407,
            "unit": "ns/iter",
            "extra": "iterations: 46318\ncpu: 15166.963167666947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12059.811132345156,
            "unit": "ns/iter",
            "extra": "iterations: 58083\ncpu: 12059.848837008987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11846.297882807914,
            "unit": "ns/iter",
            "extra": "iterations: 58946\ncpu: 11845.270247345084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12251.9490244885,
            "unit": "ns/iter",
            "extra": "iterations: 57047\ncpu: 12251.017581993872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26700.518071830356,
            "unit": "ns/iter",
            "extra": "iterations: 26201\ncpu: 26697.656577993148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 94880.63074419645,
            "unit": "ns/iter",
            "extra": "iterations: 7377\ncpu: 94874.52894130454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81986.22035727365,
            "unit": "ns/iter",
            "extra": "iterations: 8341\ncpu: 81982.16041242093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80036.68377142664,
            "unit": "ns/iter",
            "extra": "iterations: 8750\ncpu: 80035.45142857189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 80703.8676487473,
            "unit": "ns/iter",
            "extra": "iterations: 8689\ncpu: 80703.04983312183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54083.17929546413,
            "unit": "ns/iter",
            "extra": "iterations: 12973\ncpu: 54081.268789022695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 81608.33104570984,
            "unit": "ns/iter",
            "extra": "iterations: 8597\ncpu: 81607.82831220201 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}