window.BENCHMARK_DATA = {
  "lastUpdate": 1702416013768,
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
        "date": 1702412561730,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1456.7478691050494,
            "unit": "ns/iter",
            "extra": "iterations: 476443\ncpu: 1456.7089872240751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17625.066479861205,
            "unit": "ns/iter",
            "extra": "iterations: 46751\ncpu: 17624.63262817908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36403.763702854914,
            "unit": "ns/iter",
            "extra": "iterations: 22696\ncpu: 36402.68769827282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53579.72780344029,
            "unit": "ns/iter",
            "extra": "iterations: 15588\ncpu: 53577.54683089557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 60119.25949999863,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60118.4 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 75691.3333620557,
            "unit": "ns/iter",
            "extra": "iterations: 11606\ncpu: 75691.06496639668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 89368.47978436683,
            "unit": "ns/iter",
            "extra": "iterations: 9646\ncpu: 89365.87186398511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 104875.54132726546,
            "unit": "ns/iter",
            "extra": "iterations: 8348\ncpu: 104871.45424053667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 123100.11470546947,
            "unit": "ns/iter",
            "extra": "iterations: 7079\ncpu: 123093.12049724541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1253.0253906843573,
            "unit": "ns/iter",
            "extra": "iterations: 559851\ncpu: 1252.987312695699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1010.2647043086766,
            "unit": "ns/iter",
            "extra": "iterations: 691549\ncpu: 1010.1903118940229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1009.2537582664695,
            "unit": "ns/iter",
            "extra": "iterations: 692407\ncpu: 1009.2152447909979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 998.8293364443372,
            "unit": "ns/iter",
            "extra": "iterations: 702880\ncpu: 998.7730480309576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1948.8378753195868,
            "unit": "ns/iter",
            "extra": "iterations: 359094\ncpu: 1948.7691245189262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5968.116656165391,
            "unit": "ns/iter",
            "extra": "iterations: 138081\ncpu: 5968.026013716587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33918.58994904762,
            "unit": "ns/iter",
            "extra": "iterations: 24336\ncpu: 33917.4884944116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 26607.729164656368,
            "unit": "ns/iter",
            "extra": "iterations: 31089\ncpu: 26606.860947601974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25332.63012386871,
            "unit": "ns/iter",
            "extra": "iterations: 32373\ncpu: 25331.903129150767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 25647.102144310553,
            "unit": "ns/iter",
            "extra": "iterations: 31945\ncpu: 25646.10111128496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 62463.81990000032,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62461.2299999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 609323.2329999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609312.599999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 617204.659958385,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 617186.1207494797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 609317.7298245728,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 609270.0350877185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 608900.8651685494,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 608868.9606741572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 354930.56407137297,
            "unit": "ns/iter",
            "extra": "iterations: 2466\ncpu: 354923.72262773826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 605310.3434903084,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 605271.2603878119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2602117.0626702704,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2601965.3950953647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1172280.6211180016,
            "unit": "ns/iter",
            "extra": "iterations: 805\ncpu: 1172236.0248447182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3501420.3408238506,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3501350.1872659144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9436.858453090194,
            "unit": "ns/iter",
            "extra": "iterations: 88861\ncpu: 9436.398420004292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50065.13238141444,
            "unit": "ns/iter",
            "extra": "iterations: 16528\ncpu: 50062.46369796704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39496.174026464694,
            "unit": "ns/iter",
            "extra": "iterations: 21083\ncpu: 39494.33192619644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39415.6291315477,
            "unit": "ns/iter",
            "extra": "iterations: 21118\ncpu: 39414.43792025776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 39028.594355596135,
            "unit": "ns/iter",
            "extra": "iterations: 21260\ncpu: 39027.11194731902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75322.23616687163,
            "unit": "ns/iter",
            "extra": "iterations: 11458\ncpu: 75319.76784779181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 652792.6320000006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652777.9999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 522846.3640000314,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522845.2000000061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 515717.933000019,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515685.90000000113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 514405.9909999896,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514383.00000000227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 377568.61005494115,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 377552.9784537376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 501038.3320000073,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501023.29999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2741979.483775908,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2741917.1091445405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1225642.8994778532,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 1225592.8198433404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5790.120953343842,
            "unit": "ns/iter",
            "extra": "iterations: 139467\ncpu: 5789.989746678436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 33127.50678970057,
            "unit": "ns/iter",
            "extra": "iterations: 24817\ncpu: 33126.69138090831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 25818.983518036857,
            "unit": "ns/iter",
            "extra": "iterations: 31853\ncpu: 25818.88990048038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24995.51705614481,
            "unit": "ns/iter",
            "extra": "iterations: 32950\ncpu: 24951.529590288283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 25006.78804860988,
            "unit": "ns/iter",
            "extra": "iterations: 32833\ncpu: 25005.655894983556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 60662.93830000404,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60660.75999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 611204.3029999654,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 611195.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 633177.0183745672,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 633128.7632508841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 620720.7523197538,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 620683.9400428261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 626626.2419700277,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 626615.631691647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 364821.21496484353,
            "unit": "ns/iter",
            "extra": "iterations: 2419\ncpu: 364808.68127325433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 610747.7980568934,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 610723.7335183868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 609.2480747112243,
            "unit": "ns/iter",
            "extra": "iterations: 1148529\ncpu: 609.2209252008438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4081.738754852504,
            "unit": "ns/iter",
            "extra": "iterations: 177232\ncpu: 4081.6336778911386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2910.150450581303,
            "unit": "ns/iter",
            "extra": "iterations: 247902\ncpu: 2909.9696654322934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2864.1985379690555,
            "unit": "ns/iter",
            "extra": "iterations: 253483\ncpu: 2864.0843764670453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2235.200311455736,
            "unit": "ns/iter",
            "extra": "iterations: 308230\ncpu: 2235.092301203636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17646.143712725803,
            "unit": "ns/iter",
            "extra": "iterations: 39739\ncpu: 17645.350914718387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33591.83206180052,
            "unit": "ns/iter",
            "extra": "iterations: 20841\ncpu: 33589.29513938875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8108.085435078283,
            "unit": "ns/iter",
            "extra": "iterations: 86674\ncpu: 8107.809723792579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8069.226001826252,
            "unit": "ns/iter",
            "extra": "iterations: 86517\ncpu: 8068.8165331668715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8106.127721538184,
            "unit": "ns/iter",
            "extra": "iterations: 85843\ncpu: 8105.726733688287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15555.705740033412,
            "unit": "ns/iter",
            "extra": "iterations: 45052\ncpu: 15554.907662256908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15289.752433505499,
            "unit": "ns/iter",
            "extra": "iterations: 45305\ncpu: 15289.113784350417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5254.26326126705,
            "unit": "ns/iter",
            "extra": "iterations: 132378\ncpu: 5254.150236444129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26270.647063242814,
            "unit": "ns/iter",
            "extra": "iterations: 26628\ncpu: 26269.794952681645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21126.64390140836,
            "unit": "ns/iter",
            "extra": "iterations: 33106\ncpu: 21126.596387361962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21158.5198588886,
            "unit": "ns/iter",
            "extra": "iterations: 32882\ncpu: 21157.970926342525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21724.18662693298,
            "unit": "ns/iter",
            "extra": "iterations: 32214\ncpu: 21723.47116160682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50650.30160226058,
            "unit": "ns/iter",
            "extra": "iterations: 13793\ncpu: 50647.277604582305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 166154.62390324537,
            "unit": "ns/iter",
            "extra": "iterations: 4217\ncpu: 166147.26108608002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 140361.4837414705,
            "unit": "ns/iter",
            "extra": "iterations: 4982\ncpu: 140354.0947410681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 138929.76981131823,
            "unit": "ns/iter",
            "extra": "iterations: 5035\ncpu: 138922.91956305728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 140069.35824484445,
            "unit": "ns/iter",
            "extra": "iterations: 4991\ncpu: 140066.0589060328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 88047.99543495085,
            "unit": "ns/iter",
            "extra": "iterations: 7886\ncpu: 88047.15952320423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 139488.1714570865,
            "unit": "ns/iter",
            "extra": "iterations: 5010\ncpu: 139483.67265469133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5203.385872308698,
            "unit": "ns/iter",
            "extra": "iterations: 134700\ncpu: 5203.105419450685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26043.232160803873,
            "unit": "ns/iter",
            "extra": "iterations: 26865\ncpu: 26042.155220547324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21412.16423022789,
            "unit": "ns/iter",
            "extra": "iterations: 32698\ncpu: 21411.071013517547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21504.468813622712,
            "unit": "ns/iter",
            "extra": "iterations: 32418\ncpu: 21503.704731939382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22155.921025997843,
            "unit": "ns/iter",
            "extra": "iterations: 31618\ncpu: 22155.08254791569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49043.78984238081,
            "unit": "ns/iter",
            "extra": "iterations: 14275\ncpu: 49041.46409807426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 163370.44806706594,
            "unit": "ns/iter",
            "extra": "iterations: 4294\ncpu: 163363.04145319213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 137553.89203539924,
            "unit": "ns/iter",
            "extra": "iterations: 5085\ncpu: 137546.647000985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 135732.91714006552,
            "unit": "ns/iter",
            "extra": "iterations: 5105\ncpu: 135730.93046033266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 138291.08269192147,
            "unit": "ns/iter",
            "extra": "iterations: 5067\ncpu: 138286.32326820662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 87639.33734035029,
            "unit": "ns/iter",
            "extra": "iterations: 7986\ncpu: 87634.86100676272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 137554.33365987684,
            "unit": "ns/iter",
            "extra": "iterations: 5104\ncpu: 137546.8064263333 ns\nthreads: 1"
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
        "date": 1702416010851,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1466.932980978409,
            "unit": "ns/iter",
            "extra": "iterations: 465629\ncpu: 1466.8667544332504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17229.181421381505,
            "unit": "ns/iter",
            "extra": "iterations: 47883\ncpu: 17228.235490675186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36369.97742880912,
            "unit": "ns/iter",
            "extra": "iterations: 22861\ncpu: 36367.78793578583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53775.53277171706,
            "unit": "ns/iter",
            "extra": "iterations: 15669\ncpu: 53772.404110026175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59699.317299998715,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59698.63000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 75428.60642570627,
            "unit": "ns/iter",
            "extra": "iterations: 11703\ncpu: 75425.66863197475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 89332.56392600095,
            "unit": "ns/iter",
            "extra": "iterations: 9730\ncpu: 89325.49845837613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 103692.0944139421,
            "unit": "ns/iter",
            "extra": "iterations: 8378\ncpu: 103687.28813559317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 120767.34212361874,
            "unit": "ns/iter",
            "extra": "iterations: 7167\ncpu: 120759.77396400161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1262.552258763043,
            "unit": "ns/iter",
            "extra": "iterations: 557916\ncpu: 1262.4846751123837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1007.2747568837923,
            "unit": "ns/iter",
            "extra": "iterations: 695655\ncpu: 1007.1999770000931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1020.1414743883288,
            "unit": "ns/iter",
            "extra": "iterations: 685898\ncpu: 1020.0974488918174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 999.7051457425579,
            "unit": "ns/iter",
            "extra": "iterations: 701065\ncpu: 999.6933237288994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1949.984620315676,
            "unit": "ns/iter",
            "extra": "iterations: 358785\ncpu: 1949.903424056187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5823.333000000161,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5823.029000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33903.41185391746,
            "unit": "ns/iter",
            "extra": "iterations: 24397\ncpu: 33900.14755912613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 26686.996475458716,
            "unit": "ns/iter",
            "extra": "iterations: 30926\ncpu: 26685.63991463495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25844.46902989651,
            "unit": "ns/iter",
            "extra": "iterations: 31708\ncpu: 25843.172070139983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 25518.273577529548,
            "unit": "ns/iter",
            "extra": "iterations: 31969\ncpu: 25517.31677562644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 62789.983499999384,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62784.04000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 601487.0189999896,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601445.6000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 606397.0681502193,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 606354.4506258693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 605615.2032011288,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 605598.1906750171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 609063.4020906121,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 609036.2369337982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 353177.6162648125,
            "unit": "ns/iter",
            "extra": "iterations: 2447\ncpu: 353154.51573355193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 598439.5984743267,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 598415.464632454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2551478.021798438,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2551326.158038142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1164115.685323372,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 1164039.925373134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3464500.8651685966,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3464259.176029968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9374.529808611967,
            "unit": "ns/iter",
            "extra": "iterations: 89974\ncpu: 9374.035832573849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50409.55225682163,
            "unit": "ns/iter",
            "extra": "iterations: 16572\ncpu: 50407.597151822345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 40757.604413371955,
            "unit": "ns/iter",
            "extra": "iterations: 21027\ncpu: 40755.41922290389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39362.49853690865,
            "unit": "ns/iter",
            "extra": "iterations: 21188\ncpu: 39362.02095525755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 39106.24057161606,
            "unit": "ns/iter",
            "extra": "iterations: 21133\ncpu: 39103.62466284956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75602.98774978414,
            "unit": "ns/iter",
            "extra": "iterations: 11510\ncpu: 75597.6976542135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 647532.4019999675,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647517.2000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 514524.74699999584,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514499.10000000184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 509818.1130000512,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509804.299999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 515858.1029999709,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515805.29999999667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 370754.04850273795,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 370740.4470687468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 622161.2633832939,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 622133.6902212725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2725840.2815249464,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2725660.703812314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1215668.188481636,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 1215614.7905759232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5726.251520000004,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5726.19600000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 42231.05647178938,
            "unit": "ns/iter",
            "extra": "iterations: 19585\ncpu: 42229.4000510595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30901.523107360856,
            "unit": "ns/iter",
            "extra": "iterations: 26788\ncpu: 30900.97058384343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29751.75169064736,
            "unit": "ns/iter",
            "extra": "iterations: 27800\ncpu: 29751.032374100767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 27301.6301954169,
            "unit": "ns/iter",
            "extra": "iterations: 30243\ncpu: 27301.468108322584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 61398.07210000186,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61395.25999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 620042.6560000096,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 620044.4999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 500245.37000001606,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500225.3999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 621821.347360914,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 621813.5520684759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 625426.3637650505,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 625404.246284498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 358161.8114989895,
            "unit": "ns/iter",
            "extra": "iterations: 2435\ncpu: 358154.0041067781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 610839.2621359172,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 610831.8307905694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 602.7567391853903,
            "unit": "ns/iter",
            "extra": "iterations: 1159747\ncpu: 602.7360277715728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4172.557798832064,
            "unit": "ns/iter",
            "extra": "iterations: 173308\ncpu: 4172.506750986711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3183.6337511549277,
            "unit": "ns/iter",
            "extra": "iterations: 217557\ncpu: 3183.4572089153494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2862.7667910831365,
            "unit": "ns/iter",
            "extra": "iterations: 243001\ncpu: 2862.6487133797928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2225.336829180552,
            "unit": "ns/iter",
            "extra": "iterations: 314373\ncpu: 2225.1615119618955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17529.744740603448,
            "unit": "ns/iter",
            "extra": "iterations: 39881\ncpu: 17529.023845941512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33706.97581771612,
            "unit": "ns/iter",
            "extra": "iterations: 20759\ncpu: 33704.16205019508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8064.09724365033,
            "unit": "ns/iter",
            "extra": "iterations: 86854\ncpu: 8063.775991894436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8015.710282302145,
            "unit": "ns/iter",
            "extra": "iterations: 87247\ncpu: 8015.217715222318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8096.803797103972,
            "unit": "ns/iter",
            "extra": "iterations: 86803\ncpu: 8096.622236558705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16515.484184801902,
            "unit": "ns/iter",
            "extra": "iterations: 42965\ncpu: 16514.807401372935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15370.65832491083,
            "unit": "ns/iter",
            "extra": "iterations: 45514\ncpu: 15369.567605571792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5228.477401171962,
            "unit": "ns/iter",
            "extra": "iterations: 134122\ncpu: 5228.215356168253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26410.640613285927,
            "unit": "ns/iter",
            "extra": "iterations: 26676\ncpu: 26408.49827560359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21230.931465869846,
            "unit": "ns/iter",
            "extra": "iterations: 33093\ncpu: 21230.021454688336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21172.964488636917,
            "unit": "ns/iter",
            "extra": "iterations: 33088\ncpu: 21170.790014506823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22042.242429865015,
            "unit": "ns/iter",
            "extra": "iterations: 32331\ncpu: 22041.232872475575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49799.58295486579,
            "unit": "ns/iter",
            "extra": "iterations: 14092\ncpu: 49794.40817485045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 165856.24413923232,
            "unit": "ns/iter",
            "extra": "iterations: 4223\ncpu: 165846.50722235144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 139559.105440823,
            "unit": "ns/iter",
            "extra": "iterations: 5036\ncpu: 139548.4710087353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 137443.7720166267,
            "unit": "ns/iter",
            "extra": "iterations: 5053\ncpu: 137437.779536908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 139176.58794269993,
            "unit": "ns/iter",
            "extra": "iterations: 5026\ncpu: 139170.55312375748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 89236.20720835791,
            "unit": "ns/iter",
            "extra": "iterations: 7852\ncpu: 89234.09322465697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 139044.51277986605,
            "unit": "ns/iter",
            "extra": "iterations: 5047\ncpu: 139037.80463641693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5447.537082346327,
            "unit": "ns/iter",
            "extra": "iterations: 128336\ncpu: 5447.071749158506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26577.476806285773,
            "unit": "ns/iter",
            "extra": "iterations: 26214\ncpu: 26576.32181277165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21900.207406249094,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 21897.96874999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21953.346513232394,
            "unit": "ns/iter",
            "extra": "iterations: 31892\ncpu: 21952.376771604035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22322.166932397853,
            "unit": "ns/iter",
            "extra": "iterations: 31360\ncpu: 22320.389030611972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50494.93152567029,
            "unit": "ns/iter",
            "extra": "iterations: 13830\ncpu: 50493.71655820663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 162242.7243293256,
            "unit": "ns/iter",
            "extra": "iterations: 4324\ncpu: 162236.40148011132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 136218.16031129123,
            "unit": "ns/iter",
            "extra": "iterations: 5140\ncpu: 136212.8210116726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 137020.7378961731,
            "unit": "ns/iter",
            "extra": "iterations: 5143\ncpu: 137015.18568928714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 137908.41263281237,
            "unit": "ns/iter",
            "extra": "iterations: 5082\ncpu: 137895.71035025455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 88608.77713056147,
            "unit": "ns/iter",
            "extra": "iterations: 7897\ncpu: 88604.87526908853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 137275.0734217279,
            "unit": "ns/iter",
            "extra": "iterations: 5053\ncpu: 137265.28794775376 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}