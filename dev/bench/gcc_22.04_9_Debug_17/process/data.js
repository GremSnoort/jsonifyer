window.BENCHMARK_DATA = {
  "lastUpdate": 1702397928607,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-9 22.04 Debug c++-17": [
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
        "date": 1702397927178,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15053.32669607027,
            "unit": "ns/iter",
            "extra": "iterations: 46254\ncpu: 15053.098110433692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 148793.21115189962,
            "unit": "ns/iter",
            "extra": "iterations: 5721\ncpu: 148791.43506380005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 281210.49349382624,
            "unit": "ns/iter",
            "extra": "iterations: 3074\ncpu: 281203.9037085231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 415218.3314231177,
            "unit": "ns/iter",
            "extra": "iterations: 2094\ncpu: 415215.42502387805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 549936.3427495271,
            "unit": "ns/iter",
            "extra": "iterations: 1593\ncpu: 549925.5492780914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 551706.7569999767,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551697.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 657394.7819999831,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 657374.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 763754.5664740007,
            "unit": "ns/iter",
            "extra": "iterations: 1211\ncpu: 763742.1139554087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 872802.8215297667,
            "unit": "ns/iter",
            "extra": "iterations: 1059\ncpu: 872769.216241738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12247.367506905974,
            "unit": "ns/iter",
            "extra": "iterations: 57920\ncpu: 12247.044198895042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9878.977476907341,
            "unit": "ns/iter",
            "extra": "iterations: 71127\ncpu: 9878.78723972613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9850.079683792372,
            "unit": "ns/iter",
            "extra": "iterations: 71219\ncpu: 9839.896656791025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9965.38703348245,
            "unit": "ns/iter",
            "extra": "iterations: 69826\ncpu: 9964.93569730474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16223.825560265894,
            "unit": "ns/iter",
            "extra": "iterations: 42926\ncpu: 16223.242323999444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60121.42800000219,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60116.72000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 317247.0925045726,
            "unit": "ns/iter",
            "extra": "iterations: 2735\ncpu: 317230.7129798901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 252717.79212318826,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 252706.10008883607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 252436.55061211932,
            "unit": "ns/iter",
            "extra": "iterations: 3349\ncpu: 252430.60615108974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 250269.6787277401,
            "unit": "ns/iter",
            "extra": "iterations: 3427\ncpu: 250268.22293551214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 560590.7463164463,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 560542.0884048695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4635988.308457648,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4635511.442786055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3803212.678861901,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3802971.9512195066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3779976.4122450124,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3779730.612244903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3798359.008130099,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3798163.0081300857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2202217.289099549,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2202044.7867298606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3690347.0674605025,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3690076.984126984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14607313.164384004,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14606780.821917811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6342714.4199999925,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6341749.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18442717.8103443,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18442444.827586185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 66495.87884211152,
            "unit": "ns/iter",
            "extra": "iterations: 12851\ncpu: 66491.938370555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 346164.948088527,
            "unit": "ns/iter",
            "extra": "iterations: 2485\ncpu: 346153.07847082516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 277640.0689655003,
            "unit": "ns/iter",
            "extra": "iterations: 3074\ncpu: 277626.0897852966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 277218.4214101022,
            "unit": "ns/iter",
            "extra": "iterations: 3092\ncpu: 277215.07115135825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 276957.1214862547,
            "unit": "ns/iter",
            "extra": "iterations: 3095\ncpu: 276952.1163166403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 562275.3001293647,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 562255.0452781373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4687669.623115655,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4687637.6884421995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3819412.385245764,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3819327.8688524636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3816047.2213115874,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3816043.8524589953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3833015.9057376604,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3832977.0491803447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2223487.6181383147,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2223418.3770883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3880067.8047808437,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3880040.6374501977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14915038.028169567,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14914578.873239428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6427081.069999758,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6427010.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 60333.77800000039,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60330.00999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 311428.87223229813,
            "unit": "ns/iter",
            "extra": "iterations: 2755\ncpu: 311411.97822141537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 248876.89505814458,
            "unit": "ns/iter",
            "extra": "iterations: 3440\ncpu: 248806.5988372094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 248891.83478512111,
            "unit": "ns/iter",
            "extra": "iterations: 3444\ncpu: 248871.08013937302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 247216.78959537193,
            "unit": "ns/iter",
            "extra": "iterations: 3460\ncpu: 247206.5606936417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 537248.7447724581,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 537225.7072570756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4652885.410000067,
            "unit": "ns/iter",
            "extra": "iterations: 200\ncpu: 4652531.9999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3786294.7206478757,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3786028.7449392583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3782105.0731708985,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3781942.6829268173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3794303.3495935197,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3794056.504065061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2187332.642352912,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2187243.52941176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3683646.6837945343,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3683448.22134388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5563.986039477995,
            "unit": "ns/iter",
            "extra": "iterations: 125640\ncpu: 5563.6278255332745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37596.19838926281,
            "unit": "ns/iter",
            "extra": "iterations: 18625\ncpu: 37593.46577181233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29784.14155115277,
            "unit": "ns/iter",
            "extra": "iterations: 23518\ncpu: 29782.353941661542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31398.794988099482,
            "unit": "ns/iter",
            "extra": "iterations: 22267\ncpu: 31396.658732653592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23218.41921252548,
            "unit": "ns/iter",
            "extra": "iterations: 30147\ncpu: 23216.993399011335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 145043.11440414737,
            "unit": "ns/iter",
            "extra": "iterations: 4825\ncpu: 145034.300518133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 305606.0812227015,
            "unit": "ns/iter",
            "extra": "iterations: 2290\ncpu: 305590.6113537074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76096.80554046841,
            "unit": "ns/iter",
            "extra": "iterations: 9205\ncpu: 76089.79902226983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75457.39381488058,
            "unit": "ns/iter",
            "extra": "iterations: 9248\ncpu: 75452.48702422052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75765.16040181516,
            "unit": "ns/iter",
            "extra": "iterations: 9258\ncpu: 75762.11924821723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 157339.73654708365,
            "unit": "ns/iter",
            "extra": "iterations: 4460\ncpu: 157333.40807174865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 147807.08203290633,
            "unit": "ns/iter",
            "extra": "iterations: 4742\ncpu: 147798.2918599762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46163.72484896175,
            "unit": "ns/iter",
            "extra": "iterations: 15228\ncpu: 46051.011294983204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 225087.00449438868,
            "unit": "ns/iter",
            "extra": "iterations: 3115\ncpu: 225075.15248796035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 183536.69009669055,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 183532.45361902195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 185334.2928382002,
            "unit": "ns/iter",
            "extra": "iterations: 3770\ncpu: 185335.623342176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 185318.4892885405,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 185320.02115842266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 301101.0257953659,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 301100.601891661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1319267.6184210777,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1319219.924812029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1103029.522834649,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1103018.582677164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1119213.6740858685,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1119173.6089030164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1106614.7788309038,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1106604.2654028398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 706559.3842265317,
            "unit": "ns/iter",
            "extra": "iterations: 989\ncpu: 706517.79575328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1095553.854231981,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1095461.1285266476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46440.135476616415,
            "unit": "ns/iter",
            "extra": "iterations: 15117\ncpu: 46440.50406826767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227037.02855289113,
            "unit": "ns/iter",
            "extra": "iterations: 3082\ncpu: 227034.06878650284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 187040.23331553664,
            "unit": "ns/iter",
            "extra": "iterations: 3746\ncpu: 187039.64228510272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 187428.59518072908,
            "unit": "ns/iter",
            "extra": "iterations: 3735\ncpu: 187430.20080321588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 187925.806815139,
            "unit": "ns/iter",
            "extra": "iterations: 3727\ncpu: 187927.2068687972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 305527.4251418561,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 305523.39589699416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1318164.0432330063,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1318175.1879699223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1102708.1451103848,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1102682.8075709855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1100991.3375394212,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1100986.7507886342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1106858.2654028316,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1106831.279620842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 701918.6334340416,
            "unit": "ns/iter",
            "extra": "iterations: 993\ncpu: 701924.3705941542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1097184.5796874822,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1097163.437500015 ns\nthreads: 1"
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
        "date": 1702397927178,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15053.32669607027,
            "unit": "ns/iter",
            "extra": "iterations: 46254\ncpu: 15053.098110433692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 148793.21115189962,
            "unit": "ns/iter",
            "extra": "iterations: 5721\ncpu: 148791.43506380005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 281210.49349382624,
            "unit": "ns/iter",
            "extra": "iterations: 3074\ncpu: 281203.9037085231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 415218.3314231177,
            "unit": "ns/iter",
            "extra": "iterations: 2094\ncpu: 415215.42502387805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 549936.3427495271,
            "unit": "ns/iter",
            "extra": "iterations: 1593\ncpu: 549925.5492780914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 551706.7569999767,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551697.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 657394.7819999831,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 657374.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 763754.5664740007,
            "unit": "ns/iter",
            "extra": "iterations: 1211\ncpu: 763742.1139554087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 872802.8215297667,
            "unit": "ns/iter",
            "extra": "iterations: 1059\ncpu: 872769.216241738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12247.367506905974,
            "unit": "ns/iter",
            "extra": "iterations: 57920\ncpu: 12247.044198895042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9878.977476907341,
            "unit": "ns/iter",
            "extra": "iterations: 71127\ncpu: 9878.78723972613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9850.079683792372,
            "unit": "ns/iter",
            "extra": "iterations: 71219\ncpu: 9839.896656791025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9965.38703348245,
            "unit": "ns/iter",
            "extra": "iterations: 69826\ncpu: 9964.93569730474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16223.825560265894,
            "unit": "ns/iter",
            "extra": "iterations: 42926\ncpu: 16223.242323999444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60121.42800000219,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60116.72000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 317247.0925045726,
            "unit": "ns/iter",
            "extra": "iterations: 2735\ncpu: 317230.7129798901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 252717.79212318826,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 252706.10008883607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 252436.55061211932,
            "unit": "ns/iter",
            "extra": "iterations: 3349\ncpu: 252430.60615108974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 250269.6787277401,
            "unit": "ns/iter",
            "extra": "iterations: 3427\ncpu: 250268.22293551214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 560590.7463164463,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 560542.0884048695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4635988.308457648,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4635511.442786055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3803212.678861901,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3802971.9512195066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3779976.4122450124,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3779730.612244903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3798359.008130099,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3798163.0081300857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2202217.289099549,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2202044.7867298606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3690347.0674605025,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3690076.984126984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14607313.164384004,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14606780.821917811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6342714.4199999925,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6341749.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18442717.8103443,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18442444.827586185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 66495.87884211152,
            "unit": "ns/iter",
            "extra": "iterations: 12851\ncpu: 66491.938370555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 346164.948088527,
            "unit": "ns/iter",
            "extra": "iterations: 2485\ncpu: 346153.07847082516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 277640.0689655003,
            "unit": "ns/iter",
            "extra": "iterations: 3074\ncpu: 277626.0897852966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 277218.4214101022,
            "unit": "ns/iter",
            "extra": "iterations: 3092\ncpu: 277215.07115135825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 276957.1214862547,
            "unit": "ns/iter",
            "extra": "iterations: 3095\ncpu: 276952.1163166403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 562275.3001293647,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 562255.0452781373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4687669.623115655,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4687637.6884421995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3819412.385245764,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3819327.8688524636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3816047.2213115874,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3816043.8524589953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3833015.9057376604,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3832977.0491803447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2223487.6181383147,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2223418.3770883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3880067.8047808437,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3880040.6374501977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14915038.028169567,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14914578.873239428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6427081.069999758,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6427010.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 60333.77800000039,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60330.00999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 311428.87223229813,
            "unit": "ns/iter",
            "extra": "iterations: 2755\ncpu: 311411.97822141537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 248876.89505814458,
            "unit": "ns/iter",
            "extra": "iterations: 3440\ncpu: 248806.5988372094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 248891.83478512111,
            "unit": "ns/iter",
            "extra": "iterations: 3444\ncpu: 248871.08013937302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 247216.78959537193,
            "unit": "ns/iter",
            "extra": "iterations: 3460\ncpu: 247206.5606936417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 537248.7447724581,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 537225.7072570756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4652885.410000067,
            "unit": "ns/iter",
            "extra": "iterations: 200\ncpu: 4652531.9999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3786294.7206478757,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3786028.7449392583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3782105.0731708985,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3781942.6829268173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3794303.3495935197,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3794056.504065061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2187332.642352912,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2187243.52941176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3683646.6837945343,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3683448.22134388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5563.986039477995,
            "unit": "ns/iter",
            "extra": "iterations: 125640\ncpu: 5563.6278255332745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37596.19838926281,
            "unit": "ns/iter",
            "extra": "iterations: 18625\ncpu: 37593.46577181233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29784.14155115277,
            "unit": "ns/iter",
            "extra": "iterations: 23518\ncpu: 29782.353941661542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31398.794988099482,
            "unit": "ns/iter",
            "extra": "iterations: 22267\ncpu: 31396.658732653592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23218.41921252548,
            "unit": "ns/iter",
            "extra": "iterations: 30147\ncpu: 23216.993399011335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 145043.11440414737,
            "unit": "ns/iter",
            "extra": "iterations: 4825\ncpu: 145034.300518133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 305606.0812227015,
            "unit": "ns/iter",
            "extra": "iterations: 2290\ncpu: 305590.6113537074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76096.80554046841,
            "unit": "ns/iter",
            "extra": "iterations: 9205\ncpu: 76089.79902226983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75457.39381488058,
            "unit": "ns/iter",
            "extra": "iterations: 9248\ncpu: 75452.48702422052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75765.16040181516,
            "unit": "ns/iter",
            "extra": "iterations: 9258\ncpu: 75762.11924821723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 157339.73654708365,
            "unit": "ns/iter",
            "extra": "iterations: 4460\ncpu: 157333.40807174865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 147807.08203290633,
            "unit": "ns/iter",
            "extra": "iterations: 4742\ncpu: 147798.2918599762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46163.72484896175,
            "unit": "ns/iter",
            "extra": "iterations: 15228\ncpu: 46051.011294983204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 225087.00449438868,
            "unit": "ns/iter",
            "extra": "iterations: 3115\ncpu: 225075.15248796035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 183536.69009669055,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 183532.45361902195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 185334.2928382002,
            "unit": "ns/iter",
            "extra": "iterations: 3770\ncpu: 185335.623342176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 185318.4892885405,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 185320.02115842266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 301101.0257953659,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 301100.601891661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1319267.6184210777,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1319219.924812029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1103029.522834649,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1103018.582677164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1119213.6740858685,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1119173.6089030164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1106614.7788309038,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1106604.2654028398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 706559.3842265317,
            "unit": "ns/iter",
            "extra": "iterations: 989\ncpu: 706517.79575328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1095553.854231981,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1095461.1285266476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46440.135476616415,
            "unit": "ns/iter",
            "extra": "iterations: 15117\ncpu: 46440.50406826767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227037.02855289113,
            "unit": "ns/iter",
            "extra": "iterations: 3082\ncpu: 227034.06878650284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 187040.23331553664,
            "unit": "ns/iter",
            "extra": "iterations: 3746\ncpu: 187039.64228510272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 187428.59518072908,
            "unit": "ns/iter",
            "extra": "iterations: 3735\ncpu: 187430.20080321588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 187925.806815139,
            "unit": "ns/iter",
            "extra": "iterations: 3727\ncpu: 187927.2068687972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 305527.4251418561,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 305523.39589699416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1318164.0432330063,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1318175.1879699223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1102708.1451103848,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1102682.8075709855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1100991.3375394212,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1100986.7507886342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1106858.2654028316,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1106831.279620842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 701918.6334340416,
            "unit": "ns/iter",
            "extra": "iterations: 993\ncpu: 701924.3705941542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1097184.5796874822,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1097163.437500015 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}