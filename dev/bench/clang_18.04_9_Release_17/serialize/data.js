window.BENCHMARK_DATA = {
  "lastUpdate": 1702490314521,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-9 18.04 Release c++-17": [
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490314159,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 725.5577083798576,
            "unit": "ns/iter",
            "extra": "iterations: 966792\ncpu: 725.550376916648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10756.124664026132,
            "unit": "ns/iter",
            "extra": "iterations: 77015\ncpu: 10755.751476985002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23891.562984579326,
            "unit": "ns/iter",
            "extra": "iterations: 34953\ncpu: 23891.30260635711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38755.266615563574,
            "unit": "ns/iter",
            "extra": "iterations: 22178\ncpu: 38754.03102173326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47306.16124216054,
            "unit": "ns/iter",
            "extra": "iterations: 16745\ncpu: 47303.971334726746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59147.17690939335,
            "unit": "ns/iter",
            "extra": "iterations: 14612\ncpu: 59145.50369559266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59547.527499989876,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59546.450000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68053.56053596607,
            "unit": "ns/iter",
            "extra": "iterations: 12538\ncpu: 68051.43563566753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77923.12678444681,
            "unit": "ns/iter",
            "extra": "iterations: 11208\ncpu: 77918.73661670237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 592.138176136068,
            "unit": "ns/iter",
            "extra": "iterations: 1185856\ncpu: 592.1090756381886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 486.3705803611332,
            "unit": "ns/iter",
            "extra": "iterations: 1433573\ncpu: 486.3711858412512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 481.1402920968876,
            "unit": "ns/iter",
            "extra": "iterations: 1451436\ncpu: 481.12875800242017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 498.09370611844076,
            "unit": "ns/iter",
            "extra": "iterations: 1412181\ncpu: 498.0788581633659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 928.4017297202952,
            "unit": "ns/iter",
            "extra": "iterations: 754226\ncpu: 928.3898990488245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3379.4225570780236,
            "unit": "ns/iter",
            "extra": "iterations: 236387\ncpu: 3379.358424955683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 16992.435766496925,
            "unit": "ns/iter",
            "extra": "iterations: 48565\ncpu: 16991.948934417807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 13338.259080812835,
            "unit": "ns/iter",
            "extra": "iterations: 61228\ncpu: 13337.88136146865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12874.772222047332,
            "unit": "ns/iter",
            "extra": "iterations: 63518\ncpu: 12874.478100695898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13179.96951099599,
            "unit": "ns/iter",
            "extra": "iterations: 61104\ncpu: 13179.803286200578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41368.60824533716,
            "unit": "ns/iter",
            "extra": "iterations: 19793\ncpu: 41364.52281109484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 436232.2878475577,
            "unit": "ns/iter",
            "extra": "iterations: 1942\ncpu: 436192.2760041181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 362773.1414183618,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 362744.5656735219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 374996.8118096866,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 374970.39082412934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 368228.7029744455,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 368195.9782153333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 223391.28501289804,
            "unit": "ns/iter",
            "extra": "iterations: 3870\ncpu: 223388.759689923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 366809.141186272,
            "unit": "ns/iter",
            "extra": "iterations: 2394\ncpu: 366781.1194653306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1872115.276209649,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1872065.7258064558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 730765.3651903794,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 730740.5594405613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2519888.6021798924,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2519860.217983653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3333.401286610954,
            "unit": "ns/iter",
            "extra": "iterations: 236746\ncpu: 3333.2001385451085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 16824.70425854508,
            "unit": "ns/iter",
            "extra": "iterations: 48796\ncpu: 16824.05115173383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 13610.40053170105,
            "unit": "ns/iter",
            "extra": "iterations: 59808\ncpu: 13609.943485821399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13119.98677736372,
            "unit": "ns/iter",
            "extra": "iterations: 62393\ncpu: 13119.955764268387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13602.166094807493,
            "unit": "ns/iter",
            "extra": "iterations: 58581\ncpu: 13601.782147795424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41631.253608349456,
            "unit": "ns/iter",
            "extra": "iterations: 20023\ncpu: 41630.01548219554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 468220.5785168602,
            "unit": "ns/iter",
            "extra": "iterations: 1834\ncpu: 468206.97928026185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 383416.8040510964,
            "unit": "ns/iter",
            "extra": "iterations: 2271\ncpu: 383408.9387934818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 378478.0065502157,
            "unit": "ns/iter",
            "extra": "iterations: 2290\ncpu: 378460.6113537111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 373162.05308584945,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 373148.89943893085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222307.7078907465,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 222292.8679817904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 373406.24733477365,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 373378.5074626888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1870956.65573762,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1870793.6475409816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 703290.0956719825,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 703220.4252088115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3357.2855556652544,
            "unit": "ns/iter",
            "extra": "iterations: 233261\ncpu: 3357.1454293688184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17464.650455306906,
            "unit": "ns/iter",
            "extra": "iterations: 48978\ncpu: 17463.749030176805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13429.116495101161,
            "unit": "ns/iter",
            "extra": "iterations: 60715\ncpu: 13428.119904471692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12956.289495669182,
            "unit": "ns/iter",
            "extra": "iterations: 64640\ncpu: 12955.064975247487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13529.2170185671,
            "unit": "ns/iter",
            "extra": "iterations: 61239\ncpu: 13528.486748640578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42070.08465189544,
            "unit": "ns/iter",
            "extra": "iterations: 20224\ncpu: 42068.59671677222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 450492.1628029371,
            "unit": "ns/iter",
            "extra": "iterations: 1898\ncpu: 450466.0695468886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 374900.7573529174,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 374895.458477509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370954.71317493037,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 370939.0496760264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 367428.8996139103,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 367418.31831831764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 223926.66055283108,
            "unit": "ns/iter",
            "extra": "iterations: 3871\ncpu: 223919.0390080087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 364802.7635135501,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 364797.6773648647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 294.09631277708183,
            "unit": "ns/iter",
            "extra": "iterations: 2380328\ncpu: 294.08258021583515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1590.9738941129092,
            "unit": "ns/iter",
            "extra": "iterations: 444191\ncpu: 1590.9426350376261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1083.71374832248,
            "unit": "ns/iter",
            "extra": "iterations: 623647\ncpu: 1083.6673631076546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1158.1712096654148,
            "unit": "ns/iter",
            "extra": "iterations: 618791\ncpu: 1158.1698828845283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 993.2726853630794,
            "unit": "ns/iter",
            "extra": "iterations: 702810\ncpu: 993.2374325920248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7374.392198051957,
            "unit": "ns/iter",
            "extra": "iterations: 95207\ncpu: 7374.094341802621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18562.337087883174,
            "unit": "ns/iter",
            "extra": "iterations: 37732\ncpu: 18561.520725114133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4444.986588898846,
            "unit": "ns/iter",
            "extra": "iterations: 158078\ncpu: 4444.8974556864405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4390.610573277357,
            "unit": "ns/iter",
            "extra": "iterations: 158248\ncpu: 4390.456119508695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4424.89785856979,
            "unit": "ns/iter",
            "extra": "iterations: 158212\ncpu: 4424.7459105504095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9299.930746542595,
            "unit": "ns/iter",
            "extra": "iterations: 78321\ncpu: 9299.693568774697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8435.597308003615,
            "unit": "ns/iter",
            "extra": "iterations: 83061\ncpu: 8435.348719615702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3170.745845490701,
            "unit": "ns/iter",
            "extra": "iterations: 221747\ncpu: 3170.641767419674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16293.871653523314,
            "unit": "ns/iter",
            "extra": "iterations: 42993\ncpu: 16293.3244946855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13354.189891917877,
            "unit": "ns/iter",
            "extra": "iterations: 51998\ncpu: 13353.63283203201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13192.786464862396,
            "unit": "ns/iter",
            "extra": "iterations: 54244\ncpu: 13192.21480716759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13310.024567873774,
            "unit": "ns/iter",
            "extra": "iterations: 52589\ncpu: 13310.017303998995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27858.73888600899,
            "unit": "ns/iter",
            "extra": "iterations: 25081\ncpu: 27857.58143614681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99625.99325273995,
            "unit": "ns/iter",
            "extra": "iterations: 7114\ncpu: 99621.39443351129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85823.9050934386,
            "unit": "ns/iter",
            "extra": "iterations: 8187\ncpu: 85820.98448760188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84230.81132760784,
            "unit": "ns/iter",
            "extra": "iterations: 8263\ncpu: 84226.76993828033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84075.8634935956,
            "unit": "ns/iter",
            "extra": "iterations: 8278\ncpu: 84075.86373520244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55370.43636364406,
            "unit": "ns/iter",
            "extra": "iterations: 12650\ncpu: 55368.24505928905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84466.49639683285,
            "unit": "ns/iter",
            "extra": "iterations: 8326\ncpu: 84463.7040595716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2964.532251445536,
            "unit": "ns/iter",
            "extra": "iterations: 236377\ncpu: 2964.397128316202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15425.874222954952,
            "unit": "ns/iter",
            "extra": "iterations: 45525\ncpu: 15425.711147721182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12221.222457035274,
            "unit": "ns/iter",
            "extra": "iterations: 57256\ncpu: 12220.84323040359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12086.362360615736,
            "unit": "ns/iter",
            "extra": "iterations: 57934\ncpu: 12085.911554527442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12546.543135527369,
            "unit": "ns/iter",
            "extra": "iterations: 55627\ncpu: 12546.28507739056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27069.3380347025,
            "unit": "ns/iter",
            "extra": "iterations: 25879\ncpu: 27068.341126009884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96343.86159217679,
            "unit": "ns/iter",
            "extra": "iterations: 7160\ncpu: 96343.71508379816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84654.71682593923,
            "unit": "ns/iter",
            "extra": "iterations: 8267\ncpu: 84650.52618846028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82124.8738339614,
            "unit": "ns/iter",
            "extra": "iterations: 8576\ncpu: 82122.70289179077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82438.11902519006,
            "unit": "ns/iter",
            "extra": "iterations: 8494\ncpu: 82433.54132328594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55141.27351436357,
            "unit": "ns/iter",
            "extra": "iterations: 12705\ncpu: 55138.62258953183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83603.7215476148,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 83603.67857142712 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}