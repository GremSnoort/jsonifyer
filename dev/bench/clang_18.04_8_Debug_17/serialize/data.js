window.BENCHMARK_DATA = {
  "lastUpdate": 1705777749022,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-8 18.04 Debug c++-17": [
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
        "date": 1702489580167,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8426.47587204154,
            "unit": "ns/iter",
            "extra": "iterations: 82995\ncpu: 8426.378697511898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75425.23546073904,
            "unit": "ns/iter",
            "extra": "iterations: 11297\ncpu: 75424.08604054173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 144072.41111478463,
            "unit": "ns/iter",
            "extra": "iterations: 6064\ncpu: 144070.71240105538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 211419.86215293963,
            "unit": "ns/iter",
            "extra": "iterations: 4106\ncpu: 211420.1656113006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 278549.1986433893,
            "unit": "ns/iter",
            "extra": "iterations: 3096\ncpu: 278545.41343669256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 343675.41878980515,
            "unit": "ns/iter",
            "extra": "iterations: 2512\ncpu: 343663.41560509533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 411045.08034025645,
            "unit": "ns/iter",
            "extra": "iterations: 2116\ncpu: 411039.6975425333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 479455.8569079306,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 479448.2456140347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 546710.0062617726,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 546692.4859110836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6526.524760316042,
            "unit": "ns/iter",
            "extra": "iterations: 107329\ncpu: 6526.302304130302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5531.015728351574,
            "unit": "ns/iter",
            "extra": "iterations: 125633\ncpu: 5530.956038620424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5481.696874022946,
            "unit": "ns/iter",
            "extra": "iterations: 127960\ncpu: 5481.552829009066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5460.40482791468,
            "unit": "ns/iter",
            "extra": "iterations: 128047\ncpu: 5460.419221067263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9572.866305996002,
            "unit": "ns/iter",
            "extra": "iterations: 73197\ncpu: 9572.752981679567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35686.6340453336,
            "unit": "ns/iter",
            "extra": "iterations: 22940\ncpu: 35686.748038360885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 151570.75383801837,
            "unit": "ns/iter",
            "extra": "iterations: 5667\ncpu: 151571.0958178932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 123196.25596683857,
            "unit": "ns/iter",
            "extra": "iterations: 6997\ncpu: 123188.4950693158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 119734.79082774841,
            "unit": "ns/iter",
            "extra": "iterations: 7152\ncpu: 119732.1588366888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 119209.5371579344,
            "unit": "ns/iter",
            "extra": "iterations: 7199\ncpu: 119202.778163634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 315635.68795618735,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 315624.7080291973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2272195.823095908,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2272005.159705164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1848444.624506025,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1848365.6126482259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1810570.8893205074,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1810456.6990291309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1824426.3948918695,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1824315.3241650262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1104671.0667461099,
            "unit": "ns/iter",
            "extra": "iterations: 839\ncpu: 1104604.4100119174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1785448.0692307106,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1785287.8846153815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7473745.620000046,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7472922.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4132804.951542003,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4132343.1718061594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9181320.813559648,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 9181001.694915248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35498.674914709074,
            "unit": "ns/iter",
            "extra": "iterations: 23157\ncpu: 35496.23008161669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 154047.52189519117,
            "unit": "ns/iter",
            "extra": "iterations: 5572\ncpu: 154036.39626704933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 120495.69894737177,
            "unit": "ns/iter",
            "extra": "iterations: 7125\ncpu: 120486.32982456141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 121177.17202776916,
            "unit": "ns/iter",
            "extra": "iterations: 7057\ncpu: 121170.04392801484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 121420.41228571543,
            "unit": "ns/iter",
            "extra": "iterations: 7000\ncpu: 121415.5571428565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 325417.2955313923,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 325398.2726248587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2293103.856789985,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2292927.901234573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1875617.8511065035,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1875512.2736418576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1834155.1866404435,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1833963.2612966523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1859291.187624713,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1859136.7265469024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1122871.8521212586,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 1122802.787878787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1814210.6699219341,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1814073.2421875056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7491322.640000816,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7490723.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4190061.8251121147,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4189411.210762339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34305.129836487846,
            "unit": "ns/iter",
            "extra": "iterations: 24708\ncpu: 34302.278614213865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 150204.6516558579,
            "unit": "ns/iter",
            "extra": "iterations: 5707\ncpu: 150187.9796740843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 119374.76386379272,
            "unit": "ns/iter",
            "extra": "iterations: 7195\ncpu: 119365.92077831777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 121307.93963327567,
            "unit": "ns/iter",
            "extra": "iterations: 7090\ncpu: 121299.13963328717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 119830.92379755076,
            "unit": "ns/iter",
            "extra": "iterations: 7152\ncpu: 119822.31543624087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 308390.8184407118,
            "unit": "ns/iter",
            "extra": "iterations: 2809\ncpu: 308362.2285510848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2287473.721674969,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2287336.9458127925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1867022.8559999487,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1866899.7999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1825327.6181102982,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1825203.7401574892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1849499.8710317244,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1849354.7619047663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1121847.489696875,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 1121784.6060606095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1808253.7631067522,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1808172.621359226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3289.6070132162176,
            "unit": "ns/iter",
            "extra": "iterations: 213226\ncpu: 3289.422959676598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17461.52087177526,
            "unit": "ns/iter",
            "extra": "iterations: 40102\ncpu: 17460.857313849774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13551.321753611759,
            "unit": "ns/iter",
            "extra": "iterations: 51642\ncpu: 13550.989504666717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14200.760641914694,
            "unit": "ns/iter",
            "extra": "iterations: 51471\ncpu: 14199.75908764158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11160.790821687247,
            "unit": "ns/iter",
            "extra": "iterations: 62822\ncpu: 11160.797172964913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 71731.21913453696,
            "unit": "ns/iter",
            "extra": "iterations: 9752\ncpu: 71730.41427399489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 152586.29556863813,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 152586.378519975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38875.40630541019,
            "unit": "ns/iter",
            "extra": "iterations: 18048\ncpu: 38874.479166666955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37787.04949053805,
            "unit": "ns/iter",
            "extra": "iterations: 18549\ncpu: 37787.11520836715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38320.43308336188,
            "unit": "ns/iter",
            "extra": "iterations: 18269\ncpu: 38319.809513382796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 78500.24334004769,
            "unit": "ns/iter",
            "extra": "iterations: 8934\ncpu: 78499.23886277027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70140.45977586936,
            "unit": "ns/iter",
            "extra": "iterations: 9994\ncpu: 70139.8639183514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21249.153188652723,
            "unit": "ns/iter",
            "extra": "iterations: 32992\ncpu: 21249.19071290004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 100934.77247069315,
            "unit": "ns/iter",
            "extra": "iterations: 6909\ncpu: 100933.94123606921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80585.30082892484,
            "unit": "ns/iter",
            "extra": "iterations: 8686\ncpu: 80584.0087497135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80204.0537104861,
            "unit": "ns/iter",
            "extra": "iterations: 8732\ncpu: 80203.05771873507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81568.75944658613,
            "unit": "ns/iter",
            "extra": "iterations: 8601\ncpu: 81567.62004418107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 152513.72695576612,
            "unit": "ns/iter",
            "extra": "iterations: 4589\ncpu: 152514.0117672699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 648229.7256718718,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 648223.6329935084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 551404.2358043711,
            "unit": "ns/iter",
            "extra": "iterations: 1268\ncpu: 551396.451104098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 540998.7753678713,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 541000.154918669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 542894.9907048487,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 542882.1843532107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 360733.8874036011,
            "unit": "ns/iter",
            "extra": "iterations: 1945\ncpu: 360731.4138817519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 536388.4003067068,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 536379.6012269924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21046.269334694578,
            "unit": "ns/iter",
            "extra": "iterations: 33308\ncpu: 21045.082262519743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 101432.11305985582,
            "unit": "ns/iter",
            "extra": "iterations: 6899\ncpu: 101429.20713146713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 81393.5650657028,
            "unit": "ns/iter",
            "extra": "iterations: 8599\ncpu: 81389.55692522437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79187.06192789307,
            "unit": "ns/iter",
            "extra": "iterations: 8849\ncpu: 79184.38241609218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81764.79950956315,
            "unit": "ns/iter",
            "extra": "iterations: 8564\ncpu: 81764.28070994906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 154022.86985245772,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 154023.01255230285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 647620.7798334672,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 647621.2765957424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 549655.4662480957,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 549645.5259026629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 536650.9831158371,
            "unit": "ns/iter",
            "extra": "iterations: 1303\ncpu: 536651.4965464271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 537717.1720429682,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 537717.9723502268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 358582.22466731974,
            "unit": "ns/iter",
            "extra": "iterations: 1954\ncpu: 358582.5486182184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 532953.4657533638,
            "unit": "ns/iter",
            "extra": "iterations: 1314\ncpu: 532938.6605783823 ns\nthreads: 1"
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
        "date": 1702489580167,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8426.47587204154,
            "unit": "ns/iter",
            "extra": "iterations: 82995\ncpu: 8426.378697511898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75425.23546073904,
            "unit": "ns/iter",
            "extra": "iterations: 11297\ncpu: 75424.08604054173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 144072.41111478463,
            "unit": "ns/iter",
            "extra": "iterations: 6064\ncpu: 144070.71240105538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 211419.86215293963,
            "unit": "ns/iter",
            "extra": "iterations: 4106\ncpu: 211420.1656113006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 278549.1986433893,
            "unit": "ns/iter",
            "extra": "iterations: 3096\ncpu: 278545.41343669256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 343675.41878980515,
            "unit": "ns/iter",
            "extra": "iterations: 2512\ncpu: 343663.41560509533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 411045.08034025645,
            "unit": "ns/iter",
            "extra": "iterations: 2116\ncpu: 411039.6975425333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 479455.8569079306,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 479448.2456140347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 546710.0062617726,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 546692.4859110836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6526.524760316042,
            "unit": "ns/iter",
            "extra": "iterations: 107329\ncpu: 6526.302304130302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5531.015728351574,
            "unit": "ns/iter",
            "extra": "iterations: 125633\ncpu: 5530.956038620424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5481.696874022946,
            "unit": "ns/iter",
            "extra": "iterations: 127960\ncpu: 5481.552829009066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5460.40482791468,
            "unit": "ns/iter",
            "extra": "iterations: 128047\ncpu: 5460.419221067263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9572.866305996002,
            "unit": "ns/iter",
            "extra": "iterations: 73197\ncpu: 9572.752981679567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35686.6340453336,
            "unit": "ns/iter",
            "extra": "iterations: 22940\ncpu: 35686.748038360885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 151570.75383801837,
            "unit": "ns/iter",
            "extra": "iterations: 5667\ncpu: 151571.0958178932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 123196.25596683857,
            "unit": "ns/iter",
            "extra": "iterations: 6997\ncpu: 123188.4950693158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 119734.79082774841,
            "unit": "ns/iter",
            "extra": "iterations: 7152\ncpu: 119732.1588366888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 119209.5371579344,
            "unit": "ns/iter",
            "extra": "iterations: 7199\ncpu: 119202.778163634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 315635.68795618735,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 315624.7080291973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2272195.823095908,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2272005.159705164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1848444.624506025,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1848365.6126482259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1810570.8893205074,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1810456.6990291309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1824426.3948918695,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1824315.3241650262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1104671.0667461099,
            "unit": "ns/iter",
            "extra": "iterations: 839\ncpu: 1104604.4100119174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1785448.0692307106,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1785287.8846153815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7473745.620000046,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7472922.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4132804.951542003,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4132343.1718061594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9181320.813559648,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 9181001.694915248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35498.674914709074,
            "unit": "ns/iter",
            "extra": "iterations: 23157\ncpu: 35496.23008161669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 154047.52189519117,
            "unit": "ns/iter",
            "extra": "iterations: 5572\ncpu: 154036.39626704933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 120495.69894737177,
            "unit": "ns/iter",
            "extra": "iterations: 7125\ncpu: 120486.32982456141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 121177.17202776916,
            "unit": "ns/iter",
            "extra": "iterations: 7057\ncpu: 121170.04392801484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 121420.41228571543,
            "unit": "ns/iter",
            "extra": "iterations: 7000\ncpu: 121415.5571428565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 325417.2955313923,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 325398.2726248587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2293103.856789985,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2292927.901234573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1875617.8511065035,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1875512.2736418576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1834155.1866404435,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1833963.2612966523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1859291.187624713,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1859136.7265469024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1122871.8521212586,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 1122802.787878787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1814210.6699219341,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1814073.2421875056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7491322.640000816,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7490723.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4190061.8251121147,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4189411.210762339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34305.129836487846,
            "unit": "ns/iter",
            "extra": "iterations: 24708\ncpu: 34302.278614213865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 150204.6516558579,
            "unit": "ns/iter",
            "extra": "iterations: 5707\ncpu: 150187.9796740843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 119374.76386379272,
            "unit": "ns/iter",
            "extra": "iterations: 7195\ncpu: 119365.92077831777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 121307.93963327567,
            "unit": "ns/iter",
            "extra": "iterations: 7090\ncpu: 121299.13963328717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 119830.92379755076,
            "unit": "ns/iter",
            "extra": "iterations: 7152\ncpu: 119822.31543624087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 308390.8184407118,
            "unit": "ns/iter",
            "extra": "iterations: 2809\ncpu: 308362.2285510848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2287473.721674969,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2287336.9458127925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1867022.8559999487,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1866899.7999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1825327.6181102982,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1825203.7401574892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1849499.8710317244,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1849354.7619047663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1121847.489696875,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 1121784.6060606095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1808253.7631067522,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1808172.621359226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3289.6070132162176,
            "unit": "ns/iter",
            "extra": "iterations: 213226\ncpu: 3289.422959676598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17461.52087177526,
            "unit": "ns/iter",
            "extra": "iterations: 40102\ncpu: 17460.857313849774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13551.321753611759,
            "unit": "ns/iter",
            "extra": "iterations: 51642\ncpu: 13550.989504666717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14200.760641914694,
            "unit": "ns/iter",
            "extra": "iterations: 51471\ncpu: 14199.75908764158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11160.790821687247,
            "unit": "ns/iter",
            "extra": "iterations: 62822\ncpu: 11160.797172964913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 71731.21913453696,
            "unit": "ns/iter",
            "extra": "iterations: 9752\ncpu: 71730.41427399489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 152586.29556863813,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 152586.378519975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38875.40630541019,
            "unit": "ns/iter",
            "extra": "iterations: 18048\ncpu: 38874.479166666955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37787.04949053805,
            "unit": "ns/iter",
            "extra": "iterations: 18549\ncpu: 37787.11520836715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38320.43308336188,
            "unit": "ns/iter",
            "extra": "iterations: 18269\ncpu: 38319.809513382796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 78500.24334004769,
            "unit": "ns/iter",
            "extra": "iterations: 8934\ncpu: 78499.23886277027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70140.45977586936,
            "unit": "ns/iter",
            "extra": "iterations: 9994\ncpu: 70139.8639183514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21249.153188652723,
            "unit": "ns/iter",
            "extra": "iterations: 32992\ncpu: 21249.19071290004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 100934.77247069315,
            "unit": "ns/iter",
            "extra": "iterations: 6909\ncpu: 100933.94123606921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80585.30082892484,
            "unit": "ns/iter",
            "extra": "iterations: 8686\ncpu: 80584.0087497135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80204.0537104861,
            "unit": "ns/iter",
            "extra": "iterations: 8732\ncpu: 80203.05771873507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81568.75944658613,
            "unit": "ns/iter",
            "extra": "iterations: 8601\ncpu: 81567.62004418107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 152513.72695576612,
            "unit": "ns/iter",
            "extra": "iterations: 4589\ncpu: 152514.0117672699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 648229.7256718718,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 648223.6329935084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 551404.2358043711,
            "unit": "ns/iter",
            "extra": "iterations: 1268\ncpu: 551396.451104098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 540998.7753678713,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 541000.154918669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 542894.9907048487,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 542882.1843532107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 360733.8874036011,
            "unit": "ns/iter",
            "extra": "iterations: 1945\ncpu: 360731.4138817519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 536388.4003067068,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 536379.6012269924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21046.269334694578,
            "unit": "ns/iter",
            "extra": "iterations: 33308\ncpu: 21045.082262519743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 101432.11305985582,
            "unit": "ns/iter",
            "extra": "iterations: 6899\ncpu: 101429.20713146713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 81393.5650657028,
            "unit": "ns/iter",
            "extra": "iterations: 8599\ncpu: 81389.55692522437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79187.06192789307,
            "unit": "ns/iter",
            "extra": "iterations: 8849\ncpu: 79184.38241609218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81764.79950956315,
            "unit": "ns/iter",
            "extra": "iterations: 8564\ncpu: 81764.28070994906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 154022.86985245772,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 154023.01255230285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 647620.7798334672,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 647621.2765957424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 549655.4662480957,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 549645.5259026629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 536650.9831158371,
            "unit": "ns/iter",
            "extra": "iterations: 1303\ncpu: 536651.4965464271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 537717.1720429682,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 537717.9723502268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 358582.22466731974,
            "unit": "ns/iter",
            "extra": "iterations: 1954\ncpu: 358582.5486182184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 532953.4657533638,
            "unit": "ns/iter",
            "extra": "iterations: 1314\ncpu: 532938.6605783823 ns\nthreads: 1"
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
        "date": 1702492203320,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8019.810288136673,
            "unit": "ns/iter",
            "extra": "iterations: 87285\ncpu: 8019.832731855417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72805.41149798156,
            "unit": "ns/iter",
            "extra": "iterations: 11689\ncpu: 72804.79082898452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139182.21171600997,
            "unit": "ns/iter",
            "extra": "iterations: 6282\ncpu: 139183.11047437126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 205827.26860382446,
            "unit": "ns/iter",
            "extra": "iterations: 4233\ncpu: 205826.95487833692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 271510.82264150324,
            "unit": "ns/iter",
            "extra": "iterations: 3180\ncpu: 271516.06918238994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 333128.1557187307,
            "unit": "ns/iter",
            "extra": "iterations: 2588\ncpu: 333124.57496135985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 398032.52491996734,
            "unit": "ns/iter",
            "extra": "iterations: 2187\ncpu: 398032.5102880661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 463428.30601380614,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 463427.4614156469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 530065.95385548,
            "unit": "ns/iter",
            "extra": "iterations: 1647\ncpu: 530049.5446265931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6168.97140294433,
            "unit": "ns/iter",
            "extra": "iterations: 113718\ncpu: 6168.669867567139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5253.69370681909,
            "unit": "ns/iter",
            "extra": "iterations: 133160\ncpu: 5253.801441874439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5224.949411728956,
            "unit": "ns/iter",
            "extra": "iterations: 134122\ncpu: 5224.739416352277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5277.925562442399,
            "unit": "ns/iter",
            "extra": "iterations: 132769\ncpu: 5277.8118386069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9234.501140333321,
            "unit": "ns/iter",
            "extra": "iterations: 75855\ncpu: 9234.248236767504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34286.36938877342,
            "unit": "ns/iter",
            "extra": "iterations: 24148\ncpu: 34285.57644525424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 135612.24686458075,
            "unit": "ns/iter",
            "extra": "iterations: 6299\ncpu: 135606.62009842828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 111069.3982381194,
            "unit": "ns/iter",
            "extra": "iterations: 7719\ncpu: 111067.32737401218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 109138.69744572054,
            "unit": "ns/iter",
            "extra": "iterations: 7830\ncpu: 109135.0702426561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 109731.76905282194,
            "unit": "ns/iter",
            "extra": "iterations: 7781\ncpu: 109729.84192263201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 274266.98121477646,
            "unit": "ns/iter",
            "extra": "iterations: 3194\ncpu: 274253.6005009398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2152077.5439814474,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2151994.4444444426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1762077.8057144412,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1762032.7619047635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1751713.6660413807,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1751664.1651031845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1756906.6064639825,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1756841.2547528509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1071652.043529358,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1071625.0588235292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1719147.7769516548,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1719110.7806691432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7435153.779999836,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7434924.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4142398.3244446088,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4142097.333333336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9215497.051282661,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 9215154.700854708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33502.69890681462,
            "unit": "ns/iter",
            "extra": "iterations: 24607\ncpu: 33501.94660056086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 136573.8133142688,
            "unit": "ns/iter",
            "extra": "iterations: 6294\ncpu: 136573.45090562443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 111165.319542025,
            "unit": "ns/iter",
            "extra": "iterations: 7686\ncpu: 111163.06271142347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 110987.89649786153,
            "unit": "ns/iter",
            "extra": "iterations: 7681\ncpu: 110987.3974742866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 112759.6173912932,
            "unit": "ns/iter",
            "extra": "iterations: 7590\ncpu: 112759.02503293783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 277536.60762681934,
            "unit": "ns/iter",
            "extra": "iterations: 3173\ncpu: 277523.03813425836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2186398.2948115603,
            "unit": "ns/iter",
            "extra": "iterations: 424\ncpu: 2186298.5849056686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1795486.4691119734,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1795454.0540540444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1777053.886973261,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1777014.9425287317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1791668.8169555794,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1791532.5626204226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1087331.3169590987,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 1087299.7660818715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1737879.680373889,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1737809.7196261673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7507127.280000532,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7506762.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4072349.4672488715,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4072060.262008721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32991.28950542856,
            "unit": "ns/iter",
            "extra": "iterations: 24870\ncpu: 32990.42219541616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 135659.4167861061,
            "unit": "ns/iter",
            "extra": "iterations: 6279\ncpu: 135656.7924828789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 108652.07585592478,
            "unit": "ns/iter",
            "extra": "iterations: 7857\ncpu: 108650.31182385111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 110172.64915231802,
            "unit": "ns/iter",
            "extra": "iterations: 7727\ncpu: 110166.4423450231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 110239.13619281825,
            "unit": "ns/iter",
            "extra": "iterations: 7717\ncpu: 110236.7500323965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 274988.1243702789,
            "unit": "ns/iter",
            "extra": "iterations: 3176\ncpu: 274982.7455919382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2182527.3685445148,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2182465.7276995233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1794461.9576107482,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1794389.5953757174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1774769.1600000812,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1774712.9523809506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1781027.2337165226,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1780996.9348659047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1073026.2928241265,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1072995.717592595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1732782.3191094813,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1732748.423005562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3304.5448831463664,
            "unit": "ns/iter",
            "extra": "iterations: 211761\ncpu: 3304.4573835597944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16775.066906129883,
            "unit": "ns/iter",
            "extra": "iterations: 41760\ncpu: 16774.851532567052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13014.07318751511,
            "unit": "ns/iter",
            "extra": "iterations: 53766\ncpu: 13014.05163114225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13116.533020103843,
            "unit": "ns/iter",
            "extra": "iterations: 53422\ncpu: 13115.897944666947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10951.962008119828,
            "unit": "ns/iter",
            "extra": "iterations: 64040\ncpu: 10951.6942535915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64979.64407723469,
            "unit": "ns/iter",
            "extra": "iterations: 10772\ncpu: 64977.90568139622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 142900.5402581446,
            "unit": "ns/iter",
            "extra": "iterations: 4881\ncpu: 142893.8537185003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37388.80191402577,
            "unit": "ns/iter",
            "extra": "iterations: 18704\ncpu: 37385.527159965604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37448.10014474862,
            "unit": "ns/iter",
            "extra": "iterations: 18653\ncpu: 37447.00048249634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37598.61231067018,
            "unit": "ns/iter",
            "extra": "iterations: 18618\ncpu: 37597.64206681695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77542.25579333138,
            "unit": "ns/iter",
            "extra": "iterations: 9019\ncpu: 77540.09313671156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67746.36692806738,
            "unit": "ns/iter",
            "extra": "iterations: 10329\ncpu: 67745.39645657885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20633.158591605596,
            "unit": "ns/iter",
            "extra": "iterations: 33911\ncpu: 20633.23110495105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 95364.04704117922,
            "unit": "ns/iter",
            "extra": "iterations: 7334\ncpu: 95364.57594764097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 76567.60464099163,
            "unit": "ns/iter",
            "extra": "iterations: 9136\ncpu: 76565.59763572717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78021.84783578129,
            "unit": "ns/iter",
            "extra": "iterations: 8964\ncpu: 78018.29540383696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 77737.03530330864,
            "unit": "ns/iter",
            "extra": "iterations: 8951\ncpu: 77732.72260082759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 148403.4365180407,
            "unit": "ns/iter",
            "extra": "iterations: 4710\ncpu: 148403.7154989389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 609047.9973844861,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 609048.9102005138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 522495.0402085205,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 522481.0871183935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 517596.2411242677,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 517582.5443787022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 518596.97693450766,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 518592.48511904833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 349894.9240000116,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 349885.90000000386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 508498.7029775282,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 508498.7654320984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20698.53934672887,
            "unit": "ns/iter",
            "extra": "iterations: 33891\ncpu: 20698.61320114463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 96930.60396725248,
            "unit": "ns/iter",
            "extra": "iterations: 7209\ncpu: 96926.12012761901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77454.74455861471,
            "unit": "ns/iter",
            "extra": "iterations: 9051\ncpu: 77449.88399071946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78684.1580330736,
            "unit": "ns/iter",
            "extra": "iterations: 9131\ncpu: 78681.17402256092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 78217.49036033562,
            "unit": "ns/iter",
            "extra": "iterations: 8714\ncpu: 78217.38581592913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 147382.3310882002,
            "unit": "ns/iter",
            "extra": "iterations: 4751\ncpu: 147382.40370448332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 608968.5784909086,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 608949.5229835282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 517388.47037035564,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 517358.66666667286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 515784.64454274625,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 515767.551622419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 513369.1347985308,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 513368.79120879783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 349778.9196606976,
            "unit": "ns/iter",
            "extra": "iterations: 2004\ncpu: 349780.8383233484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 524859.8862318675,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 524836.3043478278 ns\nthreads: 1"
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
        "date": 1702503263814,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8264.148818934615,
            "unit": "ns/iter",
            "extra": "iterations: 84754\ncpu: 8263.274889680722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74293.47961061998,
            "unit": "ns/iter",
            "extra": "iterations: 11403\ncpu: 74287.59098482854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 141274.84044796313,
            "unit": "ns/iter",
            "extra": "iterations: 6161\ncpu: 141266.54763837042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 207799.18190453693,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 207791.59344573732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 275156.7093171418,
            "unit": "ns/iter",
            "extra": "iterations: 3134\ncpu: 275145.05424377805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 338631.5951258275,
            "unit": "ns/iter",
            "extra": "iterations: 2544\ncpu: 338622.9559748428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 404481.8962791206,
            "unit": "ns/iter",
            "extra": "iterations: 2150\ncpu: 404457.5348837212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 469323.46461368224,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 469301.89086979936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 536980.4528650454,
            "unit": "ns/iter",
            "extra": "iterations: 1623\ncpu: 536962.3536660507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6383.92081001113,
            "unit": "ns/iter",
            "extra": "iterations: 109875\ncpu: 6383.664163822531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5439.138317699455,
            "unit": "ns/iter",
            "extra": "iterations: 128776\ncpu: 5438.900105609738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5413.43998849518,
            "unit": "ns/iter",
            "extra": "iterations: 128642\ncpu: 5413.116245083259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5370.161230883386,
            "unit": "ns/iter",
            "extra": "iterations: 130248\ncpu: 5369.9672931638015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9582.841412402675,
            "unit": "ns/iter",
            "extra": "iterations: 73152\ncpu: 9582.533628608939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34419.838341927585,
            "unit": "ns/iter",
            "extra": "iterations: 23859\ncpu: 34418.37880883526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 139309.85866360168,
            "unit": "ns/iter",
            "extra": "iterations: 6106\ncpu: 139296.1840812315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 113135.37876176689,
            "unit": "ns/iter",
            "extra": "iterations: 7543\ncpu: 113124.93702770773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 112960.58699123136,
            "unit": "ns/iter",
            "extra": "iterations: 7518\ncpu: 112954.66879489252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 114296.18043391203,
            "unit": "ns/iter",
            "extra": "iterations: 7421\ncpu: 114291.76660827399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 269789.467641565,
            "unit": "ns/iter",
            "extra": "iterations: 3214\ncpu: 269777.0068450523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2203556.5450235875,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2203442.1800947874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1807662.0175437813,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1807606.0428849899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1823224.1296659852,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1823163.8506876205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1830694.2938855404,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1830586.3905325455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1099515.0023753298,
            "unit": "ns/iter",
            "extra": "iterations: 842\ncpu: 1099454.9881235152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1769371.8707224494,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1769257.0342205295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7416873.480000276,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7416087.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4096013.9519645916,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4095424.8908297075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9257999.016948955,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 9257222.881355947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34743.29401042829,
            "unit": "ns/iter",
            "extra": "iterations: 23591\ncpu: 34741.4480098342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 139412.06669928602,
            "unit": "ns/iter",
            "extra": "iterations: 6132\ncpu: 139406.5720808868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 113221.25744145166,
            "unit": "ns/iter",
            "extra": "iterations: 7559\ncpu: 113204.03492525479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115732.93767781783,
            "unit": "ns/iter",
            "extra": "iterations: 7381\ncpu: 115727.47595176837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 115171.80581349003,
            "unit": "ns/iter",
            "extra": "iterations: 7431\ncpu: 115162.27963934909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 278558.92877769517,
            "unit": "ns/iter",
            "extra": "iterations: 3117\ncpu: 278549.05357715697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2228379.5755396355,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2228170.7434052653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1832874.4990177401,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1832709.8231827128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1833358.9604741125,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1833180.8300395184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1836438.3794466911,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1836255.13833992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1105477.373809549,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 1105354.5238095182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1787366.7164751387,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1787238.8888888909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7486939.579999899,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7486145.999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4133612.4844444077,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4133259.1111111264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33734.05452536084,
            "unit": "ns/iter",
            "extra": "iterations: 24429\ncpu: 33731.155593761505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 141348.07539680842,
            "unit": "ns/iter",
            "extra": "iterations: 6048\ncpu: 141343.0224867733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 110668.61552392897,
            "unit": "ns/iter",
            "extra": "iterations: 7730\ncpu: 110664.08796895247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 112550.0109933696,
            "unit": "ns/iter",
            "extra": "iterations: 7550\ncpu: 112543.72185430481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 111280.00249342338,
            "unit": "ns/iter",
            "extra": "iterations: 7219\ncpu: 111275.57833494883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 273175.3134845614,
            "unit": "ns/iter",
            "extra": "iterations: 3174\ncpu: 273167.8638941396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2222922.889952237,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2222813.397129186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1829172.630137013,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1829108.0234833588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1832240.6706114637,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1832157.199211044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1833326.4378700175,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1833223.4714003948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1104099.4454977084,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 1104047.867298581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1774208.2857144158,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1774071.238095235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3305.797770738115,
            "unit": "ns/iter",
            "extra": "iterations: 212447\ncpu: 3305.684711951682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16612.60597135576,
            "unit": "ns/iter",
            "extra": "iterations: 42101\ncpu: 16611.769316643262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13675.44173326168,
            "unit": "ns/iter",
            "extra": "iterations: 51556\ncpu: 13674.782760493428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13626.610453455683,
            "unit": "ns/iter",
            "extra": "iterations: 50854\ncpu: 13625.933063279308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11048.396141965339,
            "unit": "ns/iter",
            "extra": "iterations: 63452\ncpu: 11047.52884069848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65057.766784127205,
            "unit": "ns/iter",
            "extra": "iterations: 10784\ncpu: 65055.4617952522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 146429.5543705653,
            "unit": "ns/iter",
            "extra": "iterations: 4782\ncpu: 146419.67795901242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38164.2018973869,
            "unit": "ns/iter",
            "extra": "iterations: 18341\ncpu: 38162.53748432483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38258.41673493383,
            "unit": "ns/iter",
            "extra": "iterations: 18309\ncpu: 38256.163635370605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38464.66529062615,
            "unit": "ns/iter",
            "extra": "iterations: 18168\ncpu: 38462.01012769716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 78214.22885516251,
            "unit": "ns/iter",
            "extra": "iterations: 8962\ncpu: 78206.68377594317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68788.3700973155,
            "unit": "ns/iter",
            "extra": "iterations: 10173\ncpu: 68784.86188931388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21338.462127219846,
            "unit": "ns/iter",
            "extra": "iterations: 32794\ncpu: 21337.30255534514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 101568.44434758295,
            "unit": "ns/iter",
            "extra": "iterations: 6882\ncpu: 101562.42371403637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80279.1681162743,
            "unit": "ns/iter",
            "extra": "iterations: 8738\ncpu: 80274.67383840687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80160.89971379703,
            "unit": "ns/iter",
            "extra": "iterations: 8735\ncpu: 80150.70406410977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80100.58955565096,
            "unit": "ns/iter",
            "extra": "iterations: 8732\ncpu: 80093.03710490167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 154129.3080985855,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 154121.76496478714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 624852.2220232796,
            "unit": "ns/iter",
            "extra": "iterations: 1117\ncpu: 624817.9051029551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 533050.5191423879,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 533007.8866768804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 537678.7940046759,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 537621.9830899395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 537562.7814418018,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 537526.0736196347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 357838.82166578976,
            "unit": "ns/iter",
            "extra": "iterations: 1957\ncpu: 357796.8318855433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 524506.1612903734,
            "unit": "ns/iter",
            "extra": "iterations: 1333\ncpu: 524484.3960990205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21064.301239247055,
            "unit": "ns/iter",
            "extra": "iterations: 33246\ncpu: 21063.700896348255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 100221.10663237378,
            "unit": "ns/iter",
            "extra": "iterations: 6996\ncpu: 100212.59291023406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79565.50210298497,
            "unit": "ns/iter",
            "extra": "iterations: 8797\ncpu: 79556.72388314195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79247.30852871654,
            "unit": "ns/iter",
            "extra": "iterations: 8829\ncpu: 79237.8525314303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 80857.962727162,
            "unit": "ns/iter",
            "extra": "iterations: 8639\ncpu: 80853.60574140609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 155953.68194969467,
            "unit": "ns/iter",
            "extra": "iterations: 4493\ncpu: 155945.91586912677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 627284.5008976967,
            "unit": "ns/iter",
            "extra": "iterations: 1114\ncpu: 627222.8007181291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 531251.1353612165,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 531192.6235741363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 536150.2356541251,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 536087.4521805621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 532823.2196048333,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 532808.2066869295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 357329.2889229233,
            "unit": "ns/iter",
            "extra": "iterations: 1959\ncpu: 357309.74987237924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 522233.4660193984,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 522213.51755041006 ns\nthreads: 1"
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
        "date": 1705574910471,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8203.49113446033,
            "unit": "ns/iter",
            "extra": "iterations: 85274\ncpu: 8203.3773483125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73792.38395638498,
            "unit": "ns/iter",
            "extra": "iterations: 11556\ncpu: 73792.02146071306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139616.87003205434,
            "unit": "ns/iter",
            "extra": "iterations: 6240\ncpu: 139614.88782051278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 205057.36629691874,
            "unit": "ns/iter",
            "extra": "iterations: 4237\ncpu: 205052.65518055225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 270271.85896635195,
            "unit": "ns/iter",
            "extra": "iterations: 3212\ncpu: 270264.04109589057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 333923.6563825719,
            "unit": "ns/iter",
            "extra": "iterations: 2593\ncpu: 333920.9024296181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 397799.28715137567,
            "unit": "ns/iter",
            "extra": "iterations: 2187\ncpu: 397788.5230909922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 464429.21605281136,
            "unit": "ns/iter",
            "extra": "iterations: 1819\ncpu: 464400.3298515668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 528359.9993577522,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 528342.3249839429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6288.5234927271185,
            "unit": "ns/iter",
            "extra": "iterations: 110481\ncpu: 6288.169911568503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5382.04860533901,
            "unit": "ns/iter",
            "extra": "iterations: 129924\ncpu: 5381.818601644037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5299.5768356163335,
            "unit": "ns/iter",
            "extra": "iterations: 132367\ncpu: 5299.300429865451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5336.368180883786,
            "unit": "ns/iter",
            "extra": "iterations: 131267\ncpu: 5336.319105334935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9286.531844005369,
            "unit": "ns/iter",
            "extra": "iterations: 75336\ncpu: 9286.558882871412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35274.55315593436,
            "unit": "ns/iter",
            "extra": "iterations: 23337\ncpu: 35274.27689934441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 144768.7438058176,
            "unit": "ns/iter",
            "extra": "iterations: 5933\ncpu: 144768.07685825057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 113146.96576338225,
            "unit": "ns/iter",
            "extra": "iterations: 7565\ncpu: 113141.41440846011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 115995.97829018066,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 115991.55879180151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 113087.20647558838,
            "unit": "ns/iter",
            "extra": "iterations: 7536\ncpu: 113077.72027600881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 271814.0774336559,
            "unit": "ns/iter",
            "extra": "iterations: 3164\ncpu: 271800.79013906507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2161971.9860140034,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2161899.067599064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1785180.4789273401,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1785086.3984674357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1755463.6641366405,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1755388.994307402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1774898.9580153741,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1774807.8244274785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1088393.3873239218,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 1088349.7652582168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1730364.8712685548,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1730301.679104483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7462396.6499996185,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7461802.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4158295.160714484,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4158034.375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9215427.581197271,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 9215164.102564098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34490.467475237856,
            "unit": "ns/iter",
            "extra": "iterations: 23828\ncpu: 34490.18381735781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 147715.83522727093,
            "unit": "ns/iter",
            "extra": "iterations: 5808\ncpu: 147711.15702479295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 113829.72843280617,
            "unit": "ns/iter",
            "extra": "iterations: 7523\ncpu: 113824.92356772581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 119013.77524656206,
            "unit": "ns/iter",
            "extra": "iterations: 7199\ncpu: 119010.8348381725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 117647.58349460934,
            "unit": "ns/iter",
            "extra": "iterations: 7234\ncpu: 117644.96820569606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 279203.23975477385,
            "unit": "ns/iter",
            "extra": "iterations: 3099\ncpu: 279196.7731526319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2180949.879717008,
            "unit": "ns/iter",
            "extra": "iterations: 424\ncpu: 2180892.216981122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1808930.272373616,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1808897.0817120592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1791525.0867053356,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1791533.9113680162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1800147.2495163619,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1800099.2263056112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1103791.2282996746,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 1103763.376932219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1752251.9584120747,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1752187.7126653995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7487314.720000314,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7469546.000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4198097.117646963,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4198009.502262445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34195.01781180877,
            "unit": "ns/iter",
            "extra": "iterations: 24029\ncpu: 34194.294394273435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 146536.80047669366,
            "unit": "ns/iter",
            "extra": "iterations: 5874\ncpu: 146536.09124957363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 112364.61451635243,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 112362.80351752185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 114773.3159090887,
            "unit": "ns/iter",
            "extra": "iterations: 7480\ncpu: 114770.20053476014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 115048.35526845977,
            "unit": "ns/iter",
            "extra": "iterations: 7431\ncpu: 115046.56170098255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 275382.858767781,
            "unit": "ns/iter",
            "extra": "iterations: 3165\ncpu: 275380.4739336491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2165417.918414884,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2165371.794871795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1812407.3645223784,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1812333.7231968713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1800505.9224806651,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1800464.147286825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1795852.8875969793,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1795839.3410852633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1101623.4928401173,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 1101598.8066825792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1749496.5444235185,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1749434.4045368622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3332.5950393933745,
            "unit": "ns/iter",
            "extra": "iterations: 209934\ncpu: 3332.572141720723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17401.659348582823,
            "unit": "ns/iter",
            "extra": "iterations: 40220\ncpu: 17401.300348085624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13411.367386054548,
            "unit": "ns/iter",
            "extra": "iterations: 52174\ncpu: 13410.932648445625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13993.545787106204,
            "unit": "ns/iter",
            "extra": "iterations: 50025\ncpu: 13993.055472263823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11197.206512000776,
            "unit": "ns/iter",
            "extra": "iterations: 62500\ncpu: 11196.950399999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67594.81189741548,
            "unit": "ns/iter",
            "extra": "iterations: 10372\ncpu: 67594.14770536081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 144450.0449577172,
            "unit": "ns/iter",
            "extra": "iterations: 4849\ncpu: 144449.39162713962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38112.31904917584,
            "unit": "ns/iter",
            "extra": "iterations: 18342\ncpu: 38111.77625122658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37961.711114731756,
            "unit": "ns/iter",
            "extra": "iterations: 18426\ncpu: 37961.20699012265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38133.19315403081,
            "unit": "ns/iter",
            "extra": "iterations: 18405\ncpu: 38132.33903830484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 79020.29553148712,
            "unit": "ns/iter",
            "extra": "iterations: 8862\ncpu: 79019.60054163866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68628.88253159635,
            "unit": "ns/iter",
            "extra": "iterations: 10207\ncpu: 68627.70647594842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20361.98132689537,
            "unit": "ns/iter",
            "extra": "iterations: 34381\ncpu: 20361.120967976523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 96213.37333332389,
            "unit": "ns/iter",
            "extra": "iterations: 7275\ncpu: 96209.5670103077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77255.96956954607,
            "unit": "ns/iter",
            "extra": "iterations: 9037\ncpu: 77255.43875179811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79030.87925209003,
            "unit": "ns/iter",
            "extra": "iterations: 8878\ncpu: 79028.35097994997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80116.26364678923,
            "unit": "ns/iter",
            "extra": "iterations: 8720\ncpu: 80114.33486238608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 149233.0176783646,
            "unit": "ns/iter",
            "extra": "iterations: 4695\ncpu: 149225.64430244773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 615374.9109348065,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 615355.9964726609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 530011.2100075494,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 530004.4730856793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 524115.6254681399,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 524099.92509362893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 523402.535474175,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 523394.3241224755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 355879.39450937946,
            "unit": "ns/iter",
            "extra": "iterations: 1967\ncpu: 355870.1067615718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 521121.3557692669,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 521104.2159763342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20862.600716846093,
            "unit": "ns/iter",
            "extra": "iterations: 33480\ncpu: 20862.329749103807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 96746.45642232955,
            "unit": "ns/iter",
            "extra": "iterations: 7217\ncpu: 96742.92642372238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77930.94789109747,
            "unit": "ns/iter",
            "extra": "iterations: 8962\ncpu: 77929.6027672397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77318.90391419767,
            "unit": "ns/iter",
            "extra": "iterations: 9044\ncpu: 77317.37063246315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79275.0284129435,
            "unit": "ns/iter",
            "extra": "iterations: 8834\ncpu: 79273.74915100736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 149916.2819524732,
            "unit": "ns/iter",
            "extra": "iterations: 4671\ncpu: 149906.44401626865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 613322.7622807195,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 613292.8947368412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 531562.1691957314,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 531538.3915022757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 521465.6499626207,
            "unit": "ns/iter",
            "extra": "iterations: 1337\ncpu: 521458.4143605071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 519375.04825535306,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 519350.9279881277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 357118.90291260893,
            "unit": "ns/iter",
            "extra": "iterations: 1957\ncpu: 357095.70771588985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 514842.4280442699,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 514824.20664207416 ns\nthreads: 1"
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
        "date": 1705772723292,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8317.543702226587,
            "unit": "ns/iter",
            "extra": "iterations: 84252\ncpu: 8316.96220861226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76697.75914128628,
            "unit": "ns/iter",
            "extra": "iterations: 11459\ncpu: 76690.53145998777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 141273.48186528822,
            "unit": "ns/iter",
            "extra": "iterations: 6176\ncpu: 141265.5116580311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 208510.62305296768,
            "unit": "ns/iter",
            "extra": "iterations: 4173\ncpu: 208497.72346034035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 275236.1133987922,
            "unit": "ns/iter",
            "extra": "iterations: 3157\ncpu: 275223.0598669624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 338571.3854372612,
            "unit": "ns/iter",
            "extra": "iterations: 2527\ncpu: 338544.4004748713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 405355.36308691074,
            "unit": "ns/iter",
            "extra": "iterations: 2151\ncpu: 405326.08089260786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 473390.9989142527,
            "unit": "ns/iter",
            "extra": "iterations: 1842\ncpu: 473366.8838219332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 536545.0383901125,
            "unit": "ns/iter",
            "extra": "iterations: 1615\ncpu: 536494.3653250773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6464.581416573508,
            "unit": "ns/iter",
            "extra": "iterations: 108473\ncpu: 6464.142228941759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5498.528603796219,
            "unit": "ns/iter",
            "extra": "iterations: 127553\ncpu: 5498.3677373327155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5415.608319240147,
            "unit": "ns/iter",
            "extra": "iterations: 128906\ncpu: 5415.13505965587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5414.500990528218,
            "unit": "ns/iter",
            "extra": "iterations: 129224\ncpu: 5414.035318516676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9477.604469620972,
            "unit": "ns/iter",
            "extra": "iterations: 73787\ncpu: 9476.82247550381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33453.67152777826,
            "unit": "ns/iter",
            "extra": "iterations: 24480\ncpu: 33451.42565359475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 138455.85215141028,
            "unit": "ns/iter",
            "extra": "iterations: 6182\ncpu: 138447.29860886457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 111374.40915612491,
            "unit": "ns/iter",
            "extra": "iterations: 7667\ncpu: 111366.44058953975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 115107.87659804037,
            "unit": "ns/iter",
            "extra": "iterations: 7431\ncpu: 115100.45754272677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111176.97341459802,
            "unit": "ns/iter",
            "extra": "iterations: 7711\ncpu: 111169.13500194554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 278335.8736774501,
            "unit": "ns/iter",
            "extra": "iterations: 3119\ncpu: 278297.114459763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2226209.9522674573,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2226013.3651551297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1829861.8490196837,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1829738.4313725487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1822033.6620554004,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1821925.296442689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1827603.9783037459,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1827402.7613412216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1101086.4868735326,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 1101011.6945107398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1778235.6826923152,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1778087.1153846148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7436776.900000269,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7436402.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4208296.1576576,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4208077.027027034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9230651.47863338,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 9230120.512820508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34330.947427713385,
            "unit": "ns/iter",
            "extra": "iterations: 23967\ncpu: 34329.60737680976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 139924.0344939785,
            "unit": "ns/iter",
            "extra": "iterations: 6146\ncpu: 139915.0829808002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 111426.45262608865,
            "unit": "ns/iter",
            "extra": "iterations: 7673\ncpu: 111421.69946565857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 116850.34443840102,
            "unit": "ns/iter",
            "extra": "iterations: 7354\ncpu: 116847.2259994557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 114888.10840289942,
            "unit": "ns/iter",
            "extra": "iterations: 7426\ncpu: 114886.42607056224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 288425.10435933294,
            "unit": "ns/iter",
            "extra": "iterations: 3028\ncpu: 288406.47291941993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2268023.422330049,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2267873.543689323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1854306.9183266084,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1854176.693227081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1839649.6437007703,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1839578.7401574783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1851502.6499999294,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1851304.2000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1114354.2273809242,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 1114292.0238095215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1801521.1650484523,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1801456.5048543776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7470846.169999276,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7470499.999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4276227.98173518,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4275860.73059361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32946.12760426889,
            "unit": "ns/iter",
            "extra": "iterations: 25007\ncpu: 32943.923701363616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 137414.10277062486,
            "unit": "ns/iter",
            "extra": "iterations: 6208\ncpu: 137404.15592783442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 108140.3854748643,
            "unit": "ns/iter",
            "extra": "iterations: 7876\ncpu: 108137.315896394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 115555.80048925559,
            "unit": "ns/iter",
            "extra": "iterations: 7358\ncpu: 115550.28540364267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 111953.90499343397,
            "unit": "ns/iter",
            "extra": "iterations: 7610\ncpu: 111950.59132720053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 281077.5587383292,
            "unit": "ns/iter",
            "extra": "iterations: 3107\ncpu: 281062.6971354987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2237310.4855074123,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2237233.33333332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1840644.415019839,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1840534.7826087023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1837380.2795276411,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1837328.3464566881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1847239.5476188406,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1847208.134920634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1114754.7350120372,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1114719.7841726583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1791874.9865384162,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1791789.2307692294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3277.969484964706,
            "unit": "ns/iter",
            "extra": "iterations: 213403\ncpu: 3277.7435181323485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17366.110573824848,
            "unit": "ns/iter",
            "extra": "iterations: 40326\ncpu: 17365.610276248593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12672.497287392605,
            "unit": "ns/iter",
            "extra": "iterations: 55113\ncpu: 12672.019305789847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13541.825451368992,
            "unit": "ns/iter",
            "extra": "iterations: 51510\ncpu: 13540.458163463369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11170.043632883466,
            "unit": "ns/iter",
            "extra": "iterations: 62705\ncpu: 11169.3389681843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66973.639885761,
            "unit": "ns/iter",
            "extra": "iterations: 10505\ncpu: 66968.74821513549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 148876.01806970558,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 148866.47534013606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38646.15086848379,
            "unit": "ns/iter",
            "extra": "iterations: 18135\ncpu: 38642.5420457676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38464.6261836612,
            "unit": "ns/iter",
            "extra": "iterations: 18164\ncpu: 38462.56331204572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38770.560531139956,
            "unit": "ns/iter",
            "extra": "iterations: 17999\ncpu: 38768.52047336012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 79296.9512553747,
            "unit": "ns/iter",
            "extra": "iterations: 8842\ncpu: 79291.48382718906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69662.21837364454,
            "unit": "ns/iter",
            "extra": "iterations: 10047\ncpu: 69657.54951726933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21161.472782619727,
            "unit": "ns/iter",
            "extra": "iterations: 33508\ncpu: 21160.29903306675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 98818.87092678684,
            "unit": "ns/iter",
            "extra": "iterations: 7089\ncpu: 98816.25052898913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 79728.9346263561,
            "unit": "ns/iter",
            "extra": "iterations: 8765\ncpu: 79723.45693097587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80749.5414786656,
            "unit": "ns/iter",
            "extra": "iterations: 8643\ncpu: 80743.31829225898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81069.69617613149,
            "unit": "ns/iter",
            "extra": "iterations: 8630\ncpu: 81063.36037079984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 151898.01345778676,
            "unit": "ns/iter",
            "extra": "iterations: 4607\ncpu: 151894.03082266374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 637929.4384685929,
            "unit": "ns/iter",
            "extra": "iterations: 1097\ncpu: 637918.3226982651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 546147.1497659689,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 546119.9687987481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 544286.2810046531,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 544271.7425431665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 542843.3351393683,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 542809.8297213645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 360785.93456978904,
            "unit": "ns/iter",
            "extra": "iterations: 1941\ncpu: 360776.1978361628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 531447.2819149046,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 531420.5927051647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21055.471118369314,
            "unit": "ns/iter",
            "extra": "iterations: 33066\ncpu: 21055.1351841768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 100427.5006427659,
            "unit": "ns/iter",
            "extra": "iterations: 7001\ncpu: 100425.8534495075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79693.95251651328,
            "unit": "ns/iter",
            "extra": "iterations: 8782\ncpu: 79689.44431792323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79917.1989486886,
            "unit": "ns/iter",
            "extra": "iterations: 8751\ncpu: 79912.23860130341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 80547.33662797019,
            "unit": "ns/iter",
            "extra": "iterations: 8701\ncpu: 80543.98345017801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 152539.00195820292,
            "unit": "ns/iter",
            "extra": "iterations: 4596\ncpu: 152533.92080069557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 635405.9500907825,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 635386.8421052648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 542345.1234472531,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 542312.8105590094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 541958.2057231615,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 541941.9180201055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 539729.5115562849,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 539706.7026194165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 361009.8665635897,
            "unit": "ns/iter",
            "extra": "iterations: 1941\ncpu: 361000.05151983694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 529484.1626323776,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 529469.288956127 ns\nthreads: 1"
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
        "date": 1705774141177,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8386.639598243473,
            "unit": "ns/iter",
            "extra": "iterations: 83135\ncpu: 8386.424490286885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76911.28957252637,
            "unit": "ns/iter",
            "extra": "iterations: 11182\ncpu: 76910.83884814881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 144438.57130942514,
            "unit": "ns/iter",
            "extra": "iterations: 5995\ncpu: 144436.23019182656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 211561.61962890273,
            "unit": "ns/iter",
            "extra": "iterations: 4096\ncpu: 211561.81640624997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 280513.23654524743,
            "unit": "ns/iter",
            "extra": "iterations: 3103\ncpu: 280510.7315501126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 345421.2475961326,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 345414.3028846156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 412965.7784629526,
            "unit": "ns/iter",
            "extra": "iterations: 2108\ncpu: 412954.5540796963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 479394.3393938946,
            "unit": "ns/iter",
            "extra": "iterations: 1815\ncpu: 479389.1460055093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 546672.324341304,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 546659.9121706401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6436.486096655984,
            "unit": "ns/iter",
            "extra": "iterations: 101846\ncpu: 6436.347033756841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5478.283293922375,
            "unit": "ns/iter",
            "extra": "iterations: 128139\ncpu: 5478.2369146005485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5411.734187517709,
            "unit": "ns/iter",
            "extra": "iterations: 129012\ncpu: 5411.73611757046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5429.993239943123,
            "unit": "ns/iter",
            "extra": "iterations: 128993\ncpu: 5429.869837898182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9693.227942806181,
            "unit": "ns/iter",
            "extra": "iterations: 72176\ncpu: 9693.241520727104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34985.84374337731,
            "unit": "ns/iter",
            "extra": "iterations: 23583\ncpu: 34984.50578806768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 135738.6146511884,
            "unit": "ns/iter",
            "extra": "iterations: 6293\ncpu: 135737.0888288576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 111219.97504548471,
            "unit": "ns/iter",
            "extra": "iterations: 7694\ncpu: 111214.37483753577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 110571.01737101076,
            "unit": "ns/iter",
            "extra": "iterations: 7714\ncpu: 110568.45994296088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 113017.92391592935,
            "unit": "ns/iter",
            "extra": "iterations: 7518\ncpu: 113013.99308326664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 292338.625127675,
            "unit": "ns/iter",
            "extra": "iterations: 2937\ncpu: 292326.6939053452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2240491.362318906,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2240420.0483091795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1825310.8722984367,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1825195.6777996037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1810175.9999999364,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1810055.6201550397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1815835.692759239,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1815810.3718199579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1096184.0934911626,
            "unit": "ns/iter",
            "extra": "iterations: 845\ncpu: 1096137.041420119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1768745.2685714518,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1768665.3333333337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7476086.379999743,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7475728.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4200167.8190047955,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4200059.276018103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9231378.215517828,
            "unit": "ns/iter",
            "extra": "iterations: 116\ncpu: 9230941.379310345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34743.51241562937,
            "unit": "ns/iter",
            "extra": "iterations: 24002\ncpu: 34741.47571035755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 137210.05620154773,
            "unit": "ns/iter",
            "extra": "iterations: 6192\ncpu: 137202.72932816527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 112055.00695812116,
            "unit": "ns/iter",
            "extra": "iterations: 7617\ncpu: 112051.47695943297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 112616.4394340069,
            "unit": "ns/iter",
            "extra": "iterations: 7562\ncpu: 112612.2851097594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 114927.20027062905,
            "unit": "ns/iter",
            "extra": "iterations: 7390\ncpu: 114916.711772665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 296789.56171546766,
            "unit": "ns/iter",
            "extra": "iterations: 2868\ncpu: 296770.3626220384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2270178.4195122654,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2270126.09756098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1847251.0398406445,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1847179.6812748914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1818016.6399216875,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1817924.0704500864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1843058.8871285748,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1842993.2673267368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1134769.4271961986,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 1134022.2623345337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1794368.0444874167,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1794315.6673114176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7588950.339999202,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7588478.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4131532.685840614,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4131395.1327433474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33829.956131726816,
            "unit": "ns/iter",
            "extra": "iterations: 24414\ncpu: 33829.081674449044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 139885.57212873787,
            "unit": "ns/iter",
            "extra": "iterations: 6121\ncpu: 139880.39536023544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 109166.36386834152,
            "unit": "ns/iter",
            "extra": "iterations: 7838\ncpu: 109165.37381985127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 111404.85416122836,
            "unit": "ns/iter",
            "extra": "iterations: 7666\ncpu: 111402.6871901907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 113202.02106238612,
            "unit": "ns/iter",
            "extra": "iterations: 7549\ncpu: 113202.00026493578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 299110.81431995955,
            "unit": "ns/iter",
            "extra": "iterations: 2919\ncpu: 299098.047276465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2264970.351219323,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2264909.024390249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1849609.6361830235,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1849570.9741550782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1827496.6463655257,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1827445.579567783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1842746.5623762875,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1842667.9207920805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1109103.6749999851,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 1109076.7857142834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1798204.569498066,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1798159.845559852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3343.4281820047445,
            "unit": "ns/iter",
            "extra": "iterations: 209467\ncpu: 3343.3242467787386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17203.759959670137,
            "unit": "ns/iter",
            "extra": "iterations: 40664\ncpu: 17203.07643124149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13047.281402814504,
            "unit": "ns/iter",
            "extra": "iterations: 53578\ncpu: 13046.636679233963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13118.934311070774,
            "unit": "ns/iter",
            "extra": "iterations: 53525\ncpu: 13118.256889304086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11125.497164371554,
            "unit": "ns/iter",
            "extra": "iterations: 62949\ncpu: 11125.20929641456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68802.39674876576,
            "unit": "ns/iter",
            "extra": "iterations: 10150\ncpu: 68800.65024630557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 144932.3935003131,
            "unit": "ns/iter",
            "extra": "iterations: 4831\ncpu: 144929.786793624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39331.94482487406,
            "unit": "ns/iter",
            "extra": "iterations: 17816\ncpu: 39331.64571171992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38841.15378644848,
            "unit": "ns/iter",
            "extra": "iterations: 18038\ncpu: 38840.6475218981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39151.70388566385,
            "unit": "ns/iter",
            "extra": "iterations: 17912\ncpu: 39151.45712371597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 76349.05129606764,
            "unit": "ns/iter",
            "extra": "iterations: 9143\ncpu: 76346.88832987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70489.1037678838,
            "unit": "ns/iter",
            "extra": "iterations: 9926\ncpu: 70488.49486197984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21210.68539837822,
            "unit": "ns/iter",
            "extra": "iterations: 32921\ncpu: 21210.178913155774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102186.9966374305,
            "unit": "ns/iter",
            "extra": "iterations: 6840\ncpu: 102182.96783625531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81924.75447631316,
            "unit": "ns/iter",
            "extra": "iterations: 8545\ncpu: 81919.30953774154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81092.398309986,
            "unit": "ns/iter",
            "extra": "iterations: 8639\ncpu: 81092.42967936129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81264.36193466341,
            "unit": "ns/iter",
            "extra": "iterations: 8601\ncpu: 81260.88826880696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 159875.036529691,
            "unit": "ns/iter",
            "extra": "iterations: 4380\ncpu: 159870.9589041105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 648871.7857142709,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 648845.2690167001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 549887.4245283636,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 549866.1949685569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 542771.0706521475,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 542766.3043478273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 544019.069767439,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 543996.9767441949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 362101.0393171217,
            "unit": "ns/iter",
            "extra": "iterations: 1933\ncpu: 362101.18986032205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 535517.8692660162,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 535494.0366972443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21669.010293935116,
            "unit": "ns/iter",
            "extra": "iterations: 32252\ncpu: 21668.28413741797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 101787.94116791185,
            "unit": "ns/iter",
            "extra": "iterations: 6867\ncpu: 101785.5395369168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 81624.40517140734,
            "unit": "ns/iter",
            "extra": "iterations: 8547\ncpu: 81623.56382356331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80914.5938991656,
            "unit": "ns/iter",
            "extra": "iterations: 8589\ncpu: 80913.20293398535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82170.95265994949,
            "unit": "ns/iter",
            "extra": "iterations: 8534\ncpu: 82170.23670025871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 159669.72025575943,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 159667.66385019492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 643194.0967742424,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 643172.4423963157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 546962.5455975551,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 546956.6823899306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 541966.9611197587,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 541958.08709176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 540574.9132456009,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 540569.9457784597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 362607.26283048524,
            "unit": "ns/iter",
            "extra": "iterations: 1929\ncpu: 362599.01503369835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 532792.2151030337,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 532786.5751334954 ns\nthreads: 1"
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
        "date": 1705777747866,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8223.490666260435,
            "unit": "ns/iter",
            "extra": "iterations: 85282\ncpu: 8223.32379634624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73743.16585704019,
            "unit": "ns/iter",
            "extra": "iterations: 11528\ncpu: 73740.28452463567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 141381.41066235813,
            "unit": "ns/iter",
            "extra": "iterations: 6190\ncpu: 141379.886914378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 208086.32671134832,
            "unit": "ns/iter",
            "extra": "iterations: 4178\ncpu: 208079.89468645284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 276532.7648743399,
            "unit": "ns/iter",
            "extra": "iterations: 3143\ncpu: 276531.7849188673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 337681.76029817376,
            "unit": "ns/iter",
            "extra": "iterations: 2549\ncpu: 337664.8489603769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 404110.43522829545,
            "unit": "ns/iter",
            "extra": "iterations: 2146\ncpu: 404083.5507921713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 469304.3955746989,
            "unit": "ns/iter",
            "extra": "iterations: 1853\ncpu: 469298.4889368587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 535853.3041872473,
            "unit": "ns/iter",
            "extra": "iterations: 1624\ncpu: 535831.9581280785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6414.276622437084,
            "unit": "ns/iter",
            "extra": "iterations: 109203\ncpu: 6413.875992417782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5411.998634926079,
            "unit": "ns/iter",
            "extra": "iterations: 125268\ncpu: 5411.62308011624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5501.556628076682,
            "unit": "ns/iter",
            "extra": "iterations: 130430\ncpu: 5501.542589894964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5371.660534216413,
            "unit": "ns/iter",
            "extra": "iterations: 129910\ncpu: 5371.648833808031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9532.625795572792,
            "unit": "ns/iter",
            "extra": "iterations: 73532\ncpu: 9532.321982266234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34375.03004309846,
            "unit": "ns/iter",
            "extra": "iterations: 23899\ncpu: 34374.216494413995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 133422.10855982688,
            "unit": "ns/iter",
            "extra": "iterations: 6402\ncpu: 133416.41674476705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 110314.83045203419,
            "unit": "ns/iter",
            "extra": "iterations: 7809\ncpu: 110314.49609425041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 109222.79607443562,
            "unit": "ns/iter",
            "extra": "iterations: 7846\ncpu: 109211.33061432582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 108894.51594794658,
            "unit": "ns/iter",
            "extra": "iterations: 7838\ncpu: 108886.56545037006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 284298.59980366006,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 284273.52748691145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2266804.2481751805,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2266662.0437956257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1831916.4940713532,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1831713.2411067144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1828463.2303149693,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1828443.307086611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1818046.5138340623,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1817987.7470355693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1087792.131455442,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 1087789.3192488241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1784324.4142580703,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1784258.7668593463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7392007.5900002755,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7391794.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4146624.7410712396,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4146497.3214285774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9347484.198276011,
            "unit": "ns/iter",
            "extra": "iterations: 116\ncpu: 9347261.206896566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33114.451241209346,
            "unit": "ns/iter",
            "extra": "iterations: 24734\ncpu: 33112.31503193994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 135440.88280499002,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 135433.76560999014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 110778.40890846254,
            "unit": "ns/iter",
            "extra": "iterations: 7723\ncpu: 110778.09141525255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 113443.97490705391,
            "unit": "ns/iter",
            "extra": "iterations: 7532\ncpu: 113441.92777482752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 110492.08359415128,
            "unit": "ns/iter",
            "extra": "iterations: 7668\ncpu: 110490.06259780843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 293881.4413465133,
            "unit": "ns/iter",
            "extra": "iterations: 2941\ncpu: 293873.1043862618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2306553.1881442927,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2306545.876288668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1853935.6352705513,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1853877.9559118315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1860424.8685258506,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1860363.545816737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1850956.3980196256,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1850906.9306930704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1122253.0312124945,
            "unit": "ns/iter",
            "extra": "iterations: 833\ncpu: 1122232.0528211296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1802150.8019417312,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1802025.0485436916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7471291.540000494,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7470883.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4177044.577777956,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4176884.4444444156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32765.929051620198,
            "unit": "ns/iter",
            "extra": "iterations: 24990\ncpu: 32765.82633053222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 134553.84669923567,
            "unit": "ns/iter",
            "extra": "iterations: 6347\ncpu: 134547.17189223258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 108669.13404554038,
            "unit": "ns/iter",
            "extra": "iterations: 7863\ncpu: 108666.5903599139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 110879.37155185058,
            "unit": "ns/iter",
            "extra": "iterations: 7649\ncpu: 110877.05582429077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 109580.4600667617,
            "unit": "ns/iter",
            "extra": "iterations: 7788\ncpu: 109580.08474576274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 282664.57638208184,
            "unit": "ns/iter",
            "extra": "iterations: 3057\ncpu: 282651.3575400716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2288689.727941025,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2288662.009803924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1842747.1769384092,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1842693.8369781221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1845694.2226641066,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1845652.2862823033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1830526.8913044522,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1830382.4110671885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1108788.6784870606,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1108707.5650118238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1795931.4584138158,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1795802.707930365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3288.3872597303266,
            "unit": "ns/iter",
            "extra": "iterations: 213198\ncpu: 3288.0561731348184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17146.182947445413,
            "unit": "ns/iter",
            "extra": "iterations: 40815\ncpu: 17144.32684062235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13009.397453532185,
            "unit": "ns/iter",
            "extra": "iterations: 53800\ncpu: 13008.507434944288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13250.13760112139,
            "unit": "ns/iter",
            "extra": "iterations: 52783\ncpu: 13249.625826497111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11010.386498832064,
            "unit": "ns/iter",
            "extra": "iterations: 63713\ncpu: 11009.99168144647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67489.7896863581,
            "unit": "ns/iter",
            "extra": "iterations: 10394\ncpu: 67484.4525687896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 149318.121405755,
            "unit": "ns/iter",
            "extra": "iterations: 4695\ncpu: 149299.1054313101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38502.051549789634,
            "unit": "ns/iter",
            "extra": "iterations: 18196\ncpu: 38498.807430204324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38377.6716401573,
            "unit": "ns/iter",
            "extra": "iterations: 18297\ncpu: 38375.11613925804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38500.15098178951,
            "unit": "ns/iter",
            "extra": "iterations: 18181\ncpu: 38498.850448270256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 78403.1954331709,
            "unit": "ns/iter",
            "extra": "iterations: 8934\ncpu: 78395.82493843745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69216.30871754354,
            "unit": "ns/iter",
            "extra": "iterations: 10129\ncpu: 69209.80353440685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20764.494612166138,
            "unit": "ns/iter",
            "extra": "iterations: 33687\ncpu: 20762.994627007098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 100971.79521889931,
            "unit": "ns/iter",
            "extra": "iterations: 6944\ncpu: 100966.15783410173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 78971.46524003906,
            "unit": "ns/iter",
            "extra": "iterations: 8832\ncpu: 78967.79891304346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80738.96287756546,
            "unit": "ns/iter",
            "extra": "iterations: 8674\ncpu: 80734.5400046112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 79945.50865998067,
            "unit": "ns/iter",
            "extra": "iterations: 8776\ncpu: 79939.35733819508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 154966.72823920942,
            "unit": "ns/iter",
            "extra": "iterations: 4515\ncpu: 154964.14174972207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 643025.5262189336,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 643009.8436062642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 546583.5382811867,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 546560.390625006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 543157.0881671044,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 543142.3820572331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 546882.641686208,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 546834.0359094432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 359238.9083036383,
            "unit": "ns/iter",
            "extra": "iterations: 1963\ncpu: 359237.9011716774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 533046.8025816296,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 533016.856492028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20777.239832697458,
            "unit": "ns/iter",
            "extra": "iterations: 33711\ncpu: 20776.369730948238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 100501.18685418731,
            "unit": "ns/iter",
            "extra": "iterations: 6968\ncpu: 100499.95694603903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79679.21244586456,
            "unit": "ns/iter",
            "extra": "iterations: 8774\ncpu: 79675.48438568522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79853.7049367221,
            "unit": "ns/iter",
            "extra": "iterations: 8771\ncpu: 79853.58568008318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 80626.1522089236,
            "unit": "ns/iter",
            "extra": "iterations: 8692\ncpu: 80621.87068568805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 153393.4302274776,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 153390.2230971154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 641778.0225564272,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 641776.0338345917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 546348.196708473,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 546320.6896551802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 537088.6251920918,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 537087.4807987614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 540853.9305019539,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 540836.2934362951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 359013.310574964,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 358999.4353182713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 531551.4822104254,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 531538.380015132 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}