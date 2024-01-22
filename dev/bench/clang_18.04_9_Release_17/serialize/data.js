window.BENCHMARK_DATA = {
  "lastUpdate": 1705959975758,
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
      },
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
        "date": 1702492951756,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 704.969055627432,
            "unit": "ns/iter",
            "extra": "iterations: 992426\ncpu: 704.9103913037345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10737.556792443442,
            "unit": "ns/iter",
            "extra": "iterations: 77704\ncpu: 10736.976217440542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24242.65076533557,
            "unit": "ns/iter",
            "extra": "iterations: 34756\ncpu: 24240.617447347217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38572.312499999505,
            "unit": "ns/iter",
            "extra": "iterations: 22272\ncpu: 38569.953304597715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47054.53505093207,
            "unit": "ns/iter",
            "extra": "iterations: 16690\ncpu: 47054.553624925116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58834.6509271388,
            "unit": "ns/iter",
            "extra": "iterations: 14507\ncpu: 58831.02640104774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60041.17429999951,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60040.49 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67465.87112918262,
            "unit": "ns/iter",
            "extra": "iterations: 12788\ncpu: 67465.17047231781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77328.60944965621,
            "unit": "ns/iter",
            "extra": "iterations: 11302\ncpu: 77328.63210051304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 568.8439366252001,
            "unit": "ns/iter",
            "extra": "iterations: 1224714\ncpu: 568.8359894636625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 475.73533917297624,
            "unit": "ns/iter",
            "extra": "iterations: 1472700\ncpu: 475.73538398859216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 468.09397836349103,
            "unit": "ns/iter",
            "extra": "iterations: 1494876\ncpu: 468.0889251014807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 477.09004179728174,
            "unit": "ns/iter",
            "extra": "iterations: 1468518\ncpu: 477.0655858491353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 947.11910190882,
            "unit": "ns/iter",
            "extra": "iterations: 741172\ncpu: 947.0890697435974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3406.907785711328,
            "unit": "ns/iter",
            "extra": "iterations: 235701\ncpu: 3406.8608109426827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15018.434473324092,
            "unit": "ns/iter",
            "extra": "iterations: 54825\ncpu: 15017.982672138638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12204.001589613314,
            "unit": "ns/iter",
            "extra": "iterations: 67312\ncpu: 12203.975516995513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11595.249022219148,
            "unit": "ns/iter",
            "extra": "iterations: 70568\ncpu: 11595.25138873143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12261.870363110382,
            "unit": "ns/iter",
            "extra": "iterations: 66316\ncpu: 12261.891549550619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42732.00209087729,
            "unit": "ns/iter",
            "extra": "iterations: 19609\ncpu: 42730.5726962109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 446089.2990271274,
            "unit": "ns/iter",
            "extra": "iterations: 1953\ncpu: 446081.2596006138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 366292.3835383931,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 366285.1506151885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 366905.2741116874,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 366897.1235194577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 368545.24135024584,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 368546.5400843881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 225153.59199584622,
            "unit": "ns/iter",
            "extra": "iterations: 3848\ncpu: 225152.8326403331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 363568.5172849688,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 363561.1720067454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1866948.3279352437,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1866859.9190283457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 738199.8421468282,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 738185.8721389096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2524695.7329699714,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2524623.9782016343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3242.0102136274472,
            "unit": "ns/iter",
            "extra": "iterations: 234099\ncpu: 3241.860922088504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14922.129159917413,
            "unit": "ns/iter",
            "extra": "iterations: 54328\ncpu: 14921.74753350017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11932.740179657101,
            "unit": "ns/iter",
            "extra": "iterations: 67462\ncpu: 11932.441967329818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11455.66252420264,
            "unit": "ns/iter",
            "extra": "iterations: 72823\ncpu: 11455.346525136316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11998.806580625496,
            "unit": "ns/iter",
            "extra": "iterations: 68261\ncpu: 11998.52770981968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41109.821715544946,
            "unit": "ns/iter",
            "extra": "iterations: 19912\ncpu: 41107.87464845313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 462977.70591393363,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 462970.2150537616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 382656.95945351984,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 382651.3001322172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 378730.16913686844,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 378716.34699215466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 377489.4363949921,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 377482.4924536441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222606.02126045278,
            "unit": "ns/iter",
            "extra": "iterations: 3951\ncpu: 222596.93748418294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 377530.08022308396,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 377523.98112398165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1867081.6858314648,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1866927.7207392135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 745226.745192367,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 745211.7788461591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3396.4712059478106,
            "unit": "ns/iter",
            "extra": "iterations: 238070\ncpu: 3396.38677699837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14964.663519842898,
            "unit": "ns/iter",
            "extra": "iterations: 55082\ncpu: 14964.492937801784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12241.230492927747,
            "unit": "ns/iter",
            "extra": "iterations: 67373\ncpu: 12241.096581716702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11642.039602280402,
            "unit": "ns/iter",
            "extra": "iterations: 70703\ncpu: 11641.852538081774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12071.37920308345,
            "unit": "ns/iter",
            "extra": "iterations: 65904\ncpu: 12071.130735615383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41110.22502462923,
            "unit": "ns/iter",
            "extra": "iterations: 20300\ncpu: 41109.147783251094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 451456.5600211479,
            "unit": "ns/iter",
            "extra": "iterations: 1891\ncpu: 451456.47805393743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 375848.3647007603,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 375840.89332177024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370558.0162532112,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 370557.1428571438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 368696.4049372012,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 368682.7197921184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 228978.95396285946,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 228975.98744441554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 369254.44701432006,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 369245.96299411287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.1766297772371,
            "unit": "ns/iter",
            "extra": "iterations: 2367885\ncpu: 295.17041579299655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1451.9385874958175,
            "unit": "ns/iter",
            "extra": "iterations: 481726\ncpu: 1451.9083462383294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1128.8556017133167,
            "unit": "ns/iter",
            "extra": "iterations: 618650\ncpu: 1128.8369837549494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1116.9186994847496,
            "unit": "ns/iter",
            "extra": "iterations: 628151\ncpu: 1116.8835200453393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 986.1992496638837,
            "unit": "ns/iter",
            "extra": "iterations: 711148\ncpu: 986.1883883523549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7389.705804874646,
            "unit": "ns/iter",
            "extra": "iterations: 94903\ncpu: 7389.607283226086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18836.493303573345,
            "unit": "ns/iter",
            "extra": "iterations: 37184\ncpu: 18836.424268502702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4456.02143724997,
            "unit": "ns/iter",
            "extra": "iterations: 157203\ncpu: 4456.018014923368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4399.215540812126,
            "unit": "ns/iter",
            "extra": "iterations: 159464\ncpu: 4399.203581999673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4444.0005866558895,
            "unit": "ns/iter",
            "extra": "iterations: 156821\ncpu: 4443.948195713546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9190.198557142585,
            "unit": "ns/iter",
            "extra": "iterations: 76099\ncpu: 9190.169384617524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8397.809488741768,
            "unit": "ns/iter",
            "extra": "iterations: 82835\ncpu: 8397.7533651235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3177.458892305504,
            "unit": "ns/iter",
            "extra": "iterations: 220494\ncpu: 3177.4923580687264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16219.678668886363,
            "unit": "ns/iter",
            "extra": "iterations: 43242\ncpu: 16219.411683085696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12819.37363983815,
            "unit": "ns/iter",
            "extra": "iterations: 54681\ncpu: 12819.061465591443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12585.091018608737,
            "unit": "ns/iter",
            "extra": "iterations: 55615\ncpu: 12584.948305313379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13086.809370196044,
            "unit": "ns/iter",
            "extra": "iterations: 52699\ncpu: 13086.460843659164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27839.62778573599,
            "unit": "ns/iter",
            "extra": "iterations: 25128\ncpu: 27839.09582935347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99875.25371004069,
            "unit": "ns/iter",
            "extra": "iterations: 7008\ncpu: 99872.21746575377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86945.56031371144,
            "unit": "ns/iter",
            "extra": "iterations: 8033\ncpu: 86946.43346196837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85184.95082563694,
            "unit": "ns/iter",
            "extra": "iterations: 8236\ncpu: 85184.43419135445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85950.60909980407,
            "unit": "ns/iter",
            "extra": "iterations: 8176\ncpu: 85947.70058708487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56117.78546768467,
            "unit": "ns/iter",
            "extra": "iterations: 12455\ncpu: 56117.71979124806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85629.28214548559,
            "unit": "ns/iter",
            "extra": "iterations: 8166\ncpu: 85627.19813862338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2982.36030507067,
            "unit": "ns/iter",
            "extra": "iterations: 234962\ncpu: 2982.3520399042786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15146.270400971809,
            "unit": "ns/iter",
            "extra": "iterations: 46113\ncpu: 15145.989200442596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11998.048241411954,
            "unit": "ns/iter",
            "extra": "iterations: 58456\ncpu: 11998.029286985313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11922.379313868498,
            "unit": "ns/iter",
            "extra": "iterations: 58706\ncpu: 11921.876809866282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12246.089869137279,
            "unit": "ns/iter",
            "extra": "iterations: 57083\ncpu: 12245.654573165326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26994.39241043793,
            "unit": "ns/iter",
            "extra": "iterations: 25904\ncpu: 26993.74613959243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97031.95502419237,
            "unit": "ns/iter",
            "extra": "iterations: 7026\ncpu: 97029.03501280923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83714.50261594384,
            "unit": "ns/iter",
            "extra": "iterations: 8410\ncpu: 83714.25683709934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83171.07309247539,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 83169.06346565331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82597.51478447615,
            "unit": "ns/iter",
            "extra": "iterations: 8421\ncpu: 82596.16435102715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55447.29717505341,
            "unit": "ns/iter",
            "extra": "iterations: 12602\ncpu: 55444.02475797579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83746.86510790458,
            "unit": "ns/iter",
            "extra": "iterations: 8340\ncpu: 83744.32853717152 ns\nthreads: 1"
          }
        ]
      },
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
        "date": 1702503973210,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 728.9904462241723,
            "unit": "ns/iter",
            "extra": "iterations: 970611\ncpu: 728.949084648742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10656.670047715941,
            "unit": "ns/iter",
            "extra": "iterations: 76702\ncpu: 10656.261896691089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23900.43748411993,
            "unit": "ns/iter",
            "extra": "iterations: 35423\ncpu: 23899.836264573867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38744.94321053467,
            "unit": "ns/iter",
            "extra": "iterations: 22557\ncpu: 38743.94201356564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48810.162517951474,
            "unit": "ns/iter",
            "extra": "iterations: 16712\ncpu: 48809.02345619915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58795.7711092694,
            "unit": "ns/iter",
            "extra": "iterations: 14496\ncpu: 58792.50827814565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58679.52490000334,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58675.72999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67889.64448951463,
            "unit": "ns/iter",
            "extra": "iterations: 12821\ncpu: 67888.40184073013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77910.27693821497,
            "unit": "ns/iter",
            "extra": "iterations: 11183\ncpu: 77906.54564964681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 583.4579632628663,
            "unit": "ns/iter",
            "extra": "iterations: 1191327\ncpu: 583.4421615559796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 476.79256819675925,
            "unit": "ns/iter",
            "extra": "iterations: 1466858\ncpu: 476.77191657270106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 471.10388589816284,
            "unit": "ns/iter",
            "extra": "iterations: 1487584\ncpu: 471.0903720394946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 482.57761754738385,
            "unit": "ns/iter",
            "extra": "iterations: 1451798\ncpu: 482.55384013478465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 965.7793583447184,
            "unit": "ns/iter",
            "extra": "iterations: 727587\ncpu: 965.7392174406618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3403.247036225745,
            "unit": "ns/iter",
            "extra": "iterations: 236354\ncpu: 3403.118627144026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14795.33417217314,
            "unit": "ns/iter",
            "extra": "iterations: 55235\ncpu: 14795.113605503728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12095.812338989763,
            "unit": "ns/iter",
            "extra": "iterations: 67542\ncpu: 12095.39841876166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11446.43988624895,
            "unit": "ns/iter",
            "extra": "iterations: 71032\ncpu: 11446.04966775535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12288.18690225481,
            "unit": "ns/iter",
            "extra": "iterations: 66500\ncpu: 12263.079699248117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42029.53962662845,
            "unit": "ns/iter",
            "extra": "iterations: 19873\ncpu: 42027.736124389994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 447071.8662582851,
            "unit": "ns/iter",
            "extra": "iterations: 1959\ncpu: 446995.916283819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 365495.78106507286,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 365481.1918850388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 364845.30708330945,
            "unit": "ns/iter",
            "extra": "iterations: 2400\ncpu: 364834.37499999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 367900.2887383504,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 367881.20237087127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 230805.212121192,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 230801.02722136566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 362382.8317287285,
            "unit": "ns/iter",
            "extra": "iterations: 2389\ncpu: 362354.7090832989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1859624.893360258,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1859470.020120724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 710510.9356060803,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 710484.469696969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2510664.644986482,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2510560.16260163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3216.850413943286,
            "unit": "ns/iter",
            "extra": "iterations: 236506\ncpu: 3216.724734256224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15054.126110220996,
            "unit": "ns/iter",
            "extra": "iterations: 54944\ncpu: 15053.576368666318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11786.227789745206,
            "unit": "ns/iter",
            "extra": "iterations: 69630\ncpu: 11785.783426683838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11124.233103039445,
            "unit": "ns/iter",
            "extra": "iterations: 73963\ncpu: 11123.953868826304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12005.848382290375,
            "unit": "ns/iter",
            "extra": "iterations: 69141\ncpu: 12004.671613080562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41199.3597813197,
            "unit": "ns/iter",
            "extra": "iterations: 20304\ncpu: 41197.296099290994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 464653.36072572885,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 464625.45357524103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 385284.28660436784,
            "unit": "ns/iter",
            "extra": "iterations: 2247\ncpu: 385255.45171339746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 379460.1756993444,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 379439.86013985955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 376959.2840958893,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 376942.48366013006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223967.1664966969,
            "unit": "ns/iter",
            "extra": "iterations: 3922\ncpu: 223958.41407445207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 376215.63742946123,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 376190.1867129828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1877980.016877677,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1877829.957805898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 718964.1995323751,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 718916.5237724081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3380.9505468155985,
            "unit": "ns/iter",
            "extra": "iterations: 237740\ncpu: 3380.943047026173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14483.100852074029,
            "unit": "ns/iter",
            "extra": "iterations: 57272\ncpu: 14482.17802765753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11926.785032689337,
            "unit": "ns/iter",
            "extra": "iterations: 69899\ncpu: 11926.290790998386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11241.095956376788,
            "unit": "ns/iter",
            "extra": "iterations: 73721\ncpu: 11240.346712605615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11939.159516783964,
            "unit": "ns/iter",
            "extra": "iterations: 68789\ncpu: 11938.680603003359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41049.50771929759,
            "unit": "ns/iter",
            "extra": "iterations: 19950\ncpu: 41047.343358395934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 448137.8133058358,
            "unit": "ns/iter",
            "extra": "iterations: 1939\ncpu: 448115.3171738019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 373650.87699610676,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 373635.95166162954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 365822.73085061496,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 365794.41388066247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 368957.62156356947,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 368936.4690721669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 222940.49476373356,
            "unit": "ns/iter",
            "extra": "iterations: 3915\ncpu: 222936.29629629536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 365854.65029886656,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 365854.35525192384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.1506405939959,
            "unit": "ns/iter",
            "extra": "iterations: 2368505\ncpu: 295.15035855951265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1492.9502596892307,
            "unit": "ns/iter",
            "extra": "iterations: 468252\ncpu: 1492.9610551583426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1243.149554984088,
            "unit": "ns/iter",
            "extra": "iterations: 579867\ncpu: 1243.133339196748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1196.8365542380593,
            "unit": "ns/iter",
            "extra": "iterations: 585705\ncpu: 1196.8106811449559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1059.9109389863527,
            "unit": "ns/iter",
            "extra": "iterations: 663343\ncpu: 1059.8893784965037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7425.22838886378,
            "unit": "ns/iter",
            "extra": "iterations: 95622\ncpu: 7425.188764091862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19418.28846206872,
            "unit": "ns/iter",
            "extra": "iterations: 36133\ncpu: 19417.836880413928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4785.8081666677435,
            "unit": "ns/iter",
            "extra": "iterations: 146351\ncpu: 4785.786909553012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4741.857255083664,
            "unit": "ns/iter",
            "extra": "iterations: 146387\ncpu: 4741.629379657983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4765.3424081780695,
            "unit": "ns/iter",
            "extra": "iterations: 147514\ncpu: 4764.9877299781665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9577.270441972409,
            "unit": "ns/iter",
            "extra": "iterations: 73036\ncpu: 9576.392463990243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8981.501555199793,
            "unit": "ns/iter",
            "extra": "iterations: 78125\ncpu: 8981.071359999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3259.6019006220745,
            "unit": "ns/iter",
            "extra": "iterations: 216245\ncpu: 3259.3544359406906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16708.423250965596,
            "unit": "ns/iter",
            "extra": "iterations: 42209\ncpu: 16707.424956762738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13239.485542145014,
            "unit": "ns/iter",
            "extra": "iterations: 52947\ncpu: 13238.716074565176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13203.324062605972,
            "unit": "ns/iter",
            "extra": "iterations: 53286\ncpu: 13203.068348158911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13528.962959287965,
            "unit": "ns/iter",
            "extra": "iterations: 50377\ncpu: 13528.864362705157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27845.20631688166,
            "unit": "ns/iter",
            "extra": "iterations: 25044\ncpu: 27843.798913911472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99597.75582733889,
            "unit": "ns/iter",
            "extra": "iterations: 6950\ncpu: 99592.56115107794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86756.89206309109,
            "unit": "ns/iter",
            "extra": "iterations: 8051\ncpu: 86750.26704757204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85539.49750577369,
            "unit": "ns/iter",
            "extra": "iterations: 8219\ncpu: 85536.11144908179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87002.51571464352,
            "unit": "ns/iter",
            "extra": "iterations: 8018\ncpu: 87000.59865302994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56123.830859820155,
            "unit": "ns/iter",
            "extra": "iterations: 12398\ncpu: 56122.12453621507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85940.15090445636,
            "unit": "ns/iter",
            "extra": "iterations: 8237\ncpu: 85935.81400995464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3052.995293748775,
            "unit": "ns/iter",
            "extra": "iterations: 229907\ncpu: 3052.747415259206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15861.6152210803,
            "unit": "ns/iter",
            "extra": "iterations: 44215\ncpu: 15860.830035056046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13703.55670123358,
            "unit": "ns/iter",
            "extra": "iterations: 51013\ncpu: 13702.585615431384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13207.889377603089,
            "unit": "ns/iter",
            "extra": "iterations: 55929\ncpu: 13207.280659407446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12994.859438349513,
            "unit": "ns/iter",
            "extra": "iterations: 53770\ncpu: 12993.933420122703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28748.536920166935,
            "unit": "ns/iter",
            "extra": "iterations: 25352\ncpu: 28747.021931208277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97465.13751743606,
            "unit": "ns/iter",
            "extra": "iterations: 7170\ncpu: 97464.60251045992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84813.69251435083,
            "unit": "ns/iter",
            "extra": "iterations: 8189\ncpu: 84809.40285749143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83639.11369880327,
            "unit": "ns/iter",
            "extra": "iterations: 8373\ncpu: 83638.36139973758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83812.4561719566,
            "unit": "ns/iter",
            "extra": "iterations: 8328\ncpu: 83810.21853986481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56213.50414152999,
            "unit": "ns/iter",
            "extra": "iterations: 12435\ncpu: 56213.92842782408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84328.56702268036,
            "unit": "ns/iter",
            "extra": "iterations: 8333\ncpu: 84328.18912756527 ns\nthreads: 1"
          }
        ]
      },
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
        "date": 1705575649275,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 685.6689621389814,
            "unit": "ns/iter",
            "extra": "iterations: 1014606\ncpu: 685.6518688042453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10494.5694944829,
            "unit": "ns/iter",
            "extra": "iterations: 79107\ncpu: 10494.263465938539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23447.631933110864,
            "unit": "ns/iter",
            "extra": "iterations: 34923\ncpu: 23444.93886550411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37714.85998252264,
            "unit": "ns/iter",
            "extra": "iterations: 22890\ncpu: 37714.678899082566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46507.84319526696,
            "unit": "ns/iter",
            "extra": "iterations: 17238\ncpu: 46506.45666550643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58476.274701937,
            "unit": "ns/iter",
            "extra": "iterations: 14594\ncpu: 58475.366589009216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58290.56329999957,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58287.29999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66924.03918688731,
            "unit": "ns/iter",
            "extra": "iterations: 12938\ncpu: 66922.29865512441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77191.08814509248,
            "unit": "ns/iter",
            "extra": "iterations: 11413\ncpu: 77185.74432664517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 556.3618546349264,
            "unit": "ns/iter",
            "extra": "iterations: 1232868\ncpu: 556.3473137432401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 469.0052169792297,
            "unit": "ns/iter",
            "extra": "iterations: 1493968\ncpu: 468.967005986742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 462.1300795759816,
            "unit": "ns/iter",
            "extra": "iterations: 1517794\ncpu: 462.0949878573767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 472.6069084762053,
            "unit": "ns/iter",
            "extra": "iterations: 1479429\ncpu: 472.5656993339999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 928.8780515027779,
            "unit": "ns/iter",
            "extra": "iterations: 752621\ncpu: 928.7937753530667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3412.4574114035477,
            "unit": "ns/iter",
            "extra": "iterations: 235873\ncpu: 3412.243877001613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14853.908581480311,
            "unit": "ns/iter",
            "extra": "iterations: 55142\ncpu: 14852.966885495636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12175.406638448927,
            "unit": "ns/iter",
            "extra": "iterations: 67335\ncpu: 12174.126383010302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11592.59270820139,
            "unit": "ns/iter",
            "extra": "iterations: 71121\ncpu: 11591.722557331881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12262.333348289358,
            "unit": "ns/iter",
            "extra": "iterations: 66858\ncpu: 12261.18938646086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41698.31556556393,
            "unit": "ns/iter",
            "extra": "iterations: 19980\ncpu: 41694.774774774625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 433617.9429429563,
            "unit": "ns/iter",
            "extra": "iterations: 1998\ncpu: 433570.92092092184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 360080.7504118762,
            "unit": "ns/iter",
            "extra": "iterations: 2428\ncpu: 360062.6441515652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 358076.9738806387,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 358051.7827529025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 358780.43135628296,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 358760.18249689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 222432.7826307887,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 222415.10919248353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 355906.9942315831,
            "unit": "ns/iter",
            "extra": "iterations: 2427\ncpu: 355875.6489493201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1860309.605633753,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1860204.2253521143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 743560.5733544803,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 743536.3996827913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2540486.2684930377,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2540500.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3427.310233112059,
            "unit": "ns/iter",
            "extra": "iterations: 225943\ncpu: 3427.1869453800277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15103.994423858267,
            "unit": "ns/iter",
            "extra": "iterations: 55594\ncpu: 15103.608303054252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12224.902792474812,
            "unit": "ns/iter",
            "extra": "iterations: 68040\ncpu: 12224.482657260454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11645.44133266324,
            "unit": "ns/iter",
            "extra": "iterations: 71556\ncpu: 11645.343507183148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12000.997949439487,
            "unit": "ns/iter",
            "extra": "iterations: 68274\ncpu: 12000.788001288978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41440.22190330059,
            "unit": "ns/iter",
            "extra": "iterations: 20207\ncpu: 41439.37249468021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 466803.1587472942,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 466788.8228941695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 380677.76539973385,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 380658.58453473117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 378916.6922077629,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 378906.88311688346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 374521.85191564384,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 374515.1097718478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223482.81483373913,
            "unit": "ns/iter",
            "extra": "iterations: 3910\ncpu: 223479.74424552417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 375004.1007718956,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 374973.0703259017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1883002.9938145184,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1882987.6288659803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 745381.1941510489,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 745322.5020308716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3370.2012756760582,
            "unit": "ns/iter",
            "extra": "iterations: 235483\ncpu: 3370.140519697796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14619.088481065555,
            "unit": "ns/iter",
            "extra": "iterations: 56724\ncpu: 14618.588251886304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11950.495787859061,
            "unit": "ns/iter",
            "extra": "iterations: 69086\ncpu: 11950.282256897262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11711.849175378475,
            "unit": "ns/iter",
            "extra": "iterations: 70214\ncpu: 11711.046230096552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12203.002963904122,
            "unit": "ns/iter",
            "extra": "iterations: 66129\ncpu: 12202.290976727354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41520.987084324675,
            "unit": "ns/iter",
            "extra": "iterations: 20208\ncpu: 41519.85847189252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 445335.56385174324,
            "unit": "ns/iter",
            "extra": "iterations: 1942\ncpu: 445287.5901132876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 370544.8775597334,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 370524.4027303747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 364040.4799323961,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 364014.1529362084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 366863.02926206443,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 366865.2671755743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224764.89505051967,
            "unit": "ns/iter",
            "extra": "iterations: 3859\ncpu: 224751.4122829764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 363784.5316079693,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 363768.98599915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.01232090955773,
            "unit": "ns/iter",
            "extra": "iterations: 2374987\ncpu: 294.99222522060313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1453.867507945365,
            "unit": "ns/iter",
            "extra": "iterations: 482678\ncpu: 1453.785960826881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1122.3866873253912,
            "unit": "ns/iter",
            "extra": "iterations: 621528\ncpu: 1122.3278758157253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1115.4653320846626,
            "unit": "ns/iter",
            "extra": "iterations: 613925\ncpu: 1115.4149122449728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 987.1252347924362,
            "unit": "ns/iter",
            "extra": "iterations: 710202\ncpu: 987.0536833182613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7584.75218052628,
            "unit": "ns/iter",
            "extra": "iterations: 91377\ncpu: 7584.179826433342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18406.062141692393,
            "unit": "ns/iter",
            "extra": "iterations: 38026\ncpu: 18405.26744858779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4406.026680661856,
            "unit": "ns/iter",
            "extra": "iterations: 159104\ncpu: 4405.761640185027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4374.697754599201,
            "unit": "ns/iter",
            "extra": "iterations: 160684\ncpu: 4374.361479674407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4459.344845787093,
            "unit": "ns/iter",
            "extra": "iterations: 157250\ncpu: 4459.378060413318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9141.964854180624,
            "unit": "ns/iter",
            "extra": "iterations: 76396\ncpu: 9141.033561966746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8223.691968537309,
            "unit": "ns/iter",
            "extra": "iterations: 85053\ncpu: 8223.19847624433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3112.0734638533677,
            "unit": "ns/iter",
            "extra": "iterations: 225662\ncpu: 3111.7831092519245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15685.695819286637,
            "unit": "ns/iter",
            "extra": "iterations: 44490\ncpu: 15684.407732074618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12431.052730562677,
            "unit": "ns/iter",
            "extra": "iterations: 56362\ncpu: 12430.767183563377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12377.023451059717,
            "unit": "ns/iter",
            "extra": "iterations: 56458\ncpu: 12376.194693400432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12740.694654123803,
            "unit": "ns/iter",
            "extra": "iterations: 54846\ncpu: 12740.579075958283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27669.090970244433,
            "unit": "ns/iter",
            "extra": "iterations: 25272\ncpu: 27667.65590376719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98940.22872943911,
            "unit": "ns/iter",
            "extra": "iterations: 7052\ncpu: 98939.64832671633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85708.44590284638,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 85705.50785083426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85159.43369435529,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 85156.04091456052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83727.52075833788,
            "unit": "ns/iter",
            "extra": "iterations: 8334\ncpu: 83724.62203023757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55435.2913578314,
            "unit": "ns/iter",
            "extra": "iterations: 12682\ncpu: 55432.360826368764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84124.10700620702,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 84123.72070779615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2960.3786796657528,
            "unit": "ns/iter",
            "extra": "iterations: 238167\ncpu: 2960.3248980757135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14944.731765609635,
            "unit": "ns/iter",
            "extra": "iterations: 46862\ncpu: 14944.456062481537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11971.373250521068,
            "unit": "ns/iter",
            "extra": "iterations: 58446\ncpu: 11971.019402525439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11811.611209351246,
            "unit": "ns/iter",
            "extra": "iterations: 59379\ncpu: 11811.189140942164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12410.857874133539,
            "unit": "ns/iter",
            "extra": "iterations: 56457\ncpu: 12410.492941530794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26820.3005348808,
            "unit": "ns/iter",
            "extra": "iterations: 25987\ncpu: 26818.270673798255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97123.1416285219,
            "unit": "ns/iter",
            "extra": "iterations: 7209\ncpu: 97119.28145373837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82866.3848427612,
            "unit": "ns/iter",
            "extra": "iterations: 8458\ncpu: 82863.79758808238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81311.03769400342,
            "unit": "ns/iter",
            "extra": "iterations: 8569\ncpu: 81308.6824600304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81766.65959183704,
            "unit": "ns/iter",
            "extra": "iterations: 8575\ncpu: 81764.4431486881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54868.729016600155,
            "unit": "ns/iter",
            "extra": "iterations: 12772\ncpu: 54864.2107735677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82916.52209550544,
            "unit": "ns/iter",
            "extra": "iterations: 8418\ncpu: 82916.06082204828 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705773468118,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 698.7566321891104,
            "unit": "ns/iter",
            "extra": "iterations: 1000650\ncpu: 698.7326237945335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10778.571868528967,
            "unit": "ns/iter",
            "extra": "iterations: 77280\ncpu: 10778.113354037267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23828.53623063774,
            "unit": "ns/iter",
            "extra": "iterations: 34929\ncpu: 23827.20948209224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38063.47119928834,
            "unit": "ns/iter",
            "extra": "iterations: 22430\ncpu: 38061.747659384746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46922.49184932095,
            "unit": "ns/iter",
            "extra": "iterations: 16379\ncpu: 46921.564198058484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57582.06255904768,
            "unit": "ns/iter",
            "extra": "iterations: 14818\ncpu: 57581.731677689284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 57663.228100000204,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57662.019999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67370.02466574866,
            "unit": "ns/iter",
            "extra": "iterations: 13014\ncpu: 67369.84017212239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78487.41593617805,
            "unit": "ns/iter",
            "extra": "iterations: 11408\ncpu: 78485.86956521752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 560.0078260341826,
            "unit": "ns/iter",
            "extra": "iterations: 1234725\ncpu: 560.0010528660229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 472.4296281670288,
            "unit": "ns/iter",
            "extra": "iterations: 1483946\ncpu: 472.41361882440475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 465.4723948733593,
            "unit": "ns/iter",
            "extra": "iterations: 1509466\ncpu: 465.4747440485583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 472.84634267040303,
            "unit": "ns/iter",
            "extra": "iterations: 1479194\ncpu: 472.8489298901965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 921.643866784822,
            "unit": "ns/iter",
            "extra": "iterations: 753308\ncpu: 921.6482501181441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3308.3349476706608,
            "unit": "ns/iter",
            "extra": "iterations: 237249\ncpu: 3308.196030331009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15040.360605396276,
            "unit": "ns/iter",
            "extra": "iterations: 54708\ncpu: 15039.443957008087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11816.502908199585,
            "unit": "ns/iter",
            "extra": "iterations: 68943\ncpu: 11815.943605587232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11232.841196206919,
            "unit": "ns/iter",
            "extra": "iterations: 72429\ncpu: 11232.5435944166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11917.52144887203,
            "unit": "ns/iter",
            "extra": "iterations: 67556\ncpu: 11916.864527207064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41646.23873964243,
            "unit": "ns/iter",
            "extra": "iterations: 20026\ncpu: 41644.017776890134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 446051.9796437568,
            "unit": "ns/iter",
            "extra": "iterations: 1965\ncpu: 446032.7226463099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 362736.81318220665,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 362700.5877413937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 361634.21925799863,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 361614.83951646514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 360359.4913829243,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 360338.8398486749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 220089.82959185774,
            "unit": "ns/iter",
            "extra": "iterations: 3920\ncpu: 220091.04591836664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 363791.01860271173,
            "unit": "ns/iter",
            "extra": "iterations: 2419\ncpu: 363769.53286482044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1849253.4003982937,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1848902.589641439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 723609.0857805198,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 723581.4528593513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2505677.5579513353,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2505526.684636119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3297.2914344624082,
            "unit": "ns/iter",
            "extra": "iterations: 236681\ncpu: 3297.072430824613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14401.847358878775,
            "unit": "ns/iter",
            "extra": "iterations: 56813\ncpu: 14400.848397373877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11394.55461628653,
            "unit": "ns/iter",
            "extra": "iterations: 72515\ncpu: 11394.107426049772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 10816.035013101378,
            "unit": "ns/iter",
            "extra": "iterations: 75943\ncpu: 10815.449745203641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11468.992433921228,
            "unit": "ns/iter",
            "extra": "iterations: 69653\ncpu: 11468.317229695822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41691.394965018284,
            "unit": "ns/iter",
            "extra": "iterations: 20298\ncpu: 41689.03832889946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 461656.41521393653,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 461654.6751188593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 380679.70296165725,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 380648.6498257866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 376391.51285345864,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 376379.0488431873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 373412.8519304406,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 373399.91514637176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222297.12150483724,
            "unit": "ns/iter",
            "extra": "iterations: 3934\ncpu: 222284.54499237426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 367018.8353530874,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 367003.4684496436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1867532.2666665278,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1867477.1717171683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 718191.2290372449,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 718180.124223602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3348.1371463971313,
            "unit": "ns/iter",
            "extra": "iterations: 240524\ncpu: 3348.0787780013734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14681.088093401771,
            "unit": "ns/iter",
            "extra": "iterations: 55759\ncpu: 14681.06135332408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11462.080957251193,
            "unit": "ns/iter",
            "extra": "iterations: 71371\ncpu: 11461.942525675737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 10825.080832978727,
            "unit": "ns/iter",
            "extra": "iterations: 75056\ncpu: 10825.138563206157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11481.506981771265,
            "unit": "ns/iter",
            "extra": "iterations: 70326\ncpu: 11481.321275204089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41597.90642035362,
            "unit": "ns/iter",
            "extra": "iterations: 19812\ncpu: 41597.78921865551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 452650.4536940789,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 452640.6347554631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 374282.2996142158,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 374284.0977282453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 379532.6237416106,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 379530.83053691185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 371507.4993603277,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 371499.4029850761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225335.5657860966,
            "unit": "ns/iter",
            "extra": "iterations: 3899\ncpu: 225336.77866119563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 372933.13703858526,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 372921.0012728021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.012569693666,
            "unit": "ns/iter",
            "extra": "iterations: 2315490\ncpu: 302.0093803039549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1518.9829507673496,
            "unit": "ns/iter",
            "extra": "iterations: 463188\ncpu: 1518.9352919332857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1176.0775024524253,
            "unit": "ns/iter",
            "extra": "iterations: 595336\ncpu: 1176.0837577435354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1164.3503741042148,
            "unit": "ns/iter",
            "extra": "iterations: 601303\ncpu: 1164.3422700369017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1013.2457499830964,
            "unit": "ns/iter",
            "extra": "iterations: 690409\ncpu: 1013.2285355492211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7353.348786034921,
            "unit": "ns/iter",
            "extra": "iterations: 94978\ncpu: 7353.21758723072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 17982.05473353613,
            "unit": "ns/iter",
            "extra": "iterations: 38861\ncpu: 17981.418388615497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4446.200482617595,
            "unit": "ns/iter",
            "extra": "iterations: 157889\ncpu: 4446.227412929375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4436.833357591132,
            "unit": "ns/iter",
            "extra": "iterations: 158021\ncpu: 4436.759038355677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4454.319423748672,
            "unit": "ns/iter",
            "extra": "iterations: 157709\ncpu: 4454.213139389586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9428.770481467376,
            "unit": "ns/iter",
            "extra": "iterations: 74543\ncpu: 9428.82765652038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8426.167129607442,
            "unit": "ns/iter",
            "extra": "iterations: 82804\ncpu: 8426.025312786805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3197.774908510611,
            "unit": "ns/iter",
            "extra": "iterations: 218058\ncpu: 3197.6767648974533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16256.65627027657,
            "unit": "ns/iter",
            "extra": "iterations: 43156\ncpu: 16256.56919084237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13364.109872995028,
            "unit": "ns/iter",
            "extra": "iterations: 53935\ncpu: 13363.776768332245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12859.007612674059,
            "unit": "ns/iter",
            "extra": "iterations: 54383\ncpu: 12859.069929941272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13265.87325704751,
            "unit": "ns/iter",
            "extra": "iterations: 52784\ncpu: 13265.502803879788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27688.09240832524,
            "unit": "ns/iter",
            "extra": "iterations: 25225\ncpu: 27687.48860257673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99308.4298233278,
            "unit": "ns/iter",
            "extra": "iterations: 7075\ncpu: 99305.00353356834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 91460.67542351538,
            "unit": "ns/iter",
            "extra": "iterations: 8146\ncpu: 91461.17112693335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84741.34362887831,
            "unit": "ns/iter",
            "extra": "iterations: 8256\ncpu: 84741.77567829608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85117.11320753749,
            "unit": "ns/iter",
            "extra": "iterations: 8109\ncpu: 85113.10889135471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56262.71798792736,
            "unit": "ns/iter",
            "extra": "iterations: 12425\ncpu: 56262.398390341994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84700.80130371483,
            "unit": "ns/iter",
            "extra": "iterations: 8284\ncpu: 84697.30806373588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3060.1071653238864,
            "unit": "ns/iter",
            "extra": "iterations: 228908\ncpu: 3060.118475544731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15255.112944499955,
            "unit": "ns/iter",
            "extra": "iterations: 45332\ncpu: 15253.69716756356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12415.029202659287,
            "unit": "ns/iter",
            "extra": "iterations: 56262\ncpu: 12414.42892182983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12101.418348814374,
            "unit": "ns/iter",
            "extra": "iterations: 57813\ncpu: 12100.799128223804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12551.600942584219,
            "unit": "ns/iter",
            "extra": "iterations: 55804\ncpu: 12550.897785105177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26861.766375546627,
            "unit": "ns/iter",
            "extra": "iterations: 26106\ncpu: 26860.484179882176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97530.62493020883,
            "unit": "ns/iter",
            "extra": "iterations: 7164\ncpu: 97525.20938023448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83837.13081535762,
            "unit": "ns/iter",
            "extra": "iterations: 8340\ncpu: 83836.49880095986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83051.27051023635,
            "unit": "ns/iter",
            "extra": "iterations: 8447\ncpu: 83051.7461820757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82785.70184571727,
            "unit": "ns/iter",
            "extra": "iterations: 8452\ncpu: 82784.3232371042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55290.163637800055,
            "unit": "ns/iter",
            "extra": "iterations: 12656\ncpu: 55290.447218710455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83356.61547604672,
            "unit": "ns/iter",
            "extra": "iterations: 8413\ncpu: 83352.97753476756 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705774868334,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 706.5742444802579,
            "unit": "ns/iter",
            "extra": "iterations: 991205\ncpu: 706.555354341433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10742.00437223462,
            "unit": "ns/iter",
            "extra": "iterations: 77306\ncpu: 10741.846687191164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24052.45500144916,
            "unit": "ns/iter",
            "extra": "iterations: 34490\ncpu: 24051.774427370252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39312.11555713674,
            "unit": "ns/iter",
            "extra": "iterations: 22517\ncpu: 39311.44912732603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50251.92119185146,
            "unit": "ns/iter",
            "extra": "iterations: 16445\ncpu: 50250.90301003344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59586.90906537304,
            "unit": "ns/iter",
            "extra": "iterations: 14241\ncpu: 59584.8957236149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59569.55890000018,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59568.39 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68825.68497360895,
            "unit": "ns/iter",
            "extra": "iterations: 12691\ncpu: 68823.6860767473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78349.86001796194,
            "unit": "ns/iter",
            "extra": "iterations: 11130\ncpu: 78346.79245283012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 586.358552016518,
            "unit": "ns/iter",
            "extra": "iterations: 1198080\ncpu: 586.3433159722215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 490.2713545905277,
            "unit": "ns/iter",
            "extra": "iterations: 1438789\ncpu: 490.2635480254576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 474.9805042600362,
            "unit": "ns/iter",
            "extra": "iterations: 1468885\ncpu: 474.968224197266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 474.3534716991989,
            "unit": "ns/iter",
            "extra": "iterations: 1477677\ncpu: 474.3181358307669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 924.729952842625,
            "unit": "ns/iter",
            "extra": "iterations: 755768\ncpu: 924.67966360047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3513.1364361654123,
            "unit": "ns/iter",
            "extra": "iterations: 226868\ncpu: 3512.9321896433203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15195.418917902025,
            "unit": "ns/iter",
            "extra": "iterations: 53156\ncpu: 15194.388215817593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11928.657194002955,
            "unit": "ns/iter",
            "extra": "iterations: 67035\ncpu: 11927.989856045337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10723.869094565396,
            "unit": "ns/iter",
            "extra": "iterations: 77598\ncpu: 10723.282816567464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11662.972143693047,
            "unit": "ns/iter",
            "extra": "iterations: 70038\ncpu: 11662.371855278585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42001.56845737067,
            "unit": "ns/iter",
            "extra": "iterations: 20290\ncpu: 41998.81222276982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 436311.326321184,
            "unit": "ns/iter",
            "extra": "iterations: 1949\ncpu: 436281.52898922516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 361071.4439330318,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 361068.5774058566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 361805.88565490674,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 361785.6964656957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 360563.718151516,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 360540.3413821812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 221162.99336398602,
            "unit": "ns/iter",
            "extra": "iterations: 3918\ncpu: 221148.87697805028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 356448.96157024533,
            "unit": "ns/iter",
            "extra": "iterations: 2420\ncpu: 356440.53719008324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1855013.5149700667,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1854887.6247504996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 724158.0295259963,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 724121.2898212891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2498065.9647697266,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2497895.392953923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3259.076454476291,
            "unit": "ns/iter",
            "extra": "iterations: 239502\ncpu: 3259.02539435996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14893.4435712046,
            "unit": "ns/iter",
            "extra": "iterations: 54077\ncpu: 14892.21295560034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11892.366077256582,
            "unit": "ns/iter",
            "extra": "iterations: 67412\ncpu: 11891.72995905769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11274.13194797345,
            "unit": "ns/iter",
            "extra": "iterations: 72809\ncpu: 11273.519757172906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11923.777767997723,
            "unit": "ns/iter",
            "extra": "iterations: 68172\ncpu: 11923.05345303064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41963.467584887345,
            "unit": "ns/iter",
            "extra": "iterations: 19821\ncpu: 41959.92129559569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 463276.7095212048,
            "unit": "ns/iter",
            "extra": "iterations: 1859\ncpu: 463263.152232382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 375659.0581754116,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 375649.27280740166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 374041.943485768,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 374027.4374460754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 372059.7482963884,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 372056.98466780444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 220024.70389087225,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 220020.9954522473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 371719.42584747076,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 371644.78813559236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1866286.9079754478,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1866086.2985685049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 702901.699168535,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 702896.3718820859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3325.538413267128,
            "unit": "ns/iter",
            "extra": "iterations: 242221\ncpu: 3325.453201828065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15126.135678941855,
            "unit": "ns/iter",
            "extra": "iterations: 54769\ncpu: 15126.018368054918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12256.938497090012,
            "unit": "ns/iter",
            "extra": "iterations: 67509\ncpu: 12256.509502436631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11680.053659086145,
            "unit": "ns/iter",
            "extra": "iterations: 70892\ncpu: 11679.883484737382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12315.03973818135,
            "unit": "ns/iter",
            "extra": "iterations: 66611\ncpu: 12314.500608007635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40866.800676999614,
            "unit": "ns/iter",
            "extra": "iterations: 20384\ncpu: 40865.482731554184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 444390.514344277,
            "unit": "ns/iter",
            "extra": "iterations: 1952\ncpu: 444376.639344261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 370505.05287848756,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 370502.5159914704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 364148.8727810865,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 364146.11158072564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 365400.15191489377,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 365383.91489361774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 222521.01987259305,
            "unit": "ns/iter",
            "extra": "iterations: 3925\ncpu: 222519.38853503324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 366329.9403361164,
            "unit": "ns/iter",
            "extra": "iterations: 2380\ncpu: 366319.91596638697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 296.3412554446332,
            "unit": "ns/iter",
            "extra": "iterations: 2362207\ncpu: 296.3330055325387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1484.1038567160986,
            "unit": "ns/iter",
            "extra": "iterations: 474471\ncpu: 1484.051712328053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1157.4649395322087,
            "unit": "ns/iter",
            "extra": "iterations: 603543\ncpu: 1157.4565523914548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1100.8093672773398,
            "unit": "ns/iter",
            "extra": "iterations: 634891\ncpu: 1100.789899368553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 997.36994482487,
            "unit": "ns/iter",
            "extra": "iterations: 703759\ncpu: 997.3635861139984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7296.603274929843,
            "unit": "ns/iter",
            "extra": "iterations: 95086\ncpu: 7296.457943335555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18772.431077893925,
            "unit": "ns/iter",
            "extra": "iterations: 37332\ncpu: 18771.92756884167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4447.103809723578,
            "unit": "ns/iter",
            "extra": "iterations: 157413\ncpu: 4447.077433248847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4405.761082394738,
            "unit": "ns/iter",
            "extra": "iterations: 158833\ncpu: 4405.68836450859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4446.0544542491625,
            "unit": "ns/iter",
            "extra": "iterations: 157288\ncpu: 4445.896699048898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9226.999458245997,
            "unit": "ns/iter",
            "extra": "iterations: 75680\ncpu: 9226.848572938648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8398.822153372737,
            "unit": "ns/iter",
            "extra": "iterations: 83274\ncpu: 8398.68986718546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3166.3255639128824,
            "unit": "ns/iter",
            "extra": "iterations: 222153\ncpu: 3166.304303790658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16023.081209099073,
            "unit": "ns/iter",
            "extra": "iterations: 43702\ncpu: 16022.765548487576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12821.465493639851,
            "unit": "ns/iter",
            "extra": "iterations: 54787\ncpu: 12821.116323215461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12583.614741874995,
            "unit": "ns/iter",
            "extra": "iterations: 55651\ncpu: 12583.525902499563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13019.735858549693,
            "unit": "ns/iter",
            "extra": "iterations: 53672\ncpu: 13019.494335966436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27768.313062163823,
            "unit": "ns/iter",
            "extra": "iterations: 25126\ncpu: 27768.132611637375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99178.07996598199,
            "unit": "ns/iter",
            "extra": "iterations: 7053\ncpu: 99174.01105912255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85425.80153601983,
            "unit": "ns/iter",
            "extra": "iterations: 8203\ncpu: 85424.29598927313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84019.84812245911,
            "unit": "ns/iter",
            "extra": "iterations: 8362\ncpu: 84019.27768476433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84293.48693558219,
            "unit": "ns/iter",
            "extra": "iterations: 8305\ncpu: 84290.54786273216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55163.55305060851,
            "unit": "ns/iter",
            "extra": "iterations: 12686\ncpu: 55163.16411792432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84382.72096385167,
            "unit": "ns/iter",
            "extra": "iterations: 8300\ncpu: 84377.08433735008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2961.840743378853,
            "unit": "ns/iter",
            "extra": "iterations: 235896\ncpu: 2961.8263980737383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15021.756096511952,
            "unit": "ns/iter",
            "extra": "iterations: 46584\ncpu: 15021.376438262181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11983.79839303732,
            "unit": "ns/iter",
            "extra": "iterations: 58371\ncpu: 11983.724794846676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11824.271648092026,
            "unit": "ns/iter",
            "extra": "iterations: 59220\ncpu: 11823.915906788316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12268.55286802593,
            "unit": "ns/iter",
            "extra": "iterations: 57095\ncpu: 12268.088273929385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26595.670597631153,
            "unit": "ns/iter",
            "extra": "iterations: 26287\ncpu: 26595.48826416095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97397.14152776932,
            "unit": "ns/iter",
            "extra": "iterations: 7200\ncpu: 97395.52777777641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83316.58862637676,
            "unit": "ns/iter",
            "extra": "iterations: 8423\ncpu: 83316.11064941241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81716.65417934791,
            "unit": "ns/iter",
            "extra": "iterations: 8542\ncpu: 81713.59166471548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81354.91972075995,
            "unit": "ns/iter",
            "extra": "iterations: 8595\ncpu: 81351.4601512496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54866.83619002725,
            "unit": "ns/iter",
            "extra": "iterations: 12777\ncpu: 54866.439696329864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82552.47574759908,
            "unit": "ns/iter",
            "extra": "iterations: 8494\ncpu: 82549.22298092667 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705778427280,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 708.3435502983738,
            "unit": "ns/iter",
            "extra": "iterations: 988193\ncpu: 708.3022243630546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11010.928007233335,
            "unit": "ns/iter",
            "extra": "iterations: 75202\ncpu: 11010.624717427729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24167.52719361968,
            "unit": "ns/iter",
            "extra": "iterations: 34475\ncpu: 24166.285714285717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39229.92581267318,
            "unit": "ns/iter",
            "extra": "iterations: 21257\ncpu: 39228.61645575574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46718.64007863635,
            "unit": "ns/iter",
            "extra": "iterations: 16787\ncpu: 46715.39882051589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58551.13600164772,
            "unit": "ns/iter",
            "extra": "iterations: 14566\ncpu: 58546.663462858705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58681.9322999986,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58681.07 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67532.9215291719,
            "unit": "ns/iter",
            "extra": "iterations: 12922\ncpu: 67528.56368983131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76929.73257568943,
            "unit": "ns/iter",
            "extra": "iterations: 11263\ncpu: 76924.84240433275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 575.5387089439364,
            "unit": "ns/iter",
            "extra": "iterations: 1222534\ncpu: 575.4895978353155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 484.7999315807824,
            "unit": "ns/iter",
            "extra": "iterations: 1435269\ncpu: 484.7734466500699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 498.294963984864,
            "unit": "ns/iter",
            "extra": "iterations: 1473685\ncpu: 498.2553937917535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 475.6486005438489,
            "unit": "ns/iter",
            "extra": "iterations: 1472572\ncpu: 475.61830593003265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 923.0835258231252,
            "unit": "ns/iter",
            "extra": "iterations: 758915\ncpu: 923.0236587760156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3405.8806183108845,
            "unit": "ns/iter",
            "extra": "iterations: 236192\ncpu: 3405.666152960304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14405.55466125586,
            "unit": "ns/iter",
            "extra": "iterations: 57152\ncpu: 14404.439039753624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11270.639430243722,
            "unit": "ns/iter",
            "extra": "iterations: 72452\ncpu: 11269.95942141002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11357.20382517487,
            "unit": "ns/iter",
            "extra": "iterations: 72415\ncpu: 11356.651246288746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11739.10153337271,
            "unit": "ns/iter",
            "extra": "iterations: 68933\ncpu: 11738.327071214095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42178.92460716639,
            "unit": "ns/iter",
            "extra": "iterations: 19856\ncpu: 42175.594278807526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 457619.23156266974,
            "unit": "ns/iter",
            "extra": "iterations: 1939\ncpu: 457174.4198040242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 371362.5025795424,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 371353.69733447884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 372994.69138960954,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 372982.99232736503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 373245.6239863695,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 373231.2846777628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 225309.40323824593,
            "unit": "ns/iter",
            "extra": "iterations: 3891\ncpu: 225298.22667694624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 367615.0279305754,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 367609.18324164225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1868749.5609757258,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1868481.0975609752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 726746.3242823861,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 726715.981380918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2508312.2783783167,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2508212.4324324345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3311.750858242901,
            "unit": "ns/iter",
            "extra": "iterations: 236821\ncpu: 3311.6737958204662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15093.082730601009,
            "unit": "ns/iter",
            "extra": "iterations: 54889\ncpu: 15092.554063655778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11880.04887728304,
            "unit": "ns/iter",
            "extra": "iterations: 68539\ncpu: 11879.560542173138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11142.339581005848,
            "unit": "ns/iter",
            "extra": "iterations: 72507\ncpu: 11141.96284496666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11698.889776426435,
            "unit": "ns/iter",
            "extra": "iterations: 69105\ncpu: 11698.713551841398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41575.480963442176,
            "unit": "ns/iter",
            "extra": "iterations: 19804\ncpu: 41573.995152494485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 466653.0226049735,
            "unit": "ns/iter",
            "extra": "iterations: 1858\ncpu: 466632.7771797621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 385120.51625661505,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 385114.45518453344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 380445.17079528596,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 380431.6384180785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 376415.7069707442,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 376400.1721170378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221859.49757218157,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 221852.4150268332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 375082.14822726033,
            "unit": "ns/iter",
            "extra": "iterations: 2341\ncpu: 375076.206749252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1872085.4701030606,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1871917.3195876237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 728491.6614785837,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 728446.0700389077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3243.9710738509293,
            "unit": "ns/iter",
            "extra": "iterations: 242203\ncpu: 3243.820266470686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15126.250083133546,
            "unit": "ns/iter",
            "extra": "iterations: 54130\ncpu: 15125.65859966751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11834.931329169156,
            "unit": "ns/iter",
            "extra": "iterations: 69156\ncpu: 11834.096824570597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11299.804340399254,
            "unit": "ns/iter",
            "extra": "iterations: 73173\ncpu: 11298.984598144114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11925.618813025678,
            "unit": "ns/iter",
            "extra": "iterations: 69218\ncpu: 11925.267993874355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41734.78014607137,
            "unit": "ns/iter",
            "extra": "iterations: 20127\ncpu: 41733.74571471177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 446842.5102459267,
            "unit": "ns/iter",
            "extra": "iterations: 1952\ncpu: 446831.50614754006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 369803.19966091844,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 369790.97075031814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 368312.18331229547,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 368301.8120522538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 370998.80353386875,
            "unit": "ns/iter",
            "extra": "iterations: 2377\ncpu: 370986.4955826677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 223582.61305123853,
            "unit": "ns/iter",
            "extra": "iterations: 3923\ncpu: 223575.5544226344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 368796.9778440731,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 368791.393268003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.9259933793696,
            "unit": "ns/iter",
            "extra": "iterations: 2357181\ncpu: 295.9122782679809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1473.5353740537391,
            "unit": "ns/iter",
            "extra": "iterations: 474571\ncpu: 1473.4539194346034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1179.547022398346,
            "unit": "ns/iter",
            "extra": "iterations: 592994\ncpu: 1179.4682576889543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1097.0786010399067,
            "unit": "ns/iter",
            "extra": "iterations: 641162\ncpu: 1096.9709683356177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 980.2404020696924,
            "unit": "ns/iter",
            "extra": "iterations: 714503\ncpu: 980.1870670941943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7399.633696502126,
            "unit": "ns/iter",
            "extra": "iterations: 94722\ncpu: 7399.130085935646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18842.570515061703,
            "unit": "ns/iter",
            "extra": "iterations: 37219\ncpu: 18841.86840054795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4479.342904757912,
            "unit": "ns/iter",
            "extra": "iterations: 156612\ncpu: 4478.984369013917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4456.63975253989,
            "unit": "ns/iter",
            "extra": "iterations: 157278\ncpu: 4456.370884675528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4474.733920601776,
            "unit": "ns/iter",
            "extra": "iterations: 154841\ncpu: 4474.32527560537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9257.60052983707,
            "unit": "ns/iter",
            "extra": "iterations: 75495\ncpu: 9256.761374925421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 7990.798950072109,
            "unit": "ns/iter",
            "extra": "iterations: 87625\ncpu: 7990.423965763198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3157.169702568524,
            "unit": "ns/iter",
            "extra": "iterations: 221900\ncpu: 3156.943217665615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16122.461575642288,
            "unit": "ns/iter",
            "extra": "iterations: 43449\ncpu: 16121.719717370064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12767.115778745338,
            "unit": "ns/iter",
            "extra": "iterations: 54941\ncpu: 12766.598714985153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12759.543239378434,
            "unit": "ns/iter",
            "extra": "iterations: 55239\ncpu: 12758.75558934816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13164.278856395717,
            "unit": "ns/iter",
            "extra": "iterations: 53515\ncpu: 13163.434551060545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27823.880765437003,
            "unit": "ns/iter",
            "extra": "iterations: 25345\ncpu: 27822.154271059262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99421.3593259011,
            "unit": "ns/iter",
            "extra": "iterations: 7002\ncpu: 99413.73893173374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86273.28548506722,
            "unit": "ns/iter",
            "extra": "iterations: 8102\ncpu: 86265.60108615119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85513.3031630147,
            "unit": "ns/iter",
            "extra": "iterations: 8220\ncpu: 85506.20437956187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85336.9294988447,
            "unit": "ns/iter",
            "extra": "iterations: 8241\ncpu: 85330.57881325051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56639.575010077,
            "unit": "ns/iter",
            "extra": "iterations: 12405\ncpu: 56636.13865376769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86030.26996430955,
            "unit": "ns/iter",
            "extra": "iterations: 8127\ncpu: 86023.96948443445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2921.355793960593,
            "unit": "ns/iter",
            "extra": "iterations: 236013\ncpu: 2921.2517954519667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14948.434238040372,
            "unit": "ns/iter",
            "extra": "iterations: 46866\ncpu: 14948.007084027011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11916.501667915381,
            "unit": "ns/iter",
            "extra": "iterations: 58756\ncpu: 11916.316631492771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11872.2257633419,
            "unit": "ns/iter",
            "extra": "iterations: 59115\ncpu: 11871.809185485929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12407.281324884398,
            "unit": "ns/iter",
            "extra": "iterations: 56337\ncpu: 12407.098354544933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26938.95640538579,
            "unit": "ns/iter",
            "extra": "iterations: 25783\ncpu: 26937.637202808095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98857.21406686434,
            "unit": "ns/iter",
            "extra": "iterations: 7180\ncpu: 98855.86350974998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83185.00095158743,
            "unit": "ns/iter",
            "extra": "iterations: 8407\ncpu: 83183.75163554144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82133.21897297695,
            "unit": "ns/iter",
            "extra": "iterations: 8549\ncpu: 82130.75213475185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81518.6658897531,
            "unit": "ns/iter",
            "extra": "iterations: 8581\ncpu: 81516.46661228313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55374.100087234794,
            "unit": "ns/iter",
            "extra": "iterations: 12609\ncpu: 55372.21825680056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83070.80892474671,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 83067.9088535482 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705953609063,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 714.1112430152739,
            "unit": "ns/iter",
            "extra": "iterations: 983037\ncpu: 714.1159488401759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10440.52648128962,
            "unit": "ns/iter",
            "extra": "iterations: 76960\ncpu: 10439.764812889813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23616.352511287147,
            "unit": "ns/iter",
            "extra": "iterations: 35440\ncpu: 23615.064898419863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37901.19470899519,
            "unit": "ns/iter",
            "extra": "iterations: 22680\ncpu: 37899.02116402116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46808.49437203823,
            "unit": "ns/iter",
            "extra": "iterations: 16880\ncpu: 46804.50236966822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58316.91358278814,
            "unit": "ns/iter",
            "extra": "iterations: 14592\ncpu: 58314.179002192985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58370.496600002756,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58368.15 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67016.72035466807,
            "unit": "ns/iter",
            "extra": "iterations: 12970\ncpu: 67014.35620663062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77144.20731170788,
            "unit": "ns/iter",
            "extra": "iterations: 11379\ncpu: 77139.07197469012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 565.0115265886452,
            "unit": "ns/iter",
            "extra": "iterations: 1241998\ncpu: 564.979009628036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 496.1876681873051,
            "unit": "ns/iter",
            "extra": "iterations: 1432555\ncpu: 496.150653901595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 483.85730774421137,
            "unit": "ns/iter",
            "extra": "iterations: 1445145\ncpu: 483.8603046753099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 488.3273858996309,
            "unit": "ns/iter",
            "extra": "iterations: 1434176\ncpu: 488.2963457762497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 928.4848741582446,
            "unit": "ns/iter",
            "extra": "iterations: 753049\ncpu: 928.4316160037403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3257.5894682921885,
            "unit": "ns/iter",
            "extra": "iterations: 244025\ncpu: 3257.5342690298075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15104.517303818293,
            "unit": "ns/iter",
            "extra": "iterations: 54121\ncpu: 15104.615583599694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11927.664914528686,
            "unit": "ns/iter",
            "extra": "iterations: 68678\ncpu: 11927.38577128046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11295.521495637277,
            "unit": "ns/iter",
            "extra": "iterations: 72317\ncpu: 11295.049573405999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11969.355063908373,
            "unit": "ns/iter",
            "extra": "iterations: 67754\ncpu: 11968.556837972663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41271.74327591952,
            "unit": "ns/iter",
            "extra": "iterations: 20263\ncpu: 41271.509648127256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 442441.87892603583,
            "unit": "ns/iter",
            "extra": "iterations: 1974\ncpu: 442359.42249240255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 362796.6744476694,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 362766.9862442695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 359433.1129166998,
            "unit": "ns/iter",
            "extra": "iterations: 2400\ncpu: 359417.0416666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 361146.2212096086,
            "unit": "ns/iter",
            "extra": "iterations: 2414\ncpu: 361115.1615575814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 222489.16649694846,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 222478.48778004156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 361980.985750232,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 361960.058675608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1861601.2965931294,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1861502.6052104216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 734582.5738993646,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 734504.5597484292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2516477.9809263973,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2516334.332425075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3317.0852691536516,
            "unit": "ns/iter",
            "extra": "iterations: 239993\ncpu: 3316.800073335469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14839.496421249916,
            "unit": "ns/iter",
            "extra": "iterations: 55606\ncpu: 14838.515627809966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11590.321232418415,
            "unit": "ns/iter",
            "extra": "iterations: 70463\ncpu: 11589.901082837752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11022.45515482441,
            "unit": "ns/iter",
            "extra": "iterations: 74891\ncpu: 11021.941221241534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12036.699865273044,
            "unit": "ns/iter",
            "extra": "iterations: 68286\ncpu: 12036.06156459595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41512.455350518576,
            "unit": "ns/iter",
            "extra": "iterations: 20213\ncpu: 41511.54207688106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 458332.22717623593,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 458322.7707006352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 378499.07642205653,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 378490.2735562307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 372787.41050831415,
            "unit": "ns/iter",
            "extra": "iterations: 2341\ncpu: 372780.60657838645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 371057.9102023553,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 371033.9376053948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 218274.0926299752,
            "unit": "ns/iter",
            "extra": "iterations: 3962\ncpu: 218264.7905098434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 375996.4845010805,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 375426.58174097724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1867311.71926228,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1867087.9098360601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 754029.0323089659,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 753972.8132387662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3367.3290382657265,
            "unit": "ns/iter",
            "extra": "iterations: 238413\ncpu: 3367.072684794898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14765.5957845187,
            "unit": "ns/iter",
            "extra": "iterations: 56079\ncpu: 14764.805007221958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11646.498944434621,
            "unit": "ns/iter",
            "extra": "iterations: 71052\ncpu: 11645.651072453935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11053.123856297843,
            "unit": "ns/iter",
            "extra": "iterations: 74320\ncpu: 11052.521528525302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11711.94026066443,
            "unit": "ns/iter",
            "extra": "iterations: 70205\ncpu: 11711.153051776928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41077.231003635374,
            "unit": "ns/iter",
            "extra": "iterations: 20346\ncpu: 41075.66597857085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 444155.1585613282,
            "unit": "ns/iter",
            "extra": "iterations: 1974\ncpu: 444088.9057750734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 369094.3022071241,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 369073.3022071297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 364153.5445793596,
            "unit": "ns/iter",
            "extra": "iterations: 2389\ncpu: 364115.8225198836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 365615.24317509495,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 365608.5678286434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 222840.0187579093,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 222824.28390367632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 363631.6002527247,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 363622.5779275504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 293.2083059455128,
            "unit": "ns/iter",
            "extra": "iterations: 2387013\ncpu: 293.1844945963857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1492.8778749745159,
            "unit": "ns/iter",
            "extra": "iterations: 472352\ncpu: 1492.7566729896362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1156.6903173652022,
            "unit": "ns/iter",
            "extra": "iterations: 604887\ncpu: 1156.5978438948173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1127.0701496649924,
            "unit": "ns/iter",
            "extra": "iterations: 624194\ncpu: 1127.0017013941138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 981.0263318777544,
            "unit": "ns/iter",
            "extra": "iterations: 713166\ncpu: 980.9950278055857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7364.956539170766,
            "unit": "ns/iter",
            "extra": "iterations: 94775\ncpu: 7364.8630968083135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18537.67351598072,
            "unit": "ns/iter",
            "extra": "iterations: 37668\ncpu: 18534.960709355368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4413.647433877512,
            "unit": "ns/iter",
            "extra": "iterations: 158722\ncpu: 4413.58475825653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4361.298653557669,
            "unit": "ns/iter",
            "extra": "iterations: 160497\ncpu: 4360.9544103628095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4399.020134985538,
            "unit": "ns/iter",
            "extra": "iterations: 159424\ncpu: 4398.684639702883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9129.640914959837,
            "unit": "ns/iter",
            "extra": "iterations: 76681\ncpu: 9129.136291910723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8270.733471000829,
            "unit": "ns/iter",
            "extra": "iterations: 84745\ncpu: 8270.447814030262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3128.2190122942598,
            "unit": "ns/iter",
            "extra": "iterations: 224581\ncpu: 3128.102110151772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15924.37185313097,
            "unit": "ns/iter",
            "extra": "iterations: 44012\ncpu: 15924.17749704649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12684.144159460215,
            "unit": "ns/iter",
            "extra": "iterations: 55286\ncpu: 12684.22023658797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12329.988759103275,
            "unit": "ns/iter",
            "extra": "iterations: 56846\ncpu: 12329.347711360395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12807.508476736919,
            "unit": "ns/iter",
            "extra": "iterations: 54915\ncpu: 12806.675771646913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27439.14901622596,
            "unit": "ns/iter",
            "extra": "iterations: 25514\ncpu: 27435.49423845694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98475.47555492929,
            "unit": "ns/iter",
            "extra": "iterations: 7118\ncpu: 98469.30317505018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84918.94964204078,
            "unit": "ns/iter",
            "extra": "iterations: 8241\ncpu: 84916.80621283693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83848.84039751938,
            "unit": "ns/iter",
            "extra": "iterations: 8352\ncpu: 83842.89990421479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84411.96119547117,
            "unit": "ns/iter",
            "extra": "iterations: 8298\ncpu: 84405.3868402029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55264.46221870919,
            "unit": "ns/iter",
            "extra": "iterations: 12665\ncpu: 55259.13146466643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84388.87628120893,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 84384.1070782598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2998.2452884996005,
            "unit": "ns/iter",
            "extra": "iterations: 234108\ncpu: 2998.027833307712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15205.87645576237,
            "unit": "ns/iter",
            "extra": "iterations: 46024\ncpu: 15205.725273770055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12253.540234300322,
            "unit": "ns/iter",
            "extra": "iterations: 57277\ncpu: 12253.202856295062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12079.874303266435,
            "unit": "ns/iter",
            "extra": "iterations: 57949\ncpu: 12078.867624980687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12282.106214214667,
            "unit": "ns/iter",
            "extra": "iterations: 57111\ncpu: 12281.138484705269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26471.377541729737,
            "unit": "ns/iter",
            "extra": "iterations: 26360\ncpu: 26468.907435508132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97613.8439765756,
            "unit": "ns/iter",
            "extra": "iterations: 7172\ncpu: 97606.39988845494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83759.57319832972,
            "unit": "ns/iter",
            "extra": "iterations: 8395\ncpu: 83750.7683144726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82009.00900689351,
            "unit": "ns/iter",
            "extra": "iterations: 8549\ncpu: 82009.60346239219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82742.00165464474,
            "unit": "ns/iter",
            "extra": "iterations: 8461\ncpu: 82736.02411062515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55106.78088871744,
            "unit": "ns/iter",
            "extra": "iterations: 12715\ncpu: 55102.96500196587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84119.1037477725,
            "unit": "ns/iter",
            "extra": "iterations: 8405\ncpu: 84112.87328970904 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705955024309,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 735.9427873492809,
            "unit": "ns/iter",
            "extra": "iterations: 950559\ncpu: 735.9234934391238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10790.310938957346,
            "unit": "ns/iter",
            "extra": "iterations: 77192\ncpu: 10790.221784640895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24125.463510220212,
            "unit": "ns/iter",
            "extra": "iterations: 34448\ncpu: 24124.703901532743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38144.62457490168,
            "unit": "ns/iter",
            "extra": "iterations: 22348\ncpu: 38144.25004474675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47066.39166555718,
            "unit": "ns/iter",
            "extra": "iterations: 15046\ncpu: 47066.27010501133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58949.84846180539,
            "unit": "ns/iter",
            "extra": "iterations: 14465\ncpu: 58948.047010024166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58793.84549999713,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58794.12000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67843.42852657216,
            "unit": "ns/iter",
            "extra": "iterations: 12739\ncpu: 67842.71135881936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77376.96687149195,
            "unit": "ns/iter",
            "extra": "iterations: 11229\ncpu: 77374.7528720277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 567.7409855857063,
            "unit": "ns/iter",
            "extra": "iterations: 1230862\ncpu: 567.7123024352054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 469.5499200185254,
            "unit": "ns/iter",
            "extra": "iterations: 1490344\ncpu: 469.5516605562207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 463.0592281592243,
            "unit": "ns/iter",
            "extra": "iterations: 1512203\ncpu: 463.06428435864746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 473.6241511308276,
            "unit": "ns/iter",
            "extra": "iterations: 1477554\ncpu: 473.61802005205885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 921.3032242023872,
            "unit": "ns/iter",
            "extra": "iterations: 760157\ncpu: 921.2913911205184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3391.168938633414,
            "unit": "ns/iter",
            "extra": "iterations: 236139\ncpu: 3391.1823121127827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14945.506373526827,
            "unit": "ns/iter",
            "extra": "iterations: 53581\ncpu: 14945.467609787049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12156.124998091493,
            "unit": "ns/iter",
            "extra": "iterations: 65513\ncpu: 12156.06215560271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11692.586069391156,
            "unit": "ns/iter",
            "extra": "iterations: 68712\ncpu: 11692.545697985786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12225.408313601554,
            "unit": "ns/iter",
            "extra": "iterations: 64617\ncpu: 12225.45769689091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42058.880532104566,
            "unit": "ns/iter",
            "extra": "iterations: 19545\ncpu: 42057.84599641844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 438871.51598174876,
            "unit": "ns/iter",
            "extra": "iterations: 1971\ncpu: 438865.0431253179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 363782.15233725606,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 363780.9265442405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 364212.64153330756,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 364211.28896377346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 363043.8365465541,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 363043.1265716674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224607.31241962838,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 224606.63409616795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 359937.9307053589,
            "unit": "ns/iter",
            "extra": "iterations: 2410\ncpu: 359939.4190871378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1853357.1589538495,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1853348.4909456703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 763463.0338982834,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 763450.9366636942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2489601.6837838157,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2489544.864864872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3324.195335128033,
            "unit": "ns/iter",
            "extra": "iterations: 235119\ncpu: 3324.1622327417144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14644.138481093774,
            "unit": "ns/iter",
            "extra": "iterations: 55856\ncpu: 14644.077628186798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12098.52476798082,
            "unit": "ns/iter",
            "extra": "iterations: 68960\ncpu: 12098.323665893324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11628.699433270185,
            "unit": "ns/iter",
            "extra": "iterations: 70051\ncpu: 11628.60201852935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12058.870339463543,
            "unit": "ns/iter",
            "extra": "iterations: 67106\ncpu: 12058.920215778042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41634.47276883261,
            "unit": "ns/iter",
            "extra": "iterations: 20124\ncpu: 41634.2476644804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 462500.27989419334,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 462498.0423280417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 382756.0551876228,
            "unit": "ns/iter",
            "extra": "iterations: 2265\ncpu: 382743.88520971197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 375666.28176321014,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 375661.27917026734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 371309.12847964367,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 371298.372591008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221236.03683007168,
            "unit": "ns/iter",
            "extra": "iterations: 3937\ncpu: 221229.61645923305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 371108.1268023662,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 371094.7837150135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1857295.3504099227,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1857171.721311474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 728564.3474842807,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 728531.9968553433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3374.708001962792,
            "unit": "ns/iter",
            "extra": "iterations: 236392\ncpu: 3374.574012656959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14585.138297493248,
            "unit": "ns/iter",
            "extra": "iterations: 56082\ncpu: 14584.772297706966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11859.353295421664,
            "unit": "ns/iter",
            "extra": "iterations: 68580\ncpu: 11858.926800816605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11273.53591885294,
            "unit": "ns/iter",
            "extra": "iterations: 73151\ncpu: 11273.18150127815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12101.296608680808,
            "unit": "ns/iter",
            "extra": "iterations: 68292\ncpu: 12100.9649739355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41591.672140909875,
            "unit": "ns/iter",
            "extra": "iterations: 20155\ncpu: 41590.72686678228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 441876.75529164466,
            "unit": "ns/iter",
            "extra": "iterations: 1937\ncpu: 441853.07176045224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 368665.01357657375,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 368649.1302503163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 361936.4345087764,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 361926.5743073039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 364171.80042284995,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 364157.5898520064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 226337.93939396014,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 226329.5069337442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 361968.1583158079,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 361951.15789473674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 297.60712471295744,
            "unit": "ns/iter",
            "extra": "iterations: 2346284\ncpu: 297.59474982568406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1472.6060992563268,
            "unit": "ns/iter",
            "extra": "iterations: 471205\ncpu: 1472.5488906102516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1178.0923819064665,
            "unit": "ns/iter",
            "extra": "iterations: 593915\ncpu: 1178.0606652467009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1129.0725173270437,
            "unit": "ns/iter",
            "extra": "iterations: 621286\ncpu: 1129.0185196511673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 983.9576098267258,
            "unit": "ns/iter",
            "extra": "iterations: 712099\ncpu: 983.9426821270683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7406.881935165592,
            "unit": "ns/iter",
            "extra": "iterations: 97294\ncpu: 7406.774312907323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 17856.075147009626,
            "unit": "ns/iter",
            "extra": "iterations: 39283\ncpu: 17856.151515922917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4492.988695087943,
            "unit": "ns/iter",
            "extra": "iterations: 155773\ncpu: 4493.007774132842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4427.906096688495,
            "unit": "ns/iter",
            "extra": "iterations: 157971\ncpu: 4427.924112653547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4470.9152055936875,
            "unit": "ns/iter",
            "extra": "iterations: 156449\ncpu: 4470.899782037556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 8938.704746960855,
            "unit": "ns/iter",
            "extra": "iterations: 78387\ncpu: 8938.69136463956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8404.747214802177,
            "unit": "ns/iter",
            "extra": "iterations: 83118\ncpu: 8404.800404244546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3210.274675473559,
            "unit": "ns/iter",
            "extra": "iterations: 218010\ncpu: 3210.25090592179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16135.230226444595,
            "unit": "ns/iter",
            "extra": "iterations: 43366\ncpu: 16135.12198496515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12791.713684671346,
            "unit": "ns/iter",
            "extra": "iterations: 54667\ncpu: 12791.65675819046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12537.976376823332,
            "unit": "ns/iter",
            "extra": "iterations: 55835\ncpu: 12537.933196024085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13025.128385657606,
            "unit": "ns/iter",
            "extra": "iterations: 53830\ncpu: 13025.0529444549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27521.031452467254,
            "unit": "ns/iter",
            "extra": "iterations: 25467\ncpu: 27520.866219028732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98290.633052035,
            "unit": "ns/iter",
            "extra": "iterations: 7110\ncpu: 98290.19690576753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84874.73861026506,
            "unit": "ns/iter",
            "extra": "iterations: 8275\ncpu: 84874.34441087532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83544.3322988803,
            "unit": "ns/iter",
            "extra": "iterations: 8378\ncpu: 83543.94843638036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83721.46214756856,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 83720.27594481026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55493.73141905451,
            "unit": "ns/iter",
            "extra": "iterations: 12607\ncpu: 55493.34496708071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84348.21246697794,
            "unit": "ns/iter",
            "extra": "iterations: 8326\ncpu: 84346.48090319637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2994.786384083927,
            "unit": "ns/iter",
            "extra": "iterations: 234079\ncpu: 2994.7701417043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15129.521821959424,
            "unit": "ns/iter",
            "extra": "iterations: 46192\ncpu: 15129.459646691988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12091.908938711034,
            "unit": "ns/iter",
            "extra": "iterations: 57939\ncpu: 12091.853501095931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11980.894890885455,
            "unit": "ns/iter",
            "extra": "iterations: 58425\ncpu: 11980.806161745732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12418.78118957657,
            "unit": "ns/iter",
            "extra": "iterations: 56373\ncpu: 12418.60819896055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26783.86043484926,
            "unit": "ns/iter",
            "extra": "iterations: 26124\ncpu: 26783.75057418462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96342.37756233405,
            "unit": "ns/iter",
            "extra": "iterations: 7220\ncpu: 96337.77008310144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82255.27077212617,
            "unit": "ns/iter",
            "extra": "iterations: 8509\ncpu: 82252.9086849231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81659.07206580759,
            "unit": "ns/iter",
            "extra": "iterations: 8631\ncpu: 81658.45209129891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81761.92902466774,
            "unit": "ns/iter",
            "extra": "iterations: 8510\ncpu: 81758.86016451317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54661.83013998621,
            "unit": "ns/iter",
            "extra": "iterations: 12787\ncpu: 54660.63971220785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82593.78077195102,
            "unit": "ns/iter",
            "extra": "iterations: 8498\ncpu: 82591.127324075 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705957027632,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 699.0002193770973,
            "unit": "ns/iter",
            "extra": "iterations: 1002839\ncpu: 699.0021329445703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10716.270060496616,
            "unit": "ns/iter",
            "extra": "iterations: 77690\ncpu: 10715.833440597244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24052.234763960183,
            "unit": "ns/iter",
            "extra": "iterations: 34507\ncpu: 24052.302431390734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37986.504476272945,
            "unit": "ns/iter",
            "extra": "iterations: 22340\ncpu: 37985.2193375112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47449.90618298802,
            "unit": "ns/iter",
            "extra": "iterations: 16788\ncpu: 47448.76697641171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59554.89525747452,
            "unit": "ns/iter",
            "extra": "iterations: 14254\ncpu: 59554.433843131716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59310.19460000471,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59306.82000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68237.34440656417,
            "unit": "ns/iter",
            "extra": "iterations: 12613\ncpu: 68236.5099500515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77873.69631819199,
            "unit": "ns/iter",
            "extra": "iterations: 11163\ncpu: 77873.28675087345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 587.700115262518,
            "unit": "ns/iter",
            "extra": "iterations: 1201605\ncpu: 587.6784800329563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 484.65541772232984,
            "unit": "ns/iter",
            "extra": "iterations: 1446595\ncpu: 484.64891693943366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 479.25499311379065,
            "unit": "ns/iter",
            "extra": "iterations: 1460161\ncpu: 479.2431793480308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 470.8034367563189,
            "unit": "ns/iter",
            "extra": "iterations: 1461087\ncpu: 470.78093227850235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 920.1339707959089,
            "unit": "ns/iter",
            "extra": "iterations: 762084\ncpu: 920.1031644805561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3334.5832732029603,
            "unit": "ns/iter",
            "extra": "iterations: 236985\ncpu: 3334.43129311982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15014.916133979908,
            "unit": "ns/iter",
            "extra": "iterations: 54754\ncpu: 15014.63089454653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11872.721360788795,
            "unit": "ns/iter",
            "extra": "iterations: 68813\ncpu: 11872.380218853988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11278.496102103414,
            "unit": "ns/iter",
            "extra": "iterations: 72475\ncpu: 11278.404967230063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12188.403658000065,
            "unit": "ns/iter",
            "extra": "iterations: 68070\ncpu: 12188.347289554858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 43175.06098934846,
            "unit": "ns/iter",
            "extra": "iterations: 19528\ncpu: 43174.01679639495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 445268.523785379,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 445255.76923076995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 366532.7886554361,
            "unit": "ns/iter",
            "extra": "iterations: 2380\ncpu: 366529.78991596535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 363494.1800669748,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 363486.97654941416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 363619.83683766023,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 363595.41631623235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 221739.83290555488,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 221736.55030800903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 364562.85744323116,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 364543.39781328896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1859517.241448553,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1859500.4024144914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 735985.7099056526,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 735955.817610062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2514923.7711169478,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2514852.861035416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3224.099729765044,
            "unit": "ns/iter",
            "extra": "iterations: 244972\ncpu: 3224.0313178649035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15138.567721635198,
            "unit": "ns/iter",
            "extra": "iterations: 54030\ncpu: 15138.610031464006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11893.142115727136,
            "unit": "ns/iter",
            "extra": "iterations: 68402\ncpu: 11892.751673927656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11324.107429858135,
            "unit": "ns/iter",
            "extra": "iterations: 71926\ncpu: 11324.001056641555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12019.612237903557,
            "unit": "ns/iter",
            "extra": "iterations: 67103\ncpu: 12019.222687510306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 42006.11319524896,
            "unit": "ns/iter",
            "extra": "iterations: 19939\ncpu: 42005.56196399025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 462416.2324208393,
            "unit": "ns/iter",
            "extra": "iterations: 1863\ncpu: 462403.3279656501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 380523.2198952695,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 380505.8027923217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 372873.59212805517,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 372851.2110726671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 374573.58901759674,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 374554.22565422545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223212.54204895656,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 223197.55351681862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 372206.0590753334,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 372187.4143835612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1864597.0736196078,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1864542.5357873251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 730915.6913970008,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 730897.7111286516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3351.985912473918,
            "unit": "ns/iter",
            "extra": "iterations: 237941\ncpu: 3351.926317868708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14755.80041427792,
            "unit": "ns/iter",
            "extra": "iterations: 56001\ncpu: 14755.55793646545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11616.745422019363,
            "unit": "ns/iter",
            "extra": "iterations: 70992\ncpu: 11616.65539779129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11311.26889949598,
            "unit": "ns/iter",
            "extra": "iterations: 75002\ncpu: 11310.953041252213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12091.005830350836,
            "unit": "ns/iter",
            "extra": "iterations: 68435\ncpu: 12090.836560239693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42297.508726794964,
            "unit": "ns/iter",
            "extra": "iterations: 19824\ncpu: 42296.98849878937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 445118.33179483755,
            "unit": "ns/iter",
            "extra": "iterations: 1950\ncpu: 445108.05128205364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 368932.4788850943,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 368929.43412161985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 364468.50943395257,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 364460.7547169808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 365547.5652719406,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 365541.17154811666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 222348.54021245963,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 222337.70864946797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 362615.828244258,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 362609.8388464815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 296.08415534939905,
            "unit": "ns/iter",
            "extra": "iterations: 2369986\ncpu: 296.08457602703186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1517.2687557651618,
            "unit": "ns/iter",
            "extra": "iterations: 462911\ncpu: 1517.2709224883422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1198.4176006540404,
            "unit": "ns/iter",
            "extra": "iterations: 582092\ncpu: 1198.3873683197924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1176.7240567305357,
            "unit": "ns/iter",
            "extra": "iterations: 594952\ncpu: 1176.7070284661606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1003.0581074767949,
            "unit": "ns/iter",
            "extra": "iterations: 697862\ncpu: 1003.0325479822629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7472.529158151878,
            "unit": "ns/iter",
            "extra": "iterations: 93473\ncpu: 7472.5599905855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18774.3793463421,
            "unit": "ns/iter",
            "extra": "iterations: 37359\ncpu: 18774.260553012766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4455.841252135326,
            "unit": "ns/iter",
            "extra": "iterations: 156884\ncpu: 4455.817036791516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4411.029945485039,
            "unit": "ns/iter",
            "extra": "iterations: 158488\ncpu: 4410.926379284258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4449.95124147778,
            "unit": "ns/iter",
            "extra": "iterations: 157675\ncpu: 4449.926748057681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 8886.38672994056,
            "unit": "ns/iter",
            "extra": "iterations: 79231\ncpu: 8886.146836465521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8373.386329777328,
            "unit": "ns/iter",
            "extra": "iterations: 83232\ncpu: 8373.332372164547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3131.4008082455425,
            "unit": "ns/iter",
            "extra": "iterations: 222952\ncpu: 3131.328267967979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15897.088650131067,
            "unit": "ns/iter",
            "extra": "iterations: 43745\ncpu: 15897.144816550266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12691.538316945027,
            "unit": "ns/iter",
            "extra": "iterations: 55328\ncpu: 12691.5793088492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12599.771184609872,
            "unit": "ns/iter",
            "extra": "iterations: 55512\ncpu: 12599.573065283415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13130.83764397295,
            "unit": "ns/iter",
            "extra": "iterations: 53395\ncpu: 13130.527202921612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27621.45294280552,
            "unit": "ns/iter",
            "extra": "iterations: 25299\ncpu: 27620.64508478601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99262.2303768739,
            "unit": "ns/iter",
            "extra": "iterations: 7058\ncpu: 99261.56134882467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85544.1859357875,
            "unit": "ns/iter",
            "extra": "iterations: 8191\ncpu: 85542.04614821092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83995.5406249943,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 83995.7812499997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84679.357548651,
            "unit": "ns/iter",
            "extra": "iterations: 8273\ncpu: 84678.03698779232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55708.115421382245,
            "unit": "ns/iter",
            "extra": "iterations: 12554\ncpu: 55706.90616536523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84254.91756659544,
            "unit": "ns/iter",
            "extra": "iterations: 8334\ncpu: 84254.11567074599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2964.597581972567,
            "unit": "ns/iter",
            "extra": "iterations: 236970\ncpu: 2964.5301092965597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15074.80324338435,
            "unit": "ns/iter",
            "extra": "iterations: 46433\ncpu: 15074.714104193064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12031.649548814587,
            "unit": "ns/iter",
            "extra": "iterations: 57737\ncpu: 12031.539567348502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11874.523916799011,
            "unit": "ns/iter",
            "extra": "iterations: 59038\ncpu: 11874.57569700886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12355.845969603311,
            "unit": "ns/iter",
            "extra": "iterations: 56781\ncpu: 12355.62071819805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26695.822134989747,
            "unit": "ns/iter",
            "extra": "iterations: 26239\ncpu: 26695.346621441266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97632.99510899645,
            "unit": "ns/iter",
            "extra": "iterations: 7156\ncpu: 97631.19060927905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83466.07804878686,
            "unit": "ns/iter",
            "extra": "iterations: 8405\ncpu: 83463.75966686464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82298.247686001,
            "unit": "ns/iter",
            "extra": "iterations: 8535\ncpu: 82298.6291739899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82712.446341753,
            "unit": "ns/iter",
            "extra": "iterations: 8433\ncpu: 82713.04399383471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55638.78827827326,
            "unit": "ns/iter",
            "extra": "iterations: 12592\ncpu: 55638.087674713344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83862.11296119017,
            "unit": "ns/iter",
            "extra": "iterations: 8348\ncpu: 83860.99664590335 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705958502151,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 693.3986875445568,
            "unit": "ns/iter",
            "extra": "iterations: 1009101\ncpu: 693.3821292417706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10566.494282294077,
            "unit": "ns/iter",
            "extra": "iterations: 78528\ncpu: 10566.148380195598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23821.036039637973,
            "unit": "ns/iter",
            "extra": "iterations: 35017\ncpu: 23820.915555301715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38875.951493366185,
            "unit": "ns/iter",
            "extra": "iterations: 22533\ncpu: 38874.41973993698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46697.605561279575,
            "unit": "ns/iter",
            "extra": "iterations: 16507\ncpu: 46696.92857575569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58166.69711736217,
            "unit": "ns/iter",
            "extra": "iterations: 14570\ncpu: 58165.490734385676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58523.24480000562,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58521.309999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67127.78806202149,
            "unit": "ns/iter",
            "extra": "iterations: 12900\ncpu: 67124.86046511632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77101.62486781713,
            "unit": "ns/iter",
            "extra": "iterations: 11348\ncpu: 77099.13641170239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 566.1138036714508,
            "unit": "ns/iter",
            "extra": "iterations: 1232078\ncpu: 566.0885917937022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 472.3779605259029,
            "unit": "ns/iter",
            "extra": "iterations: 1487658\ncpu: 472.3731529692974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 468.70911611664417,
            "unit": "ns/iter",
            "extra": "iterations: 1503875\ncpu: 468.68935250602556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 477.3523009484878,
            "unit": "ns/iter",
            "extra": "iterations: 1465287\ncpu: 477.34245919058844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 940.4736362189652,
            "unit": "ns/iter",
            "extra": "iterations: 747939\ncpu: 940.4363190046242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3368.6088955959467,
            "unit": "ns/iter",
            "extra": "iterations: 237241\ncpu: 3368.486897290096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14652.301464380893,
            "unit": "ns/iter",
            "extra": "iterations: 54494\ncpu: 14651.227658090793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11810.384763296172,
            "unit": "ns/iter",
            "extra": "iterations: 71249\ncpu: 11810.157335541535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11549.52938043441,
            "unit": "ns/iter",
            "extra": "iterations: 75101\ncpu: 11549.09921305974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11534.61501405529,
            "unit": "ns/iter",
            "extra": "iterations: 70787\ncpu: 11534.24781386415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 43136.75592250415,
            "unit": "ns/iter",
            "extra": "iterations: 19924\ncpu: 43135.05822124064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 447857.60245899577,
            "unit": "ns/iter",
            "extra": "iterations: 1952\ncpu: 447837.85860655573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 362898.6243209486,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 362891.26619306364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 364329.70404331957,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 364315.79824926995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 363854.3000000046,
            "unit": "ns/iter",
            "extra": "iterations: 2400\ncpu: 363840.1249999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227355.75493463202,
            "unit": "ns/iter",
            "extra": "iterations: 3901\ncpu: 227343.73237631432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 366564.6466581309,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 366561.2601106862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1891323.3435583005,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1891174.2331288296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 740925.0912025309,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 740897.2558514923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2505541.302452255,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2505426.702997277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3293.4304323565334,
            "unit": "ns/iter",
            "extra": "iterations: 240126\ncpu: 3293.3401630810467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14769.261008721842,
            "unit": "ns/iter",
            "extra": "iterations: 55615\ncpu: 14768.932841859165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11648.773700305288,
            "unit": "ns/iter",
            "extra": "iterations: 70632\ncpu: 11648.411484879363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11099.534608201457,
            "unit": "ns/iter",
            "extra": "iterations: 71746\ncpu: 11099.145596967082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11656.338755627035,
            "unit": "ns/iter",
            "extra": "iterations: 70204\ncpu: 11656.248931684831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 42492.031488064866,
            "unit": "ns/iter",
            "extra": "iterations: 19690\ncpu: 42490.624682580004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 464513.6996805111,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 464492.01277955156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 385993.3528368734,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 385986.08156028384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 379276.1301310033,
            "unit": "ns/iter",
            "extra": "iterations: 2290\ncpu: 379252.5327510929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 377414.5885394262,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 377408.22921154764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222018.68563408213,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 222013.2942077059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 368816.4753033123,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 368799.4367417705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1872481.137295092,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1872414.549180325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 725386.1892103258,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 725339.8749022683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3313.7139807407716,
            "unit": "ns/iter",
            "extra": "iterations: 238428\ncpu: 3313.5483248611476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14727.189641959327,
            "unit": "ns/iter",
            "extra": "iterations: 56111\ncpu: 14726.545597119912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11593.716328660403,
            "unit": "ns/iter",
            "extra": "iterations: 70906\ncpu: 11593.374326573194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11881.840960129966,
            "unit": "ns/iter",
            "extra": "iterations: 68574\ncpu: 11881.35882404413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11684.216001147635,
            "unit": "ns/iter",
            "extra": "iterations: 69745\ncpu: 11684.248333213916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42481.415271230406,
            "unit": "ns/iter",
            "extra": "iterations: 19946\ncpu: 42479.524716735184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 441255.0337079048,
            "unit": "ns/iter",
            "extra": "iterations: 1958\ncpu: 441238.559754853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 375672.49215769296,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 375657.3972022059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 371796.99284211226,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 371779.8736842102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 373498.8244111227,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 373485.3961456084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 226199.48147189114,
            "unit": "ns/iter",
            "extra": "iterations: 3859\ncpu: 226188.64990930236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 362275.86983470194,
            "unit": "ns/iter",
            "extra": "iterations: 2420\ncpu: 362264.21487603325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 292.5639819496964,
            "unit": "ns/iter",
            "extra": "iterations: 2382672\ncpu: 292.55025450418617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1482.1717957875737,
            "unit": "ns/iter",
            "extra": "iterations: 473213\ncpu: 1482.1217929346826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1124.0747438825622,
            "unit": "ns/iter",
            "extra": "iterations: 622566\ncpu: 1124.0209070202995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1128.0730987146171,
            "unit": "ns/iter",
            "extra": "iterations: 621803\ncpu: 1128.0757731950496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 982.4921584091437,
            "unit": "ns/iter",
            "extra": "iterations: 692334\ncpu: 982.4548556043692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7390.564111706585,
            "unit": "ns/iter",
            "extra": "iterations: 95357\ncpu: 7390.18844972049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18492.966355988327,
            "unit": "ns/iter",
            "extra": "iterations: 39591\ncpu: 18492.149730999237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4438.808998901534,
            "unit": "ns/iter",
            "extra": "iterations: 158486\ncpu: 4438.6583042035045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4543.00766787057,
            "unit": "ns/iter",
            "extra": "iterations: 156758\ncpu: 4542.963676494954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4582.269917240931,
            "unit": "ns/iter",
            "extra": "iterations: 152732\ncpu: 4582.2466804598935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9174.658036649447,
            "unit": "ns/iter",
            "extra": "iterations: 76400\ncpu: 9174.590314136243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8375.850935526416,
            "unit": "ns/iter",
            "extra": "iterations: 83910\ncpu: 8375.474913597869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3170.7049625736126,
            "unit": "ns/iter",
            "extra": "iterations: 220833\ncpu: 3170.5854650346905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15937.75273025206,
            "unit": "ns/iter",
            "extra": "iterations: 43952\ncpu: 15936.917546414265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12594.50756714983,
            "unit": "ns/iter",
            "extra": "iterations: 55437\ncpu: 12593.937262117335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12526.837658969333,
            "unit": "ns/iter",
            "extra": "iterations: 55907\ncpu: 12526.213175452183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13020.383276685283,
            "unit": "ns/iter",
            "extra": "iterations: 53841\ncpu: 13020.163072751468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27497.541119260248,
            "unit": "ns/iter",
            "extra": "iterations: 25499\ncpu: 27496.133181693356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97829.8894833075,
            "unit": "ns/iter",
            "extra": "iterations: 7103\ncpu: 97827.15753906815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84866.05011527834,
            "unit": "ns/iter",
            "extra": "iterations: 8241\ncpu: 84862.8564494611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83421.94021088224,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 83417.0860292347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83746.10154656979,
            "unit": "ns/iter",
            "extra": "iterations: 8341\ncpu: 83742.64476681549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55097.37889783951,
            "unit": "ns/iter",
            "extra": "iterations: 12539\ncpu: 55096.14004306534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84001.99845146907,
            "unit": "ns/iter",
            "extra": "iterations: 8395\ncpu: 84001.33412745531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2967.2289862881194,
            "unit": "ns/iter",
            "extra": "iterations: 233883\ncpu: 2967.206252699029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14947.790369972758,
            "unit": "ns/iter",
            "extra": "iterations: 46625\ncpu: 14947.435924932932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11977.856395705361,
            "unit": "ns/iter",
            "extra": "iterations: 58508\ncpu: 11977.41676351946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11844.507735917285,
            "unit": "ns/iter",
            "extra": "iterations: 59269\ncpu: 11843.957212033394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12249.033413431516,
            "unit": "ns/iter",
            "extra": "iterations: 57013\ncpu: 12248.450353428145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26837.12028057935,
            "unit": "ns/iter",
            "extra": "iterations: 26089\ncpu: 26835.605044271277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96462.55290896143,
            "unit": "ns/iter",
            "extra": "iterations: 7305\ncpu: 96461.8617385348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82238.86561026025,
            "unit": "ns/iter",
            "extra": "iterations: 8267\ncpu: 82237.94605056207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82048.76008418179,
            "unit": "ns/iter",
            "extra": "iterations: 8553\ncpu: 82043.97287501437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82057.44904195951,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 82053.5676501712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54959.62256289829,
            "unit": "ns/iter",
            "extra": "iterations: 12720\ncpu: 54956.72169811328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82707.51483151077,
            "unit": "ns/iter",
            "extra": "iterations: 8428\ncpu: 82707.90223066029 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705959973039,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 700.4632116057666,
            "unit": "ns/iter",
            "extra": "iterations: 995776\ncpu: 700.4467872292564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10670.180557691026,
            "unit": "ns/iter",
            "extra": "iterations: 78036\ncpu: 10669.8575016659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23954.99828321117,
            "unit": "ns/iter",
            "extra": "iterations: 34949\ncpu: 23954.568084923743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38562.396048386225,
            "unit": "ns/iter",
            "extra": "iterations: 21409\ncpu: 38561.31066373955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47809.26518412238,
            "unit": "ns/iter",
            "extra": "iterations: 16728\ncpu: 47805.55356288858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58211.39665528786,
            "unit": "ns/iter",
            "extra": "iterations: 14650\ncpu: 58208.081911262816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58127.89579999844,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58126.65999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67195.27335398663,
            "unit": "ns/iter",
            "extra": "iterations: 12910\ncpu: 67192.13787761428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77268.94071982398,
            "unit": "ns/iter",
            "extra": "iterations: 11336\ncpu: 77267.70465772758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 569.1752561581261,
            "unit": "ns/iter",
            "extra": "iterations: 1231466\ncpu: 569.1608213300243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 475.54086443526944,
            "unit": "ns/iter",
            "extra": "iterations: 1473702\ncpu: 475.5355560350741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 471.1262170681831,
            "unit": "ns/iter",
            "extra": "iterations: 1485948\ncpu: 471.11998535615095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 478.9830229906491,
            "unit": "ns/iter",
            "extra": "iterations: 1460858\ncpu: 478.98050323850777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 926.5853667896157,
            "unit": "ns/iter",
            "extra": "iterations: 755692\ncpu: 926.5677021855465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3414.2694316406855,
            "unit": "ns/iter",
            "extra": "iterations: 231491\ncpu: 3414.1996881088235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15044.888536946644,
            "unit": "ns/iter",
            "extra": "iterations: 54933\ncpu: 15044.905612291315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12271.093626504067,
            "unit": "ns/iter",
            "extra": "iterations: 67310\ncpu: 12270.892883672568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11672.813840223671,
            "unit": "ns/iter",
            "extra": "iterations: 70837\ncpu: 11672.518599037207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12317.114581922573,
            "unit": "ns/iter",
            "extra": "iterations: 66459\ncpu: 12316.789298665362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42690.27051185993,
            "unit": "ns/iter",
            "extra": "iterations: 20025\ncpu: 42689.84269662923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 435867.1852038442,
            "unit": "ns/iter",
            "extra": "iterations: 1987\ncpu: 435861.4997483639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 363324.5949103175,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 363315.9783062172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 362774.9886981687,
            "unit": "ns/iter",
            "extra": "iterations: 2389\ncpu: 362767.7689409798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 363982.97792585596,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 363977.3011245329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 220380.31084522794,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 220377.4694501015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 361810.1720969413,
            "unit": "ns/iter",
            "extra": "iterations: 2394\ncpu: 361795.40517961496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1851388.610441609,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1851213.855421687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 729580.1420806942,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 729557.2204968941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2492413.6558265155,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2492362.6016260143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3515.242271562983,
            "unit": "ns/iter",
            "extra": "iterations: 226857\ncpu: 3515.108195911953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14653.038026521246,
            "unit": "ns/iter",
            "extra": "iterations: 56408\ncpu: 14652.81697631539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12224.059365682693,
            "unit": "ns/iter",
            "extra": "iterations: 70091\ncpu: 12223.914625272819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 10817.142001205943,
            "unit": "ns/iter",
            "extra": "iterations: 76274\ncpu: 10816.978262579605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11909.461823249909,
            "unit": "ns/iter",
            "extra": "iterations: 68877\ncpu: 11909.127865615505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41837.27370561391,
            "unit": "ns/iter",
            "extra": "iterations: 20164\ncpu: 41836.75362031351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 462776.0961742859,
            "unit": "ns/iter",
            "extra": "iterations: 1882\ncpu: 462769.71307120257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 379884.7993867614,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 379877.00394218107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 374361.3419465963,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 374362.44616709545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 378743.35574470216,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 378737.9574468095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 220786.21112517294,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 220782.3261694056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 372707.35211269895,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 372702.77422108303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1859334.3711966188,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1859281.1359026292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 726911.9976599512,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 726889.3915756637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3366.8486273680937,
            "unit": "ns/iter",
            "extra": "iterations: 236225\ncpu: 3366.724097788152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14937.447942622177,
            "unit": "ns/iter",
            "extra": "iterations: 56188\ncpu: 14937.102228233789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12154.253926316462,
            "unit": "ns/iter",
            "extra": "iterations: 68130\ncpu: 12154.098047849695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11554.472975235669,
            "unit": "ns/iter",
            "extra": "iterations: 71638\ncpu: 11554.261704681854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12202.35190085323,
            "unit": "ns/iter",
            "extra": "iterations: 66891\ncpu: 12202.02568357484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41549.805478775015,
            "unit": "ns/iter",
            "extra": "iterations: 20260\ncpu: 41548.4896347481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 448599.0752965613,
            "unit": "ns/iter",
            "extra": "iterations: 1939\ncpu: 448592.41877256223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 374741.5483733022,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 374736.130136986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 367922.7358649753,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 367907.63713080203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 371297.6979385483,
            "unit": "ns/iter",
            "extra": "iterations: 2377\ncpu: 371292.6798485491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 222695.29894520412,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 222690.40391047104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 368158.1149810769,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 368149.2656315546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 297.18190730420554,
            "unit": "ns/iter",
            "extra": "iterations: 2345090\ncpu: 297.1784025346591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1520.409954616475,
            "unit": "ns/iter",
            "extra": "iterations: 457436\ncpu: 1520.3744348936184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1143.4477933155463,
            "unit": "ns/iter",
            "extra": "iterations: 612412\ncpu: 1143.419299425879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1162.8621001560246,
            "unit": "ns/iter",
            "extra": "iterations: 601422\ncpu: 1162.8251045023303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 992.7211255388544,
            "unit": "ns/iter",
            "extra": "iterations: 705511\ncpu: 992.6896958374831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7647.326841214607,
            "unit": "ns/iter",
            "extra": "iterations: 95141\ncpu: 7647.3486719711145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 17909.37831541256,
            "unit": "ns/iter",
            "extra": "iterations: 39060\ncpu: 17909.088581669184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4429.347165151922,
            "unit": "ns/iter",
            "extra": "iterations: 157945\ncpu: 4429.314001709401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4402.8185429882915,
            "unit": "ns/iter",
            "extra": "iterations: 159079\ncpu: 4402.643340730114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4436.87895556558,
            "unit": "ns/iter",
            "extra": "iterations: 157942\ncpu: 4436.845171012111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9156.085226752566,
            "unit": "ns/iter",
            "extra": "iterations: 76537\ncpu: 9155.893228111885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8313.987049095234,
            "unit": "ns/iter",
            "extra": "iterations: 84164\ncpu: 8313.798060928748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3120.4412954201043,
            "unit": "ns/iter",
            "extra": "iterations: 223773\ncpu: 3120.380474856234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15931.016671217454,
            "unit": "ns/iter",
            "extra": "iterations: 43968\ncpu: 15931.063500727805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12804.334149392564,
            "unit": "ns/iter",
            "extra": "iterations: 55143\ncpu: 12804.152838982298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12878.305562127402,
            "unit": "ns/iter",
            "extra": "iterations: 54961\ncpu: 12878.029875730246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12924.897716573378,
            "unit": "ns/iter",
            "extra": "iterations: 54173\ncpu: 12924.589740276495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27705.916452491434,
            "unit": "ns/iter",
            "extra": "iterations: 25291\ncpu: 27705.34182120143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99383.09833736581,
            "unit": "ns/iter",
            "extra": "iterations: 7037\ncpu: 99382.4641182328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85553.8253579694,
            "unit": "ns/iter",
            "extra": "iterations: 8171\ncpu: 85553.18810427237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83574.187879498,
            "unit": "ns/iter",
            "extra": "iterations: 8399\ncpu: 83573.65162519348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83877.05999516459,
            "unit": "ns/iter",
            "extra": "iterations: 8284\ncpu: 83874.19121197559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55485.08211189792,
            "unit": "ns/iter",
            "extra": "iterations: 12690\ncpu: 55483.99527186718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84658.82756535169,
            "unit": "ns/iter",
            "extra": "iterations: 8264\ncpu: 84659.00290416325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2965.4963053664237,
            "unit": "ns/iter",
            "extra": "iterations: 235206\ncpu: 2965.4485854952504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14999.550445769888,
            "unit": "ns/iter",
            "extra": "iterations: 46773\ncpu: 14999.463365617125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11977.635744244926,
            "unit": "ns/iter",
            "extra": "iterations: 58415\ncpu: 11977.317469828076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11941.935589556359,
            "unit": "ns/iter",
            "extra": "iterations: 58298\ncpu: 11941.768156712033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12378.210107180856,
            "unit": "ns/iter",
            "extra": "iterations: 56633\ncpu: 12378.019882400758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26691.563682030544,
            "unit": "ns/iter",
            "extra": "iterations: 26279\ncpu: 26691.080330301884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97302.56863287957,
            "unit": "ns/iter",
            "extra": "iterations: 7205\ncpu: 97300.19430950814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83426.48929298786,
            "unit": "ns/iter",
            "extra": "iterations: 8359\ncpu: 83423.72293336588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82005.9115734723,
            "unit": "ns/iter",
            "extra": "iterations: 8459\ncpu: 82006.17094219246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82011.19175499854,
            "unit": "ns/iter",
            "extra": "iterations: 8490\ncpu: 82009.59952885647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55003.73805420718,
            "unit": "ns/iter",
            "extra": "iterations: 12766\ncpu: 55002.77299075769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83010.9645398538,
            "unit": "ns/iter",
            "extra": "iterations: 8432\ncpu: 83009.42836812086 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}