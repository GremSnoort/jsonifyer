window.BENCHMARK_DATA = {
  "lastUpdate": 1702492952291,
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
      }
    ]
  }
}