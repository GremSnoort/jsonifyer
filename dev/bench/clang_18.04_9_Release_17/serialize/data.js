window.BENCHMARK_DATA = {
  "lastUpdate": 1705575653163,
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
      }
    ]
  }
}