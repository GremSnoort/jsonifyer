window.BENCHMARK_DATA = {
  "lastUpdate": 1702503264374,
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
      }
    ]
  }
}