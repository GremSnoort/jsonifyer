window.BENCHMARK_DATA = {
  "lastUpdate": 1702397908476,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 22.04 Release c++-17": [
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397906550,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1682.4834076480224,
            "unit": "ns/iter",
            "extra": "iterations: 313307\ncpu: 1682.3109601764404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25298.89471750144,
            "unit": "ns/iter",
            "extra": "iterations: 32655\ncpu: 25297.19797887001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 52197.29188579816,
            "unit": "ns/iter",
            "extra": "iterations: 15972\ncpu: 52192.862509391445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 65301.90729664883,
            "unit": "ns/iter",
            "extra": "iterations: 13376\ncpu: 65299.626196172256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 91875.54298732258,
            "unit": "ns/iter",
            "extra": "iterations: 10096\ncpu: 91871.53328050711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115265.57295514634,
            "unit": "ns/iter",
            "extra": "iterations: 7580\ncpu: 115261.05540897103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 140969.06887270324,
            "unit": "ns/iter",
            "extra": "iterations: 6316\ncpu: 140961.63711209627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162137.1852131326,
            "unit": "ns/iter",
            "extra": "iterations: 5302\ncpu: 162129.98868351566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 185121.69028594572,
            "unit": "ns/iter",
            "extra": "iterations: 4756\ncpu: 185113.64592094166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1512.4659636392012,
            "unit": "ns/iter",
            "extra": "iterations: 462476\ncpu: 1512.4030219946549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1235.9926699080709,
            "unit": "ns/iter",
            "extra": "iterations: 567660\ncpu: 1235.9244970580985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1209.5363787340882,
            "unit": "ns/iter",
            "extra": "iterations: 570828\ncpu: 1209.463971634185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1205.2712864810144,
            "unit": "ns/iter",
            "extra": "iterations: 587051\ncpu: 1205.1867725291324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2389.760437799436,
            "unit": "ns/iter",
            "extra": "iterations: 293285\ncpu: 2389.589307329046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7306.6346326441635,
            "unit": "ns/iter",
            "extra": "iterations: 113650\ncpu: 7306.433787945445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34939.696935253625,
            "unit": "ns/iter",
            "extra": "iterations: 23754\ncpu: 34937.06323145577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30282.48435094952,
            "unit": "ns/iter",
            "extra": "iterations: 27286\ncpu: 30280.524811258543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30263.562182324356,
            "unit": "ns/iter",
            "extra": "iterations: 27347\ncpu: 30260.785460928117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30484.77651192846,
            "unit": "ns/iter",
            "extra": "iterations: 27035\ncpu: 30482.433882004814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 73900.56222853197,
            "unit": "ns/iter",
            "extra": "iterations: 11972\ncpu: 73894.2281991312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 811175.6319018431,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 811146.8886941281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 677780.412186419,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 677744.1577060919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 679021.7426470653,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 678994.7058823532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 678003.2302106206,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 677962.5272331143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 484924.9583564747,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 484886.8961687963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 671561.0187861384,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 671525.8670520214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3631051.938697174,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3630685.057471269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1575118.817420423,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1575038.693467336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4653495.359605971,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4653104.433497541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10855.732412172592,
            "unit": "ns/iter",
            "extra": "iterations: 78307\ncpu: 10855.241549286762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53244.50874203437,
            "unit": "ns/iter",
            "extra": "iterations: 15843\ncpu: 53241.08439058253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 45275.45061662589,
            "unit": "ns/iter",
            "extra": "iterations: 18812\ncpu: 45272.799277057544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44283.570326942434,
            "unit": "ns/iter",
            "extra": "iterations: 18933\ncpu: 44283.01378545395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 45525.84529657165,
            "unit": "ns/iter",
            "extra": "iterations: 18933\ncpu: 45522.83314847098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 86668.26584158566,
            "unit": "ns/iter",
            "extra": "iterations: 10100\ncpu: 86664.22772277208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 860504.7695852825,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 860461.0138248855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 701603.2756836703,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 701570.9534368049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 700453.3734224179,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 700399.0348923494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 698724.0133729753,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 698697.1768202073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 499132.6021689416,
            "unit": "ns/iter",
            "extra": "iterations: 1752\ncpu: 499099.0867579938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 685471.5472383937,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 685431.0319767467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3844206.950819471,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3843976.229508183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1632749.8844827327,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1632588.1034482727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7251.172680547073,
            "unit": "ns/iter",
            "extra": "iterations: 114790\ncpu: 7250.855475215598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 35563.14319849095,
            "unit": "ns/iter",
            "extra": "iterations: 23855\ncpu: 35561.30370991399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29732.931479891504,
            "unit": "ns/iter",
            "extra": "iterations: 27948\ncpu: 29732.91469872624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29369.093528493715,
            "unit": "ns/iter",
            "extra": "iterations: 28216\ncpu: 29367.039977317774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29171.57148394854,
            "unit": "ns/iter",
            "extra": "iterations: 28377\ncpu: 29170.017972301448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 71436.8561432042,
            "unit": "ns/iter",
            "extra": "iterations: 12290\ncpu: 71430.39869812856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 843186.6470588364,
            "unit": "ns/iter",
            "extra": "iterations: 1122\ncpu: 843144.1176470611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 680873.7598284626,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 680824.0886347416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 679310.5362526808,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 679285.4989231882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 679559.1289625104,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 679503.9625360224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 489144.9334079345,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 489119.41801902663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 671027.1300000271,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 670966.7000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 599.399694277332,
            "unit": "ns/iter",
            "extra": "iterations: 1181463\ncpu: 599.3997272872705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4167.580097232462,
            "unit": "ns/iter",
            "extra": "iterations: 167022\ncpu: 4167.246829758986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3363.130839330601,
            "unit": "ns/iter",
            "extra": "iterations: 208714\ncpu: 3362.9675057734726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3397.2430084601383,
            "unit": "ns/iter",
            "extra": "iterations: 220445\ncpu: 3396.9997051418804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2580.973711454455,
            "unit": "ns/iter",
            "extra": "iterations: 270460\ncpu: 2580.8241514456854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20315.253130197732,
            "unit": "ns/iter",
            "extra": "iterations: 34263\ncpu: 20311.020634503773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 45544.55884645404,
            "unit": "ns/iter",
            "extra": "iterations: 15396\ncpu: 45541.673161860024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10750.66201773098,
            "unit": "ns/iter",
            "extra": "iterations: 64746\ncpu: 10749.624687239346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10761.244088692594,
            "unit": "ns/iter",
            "extra": "iterations: 65214\ncpu: 10760.65415401621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10819.949494793935,
            "unit": "ns/iter",
            "extra": "iterations: 64726\ncpu: 10819.313722460816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 22049.92505522342,
            "unit": "ns/iter",
            "extra": "iterations: 31690\ncpu: 22049.564531397627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20903.32466212217,
            "unit": "ns/iter",
            "extra": "iterations: 33444\ncpu: 20902.858509747937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5480.415999937281,
            "unit": "ns/iter",
            "extra": "iterations: 127863\ncpu: 5479.980917075305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27366.14594573419,
            "unit": "ns/iter",
            "extra": "iterations: 25578\ncpu: 27364.172335600946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22062.410479656966,
            "unit": "ns/iter",
            "extra": "iterations: 31585\ncpu: 22061.38040208932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22034.439770432833,
            "unit": "ns/iter",
            "extra": "iterations: 31712\ncpu: 22033.353304742912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22748.80583984568,
            "unit": "ns/iter",
            "extra": "iterations: 30583\ncpu: 22747.205964097655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52872.45076042788,
            "unit": "ns/iter",
            "extra": "iterations: 13282\ncpu: 52869.40972744993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 209212.17391303243,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 209193.0134932549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 178941.54552428852,
            "unit": "ns/iter",
            "extra": "iterations: 3910\ncpu: 178937.69820971656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 178848.0194026151,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 178840.0561654307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 180018.73331621444,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 180013.8860369602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 104405.66751306785,
            "unit": "ns/iter",
            "extra": "iterations: 6695\ncpu: 104398.02837938648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 176793.3704171857,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 176779.3678887499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5297.184382652753,
            "unit": "ns/iter",
            "extra": "iterations: 131482\ncpu: 5296.966124640645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27546.70074238694,
            "unit": "ns/iter",
            "extra": "iterations: 25189\ncpu: 27544.81718210354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22108.95625728837,
            "unit": "ns/iter",
            "extra": "iterations: 31731\ncpu: 22107.66127761505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21938.658725168905,
            "unit": "ns/iter",
            "extra": "iterations: 31816\ncpu: 21937.110258989105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22612.159280583874,
            "unit": "ns/iter",
            "extra": "iterations: 30914\ncpu: 22611.26027042767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 52609.50507709539,
            "unit": "ns/iter",
            "extra": "iterations: 13295\ncpu: 52607.68710041325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 203560.0753564134,
            "unit": "ns/iter",
            "extra": "iterations: 3437\ncpu: 203555.6299098042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 174905.995951419,
            "unit": "ns/iter",
            "extra": "iterations: 3952\ncpu: 174893.67408906895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 173812.44372510386,
            "unit": "ns/iter",
            "extra": "iterations: 4016\ncpu: 173799.32768924307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 178629.9005355841,
            "unit": "ns/iter",
            "extra": "iterations: 3921\ncpu: 178620.2499362424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 102676.93736050703,
            "unit": "ns/iter",
            "extra": "iterations: 6721\ncpu: 102669.3051629223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 174509.84944889147,
            "unit": "ns/iter",
            "extra": "iterations: 3992\ncpu: 174499.7244488983 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397906550,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1682.4834076480224,
            "unit": "ns/iter",
            "extra": "iterations: 313307\ncpu: 1682.3109601764404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25298.89471750144,
            "unit": "ns/iter",
            "extra": "iterations: 32655\ncpu: 25297.19797887001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 52197.29188579816,
            "unit": "ns/iter",
            "extra": "iterations: 15972\ncpu: 52192.862509391445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 65301.90729664883,
            "unit": "ns/iter",
            "extra": "iterations: 13376\ncpu: 65299.626196172256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 91875.54298732258,
            "unit": "ns/iter",
            "extra": "iterations: 10096\ncpu: 91871.53328050711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115265.57295514634,
            "unit": "ns/iter",
            "extra": "iterations: 7580\ncpu: 115261.05540897103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 140969.06887270324,
            "unit": "ns/iter",
            "extra": "iterations: 6316\ncpu: 140961.63711209627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162137.1852131326,
            "unit": "ns/iter",
            "extra": "iterations: 5302\ncpu: 162129.98868351566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 185121.69028594572,
            "unit": "ns/iter",
            "extra": "iterations: 4756\ncpu: 185113.64592094166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1512.4659636392012,
            "unit": "ns/iter",
            "extra": "iterations: 462476\ncpu: 1512.4030219946549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1235.9926699080709,
            "unit": "ns/iter",
            "extra": "iterations: 567660\ncpu: 1235.9244970580985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1209.5363787340882,
            "unit": "ns/iter",
            "extra": "iterations: 570828\ncpu: 1209.463971634185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1205.2712864810144,
            "unit": "ns/iter",
            "extra": "iterations: 587051\ncpu: 1205.1867725291324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2389.760437799436,
            "unit": "ns/iter",
            "extra": "iterations: 293285\ncpu: 2389.589307329046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7306.6346326441635,
            "unit": "ns/iter",
            "extra": "iterations: 113650\ncpu: 7306.433787945445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34939.696935253625,
            "unit": "ns/iter",
            "extra": "iterations: 23754\ncpu: 34937.06323145577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30282.48435094952,
            "unit": "ns/iter",
            "extra": "iterations: 27286\ncpu: 30280.524811258543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30263.562182324356,
            "unit": "ns/iter",
            "extra": "iterations: 27347\ncpu: 30260.785460928117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30484.77651192846,
            "unit": "ns/iter",
            "extra": "iterations: 27035\ncpu: 30482.433882004814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 73900.56222853197,
            "unit": "ns/iter",
            "extra": "iterations: 11972\ncpu: 73894.2281991312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 811175.6319018431,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 811146.8886941281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 677780.412186419,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 677744.1577060919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 679021.7426470653,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 678994.7058823532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 678003.2302106206,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 677962.5272331143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 484924.9583564747,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 484886.8961687963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 671561.0187861384,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 671525.8670520214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3631051.938697174,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3630685.057471269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1575118.817420423,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1575038.693467336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4653495.359605971,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4653104.433497541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10855.732412172592,
            "unit": "ns/iter",
            "extra": "iterations: 78307\ncpu: 10855.241549286762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53244.50874203437,
            "unit": "ns/iter",
            "extra": "iterations: 15843\ncpu: 53241.08439058253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 45275.45061662589,
            "unit": "ns/iter",
            "extra": "iterations: 18812\ncpu: 45272.799277057544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44283.570326942434,
            "unit": "ns/iter",
            "extra": "iterations: 18933\ncpu: 44283.01378545395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 45525.84529657165,
            "unit": "ns/iter",
            "extra": "iterations: 18933\ncpu: 45522.83314847098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 86668.26584158566,
            "unit": "ns/iter",
            "extra": "iterations: 10100\ncpu: 86664.22772277208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 860504.7695852825,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 860461.0138248855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 701603.2756836703,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 701570.9534368049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 700453.3734224179,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 700399.0348923494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 698724.0133729753,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 698697.1768202073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 499132.6021689416,
            "unit": "ns/iter",
            "extra": "iterations: 1752\ncpu: 499099.0867579938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 685471.5472383937,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 685431.0319767467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3844206.950819471,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3843976.229508183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1632749.8844827327,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1632588.1034482727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7251.172680547073,
            "unit": "ns/iter",
            "extra": "iterations: 114790\ncpu: 7250.855475215598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 35563.14319849095,
            "unit": "ns/iter",
            "extra": "iterations: 23855\ncpu: 35561.30370991399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29732.931479891504,
            "unit": "ns/iter",
            "extra": "iterations: 27948\ncpu: 29732.91469872624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29369.093528493715,
            "unit": "ns/iter",
            "extra": "iterations: 28216\ncpu: 29367.039977317774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29171.57148394854,
            "unit": "ns/iter",
            "extra": "iterations: 28377\ncpu: 29170.017972301448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 71436.8561432042,
            "unit": "ns/iter",
            "extra": "iterations: 12290\ncpu: 71430.39869812856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 843186.6470588364,
            "unit": "ns/iter",
            "extra": "iterations: 1122\ncpu: 843144.1176470611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 680873.7598284626,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 680824.0886347416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 679310.5362526808,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 679285.4989231882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 679559.1289625104,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 679503.9625360224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 489144.9334079345,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 489119.41801902663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 671027.1300000271,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 670966.7000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 599.399694277332,
            "unit": "ns/iter",
            "extra": "iterations: 1181463\ncpu: 599.3997272872705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4167.580097232462,
            "unit": "ns/iter",
            "extra": "iterations: 167022\ncpu: 4167.246829758986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3363.130839330601,
            "unit": "ns/iter",
            "extra": "iterations: 208714\ncpu: 3362.9675057734726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3397.2430084601383,
            "unit": "ns/iter",
            "extra": "iterations: 220445\ncpu: 3396.9997051418804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2580.973711454455,
            "unit": "ns/iter",
            "extra": "iterations: 270460\ncpu: 2580.8241514456854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20315.253130197732,
            "unit": "ns/iter",
            "extra": "iterations: 34263\ncpu: 20311.020634503773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 45544.55884645404,
            "unit": "ns/iter",
            "extra": "iterations: 15396\ncpu: 45541.673161860024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10750.66201773098,
            "unit": "ns/iter",
            "extra": "iterations: 64746\ncpu: 10749.624687239346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10761.244088692594,
            "unit": "ns/iter",
            "extra": "iterations: 65214\ncpu: 10760.65415401621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10819.949494793935,
            "unit": "ns/iter",
            "extra": "iterations: 64726\ncpu: 10819.313722460816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 22049.92505522342,
            "unit": "ns/iter",
            "extra": "iterations: 31690\ncpu: 22049.564531397627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20903.32466212217,
            "unit": "ns/iter",
            "extra": "iterations: 33444\ncpu: 20902.858509747937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5480.415999937281,
            "unit": "ns/iter",
            "extra": "iterations: 127863\ncpu: 5479.980917075305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27366.14594573419,
            "unit": "ns/iter",
            "extra": "iterations: 25578\ncpu: 27364.172335600946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22062.410479656966,
            "unit": "ns/iter",
            "extra": "iterations: 31585\ncpu: 22061.38040208932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22034.439770432833,
            "unit": "ns/iter",
            "extra": "iterations: 31712\ncpu: 22033.353304742912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22748.80583984568,
            "unit": "ns/iter",
            "extra": "iterations: 30583\ncpu: 22747.205964097655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52872.45076042788,
            "unit": "ns/iter",
            "extra": "iterations: 13282\ncpu: 52869.40972744993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 209212.17391303243,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 209193.0134932549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 178941.54552428852,
            "unit": "ns/iter",
            "extra": "iterations: 3910\ncpu: 178937.69820971656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 178848.0194026151,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 178840.0561654307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 180018.73331621444,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 180013.8860369602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 104405.66751306785,
            "unit": "ns/iter",
            "extra": "iterations: 6695\ncpu: 104398.02837938648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 176793.3704171857,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 176779.3678887499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5297.184382652753,
            "unit": "ns/iter",
            "extra": "iterations: 131482\ncpu: 5296.966124640645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27546.70074238694,
            "unit": "ns/iter",
            "extra": "iterations: 25189\ncpu: 27544.81718210354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22108.95625728837,
            "unit": "ns/iter",
            "extra": "iterations: 31731\ncpu: 22107.66127761505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21938.658725168905,
            "unit": "ns/iter",
            "extra": "iterations: 31816\ncpu: 21937.110258989105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22612.159280583874,
            "unit": "ns/iter",
            "extra": "iterations: 30914\ncpu: 22611.26027042767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 52609.50507709539,
            "unit": "ns/iter",
            "extra": "iterations: 13295\ncpu: 52607.68710041325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 203560.0753564134,
            "unit": "ns/iter",
            "extra": "iterations: 3437\ncpu: 203555.6299098042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 174905.995951419,
            "unit": "ns/iter",
            "extra": "iterations: 3952\ncpu: 174893.67408906895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 173812.44372510386,
            "unit": "ns/iter",
            "extra": "iterations: 4016\ncpu: 173799.32768924307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 178629.9005355841,
            "unit": "ns/iter",
            "extra": "iterations: 3921\ncpu: 178620.2499362424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 102676.93736050703,
            "unit": "ns/iter",
            "extra": "iterations: 6721\ncpu: 102669.3051629223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 174509.84944889147,
            "unit": "ns/iter",
            "extra": "iterations: 3992\ncpu: 174499.7244488983 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}