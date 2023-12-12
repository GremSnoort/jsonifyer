window.BENCHMARK_DATA = {
  "lastUpdate": 1702409089499,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-9 20.04 Release c++-17": [
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
        "date": 1702397902397,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1677.3301473537945,
            "unit": "ns/iter",
            "extra": "iterations: 361375\ncpu: 1677.290626080941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25164.935578600227,
            "unit": "ns/iter",
            "extra": "iterations: 32691\ncpu: 25164.06962160839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 51672.764113402445,
            "unit": "ns/iter",
            "extra": "iterations: 16084\ncpu: 51672.22084058692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 64502.22849323333,
            "unit": "ns/iter",
            "extra": "iterations: 13519\ncpu: 64502.16732006809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 90413.75591323788,
            "unit": "ns/iter",
            "extra": "iterations: 10189\ncpu: 90409.5298851703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 113705.91954023088,
            "unit": "ns/iter",
            "extra": "iterations: 7743\ncpu: 113696.16427741187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 138400.38643753284,
            "unit": "ns/iter",
            "extra": "iterations: 6459\ncpu: 138387.11874903244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 160019.94825998275,
            "unit": "ns/iter",
            "extra": "iterations: 5431\ncpu: 160005.70797274893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 182012.64084803182,
            "unit": "ns/iter",
            "extra": "iterations: 4764\ncpu: 182002.12006717036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1460.605958820229,
            "unit": "ns/iter",
            "extra": "iterations: 479021\ncpu: 1460.486074723238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1194.1648137930033,
            "unit": "ns/iter",
            "extra": "iterations: 587196\ncpu: 1194.0939652177476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1166.7393022326735,
            "unit": "ns/iter",
            "extra": "iterations: 601060\ncpu: 1166.6324493395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1181.9133960318313,
            "unit": "ns/iter",
            "extra": "iterations: 589488\ncpu: 1181.8932700920127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2331.160142977126,
            "unit": "ns/iter",
            "extra": "iterations: 300188\ncpu: 2331.119165323063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7403.506087415065,
            "unit": "ns/iter",
            "extra": "iterations: 109981\ncpu: 7402.959602113084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 43689.48969235622,
            "unit": "ns/iter",
            "extra": "iterations: 18918\ncpu: 43689.35405433975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 33511.61154610627,
            "unit": "ns/iter",
            "extra": "iterations: 24649\ncpu: 33510.45072822429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 33146.96415843191,
            "unit": "ns/iter",
            "extra": "iterations: 24692\ncpu: 33145.504616879945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32472.222874131538,
            "unit": "ns/iter",
            "extra": "iterations: 25225\ncpu: 32471.758176412288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 80901.03753449922,
            "unit": "ns/iter",
            "extra": "iterations: 10870\ncpu: 80900.27598896046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 815900.080939971,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 815876.9364664932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 683502.7743553095,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 683478.2951289386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 679826.249631821,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 679824.1531664195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 679625.2612809249,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 679606.6229985444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 473748.6378935715,
            "unit": "ns/iter",
            "extra": "iterations: 1842\ncpu: 473747.28555917554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 662692.5510000205,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 662659.6000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3567617.750943469,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3567561.509433953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1521903.157810003,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1521849.436392917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4687141.445544393,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4687054.9504950475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 11509.826623270048,
            "unit": "ns/iter",
            "extra": "iterations: 73124\ncpu: 11509.382692412923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51290.39969999667,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51288.91999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 47113.40574019652,
            "unit": "ns/iter",
            "extra": "iterations: 18083\ncpu: 47112.02787148136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 45943.93580410458,
            "unit": "ns/iter",
            "extra": "iterations: 18132\ncpu: 45899.277520405994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 45445.33998469283,
            "unit": "ns/iter",
            "extra": "iterations: 18292\ncpu: 45445.22742182401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 92170.50948826829,
            "unit": "ns/iter",
            "extra": "iterations: 9380\ncpu: 92167.3773987209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 853950.9336965965,
            "unit": "ns/iter",
            "extra": "iterations: 1101\ncpu: 853938.3287920057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 695160.0494465133,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 695140.8856088546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 694603.4336023526,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 694480.4108583973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 688866.5850439888,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 688850.0733137873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 484959.0787139638,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 484957.7605321508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 678594.9124820618,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 678550.2869440448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3752931.334661461,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3752913.5458167405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1587948.005050468,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1587903.7037037034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7610.737782253598,
            "unit": "ns/iter",
            "extra": "iterations: 110229\ncpu: 7610.61970987674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 43431.003104773365,
            "unit": "ns/iter",
            "extra": "iterations: 19003\ncpu: 43429.67952428536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 34784.94240479203,
            "unit": "ns/iter",
            "extra": "iterations: 23370\ncpu: 34783.86820710289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 34329.606482057854,
            "unit": "ns/iter",
            "extra": "iterations: 24159\ncpu: 34329.52108944892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 34459.13627533866,
            "unit": "ns/iter",
            "extra": "iterations: 23680\ncpu: 34457.36908783782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 77579.86377514468,
            "unit": "ns/iter",
            "extra": "iterations: 11136\ncpu: 77579.36422413748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 841959.7573594686,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 841913.8269402283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 676640.2494623503,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 676638.3512544811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 673463.7423049562,
            "unit": "ns/iter",
            "extra": "iterations: 1397\ncpu: 673437.9384395161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 678721.7890000079,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 678720.6999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 478549.36885248154,
            "unit": "ns/iter",
            "extra": "iterations: 1830\ncpu: 478527.37704917905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 666337.3209999577,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 666335.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 612.1421472918439,
            "unit": "ns/iter",
            "extra": "iterations: 1144707\ncpu: 612.1316633863477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4557.118121417483,
            "unit": "ns/iter",
            "extra": "iterations: 153520\ncpu: 4557.110474205317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3495.34717753004,
            "unit": "ns/iter",
            "extra": "iterations: 200445\ncpu: 3495.26453640649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3573.2160978534907,
            "unit": "ns/iter",
            "extra": "iterations: 195231\ncpu: 3573.21122157857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2629.870383526825,
            "unit": "ns/iter",
            "extra": "iterations: 266031\ncpu: 2629.7239795362184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 21727.50469381366,
            "unit": "ns/iter",
            "extra": "iterations: 32170\ncpu: 21727.47901771844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 45611.07921951063,
            "unit": "ns/iter",
            "extra": "iterations: 15375\ncpu: 45608.61138211396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10777.024804257813,
            "unit": "ns/iter",
            "extra": "iterations: 64626\ncpu: 10777.010800606578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10743.617168198853,
            "unit": "ns/iter",
            "extra": "iterations: 65167\ncpu: 10742.980342811634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10834.989016081978,
            "unit": "ns/iter",
            "extra": "iterations: 64731\ncpu: 10834.553768673573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 22092.341228259866,
            "unit": "ns/iter",
            "extra": "iterations: 32257\ncpu: 22092.29624577624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 21186.856248689637,
            "unit": "ns/iter",
            "extra": "iterations: 33391\ncpu: 21186.445449372834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6589.422124442856,
            "unit": "ns/iter",
            "extra": "iterations: 106362\ncpu: 6589.40317030527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 32618.335288913873,
            "unit": "ns/iter",
            "extra": "iterations: 21477\ncpu: 32616.836615914748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 26269.056741044493,
            "unit": "ns/iter",
            "extra": "iterations: 26665\ncpu: 26269.04181511385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 25959.84145934552,
            "unit": "ns/iter",
            "extra": "iterations: 26971\ncpu: 25958.985577101415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 26782.966583826943,
            "unit": "ns/iter",
            "extra": "iterations: 26155\ncpu: 26782.936341043885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 58115.1878155799,
            "unit": "ns/iter",
            "extra": "iterations: 12081\ncpu: 58112.42446817326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 211602.46460042841,
            "unit": "ns/iter",
            "extra": "iterations: 3291\ncpu: 211602.00546946283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 179927.12083972673,
            "unit": "ns/iter",
            "extra": "iterations: 3906\ncpu: 179920.86533537897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 179054.44244604086,
            "unit": "ns/iter",
            "extra": "iterations: 3892\ncpu: 179051.1819116135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 181588.72545973258,
            "unit": "ns/iter",
            "extra": "iterations: 3861\ncpu: 181584.019684023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 106722.75399604405,
            "unit": "ns/iter",
            "extra": "iterations: 6569\ncpu: 106718.98310245083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 179406.379575124,
            "unit": "ns/iter",
            "extra": "iterations: 3907\ncpu: 179406.11722549435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6510.289563320609,
            "unit": "ns/iter",
            "extra": "iterations: 107745\ncpu: 6510.009745231763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 32571.266344501793,
            "unit": "ns/iter",
            "extra": "iterations: 21521\ncpu: 32571.223456159434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 26765.097829433686,
            "unit": "ns/iter",
            "extra": "iterations: 25984\ncpu: 26763.50831280754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 26734.99893039839,
            "unit": "ns/iter",
            "extra": "iterations: 26178\ncpu: 26734.910993964353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 27985.715443278637,
            "unit": "ns/iter",
            "extra": "iterations: 25176\ncpu: 27984.572608833965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 58894.86019433392,
            "unit": "ns/iter",
            "extra": "iterations: 11938\ncpu: 58894.664097839064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 208120.28558585735,
            "unit": "ns/iter",
            "extra": "iterations: 3337\ncpu: 208113.51513335173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 179496.9226448758,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 179494.02604033676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 178895.88951262974,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 178885.30237305575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 178780.3033478178,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 178775.84973166574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 106993.6824550743,
            "unit": "ns/iter",
            "extra": "iterations: 6566\ncpu: 106991.97380444755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 179418.2971867041,
            "unit": "ns/iter",
            "extra": "iterations: 3910\ncpu: 179411.25319693115 ns\nthreads: 1"
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
        "date": 1702409087466,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1531.980825535767,
            "unit": "ns/iter",
            "extra": "iterations: 460404\ncpu: 1531.90437094378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 23809.222674050216,
            "unit": "ns/iter",
            "extra": "iterations: 34674\ncpu: 23807.896406529388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 48884.39228086597,
            "unit": "ns/iter",
            "extra": "iterations: 16919\ncpu: 48882.5817128672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 61768.269199995986,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61763.47 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 86003.56424426811,
            "unit": "ns/iter",
            "extra": "iterations: 10857\ncpu: 85999.78815510726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 107413.25089296786,
            "unit": "ns/iter",
            "extra": "iterations: 8119\ncpu: 107401.73666707725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 130814.18950569992,
            "unit": "ns/iter",
            "extra": "iterations: 6575\ncpu: 130808.16730038016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 151509.06747283,
            "unit": "ns/iter",
            "extra": "iterations: 5706\ncpu: 151506.5720294428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 172276.2169260724,
            "unit": "ns/iter",
            "extra": "iterations: 5140\ncpu: 172267.6070038912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1309.7290881745344,
            "unit": "ns/iter",
            "extra": "iterations: 529246\ncpu: 1309.6556232829346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1054.5239517534453,
            "unit": "ns/iter",
            "extra": "iterations: 664586\ncpu: 1054.4355433307346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1053.709295084891,
            "unit": "ns/iter",
            "extra": "iterations: 663243\ncpu: 1053.685602411184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1033.4748874612817,
            "unit": "ns/iter",
            "extra": "iterations: 675101\ncpu: 1033.4201845353516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2152.9295938418263,
            "unit": "ns/iter",
            "extra": "iterations: 319063\ncpu: 2152.912434221452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7361.619503056642,
            "unit": "ns/iter",
            "extra": "iterations: 111562\ncpu: 7361.390975421745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 42604.96534754881,
            "unit": "ns/iter",
            "extra": "iterations: 19508\ncpu: 42604.341808488854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 32553.03389830378,
            "unit": "ns/iter",
            "extra": "iterations: 25429\ncpu: 32551.30756223207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30346.212156891786,
            "unit": "ns/iter",
            "extra": "iterations: 27178\ncpu: 30345.801751416544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30480.435384955937,
            "unit": "ns/iter",
            "extra": "iterations: 27068\ncpu: 30479.215309590567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 80045.69900811769,
            "unit": "ns/iter",
            "extra": "iterations: 11090\ncpu: 80044.40036068551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 782162.1433418089,
            "unit": "ns/iter",
            "extra": "iterations: 1179\ncpu: 782118.4902459722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 638766.0030000006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638759.9999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 636246.1119999806,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 636219.6000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 640349.9170000373,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640283.6000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 465518.38613334746,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 465511.2533333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 641825.941000036,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641783.0999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3512077.6966293086,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3511937.0786516825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1553945.8868552446,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1553838.6023294504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4553795.975609718,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4553414.634146344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 11183.974288898633,
            "unit": "ns/iter",
            "extra": "iterations: 75376\ncpu: 11183.762736149447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50268.91930000374,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50268.43999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 45695.00409948093,
            "unit": "ns/iter",
            "extra": "iterations: 18295\ncpu: 45691.80103853517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44969.463752493364,
            "unit": "ns/iter",
            "extra": "iterations: 18553\ncpu: 44966.85711205723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44003.28194650871,
            "unit": "ns/iter",
            "extra": "iterations: 18844\ncpu: 44002.78603268912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 90578.81280634138,
            "unit": "ns/iter",
            "extra": "iterations: 9589\ncpu: 90573.54260089654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 833671.894033851,
            "unit": "ns/iter",
            "extra": "iterations: 1123\ncpu: 833656.0106856688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 668184.1207520041,
            "unit": "ns/iter",
            "extra": "iterations: 1383\ncpu: 668135.2856109911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 671085.9100798006,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 671082.4510514855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 666543.3634377279,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 666501.6751638723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 480351.1412864241,
            "unit": "ns/iter",
            "extra": "iterations: 1819\ncpu: 480340.73666849674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 655559.7589999706,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 655494.3000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3715370.4642857322,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3715320.6349206325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1596199.3173242437,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1596114.7512864578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7369.134642218969,
            "unit": "ns/iter",
            "extra": "iterations: 112513\ncpu: 7369.098681930054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 41982.85851683355,
            "unit": "ns/iter",
            "extra": "iterations: 19755\ncpu: 41980.91622374074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 33612.54615197336,
            "unit": "ns/iter",
            "extra": "iterations: 24636\ncpu: 33610.89868485146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 32835.135485661755,
            "unit": "ns/iter",
            "extra": "iterations: 25213\ncpu: 32833.308214016455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 33043.633212478926,
            "unit": "ns/iter",
            "extra": "iterations: 25099\ncpu: 33042.36025339659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 77357.78150734362,
            "unit": "ns/iter",
            "extra": "iterations: 11172\ncpu: 77354.93197278965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 812512.2847222085,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 812479.51388889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 652882.4209999584,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652838.6000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 657770.5830000013,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 657749.5000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 652611.8260000544,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652559.1999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 476345.12784398155,
            "unit": "ns/iter",
            "extra": "iterations: 1846\ncpu: 476341.82015167736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 646057.4589999623,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 646032.4000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 583.1289410153996,
            "unit": "ns/iter",
            "extra": "iterations: 1206637\ncpu: 583.1006342421131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4168.43898021568,
            "unit": "ns/iter",
            "extra": "iterations: 173370\ncpu: 4168.21133990884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3366.5173428330595,
            "unit": "ns/iter",
            "extra": "iterations: 208011\ncpu: 3366.3849507958885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3234.2233791738713,
            "unit": "ns/iter",
            "extra": "iterations: 215893\ncpu: 3233.3781086001204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2535.1116593016145,
            "unit": "ns/iter",
            "extra": "iterations: 275857\ncpu: 2534.987692898868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20814.602313139603,
            "unit": "ns/iter",
            "extra": "iterations: 33461\ncpu: 20813.427572397555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 42466.35335775278,
            "unit": "ns/iter",
            "extra": "iterations: 16380\ncpu: 42466.01343101336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10146.154283058055,
            "unit": "ns/iter",
            "extra": "iterations: 68841\ncpu: 10145.445301491854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10112.799197830309,
            "unit": "ns/iter",
            "extra": "iterations: 69312\ncpu: 10112.139312095971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10064.995775740925,
            "unit": "ns/iter",
            "extra": "iterations: 69598\ncpu: 10064.572257823515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 19815.407202059796,
            "unit": "ns/iter",
            "extra": "iterations: 35351\ncpu: 19814.197618172304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 19779.08133295651,
            "unit": "ns/iter",
            "extra": "iterations: 35410\ncpu: 19778.243434058193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5806.407823636595,
            "unit": "ns/iter",
            "extra": "iterations: 120660\ncpu: 5806.309464611222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 29717.778830627823,
            "unit": "ns/iter",
            "extra": "iterations: 23534\ncpu: 29717.260134274322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 23591.03309493206,
            "unit": "ns/iter",
            "extra": "iterations: 29642\ncpu: 23590.82045745895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 23886.98646694295,
            "unit": "ns/iter",
            "extra": "iterations: 29040\ncpu: 23885.984848485114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 24388.200384952223,
            "unit": "ns/iter",
            "extra": "iterations: 28575\ncpu: 24386.54068241473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 54200.54237944144,
            "unit": "ns/iter",
            "extra": "iterations: 12919\ncpu: 54199.26464896599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 196735.27599774633,
            "unit": "ns/iter",
            "extra": "iterations: 3558\ncpu: 196729.56717257056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 169834.50423011978,
            "unit": "ns/iter",
            "extra": "iterations: 4137\ncpu: 169824.92144065944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 168167.41680672462,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 168166.69867947313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 168304.55703238185,
            "unit": "ns/iter",
            "extra": "iterations: 4138\ncpu: 168297.10004833186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 99714.8641011065,
            "unit": "ns/iter",
            "extra": "iterations: 7042\ncpu: 99712.09883555768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 167772.58754490924,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 167760.47904191664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6077.358825768451,
            "unit": "ns/iter",
            "extra": "iterations: 115616\ncpu: 6077.312828674321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 28986.39530566816,
            "unit": "ns/iter",
            "extra": "iterations: 24242\ncpu: 29040.11632703586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 24115.2950003457,
            "unit": "ns/iter",
            "extra": "iterations: 28922\ncpu: 24222.39125924936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 24509.30174799395,
            "unit": "ns/iter",
            "extra": "iterations: 28547\ncpu: 24508.708445721073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 25353.59639489889,
            "unit": "ns/iter",
            "extra": "iterations: 27683\ncpu: 25353.325145396113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 55006.45183036589,
            "unit": "ns/iter",
            "extra": "iterations: 12757\ncpu: 55006.05941835831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 192871.017336278,
            "unit": "ns/iter",
            "extra": "iterations: 3634\ncpu: 192852.7517886614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 167441.08966674656,
            "unit": "ns/iter",
            "extra": "iterations: 4171\ncpu: 167438.81563174477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 167094.11039579782,
            "unit": "ns/iter",
            "extra": "iterations: 4194\ncpu: 167081.0920362445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 166337.54742096434,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 166336.24910862674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 100064.1091615136,
            "unit": "ns/iter",
            "extra": "iterations: 6953\ncpu: 100085.4307493162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 166332.83586697988,
            "unit": "ns/iter",
            "extra": "iterations: 4210\ncpu: 166412.32779097295 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}