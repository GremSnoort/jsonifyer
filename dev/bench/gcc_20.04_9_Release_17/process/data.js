window.BENCHMARK_DATA = {
  "lastUpdate": 1702397903311,
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
      }
    ]
  }
}