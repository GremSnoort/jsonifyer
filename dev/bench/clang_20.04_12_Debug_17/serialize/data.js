window.BENCHMARK_DATA = {
  "lastUpdate": 1702394277182,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-12 20.04 Debug c++-17": [
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
        "date": 1702394266267,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8077.004541830194,
            "unit": "ns/iter",
            "extra": "iterations: 86529\ncpu: 8076.769637924857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99191.03968989132,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 99187.81532052765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192784.10182537392,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 192768.04486474599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 287308.2015247091,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 287302.4527676499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 373434.4260148455,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 373415.97555652575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 465137.6899141309,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 465103.540772532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 556667.3971813038,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 556641.1915438824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 520093.3390000273,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520029.0999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 595954.4060000326,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595935.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6166.259824981485,
            "unit": "ns/iter",
            "extra": "iterations: 113588\ncpu: 6166.133746522507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5064.6048341601845,
            "unit": "ns/iter",
            "extra": "iterations: 138266\ncpu: 5064.283337913864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4998.701387597874,
            "unit": "ns/iter",
            "extra": "iterations: 139810\ncpu: 4998.284815106219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5171.321241565983,
            "unit": "ns/iter",
            "extra": "iterations: 135023\ncpu: 5171.258230079323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8979.628222871743,
            "unit": "ns/iter",
            "extra": "iterations: 78036\ncpu: 8979.340304474865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48746.76594357148,
            "unit": "ns/iter",
            "extra": "iterations: 16872\ncpu: 48744.073020388896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 205323.3870348137,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 205309.0516206484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 166194.8553092103,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 166186.85336444952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 164662.12125315363,
            "unit": "ns/iter",
            "extra": "iterations: 5171\ncpu: 164655.28911235763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168377.85641125156,
            "unit": "ns/iter",
            "extra": "iterations: 5077\ncpu: 168370.12014969465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 357716.4327557508,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 357688.0363036304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3086811.1704917355,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3086566.2295082007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2543472.122282747,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2543360.8695652164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2524868.316353892,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2524672.9222520026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2558262.7300275643,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2558096.694214876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1509403.8260162333,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1509357.398373986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2465249.2770448974,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2465232.717678104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10648775.409999872,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10648377.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6111683.163398577,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6111328.104575183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12390010.01149335,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12389765.517241398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46992.863893168775,
            "unit": "ns/iter",
            "extra": "iterations: 17523\ncpu: 46991.02322661641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 210836.9972886404,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 210827.77914715308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 167568.37872840022,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 167561.42072213488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 170152.43292197553,
            "unit": "ns/iter",
            "extra": "iterations: 5024\ncpu: 170140.96337579505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 169582.59324054027,
            "unit": "ns/iter",
            "extra": "iterations: 5030\ncpu: 169570.27833001854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 375766.7248146807,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 375747.1870911474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3077189.865131321,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3077049.3421052634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2547267.6539511443,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2547092.6430517603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2552094.130790128,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2552019.3460490494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2564069.4328766996,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2563910.1369863166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1512976.4220779259,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1512962.0129870127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2480289.7002654937,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2480131.5649867393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10816416.530000199,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10815753.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5941702.645569404,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5941424.683544294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 46050.07500560663,
            "unit": "ns/iter",
            "extra": "iterations: 17852\ncpu: 46047.46807080446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 205797.30684007835,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 205792.75048169465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 166701.86763551115,
            "unit": "ns/iter",
            "extra": "iterations: 5092\ncpu: 166694.42262372453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 165802.6259512287,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 165801.014634147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 164979.52429270346,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 164969.17073170719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 362884.0242373245,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 362875.72085248644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3083738.419672209,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3083572.4590163915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2577677.380165404,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2577548.7603305723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2531298.9291554103,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2531240.0544959106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2565992.4547946425,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2565827.671232875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1519928.7056909853,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1519883.0894308959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2478733.625329762,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2478627.704485483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2860.682442250089,
            "unit": "ns/iter",
            "extra": "iterations: 242252\ncpu: 2860.621996928834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21333.435308529442,
            "unit": "ns/iter",
            "extra": "iterations: 32655\ncpu: 21332.74843056191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16233.999860934935,
            "unit": "ns/iter",
            "extra": "iterations: 43146\ncpu: 16234.075001158773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16884.288175674334,
            "unit": "ns/iter",
            "extra": "iterations: 41440\ncpu: 16884.005791505777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12696.315032987886,
            "unit": "ns/iter",
            "extra": "iterations: 55172\ncpu: 12696.306097295708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86430.40280857359,
            "unit": "ns/iter",
            "extra": "iterations: 8118\ncpu: 86429.71175166275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 187724.13122655998,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 187721.8264595632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48510.76331648527,
            "unit": "ns/iter",
            "extra": "iterations: 14437\ncpu: 48508.69986839365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48135.97390232905,
            "unit": "ns/iter",
            "extra": "iterations: 14599\ncpu: 48135.6325775742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48868.231494413565,
            "unit": "ns/iter",
            "extra": "iterations: 14320\ncpu: 48868.149441341346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 103271.28983152148,
            "unit": "ns/iter",
            "extra": "iterations: 6766\ncpu: 103271.62281998144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91745.22745766968,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 91744.33652710226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25344.41841914451,
            "unit": "ns/iter",
            "extra": "iterations: 27580\ncpu: 25344.03915881047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 121647.37347082546,
            "unit": "ns/iter",
            "extra": "iterations: 5722\ncpu: 121644.86193638596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 98872.91485762001,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 98870.5384832238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 98003.4667134844,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 97999.63483146073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98636.53026667608,
            "unit": "ns/iter",
            "extra": "iterations: 7087\ncpu: 98632.12925074123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 179865.39276551022,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 179864.28937916813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 820481.7546948588,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 820473.0046948395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 700966.4006024612,
            "unit": "ns/iter",
            "extra": "iterations: 996\ncpu: 700947.4899598422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 701554.8351648374,
            "unit": "ns/iter",
            "extra": "iterations: 1001\ncpu: 701552.5474525379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 711014.5433231364,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 710986.4424057015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 442707.2564750415,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 442704.10612761084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683533.7772326028,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 683517.4681059871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 25310.46055722298,
            "unit": "ns/iter",
            "extra": "iterations: 27673\ncpu: 25310.519278719294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 122266.81004022679,
            "unit": "ns/iter",
            "extra": "iterations: 5717\ncpu: 122265.01661710787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 99171.14593368176,
            "unit": "ns/iter",
            "extra": "iterations: 7058\ncpu: 99167.49787475179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 98234.4771993943,
            "unit": "ns/iter",
            "extra": "iterations: 7127\ncpu: 98230.54581170192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 100332.23074721351,
            "unit": "ns/iter",
            "extra": "iterations: 6986\ncpu: 100323.57572287293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 177663.57131978887,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 177663.19796954116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 821471.7353630115,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 821428.1030444861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 699090.9879999663,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 699059.7000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 697319.6766169063,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 697281.0945273751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 710017.3506096908,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 709959.9593495851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 448027.93286449485,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 447991.1125319682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 686758.6575609916,
            "unit": "ns/iter",
            "extra": "iterations: 1025\ncpu: 686696.8780487868 ns\nthreads: 1"
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
        "date": 1702394266267,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8077.004541830194,
            "unit": "ns/iter",
            "extra": "iterations: 86529\ncpu: 8076.769637924857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99191.03968989132,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 99187.81532052765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192784.10182537392,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 192768.04486474599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 287308.2015247091,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 287302.4527676499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 373434.4260148455,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 373415.97555652575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 465137.6899141309,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 465103.540772532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 556667.3971813038,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 556641.1915438824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 520093.3390000273,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520029.0999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 595954.4060000326,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595935.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6166.259824981485,
            "unit": "ns/iter",
            "extra": "iterations: 113588\ncpu: 6166.133746522507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5064.6048341601845,
            "unit": "ns/iter",
            "extra": "iterations: 138266\ncpu: 5064.283337913864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4998.701387597874,
            "unit": "ns/iter",
            "extra": "iterations: 139810\ncpu: 4998.284815106219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5171.321241565983,
            "unit": "ns/iter",
            "extra": "iterations: 135023\ncpu: 5171.258230079323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8979.628222871743,
            "unit": "ns/iter",
            "extra": "iterations: 78036\ncpu: 8979.340304474865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48746.76594357148,
            "unit": "ns/iter",
            "extra": "iterations: 16872\ncpu: 48744.073020388896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 205323.3870348137,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 205309.0516206484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 166194.8553092103,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 166186.85336444952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 164662.12125315363,
            "unit": "ns/iter",
            "extra": "iterations: 5171\ncpu: 164655.28911235763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168377.85641125156,
            "unit": "ns/iter",
            "extra": "iterations: 5077\ncpu: 168370.12014969465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 357716.4327557508,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 357688.0363036304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3086811.1704917355,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3086566.2295082007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2543472.122282747,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2543360.8695652164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2524868.316353892,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2524672.9222520026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2558262.7300275643,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2558096.694214876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1509403.8260162333,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1509357.398373986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2465249.2770448974,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2465232.717678104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10648775.409999872,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10648377.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6111683.163398577,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6111328.104575183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12390010.01149335,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12389765.517241398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46992.863893168775,
            "unit": "ns/iter",
            "extra": "iterations: 17523\ncpu: 46991.02322661641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 210836.9972886404,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 210827.77914715308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 167568.37872840022,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 167561.42072213488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 170152.43292197553,
            "unit": "ns/iter",
            "extra": "iterations: 5024\ncpu: 170140.96337579505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 169582.59324054027,
            "unit": "ns/iter",
            "extra": "iterations: 5030\ncpu: 169570.27833001854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 375766.7248146807,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 375747.1870911474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3077189.865131321,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3077049.3421052634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2547267.6539511443,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2547092.6430517603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2552094.130790128,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2552019.3460490494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2564069.4328766996,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2563910.1369863166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1512976.4220779259,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1512962.0129870127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2480289.7002654937,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2480131.5649867393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10816416.530000199,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10815753.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5941702.645569404,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5941424.683544294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 46050.07500560663,
            "unit": "ns/iter",
            "extra": "iterations: 17852\ncpu: 46047.46807080446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 205797.30684007835,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 205792.75048169465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 166701.86763551115,
            "unit": "ns/iter",
            "extra": "iterations: 5092\ncpu: 166694.42262372453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 165802.6259512287,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 165801.014634147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 164979.52429270346,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 164969.17073170719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 362884.0242373245,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 362875.72085248644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3083738.419672209,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3083572.4590163915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2577677.380165404,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2577548.7603305723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2531298.9291554103,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2531240.0544959106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2565992.4547946425,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2565827.671232875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1519928.7056909853,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1519883.0894308959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2478733.625329762,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2478627.704485483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2860.682442250089,
            "unit": "ns/iter",
            "extra": "iterations: 242252\ncpu: 2860.621996928834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21333.435308529442,
            "unit": "ns/iter",
            "extra": "iterations: 32655\ncpu: 21332.74843056191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16233.999860934935,
            "unit": "ns/iter",
            "extra": "iterations: 43146\ncpu: 16234.075001158773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16884.288175674334,
            "unit": "ns/iter",
            "extra": "iterations: 41440\ncpu: 16884.005791505777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12696.315032987886,
            "unit": "ns/iter",
            "extra": "iterations: 55172\ncpu: 12696.306097295708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86430.40280857359,
            "unit": "ns/iter",
            "extra": "iterations: 8118\ncpu: 86429.71175166275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 187724.13122655998,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 187721.8264595632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48510.76331648527,
            "unit": "ns/iter",
            "extra": "iterations: 14437\ncpu: 48508.69986839365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48135.97390232905,
            "unit": "ns/iter",
            "extra": "iterations: 14599\ncpu: 48135.6325775742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48868.231494413565,
            "unit": "ns/iter",
            "extra": "iterations: 14320\ncpu: 48868.149441341346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 103271.28983152148,
            "unit": "ns/iter",
            "extra": "iterations: 6766\ncpu: 103271.62281998144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91745.22745766968,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 91744.33652710226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25344.41841914451,
            "unit": "ns/iter",
            "extra": "iterations: 27580\ncpu: 25344.03915881047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 121647.37347082546,
            "unit": "ns/iter",
            "extra": "iterations: 5722\ncpu: 121644.86193638596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 98872.91485762001,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 98870.5384832238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 98003.4667134844,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 97999.63483146073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98636.53026667608,
            "unit": "ns/iter",
            "extra": "iterations: 7087\ncpu: 98632.12925074123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 179865.39276551022,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 179864.28937916813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 820481.7546948588,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 820473.0046948395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 700966.4006024612,
            "unit": "ns/iter",
            "extra": "iterations: 996\ncpu: 700947.4899598422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 701554.8351648374,
            "unit": "ns/iter",
            "extra": "iterations: 1001\ncpu: 701552.5474525379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 711014.5433231364,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 710986.4424057015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 442707.2564750415,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 442704.10612761084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683533.7772326028,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 683517.4681059871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 25310.46055722298,
            "unit": "ns/iter",
            "extra": "iterations: 27673\ncpu: 25310.519278719294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 122266.81004022679,
            "unit": "ns/iter",
            "extra": "iterations: 5717\ncpu: 122265.01661710787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 99171.14593368176,
            "unit": "ns/iter",
            "extra": "iterations: 7058\ncpu: 99167.49787475179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 98234.4771993943,
            "unit": "ns/iter",
            "extra": "iterations: 7127\ncpu: 98230.54581170192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 100332.23074721351,
            "unit": "ns/iter",
            "extra": "iterations: 6986\ncpu: 100323.57572287293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 177663.57131978887,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 177663.19796954116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 821471.7353630115,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 821428.1030444861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 699090.9879999663,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 699059.7000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 697319.6766169063,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 697281.0945273751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 710017.3506096908,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 709959.9593495851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 448027.93286449485,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 447991.1125319682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 686758.6575609916,
            "unit": "ns/iter",
            "extra": "iterations: 1025\ncpu: 686696.8780487868 ns\nthreads: 1"
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
        "date": 1702394266267,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8077.004541830194,
            "unit": "ns/iter",
            "extra": "iterations: 86529\ncpu: 8076.769637924857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99191.03968989132,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 99187.81532052765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192784.10182537392,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 192768.04486474599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 287308.2015247091,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 287302.4527676499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 373434.4260148455,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 373415.97555652575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 465137.6899141309,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 465103.540772532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 556667.3971813038,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 556641.1915438824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 520093.3390000273,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520029.0999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 595954.4060000326,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595935.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6166.259824981485,
            "unit": "ns/iter",
            "extra": "iterations: 113588\ncpu: 6166.133746522507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5064.6048341601845,
            "unit": "ns/iter",
            "extra": "iterations: 138266\ncpu: 5064.283337913864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4998.701387597874,
            "unit": "ns/iter",
            "extra": "iterations: 139810\ncpu: 4998.284815106219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5171.321241565983,
            "unit": "ns/iter",
            "extra": "iterations: 135023\ncpu: 5171.258230079323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8979.628222871743,
            "unit": "ns/iter",
            "extra": "iterations: 78036\ncpu: 8979.340304474865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48746.76594357148,
            "unit": "ns/iter",
            "extra": "iterations: 16872\ncpu: 48744.073020388896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 205323.3870348137,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 205309.0516206484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 166194.8553092103,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 166186.85336444952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 164662.12125315363,
            "unit": "ns/iter",
            "extra": "iterations: 5171\ncpu: 164655.28911235763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168377.85641125156,
            "unit": "ns/iter",
            "extra": "iterations: 5077\ncpu: 168370.12014969465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 357716.4327557508,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 357688.0363036304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3086811.1704917355,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3086566.2295082007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2543472.122282747,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2543360.8695652164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2524868.316353892,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2524672.9222520026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2558262.7300275643,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2558096.694214876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1509403.8260162333,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1509357.398373986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2465249.2770448974,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2465232.717678104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10648775.409999872,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10648377.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6111683.163398577,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6111328.104575183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12390010.01149335,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12389765.517241398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46992.863893168775,
            "unit": "ns/iter",
            "extra": "iterations: 17523\ncpu: 46991.02322661641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 210836.9972886404,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 210827.77914715308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 167568.37872840022,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 167561.42072213488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 170152.43292197553,
            "unit": "ns/iter",
            "extra": "iterations: 5024\ncpu: 170140.96337579505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 169582.59324054027,
            "unit": "ns/iter",
            "extra": "iterations: 5030\ncpu: 169570.27833001854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 375766.7248146807,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 375747.1870911474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3077189.865131321,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3077049.3421052634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2547267.6539511443,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2547092.6430517603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2552094.130790128,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2552019.3460490494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2564069.4328766996,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2563910.1369863166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1512976.4220779259,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1512962.0129870127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2480289.7002654937,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2480131.5649867393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10816416.530000199,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10815753.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5941702.645569404,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5941424.683544294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 46050.07500560663,
            "unit": "ns/iter",
            "extra": "iterations: 17852\ncpu: 46047.46807080446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 205797.30684007835,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 205792.75048169465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 166701.86763551115,
            "unit": "ns/iter",
            "extra": "iterations: 5092\ncpu: 166694.42262372453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 165802.6259512287,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 165801.014634147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 164979.52429270346,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 164969.17073170719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 362884.0242373245,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 362875.72085248644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3083738.419672209,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3083572.4590163915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2577677.380165404,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2577548.7603305723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2531298.9291554103,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2531240.0544959106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2565992.4547946425,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2565827.671232875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1519928.7056909853,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1519883.0894308959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2478733.625329762,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2478627.704485483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2860.682442250089,
            "unit": "ns/iter",
            "extra": "iterations: 242252\ncpu: 2860.621996928834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21333.435308529442,
            "unit": "ns/iter",
            "extra": "iterations: 32655\ncpu: 21332.74843056191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16233.999860934935,
            "unit": "ns/iter",
            "extra": "iterations: 43146\ncpu: 16234.075001158773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16884.288175674334,
            "unit": "ns/iter",
            "extra": "iterations: 41440\ncpu: 16884.005791505777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12696.315032987886,
            "unit": "ns/iter",
            "extra": "iterations: 55172\ncpu: 12696.306097295708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86430.40280857359,
            "unit": "ns/iter",
            "extra": "iterations: 8118\ncpu: 86429.71175166275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 187724.13122655998,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 187721.8264595632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48510.76331648527,
            "unit": "ns/iter",
            "extra": "iterations: 14437\ncpu: 48508.69986839365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48135.97390232905,
            "unit": "ns/iter",
            "extra": "iterations: 14599\ncpu: 48135.6325775742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48868.231494413565,
            "unit": "ns/iter",
            "extra": "iterations: 14320\ncpu: 48868.149441341346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 103271.28983152148,
            "unit": "ns/iter",
            "extra": "iterations: 6766\ncpu: 103271.62281998144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91745.22745766968,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 91744.33652710226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25344.41841914451,
            "unit": "ns/iter",
            "extra": "iterations: 27580\ncpu: 25344.03915881047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 121647.37347082546,
            "unit": "ns/iter",
            "extra": "iterations: 5722\ncpu: 121644.86193638596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 98872.91485762001,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 98870.5384832238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 98003.4667134844,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 97999.63483146073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98636.53026667608,
            "unit": "ns/iter",
            "extra": "iterations: 7087\ncpu: 98632.12925074123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 179865.39276551022,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 179864.28937916813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 820481.7546948588,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 820473.0046948395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 700966.4006024612,
            "unit": "ns/iter",
            "extra": "iterations: 996\ncpu: 700947.4899598422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 701554.8351648374,
            "unit": "ns/iter",
            "extra": "iterations: 1001\ncpu: 701552.5474525379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 711014.5433231364,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 710986.4424057015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 442707.2564750415,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 442704.10612761084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683533.7772326028,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 683517.4681059871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 25310.46055722298,
            "unit": "ns/iter",
            "extra": "iterations: 27673\ncpu: 25310.519278719294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 122266.81004022679,
            "unit": "ns/iter",
            "extra": "iterations: 5717\ncpu: 122265.01661710787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 99171.14593368176,
            "unit": "ns/iter",
            "extra": "iterations: 7058\ncpu: 99167.49787475179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 98234.4771993943,
            "unit": "ns/iter",
            "extra": "iterations: 7127\ncpu: 98230.54581170192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 100332.23074721351,
            "unit": "ns/iter",
            "extra": "iterations: 6986\ncpu: 100323.57572287293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 177663.57131978887,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 177663.19796954116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 821471.7353630115,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 821428.1030444861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 699090.9879999663,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 699059.7000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 697319.6766169063,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 697281.0945273751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 710017.3506096908,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 709959.9593495851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 448027.93286449485,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 447991.1125319682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 686758.6575609916,
            "unit": "ns/iter",
            "extra": "iterations: 1025\ncpu: 686696.8780487868 ns\nthreads: 1"
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
        "date": 1702394266267,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8077.004541830194,
            "unit": "ns/iter",
            "extra": "iterations: 86529\ncpu: 8076.769637924857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99191.03968989132,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 99187.81532052765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192784.10182537392,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 192768.04486474599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 287308.2015247091,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 287302.4527676499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 373434.4260148455,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 373415.97555652575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 465137.6899141309,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 465103.540772532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 556667.3971813038,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 556641.1915438824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 520093.3390000273,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520029.0999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 595954.4060000326,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595935.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6166.259824981485,
            "unit": "ns/iter",
            "extra": "iterations: 113588\ncpu: 6166.133746522507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5064.6048341601845,
            "unit": "ns/iter",
            "extra": "iterations: 138266\ncpu: 5064.283337913864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4998.701387597874,
            "unit": "ns/iter",
            "extra": "iterations: 139810\ncpu: 4998.284815106219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5171.321241565983,
            "unit": "ns/iter",
            "extra": "iterations: 135023\ncpu: 5171.258230079323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8979.628222871743,
            "unit": "ns/iter",
            "extra": "iterations: 78036\ncpu: 8979.340304474865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48746.76594357148,
            "unit": "ns/iter",
            "extra": "iterations: 16872\ncpu: 48744.073020388896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 205323.3870348137,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 205309.0516206484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 166194.8553092103,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 166186.85336444952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 164662.12125315363,
            "unit": "ns/iter",
            "extra": "iterations: 5171\ncpu: 164655.28911235763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168377.85641125156,
            "unit": "ns/iter",
            "extra": "iterations: 5077\ncpu: 168370.12014969465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 357716.4327557508,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 357688.0363036304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3086811.1704917355,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3086566.2295082007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2543472.122282747,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2543360.8695652164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2524868.316353892,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2524672.9222520026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2558262.7300275643,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2558096.694214876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1509403.8260162333,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1509357.398373986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2465249.2770448974,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2465232.717678104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10648775.409999872,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10648377.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6111683.163398577,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6111328.104575183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12390010.01149335,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12389765.517241398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46992.863893168775,
            "unit": "ns/iter",
            "extra": "iterations: 17523\ncpu: 46991.02322661641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 210836.9972886404,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 210827.77914715308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 167568.37872840022,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 167561.42072213488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 170152.43292197553,
            "unit": "ns/iter",
            "extra": "iterations: 5024\ncpu: 170140.96337579505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 169582.59324054027,
            "unit": "ns/iter",
            "extra": "iterations: 5030\ncpu: 169570.27833001854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 375766.7248146807,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 375747.1870911474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3077189.865131321,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3077049.3421052634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2547267.6539511443,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2547092.6430517603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2552094.130790128,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2552019.3460490494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2564069.4328766996,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2563910.1369863166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1512976.4220779259,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1512962.0129870127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2480289.7002654937,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2480131.5649867393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10816416.530000199,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10815753.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5941702.645569404,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5941424.683544294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 46050.07500560663,
            "unit": "ns/iter",
            "extra": "iterations: 17852\ncpu: 46047.46807080446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 205797.30684007835,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 205792.75048169465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 166701.86763551115,
            "unit": "ns/iter",
            "extra": "iterations: 5092\ncpu: 166694.42262372453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 165802.6259512287,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 165801.014634147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 164979.52429270346,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 164969.17073170719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 362884.0242373245,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 362875.72085248644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3083738.419672209,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3083572.4590163915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2577677.380165404,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2577548.7603305723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2531298.9291554103,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2531240.0544959106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2565992.4547946425,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2565827.671232875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1519928.7056909853,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1519883.0894308959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2478733.625329762,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2478627.704485483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2860.682442250089,
            "unit": "ns/iter",
            "extra": "iterations: 242252\ncpu: 2860.621996928834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21333.435308529442,
            "unit": "ns/iter",
            "extra": "iterations: 32655\ncpu: 21332.74843056191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16233.999860934935,
            "unit": "ns/iter",
            "extra": "iterations: 43146\ncpu: 16234.075001158773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16884.288175674334,
            "unit": "ns/iter",
            "extra": "iterations: 41440\ncpu: 16884.005791505777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12696.315032987886,
            "unit": "ns/iter",
            "extra": "iterations: 55172\ncpu: 12696.306097295708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86430.40280857359,
            "unit": "ns/iter",
            "extra": "iterations: 8118\ncpu: 86429.71175166275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 187724.13122655998,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 187721.8264595632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48510.76331648527,
            "unit": "ns/iter",
            "extra": "iterations: 14437\ncpu: 48508.69986839365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48135.97390232905,
            "unit": "ns/iter",
            "extra": "iterations: 14599\ncpu: 48135.6325775742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48868.231494413565,
            "unit": "ns/iter",
            "extra": "iterations: 14320\ncpu: 48868.149441341346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 103271.28983152148,
            "unit": "ns/iter",
            "extra": "iterations: 6766\ncpu: 103271.62281998144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91745.22745766968,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 91744.33652710226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25344.41841914451,
            "unit": "ns/iter",
            "extra": "iterations: 27580\ncpu: 25344.03915881047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 121647.37347082546,
            "unit": "ns/iter",
            "extra": "iterations: 5722\ncpu: 121644.86193638596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 98872.91485762001,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 98870.5384832238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 98003.4667134844,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 97999.63483146073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98636.53026667608,
            "unit": "ns/iter",
            "extra": "iterations: 7087\ncpu: 98632.12925074123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 179865.39276551022,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 179864.28937916813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 820481.7546948588,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 820473.0046948395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 700966.4006024612,
            "unit": "ns/iter",
            "extra": "iterations: 996\ncpu: 700947.4899598422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 701554.8351648374,
            "unit": "ns/iter",
            "extra": "iterations: 1001\ncpu: 701552.5474525379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 711014.5433231364,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 710986.4424057015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 442707.2564750415,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 442704.10612761084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683533.7772326028,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 683517.4681059871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 25310.46055722298,
            "unit": "ns/iter",
            "extra": "iterations: 27673\ncpu: 25310.519278719294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 122266.81004022679,
            "unit": "ns/iter",
            "extra": "iterations: 5717\ncpu: 122265.01661710787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 99171.14593368176,
            "unit": "ns/iter",
            "extra": "iterations: 7058\ncpu: 99167.49787475179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 98234.4771993943,
            "unit": "ns/iter",
            "extra": "iterations: 7127\ncpu: 98230.54581170192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 100332.23074721351,
            "unit": "ns/iter",
            "extra": "iterations: 6986\ncpu: 100323.57572287293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 177663.57131978887,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 177663.19796954116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 821471.7353630115,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 821428.1030444861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 699090.9879999663,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 699059.7000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 697319.6766169063,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 697281.0945273751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 710017.3506096908,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 709959.9593495851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 448027.93286449485,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 447991.1125319682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 686758.6575609916,
            "unit": "ns/iter",
            "extra": "iterations: 1025\ncpu: 686696.8780487868 ns\nthreads: 1"
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
        "date": 1702394266267,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8077.004541830194,
            "unit": "ns/iter",
            "extra": "iterations: 86529\ncpu: 8076.769637924857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99191.03968989132,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 99187.81532052765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192784.10182537392,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 192768.04486474599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 287308.2015247091,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 287302.4527676499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 373434.4260148455,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 373415.97555652575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 465137.6899141309,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 465103.540772532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 556667.3971813038,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 556641.1915438824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 520093.3390000273,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520029.0999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 595954.4060000326,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595935.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6166.259824981485,
            "unit": "ns/iter",
            "extra": "iterations: 113588\ncpu: 6166.133746522507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5064.6048341601845,
            "unit": "ns/iter",
            "extra": "iterations: 138266\ncpu: 5064.283337913864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4998.701387597874,
            "unit": "ns/iter",
            "extra": "iterations: 139810\ncpu: 4998.284815106219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5171.321241565983,
            "unit": "ns/iter",
            "extra": "iterations: 135023\ncpu: 5171.258230079323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8979.628222871743,
            "unit": "ns/iter",
            "extra": "iterations: 78036\ncpu: 8979.340304474865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48746.76594357148,
            "unit": "ns/iter",
            "extra": "iterations: 16872\ncpu: 48744.073020388896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 205323.3870348137,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 205309.0516206484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 166194.8553092103,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 166186.85336444952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 164662.12125315363,
            "unit": "ns/iter",
            "extra": "iterations: 5171\ncpu: 164655.28911235763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168377.85641125156,
            "unit": "ns/iter",
            "extra": "iterations: 5077\ncpu: 168370.12014969465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 357716.4327557508,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 357688.0363036304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3086811.1704917355,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3086566.2295082007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2543472.122282747,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2543360.8695652164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2524868.316353892,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2524672.9222520026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2558262.7300275643,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2558096.694214876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1509403.8260162333,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1509357.398373986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2465249.2770448974,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2465232.717678104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10648775.409999872,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10648377.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6111683.163398577,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6111328.104575183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12390010.01149335,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12389765.517241398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46992.863893168775,
            "unit": "ns/iter",
            "extra": "iterations: 17523\ncpu: 46991.02322661641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 210836.9972886404,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 210827.77914715308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 167568.37872840022,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 167561.42072213488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 170152.43292197553,
            "unit": "ns/iter",
            "extra": "iterations: 5024\ncpu: 170140.96337579505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 169582.59324054027,
            "unit": "ns/iter",
            "extra": "iterations: 5030\ncpu: 169570.27833001854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 375766.7248146807,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 375747.1870911474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3077189.865131321,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3077049.3421052634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2547267.6539511443,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2547092.6430517603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2552094.130790128,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2552019.3460490494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2564069.4328766996,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2563910.1369863166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1512976.4220779259,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1512962.0129870127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2480289.7002654937,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2480131.5649867393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10816416.530000199,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10815753.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5941702.645569404,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5941424.683544294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 46050.07500560663,
            "unit": "ns/iter",
            "extra": "iterations: 17852\ncpu: 46047.46807080446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 205797.30684007835,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 205792.75048169465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 166701.86763551115,
            "unit": "ns/iter",
            "extra": "iterations: 5092\ncpu: 166694.42262372453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 165802.6259512287,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 165801.014634147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 164979.52429270346,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 164969.17073170719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 362884.0242373245,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 362875.72085248644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3083738.419672209,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3083572.4590163915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2577677.380165404,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2577548.7603305723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2531298.9291554103,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2531240.0544959106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2565992.4547946425,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2565827.671232875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1519928.7056909853,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1519883.0894308959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2478733.625329762,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2478627.704485483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2860.682442250089,
            "unit": "ns/iter",
            "extra": "iterations: 242252\ncpu: 2860.621996928834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21333.435308529442,
            "unit": "ns/iter",
            "extra": "iterations: 32655\ncpu: 21332.74843056191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16233.999860934935,
            "unit": "ns/iter",
            "extra": "iterations: 43146\ncpu: 16234.075001158773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16884.288175674334,
            "unit": "ns/iter",
            "extra": "iterations: 41440\ncpu: 16884.005791505777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12696.315032987886,
            "unit": "ns/iter",
            "extra": "iterations: 55172\ncpu: 12696.306097295708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86430.40280857359,
            "unit": "ns/iter",
            "extra": "iterations: 8118\ncpu: 86429.71175166275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 187724.13122655998,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 187721.8264595632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48510.76331648527,
            "unit": "ns/iter",
            "extra": "iterations: 14437\ncpu: 48508.69986839365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48135.97390232905,
            "unit": "ns/iter",
            "extra": "iterations: 14599\ncpu: 48135.6325775742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48868.231494413565,
            "unit": "ns/iter",
            "extra": "iterations: 14320\ncpu: 48868.149441341346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 103271.28983152148,
            "unit": "ns/iter",
            "extra": "iterations: 6766\ncpu: 103271.62281998144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91745.22745766968,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 91744.33652710226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25344.41841914451,
            "unit": "ns/iter",
            "extra": "iterations: 27580\ncpu: 25344.03915881047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 121647.37347082546,
            "unit": "ns/iter",
            "extra": "iterations: 5722\ncpu: 121644.86193638596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 98872.91485762001,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 98870.5384832238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 98003.4667134844,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 97999.63483146073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98636.53026667608,
            "unit": "ns/iter",
            "extra": "iterations: 7087\ncpu: 98632.12925074123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 179865.39276551022,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 179864.28937916813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 820481.7546948588,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 820473.0046948395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 700966.4006024612,
            "unit": "ns/iter",
            "extra": "iterations: 996\ncpu: 700947.4899598422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 701554.8351648374,
            "unit": "ns/iter",
            "extra": "iterations: 1001\ncpu: 701552.5474525379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 711014.5433231364,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 710986.4424057015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 442707.2564750415,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 442704.10612761084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683533.7772326028,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 683517.4681059871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 25310.46055722298,
            "unit": "ns/iter",
            "extra": "iterations: 27673\ncpu: 25310.519278719294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 122266.81004022679,
            "unit": "ns/iter",
            "extra": "iterations: 5717\ncpu: 122265.01661710787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 99171.14593368176,
            "unit": "ns/iter",
            "extra": "iterations: 7058\ncpu: 99167.49787475179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 98234.4771993943,
            "unit": "ns/iter",
            "extra": "iterations: 7127\ncpu: 98230.54581170192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 100332.23074721351,
            "unit": "ns/iter",
            "extra": "iterations: 6986\ncpu: 100323.57572287293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 177663.57131978887,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 177663.19796954116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 821471.7353630115,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 821428.1030444861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 699090.9879999663,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 699059.7000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 697319.6766169063,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 697281.0945273751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 710017.3506096908,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 709959.9593495851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 448027.93286449485,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 447991.1125319682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 686758.6575609916,
            "unit": "ns/iter",
            "extra": "iterations: 1025\ncpu: 686696.8780487868 ns\nthreads: 1"
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
        "date": 1702394266267,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8077.004541830194,
            "unit": "ns/iter",
            "extra": "iterations: 86529\ncpu: 8076.769637924857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99191.03968989132,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 99187.81532052765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192784.10182537392,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 192768.04486474599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 287308.2015247091,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 287302.4527676499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 373434.4260148455,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 373415.97555652575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 465137.6899141309,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 465103.540772532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 556667.3971813038,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 556641.1915438824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 520093.3390000273,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520029.0999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 595954.4060000326,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595935.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6166.259824981485,
            "unit": "ns/iter",
            "extra": "iterations: 113588\ncpu: 6166.133746522507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5064.6048341601845,
            "unit": "ns/iter",
            "extra": "iterations: 138266\ncpu: 5064.283337913864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4998.701387597874,
            "unit": "ns/iter",
            "extra": "iterations: 139810\ncpu: 4998.284815106219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5171.321241565983,
            "unit": "ns/iter",
            "extra": "iterations: 135023\ncpu: 5171.258230079323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8979.628222871743,
            "unit": "ns/iter",
            "extra": "iterations: 78036\ncpu: 8979.340304474865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48746.76594357148,
            "unit": "ns/iter",
            "extra": "iterations: 16872\ncpu: 48744.073020388896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 205323.3870348137,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 205309.0516206484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 166194.8553092103,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 166186.85336444952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 164662.12125315363,
            "unit": "ns/iter",
            "extra": "iterations: 5171\ncpu: 164655.28911235763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168377.85641125156,
            "unit": "ns/iter",
            "extra": "iterations: 5077\ncpu: 168370.12014969465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 357716.4327557508,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 357688.0363036304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3086811.1704917355,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3086566.2295082007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2543472.122282747,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2543360.8695652164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2524868.316353892,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2524672.9222520026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2558262.7300275643,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2558096.694214876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1509403.8260162333,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1509357.398373986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2465249.2770448974,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2465232.717678104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10648775.409999872,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10648377.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6111683.163398577,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6111328.104575183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12390010.01149335,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12389765.517241398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46992.863893168775,
            "unit": "ns/iter",
            "extra": "iterations: 17523\ncpu: 46991.02322661641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 210836.9972886404,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 210827.77914715308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 167568.37872840022,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 167561.42072213488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 170152.43292197553,
            "unit": "ns/iter",
            "extra": "iterations: 5024\ncpu: 170140.96337579505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 169582.59324054027,
            "unit": "ns/iter",
            "extra": "iterations: 5030\ncpu: 169570.27833001854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 375766.7248146807,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 375747.1870911474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3077189.865131321,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3077049.3421052634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2547267.6539511443,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2547092.6430517603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2552094.130790128,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2552019.3460490494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2564069.4328766996,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2563910.1369863166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1512976.4220779259,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1512962.0129870127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2480289.7002654937,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2480131.5649867393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10816416.530000199,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10815753.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5941702.645569404,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5941424.683544294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 46050.07500560663,
            "unit": "ns/iter",
            "extra": "iterations: 17852\ncpu: 46047.46807080446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 205797.30684007835,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 205792.75048169465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 166701.86763551115,
            "unit": "ns/iter",
            "extra": "iterations: 5092\ncpu: 166694.42262372453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 165802.6259512287,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 165801.014634147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 164979.52429270346,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 164969.17073170719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 362884.0242373245,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 362875.72085248644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3083738.419672209,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3083572.4590163915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2577677.380165404,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2577548.7603305723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2531298.9291554103,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2531240.0544959106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2565992.4547946425,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2565827.671232875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1519928.7056909853,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1519883.0894308959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2478733.625329762,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2478627.704485483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2860.682442250089,
            "unit": "ns/iter",
            "extra": "iterations: 242252\ncpu: 2860.621996928834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21333.435308529442,
            "unit": "ns/iter",
            "extra": "iterations: 32655\ncpu: 21332.74843056191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16233.999860934935,
            "unit": "ns/iter",
            "extra": "iterations: 43146\ncpu: 16234.075001158773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16884.288175674334,
            "unit": "ns/iter",
            "extra": "iterations: 41440\ncpu: 16884.005791505777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12696.315032987886,
            "unit": "ns/iter",
            "extra": "iterations: 55172\ncpu: 12696.306097295708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86430.40280857359,
            "unit": "ns/iter",
            "extra": "iterations: 8118\ncpu: 86429.71175166275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 187724.13122655998,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 187721.8264595632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48510.76331648527,
            "unit": "ns/iter",
            "extra": "iterations: 14437\ncpu: 48508.69986839365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48135.97390232905,
            "unit": "ns/iter",
            "extra": "iterations: 14599\ncpu: 48135.6325775742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48868.231494413565,
            "unit": "ns/iter",
            "extra": "iterations: 14320\ncpu: 48868.149441341346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 103271.28983152148,
            "unit": "ns/iter",
            "extra": "iterations: 6766\ncpu: 103271.62281998144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91745.22745766968,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 91744.33652710226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25344.41841914451,
            "unit": "ns/iter",
            "extra": "iterations: 27580\ncpu: 25344.03915881047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 121647.37347082546,
            "unit": "ns/iter",
            "extra": "iterations: 5722\ncpu: 121644.86193638596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 98872.91485762001,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 98870.5384832238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 98003.4667134844,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 97999.63483146073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98636.53026667608,
            "unit": "ns/iter",
            "extra": "iterations: 7087\ncpu: 98632.12925074123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 179865.39276551022,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 179864.28937916813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 820481.7546948588,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 820473.0046948395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 700966.4006024612,
            "unit": "ns/iter",
            "extra": "iterations: 996\ncpu: 700947.4899598422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 701554.8351648374,
            "unit": "ns/iter",
            "extra": "iterations: 1001\ncpu: 701552.5474525379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 711014.5433231364,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 710986.4424057015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 442707.2564750415,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 442704.10612761084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683533.7772326028,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 683517.4681059871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 25310.46055722298,
            "unit": "ns/iter",
            "extra": "iterations: 27673\ncpu: 25310.519278719294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 122266.81004022679,
            "unit": "ns/iter",
            "extra": "iterations: 5717\ncpu: 122265.01661710787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 99171.14593368176,
            "unit": "ns/iter",
            "extra": "iterations: 7058\ncpu: 99167.49787475179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 98234.4771993943,
            "unit": "ns/iter",
            "extra": "iterations: 7127\ncpu: 98230.54581170192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 100332.23074721351,
            "unit": "ns/iter",
            "extra": "iterations: 6986\ncpu: 100323.57572287293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 177663.57131978887,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 177663.19796954116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 821471.7353630115,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 821428.1030444861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 699090.9879999663,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 699059.7000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 697319.6766169063,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 697281.0945273751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 710017.3506096908,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 709959.9593495851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 448027.93286449485,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 447991.1125319682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 686758.6575609916,
            "unit": "ns/iter",
            "extra": "iterations: 1025\ncpu: 686696.8780487868 ns\nthreads: 1"
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
        "date": 1702394266267,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8077.004541830194,
            "unit": "ns/iter",
            "extra": "iterations: 86529\ncpu: 8076.769637924857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99191.03968989132,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 99187.81532052765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192784.10182537392,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 192768.04486474599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 287308.2015247091,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 287302.4527676499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 373434.4260148455,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 373415.97555652575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 465137.6899141309,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 465103.540772532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 556667.3971813038,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 556641.1915438824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 520093.3390000273,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520029.0999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 595954.4060000326,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595935.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6166.259824981485,
            "unit": "ns/iter",
            "extra": "iterations: 113588\ncpu: 6166.133746522507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5064.6048341601845,
            "unit": "ns/iter",
            "extra": "iterations: 138266\ncpu: 5064.283337913864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4998.701387597874,
            "unit": "ns/iter",
            "extra": "iterations: 139810\ncpu: 4998.284815106219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5171.321241565983,
            "unit": "ns/iter",
            "extra": "iterations: 135023\ncpu: 5171.258230079323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8979.628222871743,
            "unit": "ns/iter",
            "extra": "iterations: 78036\ncpu: 8979.340304474865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48746.76594357148,
            "unit": "ns/iter",
            "extra": "iterations: 16872\ncpu: 48744.073020388896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 205323.3870348137,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 205309.0516206484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 166194.8553092103,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 166186.85336444952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 164662.12125315363,
            "unit": "ns/iter",
            "extra": "iterations: 5171\ncpu: 164655.28911235763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168377.85641125156,
            "unit": "ns/iter",
            "extra": "iterations: 5077\ncpu: 168370.12014969465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 357716.4327557508,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 357688.0363036304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3086811.1704917355,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3086566.2295082007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2543472.122282747,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2543360.8695652164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2524868.316353892,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2524672.9222520026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2558262.7300275643,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2558096.694214876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1509403.8260162333,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1509357.398373986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2465249.2770448974,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2465232.717678104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10648775.409999872,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10648377.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6111683.163398577,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6111328.104575183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12390010.01149335,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12389765.517241398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46992.863893168775,
            "unit": "ns/iter",
            "extra": "iterations: 17523\ncpu: 46991.02322661641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 210836.9972886404,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 210827.77914715308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 167568.37872840022,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 167561.42072213488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 170152.43292197553,
            "unit": "ns/iter",
            "extra": "iterations: 5024\ncpu: 170140.96337579505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 169582.59324054027,
            "unit": "ns/iter",
            "extra": "iterations: 5030\ncpu: 169570.27833001854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 375766.7248146807,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 375747.1870911474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3077189.865131321,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3077049.3421052634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2547267.6539511443,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2547092.6430517603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2552094.130790128,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2552019.3460490494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2564069.4328766996,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2563910.1369863166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1512976.4220779259,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1512962.0129870127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2480289.7002654937,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2480131.5649867393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10816416.530000199,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10815753.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5941702.645569404,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5941424.683544294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 46050.07500560663,
            "unit": "ns/iter",
            "extra": "iterations: 17852\ncpu: 46047.46807080446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 205797.30684007835,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 205792.75048169465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 166701.86763551115,
            "unit": "ns/iter",
            "extra": "iterations: 5092\ncpu: 166694.42262372453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 165802.6259512287,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 165801.014634147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 164979.52429270346,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 164969.17073170719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 362884.0242373245,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 362875.72085248644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3083738.419672209,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3083572.4590163915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2577677.380165404,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2577548.7603305723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2531298.9291554103,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2531240.0544959106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2565992.4547946425,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2565827.671232875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1519928.7056909853,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1519883.0894308959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2478733.625329762,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2478627.704485483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2860.682442250089,
            "unit": "ns/iter",
            "extra": "iterations: 242252\ncpu: 2860.621996928834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21333.435308529442,
            "unit": "ns/iter",
            "extra": "iterations: 32655\ncpu: 21332.74843056191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16233.999860934935,
            "unit": "ns/iter",
            "extra": "iterations: 43146\ncpu: 16234.075001158773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16884.288175674334,
            "unit": "ns/iter",
            "extra": "iterations: 41440\ncpu: 16884.005791505777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12696.315032987886,
            "unit": "ns/iter",
            "extra": "iterations: 55172\ncpu: 12696.306097295708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86430.40280857359,
            "unit": "ns/iter",
            "extra": "iterations: 8118\ncpu: 86429.71175166275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 187724.13122655998,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 187721.8264595632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48510.76331648527,
            "unit": "ns/iter",
            "extra": "iterations: 14437\ncpu: 48508.69986839365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48135.97390232905,
            "unit": "ns/iter",
            "extra": "iterations: 14599\ncpu: 48135.6325775742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48868.231494413565,
            "unit": "ns/iter",
            "extra": "iterations: 14320\ncpu: 48868.149441341346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 103271.28983152148,
            "unit": "ns/iter",
            "extra": "iterations: 6766\ncpu: 103271.62281998144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91745.22745766968,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 91744.33652710226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25344.41841914451,
            "unit": "ns/iter",
            "extra": "iterations: 27580\ncpu: 25344.03915881047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 121647.37347082546,
            "unit": "ns/iter",
            "extra": "iterations: 5722\ncpu: 121644.86193638596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 98872.91485762001,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 98870.5384832238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 98003.4667134844,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 97999.63483146073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98636.53026667608,
            "unit": "ns/iter",
            "extra": "iterations: 7087\ncpu: 98632.12925074123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 179865.39276551022,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 179864.28937916813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 820481.7546948588,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 820473.0046948395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 700966.4006024612,
            "unit": "ns/iter",
            "extra": "iterations: 996\ncpu: 700947.4899598422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 701554.8351648374,
            "unit": "ns/iter",
            "extra": "iterations: 1001\ncpu: 701552.5474525379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 711014.5433231364,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 710986.4424057015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 442707.2564750415,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 442704.10612761084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683533.7772326028,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 683517.4681059871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 25310.46055722298,
            "unit": "ns/iter",
            "extra": "iterations: 27673\ncpu: 25310.519278719294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 122266.81004022679,
            "unit": "ns/iter",
            "extra": "iterations: 5717\ncpu: 122265.01661710787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 99171.14593368176,
            "unit": "ns/iter",
            "extra": "iterations: 7058\ncpu: 99167.49787475179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 98234.4771993943,
            "unit": "ns/iter",
            "extra": "iterations: 7127\ncpu: 98230.54581170192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 100332.23074721351,
            "unit": "ns/iter",
            "extra": "iterations: 6986\ncpu: 100323.57572287293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 177663.57131978887,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 177663.19796954116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 821471.7353630115,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 821428.1030444861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 699090.9879999663,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 699059.7000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 697319.6766169063,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 697281.0945273751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 710017.3506096908,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 709959.9593495851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 448027.93286449485,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 447991.1125319682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 686758.6575609916,
            "unit": "ns/iter",
            "extra": "iterations: 1025\ncpu: 686696.8780487868 ns\nthreads: 1"
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
        "date": 1702394266267,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8077.004541830194,
            "unit": "ns/iter",
            "extra": "iterations: 86529\ncpu: 8076.769637924857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99191.03968989132,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 99187.81532052765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192784.10182537392,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 192768.04486474599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 287308.2015247091,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 287302.4527676499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 373434.4260148455,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 373415.97555652575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 465137.6899141309,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 465103.540772532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 556667.3971813038,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 556641.1915438824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 520093.3390000273,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520029.0999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 595954.4060000326,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595935.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6166.259824981485,
            "unit": "ns/iter",
            "extra": "iterations: 113588\ncpu: 6166.133746522507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5064.6048341601845,
            "unit": "ns/iter",
            "extra": "iterations: 138266\ncpu: 5064.283337913864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4998.701387597874,
            "unit": "ns/iter",
            "extra": "iterations: 139810\ncpu: 4998.284815106219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5171.321241565983,
            "unit": "ns/iter",
            "extra": "iterations: 135023\ncpu: 5171.258230079323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8979.628222871743,
            "unit": "ns/iter",
            "extra": "iterations: 78036\ncpu: 8979.340304474865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48746.76594357148,
            "unit": "ns/iter",
            "extra": "iterations: 16872\ncpu: 48744.073020388896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 205323.3870348137,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 205309.0516206484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 166194.8553092103,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 166186.85336444952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 164662.12125315363,
            "unit": "ns/iter",
            "extra": "iterations: 5171\ncpu: 164655.28911235763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168377.85641125156,
            "unit": "ns/iter",
            "extra": "iterations: 5077\ncpu: 168370.12014969465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 357716.4327557508,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 357688.0363036304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3086811.1704917355,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3086566.2295082007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2543472.122282747,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2543360.8695652164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2524868.316353892,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2524672.9222520026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2558262.7300275643,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2558096.694214876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1509403.8260162333,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1509357.398373986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2465249.2770448974,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2465232.717678104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10648775.409999872,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10648377.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6111683.163398577,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6111328.104575183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12390010.01149335,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12389765.517241398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46992.863893168775,
            "unit": "ns/iter",
            "extra": "iterations: 17523\ncpu: 46991.02322661641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 210836.9972886404,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 210827.77914715308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 167568.37872840022,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 167561.42072213488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 170152.43292197553,
            "unit": "ns/iter",
            "extra": "iterations: 5024\ncpu: 170140.96337579505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 169582.59324054027,
            "unit": "ns/iter",
            "extra": "iterations: 5030\ncpu: 169570.27833001854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 375766.7248146807,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 375747.1870911474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3077189.865131321,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3077049.3421052634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2547267.6539511443,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2547092.6430517603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2552094.130790128,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2552019.3460490494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2564069.4328766996,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2563910.1369863166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1512976.4220779259,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1512962.0129870127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2480289.7002654937,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2480131.5649867393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10816416.530000199,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10815753.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5941702.645569404,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5941424.683544294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 46050.07500560663,
            "unit": "ns/iter",
            "extra": "iterations: 17852\ncpu: 46047.46807080446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 205797.30684007835,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 205792.75048169465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 166701.86763551115,
            "unit": "ns/iter",
            "extra": "iterations: 5092\ncpu: 166694.42262372453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 165802.6259512287,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 165801.014634147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 164979.52429270346,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 164969.17073170719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 362884.0242373245,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 362875.72085248644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3083738.419672209,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3083572.4590163915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2577677.380165404,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2577548.7603305723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2531298.9291554103,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2531240.0544959106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2565992.4547946425,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2565827.671232875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1519928.7056909853,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1519883.0894308959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2478733.625329762,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2478627.704485483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2860.682442250089,
            "unit": "ns/iter",
            "extra": "iterations: 242252\ncpu: 2860.621996928834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21333.435308529442,
            "unit": "ns/iter",
            "extra": "iterations: 32655\ncpu: 21332.74843056191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16233.999860934935,
            "unit": "ns/iter",
            "extra": "iterations: 43146\ncpu: 16234.075001158773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16884.288175674334,
            "unit": "ns/iter",
            "extra": "iterations: 41440\ncpu: 16884.005791505777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12696.315032987886,
            "unit": "ns/iter",
            "extra": "iterations: 55172\ncpu: 12696.306097295708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86430.40280857359,
            "unit": "ns/iter",
            "extra": "iterations: 8118\ncpu: 86429.71175166275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 187724.13122655998,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 187721.8264595632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48510.76331648527,
            "unit": "ns/iter",
            "extra": "iterations: 14437\ncpu: 48508.69986839365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48135.97390232905,
            "unit": "ns/iter",
            "extra": "iterations: 14599\ncpu: 48135.6325775742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48868.231494413565,
            "unit": "ns/iter",
            "extra": "iterations: 14320\ncpu: 48868.149441341346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 103271.28983152148,
            "unit": "ns/iter",
            "extra": "iterations: 6766\ncpu: 103271.62281998144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91745.22745766968,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 91744.33652710226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25344.41841914451,
            "unit": "ns/iter",
            "extra": "iterations: 27580\ncpu: 25344.03915881047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 121647.37347082546,
            "unit": "ns/iter",
            "extra": "iterations: 5722\ncpu: 121644.86193638596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 98872.91485762001,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 98870.5384832238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 98003.4667134844,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 97999.63483146073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98636.53026667608,
            "unit": "ns/iter",
            "extra": "iterations: 7087\ncpu: 98632.12925074123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 179865.39276551022,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 179864.28937916813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 820481.7546948588,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 820473.0046948395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 700966.4006024612,
            "unit": "ns/iter",
            "extra": "iterations: 996\ncpu: 700947.4899598422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 701554.8351648374,
            "unit": "ns/iter",
            "extra": "iterations: 1001\ncpu: 701552.5474525379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 711014.5433231364,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 710986.4424057015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 442707.2564750415,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 442704.10612761084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683533.7772326028,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 683517.4681059871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 25310.46055722298,
            "unit": "ns/iter",
            "extra": "iterations: 27673\ncpu: 25310.519278719294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 122266.81004022679,
            "unit": "ns/iter",
            "extra": "iterations: 5717\ncpu: 122265.01661710787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 99171.14593368176,
            "unit": "ns/iter",
            "extra": "iterations: 7058\ncpu: 99167.49787475179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 98234.4771993943,
            "unit": "ns/iter",
            "extra": "iterations: 7127\ncpu: 98230.54581170192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 100332.23074721351,
            "unit": "ns/iter",
            "extra": "iterations: 6986\ncpu: 100323.57572287293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 177663.57131978887,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 177663.19796954116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 821471.7353630115,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 821428.1030444861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 699090.9879999663,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 699059.7000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 697319.6766169063,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 697281.0945273751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 710017.3506096908,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 709959.9593495851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 448027.93286449485,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 447991.1125319682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 686758.6575609916,
            "unit": "ns/iter",
            "extra": "iterations: 1025\ncpu: 686696.8780487868 ns\nthreads: 1"
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
        "date": 1702394266267,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8077.004541830194,
            "unit": "ns/iter",
            "extra": "iterations: 86529\ncpu: 8076.769637924857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99191.03968989132,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 99187.81532052765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192784.10182537392,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 192768.04486474599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 287308.2015247091,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 287302.4527676499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 373434.4260148455,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 373415.97555652575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 465137.6899141309,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 465103.540772532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 556667.3971813038,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 556641.1915438824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 520093.3390000273,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520029.0999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 595954.4060000326,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595935.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6166.259824981485,
            "unit": "ns/iter",
            "extra": "iterations: 113588\ncpu: 6166.133746522507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5064.6048341601845,
            "unit": "ns/iter",
            "extra": "iterations: 138266\ncpu: 5064.283337913864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4998.701387597874,
            "unit": "ns/iter",
            "extra": "iterations: 139810\ncpu: 4998.284815106219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5171.321241565983,
            "unit": "ns/iter",
            "extra": "iterations: 135023\ncpu: 5171.258230079323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8979.628222871743,
            "unit": "ns/iter",
            "extra": "iterations: 78036\ncpu: 8979.340304474865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48746.76594357148,
            "unit": "ns/iter",
            "extra": "iterations: 16872\ncpu: 48744.073020388896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 205323.3870348137,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 205309.0516206484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 166194.8553092103,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 166186.85336444952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 164662.12125315363,
            "unit": "ns/iter",
            "extra": "iterations: 5171\ncpu: 164655.28911235763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168377.85641125156,
            "unit": "ns/iter",
            "extra": "iterations: 5077\ncpu: 168370.12014969465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 357716.4327557508,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 357688.0363036304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3086811.1704917355,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3086566.2295082007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2543472.122282747,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2543360.8695652164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2524868.316353892,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2524672.9222520026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2558262.7300275643,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2558096.694214876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1509403.8260162333,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1509357.398373986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2465249.2770448974,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2465232.717678104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10648775.409999872,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10648377.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6111683.163398577,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6111328.104575183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12390010.01149335,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12389765.517241398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46992.863893168775,
            "unit": "ns/iter",
            "extra": "iterations: 17523\ncpu: 46991.02322661641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 210836.9972886404,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 210827.77914715308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 167568.37872840022,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 167561.42072213488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 170152.43292197553,
            "unit": "ns/iter",
            "extra": "iterations: 5024\ncpu: 170140.96337579505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 169582.59324054027,
            "unit": "ns/iter",
            "extra": "iterations: 5030\ncpu: 169570.27833001854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 375766.7248146807,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 375747.1870911474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3077189.865131321,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3077049.3421052634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2547267.6539511443,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2547092.6430517603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2552094.130790128,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2552019.3460490494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2564069.4328766996,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2563910.1369863166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1512976.4220779259,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1512962.0129870127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2480289.7002654937,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2480131.5649867393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10816416.530000199,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10815753.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5941702.645569404,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5941424.683544294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 46050.07500560663,
            "unit": "ns/iter",
            "extra": "iterations: 17852\ncpu: 46047.46807080446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 205797.30684007835,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 205792.75048169465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 166701.86763551115,
            "unit": "ns/iter",
            "extra": "iterations: 5092\ncpu: 166694.42262372453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 165802.6259512287,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 165801.014634147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 164979.52429270346,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 164969.17073170719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 362884.0242373245,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 362875.72085248644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3083738.419672209,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3083572.4590163915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2577677.380165404,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2577548.7603305723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2531298.9291554103,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2531240.0544959106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2565992.4547946425,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2565827.671232875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1519928.7056909853,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1519883.0894308959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2478733.625329762,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2478627.704485483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2860.682442250089,
            "unit": "ns/iter",
            "extra": "iterations: 242252\ncpu: 2860.621996928834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21333.435308529442,
            "unit": "ns/iter",
            "extra": "iterations: 32655\ncpu: 21332.74843056191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16233.999860934935,
            "unit": "ns/iter",
            "extra": "iterations: 43146\ncpu: 16234.075001158773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16884.288175674334,
            "unit": "ns/iter",
            "extra": "iterations: 41440\ncpu: 16884.005791505777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12696.315032987886,
            "unit": "ns/iter",
            "extra": "iterations: 55172\ncpu: 12696.306097295708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86430.40280857359,
            "unit": "ns/iter",
            "extra": "iterations: 8118\ncpu: 86429.71175166275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 187724.13122655998,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 187721.8264595632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48510.76331648527,
            "unit": "ns/iter",
            "extra": "iterations: 14437\ncpu: 48508.69986839365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48135.97390232905,
            "unit": "ns/iter",
            "extra": "iterations: 14599\ncpu: 48135.6325775742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48868.231494413565,
            "unit": "ns/iter",
            "extra": "iterations: 14320\ncpu: 48868.149441341346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 103271.28983152148,
            "unit": "ns/iter",
            "extra": "iterations: 6766\ncpu: 103271.62281998144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91745.22745766968,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 91744.33652710226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25344.41841914451,
            "unit": "ns/iter",
            "extra": "iterations: 27580\ncpu: 25344.03915881047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 121647.37347082546,
            "unit": "ns/iter",
            "extra": "iterations: 5722\ncpu: 121644.86193638596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 98872.91485762001,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 98870.5384832238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 98003.4667134844,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 97999.63483146073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98636.53026667608,
            "unit": "ns/iter",
            "extra": "iterations: 7087\ncpu: 98632.12925074123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 179865.39276551022,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 179864.28937916813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 820481.7546948588,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 820473.0046948395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 700966.4006024612,
            "unit": "ns/iter",
            "extra": "iterations: 996\ncpu: 700947.4899598422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 701554.8351648374,
            "unit": "ns/iter",
            "extra": "iterations: 1001\ncpu: 701552.5474525379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 711014.5433231364,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 710986.4424057015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 442707.2564750415,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 442704.10612761084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 683533.7772326028,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 683517.4681059871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 25310.46055722298,
            "unit": "ns/iter",
            "extra": "iterations: 27673\ncpu: 25310.519278719294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 122266.81004022679,
            "unit": "ns/iter",
            "extra": "iterations: 5717\ncpu: 122265.01661710787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 99171.14593368176,
            "unit": "ns/iter",
            "extra": "iterations: 7058\ncpu: 99167.49787475179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 98234.4771993943,
            "unit": "ns/iter",
            "extra": "iterations: 7127\ncpu: 98230.54581170192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 100332.23074721351,
            "unit": "ns/iter",
            "extra": "iterations: 6986\ncpu: 100323.57572287293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 177663.57131978887,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 177663.19796954116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 821471.7353630115,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 821428.1030444861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 699090.9879999663,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 699059.7000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 697319.6766169063,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 697281.0945273751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 710017.3506096908,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 709959.9593495851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 448027.93286449485,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 447991.1125319682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 686758.6575609916,
            "unit": "ns/iter",
            "extra": "iterations: 1025\ncpu: 686696.8780487868 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}