window.BENCHMARK_DATA = {
  "lastUpdate": 1705773454136,
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
        "date": 1702503978085,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 699.9923082237359,
            "unit": "ns/iter",
            "extra": "iterations: 998729\ncpu: 699.9494357328165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10684.789854513343,
            "unit": "ns/iter",
            "extra": "iterations: 77670\ncpu: 10684.418694476632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23954.390953568894,
            "unit": "ns/iter",
            "extra": "iterations: 34953\ncpu: 23953.022630389376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37287.45768954128,
            "unit": "ns/iter",
            "extra": "iterations: 22264\ncpu: 37286.1210923464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47183.5686192941,
            "unit": "ns/iter",
            "extra": "iterations: 16832\ncpu: 47181.57081749046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59486.51530195739,
            "unit": "ns/iter",
            "extra": "iterations: 14704\ncpu: 59483.569096844374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 57918.58869999942,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57918.30999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66920.89981504236,
            "unit": "ns/iter",
            "extra": "iterations: 12976\ncpu: 66920.87700369919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76593.89446533372,
            "unit": "ns/iter",
            "extra": "iterations: 11437\ncpu: 76593.6172073097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 549.0235368785359,
            "unit": "ns/iter",
            "extra": "iterations: 1224249\ncpu: 548.9724721033059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 462.25626035089823,
            "unit": "ns/iter",
            "extra": "iterations: 1514971\ncpu: 462.23716493583004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 452.1504132306313,
            "unit": "ns/iter",
            "extra": "iterations: 1548893\ncpu: 452.1514397702103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 465.8020965041058,
            "unit": "ns/iter",
            "extra": "iterations: 1502692\ncpu: 465.7893300822791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 938.4915423938257,
            "unit": "ns/iter",
            "extra": "iterations: 747079\ncpu: 938.456441688227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3346.321326118772,
            "unit": "ns/iter",
            "extra": "iterations: 239134\ncpu: 3346.3313456053875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15059.066120428703,
            "unit": "ns/iter",
            "extra": "iterations: 54189\ncpu: 15058.932624702427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11886.978327227742,
            "unit": "ns/iter",
            "extra": "iterations: 68796\ncpu: 11886.891679748815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10507.428632335315,
            "unit": "ns/iter",
            "extra": "iterations: 77402\ncpu: 10506.896462623696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11873.345104654647,
            "unit": "ns/iter",
            "extra": "iterations: 69944\ncpu: 11866.697643829331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41028.802416419836,
            "unit": "ns/iter",
            "extra": "iterations: 20609\ncpu: 41027.89072735203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 441693.35616438056,
            "unit": "ns/iter",
            "extra": "iterations: 1971\ncpu: 441678.8432267887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 359685.3099463607,
            "unit": "ns/iter",
            "extra": "iterations: 2423\ncpu: 359661.1638464705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 353073.89166329434,
            "unit": "ns/iter",
            "extra": "iterations: 2483\ncpu: 353067.7003624643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 358461.00287592993,
            "unit": "ns/iter",
            "extra": "iterations: 2434\ncpu: 358454.7247329512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 219950.34080489923,
            "unit": "ns/iter",
            "extra": "iterations: 3926\ncpu: 219946.281202241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 357385.7592440212,
            "unit": "ns/iter",
            "extra": "iterations: 2434\ncpu: 357363.80443714006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1841805.6341948581,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1841785.6858846927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 738772.5189873265,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 738745.3322784817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2494469.2594594066,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2494375.9459459498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3284.3708858932196,
            "unit": "ns/iter",
            "extra": "iterations: 242185\ncpu: 3284.236017920188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14669.223083684814,
            "unit": "ns/iter",
            "extra": "iterations: 56880\ncpu: 14668.804500703256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11754.377152919664,
            "unit": "ns/iter",
            "extra": "iterations: 69847\ncpu: 11754.214211061331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11159.318111158655,
            "unit": "ns/iter",
            "extra": "iterations: 73336\ncpu: 11159.468746591076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11843.168151206684,
            "unit": "ns/iter",
            "extra": "iterations: 69045\ncpu: 11842.71706857847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 42973.246914829404,
            "unit": "ns/iter",
            "extra": "iterations: 19772\ncpu: 42973.53327938495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 455463.7660357319,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 455456.0988433241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 376563.41419863043,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 376555.1393728225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 375040.89622639446,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 375033.91938250355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 370147.3715143714,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 370128.95752895647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 220851.36111808772,
            "unit": "ns/iter",
            "extra": "iterations: 3971\ncpu: 220846.66330898998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 368488.85641241143,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 368479.3353216869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1861794.568228195,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1861728.9205702695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 716495.2640926574,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 716474.9806949829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3333.4311577534495,
            "unit": "ns/iter",
            "extra": "iterations: 241269\ncpu: 3333.3461820623647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14565.268309571584,
            "unit": "ns/iter",
            "extra": "iterations: 56323\ncpu: 14564.975232143215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11721.795477960628,
            "unit": "ns/iter",
            "extra": "iterations: 71826\ncpu: 11721.579929273494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11229.27728336689,
            "unit": "ns/iter",
            "extra": "iterations: 73488\ncpu: 11229.004735466973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11984.955307101085,
            "unit": "ns/iter",
            "extra": "iterations: 69228\ncpu: 11984.767724042289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41776.5393596209,
            "unit": "ns/iter",
            "extra": "iterations: 19957\ncpu: 41775.467254597184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 438913.41029557615,
            "unit": "ns/iter",
            "extra": "iterations: 1962\ncpu: 438901.7838939882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 369295.13155667635,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 369291.6666666688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 364110.5515507238,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 364095.3897736814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 365569.2644210591,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 365571.3684210552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 223734.9678968721,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 223730.25783619855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 363861.8204697894,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 363852.5167785253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 292.62987854761315,
            "unit": "ns/iter",
            "extra": "iterations: 2392131\ncpu: 292.6225612226099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1488.2351089490705,
            "unit": "ns/iter",
            "extra": "iterations: 468889\ncpu: 1488.2227989993473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1188.2950702180465,
            "unit": "ns/iter",
            "extra": "iterations: 588809\ncpu: 1188.2656345266423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1139.969345450769,
            "unit": "ns/iter",
            "extra": "iterations: 609045\ncpu: 1139.9041121756227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 973.8886740003645,
            "unit": "ns/iter",
            "extra": "iterations: 717685\ncpu: 973.8654144924335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7503.5208866685,
            "unit": "ns/iter",
            "extra": "iterations: 96090\ncpu: 7503.623686127564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18542.633849819933,
            "unit": "ns/iter",
            "extra": "iterations: 37755\ncpu: 18541.88319427865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4408.421689478716,
            "unit": "ns/iter",
            "extra": "iterations: 158759\ncpu: 4408.431647969568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4378.293368867015,
            "unit": "ns/iter",
            "extra": "iterations: 159475\ncpu: 4378.069289857336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4389.913723030258,
            "unit": "ns/iter",
            "extra": "iterations: 159440\ncpu: 4389.694555945866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9126.597242796051,
            "unit": "ns/iter",
            "extra": "iterations: 76962\ncpu: 9126.11288687917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8325.748109664139,
            "unit": "ns/iter",
            "extra": "iterations: 84112\ncpu: 8325.756134677507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3211.134007098277,
            "unit": "ns/iter",
            "extra": "iterations: 218078\ncpu: 3211.085941727267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16061.777658505545,
            "unit": "ns/iter",
            "extra": "iterations: 43784\ncpu: 16061.995249406078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12842.009857471065,
            "unit": "ns/iter",
            "extra": "iterations: 54375\ncpu: 12841.22482758626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12839.595739993634,
            "unit": "ns/iter",
            "extra": "iterations: 54460\ncpu: 12839.109438119604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13203.790075617355,
            "unit": "ns/iter",
            "extra": "iterations: 53162\ncpu: 13202.79334863258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27718.37574386917,
            "unit": "ns/iter",
            "extra": "iterations: 25206\ncpu: 27717.174482266455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99549.21644223532,
            "unit": "ns/iter",
            "extra": "iterations: 7055\ncpu: 99546.12331679527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85196.23345160182,
            "unit": "ns/iter",
            "extra": "iterations: 8173\ncpu: 85194.71430319274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83466.83611441945,
            "unit": "ns/iter",
            "extra": "iterations: 8390\ncpu: 83465.30393325377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84283.34733557925,
            "unit": "ns/iter",
            "extra": "iterations: 8332\ncpu: 84277.7724435898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54862.04752971063,
            "unit": "ns/iter",
            "extra": "iterations: 12792\ncpu: 54737.49218261337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83610.86144290958,
            "unit": "ns/iter",
            "extra": "iterations: 8372\ncpu: 83612.07596751067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3009.6831703793077,
            "unit": "ns/iter",
            "extra": "iterations: 230433\ncpu: 3009.4170539810157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15175.71533113789,
            "unit": "ns/iter",
            "extra": "iterations: 46461\ncpu: 15175.22438173968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11965.700418453209,
            "unit": "ns/iter",
            "extra": "iterations: 58071\ncpu: 11965.325205352223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11891.612217278236,
            "unit": "ns/iter",
            "extra": "iterations: 59113\ncpu: 11891.061187894344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12190.46377012868,
            "unit": "ns/iter",
            "extra": "iterations: 57563\ncpu: 12190.314959261976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26720.72815050419,
            "unit": "ns/iter",
            "extra": "iterations: 26099\ncpu: 26719.901145637737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96529.94520171953,
            "unit": "ns/iter",
            "extra": "iterations: 7263\ncpu: 96528.23901968905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82450.59113819992,
            "unit": "ns/iter",
            "extra": "iterations: 8531\ncpu: 82447.9310749024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80744.586938969,
            "unit": "ns/iter",
            "extra": "iterations: 8667\ncpu: 80744.60597669212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81607.63365876557,
            "unit": "ns/iter",
            "extra": "iterations: 8604\ncpu: 81605.69502556986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54452.47494863544,
            "unit": "ns/iter",
            "extra": "iterations: 12654\ncpu: 54451.0352457718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83141.22835573296,
            "unit": "ns/iter",
            "extra": "iterations: 8478\ncpu: 83141.47204529333 ns\nthreads: 1"
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
        "date": 1705575627623,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 699.755250020523,
            "unit": "ns/iter",
            "extra": "iterations: 1002758\ncpu: 699.7399173080644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11046.861510351282,
            "unit": "ns/iter",
            "extra": "iterations: 77717\ncpu: 11046.826305698882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23775.597991236824,
            "unit": "ns/iter",
            "extra": "iterations: 35146\ncpu: 23775.382689352988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37531.890588079266,
            "unit": "ns/iter",
            "extra": "iterations: 22429\ncpu: 37532.12804850863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47530.32827200235,
            "unit": "ns/iter",
            "extra": "iterations: 16794\ncpu: 47529.23067762297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59528.68901886889,
            "unit": "ns/iter",
            "extra": "iterations: 14361\ncpu: 59526.79479144913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59675.383000001144,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59673.92999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68423.73956435113,
            "unit": "ns/iter",
            "extra": "iterations: 12625\ncpu: 68422.7564356435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78150.29991908911,
            "unit": "ns/iter",
            "extra": "iterations: 11123\ncpu: 78147.9996403848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 592.0675266153728,
            "unit": "ns/iter",
            "extra": "iterations: 1187280\ncpu: 592.0611818610616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 487.2308158016618,
            "unit": "ns/iter",
            "extra": "iterations: 1423802\ncpu: 487.2171832881259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 477.9632557939473,
            "unit": "ns/iter",
            "extra": "iterations: 1464503\ncpu: 477.9603729046636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 464.49741729541995,
            "unit": "ns/iter",
            "extra": "iterations: 1431058\ncpu: 464.49004862136866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 926.3208369751859,
            "unit": "ns/iter",
            "extra": "iterations: 756247\ncpu: 926.2900877623315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3346.979791722279,
            "unit": "ns/iter",
            "extra": "iterations: 238912\ncpu: 3346.849049022232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15309.485378163728,
            "unit": "ns/iter",
            "extra": "iterations: 53892\ncpu: 15308.932680175178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12215.747650905825,
            "unit": "ns/iter",
            "extra": "iterations: 66515\ncpu: 12215.285273998346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11419.729607616646,
            "unit": "ns/iter",
            "extra": "iterations: 74366\ncpu: 11419.210391845745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12403.735783727994,
            "unit": "ns/iter",
            "extra": "iterations: 66139\ncpu: 12403.352031327955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41092.215316528636,
            "unit": "ns/iter",
            "extra": "iterations: 20788\ncpu: 41090.60515682119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 425734.0443038214,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 425718.7439143134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 352306.80510535586,
            "unit": "ns/iter",
            "extra": "iterations: 2468\ncpu: 352300.97244732705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 349422.5698663147,
            "unit": "ns/iter",
            "extra": "iterations: 2469\ncpu: 349413.3252328878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 349841.1968725189,
            "unit": "ns/iter",
            "extra": "iterations: 2494\ncpu: 349832.07698476315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 212717.86097439597,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 212710.7283464571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 345817.15301638626,
            "unit": "ns/iter",
            "extra": "iterations: 2503\ncpu: 345800.8789452664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1828392.5187375927,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1828321.1045364847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 725590.9650621213,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 725551.7080745365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2477677.3924730895,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2477436.2903225822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3239.819291905201,
            "unit": "ns/iter",
            "extra": "iterations: 241832\ncpu: 3239.793327599325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15063.395722217934,
            "unit": "ns/iter",
            "extra": "iterations: 54748\ncpu: 15063.09454226635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11840.186158171722,
            "unit": "ns/iter",
            "extra": "iterations: 69355\ncpu: 11840.171580996292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11229.620407102651,
            "unit": "ns/iter",
            "extra": "iterations: 73102\ncpu: 11229.707805531942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11880.685659250708,
            "unit": "ns/iter",
            "extra": "iterations: 68009\ncpu: 11880.517284477111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40758.09084198657,
            "unit": "ns/iter",
            "extra": "iterations: 20321\ncpu: 40757.55622262711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 456871.47318615083,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 456870.0315457389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 374974.14525136404,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 374964.7185217014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 368661.4025586336,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 368659.53091684374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 368075.8446232001,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 368068.6282811171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 219128.057235701,
            "unit": "ns/iter",
            "extra": "iterations: 4001\ncpu: 219127.54311422168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 366301.1169714982,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 366298.0008507006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1855587.032454401,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1855538.5395537508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 708737.2575174312,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 708723.2845026968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3401.9697020052236,
            "unit": "ns/iter",
            "extra": "iterations: 240709\ncpu: 3401.908528555243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14615.081544988838,
            "unit": "ns/iter",
            "extra": "iterations: 56104\ncpu: 14614.959717667121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11475.559613002511,
            "unit": "ns/iter",
            "extra": "iterations: 71008\ncpu: 11475.278841820633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 10864.083293076144,
            "unit": "ns/iter",
            "extra": "iterations: 74520\ncpu: 10863.930488459448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11738.752179807943,
            "unit": "ns/iter",
            "extra": "iterations: 70075\ncpu: 11738.745629682484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42322.08269250396,
            "unit": "ns/iter",
            "extra": "iterations: 19506\ncpu: 42322.38285655702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 446280.0010277606,
            "unit": "ns/iter",
            "extra": "iterations: 1946\ncpu: 446271.63412127265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 368300.4845665997,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 368294.8414376314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 363004.22478992946,
            "unit": "ns/iter",
            "extra": "iterations: 2380\ncpu: 362994.9159663867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 364126.2359362061,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 364120.52896725363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225514.29730422143,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 225511.0141206675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 359751.7323190814,
            "unit": "ns/iter",
            "extra": "iterations: 2432\ncpu: 359742.557565788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 289.385607494328,
            "unit": "ns/iter",
            "extra": "iterations: 2423817\ncpu: 289.38764766482035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1470.8267189793294,
            "unit": "ns/iter",
            "extra": "iterations: 476111\ncpu: 1470.8105882871848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1140.9284620296419,
            "unit": "ns/iter",
            "extra": "iterations: 613744\ncpu: 1140.9095649000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1127.812096965092,
            "unit": "ns/iter",
            "extra": "iterations: 621379\ncpu: 1127.8084711584968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 970.7449620847282,
            "unit": "ns/iter",
            "extra": "iterations: 720685\ncpu: 970.7228539514541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7313.6942108677285,
            "unit": "ns/iter",
            "extra": "iterations: 96923\ncpu: 7313.6438203522885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18230.37888295839,
            "unit": "ns/iter",
            "extra": "iterations: 38405\ncpu: 18229.98307512059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4323.346769318382,
            "unit": "ns/iter",
            "extra": "iterations: 162102\ncpu: 4323.3223525928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4310.363972970347,
            "unit": "ns/iter",
            "extra": "iterations: 162045\ncpu: 4310.266901169384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4303.90083972169,
            "unit": "ns/iter",
            "extra": "iterations: 161244\ncpu: 4303.874872863469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 8999.6317800139,
            "unit": "ns/iter",
            "extra": "iterations: 78005\ncpu: 8999.373117107909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8214.46437398273,
            "unit": "ns/iter",
            "extra": "iterations: 85373\ncpu: 8214.435477258758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3150.2273660708156,
            "unit": "ns/iter",
            "extra": "iterations: 223028\ncpu: 3150.169037071576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15926.866668179293,
            "unit": "ns/iter",
            "extra": "iterations: 44093\ncpu: 15926.977071190573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12734.77696393968,
            "unit": "ns/iter",
            "extra": "iterations: 55157\ncpu: 12734.601229218613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12662.923568034063,
            "unit": "ns/iter",
            "extra": "iterations: 55134\ncpu: 12662.81786193621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13031.976226380055,
            "unit": "ns/iter",
            "extra": "iterations: 53715\ncpu: 13031.938936982198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27592.342866142728,
            "unit": "ns/iter",
            "extra": "iterations: 25386\ncpu: 27592.038919089253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 96650.65959499053,
            "unit": "ns/iter",
            "extra": "iterations: 7259\ncpu: 96650.00688800005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83583.91728781823,
            "unit": "ns/iter",
            "extra": "iterations: 8318\ncpu: 83581.9668189479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 82473.91418173417,
            "unit": "ns/iter",
            "extra": "iterations: 8518\ncpu: 82472.63442122581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 82871.40570280053,
            "unit": "ns/iter",
            "extra": "iterations: 8452\ncpu: 82868.19687647857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54283.728315635955,
            "unit": "ns/iter",
            "extra": "iterations: 12901\ncpu: 54283.41213859377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 82296.92781919552,
            "unit": "ns/iter",
            "extra": "iterations: 8451\ncpu: 82296.40279256963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3039.5392760394357,
            "unit": "ns/iter",
            "extra": "iterations: 230344\ncpu: 3039.471399298451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15287.262431785366,
            "unit": "ns/iter",
            "extra": "iterations: 45810\ncpu: 15287.050862257069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12249.154593949906,
            "unit": "ns/iter",
            "extra": "iterations: 56988\ncpu: 12248.873447041342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12101.051144707459,
            "unit": "ns/iter",
            "extra": "iterations: 57875\ncpu: 12101.121382289415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12412.441244734688,
            "unit": "ns/iter",
            "extra": "iterations: 56012\ncpu: 12412.338427479903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26783.530867501493,
            "unit": "ns/iter",
            "extra": "iterations: 26144\ncpu: 26783.38815789454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 95955.6586069569,
            "unit": "ns/iter",
            "extra": "iterations: 7279\ncpu: 95955.15867564193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83243.61984459055,
            "unit": "ns/iter",
            "extra": "iterations: 8365\ncpu: 83241.51823072264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81695.60746023638,
            "unit": "ns/iter",
            "extra": "iterations: 8552\ncpu: 81695.12394761469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84199.18844841816,
            "unit": "ns/iter",
            "extra": "iterations: 8501\ncpu: 84198.15315845146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54456.69374902367,
            "unit": "ns/iter",
            "extra": "iterations: 12862\ncpu: 54455.73783237401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82969.74860731857,
            "unit": "ns/iter",
            "extra": "iterations: 8437\ncpu: 82968.53146853184 ns\nthreads: 1"
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
        "date": 1705773452066,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 691.7831787753248,
            "unit": "ns/iter",
            "extra": "iterations: 1012673\ncpu: 691.7803674038906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10647.841560702826,
            "unit": "ns/iter",
            "extra": "iterations: 78093\ncpu: 10647.641914128028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23780.235272240545,
            "unit": "ns/iter",
            "extra": "iterations: 34951\ncpu: 23780.149351949873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 36237.33617225561,
            "unit": "ns/iter",
            "extra": "iterations: 22896\ncpu: 36235.691823899375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46260.18884976223,
            "unit": "ns/iter",
            "extra": "iterations: 17040\ncpu: 46259.62441314558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61045.86513425605,
            "unit": "ns/iter",
            "extra": "iterations: 14748\ncpu: 61044.35855709251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58203.76240000087,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58203.52999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67241.84548311749,
            "unit": "ns/iter",
            "extra": "iterations: 12730\ncpu: 67241.04477611947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77006.75258918139,
            "unit": "ns/iter",
            "extra": "iterations: 11297\ncpu: 77004.78888200402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 576.9489029152613,
            "unit": "ns/iter",
            "extra": "iterations: 1167640\ncpu: 576.9415230721797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 478.52853348848157,
            "unit": "ns/iter",
            "extra": "iterations: 1460950\ncpu: 478.52287894862883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 471.668479728062,
            "unit": "ns/iter",
            "extra": "iterations: 1481656\ncpu: 471.6665001862789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 479.5652611389773,
            "unit": "ns/iter",
            "extra": "iterations: 1451009\ncpu: 479.55643279952073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 946.0779169982538,
            "unit": "ns/iter",
            "extra": "iterations: 738876\ncpu: 946.0611794130544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3342.8286881125327,
            "unit": "ns/iter",
            "extra": "iterations: 238740\ncpu: 3342.7339364999543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15458.919861947703,
            "unit": "ns/iter",
            "extra": "iterations: 52734\ncpu: 15458.647172602086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12194.750719990061,
            "unit": "ns/iter",
            "extra": "iterations: 67362\ncpu: 12194.385558623546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11580.477355904577,
            "unit": "ns/iter",
            "extra": "iterations: 70769\ncpu: 11580.433523152784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11988.728505761039,
            "unit": "ns/iter",
            "extra": "iterations: 66134\ncpu: 11988.68206973718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41458.03266669898,
            "unit": "ns/iter",
            "extra": "iterations: 20051\ncpu: 41457.29888783603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 439567.85656362557,
            "unit": "ns/iter",
            "extra": "iterations: 1973\ncpu: 439557.2731880386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 365544.1923076869,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 365542.6421404683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 363662.893171332,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 363654.83870967693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 362625.8621848768,
            "unit": "ns/iter",
            "extra": "iterations: 2380\ncpu: 362619.3697478992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 221891.82795142932,
            "unit": "ns/iter",
            "extra": "iterations: 3871\ncpu: 221889.27925600568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 362026.97361810575,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 362015.201005026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1855089.937999992,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1855063.3999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 735852.1014150976,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 735830.5817610081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2506890.3550136555,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2506838.211382122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3265.1778617324117,
            "unit": "ns/iter",
            "extra": "iterations: 241401\ncpu: 3265.088379915583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15072.78828155454,
            "unit": "ns/iter",
            "extra": "iterations: 56202\ncpu: 15071.791039464759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11841.229109421092,
            "unit": "ns/iter",
            "extra": "iterations: 69146\ncpu: 11840.645879732712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11250.950575296394,
            "unit": "ns/iter",
            "extra": "iterations: 72919\ncpu: 11250.195422317876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12046.602040519976,
            "unit": "ns/iter",
            "extra": "iterations: 68610\ncpu: 12045.951027547057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41551.64967903144,
            "unit": "ns/iter",
            "extra": "iterations: 20407\ncpu: 41549.25760768375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 455500.08900524245,
            "unit": "ns/iter",
            "extra": "iterations: 1910\ncpu: 455489.05759162485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 376133.2535636949,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 376122.41900647763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 370606.1777302141,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 370590.1070663829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 369477.881276617,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 369462.42553191667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 220820.5584252737,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 220812.78836509434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 368669.0889453464,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 368653.11308767187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1863810.112474455,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1863700.613496935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 719433.6024748858,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 719390.33255994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3278.670823014316,
            "unit": "ns/iter",
            "extra": "iterations: 244285\ncpu: 3278.636019403575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14541.43984609139,
            "unit": "ns/iter",
            "extra": "iterations: 56397\ncpu: 14541.023458694526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11472.469628679777,
            "unit": "ns/iter",
            "extra": "iterations: 71663\ncpu: 11472.242300768967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 10854.9452402019,
            "unit": "ns/iter",
            "extra": "iterations: 75749\ncpu: 10854.431081598394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11468.312492947065,
            "unit": "ns/iter",
            "extra": "iterations: 70904\ncpu: 11467.855128060419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41158.85787778612,
            "unit": "ns/iter",
            "extra": "iterations: 20799\ncpu: 41157.99317274849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 445786.8864107796,
            "unit": "ns/iter",
            "extra": "iterations: 1928\ncpu: 445769.1908713687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 371045.15182353853,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 371039.01611535193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 363259.9991687559,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 363248.58686616796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 362582.69545263663,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 362574.634960365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 221550.7372559212,
            "unit": "ns/iter",
            "extra": "iterations: 3943\ncpu: 221546.94395130614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 365660.49643302365,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 365659.1271506497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 288.47555332811606,
            "unit": "ns/iter",
            "extra": "iterations: 2428306\ncpu: 288.4720459447865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1486.0026865885575,
            "unit": "ns/iter",
            "extra": "iterations: 471974\ncpu: 1485.9968981342167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1160.317957335297,
            "unit": "ns/iter",
            "extra": "iterations: 604622\ncpu: 1160.3029661507512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1108.840473385613,
            "unit": "ns/iter",
            "extra": "iterations: 630691\ncpu: 1108.825557999088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 981.3958167843049,
            "unit": "ns/iter",
            "extra": "iterations: 715048\ncpu: 981.37174007898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7608.032149010274,
            "unit": "ns/iter",
            "extra": "iterations: 92880\ncpu: 7607.925279931083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 17918.548572017113,
            "unit": "ns/iter",
            "extra": "iterations: 38901\ncpu: 17918.313153903437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4436.863395183289,
            "unit": "ns/iter",
            "extra": "iterations: 157747\ncpu: 4436.771539236934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4434.430763468885,
            "unit": "ns/iter",
            "extra": "iterations: 157518\ncpu: 4434.307825137396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4439.169842054391,
            "unit": "ns/iter",
            "extra": "iterations: 157776\ncpu: 4439.120652063658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9360.631494688534,
            "unit": "ns/iter",
            "extra": "iterations: 75581\ncpu: 9360.42656223132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8367.39872456001,
            "unit": "ns/iter",
            "extra": "iterations: 83579\ncpu: 8367.29441606159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3175.1121418626826,
            "unit": "ns/iter",
            "extra": "iterations: 220551\ncpu: 3175.063364029169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15934.509943929972,
            "unit": "ns/iter",
            "extra": "iterations: 43695\ncpu: 15934.31056184908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12734.481895924891,
            "unit": "ns/iter",
            "extra": "iterations: 54960\ncpu: 12734.228529839864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12612.180226049824,
            "unit": "ns/iter",
            "extra": "iterations: 55386\ncpu: 12611.826093236556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12998.9681834241,
            "unit": "ns/iter",
            "extra": "iterations: 53777\ncpu: 12998.798742956973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28021.759884746218,
            "unit": "ns/iter",
            "extra": "iterations: 24988\ncpu: 28021.006082919826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99049.787818688,
            "unit": "ns/iter",
            "extra": "iterations: 7060\ncpu: 99048.45609065225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84828.73327688618,
            "unit": "ns/iter",
            "extra": "iterations: 8267\ncpu: 84826.92633361524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83606.42956983314,
            "unit": "ns/iter",
            "extra": "iterations: 8299\ncpu: 83605.38619110739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84359.79754156545,
            "unit": "ns/iter",
            "extra": "iterations: 8298\ncpu: 84359.48421306431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54723.982057509784,
            "unit": "ns/iter",
            "extra": "iterations: 12763\ncpu: 54722.55739246169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84221.7837772592,
            "unit": "ns/iter",
            "extra": "iterations: 8297\ncpu: 84220.63396408306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3029.479059280184,
            "unit": "ns/iter",
            "extra": "iterations: 231057\ncpu: 3029.422610005351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15198.732218844618,
            "unit": "ns/iter",
            "extra": "iterations: 46060\ncpu: 15198.538862353595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12157.937080682103,
            "unit": "ns/iter",
            "extra": "iterations: 57534\ncpu: 12157.88750999406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12007.013924463981,
            "unit": "ns/iter",
            "extra": "iterations: 58171\ncpu: 12006.860806931285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12393.12583862371,
            "unit": "ns/iter",
            "extra": "iterations: 55746\ncpu: 12392.930434470509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26955.534779933456,
            "unit": "ns/iter",
            "extra": "iterations: 25992\ncpu: 26954.943828870262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96037.7575382192,
            "unit": "ns/iter",
            "extra": "iterations: 7263\ncpu: 96031.32314470549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82346.70721407239,
            "unit": "ns/iter",
            "extra": "iterations: 8525\ncpu: 82342.27565982401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80327.51677545089,
            "unit": "ns/iter",
            "extra": "iterations: 8733\ncpu: 80324.7223176454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 80896.48819445261,
            "unit": "ns/iter",
            "extra": "iterations: 8640\ncpu: 80894.12037037095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54577.44177894891,
            "unit": "ns/iter",
            "extra": "iterations: 12839\ncpu: 54576.4233974607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 81699.24868895476,
            "unit": "ns/iter",
            "extra": "iterations: 8581\ncpu: 81694.82577788003 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}