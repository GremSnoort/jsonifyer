window.BENCHMARK_DATA = {
  "lastUpdate": 1702416002485,
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
      }
    ]
  }
}