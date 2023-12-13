window.BENCHMARK_DATA = {
  "lastUpdate": 1702490296538,
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
      }
    ]
  }
}