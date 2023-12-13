window.BENCHMARK_DATA = {
  "lastUpdate": 1702479522654,
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409121310,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1596.59044328836,
            "unit": "ns/iter",
            "extra": "iterations: 446346\ncpu: 1596.5739583193308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 22913.016482450614,
            "unit": "ns/iter",
            "extra": "iterations: 36099\ncpu: 22912.510041829413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 47385.993977957565,
            "unit": "ns/iter",
            "extra": "iterations: 17602\ncpu: 47385.405067605956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 60513.55150000006,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60513.81 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 85769.34823614836,
            "unit": "ns/iter",
            "extra": "iterations: 11027\ncpu: 85764.64133490522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 105993.36798639821,
            "unit": "ns/iter",
            "extra": "iterations: 8234\ncpu: 105992.44595579305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 129421.09329927564,
            "unit": "ns/iter",
            "extra": "iterations: 6656\ncpu: 129415.86538461543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 151283.27919045324,
            "unit": "ns/iter",
            "extra": "iterations: 5781\ncpu: 151280.81646773918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 172721.43178676857,
            "unit": "ns/iter",
            "extra": "iterations: 5065\ncpu: 172710.54294175698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1336.7952769644555,
            "unit": "ns/iter",
            "extra": "iterations: 521529\ncpu: 1336.7674664304411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1098.7490882635996,
            "unit": "ns/iter",
            "extra": "iterations: 636423\ncpu: 1098.711391637323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1090.7962474860285,
            "unit": "ns/iter",
            "extra": "iterations: 640424\ncpu: 1090.7665858868495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1093.7539710532162,
            "unit": "ns/iter",
            "extra": "iterations: 640762\ncpu: 1093.7337108005804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2142.853167349174,
            "unit": "ns/iter",
            "extra": "iterations: 328224\ncpu: 2142.8329433557537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6545.489075482134,
            "unit": "ns/iter",
            "extra": "iterations: 124811\ncpu: 6545.334145227578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31957.185153549828,
            "unit": "ns/iter",
            "extra": "iterations: 25757\ncpu: 31956.404084326616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 27786.03924736603,
            "unit": "ns/iter",
            "extra": "iterations: 29709\ncpu: 27785.371436265068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 27243.016225419837,
            "unit": "ns/iter",
            "extra": "iterations: 29953\ncpu: 27242.503255099567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 27032.573268441076,
            "unit": "ns/iter",
            "extra": "iterations: 30204\ncpu: 27031.1117732751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71390.62445136262,
            "unit": "ns/iter",
            "extra": "iterations: 12531\ncpu: 71388.93943021314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 788067.5200000099,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 788048.0000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 641123.222999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641103.900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 632851.6339999908,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632845.1000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 642134.8389999934,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642087.7999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 460442.58456659183,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 460433.56236786494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 640217.1599999918,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640185.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3486086.742537306,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3485890.298507467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1529661.7479270294,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1529599.336650084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4485618.206730854,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4485492.7884615455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9778.433989403842,
            "unit": "ns/iter",
            "extra": "iterations: 83426\ncpu: 9778.054803058983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 49056.94671476769,
            "unit": "ns/iter",
            "extra": "iterations: 16909\ncpu: 49055.31965225624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 41764.06485565355,
            "unit": "ns/iter",
            "extra": "iterations: 19952\ncpu: 41762.54510825995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 41503.66593875599,
            "unit": "ns/iter",
            "extra": "iterations: 20149\ncpu: 41502.307806839075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41463.842661193245,
            "unit": "ns/iter",
            "extra": "iterations: 19976\ncpu: 41463.616339607644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 82544.02173083986,
            "unit": "ns/iter",
            "extra": "iterations: 10492\ncpu: 82541.62218833387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 842478.5639165934,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 842444.9682683646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 668533.8057553858,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 668493.8848920909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 668019.1175627194,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 667996.487455197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 666777.5669999969,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 666709.9000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 476321.51413044776,
            "unit": "ns/iter",
            "extra": "iterations: 1840\ncpu: 476310.1630434788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 664058.8540000181,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 664013.600000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3680614.6825397047,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3680433.3333333507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1612850.0671256382,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1612769.3631669525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 6477.28012447233,
            "unit": "ns/iter",
            "extra": "iterations: 129828\ncpu: 6477.074282897366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 31287.09291951639,
            "unit": "ns/iter",
            "extra": "iterations: 26453\ncpu: 31285.763429478517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 27647.419566667017,
            "unit": "ns/iter",
            "extra": "iterations: 30000\ncpu: 27647.56000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 26723.78949569058,
            "unit": "ns/iter",
            "extra": "iterations: 31092\ncpu: 26722.150392383817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 27249.111667320256,
            "unit": "ns/iter",
            "extra": "iterations: 30564\ncpu: 27248.036906164034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 67666.88563578897,
            "unit": "ns/iter",
            "extra": "iterations: 12740\ncpu: 67661.81318681272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 813120.6634865815,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 813123.50390286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 652438.3839999927,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652408.7999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 648987.4220000047,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648963.700000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 649362.6339999991,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649336.3000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 459917.0569320128,
            "unit": "ns/iter",
            "extra": "iterations: 1897\ncpu: 459918.50289931626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 640311.61500003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640305.3000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 590.7346976617088,
            "unit": "ns/iter",
            "extra": "iterations: 1186469\ncpu: 590.722808602671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3776.8824656987767,
            "unit": "ns/iter",
            "extra": "iterations: 185197\ncpu: 3776.8505969319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3138.666689069853,
            "unit": "ns/iter",
            "extra": "iterations: 223182\ncpu: 3138.6469338925012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3074.0623767760826,
            "unit": "ns/iter",
            "extra": "iterations: 229765\ncpu: 3073.942071246709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2397.5152340263926,
            "unit": "ns/iter",
            "extra": "iterations: 284626\ncpu: 2397.478094060272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19234.287507897632,
            "unit": "ns/iter",
            "extra": "iterations: 36399\ncpu: 19233.967966152773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 42426.45395371314,
            "unit": "ns/iter",
            "extra": "iterations: 16592\ncpu: 42426.6393442623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 9938.809317059435,
            "unit": "ns/iter",
            "extra": "iterations: 70709\ncpu: 9938.676830389308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 9919.777100232172,
            "unit": "ns/iter",
            "extra": "iterations: 70516\ncpu: 9919.412615576579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 9925.784926523047,
            "unit": "ns/iter",
            "extra": "iterations: 70362\ncpu: 9925.664421136391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 20198.977307460267,
            "unit": "ns/iter",
            "extra": "iterations: 34681\ncpu: 20198.555404976945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 19407.32845763083,
            "unit": "ns/iter",
            "extra": "iterations: 36029\ncpu: 19407.085958533225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4835.11537687598,
            "unit": "ns/iter",
            "extra": "iterations: 144119\ncpu: 4834.9461209139645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 24850.48397617716,
            "unit": "ns/iter",
            "extra": "iterations: 28208\ncpu: 24850.11344299465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 19854.552835344824,
            "unit": "ns/iter",
            "extra": "iterations: 35128\ncpu: 19853.42177180604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 19876.60107893221,
            "unit": "ns/iter",
            "extra": "iterations: 35220\ncpu: 19876.6978989214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20594.69795558306,
            "unit": "ns/iter",
            "extra": "iterations: 33995\ncpu: 20594.187380497107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49496.27974549364,
            "unit": "ns/iter",
            "extra": "iterations: 14145\ncpu: 49495.46836337974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 193986.8131593489,
            "unit": "ns/iter",
            "extra": "iterations: 3602\ncpu: 193981.03831204833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 163617.70077084537,
            "unit": "ns/iter",
            "extra": "iterations: 4281\ncpu: 163618.45363232805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 163257.44943037117,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 163252.47616833233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 163059.4549496778,
            "unit": "ns/iter",
            "extra": "iterations: 4273\ncpu: 163060.02808331262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 95457.059705558,
            "unit": "ns/iter",
            "extra": "iterations: 7336\ncpu: 95456.14776444869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 164515.85043438236,
            "unit": "ns/iter",
            "extra": "iterations: 4259\ncpu: 164510.84761681018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4907.480412458156,
            "unit": "ns/iter",
            "extra": "iterations: 141978\ncpu: 4907.143360238986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 24724.20087691376,
            "unit": "ns/iter",
            "extra": "iterations: 28281\ncpu: 24722.973020756202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 19953.876403853694,
            "unit": "ns/iter",
            "extra": "iterations: 35082\ncpu: 19953.956444900523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19755.94149326146,
            "unit": "ns/iter",
            "extra": "iterations: 35466\ncpu: 19755.48412564149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20555.805222176885,
            "unit": "ns/iter",
            "extra": "iterations: 34162\ncpu: 20555.89836660638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48785.87409521043,
            "unit": "ns/iter",
            "extra": "iterations: 14368\ncpu: 48783.24053452093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 191361.49057635653,
            "unit": "ns/iter",
            "extra": "iterations: 3661\ncpu: 191362.38732586635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 160885.00919328598,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 160880.41829464506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 159699.08724524864,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 159699.65651476997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 160720.7971979705,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 160706.38493339566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 93649.84248340067,
            "unit": "ns/iter",
            "extra": "iterations: 7377\ncpu: 93644.76074284942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 161210.58633340377,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 161200.98601238136 ns\nthreads: 1"
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412528587,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1464.6223547161208,
            "unit": "ns/iter",
            "extra": "iterations: 480525\ncpu: 1464.5429478174913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17541.606157931095,
            "unit": "ns/iter",
            "extra": "iterations: 46704\ncpu: 17541.21060294622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36694.52161679369,
            "unit": "ns/iter",
            "extra": "iterations: 22390\ncpu: 36693.33184457347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 55037.29943761409,
            "unit": "ns/iter",
            "extra": "iterations: 15292\ncpu: 55034.52785770339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 60998.288899997984,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60997.470000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 76807.0755112755,
            "unit": "ns/iter",
            "extra": "iterations: 11442\ncpu: 76806.28386645686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 90962.64293975424,
            "unit": "ns/iter",
            "extra": "iterations: 9511\ncpu: 90956.87099148353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 106175.48387096332,
            "unit": "ns/iter",
            "extra": "iterations: 8215\ncpu: 106170.73645769933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 123445.4884393053,
            "unit": "ns/iter",
            "extra": "iterations: 6920\ncpu: 123432.55780346811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1308.229733958215,
            "unit": "ns/iter",
            "extra": "iterations: 533713\ncpu: 1308.1665614290814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1074.280494690067,
            "unit": "ns/iter",
            "extra": "iterations: 651802\ncpu: 1074.2461667807088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1088.9715433285137,
            "unit": "ns/iter",
            "extra": "iterations: 644840\ncpu: 1088.8580112896216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1091.0604609785833,
            "unit": "ns/iter",
            "extra": "iterations: 641852\ncpu: 1090.9834354337127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2011.9551014897945,
            "unit": "ns/iter",
            "extra": "iterations: 348163\ncpu: 2011.7852844788226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5617.135769999777,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5617.085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27387.168775814538,
            "unit": "ns/iter",
            "extra": "iterations: 30265\ncpu: 27386.030067735002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24279.593761965505,
            "unit": "ns/iter",
            "extra": "iterations: 33953\ncpu: 24278.891408712017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25579.600598192574,
            "unit": "ns/iter",
            "extra": "iterations: 32431\ncpu: 25577.95319293269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24469.249918675774,
            "unit": "ns/iter",
            "extra": "iterations: 33815\ncpu: 24468.085169303537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 60092.6544999993,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60090.93999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 622385.5290000415,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622305.4999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 506388.8959999758,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506348.50000000146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 504356.12200004695,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504346.00000000175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 505957.5789999826,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505937.40000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 366171.890802186,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 366157.6228475433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 505955.91500001546,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505934.2999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2612652.698005643,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2612463.8176638135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1211502.3650586891,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 1211489.3089960928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3370000.156363734,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3369757.0909091015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8741.588962288353,
            "unit": "ns/iter",
            "extra": "iterations: 96125\ncpu: 8739.073081924567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 45275.83107591248,
            "unit": "ns/iter",
            "extra": "iterations: 18310\ncpu: 45272.94920808304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38836.00205425224,
            "unit": "ns/iter",
            "extra": "iterations: 21419\ncpu: 38832.60656426542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 40136.4583153977,
            "unit": "ns/iter",
            "extra": "iterations: 20907\ncpu: 40134.48127421437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 39293.276886793195,
            "unit": "ns/iter",
            "extra": "iterations: 21200\ncpu: 39291.358490566075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 73188.12020630541,
            "unit": "ns/iter",
            "extra": "iterations: 12021\ncpu: 73184.4522086347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 654805.28992805,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 654763.9568345323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 533330.8149999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532823.8000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 527385.7270000235,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527361.2000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 526118.662999977,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526106.1999999939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 381530.0931138869,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 381514.9415331287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 518821.9549999644,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518813.70000000263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2760879.17261913,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2760777.380952394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1202085.7361647931,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 1202010.810810809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5538.823979999847,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5538.731999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 27602.25542677131,
            "unit": "ns/iter",
            "extra": "iterations: 29852\ncpu: 27601.259547098805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23469.25713227201,
            "unit": "ns/iter",
            "extra": "iterations: 35087\ncpu: 23468.600906318643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24173.379019257434,
            "unit": "ns/iter",
            "extra": "iterations: 34117\ncpu: 24172.72620687644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23620.553711890912,
            "unit": "ns/iter",
            "extra": "iterations: 34834\ncpu: 23619.994832634664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 58482.65519999814,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58479.979999999894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 648812.893000013,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648785.4999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 514227.7260000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514222.50000000244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 512394.3130000157,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512363.1000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 510248.05800000194,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510241.0000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 363411.90591172985,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 363396.12822647847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 501821.24899998825,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501798.100000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 593.3926576892186,
            "unit": "ns/iter",
            "extra": "iterations: 1182516\ncpu: 593.378609676317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3369.9342494109574,
            "unit": "ns/iter",
            "extra": "iterations: 206751\ncpu: 3369.7820083094957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2650.3745559850577,
            "unit": "ns/iter",
            "extra": "iterations: 262097\ncpu: 2650.2272059580855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2692.6973200756415,
            "unit": "ns/iter",
            "extra": "iterations: 259373\ncpu: 2692.565918580583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2222.2767587662047,
            "unit": "ns/iter",
            "extra": "iterations: 313103\ncpu: 2222.2383688434684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16959.761708323298,
            "unit": "ns/iter",
            "extra": "iterations: 41210\ncpu: 16958.73817034705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 34749.25890116563,
            "unit": "ns/iter",
            "extra": "iterations: 19548\ncpu: 34747.02271332086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8330.865657632556,
            "unit": "ns/iter",
            "extra": "iterations: 85230\ncpu: 8330.645312683368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8240.124789465273,
            "unit": "ns/iter",
            "extra": "iterations: 84903\ncpu: 8240.011542583916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8297.602242752006,
            "unit": "ns/iter",
            "extra": "iterations: 84539\ncpu: 8297.24150983566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15634.639763736239,
            "unit": "ns/iter",
            "extra": "iterations: 44865\ncpu: 15634.18700546093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15661.020050852012,
            "unit": "ns/iter",
            "extra": "iterations: 44836\ncpu: 15660.070033009128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4424.095083517093,
            "unit": "ns/iter",
            "extra": "iterations: 158650\ncpu: 4423.984872360545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22342.530577089427,
            "unit": "ns/iter",
            "extra": "iterations: 31347\ncpu: 22341.917886879237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18048.37890725606,
            "unit": "ns/iter",
            "extra": "iterations: 38838\ncpu: 18047.834594984357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17850.385552920914,
            "unit": "ns/iter",
            "extra": "iterations: 39219\ncpu: 17849.644305056358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18366.363679331967,
            "unit": "ns/iter",
            "extra": "iterations: 38083\ncpu: 18365.407137042723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46755.48833009819,
            "unit": "ns/iter",
            "extra": "iterations: 14953\ncpu: 46754.0226041599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 168372.63393502356,
            "unit": "ns/iter",
            "extra": "iterations: 4155\ncpu: 168364.16365824378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 138842.16175585604,
            "unit": "ns/iter",
            "extra": "iterations: 4989\ncpu: 138832.11064341373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 140704.04541800707,
            "unit": "ns/iter",
            "extra": "iterations: 4976\ncpu: 140698.7339228291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 139899.9405189656,
            "unit": "ns/iter",
            "extra": "iterations: 5010\ncpu: 139897.88423153627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 86263.05132961873,
            "unit": "ns/iter",
            "extra": "iterations: 8085\ncpu: 86258.41682127405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 140698.95489174683,
            "unit": "ns/iter",
            "extra": "iterations: 4988\ncpu: 140692.12109061785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4329.635342552112,
            "unit": "ns/iter",
            "extra": "iterations: 161771\ncpu: 4329.492307026544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21871.2875175747,
            "unit": "ns/iter",
            "extra": "iterations: 32005\ncpu: 21870.476488048338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17944.336325704804,
            "unit": "ns/iter",
            "extra": "iterations: 39545\ncpu: 17943.28739410806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17484.809525063738,
            "unit": "ns/iter",
            "extra": "iterations: 37942\ncpu: 17484.24700859197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18140.05069639311,
            "unit": "ns/iter",
            "extra": "iterations: 38484\ncpu: 18139.14354017234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44972.349777807845,
            "unit": "ns/iter",
            "extra": "iterations: 15527\ncpu: 44970.767050944196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 164816.90614735335,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 164810.6757390873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 137894.80294985411,
            "unit": "ns/iter",
            "extra": "iterations: 5085\ncpu: 137886.88298918618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 138071.4485889157,
            "unit": "ns/iter",
            "extra": "iterations: 5067\ncpu: 138060.92362344725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 137532.4812770999,
            "unit": "ns/iter",
            "extra": "iterations: 5074\ncpu: 137527.2763106033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 84863.58837890562,
            "unit": "ns/iter",
            "extra": "iterations: 8192\ncpu: 84862.28027343792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 136667.40981044015,
            "unit": "ns/iter",
            "extra": "iterations: 5117\ncpu: 136661.36408051715 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702415999395,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1495.1262945812641,
            "unit": "ns/iter",
            "extra": "iterations: 477471\ncpu: 1495.0061888575433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17764.83868937835,
            "unit": "ns/iter",
            "extra": "iterations: 46085\ncpu: 17763.76695237062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36506.03526638382,
            "unit": "ns/iter",
            "extra": "iterations: 21210\ncpu: 36505.440829797284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 54249.721615019196,
            "unit": "ns/iter",
            "extra": "iterations: 15554\ncpu: 54249.36993699371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 60730.57490000054,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60730.82000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 76090.44143433259,
            "unit": "ns/iter",
            "extra": "iterations: 11406\ncpu: 76089.76854287219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 90514.31897628028,
            "unit": "ns/iter",
            "extra": "iterations: 9612\ncpu: 90512.05784436123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 106201.31699585318,
            "unit": "ns/iter",
            "extra": "iterations: 8202\ncpu: 106198.30529139235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 125246.14590282684,
            "unit": "ns/iter",
            "extra": "iterations: 6895\ncpu: 125243.01667875258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1348.017183596241,
            "unit": "ns/iter",
            "extra": "iterations: 511127\ncpu: 1347.935640261619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1069.6745048995722,
            "unit": "ns/iter",
            "extra": "iterations: 656483\ncpu: 1069.6637993672332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1077.515492780287,
            "unit": "ns/iter",
            "extra": "iterations: 650787\ncpu: 1077.48602845478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1091.7582601935553,
            "unit": "ns/iter",
            "extra": "iterations: 643175\ncpu: 1091.6952617872275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2053.3007918432345,
            "unit": "ns/iter",
            "extra": "iterations: 340724\ncpu: 2053.224310585694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5742.262949999883,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5741.809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27013.06618709768,
            "unit": "ns/iter",
            "extra": "iterations: 30444\ncpu: 27012.475364603873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24782.739580478876,
            "unit": "ns/iter",
            "extra": "iterations: 32847\ncpu: 24781.535604469213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25671.730638469868,
            "unit": "ns/iter",
            "extra": "iterations: 32061\ncpu: 25670.852437540972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24807.681668496258,
            "unit": "ns/iter",
            "extra": "iterations: 32796\ncpu: 24806.125747042377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61053.27209999984,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61054.82999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 629696.1170000088,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 629667.2999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 510398.2009999868,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510357.4999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 507053.16900001664,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507055.4000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 507470.17500000884,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507451.4000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 363123.9640167337,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 363099.03765690344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 506347.5639999808,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506313.19999999745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2608671.31179773,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2608518.258426964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1186226.9553001209,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 1186195.9131545313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3365281.069090894,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3365050.545454551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8893.603258781723,
            "unit": "ns/iter",
            "extra": "iterations: 93716\ncpu: 8893.341585214923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 45806.088682807436,
            "unit": "ns/iter",
            "extra": "iterations: 18008\ncpu: 45803.02087960913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39010.09097366879,
            "unit": "ns/iter",
            "extra": "iterations: 21116\ncpu: 39009.229967796906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39501.935980630355,
            "unit": "ns/iter",
            "extra": "iterations: 20650\ncpu: 39501.685230024064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38942.91674550621,
            "unit": "ns/iter",
            "extra": "iterations: 21140\ncpu: 38940.56291390737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 74423.81983568135,
            "unit": "ns/iter",
            "extra": "iterations: 11928\ncpu: 74422.2501676727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 663095.3712011544,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 663065.4124457294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 535941.1609999825,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535924.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 540170.7859350902,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 540160.2782071104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 525606.0309999952,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525599.3999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 384299.1645402528,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 384291.46502419695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 518285.402999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518287.9000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2748922.8041543677,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2748765.578635027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1194546.6790281243,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 1194512.7877237843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5856.9162300000235,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5856.593000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 27755.198278172145,
            "unit": "ns/iter",
            "extra": "iterations: 29852\ncpu: 27754.56585823394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23741.60416010082,
            "unit": "ns/iter",
            "extra": "iterations: 34903\ncpu: 23740.171331977293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24166.717490095874,
            "unit": "ns/iter",
            "extra": "iterations: 34328\ncpu: 24166.053950128036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23772.50230664119,
            "unit": "ns/iter",
            "extra": "iterations: 35116\ncpu: 23771.574211185718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 58357.60660000062,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58355.789999999535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 638875.6629999932,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638840.6000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 514561.1519999989,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514555.89999999775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 513270.4689999912,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513251.1999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 509533.9689999889,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509536.00000000425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 365210.6731727662,
            "unit": "ns/iter",
            "extra": "iterations: 2408\ncpu: 365208.63787375536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 503078.0239999899,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503057.3000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 596.1999348036978,
            "unit": "ns/iter",
            "extra": "iterations: 1174913\ncpu: 596.1621839234049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3479.8268429265463,
            "unit": "ns/iter",
            "extra": "iterations: 202504\ncpu: 3479.736202741688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2890.0291979566177,
            "unit": "ns/iter",
            "extra": "iterations: 241558\ncpu: 2889.853368549156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2939.981428800611,
            "unit": "ns/iter",
            "extra": "iterations: 236926\ncpu: 2939.9031765192512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2222.917350697094,
            "unit": "ns/iter",
            "extra": "iterations: 314679\ncpu: 2222.781946046626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17265.47893850029,
            "unit": "ns/iter",
            "extra": "iterations: 40358\ncpu: 17265.003221170384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 34893.86374603824,
            "unit": "ns/iter",
            "extra": "iterations: 21137\ncpu: 34891.909920991806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8345.266967088224,
            "unit": "ns/iter",
            "extra": "iterations: 84104\ncpu: 8345.05968800531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8260.014595025925,
            "unit": "ns/iter",
            "extra": "iterations: 85166\ncpu: 8260.043914238031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8240.969952177535,
            "unit": "ns/iter",
            "extra": "iterations: 84898\ncpu: 8240.533345897466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16416.730970175508,
            "unit": "ns/iter",
            "extra": "iterations: 42683\ncpu: 16416.292200641954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15636.791354055711,
            "unit": "ns/iter",
            "extra": "iterations: 44784\ncpu: 15635.896748838844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4375.965434159553,
            "unit": "ns/iter",
            "extra": "iterations: 159377\ncpu: 4375.850342270193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22626.6542699291,
            "unit": "ns/iter",
            "extra": "iterations: 30949\ncpu: 22625.170441694343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18240.764641829854,
            "unit": "ns/iter",
            "extra": "iterations: 38571\ncpu: 18240.27378081974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18003.49062387429,
            "unit": "ns/iter",
            "extra": "iterations: 38822\ncpu: 18002.122507856322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18610.738125701024,
            "unit": "ns/iter",
            "extra": "iterations: 37518\ncpu: 18609.8939175862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46927.112108225265,
            "unit": "ns/iter",
            "extra": "iterations: 14932\ncpu: 46925.6763996786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 166122.39237509028,
            "unit": "ns/iter",
            "extra": "iterations: 4223\ncpu: 166121.02770542313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 140789.58378163356,
            "unit": "ns/iter",
            "extra": "iterations: 5019\ncpu: 140788.7427774471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 138426.9536178076,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 138427.7365491641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 137973.42125984616,
            "unit": "ns/iter",
            "extra": "iterations: 5080\ncpu: 137967.95275590426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 85687.80511182053,
            "unit": "ns/iter",
            "extra": "iterations: 8138\ncpu: 85685.05775374787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 139780.63136942225,
            "unit": "ns/iter",
            "extra": "iterations: 5024\ncpu: 139779.49840764122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4332.878631167218,
            "unit": "ns/iter",
            "extra": "iterations: 161656\ncpu: 4332.778863760069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21921.252110033973,
            "unit": "ns/iter",
            "extra": "iterations: 31990\ncpu: 21921.00656455124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17729.240606076804,
            "unit": "ns/iter",
            "extra": "iterations: 39467\ncpu: 17728.15263384585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17764.456987076694,
            "unit": "ns/iter",
            "extra": "iterations: 39616\ncpu: 17764.319971728783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17960.77611098218,
            "unit": "ns/iter",
            "extra": "iterations: 38997\ncpu: 17960.463625406934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44689.03366830955,
            "unit": "ns/iter",
            "extra": "iterations: 15623\ncpu: 44688.50412852899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 163105.36680614518,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 163098.1636448169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 135390.10295260372,
            "unit": "ns/iter",
            "extra": "iterations: 5148\ncpu: 135390.48174048212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 135881.2180830383,
            "unit": "ns/iter",
            "extra": "iterations: 5154\ncpu: 135880.4423748566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 135232.26447725654,
            "unit": "ns/iter",
            "extra": "iterations: 5146\ncpu: 135231.24757092784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83638.38722745123,
            "unit": "ns/iter",
            "extra": "iterations: 8393\ncpu: 83636.45895388954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 136483.55793991822,
            "unit": "ns/iter",
            "extra": "iterations: 5126\ncpu: 136473.89777604272 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418335274,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1479.9457924075057,
            "unit": "ns/iter",
            "extra": "iterations: 477387\ncpu: 1479.9428974814982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17533.535094908748,
            "unit": "ns/iter",
            "extra": "iterations: 46360\ncpu: 17532.90552200173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36794.52921847223,
            "unit": "ns/iter",
            "extra": "iterations: 22520\ncpu: 36792.65097690942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 54404.1580069808,
            "unit": "ns/iter",
            "extra": "iterations: 15474\ncpu: 54400.484683986055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 60855.507200000146,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60852.14999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 76655.31136781328,
            "unit": "ns/iter",
            "extra": "iterations: 11427\ncpu: 76651.62334821043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 91180.73751317529,
            "unit": "ns/iter",
            "extra": "iterations: 9490\ncpu: 91179.73656480515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 106095.51673132702,
            "unit": "ns/iter",
            "extra": "iterations: 8248\ncpu: 106092.67701260916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 122603.69749681666,
            "unit": "ns/iter",
            "extra": "iterations: 7071\ncpu: 122600.93338990251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1311.7157169400086,
            "unit": "ns/iter",
            "extra": "iterations: 533908\ncpu: 1311.7055747432114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1062.483868812092,
            "unit": "ns/iter",
            "extra": "iterations: 658445\ncpu: 1062.4683914374011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1068.132566665288,
            "unit": "ns/iter",
            "extra": "iterations: 655738\ncpu: 1068.1275143426178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1079.267353025575,
            "unit": "ns/iter",
            "extra": "iterations: 648446\ncpu: 1079.2200121521284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2036.72428686097,
            "unit": "ns/iter",
            "extra": "iterations: 343832\ncpu: 2036.740326671166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5697.580309999921,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5697.527000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27392.12397024861,
            "unit": "ns/iter",
            "extra": "iterations: 29983\ncpu: 27391.975452756524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24584.33675497603,
            "unit": "ns/iter",
            "extra": "iterations: 33707\ncpu: 24583.9499213813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 26665.41797262935,
            "unit": "ns/iter",
            "extra": "iterations: 31203\ncpu: 26665.147581963323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 25706.53933090801,
            "unit": "ns/iter",
            "extra": "iterations: 31057\ncpu: 25706.06626525428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61061.374999997046,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61059.38999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 651236.3769999752,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651014.3999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 505462.73100002285,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505431.2000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 501913.6720000006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501889.0999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 501712.3769999898,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501707.29999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 363402.22412353626,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 363390.0667779641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 500893.4820000377,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500897.60000000184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2577990.148760359,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2577881.542699722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1177929.161577582,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 1177903.1806615803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3340519.1258993796,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3340444.6043165503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9045.892194594548,
            "unit": "ns/iter",
            "extra": "iterations: 92500\ncpu: 9045.761081081095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 45388.983057374244,
            "unit": "ns/iter",
            "extra": "iterations: 18179\ncpu: 45387.491061114495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38875.40528489769,
            "unit": "ns/iter",
            "extra": "iterations: 21306\ncpu: 38875.659438655886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39961.089182060285,
            "unit": "ns/iter",
            "extra": "iterations: 20845\ncpu: 39959.45790357403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38627.57441350677,
            "unit": "ns/iter",
            "extra": "iterations: 21441\ncpu: 38627.27018329364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 73972.39471448153,
            "unit": "ns/iter",
            "extra": "iterations: 11768\ncpu: 73971.21855880322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 649817.7259999807,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649821.4000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 529037.3789999876,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529020.8999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 524982.3280000214,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524973.0999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 522600.86199999024,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522604.8999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 382970.4895470536,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 382946.60278745735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 509538.4429999967,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509542.50000000204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2735358.472140796,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2735216.7155425265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1203877.9123711926,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 1203800.1288659752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5584.835459999908,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5584.763999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26653.880156075425,
            "unit": "ns/iter",
            "extra": "iterations: 30498\ncpu: 26653.17069971799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 26635.177649785088,
            "unit": "ns/iter",
            "extra": "iterations: 31078\ncpu: 26635.01512323822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 26626.986658443086,
            "unit": "ns/iter",
            "extra": "iterations: 30806\ncpu: 26626.845419723548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 26549.1152687333,
            "unit": "ns/iter",
            "extra": "iterations: 30867\ncpu: 26548.320212524803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 58307.71170000162,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58306.10000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 634046.7410000202,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 634050.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 511899.6930000321,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511884.4999999936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 507165.60699999036,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507159.6000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 504656.6149999876,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504660.49999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 362755.33017702686,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 362749.6500617526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 620507.2630078545,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 620501.2116892369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 602.55881983461,
            "unit": "ns/iter",
            "extra": "iterations: 1162210\ncpu: 602.5438604038858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3431.0219717423483,
            "unit": "ns/iter",
            "extra": "iterations: 202988\ncpu: 3431.0476481368264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2885.281487540537,
            "unit": "ns/iter",
            "extra": "iterations: 250615\ncpu: 2885.1800570596333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2914.1394787645513,
            "unit": "ns/iter",
            "extra": "iterations: 240352\ncpu: 2914.155488616703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2228.6673295886326,
            "unit": "ns/iter",
            "extra": "iterations: 314768\ncpu: 2228.638870533225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17156.31000933517,
            "unit": "ns/iter",
            "extra": "iterations: 40702\ncpu: 17156.198712594087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 34535.20122101283,
            "unit": "ns/iter",
            "extra": "iterations: 20311\ncpu: 34533.73541430756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8283.541751864153,
            "unit": "ns/iter",
            "extra": "iterations: 84607\ncpu: 8283.598283829946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8139.409009071953,
            "unit": "ns/iter",
            "extra": "iterations: 86091\ncpu: 8139.282851866042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8177.831417401424,
            "unit": "ns/iter",
            "extra": "iterations: 85685\ncpu: 8177.699714068963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16330.922945805178,
            "unit": "ns/iter",
            "extra": "iterations: 42827\ncpu: 16330.784318303897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15373.129392583336,
            "unit": "ns/iter",
            "extra": "iterations: 45389\ncpu: 15372.502148097486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4377.204891134732,
            "unit": "ns/iter",
            "extra": "iterations: 160290\ncpu: 4377.1757439640505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22607.366729068464,
            "unit": "ns/iter",
            "extra": "iterations: 30982\ncpu: 22607.207410754723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18126.42359868113,
            "unit": "ns/iter",
            "extra": "iterations: 38553\ncpu: 18126.534900007766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18025.982877856044,
            "unit": "ns/iter",
            "extra": "iterations: 38897\ncpu: 18025.531531994908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18693.373943642113,
            "unit": "ns/iter",
            "extra": "iterations: 37511\ncpu: 18693.48191197257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46050.83876307697,
            "unit": "ns/iter",
            "extra": "iterations: 15102\ncpu: 46049.90729704632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 165569.34088762116,
            "unit": "ns/iter",
            "extra": "iterations: 4236\ncpu: 165570.32577903918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 138675.37277051664,
            "unit": "ns/iter",
            "extra": "iterations: 5046\ncpu: 138671.46254459053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 138760.1493660832,
            "unit": "ns/iter",
            "extra": "iterations: 5048\ncpu: 138761.05388272653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 137611.61287788724,
            "unit": "ns/iter",
            "extra": "iterations: 5094\ncpu: 137609.14801727497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 85586.62821293573,
            "unit": "ns/iter",
            "extra": "iterations: 8209\ncpu: 85585.02862711667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 138522.69913077226,
            "unit": "ns/iter",
            "extra": "iterations: 5062\ncpu: 138521.45397076083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4322.325181774687,
            "unit": "ns/iter",
            "extra": "iterations: 162014\ncpu: 4322.271532089862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21928.564320160636,
            "unit": "ns/iter",
            "extra": "iterations: 31934\ncpu: 21928.389803970687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17679.507931279124,
            "unit": "ns/iter",
            "extra": "iterations: 39464\ncpu: 17679.393877964907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17345.774241620544,
            "unit": "ns/iter",
            "extra": "iterations: 39591\ncpu: 17345.891743072923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17935.21853020283,
            "unit": "ns/iter",
            "extra": "iterations: 38672\ncpu: 17934.557302441273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44881.55511136369,
            "unit": "ns/iter",
            "extra": "iterations: 15759\ncpu: 44879.9289295012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 162229.6165273955,
            "unit": "ns/iter",
            "extra": "iterations: 4308\ncpu: 162216.64345403897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 134525.96687848942,
            "unit": "ns/iter",
            "extra": "iterations: 5193\ncpu: 134519.00635470753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 134762.00596842592,
            "unit": "ns/iter",
            "extra": "iterations: 5194\ncpu: 134754.31266846333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 133955.41800458598,
            "unit": "ns/iter",
            "extra": "iterations: 5232\ncpu: 133948.75764525976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83399.12131343035,
            "unit": "ns/iter",
            "extra": "iterations: 8375\ncpu: 83395.61791044855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 134913.34642788852,
            "unit": "ns/iter",
            "extra": "iterations: 5193\ncpu: 134910.7259772758 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420953497,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1490.7622009491856,
            "unit": "ns/iter",
            "extra": "iterations: 425889\ncpu: 1490.7612077325316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17353.028903920735,
            "unit": "ns/iter",
            "extra": "iterations: 47606\ncpu: 17352.295929084572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37060.03170644746,
            "unit": "ns/iter",
            "extra": "iterations: 22456\ncpu: 37059.681154257225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 56560.22642122863,
            "unit": "ns/iter",
            "extra": "iterations: 15374\ncpu: 56559.62013789513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 60893.1599000016,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60890.72000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 76437.5241095671,
            "unit": "ns/iter",
            "extra": "iterations: 11427\ncpu: 76431.5043318457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 91339.40473186199,
            "unit": "ns/iter",
            "extra": "iterations: 9510\ncpu: 91338.49631966349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 105475.13905433365,
            "unit": "ns/iter",
            "extra": "iterations: 8227\ncpu: 105472.22559863856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 124102.83431189654,
            "unit": "ns/iter",
            "extra": "iterations: 6983\ncpu: 124100.05728197047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1302.9649313599748,
            "unit": "ns/iter",
            "extra": "iterations: 537004\ncpu: 1302.91673805037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1073.0353091924428,
            "unit": "ns/iter",
            "extra": "iterations: 653994\ncpu: 1073.0203946825202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1081.3066023668123,
            "unit": "ns/iter",
            "extra": "iterations: 633697\ncpu: 1081.2918476811444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1074.3740206350224,
            "unit": "ns/iter",
            "extra": "iterations: 650932\ncpu: 1074.3509306655685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2042.708968704563,
            "unit": "ns/iter",
            "extra": "iterations: 341008\ncpu: 2042.6406418617737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5717.391700000007,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5717.055000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27016.791039367414,
            "unit": "ns/iter",
            "extra": "iterations: 30355\ncpu: 27016.722121561543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24851.750571738525,
            "unit": "ns/iter",
            "extra": "iterations: 33232\ncpu: 24850.20462205105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25337.74645625474,
            "unit": "ns/iter",
            "extra": "iterations: 32381\ncpu: 25337.142151261538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24774.746958712403,
            "unit": "ns/iter",
            "extra": "iterations: 32963\ncpu: 24773.75845645123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61596.75679999737,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61596.73000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 634512.825999991,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 634503.2999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 505875.20800002036,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505843.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 504931.7930000257,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504924.4000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 503172.8719999933,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503158.2000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 359216.0220282651,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 359197.09060681605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 617681.8229835873,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 617651.7487508932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2572161.469613133,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2572096.1325966874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1191646.9147582764,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 1191586.6412213703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3358926.90579708,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3358842.391304349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9176.586958395374,
            "unit": "ns/iter",
            "extra": "iterations: 92826\ncpu: 9176.051968198562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 45025.04276530732,
            "unit": "ns/iter",
            "extra": "iterations: 18356\ncpu: 45022.929832207534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38805.88115117177,
            "unit": "ns/iter",
            "extra": "iterations: 21439\ncpu: 38803.58692103185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39536.26525199174,
            "unit": "ns/iter",
            "extra": "iterations: 21112\ncpu: 39535.08904888226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 39329.522828171044,
            "unit": "ns/iter",
            "extra": "iterations: 21399\ncpu: 39327.70222907625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 74159.67160785236,
            "unit": "ns/iter",
            "extra": "iterations: 11873\ncpu: 74155.62199949463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 665277.9340000165,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665247.4999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 525515.2130000056,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525505.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 524626.3539999631,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524593.8999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 521067.65399997815,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521054.4999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 378957.3223284262,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 378939.6611642075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 513500.73399999016,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513476.70000000537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2739905.498525053,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2739834.8082595854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1194193.1360719295,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 1194121.8228498008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5626.562509999643,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5626.234999999937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26803.326279289056,
            "unit": "ns/iter",
            "extra": "iterations: 30857\ncpu: 26801.87315682006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23645.00432478886,
            "unit": "ns/iter",
            "extra": "iterations: 34915\ncpu: 23644.35915795506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23874.53186609067,
            "unit": "ns/iter",
            "extra": "iterations: 34441\ncpu: 23873.255712668088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23207.089557244788,
            "unit": "ns/iter",
            "extra": "iterations: 35776\ncpu: 23206.146578712123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 58343.42779999702,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58340.239999999714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 632108.4369999995,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632056.200000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 504885.47499998054,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504885.5000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 503516.37500000384,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503494.5000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 502791.69999998884,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502774.2999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 361828.6113428077,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 361815.4295246049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 622688.9815733529,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 622650.8858965258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 603.8822315060564,
            "unit": "ns/iter",
            "extra": "iterations: 1164505\ncpu: 603.8633582509275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3378.3505173123835,
            "unit": "ns/iter",
            "extra": "iterations: 206355\ncpu: 3378.179835719994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2903.5722256176155,
            "unit": "ns/iter",
            "extra": "iterations: 240531\ncpu: 2903.4486199283965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2859.0282811587035,
            "unit": "ns/iter",
            "extra": "iterations: 244403\ncpu: 2858.9014864792975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2246.909454653735,
            "unit": "ns/iter",
            "extra": "iterations: 312407\ncpu: 2246.810730873512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16970.98466958169,
            "unit": "ns/iter",
            "extra": "iterations: 41160\ncpu: 16970.330417881512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33973.64077433176,
            "unit": "ns/iter",
            "extra": "iterations: 20508\ncpu: 33971.83050516858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8184.2751709966915,
            "unit": "ns/iter",
            "extra": "iterations: 85674\ncpu: 8183.9052688097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8153.474530082216,
            "unit": "ns/iter",
            "extra": "iterations: 85866\ncpu: 8153.2259567232695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8101.8062389396755,
            "unit": "ns/iter",
            "extra": "iterations: 86457\ncpu: 8101.392599789542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16171.109171728083,
            "unit": "ns/iter",
            "extra": "iterations: 42969\ncpu: 16170.476389955571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15430.40160757551,
            "unit": "ns/iter",
            "extra": "iterations: 45410\ncpu: 15429.592600748776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4361.258584963318,
            "unit": "ns/iter",
            "extra": "iterations: 160222\ncpu: 4361.079627017495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22768.973199972894,
            "unit": "ns/iter",
            "extra": "iterations: 31194\ncpu: 22755.50105789573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18072.789929474213,
            "unit": "ns/iter",
            "extra": "iterations: 38568\ncpu: 18072.25420037318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17675.13103185717,
            "unit": "ns/iter",
            "extra": "iterations: 39395\ncpu: 17675.10343952273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18380.10416501058,
            "unit": "ns/iter",
            "extra": "iterations: 37719\ncpu: 18378.448527267632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 45616.03206465122,
            "unit": "ns/iter",
            "extra": "iterations: 15344\ncpu: 45612.23279457784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 163549.72002821293,
            "unit": "ns/iter",
            "extra": "iterations: 4254\ncpu: 163536.20122237952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 135912.98036929386,
            "unit": "ns/iter",
            "extra": "iterations: 5145\ncpu: 135909.91253644397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 136352.83890215275,
            "unit": "ns/iter",
            "extra": "iterations: 5028\ncpu: 136346.2609387448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 136064.86931928323,
            "unit": "ns/iter",
            "extra": "iterations: 5127\ncpu: 136062.88277745267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84401.78749093857,
            "unit": "ns/iter",
            "extra": "iterations: 8282\ncpu: 84401.61796667565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 137919.055522738,
            "unit": "ns/iter",
            "extra": "iterations: 5079\ncpu: 137916.83402244703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4288.522675152939,
            "unit": "ns/iter",
            "extra": "iterations: 163086\ncpu: 4288.230749420552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21882.405006398105,
            "unit": "ns/iter",
            "extra": "iterations: 32039\ncpu: 21880.776553575306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17843.994236311803,
            "unit": "ns/iter",
            "extra": "iterations: 39211\ncpu: 17842.982836449006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17470.527306161242,
            "unit": "ns/iter",
            "extra": "iterations: 39698\ncpu: 17469.786891027197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17912.630782622597,
            "unit": "ns/iter",
            "extra": "iterations: 39061\ncpu: 17912.319193056966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44441.432850977,
            "unit": "ns/iter",
            "extra": "iterations: 15756\ncpu: 44440.41634932751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 160912.5394009258,
            "unit": "ns/iter",
            "extra": "iterations: 4340\ncpu: 160912.30414746568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 134126.17644788141,
            "unit": "ns/iter",
            "extra": "iterations: 5180\ncpu: 134126.0424710432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 133866.93023700855,
            "unit": "ns/iter",
            "extra": "iterations: 5232\ncpu: 133863.05428134612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 132834.07788992702,
            "unit": "ns/iter",
            "extra": "iterations: 5251\ncpu: 132831.07979432508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 85381.79544624445,
            "unit": "ns/iter",
            "extra": "iterations: 8213\ncpu: 85379.9707780342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 135466.1785576614,
            "unit": "ns/iter",
            "extra": "iterations: 5186\ncpu: 135465.92749710806 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421384250,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1485.647094215049,
            "unit": "ns/iter",
            "extra": "iterations: 473693\ncpu: 1485.5336684308193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17553.701847857967,
            "unit": "ns/iter",
            "extra": "iterations: 47298\ncpu: 17552.57304748615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37253.31590042641,
            "unit": "ns/iter",
            "extra": "iterations: 22295\ncpu: 37250.32069970845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 56183.63684520385,
            "unit": "ns/iter",
            "extra": "iterations: 15291\ncpu: 56181.10653325483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 62533.72889999866,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62530.55999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 79538.38999910365,
            "unit": "ns/iter",
            "extra": "iterations: 11159\ncpu: 79534.9135227171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 93580.63782121395,
            "unit": "ns/iter",
            "extra": "iterations: 9106\ncpu: 93575.25807160119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 109187.57114303595,
            "unit": "ns/iter",
            "extra": "iterations: 8005\ncpu: 109183.86008744543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 126267.79457875834,
            "unit": "ns/iter",
            "extra": "iterations: 6825\ncpu: 126262.30036630035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1342.3466364412643,
            "unit": "ns/iter",
            "extra": "iterations: 521858\ncpu: 1342.2660953746063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1091.1571989393994,
            "unit": "ns/iter",
            "extra": "iterations: 640386\ncpu: 1091.1475266479906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1100.682012562017,
            "unit": "ns/iter",
            "extra": "iterations: 636522\ncpu: 1100.678688246441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1110.4588604447406,
            "unit": "ns/iter",
            "extra": "iterations: 633247\ncpu: 1110.4022600975607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2095.862590292646,
            "unit": "ns/iter",
            "extra": "iterations: 333499\ncpu: 2095.7523111013825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5779.2054399999415,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5778.8889999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 26930.173848242546,
            "unit": "ns/iter",
            "extra": "iterations: 30193\ncpu: 26928.423806842682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24712.16019579891,
            "unit": "ns/iter",
            "extra": "iterations: 32891\ncpu: 24710.73849989361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25632.34540851427,
            "unit": "ns/iter",
            "extra": "iterations: 31994\ncpu: 25630.987060073807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24590.099143243042,
            "unit": "ns/iter",
            "extra": "iterations: 33265\ncpu: 24588.600631294194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 60705.34820000262,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60700.49999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 626704.6340000206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 626690.7000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 508065.3510000275,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508009.3000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 507894.55299997143,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507867.3999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 507429.3380000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507392.39999999694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 363295.191814797,
            "unit": "ns/iter",
            "extra": "iterations: 2419\ncpu: 363269.9049193877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 501322.64699999493,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501262.90000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2594928.869444541,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2594813.8888888867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1186448.9347826259,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 1186423.6572890047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3375780.789854928,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3375644.2028985475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8970.230957365175,
            "unit": "ns/iter",
            "extra": "iterations: 93632\ncpu: 8970.173658578247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 45879.749215608324,
            "unit": "ns/iter",
            "extra": "iterations: 18167\ncpu: 45878.620575769295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39360.02334192537,
            "unit": "ns/iter",
            "extra": "iterations: 21335\ncpu: 39359.69533630181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39971.39877831978,
            "unit": "ns/iter",
            "extra": "iterations: 20791\ncpu: 39969.496416718765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 39041.955442989325,
            "unit": "ns/iter",
            "extra": "iterations: 21321\ncpu: 39040.964307490256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 73742.41782378193,
            "unit": "ns/iter",
            "extra": "iterations: 11883\ncpu: 73739.24934780758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 653204.6280000259,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653203.3000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 530936.8160000077,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530901.8000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 529622.9029999608,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529579.0999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 527211.8649999697,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527191.8000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 387261.16089436354,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 387245.3748355978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 518225.0299999964,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518231.20000000246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2761688.538690352,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2761452.9761904753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1215112.1868420863,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 1215050.0000000058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5688.91984000004,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5688.731999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26736.65571859022,
            "unit": "ns/iter",
            "extra": "iterations: 30873\ncpu: 26735.445211025784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23470.71771228163,
            "unit": "ns/iter",
            "extra": "iterations: 35354\ncpu: 23469.63568478818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23877.98319902019,
            "unit": "ns/iter",
            "extra": "iterations: 35117\ncpu: 23877.70025913379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23374.864218736653,
            "unit": "ns/iter",
            "extra": "iterations: 35513\ncpu: 23374.203812688444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 57493.29210000269,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57491.93999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 635239.1630000512,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 635237.8999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 506120.6099999822,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506082.49999999796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 506492.5339999604,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506487.099999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 504585.0700000187,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504558.79999999807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 367248.0966263855,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 367225.23948354594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 502653.1620000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502627.30000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 595.9404551684374,
            "unit": "ns/iter",
            "extra": "iterations: 1173939\ncpu: 595.9317306946951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3408.3066202600676,
            "unit": "ns/iter",
            "extra": "iterations: 205143\ncpu: 3408.200621030203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2793.106403365179,
            "unit": "ns/iter",
            "extra": "iterations: 251524\ncpu: 2792.9998727755537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2690.375551187149,
            "unit": "ns/iter",
            "extra": "iterations: 259440\ncpu: 2690.3233888374975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2254.5561251135464,
            "unit": "ns/iter",
            "extra": "iterations: 310182\ncpu: 2254.5521661476278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17857.79788136673,
            "unit": "ns/iter",
            "extra": "iterations: 41253\ncpu: 17857.416430320187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 34142.668748781754,
            "unit": "ns/iter",
            "extra": "iterations: 20492\ncpu: 34142.645910599116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8236.935964963857,
            "unit": "ns/iter",
            "extra": "iterations: 85625\ncpu: 8236.842043795588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8114.817885345617,
            "unit": "ns/iter",
            "extra": "iterations: 85858\ncpu: 8114.472734049285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8153.324740405477,
            "unit": "ns/iter",
            "extra": "iterations: 85807\ncpu: 8152.9420676635455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15336.248337222392,
            "unit": "ns/iter",
            "extra": "iterations: 45857\ncpu: 15335.12440848723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14626.37799832857,
            "unit": "ns/iter",
            "extra": "iterations: 47860\ncpu: 14625.388633514398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4422.641519464715,
            "unit": "ns/iter",
            "extra": "iterations: 158003\ncpu: 4422.3432466472095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22431.728389518346,
            "unit": "ns/iter",
            "extra": "iterations: 31177\ncpu: 22430.467973185205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18047.898445487077,
            "unit": "ns/iter",
            "extra": "iterations: 38147\ncpu: 18046.93422811756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17959.57891628188,
            "unit": "ns/iter",
            "extra": "iterations: 38940\ncpu: 17959.496661530655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18429.737889181644,
            "unit": "ns/iter",
            "extra": "iterations: 37900\ncpu: 18429.08707124021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46299.59695967992,
            "unit": "ns/iter",
            "extra": "iterations: 15130\ncpu: 46296.8142762717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 165266.22832026277,
            "unit": "ns/iter",
            "extra": "iterations: 4209\ncpu: 165217.93775243475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 139400.3721990924,
            "unit": "ns/iter",
            "extra": "iterations: 5043\ncpu: 139391.21554630325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 139368.7163021947,
            "unit": "ns/iter",
            "extra": "iterations: 5030\ncpu: 139366.38170974056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 138815.852012631,
            "unit": "ns/iter",
            "extra": "iterations: 5068\ncpu: 138811.02999210785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 85932.01680569057,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 85927.58832188563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 139582.11124378495,
            "unit": "ns/iter",
            "extra": "iterations: 5025\ncpu: 139577.0348258723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4325.753428728872,
            "unit": "ns/iter",
            "extra": "iterations: 161503\ncpu: 4325.610669770901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22071.84534071618,
            "unit": "ns/iter",
            "extra": "iterations: 31786\ncpu: 22071.1854275468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17831.561609623506,
            "unit": "ns/iter",
            "extra": "iterations: 39239\ncpu: 17830.765310023464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17502.848536136346,
            "unit": "ns/iter",
            "extra": "iterations: 39587\ncpu: 17502.278525778464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18265.606195612247,
            "unit": "ns/iter",
            "extra": "iterations: 38382\ncpu: 18265.801677869717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44997.65824991988,
            "unit": "ns/iter",
            "extra": "iterations: 15485\ncpu: 44998.12076202764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 162186.3601479406,
            "unit": "ns/iter",
            "extra": "iterations: 4326\ncpu: 162186.0610263501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 133479.23704713164,
            "unit": "ns/iter",
            "extra": "iterations: 5134\ncpu: 133477.52239968878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 134292.31960145087,
            "unit": "ns/iter",
            "extra": "iterations: 5219\ncpu: 134293.83023567716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 134069.04628921286,
            "unit": "ns/iter",
            "extra": "iterations: 5228\ncpu: 134066.60290742284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83495.11569164295,
            "unit": "ns/iter",
            "extra": "iterations: 8393\ncpu: 83495.40092934515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 134646.5124951861,
            "unit": "ns/iter",
            "extra": "iterations: 5202\ncpu: 134646.405228759 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422462202,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1508.084918181588,
            "unit": "ns/iter",
            "extra": "iterations: 471654\ncpu: 1508.0427601589302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17626.14074121436,
            "unit": "ns/iter",
            "extra": "iterations: 46923\ncpu: 17625.676107665757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36958.419341895664,
            "unit": "ns/iter",
            "extra": "iterations: 22428\ncpu: 36956.50526128055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 55844.10961488518,
            "unit": "ns/iter",
            "extra": "iterations: 15372\ncpu: 55840.54774915432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 60982.234200002946,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60976.590000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 79085.85569909569,
            "unit": "ns/iter",
            "extra": "iterations: 11379\ncpu: 79081.73828983211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 91723.27148128931,
            "unit": "ns/iter",
            "extra": "iterations: 9485\ncpu: 91718.60832894038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 106725.14546783418,
            "unit": "ns/iter",
            "extra": "iterations: 8208\ncpu: 106720.94298245618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 124975.35084454127,
            "unit": "ns/iter",
            "extra": "iterations: 6986\ncpu: 124967.30604065293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1366.2527556232924,
            "unit": "ns/iter",
            "extra": "iterations: 513314\ncpu: 1366.182492587384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1084.735038777476,
            "unit": "ns/iter",
            "extra": "iterations: 645736\ncpu: 1084.6621529541474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1099.2115565213214,
            "unit": "ns/iter",
            "extra": "iterations: 637839\ncpu: 1099.194154010651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1099.2562239424794,
            "unit": "ns/iter",
            "extra": "iterations: 636092\ncpu: 1099.2095483043338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2036.3139238957372,
            "unit": "ns/iter",
            "extra": "iterations: 343424\ncpu: 2036.1334676667923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5763.13319999997,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5762.698999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27432.760106008183,
            "unit": "ns/iter",
            "extra": "iterations: 29809\ncpu: 27431.18856721129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24277.97324938663,
            "unit": "ns/iter",
            "extra": "iterations: 33831\ncpu: 24276.938311016507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25237.10988200531,
            "unit": "ns/iter",
            "extra": "iterations: 32544\ncpu: 25235.143190757128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24615.195713597364,
            "unit": "ns/iter",
            "extra": "iterations: 33268\ncpu: 24613.649753516907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 60405.12779999858,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60401.46000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 618888.2029999832,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 618876.4000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 501131.885999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501076.40000000235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 501132.81799997366,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501126.89999999915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 503245.2369999874,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503194.90000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 362264.74444442696,
            "unit": "ns/iter",
            "extra": "iterations: 2430\ncpu: 362239.75308641937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 615715.8871428692,
            "unit": "ns/iter",
            "extra": "iterations: 1400\ncpu: 615676.3571428568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2594864.3027777825,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2594669.4444444417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1163957.9123252332,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 1163865.8195679816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3372851.210144951,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3372662.3188405754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8824.877242941828,
            "unit": "ns/iter",
            "extra": "iterations: 94463\ncpu: 8824.473074113703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 45182.14602547259,
            "unit": "ns/iter",
            "extra": "iterations: 18216\ncpu: 45178.6725955204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38803.87440108048,
            "unit": "ns/iter",
            "extra": "iterations: 21497\ncpu: 38801.293203702735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39894.803759723036,
            "unit": "ns/iter",
            "extra": "iterations: 20959\ncpu: 39893.749701798646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 39052.18846335762,
            "unit": "ns/iter",
            "extra": "iterations: 21150\ncpu: 39049.91489361685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 73389.5351451106,
            "unit": "ns/iter",
            "extra": "iterations: 11922\ncpu: 73381.99966448586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 660487.5279999761,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660090.7999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 530421.4239999965,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530386.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 526014.029999999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525998.8999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 532084.3590000095,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532054.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 381059.0328159576,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 381029.5343680701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 519108.9780000198,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519062.80000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2743063.6439169087,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2742906.5281899148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1198494.9346990564,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 1198424.071702948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5534.203440000169,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5533.671999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26842.131451142355,
            "unit": "ns/iter",
            "extra": "iterations: 30886\ncpu: 26840.12497571714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24012.782764912758,
            "unit": "ns/iter",
            "extra": "iterations: 35625\ncpu: 24010.018245613945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24905.149462649482,
            "unit": "ns/iter",
            "extra": "iterations: 34149\ncpu: 24904.65899440684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24269.75327679356,
            "unit": "ns/iter",
            "extra": "iterations: 35019\ncpu: 24268.993974699468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 57992.94079999981,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57993.1000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 640907.7490000073,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640891.400000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 513720.147000015,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513720.59999999916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 513990.4310000247,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513991.19999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 510778.044999995,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510765.1999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 364940.4145530204,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 364936.0914760897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 501160.1659999769,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501162.00000000076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 598.4281621468194,
            "unit": "ns/iter",
            "extra": "iterations: 1170692\ncpu: 598.4155525108222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3395.844088837117,
            "unit": "ns/iter",
            "extra": "iterations: 206220\ncpu: 3395.85103287752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2864.1684086325054,
            "unit": "ns/iter",
            "extra": "iterations: 244934\ncpu: 2864.1344198845613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2646.054992780459,
            "unit": "ns/iter",
            "extra": "iterations: 265253\ncpu: 2646.027377635705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2232.9930550207628,
            "unit": "ns/iter",
            "extra": "iterations: 311592\ncpu: 2232.9347351664896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16996.833687310038,
            "unit": "ns/iter",
            "extra": "iterations: 41434\ncpu: 16995.993628421063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 35045.2124235424,
            "unit": "ns/iter",
            "extra": "iterations: 19946\ncpu: 35044.93632808586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8333.649228833265,
            "unit": "ns/iter",
            "extra": "iterations: 84223\ncpu: 8333.037293850826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8198.74954950752,
            "unit": "ns/iter",
            "extra": "iterations: 85462\ncpu: 8198.091549460563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8157.243307297875,
            "unit": "ns/iter",
            "extra": "iterations: 85653\ncpu: 8156.795442074389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15632.35616285544,
            "unit": "ns/iter",
            "extra": "iterations: 44825\ncpu: 15631.179029559458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15498.556577569108,
            "unit": "ns/iter",
            "extra": "iterations: 43922\ncpu: 15498.17403579072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4410.674895820287,
            "unit": "ns/iter",
            "extra": "iterations: 158380\ncpu: 4410.4318727112095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22489.190546575253,
            "unit": "ns/iter",
            "extra": "iterations: 31121\ncpu: 22487.857074001437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18226.029645809176,
            "unit": "ns/iter",
            "extra": "iterations: 38454\ncpu: 18224.46299474695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18397.467472167464,
            "unit": "ns/iter",
            "extra": "iterations: 37906\ncpu: 18397.1482087269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18526.42081902273,
            "unit": "ns/iter",
            "extra": "iterations: 37850\ncpu: 18525.71466314365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 45755.14966878902,
            "unit": "ns/iter",
            "extra": "iterations: 15247\ncpu: 45753.34819964598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 167211.6978520258,
            "unit": "ns/iter",
            "extra": "iterations: 4190\ncpu: 167205.96658711167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 140188.07770675767,
            "unit": "ns/iter",
            "extra": "iterations: 5006\ncpu: 140185.79704354863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 138811.23313491832,
            "unit": "ns/iter",
            "extra": "iterations: 5040\ncpu: 138801.19047618972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 138184.4457593613,
            "unit": "ns/iter",
            "extra": "iterations: 5070\ncpu: 138177.37672583724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 85970.15138121186,
            "unit": "ns/iter",
            "extra": "iterations: 8145\ncpu: 85966.9244935546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 139966.8123254897,
            "unit": "ns/iter",
            "extra": "iterations: 5014\ncpu: 139960.809732748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4313.469232802607,
            "unit": "ns/iter",
            "extra": "iterations: 162657\ncpu: 4313.320668646222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21892.098216804126,
            "unit": "ns/iter",
            "extra": "iterations: 31909\ncpu: 21891.67006173814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17810.681432085188,
            "unit": "ns/iter",
            "extra": "iterations: 39439\ncpu: 17810.697532898903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17573.479737184607,
            "unit": "ns/iter",
            "extra": "iterations: 39876\ncpu: 17573.194402648347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18002.539063904176,
            "unit": "ns/iter",
            "extra": "iterations: 38949\ncpu: 18002.403142571035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44575.2623607998,
            "unit": "ns/iter",
            "extra": "iterations: 15715\ncpu: 44575.055679287216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 162950.69046511638,
            "unit": "ns/iter",
            "extra": "iterations: 4300\ncpu: 162951.30232558175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 136379.95856031255,
            "unit": "ns/iter",
            "extra": "iterations: 5140\ncpu: 136380.54474708237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 135698.94084561986,
            "unit": "ns/iter",
            "extra": "iterations: 5156\ncpu: 135699.39875872806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 135560.7559374404,
            "unit": "ns/iter",
            "extra": "iterations: 5179\ncpu: 135558.54412048883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 84650.64005788449,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 84649.70457011917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 136820.9778994645,
            "unit": "ns/iter",
            "extra": "iterations: 5113\ncpu: 136821.18130256317 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453356251,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1492.1064312196909,
            "unit": "ns/iter",
            "extra": "iterations: 466630\ncpu: 1492.0688768403231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17836.832020489725,
            "unit": "ns/iter",
            "extra": "iterations: 46464\ncpu: 17836.14841597796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37807.65274834379,
            "unit": "ns/iter",
            "extra": "iterations: 22177\ncpu: 37807.241736934666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 55561.848688106016,
            "unit": "ns/iter",
            "extra": "iterations: 15207\ncpu: 55561.4585388308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 62192.9783999974,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62191.10000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 77823.44018757508,
            "unit": "ns/iter",
            "extra": "iterations: 11302\ncpu: 77820.53618828532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 93838.75883373205,
            "unit": "ns/iter",
            "extra": "iterations: 9226\ncpu: 93835.64925211358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 108270.61138333626,
            "unit": "ns/iter",
            "extra": "iterations: 7959\ncpu: 108265.98818947106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 126572.6124673118,
            "unit": "ns/iter",
            "extra": "iterations: 6882\ncpu: 126568.71548968328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1370.255594166401,
            "unit": "ns/iter",
            "extra": "iterations: 510219\ncpu: 1370.1939755281562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1110.6379209142042,
            "unit": "ns/iter",
            "extra": "iterations: 630354\ncpu: 1110.6252994349225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1112.0151913985756,
            "unit": "ns/iter",
            "extra": "iterations: 629106\ncpu: 1111.971114565749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1111.5659343208347,
            "unit": "ns/iter",
            "extra": "iterations: 625069\ncpu: 1111.4984105754734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2116.0880209121324,
            "unit": "ns/iter",
            "extra": "iterations: 330910\ncpu: 2115.9523737572163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5793.685140000093,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5793.448999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27692.03205473867,
            "unit": "ns/iter",
            "extra": "iterations: 29668\ncpu: 27691.135229877324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25112.09864365126,
            "unit": "ns/iter",
            "extra": "iterations: 32440\ncpu: 25110.61344019725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25705.118562198088,
            "unit": "ns/iter",
            "extra": "iterations: 31882\ncpu: 25703.895615080695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24934.33381119455,
            "unit": "ns/iter",
            "extra": "iterations: 32785\ncpu: 24933.118804331254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 60322.762299995244,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60322.28000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 622530.973000039,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622508.9999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 501057.3829999885,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501022.70000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 507274.30200004164,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507276.00000000093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 507042.8379999612,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507001.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 364122.53603034327,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 364105.5625790143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 501752.13599999325,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501716.5000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2600303.57541888,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2600142.178770948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1181740.4792452992,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 1181698.7421383641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3374128.602189745,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3373866.0583941587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9037.66677783362,
            "unit": "ns/iter",
            "extra": "iterations: 92953\ncpu: 9037.694318634138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44844.95594761351,
            "unit": "ns/iter",
            "extra": "iterations: 18478\ncpu: 44844.27427210743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38657.485568278316,
            "unit": "ns/iter",
            "extra": "iterations: 21134\ncpu: 38654.220687044624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39836.31655122962,
            "unit": "ns/iter",
            "extra": "iterations: 20935\ncpu: 39835.90160019098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 39124.35933539835,
            "unit": "ns/iter",
            "extra": "iterations: 21306\ncpu: 39122.05482023838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 73428.93190480323,
            "unit": "ns/iter",
            "extra": "iterations: 11807\ncpu: 73426.73837553967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 661037.0390000072,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660932.1999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 529326.6440000366,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529269.5999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 527931.1529999973,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527863.1999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 525312.3680000158,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525273.8000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 381875.082788673,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 381864.4880174292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 517588.3360000171,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517538.00000000186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2756921.4504504297,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2756747.747747747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1190970.3502538772,
            "unit": "ns/iter",
            "extra": "iterations: 788\ncpu: 1190972.8426395906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5470.547420000003,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5470.383999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28388.712850812037,
            "unit": "ns/iter",
            "extra": "iterations: 30465\ncpu: 28388.74446085675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23549.336691972716,
            "unit": "ns/iter",
            "extra": "iterations: 35828\ncpu: 23548.771910237934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24274.907415017868,
            "unit": "ns/iter",
            "extra": "iterations: 34066\ncpu: 24274.975048435317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23664.821412365563,
            "unit": "ns/iter",
            "extra": "iterations: 35260\ncpu: 23663.94498014748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 58827.96180000014,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58828.19999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 648189.1170000153,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648153.7999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 511698.52599997516,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511689.7999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 510117.9700000103,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510101.6999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 509218.5729999983,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509220.9000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 363480.83168317686,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 363477.92904290423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 624259.3388016836,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 624237.9457917244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 611.0601769756929,
            "unit": "ns/iter",
            "extra": "iterations: 1146485\ncpu: 611.0420110162789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3397.1412380377787,
            "unit": "ns/iter",
            "extra": "iterations: 205228\ncpu: 3397.002845615632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2880.334653074079,
            "unit": "ns/iter",
            "extra": "iterations: 242977\ncpu: 2880.3450532354973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2892.4170553047807,
            "unit": "ns/iter",
            "extra": "iterations: 241227\ncpu: 2892.2881766966493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2257.0592848211013,
            "unit": "ns/iter",
            "extra": "iterations: 309489\ncpu: 2256.9987947875416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16829.19564954438,
            "unit": "ns/iter",
            "extra": "iterations: 41329\ncpu: 16828.47395291441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 35008.02352941269,
            "unit": "ns/iter",
            "extra": "iterations: 19975\ncpu: 35007.62953692114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8291.566337523996,
            "unit": "ns/iter",
            "extra": "iterations: 84462\ncpu: 8291.201960645009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8282.965480591225,
            "unit": "ns/iter",
            "extra": "iterations: 84677\ncpu: 8282.63991402626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8280.093626608019,
            "unit": "ns/iter",
            "extra": "iterations: 84335\ncpu: 8279.787751230197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16426.53509131637,
            "unit": "ns/iter",
            "extra": "iterations: 41449\ncpu: 16426.60377813694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15657.089739868608,
            "unit": "ns/iter",
            "extra": "iterations: 44785\ncpu: 15657.137434408853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4463.084942479705,
            "unit": "ns/iter",
            "extra": "iterations: 156553\ncpu: 4462.875192426832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 23081.811050814482,
            "unit": "ns/iter",
            "extra": "iterations: 30405\ncpu: 23081.884558460675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18770.90892866662,
            "unit": "ns/iter",
            "extra": "iterations: 37542\ncpu: 18770.497043311632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18469.900650126725,
            "unit": "ns/iter",
            "extra": "iterations: 37685\ncpu: 18469.94029454709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 19224.833466091975,
            "unit": "ns/iter",
            "extra": "iterations: 36407\ncpu: 19224.272804680382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46659.74659966231,
            "unit": "ns/iter",
            "extra": "iterations: 14925\ncpu: 46657.681742042834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 167836.7647765553,
            "unit": "ns/iter",
            "extra": "iterations: 4162\ncpu: 167832.53243632638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 139509.37108190462,
            "unit": "ns/iter",
            "extra": "iterations: 4945\ncpu: 139504.85338726052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 138866.52746380304,
            "unit": "ns/iter",
            "extra": "iterations: 5043\ncpu: 138860.2815784261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 139674.78129325432,
            "unit": "ns/iter",
            "extra": "iterations: 5057\ncpu: 139673.83824401844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 86844.05442850334,
            "unit": "ns/iter",
            "extra": "iterations: 8084\ncpu: 86844.30974765055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 141073.14991928297,
            "unit": "ns/iter",
            "extra": "iterations: 4956\ncpu: 141066.2025827263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4465.028380432005,
            "unit": "ns/iter",
            "extra": "iterations: 156622\ncpu: 4465.040032690206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22489.990136031545,
            "unit": "ns/iter",
            "extra": "iterations: 31022\ncpu: 22489.607375410676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17972.891408970267,
            "unit": "ns/iter",
            "extra": "iterations: 39064\ncpu: 17972.849682572203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17996.922482208563,
            "unit": "ns/iter",
            "extra": "iterations: 39062\ncpu: 17995.51482258992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18433.229415478727,
            "unit": "ns/iter",
            "extra": "iterations: 38014\ncpu: 18433.282474877895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44619.9289456871,
            "unit": "ns/iter",
            "extra": "iterations: 15650\ncpu: 44617.44408945669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 168067.37010506107,
            "unit": "ns/iter",
            "extra": "iterations: 4188\ncpu: 168058.16618911098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 138080.56886699633,
            "unit": "ns/iter",
            "extra": "iterations: 5075\ncpu: 138081.10344827443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 136005.93889541947,
            "unit": "ns/iter",
            "extra": "iterations: 5106\ncpu: 136006.50215432709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 136798.89321144318,
            "unit": "ns/iter",
            "extra": "iterations: 5141\ncpu: 136791.05232445014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 84898.04196903532,
            "unit": "ns/iter",
            "extra": "iterations: 8268\ncpu: 84893.7953555873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 136277.57758787728,
            "unit": "ns/iter",
            "extra": "iterations: 5149\ncpu: 136271.29539716317 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479520619,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1495.4199210063712,
            "unit": "ns/iter",
            "extra": "iterations: 415983\ncpu: 1495.3774553287033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17515.029601630766,
            "unit": "ns/iter",
            "extra": "iterations: 47092\ncpu: 17514.987683683004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36787.873700577395,
            "unit": "ns/iter",
            "extra": "iterations: 22510\ncpu: 36787.19235895158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 54709.38430153356,
            "unit": "ns/iter",
            "extra": "iterations: 15441\ncpu: 54705.582539990944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 60788.07370000163,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60784.12999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 76252.35327362611,
            "unit": "ns/iter",
            "extra": "iterations: 11501\ncpu: 76249.87392400664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 91048.16214801584,
            "unit": "ns/iter",
            "extra": "iterations: 9553\ncpu: 91047.93258662205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 106011.41475409652,
            "unit": "ns/iter",
            "extra": "iterations: 7930\ncpu: 106011.19798234558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 123698.95763799874,
            "unit": "ns/iter",
            "extra": "iterations: 7011\ncpu: 123697.71787191564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1356.5490225703595,
            "unit": "ns/iter",
            "extra": "iterations: 516252\ncpu: 1356.5473838358002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1128.286001263984,
            "unit": "ns/iter",
            "extra": "iterations: 620256\ncpu: 1128.2455953670717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1120.463936593908,
            "unit": "ns/iter",
            "extra": "iterations: 627700\ncpu: 1120.3919069619244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1144.6679609805421,
            "unit": "ns/iter",
            "extra": "iterations: 610362\ncpu: 1144.607626293904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2059.4805086941947,
            "unit": "ns/iter",
            "extra": "iterations: 339536\ncpu: 2059.3836883276012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5703.538639999976,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5703.439999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27489.149010945264,
            "unit": "ns/iter",
            "extra": "iterations: 29877\ncpu: 27489.26264350508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24731.723930259726,
            "unit": "ns/iter",
            "extra": "iterations: 33209\ncpu: 24731.506519317052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25626.613263832085,
            "unit": "ns/iter",
            "extra": "iterations: 31846\ncpu: 25626.57790617355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24540.79572703512,
            "unit": "ns/iter",
            "extra": "iterations: 33279\ncpu: 24540.08533910273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 60750.77460000102,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60750.36999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 627814.0040000152,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 627773.4000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 505601.6599999964,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505596.70000000164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 507023.9869999966,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506985.30000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 507178.7040000117,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507143.5000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 362510.35669846396,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 362497.1381169637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 505048.70599999663,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505051.0000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2587675.1754874587,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2587546.796657382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1170453.1556961804,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 1170394.5569620251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3355702.445652135,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3355569.5652173893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8847.970967946028,
            "unit": "ns/iter",
            "extra": "iterations: 94964\ncpu: 8847.648582620763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44742.57542860146,
            "unit": "ns/iter",
            "extra": "iterations: 18607\ncpu: 44740.774977158995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38551.99091840546,
            "unit": "ns/iter",
            "extra": "iterations: 21472\ncpu: 38550.801043219006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39545.19127037057,
            "unit": "ns/iter",
            "extra": "iterations: 20986\ncpu: 39543.848279805534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38898.91124591671,
            "unit": "ns/iter",
            "extra": "iterations: 21430\ncpu: 38899.04806346241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75225.59810915234,
            "unit": "ns/iter",
            "extra": "iterations: 11635\ncpu: 75222.66437473126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 663631.5826149337,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 663601.2931034473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 529674.5769999803,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529645.4999999938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 528667.2790000181,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528669.2000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 525396.0530000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525369.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 384322.7852466236,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 384305.06329113856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 513230.3949999937,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513202.5999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2762673.139881026,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2762558.33333335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1200352.329048859,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 1200308.8688946015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5483.7386499997365,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5483.463999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 27085.95305474604,
            "unit": "ns/iter",
            "extra": "iterations: 30248\ncpu: 27084.84858503044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23271.750850365148,
            "unit": "ns/iter",
            "extra": "iterations: 35573\ncpu: 23270.441064852654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24120.04529027766,
            "unit": "ns/iter",
            "extra": "iterations: 34312\ncpu: 24118.675681977104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23757.011007376634,
            "unit": "ns/iter",
            "extra": "iterations: 34704\ncpu: 23756.097279852584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 58057.558400003014,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58057.029999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 632933.8909999933,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632936.5000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 506613.1939999536,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506597.3000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 508871.0100000071,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508865.09999999416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 505047.4170000143,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505049.90000000305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 359408.58519724687,
            "unit": "ns/iter",
            "extra": "iterations: 2459\ncpu: 359400.2440016263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 620361.224647876,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 620349.9999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 598.6928275514592,
            "unit": "ns/iter",
            "extra": "iterations: 1171915\ncpu: 598.688471433506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3428.95237605338,
            "unit": "ns/iter",
            "extra": "iterations: 204120\ncpu: 3428.9638447971774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2789.66143798651,
            "unit": "ns/iter",
            "extra": "iterations: 251115\ncpu: 2789.611930788676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2862.4848310175516,
            "unit": "ns/iter",
            "extra": "iterations: 244611\ncpu: 2862.467346112823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2236.901562020608,
            "unit": "ns/iter",
            "extra": "iterations: 312928\ncpu: 2236.8838838326897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16960.329421443104,
            "unit": "ns/iter",
            "extra": "iterations: 41327\ncpu: 16960.413289132914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 34507.929859224394,
            "unit": "ns/iter",
            "extra": "iterations: 20245\ncpu: 34507.25611262035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8268.29075046564,
            "unit": "ns/iter",
            "extra": "iterations: 84361\ncpu: 8268.32066950367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8224.78798686075,
            "unit": "ns/iter",
            "extra": "iterations: 85240\ncpu: 8224.621069920206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8223.766493585703,
            "unit": "ns/iter",
            "extra": "iterations: 85124\ncpu: 8223.705417978517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16368.407905508411,
            "unit": "ns/iter",
            "extra": "iterations: 42755\ncpu: 16368.062214945554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15470.677547488589,
            "unit": "ns/iter",
            "extra": "iterations: 45064\ncpu: 15470.337741878186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4428.002683578355,
            "unit": "ns/iter",
            "extra": "iterations: 157998\ncpu: 4427.911745718277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22554.328786998965,
            "unit": "ns/iter",
            "extra": "iterations: 31014\ncpu: 22554.053008318806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18220.48516860966,
            "unit": "ns/iter",
            "extra": "iterations: 38432\ncpu: 18219.928705245606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18066.81460876743,
            "unit": "ns/iter",
            "extra": "iterations: 38826\ncpu: 18066.04079740375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18573.161616428923,
            "unit": "ns/iter",
            "extra": "iterations: 37787\ncpu: 18573.234181067353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46580.19430775317,
            "unit": "ns/iter",
            "extra": "iterations: 15038\ncpu: 46579.90424258502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 165499.3967841079,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 165500.07093875553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 137955.21414499785,
            "unit": "ns/iter",
            "extra": "iterations: 5076\ncpu: 137952.73837667378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 138165.6153087394,
            "unit": "ns/iter",
            "extra": "iterations: 5069\ncpu: 138163.74038271754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 137292.50529828176,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 137290.20800627992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 85069.01289067465,
            "unit": "ns/iter",
            "extra": "iterations: 8223\ncpu: 85067.6273865997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 139117.40904562737,
            "unit": "ns/iter",
            "extra": "iterations: 5019\ncpu: 139113.20980274832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4361.007255108765,
            "unit": "ns/iter",
            "extra": "iterations: 160163\ncpu: 4360.977254422033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21869.724233809236,
            "unit": "ns/iter",
            "extra": "iterations: 32009\ncpu: 21868.921240901258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17916.140663973965,
            "unit": "ns/iter",
            "extra": "iterations: 38887\ncpu: 17915.95906086877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17655.044199453565,
            "unit": "ns/iter",
            "extra": "iterations: 39548\ncpu: 17654.705674117642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17897.929409359258,
            "unit": "ns/iter",
            "extra": "iterations: 39127\ncpu: 17897.554118639113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44449.07960325508,
            "unit": "ns/iter",
            "extra": "iterations: 15728\ncpu: 44446.9036113941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 162883.62427342174,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 162882.4226923971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 135844.5179367857,
            "unit": "ns/iter",
            "extra": "iterations: 5157\ncpu: 135845.12313360398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 135093.15083798772,
            "unit": "ns/iter",
            "extra": "iterations: 5191\ncpu: 135090.6954344054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 134834.1692337274,
            "unit": "ns/iter",
            "extra": "iterations: 5194\ncpu: 134833.1921447833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83544.18752241098,
            "unit": "ns/iter",
            "extra": "iterations: 8367\ncpu: 83542.35687821281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 134774.4083557893,
            "unit": "ns/iter",
            "extra": "iterations: 5194\ncpu: 134773.3731228349 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}