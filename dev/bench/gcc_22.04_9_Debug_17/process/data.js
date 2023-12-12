window.BENCHMARK_DATA = {
  "lastUpdate": 1702409094228,
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
      }
    ]
  }
}