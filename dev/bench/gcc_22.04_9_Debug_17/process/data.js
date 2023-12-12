window.BENCHMARK_DATA = {
  "lastUpdate": 1702420965266,
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
        "date": 1702398816079,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15065.106351198416,
            "unit": "ns/iter",
            "extra": "iterations: 46196\ncpu: 15064.03801194909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 149118.99684321688,
            "unit": "ns/iter",
            "extra": "iterations: 5702\ncpu: 149100.98211153984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 282970.3304036424,
            "unit": "ns/iter",
            "extra": "iterations: 3072\ncpu: 282955.5338541667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 415877.06187051337,
            "unit": "ns/iter",
            "extra": "iterations: 2085\ncpu: 415846.7625899282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 552776.748264974,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 552749.3375394325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 553677.4079999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553663.6000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 667054.980659041,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 667046.2750716337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 768996.7094370953,
            "unit": "ns/iter",
            "extra": "iterations: 1208\ncpu: 768979.05629139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 875477.456603738,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 875456.9811320752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11998.93651418888,
            "unit": "ns/iter",
            "extra": "iterations: 58391\ncpu: 11998.595673990843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9906.506262781242,
            "unit": "ns/iter",
            "extra": "iterations: 70416\ncpu: 9906.038400363546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9989.049775112062,
            "unit": "ns/iter",
            "extra": "iterations: 70035\ncpu: 9988.578567858924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10201.68948320788,
            "unit": "ns/iter",
            "extra": "iterations: 70183\ncpu: 10200.81643702891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16402.73599100069,
            "unit": "ns/iter",
            "extra": "iterations: 42669\ncpu: 16401.610068199396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60236.360599998305,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60231.02999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 312975.37454279425,
            "unit": "ns/iter",
            "extra": "iterations: 2734\ncpu: 312961.33869787806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 251050.5835045632,
            "unit": "ns/iter",
            "extra": "iterations: 3407\ncpu: 251031.96360434376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 252992.75585184997,
            "unit": "ns/iter",
            "extra": "iterations: 3375\ncpu: 252978.87407407415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 250251.08321167956,
            "unit": "ns/iter",
            "extra": "iterations: 3425\ncpu: 250233.8686131393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 562252.504481417,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 562225.3521126754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4631617.915422972,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4631268.1592039745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3805459.7795918677,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3805245.7142857104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3782582.9390244526,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3782397.5609756135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3786584.3536587264,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3786396.341463414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2190075.1055156216,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2189958.27338129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3685694.371541323,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3685495.6521739177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14563461.716216203,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14562560.810810817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6451188.139999999,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6450888.999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18349892.87931029,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18349482.758620698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 66832.36442073947,
            "unit": "ns/iter",
            "extra": "iterations: 12749\ncpu: 66829.97882186859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 351837.61651674256,
            "unit": "ns/iter",
            "extra": "iterations: 2446\ncpu: 351821.13654946815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 280238.8130718966,
            "unit": "ns/iter",
            "extra": "iterations: 3060\ncpu: 280232.712418301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 278607.0009730903,
            "unit": "ns/iter",
            "extra": "iterations: 3083\ncpu: 278605.5465455703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 277971.64866622316,
            "unit": "ns/iter",
            "extra": "iterations: 3074\ncpu: 277967.17631750094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 567815.3041203361,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 567800.9810333556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4719545.269035665,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4719490.862944157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3839155.160493761,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3839102.8806584305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3848659.202479339,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3848549.173553732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3840138.5245900904,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3839990.163934424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2195656.1835293756,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2195647.294117661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3731290.928000135,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3731205.5999999815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14859739.890410975,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14858615.06849315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6473044.819999814,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6472622.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 59454.082299998845,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59451.0200000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 312791.64366557484,
            "unit": "ns/iter",
            "extra": "iterations: 2739\ncpu: 312765.680905438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 250919.3644613605,
            "unit": "ns/iter",
            "extra": "iterations: 3416\ncpu: 250904.80093676865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 251117.02962745485,
            "unit": "ns/iter",
            "extra": "iterations: 3409\ncpu: 251099.73599296104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 248870.17746643667,
            "unit": "ns/iter",
            "extra": "iterations: 3426\ncpu: 248851.1383537656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 542235.7070581011,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 542201.4990630836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4663375.950000272,
            "unit": "ns/iter",
            "extra": "iterations: 200\ncpu: 4663027.49999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3795689.263157965,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3795523.481781394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3805630.846153854,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3803076.113360317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3777321.59109321,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3777176.518218637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2159456.074418601,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2159446.046511621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3674385.3083002116,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3674236.7588932617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5629.075170714509,
            "unit": "ns/iter",
            "extra": "iterations: 124184\ncpu: 5628.851542871902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36426.19787267344,
            "unit": "ns/iter",
            "extra": "iterations: 19179\ncpu: 36423.61436988337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28841.606148013296,
            "unit": "ns/iter",
            "extra": "iterations: 24268\ncpu: 28841.552661941656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30026.18765008573,
            "unit": "ns/iter",
            "extra": "iterations: 23320\ncpu: 30025.407375643226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23195.089396539686,
            "unit": "ns/iter",
            "extra": "iterations: 30292\ncpu: 23194.440776442723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 144465.6918485049,
            "unit": "ns/iter",
            "extra": "iterations: 4858\ncpu: 144460.5804857974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 309520.5470871662,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 309519.4918966257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75729.01050010724,
            "unit": "ns/iter",
            "extra": "iterations: 9238\ncpu: 75727.48430396267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75968.82992091516,
            "unit": "ns/iter",
            "extra": "iterations: 9231\ncpu: 75967.61997616642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75555.1507011882,
            "unit": "ns/iter",
            "extra": "iterations: 9270\ncpu: 75554.11003236265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 154883.4222860956,
            "unit": "ns/iter",
            "extra": "iterations: 4523\ncpu: 154881.11872650994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 147608.5047418323,
            "unit": "ns/iter",
            "extra": "iterations: 4745\ncpu: 147605.9009483664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45894.52567124764,
            "unit": "ns/iter",
            "extra": "iterations: 15270\ncpu: 45893.431565160965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 225398.27534822738,
            "unit": "ns/iter",
            "extra": "iterations: 3087\ncpu: 225395.0437317801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 184178.23651671133,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 184172.95448565885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 185686.41296837723,
            "unit": "ns/iter",
            "extra": "iterations: 3763\ncpu: 185685.49030029244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 188022.7067669312,
            "unit": "ns/iter",
            "extra": "iterations: 3724\ncpu: 188017.40064447056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 303869.79356800567,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 303861.88613646233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1312165.0318948522,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1312131.3320825472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1101880.2054140079,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1101861.146496812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1104952.2714285688,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1104934.1269841176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1103446.3949447612,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1103426.6982622384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 699128.5835009939,
            "unit": "ns/iter",
            "extra": "iterations: 994\ncpu: 699104.5271629768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1092990.063962602,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1092926.5210608437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46795.731313400196,
            "unit": "ns/iter",
            "extra": "iterations: 14984\ncpu: 46795.521890016425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227054.92956832642,
            "unit": "ns/iter",
            "extra": "iterations: 3081\ncpu: 227047.8416098684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 189477.79866130138,
            "unit": "ns/iter",
            "extra": "iterations: 3735\ncpu: 189472.6104417667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 188323.80295302052,
            "unit": "ns/iter",
            "extra": "iterations: 3725\ncpu: 188316.42953020017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 189346.6897859667,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 189346.16635058238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 306615.3159051125,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 306609.5782073798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1304769.7073170724,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1304733.7711069405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1107160.4652996787,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1107131.2302839134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1109178.6925515216,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1109160.8557844562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1112329.546031701,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1112310.634920638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 696680.6529589004,
            "unit": "ns/iter",
            "extra": "iterations: 997\ncpu: 696630.8926780209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1092655.0125000211,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1092624.0625000137 ns\nthreads: 1"
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
        "date": 1702409092426,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15429.691937052421,
            "unit": "ns/iter",
            "extra": "iterations: 45244\ncpu: 15429.685704181773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 148191.17973461936,
            "unit": "ns/iter",
            "extra": "iterations: 5803\ncpu: 148184.57694296053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 278085.2783078916,
            "unit": "ns/iter",
            "extra": "iterations: 3144\ncpu: 278083.20610687026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 404209.205511451,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 404195.32928538066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 538637.9797172613,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 538627.1665642287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 539434.3080000113,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539419.2000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 642954.3399999887,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642938.8999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 749434.7467742052,
            "unit": "ns/iter",
            "extra": "iterations: 1240\ncpu: 749406.6129032262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 861690.5753676358,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 861675.1838235287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12048.10407146587,
            "unit": "ns/iter",
            "extra": "iterations: 58210\ncpu: 12047.177460917384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9913.67847054356,
            "unit": "ns/iter",
            "extra": "iterations: 68678\ncpu: 9913.109001426948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9905.194060216983,
            "unit": "ns/iter",
            "extra": "iterations: 70777\ncpu: 9905.178235867588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9949.30167081389,
            "unit": "ns/iter",
            "extra": "iterations: 70325\ncpu: 9948.476359758268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16540.320841985987,
            "unit": "ns/iter",
            "extra": "iterations: 42376\ncpu: 16539.55304889558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60473.02939999782,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60468.94999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 320919.39992559154,
            "unit": "ns/iter",
            "extra": "iterations: 2688\ncpu: 320906.1011904764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 252879.44723617897,
            "unit": "ns/iter",
            "extra": "iterations: 3383\ncpu: 252860.62666272518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 250212.66394636914,
            "unit": "ns/iter",
            "extra": "iterations: 3431\ncpu: 250203.43923054478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 248964.4401510616,
            "unit": "ns/iter",
            "extra": "iterations: 3442\ncpu: 248945.9907030797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 558736.5448188283,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 558716.2110616652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4509384.553398046,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4509048.058252443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3687031.904761957,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3686727.7777777747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3677016.347826123,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3676832.0158102685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3652279.535433258,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3652039.763779528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2125512.5310345055,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2125398.1609195406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3575399.965116233,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3575170.1550387572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14219018.85333303,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14218099.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6344398.690000048,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6344010.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18091107.23333352,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 18089648.33333337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 67167.99874549404,
            "unit": "ns/iter",
            "extra": "iterations: 12754\ncpu: 67163.85447702675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 355333.0252066142,
            "unit": "ns/iter",
            "extra": "iterations: 2420\ncpu: 355293.966942148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 286387.8972305703,
            "unit": "ns/iter",
            "extra": "iterations: 2997\ncpu: 286375.5755755749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 284528.3616810109,
            "unit": "ns/iter",
            "extra": "iterations: 3022\ncpu: 284506.088682991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 283335.1611092853,
            "unit": "ns/iter",
            "extra": "iterations: 3029\ncpu: 283316.639154836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 577538.886968049,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 577499.2021276612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4634357.94554446,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4631246.039603957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3750361.5322579215,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3750136.290322568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3771631.0323885446,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3771339.6761133415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3712899.956175229,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3712608.3665338582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2197677.6303317742,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2197508.767772519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3644681.667968719,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3644288.671874996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14769969.369863184,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14769209.589041185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6352550.810000253,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6351830.000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58467.10879999932,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58462.22999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 314275.4357090394,
            "unit": "ns/iter",
            "extra": "iterations: 2722\ncpu: 314249.44893460703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 250401.99589323136,
            "unit": "ns/iter",
            "extra": "iterations: 3409\ncpu: 250387.38633030353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 248964.946205288,
            "unit": "ns/iter",
            "extra": "iterations: 3439\ncpu: 248944.7223029952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 248420.8993582284,
            "unit": "ns/iter",
            "extra": "iterations: 3428\ncpu: 248400.08751458515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 545603.4078036267,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 545534.424166146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4580245.661764602,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4580015.686274516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3715865.4642856917,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3715611.9047619225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3721176.2777777794,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3720677.380952383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3691434.9173226636,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3691286.614173222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2155674.790804594,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2155468.9655172443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3601879.5852711727,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3601568.9922480653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6059.784336165021,
            "unit": "ns/iter",
            "extra": "iterations: 117966\ncpu: 6058.656731600604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36495.82180478465,
            "unit": "ns/iter",
            "extra": "iterations: 19271\ncpu: 36494.41129157808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31313.737082678817,
            "unit": "ns/iter",
            "extra": "iterations: 22315\ncpu: 31309.773694823944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32612.557760140895,
            "unit": "ns/iter",
            "extra": "iterations: 22680\ncpu: 32610.9523809525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23340.29144642695,
            "unit": "ns/iter",
            "extra": "iterations: 30081\ncpu: 23339.177553937694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 145566.51558602927,
            "unit": "ns/iter",
            "extra": "iterations: 4812\ncpu: 145552.9093931826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 283521.9801619521,
            "unit": "ns/iter",
            "extra": "iterations: 2470\ncpu: 283489.1497975745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74506.65511357869,
            "unit": "ns/iter",
            "extra": "iterations: 9377\ncpu: 74506.63325157372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74078.97438882085,
            "unit": "ns/iter",
            "extra": "iterations: 9449\ncpu: 74057.625145518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74326.62685774575,
            "unit": "ns/iter",
            "extra": "iterations: 9420\ncpu: 74325.11677282448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 152417.82201913948,
            "unit": "ns/iter",
            "extra": "iterations: 4596\ncpu: 152413.4029590973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 145548.62061807833,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 145548.47785977786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45132.21600000032,
            "unit": "ns/iter",
            "extra": "iterations: 15500\ncpu: 45130.67096774186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 218158.7672897256,
            "unit": "ns/iter",
            "extra": "iterations: 3210\ncpu: 218134.45482866137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 176933.09893993675,
            "unit": "ns/iter",
            "extra": "iterations: 3962\ncpu: 176921.0752145353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 184126.96155804434,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 184117.99898166876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 178170.1046600472,
            "unit": "ns/iter",
            "extra": "iterations: 3927\ncpu: 178165.41889483063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 305188.4627059825,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 305158.41283608275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1277353.2820513675,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1277349.267399281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1081877.6950464083,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1081727.0897832678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1075134.8159509657,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1075030.9815950901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1080341.214175635,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1080252.8505392955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 689006.6035328773,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 688928.6555446575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1065500.3445122463,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1065480.4878048785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45852.97732039648,
            "unit": "ns/iter",
            "extra": "iterations: 15256\ncpu: 45848.12532773927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 220848.28124998984,
            "unit": "ns/iter",
            "extra": "iterations: 3168\ncpu: 220831.47095959558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 180453.3380645074,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 180443.5612903218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 181707.57607282017,
            "unit": "ns/iter",
            "extra": "iterations: 3845\ncpu: 181707.33420026244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 183356.07563026357,
            "unit": "ns/iter",
            "extra": "iterations: 3808\ncpu: 183347.87289916043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 305357.28577661345,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 305348.16753926966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1274502.014571984,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1274436.429872501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1075905.9708141317,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1075904.6082949324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1075209.012307666,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1075207.8461538434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1074056.2850539184,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1074022.4961479325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 683511.992217903,
            "unit": "ns/iter",
            "extra": "iterations: 1028\ncpu: 683469.5525291868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1071002.9465649626,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1070958.6259541991 ns\nthreads: 1"
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
        "date": 1702412527812,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14337.546337556803,
            "unit": "ns/iter",
            "extra": "iterations: 48697\ncpu: 14336.735322504468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 118230.60522637736,
            "unit": "ns/iter",
            "extra": "iterations: 7156\ncpu: 118221.36668529903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 223473.55604112957,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 223463.52185089973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 326151.5636846217,
            "unit": "ns/iter",
            "extra": "iterations: 2638\ncpu: 326127.44503411656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 430611.9182358863,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 430596.63032705645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 532776.2064951212,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 532753.6151960783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 512263.599999983,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512261.2000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 592977.755999982,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592915.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 679876.0131771789,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 679834.0409956074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11410.010316671758,
            "unit": "ns/iter",
            "extra": "iterations: 61357\ncpu: 11409.38768192708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9422.745381680425,
            "unit": "ns/iter",
            "extra": "iterations: 72862\ncpu: 9422.045785182954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9414.28068192496,
            "unit": "ns/iter",
            "extra": "iterations: 74319\ncpu: 9414.203635678645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9485.68239581614,
            "unit": "ns/iter",
            "extra": "iterations: 73812\ncpu: 9485.273397279576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15676.416282401544,
            "unit": "ns/iter",
            "extra": "iterations: 44674\ncpu: 15675.307785288986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56946.56904612292,
            "unit": "ns/iter",
            "extra": "iterations: 14331\ncpu: 56944.93057009283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 257880.9982014466,
            "unit": "ns/iter",
            "extra": "iterations: 3336\ncpu: 257870.77338129483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 203012.0861823464,
            "unit": "ns/iter",
            "extra": "iterations: 4212\ncpu: 202998.4330484329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 202218.02985782208,
            "unit": "ns/iter",
            "extra": "iterations: 4220\ncpu: 202209.73933649273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 198858.6538191905,
            "unit": "ns/iter",
            "extra": "iterations: 4281\ncpu: 198849.40434477926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 475815.7589189424,
            "unit": "ns/iter",
            "extra": "iterations: 1850\ncpu: 475778.1081081082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3710352.3585657906,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3710261.3545816704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2999544.68064518,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2999364.838709669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3002816.5016181413,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3002755.663430418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2973617.5594855226,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2973468.1672025756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1741768.0772128773,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1741681.5442561242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2912428.6645768518,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2912331.974921631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11006852.989796164,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 11005853.06122451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6455665.402777792,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6455486.111111118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14664603.180555958,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14663719.444444409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53661.13540000015,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53660.80999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 288798.12657365686,
            "unit": "ns/iter",
            "extra": "iterations: 2939\ncpu: 288786.18577747454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 230001.2087882924,
            "unit": "ns/iter",
            "extra": "iterations: 3755\ncpu: 229987.43009320972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 228039.93108974464,
            "unit": "ns/iter",
            "extra": "iterations: 3744\ncpu: 228025.98824786264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 225379.64525509748,
            "unit": "ns/iter",
            "extra": "iterations: 3783\ncpu: 225369.15146708864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 489623.7487091115,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 489596.84452094213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3758203.1862347955,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3758035.2226720536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3036701.0751633807,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3036638.2352941134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3035671.9804560305,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3035576.547231271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3010099.429032255,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3009991.9354838785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1778073.3269598498,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1778031.3575525894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2945946.462025325,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2945894.303797456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11364266.968085308,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11363853.191489305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6562339.528169109,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6562197.183098592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54754.853817504365,
            "unit": "ns/iter",
            "extra": "iterations: 15036\ncpu: 54754.0901835593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 252282.7645851748,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 252277.42597478608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 199694.36224133486,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 199691.32759823362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 198313.16724496777,
            "unit": "ns/iter",
            "extra": "iterations: 4323\ncpu: 198312.39879713277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 195256.89199084791,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 195244.576659039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 457990.6288877036,
            "unit": "ns/iter",
            "extra": "iterations: 1897\ncpu: 457967.8439641519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3715297.6334661352,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3715137.4501992264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2991155.456591732,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2991052.411575548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2998783.054662398,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2998626.0450160815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2976965.118421049,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 2976847.0394736803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1728261.3703703948,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1728187.0370370299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2905737.8380062273,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2905591.2772585675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5770.303054589505,
            "unit": "ns/iter",
            "extra": "iterations: 121031\ncpu: 5769.956457436534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32699.195789178466,
            "unit": "ns/iter",
            "extra": "iterations: 21421\ncpu: 32697.847906260264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25802.033790762143,
            "unit": "ns/iter",
            "extra": "iterations: 27108\ncpu: 25800.25453740582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 24609.37773178648,
            "unit": "ns/iter",
            "extra": "iterations: 28507\ncpu: 24607.36310379906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20339.306793746022,
            "unit": "ns/iter",
            "extra": "iterations: 34414\ncpu: 20338.551171035404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 127775.40058372237,
            "unit": "ns/iter",
            "extra": "iterations: 5482\ncpu: 127768.22327617665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 247175.9774011349,
            "unit": "ns/iter",
            "extra": "iterations: 2832\ncpu: 247163.0649717518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62006.28692879671,
            "unit": "ns/iter",
            "extra": "iterations: 11292\ncpu: 62003.49805171766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61816.12203090281,
            "unit": "ns/iter",
            "extra": "iterations: 11325\ncpu: 61813.183222957945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61989.75788447582,
            "unit": "ns/iter",
            "extra": "iterations: 11288\ncpu: 61985.82565556369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 124766.8952533899,
            "unit": "ns/iter",
            "extra": "iterations: 5604\ncpu: 124759.93932905214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 117305.83967164041,
            "unit": "ns/iter",
            "extra": "iterations: 5969\ncpu: 117299.1790919747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40043.73720292359,
            "unit": "ns/iter",
            "extra": "iterations: 17504\ncpu: 40040.52787934198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 194865.36793764736,
            "unit": "ns/iter",
            "extra": "iterations: 3593\ncpu: 194851.04369607675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 158736.46749717605,
            "unit": "ns/iter",
            "extra": "iterations: 4415\ncpu: 158728.06342015933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 159936.94289630806,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 159926.63316582848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 158986.14230506797,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 158978.9724937484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 277852.13741065026,
            "unit": "ns/iter",
            "extra": "iterations: 2518\ncpu: 277829.1501191406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1084733.0385802477,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1084705.5555555576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 910047.148437491,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 909990.4947916608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 902435.9406450986,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 902398.0645161321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 899206.6829268493,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 899170.346598199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 594970.2199488211,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 594915.2600170423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 897233.5147624997,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 897209.4993581547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41181.54752090265,
            "unit": "ns/iter",
            "extra": "iterations: 16982\ncpu: 41177.78824637861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197737.9146410353,
            "unit": "ns/iter",
            "extra": "iterations: 3538\ncpu: 197736.37648389165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 163012.66534607354,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 163004.7308319743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 164366.47995365254,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 164356.40787948837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 162485.37355256287,
            "unit": "ns/iter",
            "extra": "iterations: 4318\ncpu: 162475.4515979635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 276615.28932806774,
            "unit": "ns/iter",
            "extra": "iterations: 2530\ncpu: 276601.3438735171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1082724.4590417955,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1082653.3230293598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 902225.659354797,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 902168.9032258088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 902452.226098135,
            "unit": "ns/iter",
            "extra": "iterations: 774\ncpu: 902396.8992248036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 899768.1209781585,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 899735.3925354016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 594660.0812870696,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 594631.8374259204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 899283.4878360861,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 899217.5416133152 ns\nthreads: 1"
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
        "date": 1702418341473,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14543.08476601796,
            "unit": "ns/iter",
            "extra": "iterations: 47696\ncpu: 14543.255199597454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 120188.75661971871,
            "unit": "ns/iter",
            "extra": "iterations: 7100\ncpu: 120187.26760563378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 229270.50831168646,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 229270.33766233773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 329249.96901300724,
            "unit": "ns/iter",
            "extra": "iterations: 2614\ncpu: 329242.92272379505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 431153.80239521596,
            "unit": "ns/iter",
            "extra": "iterations: 2004\ncpu: 431134.9301397202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 537567.8147004307,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 537548.9808523777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 517493.77699999855,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517457.0999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 598243.4530000092,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598250.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 681996.7231222492,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 681977.9823269516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11406.70452430319,
            "unit": "ns/iter",
            "extra": "iterations: 61247\ncpu: 11406.359495158928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9524.370310970813,
            "unit": "ns/iter",
            "extra": "iterations: 73576\ncpu: 9523.992878112429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9556.028075375498,
            "unit": "ns/iter",
            "extra": "iterations: 73552\ncpu: 9555.664020013057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9455.1944275294,
            "unit": "ns/iter",
            "extra": "iterations: 73899\ncpu: 9454.86948402549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15719.587497475775,
            "unit": "ns/iter",
            "extra": "iterations: 44567\ncpu: 15719.752283079439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56539.48254648531,
            "unit": "ns/iter",
            "extra": "iterations: 14467\ncpu: 56537.4991359645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 257849.31139164427,
            "unit": "ns/iter",
            "extra": "iterations: 3327\ncpu: 257843.10189359784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 204117.50431448285,
            "unit": "ns/iter",
            "extra": "iterations: 4172\ncpu: 204109.9232981785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 202318.83729781336,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 202313.0827783061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 200908.9858055347,
            "unit": "ns/iter",
            "extra": "iterations: 4227\ncpu: 200900.75703808898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 480273.018548824,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 480254.3917075837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3767726.4858299587,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3767593.5222672075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3030572.9671051595,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3030499.013157901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3036640.029316016,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3036564.495114003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2990712.281553429,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2990698.058252431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1734191.4317756793,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1734156.8224299098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2940447.5949368235,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2940409.1772151953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11049804.670102913,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11049663.917525778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6594342.838028155,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6594357.746478868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14558030.273972174,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14557583.56164382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55158.54120000086,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55158.379999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 288001.8322192516,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 287997.4933155067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 230039.36495566054,
            "unit": "ns/iter",
            "extra": "iterations: 3721\ncpu: 230041.897339425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 228240.82732094772,
            "unit": "ns/iter",
            "extra": "iterations: 3770\ncpu: 228233.18302387287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 227314.64463906086,
            "unit": "ns/iter",
            "extra": "iterations: 3768\ncpu: 227314.0658174088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 488546.54991539865,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 488548.8437676219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3814440.1598360133,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3814415.163934417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3087280.4149658205,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3087199.659863962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3068093.9471946764,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3068027.3927392815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3044935.281045738,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3044908.8235294153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1761286.9602272864,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1761261.174242424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2971636.539936031,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2971615.6549520823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11342453.936170489,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11342139.361702075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6491114.0694445325,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6490878.472222257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54586.469949360675,
            "unit": "ns/iter",
            "extra": "iterations: 15008\ncpu: 54586.10074626898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 255196.2288763721,
            "unit": "ns/iter",
            "extra": "iterations: 3373\ncpu: 255191.66913726515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 201615.87776731083,
            "unit": "ns/iter",
            "extra": "iterations: 4246\ncpu: 201614.10739519584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 200749.34144630097,
            "unit": "ns/iter",
            "extra": "iterations: 4273\ncpu: 200739.43365316975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 197567.08051761214,
            "unit": "ns/iter",
            "extra": "iterations: 4173\ncpu: 197565.61226935146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 459871.4190938573,
            "unit": "ns/iter",
            "extra": "iterations: 1854\ncpu: 459870.7119741094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3773527.0364371235,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3773393.117408893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3053077.4657981684,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3053041.693811062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3044035.941367908,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3044011.4006514633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3012192.2161290436,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3012164.1935483837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1727345.526022261,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1727304.6468401498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2943060.6835443154,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2943020.253164551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5721.820252237719,
            "unit": "ns/iter",
            "extra": "iterations: 122900\ncpu: 5721.746135069141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32921.08826710454,
            "unit": "ns/iter",
            "extra": "iterations: 21265\ncpu: 32921.13331765815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25061.29922793925,
            "unit": "ns/iter",
            "extra": "iterations: 27718\ncpu: 25061.00728768325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26847.710876143996,
            "unit": "ns/iter",
            "extra": "iterations: 26103\ncpu: 26847.416005823092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20501.60188491431,
            "unit": "ns/iter",
            "extra": "iterations: 34166\ncpu: 20501.14441257401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 127707.40612468768,
            "unit": "ns/iter",
            "extra": "iterations: 5486\ncpu: 127705.63251914074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 251094.80451936641,
            "unit": "ns/iter",
            "extra": "iterations: 2788\ncpu: 251089.7417503567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 63018.881987572684,
            "unit": "ns/iter",
            "extra": "iterations: 11109\ncpu: 63018.075434332466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62766.73273246516,
            "unit": "ns/iter",
            "extra": "iterations: 11206\ncpu: 62764.96519721611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 62820.515284626694,
            "unit": "ns/iter",
            "extra": "iterations: 11155\ncpu: 62819.69520394378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 119922.43057455747,
            "unit": "ns/iter",
            "extra": "iterations: 5848\ncpu: 119921.08413132574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 118224.67808912876,
            "unit": "ns/iter",
            "extra": "iterations: 5924\ncpu: 118221.01620526519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40718.51045104573,
            "unit": "ns/iter",
            "extra": "iterations: 17271\ncpu: 40717.839152336084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 198323.3311669943,
            "unit": "ns/iter",
            "extra": "iterations: 3539\ncpu: 198318.59282282976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 160340.1482218336,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 160337.52797811545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 162005.2942401021,
            "unit": "ns/iter",
            "extra": "iterations: 4323\ncpu: 162001.80430256666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 160512.38324583133,
            "unit": "ns/iter",
            "extra": "iterations: 4381\ncpu: 160510.18032412414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 277819.01028887904,
            "unit": "ns/iter",
            "extra": "iterations: 2527\ncpu: 277813.0589632003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1097773.7969431437,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 1097760.2620087126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 914290.4313725892,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 914264.0522875941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 915428.761096644,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 915407.7023498768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 906803.9221790234,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 906790.920881963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 588887.9262364161,
            "unit": "ns/iter",
            "extra": "iterations: 1193\ncpu: 588875.6915339497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 901508.4342783876,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 901505.6701030978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40770.805576620296,
            "unit": "ns/iter",
            "extra": "iterations: 17143\ncpu: 40770.36108032413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 198887.29186876572,
            "unit": "ns/iter",
            "extra": "iterations: 3505\ncpu: 198848.98716119622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 164008.85570627704,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 164004.02245088792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 163853.61011000306,
            "unit": "ns/iter",
            "extra": "iterations: 4273\ncpu: 163849.80107652792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 164289.88839390795,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 164287.4794841732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 278316.08445678337,
            "unit": "ns/iter",
            "extra": "iterations: 2522\ncpu: 278309.3576526595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1084771.5077639765,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1084771.273291935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 907808.7172503555,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 907801.0376134885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 908313.1050583594,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 908298.0544747099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 905037.5847347975,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 905008.0206985876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 594217.8881355658,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 594203.050847467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 901272.8724227302,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 901270.6185567062 ns\nthreads: 1"
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
        "date": 1702420962447,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14489.01529620887,
            "unit": "ns/iter",
            "extra": "iterations: 48378\ncpu: 14488.720079374922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 119185.09225815258,
            "unit": "ns/iter",
            "extra": "iterations: 7143\ncpu: 119182.7943441131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 222764.41231007394,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 222761.03528199845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 324612.82310876844,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 324609.4091080167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 428418.7871921091,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 428402.46305418725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 534051.4077017192,
            "unit": "ns/iter",
            "extra": "iterations: 1636\ncpu: 534033.3129584349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 511234.8529999906,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511216.1999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 592070.3360000061,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592059.5999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 675621.3301679941,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 675594.8137326518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11387.2962644561,
            "unit": "ns/iter",
            "extra": "iterations: 61651\ncpu: 11386.934518499284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9395.1335261733,
            "unit": "ns/iter",
            "extra": "iterations: 75019\ncpu: 9394.770658099953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9479.713079884956,
            "unit": "ns/iter",
            "extra": "iterations: 74282\ncpu: 9479.619557900984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9537.635405008352,
            "unit": "ns/iter",
            "extra": "iterations: 74159\ncpu: 9537.412856160396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15667.853480109896,
            "unit": "ns/iter",
            "extra": "iterations: 42786\ncpu: 15667.702052073113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57013.11833696324,
            "unit": "ns/iter",
            "extra": "iterations: 14239\ncpu: 57012.45171711495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 247880.57882557056,
            "unit": "ns/iter",
            "extra": "iterations: 3457\ncpu: 247866.7920161993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 198811.7829023988,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 198805.008152807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 197724.26376677892,
            "unit": "ns/iter",
            "extra": "iterations: 4322\ncpu: 197717.60758907933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 196894.79157069937,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 196889.59005066825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 482711.4860579628,
            "unit": "ns/iter",
            "extra": "iterations: 1829\ncpu: 482692.83761618484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3717613.2971887547,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3717476.305220877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2981278.070512835,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2981240.0641025654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2976208.4358974122,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2976107.051282054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2956951.710191051,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2956871.974522294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1729291.0782122933,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1729267.5977653617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2906309.618750047,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2906218.437500008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11048113.185567154,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11047999.999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6468978.888111846,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6468907.692307697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14491847.890410911,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14491475.342465786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53218.62620000105,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53218.74000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 281065.8643790875,
            "unit": "ns/iter",
            "extra": "iterations: 3060\ncpu: 281062.3529411764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 224592.48489624422,
            "unit": "ns/iter",
            "extra": "iterations: 3807\ncpu: 224592.93406881907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 221629.15619343266,
            "unit": "ns/iter",
            "extra": "iterations: 3867\ncpu: 221624.98060512033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 220683.3984556008,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 220681.90476190517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 492129.883615828,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 492115.3672316384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3767552.202429227,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3767481.781376522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3048168.9999999907,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3048131.147540976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3023932.970779254,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3023860.389610381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2995835.903537017,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2995840.836012875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1762137.6155303055,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1762094.5075757662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2939085.353312294,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2939064.984227128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11376370.610526308,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11376073.68421056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6428728.600000034,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6428452.413793097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53417.2054278651,
            "unit": "ns/iter",
            "extra": "iterations: 15402\ncpu: 53416.17971691986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 245399.59490409304,
            "unit": "ns/iter",
            "extra": "iterations: 3493\ncpu: 245393.6444317207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 194466.66083995317,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 194461.49829738901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 193406.70594888434,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 193398.21307396478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 191842.24865108298,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 191838.46672661952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 461875.0291159302,
            "unit": "ns/iter",
            "extra": "iterations: 1889\ncpu: 461866.17257808393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3732185.698795095,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3732137.7510040295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2995519.711538427,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2995405.7692307583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3014303.6538461116,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 3014193.2692307713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2967250.771428459,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2967185.079365092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1721490.9574860432,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1721429.3900184846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2902655.86292823,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2902615.887850472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5790.050715951475,
            "unit": "ns/iter",
            "extra": "iterations: 121796\ncpu: 5789.8609149725735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32852.41121013063,
            "unit": "ns/iter",
            "extra": "iterations: 21320\ncpu: 32852.443714821915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26772.831954194044,
            "unit": "ns/iter",
            "extra": "iterations: 27070\ncpu: 26772.105652013342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26407.926676479852,
            "unit": "ns/iter",
            "extra": "iterations: 26499\ncpu: 26407.947469715968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20730.71534032252,
            "unit": "ns/iter",
            "extra": "iterations: 33865\ncpu: 20730.031005462813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 129485.70632584847,
            "unit": "ns/iter",
            "extra": "iterations: 5438\ncpu: 129479.38580360582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 247085.19279660293,
            "unit": "ns/iter",
            "extra": "iterations: 2832\ncpu: 247065.99576271448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61730.52494500562,
            "unit": "ns/iter",
            "extra": "iterations: 11365\ncpu: 61729.0717113947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61660.902542002106,
            "unit": "ns/iter",
            "extra": "iterations: 11369\ncpu: 61657.92945729552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61601.573779148894,
            "unit": "ns/iter",
            "extra": "iterations: 11365\ncpu: 61600.55433347993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 124994.17046458002,
            "unit": "ns/iter",
            "extra": "iterations: 5661\ncpu: 124987.77601130694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 111081.58678078657,
            "unit": "ns/iter",
            "extra": "iterations: 6309\ncpu: 111075.65382786513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39199.03890070762,
            "unit": "ns/iter",
            "extra": "iterations: 17866\ncpu: 39197.77230493674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 195895.39877128394,
            "unit": "ns/iter",
            "extra": "iterations: 3581\ncpu: 195883.41245461797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157614.8631291351,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 157612.84445456506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 158412.10088216205,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 158407.44175525985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 157374.31060775171,
            "unit": "ns/iter",
            "extra": "iterations: 4459\ncpu: 157371.74254317145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 272366.9778382602,
            "unit": "ns/iter",
            "extra": "iterations: 2572\ncpu: 272360.5754276813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1080340.87500001,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1080086.4197530795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 900680.8554838772,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 900669.9354838768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 901719.3088802794,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 901665.637065634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 898612.3790013009,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 898593.2138284247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 583824.7173913044,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 583802.8428093668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 891561.9910828014,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 891555.2866241955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40335.439645754275,
            "unit": "ns/iter",
            "extra": "iterations: 17389\ncpu: 40334.176778422836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 195605.3047486131,
            "unit": "ns/iter",
            "extra": "iterations: 3580\ncpu: 195603.91061452377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 160335.14459211478,
            "unit": "ns/iter",
            "extra": "iterations: 4364\ncpu: 160331.3703024734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 160822.92904859904,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 160821.9073946102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 161921.97489635673,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 161920.61262091357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 273888.3127201679,
            "unit": "ns/iter",
            "extra": "iterations: 2555\ncpu: 273875.77299413335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1085232.1086955832,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1085202.795031044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 899892.4314981356,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 899854.8015365048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 901186.5778636024,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 901147.3616473649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 893547.0766283754,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 893547.2541506992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 588307.7443419818,
            "unit": "ns/iter",
            "extra": "iterations: 1193\ncpu: 588282.1458508004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 892537.7106273847,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 892512.2919334285 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}