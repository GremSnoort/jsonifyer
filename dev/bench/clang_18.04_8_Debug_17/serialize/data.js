window.BENCHMARK_DATA = {
  "lastUpdate": 1702492207296,
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
      }
    ]
  }
}