window.BENCHMARK_DATA = {
  "lastUpdate": 1702489581550,
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
      }
    ]
  }
}